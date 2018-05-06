import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/api/dashbaord.service';
import { BookService } from '../../shared/services/api/books.service';
import { PedidoService } from '../../shared/services/api/pedidos.service';
import { CommentService } from '../../shared/services/api/comments.service';
import { UserService } from '../../shared/services/api/users.service';
import { Book } from "../../shared/models/book";
import { Subscription } from "rxjs/Subscription";
import { DoCheck, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private totalMoney: number;
  private totalUsers: number;
  private totalOrders: number;
  private lastOrders: Array<any>;
  private lastBooks: Array<Book>;
  private lastRegisteredUsers: Array<any>;
  private lastCreatedComments: Array<any>;
  

  constructor(private dashboardService: DashboardService,private bookService: BookService, private pedidoService: PedidoService, private commentService: CommentService, private userService: UserService) {
    this.totalMoney = 0;
    this.totalOrders = 0;
    this.totalUsers = 0;
    this.lastOrders = [];
    this.lastBooks = [];
    this.lastRegisteredUsers = [];
    this.lastCreatedComments = [];
  }

  ngOnInit() {
    this.bookService.getAll().subscribe(
      res =>{
        this.lastBooks = res;
      },
      error => {
        console.log(error);
      });
      this.pedidoService.getAll().subscribe(
        res =>{
          this.lastOrders = res;
        },
        error => {
          console.log(error);
      });
      this.commentService.getAll().subscribe(
        res =>{
          this.lastCreatedComments = res;
        },
        error => {
          console.log(error);
      });
      this.userService.getAll().subscribe(
        res =>{
          this.lastRegisteredUsers = res;
        },
        error => {
          console.log(error);
      });
      this.dashboardService.getDashboardInfo().subscribe(
        res => {
          this.totalMoney = res.totalMoney;
          this.totalUsers = res.totalUsers;
          this.totalOrders = res.totalOrders;
        },
        error => {
          console.log(error);
        }
      );
  }
}
