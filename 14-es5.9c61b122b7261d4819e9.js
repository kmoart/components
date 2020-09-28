!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Qz6":function(n,r,o){"use strict";o.r(r),o.d(r,"AlertPageModule",(function(){return v}));var a,c,s,i=o("ofXK"),l=o("3Pt+"),u=o("TEn/"),f=o("tyNb"),p=o("mrSG"),b=o("fXoL"),m=o("2MiI"),d=[{path:"",component:(a=function(){function n(t){e(this,n),this.alertCtlr=t}var r,o,a;return r=n,(o=[{key:"ngOnInit",value:function(){}},{key:"presentAlert",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtlr.create({cssClass:"my-custom-class",header:"Alert",subHeader:"Subtitle",message:"This is an alert message.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(e){console.log("Cancelar")}},{text:"Ok",cssClass:"secondary",handler:function(e){console.log("Bot\xf3n OK")}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"presentAlertPrompt",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtlr.create({cssClass:"my-custom-class",header:"Prompt!",inputs:[{name:"txtNombre",type:"text",placeholder:"Nombre"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Ok",handler:function(e){console.log("Confirm Ok",e),n.titulo=e.txtNombre}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}}])&&t(r.prototype,o),a&&t(r,a),n}(),a.\u0275fac=function(e){return new(e||a)(b.Hb(u.b))},a.\u0275cmp=b.Bb({type:a,selectors:[["app-alert"]],decls:6,vars:1,consts:[[3,"titulo"],["expand","full","color","primary",3,"click"],["expand","full","color","secondary",3,"click"]],template:function(e,t){1&e&&(b.Ib(0,"app-header",0),b.Kb(1,"ion-content"),b.Kb(2,"ion-button",1),b.Sb("click",(function(){return t.presentAlert()})),b.ic(3," Mostrar Alerta "),b.Jb(),b.Kb(4,"ion-button",2),b.Sb("click",(function(){return t.presentAlertPrompt()})),b.ic(5," Mostrar Input "),b.Jb(),b.Jb()),2&e&&b.ac("titulo",t.titulo||"Alert Page")},directives:[m.a,u.r,u.h],styles:[""]}),a)}],h=((c=function t(){e(this,t)}).\u0275mod=b.Fb({type:c}),c.\u0275inj=b.Eb({factory:function(e){return new(e||c)},imports:[[f.i.forChild(d)],f.i]}),c),y=o("j1ZV"),v=((s=function t(){e(this,t)}).\u0275mod=b.Fb({type:s}),s.\u0275inj=b.Eb({factory:function(e){return new(e||s)},imports:[[i.c,l.a,u.ib,h,y.a]]}),s)}}])}();