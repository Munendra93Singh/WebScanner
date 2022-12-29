import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular'
import { DataHandlerService } from '../data-handler.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[DataHandlerService]
})
export class navbarComponent implements OnInit {
  title = 'Micosoft-Authentication';
  allData? : any[];
  prfilename: any;
  profilePic ?: SafeResourceUrl;
 
  constructor(private _msalService:MsalService, private route: Router,private dataloginservice: DataHandlerService, private _domsanitizer:DomSanitizer){}

  ngOnInit(): void {
    this._msalService.instance.handleRedirectPromise().then(
      res =>{
        if(res != null && res.account != null){
          this._msalService.instance.setActiveAccount(res.account)
        }
      }
    )
    this.getprofile();
    this.getprofileimg();
  }
  isLoggedIn(){
    return this.dataloginservice.isLoggedIn();
  }
  login(){
    this.dataloginservice.login();
    //this.route.navigateByUrl('/home');
  }
  logout(){
    // setTimeout(()=>{
    //   this._msalService.logout();
    // },200)
    // this.route.navigateByUrl('');
    // this._msalService.logout();
    // setTimeout(()=>{
    //   this.route.navigateByUrl('');
    // },500)
    this.dataloginservice.logout();
    return 
    
  }
  getprofile(){
    this.dataloginservice.getAllProfileData().subscribe((res:any)=>{
      this.prfilename = res
    });
   }
  
   getprofileimg(){
    debugger
    this.dataloginservice.getImg().subscribe(res  =>{
      var UrlCreate = window.URL || window.webkitURL
      this.profilePic=this._domsanitizer.bypassSecurityTrustResourceUrl(UrlCreate.createObjectURL(res));
    })
   }
}


