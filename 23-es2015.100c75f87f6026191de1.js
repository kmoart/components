(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{MwvG:function(e,n,o){"use strict";o.r(n),o.d(n,"ListReorderPageModule",(function(){return u}));var r=o("ofXK"),t=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),c=o("fXoL"),a=o("2MiI");function l(e,n){if(1&e&&(c.Kb(0,"ion-item"),c.Kb(1,"ion-label"),c.ic(2),c.Jb(),c.Ib(3,"ion-reorder",4),c.Jb()),2&e){const e=n.$implicit;c.xb(2),c.jc(e)}}const b=[{path:"",component:(()=>{class e{constructor(){this.personajes=["Aquaman","Superman","Batman","flash","Maravilla"]}ngOnInit(){}reorder(e){const n=this.personajes.splice(e.detail.from,1)[0];this.personajes.splice(e.detail.to,0,n),e.detail.complete()}onClick(){console.log(this.personajes)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-list-reorder"]],decls:7,vars:2,consts:[["titulo","list-reorder"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf"],["expand","full",3,"click"],["slot","end"]],template:function(e,n){1&e&&(c.Ib(0,"app-header",0),c.Kb(1,"ion-content"),c.Kb(2,"ion-list"),c.Kb(3,"ion-reorder-group",1),c.Sb("ionItemReorder",(function(e){return n.reorder(e)})),c.hc(4,l,4,1,"ion-item",2),c.Jb(),c.Jb(),c.Kb(5,"ion-button",3),c.Sb("click",(function(){return n.onClick()})),c.ic(6," Guardar "),c.Jb(),c.Jb()),2&e&&(c.xb(3),c.ac("disabled",!1),c.xb(1),c.ac("ngForOf",n.personajes))},directives:[a.a,i.r,i.J,i.T,r.j,i.h,i.E,i.I,i.S],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(n){return new(n||e)},imports:[[s.i.forChild(b)],s.i]}),e})();var d=o("j1ZV");let u=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(n){return new(n||e)},imports:[[r.c,t.a,i.ib,p,d.a]]}),e})()}}]);