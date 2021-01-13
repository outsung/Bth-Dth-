(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(t,e,r){"use strict";r.r(e);var n=r(6),a=r(0),i=r.n(a),o=r(20),s=r.n(o),c=r(10),h=r(26),u=r(27);function l(){var t=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return l=function(){return t},t}var p=u.a.div(l()),f=r(7),x=r(9),j=r(1),d=r(61),b=r(59),v=r(58),y=r(62);var O=function(){var t=Object(y.a)().progress;return Object(n.jsx)(v.b,{center:!0,children:Object(n.jsxs)("span",{style:{color:"#FFFFFF"},children:[t," % loaded"]})})};function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:380,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:64;this._filmThickness=t||380,this._refractiveIndexFilm=e||2,this._refractiveIndexBase=r||3,this._size=n||64,this._data=new Uint8Array(4*this._size),this._updateData(),j.DataTexture.call(this,this._data,this._size,1,j.RGBAFormat,j.UnsignedByteType,j.UVMapping,j.RepeatWrapping,j.RepeatWrapping,j.LinearFilter,j.LinearMipMapLinearFilter),this.generateMipmaps=!0,this.needsUpdate=!0}g.prototype=Object.create(j.DataTexture.prototype,{filmThickness:{get:function(){return this._filmThickness},set:function(t){this._filmThickness=t,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}},refractiveIndexFilm:{get:function(){return this._refractiveIndexFilm},set:function(t){this._refractiveIndexFilm=t,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}},refractiveIndexBase:{get:function(){return this._refractiveIndexBase},set:function(t){this._refractiveIndexBase=t,this.updateSettings(this._filmThickness,this._refractiveIndexFilm,this._refractiveIndexBase)}}}),g.prototype.updateSettings=function(t,e,r){this._filmThickness=t||380,this._refractiveIndexFilm=e||2,this._refractiveIndexBase=r||3,this._updateData()},g.prototype._fresnelRefl=function(t,e,r,n,a,i){var o=1-r*r,s=t/e;if(s*s*o>1){a.x=1,a.y=1;var c=s*s;i.x=2*Math.atan(-c*Math.sqrt(o-1/c)/r),i.y=2*Math.atan(-Math.sqrt(o-1/c)/r)}else{var h=(e*r-t*n)/(e*r+t*n),u=(t*r-e*n)/(t*r+e*n);i.x=h<0?Math.PI:0,i.y=u<0?Math.PI:0,a.x=h*h,a.y=u*u}},g.prototype._updateData=function(){var t=this._filmThickness,e=this._refractiveIndexFilm,r=this._refractiveIndexBase,n=this._size;function a(t){var e=(t-442)*(t<442?.0624:.0374),r=(t-599.8)*(t<599.8?.0264:.0323),n=(t-501.1)*(t<501.1?.049:.0382);return.362*Math.exp(-.5*e*e)+1.056*Math.exp(-.5*r*r)-.065*Math.exp(-.5*n*n)}function i(t){var e=(t-568.8)*(t<568.8?.0213:.0247),r=(t-530.9)*(t<530.9?.0613:.0322);return.821*Math.exp(-.5*e*e)+.286*Math.exp(-.5*r*r)}function o(t){var e=(t-437)*(t<437?.0845:.0278),r=(t-459)*(t<459?.0385:.0725);return 1.217*Math.exp(-.5*e*e)+.681*Math.exp(-.5*r*r)}for(var s=this._data,c=new j.Vector2,h=new j.Vector2,u=new j.Vector2,l=new j.Vector2,p=new j.Vector2,f=new j.Vector2,x=new j.Vector2,d=new j.Vector2,b=new j.Vector2,v=new j.Vector2,y=new j.Vector2,O=new j.Vector2,g=1/(e*e),F=e*e/(r*r),m=0;m<n;++m){var M=m/n,_=Math.sqrt(1-g*(1-M*M)),w=Math.sqrt(1-F*(1-_*_)),k=2*e*t*_,I=2*Math.PI*k;this._fresnelRefl(1,e,M,_,l,c),p.x=1-l.x,p.y=1-l.y,h.x=Math.PI-c.x,h.y=Math.PI-c.y,this._fresnelRefl(e,r,_,w,f,u),x.x=Math.sqrt(f.x*l.x),x.y=Math.sqrt(f.y*l.y),d.x=Math.sqrt(p.x*p.x),d.y=Math.sqrt(p.y*p.y),b.x=p.x*p.x*f.x/(1-f.x*l.x),b.y=p.y*p.y*f.y/(1-f.y*l.y),v.x=x.x*x.x,v.y=x.y*x.y,y.x=l.x+b.x,y.y=l.y+b.y,O.x=b.x-d.x,O.y=b.y-d.y;for(var D=0,V=0,T=0,B=0,R=0,S=0,q=0;q<64;++q){var L=380+q/63*400,A=I/L,C=Math.cos(A+u.x+h.x),P=Math.cos(A+u.y+h.y),W=.5*(y.x+2*(x.x*C-v.x)/(1-2*x.x*C+v.x)*O.x+(y.y+2*(x.y*P-v.y)/(1-2*x.y*P+v.y)*O.y)),E=a(L),z=i(L),U=o(L);B+=E,R+=z,S+=U,D+=E*W,V+=z*W,T+=U*W}var G=3.2406*(D/=B)-1.5372*(V/=R)-.4986*(T/=S),J=-.9689*D+1.8758*V+.0415*T,Y=.0557*D-.204*V+1.057*T;G=j.Math.clamp(G,0,1),J=j.Math.clamp(J,0,1),Y=j.Math.clamp(Y,0,1),G=Math.sqrt(G),J=Math.sqrt(J),Y=Math.sqrt(Y);var H=m<<2;s[H]=Math.floor(255*G),s[H+1]=Math.floor(255*J),s[H+2]=Math.floor(255*Y),s[H+3]=255}this.needsUpdate=!0};var F=g;function m(t){var e=t.sideMaterial,r=t.reflectionMaterial,i=t.args,o=t.position,s=t.rotation,h=t.layers,u=Object(a.useRef)({});return Object(c.b)((function(){u.current.rotation.x+=8e-5,u.current.rotation.y+=8e-4})),Object(n.jsx)(b.a,{layers:h,ref:u,args:i,position:o,rotation:s,material:[e,e,e,e,r,r]})}m.defaultProps={args:void 0,position:void 0,rotation:void 0,layers:[0]};var M=m,_={mirrors:[{args:[2.8,2.9,.05],position:[3.1,-2.1,-7.9],rotation:[1.2,-1.6,1]},{args:[2,3.3,.05],position:[-2.3,1.5,-6.5],rotation:[3,-.2,.7]},{args:[2.8,2.9,.05],position:[1.2,2.8,-6.4],rotation:[-1.3,2.8,-.1]},{args:[2.2,1.3,.05],position:[4.5,.9,-5.8],rotation:[-2.3,.6,-.3]},{args:[1.7,2.6,.05],position:[-2.8,-3,-5.4],rotation:[-1.4,3,2.5]},{args:[1.1,1.8,.05],position:[-0,-1.3,-2.4],rotation:[3,1,1]},{args:[2.2,2.6,.05],position:[-4.1,-.3,-2.4],rotation:[1.4,1.8,-2.2]},{args:[2,1.5,.05],position:[6.5,-2.6,-6.2],rotation:[1.1,.5,.4]},{args:[1,1,.05],position:[-3,2.5,-1.5],rotation:[4,-1,5]},{args:[1.3,1.5,.05],position:[3.6,-4.1,-4.3],rotation:[-.7,1.4,2]},{args:[5.1,4.4,.05],position:[.6,7,-8.3],rotation:[-0,1.9,.5]}]};var w=function(t){var e=t.envMap,r=t.layers,i=t.thinFilmFresnel,o=Object(a.useState)(new F),s=Object(x.a)(o,1)[0],h=Object(c.d)(),u=Object(c.d)();return Object(n.jsxs)("group",{children:[Object(n.jsx)("meshLambertMaterial",{ref:h,map:i?s:void 0,color:"#AAAAAA",opacity:.7,transparent:!0}),Object(n.jsx)("meshLambertMaterial",{ref:u,envMap:e,color:"#FFFFFF",opacity:.3,transparent:!0}),_.mirrors.map((function(t,e){return Object(n.jsx)(M,{layers:r,args:[t.args[0],t.args[1],t.args[2]],position:[t.position[0],t.position[1],t.position[2]],rotation:[t.rotation[0],t.rotation[1],t.rotation[2]],sideMaterial:h.current,reflectionMaterial:u.current},e)}))]})},k=r(14),I=r(60);function D(t){var e=t.layers,r=t.position,i=t.content,o=t.color,s=Object(k.a)(t,["layers","position","content","color"]),c=Object(a.useRef)({});return Object(a.useEffect)((function(){c.current.lookAt(0,0,0)}),[]),Object(n.jsx)("group",Object(f.a)(Object(f.a)({},s),{},{position:r,ref:c,children:Object(n.jsx)(I.a,{layers:e,"material-color":o,fontSize:5,children:i})}))}D.defaultProps={color:"#FFFFFF"};var V=D;function T(){var t=Object(h.a)(["\n  position: absolute;\n\n  background-color: black;\n\n  width: 100vw;\n  height: 100vh;\n"]);return T=function(){return t},t}var B=u.a.div(T());function R(t,e,r,n,a){return(a-r)/(n-e)*(t-e)+r}function S(){var t=Object(d.a)("C8D1DC_575B62_818892_6E747B"),e=Object(x.a)(t,1)[0];return Object(n.jsx)(b.b,{layers:[11],name:"background",args:[20,4],position:[0,0,-5],children:e instanceof j.Texture?Object(n.jsx)("meshMatcapMaterial",{matcap:e,side:j.BackSide,transparent:!0,opacity:.3,color:"#FFFFFF"}):Object(n.jsx)(n.Fragment,{})})}function q(t){var e=t.layers,r=t.content,i=t.color,o=Object(a.useMemo)((function(){return new j.DodecahedronGeometry(25).vertices}),[]);return Object(n.jsx)("group",{children:o.map((function(t,a){return Object(n.jsx)(V,{color:i,layers:e,position:t,content:r},a)}))})}var L=function(t){var e=t.content,r=Object(c.e)().camera,i=Object(a.useRef)({}),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(a.useMemo)((function(){var e={format:j.RGBAFormat,generateMipmaps:!0};return new j.WebGLCubeRenderTarget(1024,Object(f.a)(Object(f.a)({},e),t))}),[t]),r=Object(a.useRef)({});return Object(c.b)((function(t){var e=t.gl,n=t.scene;r.current.update&&r.current.update(e,n)})),{cubeCamera:r,renderTarget:e}}(),s=o.cubeCamera,h=o.renderTarget,u=Object(a.useState)("White"),l=Object(x.a)(u,2),p=l[0],d=l[1],b=Object(a.useState)(!1),y=Object(x.a)(b,2),g=y[0],F=y[1],m=e["Dark"===p?"White":"Dark"],M=e[p],_=Object(a.useRef)(0),k=Object(a.useMemo)((function(){return function(t){_.current+=.01*t.deltaY;var e=0;_.current<0?(_.current=0,e=0):e=_.current<40?1:_.current<45?2:_.current<50?3:_.current<90?4:5;var n=r.position,a=n.x,i=n.y;0===e?r.position.lerp(new j.Vector3(a,i,4),1):1===e?(F(!1),r.position.lerp(new j.Vector3(a,i,R(_.current,0,4,40,-9.9)),1)):2===e?(F(!0),d("White"),r.position.lerp(new j.Vector3(a,i,-9.9),1)):3===e?(F(!0),d("Dark"),r.position.lerp(new j.Vector3(a,i,-9.9),1)):4===e?(F(!1),r.position.lerp(new j.Vector3(a,i,R(_.current,50,-9.9,90,4)),1)):5===e&&r.position.lerp(new j.Vector3(a,i,4),1)}}),[r]);return Object(a.useEffect)((function(){return window.addEventListener("wheel",k),function(){window.removeEventListener("wheel",k)}}),[k]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("color",{attach:"background",args:"Dark"===p?[0,0,0]:[1,1,1]}),Object(n.jsxs)(a.Suspense,{fallback:Object(n.jsx)(O,{}),children:[Object(n.jsx)(S,{}),Object(n.jsx)(q,{color:"Dark"===p?"#FFFFFF":"#000000",layers:[11],content:m}),Object(n.jsx)("cubeCamera",{layers:[11],ref:s,args:[.1,100,h],position:[0,0,5]}),Object(n.jsx)(w,{layers:[0],envMap:h.texture,thinFilmFresnel:"Dark"===p}),Object(n.jsxs)("group",{ref:i,children:[Object(n.jsx)(v.a,{position:[-8.5,5,-17.3],style:{display:g?"block":"none"},children:Object(n.jsx)(B,{})}),Object(n.jsx)(V,{color:"Dark"===p?"#FFFFFF":"#000000",layers:[0],position:"Dark"===p?[0,0,-10]:[.3,-.6,-10],content:M})]})]}),Object(n.jsx)("ambientLight",{intensity:.7})]})};function A(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p,{children:Object(n.jsx)(c.a,{concurrent:!0,shadowMap:!0,camera:{position:[0,.1,4],fov:70},children:Object(n.jsx)(L,{content:{Dark:"Death",White:"Werther"}})})})})}var C=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,63)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;r(t),n(t),a(t),i(t),o(t)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),C()}},[[57,1,2]]]);
//# sourceMappingURL=main.1c4e632b.chunk.js.map