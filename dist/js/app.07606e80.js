(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,i=1;i<o.length;i++){var c=o[i];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},n={app:0},a=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"04fa":function(t,e,o){},"12ba":function(t,e,o){},1756:function(t,e,o){},"251b":function(t,e,o){"use strict";o("04fa")},"478e":function(t,e,o){"use strict";o("6f2d")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header-app"),o("router-view"),o("footer-app")],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("h1",{staticClass:"titulo"},[t.text?o("span",[t._v(t._s(t.text))]):o("span",[t._v("Navita")])])])},i=[],c={name:"Header",props:{text:String}},l=c,u=(o("e2cd"),o("2877")),d=Object(u["a"])(l,s,i,!1,null,"73dc5dd9",null),f=d.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer text-center"},[o("h4",{staticClass:"titulo"},[t.text?o("span",[t._v(t._s(t.text))]):o("span",[t._v("Copyright © Navita 2020")])]),o("div",{})])},m=[],h={name:"Footer",props:{text:String}},v=h,b=(o("251b"),Object(u["a"])(v,p,m,!1,null,"0e0f8997",null)),_=b.exports,y={name:"App",components:{headerApp:f,footerApp:_}},C=y,g=(o("034f"),Object(u["a"])(C,n,a,!1,null,null,null)),M=g.exports,x=o("8c4f"),O=o("5f5b"),w=(o("2dd8"),o("f9e3"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[o("h3",{staticClass:"titulo"},[t._v("Veículos")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 mt-4 mb-4"},[o("tabela",{attrs:{titulo:"Marcas",nomeColuna:"Marca",arrayObjetos:t.marcas,verModelos:!0},on:{vermodelos:t.abrirModelos}})],1),o("div",{staticClass:"col-md-12 mt-4 mb-4"},[o("b-modal",{attrs:{id:"modal-modelos",title:"",size:"xl"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[o("div",{staticClass:"w-100"},[o("button",{staticClass:"float-right btn btn-fechar-modal",on:{click:function(e){return t.fecharModal()}}},[t._v("Fechar")])])]},proxy:!0}])},[o("tabela",{attrs:{titulo:"Modelos",nomeColuna:"Modelo",arrayObjetos:t.modelos}})],1)],1)])])])}),j=[],S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sombra"},[t.arrayObjetos.length>0?o("div",[o("div",{staticClass:"bg-card-header"},[o("h5",{staticClass:"titulo"},[t._v(t._s(t.titulo))])]),o("div",{staticClass:"corpo-tabela"},[o("hr",{staticClass:"hr"}),o("h6",[o("b",[t._v(t._s(t.nomeColuna))])]),t._l(t.arrayObjetos,(function(e){return o("div",{key:e.id},[o("hr",{staticClass:"hr"}),o("div",{staticClass:"row mt-2"},[o("div",{staticClass:"col-md-5"},[o("h6",{staticClass:"subtitulo"},[t._v(t._s(e.nome))])]),t.verModelos?o("div",{staticClass:"col-md-7"},[o("button",{staticClass:"btn btn-ver-modelos",on:{click:function(o){return t.emitirEscolha(e)}}},[t._v("Ver modelos")])]):t._e()])])}))],2)]):o("div",[o("h5",{staticClass:"titulo"},[t._v("Não há modelos dessa marca para serem exibidos.")])])])},$=[],k={name:"Tabela",props:{titulo:String,nomeColuna:String,verModelos:Boolean,arrayObjetos:Array},data:function(){return{exibeModelos:this.verModelos}},methods:{emitirEscolha:function(t){this.$emit("vermodelos",t)}}},A=k,E=(o("f882"),Object(u["a"])(A,S,$,!1,null,"04f8425d",null)),P=E.exports,T=o("bc3a"),N=o.n(T),F="https://parallelum.com.br/fipe/api/v1/carros/marcas",H={obterTodos:function(){return N.a.get("".concat(F)).then((function(t){return t.data})).catch((function(t){return t}))}},J="https://parallelum.com.br/fipe/api/v1/carros/marcas",V={obterModelosMarca:function(t){return N.a.get("".concat(J,"/").concat(t,"/modelos")).then((function(t){return t.data})).catch((function(t){return t}))}},z={name:"Home",components:{Tabela:P},data:function(){return{marcas:new Array,modelos:new Array}},created:function(){var t=this;H.obterTodos().then((function(e){e&&e.length>0&&(t.marcas=e)}))},methods:{abrirModelos:function(t){var e=this;this.modelos=new Array,V.obterModelosMarca(t.codigo).then((function(t){console.log(t),t&&t.modelos.length>0&&(e.modelos=t.modelos,e.$bvModal.show("modal-modelos"))})).catch((function(t){console.error(t)}))},fecharModal:function(){this.$bvModal.hide("modal-modelos")}}},B=z,I=(o("478e"),Object(u["a"])(B,w,j,!1,null,"0d75b798",null)),q=I.exports,D=[{path:"",component:q,name:"Inicio"}];r["default"].config.productionTip=!1,r["default"].use(x["a"]),r["default"].use(O["a"]);var G=new x["a"]({routes:D,mode:"history"});new r["default"]({router:G,render:function(t){return t(M)}}).$mount("#app")},"6f2d":function(t,e,o){},"85ec":function(t,e,o){},e2cd:function(t,e,o){"use strict";o("1756")},f882:function(t,e,o){"use strict";o("12ba")}});
//# sourceMappingURL=app.07606e80.js.map