"use strict";(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[905],{2905:(L,l,c)=>{c.r(l),c.d(l,{ProductsModule:()=>U});var a=c(8583),s=c(4330),m=c(1047),t=c(7716),f=c(6215);let g=(()=>{class e{constructor(){this.cartItemList=[],this.productList=new f.X([])}getProducts(){return this.productList.asObservable()}setProduct(n){this.cartItemList.push(...n),this.productList.next(n)}addtoCart(n){var o=this.cartItemList.findIndex(i=>i.id==n.id);if(-1!=o)return this.cartItemList[o].quantity=+this.cartItemList[o].quantity+1,this.productList.next(this.cartItemList),void this.getTotalPrice();this.cartItemList.push(n),this.productList.next(this.cartItemList),console.log(this.cartItemList),this.getTotalPrice()}getTotalPrice(){let n=0;return this.cartItemList.forEach(o=>{n+=o.total*o.quantity}),n}removeCartItem(n){this.cartItemList.map((o,i)=>{n.id===o.id&&this.cartItemList.splice(i,1)}),this.productList.next(this.cartItemList)}removeAllCart(){this.cartItemList=[],this.productList.next(this.cartItemList)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function C(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",21),t._uU(2),t.qZA(),t.TgZ(3,"td",22),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",23),t.qZA(),t.TgZ(7,"th",24),t._uU(8),t.qZA(),t.TgZ(9,"td",24),t._uU(10),t.qZA(),t.TgZ(11,"td",24),t._uU(12),t.qZA(),t.TgZ(13,"td"),t.TgZ(14,"i",25),t.NdJ("click",function(){const d=t.CHM(n).$implicit;return t.oxw(2).removeItem(d)}),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=r.$implicit,o=r.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.s9C("src",n.image,t.LSH),t.xp6(2),t.Oqu(n.price),t.xp6(2),t.Oqu(n.quantity),t.xp6(2),t.Oqu(n.total)}}function Z(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"table",4),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"th",5),t._uU(8,"Sr.No"),t.qZA(),t.TgZ(9,"th",5),t._uU(10,"Product Name"),t.qZA(),t.TgZ(11,"th",5),t._uU(12,"Product Image"),t.qZA(),t.TgZ(13,"th",5),t._uU(14,"Price"),t.qZA(),t.TgZ(15,"th",5),t._uU(16,"Quantity"),t.qZA(),t.TgZ(17,"th",5),t._uU(18,"Total"),t.qZA(),t.TgZ(19,"th",5),t._uU(20,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,C,15,6,"tr",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",7),t.TgZ(24,"div",8),t.TgZ(25,"h4",9),t.TgZ(26,"span",10),t._uU(27,"Your cart"),t.qZA(),t.TgZ(28,"span",11),t._uU(29),t.qZA(),t.qZA(),t.TgZ(30,"ul",12),t.TgZ(31,"li",13),t.TgZ(32,"div"),t.TgZ(33,"h6",14),t._uU(34,"No. of prodcts:"),t.qZA(),t.qZA(),t.TgZ(35,"span",10),t._uU(36),t.qZA(),t.qZA(),t.TgZ(37,"li",15),t.TgZ(38,"span"),t._uU(39,"Total (INR):"),t.qZA(),t.TgZ(40,"strong"),t._uU(41),t.qZA(),t.qZA(),t.TgZ(42,"li",16),t.TgZ(43,"div",17),t.TgZ(44,"div",18),t.TgZ(45,"button",19),t.NdJ("click",function(){return t.CHM(n),t.oxw().emptycart()}),t._uU(46,"Empty Cart"),t.qZA(),t.qZA(),t.TgZ(47,"div",18),t.TgZ(48,"button",20),t.NdJ("click",function(){return t.CHM(n),t.oxw().shopMore()}),t._uU(49,"Shop More"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(22),t.Q6J("ngForOf",n.products),t.xp6(7),t.Oqu(n.productscount),t.xp6(7),t.Oqu(n.productscount),t.xp6(5),t.hij(" \u20b9",n.grandTotal,"")}}function x(e,r){1&e&&(t.ynx(0),t.TgZ(1,"div",26),t.TgZ(2,"div",27),t.TgZ(3,"h5",28),t._uU(4,"My Cart"),t.qZA(),t.qZA(),t.TgZ(5,"div",29),t._UZ(6,"img",30),t.TgZ(7,"h4"),t._uU(8,"Your cart is empty!"),t.qZA(),t.TgZ(9,"h6"),t._uU(10,"Add item to it now"),t.qZA(),t.TgZ(11,"button",31),t._uU(12,"Shop Now"),t.qZA(),t.qZA(),t.qZA(),t.BQk())}let O=(()=>{class e{constructor(n,o){this.cartService=n,this.router=o,this.products=[]}ngOnInit(){this.cartService.getProducts().subscribe(n=>{this.products=n,this.productscount=n.length,this.grandTotal=this.cartService.getTotalPrice()})}removeItem(n){this.cartService.removeCartItem(n)}emptycart(){this.cartService.removeAllCart()}shopMore(){this.router.navigate(["/products/productlist"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-8","mt-5"],[1,"table","table-bordered","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"col-md-4","mt-3"],[1,"col-md-12","order-md-2","mb-4"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"text-muted"],[1,"badge","badge-secondary","badge-pill"],[1,"list-group","mb-3"],[1,"list-group-item","d-flex","justify-content-between","lh-condensed"],[1,"my-0"],[1,"list-group-item","d-flex","justify-content-between"],[1,"list-group-item","d-flex","justify-content-center"],[1,"row",2,"width","100%"],[1,"col-md-6"],[1,"btn","btn-warning","ul-buttons",3,"click"],[1,"btn","btn-secondary","ul-buttons",2,"float","right",3,"click"],["scope","row",2,"width","10%"],[2,"width","20%"],["alt","",2,"width","40%",3,"src"],[2,"width","10%"],[1,"fas","fa-trash-alt",2,"cursor","pointer",3,"click"],[1,"container"],[1,"card"],[1,"card-title"],[1,"center"],["src","https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90","alt",""],["routerLink","/products/productlist",1,"btn","btn-primary"]],template:function(n,o){1&n&&(t.YNc(0,Z,50,4,"ng-container",0),t.YNc(1,x,13,0,"ng-container",0)),2&n&&(t.Q6J("ngIf",0!=o.products.length),t.xp6(1),t.Q6J("ngIf",0==o.products.length))},directives:[a.O5,a.sg,s.rH],styles:[".card[_ngcontent-%COMP%]{height:60vh;margin:25px;padding:25px}.ul-buttons[_ngcontent-%COMP%]{font-size:12px}.center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{text-decoration:none;color:inherit;border:none;outline:none;height:162px;width:250px;margin:20px 0}h4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400}.center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:14px!important;margin-top:20px!important;font-weight:400;padding:12px 72px;border-radius:3px!important}"]}),e})();var p=c(9573),_=c(6795),u=c(3238);function P(e,r){}function v(e,r){if(1&e&&t.YNc(0,P,0,0,"ng-template",4),2&e){const n=t.oxw().$implicit;t.Q6J("ngTemplateOutlet",n.textOrTpl)}}function T(e,r){if(1&e&&t._uU(0),2&e){const n=t.oxw().$implicit;t.Oqu(n.textOrTpl)}}function b(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"ngb-toast",1),t.NdJ("hidden",function(){const d=t.CHM(n).$implicit;return t.oxw().toastService.remove(d)}),t.YNc(1,v,1,1,"ng-template",2),t.YNc(2,T,1,1,"ng-template",null,3,t.W1O),t.qZA()}if(2&e){const n=r.$implicit,o=t.MAs(3),i=t.oxw();t.Tol(n.classname),t.Q6J("autohide",!0)("delay",n.delay||5e3),t.xp6(1),t.Q6J("ngIf",i.isTemplate(n))("ngIfElse",o)}}let M=(()=>{class e{constructor(n){this.toastService=n}isTemplate(n){return n.textOrTpl instanceof t.Rgc}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-toasts"]],hostVars:2,hostBindings:function(n,o){2&n&&t.ekj("ngb-toasts",!0)},decls:1,vars:1,consts:[[3,"class","autohide","delay","hidden",4,"ngFor","ngForOf"],[3,"autohide","delay","hidden"],[3,"ngIf","ngIfElse"],["text",""],[3,"ngTemplateOutlet"]],template:function(n,o){1&n&&t.YNc(0,b,4,6,"ngb-toast",0),2&n&&t.Q6J("ngForOf",o.toastService.toasts)},directives:[a.sg,u.Iv,a.O5,a.tP],encapsulation:2}),e})(),y=(()=>{class e{transform(n){return console.log(n),n.length>20?n.substring(0,20)+"...":n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"trim",type:e,pure:!0}),e})();function A(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t._UZ(3,"img",6),t.qZA(),t.TgZ(4,"div",7),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"trim"),t.qZA(),t.qZA(),t.TgZ(8,"div",8),t._UZ(9,"a",9),t.TgZ(10,"div"),t.TgZ(11,"span",10),t._uU(12),t.qZA(),t.TgZ(13,"span",11),t.NdJ("click",function(){const d=t.CHM(n).$implicit;return t.oxw().addtocart(d)}),t._UZ(14,"i",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&e){const n=r.$implicit;t.xp6(3),t.s9C("src",n.image,t.LSH),t.xp6(3),t.Oqu(t.lcZ(7,3,n.title)),t.xp6(6),t.hij("\u20b9",n.price,"")}}let q=(()=>{class e{constructor(n,o,i){this.api=n,this.cartService=o,this.toastService=i,this.searchKey=""}ngOnInit(){this.api.getProduct().subscribe(n=>{this.productList=n,this.filterCategory=n,this.productList.forEach(o=>{("women's clothing"===o.category||"men's clothing"===o.category)&&(o.category="fashion"),Object.assign(o,{quantity:1,total:o.price})})})}addtocart(n){this.cartService.addtoCart(n),this.toastService.show("Product added to the cart!",{classname:"bg-success text-light",delay:1e3})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.s),t.Y36(g),t.Y36(_.k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-productlist"]],decls:6,vars:1,consts:[[1,"title-shop"],[1,"main","bd-grid"],[4,"ngFor","ngForOf"],["aria-live","polite","aria-atomic","true"],[1,"card"],[1,"card__img"],["alt","",3,"src"],[1,"card__name"],[1,"card__precis"],["href","",1,"card__icon"],[1,"card__preci","card__preci--now"],[1,"card__preci","card__preci--now",3,"click"],[1,"cart-icon","fas","fa-shopping-cart"]],template:function(n,o){1&n&&(t.TgZ(0,"h1",0),t.TgZ(1,"u"),t._uU(2,"SHOP NOW"),t.qZA(),t.qZA(),t.TgZ(3,"main",1),t.YNc(4,A,15,5,"ng-container",2),t.qZA(),t._UZ(5,"app-toasts",3)),2&n&&(t.xp6(4),t.Q6J("ngForOf",o.filterCategory))},directives:[a.sg,M],pipes:[y],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap";[_ngcontent-%COMP%]:root{--first-color: #E3F8FF;--second-color: #DCFAFB;--third-color: #FFE8DF;--accent-color: #FF5151;--dark-color: #161616}[_ngcontent-%COMP%]:root{--body-font: "Open Sans";--h1-font-size: 1.5rem;--h3-font-size: 1rem;--normal-font-size: .938rem;--smaller-font-size: .75rem}@media screen and (min-width: 768px){[_ngcontent-%COMP%]:root{--h1-font-size: 2rem;--normal-font-size: 1rem;--smaller-font-size: .813rem}}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}body[_ngcontent-%COMP%]{margin:2rem 0 0;background-color:#fff;color:var(--dark-color);font-family:var(--body-font)}h1[_ngcontent-%COMP%]{font-size:var(--h1-font-size)}img[_ngcontent-%COMP%]{max-width:70%;height:150px;margin-left:20%}a[_ngcontent-%COMP%]{text-decoration:none}.main[_ngcontent-%COMP%]{padding:2rem 0}.bd-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));max-width:1200px;margin-left:2.5rem;margin-right:2.5rem;align-items:center;grid-gap:2rem;gap:2rem}.title-shop[_ngcontent-%COMP%]{position:relative;margin:0 2.5rem;text-align:center;font-size:40px}.title-shop[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;width:72px;height:2px;background-color:var(--dark-color);margin-left:.25rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;padding:1.5rem 2rem;border-radius:1rem;overflow:hidden}article[_ngcontent-%COMP%]:nth-child(1){background-color:var(--first-color)}article[_ngcontent-%COMP%]:nth-child(2){background-color:var(--second-color)}article[_ngcontent-%COMP%]:nth-child(3){background-color:var(--third-color)}article[_ngcontent-%COMP%]:nth-child(4){background-color:var(--second-color)}.card__img[_ngcontent-%COMP%]{width:180px;height:auto;padding:3rem 0;transition:.5s}.card__name[_ngcontent-%COMP%]{position:absolute;left:-25%;top:0;width:3.5rem;height:100%;writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;background-color:#1d1b1b;color:#fff;font-weight:bold;transition:.5s}.card__icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--dark-color)}.card__icon[_ngcontent-%COMP%]:hover{color:var(--accent-color)}.cart-icon[_ngcontent-%COMP%]{cursor:pointer;font-size:18px}.card__precis[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;transition:.5s}.card__preci[_ngcontent-%COMP%]{display:block;text-align:center}.card__preci--before[_ngcontent-%COMP%]{font-size:var(--smaller-font-size);color:var(--accent-color);margin-bottom:.25rem}.card__preci--now[_ngcontent-%COMP%]{font-size:var(--h3-font-size);font-weight:bold}.card[_ngcontent-%COMP%]:hover{box-shadow:0 .5rem 1rem #d1d9e6}.card[_ngcontent-%COMP%]:hover   .card__name[_ngcontent-%COMP%]{left:0}.card[_ngcontent-%COMP%]:hover   .card__img[_ngcontent-%COMP%]{transform:rotate(30deg);margin-left:3.5rem}.card[_ngcontent-%COMP%]:hover   .card__precis[_ngcontent-%COMP%]{margin-left:3.5rem;padding:0 1.5rem}@media screen and (min-width: 1200px){body[_ngcontent-%COMP%]{margin:3rem 0 0}.title-shop[_ngcontent-%COMP%]{margin:0 5rem}.bd-grid[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}}']}),e})();function w(e,r){if(1&e&&(t.TgZ(0,"li"),t.TgZ(1,"span",9),t._uU(2),t.qZA(),t._UZ(3,"i",10),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.username)}}let F=(()=>{class e{constructor(n,o){this.cartService=n,this.apiservice=o,this.totalItem=0,this.username="",this.userfound=!1}ngOnInit(){var n;this.apiservice.registered()&&(this.username=null===(n=localStorage.getItem("username"))||void 0===n?void 0:n.toString(),this.userfound=!0),this.cartService.getProducts().subscribe(o=>{this.totalItem=o.length})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g),t.Y36(p.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:15,vars:2,consts:[[1,"fitaihi_icn"],[1,"main_menu"],[1,"fitaihi_logo"],[1,"gold_header_rte_cnt"],[1,"gold_header_icons"],[4,"ngIf"],["routerLink","cart"],[1,"cart-icon","fas","fa-shopping-cart"],[1,"badge","bg-danger",2,"font-size","10px","border-radius","12px","line-height","1.3"],[2,"padding-right","10px"],["aria-hidden","true",1,"fa","fa-user"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"header"),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"h6"),t._uU(5,"My cart"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t.TgZ(8,"ul"),t.YNc(9,w,4,1,"li",5),t.TgZ(10,"li"),t.TgZ(11,"a",6),t._UZ(12,"i",7),t.TgZ(13,"div",8),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(9),t.Q6J("ngIf",o.userfound),t.xp6(5),t.Oqu(o.totalItem))},directives:[a.O5,s.yS],styles:[".form-control[_ngcontent-%COMP%]{border-radius:3px;width:600px;margin-left:20px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:10;right:59%;top:20px;color:#00f}.fitaihi_icn[_ngcontent-%COMP%]{width:100%;margin-left:auto;margin-right:auto;padding:0 3%;background:antiquewhite;height:75px}.main_menu[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.fitaihi_logo[_ngcontent-%COMP%]{margin-top:15px}.gold_header_rte_cnt[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-top:20px}.gold_header_icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;padding:3px 5px;color:#927c4a;text-decoration:none}.gold_header_icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#927c4a;text-decoration:none}"]}),e})();const z=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:2,vars:0,template:function(n,o){1&n&&(t._UZ(0,"app-header"),t._UZ(1,"router-outlet"))},directives:[F,s.lC],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap";[_ngcontent-%COMP%]:root{--first-color: #E3F8FF;--second-color: #DCFAFB;--third-color: #FFE8DF;--accent-color: #FF5151;--dark-color: #161616}[_ngcontent-%COMP%]:root{--body-font: "Open Sans";--h1-font-size: 1.5rem;--h3-font-size: 1rem;--normal-font-size: .938rem;--smaller-font-size: .75rem}@media screen and (min-width: 768px){[_ngcontent-%COMP%]:root{--h1-font-size: 2rem;--normal-font-size: 1rem;--smaller-font-size: .813rem}}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}body[_ngcontent-%COMP%]{margin:2rem 0 0;background-color:#fff;color:var(--dark-color);font-family:var(--body-font)}h1[_ngcontent-%COMP%]{font-size:var(--h1-font-size)}img[_ngcontent-%COMP%]{max-width:70%;height:150px;margin-left:20%}a[_ngcontent-%COMP%]{text-decoration:none}.main[_ngcontent-%COMP%]{padding:2rem 0}.bd-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));max-width:1200px;margin-left:2.5rem;margin-right:2.5rem;align-items:center;grid-gap:2rem;gap:2rem}.title-shop[_ngcontent-%COMP%]{position:relative;margin:0 2.5rem;text-align:center;font-size:40px}.title-shop[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;width:72px;height:2px;background-color:var(--dark-color);margin-left:.25rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;padding:1.5rem 2rem;border-radius:1rem;overflow:hidden}article[_ngcontent-%COMP%]:nth-child(1){background-color:var(--first-color)}article[_ngcontent-%COMP%]:nth-child(2){background-color:var(--second-color)}article[_ngcontent-%COMP%]:nth-child(3){background-color:var(--third-color)}article[_ngcontent-%COMP%]:nth-child(4){background-color:var(--second-color)}.card__img[_ngcontent-%COMP%]{width:180px;height:auto;padding:3rem 0;transition:.5s}.card__name[_ngcontent-%COMP%]{position:absolute;left:-25%;top:0;width:3.5rem;height:100%;writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;background-color:#1d1b1b;color:#fff;font-weight:bold;transition:.5s}.card__icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--dark-color)}.card__icon[_ngcontent-%COMP%]:hover{color:var(--accent-color)}.cart-icon[_ngcontent-%COMP%]{cursor:pointer;font-size:18px}.card__precis[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;transition:.5s}.card__preci[_ngcontent-%COMP%]{display:block;text-align:center}.card__preci--before[_ngcontent-%COMP%]{font-size:var(--smaller-font-size);color:var(--accent-color);margin-bottom:.25rem}.card__preci--now[_ngcontent-%COMP%]{font-size:var(--h3-font-size);font-weight:bold}.card[_ngcontent-%COMP%]:hover{box-shadow:0 .5rem 1rem #d1d9e6}.card[_ngcontent-%COMP%]:hover   .card__name[_ngcontent-%COMP%]{left:0}.card[_ngcontent-%COMP%]:hover   .card__img[_ngcontent-%COMP%]{transform:rotate(30deg);margin-left:3.5rem}.card[_ngcontent-%COMP%]:hover   .card__precis[_ngcontent-%COMP%]{margin-left:3.5rem;padding:0 1.5rem}@media screen and (min-width: 1200px){body[_ngcontent-%COMP%]{margin:3rem 0 0}.title-shop[_ngcontent-%COMP%]{margin:0 5rem}.bd-grid[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}}']}),e})(),children:[{path:"productlist",component:q,canActivate:[m.e]},{path:"cart",component:O,canActivate:[m.e]}]}];let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(z)],s.Bz]}),e})();var k=c(4466);let U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,I,k.m,u.IJ]]}),e})()}}]);