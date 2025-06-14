import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { CrudPostComponent } from './pages/crud-post/crud-post.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,  canActivate : [AuthGuard]},
 
  { path: 'posts', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new', component: CrudPostComponent },
  { path: 'details/:id', loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent) },
  { path: '**', redirectTo: 'home' }
];
