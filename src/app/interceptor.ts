import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  href: string;
  constructor( private router: Router){}
 
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Session', '123456789'),
    })

    return next.handle(authReq)
      .pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse)
              console.log('Server response');
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status == 401)
                this.router.navigateByUrl('/login');
                localStorage.clear();                 
            }
          }
        )
      )
  }
}