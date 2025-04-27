import { Component } from '@angular/core';
import { PostService } from '../../services/post-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crud-post.component.html',
  styleUrl: './crud-post.component.css',
})
export class CrudPostComponent {
  post = {
    title: '',
    image: '',
    description: '',
    date:new Date(),
    categorie:''

  };

  constructor(private postService: PostService ) {}

  onSubmit() {
    this.postService.createPost(this.post).subscribe(
      (response) => {
        console.log('Post envoye avec succes', response);
      },
      (error) => {
        console.error("Erreur lors de l'envoi du post", error);
      }
    );
  }
}
