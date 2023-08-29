import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable,switchMap ,of} from 'rxjs';
const baseUrlApi = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private ht : HttpClient) { }
  addUser(jsonData:any):Observable <any>{
    return this.ht.post(`${baseUrlApi}/api/user/insuser`,jsonData)
  }
  addDevice(jsonData:any):Observable <any>{
    return this.ht.post(`${baseUrlApi}/api/user/insuserdevice`,jsonData)
  }
  getCamTypes() {
    const url = `${baseUrlApi}/api/user/getcamtypes`;
    return this.ht.get<any>(url, {});
  }

  getRole(){
    return this.ht.get<any>(`${baseUrlApi}/api/user/getrole`, {});
  }


}
