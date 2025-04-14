import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes('jeffwars')) return next(req)
    .pipe(
      finalize(() => {
          // faire disparaitre le loader
          loaderService.stopLoading();
        }
      ));
  const loaderService = inject(LoaderService);
  //faire apparaitre le loader
  loaderService.startLoading();
  return next(req)
    .pipe(
      delay(500),
      finalize(() => {
          // faire disparaitre le loader
          loaderService.stopLoading();
        }
      ));
};
