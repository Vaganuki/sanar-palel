import {Component, inject} from '@angular/core';
import {Splitter} from "primeng/splitter";
import {Button} from 'primeng/button';
import {ObjectsComponent} from '../objects/objects.component';
import {GraphGlobalUsageComponent} from '../graph-global-usage/graph-global-usage.component';
import {Card} from 'primeng/card';
import {RouterLink, Router, RouterOutlet} from '@angular/router';
import {NavBarComponent} from '../layout/nav-bar/nav-bar.component';
import {LinkModel} from '../layout/nav-bar/models/link.model';

@Component({
  selector: 'app-home',
  imports: [
    Splitter,
    Button,
    ObjectsComponent,
    GraphGlobalUsageComponent,
    Card,
    RouterLink,
    NavBarComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  homeLinks: LinkModel[] = [
    {
      url: "/",
      name: "Accueil"
    },
  ];

  private readonly _router = inject(Router)

  constructor() {}

  redirect(){
    this._router.navigate(['/estimation']).then();
  }


}
