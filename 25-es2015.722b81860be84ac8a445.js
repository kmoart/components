(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{uLFO:function(n,o,t){"use strict";t.r(o),t.d(o,"ModalPageModule",(function(){return h}));var i=t("ofXK"),r=t("3Pt+"),e=t("TEn/"),s=t("tyNb"),a=t("mrSG"),c=t("fXoL");let l=(()=>{class n{constructor(n){this.modalCtrl=n}ngOnInit(){}salirSinArgumentos(){this.modalCtrl.dismiss()}salirConArgumentos(){this.modalCtrl.dismiss({nombre:"Carolina",pais:"Estados Unidos"})}}return n.\u0275fac=function(o){return new(o||n)(c.Hb(e.mb))},n.\u0275cmp=c.Bb({type:n,selectors:[["app-modal-info"]],inputs:{nombre:"nombre",pais:"pais"},decls:9,vars:2,consts:[[1,"ion-no-border"],["text-capitalize",""],["color","primary","expand","full",3,"click"],["color","secondary","expand","full",3,"click"]],template:function(n,o){1&n&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title",1),c.ic(3),c.Jb(),c.Jb(),c.Jb(),c.Kb(4,"ion-content"),c.Kb(5,"ion-button",2),c.Sb("click",(function(){return o.salirSinArgumentos()})),c.ic(6," Salir sin argumentos "),c.Jb(),c.Kb(7,"ion-button",3),c.Sb("click",(function(){return o.salirConArgumentos()})),c.ic(8," Salir con argumentos "),c.Jb(),c.Jb()),2&n&&(c.xb(3),c.lc(" ",o.nombre," - ",o.pais," "))},directives:[e.y,e.hb,e.gb,e.r,e.h],styles:[""]}),n})();var b=t("2MiI");const u=[{path:"",component:(()=>{class n{constructor(n){this.modalCtrl=n}ngOnInit(){}abrirModal(){return Object(a.a)(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:l,componentProps:{nombre:"Camilo",pais:"Colombia"}});yield n.present();const{data:o}=yield n.onDidDismiss();console.log("Retorno del modal",o)}))}}return n.\u0275fac=function(o){return new(o||n)(c.Hb(e.mb))},n.\u0275cmp=c.Bb({type:n,selectors:[["app-modal"]],decls:6,vars:0,consts:[["titulo","Modal Page"],["expand","full",3,"click"]],template:function(n,o){1&n&&(c.Ib(0,"app-header",0),c.Kb(1,"ion-content"),c.Kb(2,"ion-button",1),c.Sb("click",(function(){return o.abrirModal()})),c.ic(3," Abrir Modal "),c.Jb(),c.Kb(4,"p"),c.ic(5," Camilo - Colombia "),c.Jb(),c.Jb())},directives:[b.a,e.r,e.h],styles:[""]}),n})()}];let d=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(o){return new(o||n)},imports:[[s.i.forChild(u)],s.i]}),n})();var m=t("j1ZV");const p=[{path:"",component:l}];let f=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(o){return new(o||n)},imports:[[s.i.forChild(p)],s.i]}),n})(),y=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(o){return new(o||n)},imports:[[i.c,r.a,e.ib,f]]}),n})(),h=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(o){return new(o||n)},imports:[[i.c,r.a,e.ib,d,m.a,y]]}),n})()}}]);