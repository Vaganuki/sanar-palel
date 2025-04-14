import {Component, inject} from '@angular/core';
import {LoaderService} from './interceptor/loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  readonly loaderService = inject(LoaderService);

}
