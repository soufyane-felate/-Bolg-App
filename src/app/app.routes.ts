import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'login', component: LoginComponent },

];
