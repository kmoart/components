!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{w18g:function(t,o,i){"use strict";i.r(o),i.d(o,"ProgressBarPageModule",(function(){return d}));var r,a,c,s=i("ofXK"),b=i("3Pt+"),u=i("TEn/"),l=i("tyNb"),f=i("fXoL"),p=i("2MiI"),g=[{path:"",component:(r=function(){function t(){n(this,t),this.porcentaje=.15}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){}},{key:"cambioRango",value:function(n){console.log(n),this.porcentaje=n.detail.value/100}}])&&e(o.prototype,i),r&&e(o,r),t}(),r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=f.Bb({type:r,selectors:[["app-progress-bar"]],decls:10,vars:1,consts:[["titulo","ProgressBar Range"],[3,"value"],["min","1","max","100","pin","true","color","tertiary",3,"ionChange"],["slot","start"],["slot","end"]],template:function(n,e){1&n&&(f.Ib(0,"app-header",0),f.Kb(1,"ion-content"),f.Ib(2,"ion-progress-bar",1),f.Kb(3,"ion-list"),f.Kb(4,"ion-item"),f.Kb(5,"ion-range",2),f.Sb("ionChange",(function(n){return e.cambioRango(n)})),f.Kb(6,"ion-label",3),f.ic(7,"0"),f.Jb(),f.Kb(8,"ion-label",4),f.ic(9,"100"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&n&&(f.xb(2),f.ac("value",e.porcentaje))},directives:[p.a,u.r,u.O,u.J,u.E,u.P,u.rb,u.I],styles:[""]}),r)}],m=((a=function e(){n(this,e)}).\u0275mod=f.Fb({type:a}),a.\u0275inj=f.Eb({factory:function(n){return new(n||a)},imports:[[l.i.forChild(g)],l.i]}),a),y=i("j1ZV"),d=((c=function e(){n(this,e)}).\u0275mod=f.Fb({type:c}),c.\u0275inj=f.Eb({factory:function(n){return new(n||c)},imports:[[s.c,b.a,u.ib,m,y.a]]}),c)}}])}();