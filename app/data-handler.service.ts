import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';


@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
 
  constructor(private _msalService: MsalService,private _httpClient:HttpClient) {}
  isLoggedIn():boolean{
    return this._msalService.instance.getActiveAccount() != null;
  }
  login() {
    this._msalService.loginRedirect();
  }
  logout() {
    this._msalService.logoutPopup();
  }
  getAllProfileData(){
   return this._httpClient.get("https://graph.microsoft.com/v1.0/me")
    
  }
  getImg () {
    return this._httpClient.get("https://graph.microsoft.com/v1.0/me/photo/$value", {responseType:'blob'})
    }
  getUsers(){
    return this._httpClient.get("https://graph.microsoft.com/v1.0/users")
  }
}
