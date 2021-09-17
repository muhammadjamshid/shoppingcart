import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  username: string | undefined="";
  userfound:boolean=false;
  constructor(private cartService : CartService,private apiservice:ApiService) { }

  ngOnInit(): void {

    if(this.apiservice.registered())
    {
      this.username=localStorage.getItem('username')?.toString();
      this.userfound=true;
    }

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  
}
