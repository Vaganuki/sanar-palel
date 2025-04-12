import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LinkModel} from './models/link.model';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  links = input.required<LinkModel[]>();

}
