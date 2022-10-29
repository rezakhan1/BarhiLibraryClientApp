import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      
      catchError(error =>{
        debugger
        if(error){
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modalStateErrors.push(error.error.errors[key])
                  }
                }
                throw modalStateErrors.flat();
              } else {
                Swal.fire(  
                  error.status,  
                  'Bad Reques',  
                  'warning'  
                ) 
               
              }
              break;
            case 401:
              Swal.fire(  
                error.status,  
                'Bad Reques',  
                'warning'  
              ) 
              break;
            case 404:
              Swal.fire(  
                error.status,  
                'Not Found',  
                'warning'  
              ) 
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}}
              Swal.fire(  
                error.status,  
                'Bad Reques',  
                'warning'  
              ) 
              break;
            default:
              Swal.fire(  
                error.status,  
                'Something unexpected went wrong',  
                'warning'  
              ) 
             // this.toastr.error('Something unexpected went wrong');
              console.log(error);
              break;
          }
        }
        return throwError(error)
      }
      )
    )
  }
}
