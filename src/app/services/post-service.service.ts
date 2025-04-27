import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';
  private baseApiUrl = 'http://localhost:3000/comments'; 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getCommentsByPostId(postId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseApiUrl}?postId=${postId}`);
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(this.baseApiUrl, comment);
  }
}
