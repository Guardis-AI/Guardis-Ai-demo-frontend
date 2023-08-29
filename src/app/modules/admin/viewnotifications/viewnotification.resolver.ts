import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { StreamService } from 'app/services/stream.service';

@Injectable({
  providedIn: 'root'
})
export class ViewnotificationResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }


}


@Injectable({
  providedIn: 'root'
})
export class NotificationResolver implements Resolve<boolean> {
  constructor(private _streamService: StreamService) {}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any> {
    const json = {"p_user_id":localStorage.getItem('userId'),"p_device_token":"","p_device_type":"","p_device_id":"","login_user_id":localStorage.getItem('userId'),"p_notification_log_id":"","p_read_flag":"N"}
     const data = this._streamService.getNotificationList(json);
    console.log(data) 
   return this._streamService.getNotificationList(json);;
  }
}