// src/app/app.routes.ts
import { Routes, CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from '../shared/services/authguard.service';
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import { LoginComponent } from './login/login.component';
import { AuthorsComponent } from '../app/authors/authors.component'
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CommentsComponent } from './comments/comments.component';
import { BooksComponent } from './books/books.component';
import {BooksAddComponent} from './books-add/books-add.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]  },  
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'autores',
    component: AuthorsComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'autoresAdd',
    component: AuthorsAddComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'autoresEdit/:id',
    component: AuthorsEditComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'comentarios',
    component: CommentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'libros',
    component: BooksComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'librosAdd',
    component: BooksAddComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];