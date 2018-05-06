import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../shared/services/api/comments.service';
import { Comment } from '../../shared/models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentList: Array<Comment>

  constructor(private commentsService: CommentService) {
    this.commentList = new Array<Comment>();
  }

  ngOnInit() {
    this.commentsService.getAll().subscribe(res => {
      this.commentList = res;
    },error => {
      console.log(error);
    });
  }

  changeStatus(commentId,commentAuthor,commentValidated) {
    let confirmationMessage = "¿Desea validar el comentario de " + commentAuthor + "?";
    if(commentValidated) {
      confirmationMessage = "¿Desea invalidar el comentario de " + commentAuthor + "?";
    }
    let confirmation = confirm(confirmationMessage);
    if(confirmation) {
      this.commentsService.approve(commentId,{validado: !commentValidated}).subscribe(res => {
        console.log(res);
      });
    }
  }

  delete(commentId,commentAuthor) {
    let confirmationMessage = confirm("¿Desea eliminar el comentario de "+ commentAuthor+"?");
    if(confirmationMessage)
    {
      this.commentsService.delete(commentId).subscribe(res => { console.log(res); });
    }    
  }
}
