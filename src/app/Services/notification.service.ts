import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 loginNotification=false;
  constructor() { }
  SetLoginNotification(notification:boolean){ 
    this.loginNotification=notification;
  }
  GetLoginNotification(){ 
   return this.loginNotification;
  }
}
