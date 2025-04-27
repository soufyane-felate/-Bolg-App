import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  postId: string | null = null;
  post: any;
  
  comments: any[] = []; 
  comment = {
    date: new Date(),
    articlComment: '',
    postId: ''
  };

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      this.postService.getPostById(this.postId).subscribe((data) => {
        this.post = data;
        if (this.post) {
          console.log(this.post.title, this.post.description);
        }
      });

      this.postService.getCommentsByPostId(this.postId).subscribe((data) => {
        this.comments = data;
      });
    }
  }

  onSubmit() {
    if (!this.postId) return;

    const newComment = {
      date: new Date(),
      articlComment: this.comment.articlComment,
      postId: this.postId
    };

    this.postService.createComment(newComment).subscribe(
      (response) => {
        console.log('Comment envoye avec succes', response);
        this.comments.push(response);
        this.comment.articlComment = ''; 
      },
      (error) => {
        console.error("Erreur lors de l'envoi du comment", error);
      }
    );
  }
}
