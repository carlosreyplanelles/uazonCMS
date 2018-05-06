import { Component } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { AppNavbarComponent} from './app-navbar/app-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() { }
}
