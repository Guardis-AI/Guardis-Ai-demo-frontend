import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable,switchMap ,of} from 'rxjs';
const baseUrlApi = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class StreamService {
  
  constructor(private ht : HttpClient,) { }
  getPlayback(jsonData:any):Observable <any>{
    return this.ht.post(`${baseUrlApi}/api/getplayback`,jsonData)
  }
  getLiveStream(jsonData:any):Observable <any>{
    return this.ht.post(`${baseUrlApi}/api/live`,jsonData)
  }
 
  getuserdetails(){
    const url = `${baseUrlApi}/api/user/getuserdetails`;
    return this.ht.post<any>(url, {});
  }

  getNotificationList(jsonData:any):Observable <any>{
    const url = `${baseUrlApi}/api/noti/getnotilog`;
    return this.ht.post<any>(url, jsonData);
  }

  markReviewed(jsonData:any):Observable <any>{
    const url = `${baseUrlApi}/api/noti/updnotiread`;
    return this.ht.post<any>(url, jsonData);
  }
  getDeviceList(jsonData:any):Observable <any>{
    const url = `${baseUrlApi}/api/user/getdevicelist`;
    return this.ht.post<any>(url, jsonData);
  }
  
  createFolder(cfurl){
    return this.ht.get<any>(`${cfurl}create_folders`);
   }

  createHls(cfurl){
   return this.ht.get<any>(`${cfurl}create_hls`);
  }

}

