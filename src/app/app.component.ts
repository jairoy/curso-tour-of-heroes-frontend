import { Component} from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink:'/dashboard',
      toolTipText: 'Dashboard'
    },
    {
      icon: 'sports-martial-arts',
      routerLink:'/heroes',
      toolTipText: 'Heroes'
    }
  ] 
}
