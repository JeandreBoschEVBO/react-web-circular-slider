module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=require("react")},function(t,e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=/^(?:0|[1-9]\d*)$/,u=parseInt,l=Object.prototype.toString,c=Math.ceil,s=Math.max;function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function f(t){return t?(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var i=a.test(t);return i||o.test(t)?u(t.slice(2),i?2:8):r.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}var d,m=function(t,e,n){return n&&"number"!=typeof n&&function(t,e,n){if(!h(n))return!1;var r=typeof e;return!!("number"==r?function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var e=h(t)?l.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}(n)&&function(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||i.test(t))&&t>-1&&t%1==0&&t<e}(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}(t,e,n)&&(e=n=void 0),t=f(t),void 0===e?(e=t,t=0):e=f(e),function(t,e,n,r){for(var a=-1,o=s(c((e-t)/(n||1)),0),i=Array(o);o--;)i[r?o:++a]=t,t+=n;return i}(t,e,n=void 0===n?t<e?1:-1:f(n),d)};t.exports=m},function(t,e,n){"use strict";n.r(e),n.d(e,"CircularSlider",(function(){return ct}));var r=n(0),a=n.n(r),o=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t};function i(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function u(){}var l="\\s*([+-]?\\d+)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",h=/^#([0-9a-f]{3,8})$/,f=new RegExp("^rgb\\("+[l,l,l]+"\\)$"),d=new RegExp("^rgb\\("+[s,s,s]+"\\)$"),m=new RegExp("^rgba\\("+[l,l,l,c]+"\\)$"),g=new RegExp("^rgba\\("+[s,s,s,c]+"\\)$"),p=new RegExp("^hsl\\("+[c,s,s]+"\\)$"),y=new RegExp("^hsla\\("+[c,s,s,c]+"\\)$"),b={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function v(){return this.rgb().formatHex()}function M(){return this.rgb().formatRgb()}function w(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=h.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?k(e):3===n?new E(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?x(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?x(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=f.exec(t))?new E(e[1],e[2],e[3],1):(e=d.exec(t))?new E(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=m.exec(t))?x(e[1],e[2],e[3],e[4]):(e=g.exec(t))?x(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=p.exec(t))?O(e[1],e[2]/100,e[3]/100,1):(e=y.exec(t))?O(e[1],e[2]/100,e[3]/100,e[4]):b.hasOwnProperty(t)?k(b[t]):"transparent"===t?new E(NaN,NaN,NaN,0):null}function k(t){return new E(t>>16&255,t>>8&255,255&t,1)}function x(t,e,n,r){return r<=0&&(t=e=n=NaN),new E(t,e,n,r)}function N(t){return t instanceof u||(t=w(t)),t?new E((t=t.rgb()).r,t.g,t.b,t.opacity):new E}function E(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function I(){return"#"+j(this.r)+j(this.g)+j(this.b)}function P(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function j(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function O(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new C(t,e,n,r)}function S(t){if(t instanceof C)return new C(t.h,t.s,t.l,t.opacity);if(t instanceof u||(t=w(t)),!t)return new C;if(t instanceof C)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,a=Math.min(e,n,r),o=Math.max(e,n,r),i=NaN,l=o-a,c=(o+a)/2;return l?(i=e===o?(n-r)/l+6*(n<r):n===o?(r-e)/l+2:(e-n)/l+4,l/=c<.5?o+a:2-o-a,i*=60):l=c>0&&c<1?0:i,new C(i,l,c,t.opacity)}function C(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function H(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}o(u,w,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:v,formatHex:v,formatHsl:function(){return S(this).formatHsl()},formatRgb:M,toString:M}),o(E,(function(t,e,n,r){return 1===arguments.length?N(t):new E(t,e,n,null==r?1:r)}),i(u,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new E(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new E(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:I,formatHex:I,formatRgb:P,toString:P})),o(C,(function(t,e,n,r){return 1===arguments.length?S(t):new C(t,e,n,null==r?1:r)}),i(u,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new C(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new C(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,a=2*n-r;return new E(H(t>=240?t-240:t+120,a,r),H(t,a,r),H(t<120?t+240:t-120,a,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var F=Math.PI/180,$=180/Math.PI,A=6/29,T=3*A*A;function q(t){if(t instanceof R)return new R(t.l,t.a,t.b,t.opacity);if(t instanceof W)return _(t);t instanceof E||(t=N(t));var e,n,r=D(t.r),a=D(t.g),o=D(t.b),i=X((.2225045*r+.7168786*a+.0606169*o)/1);return r===a&&a===o?e=n=i:(e=X((.4360747*r+.3850649*a+.1430804*o)/.96422),n=X((.0139322*r+.0971045*a+.7141733*o)/.82521)),new R(116*i-16,500*(e-i),200*(i-n),t.opacity)}function R(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function X(t){return t>.008856451679035631?Math.pow(t,1/3):t/T+4/29}function Y(t){return t>A?t*t*t:T*(t-4/29)}function z(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function D(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function L(t){if(t instanceof W)return new W(t.h,t.c,t.l,t.opacity);if(t instanceof R||(t=q(t)),0===t.a&&0===t.b)return new W(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*$;return new W(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function V(t,e,n,r){return 1===arguments.length?L(t):new W(t,e,n,null==r?1:r)}function W(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}function _(t){if(isNaN(t.h))return new R(t.l,0,0,t.opacity);var e=t.h*F;return new R(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}o(R,(function(t,e,n,r){return 1===arguments.length?q(t):new R(t,e,n,null==r?1:r)}),i(u,{brighter:function(t){return new R(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new R(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new E(z(3.1338561*(e=.96422*Y(e))-1.6168667*(t=1*Y(t))-.4906146*(n=.82521*Y(n))),z(-.9787684*e+1.9161415*t+.033454*n),z(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),o(W,V,i(u,{brighter:function(t){return new W(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new W(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return _(this).rgb()}}));var U=function(t){return function(){return t}};function G(t,e){return function(n){return t+n*e}}function B(t,e){var n=e-t;return n?G(t,n):U(isNaN(t)?e:t)}function J(t){return function(e,n){var r=t((e=V(e)).h,(n=V(n)).h),a=B(e.c,n.c),o=B(e.l,n.l),i=B(e.opacity,n.opacity);return function(t){return e.h=r(t),e.c=a(t),e.l=o(t),e.opacity=i(t),e+""}}}var K=J((function(t,e){var n=e-t;return n?G(t,n>180||n<-180?n-360*Math.round(n/360):n):U(isNaN(t)?e:t)})),Q=(J(B),n(1)),Z=n.n(Q),tt=function(t){var e=t.r,n=t.stroke,r=e-5,o=e-30;return a.a.createElement("g",null,Z()(48).map((function(t){var e=Math.cos(2*Math.PI/48*t),o=Math.sin(2*Math.PI/48*t);return a.a.createElement("line",{key:t,stroke:n,strokeWidth:t%4==0?3:1,x1:e*r,y1:o*r,x2:e*(r-7),y2:o*(r-7)})})),a.a.createElement("g",{transform:"translate(0, 5)"},Z()(12).map((function(t,e){return a.a.createElement("text",{key:e,fill:n,fontSize:"16",textAnchor:"middle",x:o*Math.cos(2*Math.PI/12*e-Math.PI/2+Math.PI/6),y:o*Math.sin(2*Math.PI/12*e-Math.PI/2+Math.PI/6)},t+1)}))))};function et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,u=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(t){c=!0,a=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var rt=a.a.createElement("g",null,a.a.createElement("path",{d:"M2,12.9h1.7h3h2.7h3H14c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7c-0.9,0-1.7-0.7-1.7-1.7v-4 c0-2.1-1.5-3.8-3.4-4.2C9,1.6,9,1.4,9,1.3c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1c0,0.2,0,0.3,0.1,0.4c-2,0.4-3.4,2.1-3.4,4.2v4 c0,0.9-0.7,1.7-1.7,1.7c-0.4,0-0.7,0.3-0.7,0.7C1.3,12.6,1.6,12.9,2,12.9z"}),a.a.createElement("path",{d:"M8,15.7c1.1,0,2.1-0.9,2.1-2.1H5.9C5.9,14.8,6.9,15.7,8,15.7z"})),at=a.a.createElement("g",null,a.a.createElement("path",{d:"M11.7,10.5c-3.6,0-6.4-2.9-6.4-6.4c0-0.7,0.1-1.4,0.4-2.1C3.1,2.9,1.2,5.3,1.2,8.1c0,3.6,2.9,6.4,6.4,6.4 c2.8,0,5.2-1.8,6.1-4.4C13.1,10.4,12.4,10.5,11.7,10.5z"}),a.a.createElement("path",{d:"M8,7.6l2-2.5H8V4.4H11v0.6L9,7.6h2v0.7H8V7.6z"}),a.a.createElement("path",{d:"M11.7,5.4l1.5-1.9h-1.4V3h2.2v0.5l-1.5,1.9h1.5v0.5h-2.2V5.4z"}),a.a.createElement("path",{d:"M9.4,3l1.1-1.4h-1V1.3H11v0.4L9.9,3H11v0.4H9.4V3z"})),ot=function(t){return 5*Math.round(t/(2*Math.PI/144))},it=function(t){var e=ot(t),n=Math.floor(e/60);return{h:0===n?12:n,m:e-60*n}},ut=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.PI,o=r%(2*Math.PI),i=a%(2*Math.PI),u=t+1,l=i/e*(u-1)+o,c=i/e*u+o,s=n*Math.sin(l),h=-n*Math.cos(l),f=n*Math.sin(c),d=-n*Math.cos(c),m=n*Math.sin(c+.005),g=-n*Math.cos(c+.005);return{fromX:s,fromY:h,toX:m,toY:g,realToX:f,realToY:d}},lt=function(t){return"gradient".concat(t)},ct=function(t){var e=t.segments,n=void 0===e?5:e,o=t.strokeWidth,i=void 0===o?40:o,u=t.radius,l=void 0===u?145:u,c=t.bgCircleColor,s=void 0===c?"#171717":c,h=t.gradientColorFrom,f=void 0===h?"#ff9800":h,d=t.gradientColorTo,m=void 0===d?"#ffcf00":d,g=t.showClockFace,p=void 0===g||g,y=t.clockFaceColor,b=void 0===y?"#9d9d9d":y,v=t.startIcon,M=void 0===v?a.a.createElement("g",{scale:"1.1",transform:"translate(-8, -8)"},at):v,w=t.stopIcon,k=void 0===w?a.a.createElement("g",{scale:"1.1",transform:"translate(-8, -8)"},rt):w,x=t.onUpdate,N=void 0===x?null:x,E=t.onStartUpdate,I=void 0===E?null:E,P=t.onEndUpdate,j=void 0===P?null:P,O=et(Object(r.useState)(!1),2),S=O[0],C=O[1],H=et(Object(r.useState)(!1),2),F=H[0],$=H[1],A=et(Object(r.useState)(6*Math.PI/6),2),T=A[0],q=A[1],R=et(Object(r.useState)(9*Math.PI/6),2),X=R[0],Y=R[1],z=Object(r.useRef)(null),D=function(t){(t=t||window.event).preventDefault();var e=(X+T)%(2*Math.PI),n=Math.atan2(t.clientY-F,t.clientX-S)+Math.PI/2;n<0&&(n+=2*Math.PI);var r=e-n;r<0&&(r+=2*Math.PI);var a=it(n),o=it((n+r)%(2*Math.PI)),i=ot(r);null!==N&&N({startAngle:n,angleLength:r%(2*Math.PI),startTime:a,endTime:o,durationMinutes:i}),null!==I&&I({startAngle:n,startTime:a,durationMinutes:i}),Y(n),q(r%(2*Math.PI))},L=function(t){(t=t||window.event).preventDefault();var e=(Math.atan2(t.clientY-F,t.clientX-S)+Math.PI/2-X)%(2*Math.PI);e<0&&(e+=2*Math.PI);var n=it(X),r=it((X+e)%(2*Math.PI)),a=ot(e);null!==N&&N({startAngle:X,angleLength:e,startTime:n,endTime:r,durationMinutes:a}),null!==j&&j({angleLength:e,endTime:r,durationMinutes:a}),q(e)},V=i+2*l+2,W=ut(0,n,l,X,T),_=ut(n-1,n,l,X,T);return Object(r.useEffect)((function(){var t,e,n,r,a;t=z.current.getBoundingClientRect(),e=t.x,n=t.y,r=t.width,a=t.height,C(r/2+e),$(a/2+n)}),[]),a.a.createElement("svg",{height:V,width:V,ref:function(t){return z.current=t}},a.a.createElement("defs",null,Z()(n).map((function(t){var e=ut(t,n,l,X,T),r=e.fromX,o=e.fromY,i=e.toX,u=e.toY,c=function(t,e,n,r){var a=K(n,r);return{fromColor:a(t/e),toColor:a((t+1)/e)}}(t,n,f,m),s=c.fromColor,h=c.toColor;return a.a.createElement("linearGradient",{key:t,id:lt(t),x1:r.toFixed(2),y1:o.toFixed(2),x2:i.toFixed(2),y2:u.toFixed(2)},a.a.createElement("stop",{offset:"0%",stopColor:s}),a.a.createElement("stop",{offset:"1",stopColor:h}))}))),a.a.createElement("g",{transform:"translate(".concat(i/2+l+1,", ").concat(i/2+l+1,")")},a.a.createElement("circle",{r:l,strokeWidth:i,fill:"transparent",stroke:s}),p&&a.a.createElement(tt,{r:l-i/2,stroke:b}),Z()(n).map((function(t){var e=ut(t,n,l,X,T),r=e.fromX,o=e.fromY,u=e.toX,c=e.toY,s="M ".concat(r.toFixed(2)," ").concat(o.toFixed(2)," A ").concat(l," ").concat(l," 0 0 1 ").concat(u.toFixed(2)," ").concat(c.toFixed(2));return a.a.createElement("path",{d:s,key:t,strokeWidth:i,stroke:"url(#".concat(lt(t),")"),fill:"transparent"})})),a.a.createElement("g",{fill:f,transform:"translate(".concat(W.fromX,", ").concat(W.fromY,")"),onMouseDown:function(t){(t=t||window.event).preventDefault(),document.onmouseup=function(){document.onmouseup=null,document.onmousemove=null},document.onmousemove=D}},a.a.createElement("circle",{r:(i-1)/2,fill:s,stroke:f,strokeWidth:"1"}),M),a.a.createElement("g",{fill:m,transform:"translate(".concat(_.toX,", ").concat(_.toY,")"),onMouseDown:function(t){(t=t||window.event).preventDefault(),document.onmouseup=function(){document.onmouseup=null,document.onmousemove=null},document.onmousemove=L}},a.a.createElement("circle",{r:(i-1)/2,fill:s,stroke:m,strokeWidth:"1"}),k)))}}]);