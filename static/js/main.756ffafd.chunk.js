(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(19),c=t.n(i),l=(t(82),t(83),t(45)),s=t(46),o=t(47),m=t(63),u=t(31),p=t(48),d=t(29),h=t(26),f=t(20),E=t(21),b=t(24),v=t(22),g=t(25),y=t(58),C=t(69),N=t.n(C),x=t(61),R=t(62),k=t(34),V=t(60),j=t(53),O=t(65),I=t(55),S=t(54),w=t(57),D=t(35),P=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).handlerInputVar=function(e){var a=e.target,n=a.value,r=a.name,i=t.props.status.variables;i[r].xi=r,i[r].descripcion=n,r>1&&""===n&&i.splice(r,1),t.props.handleVariables(i),t.handleNewsVar(t.props.status.method)},t.handlerInputRes=function(e){var a=e.target,n=a.value,r=a.name,i=t.props.status.restricciones;i[r].ri=r,i[r].descripcion=n,""===n&&i.splice(r,1),t.props.handleRestricciones(i),t.handleNewsRes()},t.handleNewsRes=function(){var e=t.props.status.restricciones;0===e.filter(function(e){return 0===e.descripcion.length}).length&&(e.push({ri:e.length,descripcion:"",coeficientes:[],eq:">=",derecha:""}),t.props.handleRestricciones(e))},t.handleNewsVar=function(e){var a=t.props.status.variables;"simplex"===e?0===a.filter(function(e){return 0===e.descripcion.length}).length&&(a.push({xi:a.length,descripcion:"",coeficiente:""}),t.props.handleVariables(a)):a.length>2&&(a.splice(2),t.props.handleVariables(a))},t.state={faltaDescrip:""},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"isValidated",value:function(){var e=this.props.status,a=e.variables,t=e.restricciones,n=a.filter(function(e){return""!==e.descripcion}),r=t.filter(function(e){return""!==e.descripcion});return n.length>1&r.length>0?(this.props.lastStep(1),!0):(n<2?this.setState({faltaDescrip:"Dale no seas Guampa poneme como minimo 2 variables"}):this.setState({faltaDescrip:"Poneme Alguna Restri pue "}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.map(function(a,t){return r.a.createElement(x.a,{className:"mt-1",id:"X"+t,key:"VTD"+t},r.a.createElement(R.a,{addonType:"prepend"},r.a.createElement(k.a,{name:"xi",id:"variable"},"X"+t)),r.a.createElement(V.a,{name:t,placeholder:"Descripcion de la Variable","aria-label":"Descripcion","aria-describedby":"variable",onChange:e.handlerInputVar,value:a.descripcion}))}),i=t.map(function(a,t){return r.a.createElement(x.a,{className:"mt-1",id:"R"+t,key:"RTD"+t},r.a.createElement(R.a,{addonType:"prepend"},r.a.createElement(k.a,{name:"ri",id:"restriccion"},"R"+t)),r.a.createElement(V.a,{name:t,placeholder:"Descripcion de la Restriccion","aria-label":"Descripcion","aria-describedby":"restriccion",onChange:e.handlerInputRes,value:a.descripcion}))}),c=r.a.createElement(p.a,{id:"ButtUtil"},r.a.createElement(u.a,{onClick:function(){e.props.handleMethod("graph"),e.handleNewsVar("graph")},active:"graph"===this.props.status.method,color:"primary"},"GRAFICO"),r.a.createElement(u.a,{onClick:function(){e.props.handleMethod("simplex"),e.handleNewsVar("simplex")},active:"simplex"===this.props.status.method,color:"primary"},"SIMPLEX")),o=r.a.createElement(p.a,null,r.a.createElement(u.a,{onClick:function(){return e.props.handleObjective("max")},active:"max"===this.props.status.objective,color:"primary"},"Maximizacion"),r.a.createElement(u.a,{onClick:function(){return e.props.handleObjective("min")},active:"min"===this.props.status.objective,color:"primary"},"Minimizacion"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comenzamos configurando nuestro Modelo:"),r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",id:"CardUtil",className:"mt-2 mx-auto"},r.a.createElement(O.a,{trigger:"hover",placement:"auto",target:"CardUtil"},"Aqui debes seleccionar el metodo de Calculo y Visualizacion de los Resultados"),r.a.createElement(I.a,null,"Metodo a Utilizar:"),r.a.createElement(S.a,null,c)),r.a.createElement(j.a,{outline:!0,color:"secondary",id:"CardOpt",className:"mt-2 mx-auto"},r.a.createElement(O.a,{trigger:"hover",placement:"auto",target:"CardOpt"},"Y aqui, el tipo de Optimizacion que deseas realizar, si deseas Maximizar tu funcion o Minimizarla"),r.a.createElement(I.a,null,"Tipo de Optimizacion:"),r.a.createElement(S.a,null,o))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",id:"CardVariables",className:"w-100 mt-3 mx-auto"},r.a.createElement(O.a,{trigger:"hover",placement:"auto",target:"CardVariables"},"Para ir describiendo mas el modelo, debes introducir el significado de cada Variable, es importante recordar que si es el metodo grafico solo se pueden ingresar dos variables"),r.a.createElement(I.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Variables:"))),r.a.createElement(S.a,null,n))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",id:"CardRestri",className:"w-100 mt-3 mx-auto"},r.a.createElement(O.a,{trigger:"hover",placement:"auto",target:"CardRestri"},"Y aqui, el significado de cada Restriccion, las Restricciones como las Variables son de ingreso dinamico, lo que significa que debes ingresar en el campo su descripccion como tantas variables o restricciones quieras."),r.a.createElement(I.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(S.a,null,i))),""!==this.state.faltaDescrip&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(D.a,{className:"mx-auto",color:"danger"},this.state.faltaDescrip))))}}]),a}(r.a.Component),q=t(64),T=t(52),z=t(36),F=t(59),M=function(e){var a=e.restriccion.coeficientes;if(a.length!==e.cantVariables){var t=e.cantVariables-a.length;if(t>0)for(var n=0;n<t;n++)a.push("");else a.splice(e.cantVariables)}var i=e.restriccion.eq,c=r.a.createElement(p.a,{className:"mx-1",key:"Eq"+e.restriccion.ri},r.a.createElement(u.a,{key:"B<s"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),i="<="},color:"<="===i?"primary":"secondary",value:"<="},"<="),r.a.createElement(u.a,{key:"B="+e.restriccion.ri,name:"eq",disabled:!0,onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),i="="},color:"="===i?"primary":"secondary",value:"="},"="),r.a.createElement(u.a,{key:"B>"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),i=">="},color:">="===i?"primary":"secondary",value:">="},">=")),l=a.map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{key:"Ci"+e.restriccion.ri+"r"+n,type:"number",name:n,placeholder:"Coefiente",className:"InputCoeficiente",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:t}),r.a.createElement(R.a,{key:"IADD"+e.restriccion.ri+"r"+n,addonType:"append"},r.a.createElement(k.a,{key:"r"+e.restriccion.ri+"r"+n},"X"+n)),n<a.length-1&&r.a.createElement(k.a,{key:"+"+e.restriccion.ri+"r"+n},"+"))});return r.a.createElement(j.a,{key:"CR"+e.restriccion.ri,id:"CR"+e.restriccion.ri},r.a.createElement(O.a,{key:"TTCR"+e.restriccion.ri,placement:"auto",target:"CR"+e.restriccion.ri},"Aqui debes ingresar los coeficiente de "+e.restriccion.descripcion),r.a.createElement(I.a,{className:"p-0 m-0"},r.a.createElement(w.a,null,"R"+e.restriccion.ri+":"+e.restriccion.descripcion)),r.a.createElement(S.a,{className:"p-0 my-1 mx-auto"},r.a.createElement(x.a,{key:"RT"+e.restriccion.ri},l,c,r.a.createElement(V.a,{key:"C"+e.restriccion.ri+"r"+a.length,type:"number",name:"derecha",placeholder:"Coe",className:"InputCoeficiente","aria-label":"Coe","aria-describedby":"restriccion",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:e.restriccion.derecha}))))},B=function(e){var a=e.variables,t=a.filter(function(e){return""!==e.descripcion}).map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{key:"TTV"+n,placement:"auto",target:"IF"+n},"Aqui debes ingresar el coeficiente de "+t.descripcion),r.a.createElement(V.a,{key:"IF"+n,id:"IF"+n,type:"number",name:t.xi,placeholder:"Coef",className:"InputCoeficiente","aria-label":"Coeficiente","aria-describedby":"coe",onChange:function(a){return e.handleCoefVar(a)},value:t.coeficiente}),r.a.createElement(R.a,{key:"ADDIF"+n,addonType:"append"},r.a.createElement(k.a,{key:"IFD"+n},"X"+t.xi)),n<a.filter(function(e){return""!==e.descripcion}).length-1&&r.a.createElement(k.a,{key:"+IF"+n},"+"))});return r.a.createElement(x.a,{key:"INPUTFUNCIONAL"},t,r.a.createElement(k.a,{className:"mx-1",key:"IFOPT"}," => "+e.objective.toUpperCase()))},A=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).handleCoefVar=function(e){var a=e.target,n=a.value,r=a.name;if(n){var i=t.props.status.variables;i[r].coeficiente=parseInt(n),t.props.handleVariables(i),console.log(t.props.status.variables)}},t.handleCoefRes=function(e,a){var n=e.target,r=n.name,i=n.value,c=t.props.status.restricciones;switch(console.log("En la Res:"+a+", en el campo:"+r+",con el valor:"+i),r){case"derecha":c[a].derecha=parseInt(i);break;case"eq":c[a].eq=i;break;default:c[a].coeficientes[r]=parseInt(i)}console.log(c),t.props.handleRestricciones(c)},t.listDescriptionsVarItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(q.a,{key:"DLGIV"+e.xi,className:"justify-content-between"},r.a.createElement(T.a,null,"X"+e.xi)," "+e.descripcion)})},t.listDescriptionsResItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(q.a,{key:"DLGIR"+e.ri,className:"justify-content-between"},r.a.createElement(T.a,null,"R"+e.ri)," "+e.descripcion)})},t.state={faltaCoe:"",references:!1},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"isValidated",value:function(){return this.props.status.variables.filter(function(e){return""!==e.descripcion}).every(function(e){return""!==e.coeficiente})?(this.props.lastStep(2),this.setState({faltaCoe:""}),!0):(this.setState({faltaCoe:"Rellename pue todos los Coeficientes no seas Guampa"}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.filter(function(e){return""!==e.descripcion}).length,i=t.filter(function(e){return""!==e.descripcion}).map(function(a,t){return r.a.createElement(M,{className:"mt-1",key:"R"+t,handleCoefRes:e.handleCoefRes,cantVariables:n,restriccion:a})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cargamos los datos de nuestro Modelo:"),r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(I.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,{className:"text-left"},r.a.createElement(w.a,null,r.a.createElement("h4",null,"Referencias:"))),r.a.createElement(o.a,null,r.a.createElement(u.a,{outline:!0,size:"sm",onClick:function(){return e.setState({references:!e.state.references})},color:this.state.references?"danger":"success"},this.state.references?"Ocultar Referencias":"Ver Referencias")))),r.a.createElement(z.a,{isOpen:this.state.references},r.a.createElement(S.a,null,r.a.createElement("h5",{className:"text-left"},"Variables:"),r.a.createElement(F.a,null,this.listDescriptionsVarItems(a)),r.a.createElement("h5",{className:"text-left"},"Restricciones:"),r.a.createElement(F.a,null,this.listDescriptionsResItems(t)))))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(I.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Funcion Objetivo:"))),r.a.createElement(S.a,{className:"mx-auto"},r.a.createElement(B,{variables:a,handleCoefVar:this.handleCoefVar,objective:this.props.status.objective})))),r.a.createElement(s.a,null,r.a.createElement(j.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(I.a,null,r.a.createElement(w.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(S.a,null,i))),""!==this.state.faltaCoe&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(D.a,{className:"mx-auto",color:"danger"},this.state.faltaCoe))))}}]),a}(r.a.Component),L=t(56),U=t(74),X=t.n(U),G=function(e){var a=e.restricciones,t=e.variables,n=e.objective,r={optimize:"coeficiente",opType:"",constraints:{},variables:{}};return r.opType=n,t.filter(function(e){return""!==e.descripcion}).forEach(function(e){var t={};t.coeficiente=e.coeficiente,a.forEach(function(a){""!==a.descripcion&&(t["r"+a.ri]=a.coeficientes[e.xi])}),console.log(t),r.variables[e.xi]=t}),a.filter(function(e){return""!==e.descripcion}).forEach(function(e){if(">="===e.eq){var a={};a.min=e.derecha,r.constraints["r"+e.ri]=a}else{var t={};t.max=e.derecha,r.constraints["r"+e.ri]=t}}),r},J=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).calculatePrimal=function(){var e=G(t.props.status);return X.a.Solve(e)},t.state={result:!1},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e="No hay resultados todavsia";this.props.status.result&&(e=this.calculatePrimal(),console.log(e));var a=this.props.status.variables.filter(function(e){return""!==e.descripcion}).map(function(a){return r.a.createElement(j.a,{key:"Card"+a.xi,outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(I.a,null,r.a.createElement(w.a,null,"Variable: X"+a.xi)),r.a.createElement(S.a,null,r.a.createElement(L.a,null,e[a.xi]?"Se recomienda producir "+e[a.xi]+" unidades":"No se recomienda la produccion"," de "+a.descripcion)))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{outline:!0,color:"info",className:"w-100 mt-3 mx-auto"},r.a.createElement(I.a,null,r.a.createElement(w.a,null,r.a.createElement("h3",null,"El resultado optimo es: "+e.result))),r.a.createElement(S.a,null,a)))}}]),a}(r.a.Component),W=t(75),Y=t.n(W),Z=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).handleRestricciones=function(e){t.setState({restricciones:e})},t.handleVariables=function(e){t.setState({variables:e})},t.handleMethod=function(e){t.setState({method:e})},t.handleObjective=function(e){t.setState({objective:e})},t.handleResult=function(e){t.setState({result:e})},t.lastStep=function(e){2===e?t.setState({result:!0,barProg:100}):t.setState({result:!1,barProg:66})},t.finishButtonClick=function(e){console.log("En algun momento va a imprimir resultados")},t.state={variables:[{xi:0,descripcion:"",coeficiente:""},{xi:1,descripcion:"",coeficiente:""}],restricciones:[{ri:0,descripcion:"",coeficientes:[],eq:">=",derecha:""}],method:"graph",objective:"max",result:!1,barProg:33},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=[{stepName:"Configuracion del Modelo",component:P,stepProps:{status:this.state,handleMethod:this.handleMethod,handleVariables:this.handleVariables,handleRestricciones:this.handleRestricciones,lastStep:this.lastStep,handleObjective:this.handleObjective}},{stepName:"Detalles del Modelo",component:A,stepProps:{status:this.state,handleVariables:this.handleVariables,lastStep:this.lastStep,handleRestricciones:this.handleRestricciones}},{stepName:"Presentacion de los Resultados",component:J,stepProps:{status:this.state,handleResult:this.handleResult,lastStep:this.lastStep}}];return r.a.createElement(l.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto"},r.a.createElement("img",{src:Y.a,className:"App-logo",alt:"logo",height:"200"}),r.a.createElement(y.a,{animated:!0,color:"blue",value:this.state.barProg}))),r.a.createElement(s.a,null,r.a.createElement(o.a,{xs:12,md:6,className:"my-4 mx-auto"},r.a.createElement(N.a,{steps:e,title:"Programacion Lineal",progressbar:!0,headerTextCenter:!0,validate:!0,color:"blue",previousButtonText:"Volver",nextButtonText:"Siguiente",finishButtonText:"Imprimir Resultados",finishButtonClick:this.finishButtonClick}))))}}]),a}(r.a.Component),$=function(){return r.a.createElement(Z,null)},H=function(){return r.a.createElement(l.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(m.a,{className:""},r.a.createElement(s.a,null,r.a.createElement("h2",null,"La PL No-Lineal recien estara disponible en el 2020.")),r.a.createElement(s.a,null,r.a.createElement(d.b,{to:"/"},r.a.createElement(u.a,{className:"fluid-left"},"Volver")))))))},K=function(){return r.a.createElement(l.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{className:"mx-auto"},"Bienvenido!!!! Seleccione una opcion.")),r.a.createElement(s.a,{className:"mt-2"},r.a.createElement(o.a,null,r.a.createElement(d.b,{to:"/linealProg"},r.a.createElement(u.a,{color:"success"},"Programacion Lineal "))),r.a.createElement(o.a,null,r.a.createElement(d.b,{to:"/noLinealProg"},r.a.createElement(u.a,{disabled:!0,color:"success"},"Programacion No Lineal ")))),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement("h5",null,"Colaboradores:")),r.a.createElement(s.a,null,r.a.createElement(p.a,{size:"sm",className:"ml-3"},r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/EdgarCardozo"},"CE"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/juliandiazok"},"DJ"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/santisolis97"},"SS"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/ianv97"},"VI"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/santinozaracho"},"ZS")))))))},Q=function(){return r.a.createElement(d.a,{basename:"/optimizer-pl-io"},r.a.createElement(h.a,{exact:!0,path:"/",component:K}),r.a.createElement(h.a,{path:"/linealProg",component:$}),r.a.createElement(h.a,{path:"/noLinealProg/",component:H}))};t(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},77:function(e,a,t){e.exports=t(112)},82:function(e,a,t){},83:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.756ffafd.chunk.js.map