import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { CrudPostComponent } from './pages/crud-post/crud-post.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: CrudPostComponent },
  { path: 'details/:id', loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent) },
];
