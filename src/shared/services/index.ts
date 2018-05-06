import { ApiService } from "./api/api.service";
import { BookService } from "./api/books.service";
import { CommentService } from "./api/comments.service";
import { UserService } from "./api/users.service";
import { PedidoService } from "./api/pedidos.service";
import { AuthorService } from "./api/authors.service";

export const SHARED_SERVICES = [
    ApiService,BookService,CommentService,UserService,PedidoService,AuthorService
];