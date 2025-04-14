import {Component, input} from '@angular/core';
// import {RouterLink} from '@angular/router';
import {LinkModel} from './models/link.model';
import { MenubarModule} from 'primeng/menubar';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    MenubarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  readonly links = input.required<LinkModel[]>();

}
