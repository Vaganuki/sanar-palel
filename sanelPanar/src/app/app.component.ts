import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LinkModel} from './shared/components/layout/nav-bar/models/link.model';
import {NavBarComponent} from './shared/components/layout/nav-bar/nav-bar.component';
import {Button} from 'primeng/button';
import {AFormComponent} from './components/a-form/a-form.component';
import {Splitter} from 'primeng/splitter';
import {HomeComponent} from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, Button, AFormComponent, Splitter, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sanelPanar';
  homeLinks: LinkModel[] = [
    {
      url: "/",
      name: "Home"
    }, {
      url: "/about",
      name: "A propos"
    },
    {
      url: "/book/create",
      name: "Create Book"
    }
  ];
}
