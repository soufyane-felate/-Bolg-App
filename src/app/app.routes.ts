import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { CrudPostComponent } from './pages/crud-post/crud-post.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'login', component: LoginComponent },
  {path:'crud-post', component: CrudPostComponent},
  {path:'home', component: HomeComponent},
  {path:'dashboard',component: DashboardComponent}

];
