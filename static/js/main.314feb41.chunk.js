(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(19),c=t.n(l),i=(t(82),t(83),t(45)),s=t(46),o=t(47),m=t(63),u=t(31),p=t(29),d=t(26),h=t(20),f=t(21),E=t(24),b=t(22),v=t(25),g=t(58),y=t(69),N=t.n(y),x=t(61),C=t(62),R=t(34),k=t(60),V=t(48),j=t(53),O=t(55),I=t(54),w=t(57),D=t(35),S=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(E.a)(this,Object(b.a)(a).call(this,e))).handlerInputVar=function(e){var a=e.target,n=a.value,r=a.name,l=t.props.status.variables;l[r].xi=r,l[r].descripcion=n,r>1&&""===n&&l.splice(r,1),t.props.handleVariables(l),t.handleNewsVar(t.props.status.method)},t.handlerInputRes=function(e){var a=e.target,n=a.value,r=a.name,l=t.props.status.restricciones;l[r].ri=r,l[r].descripcion=n,""===n&&l.splice(r,1),t.props.handleRestricciones(l),t.handleNewsRes()},t.handleNewsRes=function(){var e=t.props.status.restricciones;0===e.filter(function(e){return 0===e.descripcion.length}).length&&(e.push({ri:e.length,descripcion:"",coeficientes:[],eq:">=",derecha:""}),t.props.handleRestricciones(e))},t.handleNewsVar=function(e){var a=t.props.status.variables;"simplex"===e?0===a.filter(function(e){return 0===e.descripcion.length}).length&&(a.push({xi:a.length,descripcion:"",coeficiente:""}),t.props.handleVariables(a)):a.length>2&&(a.splice(2),t.props.handleVariables(a))},t.state={faltaDescrip:""},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"isValidated",value:function(){var e=this.props.status,a=e.variables,t=e.restricciones,n=a.filter(function(e){return""!==e.descripcion}),r=t.filter(function(e){return""!==e.descripcion});return n.length>1&r.length>0?(this.props.lastStep(1),!0):(n<2?this.setState({faltaDescrip:"Dale no seas Guampa poneme como minimo 2 variables"}):this.setState({faltaDescrip:"Poneme Alguna Restri pue "}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.map(function(a,t){return r.a.createElement(x.a,{className:"mt-1",key:"VTD"+t},r.a.createElement(C.a,{addonType:"prepend"},r.a.createElement(R.a,{name:"xi",id:"variable"},"X"+t)),r.a.createElement(k.a,{name:t,placeholder:"Descripcion de la Variable","aria-label":"Descripcion","aria-describedby":"variable",onChange:e.handlerInputVar,value:a.descripcion}))}),l=t.map(function(a,t){return r.a.createElement(x.a,{className:"mt-1",key:"RTD"+t},r.a.createElement(C.a,{addonType:"prepend"},r.a.createElement(R.a,{name:"ri",id:"restriccion"},"R"+t)),r.a.createElement(k.a,{name:t,placeholder:"Descripcion de la Restriccion","aria-label":"Descripcion","aria-describedby":"restriccion",onChange:e.handlerInputRes,value:a.descripcion}))}),c=r.a.createElement(V.a,null,r.a.createElement(u.a,{onClick:function(){e.props.handleMethod("graph"),e.handleNewsVar("graph")},active:"graph"===this.props.status.method,color:"primary"},"GRAFICO"),r.a.createElement(u.a,{onClick:function(){e.props.handleMethod("simplex"),e.handleNewsVar("simplex")},active:"simplex"===this.props.status.method,color:"primary"},"SIMPLEX")),o=r.a.createElement(V.a,null,r.a.createElement(u.a,{onClick:function(){return e.props.handleObjective("max")},active:"max"===this.props.status.objective,color:"primary"},"Maximizacion"),r.a.createElement(u.a,{onClick:function(){return e.props.handleObjective("min")},active:"min"===this.props.status.objective,color:"primary"},"Minimizacion"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comenzamos configurando nuestro Modelo:"),r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"mt-2 mx-auto"},r.a.createElement(O.a,null,"Metodo a Utilizar:"),r.a.createElement(I.a,null,c)),r.a.createElement(j.a,{outline:!0,color:"secondary",className:"mt-2 mx-auto"},r.a.createElement(O.a,null,"Tipo de Optimizacion:"),r.a.createElement(I.a,null,o))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(O.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Variables:"))),r.a.createElement(I.a,null,n))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(O.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(I.a,null,l))),""!==this.state.faltaDescrip&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(D.a,{className:"mx-auto",color:"danger"},this.state.faltaDescrip))))}}]),a}(r.a.Component),P=t(64),T=t(52),F=t(36),M=t(59),B=function(e){var a=e.restriccion.coeficientes;if(a.length!==e.cantVariables){var t=e.cantVariables-a.length;if(t>0)for(var n=0;n<t;n++)a.push("");else a.splice(e.cantVariables)}var l=e.restriccion.eq,c=r.a.createElement(V.a,{className:"mx-1",key:"Eq"+e.restriccion.ri},r.a.createElement(u.a,{key:"B<s"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),l="<="},color:"<="===l?"primary":"secondary",value:"<="},"<="),r.a.createElement(u.a,{key:"B="+e.restriccion.ri,name:"eq",disabled:!0,onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),l="="},color:"="===l?"primary":"secondary",value:"="},"="),r.a.createElement(u.a,{key:"B>"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),l=">="},color:">="===l?"primary":"secondary",value:">="},">=")),i=a.map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{key:"Ci"+e.restriccion.ri+"r"+n,type:"number",name:n,placeholder:"Coefiente",className:"InputCoeficiente",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:t}),r.a.createElement(C.a,{key:"IADD"+e.restriccion.ri+"r"+n,addonType:"append"},r.a.createElement(R.a,{key:"r"+e.restriccion.ri+"r"+n},"X"+n)),n<a.length-1&&r.a.createElement(R.a,{key:"+"+e.restriccion.ri+"r"+n},"+"))});return r.a.createElement(j.a,{key:"RRR"+e.restriccion.ri},r.a.createElement(O.a,{className:"p-0 m-0"},r.a.createElement(w.a,null,"R"+e.restriccion.ri+":"+e.restriccion.descripcion)),r.a.createElement(I.a,{className:"p-0 my-1 mx-auto"},r.a.createElement(x.a,{key:"RT"+e.restriccion.ri},i,c,r.a.createElement(k.a,{key:"C"+e.restriccion.ri+"r"+a.length,type:"number",name:"derecha",placeholder:"Coe",className:"InputCoeficiente","aria-label":"Coe","aria-describedby":"restriccion",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:e.restriccion.derecha}))))},L=t(65),q=function(e){var a=e.variables,t=a.filter(function(e){return""!==e.descripcion}).map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{key:"TTV"+n,target:"IF"+n},"Debes ingresar el coeficiente de "+t.descripcion),r.a.createElement(k.a,{key:"IF"+n,id:"IF"+n,type:"number",name:t.xi,placeholder:"Coef",className:"InputCoeficiente","aria-label":"Coeficiente","aria-describedby":"coe",onChange:function(a){return e.handleCoefVar(a)},value:t.coeficiente}),r.a.createElement(C.a,{key:"ADDIF"+n,addonType:"append"},r.a.createElement(R.a,{key:"IFD"+n},"X"+t.xi)),n<a.filter(function(e){return""!==e.descripcion}).length-1&&r.a.createElement(R.a,{key:"+IF"+n},"+"))});return r.a.createElement(x.a,{key:"INPUTFUNCIONAL"},t,r.a.createElement(R.a,{className:"mx-1",key:"IFOPT"}," => "+e.objective.toUpperCase()))},A=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(E.a)(this,Object(b.a)(a).call(this,e))).handleCoefVar=function(e){var a=e.target,n=a.value,r=a.name;if(n){var l=t.props.status.variables;l[r].coeficiente=parseInt(n),t.props.handleVariables(l),console.log(t.props.status.variables)}},t.handleCoefRes=function(e,a){var n=e.target,r=n.name,l=n.value,c=t.props.status.restricciones;switch(console.log("En la Res:"+a+", en el campo:"+r+",con el valor:"+l),r){case"derecha":c[a].derecha=parseInt(l);break;case"eq":c[a].eq=l;break;default:c[a].coeficientes[r]=parseInt(l)}console.log(c),t.props.handleRestricciones(c)},t.listDescriptionsVarItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(P.a,{key:"DLGIV"+e.xi,className:"justify-content-between"},r.a.createElement(T.a,null,"X"+e.xi)," "+e.descripcion)})},t.listDescriptionsResItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(P.a,{key:"DLGIR"+e.ri,className:"justify-content-between"},r.a.createElement(T.a,null,"R"+e.ri)," "+e.descripcion)})},t.state={faltaCoe:"",references:!1},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"isValidated",value:function(){return this.props.status.variables.filter(function(e){return""!==e.descripcion}).every(function(e){return""!==e.coeficiente})?(this.props.lastStep(2),this.setState({faltaCoe:""}),!0):(this.setState({faltaCoe:"Rellename pue todos los Coeficientes no seas Guampa"}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.filter(function(e){return""!==e.descripcion}).length,l=t.filter(function(e){return""!==e.descripcion}).map(function(a,t){return r.a.createElement(B,{className:"mt-1",key:"R"+t,handleCoefRes:e.handleCoefRes,cantVariables:n,restriccion:a})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cargamos los datos de nuestro Modelo:"),r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(O.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,{className:"text-left"},r.a.createElement(w.a,null,r.a.createElement("h4",null,"Referencias:"))),r.a.createElement(o.a,null,r.a.createElement(u.a,{outline:!0,size:"sm",onClick:function(){return e.setState({references:!e.state.references})},color:this.state.references?"danger":"success"},this.state.references?"Ocultar Referencias":"Ver Referencias")))),r.a.createElement(F.a,{isOpen:this.state.references},r.a.createElement(I.a,null,r.a.createElement("h5",{className:"text-left"},"Variables:"),r.a.createElement(M.a,null,this.listDescriptionsVarItems(a)),r.a.createElement("h5",{className:"text-left"},"Restricciones:"),r.a.createElement(M.a,null,this.listDescriptionsResItems(t)))))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(O.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Funcion Objetivo:"))),r.a.createElement(I.a,{className:"mx-auto"},r.a.createElement(q,{variables:a,handleCoefVar:this.handleCoefVar,objective:this.props.status.objective})))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(O.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(I.a,null,l))),""!==this.state.faltaCoe&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(D.a,{className:"mx-auto",color:"danger"},this.state.faltaCoe))))}}]),a}(r.a.Component),z=t(56),X=t(74),G=t.n(X),U=function(e){var a=e.restricciones,t=e.variables,n=e.objective,r={optimize:"coeficiente",opType:"",constraints:{},variables:{}};return r.opType=n,t.filter(function(e){return""!==e.descripcion}).forEach(function(e){var t={};t.coeficiente=e.coeficiente,a.forEach(function(a){""!==a.descripcion&&(t["r"+a.ri]=a.coeficientes[e.xi])}),console.log(t),r.variables[e.xi]=t}),a.filter(function(e){return""!==e.descripcion}).forEach(function(e){if(">="===e.eq){var a={};a.min=e.derecha,r.constraints["r"+e.ri]=a}else{var t={};t.max=e.derecha,r.constraints["r"+e.ri]=t}}),r},J=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(E.a)(this,Object(b.a)(a).call(this,e))).calculatePrimal=function(){var e=U(t.props.status);return G.a.Solve(e)},t.state={result:!1},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e="No hay resultados todavsia";this.props.status.result&&(e=this.calculatePrimal(),console.log(e));var a=this.props.status.variables.filter(function(e){return""!==e.descripcion}).map(function(a){return r.a.createElement(j.a,{key:"Card"+a.xi,outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(O.a,null,r.a.createElement(w.a,null,"Variable: X"+a.xi)),r.a.createElement(I.a,null,r.a.createElement(z.a,null,e[a.xi]?"Se recomienda producir "+e[a.xi]+" unidades":"No se recomienda la produccion"," de "+a.descripcion)))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{outline:!0,color:"info",className:"w-100 mt-3 mx-auto"},r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement("h3",null,"El resultado optimo es: "+e.result))),r.a.createElement(I.a,null,a)))}}]),a}(r.a.Component),W=t(75),$=t.n(W),H=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(E.a)(this,Object(b.a)(a).call(this,e))).handleRestricciones=function(e){t.setState({restricciones:e})},t.handleVariables=function(e){t.setState({variables:e})},t.handleMethod=function(e){t.setState({method:e})},t.handleObjective=function(e){t.setState({objective:e})},t.handleResult=function(e){t.setState({result:e})},t.lastStep=function(e){2===e?t.setState({result:!0,barProg:100}):t.setState({result:!1,barProg:66})},t.finishButtonClick=function(e){console.log("En algun momento va a imprimir resultados")},t.state={variables:[{xi:0,descripcion:"",coeficiente:""},{xi:1,descripcion:"",coeficiente:""}],restricciones:[{ri:0,descripcion:"",coeficientes:[],eq:">=",derecha:""}],method:"graph",objective:"max",result:!1,barProg:33},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=[{stepName:"Configuracion del Modelo",component:S,stepProps:{status:this.state,handleMethod:this.handleMethod,handleVariables:this.handleVariables,handleRestricciones:this.handleRestricciones,lastStep:this.lastStep,handleObjective:this.handleObjective}},{stepName:"Detalles del Modelo",component:A,stepProps:{status:this.state,handleVariables:this.handleVariables,lastStep:this.lastStep,handleRestricciones:this.handleRestricciones}},{stepName:"Presentacion de los Resultados",component:J,stepProps:{status:this.state,handleResult:this.handleResult,lastStep:this.lastStep}}];return r.a.createElement(i.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto"},r.a.createElement("img",{src:$.a,className:"App-logo",alt:"logo",height:"200"}),r.a.createElement(g.a,{animated:!0,color:"blue",value:this.state.barProg}))),r.a.createElement(s.a,null,r.a.createElement(o.a,{xs:12,md:6,className:"my-4 mx-auto"},r.a.createElement(N.a,{steps:e,title:"Programacion Lineal",progressbar:!0,headerTextCenter:!0,validate:!0,color:"blue",previousButtonText:"Volver",nextButtonText:"Siguiente",finishButtonText:"Imprimir Resultados",finishButtonClick:this.finishButtonClick}))))}}]),a}(r.a.Component),K=function(){return r.a.createElement(H,null)},Q=function(){return r.a.createElement(i.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(m.a,{className:""},r.a.createElement(s.a,null,r.a.createElement("h2",null,"La PL No-Lineal recien estara disponible en el 2020.")),r.a.createElement(s.a,null,r.a.createElement(p.b,{to:"/"},r.a.createElement(u.a,{className:"fluid-left"},"Volver")))))))},Y=function(){return r.a.createElement(i.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{className:"mx-auto"},"Bienvenido!!!! Seleccione una opcion.")),r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(p.b,{to:"/linealProg"},r.a.createElement(u.a,{color:"success"},"Programacion Lineal "))),r.a.createElement(o.a,null,r.a.createElement(p.b,{to:"/noLinealProg"},r.a.createElement(u.a,{disabled:!0,color:"success"},"Programacion No Lineal ")))),r.a.createElement(s.a,null,r.a.createElement("h5",null,"Desarrolladores:"))))))},Z=function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:Y}),r.a.createElement(d.a,{path:"/linealProg",component:K}),r.a.createElement(d.a,{path:"/noLinealProg/",component:Q}))};t(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},77:function(e,a,t){e.exports=t(112)},82:function(e,a,t){},83:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.314feb41.chunk.js.map