"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[783],{1783:(M,a,r)=>{r.r(a),r.d(a,{ViewnotificationsModule:()=>b});var c=r(6895),d=r(2510),u=r(7579),t=r(4650),l=r(6935),f=r(1481);function g(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",32)(2,"video",33),t._UZ(3,"source",25),t._uU(4," Browser not supported "),t.qZA(),t.TgZ(5,"div",34),t._uU(6," Camera 1 / Port 554 "),t.TgZ(7,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.playHardcodedVideo("assets/demo-videos/camera5-clip.mp4"))}),t.TgZ(8,"button",36)(9,"div",37),t._UZ(10,"img",38),t.qZA()()()()(),t.TgZ(11,"div",32)(12,"video",33),t._UZ(13,"source",39),t._uU(14," Browser not supported "),t.qZA(),t.TgZ(15,"div",34),t._uU(16," Camera 3 / Port 554 "),t.TgZ(17,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.playHardcodedVideo("assets/demo-videos/cashier_20230529_10_15_34_468_theft.mp4"))}),t.TgZ(18,"button",36)(19,"div",37),t._UZ(20,"img",38),t.qZA()()()()(),t.TgZ(21,"div",32)(22,"video",33),t._UZ(23,"source",40),t._uU(24," Browser not supported "),t.qZA(),t.TgZ(25,"div",34),t._uU(26," Camera 2 / Port 554 "),t.TgZ(27,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.playHardcodedVideo("assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4"))}),t.TgZ(28,"button",36)(29,"div",37),t._UZ(30,"img",38),t.qZA()()()()(),t.TgZ(31,"div",32)(32,"video",33),t._UZ(33,"source",41),t._uU(34," Browser not supported "),t.qZA(),t.TgZ(35,"div",34),t._uU(36," Camera 4 / Port 5554 "),t.TgZ(37,"button",35),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.playHardcodedVideo("assets/demo-videos/corner_20230529_10_23_01_878_theft.mp4"))}),t.TgZ(38,"button",36)(39,"div",37),t._UZ(40,"img",38),t.qZA()()()()()()}}const m=function(){return["/user"]},h=function(){return["/live"]},v=function(){return["/playback"]},_=function(){return["/viewnotifications"]};let p=(()=>{class o{constructor(e,i,n,k,Z,C){this._streamService=e,this.sanitizer=i,this._router=n,this.route=k,this.activatedRoute=Z,this.el=C,this.detailid="",this.cfurl=localStorage.getItem("cfUrl"),this.sidebarShow=!0,this.vdata={videolink:""},this.fileUrl="https://guardisai.knstek.com/",this.notificationlist=[{notification_log_id:"1",filepath:"src/assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4",filename:"cashier22_20230608_16_23_47_713_theft.mp4"}],this.currentRoute="",this.NotiLogId="",this.Notivideo="",this._unsubscribeAll=new u.x,this.player=videojs.getPlayers()}ngOnInit(){}ngAfterViewInit(){}sanitize(e){return this.sanitizer.bypassSecurityTrustUrl(e)}playClip(e){this.player=videojs(document.getElementById("sxmvideo")),""!=e&&(this.selNoti=this.notificationlist.find(n=>n.notification_log_id==e),this.selNoti&&(this.Notivideo=this.cfurl+"get_video?path="+this.selNoti.filepath+"&filename="+this.selNoti.filename,this.Notivideo="src/assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4",console.log("Notivideo"),console.log(this.Notivideo),this.vdata={videolink:this.Notivideo},this.player.src({src:this.Notivideo})))}playHardcodedVideo(e){this.el.nativeElement.querySelector("video").src=e}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.G),t.Y36(f.H7),t.Y36(d.F0),t.Y36(d.gz),t.Y36(d.gz),t.Y36(t.SBq))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-viewnotifications"]],decls:46,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0","mr-4"],[1,"flex","flex-col","bg-[#26272F]","text-center","rounded-xl","h-160","m-4","p-2","mr-0"],[1,"w-24","p-1","mt-4","ng-tns-c42-0"],["src","assets/images/login/logoG.png","alt","Logo image"],[1,"text-white","hover:underline","items-center","pt-4","pb-4",3,"routerLink"],[1,"flex","justify-center"],[1,"w-6"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2"],["d","M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c.996.608 2.296.07 2.572-1.065Z"],["d","M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"],[1,"text-white","hover:underline","pt-4","pb-4",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","fit","","height","100%","width","100%","preserveAspectRatio","xMidYMid meet","focusable","false"],["fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 12a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"text-white","hover:underline","pt-4","pb-4","bg-white/20",3,"routerLink"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"],[1,"md:flex","md:justify-start","w-2/3","md:h-100","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card","pl-10","pt-5","flex","flex-col"],[1,"text-xl","font-medium","pb-5"],[1,"w-full","max-w-full","sm:w-full","mx-auto","sm:mx-0"],[1,"flex-col","sm:w-full","md:w-full","lg:w-full"],[2,"box-shadow","0px 16px 0px #9ca3af","border-radius","40px"],[2,"box-shadow","0px 9px 0px #6b7280","border-radius","30px"],["controls","","autoplay","",1,"video-js","vjs-default-skin","sm:w-full","md:w-full","lg:w-full",2,"height","65vh","border-radius","20px"],["src","assets/demo-videos/camera5-clip.mp4","type","video/mp4"],[1,"sidebar-slider","w-1/5"],["mat-dialog-close","",1,"sidebar-close",2,"padding-right","290px","background-color","#26272f","height","80px","border-radius","60px",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M8.25 4.5l7.5 7.5-7.5 7.5"],[1,"relative","w-full","justify-center","overflow-scroll","dark:border-l","pl-3"],[4,"ngFor","ngForOf"],[1,"flex","w-full","justify-center","mt-4"],["data-setup",'{"liveui": true}',"id","playbkvideo_1",1,"video-js","vjs-default-skin","sm:w-full","md:w-full","lg:w-full",2,"border-radius","15px","width","200px","height","72px"],[1,"text-[12px]","pl-1","text-white","w-full","playdiv","my-1","p-2"],[1,"btn","btn-warning",2,"float","right",3,"click"],["title","Click Here",1,"w-7","h-7","rounded-full","focus:outline-none"],[1,"w-full"],["src","assets/images/logo/button.png"],["src","assets/demo-videos/cashier_20230529_10_15_34_468_theft.mp4","type","video/mp4"],["src","assets/demo-videos/cashier22_20230608_16_23_47_713_theft.mp4","type","video/mp4"],["src","assets/demo-videos/corner_20230529_10_23_01_878_theft.mp4","type","video/mp4"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"a",4)(5,"div",5)(6,"div",6),t.O4$(),t.TgZ(7,"svg",7)(8,"g",8),t._UZ(9,"path",9)(10,"path",10),t.qZA()()()(),t._uU(11," Settings "),t.qZA(),t.kcU(),t.TgZ(12,"a",11)(13,"div",5)(14,"div",6),t.O4$(),t.TgZ(15,"svg",12),t._UZ(16,"path",13),t.qZA()()(),t._uU(17," Live "),t.qZA(),t.kcU(),t.TgZ(18,"a",4)(19,"div",5)(20,"div",6),t.O4$(),t.TgZ(21,"svg",12),t._UZ(22,"path",14)(23,"path",15),t.qZA()()(),t._uU(24," Playback "),t.qZA(),t.kcU(),t.TgZ(25,"a",16)(26,"div",5)(27,"div",6),t.O4$(),t.TgZ(28,"svg",12),t._UZ(29,"path",17),t.qZA()()(),t._uU(30," Notifications "),t.qZA()(),t.kcU(),t.TgZ(31,"div",18)(32,"span",19),t._uU(33,"Welcome Guest!"),t.qZA(),t.TgZ(34,"div",20)(35,"div",21)(36,"div",22)(37,"div",23)(38,"video",24),t._UZ(39,"source",25),t.qZA()()()()()(),t.TgZ(40,"div",26)(41,"button",27),t.NdJ("click",function(){return i.sidebarShow=!i.sidebarShow}),t.O4$(),t.TgZ(42,"svg",28),t._UZ(43,"path",29),t.qZA()(),t.kcU(),t.TgZ(44,"div",30),t.YNc(45,g,41,0,"div",31),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("routerLink",t.DdM(7,m)),t.xp6(8),t.Q6J("routerLink",t.DdM(8,h)),t.xp6(6),t.Q6J("routerLink",t.DdM(9,v)),t.xp6(7),t.Q6J("routerLink",t.DdM(10,_)),t.xp6(15),t.ekj("sidebar-slide-in",i.sidebarShow),t.xp6(5),t.Q6J("ngForOf",i.notificationlist))},dependencies:[c.sg,d.yS],styles:["video[_ngcontent-%COMP%]{object-fit:fill}.highlight[_ngcontent-%COMP%]{background-color:#d3d3d3}table.custActivetb[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.gap-4[_ngcontent-%COMP%]{gap:1rem}.mat-tooltip[_ngcontent-%COMP%]{white-space:pre-line!important}*[_ngcontent-%COMP%]{box-sizing:border-box;font-size:12px}.sidebar-opener[_ngcontent-%COMP%]{cursor:pointer}.sidebar-slider[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;background-color:#26272f;transform:translate(100%);transition:ease-in-out .3s transform;width:300px;height:full;border-radius:10px;border:solid 1px #cbd5e1;z-index:50}.sidebar-slider.sidebar-slide-in[_ngcontent-%COMP%]{transform:translate(0);transition:ease-in-out .6s transform}.sidebar-close[_ngcontent-%COMP%]{position:fixed;top:.5;right:0;color:#cbd5e1;cursor:pointer;padding:5px;z-index:-10px}.sidebar-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;flex-direction:column;color:#000;font-size:16px;padding:16px;height:80%}p[_ngcontent-%COMP%]{font-family:Lato}.dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.md-drppicker[_ngcontent-%COMP%]{top:50px!important;left:-200px!important;width:600px!important;height:320px}.md-drppicker[_ngcontent-%COMP%]   .ranges[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:20px;height:30px;background:none;border:none;text-align:top;cursor:pointer}.md-drppicker[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{position:absolute;overflow:hidden;border-width:0;outline:none;padding:0 2px;cursor:pointer;border-radius:2px;box-shadow:0 1px 4px #0009;background-color:#3f51b5;color:#ecf0f1;transition:background-color .4s;height:auto;text-transform:uppercase;line-height:36px;border:none;width:100px;border:solid 1px #cbd5e1}.md-drppicker[_ngcontent-%COMP%]   .ranges[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;width:40%;background:none;border:none;text-align:left;cursor:pointer}.md-drppicker[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;box-sizing:border-box;font-size:12px}.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding-right:80px}.a[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{width:30px;height:17px}input[_ngcontent-%COMP%]{color-scheme:dark;padding-right:50px}.mat-icon-button[_ngcontent-%COMP%]{padding-top:10px!important}"],changeDetection:0}),o})();var w=r(4006);const x=[{path:"",component:p,resolve:{notilist:(()=>{class o{constructor(e){this._streamService=e}resolve(e,i){return null}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(l.G))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},children:[{path:":id",component:p}]}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(x),c.ez,w.u5]}),o})()}}]);