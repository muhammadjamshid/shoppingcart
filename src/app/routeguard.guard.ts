import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router:Router,private apiservice:ApiService)
  {

  }
  canActivate():boolean{

    if(this.apiservice.registered())
    {
      return true;

    }
    else{
      this.router.navigateByUrl('')    ;
      return false;
    }


  }
   
  
}
