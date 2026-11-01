var cd=0,Vc=1,hd=2;var jr=1,ud=2,ir=3,Ki=0,fn=1,yn=2,pi=0,Ji=1,ji=2,Wc=3,Xc=4,dd=5;var xs=100,fd=101,pd=102,md=103,gd=104,xd=200,_d=201,vd=202,yd=203,qc=204,$c=205,bd=206,Md=207,Sd=208,wd=209,Td=210,Ed=211,Ad=212,Cd=213,Rd=214,io=0,so=1,ro=2,Js=3,ao=4,oo=5,lo=6,co=7,Yc=0,Pd=1,Id=2,jn=0,Zc=1,Kc=2,Jc=3,jc=4,Qc=5,th=6,eh=7;var nh=300,Qi=301,_s=302,Uo=303,Fo=304,Qr=306,Ai=1e3,Bn=1001,ho=1002,je=1003,Ld=1004;var ta=1005;var qe=1006,Oo=1007;var ts=1008;var Pn=1009,ih=1010,sh=1011,sr=1012,ko=1013,Qn=1014,ti=1015,ei=1016,Bo=1017,zo=1018,rr=1020,rh=35902,ah=35899,oh=1021,lh=1022,Hn=1023,hi=1026,es=1027,ch=1028,Ho=1029,ns=1030,Go=1031;var Vo=1033,ea=33776,na=33777,ia=33778,sa=33779,Wo=35840,Xo=35841,qo=35842,$o=35843,Yo=36196,Zo=37492,Ko=37496,Jo=37488,jo=37489,ra=37490,Qo=37491,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,aa=36285,vl=36286;var Nr=2300,uo=2301,eo=2302,Fc=2303,Oc=2400,kc=2401,Bc=2402;var Dd=3200;var hh=0,Nd=1,Ci="",Ie="srgb",Ur="srgb-linear",Fr="linear",de="srgb";var no=7680;var Ud=519,Fd=512,Od=513,kd=514,yl=515,Bd=516,zd=517,bl=518,Hd=519,Gd=35044;var uh="300 es",Jn=2e3,Or=2001;function am(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function om(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=kr("canvas");return i.style.display="block",i}var Hu={},js=null;function dh(...i){let t="THREE."+i.shift();js?js("log",t,...i):console.log(t,...i)}function Wd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Wd(i);let t="THREE."+i.shift();if(js)js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=Wd(i);let t="THREE."+i.shift();if(js)js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ms(...i){let t=i.join(" ");t in Hu||(Hu[t]=!0,zt(...i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qd={[io]:so,[ro]:lo,[ao]:co,[Js]:oo,[so]:io,[lo]:ro,[co]:ao,[oo]:Js},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=1234567,Lr=Math.PI/180,Qs=180/Math.PI;function ar(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function fh(i,t){return(i%t+t)%t}function lm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cm(i,t,e){return i!==t?(e-i)/(t-i):0}function Dr(i,t,e){return(1-e)*i+e*t}function hm(i,t,e,n){return Dr(i,t,1-Math.exp(-e*n))}function um(i,t=1){return t-Math.abs(fh(i,t*2)-t)}function dm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mm(i,t){return i+Math.random()*(t-i)}function gm(i){return i*(.5-Math.random())}function xm(i){i!==void 0&&(Gu=i);let t=Gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _m(i){return i*Lr}function vm(i){return i*Qs}function ym(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*m,o*h,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ph={DEG2RAD:Lr,RAD2DEG:Qs,generateUUID:ar,clamp:ie,euclideanModulo:fh,mapLinear:lm,inverseLerp:cm,lerp:Dr,damp:hm,pingpong:um,smoothstep:dm,smootherstep:fm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:xm,degToRad:_m,radToDeg:vm,isPowerOfTwo:ym,ceilPowerOfTwo:bm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:Sm,normalize:un,denormalize:Zs},vh=class vh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vh.prototype.isVector2=!0;var se=vh,di=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(d!==g||l!==u||c!==m||h!==x){let p=l*u+c*m+h*x+d*g;p<0&&(u=-u,m=-m,x=-x,g=-g,p=-p);let f=1-o;if(p<.9995){let w=Math.acos(p),P=Math.sin(w);f=Math.sin(f*w)/P,o=Math.sin(o*w)/P,l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+g*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+g*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*d+l*m-c*u,t[e+1]=l*x+h*u+c*d-o*m,t[e+2]=c*x+h*m+o*u-l*d,t[e+3]=h*x-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"YZX":this._x=u*h*d+c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d-u*m*x;break;case"XZY":this._x=u*h*d-c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d+u*m*x;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yh=class yh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;var Z=yh,gc=new Z,Vu=new di,bh=class bh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],x=n[8],g=s[0],p=s[3],f=s[6],w=s[1],P=s[4],S=s[7],T=s[2],E=s[5],D=s[8];return r[0]=a*g+o*w+l*T,r[3]=a*p+o*P+l*E,r[6]=a*f+o*S+l*D,r[1]=c*g+h*w+d*T,r[4]=c*p+h*P+d*E,r[7]=c*f+h*S+d*D,r[2]=u*g+m*w+x*T,r[5]=u*p+m*P+x*E,r[8]=u*f+m*S+x*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,x=e*d+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(t,e)),this}rotate(t){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-t)),this}translate(t,e){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;var qt=bh,xc=new qt,Wu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var ne=wm();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=kr("canvas")),Fs.width=t.width,Fs.height=t.height;let s=Fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tm=0,tr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_c(s[a].image)):r.push(_c(s[a]))}else r=_c(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Em=0,vc=new Z,Qe=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=qe,a=ts,o=Hn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ar(),this.name="",this.source=new tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=nh;Qe.DEFAULT_ANISOTROPY=1;var Mh=class Mh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],x=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,S=(m+1)/2,T=(f+1)/2,E=(h+u)/4,D=(d+g)/4,y=(x+p)/4;return P>S&&P>T?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=E/n,r=D/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=D/r,s=y/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-x)*(p-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(d-g)/w,this.z=(u-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;var Ee=Mh,po=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new tr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var No=class No{constructor(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=x,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new No().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),a=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,x=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+x*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,x=c*h,g=c*d;e[0]=u+g*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,x=c*h,g=c*d;e[0]=u-g*o,e[4]=-a*d,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,x=o*h,g=o*d;e[0]=l*h,e[4]=x*c-m,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-u*d,e[8]=x*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+x,e[10]=u-g*d}else if(t.order==="XZY"){let u=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=a*h,e[9]=m*d-x,e[2]=x*d-m,e[6]=o*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Cm)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Oi.crossVectors(n,Tn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Oi.crossVectors(n,Tn)),Oi.normalize(),Na.crossVectors(Tn,Oi),s[0]=Oi.x,s[4]=Na.x,s[8]=Tn.x,s[1]=Oi.y,s[5]=Na.y,s[9]=Tn.y,s[2]=Oi.z,s[6]=Na.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],x=n[2],g=n[6],p=n[10],f=n[14],w=n[3],P=n[7],S=n[11],T=n[15],E=s[0],D=s[4],y=s[8],M=s[12],R=s[1],U=s[5],O=s[9],N=s[13],C=s[2],F=s[6],H=s[10],W=s[14],K=s[3],v=s[7],A=s[11],I=s[15];return r[0]=a*E+o*R+l*C+c*K,r[4]=a*D+o*U+l*F+c*v,r[8]=a*y+o*O+l*H+c*A,r[12]=a*M+o*N+l*W+c*I,r[1]=h*E+d*R+u*C+m*K,r[5]=h*D+d*U+u*F+m*v,r[9]=h*y+d*O+u*H+m*A,r[13]=h*M+d*N+u*W+m*I,r[2]=x*E+g*R+p*C+f*K,r[6]=x*D+g*U+p*F+f*v,r[10]=x*y+g*O+p*H+f*A,r[14]=x*M+g*N+p*W+f*I,r[3]=w*E+P*R+S*C+T*K,r[7]=w*D+P*U+S*F+T*v,r[11]=w*y+P*O+S*H+T*A,r[15]=w*M+P*N+S*W+T*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],x=t[3],g=t[7],p=t[11],f=t[15],w=l*m-c*u,P=o*m-c*d,S=o*u-l*d,T=a*m-c*h,E=a*u-l*h,D=a*d-o*h;return e*(g*w-p*P+f*S)-n*(x*w-p*T+f*E)+s*(x*P-g*T+f*D)-r*(x*S-g*E+p*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],x=t[12],g=t[13],p=t[14],f=t[15],w=e*o-n*a,P=e*l-s*a,S=e*c-r*a,T=n*l-s*o,E=n*c-r*o,D=s*c-r*l,y=h*g-d*x,M=h*p-u*x,R=h*f-m*x,U=d*p-u*g,O=d*f-m*g,N=u*f-m*p,C=w*N-P*O+S*U+T*R-E*M+D*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return t[0]=(o*N-l*O+c*U)*F,t[1]=(s*O-n*N-r*U)*F,t[2]=(g*D-p*E+f*T)*F,t[3]=(u*E-d*D-m*T)*F,t[4]=(l*R-a*N-c*M)*F,t[5]=(e*N-s*R+r*M)*F,t[6]=(p*S-x*D-f*P)*F,t[7]=(h*D-u*S+m*P)*F,t[8]=(a*O-o*R+c*y)*F,t[9]=(n*R-e*O-r*y)*F,t[10]=(x*E-g*S+f*w)*F,t[11]=(d*S-h*E-m*w)*F,t[12]=(o*M-a*U-l*y)*F,t[13]=(e*U-n*M+s*y)*F,t[14]=(g*P-x*T-p*w)*F,t[15]=(h*T-d*P+u*w)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,x=r*d,g=a*h,p=a*d,f=o*d,w=l*c,P=l*h,S=l*d,T=n.x,E=n.y,D=n.z;return s[0]=(1-(g+f))*T,s[1]=(m+S)*T,s[2]=(x-P)*T,s[3]=0,s[4]=(m-S)*E,s[5]=(1-(u+f))*E,s[6]=(p+w)*E,s[7]=0,s[8]=(x+P)*D,s[9]=(p-w)*D,s[10]=(1-(u+g))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$n.copy(this);let c=1/a,h=1/o,d=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,e.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===Jn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Or)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===Jn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===Or)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};No.prototype.isMatrix4=!0;var Ue=No,Os=new Z,$n=new Ue,Am=new Z(0,0,0),Cm=new Z(1,1,1),Oi=new Z,Na=new Z,Tn=new Z,qu=new Ue,$u=new di,Vi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rm=0,Yu=new Z,ks=new di,yi=new Ue,Ua=new Z,Cr=new Z,Pm=new Z,Im=new di,Zu=new Z(1,0,0),Ku=new Z(0,1,0),Ju=new Z(0,0,1),ju={type:"added"},Lm={type:"removed"},Bs={type:"childadded",child:null},yc={type:"childremoved",child:null},An=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Vi,n=new di,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new qt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Zu,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return Yu.copy(t).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zu,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ua.copy(t):Ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Cr,Ua,this.up):yi.lookAt(Ua,Cr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(yi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lm),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new Z(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dm={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=fh(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bc(a,r,t+1/3),this.g=bc(a,r,t),this.b=bc(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.workingToColorSpace(on.copy(this),t),Math.round(ie(on.r*255,0,255))*65536+Math.round(ie(on.g*255,0,255))*256+Math.round(ie(on.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Ie){ne.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Fa);let n=Dr(ki.h,Fa.h,e),s=Dr(ki.s,Fa.s,e),r=Dr(ki.l,Fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Yt;Yt.NAMES=$d;var Hr=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yn=new Z,bi=new Z,Mc=new Z,Mi=new Z,zs=new Z,Hs=new Z,Qu=new Z,Sc=new Z,wc=new Z,Tc=new Z,Ec=new Ee,Ac=new Ee,Cc=new Ee,Gi=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),bi.subVectors(n,e),Mc.subVectors(t,e);let a=Yn.dot(Yn),o=Yn.dot(bi),l=Yn.dot(Mc),c=bi.dot(bi),h=bi.dot(Mc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ec.setScalar(0),Ac.setScalar(0),Cc.setScalar(0),Ec.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,n),Cc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ec,r.x),a.addScaledVector(Ac,r.y),a.addScaledVector(Cc,r.z),a}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),bi.subVectors(t,e),Yn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Yn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,n),Hs.subVectors(r,n),Sc.subVectors(t,n);let l=zs.dot(Sc),c=Hs.dot(Sc);if(l<=0&&c<=0)return e.copy(n);wc.subVectors(t,s);let h=zs.dot(wc),d=Hs.dot(wc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(zs,a);Tc.subVectors(t,r);let m=zs.dot(Tc),x=Hs.dot(Tc);if(x>=0&&m<=x)return e.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Hs,o);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return Qu.subVectors(r,s),o=(d-h)/(d-h+(m-x)),e.copy(s).addScaledVector(Qu,o);let f=1/(p+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(zs,a).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(t.matrixWorld),this.union(Oa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),ka.subVectors(this.max,Rr),Gs.subVectors(t.a,Rr),Vs.subVectors(t.b,Rr),Ws.subVectors(t.c,Rr),Bi.subVectors(Vs,Gs),zi.subVectors(Ws,Vs),us.subVectors(Gs,Ws);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-us.z,us.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,us.z,0,-us.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-us.y,us.x,0];return!Rc(e,Gs,Vs,Ws,ka)||(e=[1,0,0,0,1,0,0,0,1],!Rc(e,Gs,Vs,Ws,ka))?!1:(Ba.crossVectors(Bi,zi),e=[Ba.x,Ba.y,Ba.z],Rc(e,Gs,Vs,Ws,ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Zn=new Z,Oa=new Wi,Gs=new Z,Vs=new Z,Ws=new Z,Bi=new Z,zi=new Z,us=new Z,Rr=new Z,ka=new Z,Ba=new Z,ds=new Z;function Rc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ds.fromArray(i,r);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ve=new Z,za=new se,Nm=0,We=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gd,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)za.fromBufferAttribute(this,e),za.applyMatrix3(t),this.setXY(e,za.x,za.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Gr=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var zn=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},Um=new Wi,Pr=new Z,Pc=new Z,gs=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Pc)),this.expandByPoint(Pr.copy(t.center).sub(Pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fm=0,kn=new Ue,Ic=new An,Xs=new Z,En=new Wi,Ir=new Wi,Je=new Z,dn=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(am(t)?Vr:Gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Ic.lookAt(t),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(En.min,Ir.min),En.expandByPoint(Je),Je.addVectors(En.max,Ir.max),En.expandByPoint(Je)):(En.expandByPoint(Ir.min),En.expandByPoint(Ir.max))}En.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(t,c),Je.add(Xs)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new Z,l[y]=new Z;let c=new Z,h=new Z,d=new Z,u=new se,m=new se,x=new se,g=new Z,p=new Z;function f(y,M,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),m.fromBufferAttribute(r,M),x.fromBufferAttribute(r,R),h.sub(c),d.sub(c),m.sub(u),x.sub(u);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(U),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(U),o[y].add(g),o[M].add(g),o[R].add(g),l[y].add(p),l[M].add(p),l[R].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let y=0,M=w.length;y<M;++y){let R=w[y],U=R.start,O=R.count;for(let N=U,C=U+O;N<C;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let P=new Z,S=new Z,T=new Z,E=new Z;function D(y){T.fromBufferAttribute(s,y),E.copy(T);let M=o[y];P.copy(M),P.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(E,M);let U=S.dot(l[y])<0?-1:1;a.setXYZW(y,P.x,P.y,P.z,U)}for(let y=0,M=w.length;y<M;++y){let R=w[y],U=R.start,O=R.count;for(let N=U,C=U+O;N<C;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(t)for(let u=0,m=t.count;u<m;u+=3){let x=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)u[x++]=c[m++]}return new We(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Lc=new Z,Om=new Z,km=new qt,Kn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Lc.subVectors(n,e).cross(Om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||km.getNormalMatrix(t),s=this.coplanarPoint(Lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bm=0,Xi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Ji,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wi=new Z,Dc=new Z,Ha=new Z,Ga=new Z,Wr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dc.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),Ga.copy(this.origin).sub(Dc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ha),o=Ga.dot(this.direction),l=-Ga.dot(Ha),c=Ga.lengthSq(),h=Math.abs(1-a*a),d,u,m,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dc).addScaledVector(Ha,u),m}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,x=e.x-a.x,g=e.y-a.y,p=e.z-a.z,f=n.x-a.x,w=n.y-a.y,P=n.z-a.z,S=Math.abs(l),T=Math.abs(c),E=Math.abs(h),D,y,M,R,U,O,N,C,F,H,W,K;if(S>=T&&S>=E?(M=l,O=d,F=x,K=f,l>=0?(D=c,y=h,R=u,U=m,N=g,C=p,H=w,W=P):(D=h,y=c,R=m,U=u,N=p,C=g,H=P,W=w)):T>=E?(M=c,O=u,F=g,K=w,c>=0?(D=h,y=l,R=m,U=d,N=p,C=x,H=P,W=f):(D=l,y=h,R=d,U=m,N=x,C=p,H=f,W=P)):(M=h,O=m,F=p,K=P,h>=0?(D=l,y=c,R=d,U=u,N=x,C=g,H=f,W=w):(D=c,y=l,R=u,U=d,N=g,C=x,H=w,W=f)),M===0)return null;let v=D/M,A=y/M,I=1/M,V=R-v*O,j=U-A*O,ht=N-v*F,tt=C-A*F,ut=H-v*K,Y=W-A*K,et=ut*tt-Y*ht,vt=V*Y-j*ut,kt=ht*j-tt*V;if(s){if(et<0||vt<0||kt<0)return null}else if((et<0||vt<0||kt<0)&&(et>0||vt>0||kt>0))return null;let Tt=et+vt+kt;if(Tt===0)return null;let Xt=I*(et*O+vt*F+kt*K);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},td=new Ue,fs=new Wr,Va=new gs,ed=new Z,Wa=new Z,Xa=new Z,qa=new Z,Nc=new Z,$a=new Z,nd=new Z,Ya=new Z,Ae=class extends An{constructor(t=new dn,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Nc.fromBufferAttribute(d,t),a?$a.addScaledVector(Nc,h):$a.addScaledVector(Nc.sub(e),h))}e.add($a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(Va.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Va,ed)===null||fs.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(r).invert(),fs.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let p=u[x],f=a[p.materialIndex],w=Math.max(p.start,m.start),P=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,T=P;S<T;S+=3){let E=o.getX(S),D=o.getX(S+1),y=o.getX(S+2);s=Za(this,f,t,n,c,h,d,E,D,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let w=o.getX(p),P=o.getX(p+1),S=o.getX(p+2);s=Za(this,a,t,n,c,h,d,w,P,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let p=u[x],f=a[p.materialIndex],w=Math.max(p.start,m.start),P=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,T=P;S<T;S+=3){let E=S,D=S+1,y=S+2;s=Za(this,f,t,n,c,h,d,E,D,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let w=p,P=p+1,S=p+2;s=Za(this,a,t,n,c,h,d,w,P,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function zm(i,t,e,n,s,r,a,o){let l;if(t.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ya);return c<e.near||c>e.far?null:{distance:c,point:Ya.clone(),object:i}}function Za(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Wa),i.getVertexPosition(l,Xa),i.getVertexPosition(c,qa);let h=zm(i,t,e,n,Wa,Xa,qa,nd);if(h){let d=new Z;Gi.getBarycoord(nd,Wa,Xa,qa,d),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,l,c,d,new se)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,l,c,d,new se)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Gi.getNormal(Wa,Xa,qa,u.normal),h.face=u,h.barycoord=d}return h}var go=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=new gs,Hm=new se(.5,.5),Ka=new Z,Xr=class{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],x=r[8],g=r[9],p=r[10],f=r[11],w=r[12],P=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,m-h,f-x,T-w).normalize(),s[1].setComponents(c+a,m+h,f+x,T+w).normalize(),s[2].setComponents(c+o,m+d,f+g,T+P).normalize(),s[3].setComponents(c-o,m-d,f-g,T-P).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,m-u,f-p,T-S).normalize();else if(s[4].setComponents(c-l,m-u,f-p,T-S).normalize(),e===Jn)s[5].setComponents(c+l,m+u,f+p,T+S).normalize();else if(e===Or)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);let e=Hm.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xo=class extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},id=new Ue,zc=new Wr,Ja=new gs,ja=new Z,qr=class extends An{constructor(t=new dn,e=new xo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,t.ray.intersectsSphere(Ja)===!1)return;id.copy(s).invert(),zc.copy(t.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=u,g=m;x<g;x++){let p=c.getX(x);ja.fromBufferAttribute(d,p),sd(ja,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=u,g=m;x<g;x++)ja.fromBufferAttribute(d,x),sd(ja,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sd(i,t,e,n,s,r,a){let o=zc.distanceSqToPoint(i);if(o<e){let l=new Z;zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $r=class extends Qe{constructor(t=[],e=Qi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cn=class extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Qe{constructor(t,e,n=Qn,s,r,a,o=je,l=je,c,h=hi,d=1){if(h!==hi&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_o=class extends qi{constructor(t,e=Qn,n=Qi,s,r,a=je,o=je,l,c=hi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yr=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},nr=class i extends dn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(d,2));function x(g,p,f,w,P,S,T,E,D,y,M){let R=S/D,U=T/y,O=S/2,N=T/2,C=E/2,F=D+1,H=y+1,W=0,K=0,v=new Z;for(let A=0;A<H;A++){let I=A*U-N;for(let V=0;V<F;V++){let j=V*R-O;v[g]=j*w,v[p]=I*P,v[f]=C,c.push(v.x,v.y,v.z),v[g]=0,v[p]=0,v[f]=E>0?1:-1,h.push(v.x,v.y,v.z),d.push(V/D),d.push(1-A/y),W+=1}}for(let A=0;A<y;A++)for(let I=0;I<D;I++){let V=u+I+F*A,j=u+I+F*(A+1),ht=u+(I+1)+F*(A+1),tt=u+(I+1)+F*A;l.push(V,j,tt),l.push(j,ht,tt),K+=6}o.addGroup(m,K,M),m+=K,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var en=class i extends dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,m=[],x=[],g=[],p=[];for(let f=0;f<h;f++){let w=f*u-a;for(let P=0;P<c;P++){let S=P*d-r;x.push(S,-w,0),g.push(0,0,1),p.push(P/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let P=w+c*f,S=w+c*(f+1),T=w+1+c*(f+1),E=w+1+c*f;m.push(P,S,E),m.push(S,T,E)}this.setIndex(m),this.setAttribute("position",new zn(x,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rd(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Yd={clone:vs,merge:cn},Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vo=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yo=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bo=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Uc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mo=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kc:r=t,o=2*e-n;break;case Bc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:a=t,l=2*n-e;break;case Bc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),g=x*x,p=g*x,f=-u*p+2*u*g-u*x,w=(1+u)*p+(-1.5-2*u)*g+(-.5+u)*x+1,P=(-1-m)*p+(1.5+m)*g+.5*x,S=m*p-m*g;for(let T=0;T!==o;++T)r[T]=f*a[h+T]+w*a[c+T]+P*a[l+T]+S*a[d+T];return r}},So=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},wo=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},To=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),g=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*g+a[l+p]*x;return r}let u=o*2,m=t-1;for(let x=0;x!==o;++x){let g=a[c+x],p=a[l+x],f=m*u+x*2,w=d[f],P=d[f+1],S=t*u+x*2,T=h[S],E=h[S+1],D=qm(n,e,w,T,s);r[x]=Zd(D,g,P,E,p)}return r}};function Zd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Xm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Zd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Xm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Uc(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new To(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break;case Fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Uc(this.settings)&&(ad(this.settings.inTangents,t),ad(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&om(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===eo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let x=0;x!==n;++x){let g=e[d+x];if(g!==e[u+x]||g!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Uc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ad(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=uo;var Yi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Nr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="color";var Ao=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Ao.prototype.ValueTypeName="number";var Co=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Nr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Ro.prototype.ValueTypeName="vector";var Po=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kd=new Po,Io=class{constructor(t){this.manager=t!==void 0?t:Kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qa=new Z,to=new di,ci=new Z,Kr=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qa,to,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,to,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qa,to,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,to,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new Z,od=new se,ld=new se,ln=class extends Kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,od,ld),e.subVectors(ld,od)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jr=class extends Kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var $s=-90,Ys=1,Lo=class extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln($s,Ys,t,e);s.layers=this.layers,this.add(s);let r=new ln($s,Ys,t,e);r.layers=this.layers,this.add(r);let a=new ln($s,Ys,t,e);a.layers=this.layers,this.add(a);let o=new ln($s,Ys,t,e);o.layers=this.layers,this.add(o);let l=new ln($s,Ys,t,e);l.layers=this.layers,this.add(l);let c=new ln($s,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Do=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gh="\\[\\]\\.:\\/",$m=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Ym="[^"+gh.replace("\\.","")+"]",Zm=/((?:WC+[\/:])*)/.source.replace("WC",xh),Km=/(WCOD+)?/.source.replace("WCOD",Ym),Jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Qm=new RegExp("^"+Zm+Km+Jm+jm+"$"),t0=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($m,"")}static parseTrackName(t){let e=Qm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);t0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Hc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var db=new Float32Array(1);var Sh=class Sh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Sh.prototype.isMatrix2=!0;var Gc=Sh;function _h(i,t,e,n){let s=e0(n);switch(e){case oh:return i*t;case ch:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Vo:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case Yo:case Zo:case Jo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case ra:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e0(i){switch(i){case Pn:case ih:return{byteLength:1,components:1};case sr:case sh:case ei:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case Qn:case ko:case ti:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function i0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],g=d[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let g=d[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ng=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:a0,alphamap_pars_fragment:o0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:d0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:x0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:w0,color_pars_vertex:T0,color_vertex:E0,common:A0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:R0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:L0,emissivemap_pars_fragment:D0,colorspace_fragment:N0,colorspace_pars_fragment:U0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:k0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:K0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:G0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:Y0,lights_pars_begin:Z0,lights_toon_fragment:J0,lights_toon_pars_fragment:j0,lights_phong_fragment:Q0,lights_phong_pars_fragment:tg,lights_physical_fragment:eg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,lightprobes_pars_fragment:ag,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:dg,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:_g,morphnormal_vertex:vg,morphtarget_pars_vertex:yg,morphtarget_vertex:bg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:wg,normal_pars_vertex:Tg,normal_vertex:Eg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Ug,dithering_fragment:Fg,dithering_pars_fragment:Og,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:$g,specularmap_fragment:Yg,specularmap_pars_fragment:Zg,tonemapping_fragment:Kg,tonemapping_pars_fragment:Jg,transmission_fragment:jg,transmission_pars_fragment:Qg,uv_pars_fragment:tx,uv_pars_vertex:ex,uv_vertex:nx,worldpos_vertex:ix,background_vert:sx,background_frag:rx,backgroundCube_vert:ax,backgroundCube_frag:ox,cube_vert:lx,cube_frag:cx,depth_vert:hx,depth_frag:ux,distance_vert:dx,distance_frag:fx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:_x,meshbasic_frag:vx,meshlambert_vert:yx,meshlambert_frag:bx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:wx,meshnormal_frag:Tx,meshphong_vert:Ex,meshphong_frag:Ax,meshphysical_vert:Cx,meshphysical_frag:Rx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Lx,points_frag:Dx,shadow_vert:Nx,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:Ox},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},gi={basic:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:cn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:cn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:cn([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:cn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:cn([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:cn([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:cn([bt.common,bt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:cn([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};gi.physical={uniforms:cn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Ml={r:0,b:0,g:0},kx=new Ue,yf=new qt;yf.set(-1,0,0,0,1,0,0,0,1);function Bx(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){let S=w.backgroundBlurriness>0;P=t.get(P,S)}return P}function x(w){let P=!1,S=m(w);S===null?p(a,o):S&&S.isColor&&(p(S,1),P=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,P){let S=m(P);S&&(S.isCubeTexture||S.mapping===Qr)?(c===void 0&&(c=new Ae(new nr(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:vs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=ne.getTransfer(S.colorSpace)!==de,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ae(new en(2,2),new Le({name:"BackgroundMaterial",uniforms:vs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,P){w.getRGB(Ml,mh(i)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,P,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,P=1){a.set(w),o=P,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(a,o)},render:x,addToRenderList:g,dispose:f}}function zx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,O,N,C,F){let H=!1,W=d(U,C,N,O);r!==W&&(r=W,c(r.object)),H=m(U,C,N,F),H&&x(U,C,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(U,O,N,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,O,N,C){let F=C.wireframe===!0,H=n[O.id];H===void 0&&(H={},n[O.id]=H);let W=U.isInstancedMesh===!0?U.id:0,K=H[W];K===void 0&&(K={},H[W]=K);let v=K[N.id];v===void 0&&(v={},K[N.id]=v);let A=v[F];return A===void 0&&(A=u(l()),v[F]=A),A}function u(U){let O=[],N=[],C=[];for(let F=0;F<e;F++)O[F]=0,N[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:C,object:U,attributes:{},index:null}}function m(U,O,N,C){let F=r.attributes,H=O.attributes,W=0,K=N.getAttributes();for(let v in K)if(K[v].location>=0){let I=F[v],V=H[v];if(V===void 0&&(v==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),v==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),I===void 0||I.attribute!==V||V&&I.data!==V.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function x(U,O,N,C){let F={},H=O.attributes,W=0,K=N.getAttributes();for(let v in K)if(K[v].location>=0){let I=H[v];I===void 0&&(v==="instanceMatrix"&&U.instanceMatrix&&(I=U.instanceMatrix),v==="instanceColor"&&U.instanceColor&&(I=U.instanceColor));let V={};V.attribute=I,I&&I.data&&(V.data=I.data),F[v]=V,W++}r.attributes=F,r.attributesNum=W,r.index=C}function g(){let U=r.newAttributes;for(let O=0,N=U.length;O<N;O++)U[O]=0}function p(U){f(U,0)}function f(U,O){let N=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;N[U]=1,C[U]===0&&(i.enableVertexAttribArray(U),C[U]=1),F[U]!==O&&(i.vertexAttribDivisor(U,O),F[U]=O)}function w(){let U=r.newAttributes,O=r.enabledAttributes;for(let N=0,C=O.length;N<C;N++)O[N]!==U[N]&&(i.disableVertexAttribArray(N),O[N]=0)}function P(U,O,N,C,F,H,W){W===!0?i.vertexAttribIPointer(U,O,N,F,H):i.vertexAttribPointer(U,O,N,C,F,H)}function S(U,O,N,C){g();let F=C.attributes,H=N.getAttributes(),W=O.defaultAttributeValues;for(let K in H){let v=H[K];if(v.location>=0){let A=F[K];if(A===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(A=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(A=U.instanceColor)),A!==void 0){let I=A.normalized,V=A.itemSize,j=t.get(A);if(j===void 0)continue;let ht=j.buffer,tt=j.type,ut=j.bytesPerElement,Y=tt===i.INT||tt===i.UNSIGNED_INT||A.gpuType===ko;if(A.isInterleavedBufferAttribute){let et=A.data,vt=et.stride,kt=A.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<v.locationSize;Tt++)f(v.location+Tt,et.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<v.locationSize;Tt++)p(v.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Tt=0;Tt<v.locationSize;Tt++)P(v.location+Tt,V/v.locationSize,tt,I,vt*ut,(kt+V/v.locationSize*Tt)*ut,Y)}else{if(A.isInstancedBufferAttribute){for(let et=0;et<v.locationSize;et++)f(v.location+et,A.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let et=0;et<v.locationSize;et++)p(v.location+et);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let et=0;et<v.locationSize;et++)P(v.location+et,V/v.locationSize,tt,I,V*ut,V/v.locationSize*et*ut,Y)}}else if(W!==void 0){let I=W[K];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(v.location,I);break;case 3:i.vertexAttrib3fv(v.location,I);break;case 4:i.vertexAttrib4fv(v.location,I);break;default:i.vertexAttrib1fv(v.location,I)}}}}w()}function T(){M();for(let U in n){let O=n[U];for(let N in O){let C=O[N];for(let F in C){let H=C[F];for(let W in H)h(H[W].object),delete H[W];delete C[F]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let N in O){let C=O[N];for(let F in C){let H=C[F];for(let W in H)h(H[W].object),delete H[W];delete C[F]}}delete n[U.id]}function D(U){for(let O in n){let N=n[O];for(let C in N){let F=N[C];if(F[U.id]===void 0)continue;let H=F[U.id];for(let W in H)h(H[W].object),delete H[W];delete F[U.id]}}}function y(U){for(let O in n){let N=n[O],C=U.isInstancedMesh===!0?U.id:0,F=N[C];if(F!==void 0){for(let H in F){let W=F[H];for(let K in W)h(W[K].object),delete W[K];delete F[H]}delete N[C],Object.keys(N).length===0&&delete n[O]}}}function M(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:p,disableUnusedAttributes:w}}function Hx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Gx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Hn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let y=D===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Pn&&D!==ti&&!y&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:S,maxSamples:T,samples:E}}function Vx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Kn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,P=w*4,S=f.clippingState||null;l.value=S,S=h(x,u,P,m);for(let T=0;T!==P;++T)S[T]=e[T];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,x){let g=d!==null?d.length:0,p=null;if(g!==0){if(p=l.value,x!==!0||p===null){let f=m+g*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let P=0,S=m;P!==g;++P,S+=4)a.copy(d[P]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}var lr=4,Wx=6,Xx=20,qx=256,oa=new Jr,Jd=new Yt,wh=null,Th=0,Eh=0,Ah=!1,$x=new Z,ys=new Z,wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=$x}=r;wh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Th,Eh),this._renderer.xr.enabled=Ah,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:ei,format:Hn,colorSpace:Ur,depthBuffer:!1},s=jd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yx(r)),this._blurMaterial=Kx(r,t,e),this._ggxMaterial=Zx(r,t,e)}return s}_compileMaterial(t){let e=new Ae(new dn,t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s,r){let l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(Jd),d.toneMapping=jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new nr,new fi({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,p=g.material,f=!1,w=t.background;w?w.isColor&&(p.color.copy(w),t.background=null,f=!0):(p.color.copy(Jd),f=!0);for(let P=0;P<6;P++){let S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let T=this._cubeSize;or(s,S*T,P>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(g,l),d.render(t,l)}d.toneMapping=m,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,m=d*u,{_lodMax:x}=this,g=this._sizeLods[n],p=3*g*(n>x-lr?n-x+lr:0),f=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,or(r,p,f,3*g,2*g),s.setRenderTarget(r),s.render(o,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,or(t,p,f,3*g,2*g),s.setRenderTarget(t),s.render(o,oa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-lr?s-this._lodMax+lr:0),u=4*(this._cubeSize-h);or(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,oa)}};function Yx(i){let t=[],e=[],n=i,s=i-lr+1+Wx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,m=3,x=new Float32Array(m*u*d),g=new Float32Array(m*u*d);for(let f=0;f<d;f++){let w=f%3*2/3-1,P=f>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(S,m*u*f);for(let T=0;T<u;T++){let E=h[T*2]*2-1,D=h[T*2+1]*2-1;f===0?ys.set(1,D,E):f===1?ys.set(-E,1,-D):f===2?ys.set(-E,D,1):f===3?ys.set(-1,D,-E):f===4?ys.set(-E,-1,D):ys.set(E,D,-1),ys.toArray(g,(f*u+T)*m)}}let p=new dn;p.setAttribute("position",new We(x,m)),p.setAttribute("outputDirection",new We(g,m)),e.push(new Ae(p,null)),n>lr&&n--}return{lodMeshes:e,sizeLods:t}}function jd(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zx(i,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Kx(i,t,e){return new Le({name:"SphericalGaussianBlur",defines:{SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Qd(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function tf(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nr(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:pi});r.uniforms.tEquirect.value=e;let a=new Ae(s,r),o=e.minFilter;return e.minFilter===ts&&(e.minFilter=qe),new Lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Jx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Uo||m===Fo)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let g=new Tl(x.height);return g.fromEquirectangularTexture(i,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,x=m===Uo||m===Fo,g=m===Qi||m===_s;if(x||g){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new wl(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let w=u.image;return x&&w&&w.height>0||g&&w&&l(w)?(n===null&&(n=new wl(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Uo?u.mapping=Qi:m===Fo&&(u.mapping=_s),u}function l(u){let m=0,x=6;for(let g=0;g<x;g++)u[g]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function jx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function Qx(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(d){let u=[],m=d.index,x=d.attributes.position,g=0;if(x===void 0)return;if(m!==null){let w=m.array;g=m.version;for(let P=0,S=w.length;P<S;P+=3){let T=w[P+0],E=w[P+1],D=w[P+2];u.push(T,E,E,D,D,T)}}else{let w=x.array;g=x.version;for(let P=0,S=w.length/3-1;P<S;P+=3){let T=P+0,E=P+1,D=P+2;u.push(T,E,E,D,D,T)}}let p=new(x.count>=65535?Vr:Gr)(u,1);p.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function t_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function e_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n_(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],P=0;m===!0&&(P=1),x===!0&&(P=2),g===!0&&(P=3);let S=o.attributes.position.count*P,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*T*4*d),D=new Br(E,S,T,d);D.type=ti,D.needsUpdate=!0;let y=P*4;for(let R=0;R<d;R++){let U=p[R],O=f[R],N=w[R],C=S*T*4*R;for(let F=0;F<U.count;F++){let H=F*y;m===!0&&(s.fromBufferAttribute(U,F),E[C+H+0]=s.x,E[C+H+1]=s.y,E[C+H+2]=s.z,E[C+H+3]=0),x===!0&&(s.fromBufferAttribute(O,F),E[C+H+4]=s.x,E[C+H+5]=s.y,E[C+H+6]=s.z,E[C+H+7]=0),g===!0&&(s.fromBufferAttribute(N,F),E[C+H+8]=s.x,E[C+H+9]=s.y,E[C+H+10]=s.z,E[C+H+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new se(S,T)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function i_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var s_={[Zc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function r_(i,t,e,n,s,r){let a=new vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new dn;c.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zn([0,2,0,0,2,0],2));let h=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ae(c,h),u=new Jr(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,f=null,w=[],P=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let E=0;E<w.length;E++){let D=w[E];D.setSize&&D.setSize(S,T)}},this.setEffects=function(S){w=S,P=w.length>0&&w[0].isRenderPass===!0;let T=a.width,E=a.height;w.length>0&&o===null&&(o=new vn(T,E,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new vn(T,E,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<w.length;D++){let y=w[D];y.setSize&&y.setSize(T,E)}},this.begin=function(S,T){if(g||S.toneMapping===jn&&w.length===0)return!1;if(f=T,T!==null){let E=T.width,D=T.height;(a.width!==E||a.height!==D)&&this.setSize(E,D)}return P===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=jn,!0},this.hasRenderPass=function(){return P},this.end=function(S,T){S.toneMapping=p,g=!0;let E=a,D=o;for(let y=0;y<w.length;y++){let M=w[y];M.enabled!==!1&&(M.render(S,D,E,T),M.needsSwap!==!1&&(E=D,D=D===o?l:o))}if(m!==S.outputColorSpace||x!==S.toneMapping){m=S.outputColorSpace,x=S.toneMapping,h.defines={},ne.getTransfer(m)===de&&(h.defines.SRGB_TRANSFER="");let y=s_[x];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(f),S.render(d,u),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var bf=new Qe,Ph=new qi(1,1),Mf=new Br,Sf=new mo,wf=new $r,ef=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cl(i,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,n))return;af.set(n),i.uniformMatrix2fv(this.addr,!1,af),Ye(e,n)}}function u_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),Ye(e,n)}}function d_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),Ye(e,n)}}function f_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function x_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=e.isReversedDepthBuffer()?bl:yl,r=Ph):r=bf,e.setTexture2D(t||r,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sf,s)}function S_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wf,s)}function w_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mf,s)}function T_(i){switch(i){case 5126:return a_;case 35664:return o_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return v_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return w_}}function E_(i,t){i.uniform1fv(this.addr,t)}function A_(i,t){let e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function C_(i,t){let e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function R_(i,t){let e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function P_(i,t){let e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I_(i,t){let e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function L_(i,t){let e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D_(i,t){i.uniform1iv(this.addr,t)}function N_(i,t){i.uniform2iv(this.addr,t)}function U_(i,t){i.uniform3iv(this.addr,t)}function F_(i,t){i.uniform4iv(this.addr,t)}function O_(i,t){i.uniform1uiv(this.addr,t)}function k_(i,t){i.uniform2uiv(this.addr,t)}function B_(i,t){i.uniform3uiv(this.addr,t)}function z_(i,t){i.uniform4uiv(this.addr,t)}function H_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ph:a=bf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function G_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sf,r[a])}function V_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wf,r[a])}function W_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mf,r[a])}function X_(i){switch(i){case 5126:return E_;case 35664:return A_;case 35665:return C_;case 35666:return R_;case 35674:return P_;case 35675:return I_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return k_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}var Ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T_(e.type)}},Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X_(e.type)}},Dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function of(i,t){i.seq.push(t),i.map[t.id]=t}function q_(i,t,e){let n=i.name,s=n.length;for(Ch.lastIndex=0;;){let r=Ch.exec(n),a=Ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){of(e,c===void 0?new Ih(o,i,t):new Lh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Dh(o),of(e,d)),e=d}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);q_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function lf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $_=37297,Y_=0;function Z_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var cf=new qt;function K_(i){ne._getMatrix(cf,ne.workingColorSpace,i);let t=`mat3( ${cf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Z_(i.getShaderSource(t),o)}else return r}function J_(i,t){let e=K_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var j_={[Zc]:"Linear",[Kc]:"Reinhard",[Jc]:"Cineon",[jc]:"ACESFilmic",[th]:"AgX",[eh]:"Neutral",[Qc]:"Custom"};function Q_(i,t){let e=j_[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new Z;function tv(){ne.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function nv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ca(i){return i!==""}function uf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(sv,av)}var rv=new Map;function av(i,t){let e=Kt[t];if(e===void 0){let n=rv.get(t);if(n!==void 0)e=Kt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nh(e)}var ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(ov,lv)}function lv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var cv={[jr]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function hv(i){return cv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uv={[Qi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function dv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":uv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var fv={[_s]:"ENVMAP_MODE_REFRACTION"};function pv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mv={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function gv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mv[i.combine]||"ENVMAP_BLENDING_NONE"}function xv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _v(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=hv(e),c=dv(e),h=pv(e),d=gv(e),u=xv(e),m=ev(e),x=nv(r),g=s.createProgram(),p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ca).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(p=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==jn?Q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,J_("linearToOutputTexel",e.outputColorSpace),tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),a=Nh(a),a=uf(a,e),a=df(a,e),o=Nh(o),o=uf(o,e),o=df(o,e),a=ff(a),o=ff(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let P=w+p+a,S=w+f+o,T=lf(s,s.VERTEX_SHADER,P),E=lf(s,s.FRAGMENT_SHADER,S);s.attachShader(g,T),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(T)||"",C=s.getShaderInfoLog(E)||"",F=O.trim(),H=N.trim(),W=C.trim(),K=!0,v=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,E);else{let A=hf(s,T,"vertex"),I=hf(s,E,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+A+`
`+I)}else F!==""?zt("WebGLProgram: Program Info Log:",F):(H===""||W==="")&&(v=!1);v&&(U.diagnostics={runnable:K,programLog:F,vertexShader:{log:H,prefix:p},fragmentShader:{log:W,prefix:f}})}s.deleteShader(T),s.deleteShader(E),y=new cr(s,g),M=iv(s,g)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,$_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}var vv=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fh(t),e.set(t,n)),n}},Fh=class{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}};function yv(i){return i===ns||i===ra||i===aa}function bv(i,t,e,n,s,r){let a=new zr,o=new Uh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,M,R,U,O,N){let C=U.fog,F=O.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=t.get(y.envMap||H,W),v=K&&K.mapping===Qr?K.image.height:null,A=m[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&zt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let I=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=I!==void 0?I.length:0,j=0;F.morphAttributes.position!==void 0&&(j=1),F.morphAttributes.normal!==void 0&&(j=2),F.morphAttributes.color!==void 0&&(j=3);let ht,tt,ut,Y;if(A){let be=gi[A];ht=be.vertexShader,tt=be.fragmentShader}else{ht=y.vertexShader,tt=y.fragmentShader;let be=o.getVertexShaderStage(y),he=o.getFragmentShaderStage(y);o.update(y,be,he),ut=be.id,Y=he.id}let et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),kt=O.isInstancedMesh===!0,Tt=O.isBatchedMesh===!0,Xt=!!y.map,ye=!!y.matcap,Wt=!!K,re=!!y.aoMap,ce=!!y.lightMap,Qt=!!y.bumpMap&&y.wireframe===!1,Ce=!!y.normalMap,Ke=!!y.displacementMap,_n=!!y.emissiveMap,Pe=!!y.metalnessMap,He=!!y.roughnessMap,z=y.anisotropy>0,sn=y.clearcoat>0,pe=y.dispersion>0,L=y.retroreflectivity>0,_=y.iridescence>0,X=y.sheen>0,J=y.transmission>0,nt=z&&!!y.anisotropyMap,dt=sn&&!!y.clearcoatMap,pt=sn&&!!y.clearcoatNormalMap,it=sn&&!!y.clearcoatRoughnessMap,rt=_&&!!y.iridescenceMap,mt=_&&!!y.iridescenceThicknessMap,Dt=X&&!!y.sheenColorMap,yt=X&&!!y.sheenRoughnessMap,gt=!!y.specularMap,Nt=!!y.specularColorMap,Bt=!!y.specularIntensityMap,$t=J&&!!y.transmissionMap,B=J&&!!y.thicknessMap,xt=!!y.gradientMap,st=!!y.alphaMap,_t=y.alphaTest>0,wt=!!y.alphaHash,at=!!y.extensions,Ft=jn;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let It={shaderID:A,shaderType:y.type,shaderName:y.name,vertexShader:ht,fragmentShader:tt,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&O._colorsTexture!==null,instancing:kt,instancingColor:kt&&O.instanceColor!==null,instancingMorph:kt&&O.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:ye,envMap:Wt,envMapMode:Wt&&K.mapping,envMapCubeUVHeight:v,aoMap:re,lightMap:ce,bumpMap:Qt,normalMap:Ce,displacementMap:Ke,emissiveMap:_n,normalMapObjectSpace:Ce&&y.normalMapType===Nd,normalMapTangentSpace:Ce&&y.normalMapType===hh,packedNormalMap:Ce&&y.normalMapType===hh&&yv(y.normalMap.format),metalnessMap:Pe,roughnessMap:He,anisotropy:z,anisotropyMap:nt,clearcoat:sn,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:it,dispersion:pe,retroreflection:L,iridescence:_,iridescenceMap:rt,iridescenceThicknessMap:mt,sheen:X,sheenColorMap:Dt,sheenRoughnessMap:yt,specularMap:gt,specularColorMap:Nt,specularIntensityMap:Bt,transmission:J,transmissionMap:$t,thicknessMap:B,gradientMap:xt,opaque:y.transparent===!1&&y.blending===Ji&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:wt,combine:y.combine,mapUv:Xt&&x(y.map.channel),aoMapUv:re&&x(y.aoMap.channel),lightMapUv:ce&&x(y.lightMap.channel),bumpMapUv:Qt&&x(y.bumpMap.channel),normalMapUv:Ce&&x(y.normalMap.channel),displacementMapUv:Ke&&x(y.displacementMap.channel),emissiveMapUv:_n&&x(y.emissiveMap.channel),metalnessMapUv:Pe&&x(y.metalnessMap.channel),roughnessMapUv:He&&x(y.roughnessMap.channel),anisotropyMapUv:nt&&x(y.anisotropyMap.channel),clearcoatMapUv:dt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(y.sheenRoughnessMap.channel),specularMapUv:gt&&x(y.specularMap.channel),specularColorMapUv:Nt&&x(y.specularColorMap.channel),specularIntensityMapUv:Bt&&x(y.specularIntensityMap.channel),transmissionMapUv:$t&&x(y.transmissionMap.channel),thicknessMapUv:B&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ce||z),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Xt||st),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Ce===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:j,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&ne.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:_n&&y.emissiveMap.isVideoTexture===!0&&ne.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(f(M,y),w(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function f(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numSunLights),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numSunLightShadows),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function w(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function P(y){let M=m[y.type],R;if(M){let U=gi[M];R=Yd.clone(U.uniforms)}else R=y.uniforms;return R}function S(y,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new _v(i,M,y,s),c.push(R),h.set(M,R)),R}function T(y){if(--y.usedTimes===0){let M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function D(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:P,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:D}}function Mv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function mf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,g,p,f){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},i[t]=w):(w.id=u.id,w.object=u,w.geometry=m,w.material=x,w.materialVariant=a(u),w.groupOrder=g,w.renderOrder=u.renderOrder,w.z=p,w.group=f),t++,w}function l(u,m,x,g,p,f,w){w.reversedDepth===!0&&(p=-p);let P=o(u,m,x,g,p,f);x.transmission>0?n.push(P):x.transparent===!0?s.push(P):e.push(P)}function c(u,m,x,g,p,f){let w=o(u,m,x,g,p,f);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,m){e.length>1&&e.sort(u||Sv),n.length>1&&n.sort(m||mf),s.length>1&&s.sort(m||mf)}function d(){for(let u=t,m=i.length;u<m;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function wv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gf,i.set(n,[a])):s>=r.length?(a=new gf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new Yt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function Ev(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Av=0;function Cv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rv(i){let t=new Tv,e=Ev(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new Ue,a=new Ue;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,x=0,g=0,p=0,f=0,w=0,P=0,S=0,T=0,E=0,D=0,y=0,M=0,R=0;c.sort(Cv);for(let O=0,N=c.length;O<N;O++){let C=c[O],F=C.color,H=C.intensity,W=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ns?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*H,d+=F.g*H,u+=F.b*H;else if(C.isLightProbe){for(let v=0;v<9;v++)n.probe[v].addScaledVector(C.sh.coefficients[v],H);R++}else if(C.isSunLight){let v=t.get(C);if(v.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let A=C.shadow,I=e.get(C);I.shadowIntensity=A.intensity,I.shadowBias=A.bias,I.shadowNormalBias=A.normalBias,I.shadowRadius=A.radius,I.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),n.sunShadow[x]=I,n.sunShadowMap[x]=K;let V=A.getViewportCount();for(let j=0;j<V;j++)n.sunShadowMatrix[g+j]=A.getMatrix(j),n.sunShadowCascade[g+j]=A._cascadeData[j];g+=V,x++}n.sun[m]=v,m++}else if(C.isDirectionalLight){let v=t.get(C);if(v.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let A=C.shadow,I=e.get(C);I.shadowIntensity=A.intensity,I.shadowBias=A.bias,I.shadowNormalBias=A.normalBias,I.shadowRadius=A.radius,I.shadowMapSize=A.mapSize,n.directionalShadow[p]=I,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=v,p++}else if(C.isSpotLight){let v=t.get(C);v.position.setFromMatrixPosition(C.matrixWorld),v.color.copy(F).multiplyScalar(H),v.distance=W,v.coneCos=Math.cos(C.angle),v.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),v.decay=C.decay,n.spot[w]=v;let A=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,A.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[w]=A.matrix,C.castShadow){let I=e.get(C);I.shadowIntensity=A.intensity,I.shadowBias=A.bias,I.shadowNormalBias=A.normalBias,I.shadowRadius=A.radius,I.shadowMapSize=A.mapSize,n.spotShadow[w]=I,n.spotShadowMap[w]=K,D++}w++}else if(C.isRectAreaLight){let v=t.get(C);v.color.copy(F).multiplyScalar(H),v.halfWidth.set(C.width*.5,0,0),v.halfHeight.set(0,C.height*.5,0),n.rectArea[P]=v,P++}else if(C.isPointLight){let v=t.get(C);if(v.color.copy(C.color).multiplyScalar(C.intensity),v.distance=C.distance,v.decay=C.decay,C.castShadow){let A=C.shadow,I=e.get(C);I.shadowIntensity=A.intensity,I.shadowBias=A.bias,I.shadowNormalBias=A.normalBias,I.shadowRadius=A.radius,I.shadowMapSize=A.mapSize,I.shadowCameraNear=A.camera.near,I.shadowCameraFar=A.camera.far,n.pointShadow[f]=I,n.pointShadowMap[f]=K,n.pointShadowMatrix[f]=C.shadow.matrix,E++}n.point[f]=v,f++}else if(C.isHemisphereLight){let v=t.get(C);v.skyColor.copy(C.color).multiplyScalar(H),v.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[S]=v,S++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==w||U.rectAreaLength!==P||U.hemiLength!==S||U.numSunShadows!==x||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==D||U.numSpotMaps!==y||U.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=p,n.spot.length=w,n.rectArea.length=P,n.point.length=f,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,U.sunLength=m,U.directionalLength=p,U.pointLength=f,U.spotLength=w,U.rectAreaLength=P,U.hemiLength=S,U.numSunShadows=x,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=D,U.numSpotMaps=y,U.numLightProbes=R,n.version=Av++)}function l(c,h){let d=0,u=0,m=0,x=0,g=0,p=0,f=h.matrixWorldInverse;for(let w=0,P=c.length;w<P;w++){let S=c[w];if(S.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),d++}else if(S.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(S.isSpotLight){let T=n.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),x++}else if(S.isRectAreaLight){let T=n.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function xf(i){let t=new Rv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Pv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xf(i),t.set(s,[o])):r>=a.length?(o=new xf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dv=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Nv=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],_f=new Ue,la=new Z,Rh=new Z;function Uv(i,t,e){let n=new Xr,s=new se,r=new se,a=new Ee,o=new yo,l=new bo,c={},h=e.maxTextureSize,d={[Ki]:fn,[fn]:Ki,[yn]:yn},u=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Iv,fragmentShader:Lv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new dn;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ae(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let f=this.type;this.render=function(E,D,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ud&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jr);let M=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=f!==this.type;N&&D.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=E.length;C<F;C++){let H=E[C],W=H.shadow;if(W===void 0){zt("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let K=W.getFrameExtents();s.multiply(K),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,W.mapSize.y=r.y));let v=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=v,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ir){if(H.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new vn(s.x,s.y,{format:ns,type:ei,minFilter:qe,magFilter:qe,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new qi(s.x,s.y,ti),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=hi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=je,W.map.depthTexture.magFilter=je}else H.isPointLight?(W.map=new Tl(s.x),W.map.depthTexture=new _o(s.x,Qn)):(W.map=new vn(s.x,s.y),W.map.depthTexture=new qi(s.x,s.y,Qn)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=hi,this.type===jr?(W.map.depthTexture.compareFunction=v?bl:yl,W.map.depthTexture.minFilter=qe,W.map.depthTexture.magFilter=qe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=je,W.map.depthTexture.magFilter=je);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let A=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();H.isPointLight!==!0&&W.updateMatrices(H,y);for(let I=0;I<A;I++){let V=W.getCamera(I);if(H.isPointLight){let j=W.camera,ht=W.matrix,tt=H.distance||j.far;tt!==j.far&&(j.far=tt,j.updateProjectionMatrix()),la.setFromMatrixPosition(H.matrixWorld),j.position.copy(la),Rh.copy(j.position),Rh.add(Dv[I]),j.up.copy(Nv[I]),j.lookAt(Rh),j.updateMatrixWorld(),ht.makeTranslation(-la.x,-la.y,-la.z),_f.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(_f,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,I),i.clear();else{I===0&&(i.setRenderTarget(W.map),i.clear());let j=W.getViewport(I);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(a)}n=W.getFrustum(I),S(D,y,V,H,this.type)}W.isPointLightShadow!==!0&&this.type===ir&&w(W,y),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,R,U)};function w(E,D){let y=t.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new vn(s.x,s.y,{format:ns,type:ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(D,null,y,u,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(D,null,y,m,g,null)}function P(E,D,y,M){let R=null,U=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)R=U;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let O=R.uuid,N=D.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let F=C[N];F===void 0&&(F=R.clone(),C[N]=F,D.addEventListener("dispose",T)),R=F}if(R.visible=D.visible,R.wireframe=D.wireframe,M===ir?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:d[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=y}return R}function S(E,D,y,M,R){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===ir)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let N=t.update(E),C=E.material;if(Array.isArray(C)){let F=N.groups;for(let H=0,W=F.length;H<W;H++){let K=F[H],v=C[K.materialIndex];if(v&&v.visible){let A=P(E,v,M,R);E.onBeforeShadow(i,E,D,y,N,A,K),i.renderBufferDirect(y,null,N,A,E,K),E.onAfterShadow(i,E,D,y,N,A,K)}}}else if(C.visible){let F=P(E,C,M,R);E.onBeforeShadow(i,E,D,y,N,F,null),i.renderBufferDirect(y,null,N,F,E,null),E.onAfterShadow(i,E,D,y,N,F,null)}}let O=E.children;for(let N=0,C=O.length;N<C;N++)S(O[N],D,y,M,R)}function T(E){E.target.removeEventListener("dispose",T);for(let y in c){let M=c[y],R=E.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function Fv(i,t){function e(){let B=!1,xt=new Ee,st=null,_t=new Ee(0,0,0,0);return{setMask:function(wt){st!==wt&&!B&&(i.colorMask(wt,wt,wt,wt),st=wt)},setLocked:function(wt){B=wt},setClear:function(wt,at,Ft,It,be){be===!0&&(wt*=It,at*=It,Ft*=It),xt.set(wt,at,Ft,It),_t.equals(xt)===!1&&(i.clearColor(wt,at,Ft,It),_t.copy(xt))},reset:function(){B=!1,st=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,xt=!1,st=null,_t=null,wt=null;return{setReversed:function(at){if(xt!==at){let Ft=t.get("EXT_clip_control");at?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=at;let It=wt;wt=null,this.setClear(It)}},getReversed:function(){return xt},setTest:function(at){at?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(at){st!==at&&!B&&(i.depthMask(at),st=at)},setFunc:function(at){if(xt&&(at=qd[at]),_t!==at){switch(at){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=at}},setLocked:function(at){B=at},setClear:function(at){wt!==at&&(wt=at,xt&&(at=1-at),i.clearDepth(at))},reset:function(){B=!1,st=null,_t=null,wt=null,xt=!1}}}function s(){let B=!1,xt=null,st=null,_t=null,wt=null,at=null,Ft=null,It=null,be=null;return{setTest:function(he){B||(he?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(he){xt!==he&&!B&&(i.stencilMask(he),xt=he)},setFunc:function(he,qn,oi){(st!==he||_t!==qn||wt!==oi)&&(i.stencilFunc(he,qn,oi),st=he,_t=qn,wt=oi)},setOp:function(he,qn,oi){(at!==he||Ft!==qn||It!==oi)&&(i.stencilOp(he,qn,oi),at=he,Ft=qn,It=oi)},setLocked:function(he){B=he},setClear:function(he){be!==he&&(i.clearStencil(he),be=he)},reset:function(){B=!1,xt=null,st=null,_t=null,wt=null,at=null,Ft=null,It=null,be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],g=null,p=!1,f=null,w=null,P=null,S=null,T=null,E=null,D=null,y=new Yt(0,0,0),M=0,R=!1,U=null,O=null,N=null,C=null,F=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,K=0,v=i.getParameter(i.VERSION);v.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(v)[1]),W=K>=1):v.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),W=K>=2);let A=null,I={},V=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ht=new Ee().fromArray(V),tt=new Ee().fromArray(j);function ut(B,xt,st,_t){let wt=new Uint8Array(4),at=i.createTexture();i.bindTexture(B,at),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<st;Ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return at}let Y={};Y[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Js),Qt(!1),Ce(Vc),et(i.CULL_FACE),re(pi);function et(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function vt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function kt(B,xt){return u[B]!==xt?(i.bindFramebuffer(B,xt),u[B]=xt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(B,xt){let st=x,_t=!1;if(B){st=m.get(xt),st===void 0&&(st=[],m.set(xt,st));let wt=B.textures;if(st.length!==wt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ft=wt.length;at<Ft;at++)st[at]=i.COLOR_ATTACHMENT0+at;st.length=wt.length,_t=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,_t=!0);_t&&i.drawBuffers(st)}function Xt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let ye={[xs]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};ye[md]=i.MIN,ye[gd]=i.MAX;let Wt={[xd]:i.ZERO,[_d]:i.ONE,[vd]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[$c]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function re(B,xt,st,_t,wt,at,Ft,It,be,he){if(B===pi){p===!0&&(vt(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),B!==dd){if(B!==f||he!==R){if((w!==xs||T!==xs)&&(i.blendEquation(i.FUNC_ADD),w=xs,T=xs),he)switch(B){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",B);break}P=null,S=null,E=null,D=null,y.set(0,0,0),M=0,f=B,R=he}return}wt=wt||xt,at=at||st,Ft=Ft||_t,(xt!==w||wt!==T)&&(i.blendEquationSeparate(ye[xt],ye[wt]),w=xt,T=wt),(st!==P||_t!==S||at!==E||Ft!==D)&&(i.blendFuncSeparate(Wt[st],Wt[_t],Wt[at],Wt[Ft]),P=st,S=_t,E=at,D=Ft),(It.equals(y)===!1||be!==M)&&(i.blendColor(It.r,It.g,It.b,be),y.copy(It),M=be),f=B,R=!1}function ce(B,xt){B.side===yn?vt(i.CULL_FACE):et(i.CULL_FACE);let st=B.side===fn;xt&&(st=!st),Qt(st),B.blending===Ji&&B.transparent===!1?re(pi):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let _t=B.stencilWrite;o.setTest(_t),_t&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),_n(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(B){U!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),U=B)}function Ce(B){B!==cd?(et(i.CULL_FACE),B!==O&&(B===Vc?i.cullFace(i.BACK):B===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),O=B}function Ke(B){B!==N&&(W&&i.lineWidth(B),N=B)}function _n(B,xt,st){B?(et(i.POLYGON_OFFSET_FILL),(C!==xt||F!==st)&&(C=xt,F=st,a.getReversed()&&(xt=-xt),i.polygonOffset(xt,st))):vt(i.POLYGON_OFFSET_FILL)}function Pe(B){B?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function He(B){B===void 0&&(B=i.TEXTURE0+H-1),A!==B&&(i.activeTexture(B),A=B)}function z(B,xt,st){st===void 0&&(A===null?st=i.TEXTURE0+H-1:st=A);let _t=I[st];_t===void 0&&(_t={type:void 0,texture:void 0},I[st]=_t),(_t.type!==B||_t.texture!==xt)&&(A!==st&&(i.activeTexture(st),A=st),i.bindTexture(B,xt||Y[B]),_t.type=B,_t.texture=xt)}function sn(){let B=I[A];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function X(){try{i.texSubImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function dt(){try{i.texStorage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function pt(){try{i.texStorage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function it(){try{i.texImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function rt(){try{i.texImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function mt(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Dt(B,xt){d[B]!==xt&&(i.pixelStorei(B,xt),d[B]=xt)}function yt(B){ht.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ht.copy(B))}function gt(B){tt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Nt(B,xt){let st=c.get(xt);st===void 0&&(st=new WeakMap,c.set(xt,st));let _t=st.get(B);_t===void 0&&(_t=i.getUniformBlockIndex(xt,B.name),st.set(B,_t))}function Bt(B,xt){let _t=c.get(xt).get(B);l.get(xt)!==_t&&(i.uniformBlockBinding(xt,_t,B.__bindingPointIndex),l.set(xt,_t))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},A=null,I={},u={},m=new WeakMap,x=[],g=null,p=!1,f=null,w=null,P=null,S=null,T=null,E=null,D=null,y=new Yt(0,0,0),M=0,R=!1,U=null,O=null,N=null,C=null,F=null,ht.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:kt,drawBuffers:Tt,useProgram:Xt,setBlending:re,setMaterial:ce,setFlipSided:Qt,setCullFace:Ce,setLineWidth:Ke,setPolygonOffset:_n,setScissorTest:Pe,activeTexture:He,bindTexture:z,unbindTexture:sn,compressedTexImage2D:pe,compressedTexImage3D:L,texImage2D:it,texImage3D:rt,pixelStorei:Dt,getParameter:mt,updateUBOMapping:Nt,uniformBlockBinding:Bt,texStorage2D:dt,texStorage3D:pt,texSubImage2D:_,texSubImage3D:X,compressedTexSubImage2D:J,compressedTexSubImage3D:nt,scissor:yt,viewport:gt,reset:$t}}function Ov(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,_){return x?new OffscreenCanvas(L,_):kr("canvas")}function p(L,_,X){let J=1,nt=pe(L);if((nt.width>X||nt.height>X)&&(J=X/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let dt=Math.floor(J*nt.width),pt=Math.floor(J*nt.height);u===void 0&&(u=g(dt,pt));let it=_?g(dt,pt):u;return it.width=dt,it.height=pt,it.getContext("2d").drawImage(L,0,0,dt,pt),zt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+dt+"x"+pt+")."),it}else return"data"in L&&zt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function f(L){return L.generateMipmaps}function w(L){i.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,_,X,J,nt,dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt;J&&(pt=t.get("EXT_texture_norm16"),pt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=_;if(_===i.RED&&(X===i.FLOAT&&(it=i.R32F),X===i.HALF_FLOAT&&(it=i.R16F),X===i.UNSIGNED_BYTE&&(it=i.R8),X===i.UNSIGNED_SHORT&&pt&&(it=pt.R16_EXT),X===i.SHORT&&pt&&(it=pt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.R8UI),X===i.UNSIGNED_SHORT&&(it=i.R16UI),X===i.UNSIGNED_INT&&(it=i.R32UI),X===i.BYTE&&(it=i.R8I),X===i.SHORT&&(it=i.R16I),X===i.INT&&(it=i.R32I)),_===i.RG&&(X===i.FLOAT&&(it=i.RG32F),X===i.HALF_FLOAT&&(it=i.RG16F),X===i.UNSIGNED_BYTE&&(it=i.RG8),X===i.UNSIGNED_SHORT&&pt&&(it=pt.RG16_EXT),X===i.SHORT&&pt&&(it=pt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RG8UI),X===i.UNSIGNED_SHORT&&(it=i.RG16UI),X===i.UNSIGNED_INT&&(it=i.RG32UI),X===i.BYTE&&(it=i.RG8I),X===i.SHORT&&(it=i.RG16I),X===i.INT&&(it=i.RG32I)),_===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGB8UI),X===i.UNSIGNED_SHORT&&(it=i.RGB16UI),X===i.UNSIGNED_INT&&(it=i.RGB32UI),X===i.BYTE&&(it=i.RGB8I),X===i.SHORT&&(it=i.RGB16I),X===i.INT&&(it=i.RGB32I)),_===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),X===i.UNSIGNED_INT&&(it=i.RGBA32UI),X===i.BYTE&&(it=i.RGBA8I),X===i.SHORT&&(it=i.RGBA16I),X===i.INT&&(it=i.RGBA32I)),_===i.RGB&&(X===i.UNSIGNED_SHORT&&pt&&(it=pt.RGB16_EXT),X===i.SHORT&&pt&&(it=pt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),_===i.RGBA){let rt=dt?Fr:ne.getTransfer(nt);X===i.FLOAT&&(it=i.RGBA32F),X===i.HALF_FLOAT&&(it=i.RGBA16F),X===i.UNSIGNED_BYTE&&(it=rt===de?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&pt&&(it=pt.RGBA16_EXT),X===i.SHORT&&pt&&(it=pt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function T(L,_){let X;return L?_===null||_===Qn||_===rr?X=i.DEPTH24_STENCIL8:_===ti?X=i.DEPTH32F_STENCIL8:_===sr&&(X=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===rr?X=i.DEPTH_COMPONENT24:_===ti?X=i.DEPTH_COMPONENT32F:_===sr&&(X=i.DEPTH_COMPONENT16),X}function E(L,_){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==je&&L.minFilter!==qe?Math.log2(Math.max(_.width,_.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?_.mipmaps.length:1}function D(L){let _=L.target;_.removeEventListener("dispose",D),M(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(L){let _=L.target;_.removeEventListener("dispose",y),U(_)}function M(L){let _=n.get(L);if(_.__webglInit===void 0)return;let X=L.source,J=m.get(X);if(J){let nt=J[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(L),Object.keys(J).length===0&&m.delete(X)}n.remove(L)}function R(L){let _=n.get(L);i.deleteTexture(_.__webglTexture);let X=L.source,J=m.get(X);delete J[_.__cacheKey],a.memory.textures--}function U(L){let _=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let nt=0;nt<_.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=L.textures;for(let J=0,nt=X.length;J<nt;J++){let dt=n.get(X[J]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(L)}let O=0;function N(){O=0}function C(){return O}function F(L){O=L}function H(){let L=O;return L>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function W(L){let _=[];return _.push(L.wrapS),_.push(L.wrapT),_.push(L.wrapR||0),_.push(L.magFilter),_.push(L.minFilter),_.push(L.anisotropy),_.push(L.internalFormat),_.push(L.format),_.push(L.type),_.push(L.generateMipmaps),_.push(L.premultiplyAlpha),_.push(L.flipY),_.push(L.unpackAlignment),_.push(L.colorSpace),_.join()}function K(L,_){let X=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let J=L.image;if(J===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(X,L,_);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+_)}function v(L,_){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){vt(X,L,_);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+_)}function A(L,_){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){vt(X,L,_);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+_)}function I(L,_){let X=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){kt(X,L,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+_)}let V={[Ai]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ho]:i.MIRRORED_REPEAT},j={[je]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},ht={[Fd]:i.NEVER,[Hd]:i.ALWAYS,[Od]:i.LESS,[yl]:i.LEQUAL,[kd]:i.EQUAL,[bl]:i.GEQUAL,[Bd]:i.GREATER,[zd]:i.NOTEQUAL};function tt(L,_){if(_.type===ti&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===qe||_.magFilter===Oo||_.magFilter===ta||_.magFilter===ts||_.minFilter===qe||_.minFilter===Oo||_.minFilter===ta||_.minFilter===ts)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,V[_.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,V[_.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,V[_.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,j[_.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,j[_.minFilter]),_.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ht[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==ta&&_.minFilter!==ts||_.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(L,_){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,_.addEventListener("dispose",D));let J=_.source,nt=m.get(J);nt===void 0&&(nt={},m.set(J,nt));let dt=W(_);if(dt!==L.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),nt[dt].usedTimes++;let pt=nt[L.__cacheKey];pt!==void 0&&(nt[L.__cacheKey].usedTimes--,pt.usedTimes===0&&R(_)),L.__cacheKey=dt,L.__webglTexture=nt[dt].texture}return X}function Y(L,_,X){return Math.floor(Math.floor(L/X)/_)}function et(L,_,X,J){let dt=L.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,X,J,_.data);else{dt.sort((Dt,yt)=>Dt.start-yt.start);let pt=0;for(let Dt=1;Dt<dt.length;Dt++){let yt=dt[pt],gt=dt[Dt],Nt=yt.start+yt.count,Bt=Y(gt.start,_.width,4),$t=Y(yt.start,_.width,4);gt.start<=Nt+1&&Bt===$t&&Y(gt.start+gt.count-1,_.width,4)===Bt?yt.count=Math.max(yt.count,gt.start+gt.count-yt.start):(++pt,dt[pt]=gt)}dt.length=pt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Dt=0,yt=dt.length;Dt<yt;Dt++){let gt=dt[Dt],Nt=Math.floor(gt.start/4),Bt=Math.ceil(gt.count/4),$t=Nt%_.width,B=Math.floor(Nt/_.width),xt=Bt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,xt,st,X,J,_.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function vt(L,_,X){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let nt=ut(L,_),dt=_.source;e.bindTexture(J,L.__webglTexture,i.TEXTURE0+X);let pt=n.get(dt);if(dt.version!==pt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let st=ne.getPrimaries(ne.workingColorSpace),_t=_.colorSpace===Ci?null:ne.getPrimaries(_.colorSpace),wt=_.colorSpace===Ci||st===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let rt=p(_.image,!1,s.maxTextureSize);rt=sn(_,rt);let mt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),yt=S(_.internalFormat,mt,Dt,_.normalized,_.colorSpace,_.isVideoTexture);tt(J,_);let gt,Nt=_.mipmaps,Bt=_.isVideoTexture!==!0,$t=pt.__version===void 0||nt===!0,B=dt.dataReady,xt=E(_,rt);if(_.isDepthTexture)yt=T(_.format===es,_.type),$t&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,yt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,yt,rt.width,rt.height,0,mt,Dt,null));else if(_.isDataTexture)if(Nt.length>0){Bt&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Nt[0].width,Nt[0].height);for(let st=0,_t=Nt.length;st<_t;st++)gt=Nt[st],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,mt,Dt,gt.data):e.texImage2D(i.TEXTURE_2D,st,yt,gt.width,gt.height,0,mt,Dt,gt.data);_.generateMipmaps=!1}else Bt?($t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,rt.width,rt.height),B&&et(_,rt,mt,Dt)):e.texImage2D(i.TEXTURE_2D,0,yt,rt.width,rt.height,0,mt,Dt,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,Nt[0].width,Nt[0].height,rt.depth);for(let st=0,_t=Nt.length;st<_t;st++)if(gt=Nt[st],_.format!==Hn)if(mt!==null)if(Bt){if(B)if(_.layerUpdates.size>0){let wt=_h(gt.width,gt.height,_.format,_.type);for(let at of _.layerUpdates){let Ft=gt.data.subarray(at*wt/gt.data.BYTES_PER_ELEMENT,(at+1)*wt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,at,gt.width,gt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,rt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,yt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,rt.depth,mt,Dt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,yt,gt.width,gt.height,rt.depth,0,mt,Dt,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Bt&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Nt[0].width,Nt[0].height);for(let st=0,_t=Nt.length;st<_t;st++)gt=Nt[st],_.format!==Hn?mt!==null?Bt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,yt,gt.width,gt.height,0,gt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,mt,Dt,gt.data):e.texImage2D(i.TEXTURE_2D,st,yt,gt.width,gt.height,0,mt,Dt,gt.data)}else if(_.isDataArrayTexture)if(Bt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,rt.width,rt.height,rt.depth),B)if(_.layerUpdates.size>0){let st=_h(rt.width,rt.height,_.format,_.type);for(let _t of _.layerUpdates){let wt=rt.data.subarray(_t*st/rt.data.BYTES_PER_ELEMENT,(_t+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,rt.width,rt.height,1,mt,Dt,wt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Dt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,rt.width,rt.height,rt.depth,0,mt,Dt,rt.data);else if(_.isData3DTexture)Bt?($t&&e.texStorage3D(i.TEXTURE_3D,xt,yt,rt.width,rt.height,rt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,rt.width,rt.height,rt.depth,0,mt,Dt,rt.data);else if(_.isFramebufferTexture){if($t)if(Bt)e.texStorage2D(i.TEXTURE_2D,xt,yt,rt.width,rt.height);else{let st=rt.width,_t=rt.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,yt,st,_t,0,mt,Dt,null),st>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),d.add(_),st.onpaint=_t=>{let wt=_t.changedElements;for(let at of d)wt.includes(at.image)&&(at.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let wt=i.RGBA,at=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,at,Ft,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Bt&&$t){let st=pe(Nt[0]);e.texStorage2D(i.TEXTURE_2D,xt,yt,st.width,st.height)}for(let st=0,_t=Nt.length;st<_t;st++)gt=Nt[st],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt,Dt,gt):e.texImage2D(i.TEXTURE_2D,st,yt,mt,Dt,gt);_.generateMipmaps=!1}else if(Bt){if($t){let st=pe(rt);e.texStorage2D(i.TEXTURE_2D,xt,yt,st.width,st.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Dt,rt)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Dt,rt);f(_)&&w(J),pt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function kt(L,_,X){if(_.image.length!==6)return;let J=ut(L,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);let dt=n.get(nt);if(nt.version!==dt.__version||J===!0){e.activeTexture(i.TEXTURE0+X);let pt=ne.getPrimaries(ne.workingColorSpace),it=_.colorSpace===Ci?null:ne.getPrimaries(_.colorSpace),rt=_.colorSpace===Ci||pt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Dt=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!mt&&!Dt?yt[at]=p(_.image[at],!0,s.maxCubemapSize):yt[at]=Dt?_.image[at].image:_.image[at],yt[at]=sn(_,yt[at]);let gt=yt[0],Nt=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type),$t=S(_.internalFormat,Nt,Bt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,xt=dt.__version===void 0||J===!0,st=nt.dataReady,_t=E(_,gt);tt(i.TEXTURE_CUBE_MAP,_);let wt;if(mt){B&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,gt.width,gt.height);for(let at=0;at<6;at++){wt=yt[at].mipmaps;for(let Ft=0;Ft<wt.length;Ft++){let It=wt[Ft];_.format!==Hn?Nt!==null?B?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,0,0,It.width,It.height,Nt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,$t,It.width,It.height,0,It.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,0,0,It.width,It.height,Nt,Bt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,$t,It.width,It.height,0,Nt,Bt,It.data)}}}else{if(wt=_.mipmaps,B&&xt){wt.length>0&&_t++;let at=pe(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,at.width,at.height)}for(let at=0;at<6;at++)if(Dt){B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,Nt,Bt,yt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,yt[at].width,yt[at].height,0,Nt,Bt,yt[at].data);for(let Ft=0;Ft<wt.length;Ft++){let be=wt[Ft].image[at].image;B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,0,0,be.width,be.height,Nt,Bt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,$t,be.width,be.height,0,Nt,Bt,be.data)}}else{B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Nt,Bt,yt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,Nt,Bt,yt[at]);for(let Ft=0;Ft<wt.length;Ft++){let It=wt[Ft];B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,0,0,Nt,Bt,It.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,$t,Nt,Bt,It.image[at])}}}f(_)&&w(i.TEXTURE_CUBE_MAP),dt.__version=nt.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function Tt(L,_,X,J,nt,dt){let pt=r.convert(X.format,X.colorSpace),it=r.convert(X.type),rt=S(X.internalFormat,pt,it,X.normalized,X.colorSpace),mt=n.get(_),Dt=n.get(X);if(Dt.__renderTarget=_,!mt.__hasExternalTextures){let yt=Math.max(1,_.width>>dt),gt=Math.max(1,_.height>>dt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,dt,rt,yt,gt,_.depth,0,pt,it,null):e.texImage2D(nt,dt,rt,yt,gt,0,pt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,nt,Dt.__webglTexture,0,Pe(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,nt,Dt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(L,_,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),_.depthBuffer){let J=_.depthTexture,nt=J&&J.isDepthTexture?J.type:null,dt=T(_.stencilBuffer,nt),pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(_),dt,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,L)}else{let J=_.textures;for(let nt=0;nt<J.length;nt++){let dt=J[nt],pt=r.convert(dt.format,dt.colorSpace),it=r.convert(dt.type),rt=S(dt.internalFormat,pt,it,dt.normalized,dt.colorSpace);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe(_),rt,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe(_),rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(L,_,X){let J=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(_.depthTexture);if(nt.__renderTarget=_,(!nt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,_.depthTexture);let mt=r.convert(_.depthTexture.format),Dt=r.convert(_.depthTexture.type),yt;_.depthTexture.format===hi?yt=i.DEPTH_COMPONENT24:_.depthTexture.format===es&&(yt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,yt,_.width,_.height,0,mt,Dt,null)}}else K(_.depthTexture,0);let dt=nt.__webglTexture,pt=Pe(_),it=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,rt=_.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===hi)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,dt,0);else if(_.depthTexture.format===es)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(L){let _=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==L.depthTexture){let J=L.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=J}if(L.depthTexture&&!_.__autoAllocateDepthBuffer)if(X)for(let J=0;J<6;J++)ye(_.__webglFramebuffer[J],L,J);else{let J=L.texture.mipmaps;J&&J.length>0?ye(_.__webglFramebuffer[0],L,0):ye(_.__webglFramebuffer,L,0)}else if(X){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),Xt(_.__webglDepthbuffer[J],L,!1);else{let nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}else{let J=L.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xt(_.__webglDepthbuffer,L,!1);else{let nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(L,_,X){let J=n.get(L);_!==void 0&&Tt(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Wt(L)}function ce(L){let _=L.texture,X=n.get(L),J=n.get(_);L.addEventListener("dispose",y);let nt=L.textures,dt=L.isWebGLCubeRenderTarget===!0,pt=nt.length>1;if(pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),dt){X.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[it]=[];for(let rt=0;rt<_.mipmaps.length;rt++)X.__webglFramebuffer[it][rt]=i.createFramebuffer()}else X.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)X.__webglFramebuffer[it]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(pt)for(let it=0,rt=nt.length;it<rt;it++){let mt=n.get(nt[it]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&He(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let rt=nt[it];X.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[it]);let mt=r.convert(rt.format,rt.colorSpace),Dt=r.convert(rt.type),yt=S(rt.internalFormat,mt,Dt,rt.normalized,rt.colorSpace,L.isXRRenderTarget===!0),gt=Pe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,X.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),tt(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Tt(X.__webglFramebuffer[it][rt],L,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else Tt(X.__webglFramebuffer[it],L,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);f(_)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let it=0,rt=nt.length;it<rt;it++){let mt=nt[it],Dt=n.get(mt),yt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Dt.__webglTexture),tt(yt,mt),Tt(X.__webglFramebuffer,L,mt,i.COLOR_ATTACHMENT0+it,yt,0),f(mt)&&w(yt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(it=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),tt(it,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Tt(X.__webglFramebuffer[rt],L,_,i.COLOR_ATTACHMENT0,it,rt);else Tt(X.__webglFramebuffer,L,_,i.COLOR_ATTACHMENT0,it,0);f(_)&&w(it),e.unbindTexture()}L.depthBuffer&&Wt(L)}function Qt(L){let _=L.textures;for(let X=0,J=_.length;X<J;X++){let nt=_[X];if(f(nt)){let dt=P(L),pt=n.get(nt).__webglTexture;e.bindTexture(dt,pt),w(dt),e.unbindTexture()}}}let Ce=[],Ke=[];function _n(L){if(L.samples>0){if(He(L)===!1){let _=L.textures,X=L.width,J=L.height,nt=i.COLOR_BUFFER_BIT,dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(L),it=_.length>1;if(it)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let rt=L.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Dt=n.get(_[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,nt,i.NEAREST),l===!0&&(Ce.length=0,Ke.length=0,Ce.push(i.COLOR_ATTACHMENT0+mt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ce.push(dt),Ke.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Dt=n.get(_[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let _=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Pe(L){return Math.min(s.maxSamples,L.samples)}function He(L){let _=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function z(L){let _=a.render.frame;h.get(L)!==_&&(h.set(L,_),L.update())}function sn(L,_){let X=L.colorSpace,J=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ur&&X!==Ci&&(ne.getTransfer(X)===de?(J!==Hn||nt!==Pn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",X)),_}function pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=v,this.setTexture3D=A,this.setTextureCube=I,this.rebindTextures=re,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kv(i,t){function e(n,s=Ci){let r,a=ne.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===lh)return i.RGB;if(n===Hn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===Zo||n===Ko||n===Jo||n===jo||n===ra||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===Zo)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jo)return r.COMPRESSED_R11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===_l||n===aa||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:Bv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,x=null,g=typeof XRWebGLBinding<"u",p=new Oh,f={},w=e.getContextAttributes(),P=null,S=null,T=[],E=[],D=new se,y=null,M=null,R=new ln;R.viewport=new Ee;let U=new ln;U.viewport=new Ee;let O=[R,U],N=new Do,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=T[Y];return et===void 0&&(et=new er,T[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=T[Y];return et===void 0&&(et=new er,T[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=T[Y];return et===void 0&&(et=new er,T[Y]=et),et.getHandSpace()};function H(Y){let et=E.indexOf(Y.inputSource);if(et===-1)return;let vt=T[et];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<T.length;Y++){let et=E[Y];et!==null&&(E[Y]=null,T[Y].disconnect(et))}C=null,F=null,p.reset();for(let Y in f)delete f[Y];if(t.setRenderTarget(P),m=null,u=null,d=null,s=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(D.width,D.height,!1),M!==null){let Y=M.camera;Y.fov=M.fov,Y.zoom=M.zoom,Y.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(D),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,kt=null,Tt=null;w.depth&&(Tt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=w.stencil?es:hi,kt=w.stencil?rr:Qn);let Xt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new vn(u.textureWidth,u.textureHeight,{format:Hn,type:Pn,depthTexture:new qi(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new vn(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Y){for(let et=0;et<Y.removed.length;et++){let vt=Y.removed[et],kt=E.indexOf(vt);kt>=0&&(E[kt]=null,T[kt].disconnect(vt))}for(let et=0;et<Y.added.length;et++){let vt=Y.added[et],kt=E.indexOf(vt);if(kt===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=E.length){E.push(vt),kt=Xt;break}else if(E[Xt]===null){E[Xt]=vt,kt=Xt;break}if(kt===-1)break}let Tt=T[kt];Tt&&Tt.connect(vt)}}let v=new Z,A=new Z;function I(Y,et,vt){v.setFromMatrixPosition(et.matrixWorld),A.setFromMatrixPosition(vt.matrixWorld);let kt=v.distanceTo(A),Tt=et.projectionMatrix.elements,Xt=vt.projectionMatrix.elements,ye=Tt[14]/(Tt[10]-1),Wt=Tt[14]/(Tt[10]+1),re=(Tt[9]+1)/Tt[5],ce=(Tt[9]-1)/Tt[5],Qt=(Tt[8]-1)/Tt[0],Ce=(Xt[8]+1)/Xt[0],Ke=ye*Qt,_n=ye*Ce,Pe=kt/(-Qt+Ce),He=Pe*-Qt;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(He),Y.translateZ(Pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let z=ye+Pe,sn=Wt+Pe,pe=Ke-He,L=_n+(kt-He),_=re*Wt/sn*z,X=ce*Wt/sn*z;Y.projectionMatrix.makePerspective(pe,L,_,X,z,sn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function V(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,vt=Y.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),N.near=U.near=R.near=et,N.far=U.far=R.far=vt,(C!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,F=N.far),N.layers.mask=Y.layers.mask|6,R.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let kt=Y.parent,Tt=N.cameras;V(N,kt);for(let Xt=0;Xt<Tt.length;Xt++)V(Tt[Xt],kt);Tt.length===2?I(N,R,U):N.projectionMatrix.copy(R.projectionMatrix),M===null&&Y.isPerspectiveCamera&&(M={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,N,kt)};function j(Y,et,vt){vt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Y){return f[Y]};let ht=null;function tt(Y,et){if(h=et.getViewerPose(c||a),x=et,h!==null){let vt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let kt=!1;vt.length!==N.cameras.length&&(N.cameras.length=0,kt=!0);for(let Wt=0;Wt<vt.length;Wt++){let re=vt[Wt],ce=null;if(m!==null)ce=m.getViewport(re);else{let Ce=d.getViewSubImage(u,re);ce=Ce.viewport,Wt===0&&(t.setRenderTargetTextures(S,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(S))}let Qt=O[Wt];Qt===void 0&&(Qt=new ln,Qt.layers.enable(Wt),Qt.viewport=new Ee,O[Wt]=Qt),Qt.matrix.fromArray(re.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(re.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ce.x,ce.y,ce.width,ce.height),Wt===0&&(N.matrix.copy(Qt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),kt===!0&&N.cameras.push(Qt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let Wt=d.getDepthInformation(vt[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,s.renderState)}if(Tt&&Tt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<vt.length;Wt++){let re=vt[Wt].camera;if(re){let ce=f[re];ce||(ce=new Yr,f[re]=ce);let Qt=d.getCameraImage(re);ce.sourceTexture=Qt}}}}for(let vt=0;vt<T.length;vt++){let kt=E[vt],Tt=T[vt];kt!==null&&Tt!==void 0&&Tt.update(kt,et,c||a)}ht&&ht(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let ut=new vf;ut.setAnimationLoop(tt),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}},Hv=new Ue,Tf=new qt;Tf.set(-1,0,0,0,1,0,0,0,1);function Gv(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,mh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,P,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,w,P):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===fn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===fn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=t.get(f),P=w.envMap,S=w.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Tf),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,P){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=P*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){let w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){let E=T.program;n.uniformBlockBinding(S,E)}function c(S,T){let E=s[S.id];E===void 0&&(p(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",w));let D=T.program;n.updateUBOMapping(S,D);let y=t.render.frame;r[S.id]!==y&&(u(S),r[S.id]=y)}function h(S){let T=d();S.__bindingPointIndex=T;let E=i.createBuffer(),D=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let T=s[S.id],E=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,M=E.length;y<M;y++){let R=E[y];if(Array.isArray(R))for(let U=0,O=R.length;U<O;U++)m(R[U],y,U,D);else m(R,y,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,T,E,D){if(g(S,T,E,D)===!0){let y=S.__offset,M=S.value;if(Array.isArray(M)){let R=0;for(let U=0;U<M.length;U++){let O=M[U],N=f(O);x(O,S.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function x(S,T,E){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,E)}function g(S,T,E,D){let y=S.value,M=T+"_"+E;if(D[M]===void 0)return typeof y=="number"||typeof y=="boolean"?D[M]=y:ArrayBuffer.isView(y)?D[M]=y.slice():D[M]=y.clone(),!0;{let R=D[M];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return D[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(S){let T=S.uniforms,E=0,D=16;for(let M=0,R=T.length;M<R;M++){let U=Array.isArray(T[M])?T[M]:[T[M]];for(let O=0,N=U.length;O<N;O++){let C=U[O],F=Array.isArray(C.value)?C.value:[C.value];for(let H=0,W=F.length;H<W;H++){let K=F[H],v=f(K),A=E%D,I=A%v.boundary,V=A+I;E+=I,V!==0&&D-V<v.storage&&(E+=D-V),C.__data=new Float32Array(v.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=v.storage}}}let y=E%D;return y>0&&(E+=D-y),S.__size=E,S.__cache={},this}function f(S){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",S),T}function w(S){let T=S.target;T.removeEventListener("dispose",w);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function P(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Xv(){return mi===null&&(mi=new go(Wv,16,16,ns,ei),mi.name="DFG_LUT",mi.minFilter=qe,mi.magFilter=qe,mi.wrapS=Bn,mi.wrapT=Bn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var El=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Pn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let g=m,p=new Set([Vo,Go,Ho]),f=new Set([Pn,Qn,sr,rr,Bo,zo]),w=new Uint32Array(4),P=new Int32Array(4),S=new Z,T=null,E=null,D=[],y=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,O=null,N=null,C=null,F=null;this._outputColorSpace=Ie;let H=0,W=0,K=null,v=-1,A=null,I=new Ee,V=new Ee,j=null,ht=new Yt(0),tt=0,ut=e.width,Y=e.height,et=1,vt=null,kt=null,Tt=new Ee(0,0,ut,Y),Xt=new Ee(0,0,ut,Y),ye=!1,Wt=new Xr,re=!1,ce=!1,Qt=new Ue,Ce=new Z,Ke=new Ee,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function He(){return K===null?et:1}let z=n;function sn(b,k){return e.getContext(b,k)}let pe,L,_,X,J,nt,dt,pt,it,rt,mt,Dt,yt,gt,Nt,Bt,$t,B,xt,st,_t,wt,at;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",qn,!1),z===null){let k="webgl2";if(z=sn(k,b),z===null)throw sn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(b){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),Gt("WebGLRenderer: "+b.message),b}function Ft(){pe=new jx(z),pe.init(),_t=new kv(z,pe),L=new Gx(z,pe,t,_t),_=new Fv(z,pe),L.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),N=z.createFramebuffer(),C=z.createFramebuffer(),F=z.createFramebuffer(),X=new e_(z),J=new Mv,nt=new Ov(z,pe,_,J,L,_t,X),dt=new Jx(R),pt=new i0(z),wt=new zx(z,pt),it=new Qx(z,pt,X,wt),rt=new i_(z,it,pt,wt,X),B=new n_(z,L,nt),Nt=new Vx(J),mt=new bv(R,dt,pe,L,wt,Nt),Dt=new Gv(R,J),yt=new wv,gt=new Pv(pe),$t=new Bx(R,dt,_,rt,x,l),Bt=new Uv(R,rt,L),at=new Vv(z,X,L,_),xt=new Hx(z,pe,X),st=new t_(z,pe,X),X.programs=mt.programs,R.capabilities=L,R.extensions=pe,R.properties=J,R.renderLists=yt,R.shadowMap=Bt,R.state=_,R.info=X}g!==Pn&&(M=new r_(g,e.width,e.height,o,s,r));let It=new kh(R,z);this.xr=It,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(ut,Y,!1))},this.getSize=function(b){return b.set(ut,Y)},this.setSize=function(b,k,Q=!0){if(It.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=b,Y=k,e.width=Math.floor(b*et),e.height=Math.floor(k*et),Q===!0&&(e.style.width=b+"px",e.style.height=k+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(ut*et,Y*et).floor()},this.setDrawingBufferSize=function(b,k,Q){ut=b,Y=k,et=Q,e.width=Math.floor(b*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(g===Pn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,k,Q,q){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,k,Q,q),_.viewport(I.copy(Tt).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,k,Q,q){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,k,Q,q),_.scissor(V.copy(Xt).multiplyScalar(et).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){_.setScissorTest(ye=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,Q=!0){let q=0;if(b){let $=!1;if(K!==null){let St=K.texture.format;$=p.has(St)}if($){let St=K.texture.type,Ct=f.has(St),Mt=$t.getClearColor(),Rt=$t.getClearAlpha(),Lt=Mt.r,Zt=Mt.g,te=Mt.b;Ct?(w[0]=Lt,w[1]=Zt,w[2]=te,w[3]=Rt,z.clearBufferuiv(z.COLOR,0,w)):(P[0]=Lt,P[1]=Zt,P[2]=te,P[3]=Rt,z.clearBufferiv(z.COLOR,0,P))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),$t.dispose(),yt.dispose(),gt.dispose(),J.dispose(),dt.dispose(),rt.dispose(),wt.dispose(),at.dispose(),mt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Lu),It.removeEventListener("sessionend",Du),hs.stop()};function be(b){b.preventDefault(),dh("WebGLRenderer: Context Lost."),U=!0}function he(){dh("WebGLRenderer: Context Restored."),U=!1;let b=X.autoReset,k=Bt.enabled,Q=Bt.autoUpdate,q=Bt.needsUpdate,$=Bt.type;Ft(),X.autoReset=b,Bt.enabled=k,Bt.autoUpdate=Q,Bt.needsUpdate=q,Bt.type=$}function qn(b){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oi(b){let k=b.target;k.removeEventListener("dispose",oi),Qp(k)}function Qp(b){tm(b),J.remove(b)}function tm(b){let k=J.get(b).programs;k!==void 0&&(k.forEach(function(Q){mt.releaseProgram(Q)}),b.isShaderMaterial&&mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Q,q,$,St){k===null&&(k=_n);let Ct=$.isMesh&&$.matrixWorld.determinantAffine()<0,Mt=im(b,k,Q,q,$);_.setMaterial(q,Ct);let Rt=Q.index,Lt=1;if(q.wireframe===!0){if(Rt=it.getWireframeAttribute(Q),Rt===void 0)return;Lt=2}let Zt=Q.drawRange,te=Q.attributes.position,Pt=Zt.start*Lt,ue=(Zt.start+Zt.count)*Lt;St!==null&&(Pt=Math.max(Pt,St.start*Lt),ue=Math.min(ue,(St.start+St.count)*Lt)),Rt!==null?(Pt=Math.max(Pt,0),ue=Math.min(ue,Rt.count)):te!=null&&(Pt=Math.max(Pt,0),ue=Math.min(ue,te.count));let Ge=ue-Pt;if(Ge<0||Ge===1/0)return;wt.setup($,q,Mt,Q,Rt);let we,_e=xt;if(Rt!==null&&(we=pt.get(Rt),_e=st,_e.setIndex(we)),$.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*He()),_e.setMode(z.LINES)):_e.setMode(z.TRIANGLES);else if($.isLine){let rn=q.linewidth;rn===void 0&&(rn=1),_.setLineWidth(rn*He()),$.isLineSegments?_e.setMode(z.LINES):$.isLineLoop?_e.setMode(z.LINE_LOOP):_e.setMode(z.LINE_STRIP)}else $.isPoints?_e.setMode(z.POINTS):$.isSprite&&_e.setMode(z.TRIANGLES);if($.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))_e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let rn=$._multiDrawStarts,At=$._multiDrawCounts,hn=$._multiDrawCount,ae=Rt?pt.get(Rt).bytesPerElement:1,On=J.get(q).currentProgram.getUniforms();for(let li=0;li<hn;li++)On.setValue(z,"_gl_DrawID",li),_e.render(rn[li]/ae,At[li])}else if($.isInstancedMesh)_e.renderInstances(Pt,Ge,$.count);else if(Q.isInstancedBufferGeometry){let rn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,At=Math.min(Q.instanceCount,rn);_e.renderInstances(Pt,Ge,At)}else _e.render(Pt,Ge)};function Iu(b,k,Q,q){O!==null&&b.isNodeMaterial&&O.setObject(q,b),re===!0&&Nt.setState(b,Q,!1),b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,Da(b,k,q),b.side=Ki,b.needsUpdate=!0,Da(b,k,q),b.side=yn):Da(b,k,q)}this.compile=function(b,k,Q=null){Q===null&&(Q=b),O!==null&&O.renderStart(b,k,Q),E=gt.get(Q),E.init(k),y.push(E),Q.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),b!==Q&&b.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),ce=this.localClippingEnabled,re=Nt.init(this.clippingPlanes,ce),re===!0&&Nt.setGlobalState(this.clippingPlanes,k),O!==null&&Bt.render(E.state.shadowsArray,Q,k);let q=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let St=$.material;if(St)if(Array.isArray(St))for(let Ct=0;Ct<St.length;Ct++){let Mt=St[Ct];Iu(Mt,Q,k,$),q.add(Mt)}else Iu(St,Q,k,$),q.add(St)}),E=y.pop(),O!==null&&O.renderEnd(),q},this.compileAsync=function(b,k,Q=null){let q=this.compile(b,k,Q);return new Promise($=>{function St(){if(q.forEach(function(Ct){let Rt=J.get(Ct).currentProgram;(Rt===void 0||Rt.isReady())&&q.delete(Ct)}),q.size===0){$(b);return}setTimeout(St,10)}pe.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let pc=null;function em(b){pc&&pc(b)}function Lu(){hs.stop()}function Du(){hs.start()}let hs=new vf;hs.setAnimationLoop(em),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(b){pc=b,It.setAnimationLoop(b),b===null?hs.stop():hs.start()},It.addEventListener("sessionstart",Lu),It.addEventListener("sessionend",Du),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(b,k);let Q=It.enabled===!0&&It.isPresenting===!0,q=M!==null&&(K===null||Q)&&M.begin(R,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(k),k=It.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,k,K),E=gt.get(b,y.length),E.init(k),E.state.textureUnits=nt.getTextureUnits(),y.push(E),Qt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Wt.setFromProjectionMatrix(Qt,Jn,k.reversedDepth),ce=this.localClippingEnabled,re=Nt.init(this.clippingPlanes,ce),T=yt.get(b,D.length),T.init(),D.push(T),It.enabled===!0&&It.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&mc(Ct,k,-1/0,R.sortObjects)}mc(b,k,0,R.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(vt,kt),Pe=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Pe&&$t.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Nt.beginShadows();let $=E.state.shadowsArray;if(Bt.render($,b,k),re===!0&&Nt.endShadows(),(q&&M.hasRenderPass())===!1){let Ct=T.opaque,Mt=T.transmissive;if(E.setupLights(),k.isArrayCamera){let Rt=k.cameras;if(Mt.length>0)for(let Lt=0,Zt=Rt.length;Lt<Zt;Lt++){let te=Rt[Lt];Uu(Ct,Mt,b,te)}Pe&&$t.render(b);for(let Lt=0,Zt=Rt.length;Lt<Zt;Lt++){let te=Rt[Lt];Nu(T,b,te,te.viewport)}}else Mt.length>0&&Uu(Ct,Mt,b,k),Pe&&$t.render(b),Nu(T,b,k)}K!==null&&W===0&&(nt.updateMultisampleRenderTarget(K),nt.updateRenderTargetMipmap(K)),q&&M.end(R),b.isScene===!0&&b.onAfterRender(R,b,k),wt.resetDefaultState(),v=-1,A=null,y.pop(),y.length>0?(E=y[y.length-1],nt.setTextureUnits(E.state.textureUnits),re===!0&&Nt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?T=D[D.length-1]:T=null,O!==null&&O.renderEnd()};function mc(b,k,Q,q){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Wt)){q&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qt);let Ct=rt.update(b),Mt=b.material;Mt.visible&&T.push(b,Ct,Mt,Q,Ke.z,null,k)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Wt))){let Ct=rt.update(b),Mt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ke.copy(Ct.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(Qt)),Array.isArray(Mt)){let Rt=Ct.groups;for(let Lt=0,Zt=Rt.length;Lt<Zt;Lt++){let te=Rt[Lt],Pt=Mt[te.materialIndex];Pt&&Pt.visible&&T.push(b,Ct,Pt,Q,Ke.z,te,k)}}else Mt.visible&&T.push(b,Ct,Mt,Q,Ke.z,null,k)}}let St=b.children;for(let Ct=0,Mt=St.length;Ct<Mt;Ct++)mc(St[Ct],k,Q,q)}function Nu(b,k,Q,q){let{opaque:$,transmissive:St,transparent:Ct}=b;E.setupLightsView(Q),re===!0&&Nt.setGlobalState(R.clippingPlanes,Q),q&&_.viewport(I.copy(q)),$.length>0&&La($,k,Q),St.length>0&&La(St,k,Q),Ct.length>0&&La(Ct,k,Q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Uu(b,k,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let Pt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new vn(1,1,{generateMipmaps:!0,type:Pt?ei:Pn,minFilter:ts,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=E.state.transmissionRenderTarget[q.id],Ct=q.viewport||I;St.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(ht),tt=R.getClearAlpha(),tt<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&$t.render(Q);let Zt=R.toneMapping;R.toneMapping=jn;let te=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),re===!0&&Nt.setGlobalState(R.clippingPlanes,q),La(b,Q,q),nt.updateMultisampleRenderTarget(St),nt.updateRenderTargetMipmap(St),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ue=0,Ge=k.length;ue<Ge;ue++){let we=k[ue],{object:_e,geometry:rn,material:At,group:hn}=we;if(At.side===yn&&_e.layers.test(q.layers)){let ae=At.side;At.side=fn,At.needsUpdate=!0,Fu(_e,Q,q,rn,At,hn),At.side=ae,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(nt.updateMultisampleRenderTarget(St),nt.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,Rt,Lt),R.setClearColor(ht,tt),te!==void 0&&(q.viewport=te),R.toneMapping=Zt}function La(b,k,Q){let q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,St=b.length;$<St;$++){let Ct=b[$],{object:Mt,geometry:Rt,group:Lt}=Ct,Zt=Ct.material;Zt.allowOverride===!0&&q!==null&&(Zt=q),Mt.layers.test(Q.layers)&&Fu(Mt,k,Q,Rt,Zt,Lt)}}function Fu(b,k,Q,q,$,St){O!==null&&$.isNodeMaterial&&O.setObject(b,$),b.onBeforeRender(R,k,Q,q,$,St),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(R,k,Q,q,b,St),$.transparent===!0&&$.side===yn&&$.forceSinglePass===!1?($.side=fn,$.needsUpdate=!0,R.renderBufferDirect(Q,k,q,$,b,St),$.side=Ki,$.needsUpdate=!0,R.renderBufferDirect(Q,k,q,$,b,St),$.side=yn):R.renderBufferDirect(Q,k,q,$,b,St),b.onAfterRender(R,k,Q,q,$,St)}function Da(b,k,Q){k.isScene!==!0&&(k=_n);let q=J.get(b),$=E.state.lights,St=E.state.shadowsArray,Ct=$.state.version,Mt=mt.getParameters(b,$.state,St,k,Q,E.state.lightProbeGridArray),Rt=mt.getProgramCacheKey(Mt),Lt=q.programs;q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let Zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;q.envMap=dt.get(b.envMap||q.environment,Zt),q.envMapRotation=q.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",oi),Lt=new Map,q.programs=Lt);let te=Lt.get(Rt);if(te!==void 0){if(q.currentProgram===te&&q.lightsStateVersion===Ct)return ku(b,Mt),te}else Mt.uniforms=mt.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,Q,Mt),b.onBeforeCompile(Mt,R),te=mt.acquireProgram(Mt,Rt),Lt.set(Rt,te),q.uniforms=Mt.uniforms;let Pt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=Nt.uniform),ku(b,Mt),q.needsLights=rm(b),q.lightsStateVersion=Ct,q.needsLights&&(Pt.ambientLightColor.value=$.state.ambient,Pt.lightProbe.value=$.state.probe,Pt.sunLights.value=$.state.sun,Pt.sunLightShadows.value=$.state.sunShadow,Pt.directionalLights.value=$.state.directional,Pt.directionalLightShadows.value=$.state.directionalShadow,Pt.spotLights.value=$.state.spot,Pt.spotLightShadows.value=$.state.spotShadow,Pt.rectAreaLights.value=$.state.rectArea,Pt.ltc_1.value=$.state.rectAreaLTC1,Pt.ltc_2.value=$.state.rectAreaLTC2,Pt.pointLights.value=$.state.point,Pt.pointLightShadows.value=$.state.pointShadow,Pt.hemisphereLights.value=$.state.hemi,Pt.sunShadowMatrix.value=$.state.sunShadowMatrix,Pt.sunShadowCascade.value=$.state.sunShadowCascade,Pt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pt.spotLightMatrix.value=$.state.spotLightMatrix,Pt.spotLightMap.value=$.state.spotLightMap,Pt.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=te,q.uniformsList=null,te}function Ou(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=cr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ku(b,k){let Q=J.get(b);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function nm(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let Q=0,q=b.length;Q<q;Q++){let $=b[Q];if($.texture!==null&&$.boundingBox.containsPoint(S))return $}return null}function im(b,k,Q,q,$){k.isScene!==!0&&(k=_n),nt.resetTextureUnits();let St=k.fog,Ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Mt=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ne.workingColorSpace,Rt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Lt=dt.get(q.envMap||Ct,Rt),Zt=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,te=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!Q.morphAttributes.position,ue=!!Q.morphAttributes.normal,Ge=!!Q.morphAttributes.color,we=jn;q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(we=R.toneMapping);let _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,rn=_e!==void 0?_e.length:0,At=J.get(q),hn=E.state.lights;if(re===!0&&(ce===!0||b!==A)){let Me=b===A&&q.id===v;Nt.setState(q,b,Me)}let ae=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==hn.state.version||At.outputColorSpace!==Mt||$.isBatchedMesh&&At.batching===!1||!$.isBatchedMesh&&At.batching===!0||$.isBatchedMesh&&At.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&At.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&At.instancing===!1||!$.isInstancedMesh&&At.instancing===!0||$.isSkinnedMesh&&At.skinning===!1||!$.isSkinnedMesh&&At.skinning===!0||$.isInstancedMesh&&At.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&At.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&At.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&At.instancingMorph===!1&&$.morphTexture!==null||At.envMap!==Lt||q.fog===!0&&At.fog!==St||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Nt.numPlanes||At.numIntersection!==Nt.numIntersection)||At.vertexAlphas!==Zt||At.vertexTangents!==te||At.morphTargets!==Pt||At.morphNormals!==ue||At.morphColors!==Ge||At.toneMapping!==we||At.morphTargetsCount!==rn||!!At.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,At.__version=q.version);let On=At.currentProgram;ae===!0&&(On=Da(q,k,$),O&&q.isNodeMaterial&&O.onUpdateProgram(q,On,At));let li=!1,Ni=!1,Ns=!1,xe=On.getUniforms(),ke=At.uniforms;if(_.useProgram(On.program)&&(li=!0,Ni=!0,Ns=!0),q.id!==v&&(v=q.id,Ni=!0),At.needsLights){let Me=nm(E.state.lightProbeGridArray,$);At.lightProbeGrid!==Me&&(At.lightProbeGrid=Me,Ni=!0)}if(li||A!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(z,"projectionMatrix",b.projectionMatrix),xe.setValue(z,"viewMatrix",b.matrixWorldInverse);let Fi=xe.map.cameraPosition;Fi!==void 0&&Fi.setValue(z,Ce.setFromMatrixPosition(b.matrixWorld)),L.logarithmicDepthBuffer&&xe.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xe.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Ni=!0,Ns=!0)}if(At.needsLights&&(hn.state.sunShadowMap.length>0&&xe.setValue(z,"sunShadowMap",hn.state.sunShadowMap,nt),hn.state.directionalShadowMap.length>0&&xe.setValue(z,"directionalShadowMap",hn.state.directionalShadowMap,nt),hn.state.spotShadowMap.length>0&&xe.setValue(z,"spotShadowMap",hn.state.spotShadowMap,nt),hn.state.pointShadowMap.length>0&&xe.setValue(z,"pointShadowMap",hn.state.pointShadowMap,nt)),$.isSkinnedMesh){xe.setOptional(z,$,"bindMatrix"),xe.setOptional(z,$,"bindMatrixInverse");let Me=$.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(z,"boneTexture",Me.boneTexture,nt))}$.isBatchedMesh&&(xe.setOptional(z,$,"batchingTexture"),xe.setValue(z,"batchingTexture",$._matricesTexture,nt),xe.setOptional(z,$,"batchingIdTexture"),xe.setValue(z,"batchingIdTexture",$._indirectTexture,nt),xe.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&xe.setValue(z,"batchingColorTexture",$._colorsTexture,nt));let Ui=Q.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&B.update($,Q,On),(Ni||At.receiveShadow!==$.receiveShadow)&&(At.receiveShadow=$.receiveShadow,xe.setValue(z,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(ke.envMapIntensity.value=k.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Xv()),Ni){if(xe.setValue(z,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&sm(ke,Ns),St&&q.fog===!0&&Dt.refreshFogUniforms(ke,St),Dt.refreshMaterialUniforms(ke,q,et,Y,E.state.transmissionRenderTarget[b.id]),At.needsLights&&At.lightProbeGrid){let Me=At.lightProbeGrid;ke.probesSH.value=Me.texture,ke.probesMin.value.copy(Me.boundingBox.min),ke.probesMax.value.copy(Me.boundingBox.max),ke.probesResolution.value.copy(Me.resolution)}cr.upload(z,Ou(At),ke,nt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(cr.upload(z,Ou(At),ke,nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xe.setValue(z,"center",$.center),xe.setValue(z,"modelViewMatrix",$.modelViewMatrix),xe.setValue(z,"normalMatrix",$.normalMatrix),xe.setValue(z,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let Me=q.uniformsGroups;for(let Fi=0,Us=Me.length;Fi<Us;Fi++){let zu=Me[Fi];at.update(zu,On),at.bind(zu,On)}}return On}function sm(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function rm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,k,Q){let q=J.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=k,J.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){let Q=J.get(b);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,Q=0){K=b,H=k,W=Q;let q=null,$=!1,St=!1;if(b){let Mt=J.get(b);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(z.FRAMEBUFFER,Mt.__webglFramebuffer),I.copy(b.viewport),V.copy(b.scissor),j=b.scissorTest,_.viewport(I),_.scissor(V),_.setScissorTest(j),v=-1;return}else if(Mt.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(Mt.__hasExternalTextures)nt.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Zt=b.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&J.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Lt=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[k])?q=Lt[k][Q]:q=Lt[k],$=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?q=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?q=Lt[Q]:q=Lt,I.copy(b.viewport),V.copy(b.scissor),j=b.scissorTest}else I.copy(Tt).multiplyScalar(et).floor(),V.copy(Xt).multiplyScalar(et).floor(),j=ye;if(Q!==0&&(q=N),_.bindFramebuffer(z.FRAMEBUFFER,q)&&_.drawBuffers(b,q),_.viewport(I),_.scissor(V),_.setScissorTest(j),$){let Mt=J.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,Q)}else if(St){let Mt=k;for(let Rt=0;Rt<b.textures.length;Rt++){let Lt=J.get(b.textures[Rt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,Q,Mt)}}else if(b!==null&&Q!==0){let Mt=J.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,Q)}v=-1};function Bu(b){let k=J.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=L.textureFormatReadable(b.format),k.__typeReadable=L.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,Q,q,$,St,Ct,Mt=0){if(!(b&&b.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Rt=Rt[Ct]),Rt){_.bindFramebuffer(z.FRAMEBUFFER,Rt);try{let Lt=b.textures[Mt],Zt=Lt.format,te=Lt.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);let Pt=Bu(Lt);if(Pt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-q&&Q>=0&&Q<=b.height-$&&z.readPixels(k,Q,q,$,_t.convert(Zt),_t.convert(te),St)}finally{let Lt=K!==null?J.get(K).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,k,Q,q,$,St,Ct,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Rt=Rt[Ct]),Rt)if(k>=0&&k<=b.width-q&&Q>=0&&Q<=b.height-$){_.bindFramebuffer(z.FRAMEBUFFER,Rt);let Lt=b.textures[Mt],Zt=Lt.format,te=Lt.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);let Pt=Bu(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,St.byteLength,z.STREAM_READ),z.readPixels(k,Q,q,$,_t.convert(Zt),_t.convert(te),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ge=K!==null?J.get(K).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Ge);let we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xd(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,St),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ue),z.deleteSync(we),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,Q=0){let q=Math.pow(2,-Q),$=Math.floor(b.image.width*q),St=Math.floor(b.image.height*q),Ct=k!==null?k.x:0,Mt=k!==null?k.y:0;nt.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Ct,Mt,$,St),_.unbindTexture()},this.copyTextureToTexture=function(b,k,Q=null,q=null,$=0,St=0){let Ct,Mt,Rt,Lt,Zt,te,Pt,ue,Ge,we=b.isCompressedTexture?b.mipmaps[St]:b.image;if(Q!==null)Ct=Q.max.x-Q.min.x,Mt=Q.max.y-Q.min.y,Rt=Q.isBox3?Q.max.z-Q.min.z:1,Lt=Q.min.x,Zt=Q.min.y,te=Q.isBox3?Q.min.z:0;else{let ke=Math.pow(2,-$);Ct=Math.floor(we.width*ke),Mt=Math.floor(we.height*ke),b.isDataArrayTexture?Rt=we.depth:b.isData3DTexture?Rt=Math.floor(we.depth*ke):Rt=1,Lt=0,Zt=0,te=0}q!==null?(Pt=q.x,ue=q.y,Ge=q.z):(Pt=0,ue=0,Ge=0);let _e=_t.convert(k.format),rn=_t.convert(k.type),At;k.isData3DTexture?(nt.setTexture3D(k,0),At=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(nt.setTexture2DArray(k,0),At=z.TEXTURE_2D_ARRAY):(nt.setTexture2D(k,0),At=z.TEXTURE_2D),_.activeTexture(z.TEXTURE0),_.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let hn=_.getParameter(z.UNPACK_ROW_LENGTH),ae=_.getParameter(z.UNPACK_IMAGE_HEIGHT),On=_.getParameter(z.UNPACK_SKIP_PIXELS),li=_.getParameter(z.UNPACK_SKIP_ROWS),Ni=_.getParameter(z.UNPACK_SKIP_IMAGES);_.pixelStorei(z.UNPACK_ROW_LENGTH,we.width),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,we.height),_.pixelStorei(z.UNPACK_SKIP_PIXELS,Lt),_.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(z.UNPACK_SKIP_IMAGES,te);let Ns=b.isDataArrayTexture||b.isData3DTexture,xe=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){let ke=J.get(b),Ui=J.get(k),Me=J.get(ke.__renderTarget),Fi=J.get(Ui.__renderTarget);_.bindFramebuffer(z.READ_FRAMEBUFFER,Me.__webglFramebuffer),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Us=0;Us<Rt;Us++)Ns&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,J.get(b).__webglTexture,$,te+Us),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,J.get(k).__webglTexture,St,Ge+Us)),z.blitFramebuffer(Lt,Zt,Ct,Mt,Pt,ue,Ct,Mt,z.DEPTH_BUFFER_BIT,z.NEAREST);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||J.has(b)){let ke=J.get(b),Ui=J.get(k);_.bindFramebuffer(z.READ_FRAMEBUFFER,C),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Me=0;Me<Rt;Me++)Ns?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,$,te+Me):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,$),xe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ui.__webglTexture,St,Ge+Me):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ui.__webglTexture,St),$!==0?z.blitFramebuffer(Lt,Zt,Ct,Mt,Pt,ue,Ct,Mt,z.COLOR_BUFFER_BIT,z.NEAREST):xe?z.copyTexSubImage3D(At,St,Pt,ue,Ge+Me,Lt,Zt,Ct,Mt):z.copyTexSubImage2D(At,St,Pt,ue,Lt,Zt,Ct,Mt);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(At,St,Pt,ue,Ge,Ct,Mt,Rt,_e,rn,we.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(At,St,Pt,ue,Ge,Ct,Mt,Rt,_e,we.data):z.texSubImage3D(At,St,Pt,ue,Ge,Ct,Mt,Rt,_e,rn,we):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,St,Pt,ue,Ct,Mt,_e,rn,we.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,St,Pt,ue,we.width,we.height,_e,we.data):z.texSubImage2D(z.TEXTURE_2D,St,Pt,ue,Ct,Mt,_e,rn,we);_.pixelStorei(z.UNPACK_ROW_LENGTH,hn),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae),_.pixelStorei(z.UNPACK_SKIP_PIXELS,On),_.pixelStorei(z.UNPACK_SKIP_ROWS,li),_.pixelStorei(z.UNPACK_SKIP_IMAGES,Ni),St===0&&k.generateMipmaps&&z.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){H=0,W=0,K=null,_.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var oe={},bn={},Rl=[500,1500,3500],qv=i=>new Promise(t=>setTimeout(t,i)),Ef=(i,t)=>t?i+(i.includes("?")?"&":"?")+"r="+t:i;async function $v(i){for(let t=0;;t++)try{let e=await fetch(Ef(i,t));if(e.ok)return await e.json();throw new Error(e.status+" "+i)}catch(e){if(t>=Rl.length)throw e;await qv(Rl[t])}}async function Af(i=()=>{}){let t=await $v("img/manifest.json"),e=Object.keys(t),n=0;return await Promise.all(e.map(s=>new Promise(r=>{let a=0,o=()=>{let l=new Image;l.decoding="async",l.onload=()=>{oe[s]=l,bn[s]=t[s],n++,i(n/e.length),r()},l.onerror=()=>{if(a<Rl.length){setTimeout(o,Rl[a++]);return}console.warn("image failed",s),n++,r()},l.src=Ef(t[s].src,a)};o()}))),t}var Jt=i=>bn[i]?bn[i].src:`img/ui/${i}.webp`;var pn=.72,Cf=30,Rf=21,In={uTime:{value:0},uTint:{value:new Yt(1,1,1)},uHazeCol:{value:new Yt("#9fbfb4")},uNight:{value:0}},Yv=`
uniform float uTime; uniform float uSway; uniform float uPhase; uniform vec2 uPad;
varying vec2 vUv;
void main(){
  vec2 k = 1.0 + 2.0 * uPad;
  vUv = (uv - 0.5) * k + 0.5;
  vec3 p = position;
  p.x *= k.x; p.y = (p.y - 0.5) * k.y + 0.5;
  float h = clamp(vUv.y, 0.0, 1.0);
  p.x += (sin(uTime * 1.5 + uPhase) + 0.35 * sin(uTime * 3.7 + uPhase * 1.7)) * uSway * h * h;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,Zv=`
uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; uniform float uFlash;
uniform float uHaze; uniform vec3 uHazeCol; uniform float uDark; uniform float uEmit;
uniform float uOut; uniform vec2 uPad; uniform float uTime;
varying vec2 vUv;
// sampled every time, then masked: a branch around the sample would break the mip choice at the picture's edge
float A(vec2 q) { return texture2D(map, clamp(q, 0.0, 1.0)).a * step(0.0, q.x) * step(q.x, 1.0) * step(0.0, q.y) * step(q.y, 1.0); }
void main(){
  vec4 c = texture2D(map, clamp(vUv, 0.0, 1.0));
  c.a *= step(0.0, vUv.x) * step(vUv.x, 1.0) * step(0.0, vUv.y) * step(vUv.y, 1.0);
  float o = 0.0;
  if (uOut > 0.0) {
    vec2 d = uPad * 0.8;
    o = max(max(max(A(vUv + vec2(d.x, 0.0)), A(vUv - vec2(d.x, 0.0))), max(A(vUv + vec2(0.0, d.y)), A(vUv - vec2(0.0, d.y)))),
            max(max(A(vUv + d * 0.707), A(vUv - d * 0.707)), max(A(vUv + vec2(d.x, -d.y) * 0.707), A(vUv + vec2(-d.x, d.y) * 0.707))));
    o *= uOut * (0.85 + 0.15 * sin(uTime * 5.0));
  }
  float a = c.a + o * (1.0 - c.a);
  if (a < 0.01) discard;
  // uDark sinks a cut-out into flat blue-green shade, like the ground off the walk (the layered edge rows): detail
  // fades with the light, so the far rows read as darker paper layers
  vec3 col = c.rgb * mix(uTint, vec3(1.0), uEmit);
  // (linear colour: the power keeps each step of uDark an even step darker on screen)
  col = mix(col * pow(1.0 - 0.8 * uDark, 2.2), vec3(0.01, 0.035, 0.04) * uTint, uDark * 0.35);
  col = mix(col, uHazeCol * uTint, uHaze);
  col = mix(col, vec3(1.0, 0.98, 0.9), uFlash);
  col = (col * c.a + vec3(1.0, 0.96, 0.82) * o * (1.0 - c.a)) / a;
  gl_FragColor = vec4(col, a * uAlpha);
  #include <colorspace_fragment>
}`,Pf=.055,Kv=new en(1,1).translate(0,.5,0),zh=new Map;function Lf(i,{repeat:t=!1,blur:e=0}={}){let n=i+(e?":b"+e:"");if(zh.has(n))return zh.get(n);let s=oe[i];if(!s)throw new Error("missing image "+i);if(e){let a=document.createElement("canvas"),o=e*3;a.width=s.width+o*2,a.height=s.height+o*2;let l=a.getContext("2d");l.filter=`blur(${e}px)`,l.drawImage(s,o,o),s=a}let r=new Qe(s);return r.colorSpace=Ie,r.anisotropy=4,t&&(r.wrapS=r.wrapT=Ai),r.needsUpdate=!0,zh.set(n,r),r}var ur=class{constructor(t,e,n,{x:s=0,z:r=0,y:a=0,sway:o=0,flip:l=!1,shadow:c=0,shadowK:h=.25,haze:d=0,dark:u=0,order:m=2,blur:x=0,emit:g=0}={}){this.world=t,this.h=n,this.flip=l,this.sx=1,this.sy=1,this.blur=x,this.shadowK=h,this.mat=new Le({vertexShader:Yv,fragmentShader:Zv,transparent:!0,depthWrite:!1,side:yn,uniforms:{map:{value:null},uTint:In.uTint,uTime:In.uTime,uHazeCol:In.uHazeCol,uSway:{value:o},uPhase:{value:Math.random()*6.28},uAlpha:{value:1},uFlash:{value:0},uHaze:{value:d},uDark:{value:u},uEmit:{value:g},uOut:{value:0},uPad:{value:new se(0,0)}}}),this.mesh=new Ae(Kv,this.mat),this.mesh.rotation.x=-pn,this.mesh.renderOrder=m,this.mesh.position.set(s,a,r),this.set(e),t.scene.add(this.mesh),c&&(this.shadow=new Ae(t.shadowGeo,t.shadowMat),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.shadowW=c,t.scene.add(this.shadow)),this.sync()}set(t){if(this.name===t)return;this.name=t,this.mat.uniforms.map.value=Lf(t,{blur:this.blur});let e=bn[t]||{w:oe[t].width,h:oe[t].height};this.aspect=e.w/e.h}useCanvas(t){let e=new Cn(t);e.colorSpace=Ie,e.anisotropy=4,this.name=null,this.canvasTex=e,this.mat.uniforms.map.value=e,this.aspect=t.width/t.height}refresh(){this.canvasTex&&(this.canvasTex.needsUpdate=!0)}useTex(t,e){this.name=null,this.mat.uniforms.map.value=t,this.aspect=e,this.sync()}get x(){return this.mesh.position.x}get z(){return this.mesh.position.z}get w(){return this.h*this.aspect}setPos(t,e,n=this.mesh.position.y){this.mesh.position.set(t,n,e),this.sync()}sync(){let t=this.h*this.aspect;if(this.mesh.scale.set(t*this.sx*(this.flip?-1:1),this.h*this.sy,1),this.mat.uniforms.uOut.value>0&&this.mat.uniforms.uPad.value.set(Math.min(.5,Pf/Math.max(.05,Math.abs(t*this.sx))),Math.min(.5,Pf/Math.max(.05,Math.abs(this.h*this.sy)))),this.shadow){this.shadow.position.set(this.mesh.position.x,.02,this.mesh.position.z+.02);let e=this.shadowW*(1-Math.min(.5,this.mesh.position.y*this.shadowK));this.shadow.scale.set(e,e*.42,1)}}set alpha(t){this.mat.uniforms.uAlpha.value=t}get alpha(){return this.mat.uniforms.uAlpha.value}set flash(t){this.mat.uniforms.uFlash.value=t}set outline(t){let e=this.mat.uniforms;if(t<=0){e.uOut.value=0,e.uPad.value.set(0,0);return}let n=e.uOut.value;e.uOut.value=t,n||this.sync()}get outline(){return this.mat.uniforms.uOut.value}set visible(t){this.mesh.visible=t,this.shadow&&(this.shadow.visible=t)}get visible(){return this.mesh.visible}dispose(){this.world.scene.remove(this.mesh),this.shadow&&this.world.scene.remove(this.shadow),this.mat.dispose()}};function If(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=128,n=0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,i),a.addColorStop(n,i),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,e,e);let o=new Cn(s);return o.colorSpace=Ie,o}var Jv=`
attribute vec4 aCol; attribute float aSize; attribute float aKind;
uniform float uScale;
varying vec4 vCol; varying float vKind;
void main(){
  vCol = aCol; vKind = aKind;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,jv=`
varying vec4 vCol; varying float vKind;
void main(){
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float a;
  if (vKind > 0.5) { // four-point sparkle
    float d = min(abs(p.x), abs(p.y));
    a = (1.0 - smoothstep(0.0, 0.16, d)) * (1.0 - smoothstep(0.4, 1.0, length(p)));
    a = max(a, 1.0 - smoothstep(0.0, 0.35, length(p)));
  } else {
    a = 1.0 - smoothstep(0.35, 1.0, length(p));
  }
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol.rgb, vCol.a * a);
  #include <colorspace_fragment>
}`,Pl=class{constructor(t,e,n){this.max=e,this.p=[];let s=new dn;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.kind=new Float32Array(e),s.setAttribute("position",new We(this.pos,3)),s.setAttribute("aCol",new We(this.col,4)),s.setAttribute("aSize",new We(this.size,1)),s.setAttribute("aKind",new We(this.kind,1)),this.geo=s,this.mat=new Le({vertexShader:Jv,fragmentShader:jv,transparent:!0,depthWrite:!1,blending:n?ji:Ji,uniforms:{uScale:{value:400}}}),this.pts=new qr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=4,t.add(this.pts)}add(t){this.p.length>=this.max&&this.p.shift(),t.t=0,this.p.push(t)}update(t){let e=0,n=new Yt;for(let s=this.p.length-1;s>=0;s--){let r=this.p[s];if(r.t+=t,r.t>=r.life){this.p.splice(s,1);continue}r.vy-=(r.g||0)*t;let a=r.drag?Math.max(0,1-r.drag*t):1;r.vx*=a,r.vy*=a,r.vz*=a,r.wander&&(r.vx+=Math.sin(r.t*2.1+r.ph)*r.wander*t,r.vy+=Math.cos(r.t*1.7+r.ph)*r.wander*.6*t),r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.02&&r.g&&(r.y=.02,r.vy*=-.3,r.vx*=.6,r.vz*=.6);let o=r.t/r.life,l=r.a;r.fadeIn&&(l*=Math.min(1,r.t/r.fadeIn)),l*=r.blink?.55+.45*Math.sin(r.t*r.blink+r.ph):1,l*=1-Math.pow(o,r.fadePow||3),n.set(r.c),this.pos[e*3]=r.x,this.pos[e*3+1]=r.y,this.pos[e*3+2]=r.z,this.col[e*4]=n.r,this.col[e*4+1]=n.g,this.col[e*4+2]=n.b,this.col[e*4+3]=l,this.size[e]=r.s*(r.grow?.6+o*.9:1),this.kind[e]=r.k||0,e++}this.geo.setDrawRange(0,e);for(let s of["position","aCol","aSize","aKind"])this.geo.attributes[s].needsUpdate=!0}},Qv=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,ty=`
uniform sampler2D tGrass, tDirt, tCobble, tMask, tShade, tExtra;
uniform vec4 uRect; uniform vec3 uTint; uniform float uNight; uniform float uTime;
varying vec3 vW;
void main(){
  vec2 w = vW.xz;
  vec3 g = texture2D(tGrass, w / 7.0).rgb;
  vec3 g2 = texture2D(tGrass, w / 17.0 + vec2(0.37, 0.61)).rgb;
  float big = texture2D(tGrass, w / 61.0 + vec2(0.13, 0.29)).g;
  g = mix(g, g2, 0.4) * (0.9 + big * 0.2);
  vec2 mu = (w - uRect.xy) / uRect.zw;
  vec3 m = texture2D(tMask, mu).rgb;
  vec3 shm = texture2D(tShade, mu).rgb;
  float sh = shm.x, moss = shm.y, fleck = shm.z;
  float en = (g.g - 0.45) * 0.7;
  vec3 d = texture2D(tDirt, w / 5.0).rgb;
  vec3 c = mix(g, d, smoothstep(0.35, 0.62, m.r + en * 0.6));
  vec3 cb = texture2D(tCobble, w / 4.5).rgb;
  c = mix(c, cb, smoothstep(0.35, 0.6, m.g + en * 0.45));
  vec3 soil = texture2D(tDirt, w / 3.0 + 0.5).rgb * vec3(0.52, 0.42, 0.36);
  c = mix(c, soil, smoothstep(0.3, 0.6, m.b + en * 0.25));
  // Whisperwood floor: deeper, cooler moss green (painted into the shade map's G channel)
  c = mix(c, c * vec3(0.66, 0.88, 0.74), moss * 0.7);
  c *= 1.0 - sh * 0.55;
  c = mix(c, c * vec3(0.78, 0.86, 1.0), sh * 0.4);
  c = mix(c, c * vec3(1.5, 1.42, 1.08), fleck * (1.0 - uNight));
  // R: beyond the walkable ground the floor sinks into deep blue-green shade (owner 10-31 18:15: "we need
  // something to define the negative space ... make it dark"). G: pond water, high in the middle. B: past the
  // island's edge, where there is no ground at all (edge.js draws the earth face and the mist below).
  vec3 ex = texture2D(tExtra, mu).rgb;
  if (ex.b > 0.5) discard;
  // colours here are linear (the output is converted to sRGB), so 0.12 reads as about 0.4 on screen
  c = mix(c, c * vec3(0.09, 0.13, 0.16), smoothstep(0.05, 0.95, ex.r));
  float wm = ex.g;
  if (wm > 0.05) {
    float n1 = texture2D(tGrass, w / 8.0 + vec2(uTime * 0.013, uTime * 0.009)).g;
    float n2 = texture2D(tGrass, w / 5.0 + vec2(-uTime * 0.011, uTime * 0.015)).g;
    float rip = n1 + n2;
    float depth = smoothstep(0.55, 0.98, wm);
    vec3 wc = mix(vec3(0.13, 0.39, 0.37), vec3(0.03, 0.16, 0.21), depth);
    wc *= 0.93 + rip * 0.07;
    wc += smoothstep(1.08, 1.24, rip) * 0.09 * (1.0 - depth * 0.5);
    float foam = smoothstep(0.42, 0.49, wm) * (1.0 - smoothstep(0.48, 0.56, wm));
    wc = mix(wc, vec3(0.71, 0.89, 0.79), foam * (0.45 + 0.35 * sin(uTime * 1.4 + w.x * 0.9 + w.y * 1.3)));
    wc = mix(wc, wc * vec3(0.7, 0.85, 1.15), uNight * 0.5);
    c *= 1.0 - smoothstep(0.12, 0.42, wm) * 0.35;      // wet bank
    c = mix(c, wc, smoothstep(0.42, 0.47, wm));
  }
  gl_FragColor = vec4(c * uTint, 1.0);
  #include <colorspace_fragment>
}`;function ey(i){let t=i.width,e=i.height,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.drawImage(i,-t/2,-e/2),s.drawImage(i,t/2,-e/2),s.drawImage(i,-t/2,e/2),s.drawImage(i,t/2,e/2);let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d");a.drawImage(i,0,0),a.globalCompositeOperation="destination-in";let o=a.createRadialGradient(t/2,e/2,t*.18,t/2,e/2,t*.5);return o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,t,e),s.drawImage(r,0,0),n}var Il=class{constructor(t){this.canvas=t,this.renderer=new El({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ie,this.renderer.setClearColor("#2d3a2c"),this.renderer.setTransparentSort((e,n)=>e.groupOrder-n.groupOrder||e.renderOrder-n.renderOrder||e.object.matrixWorld.elements[14]-n.object.matrixWorld.elements[14]||e.id-n.id),this.scene=new Hr,this.camera=new ln(Cf,16/9,1,200),this.target=new Z(0,0,0),this.look=new Z(0,0,0),this.dist=Rf,this.distGoal=Rf,this.shake=0,this.shadowGeo=new en(1,1),this.shadowMat=new fi({map:If("rgba(28,30,40,1)","rgba(28,30,40,0)",64,.25),transparent:!0,depthWrite:!1,opacity:.32}),this.glowTex=If("rgba(255,210,140,1)","rgba(255,170,90,0)",128,.05),this.soft=new Pl(this.scene,500,!1),this.glow=new Pl(this.scene,500,!0),this.glows=[],this.layers=[],this.sprites=[],this.quality=1,this.resize()}get uniforms(){return In}buildGround(t,e,n,s){let[r,a,o,l]=t,c=T=>{let E=document.createElement("canvas");return E.width=Math.round(o*T),E.height=Math.round(l*T),E},h=c(6),d=c(3),u=h.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,h.width,h.height);let m=T=>({s:T,X:E=>(E-r)*T,Z:E=>(E-a)*T});e(u,m(6));let x=d.getContext("2d");x.fillStyle="#000",x.fillRect(0,0,d.width,d.height),n(x,m(3));let g=c(3),p=g.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,g.width,g.height),s&&s(p,m(3));let f=T=>{let E=new Cn(T);return E.flipY=!1,E.minFilter=qe,E.generateMipmaps=!1,E},w=T=>{let E=new Qe(ey(oe[T]));return E.wrapS=E.wrapT=Ai,E.colorSpace=Ie,E.anisotropy=8,E.needsUpdate=!0,E},P=new Le({vertexShader:Qv,fragmentShader:ty,uniforms:{tGrass:{value:w("grass")},tDirt:{value:w("dirt")},tCobble:{value:w("cobble")},tMask:{value:f(h)},tShade:{value:f(d)},tExtra:{value:f(g)},uTime:In.uTime,uRect:{value:new Ee(r,a,o,l)},uTint:In.uTint,uNight:In.uNight}}),S=new Ae(new en(o,l),P);S.rotation.x=-Math.PI/2,S.position.set(r+o/2,0,a+l/2),S.renderOrder=0,this.scene.add(S),this.maskCanvas=h}sprite(t,e,n){let s=new ur(this,t,e,n);return this.sprites.push(s),s}decal(t,e,n,s,r,{rot:a=0,y:o=.03,order:l=1,alpha:c=1,dark:h=0}={}){let d=typeof t=="string"?Lf(t):(()=>{let x=new Cn(t);return x.colorSpace=Ie,x})(),u=new Le({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; uniform float uDark; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(mix(c.rgb, vec3(0.08, 0.16, 0.2), uDark) * uTint, c.a * uAlpha);
#include <colorspace_fragment>
}`,uniforms:{map:{value:d},uTint:In.uTint,uAlpha:{value:c},uDark:{value:h}},transparent:!0,depthWrite:!1}),m=new Ae(new en(1,1),u);return m.rotation.set(-Math.PI/2,0,a),m.scale.set(s,r,1),m.position.set(e,o,n),m.renderOrder=l,this.scene.add(m),m}addGlow(t,e,n,s,r="#ffc98a",{always:a=0,flicker:o=.08}={}){let l=new Ae(new en(1,1),new fi({map:this.glowTex,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:ji,opacity:0}));l.rotation.x=-pn,l.position.set(t,e,n),l.scale.set(s,s,1),l.renderOrder=3,this.scene.add(l);let c={m:l,size:s,always:a,flicker:o,ph:Math.random()*9};return this.glows.push(c),c}addLayer(t,e,n=0){return this.scene.add(t),this.layers.push({group:t,dz:e,dy:n}),t}setLight(t){In.uTint.value.setRGB(t.tint[0],t.tint[1],t.tint[2]),In.uNight.value=t.night,this.shadowMat.opacity=t.shadow,In.uHazeCol.value.set("#a7c4b8").lerp(new Yt("#5a6aa8"),t.night),this.night=t.night,this.renderer.setClearColor(new Yt("#33452f").lerp(new Yt("#1b2140"),t.night))}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.quality>0?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=Cf*Math.max(1,16/9/(t/e)*.85),this.camera.updateProjectionMatrix();let s=e*n/(2*Math.tan(ph.degToRad(this.camera.fov)/2));this.soft.mat.uniforms.uScale.value=s*.05,this.glow.mat.uniforms.uScale.value=s*.05}follow(t,e,n,s=[0,0],r=[-1e9,1e9],a=1e9){let o=Math.min(r[1],Math.max(r[0],t+s[0])),l=Math.min(a,e+s[1]),c=1-Math.exp(-n*4.5);this.target.x+=(o-this.target.x)*c,this.target.z+=(l-this.target.z)*c,this.dist+=(this.distGoal-this.dist)*(1-Math.exp(-n*3))}snap(t,e){this.target.set(t,0,e)}update(t,e){In.uTime.value=e;let n=this.dist,s=0,r=0;this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),s=(Math.random()-.5)*this.shake*.4,r=(Math.random()-.5)*this.shake*.4),this.camera.position.set(this.target.x+s,n*Math.sin(pn)+r+.9,this.target.z+n*Math.cos(pn)),this.look.set(this.target.x+s,.9+r,this.target.z),this.camera.lookAt(this.look);for(let a of this.layers)a.group.position.z=this.target.z+a.dz,a.group.position.y=a.dy;for(let a of this.glows){let o=1+Math.sin(e*7+a.ph)*a.flicker+Math.sin(e*13.1+a.ph*2)*a.flicker*.5;a.m.material.opacity=Math.min(1,a.always+(1-a.always)*this.night)*.75*o,a.m.scale.set(a.size*o,a.size*o,1)}this.soft.update(t),this.glow.update(t),this.updatePuffs(t)}render(){this.renderer.render(this.scene,this.camera)}toScreen(t,e,n,s={x:0,y:0}){let r=new Z(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.behind=r.z>1,s}static topY(t){return t*Math.cos(pn)}static topZ(t){return-t*Math.sin(pn)}puff(t,e,n=.62){if(!this.puffTex){let r=a=>{let o=document.createElement("canvas");o.width=o.height=128;let l=o.getContext("2d");l.fillStyle=l.strokeStyle="#fff",a(l);let c=new Cn(o);return c.colorSpace=Ie,c};this.puffTex=[r(a=>{a.beginPath(),a.arc(64,64,26,0,6.283),a.fill()}),r(a=>{a.lineWidth=13,a.beginPath(),a.arc(64,64,50,.5,6.283-.2),a.stroke()}),r(a=>{for(let o=0;o<7;o++){let l=o/7*6.283+.3;a.beginPath(),a.arc(64+Math.cos(l)*52,64+Math.sin(l)*52,7,0,6.283),a.fill()}})],this.puffs=[]}let s=this.puffs.find(r=>r.t>=r.life);if(!s){if(this.puffs.length>=8)return;let r=new Le({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(c.rgb * mix(vec3(1.0), uTint, 0.7), c.a * uAlpha);
#include <colorspace_fragment>
}`,uniforms:{map:{value:this.puffTex[0]},uTint:In.uTint,uAlpha:{value:0}},transparent:!0,depthWrite:!1});s={m:new Ae(new en(1,1),r),t:0,life:.25},s.m.rotation.x=-Math.PI/2,s.m.renderOrder=1,this.scene.add(s.m),this.puffs.push(s)}s.t=0,s.size=n,s.m.position.set(t,.04,e),s.m.visible=!0,this.placePuff(s)}placePuff(t){let e=t.t,n=t.m.material.uniforms,s=t.size,r,a,o;if(e<.035)o=0,r=.3,a=.95;else if(e<.12){let l=(e-.035)/.085;o=1,r=.3+.55*(1-(1-l)*(1-l)),a=.9}else{let l=(e-.12)/.13;o=2,r=.85+.15*l,a=.9*(1-l*l)}n.map.value=this.puffTex[o],n.uAlpha.value=Math.max(0,a),t.m.scale.set(s*r,s*r*.8,1)}updatePuffs(t){if(this.puffs){for(let e of this.puffs)if(!(e.t>=e.life)){if(e.t+=t,e.t>=e.life){e.m.visible=!1;continue}this.placePuff(e)}}}dust(t,e,n=3,s="#e8dcc0"){for(let r=0;r<n;r++){let a=Math.random()*6.28;this.soft.add({x:t+Math.cos(a)*.15,y:.1,z:e+Math.sin(a)*.1,vx:Math.cos(a)*.6,vy:.5+Math.random()*.4,vz:Math.sin(a)*.3,drag:3,life:.5+Math.random()*.2,s:4+Math.random()*3,c:s,a:.55,grow:!0})}}sparkle(t,e,n,s=8,r="#fff4c2",a=.6,o=1.2){for(let l=0;l<s;l++){let c=Math.random()*6.28,h=Math.random()*a;this.glow.add({x:t+Math.cos(c)*h,y:e+Math.random()*.4,z:n+Math.sin(c)*h*.6,vx:Math.cos(c)*.6,vy:o*(.5+Math.random()),vz:Math.sin(c)*.3,drag:2.5,life:.7+Math.random()*.5,s:5+Math.random()*5,c:r,a:1,k:1})}}burst(t,e,n,s,r=10){for(let a=0;a<r;a++){let o=Math.random()*6.28,l=1.5+Math.random()*2;this.soft.add({x:t,y:e,z:n,vx:Math.cos(o)*l,vy:2+Math.random()*2.5,vz:Math.sin(o)*l*.5,g:9,life:.6+Math.random()*.3,s:3.5+Math.random()*3,c:s,a:1,fadePow:4})}}};var mn={swing:.66,lift:12,lean:.1,rock:.04,headBob:5,bounce:.16,squash:.012,kick:.4,flare:.35,stepRate:13.5},ha={crow:{h:1.55,front:!0,neck:[.52,.13],shN:[.6,.3],shF:[.36,.3],hipN:[.55,.9],hipF:[.42,.88],tail:[.14,.8],arms:2},bear:{h:1.6,front:!0,neck:[.52,.1],shN:[.74,.3],shF:[.24,.3],hipN:[.66,.86],hipF:[.32,.86],arms:2},duck:{h:1.35,front:!0,neck:[.5,.13],shN:[.5,.35],shF:[.5,.35],hipN:[.58,.88],hipF:[.44,.88],tail:[.16,.74],arms:0,waddle:1},fish:{h:1.5,front:!1,neck:[.52,.19],shN:[.84,.3],shF:[.2,.3],hipN:[.62,.88],hipF:[.38,.88],arms:1},raccoon:{h:1.45,front:!0,neck:[.5,.12],shN:[.8,.34],shF:[.2,.34],hipN:[.6,.88],hipF:[.4,.88],tail:[.2,.78],arms:1},croc:{h:1.65,front:!0,neck:[.5,.12],shN:[.8,.4],shF:[.2,.4],hipN:[.62,.9],hipF:[.38,.9],tail:[.22,.85],arms:1},turtle:{h:1.4,front:!1,neck:[.55,.12],shN:[.74,.4],shF:[.32,.38],hipN:[.64,.88],hipF:[.42,.88],arms:2,waddle:.7}},ny=.6,bs=(i,t,e)=>i+(t-i)*e,Ln=(i,t)=>oe[`rn_${i}_${t}`],dr=(i,t)=>bn[`rn_${i}_${t}`]&&bn[`rn_${i}_${t}`].j||[.5,.1],Ms=class{constructor(t,e=ny){this.who=t,this.cfg=ha[t],this.res=e,this.t=Math.random()*10,this.ph=0,this.amp=0,this.lean=0,this.headLag=0,this.blinkIn=1+Math.random()*3,this.blinkT=0,this.mouth=0,this.happy=0,this.out={lift:0,sq:0},this.c=document.createElement("canvas"),this.g=this.c.getContext("2d"),this.measure()}measure(){let t=this.who,e=this.cfg,n=Ln(t,"body"),s=Ln(t,"head"),r=Ln(t,"leg"),h=-((1-dr(t,"leg")[1])*r.height)-e.hipN[1]*n.height+e.neck[1]*n.height-dr(t,"head")[1]*s.height,d=Ln(t,"arm"),u=Math.max(n.width*.62,s.width*.62);d&&e.arms&&(u=Math.max(u,Math.abs(e.shN[0]-.5)*n.width+d.height*.85));let m=Ln(t,"tail");m&&e.tail&&(u=Math.max(u,n.width*.5+m.width*.95)),this.figPx=-h,this.W=Math.ceil(u*2+30+2*mn.rock*-h),this.H=Math.ceil(-h+30),this.c.width=Math.ceil(this.W*this.res),this.c.height=Math.ceil(this.H*this.res),this.worldH=e.h*this.H/this.figPx}update(t,{speed01:e=0,talking:n=!1,happy:s=!1,draw:r=!0}={}){this.t+=t,this.amp=bs(this.amp,Math.min(1,e),Math.min(1,t*8)),this.amp>.02?this.ph+=t*mn.stepRate*Math.max(.4,e):this.ph=bs(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.12,this.blinkIn=2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t),n?(this.mouthT=(this.mouthT||0)-t,this.mouthT<=0&&(this.mouth=this.mouth?0:1,this.mouthT=this.mouth?.09+Math.random()*.08:.06+Math.random()*.07)):this.mouth=0,this.happy=bs(this.happy,s?1:0,Math.min(1,t*(s?22:5)));let a=this.lean;this.lean=bs(this.lean,this.amp*mn.lean,Math.min(1,t*8)),this.headLag=bs(this.headLag,-(this.lean-a)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.talking=n;let o=this.up=Math.cos(this.ph)**2;this.out.lift=o*mn.bounce*this.amp,this.out.sq=(.5-o)*2*mn.squash*this.amp,r&&this.draw()}draw(){let t=this.who,e=this.cfg,n=this.g,s=this.t,r=this.amp,a=Math.sin(this.ph),o=Math.cos(this.ph),l=Ln(t,"body"),c=Ln(t,"leg"),h=Ln(t,"arm"),d=Ln(t,"tail");if(!l||!c)return;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.c.width,this.c.height),n.setTransform(this.res,0,0,this.res,0,0);let u=this.H-4,m=this.W*.5;n.translate(m,u),n.rotate(a*mn.rock*r),n.translate(-m,-u);let x=dr(t,"leg"),g=dr(t,"arm"),p=mn.swing*r,f=Math.max(0,o)*mn.lift*r,w=Math.max(0,-o)*mn.lift*r,P=-a*p+(f/mn.lift)**2*mn.kick,S=a*p+(w/mn.lift)**2*mn.kick,T=(1-x[1])*c.height,E=u-T*Math.max(Math.cos(P),Math.cos(S)),D=(1-r)*Math.sin(s*2.2)*.018,y=(e.waddle||0)*a*.09*r,M=E-e.hipN[1]*l.height,R=m-l.width*.5,U=ut=>[R+e[ut][0]*l.width,M+e[ut][1]*l.height],O=[m,E],N=ut=>{n.save(),n.translate(O[0],O[1]),n.rotate(this.lean+y+Math.sin(this.ph*2)*.015*r),n.scale(1-D*.4,1+D),n.translate(-O[0],-O[1]),ut(),n.restore()},C=(ut,Y,et,vt=0,kt=0,Tt=1)=>{ut&&(n.save(),n.translate(et[0],et[1]+kt),n.rotate(vt),n.scale(Tt,1),n.drawImage(ut,-Y[0]*ut.width,-Y[1]*ut.height),n.restore())},F=Math.sin(s*1.5)*.05*(1-r),H=(this.up||0)*mn.flare*r,W=a*.55*r+F-H,K=-a*.45*r-F+H;this.happy>.01&&(W=bs(W,-2.3+Math.sin(s*9)*.25,this.happy),K=bs(K,2.2-Math.sin(s*9+1)*.25,this.happy)),this.talking&&(W+=Math.sin(s*3.1)*.18);let v=this.talking?Math.sin(s*7.3)*.05+Math.sin(s*2.3)*.03:0,A=this.headLag+Math.sin(this.ph*2-.8)*.04*r+Math.sin(s*1.1)*.03*(1-r)+v-y*.5-this.happy*.08,I=Math.sin(this.ph*2-.9)*mn.headBob*r-this.happy*4,V=this.mouth&&Ln(t,"talk")?"talk":this.blinkT>0&&Ln(t,"blink")?"blink":"head",j=Ln(t,V),ht=dr(t,V),tt=Math.sin(s*2.6)*.12+Math.sin(this.ph*2)*.22*r;d&&e.tail&&N(()=>C(d,dr(t,"tail"),U("tail"),tt)),e.arms>=2&&N(()=>C(h,g,U("shF"),K)),C(c,x,[U("hipF")[0],E],S,-w),C(c,x,[U("hipN")[0],E],P,-f),N(()=>{e.front||C(j,ht,U("neck"),A,I),n.drawImage(l,R,M),e.front&&C(j,ht,U("neck"),A,I),e.arms>=1&&C(h,g,U("shN"),W)})}};function Df(){for(let i of Object.keys(ha)){if(!Ln(i,"body"))continue;let t=new Ms(i,1);t.blinkIn=99,t.t=0,t.update(0,{});let e="pt_"+i;oe[e]=t.c,bn[e]={w:t.c.width,h:t.c.height,src:t.c.toDataURL("image/png")}}}var Hh=[[-70,7.8],[-13.8,7.8],[-13.8,20],[14,20],[14,5.6],[29.6,5.6],[29.6,8],[100,8]];function Wh(i){return i<-13.8?7.8:i<=14?20:i<29.6?5.6:8}var Ul=(i,t,e=.4)=>t<Wh(i)-e,Ll=.4,Ff=-2.8,Dl=16,Fe=128;function fr(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var ua=null;function Of(){if(ua)return ua;ua=[];let i=0;for(let t=0;t<Hh.length-1;t++){let[e,n]=Hh[t],[s,r]=Hh[t+1],a=Math.hypot(s-e,r-n),o=(s-e)/a,l=(r-n)/a,c=-l,h=o,d=Math.max(1,Math.round(a/.25));for(let u=t?1:0;u<=d;u++){let m=u/d*a,x=i+m,p=Math.max(0,Math.min(1,m/2.2,(a-m)/2.2))*(.2*Math.sin(x*.57+.3)+.11*Math.sin(x*1.43+1.9)+.05*Math.sin(x*3.7+.4));ua.push({x:e+o*m+c*p,z:n+l*m+h*p,nx:c,nz:h,s:x})}i+=a}return ua}function kf(i,t){let e=document.createElement("canvas");e.width=i.canvas.width,e.height=i.canvas.height;let n=e.getContext("2d"),s=Of();n.fillStyle="rgb(0,0,255)",n.beginPath(),n.moveTo(t.X(s[0].x),t.Z(s[0].z));for(let r of s)n.lineTo(t.X(r.x),t.Z(r.z));n.lineTo(t.X(110),t.Z(60)),n.lineTo(t.X(-80),t.Z(60)),n.closePath(),n.fill(),i.save(),i.globalCompositeOperation="lighter",i.drawImage(e,0,0),i.restore()}var Gh=2.55,da=.35;function Nl(i,t=.04){let e=Math.round(i.width*t),n=document.createElement("canvas");return n.width=i.width-2*e,n.height=i.height,n.getContext("2d").drawImage(i,-e,0),n}function Fl(i,t,e,n,s){let r=document.createElement("canvas");r.width=Math.round(t),r.height=Math.round(e);let a=r.getContext("2d");a.drawImage(i,0,0,r.width,r.height),a.globalCompositeOperation="destination-out";let o=da*Fe;if(n){let l=a.createLinearGradient(0,0,o,0);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=l,a.fillRect(0,0,o,r.height)}if(s){let l=a.createLinearGradient(r.width-o,0,r.width,0);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,1)"),a.fillStyle=l,a.fillRect(r.width-o,0,o,r.height)}return r}function iy(){let i=Nl(oe.isle_face_a),t=Nl(oe.isle_face_b),e=i.width*Gh/i.height,n=t.width*Gh/t.height;Dl=e+n-2*da;let s=Math.round(Dl*Fe),r=Math.round((Ll-Ff)*Fe),a=0,o=Gh*Fe,l=document.createElement("canvas");l.width=s,l.height=r;let c=l.getContext("2d"),h=(e-da)*Fe;c.drawImage(t,h,a,n*Fe,o),c.drawImage(t,h-s,a,n*Fe,o),c.drawImage(Fl(i,e*Fe,o,!0,!0),0,a),c.globalCompositeOperation="source-atop";let d=c.createLinearGradient(0,(Ll+1)*Fe,0,(Ll+2.4)*Fe);return d.addColorStop(0,"rgba(160,198,200,0)"),d.addColorStop(1,"rgba(170,204,206,0.7)"),c.fillStyle=d,c.fillRect(0,0,s,r),c.globalCompositeOperation="source-over",l}function sy(i){let n=fr(i),s=document.createElement("canvas");s.width=768,s.height=320;let r=s.getContext("2d"),a=[];for(let l=0;l<10;l++){let c=l/9,h=120+c*528+(n()-.5)*70,d=46+n()*44+44*Math.sin(c*Math.PI);a.push([h,224-d*.4-n()*24,d])}r.filter="blur(14px)",r.fillStyle="rgba(150,190,194,0.85)";for(let[l,c,h]of a)r.beginPath(),r.arc(l,c+16,h,0,7),r.fill();r.fillStyle="rgba(226,234,224,0.92)";for(let[l,c,h]of a)r.beginPath(),r.arc(l-h*.08,c-h*.1,h*.86,0,7),r.fill();r.filter="blur(20px)",r.fillStyle="rgba(252,248,232,0.85)";for(let[l,c,h]of a)r.beginPath(),r.arc(l-h*.2,c-h*.3,h*.56,0,7),r.fill();r.filter="none",r.globalCompositeOperation="destination-out";let o=r.createLinearGradient(0,180,0,290);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),r.fillStyle=o,r.fillRect(0,0,768,320),s}function ry(){let t=fr(77),e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d");n.fillStyle="#9fc4c6",n.fillRect(0,0,512,512),n.filter="blur(24px)";for(let s=0;s<46;s++){let r=t()*512,a=t()*512,o=50+t()*100,l=o*(.35+t()*.3),c=t()<.6?"rgba(236,238,220,0.5)":"rgba(128,174,180,0.4)";for(let h of[-512,0,512])for(let d of[-512,0,512])n.fillStyle=c,n.beginPath(),n.ellipse(r+h,a+d,o,l,0,0,7),n.fill()}return n.filter="none",e}var Vh=(i,t)=>{let e=new Cn(i);return e.colorSpace=Ie,e.anisotropy=4,t&&(e.wrapS=e.wrapT=Ai),e},Nf=`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(c.rgb * uTint, c.a * uAlpha);
#include <colorspace_fragment>
}`,Uf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";function Bf(i){let t=Of(),e=i.uniforms,n=Vh(iy(),!0);n.flipY=!1,n.wrapT=Bn;let s=new Float32Array(t.length*6),r=new Float32Array(t.length*4),a=[];t.forEach((p,f)=>{if(s.set([p.x,Ll,p.z,p.x,Ff,p.z],f*6),r.set([p.s/Dl,0,p.s/Dl,1],f*4),f){let w=2*f-2,P=2*f-1,S=2*f,T=2*f+1;a.push(P,T,S,P,S,w)}});let o=new dn;o.setAttribute("position",new We(s,3)),o.setAttribute("uv",new We(r,2)),o.setIndex(a);let l=new Ae(o,new Le({vertexShader:Uf,fragmentShader:Nf,transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{map:{value:n},uTint:e.uTint,uAlpha:{value:1}}}));l.renderOrder=.3,l.frustumCulled=!1,i.scene.add(l);let c=Vh(ry(),!0);c.repeat.set(280/22,160/22);let h=new Ae(new en(280,160),new Le({vertexShader:"varying vec2 vUv; uniform vec2 uRep; void main(){ vUv = uv * uRep; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; varying vec2 vUv; void main(){ gl_FragColor = vec4(texture2D(map, vUv).rgb * uTint, 1.0);
#include <colorspace_fragment>
}`,uniforms:{map:{value:c},uTint:e.uTint,uRep:{value:new se(280/22,160/22)}}}));h.rotation.x=-Math.PI/2,h.position.set(20,-3.4,10),h.renderOrder=-1,i.scene.add(h);let d=[0,1,2].map(p=>Vh(sy(900+p*37))),u=fr(4242),m=[],x=new en(1,1),g=d.map(p=>new Le({vertexShader:Uf,fragmentShader:Nf,transparent:!0,depthWrite:!1,side:yn,uniforms:{map:{value:p},uTint:e.uTint,uAlpha:{value:.88}}}));for(let[p,f,w,P,S]of[[[2.2,1.4],[.3,.7],[-2.5,.3],[3.4,1.8],.95],[[3,1.8],[1.8,1.4],[-2.9,.3],[6,3],1],[[4.2,2.2],[4.4,2],[-3.25,.1],[8.5,3.5],1]]){let T=u()*p[0];for(let E of t){if(E.s<T||E.x<-66||E.x>70||f[0]<1&&E.nz<.7)continue;T=E.s+p[0]+u()*p[1];let D=P[0]+u()*P[1],y=f[0]+u()*f[1],M=w[0]+u()*w[1],R=new Ae(x,g[Math.floor(u()*3)]);R.rotation.x=-pn,R.scale.set(D*(u()<.5?-1:1),D*.42,1),R.renderOrder=.35;let U=E.x+E.nx*y,O=E.z+E.nz*y;R.position.set(U,M,O),i.scene.add(R),m.push({m:R,x:U,y:M,ph:u()*6.28,sp:.06+u()*.07})}}return(p,f)=>{for(let w of m)w.m.position.x=w.x+Math.sin(f*w.sp+w.ph)*.3,w.m.position.y=w.y+Math.sin(f*w.sp*1.7+w.ph)*.05}}var Bl=7.1,Xh=1.65,kl=.18,Hf=.34,zl=Bl+Xh/Math.sin(pn),is=[-13.6,13.8],fa=3.2;function Gf(i,t=kl){let e=document.createElement("canvas");return e.width=Math.round(i*Fe),e.height=Math.round((t+Xh)*Fe),e}function Ol(i,t,e,n,s,r=0){let a=oe[t()<.72?"grass_tuft":"fern"];if(!a)return;let o=s*a.width/a.height;i.save(),r&&(i.filter=`brightness(${1-r})`),i.translate(e,n),t()<.5&&i.scale(-1,1),i.drawImage(a,-o/2,-s,o,s),i.restore()}function ay(i,t,e,n){let s=["#fff6e6","#f6c9de","#fff1a8","#ffffff"][Math.floor(t()*4)];for(let r=0;r<2+Math.floor(t()*3);r++){let a=e+(t()-.5)*22,o=n+(t()-.5)*10;i.fillStyle="#5f8a2e",i.beginPath(),i.ellipse(a+4,o+6,5,2.4,.5,0,7),i.fill(),i.fillStyle=s;for(let l=0;l<5;l++){let c=l/5*6.28;i.beginPath(),i.arc(a+Math.cos(c)*3.4,o+Math.sin(c)*3.4,2.8,0,7),i.fill()}i.fillStyle="#f2b632",i.beginPath(),i.arc(a,o,2,0,7),i.fill()}}function oy(i,t,e,n){for(let s=0;s<e;s+=4+t()*5){let r=6+t()*18,a=(t()-.5)*7,o=["#6f9f33","#83b23c","#5d8a2a","#93bf47"][Math.floor(t()*4)];i.fillStyle=o,i.beginPath(),i.moveTo(s-3,n),i.quadraticCurveTo(s+a*.3,n-r*.5,s+a,n-r),i.quadraticCurveTo(s+a*.3+1,n-r*.4,s+3,n),i.closePath(),i.fill()}}function zf(i,t,e){let n=Gf(i),s=n.getContext("2d"),r=n.width,a=n.height,o=fr(t),l=kl*Fe,c=Nl(oe.wall_stone),h=l-.05*Fe,d=a-h,u=c.width*d/c.height,m=u-da*Fe;if(e==="l"){let x=Fl(c,u,d,!1,!0),g=r-u+o()*u*.2;for(s.drawImage(c,g,h,u,d),g-=m;g>-u;g-=m)s.drawImage(x,g,h)}else{let x=Fl(c,u,d,!0,!1),g=-o()*u*.2;for(s.drawImage(c,g,h,u,d),g+=m;g<r;g+=m)s.drawImage(x,g,h)}for(let x=20+o()*60;x<r-10;x+=(.6+o()*.9)*Fe)o()<.25?ay(s,o,x,a-.16*Fe):Ol(s,o,x,a+3,(.22+o()*.18)*Fe,.05);if(oy(s,o,r,a),e){let x=e==="l"?22:r-22;Ol(s,o,x,a+4,.6*Fe,.03),Ol(s,o,x+(e==="l"?26:-26),a+2,.45*Fe,.06)}return n}var Vf=.52;function ly(i){let t=Gf(fa,Hf+.04),e=t.getContext("2d"),n=t.width,s=t.height,r=fr(i);e.drawImage(oe.steps_stone,0,0,n,s);for(let a of[10,n-10])Ol(e,r,a,s+3,.3*Fe,.05);return t}function Wf(i,t,e){let n=[],s=(o,l,c,h,d)=>{let u=t("steps",d+Xh,(l+c)/2,zl+h,{shadow:0,order:.9,occ:!1});return u.useCanvas(o),u.sync(),n.push(u),u},r=e-fa/2,a=e+fa/2;return s(zf(r+.25-is[0],3101,"l"),is[0],r+.25,0,kl),s(zf(is[1]-(a-.25),3307,"r"),a-.25,is[1],0,kl),s(ly(3511),r,a,.002,Hf+.04),n}var Ut=(i,t=1)=>(bn[i]&&bn[i].wh||1)*t,_a=[[-44,-10.9,-5.8,6.8],[-11,12,-6.4,7],[12,30,-3.4,4.6],[30,54,-5.6,7],[-2.5,-.3,6.5,9.8],[-11,11.5,9.65,19]],pa=-1.4,ve={x:1.2,z:14.6,rx:6.2,rz:3},Mn=[2.3,3.7,10.4,13.5];function $f(i){return 1+.07*Math.sin(3*i+1)+.045*Math.sin(5*i+2.2)}function Yf(i,t){let e=(i-ve.x)/ve.rx,n=(t-ve.z)/ve.rz;return Math.hypot(e,n)/$f(Math.atan2(n,e))}var Ri=30,Ss=-12,xa=[];for(let i=0;i<2;i++)for(let t=0;t<3;t++)xa.push({x:3.6+t*2.1,z:-.7+i*2.3});var lt={start:[1.5,1.8],door:[-4.1,-6.2],mailbox:[-.4,-5.2],cauldron:[-8.6,-2.4],cat:[-2.3,-5.5],crowWait:[1.4,-3.6],crowEnter:[16,.6],sign:[10.6,1.2],fountain:[42,0],board:[39.6,-5.4],myStall:[47.6,4.4],roadEnd:[29.5,.6],woodSign:[-10.6,.1],fish:[3,13],pondSign:[-3.7,6]},Vl=[[-16.6,-2.9],[-21.2,4.7],[-26.4,-3.5],[-31.2,4.3],[-37.4,-1.4]],Yh=[[-19.2,0],[-24.6,-1.4],[-33.4,-.4],[-39.4,3.4],[-8.4,16.8]],Zf=["moth","ladybug","moth","ladybug","ladybug"],Xf=[[-15.2,-4.6],[-23.4,-4.8],[-29.6,-2.2],[-35.2,-4.6],[-41.6,-4.2]],qf=[[-18.4,6],[-28.6,6.3],[-34.8,6.1],[-42.2,5.6]],xi={mira:[36,-3.3],juniper:[48,-3.3],oz:[36.6,4.4]};function Gl(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function qh(i,t,e=0){return _a.some(([n,s,r,a])=>i>n-e&&i<s+e&&t>r-e&&t<a+e)}var pr=.5;function ma(i,t,e,n){let s=document.createElement("canvas");s.width=Math.round(i*e),s.height=Math.round(t*e);let r=s.getContext("2d");return n(r,s.width,s.height,e),s}function cy(i){let t=Mn[0]-.2,e=Mn[1]+.2,n=Mn[2]-.25,s=Mn[3]+.2,r=e-t,a=s-n,o=(t+e)/2,l=(n+s)/2,c=150,h=.045,d=Gl(7319),u="#4a2a26",m=M=>{let R=176+M*26,U=116+M*20,O=64+M*12;return`rgb(${R|0},${U|0},${O|0})`},x=ma(r,a,c,(M,R,U,O)=>{M.fillStyle="#3a2218",M.fillRect(0,0,R,U);let N=Math.round(a/.28),C=U/N;for(let F=0;F<N;F++){let H=F*C+2,W=C-4,K=4+(d()-.5)*8,v=R-4+(d()-.5)*8,A=(d()-.5)*.35;M.fillStyle=m(A),M.beginPath(),M.roundRect(K,H,v-K,W,5),M.fill(),M.fillStyle="rgba(255,224,170,0.35)",M.fillRect(K+4,H+2,v-K-8,3),M.fillStyle="rgba(90,50,26,0.45)",M.fillRect(K+4,H+W-5,v-K-8,4),M.strokeStyle="rgba(110,64,34,0.45)",M.lineWidth=1.6;for(let I=0;I<3;I++){let V=H+W*(.28+I*.22)+(d()-.5)*4;M.beginPath(),M.moveTo(K+10+d()*30,V);for(let j=K+40;j<v-10;j+=30)M.lineTo(j,V+Math.sin(j*.05+I+F)*2.2);M.stroke()}d()<.35&&(M.fillStyle="rgba(96,56,30,0.6)",M.beginPath(),M.ellipse(K+(v-K)*(.3+d()*.4),H+W/2,7,3.5,0,0,7),M.fill());for(let I of[.17,.83])M.fillStyle="#3d2419",M.beginPath(),M.arc(R*I,H+W/2,3.2,0,7),M.fill(),M.fillStyle="rgba(255,230,190,0.5)",M.beginPath(),M.arc(R*I-1,H+W/2-1,1.2,0,7),M.fill()}M.strokeStyle=u,M.lineWidth=5,M.strokeRect(2.5,2.5,R-5,U-5)}),g=[],p=ma(r+.9,a+.9,40,(M,R,U)=>{M.filter="blur(7px)",M.fillStyle="rgba(4,18,24,0.85)",M.beginPath(),M.roundRect(.45*40,.45*40,R-.9*40,U-.9*40,.3*40),M.fill(),M.filter="none"});g.push(i.decal(p,o,l+.32,r+.9,a+.9,{y:.01,order:.4,alpha:.7}));let f=.07,w=.17,P=M=>ma(M,pr+.42,c,(R,U,O,N)=>{let C=pr*N,F=f*N,H=(f+w)*N;R.fillStyle="rgba(10,26,28,0.88)",R.fillRect(0,H,U,C-H);let W=R.createLinearGradient(0,H,0,C);W.addColorStop(0,"rgba(0,0,0,0.35)"),W.addColorStop(1,"rgba(30,70,70,0.25)"),R.fillStyle=W,R.fillRect(0,H,U,C-H),R.fillStyle="#a8693a",R.fillRect(0,0,U,F),R.fillStyle="rgba(255,224,170,0.45)",R.fillRect(0,2,U,3),R.strokeStyle="rgba(60,30,16,0.6)",R.lineWidth=2;for(let v=.28*N;v<U;v+=.28*N)R.beginPath(),R.moveTo(v,0),R.lineTo(v,F),R.stroke();R.fillStyle="#704226",R.fillRect(0,F,U,H-F),R.fillStyle="rgba(255,210,150,0.18)",R.fillRect(0,F+2,U,2),R.strokeStyle="rgba(40,20,10,0.4)",R.lineWidth=1.5;{let v=(F+H)/2;R.beginPath(),R.moveTo(6,v);for(let A=6;A<U-6;A+=24)R.lineTo(A,v+Math.sin(A*.04)*1.6);R.stroke()}R.strokeStyle=u,R.lineWidth=4,R.beginPath(),R.moveTo(0,2),R.lineTo(U,2),R.moveTo(0,H),R.lineTo(U,H),R.stroke();let K=R.createLinearGradient(0,C,0,O);K.addColorStop(0,"rgba(8,24,28,0.5)"),K.addColorStop(1,"rgba(8,24,28,0)"),R.fillStyle=K,R.fillRect(0,C,U,O-C),R.strokeStyle="rgba(214,240,228,0.85)",R.lineWidth=3,R.beginPath();for(let v=0;v<=U;v+=8){let A=C+2+Math.sin(v*.09)*1.6;v?R.lineTo(v,A):R.moveTo(v,A)}R.stroke()}),S=(M,R,U,O,N,C)=>{let F=i.decal(M,U,O,R,pr+.42,{y:h-(pr+.42)/2,order:C});return F.rotation.set(0,N,0),F.material.depthTest=!1,g.push(F),F};S(P(r),r,o,s,0,.55),S(P(a),a,t,l,-Math.PI/2,.55),S(P(a),a,e,l,Math.PI/2,.55),g.push(i.decal(x,o,l,r,a,{y:h,order:.5}));let T=.2,E=pr+.3,D=.24,y=ma(D,T+E,c,(M,R,U,O)=>{let N=.1*O,C=(T+pr)*O,F=M.createLinearGradient(0,0,R,0);F.addColorStop(0,"#5a341e"),F.addColorStop(.3,"#b07440"),F.addColorStop(.55,"#9a6236"),F.addColorStop(1,"#4a2a18"),M.fillStyle=F,M.fillRect(3,N/2,R-6,U-N/2),M.strokeStyle=u,M.lineWidth=4,M.beginPath(),M.moveTo(3,N/2),M.lineTo(3,C),M.moveTo(R-3,N/2),M.lineTo(R-3,C),M.stroke(),M.fillStyle="#d9a46a",M.beginPath(),M.ellipse(R/2,N/2,R/2-3,N/2-1,0,0,7),M.fill(),M.stroke(),M.strokeStyle="rgba(120,70,36,0.7)",M.lineWidth=1.5,M.beginPath(),M.ellipse(R/2,N/2,R*.24,N*.24,0,0,7),M.stroke();for(let K of[.62,.78]){let v=T*O*K+N*.3;M.fillStyle="#d8b679",M.fillRect(2,v,R-4,.045*O),M.strokeStyle="rgba(90,60,30,0.6)",M.lineWidth=1.5,M.strokeRect(2,v,R-4,.045*O)}M.globalCompositeOperation="source-atop";let H=M.createLinearGradient(0,C,0,U);H.addColorStop(0,"rgba(24,70,74,0.55)"),H.addColorStop(1,"rgba(24,70,74,1)"),M.fillStyle=H,M.fillRect(0,C,R,U-C),M.globalCompositeOperation="destination-out";let W=M.createLinearGradient(0,C,0,U);W.addColorStop(0,"rgba(0,0,0,0.25)"),W.addColorStop(1,"rgba(0,0,0,1)"),M.fillStyle=W,M.fillRect(0,C,R,U-C),M.globalCompositeOperation="source-over",M.strokeStyle="rgba(214,240,228,0.85)",M.lineWidth=3,M.beginPath(),M.ellipse(R/2,C+2,R/2,5,0,0,Math.PI),M.stroke()});for(let[M,R,U]of[[t+.12,s+.02,!0],[e-.12,s+.02,!0],[t+.12,n+.15,!1],[e-.12,n+.15,!1]])if(U){let O=i.decal(y,M,R,D,T+E,{y:h+T-(T+E)/2,order:.6});O.rotation.set(0,0,0),O.material.depthTest=!1,g.push(O)}else{let O=ma(D,T+.02,c,(C,F,H)=>C.drawImage(y,0,0,F,H,0,0,F,H)),N=i.decal(O,M,R,D,T+.02,{y:h+(T+.02)/2-.02,order:.6});N.rotation.set(0,0,0),N.material.depthTest=!1,g.push(N)}return g}function Kf(i){let t={colliders:[],occluders:[],props:{},tick:[]},e=Gl(20261031),n=(v,A,I,V,j={})=>{let ht=i.sprite(v,A,{x:I,z:V,shadow:j.shadow??A*.5,...j});return j.col&&t.colliders.push({x:I+(j.colX||0),z:V-(j.colZ??.15),r:j.col}),j.occ!==!1&&A>2.2&&t.occluders.push(ht),ht},s=(v,A,I,V=.06)=>{let j=(1-I)*v.h;return[v.x+(A-.5)*v.w*(v.flip?-1:1),j*Math.cos(pn),v.z-j*Math.sin(pn)+V]},r=(v,A,I,V)=>t.colliders.push({rect:[v,A,I,V]}),a=n("cottage",Ut("cottage"),lt.door[0]+.11*(bn.cottage?bn.cottage.ww:6.7),-6.7,{shadow:0,occ:!0});r(a.x-a.w*.45,a.x+a.w*.45,-10,-6.5),t.props.cottage=a;for(let[v,A,I]of[[.35,.4,1.5],[.7,.71,1.5],[.39,.74,1.1]]){let V=s(a,v,A);i.addGlow(V[0],V[1],V[2],I,"#ffc477")}t.chimney=s(a,.78,.03),t.props.cauldron=n("cauldron_out",Ut("cauldron_out"),lt.cauldron[0],lt.cauldron[1],{col:.8,shadow:1.6}),i.addGlow(lt.cauldron[0],.35,lt.cauldron[1]+.1,2.4,"#ff9a4a",{always:.55,flicker:.12}),t.props.mailbox=n("mailbox",Ut("mailbox"),lt.mailbox[0],lt.mailbox[1],{col:.35,shadow:.7});let o=n("lantern",Ut("lantern"),1.2,-5.6,{col:.3,shadow:.6});{let v=s(o,.71,.42);i.addGlow(v[0],v[1],v[2],2.6,"#ffc066",{always:.15})}n("barrel",Ut("barrel"),.4,-6.3,{col:.5,shadow:1}),n("basket",Ut("basket"),-.9,-6.4,{shadow:.6}),n("bench",Ut("bench"),-7.4,3.6,{col:.6,colX:0,shadow:1.6}),n("wcan",Ut("wcan"),9.3,-1.5,{shadow:.5}),n("basket",Ut("basket"),2.2,-2.2,{shadow:.55}),t.props.sign=n("signpost",Ut("signpost"),lt.sign[0],lt.sign[1],{col:.3,shadow:.9}),t.props.woodSign=n("signpost",Ut("signpost",.92),lt.woodSign[0],lt.woodSign[1],{col:.3,shadow:.9,flip:!0});let l=n("lantern",Ut("lantern"),12.6,-3.4,{col:.3,shadow:.6});{let v=s(l,.71,.42);i.addGlow(v[0],v[1],v[2],2.6,"#ffc066",{always:.15})}t.props.fountain=n("fountain",Ut("fountain"),lt.fountain[0],lt.fountain[1],{col:1.75,colZ:.9,shadow:3.4}),t.props.board=n("board",Ut("board"),lt.board[0],lt.board[1],{col:.7,shadow:1.6});let c={};for(let[v,A,I]of[["mira","stall_red",xi.mira],["juniper","stall_green",xi.juniper],["oz","stall_blue",xi.oz]]){let V=n(A,Ut(A),I[0],I[1],{shadow:2.8});r(I[0]-1.45,I[0]+1.45,I[1]-1.6,I[1]-.25),c[v]=V}t.props.stalls=c,t.props.myStall=n("stall_mine",Ut("stall_mine"),lt.myStall[0],lt.myStall[1],{shadow:2.8}),r(lt.myStall[0]-1.4,lt.myStall[0]+1.4,lt.myStall[1]-1.3,lt.myStall[1]-.25);let h=[["house_a",32.2,-7.6,!1],["house_b",38.2,-8.4,!0],["house_a",46.2,-8.4,!0],["house_b",52,-7.6,!1]];for(let[v,A,I,V]of h){let j=n(v,Ut(v),A,I,{shadow:0,flip:V});r(A-2.1,A+2.1,I-3,I-.2);for(let[ht,tt]of v==="house_a"?[[.4,.52],[.38,.36]]:[[.3,.52],[.62,.52]]){let ut=s(j,ht,tt);i.addGlow(ut[0],ut[1],ut[2],2.2,"#ffb866",{flicker:.04})}}for(let v of[33.6,50.4]){let A=n("lamp",Ut("lamp"),v,2.6,{col:.25,shadow:.6}),I=s(A,.5,.2);i.addGlow(I[0],I[1],I[2],3,"#ffcf7a",{always:.12})}n("barrel",Ut("barrel"),30.8,-4.8,{col:.5,shadow:1}),n("bench",Ut("bench"),44.6,6.4,{col:.6,shadow:1.6}),n("bench",Ut("bench"),39.4,6.4,{col:.6,shadow:1.6,flip:!0}),n("basket",Ut("basket"),49.9,-2.4,{shadow:.55}),n("basket",Ut("basket"),34.4,-2.5,{shadow:.55}),n("wcan",Ut("wcan"),53,-4.9,{shadow:.5});let d=[],u=["oak","pine","birch","oak","pine"],m=["tallwood","pine","bluewood","oak","tallwood","pine"],x=(v,A,I={})=>{if(!Ul(v,A,.8))return null;let V=I.kinds||(v<Ss?m:u),j=V[Math.floor(e()*V.length)],ht=Ut(j)*(.85+e()*.3)*(I.scale||1),tt=n(I.kind||j,I.kind&&I.h||ht,v,A,{sway:.05+e()*.05,flip:e()<.5,shadow:ht*.32,col:I.noCol?0:.45,haze:I.haze||0});return d.push([v,A,ht]),tt};for(let v=-47;v<30;v+=1.6+e()*1.4){if(v>a.x-a.w*.5&&v<a.x+a.w*.5){x(v,-11.2-e()*1.4,{haze:.08});continue}x(v,-8.2-e()*1.2),e()<.75&&x(v+e()*1.2,-10.8-e()*1.6,{haze:.12})}for(let v=28;v<58;v+=1.7+e()*1.4)x(v,-11.6-e()*1.6,{haze:.15});for(let v=12.5;v<29.5;v+=1.8+e()*1.6)x(v,-4.8-e()*1.6),e()<.6&&x(v+.8,-6.8-e()*1.4,{haze:.06});for(let v=-8;v<4;v+=1.4+e()*1.1)v>-.4||x(-12.2-e()*.8,v);for(let v=4.4;v<7;v+=1.1+e()*.5)n(e()<.5?"bush":"bush_flower",Ut("bush",.95+e()*.25),-12.4-e()*.6,v,{sway:.05,flip:e()<.5,shadow:1.2});r(-13.2,-11.6,-12,.2),r(-13.2,-11.6,3.6,7.2);for(let v=-8;v<10;v+=1.5+e()*1.2)x(-45.6-e()*1.2,v),x(-48.6-e()*2,v+e(),{haze:.12});for(let[v,A]of Xf)x(v,A),x(v+1.3+e()*.6,A-.9,{kinds:["bluewood","tallwood"],scale:.8}),e()<.6&&x(v-1.4-e()*.5,A-.6,{kinds:["bluewood","pine"],scale:.7});for(let[v,A]of qf)x(v,A,{kinds:["bluewood"],scale:.8}),n("bush",Ut("bush",1.1),v-1.1,A+.4,{col:.55,sway:.05,shadow:1.3}),n(e()<.5?"bush_flower":"fern",Ut("bush_flower"),v+1,A+.5,{sway:.06,flip:!0,shadow:1});for(let v=-8;v<10;v+=1.6+e()*1.3)x(55.6+e()*1.6,v),x(58.5+e()*2.5,v+e(),{haze:.1});x(-9.8,-.8,{kind:"ytree",h:Ut("ytree")}),x(10.4,-3.8,{kind:"birch",h:Ut("birch")}),t.props.steps=Wf(i,n,pa);let g=n("lantern",.72,pa-fa/2+Vf/2,Bl-.36/Math.sin(pn),{shadow:0,col:.22,colZ:-.1});{let v=oe.lantern,A=document.createElement("canvas"),I=78/164,V=92/397,j=214/397;A.width=Math.round(v.width*(1-I)),A.height=Math.round(v.height*(j-V)),A.getContext("2d").drawImage(v,v.width*I,v.height*V,A.width,A.height,0,0,A.width,A.height),g.useCanvas(A),g.sync()}{let v=s(g,.5,.55);i.addGlow(v[0],v[1],v[2],1.8,"#ffc066",{always:.12,flicker:.05})}t.props.pondSign=n("signpost",Ut("signpost",.85),lt.pondSign[0],lt.pondSign[1],{col:.3,shadow:.9}),t.props.willow=n("willow",Ut("willow"),-7.4,11,{col:.55,sway:.08,shadow:2.4}),d.push([-7.4,11,Ut("willow")]);for(let v=9.9;v<19.4;v+=1.6+e()*1.1)x(-12.3-e()*.7,v,{kinds:["oak","birch","pine"],scale:.9}),x(12.4+e()*.8,v+e()*.6,{kinds:["oak","pine","birch"],scale:.9});let p=(v,A=1)=>{let I=$f(v)*A;return[ve.x+Math.cos(v)*ve.rx*I,ve.z+Math.sin(v)*ve.rz*I]};for(let[v,A,I,V]of[[3,"reeds",1,{}],[3.3,"reeds",.85,{flip:!0}],[3.55,"iris",1,{}],[2.6,"rock_pond",1,{col:.4}],[.35,"reeds",1.05,{flip:!0}],[.1,"iris",1,{flip:!0}],[-.35,"rock_pond",.85,{col:.4,flip:!0}],[1.95,"reeds",.8,{}],[2.25,"iris",.9,{flip:!0}],[1.05,"rock_pond",.7,{col:.35}],[-2.3,"iris",.8,{}],[-2.75,"reeds",.75,{flip:!0}]]){let[j,ht]=p(v,1.06);n(A,Ut(A,I),j,ht,{sway:A==="rock_pond"?0:.06,shadow:Ut(A,I)*.6,...V})}t.props.boat=n("boat",Ut("boat",1.1),ve.x-3.2,ve.z+1.7,{shadow:0,sway:0}),n("stepstones",Ut("stepstones",1.1),-5.4,10.35,{shadow:0,order:1}),n("stepstones",Ut("stepstones",1),-3.6,18.2,{shadow:0,order:1,flip:!0});for(let[v,A,I]of[[-9.6,10.1,"fern"],[9.6,10,"bush_flower"],[-12.9,9.95,"bush"],[13.1,9.9,"bush_flower"],[10.4,17.6,"fern"],[-10.2,18.4,"bush"],[6.2,18.6,"flowers"],[-6.4,18.8,"grass_tuft"],[8.2,10.2,"flowers"],[-4,10,"grass_tuft"],[7.9,16.4,"grass_tuft"]])n(I,Ut(I)*(.9+e()*.2),v,A,{sway:I==="flowers"?.04:.06,flip:e()<.5,shadow:.6});t.props.dock=cy(i),t.props.bucket=n("mp_bucket",.48,Mn[1]-.2,Mn[3]-.55,{shadow:.4});let f=[[-2.6,13.3,.9,.4],[-1.4,16,.75,2.2],[4.9,15.9,.85,4.1],[5.9,13.7,.6,1],[.4,15.3,.55,5.2]];t.pads=f.map(([v,A,I,V])=>({m:i.decal("mp_lilypad",v,A,I,I,{rot:V,y:.035}),x:v,z:A,r:V,ph:e()*6})),n("lily",Ut("lily",1.1),ve.x+5.2,ve.z+1.6,{shadow:0,sway:.02});let w=p(.5,1.08),P=[f[2][0],f[2][1]-.05],S=n("frog",Ut("frog",.9),w[0],w[1],{shadow:.35});t.props.frog=S;let T=4+e()*4,E=0,D=-1,y=[["mp_minnow",.9,.42],["mp_bluegill",.8,.65],["mp_carp",1.05,.62],["mp_minnow",.7,.33]].map(([v,A,I],V)=>({m:i.decal(v,ve.x,ve.z,A,I,{dark:1,alpha:.32,y:.025}),ph:V*1.7,sp:.13+V*.03,a:.45+V%2*.18,b:.42+(V+1)%2*.2}));t.fishShadows=y,t.tick.push((v,A)=>{for(let I of t.pads)I.m.rotation.z=I.r+Math.sin(A*.4+I.ph)*.08,I.m.position.x=I.x+Math.sin(A*.3+I.ph)*.05;for(let I of y){let V=A*I.sp+I.ph,j=ve.x+Math.sin(V)*ve.rx*I.a+Math.sin(V*2.3)*.5,ht=ve.z+Math.sin(V*1.6+I.ph)*ve.rz*I.b,tt=j-I.m.position.x,ut=ht-I.m.position.z;if(tt*tt+ut*ut>1e-7){let vt=Math.atan2(-ut,tt),kt=I.m.rotation.z;I.m.rotation.z=kt+Math.atan2(Math.sin(vt-kt),Math.cos(vt-kt))*Math.min(1,v*4)}I.m.position.set(j,.025,ht);let Y=Math.max(0,Mn[0]-.5-j,j-Mn[1]-.5),et=Math.max(0,Mn[2]-.4-ht,ht-Mn[3]-.9);I.m.material.uniforms.uAlpha.value=.32*Math.min(1,Math.hypot(Y,et)/.6)}if(T-=v,D<0&&T<=0&&(D=0),D>=0){D+=v/.55;let I=E?P:w,V=E?w:P,j=Math.min(1,D);if(S.flip=V[0]<I[0],S.setPos(I[0]+(V[0]-I[0])*j,I[1]+(V[1]-I[1])*j,Math.sin(j*Math.PI)*.7),j>=1){D=-1,E=1-E,T=5+e()*6;for(let ht=0;ht<8;ht++){let tt=ht/8*6.28;i.soft.add({x:V[0]+Math.cos(tt)*.2,y:.08,z:V[1]+Math.sin(tt)*.1,vx:Math.cos(tt)*.6,vy:.5,vz:Math.sin(tt)*.3,g:2.5,life:.5,s:3,c:"#e6fbff",a:.8,k:0})}}}}),t.trees=d,t.props.berries=Vl.map(([v,A],I)=>n("berry_full",Ut("berry_full",1.05),v,A,{col:.6,shadow:1.5,flip:I%2===1,sway:.03}));let M=[["bush",Ut("bush"),.55],["bush_flower",Ut("bush_flower"),.55],["fern",Ut("fern"),0],["boulder",Ut("boulder"),.5],["stump",Ut("stump"),.45],["flowers",Ut("flowers"),0],["pebbles",Ut("pebbles"),0],["grass_tuft",Ut("grass_tuft"),0]],R=(v,A,I)=>{for(let V of xa)if(Math.abs(v-V.x)<1.3+I&&Math.abs(A-V.z)<1.3+I)return!1;for(let V of["door","mailbox","cauldron","cat","crowWait","sign","board","myStall","fountain"]){let j=lt[V];if(Math.hypot(v-j[0],A-j[1])<2.2+I)return!1}for(let V of Object.values(xi))if(Math.hypot(v-V[0],A-V[1])<2.6)return!1;return!0},U=0;for(let v=0;v<150&&U<3e3;U++){let A=-12+e()*68,I=-7+e()*16,[V,j,ht]=M[Math.floor(e()*M.length)],tt=qh(A,I,-.4);tt&&(ht||j>1)||R(A,I,tt?.3:0)&&(A>30&&A<54&&I>-6&&I<7&&Math.hypot(A-42,I-.5)<9.5||Math.abs(I-$h(A))<1.3&&A>-2&&A<33||A<0&&Math.abs(I-Hl(A))<1.3||Math.hypot(A-lt.woodSign[0],I-lt.woodSign[1])<1.6||I>6.2&&A>-14.5&&A<14.5||Ul(A,I,.6)&&(Math.abs(A-pa)<2&&I>3.5||(n(V,j*(.85+e()*.3),A,I,{col:tt?0:ht,sway:V==="fern"||V==="grass_tuft"||V.startsWith("bush")?.06:0,flip:e()<.5,shadow:j*.7}),v++)))}for(let v=0,A=0;v<70&&A<2e3;A++){let I=-10+e()*64,V=-6+e()*13;if(!qh(I,V)||!R(I,V,0)||Math.abs(V-$h(I))<1.2&&I>-2&&I<33||I<0&&Math.abs(V-Hl(I))<1.1||I>31&&Math.hypot(I-42,V-.5)<9||V>6.4&&I<12.5)continue;let j=e()<.6?"grass_tuft":e()<.8?"pebbles":"mushrooms";n(j,Ut(j)*(.8+e()*.4),I,V,{sway:j==="grass_tuft"?.07:0,flip:e()<.5,shadow:.4}),v++}let O=(v,A,I)=>{for(let[V,j]of Vl)if(Math.hypot(v-V,A-j)<1.5+I)return!1;for(let[V,j]of Yh)if(Math.hypot(v-V,A-j)<1.4+I)return!1;for(let[V,j]of[...Xf,...qf])if(Math.hypot(v-V,A-j)<1.4)return!1;return Math.hypot(v-lt.woodSign[0],A-lt.woodSign[1])>1.6},C=[["fern",0,.06,4],["tallgrass",0,.07,3],["flowers",0,.04,2],["mushrooms",0,0,1],["grass_tuft",0,.07,3],["stump",.45,0,1],["log",.6,0,1],["boulder",.5,0,1],["bush",.55,.05,2]].flatMap(v=>Array(v[3]).fill(v));for(let v=0,A=0;v<95&&A<4e3;A++){let I=-45+e()*33.5,V=-7.2+e()*15,[j,ht,tt]=C[Math.floor(e()*C.length)],ut=qh(I,V,-.3);if(Math.abs(V-Hl(I))<(ht?2.1:1)||!O(I,V,ht?.6:0)||!Ul(I,V,.5)||ut&&ht&&e()<.7)continue;let et=Ut(j)*(.85+e()*.35);n(j,et,I,V,{col:ht,sway:tt,flip:e()<.5,shadow:et*.7}),v++}let F=new Ti;for(let v=0;v<7;v++){let A=new ur(i,"backdrop",8.5,{x:-60+v*30.5,z:0,haze:.35,order:2});i.scene.remove(A.mesh),F.add(A.mesh)}for(let v=0;v<8;v++){let A=new ur(i,"backdrop",7,{x:-55+v*25.5,z:2.5,haze:.18,order:2,flip:!0});i.scene.remove(A.mesh),F.add(A.mesh)}F.position.z=-16,i.scene.add(F),t.back=F,i.buildGround([-60,-35,150,65],(v,A)=>{let I=(tt,ut,Y,et,vt=1)=>{v.fillStyle=et,v.globalAlpha=vt,v.beginPath(),v.ellipse(A.X(tt),A.Z(ut),Y*A.s,Y*A.s*.9,0,0,7),v.fill(),v.globalAlpha=1},V=Gl(7);v.globalCompositeOperation="lighter";let j=[];for(let tt=-6.2;tt<4.1;tt+=.25)j.push([-4.1+(tt+6.2)*.45+Math.sin(tt)*.3,tt]);for(let tt=0;tt<33;tt+=.25)j.push([tt,$h(tt)]);for(let[tt,ut]of j)I(tt+(V()-.5)*.4,ut+(V()-.5)*.4,.95+V()*.35,"rgb(150,0,0)",.55);for(let tt=0;tt>-46;tt-=.25)I(tt+(V()-.5)*.4,Hl(tt)+(V()-.5)*.5,.6+V()*.3,"rgb(118,0,0)",tt<-12?.42:.5);for(let tt=0;tt<=1;tt+=.04)I(pa+tt*4.4,9.9+Math.sin(tt*3)*.25,.55+V()*.25,"rgb(118,0,0)",.5);for(let tt=4.2;tt<Bl+.2;tt+=.25)I(pa+(V()-.5)*.3,tt,.6,"rgb(110,0,0)",.45);for(let tt=0;tt<=1;tt+=.05)I(-3-tt*5.4,-2.2+Math.sin(tt*3)*.3,.75+V()*.3,"rgb(120,0,0)",.5);for(let tt of xa)for(let ut=0;ut<6;ut++)I(tt.x+(V()-.5)*.6,tt.z+(V()-.5)*.5,.75+V()*.2,"rgb(0,0,150)",.6);for(let tt=0;tt<340;tt++){let ut=V()*6.28,Y=Math.sqrt(V())*9;I(42+Math.cos(ut)*Y*1.25,.5+Math.sin(ut)*Y*.7,1+V()*.5,"rgb(0,140,0)",.6)}for(let tt=30;tt<55;tt+=.6)I(tt,-5+(V()-.5)*.8,1.1,"rgb(0,120,0)",.5);v.globalCompositeOperation="source-over";let ht=document.createElement("canvas");ht.width=v.canvas.width,ht.height=v.canvas.height,ht.getContext("2d").drawImage(v.canvas,0,0),v.filter="blur(2px)",v.drawImage(ht,0,0),v.filter="none"},(v,A)=>{for(let[j,ht,tt]of d){let ut=v.createRadialGradient(A.X(j),A.Z(ht-.6),0,A.X(j),A.Z(ht-.6),tt*.55*A.s);ut.addColorStop(0,"rgba(255,0,0,0.55)"),ut.addColorStop(1,"rgba(255,0,0,0)"),v.fillStyle=ut,v.beginPath(),v.arc(A.X(j),A.Z(ht-.6),tt*.55*A.s,0,7),v.fill()}let I=(j,ht,tt,ut,Y=.6)=>{let et=v.createLinearGradient(A.X(j),A.Z(ht),A.X(tt),A.Z(ut));et.addColorStop(0,`rgba(255,0,0,${Y})`),et.addColorStop(1,"rgba(255,0,0,0)"),v.fillStyle=et,v.fillRect(0,0,v.canvas.width,v.canvas.height)};v.globalCompositeOperation="lighten",I(0,-13,0,-6.5),I(-14.5,0,-11.5,0,.3),I(-50,0,-42,0),I(58,0,53,0);{let j=zl-.1,ht=zl+1.1,tt=v.createLinearGradient(0,A.Z(j),0,A.Z(ht));tt.addColorStop(0,"rgba(255,0,0,0.75)"),tt.addColorStop(1,"rgba(255,0,0,0)"),v.fillStyle=tt,v.fillRect(A.X(is[0]),A.Z(j),A.X(is[1])-A.X(is[0]),A.Z(ht)-A.Z(j))}v.fillStyle="rgba(255,0,0,0.42)",v.fillRect(A.X(-60),0,A.X(-12.5)-A.X(-60),v.canvas.height);let V=Gl(11);for(let j=0;j<90;j++){let ht=-46+V()*34,tt=-7+V()*16,ut=(1.2+V()*2.2)*A.s,Y=v.createRadialGradient(A.X(ht),A.Z(tt),0,A.X(ht),A.Z(tt),ut);Y.addColorStop(0,"rgba(0,255,0,0.7)"),Y.addColorStop(1,"rgba(0,255,0,0)"),v.fillStyle=Y,v.beginPath(),v.arc(A.X(ht),A.Z(tt),ut,0,7),v.fill()}for(let j=0;j<70;j++){let ht=-45+V()*33,tt=-6.5+V()*14,ut=(.4+V()*.9)*A.s,Y=v.createRadialGradient(A.X(ht),A.Z(tt),0,A.X(ht),A.Z(tt),ut);Y.addColorStop(0,"rgba(0,0,255,0.9)"),Y.addColorStop(.6,"rgba(0,0,255,0.5)"),Y.addColorStop(1,"rgba(0,0,255,0)"),v.fillStyle=Y,v.beginPath(),v.ellipse(A.X(ht),A.Z(tt),ut*1.3,ut,.5,0,7),v.fill()}},(v,A)=>{let I=v.canvas.width,V=v.canvas.height;v.fillStyle="#f00",v.fillRect(0,0,I,V),v.fillStyle="#000";for(let[Xt,ye]of _a)for(let Wt=Xt-1;Wt<ye+1;Wt+=.25)v.fillRect(A.X(Wt),0,A.X(Wt+.25)-A.X(Wt)+1,A.Z(Wh(Wt)+.6));let j=document.createElement("canvas");j.width=I,j.height=V,j.getContext("2d").drawImage(v.canvas,0,0),v.clearRect(0,0,I,V),v.fillStyle="#000",v.fillRect(0,0,I,V),v.filter="blur(5px)",v.drawImage(j,0,0),v.filter="none";let ht=Math.floor(A.X(ve.x-ve.rx*1.4)),tt=Math.ceil(A.X(ve.x+ve.rx*1.4)),ut=Math.floor(A.Z(ve.z-ve.rz*1.5)),Y=Math.ceil(A.Z(ve.z+ve.rz*1.5)),et=v.getImageData(ht,ut,tt-ht,Y-ut),vt=et.data,kt=A.X(0),Tt=A.Z(0);for(let Xt=0;Xt<Y-ut;Xt++)for(let ye=0;ye<tt-ht;ye++){let Wt=(ht+ye+.5-kt)/A.s,re=(ut+Xt+.5-Tt)/A.s,ce=Yf(Wt,re),Qt=ce>1?.46*Math.max(0,1-(ce-1)/.22):Math.min(1,.46+(1-ce)*.85);vt[(Xt*(tt-ht)+ye)*4+1]=Math.round(Qt*255)}v.putImageData(et,ht,ut),kf(v,A)}),t.tick.push(Bf(i));let H=(()=>{let v=document.createElement("canvas");v.width=64,v.height=256;let A=v.getContext("2d"),I=A.createLinearGradient(0,0,0,256);I.addColorStop(0,"rgba(255,240,200,0)"),I.addColorStop(.3,"rgba(255,240,200,0.9)"),I.addColorStop(1,"rgba(255,240,200,0)"),A.fillStyle=I,A.fillRect(0,0,64,256);let V=A.createLinearGradient(0,0,64,0);return V.addColorStop(0,"rgba(0,0,0,1)"),V.addColorStop(.5,"rgba(0,0,0,0)"),V.addColorStop(1,"rgba(0,0,0,1)"),A.globalCompositeOperation="destination-out",A.fillStyle=V,A.fillRect(0,0,64,256),new Cn(v)})(),W=[];for(let[v,A,I]of[[-1,-3,2.2],[6,-2,3],[21,-1,2.6],[40,-2,3.2],[47,1,2],[-19,0,2.4],[-27.5,1.5,3],[-38,-.5,2.2]]){let V=new Ae(new en(I,11),new fi({map:H,transparent:!0,depthWrite:!1,blending:ji,opacity:.2}));V.position.set(v,4,A),V.rotation.set(-pn,0,-.42),V.renderOrder=4,i.scene.add(V),W.push({m:V,ph:e()*6})}t.tick.push((v,A)=>{for(let I of W)I.m.material.opacity=(1-i.night)*(.13+.05*Math.sin(A*.5+I.ph))});let K=0;return t.tick.push((v,A)=>{if(K+=v,K<.05)return;K=0;let I=i.target.x,V=i.target.z,[j,ht]=lt.cauldron;Math.abs(I-j)<22&&e()<.5&&i.glow.add({x:j+(e()-.5)*.7,y:1.05,z:ht+.1,vx:0,vy:.5+e()*.4,vz:0,wander:.6,ph:e()*6,life:1.4,s:3+e()*3,c:e()<.5?"#c79bff":"#8fe0a8",a:.9,k:0}),Math.abs(I-42)<22&&e()<.6&&i.glow.add({x:42+(e()-.5)*1.2,y:2+e()*.6,z:-.4,vx:(e()-.5)*.8,vy:.6,vz:0,g:3,life:.8,s:3+e()*2,c:"#cfefff",a:.8,k:1}),t.chimney&&Math.abs(I-t.chimney[0])<24&&e()<.22&&i.soft.add({x:t.chimney[0]+(e()-.5)*.2,y:t.chimney[1]+.1,z:t.chimney[2],vx:.18,vy:.45,vz:0,wander:.25,ph:e()*6,fadeIn:.4,life:3.4,s:7+e()*5,grow:1.6,c:"#efe9df",a:.5,k:0,fadePow:2});let tt=i.night;if(e()<.25+tt*.5){let ut=I+(e()-.5)*24,Y=V+(e()-.5)*12;tt>.4?i.glow.add({x:ut,y:.4+e()*2,z:Y,vx:0,vy:0,vz:0,wander:1.2,ph:e()*6,blink:3+e()*3,fadeIn:1,life:5+e()*3,s:5+e()*4,c:"#d8ff8a",a:.95,k:0,fadePow:2}):i.soft.add({x:ut,y:.5+e()*3,z:Y,vx:.1,vy:.02,vz:0,wander:.3,ph:e()*6,fadeIn:1,life:5,s:2+e()*2,c:"#fff8dc",a:.6,k:0,fadePow:2})}e()<.08&&i.soft.add({x:I+(e()-.5)*22,y:7+e()*2,z:V-3+e()*6,vx:.5,vy:-.7,vz:0,wander:2,ph:e()*6,life:9,s:5+e()*3,c:e()<.5?"#8fae4a":"#d6a84a",a:.95,g:0,fadePow:6})}),t}function $h(i){if(i<9)return 4.1+Math.sin(i*.35)*.35;if(i<15){let t=(i-9)/6;return 4.1+(.6-4.1)*(t*t*(3-2*t))}return .6+Math.sin(i*.4)*.5}function Hl(i){let t=1.9+Math.sin(i*.28)*1.1;if(i<=-11)return t;let e=Math.min(1,(i+11)/11),n=e*e*(3-2*e);return t+(4-t)*n}function ga(i,t,e){let n=i.maskCanvas;if(!n)return"grass";ga.data||(ga.data=n.getContext("2d").getImageData(0,0,n.width,n.height).data);let s=Math.round((t+60)*6),a=(Math.round((e+35)*6)*n.width+s)*4,o=ga.data;return o[a+1]>110?"stone":o[a]>100||o[a+2]>100?"dirt":"grass"}function hy(i,t){return i>Mn[0]&&i<Mn[1]&&t>Mn[2]-.6&&t<Mn[3]}function Zh(i,t,e,n=.32){if(!_a.some(([s,r,a,o])=>t>s&&t<r&&e>a&&e<o)||e>9&&!hy(t,e)&&Yf(t,e)<1+n/ve.rz*.6)return!0;for(let s of i.colliders)if(s.rect){let[r,a,o,l]=s.rect;if(t>r-n&&t<a+n&&e>o-n&&e<l+n)return!0}else if(s.r&&(t-s.x)**2+((e-s.z)*1.3)**2<(s.r+n)**2)return!0;return!1}var uy={stall_red:[.12,.9,.655,.6],stall_green:[.12,.9,.655,.6],stall_blue:[.12,.9,.655,.6],stall_mine:[.14,.88,.585,.53]};function Kh(i,t,e){let n=e.join(",");if(i.goodsKey===n)return;i.goodsKey=n;let s=oe[t],r=2,a=i.goodsC;a||(a=i.goodsC=document.createElement("canvas"),a.width=s.width*r,a.height=s.height*r,i.useCanvas(a));let o=a.getContext("2d"),l=a.width,c=a.height;o.clearRect(0,0,l,c),o.drawImage(s,0,0,l,c);let[h,d,u,m]=uy[t],x=Math.min(e.length,7),g=Math.max(x,4),p=(d-h)/g,f=h+(d-h-p*x)/2+p/2,w=[];for(let P=0;P<x;P++){let S=x>3&&P%2===1,T=Math.sin(P*12.9898+n.length)*.5;w.push({name:e[P],u:f+p*P+T*p*.12,v:S?m:u,s:(S?.19:.21)*c,rot:T*.12})}w.sort((P,S)=>P.v-S.v);for(let P of w){let S=oe[P.name];if(!S)continue;let T=P.u*l,E=P.v*c,D=P.s,y=D*S.width/S.height;o.save(),o.fillStyle="rgba(58,30,16,0.32)",o.beginPath(),o.ellipse(T+D*.04,E-D*.02,y*.4,D*.08,0,0,Math.PI*2),o.fill(),o.translate(T,E),o.rotate(P.rot),o.drawImage(S,-y/2,-D*.94,y,D),o.restore()}i.refresh()}var jh="brew-a-witch-potion-v1";function fe(){return Date.now()+(G.offsetMs||0)}function Jh(){let i=Date.now();return{v:1,name:"",coins:120,fame:0,fameLv:1,inv:{cham:0,lav:0,man:0,mush:0,feather:0,berry:0,moth:0,glowbug:0,ladybug:0,beetle:0,minnow:0,bluegill:0,carp:0},found:{},wild:{berry:[],bug:[],fish:[]},potions:{},seen:{},plots:[{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-36e5},{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-6*6e4}],q:0,qn:0,discovered:{},recipes:{},fog:[],stall:{open:!1,items:[]},bought:{},cust:{i:0,nextAt:0,here:!1,asked:!1},board:[],newCount:0,brewTut:0,lesson:0,seenTown:!1,seenWood:!1,seenPond:!1,beetles:0,boughtHour:0,pos:[1.5,1.5],lastSeen:i,offsetMs:0,settings:{sound:!0,music:!0,tod:-1}}}var G=dy();function dy(){try{let i=JSON.parse(localStorage.getItem(jh));if(i&&i.v===1){let t=Jh();return Object.assign(t,i,{settings:Object.assign(t.settings,i.settings),inv:Object.assign(t.inv,i.inv),wild:Object.assign(t.wild,i.wild)})}}catch{}return Jh()}var Jf=0;function me(i=!1){if(i){clearTimeout(Jf),Jf=setTimeout(()=>me(),400);return}try{localStorage.setItem(jh,JSON.stringify(G))}catch{}}function jf(){localStorage.removeItem(jh),G=Jh()}var Et=null,mr=null,ya=null,ss=null,ws=null,Wl=null,ba=!1,gr=0,Xl=0,eu=0,Qf=0,nu=0,fy=0,va=null,xr=null;function sp(){if(Et){Et.state==="suspended"&&Et.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Et=new i,mr=Et.createGain(),mr.gain.value=.85,mr.connect(Et.destination),ya=Et.createGain(),ya.connect(mr),ss=Et.createGain(),ss.gain.value=.12,ss.connect(mr),ws=Et.createGain(),ws.gain.value=.5,ws.connect(mr),Wl=Et.createBuffer(1,Et.sampleRate*2,Et.sampleRate);let t=Wl.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;va=Et.createBufferSource(),va.buffer=Wl,va.loop=!0;let e=Et.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=.6,xr=Et.createGain(),xr.gain.value=0,va.connect(e),e.connect(xr),xr.connect(ws),va.start(),ql(),clearInterval(Qf),Qf=setInterval(my,700)}function ql(){Et&&(ya.gain.value=G.settings.sound?1:0,ws.gain.value=G.settings.sound?.5:0,G.settings.music&&!ba&&xy(),!G.settings.music&&ba&&_y())}function rp(i,t){nu=i,fy=t,xr&&xr.gain.setTargetAtTime(.09*t,Et.currentTime,.3)}function ge(i,t,e,{type:n="sine",vol:s=.3,slide:r=0,attack:a=.005,bus:o=ya}={}){let l=Et.createOscillator(),c=Et.createGain();l.type=n,l.frequency.setValueAtTime(i,t),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,i*r),t+e),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+a),c.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(o),l.start(t),l.stop(t+e+.02)}function Gn(i,t,{vol:e=.2,freq:n=1200,q:s=1,type:r="bandpass",to:a=0,bus:o=ya}={}){let l=Et.createBufferSource();l.buffer=Wl;let c=Et.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(n,i),c.Q.value=s,a&&c.frequency.exponentialRampToValueAtTime(a,i+t);let h=Et.createGain();h.gain.setValueAtTime(e,i),h.gain.exponentialRampToValueAtTime(1e-4,i+t),l.connect(c),c.connect(h),h.connect(o),l.start(i,Math.random()),l.stop(i+t+.02)}var py=[0,2,4,7,9],tp=0,Qh=0,ep=0,ct={step(i="grass"){if(!Et)return;let t=Et.currentTime;t-tp<.12||(tp=t,Qh^=1,i==="stone"?Gn(t,.05,{vol:.09,freq:Qh?1900:1500,q:3}):Gn(t,.07,{vol:.07,freq:Qh?700:560,q:1.2,type:"lowpass"}))},pluck(i=0){if(!Et)return;let t=Et.currentTime,e=py[i%5]+12*Math.floor(i/5),n=523*Math.pow(2,e/12);ge(n,t,.35,{type:"triangle",vol:.2}),ge(n*2,t,.18,{type:"sine",vol:.06})},harvest(){if(!Et)return;let i=Et.currentTime;Gn(i,.12,{vol:.12,freq:900,to:300,q:1}),ge(392,i,.12,{type:"sine",vol:.18,slide:1.8}),ge(784,i+.08,.25,{type:"triangle",vol:.14})},pop(){if(!Et)return;let i=Et.currentTime;ge(620,i,.09,{type:"sine",vol:.18,slide:1.9})},splash(){if(!Et)return;let i=Et.currentTime;Gn(i,.35,{vol:.2,freq:1400,to:300,q:.8}),[0,.06,.13].forEach((t,e)=>ge(300+e*140+Math.random()*60,i+t,.12,{type:"sine",vol:.12,slide:2.4}))},bubble(){if(!Et)return;let i=Et.currentTime;ge(180+Math.random()*260,i,.1,{type:"sine",vol:.07,slide:2.6})},stir(){if(!Et)return;let i=Et.currentTime;Gn(i,.18,{vol:.05,freq:500,to:900,q:2})},pour(){if(!Et)return;let i=Et.currentTime;Gn(i,.2,{vol:.06,freq:2600,q:1.4})},reveal(){if(!Et)return;let i=Et.currentTime;ge(880+Math.random()*200,i,.4,{type:"sine",vol:.03})},near(){if(!Et)return;let i=Et.currentTime;ge(1175,i,.3,{type:"sine",vol:.1}),ge(1568,i+.07,.4,{type:"sine",vol:.08})},bottle(){if(!Et)return;let i=Et.currentTime;Gn(i,.08,{vol:.12,freq:3e3,q:3}),ge(1046,i+.05,.12,{type:"square",vol:.05}),[523,659,784,1046].forEach((t,e)=>ge(t,i+.1+e*.07,.45,{type:"triangle",vol:.13}))},discover(){if(!Et)return;let i=Et.currentTime;Gn(i,.8,{vol:.12,freq:400,to:7e3,q:.7}),[523,659,784,988,1175,1568].forEach((t,e)=>ge(t,i+.15+e*.08,.7,{type:"triangle",vol:.12})),[262,330,392].forEach(t=>ge(t,i+.6,1.4,{type:"sine",vol:.12}))},fail(){if(!Et)return;let i=Et.currentTime;Gn(i,.4,{vol:.2,freq:300,q:.7,type:"lowpass"}),[330,277,220].forEach((t,e)=>ge(t,i+e*.12,.25,{type:"triangle",vol:.15}))},coin(i=0){if(!Et)return;let t=Et.currentTime+i*.05;ge(1568,t,.07,{type:"square",vol:.05}),ge(2093,t+.06,.18,{type:"square",vol:.05})},click(){if(!Et)return;let i=Et.currentTime;ge(700,i,.06,{type:"triangle",vol:.16,slide:1.4})},open(){if(!Et)return;let i=Et.currentTime;Gn(i,.25,{vol:.08,freq:500,to:2500,q:.8}),ge(523,i,.15,{type:"triangle",vol:.1,slide:1.5})},close(){if(!Et)return;let i=Et.currentTime;Gn(i,.2,{vol:.06,freq:2e3,to:500,q:.8})},quest(){if(!Et)return;let i=Et.currentTime;[784,988,1175].forEach((t,e)=>ge(t,i+e*.09,.4,{type:"sine",vol:.12}))},meow(){if(!Et)return;let i=Et.currentTime;ge(700,i,.32,{type:"triangle",vol:.09,slide:1.35,attack:.04}),ge(950,i+.12,.25,{type:"sine",vol:.05,slide:.7})},caw(){if(!Et)return;let i=Et.currentTime;Gn(i,.18,{vol:.14,freq:1100,q:4}),ge(420,i,.18,{type:"sawtooth",vol:.04,slide:.8})},blip(i,t=1){if(!Et||!/[a-z0-9]/i.test(i))return;let e=Et.currentTime;if(e-ep<.045)return;ep=e;let n=i.toLowerCase().charCodeAt(0)%7;ge((300+n*38)*t,e,.05,{type:"square",vol:.035,slide:1.1})}};function my(){if(!Et||!G.settings.sound)return;let i=Et.currentTime;if(Math.random()<.55*(1-nu)){let t=2200+Math.random()*1400,e=2+(Math.random()*2|0);for(let n=0;n<e;n++)ge(t*(1+n*.08),i+n*.09,.07,{type:"sine",vol:.025,slide:1.25,bus:ws})}if(Math.random()<.8*nu)for(let t=0;t<4;t++)ge(4400+Math.random()*200,i+t*.045,.03,{type:"sine",vol:.012,bus:ws})}var gy=72,np=[77,0,81,0,84,0,81,79,77,0,76,0,72,0,0,0,74,0,77,0,81,0,79,77,76,0,79,0,77,0,0,0],ip=[53,60,57,60,50,57,53,57,46,53,50,53,48,55,52,55],tu=i=>440*Math.pow(2,(i-69)/12);function xy(){ba=!0,gr=Et.currentTime+.3,Xl=0,clearInterval(eu),eu=setInterval(vy,80)}function _y(){ba=!1,clearInterval(eu)}function vy(){if(!Et||!ba)return;let i=60/gy/2;for(;gr<Et.currentTime+.3;){let t=np[Xl%np.length];t&&(ge(tu(t),gr,i*3,{type:"sine",vol:.5,bus:ss,attack:.004}),ge(tu(t+12),gr,i*1.2,{type:"sine",vol:.12,bus:ss})),ge(tu(ip[Xl%ip.length]-12),gr,i*1.8,{type:"triangle",vol:.28,bus:ss,attack:.01}),gr+=i,Xl++}}function Ma(i){ss&&ss.gain.setTargetAtTime(i?.04:.12,Et.currentTime,.3)}function Be(i=10){try{navigator.vibrate&&navigator.userActivation&&navigator.userActivation.hasBeenActive&&navigator.vibrate(i)}catch{}}var Ht=(i,t=document)=>t.querySelector(i);function yr(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Vn=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Vn);var ni=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$l=0,ap=0,op=0;function Sa(i,t=!1){ap=i;let e=Ht("#coinN");if(!t){$l=i,e.textContent=i;return}cancelAnimationFrame(op);let n=$l,s=performance.now(),r=()=>{let a=Math.min(1,(performance.now()-s)/650);$l=Math.round(n+(ap-n)*(1-(1-a)**3)),e.textContent=$l,a<1&&(op=requestAnimationFrame(r))};r(),ii(Ht("#hud .coins"))}function au(i,t){Ht("#fameN").textContent="Lv "+i,Ht("#hud .fame .bar i").style.width=Math.round(t*100)+"%"}function hp(i,t,e){let n=Ht("#clock");n.querySelector("span").textContent=i,n.querySelector("em").textContent=t,n.classList.toggle("night",e>.5)}var iu="";function up(i,t=""){let e=Ht("#quest"),n=i+"|"+t;if(n===iu)return;let s=!iu.startsWith(i+"|");if(iu=n,!i){e.classList.add("hidden");return}e.classList.remove("hidden"),e.querySelector(".qtext").textContent=i,e.querySelector(".qprog").textContent=t,s?(e.classList.remove("new"),e.offsetWidth,e.classList.add("new")):ii(e.querySelector(".qprog"))}function br(i){let t=Ht("#bBag .badge");t.textContent=i,t.classList.toggle("hidden",!i),i&&ii(t)}function Zl(i,t){let e=Ht("#note");if(!i){e.classList.add("hidden"),e.onclick=null;return}e.innerHTML=i,e.classList.remove("hidden"),e.onclick=t||null}function ii(i){i&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}function as(i,t,{ms:e=2600}={}){let n=Ht("#toasts"),s=yr("div","toast",(t?`<img src="${Jt(t)}" alt="">`:"")+`<span>${i}</span>`);for(n.appendChild(s);n.children.length>3;)n.firstChild.remove();return setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},e),s}var lp=0,su=!1,dp=()=>!1,_r=[];function fp(i){dp=i}function Dn(i,t="",e={}){for(let n=_r.length-1;n>=0;n--)_r[n].title===i&&_r.splice(n,1);_r.push({title:i,sub:t,...e}),ru()}function ru(){if(su||!_r.length)return;if(rs||vr||dp()){setTimeout(ru,300);return}let{title:i,sub:t,icon:e=null,ms:n=2800,kind:s="",onShow:r=null}=_r.shift(),a=Ht("#banner");a.className="banner "+s,a.innerHTML=`<div class="ribbon big"><span>${i}</span></div>${t?`<p>${t}</p>`:""}${e?`<img src="${Jt(e)}" alt="">`:""}`,a.offsetWidth,a.classList.add("show"),su=!0,r&&r(),clearTimeout(lp),lp=setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>{su=!1,ru()},450)},n)}function Kl(i,t,e,{size:n=56,delay:s=0,arc:r=120,dur:a=.75,onArrive:o=null}={}){setTimeout(()=>{let l=e.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2,d=yr("img","flyer");d.src=i.includes("/")?i:Jt(i),d.style.width=n+"px",Ht("#fly").appendChild(d);let u=performance.now(),m=t.x+(Math.random()-.5)*30,x=t.y+(Math.random()-.5)*20,g=()=>{let p=Math.min(1,(performance.now()-u)/(a*1e3)),f=p<.5?2*p*p:1-(-2*p+2)**2/2,w=m+(c-m)*f,P=x+(h-x)*f-Math.sin(p*Math.PI)*r,S=p<.15?.4+p/.15*.8:1.2-(p-.15)*.6;d.style.transform=`translate(${w-n/2}px, ${P-n/2}px) scale(${S}) rotate(${p*30}deg)`,p<1?requestAnimationFrame(g):(d.remove(),ii(e),o&&o())};g()},s)}function pp(i,t,e){let n=Ht("#hud .coins"),s=Math.min(10,Math.max(3,Math.round(i/12)));for(let r=0;r<s;r++)Kl("coin",t,n,{size:34,delay:r*55,arc:80+Math.random()*60,dur:.6,onArrive:()=>{ct.coin(r%3),e&&e(r,s)}})}function Wn(i,t,e=""){let n=yr("div","pop-text "+e,i);n.style.left=t.x+"px",n.style.top=t.y+"px",Ht("#fly").appendChild(n),setTimeout(()=>n.remove(),1300)}var Yl=class{constructor(t){this.world=t,this.root=Ht("#tags"),this.map=new Map,this.tmp={x:0,y:0}}get(t,e,n){let s=this.map.get(t);return s||(s={el:yr("div","tag "+e),html:null,vis:!0},this.root.appendChild(s.el),this.map.set(t,s)),n!=null&&n!==s.html&&(s.el.innerHTML=n,s.html=n),s}place(t,e,n,s,r=!0){let a=this.map.get(t);if(!a)return;let o=this.world.toScreen(e,n,s,this.tmp),l=r&&!o.behind&&o.x>-80&&o.x<innerWidth+80&&o.y>-60&&o.y<innerHeight*.8;return l!==a.vis&&(a.el.classList.toggle("off",!l),a.vis=l),l&&(a.el.style.transform=`translate(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px)`),o}remove(t){let e=this.map.get(t);e&&(e.el.remove(),this.map.delete(t))}has(t){return this.map.has(t)}};function Jl(i,t){let e=Ht("#qptr");if(!t){e.classList.add("hidden");return}let n=i.toScreen(t[0],t[1],t[2]),s=innerWidth,r=innerHeight,a=46;if(e.classList.remove("hidden"),!n.behind&&n.x>a&&n.x<s-a&&n.y>a+30&&n.y<r-a)e.classList.remove("edge"),e.style.transform=`translate(${n.x}px, ${n.y}px)`;else{let o=n.x-s/2,l=n.y-r/2;n.behind&&(o=-o,l=-l);let c=Math.min((s/2-a)/Math.abs(o||1e-6),(r/2-a)/Math.abs(l||1e-6));e.classList.add("edge"),e.style.transform=`translate(${s/2+o*c}px, ${r/2+l*c}px) rotate(${Math.atan2(l,o)}rad)`}}var rs=null;function jl(){return!!rs}function Pi(i,t,e=[],{pitch:n=1,side:s="left"}={}){return new Promise(r=>{let a=Ht("#dialog");a.classList.remove("hidden"),a.classList.toggle("right",s==="right"),a.querySelector(".dlg-name span").textContent=i;let o=a.querySelector(".dlg-text"),l=a.querySelector(".dlg-choices"),c=a.querySelector(".dlg-next");o.textContent="",l.innerHTML="",c.classList.add("hidden"),Ma(!0);let h={i:0,done:!1,sel:0};rs=h;let d=a.querySelector(".dlg-box");d.classList.remove("pop"),d.offsetWidth,d.classList.add("pop");let u=g=>{rs=null,a.classList.add("hidden"),Ma(!1),r(g)},m=()=>{if(h.done=!0,!e.length){c.classList.remove("hidden");return}e.forEach((g,p)=>{let f=yr("button","choice"+(g.disabled?" disabled":""),(g.icon?`<img src="${Jt(g.icon)}" alt="">`:"")+`<span>${g.label||g}</span>${Vn?"":`<kbd>${p+1}</kbd>`}`);f.style.animationDelay=p*.06+"s",f.addEventListener("click",w=>{if(w.stopPropagation(),g.disabled){ct.click(),ii(f);return}ct.click(),u(p)}),l.appendChild(f)})};h.choose=g=>{let p=e[g];p&&!p.disabled&&(ct.click(),u(g))},h.advance=()=>{if(!h.done){h.i=t.length,o.textContent=t,m();return}e.length||(ct.click(),u(-1))};let x=()=>{if(rs!==h||h.done)return;if(h.i++,o.textContent=t.slice(0,h.i),ct.blip(t[h.i-1]||"",n),h.i>=t.length){m();return}let g=t[h.i-1];setTimeout(x,g==="."||g==="?"||g==="!"?180:g===","?90:24)};setTimeout(x,120),a.onclick=()=>h.advance()})}function mp(i){if(!rs)return!1;if(i==="KeyE"||i==="Space"||i==="Enter")return rs.advance(),!0;let t=parseInt(i.replace("Digit",""),10);return t>=1&&t<=4&&rs.choose(t-1),!0}var vr=null;function Ql(){return!!vr}function Ii(i,t,{onClose:e=null,title:n=""}={}){Ts(!0);let s=Ht("#panel");s.className="modal";let r=yr("div","card "+i);return r.innerHTML=(n?`<div class="ribbon card-title"><span>${n}</span></div>`:"")+t+'<button class="btn-close" aria-label="Close"></button>',s.appendChild(r),r.querySelector(".btn-close").addEventListener("click",()=>Ts()),s.onclick=a=>{a.target===s&&Ts()},vr={card:r,onClose:e},ct.open(),Ma(!0),r}function Ts(i=!1){if(!vr)return;let t=vr;vr=null;let e=Ht("#panel");e.className="modal hidden",e.innerHTML="",i||ct.close(),Ma(!1),t.onClose&&t.onClose()}function wa({medal:i,potion:t,title:e,name:n,tier:s,first:r,ings:a}){return new Promise(o=>{let l=Ht("#discovery");l.innerHTML=`
      <div class="rays"></div>
      <div class="disc-card">
        <div class="ribbon big"><span>${e}</span></div>
        <div class="disc-icons"><img class="medal" src="${Jt(i)}" alt=""><img class="potion" src="${Jt(t)}" alt=""></div>
        <h2>${n}</h2>
        <p class="tier t${s.i}">${s.label}</p>
        <p class="first">${r}</p>
        <div class="recipe">${a.map(h=>`<img src="${Jt(h)}" alt="">`).join("<b>+</b>")}</div>
        <button class="btn-green"><span>Wonderful!</span></button>
      </div>`,l.classList.remove("hidden"),l.offsetWidth,l.classList.add("show"),Be(60);let c=()=>{l.classList.remove("show"),setTimeout(()=>{l.classList.add("hidden"),l.innerHTML=""},300),ct.click(),o()};l.querySelector(".btn-green").addEventListener("click",c),wa.close=c})}var Se={x:0,z:0,keys:new Set},tn=null;function gp({onAct:i,onKey:t}){let e=()=>{let h=Se.keys;Se.kx=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),Se.kz=(h.has("KeyS")||h.has("ArrowDown")?1:0)-(h.has("KeyW")||h.has("ArrowUp")?1:0)};window.addEventListener("keydown",h=>{h.target&&h.target.tagName==="INPUT"||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault(),!h.repeat&&(Se.keys.add(h.code),e(),t(h.code,!0)))}),window.addEventListener("keyup",h=>{Se.keys.delete(h.code),e(),t(h.code,!1)}),window.addEventListener("blur",()=>{Se.keys.clear(),e()}),Se.kx=Se.kz=0;let n=Ht("#touch"),s=Ht("#stick"),r=s.querySelector("i");n.addEventListener("pointerdown",h=>{tn||(tn={id:h.pointerId,ox:h.clientX,oy:h.clientY},n.setPointerCapture(h.pointerId),s.style.left=tn.ox+"px",s.style.top=tn.oy+"px",s.classList.remove("hidden"),r.style.transform="translate(-50%,-50%)")}),n.addEventListener("pointermove",h=>{if(!tn||h.pointerId!==tn.id)return;let d=46,u=h.clientX-tn.ox,m=h.clientY-tn.oy,x=Math.hypot(u,m);x>d&&(tn.ox+=u*(1-d/x),tn.oy+=m*(1-d/x),u=h.clientX-tn.ox,m=h.clientY-tn.oy,s.style.left=tn.ox+"px",s.style.top=tn.oy+"px");let g=Math.min(1,Math.hypot(u,m)/d),p=Math.atan2(m,u);Se.sx=g>.12?Math.cos(p)*g:0,Se.sz=g>.12?Math.sin(p)*g:0,r.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${m}px))`});let a=h=>{!tn||h.pointerId!==tn.id||(tn=null,Se.sx=Se.sz=0,s.classList.add("hidden"))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),Se.sx=Se.sz=0;let o=Ht("#act"),l=null,c=()=>{l&&(window.removeEventListener("click",l,!0),l=null)};o.addEventListener("pointerdown",h=>{h.preventDefault(),ii(o),i(),c(),l=d=>{d.stopPropagation(),d.preventDefault(),c()},window.addEventListener("click",l,!0),setTimeout(c,700)}),window.addEventListener("pointerdown",h=>{o.contains(h.target)||c()},!0)}function xp(){let i=Se.kx+Se.sx,t=Se.kz+Se.sz,e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),Se.x=i,Se.z=t,Se}function tc(){Se.keys.clear(),Se.kx=Se.kz=Se.sx=Se.sz=0,tn=null,Ht("#stick").classList.add("hidden")}var cp="";function Mr(i,t){let e=Ht("#prompt"),n=Ht("#act"),s=i||"";s!==cp&&(cp=s,i?(e.innerHTML=`<div class="pin">${Vn?"":"<kbd>E</kbd>"}<span>${i}</span></div>`,e.classList.remove("hidden"),e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),n.querySelector("span").textContent=i.replace(/ \(.+\)$/,""),n.classList.remove("hidden")):(e.classList.add("hidden"),n.classList.add("hidden"))),i&&t&&(e.style.transform=`translate(${t.x}px, ${t.y}px)`)}function Ta(i){return Ht("#fade").classList.toggle("on",i),new Promise(t=>setTimeout(t,i?260:10))}var le=Math.PI*2,Li=(i,t,e)=>Math.max(t,Math.min(e,i)),Xe=(i,t,e)=>i+(t-i)*e,Es=i=>i*i*(3-2*i),_p=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),Ot=(i,t)=>i+Math.random()*(t-i),yy=[["minnow",.55],["bluegill",.3],["carp",.15]];function by(){let i=Math.random();for(let[t,e]of yy)if((i-=e)<0)return t;return"minnow"}var My={ladybug:"Ladybug",beetle:"Moss Beetle",moth:"Wood Moth",glowbug:"Glowbug",minnow:"Pond Minnow",bluegill:"Bluegill",carp:"Golden Carp"},Sy={ladybug:{img:"mb_ladybug",h:104,speed:92,r:40},beetle:{img:"mb_beetle",h:112,speed:78,r:42},moth:{img:"mb_moth",h:104,speed:150,r:46,flies:!0},glowbug:{img:"mb_glowbug",h:98,speed:62,r:38}},wy={minnow:{img:"mp_minnow",len:74,speed:62,window:.8,nib:[1,3]},bluegill:{img:"mp_bluegill",len:84,speed:52,window:.68,nib:[1,3]},carp:{img:"mp_carp",len:112,speed:44,window:.56,nib:[2,4]}},Ty={ladybug:"i_ladybug",beetle:"i_beetle",moth:"i_moth",glowbug:"i_glowbug",minnow:"i_minnow",bluegill:"i_bluegill",carp:"i_carp"},ec=class{constructor(){let t=this.c=document.createElement("canvas");t.id="mini",t.className="hidden",document.body.appendChild(t),this.g=t.getContext("2d"),this.isOpen=!1,this.covers=!1,this.fx=[],this.sil={};let e=n=>[n.clientX,n.clientY];t.addEventListener("pointermove",n=>{!this.isOpen||n.pointerType==="touch"||(this.aimMode="mouse",[this.ax,this.ay]=e(n))}),t.addEventListener("pointerdown",n=>{if(!this.isOpen||this.phase!=="play")return;n.preventDefault();let[s,r]=e(n);if(Math.hypot(s-this.closeBtn[0],r-this.closeBtn[1])<this.closeBtn[2]*1.3){ct.close(),this.finish();return}this.aimMode=n.pointerType==="touch"?"touch":"mouse",this.ax=s,this.ay=r,this.press(!0)})}open(t,e={}){return this.kind=t,this.o=e,this.got=[],this.fled=!1,this.fx=[],this.endT=null,this.card=null,this.isOpen=!0,this.covers=!1,this.phase="in",this.pt=0,this.t=0,this.from=e.from||{x:innerWidth/2,y:innerHeight/2},this.resize(),this.ax=this.W*.5,this.ay=this.H*.5,this.aimMode=Vn?"touch":"mouse",t==="bug"?this.setupBug(e):this.setupFish(e),this.c.classList.remove("hidden"),this.clip(0),ct.open(),new Promise(n=>{this.done=n})}finish(){this.phase!=="out"&&(this.phase="out",this.pt=0,this.covers=!1)}resize(){let t=Math.min(2,devicePixelRatio||1);this.W=innerWidth,this.H=innerHeight,this.d=t,this.c.width=Math.round(this.W*t),this.c.height=Math.round(this.H*t),this.S=Math.min(this.W/1100,this.H/620),this.closeBtn=[this.W-40*Math.max(.8,this.S),40*Math.max(.8,this.S),22*Math.max(.8,this.S)]}clip(t){let e=Math.hypot(this.W,this.H)*Es(Li(t,0,1));this.c.style.clipPath=t>=1?"none":`circle(${e.toFixed(1)}px at ${this.from.x.toFixed(1)}px ${this.from.y.toFixed(1)}px)`}key(t,e){if(!(!e||this.phase!=="play")){if(t==="Escape"){ct.close(),this.finish();return}(t==="Space"||t==="KeyE"||t==="Enter")&&this.press(!1),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&(this.aimMode="key")}}press(t){this.kind==="bug"?this.bugPress(t):this.fishPress(t)}update(t,e){if(!this.isOpen)return;if((innerWidth!==this.W||innerHeight!==this.H)&&this.resize(),this.t+=t,this.phase==="in")this.pt+=t/.45,this.clip(this.pt),this.pt>=1&&(this.phase="play",this.covers=!0);else if(this.phase==="out"&&(this.pt+=t/.4,this.clip(1-this.pt),this.pt>=1)){this.isOpen=!1,this.c.classList.add("hidden"),this.c.style.clipPath="";let s=this.done;this.done=null,s&&s({got:this.got,fled:this.fled});return}if(this.aimMode==="key"&&e&&(e.x||e.z)){let s=620*this.S*t;this.ax=Li(this.ax+e.x*s,0,this.W),this.ay=Li(this.ay+e.z*s,0,this.H)}this.endT!=null&&this.phase==="play"&&(this.endT-=t,this.endT<=0&&(this.endT=null,this.finish())),this.kind==="bug"?this.bugUpdate(t):this.fishUpdate(t),this.fxUpdate(t);let n=this.g;n.setTransform(this.d,0,0,this.d,0,0),this.kind==="bug"?this.bugDraw(n):this.fishDraw(n),this.fxDraw(n),this.drawChrome(n)}img(t,e,n,s,r,{rot:a=0,sx:o=1,sy:l=1,alpha:c=1,w:h=null}={}){let d=oe[e];if(!d)return;let u=h??r*d.width/d.height;t.save(),t.globalAlpha=c,t.translate(n,s),t.rotate(a),t.scale(o,l),t.drawImage(d,-u/2,-r/2,u,r),t.restore()}silhouette(t,e){let n=t+e;if(this.sil[n])return this.sil[n];let s=oe[t],r=document.createElement("canvas");r.width=s.width,r.height=s.height;let a=r.getContext("2d");return a.drawImage(s,0,0),a.globalCompositeOperation="source-in",a.fillStyle=e,a.fillRect(0,0,r.width,r.height),this.sil[n]=r}pill(t,e,n,s,{size:r=20,bg:a="rgba(251,246,234,0.94)",fg:o="#5a3424",alpha:l=1}={}){let c=this.S,h=Math.max(13,r*c);t.save(),t.globalAlpha=l,t.font=`700 ${h}px Mali, sans-serif`,t.textAlign="center",t.textBaseline="middle";let d=t.measureText(e).width+h*1.6,u=h*2;t.fillStyle="rgba(40,24,30,0.25)",vp(t,n-d/2,s-u/2+3,d,u,u/2),t.fill(),t.fillStyle=a,vp(t,n-d/2,s-u/2,d,u,u/2),t.fill(),t.fillStyle=o,t.fillText(e,n,s+h*.04),t.restore()}drawChrome(t){let[e,n,s]=this.closeBtn;t.save(),t.fillStyle="rgba(40,24,30,0.3)",t.beginPath(),t.arc(e,n+3,s,0,le),t.fill(),t.fillStyle="rgba(251,246,234,0.95)",t.beginPath(),t.arc(e,n,s,0,le),t.fill(),t.strokeStyle="#5a3424",t.lineWidth=Math.max(2.5,s*.16),t.lineCap="round";let r=s*.38;t.beginPath(),t.moveTo(e-r,n-r),t.lineTo(e+r,n+r),t.moveTo(e+r,n-r),t.lineTo(e-r,n+r),t.stroke(),t.restore(),this.hint&&this.phase==="play"&&this.pill(t,this.hint,this.W/2,34*Math.max(.8,this.S),{size:17,alpha:this.hintA==null?1:this.hintA}),this.say&&this.sayT>0&&this.pill(t,this.say,this.sayX,this.sayY-(1-Math.min(1,this.sayT*3))*0-(.9-this.sayT)*30*this.S,{size:18,alpha:Math.min(1,this.sayT*3)}),this.card&&this.drawCard(t)}shout(t,e,n,s=.9){this.say=t,this.sayX=e,this.sayY=n,this.sayT=s}showCard(t,e){this.card={kind:t,t:0,x0:e[0],y0:e[1]},ct.discover(),Be(14),this.burst(this.W/2,this.H*.42,26,["#fff6c9","#ffd76a","#ffffff"])}drawCard(t){let e=this.card,n=this.S,s=Math.min(1,e.t/.45),r=Li((e.t-1.25)/.35,0,1),a=Xe(e.x0,this.W/2,Es(s)),o=Xe(e.y0,this.H*.42,Es(s))-Math.sin(s*Math.PI)*60*n,l=(.4+.75*Es(s)+Math.sin(e.t*9)*.03*(1-r))*(1-r*.7);t.save(),t.globalAlpha=1-r;let c=t.createRadialGradient(a,o,0,a,o,170*n);c.addColorStop(0,"rgba(255,246,200,0.75)"),c.addColorStop(1,"rgba(255,246,200,0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,170*n,0,le),t.fill(),t.translate(a,o),t.rotate(Math.sin(e.t*3)*.06*(1-s)),this.img(t,Ty[e.kind],0,0,170*n*l),t.restore(),s>=1&&r<1&&this.pill(t,`${My[e.kind]}!`,this.W/2,this.H*.42+120*n,{size:24,alpha:1-r})}burst(t,e,n,s,r=260){for(let a=0;a<n;a++){let o=Ot(0,le),l=Ot(.3,1)*r*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-60*this.S,life:Ot(.5,.9),t:0,s:Ot(3,7)*this.S,c:s[a%s.length]})}}ring(t,e,n,s,r=.9,a=.7,o=2.5){this.fx.push({k:"ring",x:t,y:e,r0:n*this.S,r1:s*this.S,life:r,t:0,a,w:o})}drops(t,e,n,s=200){for(let r=0;r<n;r++){let a=Ot(-Math.PI*.95,-Math.PI*.05),o=Ot(.4,1)*s*this.S;this.fx.push({k:"drop",x:t,y:e,vx:Math.cos(a)*o,vy:Math.sin(a)*o,life:Ot(.4,.7),t:0,s:Ot(2.5,5)*this.S})}}fxUpdate(t){for(let e of this.fx)e.t+=t,e.vx!=null&&(e.x+=e.vx*t,e.y+=e.vy*t,e.vy+=(e.k==="drop"?700:240)*this.S*t,e.vx*=1-t*1.5),e.k==="leaf"&&(e.rot+=e.vr*t);this.fx=this.fx.filter(e=>e.t<e.life),this.sayT>0&&(this.sayT-=t),this.card&&(this.card.t+=t,this.card.t>1.6&&(this.card=null))}fxDraw(t){for(let e of this.fx){let n=e.t/e.life;if(e.k==="ring")t.save(),t.globalAlpha=e.a*(1-n),t.strokeStyle="#eafcff",t.lineWidth=e.w*this.S*(1-n*.5),t.beginPath(),t.ellipse(e.x,e.y,Xe(e.r0,e.r1,Es(n)),Xe(e.r0,e.r1,Es(n))*.42,0,0,le),t.stroke(),t.restore();else if(e.k==="drop")t.save(),t.globalAlpha=1-n,t.fillStyle="#eafcff",t.beginPath(),t.arc(e.x,e.y,e.s,0,le),t.fill(),t.restore();else if(e.k==="spark"){t.save(),t.globalAlpha=1-n,t.fillStyle=e.c,t.translate(e.x,e.y),t.rotate(e.t*6);let s=e.s*(1-n*.5);t.beginPath();for(let r=0;r<8;r++){let a=r%2?s*.4:s;t.lineTo(Math.cos(r/8*le)*a,Math.sin(r/8*le)*a)}t.fill(),t.restore()}else e.k==="leaf"&&this.img(t,e.img,e.x,e.y,e.h,{rot:e.rot,alpha:1-n*n})}}setupBug(t){let e=this.S,n=this.W,s=this.H;this.arena=[n*.14,s*.2,n*.86,s*.86],this.bugs=[],this.addBug(t.kind||"ladybug",n*Ot(.3,.7),s*Ot(.4,.65),!0),this.misses=0,this.net={x:n*.5,y:s*.72,h:1,swoop:-1,hold:0,vx:0,vy:0},this.ax=this.net.x,this.ay=this.net.y,this.dress=[];let r=[[.05,.12,"mb_rock_a",150],[.95,.15,"mb_fern",190],[.03,.9,"mb_fern",200],[.97,.88,"mb_rock_b",120],[.5,.04,"mb_leaves_a",150],[.2,.98,"mb_leaves_b",120],[.8,1,"mb_leaves_a",140],[0,.5,"mb_leaves_b",130],[1,.52,"mb_leaves_a",150],[.3,.06,"mb_rock_b",90],[.72,.05,"mb_fern",150]];for(let[a,o,l,c]of r)this.dress.push({n:l,x:a*n,y:o*s,h:c*e*Ot(.9,1.1),rot:Ot(-.5,.5),f:Math.random()<.5?-1:1});this.pebbles=Array.from({length:40},()=>({x:Ot(0,n),y:Ot(0,s),r:Ot(2,6)*e,c:Math.random()<.5?"#8a6a4a":"#6d523a"})),this.bugBgKey=null,this.pileT=0,this.pileNag=!1,this.leftT=0,this.leftNag=!1,this.pile=t.beetle?{x:n*(Math.random()<.5?.25:.74),y:s*Ot(.32,.72),open:0,has:"beetle",rus:2}:null,this.hint=Vn?"Tap the bug to bring the net down":"Move the net, then click or press Space",this.hintA=1,t.beetle&&t.firstBeetle&&(this.hint2="Something rustles under the leaves...")}addBug(t,e,n,s=!1){let r=Sy[t];this.bugs.push({kind:t,d:r,x:e,y:n,a:Ot(0,le),at:0,v:0,mode:"walk",t:Ot(1,2.5),main:s,wob:0,fly:r.flies?1:0,sc:1,alpha:1})}bugUpdate(t){let e=this.S,n=this.net,[s,r,a,o]=this.arena,l=n.swoop>=0?0:1,c=n.x,h=n.y;n.x=Xe(n.x,this.ax,l),n.y=Xe(n.y,this.ay,l),n.vx=(n.x-c)/Math.max(t,.001),n.vy=(n.y-h)/Math.max(t,.001),n.sp=Xe(n.sp||0,Math.hypot(n.vx,n.vy),Math.min(1,t*12));let d=n.sp>1250*e;n.swoop>=0?(n.swoop+=t,n.h=Math.max(0,1-n.swoop/.12),n.swoop>=.12&&!n.landed&&(n.landed=!0,this.netLanded()),n.swoop>=.12+(n.hold||.08)&&(n.swoop=-1,n.landed=!1,n.hold=0)):n.h=Xe(n.h,1,Math.min(1,t*10)),this.pile&&!this.pile.open&&(this.pile.rus-=t,this.pile.rus<-.5&&(this.pile.rus=Ot(1.5,3)),this.pile.rus<0&&this.hint2&&(this.hint=this.hint2,this.hint2=null)),this.pile&&this.pile.open&&(this.pile.open+=t);let u=0;for(let g of this.bugs){if(g.t-=t,g.mode==="caught"){g.wob+=t,u++;continue}if(g.mode==="gone")continue;if(u++,g.mode==="flee"){g.v=Xe(g.v,g.d.speed*5*e,Math.min(1,t*3)),(g.d.flies||g.kind!=="beetle")&&(g.fly=Math.min(1.6,g.fly+t*2),g.sc=1+g.fly*.25),g.x+=Math.cos(g.a)*g.v*t,g.y+=Math.sin(g.a)*g.v*t,(g.x<-150||g.x>this.W+150||g.y<-150||g.y>this.H+150)&&(g.mode="gone",u--),g.wob+=t*18;continue}d&&g.mode!=="dash"&&Math.hypot(g.x-n.x,g.y-n.y)<190*e&&n.swoop<0&&this.scare(g,.5);let p=g.x<s||g.x>a,f=g.y<r||g.y>o;g.t<=0&&(g.mode==="walk"?(g.mode="pause",g.t=g.d.flies?Ot(1.2,2.4):Ot(.5,1.4)):(g.mode="walk",g.t=Ot(1.4,3.2),g.at=g.a+Ot(-1.6,1.6))),p||f?g.at=Math.atan2((r+o)/2-g.y,(s+a)/2-g.x):Math.random()<t*.9&&(g.at=g.a+Ot(-1.2,1.2));let w=g.mode==="pause"?0:g.mode==="dash"?g.d.speed*3.4:g.d.speed;g.v=Xe(g.v,w*e,Math.min(1,t*(g.mode==="dash"?8:4))),g.mode==="dash"&&g.t<=0&&(g.mode="walk",g.t=Ot(1,2)),g.a+=_p(g.a,g.at)*Math.min(1,t*(g.mode==="dash"?7:2.6)),g.d.flies&&(g.fly=Xe(g.fly,g.mode==="pause"?0:1,Math.min(1,t*3)),g.a+=Math.sin(this.t*2.3+g.x*.01)*t*1.2*g.fly),g.x+=Math.cos(g.a)*g.v*t,g.y+=Math.sin(g.a)*g.v*t,g.wob+=t*(g.v/(e*6)+2)}let m=this.bugs.filter(g=>g.main);if(m.length&&m.every(g=>g.mode==="gone")&&!this.card&&u&&(this.leftT=(this.leftT||0)+t,!this.leftNag&&this.got.length&&(this.leftNag=!0,this.hint="One more! Catch it before it wanders off",this.hintA=1),this.leftT>4.5))for(let g of this.bugs)g.mode!=="caught"&&g.mode!=="gone"&&g.mode!=="flee"&&(g.mode="flee",g.v=g.d.speed*3*this.S,g.a=g.at=Math.atan2(g.y-this.H/2,g.x-this.W/2));this.pile&&!this.pile.open&&this.pile.has&&!u&&!this.card&&(this.pileT=(this.pileT||0)+t,this.pileNag||(this.pileNag=!0,this.hint=Vn?"Something is still under the leaves. Tap them":"Something is still under the leaves",this.hintA=1),this.pileT>7&&(this.pile.has=null),u++),!u&&this.endT==null&&!this.card&&this.phase==="play"&&(this.endT=this.got.length?.15:.6),this.hintA!=null&&this.t>4&&!this.pileNag&&!this.leftNag&&(this.hintA=Math.max(.55,1-(this.t-4)*.2))}scare(t,e=.6){t.mode="dash",t.t=e;let n=this.net;t.at=Math.atan2(t.y-n.y,t.x-n.x)+Ot(-.6,.6)}bugPress(t){let e=this.net;e.swoop>=0||this.card||(t&&(e.x=this.ax,e.y=this.ay),e.swoop=0,e.landed=!1,ct.stir())}netLanded(){let t=this.S,e=this.net,n=66*t,s=this.bugs.filter(r=>r.mode!=="caught"&&r.mode!=="gone"&&r.mode!=="flee"&&Math.hypot(r.x-e.x,r.y-e.y)<n*.78+r.d.r*t*.35);if(this.pile&&!this.pile.open&&Math.hypot(this.pile.x-e.x,this.pile.y-e.y)<n+30*t&&this.openPile(),s.length){for(let a of s)a.mode="caught",a.cx=a.x-e.x,a.cy=a.y-e.y,this.got.push(a.kind);e.hold=.65,ct.pop(),Be(16),this.burst(e.x,e.y,14,["#fff6c9","#ffffff","#ffd76a"],220);let r=s[0];setTimeout(()=>{this.isOpen&&(r.mode="gone",this.showCard(r.kind,[e.x,e.y]))},520);for(let a of s.slice(1))setTimeout(()=>{a.mode="gone"},520);return}if(this.dust(e.x,e.y),!(this.pile&&this.pile.open&&this.pile.open<.05)){this.misses++,ct.click(),this.shout(this.misses>=3?"It got away!":"Missed!",e.x,e.y-80*t);for(let r of this.bugs)(r.mode==="walk"||r.mode==="pause"||r.mode==="dash")&&(this.misses>=3?(r.mode="flee",r.a=r.at=Math.atan2(r.y-e.y,r.x-e.x),this.fled=this.fled||r.main):Math.hypot(r.x-e.x,r.y-e.y)<300*t&&this.scare(r,.7))}}openPile(){let t=this.pile,e=this.S;t.open=.001,ct.harvest();for(let n=0;n<5;n++){let s=Ot(0,le);this.fx.push({k:"leaf",img:n%2?"mb_leaves_a":"mb_leaves_b",x:t.x,y:t.y,vx:Math.cos(s)*Ot(200,380)*e,vy:Math.sin(s)*Ot(200,380)*e-150*e,life:.9,t:0,h:Ot(60,90)*e,rot:Ot(0,le),vr:Ot(-6,6)})}if(t.has){this.addBug(t.has,t.x,t.y);let n=this.bugs[this.bugs.length-1];n.mode="dash",n.t=.6,n.at=n.a=Ot(0,le),this.shout("A beetle!",t.x,t.y-70*e,1.1)}else this.shout("Just leaves",t.x,t.y-70*e)}dust(t,e){for(let n=0;n<10;n++){let s=Ot(0,le),r=Ot(60,160)*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(s)*r,vy:Math.sin(s)*r*.5,life:.45,t:0,s:Ot(3,6)*this.S,c:"#a88a66"})}}bakeBug(){let t=this.S,e=this.W,n=this.H,s=this.d,r=this.bugBg||(this.bugBg=document.createElement("canvas"));r.width=Math.round(e*s),r.height=Math.round(n*s);let a=r.getContext("2d");a.setTransform(s,0,0,s,0,0);let o=a.createPattern(oe.dirt,"repeat");a.save();let l=1.5*t;a.scale(l,l),a.fillStyle=o,a.fillRect(0,0,e/l,n/l),a.restore(),a.save(),a.globalCompositeOperation="multiply",a.fillStyle="#8c6a5c",a.fillRect(0,0,e,n),a.restore();for(let h of this.pebbles)a.fillStyle=h.c,a.globalAlpha=.5,a.beginPath(),a.ellipse(h.x,h.y,h.r,h.r*.7,0,0,le),a.fill();a.globalAlpha=1;let c=a.createRadialGradient(e/2,n*.52,Math.min(e,n)*.25,e/2,n*.52,Math.hypot(e,n)*.62);c.addColorStop(0,"rgba(255,236,190,0.12)"),c.addColorStop(1,"rgba(40,22,10,0.55)"),a.fillStyle=c,a.fillRect(0,0,e,n);for(let h of this.dress)this.img(a,h.n,h.x,h.y,h.h,{rot:h.rot,sx:h.f});this.bugBgKey=e+"x"+n+"@"+s}bugDraw(t){let e=this.S,n=this.W,s=this.H;this.bugBgKey!==n+"x"+s+"@"+this.d&&this.bakeBug(),t.setTransform(1,0,0,1,0,0),t.drawImage(this.bugBg,0,0),t.setTransform(this.d,0,0,this.d,0,0);let r=this.pile;if(r&&r.open<.5){let g=!r.open&&r.rus<0?Math.sin(this.t*40)*.06:0,p=r.open?1-r.open*2:1;this.img(t,"mb_leaves_b",r.x-30*e,r.y+6*e,96*e,{rot:-.4+g,alpha:p}),this.img(t,"mb_leaves_a",r.x+24*e,r.y-4*e,104*e,{rot:.5-g,alpha:p}),this.img(t,"mb_leaves_b",r.x,r.y-18*e,88*e,{rot:1.8+g*1.5,alpha:p}),!r.open&&r.has&&r.rus<0&&this.drawAntennae(t,r.x+6*e,r.y-46*e,e)}for(let g of this.bugs){if(g.mode==="gone")continue;let p=g.d,f=p.h*e*g.sc,w=this.net,P=g.mode==="caught"?w.x+g.cx*.6:g.x,S=g.mode==="caught"?w.y+g.cy*.6:g.y,T=(p.flies?g.fly*26:0)*e+(g.mode==="flee"?g.fly*40*e:0);if(t.save(),t.globalAlpha=.28,t.fillStyle="#1c1008",t.beginPath(),t.ellipse(P+6*e+T*.4,S+10*e+T,f*.36,f*.24,0,0,le),t.fill(),t.restore(),g.kind==="glowbug"){let M=.65+.35*Math.sin(this.t*3+g.x*.01),R=t.createRadialGradient(P,S+f*.25,0,P,S+f*.25,f*1.1);R.addColorStop(0,`rgba(226,255,140,${.55*M})`),R.addColorStop(1,"rgba(226,255,140,0)"),t.fillStyle=R,t.beginPath(),t.arc(P,S+f*.25,f*1.1,0,le),t.fill()}let E=g.a+Math.PI/2+(p.flies?0:Math.sin(g.wob)*.07)+(g.mode==="caught"?Math.sin(g.wob*30)*.15:0),D=1,y=1;p.flies?D=g.fly>.3?.45+.55*Math.abs(Math.sin(this.t*17+g.x)):.88+.12*Math.sin(this.t*2.2):g.mode==="flee"?D=1+Math.abs(Math.sin(g.wob))*.1:y=1+Math.sin(g.wob*2)*.02,this.img(t,p.img,P,S-T,f,{rot:E,sx:D,sy:y})}let a=this.net,o=66*e*(1+a.h*.22),l=a.x,c=a.y-a.h*26*e;t.save(),t.globalAlpha=.22*(1-a.h*.4),t.fillStyle="#1c1008",t.beginPath(),t.ellipse(a.x+10*e*a.h,a.y+22*e*a.h,o*.95,o*.7,0,0,le),t.fill(),t.restore();let h=Math.PI*.25,d=l+Math.cos(h)*o,u=c+Math.sin(h)*o,m=170*e;t.save(),t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=13*e,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(h)*m,u+Math.sin(h)*m),t.stroke(),t.strokeStyle="#b4834c",t.lineWidth=7*e,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(h)*m,u+Math.sin(h)*m),t.stroke(),t.beginPath(),t.arc(l,c,o,0,le),t.save(),t.clip(),t.fillStyle="rgba(255,255,255,0.1)",t.fillRect(l-o,c-o,o*2,o*2),t.strokeStyle="rgba(255,255,255,0.78)",t.lineWidth=1.7*e;let x=14*e;t.beginPath();for(let g=-o*2;g<o*2;g+=x)t.moveTo(l+g-o,c-o),t.lineTo(l+g+o,c+o),t.moveTo(l+g+o,c-o),t.lineTo(l+g-o,c+o);t.stroke(),t.restore(),t.strokeStyle="#2e1c14",t.lineWidth=9*e,t.beginPath(),t.arc(l,c,o,0,le),t.stroke(),t.strokeStyle="#8a5a3c",t.lineWidth=4*e,t.beginPath(),t.arc(l,c,o,0,le),t.stroke(),t.restore();for(let g=0;g<3;g++){let p=40*e+g*34*e,f=36*Math.max(.8,e),w=g<this.misses,P=11*e;t.save(),t.globalAlpha=w?.35:1,t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=7*e,t.beginPath(),t.moveTo(p+7*e,f+7*e),t.lineTo(p+19*e,f+19*e),t.stroke(),t.strokeStyle="#c08a5a",t.lineWidth=4*e,t.beginPath(),t.moveTo(p+7*e,f+7*e),t.lineTo(p+19*e,f+19*e),t.stroke(),t.save(),t.beginPath(),t.arc(p,f,P,0,le),t.fillStyle="rgba(251,246,234,0.28)",t.fill(),t.clip(),t.strokeStyle="rgba(251,246,234,0.85)",t.lineWidth=1.4*e,t.beginPath();for(let S=-P*2;S<=P*2;S+=5*e)t.moveTo(p+S-P,f-P),t.lineTo(p+S+P,f+P),t.moveTo(p+S+P,f-P),t.lineTo(p+S-P,f+P);t.stroke(),t.restore(),t.strokeStyle="#3b2418",t.lineWidth=5*e,t.beginPath(),t.arc(p,f,P,0,le),t.stroke(),t.strokeStyle="#fbf6ea",t.lineWidth=2.5*e,t.beginPath(),t.arc(p,f,P,0,le),t.stroke(),t.restore()}}drawAntennae(t,e,n,s){t.save(),t.strokeStyle="#2b2b22",t.lineWidth=3*s,t.lineCap="round";let r=Math.sin(this.t*12)*4*s;t.beginPath(),t.moveTo(e-5*s,n+16*s),t.quadraticCurveTo(e-10*s,n,e-16*s+r,n-6*s),t.moveTo(e+5*s,n+16*s),t.quadraticCurveTo(e+10*s,n,e+16*s-r,n-6*s),t.stroke(),t.restore()}setupFish(t){let e=this.S,n=this.W,s=this.H;this.bankY=s*.17,this.dockY=s*.8,this.bites=t.bites||3,this.fish=[];for(let r=0;r<Math.min(4,this.bites+1);r++)this.spawnFish(!0);this.state="aim",this.bob=null,this.tension=0,this.bucket=0,this.tip0=[n*.55,s*.5],this.ripples=Array.from({length:46},()=>({x:Ot(0,n),y:Ot(this.bankY,this.dockY),l:Ot(18,46)*e,ph:Ot(0,le),sp:Ot(8,18)*e})),this.pads=[[.08,.27,92,.3],[.88,.25,110,2],[.95,.6,80,4],[.04,.64,70,1],[.66,.24,64,5]].map(([r,a,o,l])=>({x:r*n,y:a*s,h:o*e,r:l})),this.hint=Vn?"Tap the water to cast":"Click the water to cast (or press Space)",this.hintA=1,this.fishBgKey=null}spawnFish(t=!1){let e=this.W,n=by(),s=wy[n];this.fish.push({kind:n,d:s,x:t?Ot(e*.15,e*.85):Math.random()<.5?-60:e+60,y:Ot(this.bankY+60*this.S,this.dockY-60*this.S),a:Ot(0,le),at:0,v:s.speed*this.S,mode:"swim",t:Ot(1,3),ph:Ot(0,le),alpha:0})}fishPress(){let t=this.S;if(!(this.card||this.state==="reel"||this.state==="cast")){if(this.state==="aim"){let e=Li(this.ay,this.bankY+40*t,this.dockY-40*t),n=Li(this.ax,50*t,this.W-50*t);this.state="cast",this.castT=0,this.bob={x:n,y:e,fromX:this.tip0[0],fromY:this.tip0[1],dip:0,under:0,t:0},ct.stir(),this.hintA=.55;return}if(this.state==="wait"){let e=this.biter;if(e&&e.mode==="bite"){this.hook(e);return}if(e&&(e.mode==="nibble"||e.mode==="approach")){this.spook(e),this.shout("Too soon!",this.bob.x,this.bob.y-70*t),ct.click(),this.reelIn();return}this.reelIn()}}}reelIn(){this.state="aim",this.bob=null,this.biter=null,this.tension=0,ct.pour()}spook(t){t.mode="flee",t.t=1.2,t.at=t.a+Math.PI+Ot(-.5,.5)}hook(t){let e=this.S;this.state="reel",this.reelT=0,t.mode="hooked",this.tension=1,ct.splash(),Be(20),this.drops(this.bob.x,this.bob.y,14,260),this.ring(this.bob.x,this.bob.y,10,70,.7,.9,4),this.shout("Got it!",this.bob.x,this.bob.y-80*e,.7)}fishUpdate(t){let e=this.S,n=this.W;this.state==="cast"&&(this.castT+=t/.45,this.castT>=1&&(this.state="wait",this.waitT=0,this.biter=null,this.lureT=Ot(.3,.9),ct.splash(),this.ring(this.bob.x,this.bob.y,6,46,.8),this.drops(this.bob.x,this.bob.y,6,140),this.hint=Vn?"Tap when the float goes under":"Click (or Space) when the float goes under",this.hintA=1));let s=this.bob;if(s&&(s.t+=t,s.dip=Xe(s.dip,s.under?14*e:0,Math.min(1,t*14)),this.state==="wait"&&Math.random()<t*.6&&this.ring(s.x,s.y+4*e,6,30,1.2,.35,1.5)),this.state==="wait"&&(this.waitT+=t,!this.biter&&(this.lureT-=t,this.lureT<=0))){let r=null,a=1e9;for(let o of this.fish){if(o.mode!=="swim")continue;let l=Math.hypot(o.x-s.x,o.y-s.y);l<a&&(a=l,r=o)}r&&(a<380*e||this.waitT>1.8)?(this.biter=r,r.mode="approach",r.nibs=Math.round(Ot(r.d.nib[0],r.d.nib[1]))):this.lureT=.4}if(this.state==="reel"){this.reelT+=t;let r=this.biter;r.x=Xe(r.x,this.W*.56,Math.min(1,t*2.2)),r.y=Xe(r.y,this.dockY-30*e,Math.min(1,t*2.2)),s.x=r.x+Math.cos(r.a)*r.d.len*e*.45,s.y=r.y+Math.sin(r.a)*r.d.len*e*.45,r.a=-Math.PI/2+Math.sin(this.reelT*22)*.5,Math.random()<t*14&&this.drops(r.x+Ot(-20,20)*e,r.y,2,160),this.reelT>.75&&(this.fish.splice(this.fish.indexOf(r),1),this.got.push(r.kind),this.bites--,this.bucket++,this.o.onCatch&&this.o.onCatch(r.kind),this.showCard(r.kind,[r.x,r.y]),this.drops(r.x,r.y,18,320),this.ring(r.x,r.y,10,90,.8,.9,4),this.bob=null,this.biter=null,this.tension=0,this.state="aim",this.hint=Vn?"Tap the water to cast":"Click the water to cast (or press Space)",this.bites>0?setTimeout(()=>{this.isOpen&&this.kind==="fish"&&this.spawnFish()},1600):(this.endT=2.4,setTimeout(()=>{this.isOpen&&(this.hint="The fish are wary now. Come back later")},1500)))}this.tension=Xe(this.tension,this.state==="reel"?1:this.biter&&this.biter.mode==="bite"?.6:0,Math.min(1,t*8));for(let r of this.fish){if(r.t-=t,r.ph+=t*(r.mode==="flee"?26:9),r.alpha=Math.min(1,r.alpha+t*.8),r.mode==="hooked")continue;let a=r.d.speed*e;if(r.mode==="swim"){r.t<=0&&(r.t=Ot(1.5,3.5),r.at=r.a+Ot(-1.4,1.4));let o=70*e;(r.x<o||r.x>n-o||r.y<this.bankY+o||r.y>this.dockY-o)&&(r.at=Math.atan2((this.bankY+this.dockY)/2-r.y,n/2-r.x)),Math.sin(r.ph*.13)>.7&&(a*=.3)}else if(r.mode==="approach"){let o=r.d.len*e,l=Math.hypot(s.x-r.x,s.y-r.y);r.at=Math.atan2(s.y-r.y,s.x-r.x),a=l>o*.5?r.d.speed*e*1.4*Li((l-o*.45)/(60*e),.3,1):0,l<o*.62&&(r.mode="nibble",r.t=Ot(.6,1.2))}else r.mode==="nibble"?(a=0,r.at=Math.atan2(s.y-r.y,s.x-r.x),r.t<=0&&(r.nibs>0?(r.nibs--,r.t=Ot(.45,1.05),r.lunge=.15,s.under=0,s.dip=5*e,this.ring(s.x,s.y+4*e,6,26,.5,.6,2),ct.bubble()):(r.mode="bite",r.t=r.d.window,r.lunge=.25,s.under=1,ct.splash(),Be(14),this.ring(s.x,s.y,8,60,.6,.9,3.5),this.drops(s.x,s.y,10,200),this.shout("!",s.x,s.y-60*e,r.d.window)))):r.mode==="bite"?(a=0,r.t<=0&&(s.under=0,this.spook(r),this.shout("It got away",s.x,s.y-70*e),this.biter=null,this.lureT=Ot(1.5,2.5),this.reelIn())):r.mode==="flee"&&(a=r.d.speed*e*3.5,r.t<=0&&(r.mode="swim",r.t=Ot(1,3)));r.lunge>0&&(r.lunge-=t,a=r.d.speed*e*2),r.a+=_p(r.a,r.at)*Math.min(1,t*(r.mode==="flee"?6:2.5)),r.v=Xe(r.v,a,Math.min(1,t*3)),r.x+=Math.cos(r.a)*r.v*t,r.y+=Math.sin(r.a)*r.v*t,r.mode==="nibble"&&r.lunge>0&&(r.x-=Math.cos(r.a)*r.v*t*1.8,r.y-=Math.sin(r.a)*r.v*t*1.8)}}bakeFish(){let t=this.S,e=this.W,n=this.H,s=this.d,r=this.bankY,a=this.dockY,o=(l,c,h,d)=>{let u=l?l.c:document.createElement("canvas");u.width=Math.round(e*s),u.height=Math.max(1,Math.round((h-c)*s));let m=u.getContext("2d");return m.setTransform(s,0,0,s,0,-c*s),d(m),{c:u,y0:c}};this.fishWater=o(this.fishWater,0,n,l=>{let c=l.createLinearGradient(0,r,0,a);c.addColorStop(0,"#7cc6b6"),c.addColorStop(.35,"#4c9fa2"),c.addColorStop(1,"#3a8790"),l.fillStyle=c,l.fillRect(0,0,e,n)}),this.fishBank=o(this.fishBank,0,r+60*t,l=>{l.fillStyle="#6e9a3e",l.beginPath(),l.moveTo(0,0),l.lineTo(e,0),l.lineTo(e,r);for(let c=e;c>=0;c-=20)l.lineTo(c,r+Math.sin(c*.02)*10*t+Math.sin(c*.051)*6*t);l.closePath(),l.fill(),l.save(),l.globalAlpha=.5,this.img(l,"grass",e/2,r*.4,r*.9,{w:e}),l.restore();for(let c=0,h=-20*t;h<e+60*t;c++,h+=92*t)this.img(l,"mp_grass_edge",h,r-18*t+c%2*8*t,104*t,{sx:c%2?-1:1});this.img(l,"mp_rock_wet",e*.2,r+10*t,92*t),this.img(l,"mp_rock_wet",e*.78,r+4*t,74*t,{sx:-1})}),this.fishDock=o(this.fishDock,Math.min(a-24*t,n-140*t),n,l=>{let c=n-a+40*t;this.img(l,"mp_dock_top",e/2,a-20*t+c/2,c,{w:e*1.04}),this.img(l,"mp_bucket",e*.13,n-74*t,118*t)}),this.fishBgKey=e+"x"+n+"@"+s}fishDraw(t){let e=this.S,n=this.W,s=this.H,r=this.t,a=this.bankY,o=this.dockY;this.fishBgKey!==n+"x"+s+"@"+this.d&&this.bakeFish();let l=g=>{t.setTransform(1,0,0,1,0,0),t.drawImage(g.c,0,Math.round(g.y0*this.d)),t.setTransform(this.d,0,0,this.d,0,0)};l(this.fishWater),t.save(),t.strokeStyle="rgba(232,252,248,0.22)",t.lineCap="round",t.lineWidth=2.4*e;for(let g of this.ripples){let p=(g.x+r*g.sp)%(n+80)-40,f=g.y+Math.sin(r*.8+g.ph)*6*e,w=g.l*(.7+.3*Math.sin(r*1.3+g.ph));t.globalAlpha=.5+.5*Math.sin(r*.9+g.ph),t.beginPath(),t.moveTo(p-w/2,f),t.quadraticCurveTo(p,f-5*e,p+w/2,f),t.stroke()}t.restore();for(let g of this.fish){let p=this.silhouette(g.d.img,"#173c46"),f=g.d.len*e,w=f*p.height/p.width;t.save(),t.globalAlpha=(g.mode==="hooked"?.75:.42)*g.alpha,t.translate(g.x,g.y),t.rotate(g.a+Math.sin(g.ph)*(g.v>5?.08:.03)),Math.cos(g.a)<0&&t.scale(1,-1),t.drawImage(p,-f/2,-w/2,f,w),t.restore()}for(let g of this.pads)this.img(t,"mp_lilypad",g.x,g.y+Math.sin(r*.8+g.r)*2*e,g.h,{rot:g.r+Math.sin(r*.4+g.r)*.06});t.save(),t.strokeStyle="rgba(240,255,250,0.55)",t.lineWidth=3*e,t.beginPath();for(let g=0;g<=n;g+=20){let p=a+Math.sin(g*.02)*10*e+Math.sin(g*.051)*6*e+4*e+Math.sin(r*1.5+g*.03)*1.5*e;g?t.lineTo(g,p):t.moveTo(g,p)}t.stroke(),t.restore(),l(this.fishBank),l(this.fishDock),this.bucket&&this.pill(t,`x${this.bucket}`,n*.13+58*e,s-120*e,{size:16});let c=this.bob,h=[...this.tip0],d=c?c.x:this.ax,u=c?c.y:this.ay;h[0]=Xe(h[0],d,.16),h[1]=Xe(h[1],Math.min(u,s*.62),.12),this.state==="reel"&&(h[0]+=Math.sin(this.t*30)*6*e,h[1]+=30*e);let m=null,x=null;if(c){if(this.state==="cast"){let D=Es(Math.min(1,this.castT));m=Xe(h[0],c.x,D),x=Xe(h[1],c.y,D)-Math.sin(D*Math.PI)*120*e}else m=c.x,x=c.y;let g=this.state==="cast",p=!g&&c.under,f=64*e,w=g?0:Math.sin(c.t*2.4)*1.5*e+c.dip*(.32*f)/(14*e),P=x+w-.1*f,S=[m+.02*f,P-.46*f];g?this.img(t,"mp_bobber",m,P,f):this.floatInWater(t,m,x,P,f,p),t.save(),t.strokeStyle="rgba(250,250,240,0.85)",t.lineWidth=1.6*e;let T=(h[0]+S[0])/2,E=(h[1]+S[1])/2+(1-this.tension)*40*e;t.beginPath(),t.moveTo(h[0],h[1]),t.quadraticCurveTo(T,E,S[0],S[1]),t.stroke(),t.restore()}if(this.drawRod(t,h),!c&&this.state==="aim"&&!this.card&&this.aimMode!=="touch"){let g=Li(this.ax,50*e,n-50*e),p=Li(this.ay,a+40*e,o-40*e);t.save(),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=2.5*e,t.setLineDash([6*e,6*e]),t.lineDashOffset=-r*20,t.beginPath(),t.ellipse(g,p,26*e,11*e,0,0,le),t.stroke(),t.restore()}}floatInWater(t,e,n,s,r,a){let o=this.S,l=this.t,c=r*75/90,h=x=>{x.beginPath(),x.rect(e-c,n,c*2,r*1.5),x.clip()};t.save(),h(t);let d=e+Math.sin(l*3)*1.2*o,u=s+1.5*o;this.img(t,"mp_bobber",d,u,r,{sy:.92,alpha:.55}),t.globalAlpha=.5,t.translate(d,u),t.scale(1,.92),t.drawImage(this.silhouette("mp_bobber","#2f6f73"),-c/2,-r/2,c,r),t.restore(),t.save(),t.beginPath(),t.rect(e-c,n-r*1.5,c*2,r*1.5),t.clip(),this.img(t,"mp_bobber",e,s,r),t.restore();let m=(a?.32:.56)*c;t.save(),t.strokeStyle="rgba(240,255,250,0.7)",t.lineWidth=1.6*o,t.beginPath(),t.ellipse(e,n,m,m*.3,0,0,le),t.stroke();for(let x=0;x<2;x++){let g=(l*(a?1.4:.45)+x*.5)%1;t.globalAlpha=(1-g)*.55,t.lineWidth=1.8*o,t.beginPath(),t.ellipse(e,n,m*(1+g*1.6),m*.3*(1+g*1.6),0,0,le),t.stroke()}t.restore()}drawRod(t,e){let n=this.S,s=this.W,r=this.H,a=[s*.7,r+12*n],o=e[0]-a[0],l=e[1]-a[1],c=Math.hypot(o,l),h=-l/c,d=o/c,u=(14+this.tension*70)*n,m=(a[0]+e[0])/2+h*u,x=(a[1]+e[1])/2+d*u+this.tension*30*n,g=p=>[(1-p)**2*a[0]+2*(1-p)*p*m+p*p*e[0],(1-p)**2*a[1]+2*(1-p)*p*x+p*p*e[1]];t.save(),t.lineCap="round";for(let[p,f]of[[26,"#3b2418"],[19,"#a7c46a"]]){t.strokeStyle=f;for(let w=0;w<24;w++){let P=g(w/24),S=g((w+1)/24);t.lineWidth=p*n*(1-w/24*.62),t.beginPath(),t.moveTo(P[0],P[1]),t.lineTo(S[0],S[1]),t.stroke()}}t.strokeStyle="#5f7f34";for(let p of[.18,.36,.52,.66,.78,.88]){let f=g(p),w=g(p+.01),P=w[1]-f[1],S=-(w[0]-f[0]),T=Math.hypot(P,S)||1,E=10*n*(1-p*.62);t.lineWidth=3*n,t.beginPath(),t.moveTo(f[0]-P/T*E,f[1]-S/T*E),t.lineTo(f[0]+P/T*E,f[1]+S/T*E),t.stroke()}t.restore();for(let[p,f]of[[.32,38],[.15,42]]){let w=g(p);t.save(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(w[0]+18*n,w[1]+26*n,f*1.25*n+3,f*.9*n+3,-.5,0,le),t.fill(),t.fillStyle="#5b3f7c",t.beginPath(),t.ellipse(w[0]+18*n,w[1]+26*n,f*1.25*n,f*.9*n,-.5,0,le),t.fill(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(w[0],w[1],f*.62*n+3,f*.5*n+3,-.6,0,le),t.fill(),t.fillStyle="#f3cfa8",t.beginPath(),t.ellipse(w[0],w[1],f*.62*n,f*.5*n,-.6,0,le),t.fill(),t.restore()}}};function vp(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Ey=20*6e4,yp=8*6e4,Ay=2,nc=class{constructor(t,e){this.world=t,G.wild||(G.wild={berry:[],bug:[],fish:[]}),this.berries=Vl.map(([n,s],r)=>({i:r,x:n,z:s,spr:e.props.berries[r],full:null,pop:0,tw:r*1.3})),this.bugs=Yh.map(([n,s],r)=>({i:r,hx:n,hz:s,x:n,z:s,y:.9,ph:r*1.7,dir:1,kind:null,scare:0,away:null,spr:t.sprite("moth",Ut("moth",1.4),{x:n,z:s,y:.9,shadow:.3})}))}kind(t){return this.world.night>.5?"glowbug":Zf[t]||"moth"}berryLeft(t){let e=G.wild.berry[t];return e?Math.max(0,e+Ey-fe()):0}bugLeft(t){let e=G.wild.bug[t];return e?Math.max(0,e+yp-fe()):0}update(t,e){let n=this.world;for(let s of this.berries){let r=this.berryLeft(s.i)===0;r!==s.full&&(s.full===!1&&(s.pop=.5,n.sparkle(s.x,.8,s.z,12,"#ffd0d8")),s.full=r,s.spr.set(r?"berry_full":"berry_bare")),s.pop=Math.max(0,s.pop-t*1.5);let a=s.pop>0?Math.sin(s.pop*16)*s.pop*.3:0,o=r?Math.max(0,Math.sin(e*1.9+s.tw))**8*.05:0;s.spr.sx=1+a+o,s.spr.sy=1-a*.7+o*.4,s.spr.sync(),r&&Math.random()<t*.5&&n.glow.add({x:s.x+(Math.random()-.5)*1.2,y:.5+Math.random()*.8,z:s.z+.1,vx:0,vy:.3,vz:0,life:1,s:3+Math.random()*3,c:"#ffe0e6",a:.85,k:1,fadeIn:.2})}for(let s of this.bugs){let r=this.kind(s.i),a=this.bugLeft(s.i)>0;if(a!==s.away&&(s.away&&!a&&n.sparkle(s.hx,1,s.hz,6,r==="glowbug"?"#e6ff9a":"#f4e6ff"),s.away=a,s.spr.visible=!a),a)continue;s.kind!==r&&(s.kind=r,s.spr.set(r==="ladybug"?"mb_ladybug":r),s.spr.h=r==="ladybug"?.4:Ut(r,r==="moth"?1.4:1.7),s.spr.mat.uniforms.uEmit.value=r==="glowbug"?.85:0),s.ph+=t*(1+s.scare*2.2);let o=.85+s.scare*1.3,l=s.hx+Math.sin(s.ph*.8)*o,c=s.hz+Math.sin(s.ph*1.6)*o*.42;Math.abs(l-s.x)>.002&&(s.dir=l>s.x?1:-1),s.x=l,s.z=c,s.y=.75+Math.sin(s.ph*3.1)*.16+s.scare*.6,s.scare=Math.max(0,s.scare-t*.55),r==="moth"?(s.spr.sx=.5+.5*Math.abs(Math.sin(e*15+s.i)),s.spr.sy=1):r==="ladybug"?(s.spr.sx=1+Math.sin(e*22+s.i)*.06,s.spr.sy=1):(s.spr.sx=1,s.spr.sy=1+Math.sin(e*6+s.i)*.05),s.spr.flip=s.dir<0,s.spr.setPos(s.x,s.z,s.y),r==="glowbug"&&Math.random()<t*9&&n.glow.add({x:s.x+(Math.random()-.5)*.15,y:s.y+.12,z:s.z+.05,vx:0,vy:.05,vz:0,life:.9,s:7+Math.random()*5,c:"#dcff7a",a:.8,k:0,fadeIn:.1,fadePow:2})}}nearBerry(t,e,n=1.6){let s=null,r=n;for(let a of this.berries){let o=Math.hypot(a.x-t,(a.z+.5-e)*1.25);o<r&&(r=o,s=a)}return s}nearBug(t,e,n=1.7){let s=null,r=n;for(let a of this.bugs){if(a.away)continue;let o=Math.hypot(a.x-t,(a.z-e)*1.25);o<r&&(r=o,s=a)}return s}pick(t){if(this.berryLeft(t)>0)return 0;let e=this.berries[t];return G.wild.berry[t]=fe(),e.pop=.6,this.world.burst(e.x,.7,e.z+.2,"#c8455a",10),this.world.dust(e.x,e.z+.3,4,"#6d8a3a"),this.update(0,0),Ay}markCaught(t){G.wild.bug[t.i]=fe(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff"),this.update(0,0)}markFled(t){G.wild.bug[t.i]=fe()-yp+12e4,this.update(0,0)}tryCatch(t,e,n){if(t.away)return null;if(!(Math.hypot(t.x-e,(t.z-n)*1.25)<1.5))return t.scare=1,null;G.wild.bug[t.i]=fe(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff");let r=t.kind;return this.update(0,0),r}};var Xn={head:[.53,.885],head_back:[.49,.94],arm:[.5,.1],leg:[.38,.08],body:{neck:[.53,.05],shN:[.33,.24],shF:[.8,.24],hipN:[.42,.8],hipF:[.63,.78]},body_back:{neck:[.52,.03],shN:[.24,.24],shF:[.76,.24],hipN:[.38,.8],hipF:[.62,.8]}},ou=560,Ea=470,lu=Ea-4,Mp=426,Sn=(i,t,e)=>i+(t-i)*e,hu=i=>i*i*(3-2*i),nn={swing:.6,lift:16,arm:.9,lean:.12,bounce:.19,squash:.012,rock:.045,headBob:6,kick:.45,flare:.4,stepRate:9.5,breathe:12},ic=[[0,0,0,0,0],[.16,1.12,.02,1.12,.56],[.26,1,.012,1,.5],[.5,1,.012,1,.48],[.62,0,-.015,-1,-.12],[.74,0,-.012,-1,-.12],[1,0,0,0,0]];function cu(i){let t=0;for(;t<ic.length-2&&i>ic[t+1][0];)t++;let e=ic[t],n=ic[t+1],s=hu(Math.max(0,Math.min(1,(i-e[0])/(n[0]-e[0]))));return{crouch:Sn(e[1],n[1],s),sq:Sn(e[2],n[2],s),arm:Sn(e[3],n[3],s),lean:Sn(e[4],n[4],s)}}var bp=new Map;function Cy(i,t=.4){if(!i)return i;let e=bp.get(i);if(e)return e;e=document.createElement("canvas"),e.width=i.width,e.height=i.height;let n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data,a=e.width,o=e.height,l=new Array(o).fill(0);for(let d=0;d<o;d++){let u=0;for(let m=0;m<a;m++)r[(d*a+m)*4+3]>128&&u++;l[d]=u}let c=Math.max(...l),h=o-1;for(;h>o*.6&&l[h]<c*t;){for(let d=0;d<a;d++)r[(h*a+d)*4+3]=0;h--}for(let d=1;d<=3&&h-d+1>0;d++){let u=h-d+1,m=d/4;for(let x=0;x<a;x++)r[(u*a+x)*4+3]*=m}return n.putImageData(s,0,0),bp.set(i,e),e}var Sr=class{constructor(t=document.createElement("canvas")){this.c=t,t.width=ou,t.height=Ea,this.g=t.getContext("2d"),this.t=Math.random()*10,this.ph=0,this.amp=0,this.blinkIn=1.5+Math.random()*3,this.blinkT=0,this.lean=0,this.headLag=0,this.pose=null,this.poseT=0,this.poseDur=1,this.beat=cu(0),this.out={lift:0,sq:0}}part(t){return oe["rw_"+t]}update(t,{speed01:e=0,back:n=!1,stir:s=!1,pose:r=null,poseT:a=0,poseDur:o=1}={}){this.t+=t,this.amp=Sn(this.amp,Math.min(1,e),Math.min(1,t*10)),this.amp>.02?this.ph+=t*nn.stepRate*Math.max(.35,e):this.ph=Sn(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.13,this.blinkIn=2.2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t);let l=this.beat=r==="witch_pick"&&o>0?cu(Math.min(1,1-a/o)):cu(0),c=this.amp*nn.lean+l.lean+(s?.06:0),h=this.lean;this.lean=r==="witch_pick"?c:Sn(this.lean,c,Math.min(1,t*9)),this.headLag=Sn(this.headLag,-(this.lean-h)/Math.max(t,.001)*.06,Math.min(1,t*6));let d=this.up=Math.cos(this.ph)**2;this.out.lift=d*nn.bounce*this.amp,this.out.sq=(.5-d)*2*nn.squash*this.amp+l.sq,this.draw({back:n,stir:s,pick:l.crouch,arm:l.arm})}draw({back:t,stir:e,pick:n,arm:s=0}){let r=this.g,a=this.t,o=this.amp,l=Math.sin(this.ph),c=Math.cos(this.ph);r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,ou,Ea);let h=t?"body_back":"body",d=Xn[h],u=this.part(h),m=this.part("leg"),x=this.part("arm");if(!u||!m||!x)return;let g=ou*.5,p=l*nn.rock*o;r.translate(g,lu),r.rotate(p),r.translate(-g,-lu);let f=nn.swing*o,w=t?l*f:-l*f,P=t?-l*f:l*f,S=Math.max(0,t?-c:c)*nn.lift*o,T=Math.max(0,t?c:-c)*nn.lift*o;t||(w+=(S/nn.lift)**2*nn.kick,P+=(T/nn.lift)**2*nn.kick),n&&(w=Sn(w,t?.4:-.4,n),P=Sn(P,t?-.3:.3,n));let E=(1-Xn.leg[1])*m.height,D=lu-E*Math.max(Math.cos(w),Math.cos(P))+n*6,y=(1-o)*Math.sin(a*2.4)*.014,M=a%2.4/2.4,R=(1-o)*(1-n)*nn.breathe*(M<.625?hu(M/.625):1-hu((M-.625)/.375)),U=g-u.width*.5,O=D-d.hipN[1]*u.height,N=tt=>[U+d[tt][0]*u.width,O+d[tt][1]*u.height],C=[g,D],F=tt=>{r.save(),r.translate(C[0],C[1]+R),r.rotate(this.lean+Math.sin(this.ph*2)*.015*o),r.scale(1,1+y),r.translate(-C[0],-C[1]),tt(),r.restore()},H=(tt,ut,Y,et=0,vt=0)=>{r.save(),r.translate(Y[0],Y[1]+vt),r.rotate(et),r.drawImage(tt,-ut[0]*tt.width,-ut[1]*tt.height),r.restore()},W=Math.sin(a*1.6)*.04*(1-o),K=l*nn.arm*o*(t?-1:1)+W,v=-l*nn.arm*.8*o*(t?-1:1)-W,A=(this.up||0)*nn.flare*o;K-=A,v+=A,e&&(K=-1.15+Math.sin(a*7)*.35,v=-.35+Math.sin(a*7+1)*.12),s>0?(K=Sn(K,-.35-this.lean,s),v=Sn(v,.7,s)):s<0&&(K=Sn(K,-1.55-this.lean,-s),v=Sn(v,-.5,-s));let I=this.headLag+Math.sin(this.ph*2-.8)*.05*o+Math.sin(a*1.1)*.025*(1-o)+n*.22+Math.min(0,s)*.12+(e?.06:0),V=Math.sin(this.ph*2-.9)*nn.headBob*o,j=t?this.part("head_back"):Cy(this.part(this.blinkT>0?"blink":"head")),ht=t?Xn.head_back:Xn.head;t?(F(()=>{H(x,Xn.arm,N("shN"),K),H(x,Xn.arm,N("shF"),v)}),H(m,Xn.leg,[N("hipF")[0],D],P,-T),H(m,Xn.leg,[N("hipN")[0],D],w,-S),F(()=>{r.drawImage(u,U,O),H(j,ht,N("neck"),I,V)})):(F(()=>H(x,Xn.arm,N("shF"),v)),H(m,Xn.leg,[N("hipF")[0],D],P,-T),H(m,Xn.leg,[N("hipN")[0],D],w,-S),F(()=>{r.drawImage(u,U,O),H(j,ht,N("neck"),I,V),H(x,Xn.arm,N("shN"),K)}))}};var Ry=i=>i*i*(3-2*i),Py=(i,t,e)=>i+(t-i)*e,sc=class{constructor(t,e,n,s){this.world=t,this.S=e,this.spr=t.sprite("witch_idle",1.75*Ea/Mp,{x:n,z:s,shadow:1,shadowK:.7}),this.rig=new Sr,this.spr.useCanvas(this.rig.c),this.vx=0,this.vz=0,this.face=1,this.flipT=1,this.flipFrom=1,this.back=!1,this.stepN=0,this.pose=null,this.poseT=0,this.poseDur=1,this.squash=0,this.frozen=!1,this.speed=4.8,this.goto=null,this.gotoT=0}walkTo(t,e,n,s=1.2){this.goto=[t,e],this.gotoT=s,this.lookX=n}lookAt(t){let e=t>this.x?1:-1;e!==this.face&&(this.flipFrom=this.face,this.face=e,this.flipT=0)}get x(){return this.spr.x}get z(){return this.spr.z}setPose(t,e=.38){this.pose=t,this.poseT=this.poseDur=e,this.squash=.12}hop(){this.squash=.3}update(t,e){let n=this.frozen?0:e.x,s=this.frozen?0:e.z;if(this.goto){let p=this.goto[0]-this.x,f=this.goto[1]-this.z,w=Math.hypot(p,f);if(this.gotoT-=t,w<.1||this.gotoT<=0)this.goto=null,this.vx=this.vz=0,this.lookX!=null&&(this.back=!1,this.lookAt(this.lookX));else{let P=Math.min(1,w*1.8)/w;n=p*P,s=f*P}}let r=Math.hypot(n,s);r>1&&(n/=r,s/=r);let a=r>.05?14:18;this.vx+=(n*this.speed-this.vx)*Math.min(1,a*t),this.vz+=(s*this.speed-this.vz)*Math.min(1,a*t);let o=this.x+this.vx*t,l=this.z+this.vz*t;Zh(this.S,o,this.z)&&(o=this.x,this.vx*=.3),Zh(this.S,o,l)&&(l=this.z,this.vz*=.3),this.spr.mesh.position.x=o,this.spr.mesh.position.z=l;let c=Math.hypot(this.vx,this.vz),h=c>.6;if(Math.abs(this.vx)>.5){let p=this.vx>0?1:-1;p!==this.face&&(this.flipFrom=this.face,this.face=p,this.flipT=0)}Math.abs(this.vz)>.8&&(this.back=this.vz<-.3&&Math.abs(this.vz)>Math.abs(this.vx)*.6),Math.abs(this.vx)>1.2&&Math.abs(this.vz)<1&&(this.back=!1),this.flipT=Math.min(1,this.flipT+t/.07),this.poseT>0&&(this.poseT-=t,this.poseT<=0&&(this.pose=null));let d=this.rig;d.update(t,{speed01:h?c/this.speed:0,back:this.back,pose:this.pose,poseT:Math.max(0,this.poseT),poseDur:this.poseDur}),this.spr.refresh();let u=Math.floor(d.ph/Math.PI-.5);u!==this.stepN&&(this.stepN=u,h&&(ct.step(ga(this.world,this.x,this.z)),this.world.puff(this.x+this.face*.12,this.z+.06))),this.squash=Math.max(0,this.squash-t*1.6);let m=this.animExtra(d);this.spr.mesh.position.y=m.lift;let x=this.flipT<1?Math.cos(Ry(this.flipT)*Math.PI)*-1:1,g=this.flipT<1?this.flipT<.5?this.flipFrom*Math.abs(x):this.face*Math.abs(x):this.face;this.spr.flip=!1,this.spr.sx=Math.max(.06,Math.abs(g))*Math.sign(g||1)*m.sx,this.spr.sy=m.sy,this.spr.sync()}animExtra(t=this.rig){let e=Math.sin(this.squash*10)*this.squash*.5*(t===this.rig?1:0)+t.out.sq;return{lift:t.out.lift,sx:1+e,sy:1-e}}},os=class{constructor(t,e,n,s,r,a={}){this.world=t,this.base=e,this.talkName=a.talk||null,a.rig&&ha[a.rig]?(this.pup=new Ms(a.rig),this.spr=t.sprite(`rn_${a.rig}_head`,this.pup.worldH,{x:s,z:r,shadow:ha[a.rig].h*.5,shadowK:.7}),this.spr.useCanvas(this.pup.c),this.native=1,this.drawT=1):(this.spr=t.sprite(e,n,{x:s,z:r,shadow:n*.5}),this.native=/^crow/.test(e)?-1:1),this.path=[],this.speed=a.speed||2.2,this.t=Math.random()*10,this.face=a.face||1,this.fx=this.face,this.talking=0,this.onArrive=null,this.hopT=0,this.cheerT=0}get x(){return this.spr.x}get z(){return this.spr.z}goTo(t,e){this.path=t.slice(),this.onArrive=e||null}get moving(){return this.path.length>0}hop(){this.hopT=.45}cheer(t=1.4){this.cheerT=t,this.hop()}update(t){this.t+=t;let e=!1;if(this.path.length){let[r,a]=this.path[0],o=r-this.x,l=a-this.z,c=Math.hypot(o,l);if(c<.08){if(this.path.shift(),!this.path.length&&this.onArrive){let h=this.onArrive;this.onArrive=null,h()}}else{let h=Math.min(c,this.speed*t);this.spr.mesh.position.x+=o/c*h,this.spr.mesh.position.z+=l/c*h,Math.abs(o)>.05&&(this.face=o>0?1:-1),e=!0}}this.talking=Math.max(0,this.talking-t),this.hopT=Math.max(0,this.hopT-t),this.cheerT=Math.max(0,this.cheerT-t);let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.35:0;if(this.pup){let r=this.pup,a=this.spr.visible&&Math.abs(this.x-this.world.camera.position.x)<18;this.drawT+=t;let o=a&&this.drawT>=1/30;r.update(t,{speed01:e?Math.min(1,this.speed/2.4):0,talking:this.talking>0,happy:this.cheerT>0,draw:o}),o&&(this.drawT=0,this.spr.refresh()),this.spr.mesh.position.y=n+r.out.lift,this.fx=Py(this.fx,this.face,Math.min(1,t*12)),this.spr.sx=Math.max(.06,Math.abs(this.fx))*Math.sign(this.fx||1)*(1+r.out.sq),this.spr.sy=1-r.out.sq,this.spr.sync();return}let s=e?Math.abs(Math.sin(this.t*9))*.08:0;this.spr.mesh.position.y=s+n,this.talkName&&this.spr.set(this.talking>0&&Math.floor(this.t*6)%2?this.talkName:this.base),this.spr.sx=this.face*this.native*(e?1+Math.sin(this.t*18)*.02:1),this.spr.sy=1+(e?Math.sin(this.t*18)*.03:Math.sin(this.t*2+1)*.015),this.spr.sync()}},rc=class{constructor(t){this.world=t,this.spr=t.sprite("cat",.72,{x:lt.cat[0],z:lt.cat[1],shadow:.6}),this.t=0,this.hopT=0,this.atStall=!1}get x(){return this.spr.x}get z(){return this.spr.z}hop(){this.hopT=.45}moveToStall(t){if(t===this.atStall)return;this.atStall=t;let[e,n]=t?[lt.myStall[0]+.9,lt.myStall[1]+.35]:lt.cat;this.world.sparkle(this.x,.3,this.z,10,"#e9d6ff"),this.spr.setPos(e,n),this.world.sparkle(e,.3,n,10,"#e9d6ff")}update(t){this.t+=t,this.hopT=Math.max(0,this.hopT-t);let e=this.world.night>.6&&!this.atStall;this.spr.set(e?"cat_sleep":"cat"),this.spr.h=e?.5:.72;let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.3:0;this.spr.mesh.position.y=n,this.spr.sy=1+Math.sin(this.t*(e?1.2:2.2))*(e?.035:.02),this.spr.sx=-1,this.spr.sync(),e&&Math.random()<t*.4&&this.world.soft.add({x:this.x+.2,y:.6,z:this.z,vx:.15,vy:.35,vz:0,life:2,s:3,c:"#ffffff",a:.7,fadeIn:.3})}},ac=["pip","wren","basil"];function Sp(i,t){let e={};for(let l of t)if(l.stall){let[c,h]=xi[l.id],d=c+1.8,u=h+.15,m=new os(i,l.sprite,1.6,d,u,{face:d<lt.fountain[0]?1:-1,rig:l.rig});m.home=[d,u],e[l.id]=m}let n=[[38,1.8],[45.5,1.6],[44,-2.6],[40,-2.4],[37.5,.6],[46.5,.4],[41,4.6],[43.5,4.8]],s=Object.fromEntries(t.map(l=>[l.id,l])),r=new os(i,s.pip.sprite,1.55,44,2.4,{speed:1.7,rig:s.pip.rig}),a=new os(i,s.bramble.sprite,1.6,39,-1.4,{speed:1.5,rig:s.bramble.rig}),o=new os(i,s.basil.sprite,1.6,46,-1.8,{speed:1.3,rig:s.basil.rig});for(let l of[r,a,o])l.wander=n,l.wait=1+Math.random()*3;return e.pip=r,e.wren=a,e.basil=o,e}function wp(i,t){for(let e of ac){let n=i[e];if(!(!n||n.busy)&&!n.moving&&(n.wait-=t,n.wait<=0)){let s=n.wander[Math.floor(Math.random()*n.wander.length)];n.goTo([[s[0]+(Math.random()-.5),s[1]+(Math.random()-.5)]],()=>{n.wait=2+Math.random()*4})}}}var De={cham:{name:"Chamomile",icon:"i_cham",color:"#f3e7b0",path:[[1.5,1.2],[3.2,1.6]]},lav:{name:"Lavender",icon:"i_lav",color:"#a98be0",path:[[-1.2,-.8],[-2,-2.2],[-3.2,-2.6]]},man:{name:"Mandrake",icon:"i_man",color:"#e8d2a6",path:[[3,0],[4,1.5]]},mush:{name:"Blue Mushroom",short:"Blue Cap",icon:"i_mush",color:"#7fa7e8",path:[[.8,1.5],[-.4,2.6],[.6,4]]},feather:{name:"Owl Feather",short:"Feather",icon:"i_feather",color:"#f2efe8",path:[[-1.6,.6],[-3.4,.4]]},berry:{name:"Wild Berry",short:"Berry",icon:"i_berry",color:"#c8455a",path:[[.9,.9],[2.3,1.4]],wild:!0,from:"Grows wild in Whisperwood."},moth:{name:"Wood Moth",short:"Moth",icon:"i_moth",color:"#d9c8e8",path:[[-1.5,-.3],[-3,-.1],[-3.4,.5]],wild:!0,from:"Caught with your net."},glowbug:{name:"Glowbug",icon:"i_glowbug",color:"#d8f27a",path:[[1.8,.2],[3.6,.75]],wild:!0,from:"Caught with your net, after dark."},ladybug:{name:"Ladybug",icon:"i_ladybug",color:"#d8453a",path:[[.4,1.5],[.7,2.8]],wild:!0,from:"Caught with your net."},beetle:{name:"Moss Beetle",short:"Beetle",icon:"i_beetle",color:"#3f8a6e",path:[[-1.3,-.9],[-2.5,-2.1]],wild:!0,from:"Hides under fallen leaves."},minnow:{name:"Pond Minnow",short:"Minnow",icon:"i_minnow",color:"#9fb8c8",path:[[-1.6,.1],[-3.3,.5]],wild:!0,from:"Caught at Willow Pond."},bluegill:{name:"Bluegill",icon:"i_bluegill",color:"#5a8cc8",path:[[1.2,.5],[2.35,1.4]],wild:!0,from:"Caught at Willow Pond."},carp:{name:"Golden Carp",short:"Carp",icon:"i_carp",color:"#f0a040",path:[[.3,1.8],[.9,3.6],[1.4,5.5]],wild:!0,from:"A rare bite at Willow Pond."}},As=[.6,1.1,1.6],uu=[2.2,1.5,1],jt={sleep:{name:"Sleep Potion",short:"Sleep",medal:"m_moon",potion:"p_round",at:[-5.1,-4.3],base:60,liquid:"#9b7fe0",hint:"deep in the lower-left fog"},heal:{name:"Healing Potion",short:"Healing",medal:"m_heart",potion:"p_heart",at:[4.7,2.8],base:50,liquid:"#e98aa0",hint:"up and to the right"},glow:{name:"Glow Potion",short:"Glow",medal:"m_sun",potion:"p_gold",at:[7,1.5],base:70,liquid:"#f2c75c",hint:"far to the right"},luck:{name:"Luck Potion",short:"Luck",medal:"m_star",potion:"p_tube",at:[1.4,5.5],base:120,liquid:"#7fd6c4",hint:"north, past the brambles"},calm:{name:"Calm Potion",short:"Calm",medal:"m_drop",potion:"p_tube",at:[-6.6,1],base:55,liquid:"#8cc8f0",hint:"far to the left"}},du=[{at:[-2.4,1.7],r:.95},{at:[3.4,-2.3],r:1.05},{at:[2.9,4.1],r:.8}],Cs=24,Rs=16,Aa={cham:{name:"Chamomile",yield:2,growMin:4,sprite:["cham_0","cham_1","cham_2"]},lav:{name:"Lavender",yield:2,growMin:6,sprite:["lav_0","lav_1","lav_2"]},man:{name:"Mandrake",yield:1,growMin:15,sprite:["man_0","man_1","man_2"]}},_i=[{id:"letter",text:"Read Granny's letter in the mailbox"},{id:"harvest",text:"Harvest herbs in your garden",need:3},{id:"talk",text:"A customer is at your door. Say hello"},{id:"brew",text:"Brew a Sleep Potion at the cauldron"},{id:"deliver",text:"Give the Sleep Potion to Mr. Crow"},{id:"town",text:"Follow the path east to Mossbrook"},{id:"board",text:"Check the discovery board in the square"},{id:"stall",text:"Open your stall. Kuro will mind it"},{id:"buy",text:"Buy a Blue Mushroom from Mira's stall"},{id:"mystery",text:"Something glows in the north fog. Brew it"},{id:"free",text:"Your garden, stall and customers run on the real clock"}],oc=[{id:"mira",name:"Mira",sprite:"pt_bear",rig:"bear",stall:{sprite:"stall_red",title:"Mira's Remedies",line:"Fresh from the north woods! Blue caps are rare this week.",items:[{ing:"mush",price:40,stock:3},{ing:"feather",price:25,stock:2}]}},{id:"juniper",name:"Juniper",sprite:"pt_turtle",rig:"turtle",stall:{sprite:"stall_green",title:"Juniper's Garden",line:"Seeds and sprigs, picked this morning.",items:[{ing:"cham",price:12,stock:5},{ing:"lav",price:15,stock:4}]}},{id:"oz",name:"Oz",sprite:"pt_fish",rig:"fish",stall:{sprite:"stall_blue",title:"Oz's Odd Bottles",line:"Rare roots. Ask about my Glow recipe.",items:[{ing:"man",price:35,stock:2}]}},{id:"pip",name:"Pip",sprite:"pt_duck",rig:"duck"},{id:"bramble",name:"Wren",sprite:"pt_raccoon",rig:"raccoon"},{id:"basil",name:"Basil",sprite:"pt_croc",rig:"croc"}],fu=["anyone selling moon dew?","WTS lavender x10, cheap!","who found Healing first??","the north fog is huge","Kuro is so cute omg","buying blue caps 45 each","my mandrake yelled at me","Glow sells great at night"],pu=[{effect:"heal",who:"Juniper",when:"3 days ago"},{effect:"glow",who:"Oz",when:"yesterday"}],wr=[{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Hello, young witch. I haven't slept in three nights. The owls keep singing. Do you have something to help me sleep?",thanks:"Ah... I can almost hear my pillow calling. Thank you, little witch."},{who:"pip",name:"Pip",sprite:"pt_duck",rig:"duck",want:"heal",ask:"I fell off my broom. Again. Got anything for scraped knees?",thanks:"Wow, it stopped stinging already! You are good at this."},{who:"wren",name:"Wren",sprite:"pt_raccoon",rig:"raccoon",want:"glow",ask:"The forest gets so dark on my way home. Could you make me something that glows?",thanks:"It shines like a tiny moon! I will tell everyone in town."},{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Me again. The owls are back, and louder. Another Sleep Potion, please?",thanks:"Bless you. I shall sleep like a stone."}];var lc=class{constructor(t){this.world=t,this.plots=xa.map((e,n)=>({...e,i:n,spr:t.sprite("cham_0",.6,{x:e.x,z:e.z+.15,shadow:.7,sway:.03}),stage:-1,crop:null,pop:0,tw:Math.random()*4}))}state(t){let e=G.plots[t],n=Aa[e.crop],s=n.growMin*6e4,r=fe()-e.at;return{crop:e.crop,def:n,k:Math.max(0,Math.min(1,r/s)),ready:r>=s,left:s-r}}readyCount(){return this.plots.filter(t=>this.state(t.i).ready).length}update(t,e){for(let n of this.plots){let s=this.state(n.i),r=s.ready?2:s.k<.45?0:1;if(r!==n.stage||s.crop!==n.crop){let l=n.stage>=0&&r>n.stage;n.stage=r,n.crop=s.crop,n.spr.set(s.def.sprite[r]),n.spr.h=Ut(s.def.sprite[r],1.15),n.spr.mat.uniforms.uSway.value=r===0?.02:.05,l&&(n.pop=.5,this.world.sparkle(n.x,.5,n.z,r===2?14:6,r===2?"#fff2a8":"#d8f5b0"))}n.pop=Math.max(0,n.pop-t*1.4);let a=n.pop>0?Math.sin(n.pop*14)*n.pop*.35:0,o=r===2?Math.max(0,Math.sin(e*2.6+n.tw))**6*.06:0;n.spr.sx=1+a+o,n.spr.sy=1-a*.8+o*.5,n.spr.sync(),r===2&&Math.random()<t*.9&&this.world.glow.add({x:n.x+(Math.random()-.5)*.9,y:.4+Math.random()*.7,z:n.z+.1,vx:0,vy:.35,vz:0,life:1.1,s:4+Math.random()*3,c:"#fff1a0",a:.9,k:1,fadeIn:.2})}}harvest(t){let e=this.state(t);if(!e.ready)return null;let n=this.plots[t];return G.plots[t].at=fe(),this.world.burst(n.x,.5,n.z,"#7fb04e",12),this.world.sparkle(n.x,.6,n.z,10,"#fff2a8"),this.world.dust(n.x,n.z+.1,5,"#b48a5a"),n.stage=-1,this.update(0,0),n.pop=.6,{crop:e.crop,n:e.def.yield}}nearest(t,e,n=1.35){let s=null,r=n;for(let a of this.plots){let o=Math.hypot(a.x-t,(a.z-e)*1.2);o<r&&(r=o,s=a)}return s}};var Re=50,mu=Cs*Re,gu=Rs*Re,Nn=(i,t)=>[(i+Cs/2)*Re,(Rs/2-t)*Re],Tr=["Perfect","Fine","Weak"],xu=1.75,Iy=13,_u=["lav","cham","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],Tp="#86c9d0",hc=new Image;hc.src=Jt("ui_arrow_r");var cc={intro:{say:"Mrrp! This is your potion map. Your potion starts at the little bottle. Mr. Crow's Sleep Potion is hiding in the fog, down and to the left.",tap:"Show me",ring:".map-frame",mark:"sleep"},drop:{say:"Lavender pulls a brew down and to the left. Drag one into the cauldron.",ring:'.tile[data-id="lav"]'},path:{say:"See the dotted line? Stirring walks your potion along it, and the fog lifts as it goes.",tap:"Got it",ring:".map-frame",mark:"end"},stir:{say:"Hold Stir, or draw circles in the pot.",ring:".stir"},more:{say:"Not there yet. One more Lavender carries it further.",ring:'.tile[data-id="lav"]'},stir2:{say:"Stir again. I will catch the spoon when you reach it.",ring:".stir",mark:"sleep"},bottle:{say:"Right on it! The closer to the middle, the better the potion. Bottle it!",ring:".bottle"},back:{say:"Oops, you went past. Hold Moon water: it drifts your potion back toward the start.",ring:".water"}},Ra=(i,t,e)=>{let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=a=>Math.round((n>>a&255)*(1-e)+(s>>a&255)*e);return"#"+(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")},Ps=(i,t)=>Ra(i,t>0?"#ffffff":"#1d1430",Math.abs(t));function Ca(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var uc=class{constructor(t,e){this.hooks=e,this.isOpen=!1,this.t=0;let n=this.el=Ca("section","brew hidden");n.innerHTML=`
      <div class="brew-bg"></div>
      <div class="brew-ask hidden"><div class="ribbon sm"><span></span></div><div class="speech sm"><p></p></div></div>
      <div class="brew-stage">
        <canvas class="brew-witch"></canvas>
        <div class="pot">
          <canvas class="liquid"></canvas>
          <img class="pot-img" src="${Jt("cauldron_pot")}" alt="" draggable="false">
          <canvas class="potfx"></canvas>
          <div class="pot-hit"></div>
        </div>
        <div class="shelf"></div>
      </div>
      <div class="brew-side">
        <div class="map-frame">
          <canvas class="mapc"></canvas>
          <div class="ribbon map-title"><span>Potion map</span></div>
        </div>
        <div class="readout"></div>
        <div class="brew-actions">
          <button class="btn-pill water" data-k="Q"><img src="${Jt("i_dew")}" alt=""><span>Moon water</span></button>
          <button class="btn-green stir" data-k="Space"><img src="${Jt("spoon")}" alt=""><span>Hold to stir</span></button>
          <button class="btn-green bottle" disabled><img src="${Jt("bottle")}" alt=""><span>Bottle it</span></button>
        </div>
      </div>
      <button class="btn-pill dump"><span>Dump</span></button>
      <button class="btn-close" aria-label="Close"></button>
      <div class="lesson-ring hidden"><img src="${Jt("ui_arrow_r")}" alt=""></div>
      <img class="lesson-ghost hidden" src="${Jt("i_lav")}" alt="">
      <div class="brew-coach hidden"><img class="coach-cat" src="${Jt("cat")}" alt=""><div class="speech coach-say"><p></p><button class="btn-green coach-ok hidden"><span></span></button></div></div>
      <div class="brew-toast"></div>`,t.appendChild(n),this.$=s=>n.querySelector(s),this.mapc=this.$(".mapc"),this.liq=this.$(".liquid"),this.fx=this.$(".potfx"),this.rig=new Sr(n.querySelector(".brew-witch")),this.potEl=this.$(".pot"),this.base=this.buildBase(),this.fog=document.createElement("canvas"),this.fog.width=mu/2,this.fog.height=gu/2,this.cam={x:0,y:0},this.bubbles=[],this.steam=[],this.drops=[],this.stirHold=!1,this.waterHold=!1,this.stirV=0,this.spoonA=0,this.circleAmt=0,this.wire(),this.reset(!0)}buildBase(){let t=document.createElement("canvas");t.width=mu,t.height=gu;let e=t.getContext("2d");e.drawImage(oe.mapbg,0,0,mu,gu),e.fillStyle="rgba(90,60,40,0.18)";for(let r=-11;r<=11;r++)for(let a=-7;a<=7;a++){let[o,l]=Nn(r,a);e.beginPath(),e.arc(o,l,2,0,7),e.fill()}for(let r of du){let[a,o]=Nn(r.at[0],r.at[1]),l=r.r*Re,c=e.createRadialGradient(a,o,l*.2,a,o,l*1.15);c.addColorStop(0,"rgba(58,92,48,0.75)"),c.addColorStop(.75,"rgba(58,92,48,0.45)"),c.addColorStop(1,"rgba(58,92,48,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,l*1.15,0,7),e.fill(),e.strokeStyle="rgba(40,58,30,0.9)",e.lineWidth=3,e.lineCap="round";for(let d=0;d<9;d++){let u=d*.7+r.r,m=l*(.35+d%3*.22);e.beginPath(),e.arc(a,o,m,u,u+2.2),e.stroke();for(let x=0;x<4;x++){let g=u+x*.55,p=a+Math.cos(g)*m,f=o+Math.sin(g)*m;e.beginPath(),e.moveTo(p,f),e.lineTo(p+Math.cos(g)*9,f+Math.sin(g)*9),e.stroke()}}let h=l*.95;e.drawImage(oe.m_thorn,a-h/2,o-h/2,h,h)}let[n,s]=Nn(0,0);return e.strokeStyle="rgba(90,55,35,0.8)",e.lineWidth=3,e.beginPath(),e.arc(n,s,16,0,7),e.stroke(),e.beginPath(),e.moveTo(n-24,s),e.lineTo(n+24,s),e.moveTo(n,s-24),e.lineTo(n,s+24),e.stroke(),t}rebuildFog(){let t=this.fog.getContext("2d"),e=this.fog.width,n=this.fog.height;t.globalCompositeOperation="source-over",t.clearRect(0,0,e,n),t.fillStyle="rgba(232,226,240,0.8)",t.fillRect(0,0,e,n);let s=9,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<260;a++){let o=r()*e,l=r()*n,c=20+r()*70,h=r(),d=t.createRadialGradient(o,l,0,o,l,c),u=h<.5?`rgba(255,255,255,${.35+h*.5})`:`rgba(170,160,196,${(h-.5)*.45})`;d.addColorStop(0,u),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,l,c,0,7),t.fill()}t.globalCompositeOperation="destination-out",this.cut(0,0,!1),this.cut(.6,.3,!1),this.cut(-.6,-.3,!1);for(let[a,o]of G.fog)this.cut(a,o,!1);t.globalCompositeOperation="source-over"}cut(t,e,n=!0){let s=this.fog.getContext("2d");n&&(s.globalCompositeOperation="destination-out");let r=(t+Cs/2)*Re/2,a=(Rs/2-e)*Re/2,o=xu*Re/2,l=s.createRadialGradient(r,a,o*.35,r,a,o);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.beginPath(),s.arc(r,a,o,0,7),s.fill(),n&&(s.globalCompositeOperation="source-over")}reveal(t,e){let n=this.lastReveal;if(n&&Math.hypot(n[0]-t,n[1]-e)<.22)return;this.lastReveal=[t,e];let s=[Math.round(t*10)/10,Math.round(e*10)/10];G.fog.push(s),G.fog.length>4e3&&G.fog.splice(0,500),this.cut(s[0],s[1]),Math.random()<.18&&ct.reveal();for(let[r,a]of Object.entries(jt))!this.seen[r]&&Math.hypot(a.at[0]-t,a.at[1]-e)<xu+.3&&(this.seen[r]=!0,this.spot(r))}isSeen(t){if(this.seen[t])return!0;let e=jt[t];return G.fog.some(([n,s])=>Math.hypot(e.at[0]-n,e.at[1]-s)<xu)}spot(t){this.flashEffect={id:t,t:0},ct.near(),this.toast(`You spotted <b>${jt[t].name}</b> in the fog`,jt[t].medal)}reset(t=!1){this.pos=[0,0],this.path=[],this.trail=[[0,0]],this.ings=[],this.liquidCol=Tp,this.curdle=0,this.lastReveal=null,this.nearId=null,this.nearTier=-1,this.nearD=null,this.nearAny=null,this.caught={},this.stirLock=!1,this.lockT=0,this.passed=null,this.catchFx=null,t||this.updateUI()}open(t={}){this.ctx=t,this.isOpen=!0,this.t=0,this.reset(!0),this.seen={};for(let n of Object.keys(jt))(this.isSeen(n)||G.discovered[n])&&(this.seen[n]=!0);this.rebuildFog(),this.cam.x=0,this.cam.y=0;let e=this.$(".brew-ask");t.ask?(e.classList.remove("hidden"),e.querySelector(".ribbon span").textContent=t.ask.name,e.querySelector("p").textContent=t.ask.line):e.classList.add("hidden"),this.el.classList.remove("hidden"),this.el.classList.add("opening"),setTimeout(()=>this.el.classList.remove("opening"),600),this.lesson=null,!G.lesson&&!G.discovered.sleep&&((G.inv.lav||0)<2&&(G.inv.lav=2,this.hooks.onInv&&this.hooks.onInv()),t.target||(t.target="sleep")),this.buildShelf(),this.resize(),this.updateUI(),this.lessonGo(!G.lesson&&!G.discovered.sleep?"intro":null),ct.open()}close(){this.isOpen&&(this.isOpen=!1,this.stirHold=this.waterHold=!1,this.el.classList.add("hidden"),me(),ct.close(),this.hooks.onClose&&this.hooks.onClose())}wire(){let t=this.$;t(".btn-close").addEventListener("click",()=>this.close()),t(".dump").addEventListener("click",()=>this.dump()),t(".bottle").addEventListener("click",()=>this.bottle()),t(".coach-ok").addEventListener("click",()=>this.lessonNext());let e=(o,l)=>{let c=d=>{d.preventDefault(),this[l]=!0,o.classList.add("down"),o.setPointerCapture&&d.pointerId!=null&&o.setPointerCapture(d.pointerId)},h=()=>{this[l]=!1,o.classList.remove("down")};o.addEventListener("pointerdown",c),o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};e(t(".stir"),"stirHold"),e(t(".water"),"waterHold");let n=t(".pot-hit"),s=null,r=o=>{let l=this.potEl.getBoundingClientRect();return Math.atan2((o.clientY-(l.top+l.height*.17))*2.6,o.clientX-(l.left+l.width*.5))};n.addEventListener("pointerdown",o=>{s={id:o.pointerId,a:r(o)},n.setPointerCapture(o.pointerId)}),n.addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=r(o),c=l-s.a;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),s.a=l,this.circleAmt+=Math.abs(c)*.32,this.spoonA=l,this.circleAt=this.t});let a=()=>{s=null};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),window.addEventListener("resize",()=>this.isOpen&&this.resize())}buildShelf(){let t=this.$(".shelf");t.innerHTML="";for(let e of _u){let n=De[e],s=G.inv[e]||0;if(n.wild&&!s&&!G.found[e])continue;let r=Ca("div","tile"+(s?"":" empty"));r.dataset.id=e,r.innerHTML=`<img src="${Jt(n.icon)}" alt="" draggable="false"><b class="count">${s}</b><i class="nm">${n.short||n.name}</i>`,t.appendChild(r),r.addEventListener("pointerdown",a=>this.dragStart(a,e,r))}}refreshShelf(){for(let t of this.$(".shelf").children){let e=G.inv[t.dataset.id]||0;t.querySelector(".count").textContent=e,t.classList.toggle("empty",!e)}}dragStart(t,e,n){if(t.preventDefault(),this.lessonLocked(e)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),ct.click(),this.coachBump();return}if(!(G.inv[e]>0)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),ct.click(),this.toast(`No ${De[e].name} left. Grow or buy more`);return}let s=Ca("img","drag-ghost");s.src=Jt(De[e].icon),document.body.appendChild(s);let r=t.clientX,a=t.clientY,o=0,l=(u,m)=>{s.style.transform=`translate(${u-40}px, ${m-40}px) rotate(${Math.sin(performance.now()/120)*8}deg)`};l(r,a),ct.pop(),n.classList.add("lift");let c=(u,m)=>{let x=this.potEl.getBoundingClientRect();return u>x.left&&u<x.right&&m>x.top-x.height*.3&&m<x.top+x.height*.6},h=u=>{o=Math.max(o,Math.hypot(u.clientX-r,u.clientY-a)),l(u.clientX,u.clientY),this.potEl.classList.toggle("target",c(u.clientX,u.clientY))},d=u=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),n.classList.remove("lift"),this.potEl.classList.remove("target");let m=o<10;if(m||c(u.clientX,u.clientY))this.drop(e,s,m?null:[u.clientX,u.clientY]);else{s.classList.add("back");let x=n.getBoundingClientRect();s.style.transform=`translate(${x.left+x.width/2-40}px, ${x.top+x.height/2-40}px) scale(0.6)`,setTimeout(()=>s.remove(),250)}};window.addEventListener("pointermove",h),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)}drop(t,e,n){let s=this.potEl.getBoundingClientRect(),r=s.left+s.width*.5-40,a=s.top+s.height*.12-40;e.classList.add("fall"),e.style.transform=`translate(${r}px, ${a}px) rotate(200deg) scale(0.55)`,G.inv[t]--,this.refreshShelf(),this.hooks.onInv&&this.hooks.onInv(),setTimeout(()=>{e.remove(),this.addIngredient(t)},n?230:330)}addIngredient(t){let e=De[t],n=this.path.length?this.path[this.path.length-1]:this.pos;for(let[r,a]of e.path)this.path.push([n[0]+r,n[1]+a]);this.ings.push(t),this.liquidCol=Ra(this.liquidCol,e.color,this.ings.length===1?.65:.45),ct.splash(),Be(12),this.splash(e.color),this.pathFlash=1,this.updateUI();let s=this.lesson;(s==="drop"||s==="more"||s==="path"||s==="stir")&&this.lessonGo(this.ings.length>=2?"stir2":"path")}sweetStop(t,e,n,s,r,a){let o=Math.hypot(n-t,s-e);if(o<1e-6)return null;let l=(n-t)/o,c=(s-e)/o,h=null;for(let[d,u]of Object.entries(jt)){if(this.caught[a+d])continue;let m=(u.at[0]-t)*l+(u.at[1]-e)*c;m<=.002||m>r||Math.hypot(u.at[0]-(t+l*m),u.at[1]-(e+c*m))>=As[1]||(!h||m<h.s)&&(h={s:m,id:d})}return h}moveAlong(t){for(;t>0&&this.path.length;){let[e,n]=this.path[0],[s,r]=this.pos,a=Math.hypot(e-s,n-r),o=this.sweetStop(s,r,e,n,Math.min(a,t),"s"),l=o?o.s:Math.min(a,t);if(l>=a-1e-9?(this.pos=[e,n],this.path.shift()):this.pos=[s+(e-s)/a*l,r+(n-r)/a*l],t-=Math.max(l,1e-6),this.afterMove(),this.curdle)return;if(o){this.catchSpoon(o.id,"s");return}}}pullWater(t){let[e,n]=this.pos,s=Math.hypot(e,n);if(s<.01)return;let r=this.sweetStop(e,n,0,0,Math.min(t,s),"w"),a=(r?r.s:Math.min(t,s))/s,o=-e*a,l=-n*a;this.pos=[e+o,n+l];for(let c of this.path)c[0]+=o,c[1]+=l;this.liquidCol=Ra(this.liquidCol,Tp,.02),this.afterMove(),r&&this.catchSpoon(r.id,"w")}catchSpoon(t,e){this.caught[e+t]=!0,this.stirV=0,this.stirLock=this.stirHold||this.waterHold,this.lockT=.7,this.catchFx={at:this.pos.slice(),t:0},ct.near(),setTimeout(()=>ct.pop(),90),Be(18);let n=this.$(".readout");n.classList.remove("hot"),n.offsetWidth,n.classList.add("hot");for(let s of[this.$(".stir"),this.$(".water")])s.classList.remove("down");this.lesson&&t==="sleep"&&this.nearId==="sleep"&&this.lessonGo("bottle")}afterMove(){let[t,e]=this.pos,n=this.trail[this.trail.length-1];Math.hypot(n[0]-t,n[1]-e)>.08&&this.trail.push([t,e]),this.reveal(t,e);for(let o of du)if(Math.hypot(o.at[0]-t,o.at[1]-e)<o.r*.82){this.curdleNow();return}let s=null,r=1e9;for(let[o,l]of Object.entries(jt)){let c=Math.hypot(l.at[0]-t,l.at[1]-e);c<r&&(r=c,s=o)}let a=r<As[0]?0:r<As[1]?1:r<As[2]?2:-1;(a!==this.nearTier||s!==this.nearId)&&(a>=0&&(this.nearTier<0||a<this.nearTier)&&(ct.near(),Be(8)),a<0&&this.nearTier>=0&&(this.passed=this.nearId),a>=0&&(this.passed=null),this.nearTier=a,this.nearId=a>=0?s:null,this.updateUI(),this.lesson==="bottle"&&(a<0||a===2)?this.lessonGo("back"):this.lesson==="back"&&s==="sleep"&&a>=0&&a<=1&&this.lessonGo("bottle")),this.nearD=r,this.nearAny=s}curdleNow(){this.curdle=1.4,this.stirHold=!1,this.stirV=0,ct.fail(),Be(40),this.liquidCol="#6d6a4a",this.el.classList.remove("shake"),this.el.offsetWidth,this.el.classList.add("shake"),this.toast("The brew snagged on the thorns and curdled"),this.path=[],setTimeout(()=>{this.reset(),this.updateUI()},1300)}dump(){this.ings.length&&(ct.pour(),this.splash("#cfd8e6"),this.reset(),this.updateUI(),this.toast("Poured out. The cauldron is fresh again"))}bottle(){if(this.nearTier<0||!this.nearId)return;let t=this.nearId,e=this.nearTier,n=this.ings.slice(),s=jt[t];ct.bottle(),Be(25),this.lesson&&(this.lessonGo(null),G.lesson=1,G.brewTut=3,me());let r=this.potEl.getBoundingClientRect(),a=Ca("img","rise-bottle");a.src=Jt(s.potion),a.style.left=r.left+r.width/2-45+"px",a.style.top=r.top+r.height*.05+"px",document.body.appendChild(a);for(let o=0;o<24;o++)this.steam.push({x:.5+(Math.random()-.5)*.4,y:.17,vx:(Math.random()-.5)*.4,vy:-.4-Math.random()*.6,life:1.2,t:0,s:6+Math.random()*8,c:"#fff6c8",glow:1});setTimeout(()=>a.remove(),1600),this.reset(),this.updateUI(),this.hooks.onBottle(t,e,n,a)}update(t){if(!this.isOpen)return;this.t+=t,this.curdle>0&&(this.curdle=Math.max(0,this.curdle-t));let e=this.nearD!=null&&this.nearD<As[1]?.5:1;!this.stirHold&&!this.waterHold&&(this.stirLock=!1),this.lockT=Math.max(0,this.lockT-t);let n=this.stirLock||this.lockT>0,s=this.stirHold&&!n&&this.path.length&&!this.curdle?1.7*e:0;this.stirV+=(s-this.stirV)*Math.min(1,t*(s>this.stirV?5:12));let r=n?0:this.stirV*t+this.circleAmt*e;this.circleAmt=0,r>0&&this.path.length&&!this.curdle&&(this.moveAlong(r),this.stirHold&&(this.spoonA+=t*7),this.stirSound=(this.stirSound||0)+r,this.stirSound>.5&&(this.stirSound=0,ct.stir())),this.waterHold&&!n&&!this.curdle&&(this.pullWater(t*1.1),Math.random()<t*6&&ct.pour()),this.lesson==="path"&&r>0&&this.lessonGo("stir"),(this.lesson==="stir"||this.lesson==="stir2")&&!this.path.length&&this.stirV<.05&&this.lessonGo(this.nearId==="sleep"?"bottle":"more"),this.drawMap(t),this.drawPot(t),this.placeRing()}resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.mapc,this.liq,this.fx]){let n=e.getBoundingClientRect();e.width=Math.max(2,Math.round(n.width*t)),e.height=Math.max(2,Math.round(n.height*t))}}drawMap(t){let e=this.mapc,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.path.length?this.path[this.path.length-1]:this.pos,o=this.pos[0]*.6+a[0]*.4,l=this.pos[1]*.6+a[1]*.4;(this.lesson==="intro"||this.lesson==="drop")&&(o=jt.sleep.at[0]*.5,l=jt.sleep.at[1]*.5);let c=Iy,h=c*r/s,d=Math.max(-Cs/2+c/2,Math.min(Cs/2-c/2,o)),u=Math.max(-Rs/2+h/2,Math.min(Rs/2-h/2,l)),m=1-Math.exp(-t*3);this.cam.x+=(d-this.cam.x)*m,this.cam.y+=(u-this.cam.y)*m;let x=(this.cam.x-c/2+Cs/2)*Re,g=(Rs/2-this.cam.y-h/2)*Re,p=c*Re,f=h*Re,w=s/p;n.setTransform(1,0,0,1,0,0),n.drawImage(this.base,x,g,p,f,0,0,s,r),n.setTransform(w,0,0,w,-x*w,-g*w);let P=this.t;for(let[O,N]of Object.entries(jt)){if(!this.seen[O])continue;let[C,F]=Nn(N.at[0],N.at[1]),H=this.nearId===O;for(let W=2;W>=0;W--)n.beginPath(),n.arc(C,F,As[W]*Re,0,7),n.fillStyle=`rgba(255,236,170,${H?.16+(2-W)*.06:.07})`,n.fill(),n.setLineDash([6,6]),n.lineDashOffset=-P*12,n.lineWidth=2.2,n.strokeStyle=`rgba(120,80,40,${H&&W>=this.nearTier?.85:.35})`,n.stroke(),n.setLineDash([])}this.trail.length>1&&(n.beginPath(),n.lineWidth=4,n.strokeStyle="rgba(92,52,36,0.75)",n.lineJoin=n.lineCap="round",this.trail.forEach(([O,N],C)=>{let[F,H]=Nn(O,N);C?n.lineTo(F,H):n.moveTo(F,H)}),n.stroke()),n.setTransform(1,0,0,1,0,0),n.drawImage(this.fog,x/2,g/2,p/2,f/2,0,0,s,r),n.setTransform(w,0,0,w,-x*w,-g*w);for(let[O,N]of Object.entries(jt)){if(!this.seen[O])continue;let[C,F]=Nn(N.at[0],N.at[1]),H=this.nearId===O,W=this.flashEffect&&this.flashEffect.id===O?Math.max(0,1-this.flashEffect.t):0,K=Re*(1.25+(H?Math.sin(P*6)*.06:0)+W*.6);n.drawImage(oe[N.medal],C-K/2,F-K/2,K,K),n.font=`700 ${Re*.42}px Mali, sans-serif`,n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(255,248,230,0.95)",n.strokeText(N.short,C,F+K*.78),n.fillStyle="#5a3424",n.fillText(N.short,C,F+K*.78)}this.flashEffect&&(this.flashEffect.t+=t,this.flashEffect.t>1&&(this.flashEffect=null));let[S,T]=Nn(this.pos[0],this.pos[1]),E=Math.sin(P*3)*3,D=Re*.95,y=Re*(.9+Math.sin(P*4)*.08),M=n.createRadialGradient(S,T,0,S,T,y);M.addColorStop(0,this.nearTier>=0?"rgba(255,240,160,0.9)":"rgba(255,255,255,0.7)"),M.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=M,n.beginPath(),n.arc(S,T,y,0,7),n.fill(),n.save(),n.translate(S,T+E),n.rotate(Math.sin(P*2.2)*.12+(this.curdle?Math.sin(P*40)*.2:0)),n.drawImage(oe.bottle,-D*.35,-D*.7,D*.7,D*1),n.restore();for(let[O,N]of Object.entries(jt)){if(this.seen[O])continue;let[C,F]=Nn(N.at[0],N.at[1]),H=this.ctx&&this.ctx.target===O,W=1+Math.sin(P*2.5+C)*.06;if(H){let v=n.createRadialGradient(C,F,0,C,F,Re*1.6);v.addColorStop(0,"rgba(255,226,120,0.55)"),v.addColorStop(1,"rgba(255,226,120,0)"),n.fillStyle=v,n.beginPath(),n.arc(C,F,Re*1.6,0,7),n.fill()}n.globalAlpha=H?.95:.6;let K=Re*.95*W;n.drawImage(oe.m_q,C-K/2,F-K/2,K,K),n.globalAlpha=1}if(this.path.length){let O=this.pathFlash||0;this.pathFlash=Math.max(0,O-t*1.5),n.beginPath(),n.lineWidth=5+O*4,n.setLineDash([2,12]),n.lineDashOffset=P*20,n.strokeStyle=`rgba(110,60,40,${.85})`;let[N,C]=Nn(this.pos[0],this.pos[1]);n.moveTo(N,C);for(let[W,K]of this.path){let[v,A]=Nn(W,K);n.lineTo(v,A)}n.stroke(),n.setLineDash([]);let[F,H]=Nn(a[0],a[1]);n.beginPath(),n.arc(F,H,9,0,7),n.fillStyle="rgba(255,250,235,0.9)",n.fill(),n.lineWidth=3,n.strokeStyle="#6e3c28",n.stroke()}if(this.catchFx){let O=this.catchFx;O.t+=t;let[N,C]=Nn(O.at[0],O.at[1]),F=Math.min(1,O.t/.6);n.lineWidth=6*(1-F)+1,n.strokeStyle=`rgba(255,214,90,${1-F})`,n.beginPath(),n.arc(N,C,Re*(.5+F*1.3),0,7),n.stroke(),O.t>.6&&(this.catchFx=null)}let R=this.lesson&&cc[this.lesson].mark;if(R){let O=R==="sleep"?jt.sleep.at:a,[N,C]=Nn(O[0],O[1]),F=Re*(R==="sleep"?1:.55)*(1+Math.sin(P*5)*.06);if(n.setLineDash([]),n.lineWidth=4,n.strokeStyle="rgba(255,206,70,0.95)",n.beginPath(),n.arc(N,C,F,0,7),n.stroke(),hc.complete&&hc.naturalWidth){let H=Re*.9,W=C-F-H*.55-Math.abs(Math.sin(P*4))*Re*.25;n.save(),n.translate(N,W),n.rotate(Math.PI/2),n.drawImage(hc,-H/2,-H*.4,H,H*.8),n.restore()}}n.setTransform(1,0,0,1,0,0);let U=n.createRadialGradient(s/2,r/2,Math.min(s,r)*.42,s/2,r/2,Math.max(s,r)*.72);U.addColorStop(0,"rgba(60,35,20,0)"),U.addColorStop(1,"rgba(60,35,20,0.35)"),n.fillStyle=U,n.fillRect(0,0,s,r)}drawPot(t){let e=this.liq,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.t,o=this.liquidCol;this.nearAny&&this.nearD<2.4&&!this.curdle&&(o=Ra(o,jt[this.nearAny].liquid,Math.max(0,1-this.nearD/2.4)*.8)),this.shownCol=this.shownCol?Ra(this.shownCol,o,Math.min(1,t*4)):o;let l=s*.504,c=r*.172,h=s*.325,d=r*.125;n.clearRect(0,0,s,r);let u=n.createRadialGradient(l,c-d*.3,h*.1,l,c,h);u.addColorStop(0,Ps(this.shownCol,.35)),u.addColorStop(.6,this.shownCol),u.addColorStop(1,Ps(this.shownCol,-.45)),n.fillStyle=u,n.beginPath(),n.ellipse(l,c,h,d,0,0,7),n.fill(),n.save(),n.beginPath(),n.ellipse(l,c,h*.98,d*.95,0,0,7),n.clip(),n.strokeStyle=Ps(this.shownCol,.5),n.globalAlpha=.45,n.lineWidth=s*.006,n.lineCap="round";for(let N=0;N<3;N++){let C=this.spoonA*.6+N*2.1+a*.4;n.beginPath(),n.ellipse(l,c,h*(.35+N*.2),d*(.35+N*.2),0,C,C+1.3),n.stroke()}n.globalAlpha=1,Math.random()<t*(this.curdle?3:9+this.stirV*6)&&this.bubbles.push({x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.4,r:0,max:s*(.012+Math.random()*.022),t:0,life:.6+Math.random()*.8});for(let N=this.bubbles.length-1;N>=0;N--){let C=this.bubbles[N];if(C.t+=t,C.t>C.life){this.bubbles.splice(N,1),Math.random()<.25&&ct.bubble(),this.steam.push({x:.504+C.x*.325*.5,y:.172+C.y*.125*.5,vx:0,vy:-.15,life:.35,t:0,s:4,c:Ps(this.shownCol,.6),pop:1});continue}let F=C.max*Math.min(1,C.t/(C.life*.7)),H=l+C.x*h*.5,W=c+C.y*d*.5;n.fillStyle=Ps(this.shownCol,.25),n.beginPath(),n.ellipse(H,W,F,F*.8,0,0,7),n.fill(),n.strokeStyle=Ps(this.shownCol,.65),n.lineWidth=s*.003,n.stroke(),n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.arc(H-F*.35,W-F*.3,F*.22,0,7),n.fill()}let m=this.spoonA,x=l+Math.cos(m)*h*.45,g=c+Math.sin(m)*d*.45;n.strokeStyle=Ps(this.shownCol,.55),n.lineWidth=s*.004,n.globalAlpha=.7,n.beginPath(),n.ellipse(x,g,s*.035,s*.012,0,0,7),n.stroke(),n.globalAlpha=1,n.restore();let p=this.fx,f=p.getContext("2d"),w=p.width,P=p.height;f.clearRect(0,0,w,P);let S=N=>N*w,T=N=>P*(.6+N),E=S(.504+Math.cos(m)*.325*.45),D=T(.172+Math.sin(m)*.125*.45),y=w*.62,M=y*220/476;f.save(),f.beginPath(),f.rect(0,0,w,D-w*.004),f.clip(),f.translate(E,D),f.rotate(Math.cos(m)*.18+Math.sin(a*2)*.03),f.drawImage(oe.spoon,-M*.14,-y*.93,M,y),f.restore(),Math.random()<t*5&&this.steam.push({x:.504+(Math.random()-.5)*.4,y:.16,vx:(Math.random()-.5)*.04,vy:-.12-Math.random()*.08,life:2.4,t:0,s:14+Math.random()*18,c:"rgba(255,255,255,1)",soft:1});for(let N=this.steam.length-1;N>=0;N--){let C=this.steam[N];if(C.t+=t,C.t>C.life){this.steam.splice(N,1);continue}C.x+=C.vx*t,C.y+=C.vy*t,C.x+=Math.sin(C.t*2+N)*8e-4;let F=C.t/C.life,H=S(C.x),W=T(C.y);if(C.soft){let K=C.s*(w/400)*(.6+F*1.4),v=f.createRadialGradient(H,W,0,H,W,K);v.addColorStop(0,`rgba(255,255,255,${.22*(1-F)})`),v.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=v,f.beginPath(),f.arc(H,W,K,0,7),f.fill()}else if(C.pop)f.strokeStyle=C.c,f.globalAlpha=1-F,f.lineWidth=2,f.beginPath(),f.arc(H,W,4+F*14,0,7),f.stroke(),f.globalAlpha=1;else{f.fillStyle=C.c,f.globalAlpha=1-F;let K=C.s*(w/400);f.beginPath(),f.arc(H,W,K*(1-F*.5),0,7),f.fill(),f.globalAlpha=1}}for(let N=this.drops.length-1;N>=0;N--){let C=this.drops[N];if(C.t+=t,C.vy+=1.6*t,C.x+=C.vx*t,C.y+=C.vy*t,C.t>C.life){this.drops.splice(N,1);continue}f.fillStyle=C.c,f.globalAlpha=1-C.t/C.life,f.beginPath(),f.arc(S(C.x),T(C.y),C.s*w/400,0,7),f.fill(),f.globalAlpha=1}let R=this.$(".brew-witch"),U=this.stirV>.1||a-(this.circleAt||-9)<.25;this.rig.update(t,{stir:U}),R.style.transform=U?`translateY(${Math.abs(Math.sin(a*7))*-4}px)`:"";let O=this.$(".bottle");O.style.transform=this.nearTier>=0?`scale(${1+Math.max(0,Math.sin(a*5))*.05})`:""}splash(t){for(let e=0;e<18;e++)this.drops.push({x:.504+(Math.random()-.5)*.15,y:.17,vx:(Math.random()-.5)*.5,vy:-.5-Math.random()*.5,t:0,life:.8,s:4+Math.random()*5,c:t});for(let e=0;e<6;e++)this.bubbles.push({x:(Math.random()-.5)*.8,y:(Math.random()-.5)*.6,r:0,max:this.liq.width*(.02+Math.random()*.02),t:0,life:.4+Math.random()*.4});this.potEl.classList.remove("bump"),this.potEl.offsetWidth,this.potEl.classList.add("bump")}updateUI(){let t=this.$(".readout"),e=this.$(".bottle");if(this.nearTier>=0&&this.nearId){let n=jt[this.nearId],s=[2,1,0].map(r=>`<i class="pip ${this.nearTier<=r?"on":""}"></i>`).join("");t.innerHTML=`<img src="${Jt(n.medal)}" alt=""><div><b>${n.name}</b><span class="tier t${this.nearTier}">${Tr[this.nearTier]}</span></div><div class="pips">${s}</div>`,t.className="readout hot",e.disabled=!1}else{let n=this.ings.length?this.passed?`Went past ${jt[this.passed].short}. Hold Moon water to drift back`:this.path.length?"Stir to follow the dotted path. Fog lifts as you go":"Path used up. Add another ingredient to go further":"Drop an ingredient in the cauldron to draw a path";t.innerHTML=`<p>${n}</p>`,t.className="readout",e.disabled=!0}this.$(".dump").classList.toggle("hidden",!this.ings.length||!!this.lesson),this.$(".water").classList.toggle("hidden",!!this.lesson&&this.lesson!=="back")}lessonGo(t){if(t===this.lesson&&t)return;this.lesson=t;let e=this.$(".brew-coach"),n=this.$(".coach-ok");this.el.classList.toggle("lesson",!!t),this.$(".brew-ask").classList.toggle("hidden",!!t||!(this.ctx&&this.ctx.ask));for(let r of this.$(".shelf").children)r.classList.toggle("locked",this.lessonLocked(r.dataset.id));if(this.updateUI(),!t){e.classList.add("hidden"),this.$(".lesson-ring").classList.add("hidden"),this.el.classList.remove("ring-low");return}let s=cc[t];e.querySelector("p").textContent=s.say,n.classList.toggle("hidden",!s.tap),s.tap&&(n.querySelector("span").textContent=s.tap),e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),t!=="intro"&&ct.pop(),this.placeRing()}lessonNext(){ct.click(),this.lesson==="intro"?this.lessonGo("drop"):this.lesson==="path"&&this.lessonGo("stir")}lessonLocked(t){return!!this.lesson&&t!=="lav"}coachBump(){let t=this.$(".brew-coach");t.classList.remove("nudge"),t.offsetWidth,t.classList.add("nudge")}placeRing(){let t=this.$(".lesson-ghost");if(this.lesson==="drop"||this.lesson==="more"){let o=this.$('.tile[data-id="lav"]').getBoundingClientRect(),l=this.potEl.getBoundingClientRect(),c=this.t%1.9/1.3,h=Math.min(1,c),d=h*h*(3-2*h),u=o.left+o.width/2,m=o.top+o.height*.4,x=l.left+l.width*.5,g=l.top+l.height*.12,p=u+(x-u)*d,f=m+(g-m)*d-Math.sin(d*Math.PI)*l.height*.25;t.classList.remove("hidden"),t.style.opacity=c<.12?c/.12:c>1?Math.max(0,1-(c-1)*3.5):.85,t.style.transform=`translate(${p-32}px, ${f-32}px) rotate(${d*30-10}deg) scale(${1-d*.3})`}else t.classList.add("hidden");let e=this.$(".lesson-ring"),n=this.lesson&&cc[this.lesson].ring,s=n&&this.$(n);if(this.el.classList.toggle("ring-low",n===".stir"||n===".bottle"||n===".water"),!s){e.classList.add("hidden");return}let r=s.getBoundingClientRect(),a=6;e.classList.remove("hidden"),e.classList.toggle("big",n===".map-frame"),e.style.left=r.left-a+"px",e.style.top=r.top-a+"px",e.style.width=r.width+a*2+"px",e.style.height=r.height+a*2+"px"}toast(t,e){let n=this.$(".brew-toast");n.innerHTML=(e?`<img src="${Jt(e)}" alt="">`:"")+`<span>${t}</span>`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}key(t,e){if(t==="Space"||t==="KeyS")return this.stirHold=e,this.$(".stir").classList.toggle("down",e),!0;if(t==="KeyQ"||t==="KeyW")return this.waterHold=e,this.$(".water").classList.toggle("down",e),!0;if(!e)return!1;if(t==="Enter"||t==="KeyE")return this.lesson&&cc[this.lesson].tap?this.lessonNext():this.bottle(),!0;if(t==="Escape")return this.close(),!0;let n=parseInt(t.replace("Digit",""),10);if(n>=1&&n<=_u.length){let s=_u[n-1],r=this.$(`.tile[data-id="${s}"]`);if(!r)return!0;if(this.lessonLocked(s))return r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope"),this.coachBump(),!0;if(G.inv[s]>0){let a=Ca("img","drag-ghost");a.src=Jt(De[s].icon);let o=r.getBoundingClientRect();a.style.transform=`translate(${o.left+o.width/2-40}px, ${o.top-40}px)`,document.body.appendChild(a),a.offsetWidth,this.drop(s,a,null),ct.pop()}else r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope");return!0}return!1}};function vu(){if(G.settings.tod>=0)return G.settings.tod;let i=new Date(fe());return i.getHours()+i.getMinutes()/60}var ls=[[0,[.42,.48,.78],.18,1],[4.5,[.46,.5,.8],.18,1],[6,[1,.78,.78],.25,.35],[7.5,[1,.95,.9],.32,0],[12,[1,1,1],.36,0],[16.5,[1,.97,.9],.34,0],[18.2,[1,.8,.62],.28,.15],[19.5,[.66,.6,.9],.22,.7],[21,[.44,.5,.8],.18,1],[24,[.42,.48,.78],.18,1]];function Ep(i=vu()){let t=ls[0],e=ls[ls.length-1];for(let a=0;a<ls.length-1;a++)if(i>=ls[a][0]&&i<=ls[a+1][0]){t=ls[a],e=ls[a+1];break}let n=(i-t[0])/Math.max(1e-6,e[0]-t[0]),s=n*n*(3-2*n),r=(a,o)=>a+(o-a)*s;return{tint:[r(t[1][0],e[1][0]),r(t[1][1],e[1][1]),r(t[1][2],e[1][2])],shadow:r(t[2],e[2]),night:r(t[3],e[3])}}function Ap(i=vu()){return i<5?"Night":i<7.5?"Dawn":i<12?"Morning":i<17?"Afternoon":i<19.5?"Evening":"Night"}function yu(i=vu()){let t=Math.floor(i)%24,e=Math.floor(i%1*60),n=t<12?"AM":"PM";return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${n}`}function Di(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/60),n=t%60;return e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}:${String(n).padStart(2,"0")}`}function Cp(i){let t=Math.max(1,Math.round(i/6e4)),e=Math.floor(t/60),n=Math.floor(e/24),s=(r,a)=>`${r} ${a}${r===1?"":"s"}`;return n>=1?s(n,"day"):e>=1?t%60?`${s(e,"hour")} ${s(t%60,"minute")}`:s(e,"hour"):s(t,"minute")}var Ls=21,vi=15,Lp=19,Ly=5*6e4,bu={mira:"Mira",juniper:"Juniper",oz:"Oz",pip:"Pip",wren:"Wren",basil:"Basil"},cs={crow:.75,pip:1.3,wren:1.12,basil:.8,mira:1.05,juniper:1.2,oz:.9,kuro:1.6,me:1.25},Dy=Object.fromEntries(oc.map(i=>[i.id,i])),Ny=["cham","lav","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],Vt,ze,ft,Ne,Fn,si,gn,xn,Is,ri,ee=null,ot={started:!1,quiet:0,t:0,focus:null,target:null,disc:!1,chatT:3,secT:0,saveT:0,where:"home",fps:[],lowQ:!1},Ze=()=>(_i[G.q]||_i[_i.length-1]).id,Uy=(i,t)=>`${i}:${t}`,Un=i=>{let[t,e]=i.split(":");return[t,+e]},Mu=(i,t)=>Math.max(5,Math.round(jt[i].base*uu[t]*1.1/5)*5),Fy=(i,t)=>Math.round(jt[i].base*uu[t]),fc=i=>`<span class="tier t${i}">${Tr[i]}</span>`,Ds=()=>!ot.started||ot.disc||gn.isOpen||ri.isOpen||jl()||Ql()||ot.cut,Eu=i=>new Promise(t=>setTimeout(t,i)),Dp=10*6e4,Oy=3,Np=()=>(G.wild.fish||[]).filter(i=>fe()-i<Dp),Up=()=>Oy-Np().length,Fp=()=>{let i=Np();return i.length?Math.min(...i)+Dp-fe():0},wn=(i,t,e)=>Vt.toScreen(i,t,e,{x:0,y:0}),Oe=(i,t=.15)=>[i.x,(i.h*i.sy+t)*Math.cos(.72)+i.mesh.position.y,i.z-(i.h*i.sy+t)*Math.sin(.72)];function Su(){return 1+Math.floor(G.fame/3)}function Er(i,t,e=vi){ot.focus=[i,t],Vt.distGoal=e}function Ar(){ot.focus=null,Vt.distGoal=Ls}function Op(i,t){let e=Su();G.fame+=i;let n=Su();au(n,G.fame%3/3),t&&Wn(`+${i} fame`,t,"fame"),n>e&&setTimeout(()=>Dn(`Fame Lv ${n}`,"More of Mossbrook knows your name",{kind:"gold",onShow:()=>ct.discover()}),600)}function kp(i,t){G.coins+=i,t?pp(i,t,(e,n)=>{e===n-1&&Sa(G.coins,!0)}):Sa(G.coins,!0),t&&Wn(`+${i}`,{x:t.x,y:t.y-30},"coin")}function Ia(i,t,e){G.inv[i]=(G.inv[i]||0)+t,G.found[i]=!0,G.newCount=(G.newCount||0)+t;for(let n=0;n<Math.min(t,4);n++)Kl(De[i].icon,e,Ht("#bBag"),{delay:n*110,size:52,onArrive:n===Math.min(t,4)-1?()=>{br(G.newCount),ct.pop()}:null})}function Au(i){let t=i>ft.x?1:-1;t!==ft.face&&(ft.flipFrom=ft.face,ft.face=t,ft.flipT=0)}function ky(){let i=_i[G.q]||_i[_i.length-1];if(i.id==="free"){if(G.cust.here){let e=wr[G.cust.i%wr.length];return[G.cust.asked?`Brew a ${jt[e.want].name} for ${e.name}`:`${e.name} is at your door`,""]}let t=G.cust.nextAt-fe();return["Explore at your own pace",t>1e3?`Visitor in ${Di(t)}`:"Visitor soon"]}return[i.text,i.need?`${Math.min(G.qn,i.need)}/${i.need}`:""]}function ai(i){if(Ze()!==i)return!1;let t=_i[G.q];return G.q=Math.min(_i.length-1,G.q+1),G.qn=0,me(),ct.quest(),Be(15),as(`<b>Done!</b> ${t.text}`,"star"),setTimeout(()=>By(Ze()),700),!0}function By(i){i==="talk"&&!ee&&Pa(!0),i==="mystery"&&Dn("Something glows","Far north on the potion map, past the brambles",{icon:"m_q",kind:"gold",ms:3200}),i==="free"&&(G.cust.nextAt=Math.max(G.cust.nextAt,fe()+9e4),Dn("The slice is yours","Everything keeps growing on the real clock. Come back later!",{ms:3600})),me(!0)}function zy(){switch(Ze()){case"letter":return Oe(ze.props.mailbox,.5);case"harvest":{let i=null,t=1e9;for(let e of Fn.plots)if(Fn.state(e.i).ready){let n=Math.hypot(e.x-ft.x,e.z-ft.z);n<t&&(t=n,i=e)}return i?[i.x,1.9,i.z-.4]:null}case"talk":case"deliver":return ee&&!ee.moving?Oe(ee.spr,.5):null;case"brew":case"mystery":return ft.x<Ri?Oe(ze.props.cauldron,.6):[lt.roadEnd[0],1,lt.roadEnd[1]];case"town":return[lt.roadEnd[0],1.2,lt.roadEnd[1]];case"board":return Oe(ze.props.board,.4);case"stall":return Oe(ze.props.myStall,.4);case"buy":return Oe(ze.props.stalls.mira,.3);default:{if(!G.cust.here||!ee||ee.moving||ft.x>=Ri)return null;let i=ee.def.want,t=Object.keys(G.potions).some(e=>e.startsWith(i+":")&&G.potions[e]>0);return G.cust.asked&&!t?Oe(ze.props.cauldron,.6):Oe(ee.spr,.5)}}}function Pa(i){let t=wr[G.cust.i%wr.length],e=t.who==="crow"?1.5:1.6,n=i?lt.crowEnter:lt.crowWait;if(ee=new os(Vt,t.sprite,e,n[0],n[1],{talk:t.talk,speed:2.4,rig:t.rig}),ee.def=t,t.who==="pip"||t.who==="wren"){let r=xn[t.who];r.busy=!0,r.spr.visible=!1,Is.remove("n-"+t.who)}let s=()=>{G.cust.here=!0,me(!0),ee.face=1,ee.hop(),t.who==="crow"?ct.caw():ct.blip("a",cs[t.who]||1)};i?(ee.goTo([[12,1.6],[9,4],[1.5,4.1],lt.crowWait],s),t.who==="crow"&&setTimeout(()=>ct.caw(),400),ot.started&&(ft.x<Ri?as(`${t.name} is coming up the path`,t.sprite):Zl(`<img src="${Jt(t.sprite)}" alt=""><span>${ni(t.name)} is waiting at your cottage</span>`))):(G.cust.here=!0,ee.face=1)}function Hy(){let i=ee;ee=null,i&&(i.goTo([[1.5,4.1],[9,4],[12,1.6],lt.crowEnter,[22,.8]],()=>{i.spr.dispose();let t=i.def.who;if(t==="pip"||t==="wren"){let e=xn[t];e.busy=!1,e.spr.visible=!0}}),Is.remove("n-cust"))}async function Gy(){let i=ee,t=i.def,e=jt[t.want];if(Math.abs(ft.x-i.x)<1.2){let r=ft.x>=i.x?1:-1;ft.walkTo(i.x+r*1.35,i.z+.4,i.x),i.face=r}else Au(i.x),i.face=i.x>ft.x?-1:1;let n=cs[t.who]||1,s=async(r,a=[])=>{i.talking=Math.min(6,r.length*.035);let o=await Pi(t.name,r,a,{pitch:n});return i.talking=0,o};ot.focus=[(i.x+ft.x)/2,(i.z+ft.z)/2],Vt.distGoal=vi;try{if(!G.cust.asked){await s(t.ask,[{label:"Leave it to me!"},{label:"What happened?"}])===1&&await s(t.who==="crow"?"Owls. Singing. All night. They even take requests.":"It is a long story, and most of it is embarrassing."),G.cust.asked=!0,me(!0),Ze()==="talk"?(await Pi(G.name,"Granny's letter said lavender pulls a brew toward Sleep. The cauldron is by the cottage.",[],{pitch:cs.me}),ai("talk")):as(`${t.name} wants a <b>${e.name}</b>`,e.medal);return}let r=Object.keys(G.potions).filter(u=>G.potions[u]>0).sort((u,m)=>(Un(u)[0]===t.want?-1:0)-(Un(m)[0]===t.want?-1:0)||Un(u)[1]-Un(m)[1]).slice(0,3);if(!r.length){await s(`No rush. A ${e.name} whenever you are ready.`);return}let a=r.map(u=>{let[m,x]=Un(u);return{label:`${jt[m].short} (${Tr[x]})`,icon:jt[m].potion}});a.push({label:"Not yet"});let o=await s(`Is that a ${e.name} I smell?`,a);if(o<0||o>=r.length)return;let[l,c]=Un(r[o]);if(l!==t.want){ct.fail(),await s(`Hmm. That smells like ${jt[l].short}. I need a ${e.name}.`);return}G.potions[r[o]]--;let h=Fy(l,c),d=wn(i.x,1.4,i.z);i.cheer(),ct.bottle(),Vt.sparkle(i.x,1,i.z,16,"#fff2a8"),kp(h,d),Op(1,{x:d.x,y:d.y-60}),await s(`${t.thanks} Here, ${h} coins.${c===0?" A perfect brew, too!":""}`),G.cust.i++,G.cust.here=!1,G.cust.asked=!1,G.cust.nextAt=fe()+Ly,me(),Hy(),Zl(null),ai("deliver")}finally{ot.focus=null,Vt.distGoal=Ls}}function Bp(){let i=[],t=(n,s,r,a,o,l,c,h)=>i.push({id:n,x:s,z:r,r:a,label:o,act:l,anchor:c,spr:h}),e=ze.props;if(ft.x<Ri-4){if(t("mailbox",lt.mailbox[0],lt.mailbox[1]+.3,1.7,Ze()==="letter"?"Read letter":"Mailbox",jy,Oe(e.mailbox),e.mailbox),t("cauldron",lt.cauldron[0],lt.cauldron[1]+.3,2.1,"Brew",Pp,Oe(e.cauldron,.3),e.cauldron),t("door",lt.door[0],lt.door[1]+.5,1.4,"Enter workshop",Pp,[lt.door[0],2.4,lt.door[1]-.6]),t("sign",lt.sign[0],lt.sign[1]+.3,1.5,"Read sign",$y,Oe(e.sign),e.sign),t("woodsign",lt.woodSign[0],lt.woodSign[1]+.3,2,"Read sign",Zy,Oe(e.woodSign),e.woodSign),ft.x<Ss+3||ft.z>8.6){let s=si.nearBerry(ft.x,ft.z);if(s){let a=si.berryLeft(s.i);t("berry"+s.i,s.x,s.z+.5,1.6,a?`Berries in ${Di(a)}`:"Pick berries",()=>Xy(s.i),Oe(s.spr,.1),s.spr)}let r=si.nearBug(ft.x,ft.z);r&&t("bug"+r.i,r.x,r.z,1.7,`Catch ${De[r.kind].name}`,()=>Hp(r),[r.x,r.y+.75,r.z],r.spr)}if(ft.z>5){t("pondsign",lt.pondSign[0],lt.pondSign[1]+.3,1.5,"Read sign",Yy,Oe(e.pondSign),e.pondSign);let s=Up();t("fish",lt.fish[0],lt.fish[1],1.7,s>0?"Fish":`Fish bite again in ${Di(Fp())}`,Vp,Oe(e.bucket,.5),e.bucket)}Ne.atStall||t("cat",Ne.x,Ne.z+.2,1.3,"Pet Kuro",qy,Oe(Ne.spr,.2),Ne.spr);let n=Fn.nearest(ft.x,ft.z,1.35);if(n){let s=Fn.state(n.i);t("plot"+n.i,n.x,n.z,1.35,s.ready?`Harvest ${s.def.name}`:`${s.def.name} in ${Di(s.left)}`,()=>Wy(n.i),[n.x,1.5,n.z-.6],n.spr)}ee&&!ee.moving&&t("cust",ee.x,ee.z+.2,1.7,G.cust.asked?`Give ${ee.def.name} a potion`:`Talk to ${ee.def.name}`,Gy,Oe(ee.spr,.3),ee.spr)}else{t("board",lt.board[0],lt.board[1]+.5,2,"Discovery board",tb,Oe(e.board,.1),e.board);for(let n of["mira","juniper","oz"]){let[s,r]=xi[n];t("stall-"+n,s,r+.3,1.9,`${bu[n]}'s stall`,()=>eb(n),Oe(xn[n].spr,.35),e.stalls[n])}t("mystall",lt.myStall[0],lt.myStall[1]+.3,1.9,"Your stall",nb,Oe(e.myStall,.1),e.myStall),t("fountain",lt.fountain[0],lt.fountain[1]+.9,2.5,"Make a wish",Ky,[lt.fountain[0],2.6,lt.fountain[1]-1.4],e.fountain);for(let n of ac){let s=xn[n];s.busy||t("folk-"+n,s.x,s.z+.15,1.4,`Chat with ${bu[n]}`,()=>Jy(n),Oe(s.spr,.3),s.spr)}}return i}function zp(){if(Ds()||ot.quiet>0){ot.target=null,dc(null),Mr(null);return}let i=null,t=1e9;for(let e of Bp()){let n=Math.hypot(e.x-ft.x,(e.z-ft.z)*1.25);n<e.r&&n/e.r<t&&(t=n/e.r,i=e)}if(ot.target=i,dc(i&&i.spr),i){let e=wn(i.anchor[0],i.anchor[1],i.anchor[2]);Mr(i.label,{x:Math.round(e.x),y:Math.round(e.y)})}else Mr(null)}function dc(i){ot.lit!==i&&(ot.lit&&(ot.lit.outline=0),ot.lit=i||null,ot.litT=0)}function Vy(i){ot.lit&&(ot.litT=Math.min(1,(ot.litT||0)+i*6),ot.lit.outline=ot.litT)}function wu(){if(Ds()||!ot.target)return;let i=ot.target;Au(i.x),i.act()}function Wy(i){let t=Fn.state(i);if(!t.ready){let r=Fn.plots[i];Wn(`Ready in ${Di(t.left)}`,wn(r.x,1.2,r.z),"soft"),ct.click();return}let e=Fn.plots[i];ft.setPose("witch_pick",.8);let n=Fn.harvest(i);ct.harvest(),Be(10);let s=wn(e.x,.8,e.z);Ia(n.crop,n.n,s),Wn(`+${n.n} ${De[n.crop].name}`,{x:s.x,y:s.y-40}),ot.quiet=.9,Ze()==="harvest"&&(G.qn++,G.qn>=_i[G.q].need&&ai("harvest")),me(!0)}function Xy(i){let t=si.berries[i],e=si.berryLeft(i);if(e){Wn(`Regrows in ${Di(e)}`,wn(t.x,1.6,t.z),"soft"),ct.click();return}ft.setPose("witch_pick",.8);let n=si.pick(i);ct.harvest(),Be(10);let s=wn(t.x,.8,t.z);Ia("berry",n,s),Wn(`+${n} ${De.berry.name}`,{x:s.x,y:s.y-40}),ot.quiet=.9,me(!0)}async function Hp(i){if(ot.cut)return;ot.cut=!0,tc(),ft.setPose("witch_pick",.6),Er(i.x,i.z-.3,vi-2),await Eu(420);let t=!G.beetles||Math.random()<.45,e=await ri.open("bug",{kind:i.kind,beetle:t,firstBeetle:!G.beetles,from:wn(i.x,i.y,i.z)});e.got.includes("beetle")&&(G.beetles=(G.beetles||0)+1),Ar();let n=wn(ft.x,1.6,ft.z);e.got.includes(i.kind)?si.markCaught(i):si.markFled(i),Gp(e.got,n),e.got.length||Wn("It flew off. It will be back soon",n,"soft"),ot.cut=!1,ot.quiet=.8,me(!0)}function Gp(i,t){let e={};for(let s of i)e[s]=(e[s]||0)+1;let n=0;for(let[s,r]of Object.entries(e)){let a=!G.found[s];setTimeout(()=>{Ia(s,r,t),Wn(`+${r} ${De[s].name}`,{x:t.x,y:t.y-40-n*4}),a&&as(`<b>${De[s].name}</b> joins your shelf`,De[s].icon)},150+n++*380)}}async function Vp(){let i=Up(),t=wn(lt.fish[0],1.4,lt.fish[1]);if(i<=0){Wn(`The fish are wary. Back in ${Di(Fp())}`,t,"soft"),ct.click();return}if(ot.cut)return;ot.cut=!0,tc(),Au(lt.fish[0]+1),Er(lt.fish[0],lt.fish[1]+.8,vi-2),await Eu(420);let e=await ri.open("fish",{bites:i,from:wn(lt.fish[0],.1,lt.fish[1]+1.2),onCatch:()=>{G.wild.fish.push(fe()),me(!0)}});Ar(),Gp(e.got,wn(ft.x,1.6,ft.z)),ot.cut=!1,ot.quiet=.8,me(!0)}function qy(){Ne.hop(),ct.meow(),Be(8),Vt.sparkle(Ne.x,.7,Ne.z,8,"#ffb3c8");let i=wn(Ne.x,1.1,Ne.z);Wn("\u2665",i,"heart"),ot.pets=(ot.pets||0)+1,ot.pets===5&&setTimeout(()=>Pi("Kuro","Mrrrp. (Kuro would like it noted that he is an excellent shopkeeper.)",[],{pitch:cs.kuro}),300)}async function $y(){await Pi("Signpost","East: Mossbrook Square. West: Hazel Cottage, and past it Whisperwood. North: fog, and nobody knows.",[],{pitch:.9})}async function Yy(){await Pi("Signpost","Willow Pond, down the steps. Fish bite from the end of the dock. Mind the frog.",[],{pitch:.9})}async function Zy(){await Pi("Signpost","Whisperwood. Wild berries grow back by themselves. Moths and ladybugs by day, glowbugs after dark. Bring a net.",[],{pitch:.9})}function Ky(){ct.discover(),Be(12),Vt.sparkle(lt.fountain[0],2.2,lt.fountain[1]-.6,26,"#cfefff",1.2,1.6);let i=["The water glitters. Something in the fog feels closer.","A tiny rainbow. Kuro would approve.","You wish for a Perfect brew. The fountain hums back."];as(i[Math.floor(Math.random()*i.length)],"m_drop")}async function Jy(i){let t=xn[i];t.busy=!0,t.path=[],t.face=t.x>ft.x?-1:1;let e={pip:["Mira says blue caps pull a brew north. I wonder what is up there.","I sold three Healing potions before lunch! Okay, two. Okay, I drank one."],wren:["Nobody has put Luck on the board yet. The north fog is spooky.","Glow sells best at night. Everyone walks home in the dark."],basil:["I trade river reeds for anything sweet. Mostly I just like the walk.","The pond past your cottage has fish that bite at dusk. Bring a light hand."]}[i];ot.focus=[(t.x+ft.x)/2,(t.z+ft.z)/2],Vt.distGoal=vi,t.talking=2,await Pi(bu[i],e[Math.floor(Math.random()*e.length)],[],{pitch:cs[i]}),t.talking=0,t.busy=!1,t.wait=1.5,ot.focus=null,Vt.distGoal=Ls}function jy(){if(Ze()!=="letter"){ze.props.mailbox.flash=.6,setTimeout(()=>ze.props.mailbox.flash=0,120),ct.click(),Wn("Empty for now",wn(lt.mailbox[0],1.6,lt.mailbox[1]),"soft");return}Ii("letter-card",`
    <div class="letter">
      <p>Dear ${ni(G.name)},</p>
      <p>The cottage is yours now, and so is the old cauldron. Do look after Kuro. He pretends he does not need looking after.</p>
      <p>Every herb pulls a brew a different way. Stir, follow where it leads, and the fog will lift. There are more potions out there than I ever found.</p>
      <p>Lavender for sleepy folk. Here are two sprigs to start you off.</p>
      <p>When the garden runs thin, take the little trail west into Whisperwood. The berries and moths there do odd things to a brew.</p>
      <p class="sign">With love,<br>Granny Hazel</p>
      <div class="gift"><img src="${Jt("i_lav")}" alt=""><img src="${Jt("i_lav")}" alt=""></div>
    </div>
    <button class="btn-green take"><span>Take the lavender</span></button>`,{onClose:()=>Qy()}).querySelector(".take").addEventListener("click",()=>Ts())}var Rp=!1;function Qy(){Rp||Ze()!=="letter"||(Rp=!0,Ia("lav",2,{x:innerWidth/2,y:innerHeight/2}),ze.props.mailbox.set("mailbox_empty"),Vt.sparkle(lt.mailbox[0]+.4,1.1,lt.mailbox[1],10,"#fff2a8"),ai("letter"))}function Wp(i,{cls:t="",empty:e=0}={}){let n=i.map(s=>`<button class="slot ${t} ${s.sel?"sel":""}" data-k="${s.k}" ${s.title?`title="${ni(s.title)}"`:""}><img src="${Jt(s.icon)}" alt=""><b>${s.n}</b>${s.tier!=null?`<i class="tdot t${s.tier}"></i>`:""}</button>`).join("");for(let s=i.length;s<e;s++)n+='<div class="slot blank"></div>';return n}function Cu(i){return i==="herbs"?Ny.filter(t=>G.inv[t]>0).map(t=>({k:t,icon:De[t].icon,n:G.inv[t],title:De[t].name})):Object.keys(G.potions).filter(t=>G.potions[t]>0).map(t=>{let[e,n]=Un(t);return{k:t,icon:jt[e].potion,n:G.potions[t],tier:n,title:`${jt[e].name} (${Tr[n]})`}})}function Xp(i="herbs"){G.newCount=0,br(0),me(!0);let t=Ii("bag-card",`
    <div class="tabs"><button class="tab" data-t="herbs">Herbs</button><button class="tab" data-t="potions">Potions</button></div>
    <div class="bag-grid"></div>
    <div class="bag-info"><p></p></div>`,{title:"Bag"}),e=n=>{i=n,t.querySelectorAll(".tab").forEach(r=>r.classList.toggle("on",r.dataset.t===n));let s=Cu(n);t.querySelector(".bag-grid").innerHTML=Wp(s,{empty:10}),t.querySelector(".bag-info p").innerHTML=s.length?"Tap an item to read about it":n==="herbs"?"No herbs yet. Harvest your garden or buy from the stalls":"No potions yet. Brew one at the cauldron",t.querySelectorAll(".slot[data-k]").forEach(r=>r.addEventListener("click",()=>{ct.click(),t.querySelectorAll(".slot").forEach(l=>l.classList.remove("sel")),r.classList.add("sel");let a=r.dataset.k,o;if(n==="herbs"){let l=Aa[a];o=`<b>${De[a].name}</b> ${l?`Grows in your garden in ${l.growMin} minutes.`:De[a].from||"Sold at the town stalls."}`}else{let[l,c]=Un(a);o=`<b>${jt[l].name}</b> ${fc(c)} Suggested price ${Mu(l,c)} coins.`}t.querySelector(".bag-info p").innerHTML=o}))};t.querySelectorAll(".tab").forEach(n=>n.addEventListener("click",()=>{ct.click(),e(n.dataset.t)})),e(i)}function qp(){let i=Object.entries(jt).map(([e,n])=>{let s=G.discovered[e],r=G.recipes[e];return s?`<div class="rec"><img class="medal" src="${Jt(n.medal)}" alt=""><div class="rec-t"><b>${n.name}</b>${fc(s.tier)}</div><div class="rec-i">${r.ings.map(a=>`<img src="${Jt(De[a].icon)}" alt="">`).join("<em>+</em>")}</div></div>`:`<div class="rec unknown"><img class="medal" src="${Jt("m_q")}" alt=""><div class="rec-t"><b>???</b><span>Somewhere ${n.hint}</span></div></div>`}).join(""),t=Object.keys(G.discovered).length;Ii("book-card",`<p class="book-sub">${t} of ${Object.keys(jt).length} found</p><div class="recs">${i}</div>`,{title:"Recipes"})}function tb(){let i=Object.entries(jt).map(([t,e])=>{let n=pu.find(r=>r.effect===t);return G.board.find(r=>r.effect===t)?`<div class="pin-row mine"><img src="${Jt(e.medal)}" alt=""><b>${e.name}</b><span>${ni(G.name)} (you)</span></div>`:n?`<div class="pin-row"><img src="${Jt(e.medal)}" alt=""><b>${e.name}</b><span>${ni(n.who)}, ${n.when}</span></div>`:`<div class="pin-row open"><img src="${Jt("m_q")}" alt=""><b>Undiscovered</b><span>First finder gets their name here</span></div>`}).join("");Ii("board-card",`<p class="book-sub">First discoveries in Mossbrook</p><div class="pins">${i}</div><p class="demo-note">Demo: other names are simulated townsfolk.</p>`,{title:"Discovery board",onClose:()=>{Ar(),ai("board")}}),Er(lt.board[0],lt.board[1]+.6,vi)}function $p(i,t,e){return`
    <div class="shop-top">
      <div class="keeper"><img src="${Jt(i)}" alt=""></div>
      <div class="shop-talk"><div class="ribbon sm"><span>${ni(t)}</span></div><div class="speech"><p>${e}</p></div></div>
    </div>
    <div class="counter"></div>
    <div class="buybar"></div>
    <div class="bag-row"><button class="arrow l" aria-label="Previous"></button><div class="bag-strip"></div><button class="arrow r" aria-label="Next"></button><i class="badge hidden"></i></div>`}function Yp(i,t,e,n){let s=0,r=6,a=()=>{let o=Cu(t).map(h=>({...h,sel:h.k===n})),l=Math.max(1,Math.ceil(o.length/r));s=Math.min(s,l-1),i.querySelector(".bag-strip").innerHTML=Wp(o.slice(s*r,s*r+r),{empty:r,cls:e?"pick":""}),i.querySelector(".bag-row .arrow.l").classList.toggle("off",s===0),i.querySelector(".bag-row .arrow.r").classList.toggle("off",s>=l-1);let c=i.querySelector(".bag-row .badge");c.textContent=o.reduce((h,d)=>h+d.n,0),c.classList.toggle("hidden",!o.length),e&&i.querySelectorAll(".bag-strip .slot[data-k]").forEach(h=>h.addEventListener("click",()=>{n=h.dataset.k,e(h.dataset.k,h),a()}))};return i.querySelector(".bag-row .arrow.l").addEventListener("click",()=>{s>0&&(s--,ct.click(),a())}),i.querySelector(".bag-row .arrow.r").addEventListener("click",()=>{s++,ct.click(),a()}),a(),{draw:a,setSel:o=>{n=o,a()}}}function Zp(){let i=Math.floor(fe()/36e5);G.boughtHour!==i&&(G.bought={},G.boughtHour=i)}function Ru(){Zp();for(let i of oc){if(!i.stall||!ze.props.stalls[i.id])continue;let t=[];for(let e of i.stall.items){let n=Math.min(3,e.stock-(G.bought[`${i.id}:${e.ing}`]||0));for(let s=0;s<n;s++)t.push(De[e.ing].icon)}Kh(ze.props.stalls[i.id],i.stall.sprite,t)}Kh(ze.props.myStall,"stall_mine",G.stall.items.map(i=>jt[Un(i.key)[0]].potion))}function eb(i){Zp();let t=Dy[i],e=t.stall;xn[i].hop(),ct.blip("h",cs[i]);let s=Ii("shop-card",$p(t.sprite,t.name,ni(e.line)),{onClose:Ar});Er(xi[i][0],xi[i][1]+.4,vi);let r=null,a=s.querySelector(".speech p"),o=h=>h.stock-(G.bought[`${i}:${h.ing}`]||0),l=()=>{s.querySelector(".counter").innerHTML=[0,1,2,3].map(g=>{let p=e.items[g];if(!p)return'<div class="ctile blank"></div>';let f=o(p);return`<button class="ctile ${r===g?"sel":""} ${f?"":"sold"}" data-i="${g}"><img src="${Jt(De[p.ing].icon)}" alt=""><span class="price"><b>${p.price}</b></span><i class="stock">${f?"x"+f:"Sold out"}</i></button>`}).join(""),s.querySelectorAll(".ctile[data-i]").forEach(g=>g.addEventListener("click",()=>{r=+g.dataset.i,ct.click(),l()}));let h=s.querySelector(".buybar");if(r==null){h.innerHTML="<p>Tap an item on the counter</p>";return}let d=e.items[r],u=De[d.ing],m=o(d),x=m>0&&G.coins>=d.price;h.innerHTML=`<p><b>${u.name}</b> ${m?`${m} left`:"sold out"}${G.coins<d.price&&m?". Not enough coins":""}</p><button class="btn-green buy" ${x?"":"disabled"}><span>Buy for ${d.price}</span></button>`,h.querySelector(".buy").addEventListener("click",g=>{if(!x)return;G.coins-=d.price,Sa(G.coins,!0),G.bought[`${i}:${d.ing}`]=(G.bought[`${i}:${d.ing}`]||0)+1;let p=g.currentTarget.getBoundingClientRect();ct.coin(0),ct.pop(),Be(10),Ia(d.ing,1,{x:p.left+p.width/2,y:p.top}),a.textContent=["Thank you kindly!","Pleasure doing business!","Come back soon!"][Math.floor(Math.random()*3)],ii(s.querySelector(".keeper img")),me(!0),d.ing==="mush"&&ai("buy"),Ru(),l(),c.draw()})},c=Yp(s,"herbs");l()}function nb(){let i=Ii("shop-card mine",$p("cat","Kuro","Mrrp. Leave potions on the counter and I will sell them, even while you sleep."),{onClose:Ar});Er(lt.myStall[0],lt.myStall[1]+.4,vi);let t=null,e=0,n=()=>{let a=G.stall.items;i.querySelector(".counter").innerHTML=[0,1,2,3].map(o=>{let l=a[o];if(!l)return'<div class="ctile blank"><span class="plus">+</span></div>';let[c,h]=Un(l.key);return`<div class="ctile listed"><img src="${Jt(jt[c].potion)}" alt=""><i class="tdot t${h}"></i><span class="price"><b>${l.price}</b></span><i class="stock">sells in ${Di(l.sellAt-fe())}</i></div>`}).join("")},s=()=>{let a=G.stall.items;n();let o=i.querySelector(".buybar");if(!t){o.innerHTML=`<p>${a.length>=4?"The counter is full":Cu("potions").length?"Tap a potion in your bag to put it on the counter":"No potions to sell. Brew some at the cauldron"}</p>`;return}let[l,c]=Un(t),h=Mu(l,c);o.innerHTML=`<img class="bb-icon" src="${Jt(jt[l].potion)}" alt=""><p><b>${jt[l].short}</b> ${fc(c)}</p>
      <div class="pricer"><button class="arrow l sm" aria-label="Lower"></button><span class="price"><b>${e}</b></span><button class="arrow r sm" aria-label="Higher"></button></div>
      <p class="hint">${e>h*1.15?"Pricey. It will take longer to sell":e<h*.9?"A bargain. It will go fast":"A fair price"}</p>
      <button class="btn-green list" ${a.length>=4?"disabled":""}><span>Put on counter</span></button>`,o.querySelector(".arrow.l").addEventListener("click",()=>{e=Math.max(5,e-5),ct.click(),s()}),o.querySelector(".arrow.r").addEventListener("click",()=>{e+=5,ct.click(),s()}),o.querySelector(".list").addEventListener("click",()=>{let d=G.stall.items;if(d.length>=4||!(G.potions[t]>0))return;G.potions[t]--;let u=Ze()==="stall",m=(u?25+Math.random()*15:60+Math.random()*90)*(e/h)**2;d.push({key:t,price:e,sellAt:fe()+m*1e3}),G.stall.open=!0,Ne.moveToStall(!0),ct.pop(),Be(8),ii(i.querySelector(".keeper img")),i.querySelector(".speech p").textContent=u?"Meow! Someone will come by soon. Go on, I have got this.":"On the counter it goes.",G.potions[t]<=0&&(t=null),me(!0),ai("stall"),Ru(),s(),r.draw()})},r=Yp(i,"potions",a=>{t=a;let[o,l]=Un(a);e=Mu(o,l),ct.click(),s()});s(),i._tick=n}function Kp(){let i=G.settings,t=Ii("set-card",`
    <div class="set-rows">
      <div class="row"><span>Sound</span><button class="toggle ${i.sound?"on":""}" data-k="sound"></button></div>
      <div class="row"><span>Music</span><button class="toggle ${i.music?"on":""}" data-k="music"></button></div>
      <div class="row"><span>Time of day</span><input type="range" min="-1" max="23" step="1" value="${i.tod<0?-1:Math.floor(i.tod)}"><b class="tod"></b></div>
      <div class="row"><span>Skip ahead</span><button class="btn-pill skip"><span>+10 minutes</span></button></div>
      <div class="row"><span>Start over</span><button class="btn-pill reset"><span>Reset save</span></button></div>
    </div>
    <p class="demo-note">Vertical slice demo. Townsfolk, stall buyers and the other names on the board are simulated. Time follows your real clock; skipping ahead moves the game clock only.</p>`,{title:"Menu"}),e=()=>{t.querySelector(".tod").textContent=i.tod<0?"Real clock":yu(i.tod)};e(),t.querySelectorAll(".toggle").forEach(s=>s.addEventListener("click",()=>{i[s.dataset.k]=!i[s.dataset.k],s.classList.toggle("on",i[s.dataset.k]),ql(),ct.click(),me(!0)})),t.querySelector("input").addEventListener("input",s=>{i.tod=+s.target.value,e(),Pu(!0),me(!0)}),t.querySelector(".skip").addEventListener("click",s=>{G.offsetMs=(G.offsetMs||0)+6e5,ct.quest(),ii(s.currentTarget),as("Ten minutes pass in a blink","star"),me(!0)});let n=t.querySelector(".reset");n.addEventListener("click",()=>{if(!n.classList.contains("confirm")){n.classList.add("confirm"),n.querySelector("span").textContent="Tap again to erase",ct.click();return}jf(),location.reload()})}function ib(i,t){if(!i.length)return;Ii("away-card",`<p class="book-sub">You were away for ${Cp(t)}</p><div class="away">${i.map(([n,s])=>`<div class="away-row"><img src="${Jt(n)}" alt=""><span>${s}</span></div>`).join("")}</div><button class="btn-green ok"><span>Lovely</span></button>`,{title:"While you were away"}).querySelector(".ok").addEventListener("click",()=>Ts())}function Pp(){tc();let i=Ze(),t={};if(i==="brew"||ee&&G.cust.asked&&!ee.moving){let e=ee?ee.def:wr[0];t.ask={name:e.name,line:i==="brew"?"Something to help me sleep, please.":`A ${jt[e.want].name}, please.`},t.target=e.want}i==="mystery"&&(t.target="luck",t.ask={name:"Kuro",line:"Mrrp. Blue Mushroom drifts north. Something glows up there."}),ft.frozen=!0,ot.cut=!0,Er(lt.cauldron[0],lt.cauldron[1]+.2,vi-1),Eu(320).then(()=>Ta(!0)).then(()=>{ot.cut=!1,document.body.classList.add("brewing"),gn.open(t),Ta(!1)})}function sb(i,t,e,n){let s=jt[i],r=Uy(i,t);G.potions[r]=(G.potions[r]||0)+3,G.newCount=(G.newCount||0)+3;let a=!G.discovered[i];(a||t<G.discovered[i].tier)&&(G.discovered[i]={tier:t,at:fe()},G.recipes[i]={ings:e,tier:t});let o=pu.find(h=>h.effect===i),l=a&&!o&&!G.board.some(h=>h.effect===i);l&&G.board.push({effect:i,at:fe()}),me(),setTimeout(()=>{let h=n.getBoundingClientRect();for(let d=0;d<3;d++)Kl(s.potion,{x:h.left+h.width/2,y:h.top+h.height/2},Ht("#bBag"),{delay:d*120,size:60,onArrive:d===2?()=>br(G.newCount):null})},650);let c=()=>{Ze()==="brew"&&i==="sleep"?(ai("brew"),setTimeout(()=>gn.close(),300)):Ze()==="mystery"&&i==="luck"?(ai("mystery"),setTimeout(()=>gn.close(),300)):Ze()==="brew"&&gn.toast("Mr. Crow asked for a <b>Sleep Potion</b>. Keep exploring the fog","m_moon")};a?setTimeout(async()=>{ot.disc=!0,ct.discover(),await wa({medal:s.medal,potion:s.potion,title:l?"First in Mossbrook!":"New potion!",name:s.name,tier:{i:t,label:Tr[t]},first:l?"Nobody in town has brewed this before. Your name goes on the discovery board.":`${o.who} found it first. Now you know it too.`,ings:e.map(h=>De[h].icon)}),ot.disc=!1,Op(l?2:1,null),c()},1100):(gn.toast(`+3 ${s.name} ${fc(t)}`,s.medal),c())}function rb(){ft.frozen=!1,Ar(),document.body.classList.remove("brewing"),br(G.newCount)}function Jp(i=!1){let t=fe(),e=[];if(G.stall.items=G.stall.items.filter(n=>n.sellAt<=t?(e.push(n),!1):!0),e.length){let n=e.reduce((s,r)=>s+r.price,0);if(i)G.coins+=n;else{let s=Math.abs(ft.x-lt.myStall[0])<11,r=s?wn(lt.myStall[0],1.6,lt.myStall[1]):null;for(let a of e){let[o]=Un(a.key);as(`Kuro sold a <b>${jt[o].name}</b> for ${a.price}`,"coin")}kp(n,r),s&&(Ne.hop(),ct.meow(),Vt.sparkle(lt.myStall[0],1.5,lt.myStall[1],14,"#fff2a8"))}G.stall.items.length||(G.stall.open=!1),me(!0)}return!G.stall.items.length&&Ne.atStall&&Ne.moveToStall(!1),ze&&Ru(),!i&&Ze()==="free"&&!ee&&!G.cust.here&&t>=G.cust.nextAt&&Pa(!0),{sold:e,total:e.reduce((n,s)=>n+s.price,0)}}function Pu(i){let t=Ep();Vt.setLight(t),hp(yu(),Ap(),t.night);let e=Math.hypot(ft.x-lt.fountain[0],ft.z-lt.fountain[1]);rp(t.night,Math.max(0,1-e/14))}function ab(i){for(let t of ze.occluders){let e=t.z-ft.z,s=e>.05&&e<t.h*1.52&&Math.abs(ft.x-t.x)<t.w*.4+.3?.3:1;t.alpha!==s&&(t.alpha=Math.abs(t.alpha-s)<.01?s:t.alpha+(s-t.alpha)*Math.min(1,i*8))}}function ob(i){if(ot.chatT-=i,ot.chatT<=0&&ft.x>Ri-2){ot.chatT=2.5+Math.random()*3;let t=["mira","juniper","oz",...ac].filter(s=>!xn[s].busy),e=t[Math.floor(Math.random()*t.length)],n=fu[Math.floor(Math.random()*fu.length)];Is.remove("c-"+e),Is.get("c-"+e,"chat",`<div class="tin"><p>${ni(n)}</p></div>`),ot.chats=ot.chats||{},ot.chats[e]=3.6,xn[e].talking=1.2,ct.blip("o",(cs[e]||1)*1.3)}if(ot.chats)for(let t of Object.keys(ot.chats)){if(ot.chats[t]-=i,ot.chats[t]<=0||xn[t].busy){Is.remove("c-"+t),delete ot.chats[t];continue}let e=Oe(xn[t].spr,.75);Is.place("c-"+t,e[0],e[1],e[2],ot.started&&!gn.isOpen&&!jl())}}function lb(){let i=ft.z>8.8&&Math.abs(ft.x)<12.5,t=ft.z<7.6,e=i||!t&&ot.where==="pond"?"pond":ft.x>Ri+1?"town":ft.x<Ss-.5?"forest":ft.x<11&&ft.x>Ss+1?"home":ot.where;e==="town"&&Ze()==="town"&&G.seenTown&&ai("town"),e!==ot.where&&(ot.where=e,ot.kick=1,e==="town"?G.seenTown?Dn("Mossbrook Square","",{ms:1600,kind:"loc"}):(G.seenTown=!0,Dn("Mossbrook Square","Demo: townsfolk and buyers are simulated",{ms:3400}),ai("town"),me(!0)):e==="forest"?G.seenWood?Dn("Whisperwood","",{ms:1600,kind:"loc"}):(G.seenWood=!0,Dn("Whisperwood","Wild berries and bugs. They come back on the real clock",{ms:3400}),me(!0)):e==="pond"?G.seenPond?Dn("Willow Pond","",{ms:1600,kind:"loc"}):(G.seenPond=!0,Dn("Willow Pond","Fish from the dock. Catch what bites",{ms:3400}),me(!0)):Dn("Hazel Cottage","",{ms:1600,kind:"loc"}),e==="home"&&ee&&Zl(null))}var Tu=performance.now();function jp(i){requestAnimationFrame(jp);let t=Math.min(.05,(i-Tu)/1e3);Tu=i,ot.t+=t;let e=xp();if(ft.frozen=Ds(),ri.isOpen&&(ri.update(t,e),Mr(null),dc(null),Jl(Vt,null)),!gn.isOpen&&!ri.covers){ft.update(t,e),Ne.update(t),ee&&ee.update(t);for(let n of Object.keys(xn))xn[n].update(t);wp(xn,t),Fn.update(t,ot.t),si.update(t,ot.t);for(let n of ze.tick)n(t,ot.t);if(!ot.started)Vt.target.x=3+Math.sin(ot.t*.08)*4,Vt.target.z=.8,Vt.distGoal=Lp,Vt.follow(Vt.target.x,Vt.target.z,t);else if(ot.focus)Vt.follow(ot.focus[0],ot.focus[1]+.6,t);else{let n=-1e9;for(let[s,r,a,o]of _a)ft.x>=s-.3&&ft.x<=r+.3&&ft.z>=a-.3&&ft.z<=o+.3&&(n=Math.max(n,o-1.2));n<-1e8&&(n=1e9),Vt.follow(ft.x,ft.z+.5,t,[ft.vx*.32,ft.vz*.18],[-35,45],n),ot.kick>0&&(ot.kick=Math.max(0,ot.kick-t/1.6),Vt.distGoal=Ls+Math.sin(ot.kick*Math.PI)*2.4)}if(ab(t),Vt.update(t,ot.t),Vt.render(),ot.started){zp(),Vy(t),ob(t),Jl(Vt,Ds()||ot.target?null:zy()),lb();let[n,s]=ky();up(n,s)}}else gn.isOpen&&(gn.update(t),Mr(null),dc(null),Jl(Vt,null));if(ot.secT-=t,ot.secT<=0&&(ot.secT=1,Pu(),ot.started&&(Jp(),Ql()))){let n=Ht("#panel .shop-card.mine");n&&n._tick&&n._tick()}ot.saveT-=t,ot.quiet>0&&(ot.quiet-=t),ot.saveT<=0&&ot.started&&(ot.saveT=5,G.pos=[+ft.x.toFixed(2),+ft.z.toFixed(2)],G.lastSeen=fe(),me()),!ot.lowQ&&ot.started&&(ot.fps.push(t),ot.fps.length>180&&ot.fps.shift(),ot.fps.length===180&&ot.fps.reduce((s,r)=>s+r,0)/180>1/38&&(ot.lowQ=!0,Vt.quality=0,Vt.resize()))}function cb(i,t){if(ot.started){if(ot.disc){t&&["Enter","Space","KeyE"].includes(i)&&wa.close&&wa.close();return}if(ri.isOpen){ri.key(i,t);return}if(gn.isOpen){gn.key(i,t);return}if(jl()){t&&mp(i);return}if(Ql()){t&&(i==="Escape"||i==="KeyB"&&Ht("#panel .bag-card"))&&Ts();return}t&&(i==="KeyE"||i==="Space"||i==="Enter"?wu():i==="KeyB"||i==="KeyI"?(ct.click(),Xp()):i==="KeyR"?(ct.click(),qp()):i==="Escape"&&(ct.click(),Kp()))}}async function hb(){let i=Ht("#loading .load-bar i");await Af(e=>{i.style.width=Math.round(e*100)+"%"}),Df();try{await document.fonts.load("700 20px Mali")}catch{}Vt=new Il(Ht("#world")),ze=Kf(Vt),Fn=new lc(Vt),si=new nc(Vt,ze),Ne=new rc(Vt),xn=Sp(Vt,oc);let t=G.name&&G.pos?G.pos:lt.start;ft=new sc(Vt,ze,t[0],t[1]),Is=new Yl(Vt),gn=new uc(Ht("#brewRoot"),{onBottle:sb,onClose:rb,onInv:()=>{}}),ri=new ec,fp(()=>gn.isOpen||ri.isOpen||ot.disc),G.stall.items.length&&Ne.moveToStall(!0),Ze()!=="letter"&&ze.props.mailbox.set("mailbox_empty"),Vt.snap(3,.8),Vt.dist=Lp,Pu(),gp({onAct:wu,onKey:cb}),window.addEventListener("resize",()=>Vt.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&ot.started&&(G.lastSeen=fe(),G.pos=[ft.x,ft.z],me())}),Ht("#hud .hud-tr #bBag").addEventListener("click",()=>{Ds()||(ct.click(),Xp())}),Ht("#bBook").addEventListener("click",()=>{Ds()||(ct.click(),qp())}),Ht("#bSet").addEventListener("click",()=>{Ds()||(ct.click(),Kp())}),requestAnimationFrame(e=>{Tu=e,jp(e)}),Ht("#loading").classList.add("done"),setTimeout(()=>Ht("#loading").remove(),600),ub(),location.hash==="#test"&&(window.__slice={G:ot,save:G,world:Vt,Puppet:Ms,get witch(){return ft},get cust(){return ee},brew:gn,garden:Fn,wild:si,cat:Ne,folk:xn,act:wu,targets:Bp,pickTarget:zp,get mini(){return ri},get S(){return ze},catchBug:Hp,goFish:Vp,tp(e,n){ft.spr.mesh.position.x=e,ft.spr.mesh.position.z=n}})}function ub(){let i=Ht("#title");i.classList.remove("hidden");let t=i.querySelector(".title-main"),e=i.querySelector(".title-new"),n=Ht("#bStart");n.querySelector("span").textContent=G.name?`Continue as ${G.name}`:"Start";let s=()=>{sp(),ql(),ct.click()};n.addEventListener("click",()=>{if(s(),G.name){Ip(!1);return}t.classList.add("hidden"),e.classList.remove("hidden");let a=Ht("#nameIn");setTimeout(()=>a.focus(),50)});let r=()=>{let a=Ht("#nameIn").value.trim().replace(/[<>]/g,"").slice(0,12);if(!a){ii(Ht("#nameIn")),ct.click();return}G.name=a,me(),ct.quest(),Ip(!0)};Ht("#bBegin").addEventListener("click",r),Ht("#nameIn").addEventListener("keydown",a=>{a.key==="Enter"&&r()})}async function Ip(i){await Ta(!0),Ht("#title").classList.add("hidden"),Ht("#hud").classList.remove("hidden"),Vn&&Ht("#touch").classList.remove("hidden"),ot.started=!0,Vt.distGoal=Ls,Vt.dist=Ls,Vt.snap(ft.x,ft.z+.5);let t=fe()-(G.lastSeen||fe()),e=Jp(!0);if(Sa(G.coins),au(Su(),G.fame%3/3),br(G.newCount||0),ot.where=ft.x>Ri+1?"town":ft.x<Ss?"forest":"home",G.cust.here||Ze()==="deliver"?Pa(!1):Ze()==="talk"?Pa(!0):Ze()==="free"&&fe()>=G.cust.nextAt&&Pa(!1),G.stall.items.length&&Ne.moveToStall(!0),await Ta(!1),i)Dn("Hazel Cottage",`Welcome home, ${ni(G.name)}`,{ms:3e3}),setTimeout(async()=>{Ne.hop(),ct.meow();let n=lt.mailbox[0]+1.5,s=lt.mailbox[1]+.7;ft.walkTo(n,s,Ne.x,2.4),ot.focus=[(Ne.x+n)/2,(Ne.z+s)/2],Vt.distGoal=vi,await Pi("Kuro","Mrrow. (Kuro paws at the mailbox. A letter is sticking out.)",[],{pitch:cs.kuro}),ot.focus=null,Vt.distGoal=Ls},1400);else{let n=()=>Dn(ft.x>Ri?"Mossbrook Square":ft.x<Ss?"Whisperwood":"Hazel Cottage",`Welcome back, ${ni(G.name)}`,{ms:2400}),s=[],r=Fn.readyCount();t>6e4&&(r&&s.push([Aa[G.plots.find((a,o)=>Fn.state(o).ready).crop].sprite[2],`${r} plant${r>1?"s are":" is"} ready to pick`]),e.sold.length&&s.push(["coin",`Kuro sold ${e.sold.length} potion${e.sold.length>1?"s":""} for ${e.total} coins`]),ee&&s.push([ee.def.sprite,`${ee.def.name} is waiting at your door`])),s.length?setTimeout(()=>{ib(s,t),n()},700):n()}}hb().catch(i=>{console.error(i);let t=Ht("#loading p");t&&(t.textContent="Something went wrong while loading. Please reload.")});
