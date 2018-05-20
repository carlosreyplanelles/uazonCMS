import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SharedModule } from "../shared/shared.module";
import { ApiService } from '../shared/services/api/api.service';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JwtHelperService,JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from '../shared/services/authguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTES } from '../app/app.routes';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsAddComponent } from './authors-add/authors-add.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';
import { BookService } from '../shared/services/api/books.service';
import { PedidoService } from '../shared/services/api/pedidos.service';
import { CommentService } from '../shared/services/api/comments.service';
import { UserService } from '../shared/services/api/users.service';
import { AuthorService } from '../shared/services/api/authors.service';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DashboardService } from '../shared/services/api/dashbaord.service';
import { CommentsComponent } from './comments/comments.component';
import { BooksComponent } from './books/books.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { UserComponent } from './user/user.component';
import { UsersAddComponent } from './user-add/user-add.component';
import { UsersEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    DashboardComponent,
    AuthorsComponent,
    AuthorsAddComponent,
    AuthorsEditComponent,
    ConfigurationComponent,
    CommentsComponent,
    BooksComponent,
    BooksAddComponent,
    BooksEditComponent,
    UserComponent,
    UsersAddComponent,
    UsersEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{ enableTracing: true }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: []
      }
    }),
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: ApiService,
      useFactory: (httpClient: HttpClient, jwtHelper: JwtHelperService) => {
        return new ApiService(httpClient,jwtHelper);
      },
      deps: [HttpClient,JwtHelperService]
    },
    {
      provide: AuthGuardService,
      useFactory: (apiService: ApiService,router: Router) => {
        return new AuthGuardService(apiService,router)
      },
      deps: [ApiService,Router]
    },
    {
      provide: BookService,
      useFactory: (apiService: ApiService) => {
        return new BookService(apiService);
      },
      deps: [ApiService]
    },
    {
      provide: PedidoService,
      useFactory: (apiService: ApiService) => {
        return new PedidoService(apiService);
      },
      deps: [ApiService]
    },
    {
      provide: CommentService,
      useFactory: (apiService: ApiService) => {
        return new CommentService(apiService);
      },
      deps: [ApiService]
    },
    {
      provide: UserService,
      useFactory: (apiService: ApiService) => {
        return new UserService(apiService);
      },
      deps: [ApiService]
    },
    {

      provide: AuthorService,
      useFactory: (apiService: ApiService) => {
        return new AuthorService(apiService);
      },
      deps: [ApiService]
    },
    {
      provide: DashboardService,
      useFactory: (apiService: ApiService) => {
        return new DashboardService(apiService);

      },
      deps: [ApiService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
