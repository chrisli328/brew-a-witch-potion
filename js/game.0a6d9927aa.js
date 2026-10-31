var lu=0,jl=1,cu=2;var Cr=1,hu=2,Bs=3,Li=0,sn=1,bn=2,Jn=0,Di=1,Ni=2,Ql=3,tc=4,uu=5;var Qi=100,du=101,fu=102,pu=103,mu=104,gu=200,xu=201,_u=202,vu=203,ec=204,nc=205,yu=206,Mu=207,bu=208,Su=209,wu=210,Tu=211,Eu=212,Au=213,Cu=214,Ra=0,Ia=1,Pa=2,Ls=3,La=4,Da=5,Na=6,Ua=7,ic=0,Ru=1,Iu=2,Dn=0,sc=1,rc=2,ac=3,oc=4,lc=5,cc=6,hc=7;var uc=300,Ui=301,ts=302,ao=303,oo=304,Rr=306,Ki=1e3,Xn=1001,Fa=1002,Ge=1003,Pu=1004;var Ir=1005;var Ne=1006,lo=1007;var Fi=1008;var mn=1009,dc=1010,fc=1011,ks=1012,co=1013,Nn=1014,Un=1015,Fn=1016,ho=1017,uo=1018,zs=1020,pc=35902,mc=35899,gc=1021,xc=1022,Sn=1023,qn=1026,Oi=1027,_c=1028,fo=1029,Bi=1030,po=1031;var mo=1033,Pr=33776,Lr=33777,Dr=33778,Nr=33779,go=35840,xo=35841,_o=35842,vo=35843,yo=36196,Mo=37492,bo=37496,So=37488,wo=37489,Ur=37490,To=37491,Eo=37808,Ao=37809,Co=37810,Ro=37811,Io=37812,Po=37813,Lo=37814,Do=37815,No=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,ko=37821,zo=36492,Vo=36494,Go=36495,Ho=36283,Wo=36284,Fr=36285,Xo=36286;var hr=2300,Oa=2301,Aa=2302,Xl=2303,ql=2400,$l=2401,Yl=2402;var Lu=3200;var vc=0,Du=1,fi="",De="srgb",ur="srgb-linear",dr="linear",oe="srgb";var Ca=7680;var Nu=519,Uu=512,Fu=513,Ou=514,qo=515,Bu=516,ku=517,$o=518,zu=519,Vu=35044;var yc="300 es",Ln=2e3,fr=2001;function Df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=pr("canvas");return i.style.display="block",i}var zh={},Ds=null;function Mc(...i){let t="THREE."+i.shift();Ds?Ds("log",t,...i):console.log(t,...i)}function Hu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=Hu(i);let t="THREE."+i.shift();if(Ds)Ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ft(...i){i=Hu(i);let t="THREE."+i.shift();if(Ds)Ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ji(...i){let t=i.join(" ");t in zh||(zh[t]=!0,Nt(...i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xu={[Ra]:Ia,[Pa]:Na,[La]:Ua,[Ls]:Da,[Ia]:Ra,[Na]:Pa,[Ua]:La,[Da]:Ls},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,lr=Math.PI/180,Ns=180/Math.PI;function Vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function bc(i,t){return(i%t+t)%t}function Uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ff(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function Of(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Bf(i,t=1){return t-Math.abs(bc(i,t*2)-t)}function kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gf(i,t){return i+Math.random()*(t-i)}function Hf(i){return i*(.5-Math.random())}function Wf(i){i!==void 0&&(Vh=i);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xf(i){return i*lr}function qf(i){return i*Ns}function $f(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sc={DEG2RAD:lr,RAD2DEG:Ns,generateUUID:Vs,clamp:jt,euclideanModulo:bc,mapLinear:Uf,inverseLerp:Ff,lerp:cr,damp:Of,pingpong:Bf,smoothstep:kf,smootherstep:zf,randInt:Vf,randFloat:Gf,randFloatSpread:Hf,seededRandom:Wf,degToRad:Xf,radToDeg:qf,isPowerOfTwo:$f,ceilPowerOfTwo:Yf,floorPowerOfTwo:Zf,setQuaternionFromProperEuler:Jf,normalize:nn,denormalize:Is},Cc=class Cc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;var ie=Cc,Yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*M;m<0&&(u=-u,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let C=Math.acos(m),D=Math.sin(C);f=Math.sin(f*C)/D,o=Math.sin(o*C)/D,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+M*o;let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rc=class Rc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tl.copy(this).projectOnVector(t),this.sub(Tl)}reflect(t){return this.sub(Tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rc.prototype.isVector3=!0;var W=Rc,Tl=new W,Gh=new Yn,Ic=class Ic{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],C=s[1],D=s[4],S=s[7],E=s[2],I=s[5],N=s[8];return r[0]=a*M+o*C+l*E,r[3]=a*m+o*D+l*I,r[6]=a*f+o*S+l*N,r[1]=c*M+h*C+d*E,r[4]=c*m+h*D+d*I,r[7]=c*f+h*S+d*N,r[2]=u*M+p*C+g*E,r[5]=u*m+p*D+g*I,r[8]=u*f+p*S+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(t,e)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-t)),this}translate(t,e){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ic.prototype.isMatrix3=!0;var Bt=Ic,El=new Bt,Hh=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){let i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:Hh,fromXYZ:Wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Hh,fromXYZ:Wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var Kt=Kf();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,Ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xs===void 0&&(xs=pr("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jf=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Qf=0,Cl=new W,He=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=Ne,a=Fi,o=Sn,l=mn,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Vs(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=uc;He.DEFAULT_ANISOTROPY=1;var Pc=class Pc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,S=(p+1)/2,E=(f+1)/2,I=(h+u)/4,N=(d+M)/4,v=(g+m)/4;return D>S&&D>E?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=I/n,r=N/n):S>E?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=N/r,s=v/r),this.set(n,s,r,e),this}let C=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-M)/C,this.z=(u-h)/C,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pc.prototype.isVector4=!0;var ye=Pc,ka=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new He(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},mr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ro=class ro{constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ro().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),vi.crossVectors(n,hn),vi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),vi.crossVectors(n,hn)),vi.normalize(),aa.crossVectors(hn,vi),s[0]=vi.x,s[4]=aa.x,s[8]=hn.x,s[1]=vi.y,s[5]=aa.y,s[9]=hn.y,s[2]=vi.z,s[6]=aa.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],C=n[3],D=n[7],S=n[11],E=n[15],I=s[0],N=s[4],v=s[8],_=s[12],b=s[1],T=s[5],A=s[9],L=s[13],w=s[2],P=s[6],B=s[10],k=s[14],Y=s[3],$=s[7],j=s[11],nt=s[15];return r[0]=a*I+o*b+l*w+c*Y,r[4]=a*N+o*T+l*P+c*$,r[8]=a*v+o*A+l*B+c*j,r[12]=a*_+o*L+l*k+c*nt,r[1]=h*I+d*b+u*w+p*Y,r[5]=h*N+d*T+u*P+p*$,r[9]=h*v+d*A+u*B+p*j,r[13]=h*_+d*L+u*k+p*nt,r[2]=g*I+M*b+m*w+f*Y,r[6]=g*N+M*T+m*P+f*$,r[10]=g*v+M*A+m*B+f*j,r[14]=g*_+M*L+m*k+f*nt,r[3]=C*I+D*b+S*w+E*Y,r[7]=C*N+D*T+S*P+E*$,r[11]=C*v+D*A+S*B+E*j,r[15]=C*_+D*L+S*k+E*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15],C=l*p-c*u,D=o*p-c*d,S=o*u-l*d,E=a*p-c*h,I=a*u-l*h,N=a*d-o*h;return e*(M*C-m*D+f*S)-n*(g*C-m*E+f*I)+s*(g*D-M*E+f*N)-r*(g*S-M*I+m*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],C=e*o-n*a,D=e*l-s*a,S=e*c-r*a,E=n*l-s*o,I=n*c-r*o,N=s*c-r*l,v=h*M-d*g,_=h*m-u*g,b=h*f-p*g,T=d*m-u*M,A=d*f-p*M,L=u*f-p*m,w=C*L-D*A+S*T+E*b-I*_+N*v;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=(o*L-l*A+c*T)*P,t[1]=(s*A-n*L-r*T)*P,t[2]=(M*N-m*I+f*E)*P,t[3]=(u*I-d*N-p*E)*P,t[4]=(l*b-a*L-c*_)*P,t[5]=(e*L-s*b+r*_)*P,t[6]=(m*S-g*N-f*D)*P,t[7]=(h*N-u*S+p*D)*P,t[8]=(a*A-o*b+c*v)*P,t[9]=(n*b-e*A-r*v)*P,t[10]=(g*I-M*S+f*C)*P,t[11]=(d*S-h*I-p*C)*P,t[12]=(o*_-a*T-l*v)*P,t[13]=(e*T-n*_+s*v)*P,t[14]=(M*D-g*E-m*C)*P,t[15]=(h*E-d*D+u*C)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,M=a*h,m=a*d,f=o*d,C=l*c,D=l*h,S=l*d,E=n.x,I=n.y,N=n.z;return s[0]=(1-(M+f))*E,s[1]=(p+S)*E,s[2]=(g-D)*E,s[3]=0,s[4]=(p-S)*I,s[5]=(1-(u+f))*I,s[6]=(m+C)*I,s[7]=0,s[8]=(g+D)*N,s[9]=(m-C)*N,s[10]=(1-(u+M))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let c=1/a,h=1/o,d=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Ln)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ro.prototype.isMatrix4=!0;var Te=ro,_s=new W,Cn=new Te,tp=new W(0,0,0),ep=new W(1,1,1),vi=new W,aa=new W,hn=new W,Xh=new Te,qh=new Yn,Ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,$h=new W,vs=new Yn,ri=new Te,oa=new W,sr=new W,ip=new W,sp=new Yn,Yh=new W(1,0,0),Zh=new W(0,1,0),Jh=new W(0,0,1),Kh={type:"added"},rp={type:"removed"},ys={type:"childadded",child:null},Rl={type:"childremoved",child:null},dn=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Ti,n=new Yn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Bt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(sr,oa,this.up):ri.lookAt(oa,sr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ri),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),ys.child=t,this.dispatchEvent(ys),ys.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new W(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ap={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},la={h:0,s:0,l:0};function Il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=bc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Il(a,r,t+1/3),this.g=Il(a,r,t),this.b=Il(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Kt.workingToColorSpace(Ke.copy(this),t),Math.round(jt(Ke.r*255,0,255))*65536+Math.round(jt(Ke.g*255,0,255))*256+Math.round(jt(Ke.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=De){Kt.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(la);let n=cr(yi.h,la.h,e),s=cr(yi.s,la.s,e),r=cr(yi.l,la.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Gt;Gt.NAMES=qu;var xr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new W,ai=new W,Pl=new W,oi=new W,Ms=new W,bs=new W,jh=new W,Ll=new W,Dl=new W,Nl=new W,Ul=new ye,Fl=new ye,Ol=new ye,wi=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),ai.subVectors(n,e),Pl.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(ai),l=Rn.dot(Pl),c=ai.dot(ai),h=ai.dot(Pl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ul.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Ul.fromBufferAttribute(t,e),Fl.fromBufferAttribute(t,n),Ol.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ul,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),ai.subVectors(t,e),Rn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Rn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),bs.subVectors(r,n),Ll.subVectors(t,n);let l=Ms.dot(Ll),c=bs.dot(Ll);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,s);let h=Ms.dot(Dl),d=bs.dot(Dl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ms,a);Nl.subVectors(t,r);let p=Ms.dot(Nl),g=bs.dot(Nl);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(bs,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return jh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(jh,o);let f=1/(m+M+u);return a=M*f,o=u*f,e.copy(n).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ei=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),ha.subVectors(this.max,rr),Ss.subVectors(t.a,rr),ws.subVectors(t.b,rr),Ts.subVectors(t.c,rr),Mi.subVectors(ws,Ss),bi.subVectors(Ts,ws),qi.subVectors(Ss,Ts);let e=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-qi.z,qi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,qi.z,0,-qi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-qi.y,qi.x,0];return!Bl(e,Ss,ws,Ts,ha)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,Ss,ws,Ts,ha))?!1:(ua.crossVectors(Mi,bi),e=[ua.x,ua.y,ua.z],Bl(e,Ss,ws,Ts,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new W,new W,new W,new W,new W,new W,new W,new W],In=new W,ca=new Ei,Ss=new W,ws=new W,Ts=new W,Mi=new W,bi=new W,qi=new W,rr=new W,ha=new W,ua=new W,$i=new W;function Bl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ie=new W,da=new ie,op=0,Xe=class extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var yn=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},lp=new Ei,ar=new W,kl=new W,ji=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(kl)),this.expandByPoint(ar.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cp=0,vn=new Te,zl=new dn,Es=new W,un=new Ei,or=new Ei,Ve=new W,fn=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Df(t)?vr:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return zl.lookAt(t),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(un.min,or.min),un.expandByPoint(Ve),Ve.addVectors(un.max,or.max),un.expandByPoint(Ve)):(un.expandByPoint(or.min),un.expandByPoint(or.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(t,c),Ve.add(Es)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new W,l[v]=new W;let c=new W,h=new W,d=new W,u=new ie,p=new ie,g=new ie,M=new W,m=new W;function f(v,_,b){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),o[v].add(M),o[_].add(M),o[b].add(M),l[v].add(m),l[_].add(m),l[b].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let v=0,_=C.length;v<_;++v){let b=C[v],T=b.start,A=b.count;for(let L=T,w=T+A;L<w;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let D=new W,S=new W,E=new W,I=new W;function N(v){E.fromBufferAttribute(s,v),I.copy(E);let _=o[v];D.copy(_),D.sub(E.multiplyScalar(E.dot(_))).normalize(),S.crossVectors(I,_);let T=S.dot(l[v])<0?-1:1;a.setXYZW(v,D.x,D.y,D.z,T)}for(let v=0,_=C.length;v<_;++v){let b=C[v],T=b.start,A=b.count;for(let L=T,w=T+A;L<w;L+=3)N(t.getX(L+0)),N(t.getX(L+1)),N(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,d=new W;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Xe(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vl=new W,hp=new W,up=new Bt,Pn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vl.subVectors(n,e).cross(hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||up.getNormalMatrix(t),s=this.coplanarPoint(Vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dp=0,Ai=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Di,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new W,Gl=new W,fa=new W,pa=new W,yr=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gl.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),pa.copy(this.origin).sub(Gl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(fa),o=pa.dot(this.direction),l=-pa.dot(fa),c=pa.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Gl).addScaledVector(fa,u),p}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,C=n.y-a.y,D=n.z-a.z,S=Math.abs(l),E=Math.abs(c),I=Math.abs(h),N,v,_,b,T,A,L,w,P,B,k,Y;if(S>=E&&S>=I?(_=l,A=d,P=g,Y=f,l>=0?(N=c,v=h,b=u,T=p,L=M,w=m,B=C,k=D):(N=h,v=c,b=p,T=u,L=m,w=M,B=D,k=C)):E>=I?(_=c,A=u,P=M,Y=C,c>=0?(N=h,v=l,b=p,T=d,L=m,w=g,B=D,k=f):(N=l,v=h,b=d,T=p,L=g,w=m,B=f,k=D)):(_=h,A=p,P=m,Y=D,h>=0?(N=l,v=c,b=d,T=u,L=g,w=M,B=f,k=C):(N=c,v=l,b=u,T=d,L=M,w=g,B=C,k=f)),_===0)return null;let $=N/_,j=v/_,nt=1/_,Pt=b-$*A,Ct=T-j*A,he=L-$*P,te=w-j*P,se=B-$*Y,J=k-j*Y,et=se*te-J*he,St=Pt*J-Ct*se,kt=he*Ct-te*Pt;if(s){if(et<0||St<0||kt<0)return null}else if((et<0||St<0||kt<0)&&(et>0||St>0||kt>0))return null;let Mt=et+St+kt;if(Mt===0)return null;let qt=nt*(et*A+St*P+kt*Y);return(Mt>0?qt<0:qt>0)?null:this.at(qt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qh=new Te,Yi=new yr,ma=new ji,tu=new W,ga=new W,xa=new W,_a=new W,Hl=new W,va=new W,eu=new W,ya=new W,Ue=class extends dn{constructor(t=new fn,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Hl.fromBufferAttribute(d,t),a?va.addScaledVector(Hl,h):va.addScaledVector(Hl.sub(e),h))}e.add(va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(ma.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ma,tu)===null||Yi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],C=Math.max(m.start,p.start),D=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,E=D;S<E;S+=3){let I=o.getX(S),N=o.getX(S+1),v=o.getX(S+2);s=Ma(this,f,t,n,c,h,d,I,N,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let C=o.getX(m),D=o.getX(m+1),S=o.getX(m+2);s=Ma(this,a,t,n,c,h,d,C,D,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],C=Math.max(m.start,p.start),D=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,E=D;S<E;S+=3){let I=S,N=S+1,v=S+2;s=Ma(this,f,t,n,c,h,d,I,N,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let C=m,D=m+1,S=m+2;s=Ma(this,a,t,n,c,h,d,C,D,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fp(i,t,e,n,s,r,a,o){let l;if(t.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;ya.copy(o),ya.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ya);return c<e.near||c>e.far?null:{distance:c,point:ya.clone(),object:i}}function Ma(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ga),i.getVertexPosition(l,xa),i.getVertexPosition(c,_a);let h=fp(i,t,e,n,ga,xa,_a,eu);if(h){let d=new W;wi.getBarycoord(eu,ga,xa,_a,d),s&&(h.uv=wi.getInterpolatedAttribute(s,o,l,c,d,new ie)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,l,c,d,new ie)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new W,materialIndex:0};wi.getNormal(ga,xa,_a,u.normal),h.face=u,h.barycoord=d}return h}var Va=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,h=Ge,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=new ji,pp=new ie(.5,.5),ba=new W,Mr=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],C=r[12],D=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-a,p-h,f-g,E-C).normalize(),s[1].setComponents(c+a,p+h,f+g,E+C).normalize(),s[2].setComponents(c+o,p+d,f+M,E+D).normalize(),s[3].setComponents(c-o,p-d,f-M,E-D).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,p-u,f-m,E-S).normalize();else if(s[4].setComponents(c-l,p-u,f-m,E-S).normalize(),e===Ln)s[5].setComponents(c+l,p+u,f+m,E+S).normalize();else if(e===fr)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=pp.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ga=class extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nu=new Te,Zl=new yr,Sa=new ji,wa=new W,br=class extends dn{constructor(t=new fn,e=new Ga){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;nu.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,M=p;g<M;g++){let m=c.getX(g);wa.fromBufferAttribute(d,m),iu(wa,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,M=p;g<M;g++)wa.fromBufferAttribute(d,g),iu(wa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function iu(i,t,e,n,s,r,a){let o=Zl.distanceSqToPoint(i);if(o<e){let l=new W;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Sr=class extends He{constructor(t=[],e=Ui,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},di=class extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends He{constructor(t,e,n=Nn,s,r,a,o=Ge,l=Ge,c,h=qn,d=1){if(h!==qn&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ha=class extends Ci{constructor(t,e=Nn,n=Ui,s,r,a=Ge,o=Ge,l,c=qn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Os=class i extends fn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(d,2));function g(M,m,f,C,D,S,E,I,N,v,_){let b=S/N,T=E/v,A=S/2,L=E/2,w=I/2,P=N+1,B=v+1,k=0,Y=0,$=new W;for(let j=0;j<B;j++){let nt=j*T-L;for(let Pt=0;Pt<P;Pt++){let Ct=Pt*b-A;$[M]=Ct*C,$[m]=nt*D,$[f]=w,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[f]=I>0?1:-1,h.push($.x,$.y,$.z),d.push(Pt/N),d.push(1-j/v),k+=1}}for(let j=0;j<v;j++)for(let nt=0;nt<N;nt++){let Pt=u+nt+P*j,Ct=u+nt+P*(j+1),he=u+(nt+1)+P*(j+1),te=u+(nt+1)+P*j;l.push(Pt,Ct,te),l.push(Ct,he,te),Y+=6}o.addGroup(p,Y,_),p+=Y,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Mn=class i extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let C=f*u-a;for(let D=0;D<c;D++){let S=D*d-r;g.push(S,-C,0),M.push(0,0,1),m.push(D/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<o;C++){let D=C+c*f,S=C+c*(f+1),E=C+1+c*(f+1),I=C+1+c*f;p.push(D,S,I),p.push(S,E,I)}this.setIndex(p),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(M,3)),this.setAttribute("uv",new yn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(su(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=es(i[e]);for(let s in n)t[s]=n[s]}return t}function su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var $u={clone:es,merge:Qe},gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Xa=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends Ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $l:r=t,o=2*e-n;break;case Yl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:a=t,l=2*n-e;break;case Yl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-u*m+2*u*M-u*g,C=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,D=(-1-p)*m+(1.5+p)*M+.5*g,S=p*m-p*M;for(let E=0;E!==o;++E)r[E]=f*a[h+E]+C*a[c+E]+D*a[l+E]+S*a[d+E];return r}},Ya=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Za=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Ri{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],f=p*u+g*2,C=d[f],D=d[f+1],S=t*u+g*2,E=h[S],I=h[S+1],N=vp(n,e,C,E,s);r[g]=Yu(N,M,D,I,m)}return r}};function Yu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function _p(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function vp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Yu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=_p(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Wl(t.settings)&&(n.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break;case Xl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Aa;case this.InterpolantFactoryMethodBezier:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Wl(this.settings)&&(ru(this.settings.inTangents,t),ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ft("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Nf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Oa;var Ii=class extends pn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=hr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="color";var ja=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="number";var Qa=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Tr=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends pn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=hr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};to.prototype.ValueTypeName="vector";var eo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zu=new eo,no=class{constructor(t){this.manager=t!==void 0?t:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=new W,Ea=new Yn,Wn=new W,Er=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ta,Ea,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ea,Wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ta,Ea,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Ea,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new W,au=new ie,ou=new ie,je=class extends Er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,au,ou),e.subVectors(ou,au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ar=class extends Er{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Cs=-90,Rs=1,io=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Cs,Rs,t,e);s.layers=this.layers,this.add(s);let r=new je(Cs,Rs,t,e);r.layers=this.layers,this.add(r);let a=new je(Cs,Rs,t,e);a.layers=this.layers,this.add(a);let o=new je(Cs,Rs,t,e);o.layers=this.layers,this.add(o);let l=new je(Cs,Rs,t,e);l.layers=this.layers,this.add(l);let c=new je(Cs,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},so=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tc="\\[\\]\\.:\\/",yp=new RegExp("["+Tc+"]","g"),Ec="[^"+Tc+"]",Mp="[^"+Tc.replace("\\.","")+"]",bp=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Sp=/(WCOD+)?/.source.replace("WCOD",Mp),wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Ep=new RegExp("^"+bp+Sp+wp+Tp+"$"),Ap=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(t){let e=Ep.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Jl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);var Lc=class Lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lc.prototype.isMatrix2=!0;var Kl=Lc;function Ac(i,t,e,n){let s=Cp(n);switch(e){case gc:return i*t;case _c:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case xc:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:case vo:return Math.max(i,16)*Math.max(t,8)/4;case go:case _o:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Mo:case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Ur:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cp(i){switch(i){case mn:case dc:return{byteLength:1,components:1};case ks:case fc:case Fn:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case Nn:case co:case Un:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let M=d[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sm=`#ifdef USE_ENVMAP
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Rm=`uniform sampler2D dfgLUT;
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
}`,Im=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g0=`float getShadowMask() {
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
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
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
}`,B0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
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
}`,Z0=`#define MATCAP
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
}`,J0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,Q0=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,ng=`#define STANDARD
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
}`,ig=`#define TOON
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
}`,sg=`#define TOON
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
}`,rg=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,cg=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:kp,batching_vertex:zp,begin_vertex:Vp,beginnormal_vertex:Gp,bsdfs:Hp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:Kp,color_pars_vertex:jp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:am,colorspace_fragment:om,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:Sm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:xm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:vm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:Mm,lights_pars_begin:bm,lights_toon_fragment:wm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Im,lights_fragment_maps:Pm,lights_fragment_end:Lm,lightprobes_pars_fragment:Dm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:km,map_particle_fragment:zm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Hm,morphinstance_vertex:Wm,morphcolor_vertex:Xm,morphnormal_vertex:qm,morphtarget_pars_vertex:$m,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:Jm,normal_pars_fragment:Km,normal_pars_vertex:jm,normal_vertex:Qm,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:i0,iridescence_pars_fragment:s0,opaque_fragment:r0,packing:a0,premultiplied_alpha_fragment:o0,project_vertex:l0,dithering_fragment:c0,dithering_pars_fragment:h0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:p0,shadowmap_vertex:m0,shadowmask_pars_fragment:g0,skinbase_vertex:x0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:y0,specularmap_fragment:M0,specularmap_pars_fragment:b0,tonemapping_fragment:S0,tonemapping_pars_fragment:w0,transmission_fragment:T0,transmission_pars_fragment:E0,uv_pars_fragment:A0,uv_pars_vertex:C0,uv_vertex:R0,worldpos_vertex:I0,background_vert:P0,background_frag:L0,backgroundCube_vert:D0,backgroundCube_frag:N0,cube_vert:U0,cube_frag:F0,depth_vert:O0,depth_frag:B0,distance_vert:k0,distance_frag:z0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:H0,linedashed_frag:W0,meshbasic_vert:X0,meshbasic_frag:q0,meshlambert_vert:$0,meshlambert_frag:Y0,meshmatcap_vert:Z0,meshmatcap_frag:J0,meshnormal_vert:K0,meshnormal_frag:j0,meshphong_vert:Q0,meshphong_frag:tg,meshphysical_vert:eg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:sg,points_vert:rg,points_frag:ag,shadow_vert:og,shadow_frag:lg,sprite_vert:cg,sprite_frag:hg},pt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},jn={basic:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Qe([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Qe([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Qe([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Qe([pt.common,pt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Qe([pt.lights,pt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};jn.physical={uniforms:Qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Yo={r:0,b:0,g:0},ug=new Te,_d=new Bt;_d.set(-1,0,0,0,1,0,0,0,1);function dg(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){let S=C.backgroundBlurriness>0;D=t.get(D,S)}return D}function g(C){let D=!1,S=p(C);S===null?m(a,o):S&&S.isColor&&(m(S,1),D=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(C,D){let S=p(D);S&&(S.isCubeTexture||S.mapping===Rr)?(c===void 0&&(c=new Ue(new Os(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:es(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(D.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_d),c.material.toneMapped=Kt.getTransfer(S.colorSpace)!==oe,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ue(new Mn(2,2),new qe({name:"BackgroundMaterial",uniforms:es(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(S.colorSpace)!==oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,D){C.getRGB(Yo,wc(i)),e.buffers.color.setClear(Yo.r,Yo.g,Yo.b,D,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,D=1){a.set(C),o=D,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,m(a,o)},render:g,addToRenderList:M,dispose:f}}function fg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(T,A,L,w,P){let B=!1,k=d(T,w,L,A);r!==k&&(r=k,c(r.object)),B=p(T,w,L,P),B&&g(T,w,L,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,S(T,A,L,w),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function d(T,A,L,w){let P=w.wireframe===!0,B=n[A.id];B===void 0&&(B={},n[A.id]=B);let k=T.isInstancedMesh===!0?T.id:0,Y=B[k];Y===void 0&&(Y={},B[k]=Y);let $=Y[L.id];$===void 0&&($={},Y[L.id]=$);let j=$[P];return j===void 0&&(j=u(l()),$[P]=j),j}function u(T){let A=[],L=[],w=[];for(let P=0;P<e;P++)A[P]=0,L[P]=0,w[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:w,object:T,attributes:{},index:null}}function p(T,A,L,w){let P=r.attributes,B=A.attributes,k=0,Y=L.getAttributes();for(let $ in Y)if(Y[$].location>=0){let nt=P[$],Pt=B[$];if(Pt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(Pt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(Pt=T.instanceColor)),nt===void 0||nt.attribute!==Pt||Pt&&nt.data!==Pt.data)return!0;k++}return r.attributesNum!==k||r.index!==w}function g(T,A,L,w){let P={},B=A.attributes,k=0,Y=L.getAttributes();for(let $ in Y)if(Y[$].location>=0){let nt=B[$];nt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor));let Pt={};Pt.attribute=nt,nt&&nt.data&&(Pt.data=nt.data),P[$]=Pt,k++}r.attributes=P,r.attributesNum=k,r.index=w}function M(){let T=r.newAttributes;for(let A=0,L=T.length;A<L;A++)T[A]=0}function m(T){f(T,0)}function f(T,A){let L=r.newAttributes,w=r.enabledAttributes,P=r.attributeDivisors;L[T]=1,w[T]===0&&(i.enableVertexAttribArray(T),w[T]=1),P[T]!==A&&(i.vertexAttribDivisor(T,A),P[T]=A)}function C(){let T=r.newAttributes,A=r.enabledAttributes;for(let L=0,w=A.length;L<w;L++)A[L]!==T[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function D(T,A,L,w,P,B,k){k===!0?i.vertexAttribIPointer(T,A,L,P,B):i.vertexAttribPointer(T,A,L,w,P,B)}function S(T,A,L,w){M();let P=w.attributes,B=L.getAttributes(),k=A.defaultAttributeValues;for(let Y in B){let $=B[Y];if($.location>=0){let j=P[Y];if(j===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(j=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(j=T.instanceColor)),j!==void 0){let nt=j.normalized,Pt=j.itemSize,Ct=t.get(j);if(Ct===void 0)continue;let he=Ct.buffer,te=Ct.type,se=Ct.bytesPerElement,J=te===i.INT||te===i.UNSIGNED_INT||j.gpuType===co;if(j.isInterleavedBufferAttribute){let et=j.data,St=et.stride,kt=j.offset;if(et.isInstancedInterleavedBuffer){for(let Mt=0;Mt<$.locationSize;Mt++)f($.location+Mt,et.meshPerAttribute);T.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Mt=0;Mt<$.locationSize;Mt++)m($.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Mt=0;Mt<$.locationSize;Mt++)D($.location+Mt,Pt/$.locationSize,te,nt,St*se,(kt+Pt/$.locationSize*Mt)*se,J)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)f($.location+et,j.meshPerAttribute);T.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<$.locationSize;et++)m($.location+et);i.bindBuffer(i.ARRAY_BUFFER,he);for(let et=0;et<$.locationSize;et++)D($.location+et,Pt/$.locationSize,te,nt,Pt*se,Pt/$.locationSize*et*se,J)}}else if(k!==void 0){let nt=k[Y];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv($.location,nt);break;case 3:i.vertexAttrib3fv($.location,nt);break;case 4:i.vertexAttrib4fv($.location,nt);break;default:i.vertexAttrib1fv($.location,nt)}}}}C()}function E(){_();for(let T in n){let A=n[T];for(let L in A){let w=A[L];for(let P in w){let B=w[P];for(let k in B)h(B[k].object),delete B[k];delete w[P]}}delete n[T]}}function I(T){if(n[T.id]===void 0)return;let A=n[T.id];for(let L in A){let w=A[L];for(let P in w){let B=w[P];for(let k in B)h(B[k].object),delete B[k];delete w[P]}}delete n[T.id]}function N(T){for(let A in n){let L=n[A];for(let w in L){let P=L[w];if(P[T.id]===void 0)continue;let B=P[T.id];for(let k in B)h(B[k].object),delete B[k];delete P[T.id]}}}function v(T){for(let A in n){let L=n[A],w=T.isInstancedMesh===!0?T.id:0,P=L[w];if(P!==void 0){for(let B in P){let k=P[B];for(let Y in k)h(k[Y].object),delete k[Y];delete P[B]}delete L[w],Object.keys(L).length===0&&delete n[A]}}}function _(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:_,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfObject:v,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:m,disableUnusedAttributes:C}}function pg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Sn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let v=N===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==mn&&N!==Un&&!v&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:S,maxSamples:E,samples:I}}function gg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Pn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,D=C*4,S=f.clippingState||null;l.value=S,S=h(g,u,D,p);for(let E=0;E!==D;++E)S[E]=e[E];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let f=p+M*4,C=u.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<f)&&(m=new Float32Array(f));for(let D=0,S=p;D!==M;++D,S+=4)a.copy(d[D]).applyMatrix4(C,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Hs=4,xg=6,_g=20,vg=256,Or=new Ar,Ju=new Gt,Dc=null,Nc=0,Uc=0,Fc=!1,yg=new W,ns=new W,Jo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=yg}=r;Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Nc,Uc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Fn,format:Sn,colorSpace:ur,depthBuffer:!1},s=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mg(r)),this._blurMaterial=Sg(r,t,e),this._ggxMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new Ue(new fn,t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s,r){let l=new je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ju),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Os,new Zn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,C=t.background;C?C.isColor&&(m.color.copy(C),t.background=null,f=!0):(m.color.copy(Ju),f=!0);for(let D=0;D<6;D++){let S=D%3;S===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[D],r.y,r.z)):S===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[D]));let E=this._cubeSize;Gs(s,S*E,D>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Or)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Hs?n-g+Hs:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Gs(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Gs(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,Or)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Hs?s-this._lodMax+Hs:0),u=4*(this._cubeSize-h);Gs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Or)}};function Mg(i){let t=[],e=[],n=i,s=i-Hs+1+xg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let C=f%3*2/3-1,D=f>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];g.set(S,p*u*f);for(let E=0;E<u;E++){let I=h[E*2]*2-1,N=h[E*2+1]*2-1;f===0?ns.set(1,N,I):f===1?ns.set(-I,1,-N):f===2?ns.set(-I,N,1):f===3?ns.set(-1,N,-I):f===4?ns.set(-I,-1,N):ns.set(I,N,-1),ns.toArray(M,(f*u+E)*p)}}let m=new fn;m.setAttribute("position",new Xe(g,p)),m.setAttribute("outputDirection",new Xe(M,p)),e.push(new Ue(m,null)),n>Hs&&n--}return{lodMeshes:e,sizeLods:t}}function Ku(i,t,e){let n=new ln(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Sg(i,t,e){return new qe({name:"SphericalGaussianBlur",defines:{SAMPLES:_g,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ju(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qu(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ko=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Os(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Jn});r.uniforms.tEquirect.value=e;let a=new Ue(s,r),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Ne),new io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function wg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===ao||p===oo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new Ko(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===ao||p===oo,M=p===Ui||p===ts;if(g||M){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Jo(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let C=u.image;return g&&C&&C.height>0||M&&C&&l(C)?(n===null&&(n=new Jo(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===ao?u.mapping=Ui:p===oo&&(u.mapping=ts),u}function l(u){let p=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(p!==null){let C=p.array;M=p.version;for(let D=0,S=C.length;D<S;D+=3){let E=C[D+0],I=C[D+1],N=C[D+2];u.push(E,I,I,N,N,E)}}else{let C=g.array;M=g.version;for(let D=0,S=C.length/3-1;D<S;D+=3){let E=D+0,I=D+1,N=D+2;u.push(E,I,I,N,N,E)}}let m=new(g.count>=65535?vr:_r)(u,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ag(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let _=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],D=0;p===!0&&(D=1),g===!0&&(D=2),M===!0&&(D=3);let S=o.attributes.position.count*D,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let I=new Float32Array(S*E*4*d),N=new mr(I,S,E,d);N.type=Un,N.needsUpdate=!0;let v=D*4;for(let b=0;b<d;b++){let T=m[b],A=f[b],L=C[b],w=S*E*4*b;for(let P=0;P<T.count;P++){let B=P*v;p===!0&&(s.fromBufferAttribute(T,P),I[w+B+0]=s.x,I[w+B+1]=s.y,I[w+B+2]=s.z,I[w+B+3]=0),g===!0&&(s.fromBufferAttribute(A,P),I[w+B+4]=s.x,I[w+B+5]=s.y,I[w+B+6]=s.z,I[w+B+7]=0),M===!0&&(s.fromBufferAttribute(L,P),I[w+B+8]=s.x,I[w+B+9]=s.y,I[w+B+10]=s.z,I[w+B+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:N,size:new ie(S,E)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ig(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Pg={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[oc]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Lg(i,t,e,n,s,r){let a=new ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new fn;c.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yn([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(c,h),u=new Ar(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,C=[],D=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let I=0;I<C.length;I++){let N=C[I];N.setSize&&N.setSize(S,E)}},this.setEffects=function(S){C=S,D=C.length>0&&C[0].isRenderPass===!0;let E=a.width,I=a.height;C.length>0&&o===null&&(o=new ln(E,I,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(E,I,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<C.length;N++){let v=C[N];v.setSize&&v.setSize(E,I)}},this.begin=function(S,E){if(M||S.toneMapping===Dn&&C.length===0)return!1;if(f=E,E!==null){let I=E.width,N=E.height;(a.width!==I||a.height!==N)&&this.setSize(I,N)}return D===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Dn,!0},this.hasRenderPass=function(){return D},this.end=function(S,E){S.toneMapping=m,M=!0;let I=a,N=o;for(let v=0;v<C.length;v++){let _=C[v];_.enabled!==!1&&(_.render(S,N,I,E),_.needsSwap!==!1&&(I=N,N=N===o?l:o))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,h.defines={},Kt.getTransfer(p)===oe&&(h.defines.SRGB_TRANSFER="");let v=Pg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,S.setRenderTarget(f),S.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vd=new He,kc=new Ci(1,1),yd=new mr,Md=new za,bd=new Sr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tl(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Oe(e,n)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Oe(e,n)}}function kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Oe(e,n)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=e.isReversedDepthBuffer()?$o:qo,r=kc):r=vd,e.setTexture2D(t||r,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Md,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bd,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yd,s)}function jg(i){switch(i){case 5126:return Dg;case 35664:return Ng;case 35665:return Ug;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return kg;case 5124:case 35670:return zg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Kg}}function Qg(i,t){i.uniform1fv(this.addr,t)}function tx(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function ex(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function nx(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function ix(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sx(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rx(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ax(i,t){i.uniform1iv(this.addr,t)}function ox(i,t){i.uniform2iv(this.addr,t)}function lx(i,t){i.uniform3iv(this.addr,t)}function cx(i,t){i.uniform4iv(this.addr,t)}function hx(i,t){i.uniform1uiv(this.addr,t)}function ux(i,t){i.uniform2uiv(this.addr,t)}function dx(i,t){i.uniform3uiv(this.addr,t)}function fx(i,t){i.uniform4uiv(this.addr,t)}function px(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=kc:a=vd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function mx(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Md,r[a])}function gx(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bd,r[a])}function xx(i,t,e){let n=this.cache,s=t.length,r=tl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yd,r[a])}function _x(i){switch(i){case 5126:return Qg;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return xx}}var zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jg(e.type)}},Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_x(e.type)}},Gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function vx(i,t,e){let n=i.name,s=n.length;for(Oc.lastIndex=0;;){let r=Oc.exec(n),a=Oc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rd(e,c===void 0?new zc(o,i,t):new Vc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Gc(o),rd(e,d)),e=d}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);vx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ad(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yx=37297,Mx=0;function bx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var od=new Bt;function Sx(i){Kt._getMatrix(od,Kt.workingColorSpace,i);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+bx(i.getShaderSource(t),o)}else return r}function wx(i,t){let e=Sx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Tx={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[oc]:"ACESFilmic",[cc]:"AgX",[hc]:"Neutral",[lc]:"Custom"};function Ex(i,t){let e=Tx[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zo=new W;function Ax(){Kt.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Rx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ix(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function kr(i){return i!==""}function cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(i){return i.replace(Px,Dx)}var Lx=new Map;function Dx(i,t){let e=Wt[t];if(e===void 0){let n=Lx.get(t);if(n!==void 0)e=Wt[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hc(e)}var Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(Nx,Ux)}function Ux(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Fx={[Cr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function Ox(i){return Fx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bx={[Ui]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function kx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Bx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zx={[ts]:"ENVMAP_MODE_REFRACTION"};function Vx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gx={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Ru]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function Hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gx[i.combine]||"ENVMAP_BLENDING_NONE"}function Wx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ox(e),c=kx(e),h=Vx(e),d=Hx(e),u=Wx(e),p=Cx(e),g=Rx(r),M=s.createProgram(),m,f,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),Ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Hc(a),a=cd(a,e),a=hd(a,e),o=Hc(o),o=cd(o,e),o=hd(o,e),a=ud(a),o=ud(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let D=C+m+a,S=C+f+o,E=ad(s,s.VERTEX_SHADER,D),I=ad(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,I),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(T){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(M)||"",L=s.getShaderInfoLog(E)||"",w=s.getShaderInfoLog(I)||"",P=A.trim(),B=L.trim(),k=w.trim(),Y=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,I);else{let j=ld(s,E,"vertex"),nt=ld(s,I,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+j+`
`+nt)}else P!==""?Nt("WebGLProgram: Program Info Log:",P):(B===""||k==="")&&($=!1);$&&(T.diagnostics={runnable:Y,programLog:P,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(E),s.deleteShader(I),v=new Ws(s,M),_=Ix(s,M)}let v;this.getUniforms=function(){return v===void 0&&N(this),v};let _;this.getAttributes=function(){return _===void 0&&N(this),_};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,yx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=I,this}var qx=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xc(t),e.set(t,n)),n}},Xc=class{constructor(t){this.id=qx++,this.code=t,this.usedTimes=0}};function $x(i){return i===Bi||i===Ur||i===Fr}function Yx(i,t,e,n,s,r){let a=new gr,o=new Wc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,_,b,T,A,L){let w=T.fog,P=A.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=t.get(v.envMap||B,k),$=Y&&Y.mapping===Rr?Y.image.height:null,j=p[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let nt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Pt=nt!==void 0?nt.length:0,Ct=0;P.morphAttributes.position!==void 0&&(Ct=1),P.morphAttributes.normal!==void 0&&(Ct=2),P.morphAttributes.color!==void 0&&(Ct=3);let he,te,se,J;if(j){let pe=jn[j];he=pe.vertexShader,te=pe.fragmentShader}else{he=v.vertexShader,te=v.fragmentShader;let pe=o.getVertexShaderStage(v),re=o.getFragmentShaderStage(v);o.update(v,pe,re),se=pe.id,J=re.id}let et=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),kt=A.isInstancedMesh===!0,Mt=A.isBatchedMesh===!0,qt=!!v.map,Le=!!v.matcap,Yt=!!Y,ne=!!v.aoMap,fe=!!v.lightMap,Jt=!!v.bumpMap&&v.wireframe===!1,be=!!v.normalMap,ze=!!v.displacementMap,on=!!v.emissiveMap,we=!!v.metalnessMap,Ce=!!v.roughnessMap,O=v.anisotropy>0,Ye=v.clearcoat>0,le=v.dispersion>0,R=v.retroreflectivity>0,x=v.iridescence>0,z=v.sheen>0,X=v.transmission>0,Z=O&&!!v.anisotropyMap,st=Ye&&!!v.clearcoatMap,ot=Ye&&!!v.clearcoatNormalMap,K=Ye&&!!v.clearcoatRoughnessMap,tt=x&&!!v.iridescenceMap,ct=x&&!!v.iridescenceThicknessMap,Rt=z&&!!v.sheenColorMap,ft=z&&!!v.sheenRoughnessMap,ht=!!v.specularMap,It=!!v.specularColorMap,Dt=!!v.specularIntensityMap,Vt=X&&!!v.transmissionMap,F=X&&!!v.thicknessMap,ut=!!v.gradientMap,Q=!!v.alphaMap,dt=v.alphaTest>0,xt=!!v.alphaHash,it=!!v.extensions,Lt=Dn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Et={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:he,fragmentShader:te,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&A._colorsTexture!==null,instancing:kt,instancingColor:kt&&A.instanceColor!==null,instancingMorph:kt&&A.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qt,matcap:Le,envMap:Yt,envMapMode:Yt&&Y.mapping,envMapCubeUVHeight:$,aoMap:ne,lightMap:fe,bumpMap:Jt,normalMap:be,displacementMap:ze,emissiveMap:on,normalMapObjectSpace:be&&v.normalMapType===Du,normalMapTangentSpace:be&&v.normalMapType===vc,packedNormalMap:be&&v.normalMapType===vc&&$x(v.normalMap.format),metalnessMap:we,roughnessMap:Ce,anisotropy:O,anisotropyMap:Z,clearcoat:Ye,clearcoatMap:st,clearcoatNormalMap:ot,clearcoatRoughnessMap:K,dispersion:le,retroreflection:R,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:z,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:ht,specularColorMap:It,specularIntensityMap:Dt,transmission:X,transmissionMap:Vt,thicknessMap:F,gradientMap:ut,opaque:v.transparent===!1&&v.blending===Di&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:dt,alphaHash:xt,combine:v.combine,mapUv:qt&&g(v.map.channel),aoMapUv:ne&&g(v.aoMap.channel),lightMapUv:fe&&g(v.lightMap.channel),bumpMapUv:Jt&&g(v.bumpMap.channel),normalMapUv:be&&g(v.normalMap.channel),displacementMapUv:ze&&g(v.displacementMap.channel),emissiveMapUv:on&&g(v.emissiveMap.channel),metalnessMapUv:we&&g(v.metalnessMap.channel),roughnessMapUv:Ce&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:st&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(v.sheenRoughnessMap.channel),specularMapUv:ht&&g(v.specularMap.channel),specularColorMapUv:It&&g(v.specularColorMap.channel),specularIntensityMapUv:Dt&&g(v.specularIntensityMap.channel),transmissionMapUv:Vt&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(be||O),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!P.attributes.uv&&(qt||Q),fog:!!w,useFog:v.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&be===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ct,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:qt&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:on&&v.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function m(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let b in v.defines)_.push(b),_.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(f(_,v),C(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function f(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numSunLights),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numSunLightShadows),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function C(v,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function D(v){let _=p[v.type],b;if(_){let T=jn[_];b=$u.clone(T.uniforms)}else b=v.uniforms;return b}function S(v,_){let b=h.get(_);return b!==void 0?++b.usedTimes:(b=new Xx(i,_,v,s),c.push(b),h.set(_,b)),b}function E(v){if(--v.usedTimes===0){let _=c.indexOf(v);c[_]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function I(v){o.remove(v)}function N(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:D,acquireProgram:S,releaseProgram:E,releaseShaderCache:I,programs:c,dispose:N}}function Zx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,M,m,f){let C=i[t];return C===void 0?(C={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[t]=C):(C.id=u.id,C.object=u,C.geometry=p,C.material=g,C.materialVariant=a(u),C.groupOrder=M,C.renderOrder=u.renderOrder,C.z=m,C.group=f),t++,C}function l(u,p,g,M,m,f,C){C.reversedDepth===!0&&(m=-m);let D=o(u,p,g,M,m,f);g.transmission>0?n.push(D):g.transparent===!0?s.push(D):e.push(D)}function c(u,p,g,M,m,f){let C=o(u,p,g,M,m,f);g.transmission>0?n.unshift(C):g.transparent===!0?s.unshift(C):e.unshift(C)}function h(u,p){e.length>1&&e.sort(u||Jx),n.length>1&&n.sort(p||fd),s.length>1&&s.sort(p||fd)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Kx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new pd,i.set(n,[a])):s>=r.length?(a=new pd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Gt};break;case"SpotLight":e={position:new W,direction:new W,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var t_=0;function e_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n_(i){let t=new jx,e=Qx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new Te,a=new Te;function o(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,C=0,D=0,S=0,E=0,I=0,N=0,v=0,_=0,b=0;c.sort(e_);for(let A=0,L=c.length;A<L;A++){let w=c[A],P=w.color,B=w.intensity,k=w.distance,Y=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Bi?Y=w.shadow.map.texture:Y=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=P.r*B,d+=P.g*B,u+=P.b*B;else if(w.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(w.sh.coefficients[$],B);b++}else if(w.isSunLight){let $=t.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,nt=e.get(w);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=Y;let Pt=j.getViewportCount();for(let Ct=0;Ct<Pt;Ct++)n.sunShadowMatrix[M+Ct]=j.getMatrix(Ct),n.sunShadowCascade[M+Ct]=j._cascadeData[Ct];M+=Pt,g++}n.sun[p]=$,p++}else if(w.isDirectionalLight){let $=t.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let j=w.shadow,nt=e.get(w);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=w.shadow.matrix,E++}n.directional[m]=$,m++}else if(w.isSpotLight){let $=t.get(w);$.position.setFromMatrixPosition(w.matrixWorld),$.color.copy(P).multiplyScalar(B),$.distance=k,$.coneCos=Math.cos(w.angle),$.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),$.decay=w.decay,n.spot[C]=$;let j=w.shadow;if(w.map&&(n.spotLightMap[v]=w.map,v++,j.updateMatrices(w),w.castShadow&&_++),n.spotLightMatrix[C]=j.matrix,w.castShadow){let nt=e.get(w);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[C]=nt,n.spotShadowMap[C]=Y,N++}C++}else if(w.isRectAreaLight){let $=t.get(w);$.color.copy(P).multiplyScalar(B),$.halfWidth.set(w.width*.5,0,0),$.halfHeight.set(0,w.height*.5,0),n.rectArea[D]=$,D++}else if(w.isPointLight){let $=t.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),$.distance=w.distance,$.decay=w.decay,w.castShadow){let j=w.shadow,nt=e.get(w);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[f]=nt,n.pointShadowMap[f]=Y,n.pointShadowMatrix[f]=w.shadow.matrix,I++}n.point[f]=$,f++}else if(w.isHemisphereLight){let $=t.get(w);$.skyColor.copy(w.color).multiplyScalar(B),$.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[S]=$,S++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let T=n.hash;(T.sunLength!==p||T.directionalLength!==m||T.pointLength!==f||T.spotLength!==C||T.rectAreaLength!==D||T.hemiLength!==S||T.numSunShadows!==g||T.numDirectionalShadows!==E||T.numPointShadows!==I||T.numSpotShadows!==N||T.numSpotMaps!==v||T.numLightProbes!==b)&&(n.sun.length=p,n.directional.length=m,n.spot.length=C,n.rectArea.length=D,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+v-_,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=b,T.sunLength=p,T.directionalLength=m,T.pointLength=f,T.spotLength=C,T.rectAreaLength=D,T.hemiLength=S,T.numSunShadows=g,T.numDirectionalShadows=E,T.numPointShadows=I,T.numSpotShadows=N,T.numSpotMaps=v,T.numLightProbes=b,n.version=t_++)}function l(c,h){let d=0,u=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let C=0,D=c.length;C<D;C++){let S=c[C];if(S.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),d++}else if(S.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(S.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function md(i){let t=new n_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function i_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new md(i),t.set(s,[o])):r>=a.length?(o=new md(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`,a_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],o_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],gd=new Te,Br=new W,Bc=new W;function l_(i,t,e){let n=new Mr,s=new ie,r=new ie,a=new ye,o=new Xa,l=new qa,c={},h=e.maxTextureSize,d={[Li]:sn,[sn]:Li,[bn]:bn},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ue(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let f=this.type;this.render=function(I,N,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;this.type===hu&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let _=i.getRenderTarget(),b=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Jn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let L=f!==this.type;L&&N.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(P=>P.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,P=I.length;w<P;w++){let B=I[w],k=B.shadow;if(k===void 0){Nt("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();s.multiply(Y),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=$,k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Bs){if(B.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ln(s.x,s.y,{format:Bi,type:Fn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new Ci(s.x,s.y,Un),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=qn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge}else B.isPointLight?(k.map=new Ko(s.x),k.map.depthTexture=new Ha(s.x,Nn)):(k.map=new ln(s.x,s.y),k.map.depthTexture=new Ci(s.x,s.y,Nn)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=qn,this.type===Cr?(k.map.depthTexture.compareFunction=$?$o:qo,k.map.depthTexture.minFilter=Ne,k.map.depthTexture.magFilter=Ne):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,v);for(let nt=0;nt<j;nt++){let Pt=k.getCamera(nt);if(B.isPointLight){let Ct=k.camera,he=k.matrix,te=B.distance||Ct.far;te!==Ct.far&&(Ct.far=te,Ct.updateProjectionMatrix()),Br.setFromMatrixPosition(B.matrixWorld),Ct.position.copy(Br),Bc.copy(Ct.position),Bc.add(a_[nt]),Ct.up.copy(o_[nt]),Ct.lookAt(Bc),Ct.updateMatrixWorld(),he.makeTranslation(-Br.x,-Br.y,-Br.z),gd.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),k._frustum.setFromProjectionMatrix(gd,Ct.coordinateSystem,Ct.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(k.map),i.clear());let Ct=k.getViewport(nt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),A.viewport(a)}n=k.getFrustum(nt),S(N,v,Pt,B,this.type)}k.isPointLightShadow!==!0&&this.type===Bs&&C(k,v),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,b,T)};function C(I,N){let v=t.update(M);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null?I.mapPass=new ln(s.x,s.y,{format:Bi,type:Fn}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(N,null,v,u,M,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value.set(I.map.width,I.map.height),p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(N,null,v,p,M,null)}function D(I,N,v,_){let b=null,T=v.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)b=T;else if(b=v.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let A=b.uuid,L=N.uuid,w=c[A];w===void 0&&(w={},c[A]=w);let P=w[L];P===void 0&&(P=b.clone(),w[L]=P,N.addEventListener("dispose",E)),b=P}if(b.visible=N.visible,b.wireframe=N.wireframe,_===Bs?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:d[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,v.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let A=i.properties.get(b);A.light=v}return b}function S(I,N,v,_,b){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Bs)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,I.matrixWorld);let L=t.update(I),w=I.material;if(Array.isArray(w)){let P=L.groups;for(let B=0,k=P.length;B<k;B++){let Y=P[B],$=w[Y.materialIndex];if($&&$.visible){let j=D(I,$,_,b);I.onBeforeShadow(i,I,N,v,L,j,Y),i.renderBufferDirect(v,null,L,j,I,Y),I.onAfterShadow(i,I,N,v,L,j,Y)}}}else if(w.visible){let P=D(I,w,_,b);I.onBeforeShadow(i,I,N,v,L,P,null),i.renderBufferDirect(v,null,L,P,I,null),I.onAfterShadow(i,I,N,v,L,P,null)}}let A=I.children;for(let L=0,w=A.length;L<w;L++)S(A[L],N,v,_,b)}function E(I){I.target.removeEventListener("dispose",E);for(let v in c){let _=c[v],b=I.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function c_(i,t){function e(){let F=!1,ut=new ye,Q=null,dt=new ye(0,0,0,0);return{setMask:function(xt){Q!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),Q=xt)},setLocked:function(xt){F=xt},setClear:function(xt,it,Lt,Et,pe){pe===!0&&(xt*=Et,it*=Et,Lt*=Et),ut.set(xt,it,Lt,Et),dt.equals(ut)===!1&&(i.clearColor(xt,it,Lt,Et),dt.copy(ut))},reset:function(){F=!1,Q=null,dt.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,Q=null,dt=null,xt=null;return{setReversed:function(it){if(ut!==it){let Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let Et=xt;xt=null,this.setClear(Et)}},getReversed:function(){return ut},setTest:function(it){it?et(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!F&&(i.depthMask(it),Q=it)},setFunc:function(it){if(ut&&(it=Xu[it]),dt!==it){switch(it){case Ra:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=it}},setLocked:function(it){F=it},setClear:function(it){xt!==it&&(xt=it,ut&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,Q=null,dt=null,xt=null,ut=!1}}}function s(){let F=!1,ut=null,Q=null,dt=null,xt=null,it=null,Lt=null,Et=null,pe=null;return{setTest:function(re){F||(re?et(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(re){ut!==re&&!F&&(i.stencilMask(re),ut=re)},setFunc:function(re,An,Gn){(Q!==re||dt!==An||xt!==Gn)&&(i.stencilFunc(re,An,Gn),Q=re,dt=An,xt=Gn)},setOp:function(re,An,Gn){(it!==re||Lt!==An||Et!==Gn)&&(i.stencilOp(re,An,Gn),it=re,Lt=An,Et=Gn)},setLocked:function(re){F=re},setClear:function(re){pe!==re&&(i.clearStencil(re),pe=re)},reset:function(){F=!1,ut=null,Q=null,dt=null,xt=null,it=null,Lt=null,Et=null,pe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,C=null,D=null,S=null,E=null,I=null,N=null,v=new Gt(0,0,0),_=0,b=!1,T=null,A=null,L=null,w=null,P=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),k=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=Y>=2);let j=null,nt={},Pt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),he=new ye().fromArray(Pt),te=new ye().fromArray(Ct);function se(F,ut,Q,dt){let xt=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Q;Lt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ut+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return it}let J={};J[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ls),Jt(!1),be(jl),et(i.CULL_FACE),ne(Jn);function et(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function St(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function kt(F,ut){return u[F]!==ut?(i.bindFramebuffer(F,ut),u[F]=ut,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Mt(F,ut){let Q=g,dt=!1;if(F){Q=p.get(ut),Q===void 0&&(Q=[],p.set(ut,Q));let xt=F.textures;if(Q.length!==xt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Lt=xt.length;it<Lt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=xt.length,dt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,dt=!0);dt&&i.drawBuffers(Q)}function qt(F){return M!==F?(i.useProgram(F),M=F,!0):!1}let Le={[Qi]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};Le[pu]=i.MIN,Le[mu]=i.MAX;let Yt={[gu]:i.ZERO,[xu]:i.ONE,[_u]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[nc]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(F,ut,Q,dt,xt,it,Lt,Et,pe,re){if(F===Jn){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),F!==uu){if(F!==f||re!==b){if((C!==Qi||E!==Qi)&&(i.blendEquation(i.FUNC_ADD),C=Qi,E=Qi),re)switch(F){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ft("WebGLState: Invalid blending: ",F);break}else switch(F){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",F);break}D=null,S=null,I=null,N=null,v.set(0,0,0),_=0,f=F,b=re}return}xt=xt||ut,it=it||Q,Lt=Lt||dt,(ut!==C||xt!==E)&&(i.blendEquationSeparate(Le[ut],Le[xt]),C=ut,E=xt),(Q!==D||dt!==S||it!==I||Lt!==N)&&(i.blendFuncSeparate(Yt[Q],Yt[dt],Yt[it],Yt[Lt]),D=Q,S=dt,I=it,N=Lt),(Et.equals(v)===!1||pe!==_)&&(i.blendColor(Et.r,Et.g,Et.b,pe),v.copy(Et),_=pe),f=F,b=!1}function fe(F,ut){F.side===bn?St(i.CULL_FACE):et(i.CULL_FACE);let Q=F.side===sn;ut&&(Q=!Q),Jt(Q),F.blending===Di&&F.transparent===!1?ne(Jn):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let dt=F.stencilWrite;o.setTest(dt),dt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),on(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(F){T!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),T=F)}function be(F){F!==lu?(et(i.CULL_FACE),F!==A&&(F===jl?i.cullFace(i.BACK):F===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),A=F}function ze(F){F!==L&&(k&&i.lineWidth(F),L=F)}function on(F,ut,Q){F?(et(i.POLYGON_OFFSET_FILL),(w!==ut||P!==Q)&&(w=ut,P=Q,a.getReversed()&&(ut=-ut),i.polygonOffset(ut,Q))):St(i.POLYGON_OFFSET_FILL)}function we(F){F?et(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ce(F){F===void 0&&(F=i.TEXTURE0+B-1),j!==F&&(i.activeTexture(F),j=F)}function O(F,ut,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+B-1:Q=j);let dt=nt[Q];dt===void 0&&(dt={type:void 0,texture:void 0},nt[Q]=dt),(dt.type!==F||dt.texture!==ut)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(F,ut||J[F]),dt.type=F,dt.texture=ut)}function Ye(){let F=nt[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function x(){try{i.texSubImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function st(){try{i.texStorage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function ot(){try{i.texStorage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function K(){try{i.texImage2D(...arguments)}catch(F){Ft("WebGLState:",F)}}function tt(){try{i.texImage3D(...arguments)}catch(F){Ft("WebGLState:",F)}}function ct(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Rt(F,ut){d[F]!==ut&&(i.pixelStorei(F,ut),d[F]=ut)}function ft(F){he.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),he.copy(F))}function ht(F){te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function It(F,ut){let Q=c.get(ut);Q===void 0&&(Q=new WeakMap,c.set(ut,Q));let dt=Q.get(F);dt===void 0&&(dt=i.getUniformBlockIndex(ut,F.name),Q.set(F,dt))}function Dt(F,ut){let dt=c.get(ut).get(F);l.get(ut)!==dt&&(i.uniformBlockBinding(ut,dt,F.__bindingPointIndex),l.set(ut,dt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,nt={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,C=null,D=null,S=null,E=null,I=null,N=null,v=new Gt(0,0,0),_=0,b=!1,T=null,A=null,L=null,w=null,P=null,he.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:St,bindFramebuffer:kt,drawBuffers:Mt,useProgram:qt,setBlending:ne,setMaterial:fe,setFlipSided:Jt,setCullFace:be,setLineWidth:ze,setPolygonOffset:on,setScissorTest:we,activeTexture:Ce,bindTexture:O,unbindTexture:Ye,compressedTexImage2D:le,compressedTexImage3D:R,texImage2D:K,texImage3D:tt,pixelStorei:Rt,getParameter:ct,updateUBOMapping:It,uniformBlockBinding:Dt,texStorage2D:st,texStorage3D:ot,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:ft,viewport:ht,reset:Vt}}function h_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,x){return g?new OffscreenCanvas(R,x):pr("canvas")}function m(R,x,z){let X=1,Z=le(R);if((Z.width>z||Z.height>z)&&(X=z/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let st=Math.floor(X*Z.width),ot=Math.floor(X*Z.height);u===void 0&&(u=M(st,ot));let K=x?M(st,ot):u;return K.width=st,K.height=ot,K.getContext("2d").drawImage(R,0,0,st,ot),Nt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+ot+")."),K}else return"data"in R&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function f(R){return R.generateMipmaps}function C(R){i.generateMipmap(R)}function D(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,x,z,X,Z,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot;X&&(ot=t.get("EXT_texture_norm16"),ot||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&ot&&(K=ot.R16_EXT),z===i.SHORT&&ot&&(K=ot.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),x===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&ot&&(K=ot.RG16_EXT),z===i.SHORT&&ot&&(K=ot.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&ot&&(K=ot.RGB16_EXT),z===i.SHORT&&ot&&(K=ot.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let tt=st?dr:Kt.getTransfer(Z);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=tt===oe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ot&&(K=ot.RGBA16_EXT),z===i.SHORT&&ot&&(K=ot.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(R,x){let z;return R?x===null||x===Nn||x===zs?z=i.DEPTH24_STENCIL8:x===Un?z=i.DEPTH32F_STENCIL8:x===ks&&(z=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===zs?z=i.DEPTH_COMPONENT24:x===Un?z=i.DEPTH_COMPONENT32F:x===ks&&(z=i.DEPTH_COMPONENT16),z}function I(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ge&&R.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function N(R){let x=R.target;x.removeEventListener("dispose",N),_(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(R){let x=R.target;x.removeEventListener("dispose",v),T(x)}function _(R){let x=n.get(R);if(x.__webglInit===void 0)return;let z=R.source,X=p.get(z);if(X){let Z=X[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(R),Object.keys(X).length===0&&p.delete(z)}n.remove(R)}function b(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let z=R.source,X=p.get(z);delete X[x.__cacheKey],a.memory.textures--}function T(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Z=0;Z<x.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=R.textures;for(let X=0,Z=z.length;X<Z;X++){let st=n.get(z[X]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(z[X])}n.remove(R)}let A=0;function L(){A=0}function w(){return A}function P(R){A=R}function B(){let R=A;return R>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function k(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Y(R,x){let z=n.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let X=R.image;if(X===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(z,R,x);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function $(R,x){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){St(z,R,x);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function j(R,x){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){St(z,R,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function nt(R,x){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){kt(z,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Pt={[Ki]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},Ct={[Ge]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},he={[Uu]:i.NEVER,[zu]:i.ALWAYS,[Fu]:i.LESS,[qo]:i.LEQUAL,[Ou]:i.EQUAL,[$o]:i.GEQUAL,[Bu]:i.GREATER,[ku]:i.NOTEQUAL};function te(R,x){if(x.type===Un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ne||x.magFilter===lo||x.magFilter===Ir||x.magFilter===Fi||x.minFilter===Ne||x.minFilter===lo||x.minFilter===Ir||x.minFilter===Fi)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Pt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Pt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Pt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ct[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ct[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ge||x.minFilter!==Ir&&x.minFilter!==Fi||x.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",N));let X=x.source,Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));let st=k(x);if(st!==R.__cacheKey){Z[st]===void 0&&(Z[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[st].usedTimes++;let ot=Z[R.__cacheKey];ot!==void 0&&(Z[R.__cacheKey].usedTimes--,ot.usedTimes===0&&b(x)),R.__cacheKey=st,R.__webglTexture=Z[st].texture}return z}function J(R,x,z){return Math.floor(Math.floor(R/z)/x)}function et(R,x,z,X){let st=R.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,X,x.data);else{st.sort((Rt,ft)=>Rt.start-ft.start);let ot=0;for(let Rt=1;Rt<st.length;Rt++){let ft=st[ot],ht=st[Rt],It=ft.start+ft.count,Dt=J(ht.start,x.width,4),Vt=J(ft.start,x.width,4);ht.start<=It+1&&Dt===Vt&&J(ht.start+ht.count-1,x.width,4)===Dt?ft.count=Math.max(ft.count,ht.start+ht.count-ft.start):(++ot,st[ot]=ht)}st.length=ot+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,ft=st.length;Rt<ft;Rt++){let ht=st[Rt],It=Math.floor(ht.start/4),Dt=Math.ceil(ht.count/4),Vt=It%x.width,F=Math.floor(It/x.width),ut=Dt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Vt,F,ut,Q,z,X,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function St(R,x,z){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let Z=se(R,x),st=x.source;e.bindTexture(X,R.__webglTexture,i.TEXTURE0+z);let ot=n.get(st);if(st.version!==ot.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Q=Kt.getPrimaries(Kt.workingColorSpace),dt=x.colorSpace===fi?null:Kt.getPrimaries(x.colorSpace),xt=x.colorSpace===fi||Q===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=m(x.image,!1,s.maxTextureSize);tt=Ye(x,tt);let ct=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),ft=S(x.internalFormat,ct,Rt,x.normalized,x.colorSpace,x.isVideoTexture);te(X,x);let ht,It=x.mipmaps,Dt=x.isVideoTexture!==!0,Vt=ot.__version===void 0||Z===!0,F=st.dataReady,ut=I(x,tt);if(x.isDepthTexture)ft=E(x.format===Oi,x.type),Vt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,ft,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,ct,Rt,null));else if(x.isDataTexture)if(It.length>0){Dt&&Vt&&e.texStorage2D(i.TEXTURE_2D,ut,ft,It[0].width,It[0].height);for(let Q=0,dt=It.length;Q<dt;Q++)ht=It[Q],Dt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,Rt,ht.data):e.texImage2D(i.TEXTURE_2D,Q,ft,ht.width,ht.height,0,ct,Rt,ht.data);x.generateMipmaps=!1}else Dt?(Vt&&e.texStorage2D(i.TEXTURE_2D,ut,ft,tt.width,tt.height),F&&et(x,tt,ct,Rt)):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,ct,Rt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,ft,It[0].width,It[0].height,tt.depth);for(let Q=0,dt=It.length;Q<dt;Q++)if(ht=It[Q],x.format!==Sn)if(ct!==null)if(Dt){if(F)if(x.layerUpdates.size>0){let xt=Ac(ht.width,ht.height,x.format,x.type);for(let it of x.layerUpdates){let Lt=ht.data.subarray(it*xt/ht.data.BYTES_PER_ELEMENT,(it+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,ht.width,ht.height,1,ct,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ct,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ft,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ct,Rt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ft,ht.width,ht.height,tt.depth,0,ct,Rt,ht.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Dt&&Vt&&e.texStorage2D(i.TEXTURE_2D,ut,ft,It[0].width,It[0].height);for(let Q=0,dt=It.length;Q<dt;Q++)ht=It[Q],x.format!==Sn?ct!==null?Dt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ft,ht.width,ht.height,0,ht.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,Rt,ht.data):e.texImage2D(i.TEXTURE_2D,Q,ft,ht.width,ht.height,0,ct,Rt,ht.data)}else if(x.isDataArrayTexture)if(Dt){if(Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,ft,tt.width,tt.height,tt.depth),F)if(x.layerUpdates.size>0){let Q=Ac(tt.width,tt.height,x.format,x.type);for(let dt of x.layerUpdates){let xt=tt.data.subarray(dt*Q/tt.data.BYTES_PER_ELEMENT,(dt+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,tt.width,tt.height,1,ct,Rt,xt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,tt.width,tt.height,tt.depth,0,ct,Rt,tt.data);else if(x.isData3DTexture)Dt?(Vt&&e.texStorage3D(i.TEXTURE_3D,ut,ft,tt.width,tt.height,tt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,tt.width,tt.height,tt.depth,0,ct,Rt,tt.data);else if(x.isFramebufferTexture){if(Vt)if(Dt)e.texStorage2D(i.TEXTURE_2D,ut,ft,tt.width,tt.height);else{let Q=tt.width,dt=tt.height;for(let xt=0;xt<ut;xt++)e.texImage2D(i.TEXTURE_2D,xt,ft,Q,dt,0,ct,Rt,null),Q>>=1,dt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),d.add(x),Q.onpaint=dt=>{let xt=dt.changedElements;for(let it of d)xt.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let xt=i.RGBA,it=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,it,Lt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Dt&&Vt){let Q=le(It[0]);e.texStorage2D(i.TEXTURE_2D,ut,ft,Q.width,Q.height)}for(let Q=0,dt=It.length;Q<dt;Q++)ht=It[Q],Dt?F&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct,Rt,ht):e.texImage2D(i.TEXTURE_2D,Q,ft,ct,Rt,ht);x.generateMipmaps=!1}else if(Dt){if(Vt){let Q=le(tt);e.texStorage2D(i.TEXTURE_2D,ut,ft,Q.width,Q.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,ft,ct,Rt,tt);f(x)&&C(X),ot.__version=st.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function kt(R,x,z){if(x.image.length!==6)return;let X=se(R,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let st=n.get(Z);if(Z.version!==st.__version||X===!0){e.activeTexture(i.TEXTURE0+z);let ot=Kt.getPrimaries(Kt.workingColorSpace),K=x.colorSpace===fi?null:Kt.getPrimaries(x.colorSpace),tt=x.colorSpace===fi||ot===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let it=0;it<6;it++)!ct&&!Rt?ft[it]=m(x.image[it],!0,s.maxCubemapSize):ft[it]=Rt?x.image[it].image:x.image[it],ft[it]=Ye(x,ft[it]);let ht=ft[0],It=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),Vt=S(x.internalFormat,It,Dt,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,ut=st.__version===void 0||X===!0,Q=Z.dataReady,dt=I(x,ht);te(i.TEXTURE_CUBE_MAP,x);let xt;if(ct){F&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Vt,ht.width,ht.height);for(let it=0;it<6;it++){xt=ft[it].mipmaps;for(let Lt=0;Lt<xt.length;Lt++){let Et=xt[Lt];x.format!==Sn?It!==null?F?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Et.width,Et.height,It,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,Vt,Et.width,Et.height,0,Et.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Et.width,Et.height,It,Dt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,Vt,Et.width,Et.height,0,It,Dt,Et.data)}}}else{if(xt=x.mipmaps,F&&ut){xt.length>0&&dt++;let it=le(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft[it].width,ft[it].height,It,Dt,ft[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,ft[it].width,ft[it].height,0,It,Dt,ft[it].data);for(let Lt=0;Lt<xt.length;Lt++){let pe=xt[Lt].image[it].image;F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,pe.width,pe.height,It,Dt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,Vt,pe.width,pe.height,0,It,Dt,pe.data)}}else{F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,Dt,ft[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,It,Dt,ft[it]);for(let Lt=0;Lt<xt.length;Lt++){let Et=xt[Lt];F?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,It,Dt,Et.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,Vt,It,Dt,Et.image[it])}}}f(x)&&C(i.TEXTURE_CUBE_MAP),st.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Mt(R,x,z,X,Z,st){let ot=r.convert(z.format,z.colorSpace),K=r.convert(z.type),tt=S(z.internalFormat,ot,K,z.normalized,z.colorSpace),ct=n.get(x),Rt=n.get(z);if(Rt.__renderTarget=x,!ct.__hasExternalTextures){let ft=Math.max(1,x.width>>st),ht=Math.max(1,x.height>>st);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,tt,ft,ht,x.depth,0,ot,K,null):e.texImage2D(Z,st,tt,ft,ht,0,ot,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ce(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Rt.__webglTexture,0,we(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Rt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let X=x.depthTexture,Z=X&&X.isDepthTexture?X.type:null,st=E(x.stencilBuffer,Z),ot=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(x),st,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(x),st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,R)}else{let X=x.textures;for(let Z=0;Z<X.length;Z++){let st=X[Z],ot=r.convert(st.format,st.colorSpace),K=r.convert(st.type),tt=S(st.internalFormat,ot,K,st.normalized,st.colorSpace);Ce(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(x),tt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(x),tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,x,z){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",N)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),te(i.TEXTURE_CUBE_MAP,x.depthTexture);let ct=r.convert(x.depthTexture.format),Rt=r.convert(x.depthTexture.type),ft;x.depthTexture.format===qn?ft=i.DEPTH_COMPONENT24:x.depthTexture.format===Oi&&(ft=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ft,x.width,x.height,0,ct,Rt,null)}}else Y(x.depthTexture,0);let st=Z.__webglTexture,ot=we(x),K=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,tt=x.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===qn)Ce(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,st,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,st,0);else if(x.depthTexture.format===Oi)Ce(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,st,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(R){let x=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=X}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)Le(x.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?Le(x.__webglFramebuffer[0],R,0):Le(x.__webglFramebuffer,R,0)}else if(z){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),qt(x.__webglDepthbuffer[X],R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qt(x.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(R,x,z){let X=n.get(R);x!==void 0&&Mt(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Yt(R)}function fe(R){let x=R.texture,z=n.get(R),X=n.get(x);R.addEventListener("dispose",v);let Z=R.textures,st=R.isWebGLCubeRenderTarget===!0,ot=Z.length>1;if(ot||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),st){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let tt=0;tt<x.mipmaps.length;tt++)z.__webglFramebuffer[K][tt]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ot)for(let K=0,tt=Z.length;K<tt;K++){let ct=n.get(Z[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ce(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let tt=Z[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let ct=r.convert(tt.format,tt.colorSpace),Rt=r.convert(tt.type),ft=S(tt.internalFormat,ct,Rt,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),ht=we(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),te(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Mt(z.__webglFramebuffer[K][tt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else Mt(z.__webglFramebuffer[K],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(x)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let K=0,tt=Z.length;K<tt;K++){let ct=Z[K],Rt=n.get(ct),ft=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Rt.__webglTexture),te(ft,ct),Mt(z.__webglFramebuffer,R,ct,i.COLOR_ATTACHMENT0+K,ft,0),f(ct)&&C(ft)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,X.__webglTexture),te(K,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Mt(z.__webglFramebuffer[tt],R,x,i.COLOR_ATTACHMENT0,K,tt);else Mt(z.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,K,0);f(x)&&C(K),e.unbindTexture()}R.depthBuffer&&Yt(R)}function Jt(R){let x=R.textures;for(let z=0,X=x.length;z<X;z++){let Z=x[z];if(f(Z)){let st=D(R),ot=n.get(Z).__webglTexture;e.bindTexture(st,ot),C(st),e.unbindTexture()}}}let be=[],ze=[];function on(R){if(R.samples>0){if(Ce(R)===!1){let x=R.textures,z=R.width,X=R.height,Z=i.COLOR_BUFFER_BIT,st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(R),K=x.length>1;if(K)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let tt=R.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);let Rt=n.get(x[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,Z,i.NEAREST),l===!0&&(be.length=0,ze.length=0,be.push(i.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(be.push(st),ze.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);let Rt=n.get(x[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function we(R){return Math.min(s.maxSamples,R.samples)}function Ce(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ye(R,x){let z=R.colorSpace,X=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ur&&z!==fi&&(Kt.getTransfer(z)===oe?(X!==Sn||Z!==mn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",z)),x}function le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.getTextureUnits=w,this.setTextureUnits=P,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=ne,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function u_(i,t){function e(n,s=fi){let r,a=Kt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===fc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===xc)return i.RGB;if(n===Sn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===Pr||n===Lr||n===Dr||n===Nr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===xo||n===_o||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===bo||n===So||n===wo||n===Ur||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Vo||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Wo||n===Fr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends $n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new qc,f={},C=e.getContextAttributes(),D=null,S=null,E=[],I=[],N=new ie,v=null,_=null,b=new je;b.viewport=new ye;let T=new je;T.viewport=new ye;let A=[b,T],L=new so,w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=E[J];return et===void 0&&(et=new Fs,E[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=E[J];return et===void 0&&(et=new Fs,E[J]=et),et.getGripSpace()},this.getHand=function(J){let et=E[J];return et===void 0&&(et=new Fs,E[J]=et),et.getHandSpace()};function B(J){let et=I.indexOf(J.inputSource);if(et===-1)return;let St=E[et];St!==void 0&&(St.update(J.inputSource,J.frame,c||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Y);for(let J=0;J<E.length;J++){let et=I[J];et!==null&&(I[J]=null,E[J].disconnect(et))}w=null,P=null,m.reset();for(let J in f)delete f[J];if(t.setRenderTarget(D),p=null,u=null,d=null,s=null,S=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(N.width,N.height,!1),_!==null){let J=_.camera;J.fov=_.fov,J.zoom=_.zoom,J.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Y),C.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,kt=null,Mt=null;C.depth&&(Mt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=C.stencil?Oi:qn,kt=C.stencil?zs:Nn);let qt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new ln(u.textureWidth,u.textureHeight,{format:Sn,type:mn,depthTexture:new Ci(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ln(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(J){for(let et=0;et<J.removed.length;et++){let St=J.removed[et],kt=I.indexOf(St);kt>=0&&(I[kt]=null,E[kt].disconnect(St))}for(let et=0;et<J.added.length;et++){let St=J.added[et],kt=I.indexOf(St);if(kt===-1){for(let qt=0;qt<E.length;qt++)if(qt>=I.length){I.push(St),kt=qt;break}else if(I[qt]===null){I[qt]=St,kt=qt;break}if(kt===-1)break}let Mt=E[kt];Mt&&Mt.connect(St)}}let $=new W,j=new W;function nt(J,et,St){$.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(St.matrixWorld);let kt=$.distanceTo(j),Mt=et.projectionMatrix.elements,qt=St.projectionMatrix.elements,Le=Mt[14]/(Mt[10]-1),Yt=Mt[14]/(Mt[10]+1),ne=(Mt[9]+1)/Mt[5],fe=(Mt[9]-1)/Mt[5],Jt=(Mt[8]-1)/Mt[0],be=(qt[8]+1)/qt[0],ze=Le*Jt,on=Le*be,we=kt/(-Jt+be),Ce=we*-Jt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(we),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Mt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let O=Le+we,Ye=Yt+we,le=ze-Ce,R=on+(kt-Ce),x=ne*Yt/Ye*O,z=fe*Yt/Ye*O;J.projectionMatrix.makePerspective(le,R,x,z,O,Ye),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Pt(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,St=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(St=m.depthFar)),L.near=T.near=b.near=et,L.far=T.far=b.far=St,(w!==L.near||P!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),w=L.near,P=L.far),L.layers.mask=J.layers.mask|6,b.layers.mask=L.layers.mask&-5,T.layers.mask=L.layers.mask&-3;let kt=J.parent,Mt=L.cameras;Pt(L,kt);for(let qt=0;qt<Mt.length;qt++)Pt(Mt[qt],kt);Mt.length===2?nt(L,b,T):L.projectionMatrix.copy(b.projectionMatrix),_===null&&J.isPerspectiveCamera&&(_={camera:J,fov:J.fov,zoom:J.zoom}),Ct(J,L,kt)};function Ct(J,et,St){St===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ns*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(J){return f[J]};let he=null;function te(J,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let St=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let kt=!1;St.length!==L.cameras.length&&(L.cameras.length=0,kt=!0);for(let Yt=0;Yt<St.length;Yt++){let ne=St[Yt],fe=null;if(p!==null)fe=p.getViewport(ne);else{let be=d.getViewSubImage(u,ne);fe=be.viewport,Yt===0&&(t.setRenderTargetTextures(S,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(S))}let Jt=A[Yt];Jt===void 0&&(Jt=new je,Jt.layers.enable(Yt),Jt.viewport=new ye,A[Yt]=Jt),Jt.matrix.fromArray(ne.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ne.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(fe.x,fe.y,fe.width,fe.height),Yt===0&&(L.matrix.copy(Jt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),kt===!0&&L.cameras.push(Jt)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Yt=d.getDepthInformation(St[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Yt=0;Yt<St.length;Yt++){let ne=St[Yt].camera;if(ne){let fe=f[ne];fe||(fe=new wr,f[ne]=fe);let Jt=d.getCameraImage(ne);fe.sourceTexture=Jt}}}}for(let St=0;St<E.length;St++){let kt=I[St],Mt=E[St];kt!==null&&Mt!==void 0&&Mt.update(kt,et,c||a)}he&&he(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let se=new xd;se.setAnimationLoop(te),this.setAnimationLoop=function(J){he=J},this.dispose=function(){}}},p_=new Te,Sd=new Bt;Sd.set(-1,0,0,0,1,0,0,0,1);function m_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,C,D,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,C,D):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let C=t.get(f),D=C.envMap,S=C.envMapRotation;D&&(m.envMap.value=D,m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(S)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,C,D){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=D*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,C){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let C=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){let I=E.program;n.uniformBlockBinding(S,I)}function c(S,E){let I=s[S.id];I===void 0&&(m(S),I=h(S),s[S.id]=I,S.addEventListener("dispose",C));let N=E.program;n.updateUBOMapping(S,N);let v=t.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){let E=d();S.__bindingPointIndex=E;let I=i.createBuffer(),N=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,N,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,I),I}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let E=s[S.id],I=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,_=I.length;v<_;v++){let b=I[v];if(Array.isArray(b))for(let T=0,A=b.length;T<A;T++)p(b[T],v,T,N);else p(b,v,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,I,N){if(M(S,E,I,N)===!0){let v=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let T=0;T<_.length;T++){let A=_[T],L=f(A);g(A,S.__data,b),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(b+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,E,I){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,I)}function M(S,E,I,N){let v=S.value,_=E+"_"+I;if(N[_]===void 0)return typeof v=="number"||typeof v=="boolean"?N[_]=v:ArrayBuffer.isView(v)?N[_]=v.slice():N[_]=v.clone(),!0;{let b=N[_];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return N[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(S){let E=S.uniforms,I=0,N=16;for(let _=0,b=E.length;_<b;_++){let T=Array.isArray(E[_])?E[_]:[E[_]];for(let A=0,L=T.length;A<L;A++){let w=T[A],P=Array.isArray(w.value)?w.value:[w.value];for(let B=0,k=P.length;B<k;B++){let Y=P[B],$=f(Y),j=I%N,nt=j%$.boundary,Pt=j+nt;I+=nt,Pt!==0&&N-Pt<$.storage&&(I+=N-Pt),w.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=I,I+=$.storage}}}let v=I%N;return v>0&&(I+=N-v),S.__size=I,S.__cache={},this}function f(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",S),E}function C(S){let E=S.target;E.removeEventListener("dispose",C);let I=a.indexOf(E.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function D(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:D}}var x_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function __(){return Kn===null&&(Kn=new Va(x_,16,16,Bi,Fn),Kn.name="DFG_LUT",Kn.minFilter=Ne,Kn.magFilter=Ne,Kn.wrapS=Xn,Kn.wrapT=Xn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var jo=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([mo,po,fo]),f=new Set([mn,Nn,ks,zs,ho,uo]),C=new Uint32Array(4),D=new Int32Array(4),S=new W,E=null,I=null,N=[],v=[],_=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,T=!1,A=null,L=null,w=null,P=null;this._outputColorSpace=De;let B=0,k=0,Y=null,$=-1,j=null,nt=new ye,Pt=new ye,Ct=null,he=new Gt(0),te=0,se=e.width,J=e.height,et=1,St=null,kt=null,Mt=new ye(0,0,se,J),qt=new ye(0,0,se,J),Le=!1,Yt=new Mr,ne=!1,fe=!1,Jt=new Te,be=new W,ze=new ye,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ce(){return Y===null?et:1}let O=n;function Ye(y,U){return e.getContext(y,U)}let le,R,x,z,X,Z,st,ot,K,tt,ct,Rt,ft,ht,It,Dt,Vt,F,ut,Q,dt,xt,it;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",An,!1),O===null){let U="webgl2";if(O=Ye(U,y),O===null)throw Ye(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(y){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Ft("WebGLRenderer: "+y.message),y}function Lt(){le=new Tg(O),le.init(),dt=new u_(O,le),R=new mg(O,le,t,dt),x=new c_(O,le),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),L=O.createFramebuffer(),w=O.createFramebuffer(),P=O.createFramebuffer(),z=new Cg(O),X=new Zx,Z=new h_(O,le,x,X,R,dt,z),st=new wg(b),ot=new Ip(O),xt=new fg(O,ot),K=new Eg(O,ot,z,xt),tt=new Ig(O,K,ot,xt,z),F=new Rg(O,R,Z),It=new gg(X),ct=new Yx(b,st,le,R,xt,It),Rt=new m_(b,X),ft=new Kx,ht=new i_(le),Vt=new dg(b,st,x,tt,g,l),Dt=new l_(b,tt,R),it=new g_(O,z,R,x),ut=new pg(O,le,z),Q=new Ag(O,le,z),z.programs=ct.programs,b.capabilities=R,b.extensions=le,b.properties=X,b.renderLists=ft,b.shadowMap=Dt,b.state=x,b.info=z}M!==mn&&(_=new Lg(M,e.width,e.height,o,s,r));let Et=new $c(b,O);this.xr=Et,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(se,J,!1))},this.getSize=function(y){return y.set(se,J)},this.setSize=function(y,U,q=!0){if(Et.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=y,J=U,e.width=Math.floor(y*et),e.height=Math.floor(U*et),q===!0&&(e.style.width=y+"px",e.style.height=U+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(se*et,J*et).floor()},this.setDrawingBufferSize=function(y,U,q){se=y,J=U,et=q,e.width=Math.floor(y*q),e.height=Math.floor(U*q),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(M===mn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(nt)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,U,q,G){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,U,q,G),x.viewport(nt.copy(Mt).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(qt)},this.setScissor=function(y,U,q,G){y.isVector4?qt.set(y.x,y.y,y.z,y.w):qt.set(y,U,q,G),x.scissor(Pt.copy(qt).multiplyScalar(et).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(y){x.setScissorTest(Le=y)},this.setOpaqueSort=function(y){St=y},this.setTransparentSort=function(y){kt=y},this.getClearColor=function(y){return y.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,q=!0){let G=0;if(y){let H=!1;if(Y!==null){let gt=Y.texture.format;H=m.has(gt)}if(H){let gt=Y.texture.type,bt=f.has(gt),mt=Vt.getClearColor(),wt=Vt.getClearAlpha(),At=mt.r,Ht=mt.g,Zt=mt.b;bt?(C[0]=At,C[1]=Ht,C[2]=Zt,C[3]=wt,O.clearBufferuiv(O.COLOR,0,C)):(D[0]=At,D[1]=Ht,D[2]=Zt,D[3]=wt,O.clearBufferiv(O.COLOR,0,D))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),A=y},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Vt.dispose(),ft.dispose(),ht.dispose(),X.dispose(),st.dispose(),tt.dispose(),xt.dispose(),it.dispose(),ct.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ph),Et.removeEventListener("sessionend",Lh),Xi.stop()};function pe(y){y.preventDefault(),Mc("WebGLRenderer: Context Lost."),T=!0}function re(){Mc("WebGLRenderer: Context Restored."),T=!1;let y=z.autoReset,U=Dt.enabled,q=Dt.autoUpdate,G=Dt.needsUpdate,H=Dt.type;Lt(),z.autoReset=y,Dt.enabled=U,Dt.autoUpdate=q,Dt.needsUpdate=G,Dt.type=H}function An(y){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Gn(y){let U=y.target;U.removeEventListener("dispose",Gn),Ef(U)}function Ef(y){Af(y),X.remove(y)}function Af(y){let U=X.get(y).programs;U!==void 0&&(U.forEach(function(q){ct.releaseProgram(q)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,q,G,H,gt){U===null&&(U=on);let bt=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=If(y,U,q,G,H);x.setMaterial(G,bt);let wt=q.index,At=1;if(G.wireframe===!0){if(wt=K.getWireframeAttribute(q),wt===void 0)return;At=2}let Ht=q.drawRange,Zt=q.attributes.position,Tt=Ht.start*At,ae=(Ht.start+Ht.count)*At;gt!==null&&(Tt=Math.max(Tt,gt.start*At),ae=Math.min(ae,(gt.start+gt.count)*At)),wt!==null?(Tt=Math.max(Tt,0),ae=Math.min(ae,wt.count)):Zt!=null&&(Tt=Math.max(Tt,0),ae=Math.min(ae,Zt.count));let Re=ae-Tt;if(Re<0||Re===1/0)return;xt.setup(H,G,mt,q,wt);let _e,de=ut;if(wt!==null&&(_e=ot.get(wt),de=Q,de.setIndex(_e)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Ce()),de.setMode(O.LINES)):de.setMode(O.TRIANGLES);else if(H.isLine){let Ze=G.linewidth;Ze===void 0&&(Ze=1),x.setLineWidth(Ze*Ce()),H.isLineSegments?de.setMode(O.LINES):H.isLineLoop?de.setMode(O.LINE_LOOP):de.setMode(O.LINE_STRIP)}else H.isPoints?de.setMode(O.POINTS):H.isSprite&&de.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(le.get("WEBGL_multi_draw"))de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ze=H._multiDrawStarts,yt=H._multiDrawCounts,en=H._multiDrawCount,ee=wt?ot.get(wt).bytesPerElement:1,_n=X.get(G).currentProgram.getUniforms();for(let Hn=0;Hn<en;Hn++)_n.setValue(O,"_gl_DrawID",Hn),de.render(Ze[Hn]/ee,yt[Hn])}else if(H.isInstancedMesh)de.renderInstances(Tt,Re,H.count);else if(q.isInstancedBufferGeometry){let Ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Ze);de.renderInstances(Tt,Re,yt)}else de.render(Tt,Re)};function Ih(y,U,q,G){A!==null&&y.isNodeMaterial&&A.setObject(G,y),ne===!0&&It.setState(y,q,!1),y.transparent===!0&&y.side===bn&&y.forceSinglePass===!1?(y.side=sn,y.needsUpdate=!0,ra(y,U,G),y.side=Li,y.needsUpdate=!0,ra(y,U,G),y.side=bn):ra(y,U,G)}this.compile=function(y,U,q=null){q===null&&(q=y),A!==null&&A.renderStart(y,U,q),I=ht.get(q),I.init(U),v.push(I),q.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(I.pushLight(H),H.castShadow&&I.pushShadow(H))}),y!==q&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(I.pushLight(H),H.castShadow&&I.pushShadow(H))}),I.setupLights(),A!==null&&A.updateLights(I.state.lightsArray),fe=this.localClippingEnabled,ne=It.init(this.clippingPlanes,fe),ne===!0&&It.setGlobalState(this.clippingPlanes,U),A!==null&&Dt.render(I.state.shadowsArray,q,U);let G=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let gt=H.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){let mt=gt[bt];Ih(mt,q,U,H),G.add(mt)}else Ih(gt,q,U,H),G.add(gt)}),I=v.pop(),A!==null&&A.renderEnd(),G},this.compileAsync=function(y,U,q=null){let G=this.compile(y,U,q);return new Promise(H=>{function gt(){if(G.forEach(function(bt){let wt=X.get(bt).currentProgram;(wt===void 0||wt.isReady())&&G.delete(bt)}),G.size===0){H(y);return}setTimeout(gt,10)}le.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Sl=null;function Cf(y){Sl&&Sl(y)}function Ph(){Xi.stop()}function Lh(){Xi.start()}let Xi=new xd;Xi.setAnimationLoop(Cf),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(y){Sl=y,Et.setAnimationLoop(y),y===null?Xi.stop():Xi.start()},Et.addEventListener("sessionstart",Ph),Et.addEventListener("sessionend",Lh),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A!==null&&A.renderStart(y,U);let q=Et.enabled===!0&&Et.isPresenting===!0,G=_!==null&&(Y===null||q)&&_.begin(b,Y);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(U),U=Et.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,Y),I=ht.get(y,v.length),I.init(U),I.state.textureUnits=Z.getTextureUnits(),v.push(I),Jt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Yt.setFromProjectionMatrix(Jt,Ln,U.reversedDepth),fe=this.localClippingEnabled,ne=It.init(this.clippingPlanes,fe),E=ft.get(y,N.length),E.init(),N.push(E),Et.enabled===!0&&Et.isPresenting===!0){let bt=b.xr.getDepthSensingMesh();bt!==null&&wl(bt,U,-1/0,b.sortObjects)}wl(y,U,0,b.sortObjects),E.finish(),A!==null&&A.updateLights(I.state.lightsArray),b.sortObjects===!0&&E.sort(St,kt),we=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,we&&Vt.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&It.beginShadows();let H=I.state.shadowsArray;if(Dt.render(H,y,U),ne===!0&&It.endShadows(),(G&&_.hasRenderPass())===!1){let bt=E.opaque,mt=E.transmissive;if(I.setupLights(),U.isArrayCamera){let wt=U.cameras;if(mt.length>0)for(let At=0,Ht=wt.length;At<Ht;At++){let Zt=wt[At];Nh(bt,mt,y,Zt)}we&&Vt.render(y);for(let At=0,Ht=wt.length;At<Ht;At++){let Zt=wt[At];Dh(E,y,Zt,Zt.viewport)}}else mt.length>0&&Nh(bt,mt,y,U),we&&Vt.render(y),Dh(E,y,U)}Y!==null&&k===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),G&&_.end(b),y.isScene===!0&&y.onAfterRender(b,y,U),xt.resetDefaultState(),$=-1,j=null,v.pop(),v.length>0?(I=v[v.length-1],Z.setTextureUnits(I.state.textureUnits),ne===!0&&It.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,N.pop(),N.length>0?E=N[N.length-1]:E=null,A!==null&&A.renderEnd()};function wl(y,U,q,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)I.pushLightProbeGrid(y);else if(y.isLight)I.pushLight(y),y.castShadow&&I.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Yt)){G&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Jt);let bt=tt.update(y),mt=y.material;mt.visible&&E.push(y,bt,mt,q,ze.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Yt))){let bt=tt.update(y),mt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ze.copy(bt.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(Jt)),Array.isArray(mt)){let wt=bt.groups;for(let At=0,Ht=wt.length;At<Ht;At++){let Zt=wt[At],Tt=mt[Zt.materialIndex];Tt&&Tt.visible&&E.push(y,bt,Tt,q,ze.z,Zt,U)}}else mt.visible&&E.push(y,bt,mt,q,ze.z,null,U)}}let gt=y.children;for(let bt=0,mt=gt.length;bt<mt;bt++)wl(gt[bt],U,q,G)}function Dh(y,U,q,G){let{opaque:H,transmissive:gt,transparent:bt}=y;I.setupLightsView(q),ne===!0&&It.setGlobalState(b.clippingPlanes,q),G&&x.viewport(nt.copy(G)),H.length>0&&sa(H,U,q),gt.length>0&&sa(gt,U,q),bt.length>0&&sa(bt,U,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Nh(y,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[G.id]===void 0){let Tt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[G.id]=new ln(1,1,{generateMipmaps:!0,type:Tt?Fn:mn,minFilter:Fi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let gt=I.state.transmissionRenderTarget[G.id],bt=G.viewport||nt;gt.setSize(bt.z*b.transmissionResolutionScale,bt.w*b.transmissionResolutionScale);let mt=b.getRenderTarget(),wt=b.getActiveCubeFace(),At=b.getActiveMipmapLevel();b.setRenderTarget(gt),b.getClearColor(he),te=b.getClearAlpha(),te<1&&b.setClearColor(16777215,.5),b.clear(),we&&Vt.render(q);let Ht=b.toneMapping;b.toneMapping=Dn;let Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),I.setupLightsView(G),ne===!0&&It.setGlobalState(b.clippingPlanes,G),sa(y,q,G),Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ae=0,Re=U.length;ae<Re;ae++){let _e=U[ae],{object:de,geometry:Ze,material:yt,group:en}=_e;if(yt.side===bn&&de.layers.test(G.layers)){let ee=yt.side;yt.side=sn,yt.needsUpdate=!0,Uh(de,q,G,Ze,yt,en),yt.side=ee,yt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt))}b.setRenderTarget(mt,wt,At),b.setClearColor(he,te),Zt!==void 0&&(G.viewport=Zt),b.toneMapping=Ht}function sa(y,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,gt=y.length;H<gt;H++){let bt=y[H],{object:mt,geometry:wt,group:At}=bt,Ht=bt.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),mt.layers.test(q.layers)&&Uh(mt,U,q,wt,Ht,At)}}function Uh(y,U,q,G,H,gt){A!==null&&H.isNodeMaterial&&A.setObject(y,H),y.onBeforeRender(b,U,q,G,H,gt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(b,U,q,G,y,gt),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,b.renderBufferDirect(q,U,G,H,y,gt),H.side=Li,H.needsUpdate=!0,b.renderBufferDirect(q,U,G,H,y,gt),H.side=bn):b.renderBufferDirect(q,U,G,H,y,gt),y.onAfterRender(b,U,q,G,H,gt)}function ra(y,U,q){U.isScene!==!0&&(U=on);let G=X.get(y),H=I.state.lights,gt=I.state.shadowsArray,bt=H.state.version,mt=ct.getParameters(y,H.state,gt,U,q,I.state.lightProbeGridArray),wt=ct.getProgramCacheKey(mt),At=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=st.get(y.envMap||G.environment,Ht),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",Gn),At=new Map,G.programs=At);let Zt=At.get(wt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===bt)return Oh(y,mt),Zt}else mt.uniforms=ct.getUniforms(y),A!==null&&y.isNodeMaterial&&A.build(y,q,mt),y.onBeforeCompile(mt,b),Zt=ct.acquireProgram(mt,wt),At.set(wt,Zt),G.uniforms=mt.uniforms;let Tt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=It.uniform),Oh(y,mt),G.needsLights=Lf(y),G.lightsStateVersion=bt,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=I.state.lightProbeGridArray.length>0,G.currentProgram=Zt,G.uniformsList=null,Zt}function Fh(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Ws.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Oh(y,U){let q=X.get(y);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Rf(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=y.length;q<G;q++){let H=y[q];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function If(y,U,q,G,H){U.isScene!==!0&&(U=on),Z.resetTextureUnits();let gt=U.fog,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,mt=Y===null?b.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Kt.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,At=st.get(G.envMap||bt,wt),Ht=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Zt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!q.morphAttributes.position,ae=!!q.morphAttributes.normal,Re=!!q.morphAttributes.color,_e=Dn;G.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(_e=b.toneMapping);let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ze=de!==void 0?de.length:0,yt=X.get(G),en=I.state.lights;if(ne===!0&&(fe===!0||y!==j)){let me=y===j&&G.id===$;It.setState(G,y,me)}let ee=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==en.state.version||yt.outputColorSpace!==mt||H.isBatchedMesh&&yt.batching===!1||!H.isBatchedMesh&&yt.batching===!0||H.isBatchedMesh&&yt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&yt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&yt.instancing===!1||!H.isInstancedMesh&&yt.instancing===!0||H.isSkinnedMesh&&yt.skinning===!1||!H.isSkinnedMesh&&yt.skinning===!0||H.isInstancedMesh&&yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&yt.instancingMorph===!1&&H.morphTexture!==null||yt.envMap!==At||G.fog===!0&&yt.fog!==gt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==It.numPlanes||yt.numIntersection!==It.numIntersection)||yt.vertexAlphas!==Ht||yt.vertexTangents!==Zt||yt.morphTargets!==Tt||yt.morphNormals!==ae||yt.morphColors!==Re||yt.toneMapping!==_e||yt.morphTargetsCount!==Ze||!!yt.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,yt.__version=G.version);let _n=yt.currentProgram;ee===!0&&(_n=ra(G,U,H),A&&G.isNodeMaterial&&A.onUpdateProgram(G,_n,yt));let Hn=!1,gi=!1,ms=!1,ue=_n.getUniforms(),Ae=yt.uniforms;if(x.useProgram(_n.program)&&(Hn=!0,gi=!0,ms=!0),G.id!==$&&($=G.id,gi=!0),yt.needsLights){let me=Rf(I.state.lightProbeGridArray,H);yt.lightProbeGrid!==me&&(yt.lightProbeGrid=me,gi=!0)}if(Hn||j!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ue.setValue(O,"projectionMatrix",y.projectionMatrix),ue.setValue(O,"viewMatrix",y.matrixWorldInverse);let _i=ue.map.cameraPosition;_i!==void 0&&_i.setValue(O,be.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ue.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,gi=!0,ms=!0)}if(yt.needsLights&&(en.state.sunShadowMap.length>0&&ue.setValue(O,"sunShadowMap",en.state.sunShadowMap,Z),en.state.directionalShadowMap.length>0&&ue.setValue(O,"directionalShadowMap",en.state.directionalShadowMap,Z),en.state.spotShadowMap.length>0&&ue.setValue(O,"spotShadowMap",en.state.spotShadowMap,Z),en.state.pointShadowMap.length>0&&ue.setValue(O,"pointShadowMap",en.state.pointShadowMap,Z)),H.isSkinnedMesh){ue.setOptional(O,H,"bindMatrix"),ue.setOptional(O,H,"bindMatrixInverse");let me=H.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ue.setValue(O,"boneTexture",me.boneTexture,Z))}H.isBatchedMesh&&(ue.setOptional(O,H,"batchingTexture"),ue.setValue(O,"batchingTexture",H._matricesTexture,Z),ue.setOptional(O,H,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",H._indirectTexture,Z),ue.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",H._colorsTexture,Z));let xi=q.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&F.update(H,q,_n),(gi||yt.receiveShadow!==H.receiveShadow)&&(yt.receiveShadow=H.receiveShadow,ue.setValue(O,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ae.envMapIntensity.value=U.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=__()),gi){if(ue.setValue(O,"toneMappingExposure",b.toneMappingExposure),yt.needsLights&&Pf(Ae,ms),gt&&G.fog===!0&&Rt.refreshFogUniforms(Ae,gt),Rt.refreshMaterialUniforms(Ae,G,et,J,I.state.transmissionRenderTarget[y.id]),yt.needsLights&&yt.lightProbeGrid){let me=yt.lightProbeGrid;Ae.probesSH.value=me.texture,Ae.probesMin.value.copy(me.boundingBox.min),Ae.probesMax.value.copy(me.boundingBox.max),Ae.probesResolution.value.copy(me.resolution)}Ws.upload(O,Fh(yt),Ae,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ws.upload(O,Fh(yt),Ae,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ue.setValue(O,"center",H.center),ue.setValue(O,"modelViewMatrix",H.modelViewMatrix),ue.setValue(O,"normalMatrix",H.normalMatrix),ue.setValue(O,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let me=G.uniformsGroups;for(let _i=0,gs=me.length;_i<gs;_i++){let kh=me[_i];it.update(kh,_n),it.bind(kh,_n)}}return _n}function Pf(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Lf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(y,U,q){let G=X.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=U,X.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let q=X.get(y);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,q=0){Y=y,B=U,k=q;let G=null,H=!1,gt=!1;if(y){let mt=X.get(y);if(mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,mt.__webglFramebuffer),nt.copy(y.viewport),Pt.copy(y.scissor),Ct=y.scissorTest,x.viewport(nt),x.scissor(Pt),x.setScissorTest(Ct),$=-1;return}else if(mt.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(mt.__hasExternalTextures)Z.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ht=y.depthTexture;if(mt.__boundDepthTexture!==Ht){if(Ht!==null&&X.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}let wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(gt=!0);let At=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[U])?G=At[U][q]:G=At[U],H=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?G=X.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[q]:G=At,nt.copy(y.viewport),Pt.copy(y.scissor),Ct=y.scissorTest}else nt.copy(Mt).multiplyScalar(et).floor(),Pt.copy(qt).multiplyScalar(et).floor(),Ct=Le;if(q!==0&&(G=L),x.bindFramebuffer(O.FRAMEBUFFER,G)&&x.drawBuffers(y,G),x.viewport(nt),x.scissor(Pt),x.setScissorTest(Ct),H){let mt=X.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,q)}else if(gt){let mt=U;for(let wt=0;wt<y.textures.length;wt++){let At=X.get(y.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,At.__webglTexture,q,mt)}}else if(y!==null&&q!==0){let mt=X.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,q)}$=-1};function Bh(y){let U=X.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=R.textureFormatReadable(y.format),U.__typeReadable=R.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,q,G,H,gt,bt,mt=0){if(!(y&&y.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){x.bindFramebuffer(O.FRAMEBUFFER,wt);try{let At=y.textures[mt],Ht=At.format,Zt=At.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);let Tt=Bh(At);if(Tt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&q>=0&&q<=y.height-H&&O.readPixels(U,q,G,H,dt.convert(Ht),dt.convert(Zt),gt)}finally{let At=Y!==null?X.get(Y).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,U,q,G,H,gt,bt,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt)if(U>=0&&U<=y.width-G&&q>=0&&q<=y.height-H){x.bindFramebuffer(O.FRAMEBUFFER,wt);let At=y.textures[mt],Ht=At.format,Zt=At.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);let Tt=Bh(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(U,q,G,H,dt.convert(Ht),dt.convert(Zt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Re=Y!==null?X.get(Y).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Re);let _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Wu(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ae),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ae),O.deleteSync(_e),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,q=0){let G=Math.pow(2,-q),H=Math.floor(y.image.width*G),gt=Math.floor(y.image.height*G),bt=U!==null?U.x:0,mt=U!==null?U.y:0;Z.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,bt,mt,H,gt),x.unbindTexture()},this.copyTextureToTexture=function(y,U,q=null,G=null,H=0,gt=0){let bt,mt,wt,At,Ht,Zt,Tt,ae,Re,_e=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(q!==null)bt=q.max.x-q.min.x,mt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Ht=q.min.y,Zt=q.isBox3?q.min.z:0;else{let Ae=Math.pow(2,-H);bt=Math.floor(_e.width*Ae),mt=Math.floor(_e.height*Ae),y.isDataArrayTexture?wt=_e.depth:y.isData3DTexture?wt=Math.floor(_e.depth*Ae):wt=1,At=0,Ht=0,Zt=0}G!==null?(Tt=G.x,ae=G.y,Re=G.z):(Tt=0,ae=0,Re=0);let de=dt.convert(U.format),Ze=dt.convert(U.type),yt;U.isData3DTexture?(Z.setTexture3D(U,0),yt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),yt=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),yt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let en=x.getParameter(O.UNPACK_ROW_LENGTH),ee=x.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=x.getParameter(O.UNPACK_SKIP_PIXELS),Hn=x.getParameter(O.UNPACK_SKIP_ROWS),gi=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,At),x.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Zt);let ms=y.isDataArrayTexture||y.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let Ae=X.get(y),xi=X.get(U),me=X.get(Ae.__renderTarget),_i=X.get(xi.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,me.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let gs=0;gs<wt;gs++)ms&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(y).__webglTexture,H,Zt+gs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(U).__webglTexture,gt,Re+gs)),O.blitFramebuffer(At,Ht,bt,mt,Tt,ae,bt,mt,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||X.has(y)){let Ae=X.get(y),xi=X.get(U);x.bindFramebuffer(O.READ_FRAMEBUFFER,w),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,P);for(let me=0;me<wt;me++)ms?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,H,Zt+me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ae.__webglTexture,H),ue?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xi.__webglTexture,gt,Re+me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xi.__webglTexture,gt),H!==0?O.blitFramebuffer(At,Ht,bt,mt,Tt,ae,bt,mt,O.COLOR_BUFFER_BIT,O.NEAREST):ue?O.copyTexSubImage3D(yt,gt,Tt,ae,Re+me,At,Ht,bt,mt):O.copyTexSubImage2D(yt,gt,Tt,ae,At,Ht,bt,mt);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(yt,gt,Tt,ae,Re,bt,mt,wt,de,Ze,_e.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,gt,Tt,ae,Re,bt,mt,wt,de,_e.data):O.texSubImage3D(yt,gt,Tt,ae,Re,bt,mt,wt,de,Ze,_e):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,Tt,ae,bt,mt,de,Ze,_e.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,Tt,ae,_e.width,_e.height,de,_e.data):O.texSubImage2D(O.TEXTURE_2D,gt,Tt,ae,bt,mt,de,Ze,_e);x.pixelStorei(O.UNPACK_ROW_LENGTH,en),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ee),x.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),x.pixelStorei(O.UNPACK_SKIP_ROWS,Hn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,gi),gt===0&&U.generateMipmaps&&O.generateMipmap(yt),x.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){B=0,k=0,Y=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var rn={},Qn={};async function Td(i=()=>{}){let t=await(await fetch("img/manifest.json")).json(),e=Object.keys(t),n=0;return await Promise.all(e.map(s=>new Promise(r=>{let a=new Image;a.decoding="async",a.onload=()=>{rn[s]=a,Qn[s]=t[s],n++,i(n/e.length),r()},a.onerror=()=>{console.warn("image failed",s),n++,r()},a.src=t[s].src}))),t}var Xt=i=>Qn[i]?Qn[i].src:`img/ui/${i}.webp`;var ei=.72,Ed=30,Ad=21,ti={uTime:{value:0},uTint:{value:new Gt(1,1,1)},uHazeCol:{value:new Gt("#9fbfb4")},uNight:{value:0}},v_=`
uniform float uTime; uniform float uSway; uniform float uPhase;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec3 p = position;
  float h = uv.y;
  p.x += (sin(uTime * 1.5 + uPhase) + 0.35 * sin(uTime * 3.7 + uPhase * 1.7)) * uSway * h * h;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,y_=`
uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; uniform float uFlash;
uniform float uHaze; uniform vec3 uHazeCol; uniform float uDark; uniform float uEmit;
varying vec2 vUv;
void main(){
  vec4 c = texture2D(map, vUv);
  if (c.a < 0.01) discard;
  vec3 col = c.rgb * mix(uTint, vec3(1.0), uEmit) * (1.0 - uDark);
  col = mix(col, uHazeCol * uTint, uHaze);
  col = mix(col, vec3(1.0, 0.98, 0.9), uFlash);
  gl_FragColor = vec4(col, c.a * uAlpha);
  #include <colorspace_fragment>
}`,M_=new Mn(1,1).translate(0,.5,0),Yc=new Map;function b_(i,{repeat:t=!1,blur:e=0}={}){let n=i+(e?":b"+e:"");if(Yc.has(n))return Yc.get(n);let s=rn[i];if(!s)throw new Error("missing image "+i);if(e){let a=document.createElement("canvas"),o=e*3;a.width=s.width+o*2,a.height=s.height+o*2;let l=a.getContext("2d");l.filter=`blur(${e}px)`,l.drawImage(s,o,o),s=a}let r=new He(s);return r.colorSpace=De,r.anisotropy=4,t&&(r.wrapS=r.wrapT=Ki),r.needsUpdate=!0,Yc.set(n,r),r}var qs=class{constructor(t,e,n,{x:s=0,z:r=0,y:a=0,sway:o=0,flip:l=!1,shadow:c=0,haze:h=0,dark:d=0,order:u=2,blur:p=0,emit:g=0}={}){this.world=t,this.h=n,this.flip=l,this.sx=1,this.sy=1,this.blur=p,this.mat=new qe({vertexShader:v_,fragmentShader:y_,transparent:!0,depthWrite:!1,side:bn,uniforms:{map:{value:null},uTint:ti.uTint,uTime:ti.uTime,uHazeCol:ti.uHazeCol,uSway:{value:o},uPhase:{value:Math.random()*6.28},uAlpha:{value:1},uFlash:{value:0},uHaze:{value:h},uDark:{value:d},uEmit:{value:g}}}),this.mesh=new Ue(M_,this.mat),this.mesh.rotation.x=-ei,this.mesh.renderOrder=u,this.mesh.position.set(s,a,r),this.set(e),t.scene.add(this.mesh),c&&(this.shadow=new Ue(t.shadowGeo,t.shadowMat),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.shadowW=c,t.scene.add(this.shadow)),this.sync()}set(t){if(this.name===t)return;this.name=t,this.mat.uniforms.map.value=b_(t,{blur:this.blur});let e=Qn[t]||{w:rn[t].width,h:rn[t].height};this.aspect=e.w/e.h}useCanvas(t){let e=new di(t);e.colorSpace=De,e.anisotropy=4,this.name=null,this.canvasTex=e,this.mat.uniforms.map.value=e,this.aspect=t.width/t.height}refresh(){this.canvasTex&&(this.canvasTex.needsUpdate=!0)}get x(){return this.mesh.position.x}get z(){return this.mesh.position.z}get w(){return this.h*this.aspect}setPos(t,e,n=this.mesh.position.y){this.mesh.position.set(t,n,e),this.sync()}sync(){let t=this.h*this.aspect;if(this.mesh.scale.set(t*this.sx*(this.flip?-1:1),this.h*this.sy,1),this.shadow){this.shadow.position.set(this.mesh.position.x,.02,this.mesh.position.z+.02);let e=this.shadowW*(1-Math.min(.5,this.mesh.position.y*.25));this.shadow.scale.set(e,e*.42,1)}}set alpha(t){this.mat.uniforms.uAlpha.value=t}get alpha(){return this.mat.uniforms.uAlpha.value}set flash(t){this.mat.uniforms.uFlash.value=t}set visible(t){this.mesh.visible=t,this.shadow&&(this.shadow.visible=t)}get visible(){return this.mesh.visible}dispose(){this.world.scene.remove(this.mesh),this.shadow&&this.world.scene.remove(this.shadow),this.mat.dispose()}};function Cd(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=128,n=0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,i),a.addColorStop(n,i),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,e,e);let o=new di(s);return o.colorSpace=De,o}var S_=`
attribute vec4 aCol; attribute float aSize; attribute float aKind;
uniform float uScale;
varying vec4 vCol; varying float vKind;
void main(){
  vCol = aCol; vKind = aKind;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,w_=`
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
}`,el=class{constructor(t,e,n){this.max=e,this.p=[];let s=new fn;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.kind=new Float32Array(e),s.setAttribute("position",new Xe(this.pos,3)),s.setAttribute("aCol",new Xe(this.col,4)),s.setAttribute("aSize",new Xe(this.size,1)),s.setAttribute("aKind",new Xe(this.kind,1)),this.geo=s,this.mat=new qe({vertexShader:S_,fragmentShader:w_,transparent:!0,depthWrite:!1,blending:n?Ni:Di,uniforms:{uScale:{value:400}}}),this.pts=new br(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=4,t.add(this.pts)}add(t){this.p.length>=this.max&&this.p.shift(),t.t=0,this.p.push(t)}update(t){let e=0,n=new Gt;for(let s=this.p.length-1;s>=0;s--){let r=this.p[s];if(r.t+=t,r.t>=r.life){this.p.splice(s,1);continue}r.vy-=(r.g||0)*t;let a=r.drag?Math.max(0,1-r.drag*t):1;r.vx*=a,r.vy*=a,r.vz*=a,r.wander&&(r.vx+=Math.sin(r.t*2.1+r.ph)*r.wander*t,r.vy+=Math.cos(r.t*1.7+r.ph)*r.wander*.6*t),r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.02&&r.g&&(r.y=.02,r.vy*=-.3,r.vx*=.6,r.vz*=.6);let o=r.t/r.life,l=r.a;r.fadeIn&&(l*=Math.min(1,r.t/r.fadeIn)),l*=r.blink?.55+.45*Math.sin(r.t*r.blink+r.ph):1,l*=1-Math.pow(o,r.fadePow||3),n.set(r.c),this.pos[e*3]=r.x,this.pos[e*3+1]=r.y,this.pos[e*3+2]=r.z,this.col[e*4]=n.r,this.col[e*4+1]=n.g,this.col[e*4+2]=n.b,this.col[e*4+3]=l,this.size[e]=r.s*(r.grow?.6+o*.9:1),this.kind[e]=r.k||0,e++}this.geo.setDrawRange(0,e);for(let s of["position","aCol","aSize","aKind"])this.geo.attributes[s].needsUpdate=!0}},T_=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,E_=`
uniform sampler2D tGrass, tDirt, tCobble, tMask, tShade;
uniform vec4 uRect; uniform vec3 uTint; uniform float uNight;
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
  gl_FragColor = vec4(c * uTint, 1.0);
  #include <colorspace_fragment>
}`;function A_(i){let t=i.width,e=i.height,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.drawImage(i,-t/2,-e/2),s.drawImage(i,t/2,-e/2),s.drawImage(i,-t/2,e/2),s.drawImage(i,t/2,e/2);let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d");a.drawImage(i,0,0),a.globalCompositeOperation="destination-in";let o=a.createRadialGradient(t/2,e/2,t*.18,t/2,e/2,t*.5);return o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,t,e),s.drawImage(r,0,0),n}var nl=class{constructor(t){this.canvas=t,this.renderer=new jo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=De,this.renderer.setClearColor("#2d3a2c"),this.renderer.setTransparentSort((e,n)=>e.groupOrder-n.groupOrder||e.renderOrder-n.renderOrder||e.object.matrixWorld.elements[14]-n.object.matrixWorld.elements[14]||e.id-n.id),this.scene=new xr,this.camera=new je(Ed,16/9,1,200),this.target=new W(0,0,0),this.look=new W(0,0,0),this.dist=Ad,this.distGoal=Ad,this.shake=0,this.shadowGeo=new Mn(1,1),this.shadowMat=new Zn({map:Cd("rgba(28,30,40,1)","rgba(28,30,40,0)",64,.25),transparent:!0,depthWrite:!1,opacity:.32}),this.glowTex=Cd("rgba(255,210,140,1)","rgba(255,170,90,0)",128,.05),this.soft=new el(this.scene,500,!1),this.glow=new el(this.scene,500,!0),this.glows=[],this.layers=[],this.sprites=[],this.quality=1,this.resize()}get uniforms(){return ti}buildGround(t,e,n){let[s,r,a,o]=t,l=C=>{let D=document.createElement("canvas");return D.width=Math.round(a*C),D.height=Math.round(o*C),D},c=l(6),h=l(3),d=c.getContext("2d");d.fillStyle="#000",d.fillRect(0,0,c.width,c.height);let u=C=>({s:C,X:D=>(D-s)*C,Z:D=>(D-r)*C});e(d,u(6));let p=h.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,h.width,h.height),n(p,u(3));let g=C=>{let D=new di(C);return D.flipY=!1,D.minFilter=Ne,D.generateMipmaps=!1,D},M=C=>{let D=new He(A_(rn[C]));return D.wrapS=D.wrapT=Ki,D.colorSpace=De,D.anisotropy=8,D.needsUpdate=!0,D},m=new qe({vertexShader:T_,fragmentShader:E_,uniforms:{tGrass:{value:M("grass")},tDirt:{value:M("dirt")},tCobble:{value:M("cobble")},tMask:{value:g(c)},tShade:{value:g(h)},uRect:{value:new ye(s,r,a,o)},uTint:ti.uTint,uNight:ti.uNight}}),f=new Ue(new Mn(a,o),m);f.rotation.x=-Math.PI/2,f.position.set(s+a/2,0,r+o/2),f.renderOrder=0,this.scene.add(f),this.maskCanvas=c}sprite(t,e,n){let s=new qs(this,t,e,n);return this.sprites.push(s),s}addGlow(t,e,n,s,r="#ffc98a",{always:a=0,flicker:o=.08}={}){let l=new Ue(new Mn(1,1),new Zn({map:this.glowTex,color:r,transparent:!0,depthWrite:!1,blending:Ni,opacity:0}));l.rotation.x=-ei,l.position.set(t,e,n),l.scale.set(s,s,1),l.renderOrder=3,this.scene.add(l);let c={m:l,size:s,always:a,flicker:o,ph:Math.random()*9};return this.glows.push(c),c}addLayer(t,e,n=0){return this.scene.add(t),this.layers.push({group:t,dz:e,dy:n}),t}setLight(t){ti.uTint.value.setRGB(t.tint[0],t.tint[1],t.tint[2]),ti.uNight.value=t.night,this.shadowMat.opacity=t.shadow,ti.uHazeCol.value.set("#a7c4b8").lerp(new Gt("#5a6aa8"),t.night),this.night=t.night,this.renderer.setClearColor(new Gt("#33452f").lerp(new Gt("#1b2140"),t.night))}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.quality>0?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=Ed*Math.max(1,16/9/(t/e)*.85),this.camera.updateProjectionMatrix();let s=e*n/(2*Math.tan(Sc.degToRad(this.camera.fov)/2));this.soft.mat.uniforms.uScale.value=s*.05,this.glow.mat.uniforms.uScale.value=s*.05}follow(t,e,n,s=[0,0],r=[-1e9,1e9]){let a=Math.min(r[1],Math.max(r[0],t+s[0])),o=e+s[1],l=1-Math.exp(-n*4.5);this.target.x+=(a-this.target.x)*l,this.target.z+=(o-this.target.z)*l,this.dist+=(this.distGoal-this.dist)*(1-Math.exp(-n*3))}snap(t,e){this.target.set(t,0,e)}update(t,e){ti.uTime.value=e;let n=this.dist,s=0,r=0;this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),s=(Math.random()-.5)*this.shake*.4,r=(Math.random()-.5)*this.shake*.4),this.camera.position.set(this.target.x+s,n*Math.sin(ei)+r+.9,this.target.z+n*Math.cos(ei)),this.look.set(this.target.x+s,.9+r,this.target.z),this.camera.lookAt(this.look);for(let a of this.layers)a.group.position.z=this.target.z+a.dz,a.group.position.y=a.dy;for(let a of this.glows){let o=1+Math.sin(e*7+a.ph)*a.flicker+Math.sin(e*13.1+a.ph*2)*a.flicker*.5;a.m.material.opacity=Math.min(1,a.always+(1-a.always)*this.night)*.75*o,a.m.scale.set(a.size*o,a.size*o,1)}this.soft.update(t),this.glow.update(t)}render(){this.renderer.render(this.scene,this.camera)}toScreen(t,e,n,s={x:0,y:0}){let r=new W(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.behind=r.z>1,s}static topY(t){return t*Math.cos(ei)}static topZ(t){return-t*Math.sin(ei)}dust(t,e,n=3,s="#e8dcc0"){for(let r=0;r<n;r++){let a=Math.random()*6.28;this.soft.add({x:t+Math.cos(a)*.15,y:.1,z:e+Math.sin(a)*.1,vx:Math.cos(a)*.6,vy:.5+Math.random()*.4,vz:Math.sin(a)*.3,drag:3,life:.5+Math.random()*.2,s:4+Math.random()*3,c:s,a:.55,grow:!0})}}sparkle(t,e,n,s=8,r="#fff4c2",a=.6,o=1.2){for(let l=0;l<s;l++){let c=Math.random()*6.28,h=Math.random()*a;this.glow.add({x:t+Math.cos(c)*h,y:e+Math.random()*.4,z:n+Math.sin(c)*h*.6,vx:Math.cos(c)*.6,vy:o*(.5+Math.random()),vz:Math.sin(c)*.3,drag:2.5,life:.7+Math.random()*.5,s:5+Math.random()*5,c:r,a:1,k:1})}}burst(t,e,n,s,r=10){for(let a=0;a<r;a++){let o=Math.random()*6.28,l=1.5+Math.random()*2;this.soft.add({x:t,y:e,z:n,vx:Math.cos(o)*l,vy:2+Math.random()*2.5,vz:Math.sin(o)*l*.5,g:9,life:.6+Math.random()*.3,s:3.5+Math.random()*3,c:s,a:1,fadePow:4})}}};var Ot=(i,t=1)=>(Qn[i]&&Qn[i].wh||1)*t,Pd=[[-44,-10.9,-5.8,6.8],[-11,12,-6.4,7],[12,30,-3.4,4.6],[30,54,-5.6,7]];var pi=30,is=-12,Vr=[];for(let i=0;i<2;i++)for(let t=0;t<3;t++)Vr.push({x:3.6+t*2.1,z:-.7+i*2.3});var at={start:[1.5,1.8],door:[-4.1,-6.2],mailbox:[-.4,-5.2],cauldron:[-8.6,-2.4],cat:[-2.3,-5.5],crowWait:[1.4,-3.6],crowEnter:[16,.6],sign:[10.6,1.2],fountain:[42,0],board:[39.6,-5.4],myStall:[47.6,4.4],roadEnd:[29.5,.6],woodSign:[-10.6,.1]},sl=[[-16.6,-2.9],[-21.2,4.7],[-26.4,-3.5],[-31.2,4.3],[-37.4,-1.4]],jc=[[-19.2,0],[-24.6,-1.4],[-33.4,-.4],[-39.4,3.4]],Rd=[[-15.2,-4.6],[-23.4,-4.8],[-29.6,-2.2],[-35.2,-4.6],[-41.6,-4.2]],Id=[[-18.4,6],[-28.6,6.3],[-34.8,6.1],[-42.2,5.6]],ki={mira:[36,-3.3],juniper:[48,-3.3],oz:[36.6,4.4]};function Zc(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Jc(i,t,e=0){return Pd.some(([n,s,r,a])=>i>n-e&&i<s+e&&t>r-e&&t<a+e)}function Ld(i){let t={colliders:[],occluders:[],props:{},tick:[]},e=Zc(20261031),n=(_,b,T,A,L={})=>{let w=i.sprite(_,b,{x:T,z:A,shadow:L.shadow??b*.5,...L});return L.col&&t.colliders.push({x:T+(L.colX||0),z:A-(L.colZ??.15),r:L.col}),L.occ!==!1&&b>2.2&&t.occluders.push(w),w},s=(_,b,T,A=.06)=>{let L=(1-T)*_.h;return[_.x+(b-.5)*_.w*(_.flip?-1:1),L*Math.cos(ei),_.z-L*Math.sin(ei)+A]},r=(_,b,T,A)=>t.colliders.push({rect:[_,b,T,A]}),a=n("cottage",Ot("cottage"),at.door[0]+.11*(Qn.cottage?Qn.cottage.ww:6.7),-6.7,{shadow:0,occ:!0});r(a.x-a.w*.45,a.x+a.w*.45,-10,-6.5),t.props.cottage=a;for(let[_,b,T]of[[.35,.4,1.5],[.7,.71,1.5],[.39,.74,1.1]]){let A=s(a,_,b);i.addGlow(A[0],A[1],A[2],T,"#ffc477")}t.chimney=s(a,.78,.03),t.props.cauldron=n("cauldron_out",Ot("cauldron_out"),at.cauldron[0],at.cauldron[1],{col:.8,shadow:1.6}),i.addGlow(at.cauldron[0],.35,at.cauldron[1]+.1,2.4,"#ff9a4a",{always:.55,flicker:.12}),t.props.mailbox=n("mailbox",Ot("mailbox"),at.mailbox[0],at.mailbox[1],{col:.35,shadow:.7});let o=n("lantern",Ot("lantern"),1.2,-5.6,{col:.3,shadow:.6});{let _=s(o,.71,.42);i.addGlow(_[0],_[1],_[2],2.6,"#ffc066",{always:.15})}n("barrel",Ot("barrel"),.4,-6.3,{col:.5,shadow:1}),n("basket",Ot("basket"),-.9,-6.4,{shadow:.6}),n("bench",Ot("bench"),-7.4,3.6,{col:.6,colX:0,shadow:1.6}),n("wcan",Ot("wcan"),9.3,-1.5,{shadow:.5}),n("basket",Ot("basket"),2.2,-2.2,{shadow:.55}),t.props.sign=n("signpost",Ot("signpost"),at.sign[0],at.sign[1],{col:.3,shadow:.9}),t.props.woodSign=n("signpost",Ot("signpost",.92),at.woodSign[0],at.woodSign[1],{col:.3,shadow:.9,flip:!0});let l=n("lantern",Ot("lantern"),12.6,-3.4,{col:.3,shadow:.6});{let _=s(l,.71,.42);i.addGlow(_[0],_[1],_[2],2.6,"#ffc066",{always:.15})}t.props.fountain=n("fountain",Ot("fountain"),at.fountain[0],at.fountain[1],{col:1.75,colZ:.9,shadow:3.4}),t.props.board=n("board",Ot("board"),at.board[0],at.board[1],{col:.7,shadow:1.6});let c={};for(let[_,b,T]of[["mira","stall_red",ki.mira],["juniper","stall_green",ki.juniper],["oz","stall_blue",ki.oz]]){let A=n(b,Ot(b),T[0],T[1],{shadow:2.8});r(T[0]-1.45,T[0]+1.45,T[1]-1.6,T[1]-.25),c[_]=A}t.props.stalls=c,t.props.myStall=n("stall_mine",Ot("stall_mine"),at.myStall[0],at.myStall[1],{shadow:2.8}),r(at.myStall[0]-1.4,at.myStall[0]+1.4,at.myStall[1]-1.3,at.myStall[1]-.25);let h=[["house_a",32.2,-7.6,!1],["house_b",38.2,-8.4,!0],["house_a",46.2,-8.4,!0],["house_b",52,-7.6,!1]];for(let[_,b,T,A]of h){let L=n(_,Ot(_),b,T,{shadow:0,flip:A});r(b-2.1,b+2.1,T-3,T-.2);for(let[w,P]of _==="house_a"?[[.4,.52],[.38,.36]]:[[.3,.52],[.62,.52]]){let B=s(L,w,P);i.addGlow(B[0],B[1],B[2],2.2,"#ffb866",{flicker:.04})}}for(let _ of[33.6,50.4]){let b=n("lamp",Ot("lamp"),_,2.6,{col:.25,shadow:.6}),T=s(b,.5,.2);i.addGlow(T[0],T[1],T[2],3,"#ffcf7a",{always:.12})}n("barrel",Ot("barrel"),30.8,-4.8,{col:.5,shadow:1}),n("bench",Ot("bench"),44.6,6.4,{col:.6,shadow:1.6}),n("bench",Ot("bench"),39.4,6.4,{col:.6,shadow:1.6,flip:!0}),n("basket",Ot("basket"),49.9,-2.4,{shadow:.55}),n("basket",Ot("basket"),34.4,-2.5,{shadow:.55}),n("wcan",Ot("wcan"),53,-4.9,{shadow:.5});let d=[],u=["oak","pine","birch","oak","pine"],p=["tallwood","pine","bluewood","oak","tallwood","pine"],g=(_,b,T={})=>{let A=T.kinds||(_<is?p:u),L=A[Math.floor(e()*A.length)],w=Ot(L)*(.85+e()*.3)*(T.scale||1),P=n(T.kind||L,T.kind&&T.h||w,_,b,{sway:.05+e()*.05,flip:e()<.5,shadow:w*.32,col:T.noCol?0:.45,haze:T.haze||0});return d.push([_,b,w]),P};for(let _=-47;_<30;_+=1.6+e()*1.4){if(_>a.x-a.w*.5&&_<a.x+a.w*.5){g(_,-11.2-e()*1.4,{haze:.08});continue}g(_,-8.2-e()*1.2),e()<.75&&g(_+e()*1.2,-10.8-e()*1.6,{haze:.12})}for(let _=28;_<58;_+=1.7+e()*1.4)g(_,-11.6-e()*1.6,{haze:.15});for(let _=12.5;_<29.5;_+=1.8+e()*1.6)g(_,-4.8-e()*1.6),e()<.6&&g(_+.8,-6.8-e()*1.4,{haze:.06});for(let _=-8;_<4;_+=1.4+e()*1.1)_>-.4||g(-12.2-e()*.8,_);for(let _=4.4;_<8.6;_+=1.1+e()*.5)n(e()<.5?"bush":"bush_flower",Ot("bush",.95+e()*.25),-12.4-e()*.6,_,{sway:.05,flip:e()<.5,shadow:1.2});r(-13.2,-11.6,-12,.2),r(-13.2,-11.6,3.6,12);for(let _=-8;_<10;_+=1.5+e()*1.2)g(-45.6-e()*1.2,_),g(-48.6-e()*2,_+e(),{haze:.12});for(let _=-44.5;_<-13;_+=1.3+e()*.9)e()<.22?g(_,7.9+e()*.8,{kinds:["bluewood"],scale:.75}):n(e()<.7?"bush":"bush_flower",Ot("bush",.9+e()*.3),_,7.5+e()*.7,{col:.55,sway:.05,flip:e()<.5,shadow:1.2});for(let[_,b]of Rd)g(_,b),g(_+1.3+e()*.6,b-.9,{kinds:["bluewood","tallwood"],scale:.8}),e()<.6&&g(_-1.4-e()*.5,b-.6,{kinds:["bluewood","pine"],scale:.7});for(let[_,b]of Id)g(_,b,{kinds:["bluewood"],scale:.8}),n("bush",Ot("bush",1.1),_-1.1,b+.4,{col:.55,sway:.05,shadow:1.3}),n(e()<.5?"bush_flower":"fern",Ot("bush_flower"),_+1,b+.5,{sway:.06,flip:!0,shadow:1});for(let _=-8;_<10;_+=1.6+e()*1.3)g(55.6+e()*1.6,_),g(58.5+e()*2.5,_+e(),{haze:.1});for(let _=12.5;_<29.5;_+=2.2+e()*2)g(_,6.4+e()*2.2,{scale:.9});for(let[_,b]of[[-3.8,9.6],[9.8,8.8],[33,9],[52.5,8.6]])g(_,b,{scale:.95,kinds:u});g(44,9.8,{kind:"bush_flower",h:Ot("bush_flower",1.2),noCol:!0}),g(-9.8,-.8,{kind:"ytree",h:Ot("ytree")}),g(10.4,-3.8,{kind:"birch",h:Ot("birch")}),t.trees=d,t.props.berries=sl.map(([_,b],T)=>n("berry_full",Ot("berry_full",1.05),_,b,{col:.6,shadow:1.5,flip:T%2===1,sway:.03}));let M=[["bush",Ot("bush"),.55],["bush_flower",Ot("bush_flower"),.55],["fern",Ot("fern"),0],["boulder",Ot("boulder"),.5],["stump",Ot("stump"),.45],["flowers",Ot("flowers"),0],["pebbles",Ot("pebbles"),0],["grass_tuft",Ot("grass_tuft"),0]],m=(_,b,T)=>{for(let A of Vr)if(Math.abs(_-A.x)<1.3+T&&Math.abs(b-A.z)<1.3+T)return!1;for(let A of["door","mailbox","cauldron","cat","crowWait","sign","board","myStall","fountain"]){let L=at[A];if(Math.hypot(_-L[0],b-L[1])<2.2+T)return!1}for(let A of Object.values(ki))if(Math.hypot(_-A[0],b-A[1])<2.6)return!1;return!0},f=0;for(let _=0;_<150&&f<3e3;f++){let b=-12+e()*68,T=-7+e()*16,[A,L,w]=M[Math.floor(e()*M.length)],P=Jc(b,T,-.4);P&&(w||L>1)||m(b,T,P?.3:0)&&(b>30&&b<54&&T>-6&&T<7&&Math.hypot(b-42,T-.5)<9.5||Math.abs(T-Kc(b))<1.3&&b>-2&&b<33||b<0&&Math.abs(T-il(b))<1.3||Math.hypot(b-at.woodSign[0],T-at.woodSign[1])<1.6||(n(A,L*(.85+e()*.3),b,T,{col:P?0:w,sway:A==="fern"||A==="grass_tuft"||A.startsWith("bush")?.06:0,flip:e()<.5,shadow:L*.7}),_++))}for(let _=0,b=0;_<70&&b<2e3;b++){let T=-10+e()*64,A=-6+e()*13;if(!Jc(T,A)||!m(T,A,0)||Math.abs(A-Kc(T))<1.2&&T>-2&&T<33||T<0&&Math.abs(A-il(T))<1.1||T>31&&Math.hypot(T-42,A-.5)<9)continue;let L=e()<.6?"grass_tuft":e()<.8?"pebbles":"mushrooms";n(L,Ot(L)*(.8+e()*.4),T,A,{sway:L==="grass_tuft"?.07:0,flip:e()<.5,shadow:.4}),_++}let C=(_,b,T)=>{for(let[A,L]of sl)if(Math.hypot(_-A,b-L)<1.5+T)return!1;for(let[A,L]of jc)if(Math.hypot(_-A,b-L)<1.4+T)return!1;for(let[A,L]of[...Rd,...Id])if(Math.hypot(_-A,b-L)<1.4)return!1;return Math.hypot(_-at.woodSign[0],b-at.woodSign[1])>1.6},S=[["fern",0,.06,4],["tallgrass",0,.07,3],["flowers",0,.04,2],["mushrooms",0,0,1],["grass_tuft",0,.07,3],["stump",.45,0,1],["log",.6,0,1],["boulder",.5,0,1],["bush",.55,.05,2]].flatMap(_=>Array(_[3]).fill(_));for(let _=0,b=0;_<95&&b<4e3;b++){let T=-45+e()*33.5,A=-7.2+e()*15,[L,w,P]=S[Math.floor(e()*S.length)],B=Jc(T,A,-.3);if(Math.abs(A-il(T))<(w?2.1:1)||!C(T,A,w?.6:0)||B&&w&&e()<.7)continue;let Y=Ot(L)*(.85+e()*.35);n(L,Y,T,A,{col:w,sway:P,flip:e()<.5,shadow:Y*.7}),_++}let E=new hi;for(let _=0;_<7;_++){let b=new qs(i,"backdrop",8.5,{x:-60+_*30.5,z:0,haze:.35,order:2});i.scene.remove(b.mesh),E.add(b.mesh)}for(let _=0;_<8;_++){let b=new qs(i,"backdrop",7,{x:-55+_*25.5,z:2.5,haze:.18,order:2,flip:!0});i.scene.remove(b.mesh),E.add(b.mesh)}E.position.z=-16,i.scene.add(E),t.back=E,i.buildGround([-60,-35,150,65],(_,b)=>{let T=(P,B,k,Y,$=1)=>{_.fillStyle=Y,_.globalAlpha=$,_.beginPath(),_.ellipse(b.X(P),b.Z(B),k*b.s,k*b.s*.9,0,0,7),_.fill(),_.globalAlpha=1},A=Zc(7);_.globalCompositeOperation="lighter";let L=[];for(let P=-6.2;P<4.1;P+=.25)L.push([-4.1+(P+6.2)*.45+Math.sin(P)*.3,P]);for(let P=0;P<33;P+=.25)L.push([P,Kc(P)]);for(let[P,B]of L)T(P+(A()-.5)*.4,B+(A()-.5)*.4,.95+A()*.35,"rgb(150,0,0)",.55);for(let P=0;P>-46;P-=.25)T(P+(A()-.5)*.4,il(P)+(A()-.5)*.5,.6+A()*.3,"rgb(118,0,0)",P<-12?.42:.5);for(let P=0;P<=1;P+=.05)T(-3-P*5.4,-2.2+Math.sin(P*3)*.3,.75+A()*.3,"rgb(120,0,0)",.5);for(let P of Vr)for(let B=0;B<6;B++)T(P.x+(A()-.5)*.6,P.z+(A()-.5)*.5,.75+A()*.2,"rgb(0,0,150)",.6);for(let P=0;P<340;P++){let B=A()*6.28,k=Math.sqrt(A())*9;T(42+Math.cos(B)*k*1.25,.5+Math.sin(B)*k*.7,1+A()*.5,"rgb(0,140,0)",.6)}for(let P=30;P<55;P+=.6)T(P,-5+(A()-.5)*.8,1.1,"rgb(0,120,0)",.5);_.globalCompositeOperation="source-over";let w=document.createElement("canvas");w.width=_.canvas.width,w.height=_.canvas.height,w.getContext("2d").drawImage(_.canvas,0,0),_.filter="blur(2px)",_.drawImage(w,0,0),_.filter="none"},(_,b)=>{for(let[L,w,P]of d){let B=_.createRadialGradient(b.X(L),b.Z(w-.6),0,b.X(L),b.Z(w-.6),P*.55*b.s);B.addColorStop(0,"rgba(255,0,0,0.55)"),B.addColorStop(1,"rgba(255,0,0,0)"),_.fillStyle=B,_.beginPath(),_.arc(b.X(L),b.Z(w-.6),P*.55*b.s,0,7),_.fill()}let T=(L,w,P,B,k=.6)=>{let Y=_.createLinearGradient(b.X(L),b.Z(w),b.X(P),b.Z(B));Y.addColorStop(0,`rgba(255,0,0,${k})`),Y.addColorStop(1,"rgba(255,0,0,0)"),_.fillStyle=Y,_.fillRect(0,0,_.canvas.width,_.canvas.height)};_.globalCompositeOperation="lighten",T(0,-13,0,-6.5),T(-14.5,0,-11.5,0,.3),T(-50,0,-42,0),T(58,0,53,0),_.fillStyle="rgba(255,0,0,0.42)",_.fillRect(b.X(-60),0,b.X(-12.5)-b.X(-60),_.canvas.height);let A=Zc(11);for(let L=0;L<90;L++){let w=-46+A()*34,P=-7+A()*16,B=(1.2+A()*2.2)*b.s,k=_.createRadialGradient(b.X(w),b.Z(P),0,b.X(w),b.Z(P),B);k.addColorStop(0,"rgba(0,255,0,0.7)"),k.addColorStop(1,"rgba(0,255,0,0)"),_.fillStyle=k,_.beginPath(),_.arc(b.X(w),b.Z(P),B,0,7),_.fill()}for(let L=0;L<70;L++){let w=-45+A()*33,P=-6.5+A()*14,B=(.4+A()*.9)*b.s,k=_.createRadialGradient(b.X(w),b.Z(P),0,b.X(w),b.Z(P),B);k.addColorStop(0,"rgba(0,0,255,0.9)"),k.addColorStop(.6,"rgba(0,0,255,0.5)"),k.addColorStop(1,"rgba(0,0,255,0)"),_.fillStyle=k,_.beginPath(),_.ellipse(b.X(w),b.Z(P),B*1.3,B,.5,0,7),_.fill()}});let I=(()=>{let _=document.createElement("canvas");_.width=64,_.height=256;let b=_.getContext("2d"),T=b.createLinearGradient(0,0,0,256);T.addColorStop(0,"rgba(255,240,200,0)"),T.addColorStop(.3,"rgba(255,240,200,0.9)"),T.addColorStop(1,"rgba(255,240,200,0)"),b.fillStyle=T,b.fillRect(0,0,64,256);let A=b.createLinearGradient(0,0,64,0);return A.addColorStop(0,"rgba(0,0,0,1)"),A.addColorStop(.5,"rgba(0,0,0,0)"),A.addColorStop(1,"rgba(0,0,0,1)"),b.globalCompositeOperation="destination-out",b.fillStyle=A,b.fillRect(0,0,64,256),new di(_)})(),N=[];for(let[_,b,T]of[[-1,-3,2.2],[6,-2,3],[21,-1,2.6],[40,-2,3.2],[47,1,2],[-19,0,2.4],[-27.5,1.5,3],[-38,-.5,2.2]]){let A=new Ue(new Mn(T,11),new Zn({map:I,transparent:!0,depthWrite:!1,blending:Ni,opacity:.2}));A.position.set(_,4,b),A.rotation.set(-ei,0,-.42),A.renderOrder=4,i.scene.add(A),N.push({m:A,ph:e()*6})}t.tick.push((_,b)=>{for(let T of N)T.m.material.opacity=(1-i.night)*(.13+.05*Math.sin(b*.5+T.ph))});let v=0;return t.tick.push((_,b)=>{if(v+=_,v<.05)return;v=0;let T=i.target.x,A=i.target.z,[L,w]=at.cauldron;Math.abs(T-L)<22&&e()<.5&&i.glow.add({x:L+(e()-.5)*.7,y:1.05,z:w+.1,vx:0,vy:.5+e()*.4,vz:0,wander:.6,ph:e()*6,life:1.4,s:3+e()*3,c:e()<.5?"#c79bff":"#8fe0a8",a:.9,k:0}),Math.abs(T-42)<22&&e()<.6&&i.glow.add({x:42+(e()-.5)*1.2,y:2+e()*.6,z:-.4,vx:(e()-.5)*.8,vy:.6,vz:0,g:3,life:.8,s:3+e()*2,c:"#cfefff",a:.8,k:1}),t.chimney&&Math.abs(T-t.chimney[0])<24&&e()<.22&&i.soft.add({x:t.chimney[0]+(e()-.5)*.2,y:t.chimney[1]+.1,z:t.chimney[2],vx:.18,vy:.45,vz:0,wander:.25,ph:e()*6,fadeIn:.4,life:3.4,s:7+e()*5,grow:1.6,c:"#efe9df",a:.5,k:0,fadePow:2});let P=i.night;if(e()<.25+P*.5){let B=T+(e()-.5)*24,k=A+(e()-.5)*12;P>.4?i.glow.add({x:B,y:.4+e()*2,z:k,vx:0,vy:0,vz:0,wander:1.2,ph:e()*6,blink:3+e()*3,fadeIn:1,life:5+e()*3,s:5+e()*4,c:"#d8ff8a",a:.95,k:0,fadePow:2}):i.soft.add({x:B,y:.5+e()*3,z:k,vx:.1,vy:.02,vz:0,wander:.3,ph:e()*6,fadeIn:1,life:5,s:2+e()*2,c:"#fff8dc",a:.6,k:0,fadePow:2})}e()<.08&&i.soft.add({x:T+(e()-.5)*22,y:7+e()*2,z:A-3+e()*6,vx:.5,vy:-.7,vz:0,wander:2,ph:e()*6,life:9,s:5+e()*3,c:e()<.5?"#8fae4a":"#d6a84a",a:.95,g:0,fadePow:6})}),t}function Kc(i){if(i<9)return 4.1+Math.sin(i*.35)*.35;if(i<15){let t=(i-9)/6;return 4.1+(.6-4.1)*(t*t*(3-2*t))}return .6+Math.sin(i*.4)*.5}function il(i){let t=1.9+Math.sin(i*.28)*1.1;if(i<=-11)return t;let e=Math.min(1,(i+11)/11),n=e*e*(3-2*e);return t+(4-t)*n}function zr(i,t,e){let n=i.maskCanvas;if(!n)return"grass";zr.data||(zr.data=n.getContext("2d").getImageData(0,0,n.width,n.height).data);let s=Math.round((t+60)*6),a=(Math.round((e+35)*6)*n.width+s)*4,o=zr.data;return o[a+1]>110?"stone":o[a]>100||o[a+2]>100?"dirt":"grass"}function Qc(i,t,e,n=.32){if(!Pd.some(([s,r,a,o])=>t>s&&t<r&&e>a&&e<o))return!0;for(let s of i.colliders)if(s.rect){let[r,a,o,l]=s.rect;if(t>r-n&&t<a+n&&e>o-n&&e<l+n)return!0}else if(s.r&&(t-s.x)**2+((e-s.z)*1.3)**2<(s.r+n)**2)return!0;return!1}var th="brew-a-witch-potion-v1";function Me(){return Date.now()+(V.offsetMs||0)}function rl(){let i=Date.now();return{v:1,name:"",coins:120,fame:0,fameLv:1,inv:{cham:0,lav:0,man:0,mush:0,feather:0,berry:0,moth:0,glowbug:0},found:{},wild:{berry:[],bug:[]},potions:{},seen:{},plots:[{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-36e5},{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-6*6e4}],q:0,qn:0,discovered:{},recipes:{},fog:[],stall:{open:!1,items:[]},bought:{},cust:{i:0,nextAt:0,here:!1,asked:!1},board:[],newCount:0,brewTut:0,lesson:0,seenTown:!1,seenWood:!1,boughtHour:0,pos:[1.5,1.5],lastSeen:i,offsetMs:0,settings:{sound:!0,music:!0,tod:-1}}}var V=C_();function C_(){try{let i=JSON.parse(localStorage.getItem(th));if(i&&i.v===1)return Object.assign(rl(),i,{settings:Object.assign(rl().settings,i.settings)})}catch{}return rl()}var Dd=0;function ge(i=!1){if(i){clearTimeout(Dd),Dd=setTimeout(()=>ge(),400);return}try{localStorage.setItem(th,JSON.stringify(V))}catch{}}function Nd(){localStorage.removeItem(th),V=rl()}var R_=20*6e4,I_=8*6e4,P_=2,al=class{constructor(t,e){this.world=t,V.wild||(V.wild={berry:[],bug:[]}),this.berries=sl.map(([n,s],r)=>({i:r,x:n,z:s,spr:e.props.berries[r],full:null,pop:0,tw:r*1.3})),this.bugs=jc.map(([n,s],r)=>({i:r,hx:n,hz:s,x:n,z:s,y:.9,ph:r*1.7,dir:1,kind:null,scare:0,away:null,spr:t.sprite("moth",Ot("moth",1.4),{x:n,z:s,y:.9,shadow:.3})}))}kind(){return this.world.night>.5?"glowbug":"moth"}berryLeft(t){let e=V.wild.berry[t];return e?Math.max(0,e+R_-Me()):0}bugLeft(t){let e=V.wild.bug[t];return e?Math.max(0,e+I_-Me()):0}update(t,e){let n=this.world;for(let r of this.berries){let a=this.berryLeft(r.i)===0;a!==r.full&&(r.full===!1&&(r.pop=.5,n.sparkle(r.x,.8,r.z,12,"#ffd0d8")),r.full=a,r.spr.set(a?"berry_full":"berry_bare")),r.pop=Math.max(0,r.pop-t*1.5);let o=r.pop>0?Math.sin(r.pop*16)*r.pop*.3:0,l=a?Math.max(0,Math.sin(e*1.9+r.tw))**8*.05:0;r.spr.sx=1+o+l,r.spr.sy=1-o*.7+l*.4,r.spr.sync(),a&&Math.random()<t*.5&&n.glow.add({x:r.x+(Math.random()-.5)*1.2,y:.5+Math.random()*.8,z:r.z+.1,vx:0,vy:.3,vz:0,life:1,s:3+Math.random()*3,c:"#ffe0e6",a:.85,k:1,fadeIn:.2})}let s=this.kind();for(let r of this.bugs){let a=this.bugLeft(r.i)>0;if(a!==r.away&&(r.away&&!a&&n.sparkle(r.hx,1,r.hz,6,s==="glowbug"?"#e6ff9a":"#f4e6ff"),r.away=a,r.spr.visible=!a),a)continue;r.kind!==s&&(r.kind=s,r.spr.set(s),r.spr.h=Ot(s,s==="moth"?1.4:1.7),r.spr.mat.uniforms.uEmit.value=s==="glowbug"?.85:0),r.ph+=t*(1+r.scare*2.2);let o=.85+r.scare*1.3,l=r.hx+Math.sin(r.ph*.8)*o,c=r.hz+Math.sin(r.ph*1.6)*o*.42;Math.abs(l-r.x)>.002&&(r.dir=l>r.x?1:-1),r.x=l,r.z=c,r.y=.75+Math.sin(r.ph*3.1)*.16+r.scare*.6,r.scare=Math.max(0,r.scare-t*.55),s==="moth"?(r.spr.sx=.5+.5*Math.abs(Math.sin(e*15+r.i)),r.spr.sy=1):(r.spr.sx=1,r.spr.sy=1+Math.sin(e*6+r.i)*.05),r.spr.flip=r.dir<0,r.spr.setPos(r.x,r.z,r.y),s==="glowbug"&&Math.random()<t*9&&n.glow.add({x:r.x+(Math.random()-.5)*.15,y:r.y+.12,z:r.z+.05,vx:0,vy:.05,vz:0,life:.9,s:7+Math.random()*5,c:"#dcff7a",a:.8,k:0,fadeIn:.1,fadePow:2})}}nearBerry(t,e,n=1.6){let s=null,r=n;for(let a of this.berries){let o=Math.hypot(a.x-t,(a.z+.5-e)*1.25);o<r&&(r=o,s=a)}return s}nearBug(t,e,n=1.7){let s=null,r=n;for(let a of this.bugs){if(a.away)continue;let o=Math.hypot(a.x-t,(a.z-e)*1.25);o<r&&(r=o,s=a)}return s}pick(t){if(this.berryLeft(t)>0)return 0;let e=this.berries[t];return V.wild.berry[t]=Me(),e.pop=.6,this.world.burst(e.x,.7,e.z+.2,"#c8455a",10),this.world.dust(e.x,e.z+.3,4,"#6d8a3a"),this.update(0,0),P_}tryCatch(t,e,n){if(t.away)return null;if(!(Math.hypot(t.x-e,(t.z-n)*1.25)<1.5))return t.scare=1,null;V.wild.bug[t.i]=Me(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff");let r=t.kind;return this.update(0,0),r}};var wn={head:[.53,.885],head_back:[.49,.94],arm:[.5,.1],leg:[.38,.08],body:{neck:[.53,.05],shN:[.33,.24],shF:[.8,.24],hipN:[.42,.8],hipF:[.63,.78]},body_back:{neck:[.52,.03],shN:[.24,.24],shF:[.76,.24],hipN:[.38,.8],hipF:[.62,.8]}},eh=380,Gr=470,L_=Gr-4,Ud=426,$s=(i,t,e)=>i+(t-i)*e,Ys=class{constructor(t=document.createElement("canvas")){this.c=t,t.width=eh,t.height=Gr,this.g=t.getContext("2d"),this.t=Math.random()*10,this.ph=0,this.amp=0,this.blinkIn=1.5+Math.random()*3,this.blinkT=0,this.lean=0,this.headLag=0,this.pose=null,this.poseT=0,this.poseDur=1}part(t){return rn["rw_"+t]}update(t,{speed01:e=0,back:n=!1,stir:s=!1,pose:r=null,poseT:a=0,poseDur:o=1}={}){this.t+=t,this.amp=$s(this.amp,Math.min(1,e),Math.min(1,t*10)),this.amp>.02?this.ph+=t*(5.4+3.2*e)*Math.max(.35,e):this.ph=$s(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.13,this.blinkIn=2.2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t);let l=r&&o>0?Math.sin(Math.min(1,1-a/o)*Math.PI):0,c=this.amp*.07+(r==="witch_pick"?l*.22:0)+(s?.06:0),h=this.lean;this.lean=$s(this.lean,c,Math.min(1,t*9)),this.headLag=$s(this.headLag,-(this.lean-h)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.draw({back:n,stir:s,pick:r==="witch_pick"?l:0})}draw({back:t,stir:e,pick:n}){let s=this.g,r=this.t,a=this.amp,o=Math.sin(this.ph),l=Math.cos(this.ph);s.clearRect(0,0,eh,Gr);let c=t?"body_back":"body",h=wn[c],d=this.part(c),u=this.part("leg"),p=this.part("arm");if(!d||!u||!p)return;let g=.42*a+n*.3,M=t?o*g:-o*g,m=t?-o*g:o*g,f=Math.max(0,t?-l:l)*7*a,C=Math.max(0,t?l:-l)*7*a,D=(1-wn.leg[1])*u.height,S=L_-D*Math.max(Math.cos(M),Math.cos(m))+n*16,E=(1-a)*Math.sin(r*2.4)*.014,I=eh*.5,N=I-d.width*.5,v=S-h.hipN[1]*d.height,_=j=>[N+h[j][0]*d.width,v+h[j][1]*d.height],b=[I,S],T=j=>{s.save(),s.translate(b[0],b[1]),s.rotate(this.lean+Math.sin(this.ph*2)*.015*a),s.scale(1,1+E),s.translate(-b[0],-b[1]),j(),s.restore()},A=(j,nt,Pt,Ct=0,he=0)=>{s.save(),s.translate(Pt[0],Pt[1]+he),s.rotate(Ct),s.drawImage(j,-nt[0]*j.width,-nt[1]*j.height),s.restore()},L=Math.sin(r*1.6)*.04*(1-a),w=o*.5*a*(t?-1:1)+L,P=-o*.4*a*(t?-1:1)-L;e&&(w=-1.15+Math.sin(r*7)*.35,P=-.35+Math.sin(r*7+1)*.12),n&&(w=$s(w,-1.25,n),P=$s(P,-.5,n));let B=this.headLag+Math.sin(this.ph*2-.8)*.035*a+Math.sin(r*1.1)*.025*(1-a)+n*.1+(e?.06:0),k=Math.sin(this.ph*2-.9)*2.2*a,Y=this.part(t?"head_back":this.blinkT>0?"blink":"head"),$=t?wn.head_back:wn.head;t?(T(()=>{A(p,wn.arm,_("shN"),w),A(p,wn.arm,_("shF"),P)}),A(u,wn.leg,[_("hipF")[0],S],m,-C),A(u,wn.leg,[_("hipN")[0],S],M,-f),T(()=>{s.drawImage(d,N,v),A(Y,$,_("neck"),B,k)})):(T(()=>A(p,wn.arm,_("shF"),P)),A(u,wn.leg,[_("hipF")[0],S],m,-C),A(u,wn.leg,[_("hipN")[0],S],M,-f),T(()=>{A(Y,$,_("neck"),B,k),s.drawImage(d,N,v),A(p,wn.arm,_("shN"),w)}))}};var _t=null,Zs=null,Wr=null,zi=null,ss=null,ol=null,Xr=!1,Js=0,ll=0,sh=0,Fd=0,rh=0,D_=0,Hr=null,Ks=null;function Vd(){if(_t){_t.state==="suspended"&&_t.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;_t=new i,Zs=_t.createGain(),Zs.gain.value=.85,Zs.connect(_t.destination),Wr=_t.createGain(),Wr.connect(Zs),zi=_t.createGain(),zi.gain.value=.12,zi.connect(Zs),ss=_t.createGain(),ss.gain.value=.5,ss.connect(Zs),ol=_t.createBuffer(1,_t.sampleRate*2,_t.sampleRate);let t=ol.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;Hr=_t.createBufferSource(),Hr.buffer=ol,Hr.loop=!0;let e=_t.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=.6,Ks=_t.createGain(),Ks.gain.value=0,Hr.connect(e),e.connect(Ks),Ks.connect(ss),Hr.start(),cl(),clearInterval(Fd),Fd=setInterval(U_,700)}function cl(){_t&&(Wr.gain.value=V.settings.sound?1:0,ss.gain.value=V.settings.sound?.5:0,V.settings.music&&!Xr&&O_(),!V.settings.music&&Xr&&B_())}function Gd(i,t){rh=i,D_=t,Ks&&Ks.gain.setTargetAtTime(.09*t,_t.currentTime,.3)}function ce(i,t,e,{type:n="sine",vol:s=.3,slide:r=0,attack:a=.005,bus:o=Wr}={}){let l=_t.createOscillator(),c=_t.createGain();l.type=n,l.frequency.setValueAtTime(i,t),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,i*r),t+e),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+a),c.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(o),l.start(t),l.stop(t+e+.02)}function Tn(i,t,{vol:e=.2,freq:n=1200,q:s=1,type:r="bandpass",to:a=0,bus:o=Wr}={}){let l=_t.createBufferSource();l.buffer=ol;let c=_t.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(n,i),c.Q.value=s,a&&c.frequency.exponentialRampToValueAtTime(a,i+t);let h=_t.createGain();h.gain.setValueAtTime(e,i),h.gain.exponentialRampToValueAtTime(1e-4,i+t),l.connect(c),c.connect(h),h.connect(o),l.start(i,Math.random()),l.stop(i+t+.02)}var N_=[0,2,4,7,9],Od=0,nh=0,Bd=0,rt={step(i="grass"){if(!_t)return;let t=_t.currentTime;t-Od<.12||(Od=t,nh^=1,i==="stone"?Tn(t,.05,{vol:.09,freq:nh?1900:1500,q:3}):Tn(t,.07,{vol:.07,freq:nh?700:560,q:1.2,type:"lowpass"}))},pluck(i=0){if(!_t)return;let t=_t.currentTime,e=N_[i%5]+12*Math.floor(i/5),n=523*Math.pow(2,e/12);ce(n,t,.35,{type:"triangle",vol:.2}),ce(n*2,t,.18,{type:"sine",vol:.06})},harvest(){if(!_t)return;let i=_t.currentTime;Tn(i,.12,{vol:.12,freq:900,to:300,q:1}),ce(392,i,.12,{type:"sine",vol:.18,slide:1.8}),ce(784,i+.08,.25,{type:"triangle",vol:.14})},pop(){if(!_t)return;let i=_t.currentTime;ce(620,i,.09,{type:"sine",vol:.18,slide:1.9})},splash(){if(!_t)return;let i=_t.currentTime;Tn(i,.35,{vol:.2,freq:1400,to:300,q:.8}),[0,.06,.13].forEach((t,e)=>ce(300+e*140+Math.random()*60,i+t,.12,{type:"sine",vol:.12,slide:2.4}))},bubble(){if(!_t)return;let i=_t.currentTime;ce(180+Math.random()*260,i,.1,{type:"sine",vol:.07,slide:2.6})},stir(){if(!_t)return;let i=_t.currentTime;Tn(i,.18,{vol:.05,freq:500,to:900,q:2})},pour(){if(!_t)return;let i=_t.currentTime;Tn(i,.2,{vol:.06,freq:2600,q:1.4})},reveal(){if(!_t)return;let i=_t.currentTime;ce(880+Math.random()*200,i,.4,{type:"sine",vol:.03})},near(){if(!_t)return;let i=_t.currentTime;ce(1175,i,.3,{type:"sine",vol:.1}),ce(1568,i+.07,.4,{type:"sine",vol:.08})},bottle(){if(!_t)return;let i=_t.currentTime;Tn(i,.08,{vol:.12,freq:3e3,q:3}),ce(1046,i+.05,.12,{type:"square",vol:.05}),[523,659,784,1046].forEach((t,e)=>ce(t,i+.1+e*.07,.45,{type:"triangle",vol:.13}))},discover(){if(!_t)return;let i=_t.currentTime;Tn(i,.8,{vol:.12,freq:400,to:7e3,q:.7}),[523,659,784,988,1175,1568].forEach((t,e)=>ce(t,i+.15+e*.08,.7,{type:"triangle",vol:.12})),[262,330,392].forEach(t=>ce(t,i+.6,1.4,{type:"sine",vol:.12}))},fail(){if(!_t)return;let i=_t.currentTime;Tn(i,.4,{vol:.2,freq:300,q:.7,type:"lowpass"}),[330,277,220].forEach((t,e)=>ce(t,i+e*.12,.25,{type:"triangle",vol:.15}))},coin(i=0){if(!_t)return;let t=_t.currentTime+i*.05;ce(1568,t,.07,{type:"square",vol:.05}),ce(2093,t+.06,.18,{type:"square",vol:.05})},click(){if(!_t)return;let i=_t.currentTime;ce(700,i,.06,{type:"triangle",vol:.16,slide:1.4})},open(){if(!_t)return;let i=_t.currentTime;Tn(i,.25,{vol:.08,freq:500,to:2500,q:.8}),ce(523,i,.15,{type:"triangle",vol:.1,slide:1.5})},close(){if(!_t)return;let i=_t.currentTime;Tn(i,.2,{vol:.06,freq:2e3,to:500,q:.8})},quest(){if(!_t)return;let i=_t.currentTime;[784,988,1175].forEach((t,e)=>ce(t,i+e*.09,.4,{type:"sine",vol:.12}))},meow(){if(!_t)return;let i=_t.currentTime;ce(700,i,.32,{type:"triangle",vol:.09,slide:1.35,attack:.04}),ce(950,i+.12,.25,{type:"sine",vol:.05,slide:.7})},caw(){if(!_t)return;let i=_t.currentTime;Tn(i,.18,{vol:.14,freq:1100,q:4}),ce(420,i,.18,{type:"sawtooth",vol:.04,slide:.8})},blip(i,t=1){if(!_t||!/[a-z0-9]/i.test(i))return;let e=_t.currentTime;if(e-Bd<.045)return;Bd=e;let n=i.toLowerCase().charCodeAt(0)%7;ce((300+n*38)*t,e,.05,{type:"square",vol:.035,slide:1.1})}};function U_(){if(!_t||!V.settings.sound)return;let i=_t.currentTime;if(Math.random()<.55*(1-rh)){let t=2200+Math.random()*1400,e=2+(Math.random()*2|0);for(let n=0;n<e;n++)ce(t*(1+n*.08),i+n*.09,.07,{type:"sine",vol:.025,slide:1.25,bus:ss})}if(Math.random()<.8*rh)for(let t=0;t<4;t++)ce(4400+Math.random()*200,i+t*.045,.03,{type:"sine",vol:.012,bus:ss})}var F_=72,kd=[77,0,81,0,84,0,81,79,77,0,76,0,72,0,0,0,74,0,77,0,81,0,79,77,76,0,79,0,77,0,0,0],zd=[53,60,57,60,50,57,53,57,46,53,50,53,48,55,52,55],ih=i=>440*Math.pow(2,(i-69)/12);function O_(){Xr=!0,Js=_t.currentTime+.3,ll=0,clearInterval(sh),sh=setInterval(k_,80)}function B_(){Xr=!1,clearInterval(sh)}function k_(){if(!_t||!Xr)return;let i=60/F_/2;for(;Js<_t.currentTime+.3;){let t=kd[ll%kd.length];t&&(ce(ih(t),Js,i*3,{type:"sine",vol:.5,bus:zi,attack:.004}),ce(ih(t+12),Js,i*1.2,{type:"sine",vol:.12,bus:zi})),ce(ih(zd[ll%zd.length]-12),Js,i*1.8,{type:"triangle",vol:.28,bus:zi,attack:.01}),Js+=i,ll++}}function qr(i){zi&&zi.gain.setTargetAtTime(i?.04:.12,_t.currentTime,.3)}function $e(i=10){try{navigator.vibrate&&navigator.userActivation&&navigator.userActivation.hasBeenActive&&navigator.vibrate(i)}catch{}}var z_=i=>i*i*(3-2*i),hl=class{constructor(t,e,n,s){this.world=t,this.S=e,this.spr=t.sprite("witch_idle",1.75*Gr/Ud,{x:n,z:s,shadow:1}),this.rig=new Ys,this.spr.useCanvas(this.rig.c),this.vx=0,this.vz=0,this.face=1,this.flipT=1,this.flipFrom=1,this.back=!1,this.stepN=0,this.pose=null,this.poseT=0,this.poseDur=1,this.squash=0,this.frozen=!1,this.speed=4.8,this.goto=null,this.gotoT=0}walkTo(t,e,n,s=1.2){this.goto=[t,e],this.gotoT=s,this.lookX=n}lookAt(t){let e=t>this.x?1:-1;e!==this.face&&(this.flipFrom=this.face,this.face=e,this.flipT=0)}get x(){return this.spr.x}get z(){return this.spr.z}setPose(t,e=.38){this.pose=t,this.poseT=this.poseDur=e,this.squash=.12}hop(){this.squash=.3}update(t,e){let n=this.frozen?0:e.x,s=this.frozen?0:e.z;if(this.goto){let m=this.goto[0]-this.x,f=this.goto[1]-this.z,C=Math.hypot(m,f);if(this.gotoT-=t,C<.1||this.gotoT<=0)this.goto=null,this.vx=this.vz=0,this.lookX!=null&&(this.back=!1,this.lookAt(this.lookX));else{let D=Math.min(1,C*1.8)/C;n=m*D,s=f*D}}let r=Math.hypot(n,s);r>1&&(n/=r,s/=r);let a=r>.05?14:18;this.vx+=(n*this.speed-this.vx)*Math.min(1,a*t),this.vz+=(s*this.speed-this.vz)*Math.min(1,a*t);let o=this.x+this.vx*t,l=this.z+this.vz*t;Qc(this.S,o,this.z)&&(o=this.x,this.vx*=.3),Qc(this.S,o,l)&&(l=this.z,this.vz*=.3),this.spr.mesh.position.x=o,this.spr.mesh.position.z=l;let c=Math.hypot(this.vx,this.vz),h=c>.6;if(Math.abs(this.vx)>.5){let m=this.vx>0?1:-1;m!==this.face&&(this.flipFrom=this.face,this.face=m,this.flipT=0)}Math.abs(this.vz)>.8&&(this.back=this.vz<-.3&&Math.abs(this.vz)>Math.abs(this.vx)*.6),Math.abs(this.vx)>1.2&&Math.abs(this.vz)<1&&(this.back=!1),this.flipT=Math.min(1,this.flipT+t/.14),this.poseT>0&&(this.poseT-=t,this.poseT<=0&&(this.pose=null));let d=this.rig;d.update(t,{speed01:h?c/this.speed:0,back:this.back,pose:this.pose,poseT:Math.max(0,this.poseT),poseDur:this.poseDur}),this.spr.refresh();let u=Math.floor(d.ph/Math.PI);if(u!==this.stepN&&(this.stepN=u,h)){let m=zr(this.world,this.x,this.z);rt.step(m),this.world.dust(this.x,this.z+.05,m==="grass"?1:2,m==="stone"?"#e7e2d6":m==="dirt"?"#d9b98a":"#c9d9a0")}this.squash=Math.max(0,this.squash-t*1.6);let p=Math.sin(this.squash*10)*this.squash*.5;this.spr.mesh.position.y=Math.abs(Math.cos(d.ph))*.035*d.amp;let g=this.flipT<1?Math.cos(z_(this.flipT)*Math.PI)*-1:1,M=this.flipT<1?this.flipT<.5?this.flipFrom*Math.abs(g):this.face*Math.abs(g):this.face;this.spr.flip=!1,this.spr.sx=Math.max(.06,Math.abs(M))*Math.sign(M||1)*(1+p*.6),this.spr.sy=1-p*.5,this.spr.sync()}},rs=class{constructor(t,e,n,s,r,a={}){this.world=t,this.base=e,this.talkName=a.talk||null,this.spr=t.sprite(e,n,{x:s,z:r,shadow:n*.5}),this.path=[],this.speed=a.speed||2.2,this.t=Math.random()*10,this.face=a.face||1,this.talking=0,this.onArrive=null,this.hopT=0,this.native=/^crow/.test(e)?-1:1}get x(){return this.spr.x}get z(){return this.spr.z}goTo(t,e){this.path=t.slice(),this.onArrive=e||null}get moving(){return this.path.length>0}hop(){this.hopT=.45}update(t){this.t+=t;let e=!1;if(this.path.length){let[r,a]=this.path[0],o=r-this.x,l=a-this.z,c=Math.hypot(o,l);if(c<.08){if(this.path.shift(),!this.path.length&&this.onArrive){let h=this.onArrive;this.onArrive=null,h()}}else{let h=Math.min(c,this.speed*t);this.spr.mesh.position.x+=o/c*h,this.spr.mesh.position.z+=l/c*h,Math.abs(o)>.05&&(this.face=o>0?1:-1),e=!0}}this.talking=Math.max(0,this.talking-t),this.hopT=Math.max(0,this.hopT-t);let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.35:0,s=e?Math.abs(Math.sin(this.t*9))*.08:0;this.spr.mesh.position.y=s+n,this.talkName&&this.spr.set(this.talking>0&&Math.floor(this.t*6)%2?this.talkName:this.base),this.spr.sx=this.face*this.native*(e?1+Math.sin(this.t*18)*.02:1),this.spr.sy=1+(e?Math.sin(this.t*18)*.03:Math.sin(this.t*2+1)*.015),this.spr.sync()}},ul=class{constructor(t){this.world=t,this.spr=t.sprite("cat",.72,{x:at.cat[0],z:at.cat[1],shadow:.6}),this.t=0,this.hopT=0,this.atStall=!1}get x(){return this.spr.x}get z(){return this.spr.z}hop(){this.hopT=.45}moveToStall(t){if(t===this.atStall)return;this.atStall=t;let[e,n]=t?[at.myStall[0]+.9,at.myStall[1]+.35]:at.cat;this.world.sparkle(this.x,.3,this.z,10,"#e9d6ff"),this.spr.setPos(e,n),this.world.sparkle(e,.3,n,10,"#e9d6ff")}update(t){this.t+=t,this.hopT=Math.max(0,this.hopT-t);let e=this.world.night>.6&&!this.atStall;this.spr.set(e?"cat_sleep":"cat"),this.spr.h=e?.5:.72;let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.3:0;this.spr.mesh.position.y=n,this.spr.sy=1+Math.sin(this.t*(e?1.2:2.2))*(e?.035:.02),this.spr.sx=-1,this.spr.sync(),e&&Math.random()<t*.4&&this.world.soft.add({x:this.x+.2,y:.6,z:this.z,vx:.15,vy:.35,vz:0,life:2,s:3,c:"#ffffff",a:.7,fadeIn:.3})}};function Hd(i,t){let e={};for(let a of t)if(a.stall){let[o,l]=ki[a.id],c=o+1.8,h=l+.15,d=new rs(i,a.sprite,1.6,c,h,{face:c<at.fountain[0]?1:-1});d.home=[c,h],e[a.id]=d}let n=[[38,1.8],[45.5,1.6],[44,-2.6],[40,-2.4],[37.5,.6],[46.5,.4],[41,4.6],[43.5,4.8]],s=new rs(i,"w_green",1.55,44,2.4,{speed:1.7}),r=new rs(i,"w_plum",1.6,39,-1.4,{speed:1.5});for(let a of[s,r])a.wander=n,a.wait=1+Math.random()*3;return e.pip=s,e.wren=r,e}function Wd(i,t){for(let e of["pip","wren"]){let n=i[e];if(!(!n||n.busy)&&!n.moving&&(n.wait-=t,n.wait<=0)){let s=n.wander[Math.floor(Math.random()*n.wander.length)];n.goTo([[s[0]+(Math.random()-.5),s[1]+(Math.random()-.5)]],()=>{n.wait=2+Math.random()*4})}}}var Be={cham:{name:"Chamomile",icon:"i_cham",color:"#f3e7b0",path:[[1.5,1.2],[3.2,1.6]]},lav:{name:"Lavender",icon:"i_lav",color:"#a98be0",path:[[-1.2,-.8],[-2,-2.2],[-3.2,-2.6]]},man:{name:"Mandrake",icon:"i_man",color:"#e8d2a6",path:[[3,0],[4,1.5]]},mush:{name:"Blue Mushroom",short:"Blue Cap",icon:"i_mush",color:"#7fa7e8",path:[[.8,1.5],[-.4,2.6],[.6,4]]},feather:{name:"Owl Feather",short:"Feather",icon:"i_feather",color:"#f2efe8",path:[[-1.6,.6],[-3.4,.4]]},berry:{name:"Wild Berry",short:"Berry",icon:"i_berry",color:"#c8455a",path:[[.9,.9],[2.3,1.4]],wild:!0},moth:{name:"Wood Moth",short:"Moth",icon:"i_moth",color:"#d9c8e8",path:[[-1.5,-.3],[-3,-.1],[-3.4,.5]],wild:!0},glowbug:{name:"Glowbug",icon:"i_glowbug",color:"#d8f27a",path:[[1.8,.2],[3.6,.75]],wild:!0}},as=[.6,1.1,1.6],ah=[2.2,1.5,1],$t={sleep:{name:"Sleep Potion",short:"Sleep",medal:"m_moon",potion:"p_round",at:[-5.1,-4.3],base:60,liquid:"#9b7fe0",hint:"deep in the lower-left fog"},heal:{name:"Healing Potion",short:"Healing",medal:"m_heart",potion:"p_heart",at:[4.7,2.8],base:50,liquid:"#e98aa0",hint:"up and to the right"},glow:{name:"Glow Potion",short:"Glow",medal:"m_sun",potion:"p_gold",at:[7,1.5],base:70,liquid:"#f2c75c",hint:"far to the right"},luck:{name:"Luck Potion",short:"Luck",medal:"m_star",potion:"p_tube",at:[1.4,5.5],base:120,liquid:"#7fd6c4",hint:"north, past the brambles"},calm:{name:"Calm Potion",short:"Calm",medal:"m_drop",potion:"p_tube",at:[-6.6,1],base:55,liquid:"#8cc8f0",hint:"far to the left"}},oh=[{at:[-2.4,1.7],r:.95},{at:[3.4,-2.3],r:1.05},{at:[2.9,4.1],r:.8}],os=24,ls=16,$r={cham:{name:"Chamomile",yield:2,growMin:4,sprite:["cham_0","cham_1","cham_2"]},lav:{name:"Lavender",yield:2,growMin:6,sprite:["lav_0","lav_1","lav_2"]},man:{name:"Mandrake",yield:1,growMin:15,sprite:["man_0","man_1","man_2"]}},ni=[{id:"letter",text:"Read Granny's letter in the mailbox"},{id:"harvest",text:"Harvest herbs in your garden",need:3},{id:"talk",text:"A customer is at your door. Say hello"},{id:"brew",text:"Brew a Sleep Potion at the cauldron"},{id:"deliver",text:"Give the Sleep Potion to Mr. Crow"},{id:"town",text:"Follow the path east to Mossbrook"},{id:"board",text:"Check the discovery board in the square"},{id:"stall",text:"Open your stall. Kuro will mind it"},{id:"buy",text:"Buy a Blue Mushroom from Mira's stall"},{id:"mystery",text:"Something glows in the north fog. Brew it"},{id:"free",text:"Your garden, stall and customers run on the real clock"}],lh=[{id:"mira",name:"Mira",sprite:"w_teal",stall:{sprite:"stall_red",title:"Mira's Remedies",line:"Fresh from the north woods! Blue caps are rare this week.",items:[{ing:"mush",price:40,stock:3},{ing:"feather",price:25,stock:2}]}},{id:"juniper",name:"Juniper",sprite:"w_pink",stall:{sprite:"stall_green",title:"Juniper's Garden",line:"Seeds and sprigs, picked this morning.",items:[{ing:"cham",price:12,stock:5},{ing:"lav",price:15,stock:4}]}},{id:"oz",name:"Oz",sprite:"w_blue",stall:{sprite:"stall_blue",title:"Oz's Odd Bottles",line:"Rare roots. Ask about my Glow recipe.",items:[{ing:"man",price:35,stock:2}]}},{id:"pip",name:"Pip",sprite:"w_green"},{id:"bramble",name:"Wren",sprite:"w_plum"}],ch=["anyone selling moon dew?","WTS lavender x10, cheap!","who found Healing first??","the north fog is huge","Kuro is so cute omg","buying blue caps 45 each","my mandrake yelled at me","Glow sells great at night"],hh=[{effect:"heal",who:"Juniper",when:"3 days ago"},{effect:"glow",who:"Oz",when:"yesterday"}],js=[{who:"crow",name:"Mr. Crow",sprite:"crow",talk:"crow_talk",want:"sleep",ask:"Hello, young witch. I haven't slept in three nights. The owls keep singing. Do you have something to help me sleep?",thanks:"Ah... I can almost hear my pillow calling. Thank you, little witch."},{who:"pip",name:"Pip",sprite:"w_green",want:"heal",ask:"I fell off my broom. Again. Got anything for scraped knees?",thanks:"Wow, it stopped stinging already! You are good at this."},{who:"wren",name:"Wren",sprite:"w_plum",want:"glow",ask:"The forest gets so dark on my way home. Could you make me something that glows?",thanks:"It shines like a tiny moon! I will tell everyone in town."},{who:"crow",name:"Mr. Crow",sprite:"crow",talk:"crow_talk",want:"sleep",ask:"Me again. The owls are back, and louder. Another Sleep Potion, please?",thanks:"Bless you. I shall sleep like a stone."}];var dl=class{constructor(t){this.world=t,this.plots=Vr.map((e,n)=>({...e,i:n,spr:t.sprite("cham_0",.6,{x:e.x,z:e.z+.15,shadow:.7,sway:.03}),stage:-1,crop:null,pop:0,tw:Math.random()*4}))}state(t){let e=V.plots[t],n=$r[e.crop],s=n.growMin*6e4,r=Me()-e.at;return{crop:e.crop,def:n,k:Math.max(0,Math.min(1,r/s)),ready:r>=s,left:s-r}}readyCount(){return this.plots.filter(t=>this.state(t.i).ready).length}update(t,e){for(let n of this.plots){let s=this.state(n.i),r=s.ready?2:s.k<.45?0:1;if(r!==n.stage||s.crop!==n.crop){let l=n.stage>=0&&r>n.stage;n.stage=r,n.crop=s.crop,n.spr.set(s.def.sprite[r]),n.spr.h=Ot(s.def.sprite[r],1.15),n.spr.mat.uniforms.uSway.value=r===0?.02:.05,l&&(n.pop=.5,this.world.sparkle(n.x,.5,n.z,r===2?14:6,r===2?"#fff2a8":"#d8f5b0"))}n.pop=Math.max(0,n.pop-t*1.4);let a=n.pop>0?Math.sin(n.pop*14)*n.pop*.35:0,o=r===2?Math.max(0,Math.sin(e*2.6+n.tw))**6*.06:0;n.spr.sx=1+a+o,n.spr.sy=1-a*.8+o*.5,n.spr.sync(),r===2&&Math.random()<t*.9&&this.world.glow.add({x:n.x+(Math.random()-.5)*.9,y:.4+Math.random()*.7,z:n.z+.1,vx:0,vy:.35,vz:0,life:1.1,s:4+Math.random()*3,c:"#fff1a0",a:.9,k:1,fadeIn:.2})}}harvest(t){let e=this.state(t);if(!e.ready)return null;let n=this.plots[t];return V.plots[t].at=Me(),this.world.burst(n.x,.5,n.z,"#7fb04e",12),this.world.sparkle(n.x,.6,n.z,10,"#fff2a8"),this.world.dust(n.x,n.z+.1,5,"#b48a5a"),n.stage=-1,this.update(0,0),n.pop=.6,{crop:e.crop,n:e.def.yield}}nearest(t,e,n=1.35){let s=null,r=n;for(let a of this.plots){let o=Math.hypot(a.x-t,(a.z-e)*1.2);o<r&&(r=o,s=a)}return s}};var Se=50,uh=os*Se,dh=ls*Se,gn=(i,t)=>[(i+os/2)*Se,(ls/2-t)*Se],Qs=["Perfect","Fine","Weak"],fh=1.75,V_=13,ph=["lav","cham","man","mush","feather","berry","moth","glowbug"],Xd="#86c9d0",pl=new Image;pl.src=Xt("ui_arrow_r");var fl={intro:{say:"Mrrp! This is your potion map. Your potion starts at the little bottle. Mr. Crow's Sleep Potion is hiding in the fog, down and to the left.",tap:"Show me",ring:".map-frame",mark:"sleep"},drop:{say:"Lavender pulls a brew down and to the left. Drag one into the cauldron.",ring:'.tile[data-id="lav"]'},path:{say:"See the dotted line? Stirring walks your potion along it, and the fog lifts as it goes.",tap:"Got it",ring:".map-frame",mark:"end"},stir:{say:"Hold Stir, or draw circles in the pot.",ring:".stir"},more:{say:"Not there yet. One more Lavender carries it further.",ring:'.tile[data-id="lav"]'},stir2:{say:"Stir again. I will catch the spoon when you reach it.",ring:".stir",mark:"sleep"},bottle:{say:"Right on it! The closer to the middle, the better the potion. Bottle it!",ring:".bottle"},back:{say:"Oops, you went past. Hold Moon water: it drifts your potion back toward the start.",ring:".water"}},Zr=(i,t,e)=>{let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=a=>Math.round((n>>a&255)*(1-e)+(s>>a&255)*e);return"#"+(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")},cs=(i,t)=>Zr(i,t>0?"#ffffff":"#1d1430",Math.abs(t));function Yr(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var ml=class{constructor(t,e){this.hooks=e,this.isOpen=!1,this.t=0;let n=this.el=Yr("section","brew hidden");n.innerHTML=`
      <div class="brew-bg"></div>
      <div class="brew-ask hidden"><div class="ribbon sm"><span></span></div><div class="speech sm"><p></p></div></div>
      <div class="brew-stage">
        <canvas class="brew-witch"></canvas>
        <div class="pot">
          <canvas class="liquid"></canvas>
          <img class="pot-img" src="${Xt("cauldron_pot")}" alt="" draggable="false">
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
          <button class="btn-pill water" data-k="Q"><img src="${Xt("i_dew")}" alt=""><span>Moon water</span></button>
          <button class="btn-green stir" data-k="Space"><img src="${Xt("spoon")}" alt=""><span>Hold to stir</span></button>
          <button class="btn-green bottle" disabled><img src="${Xt("bottle")}" alt=""><span>Bottle it</span></button>
        </div>
      </div>
      <button class="btn-pill dump"><span>Dump</span></button>
      <button class="btn-close" aria-label="Close"></button>
      <div class="lesson-ring hidden"><img src="${Xt("ui_arrow_r")}" alt=""></div>
      <img class="lesson-ghost hidden" src="${Xt("i_lav")}" alt="">
      <div class="brew-coach hidden"><img class="coach-cat" src="${Xt("cat")}" alt=""><div class="speech coach-say"><p></p><button class="btn-green coach-ok hidden"><span></span></button></div></div>
      <div class="brew-toast"></div>`,t.appendChild(n),this.$=s=>n.querySelector(s),this.mapc=this.$(".mapc"),this.liq=this.$(".liquid"),this.fx=this.$(".potfx"),this.rig=new Ys(n.querySelector(".brew-witch")),this.potEl=this.$(".pot"),this.base=this.buildBase(),this.fog=document.createElement("canvas"),this.fog.width=uh/2,this.fog.height=dh/2,this.cam={x:0,y:0},this.bubbles=[],this.steam=[],this.drops=[],this.stirHold=!1,this.waterHold=!1,this.stirV=0,this.spoonA=0,this.circleAmt=0,this.wire(),this.reset(!0)}buildBase(){let t=document.createElement("canvas");t.width=uh,t.height=dh;let e=t.getContext("2d");e.drawImage(rn.mapbg,0,0,uh,dh),e.fillStyle="rgba(90,60,40,0.18)";for(let r=-11;r<=11;r++)for(let a=-7;a<=7;a++){let[o,l]=gn(r,a);e.beginPath(),e.arc(o,l,2,0,7),e.fill()}for(let r of oh){let[a,o]=gn(r.at[0],r.at[1]),l=r.r*Se,c=e.createRadialGradient(a,o,l*.2,a,o,l*1.15);c.addColorStop(0,"rgba(58,92,48,0.75)"),c.addColorStop(.75,"rgba(58,92,48,0.45)"),c.addColorStop(1,"rgba(58,92,48,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,l*1.15,0,7),e.fill(),e.strokeStyle="rgba(40,58,30,0.9)",e.lineWidth=3,e.lineCap="round";for(let d=0;d<9;d++){let u=d*.7+r.r,p=l*(.35+d%3*.22);e.beginPath(),e.arc(a,o,p,u,u+2.2),e.stroke();for(let g=0;g<4;g++){let M=u+g*.55,m=a+Math.cos(M)*p,f=o+Math.sin(M)*p;e.beginPath(),e.moveTo(m,f),e.lineTo(m+Math.cos(M)*9,f+Math.sin(M)*9),e.stroke()}}let h=l*.95;e.drawImage(rn.m_thorn,a-h/2,o-h/2,h,h)}let[n,s]=gn(0,0);return e.strokeStyle="rgba(90,55,35,0.8)",e.lineWidth=3,e.beginPath(),e.arc(n,s,16,0,7),e.stroke(),e.beginPath(),e.moveTo(n-24,s),e.lineTo(n+24,s),e.moveTo(n,s-24),e.lineTo(n,s+24),e.stroke(),t}rebuildFog(){let t=this.fog.getContext("2d"),e=this.fog.width,n=this.fog.height;t.globalCompositeOperation="source-over",t.clearRect(0,0,e,n),t.fillStyle="rgba(232,226,240,0.8)",t.fillRect(0,0,e,n);let s=9,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<260;a++){let o=r()*e,l=r()*n,c=20+r()*70,h=r(),d=t.createRadialGradient(o,l,0,o,l,c),u=h<.5?`rgba(255,255,255,${.35+h*.5})`:`rgba(170,160,196,${(h-.5)*.45})`;d.addColorStop(0,u),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,l,c,0,7),t.fill()}t.globalCompositeOperation="destination-out",this.cut(0,0,!1),this.cut(.6,.3,!1),this.cut(-.6,-.3,!1);for(let[a,o]of V.fog)this.cut(a,o,!1);t.globalCompositeOperation="source-over"}cut(t,e,n=!0){let s=this.fog.getContext("2d");n&&(s.globalCompositeOperation="destination-out");let r=(t+os/2)*Se/2,a=(ls/2-e)*Se/2,o=fh*Se/2,l=s.createRadialGradient(r,a,o*.35,r,a,o);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.beginPath(),s.arc(r,a,o,0,7),s.fill(),n&&(s.globalCompositeOperation="source-over")}reveal(t,e){let n=this.lastReveal;if(n&&Math.hypot(n[0]-t,n[1]-e)<.22)return;this.lastReveal=[t,e];let s=[Math.round(t*10)/10,Math.round(e*10)/10];V.fog.push(s),V.fog.length>4e3&&V.fog.splice(0,500),this.cut(s[0],s[1]),Math.random()<.18&&rt.reveal();for(let[r,a]of Object.entries($t))!this.seen[r]&&Math.hypot(a.at[0]-t,a.at[1]-e)<fh+.3&&(this.seen[r]=!0,this.spot(r))}isSeen(t){if(this.seen[t])return!0;let e=$t[t];return V.fog.some(([n,s])=>Math.hypot(e.at[0]-n,e.at[1]-s)<fh)}spot(t){this.flashEffect={id:t,t:0},rt.near(),this.toast(`You spotted <b>${$t[t].name}</b> in the fog`,$t[t].medal)}reset(t=!1){this.pos=[0,0],this.path=[],this.trail=[[0,0]],this.ings=[],this.liquidCol=Xd,this.curdle=0,this.lastReveal=null,this.nearId=null,this.nearTier=-1,this.nearD=null,this.nearAny=null,this.caught={},this.stirLock=!1,this.lockT=0,this.passed=null,this.catchFx=null,t||this.updateUI()}open(t={}){this.ctx=t,this.isOpen=!0,this.t=0,this.reset(!0),this.seen={};for(let n of Object.keys($t))(this.isSeen(n)||V.discovered[n])&&(this.seen[n]=!0);this.rebuildFog(),this.cam.x=0,this.cam.y=0;let e=this.$(".brew-ask");t.ask?(e.classList.remove("hidden"),e.querySelector(".ribbon span").textContent=t.ask.name,e.querySelector("p").textContent=t.ask.line):e.classList.add("hidden"),this.el.classList.remove("hidden"),this.el.classList.add("opening"),setTimeout(()=>this.el.classList.remove("opening"),600),this.lesson=null,!V.lesson&&!V.discovered.sleep&&((V.inv.lav||0)<2&&(V.inv.lav=2,this.hooks.onInv&&this.hooks.onInv()),t.target||(t.target="sleep")),this.buildShelf(),this.resize(),this.updateUI(),this.lessonGo(!V.lesson&&!V.discovered.sleep?"intro":null),rt.open()}close(){this.isOpen&&(this.isOpen=!1,this.stirHold=this.waterHold=!1,this.el.classList.add("hidden"),ge(),rt.close(),this.hooks.onClose&&this.hooks.onClose())}wire(){let t=this.$;t(".btn-close").addEventListener("click",()=>this.close()),t(".dump").addEventListener("click",()=>this.dump()),t(".bottle").addEventListener("click",()=>this.bottle()),t(".coach-ok").addEventListener("click",()=>this.lessonNext());let e=(o,l)=>{let c=d=>{d.preventDefault(),this[l]=!0,o.classList.add("down"),o.setPointerCapture&&d.pointerId!=null&&o.setPointerCapture(d.pointerId)},h=()=>{this[l]=!1,o.classList.remove("down")};o.addEventListener("pointerdown",c),o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};e(t(".stir"),"stirHold"),e(t(".water"),"waterHold");let n=t(".pot-hit"),s=null,r=o=>{let l=this.potEl.getBoundingClientRect();return Math.atan2((o.clientY-(l.top+l.height*.17))*2.6,o.clientX-(l.left+l.width*.5))};n.addEventListener("pointerdown",o=>{s={id:o.pointerId,a:r(o)},n.setPointerCapture(o.pointerId)}),n.addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=r(o),c=l-s.a;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),s.a=l,this.circleAmt+=Math.abs(c)*.32,this.spoonA=l,this.circleAt=this.t});let a=()=>{s=null};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),window.addEventListener("resize",()=>this.isOpen&&this.resize())}buildShelf(){let t=this.$(".shelf");t.innerHTML="";for(let e of ph){let n=Be[e],s=V.inv[e]||0;if(n.wild&&!s&&!V.found[e])continue;let r=Yr("div","tile"+(s?"":" empty"));r.dataset.id=e,r.innerHTML=`<img src="${Xt(n.icon)}" alt="" draggable="false"><b class="count">${s}</b><i class="nm">${n.short||n.name}</i>`,t.appendChild(r),r.addEventListener("pointerdown",a=>this.dragStart(a,e,r))}}refreshShelf(){for(let t of this.$(".shelf").children){let e=V.inv[t.dataset.id]||0;t.querySelector(".count").textContent=e,t.classList.toggle("empty",!e)}}dragStart(t,e,n){if(t.preventDefault(),this.lessonLocked(e)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),rt.click(),this.coachBump();return}if(!(V.inv[e]>0)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),rt.click(),this.toast(`No ${Be[e].name} left. Grow or buy more`);return}let s=Yr("img","drag-ghost");s.src=Xt(Be[e].icon),document.body.appendChild(s);let r=t.clientX,a=t.clientY,o=0,l=(u,p)=>{s.style.transform=`translate(${u-40}px, ${p-40}px) rotate(${Math.sin(performance.now()/120)*8}deg)`};l(r,a),rt.pop(),n.classList.add("lift");let c=(u,p)=>{let g=this.potEl.getBoundingClientRect();return u>g.left&&u<g.right&&p>g.top-g.height*.3&&p<g.top+g.height*.6},h=u=>{o=Math.max(o,Math.hypot(u.clientX-r,u.clientY-a)),l(u.clientX,u.clientY),this.potEl.classList.toggle("target",c(u.clientX,u.clientY))},d=u=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),n.classList.remove("lift"),this.potEl.classList.remove("target");let p=o<10;if(p||c(u.clientX,u.clientY))this.drop(e,s,p?null:[u.clientX,u.clientY]);else{s.classList.add("back");let g=n.getBoundingClientRect();s.style.transform=`translate(${g.left+g.width/2-40}px, ${g.top+g.height/2-40}px) scale(0.6)`,setTimeout(()=>s.remove(),250)}};window.addEventListener("pointermove",h),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)}drop(t,e,n){let s=this.potEl.getBoundingClientRect(),r=s.left+s.width*.5-40,a=s.top+s.height*.12-40;e.classList.add("fall"),e.style.transform=`translate(${r}px, ${a}px) rotate(200deg) scale(0.55)`,V.inv[t]--,this.refreshShelf(),this.hooks.onInv&&this.hooks.onInv(),setTimeout(()=>{e.remove(),this.addIngredient(t)},n?230:330)}addIngredient(t){let e=Be[t],n=this.path.length?this.path[this.path.length-1]:this.pos;for(let[r,a]of e.path)this.path.push([n[0]+r,n[1]+a]);this.ings.push(t),this.liquidCol=Zr(this.liquidCol,e.color,this.ings.length===1?.65:.45),rt.splash(),$e(12),this.splash(e.color),this.pathFlash=1,this.updateUI();let s=this.lesson;(s==="drop"||s==="more"||s==="path"||s==="stir")&&this.lessonGo(this.ings.length>=2?"stir2":"path")}sweetStop(t,e,n,s,r,a){let o=Math.hypot(n-t,s-e);if(o<1e-6)return null;let l=(n-t)/o,c=(s-e)/o,h=null;for(let[d,u]of Object.entries($t)){if(this.caught[a+d])continue;let p=(u.at[0]-t)*l+(u.at[1]-e)*c;p<=.002||p>r||Math.hypot(u.at[0]-(t+l*p),u.at[1]-(e+c*p))>=as[1]||(!h||p<h.s)&&(h={s:p,id:d})}return h}moveAlong(t){for(;t>0&&this.path.length;){let[e,n]=this.path[0],[s,r]=this.pos,a=Math.hypot(e-s,n-r),o=this.sweetStop(s,r,e,n,Math.min(a,t),"s"),l=o?o.s:Math.min(a,t);if(l>=a-1e-9?(this.pos=[e,n],this.path.shift()):this.pos=[s+(e-s)/a*l,r+(n-r)/a*l],t-=Math.max(l,1e-6),this.afterMove(),this.curdle)return;if(o){this.catchSpoon(o.id,"s");return}}}pullWater(t){let[e,n]=this.pos,s=Math.hypot(e,n);if(s<.01)return;let r=this.sweetStop(e,n,0,0,Math.min(t,s),"w"),a=(r?r.s:Math.min(t,s))/s,o=-e*a,l=-n*a;this.pos=[e+o,n+l];for(let c of this.path)c[0]+=o,c[1]+=l;this.liquidCol=Zr(this.liquidCol,Xd,.02),this.afterMove(),r&&this.catchSpoon(r.id,"w")}catchSpoon(t,e){this.caught[e+t]=!0,this.stirV=0,this.stirLock=this.stirHold||this.waterHold,this.lockT=.7,this.catchFx={at:this.pos.slice(),t:0},rt.near(),setTimeout(()=>rt.pop(),90),$e(18);let n=this.$(".readout");n.classList.remove("hot"),n.offsetWidth,n.classList.add("hot");for(let s of[this.$(".stir"),this.$(".water")])s.classList.remove("down");this.lesson&&t==="sleep"&&this.nearId==="sleep"&&this.lessonGo("bottle")}afterMove(){let[t,e]=this.pos,n=this.trail[this.trail.length-1];Math.hypot(n[0]-t,n[1]-e)>.08&&this.trail.push([t,e]),this.reveal(t,e);for(let o of oh)if(Math.hypot(o.at[0]-t,o.at[1]-e)<o.r*.82){this.curdleNow();return}let s=null,r=1e9;for(let[o,l]of Object.entries($t)){let c=Math.hypot(l.at[0]-t,l.at[1]-e);c<r&&(r=c,s=o)}let a=r<as[0]?0:r<as[1]?1:r<as[2]?2:-1;(a!==this.nearTier||s!==this.nearId)&&(a>=0&&(this.nearTier<0||a<this.nearTier)&&(rt.near(),$e(8)),a<0&&this.nearTier>=0&&(this.passed=this.nearId),a>=0&&(this.passed=null),this.nearTier=a,this.nearId=a>=0?s:null,this.updateUI(),this.lesson==="bottle"&&(a<0||a===2)?this.lessonGo("back"):this.lesson==="back"&&s==="sleep"&&a>=0&&a<=1&&this.lessonGo("bottle")),this.nearD=r,this.nearAny=s}curdleNow(){this.curdle=1.4,this.stirHold=!1,this.stirV=0,rt.fail(),$e(40),this.liquidCol="#6d6a4a",this.el.classList.remove("shake"),this.el.offsetWidth,this.el.classList.add("shake"),this.toast("The brew snagged on the thorns and curdled"),this.path=[],setTimeout(()=>{this.reset(),this.updateUI()},1300)}dump(){this.ings.length&&(rt.pour(),this.splash("#cfd8e6"),this.reset(),this.updateUI(),this.toast("Poured out. The cauldron is fresh again"))}bottle(){if(this.nearTier<0||!this.nearId)return;let t=this.nearId,e=this.nearTier,n=this.ings.slice(),s=$t[t];rt.bottle(),$e(25),this.lesson&&(this.lessonGo(null),V.lesson=1,V.brewTut=3,ge());let r=this.potEl.getBoundingClientRect(),a=Yr("img","rise-bottle");a.src=Xt(s.potion),a.style.left=r.left+r.width/2-45+"px",a.style.top=r.top+r.height*.05+"px",document.body.appendChild(a);for(let o=0;o<24;o++)this.steam.push({x:.5+(Math.random()-.5)*.4,y:.17,vx:(Math.random()-.5)*.4,vy:-.4-Math.random()*.6,life:1.2,t:0,s:6+Math.random()*8,c:"#fff6c8",glow:1});setTimeout(()=>a.remove(),1600),this.reset(),this.updateUI(),this.hooks.onBottle(t,e,n,a)}update(t){if(!this.isOpen)return;this.t+=t,this.curdle>0&&(this.curdle=Math.max(0,this.curdle-t));let e=this.nearD!=null&&this.nearD<as[1]?.5:1;!this.stirHold&&!this.waterHold&&(this.stirLock=!1),this.lockT=Math.max(0,this.lockT-t);let n=this.stirLock||this.lockT>0,s=this.stirHold&&!n&&this.path.length&&!this.curdle?1.7*e:0;this.stirV+=(s-this.stirV)*Math.min(1,t*(s>this.stirV?5:12));let r=n?0:this.stirV*t+this.circleAmt*e;this.circleAmt=0,r>0&&this.path.length&&!this.curdle&&(this.moveAlong(r),this.stirHold&&(this.spoonA+=t*7),this.stirSound=(this.stirSound||0)+r,this.stirSound>.5&&(this.stirSound=0,rt.stir())),this.waterHold&&!n&&!this.curdle&&(this.pullWater(t*1.1),Math.random()<t*6&&rt.pour()),this.lesson==="path"&&r>0&&this.lessonGo("stir"),(this.lesson==="stir"||this.lesson==="stir2")&&!this.path.length&&this.stirV<.05&&this.lessonGo(this.nearId==="sleep"?"bottle":"more"),this.drawMap(t),this.drawPot(t),this.placeRing()}resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.mapc,this.liq,this.fx]){let n=e.getBoundingClientRect();e.width=Math.max(2,Math.round(n.width*t)),e.height=Math.max(2,Math.round(n.height*t))}}drawMap(t){let e=this.mapc,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.path.length?this.path[this.path.length-1]:this.pos,o=this.pos[0]*.6+a[0]*.4,l=this.pos[1]*.6+a[1]*.4;(this.lesson==="intro"||this.lesson==="drop")&&(o=$t.sleep.at[0]*.5,l=$t.sleep.at[1]*.5);let c=V_,h=c*r/s,d=Math.max(-os/2+c/2,Math.min(os/2-c/2,o)),u=Math.max(-ls/2+h/2,Math.min(ls/2-h/2,l)),p=1-Math.exp(-t*3);this.cam.x+=(d-this.cam.x)*p,this.cam.y+=(u-this.cam.y)*p;let g=(this.cam.x-c/2+os/2)*Se,M=(ls/2-this.cam.y-h/2)*Se,m=c*Se,f=h*Se,C=s/m;n.setTransform(1,0,0,1,0,0),n.drawImage(this.base,g,M,m,f,0,0,s,r),n.setTransform(C,0,0,C,-g*C,-M*C);let D=this.t;for(let[A,L]of Object.entries($t)){if(!this.seen[A])continue;let[w,P]=gn(L.at[0],L.at[1]),B=this.nearId===A;for(let k=2;k>=0;k--)n.beginPath(),n.arc(w,P,as[k]*Se,0,7),n.fillStyle=`rgba(255,236,170,${B?.16+(2-k)*.06:.07})`,n.fill(),n.setLineDash([6,6]),n.lineDashOffset=-D*12,n.lineWidth=2.2,n.strokeStyle=`rgba(120,80,40,${B&&k>=this.nearTier?.85:.35})`,n.stroke(),n.setLineDash([])}this.trail.length>1&&(n.beginPath(),n.lineWidth=4,n.strokeStyle="rgba(92,52,36,0.75)",n.lineJoin=n.lineCap="round",this.trail.forEach(([A,L],w)=>{let[P,B]=gn(A,L);w?n.lineTo(P,B):n.moveTo(P,B)}),n.stroke()),n.setTransform(1,0,0,1,0,0),n.drawImage(this.fog,g/2,M/2,m/2,f/2,0,0,s,r),n.setTransform(C,0,0,C,-g*C,-M*C);for(let[A,L]of Object.entries($t)){if(!this.seen[A])continue;let[w,P]=gn(L.at[0],L.at[1]),B=this.nearId===A,k=this.flashEffect&&this.flashEffect.id===A?Math.max(0,1-this.flashEffect.t):0,Y=Se*(1.25+(B?Math.sin(D*6)*.06:0)+k*.6);n.drawImage(rn[L.medal],w-Y/2,P-Y/2,Y,Y),n.font=`700 ${Se*.42}px Mali, sans-serif`,n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(255,248,230,0.95)",n.strokeText(L.short,w,P+Y*.78),n.fillStyle="#5a3424",n.fillText(L.short,w,P+Y*.78)}this.flashEffect&&(this.flashEffect.t+=t,this.flashEffect.t>1&&(this.flashEffect=null));let[S,E]=gn(this.pos[0],this.pos[1]),I=Math.sin(D*3)*3,N=Se*.95,v=Se*(.9+Math.sin(D*4)*.08),_=n.createRadialGradient(S,E,0,S,E,v);_.addColorStop(0,this.nearTier>=0?"rgba(255,240,160,0.9)":"rgba(255,255,255,0.7)"),_.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=_,n.beginPath(),n.arc(S,E,v,0,7),n.fill(),n.save(),n.translate(S,E+I),n.rotate(Math.sin(D*2.2)*.12+(this.curdle?Math.sin(D*40)*.2:0)),n.drawImage(rn.bottle,-N*.35,-N*.7,N*.7,N*1),n.restore();for(let[A,L]of Object.entries($t)){if(this.seen[A])continue;let[w,P]=gn(L.at[0],L.at[1]),B=this.ctx&&this.ctx.target===A,k=1+Math.sin(D*2.5+w)*.06;if(B){let $=n.createRadialGradient(w,P,0,w,P,Se*1.6);$.addColorStop(0,"rgba(255,226,120,0.55)"),$.addColorStop(1,"rgba(255,226,120,0)"),n.fillStyle=$,n.beginPath(),n.arc(w,P,Se*1.6,0,7),n.fill()}n.globalAlpha=B?.95:.6;let Y=Se*.95*k;n.drawImage(rn.m_q,w-Y/2,P-Y/2,Y,Y),n.globalAlpha=1}if(this.path.length){let A=this.pathFlash||0;this.pathFlash=Math.max(0,A-t*1.5),n.beginPath(),n.lineWidth=5+A*4,n.setLineDash([2,12]),n.lineDashOffset=D*20,n.strokeStyle=`rgba(110,60,40,${.85})`;let[L,w]=gn(this.pos[0],this.pos[1]);n.moveTo(L,w);for(let[k,Y]of this.path){let[$,j]=gn(k,Y);n.lineTo($,j)}n.stroke(),n.setLineDash([]);let[P,B]=gn(a[0],a[1]);n.beginPath(),n.arc(P,B,9,0,7),n.fillStyle="rgba(255,250,235,0.9)",n.fill(),n.lineWidth=3,n.strokeStyle="#6e3c28",n.stroke()}if(this.catchFx){let A=this.catchFx;A.t+=t;let[L,w]=gn(A.at[0],A.at[1]),P=Math.min(1,A.t/.6);n.lineWidth=6*(1-P)+1,n.strokeStyle=`rgba(255,214,90,${1-P})`,n.beginPath(),n.arc(L,w,Se*(.5+P*1.3),0,7),n.stroke(),A.t>.6&&(this.catchFx=null)}let b=this.lesson&&fl[this.lesson].mark;if(b){let A=b==="sleep"?$t.sleep.at:a,[L,w]=gn(A[0],A[1]),P=Se*(b==="sleep"?1:.55)*(1+Math.sin(D*5)*.06);if(n.setLineDash([]),n.lineWidth=4,n.strokeStyle="rgba(255,206,70,0.95)",n.beginPath(),n.arc(L,w,P,0,7),n.stroke(),pl.complete&&pl.naturalWidth){let B=Se*.9,k=w-P-B*.55-Math.abs(Math.sin(D*4))*Se*.25;n.save(),n.translate(L,k),n.rotate(Math.PI/2),n.drawImage(pl,-B/2,-B*.4,B,B*.8),n.restore()}}n.setTransform(1,0,0,1,0,0);let T=n.createRadialGradient(s/2,r/2,Math.min(s,r)*.42,s/2,r/2,Math.max(s,r)*.72);T.addColorStop(0,"rgba(60,35,20,0)"),T.addColorStop(1,"rgba(60,35,20,0.35)"),n.fillStyle=T,n.fillRect(0,0,s,r)}drawPot(t){let e=this.liq,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.t,o=this.liquidCol;this.nearAny&&this.nearD<2.4&&!this.curdle&&(o=Zr(o,$t[this.nearAny].liquid,Math.max(0,1-this.nearD/2.4)*.8)),this.shownCol=this.shownCol?Zr(this.shownCol,o,Math.min(1,t*4)):o;let l=s*.504,c=r*.172,h=s*.325,d=r*.125;n.clearRect(0,0,s,r);let u=n.createRadialGradient(l,c-d*.3,h*.1,l,c,h);u.addColorStop(0,cs(this.shownCol,.35)),u.addColorStop(.6,this.shownCol),u.addColorStop(1,cs(this.shownCol,-.45)),n.fillStyle=u,n.beginPath(),n.ellipse(l,c,h,d,0,0,7),n.fill(),n.save(),n.beginPath(),n.ellipse(l,c,h*.98,d*.95,0,0,7),n.clip(),n.strokeStyle=cs(this.shownCol,.5),n.globalAlpha=.45,n.lineWidth=s*.006,n.lineCap="round";for(let L=0;L<3;L++){let w=this.spoonA*.6+L*2.1+a*.4;n.beginPath(),n.ellipse(l,c,h*(.35+L*.2),d*(.35+L*.2),0,w,w+1.3),n.stroke()}n.globalAlpha=1,Math.random()<t*(this.curdle?3:9+this.stirV*6)&&this.bubbles.push({x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.4,r:0,max:s*(.012+Math.random()*.022),t:0,life:.6+Math.random()*.8});for(let L=this.bubbles.length-1;L>=0;L--){let w=this.bubbles[L];if(w.t+=t,w.t>w.life){this.bubbles.splice(L,1),Math.random()<.25&&rt.bubble(),this.steam.push({x:.504+w.x*.325*.5,y:.172+w.y*.125*.5,vx:0,vy:-.15,life:.35,t:0,s:4,c:cs(this.shownCol,.6),pop:1});continue}let P=w.max*Math.min(1,w.t/(w.life*.7)),B=l+w.x*h*.5,k=c+w.y*d*.5;n.fillStyle=cs(this.shownCol,.25),n.beginPath(),n.ellipse(B,k,P,P*.8,0,0,7),n.fill(),n.strokeStyle=cs(this.shownCol,.65),n.lineWidth=s*.003,n.stroke(),n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.arc(B-P*.35,k-P*.3,P*.22,0,7),n.fill()}let p=this.spoonA,g=l+Math.cos(p)*h*.45,M=c+Math.sin(p)*d*.45;n.strokeStyle=cs(this.shownCol,.55),n.lineWidth=s*.004,n.globalAlpha=.7,n.beginPath(),n.ellipse(g,M,s*.035,s*.012,0,0,7),n.stroke(),n.globalAlpha=1,n.restore();let m=this.fx,f=m.getContext("2d"),C=m.width,D=m.height;f.clearRect(0,0,C,D);let S=L=>L*C,E=L=>D*(.6+L),I=S(.504+Math.cos(p)*.325*.45),N=E(.172+Math.sin(p)*.125*.45),v=C*.62,_=v*220/476;f.save(),f.beginPath(),f.rect(0,0,C,N-C*.004),f.clip(),f.translate(I,N),f.rotate(Math.cos(p)*.18+Math.sin(a*2)*.03),f.drawImage(rn.spoon,-_*.14,-v*.93,_,v),f.restore(),Math.random()<t*5&&this.steam.push({x:.504+(Math.random()-.5)*.4,y:.16,vx:(Math.random()-.5)*.04,vy:-.12-Math.random()*.08,life:2.4,t:0,s:14+Math.random()*18,c:"rgba(255,255,255,1)",soft:1});for(let L=this.steam.length-1;L>=0;L--){let w=this.steam[L];if(w.t+=t,w.t>w.life){this.steam.splice(L,1);continue}w.x+=w.vx*t,w.y+=w.vy*t,w.x+=Math.sin(w.t*2+L)*8e-4;let P=w.t/w.life,B=S(w.x),k=E(w.y);if(w.soft){let Y=w.s*(C/400)*(.6+P*1.4),$=f.createRadialGradient(B,k,0,B,k,Y);$.addColorStop(0,`rgba(255,255,255,${.22*(1-P)})`),$.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=$,f.beginPath(),f.arc(B,k,Y,0,7),f.fill()}else if(w.pop)f.strokeStyle=w.c,f.globalAlpha=1-P,f.lineWidth=2,f.beginPath(),f.arc(B,k,4+P*14,0,7),f.stroke(),f.globalAlpha=1;else{f.fillStyle=w.c,f.globalAlpha=1-P;let Y=w.s*(C/400);f.beginPath(),f.arc(B,k,Y*(1-P*.5),0,7),f.fill(),f.globalAlpha=1}}for(let L=this.drops.length-1;L>=0;L--){let w=this.drops[L];if(w.t+=t,w.vy+=1.6*t,w.x+=w.vx*t,w.y+=w.vy*t,w.t>w.life){this.drops.splice(L,1);continue}f.fillStyle=w.c,f.globalAlpha=1-w.t/w.life,f.beginPath(),f.arc(S(w.x),E(w.y),w.s*C/400,0,7),f.fill(),f.globalAlpha=1}let b=this.$(".brew-witch"),T=this.stirV>.1||a-(this.circleAt||-9)<.25;this.rig.update(t,{stir:T}),b.style.transform=T?`translateY(${Math.abs(Math.sin(a*7))*-4}px)`:"";let A=this.$(".bottle");A.style.transform=this.nearTier>=0?`scale(${1+Math.max(0,Math.sin(a*5))*.05})`:""}splash(t){for(let e=0;e<18;e++)this.drops.push({x:.504+(Math.random()-.5)*.15,y:.17,vx:(Math.random()-.5)*.5,vy:-.5-Math.random()*.5,t:0,life:.8,s:4+Math.random()*5,c:t});for(let e=0;e<6;e++)this.bubbles.push({x:(Math.random()-.5)*.8,y:(Math.random()-.5)*.6,r:0,max:this.liq.width*(.02+Math.random()*.02),t:0,life:.4+Math.random()*.4});this.potEl.classList.remove("bump"),this.potEl.offsetWidth,this.potEl.classList.add("bump")}updateUI(){let t=this.$(".readout"),e=this.$(".bottle");if(this.nearTier>=0&&this.nearId){let n=$t[this.nearId],s=[2,1,0].map(r=>`<i class="pip ${this.nearTier<=r?"on":""}"></i>`).join("");t.innerHTML=`<img src="${Xt(n.medal)}" alt=""><div><b>${n.name}</b><span class="tier t${this.nearTier}">${Qs[this.nearTier]}</span></div><div class="pips">${s}</div>`,t.className="readout hot",e.disabled=!1}else{let n=this.ings.length?this.passed?`Went past ${$t[this.passed].short}. Hold Moon water to drift back`:this.path.length?"Stir to follow the dotted path. Fog lifts as you go":"Path used up. Add another ingredient to go further":"Drop an ingredient in the cauldron to draw a path";t.innerHTML=`<p>${n}</p>`,t.className="readout",e.disabled=!0}this.$(".dump").classList.toggle("hidden",!this.ings.length||!!this.lesson),this.$(".water").classList.toggle("hidden",!!this.lesson&&this.lesson!=="back")}lessonGo(t){if(t===this.lesson&&t)return;this.lesson=t;let e=this.$(".brew-coach"),n=this.$(".coach-ok");this.el.classList.toggle("lesson",!!t),this.$(".brew-ask").classList.toggle("hidden",!!t||!(this.ctx&&this.ctx.ask));for(let r of this.$(".shelf").children)r.classList.toggle("locked",this.lessonLocked(r.dataset.id));if(this.updateUI(),!t){e.classList.add("hidden"),this.$(".lesson-ring").classList.add("hidden");return}let s=fl[t];e.querySelector("p").textContent=s.say,n.classList.toggle("hidden",!s.tap),s.tap&&(n.querySelector("span").textContent=s.tap),e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),t!=="intro"&&rt.pop(),this.placeRing()}lessonNext(){rt.click(),this.lesson==="intro"?this.lessonGo("drop"):this.lesson==="path"&&this.lessonGo("stir")}lessonLocked(t){return!!this.lesson&&t!=="lav"}coachBump(){let t=this.$(".brew-coach");t.classList.remove("nudge"),t.offsetWidth,t.classList.add("nudge")}placeRing(){let t=this.$(".lesson-ghost");if(this.lesson==="drop"||this.lesson==="more"){let o=this.$('.tile[data-id="lav"]').getBoundingClientRect(),l=this.potEl.getBoundingClientRect(),c=this.t%1.9/1.3,h=Math.min(1,c),d=h*h*(3-2*h),u=o.left+o.width/2,p=o.top+o.height*.4,g=l.left+l.width*.5,M=l.top+l.height*.12,m=u+(g-u)*d,f=p+(M-p)*d-Math.sin(d*Math.PI)*l.height*.25;t.classList.remove("hidden"),t.style.opacity=c<.12?c/.12:c>1?Math.max(0,1-(c-1)*3.5):.85,t.style.transform=`translate(${m-32}px, ${f-32}px) rotate(${d*30-10}deg) scale(${1-d*.3})`}else t.classList.add("hidden");let e=this.$(".lesson-ring"),n=this.lesson&&fl[this.lesson].ring,s=n&&this.$(n);if(!s){e.classList.add("hidden");return}let r=s.getBoundingClientRect(),a=6;e.classList.remove("hidden"),e.classList.toggle("big",n===".map-frame"),e.style.left=r.left-a+"px",e.style.top=r.top-a+"px",e.style.width=r.width+a*2+"px",e.style.height=r.height+a*2+"px"}toast(t,e){let n=this.$(".brew-toast");n.innerHTML=(e?`<img src="${Xt(e)}" alt="">`:"")+`<span>${t}</span>`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}key(t,e){if(t==="Space"||t==="KeyS")return this.stirHold=e,this.$(".stir").classList.toggle("down",e),!0;if(t==="KeyQ"||t==="KeyW")return this.waterHold=e,this.$(".water").classList.toggle("down",e),!0;if(!e)return!1;if(t==="Enter"||t==="KeyE")return this.lesson&&fl[this.lesson].tap?this.lessonNext():this.bottle(),!0;if(t==="Escape")return this.close(),!0;let n=parseInt(t.replace("Digit",""),10);if(n>=1&&n<=ph.length){let s=ph[n-1],r=this.$(`.tile[data-id="${s}"]`);if(!r)return!0;if(this.lessonLocked(s))return r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope"),this.coachBump(),!0;if(V.inv[s]>0){let a=Yr("img","drag-ghost");a.src=Xt(Be[s].icon);let o=r.getBoundingClientRect();a.style.transform=`translate(${o.left+o.width/2-40}px, ${o.top-40}px)`,document.body.appendChild(a),a.offsetWidth,this.drop(s,a,null),rt.pop()}else r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope");return!0}return!1}};var Ut=(i,t=document)=>t.querySelector(i);function nr(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Jr=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Jr);var On=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),gl=0,qd=0,$d=0;function Kr(i,t=!1){qd=i;let e=Ut("#coinN");if(!t){gl=i,e.textContent=i;return}cancelAnimationFrame($d);let n=gl,s=performance.now(),r=()=>{let a=Math.min(1,(performance.now()-s)/650);gl=Math.round(n+(qd-n)*(1-(1-a)**3)),e.textContent=gl,a<1&&($d=requestAnimationFrame(r))};r(),Bn(Ut("#hud .coins"))}function _h(i,t){Ut("#fameN").textContent="Lv "+i,Ut("#hud .fame .bar i").style.width=Math.round(t*100)+"%"}function Jd(i,t,e){let n=Ut("#clock");n.querySelector("span").textContent=i,n.querySelector("em").textContent=t,n.classList.toggle("night",e>.5)}var mh="";function Kd(i,t=""){let e=Ut("#quest"),n=i+"|"+t;if(n===mh)return;let s=!mh.startsWith(i+"|");if(mh=n,!i){e.classList.add("hidden");return}e.classList.remove("hidden"),e.querySelector(".qtext").textContent=i,e.querySelector(".qprog").textContent=t,s?(e.classList.remove("new"),e.offsetWidth,e.classList.add("new")):Bn(e.querySelector(".qprog"))}function ir(i){let t=Ut("#bBag .badge");t.textContent=i,t.classList.toggle("hidden",!i),i&&Bn(t)}function _l(i,t){let e=Ut("#note");if(!i){e.classList.add("hidden"),e.onclick=null;return}e.innerHTML=i,e.classList.remove("hidden"),e.onclick=t||null}function Bn(i){i&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}function us(i,t,{ms:e=2600}={}){let n=Ut("#toasts"),s=nr("div","toast",(t?`<img src="${Xt(t)}" alt="">`:"")+`<span>${i}</span>`);for(n.appendChild(s);n.children.length>3;)n.firstChild.remove();return setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},e),s}var Yd=0,gh=!1,jd=()=>!1,tr=[];function Qd(i){jd=i}function kn(i,t="",e={}){for(let n=tr.length-1;n>=0;n--)tr[n].title===i&&tr.splice(n,1);tr.push({title:i,sub:t,...e}),xh()}function xh(){if(gh||!tr.length)return;if(Vi||er||jd()){setTimeout(xh,300);return}let{title:i,sub:t,icon:e=null,ms:n=2800,kind:s="",onShow:r=null}=tr.shift(),a=Ut("#banner");a.className="banner "+s,a.innerHTML=`<div class="ribbon big"><span>${i}</span></div>${t?`<p>${t}</p>`:""}${e?`<img src="${Xt(e)}" alt="">`:""}`,a.offsetWidth,a.classList.add("show"),gh=!0,r&&r(),clearTimeout(Yd),Yd=setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>{gh=!1,xh()},450)},n)}function vl(i,t,e,{size:n=56,delay:s=0,arc:r=120,dur:a=.75,onArrive:o=null}={}){setTimeout(()=>{let l=e.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2,d=nr("img","flyer");d.src=i.includes("/")?i:Xt(i),d.style.width=n+"px",Ut("#fly").appendChild(d);let u=performance.now(),p=t.x+(Math.random()-.5)*30,g=t.y+(Math.random()-.5)*20,M=()=>{let m=Math.min(1,(performance.now()-u)/(a*1e3)),f=m<.5?2*m*m:1-(-2*m+2)**2/2,C=p+(c-p)*f,D=g+(h-g)*f-Math.sin(m*Math.PI)*r,S=m<.15?.4+m/.15*.8:1.2-(m-.15)*.6;d.style.transform=`translate(${C-n/2}px, ${D-n/2}px) scale(${S}) rotate(${m*30}deg)`,m<1?requestAnimationFrame(M):(d.remove(),Bn(e),o&&o())};M()},s)}function tf(i,t,e){let n=Ut("#hud .coins"),s=Math.min(10,Math.max(3,Math.round(i/12)));for(let r=0;r<s;r++)vl("coin",t,n,{size:34,delay:r*55,arc:80+Math.random()*60,dur:.6,onArrive:()=>{rt.coin(r%3),e&&e(r,s)}})}function zn(i,t,e=""){let n=nr("div","pop-text "+e,i);n.style.left=t.x+"px",n.style.top=t.y+"px",Ut("#fly").appendChild(n),setTimeout(()=>n.remove(),1300)}var xl=class{constructor(t){this.world=t,this.root=Ut("#tags"),this.map=new Map,this.tmp={x:0,y:0}}get(t,e,n){let s=this.map.get(t);return s||(s={el:nr("div","tag "+e),html:null,vis:!0},this.root.appendChild(s.el),this.map.set(t,s)),n!=null&&n!==s.html&&(s.el.innerHTML=n,s.html=n),s}place(t,e,n,s,r=!0){let a=this.map.get(t);if(!a)return;let o=this.world.toScreen(e,n,s,this.tmp),l=r&&!o.behind&&o.x>-80&&o.x<innerWidth+80&&o.y>-60&&o.y<innerHeight*.8;return l!==a.vis&&(a.el.classList.toggle("off",!l),a.vis=l),l&&(a.el.style.transform=`translate(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px)`),o}remove(t){let e=this.map.get(t);e&&(e.el.remove(),this.map.delete(t))}has(t){return this.map.has(t)}};function vh(i,t){let e=Ut("#qptr");if(!t){e.classList.add("hidden");return}let n=i.toScreen(t[0],t[1],t[2]),s=innerWidth,r=innerHeight,a=46;if(e.classList.remove("hidden"),!n.behind&&n.x>a&&n.x<s-a&&n.y>a+30&&n.y<r-a)e.classList.remove("edge"),e.style.transform=`translate(${n.x}px, ${n.y}px)`;else{let o=n.x-s/2,l=n.y-r/2;n.behind&&(o=-o,l=-l);let c=Math.min((s/2-a)/Math.abs(o||1e-6),(r/2-a)/Math.abs(l||1e-6));e.classList.add("edge"),e.style.transform=`translate(${s/2+o*c}px, ${r/2+l*c}px) rotate(${Math.atan2(l,o)}rad)`}}var Vi=null;function yl(){return!!Vi}function Gi(i,t,e=[],{pitch:n=1,side:s="left"}={}){return new Promise(r=>{let a=Ut("#dialog");a.classList.remove("hidden"),a.classList.toggle("right",s==="right"),a.querySelector(".dlg-name span").textContent=i;let o=a.querySelector(".dlg-text"),l=a.querySelector(".dlg-choices"),c=a.querySelector(".dlg-next");o.textContent="",l.innerHTML="",c.classList.add("hidden"),qr(!0);let h={i:0,done:!1,sel:0};Vi=h;let d=a.querySelector(".dlg-box");d.classList.remove("pop"),d.offsetWidth,d.classList.add("pop");let u=M=>{Vi=null,a.classList.add("hidden"),qr(!1),r(M)},p=()=>{if(h.done=!0,!e.length){c.classList.remove("hidden");return}e.forEach((M,m)=>{let f=nr("button","choice"+(M.disabled?" disabled":""),(M.icon?`<img src="${Xt(M.icon)}" alt="">`:"")+`<span>${M.label||M}</span>${Jr?"":`<kbd>${m+1}</kbd>`}`);f.style.animationDelay=m*.06+"s",f.addEventListener("click",C=>{if(C.stopPropagation(),M.disabled){rt.click(),Bn(f);return}rt.click(),u(m)}),l.appendChild(f)})};h.choose=M=>{let m=e[M];m&&!m.disabled&&(rt.click(),u(M))},h.advance=()=>{if(!h.done){h.i=t.length,o.textContent=t,p();return}e.length||(rt.click(),u(-1))};let g=()=>{if(Vi!==h||h.done)return;if(h.i++,o.textContent=t.slice(0,h.i),rt.blip(t[h.i-1]||"",n),h.i>=t.length){p();return}let M=t[h.i-1];setTimeout(g,M==="."||M==="?"||M==="!"?180:M===","?90:24)};setTimeout(g,120),a.onclick=()=>h.advance()})}function ef(i){if(!Vi)return!1;if(i==="KeyE"||i==="Space"||i==="Enter")return Vi.advance(),!0;let t=parseInt(i.replace("Digit",""),10);return t>=1&&t<=4&&Vi.choose(t-1),!0}var er=null;function Ml(){return!!er}function mi(i,t,{onClose:e=null,title:n=""}={}){hs(!0);let s=Ut("#panel");s.className="modal";let r=nr("div","card "+i);return r.innerHTML=(n?`<div class="ribbon card-title"><span>${n}</span></div>`:"")+t+'<button class="btn-close" aria-label="Close"></button>',s.appendChild(r),r.querySelector(".btn-close").addEventListener("click",()=>hs()),s.onclick=a=>{a.target===s&&hs()},er={card:r,onClose:e},rt.open(),qr(!0),r}function hs(i=!1){if(!er)return;let t=er;er=null;let e=Ut("#panel");e.className="modal hidden",e.innerHTML="",i||rt.close(),qr(!1),t.onClose&&t.onClose()}function jr({medal:i,potion:t,title:e,name:n,tier:s,first:r,ings:a}){return new Promise(o=>{let l=Ut("#discovery");l.innerHTML=`
      <div class="rays"></div>
      <div class="disc-card">
        <div class="ribbon big"><span>${e}</span></div>
        <div class="disc-icons"><img class="medal" src="${Xt(i)}" alt=""><img class="potion" src="${Xt(t)}" alt=""></div>
        <h2>${n}</h2>
        <p class="tier t${s.i}">${s.label}</p>
        <p class="first">${r}</p>
        <div class="recipe">${a.map(h=>`<img src="${Xt(h)}" alt="">`).join("<b>+</b>")}</div>
        <button class="btn-green"><span>Wonderful!</span></button>
      </div>`,l.classList.remove("hidden"),l.offsetWidth,l.classList.add("show"),$e(60);let c=()=>{l.classList.remove("show"),setTimeout(()=>{l.classList.add("hidden"),l.innerHTML=""},300),rt.click(),o()};l.querySelector(".btn-green").addEventListener("click",c),jr.close=c})}var xe={x:0,z:0,keys:new Set},We=null;function nf({onAct:i,onKey:t}){let e=()=>{let h=xe.keys;xe.kx=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),xe.kz=(h.has("KeyS")||h.has("ArrowDown")?1:0)-(h.has("KeyW")||h.has("ArrowUp")?1:0)};window.addEventListener("keydown",h=>{h.target&&h.target.tagName==="INPUT"||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault(),!h.repeat&&(xe.keys.add(h.code),e(),t(h.code,!0)))}),window.addEventListener("keyup",h=>{xe.keys.delete(h.code),e(),t(h.code,!1)}),window.addEventListener("blur",()=>{xe.keys.clear(),e()}),xe.kx=xe.kz=0;let n=Ut("#touch"),s=Ut("#stick"),r=s.querySelector("i");n.addEventListener("pointerdown",h=>{We||(We={id:h.pointerId,ox:h.clientX,oy:h.clientY},n.setPointerCapture(h.pointerId),s.style.left=We.ox+"px",s.style.top=We.oy+"px",s.classList.remove("hidden"),r.style.transform="translate(-50%,-50%)")}),n.addEventListener("pointermove",h=>{if(!We||h.pointerId!==We.id)return;let d=46,u=h.clientX-We.ox,p=h.clientY-We.oy,g=Math.hypot(u,p);g>d&&(We.ox+=u*(1-d/g),We.oy+=p*(1-d/g),u=h.clientX-We.ox,p=h.clientY-We.oy,s.style.left=We.ox+"px",s.style.top=We.oy+"px");let M=Math.min(1,Math.hypot(u,p)/d),m=Math.atan2(p,u);xe.sx=M>.12?Math.cos(m)*M:0,xe.sz=M>.12?Math.sin(m)*M:0,r.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${p}px))`});let a=h=>{!We||h.pointerId!==We.id||(We=null,xe.sx=xe.sz=0,s.classList.add("hidden"))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),xe.sx=xe.sz=0;let o=Ut("#act"),l=null,c=()=>{l&&(window.removeEventListener("click",l,!0),l=null)};o.addEventListener("pointerdown",h=>{h.preventDefault(),Bn(o),i(),c(),l=d=>{d.stopPropagation(),d.preventDefault(),c()},window.addEventListener("click",l,!0),setTimeout(c,700)}),window.addEventListener("pointerdown",h=>{o.contains(h.target)||c()},!0)}function sf(){let i=xe.kx+xe.sx,t=xe.kz+xe.sz,e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),xe.x=i,xe.z=t,xe}function rf(){xe.keys.clear(),xe.kx=xe.kz=xe.sx=xe.sz=0,We=null,Ut("#stick").classList.add("hidden")}var Zd="";function Qr(i,t){let e=Ut("#prompt"),n=Ut("#act"),s=i||"";s!==Zd&&(Zd=s,i?(e.innerHTML=`<div class="pin">${Jr?"":"<kbd>E</kbd>"}<span>${i}</span></div>`,e.classList.remove("hidden"),e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),n.querySelector("span").textContent=i.replace(/ \(.+\)$/,""),n.classList.remove("hidden")):(e.classList.add("hidden"),n.classList.add("hidden"))),i&&t&&(e.style.transform=`translate(${t.x}px, ${t.y}px)`)}function ta(i){return Ut("#fade").classList.toggle("on",i),new Promise(t=>setTimeout(t,i?260:10))}function yh(){if(V.settings.tod>=0)return V.settings.tod;let i=new Date(Me());return i.getHours()+i.getMinutes()/60}var Hi=[[0,[.42,.48,.78],.18,1],[4.5,[.46,.5,.8],.18,1],[6,[1,.78,.78],.25,.35],[7.5,[1,.95,.9],.32,0],[12,[1,1,1],.36,0],[16.5,[1,.97,.9],.34,0],[18.2,[1,.8,.62],.28,.15],[19.5,[.66,.6,.9],.22,.7],[21,[.44,.5,.8],.18,1],[24,[.42,.48,.78],.18,1]];function af(i=yh()){let t=Hi[0],e=Hi[Hi.length-1];for(let a=0;a<Hi.length-1;a++)if(i>=Hi[a][0]&&i<=Hi[a+1][0]){t=Hi[a],e=Hi[a+1];break}let n=(i-t[0])/Math.max(1e-6,e[0]-t[0]),s=n*n*(3-2*n),r=(a,o)=>a+(o-a)*s;return{tint:[r(t[1][0],e[1][0]),r(t[1][1],e[1][1]),r(t[1][2],e[1][2])],shadow:r(t[2],e[2]),night:r(t[3],e[3])}}function of(i=yh()){return i<5?"Night":i<7.5?"Dawn":i<12?"Morning":i<17?"Afternoon":i<19.5?"Evening":"Night"}function Mh(i=yh()){let t=Math.floor(i)%24,e=Math.floor(i%1*60),n=t<12?"AM":"PM";return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${n}`}function ds(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/60),n=t%60;return e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}:${String(n).padStart(2,"0")}`}function lf(i){let t=Math.max(1,Math.round(i/6e4)),e=Math.floor(t/60),n=Math.floor(e/24),s=(r,a)=>`${r} ${a}${r===1?"":"s"}`;return n>=1?s(n,"day"):e>=1?t%60?`${s(e,"hour")} ${s(t%60,"minute")}`:s(e,"hour"):s(t,"minute")}var ea=21,Ah=15,df=19,G_=5*6e4,bh={mira:"Mira",juniper:"Juniper",oz:"Oz",pip:"Pip",wren:"Wren"},Wi={crow:.75,pip:1.3,wren:1.12,mira:1.05,juniper:1.2,oz:.9,kuro:1.6,me:1.25},H_=Object.fromEntries(lh.map(i=>[i.id,i])),W_=["cham","lav","man","mush","feather","berry","moth","glowbug"],zt,tn,vt,Ee,xn,ii,cn,an,fs,Qt=null,lt={started:!1,quiet:0,t:0,focus:null,target:null,disc:!1,chatT:3,secT:0,saveT:0,where:"home",fps:[],lowQ:!1},ke=()=>(ni[V.q]||ni[ni.length-1]).id,X_=(i,t)=>`${i}:${t}`,En=i=>{let[t,e]=i.split(":");return[t,+e]},Sh=(i,t)=>Math.max(5,Math.round($t[i].base*ah[t]*1.1/5)*5),q_=(i,t)=>Math.round($t[i].base*ah[t]),bl=i=>`<span class="tier t${i}">${Qs[i]}</span>`,ps=()=>!lt.started||lt.disc||cn.isOpen||yl()||Ml()||lt.cut,si=(i,t,e)=>zt.toScreen(i,t,e,{x:0,y:0}),Pe=(i,t=.15)=>[i.x,(i.h*i.sy+t)*Math.cos(.72)+i.mesh.position.y,i.z-(i.h*i.sy+t)*Math.sin(.72)];function wh(){return 1+Math.floor(V.fame/3)}function ff(i,t){let e=wh();V.fame+=i;let n=wh();_h(n,V.fame%3/3),t&&zn(`+${i} fame`,t,"fame"),n>e&&setTimeout(()=>kn(`Fame Lv ${n}`,"More of Mossbrook knows your name",{kind:"gold",onShow:()=>rt.discover()}),600)}function pf(i,t){V.coins+=i,t?tf(i,t,(e,n)=>{e===n-1&&Kr(V.coins,!0)}):Kr(V.coins,!0),t&&zn(`+${i}`,{x:t.x,y:t.y-30},"coin")}function ia(i,t,e){V.inv[i]=(V.inv[i]||0)+t,V.found[i]=!0,V.newCount=(V.newCount||0)+t;for(let n=0;n<Math.min(t,4);n++)vl(Be[i].icon,e,Ut("#bBag"),{delay:n*110,size:52,onArrive:n===Math.min(t,4)-1?()=>{ir(V.newCount),rt.pop()}:null})}function mf(i){let t=i>vt.x?1:-1;t!==vt.face&&(vt.flipFrom=vt.face,vt.face=t,vt.flipT=0)}function $_(){let i=ni[V.q]||ni[ni.length-1];if(i.id==="free"){if(V.cust.here){let e=js[V.cust.i%js.length];return[V.cust.asked?`Brew a ${$t[e.want].name} for ${e.name}`:`${e.name} is at your door`,""]}let t=V.cust.nextAt-Me();return["Explore at your own pace",t>1e3?`Visitor in ${ds(t)}`:"Visitor soon"]}return[i.text,i.need?`${Math.min(V.qn,i.need)}/${i.need}`:""]}function Vn(i){if(ke()!==i)return!1;let t=ni[V.q];return V.q=Math.min(ni.length-1,V.q+1),V.qn=0,ge(),rt.quest(),$e(15),us(`<b>Done!</b> ${t.text}`,"star"),setTimeout(()=>Y_(ke()),700),!0}function Y_(i){i==="talk"&&!Qt&&na(!0),i==="mystery"&&kn("Something glows","Far north on the potion map, past the brambles",{icon:"m_q",kind:"gold",ms:3200}),i==="free"&&(V.cust.nextAt=Math.max(V.cust.nextAt,Me()+9e4),kn("The slice is yours","Everything keeps growing on the real clock. Come back later!",{ms:3600})),ge(!0)}function Z_(){switch(ke()){case"letter":return Pe(tn.props.mailbox,.5);case"harvest":{let i=null,t=1e9;for(let e of xn.plots)if(xn.state(e.i).ready){let n=Math.hypot(e.x-vt.x,e.z-vt.z);n<t&&(t=n,i=e)}return i?[i.x,1.9,i.z-.4]:null}case"talk":case"deliver":return Qt&&!Qt.moving?Pe(Qt.spr,.5):null;case"brew":case"mystery":return vt.x<pi?Pe(tn.props.cauldron,.6):[at.roadEnd[0],1,at.roadEnd[1]];case"town":return[at.roadEnd[0],1.2,at.roadEnd[1]];case"board":return Pe(tn.props.board,.4);case"stall":return Pe(tn.props.myStall,.4);case"buy":return Pe(tn.props.stalls.mira,.3);default:{if(!V.cust.here||!Qt||Qt.moving||vt.x>=pi)return null;let i=Qt.def.want,t=Object.keys(V.potions).some(e=>e.startsWith(i+":")&&V.potions[e]>0);return V.cust.asked&&!t?Pe(tn.props.cauldron,.6):Pe(Qt.spr,.5)}}}function na(i){let t=js[V.cust.i%js.length],e=t.who==="crow"?1.5:1.6,n=i?at.crowEnter:at.crowWait;if(Qt=new rs(zt,t.sprite,e,n[0],n[1],{talk:t.talk,speed:2.4}),Qt.def=t,t.who==="pip"||t.who==="wren"){let r=an[t.who];r.busy=!0,r.spr.visible=!1,fs.remove("n-"+t.who)}let s=()=>{V.cust.here=!0,ge(!0),Qt.face=1,Qt.hop(),t.who==="crow"?rt.caw():rt.blip("a",Wi[t.who]||1)};i?(Qt.goTo([[12,1.6],[9,4],[1.5,4.1],at.crowWait],s),t.who==="crow"&&setTimeout(()=>rt.caw(),400),lt.started&&(vt.x<pi?us(`${t.name} is coming up the path`,t.sprite):_l(`<img src="${Xt(t.sprite)}" alt=""><span>${On(t.name)} is waiting at your cottage</span>`))):(V.cust.here=!0,Qt.face=1)}function J_(){let i=Qt;Qt=null,i&&(i.goTo([[1.5,4.1],[9,4],[12,1.6],at.crowEnter,[22,.8]],()=>{i.spr.dispose();let t=i.def.who;if(t==="pip"||t==="wren"){let e=an[t];e.busy=!1,e.spr.visible=!0}}),fs.remove("n-cust"))}async function K_(){let i=Qt,t=i.def,e=$t[t.want];if(Math.abs(vt.x-i.x)<1.2){let r=vt.x>=i.x?1:-1;vt.walkTo(i.x+r*1.35,i.z+.4,i.x),i.face=r}else mf(i.x),i.face=i.x>vt.x?-1:1;let n=Wi[t.who]||1,s=async(r,a=[])=>{i.talking=Math.min(6,r.length*.035);let o=await Gi(t.name,r,a,{pitch:n});return i.talking=0,o};lt.focus=[(i.x+vt.x)/2,(i.z+vt.z)/2],zt.distGoal=Ah;try{if(!V.cust.asked){await s(t.ask,[{label:"Leave it to me!"},{label:"What happened?"}])===1&&await s(t.who==="crow"?"Owls. Singing. All night. They even take requests.":"It is a long story, and most of it is embarrassing."),V.cust.asked=!0,ge(!0),ke()==="talk"?(await Gi(V.name,"Granny's letter said lavender pulls a brew toward Sleep. The cauldron is by the cottage.",[],{pitch:Wi.me}),Vn("talk")):us(`${t.name} wants a <b>${e.name}</b>`,e.medal);return}let r=Object.keys(V.potions).filter(u=>V.potions[u]>0).sort((u,p)=>(En(u)[0]===t.want?-1:0)-(En(p)[0]===t.want?-1:0)||En(u)[1]-En(p)[1]).slice(0,3);if(!r.length){await s(`No rush. A ${e.name} whenever you are ready.`);return}let a=r.map(u=>{let[p,g]=En(u);return{label:`${$t[p].short} (${Qs[g]})`,icon:$t[p].potion}});a.push({label:"Not yet"});let o=await s(`Is that a ${e.name} I smell?`,a);if(o<0||o>=r.length)return;let[l,c]=En(r[o]);if(l!==t.want){rt.fail(),await s(`Hmm. That smells like ${$t[l].short}. I need a ${e.name}.`);return}V.potions[r[o]]--;let h=q_(l,c),d=si(i.x,1.4,i.z);i.hop(),rt.bottle(),zt.sparkle(i.x,1,i.z,16,"#fff2a8"),pf(h,d),ff(1,{x:d.x,y:d.y-60}),await s(`${t.thanks} Here, ${h} coins.${c===0?" A perfect brew, too!":""}`),V.cust.i++,V.cust.here=!1,V.cust.asked=!1,V.cust.nextAt=Me()+G_,ge(),J_(),_l(null),Vn("deliver")}finally{lt.focus=null,zt.distGoal=ea}}function gf(){let i=[],t=(n,s,r,a,o,l,c)=>i.push({id:n,x:s,z:r,r:a,label:o,act:l,anchor:c}),e=tn.props;if(vt.x<pi-4){if(t("mailbox",at.mailbox[0],at.mailbox[1]+.3,1.7,ke()==="letter"?"Read letter":"Mailbox",av,Pe(e.mailbox)),t("cauldron",at.cauldron[0],at.cauldron[1]+.3,2.1,"Brew",hf,Pe(e.cauldron,.3)),t("door",at.door[0],at.door[1]+.5,1.4,"Enter workshop",hf,[at.door[0],2.4,at.door[1]-.6]),t("sign",at.sign[0],at.sign[1]+.3,1.5,"Read sign",nv,Pe(e.sign)),t("woodsign",at.woodSign[0],at.woodSign[1]+.3,2,"Read sign",iv,Pe(e.woodSign)),vt.x<is+3){let s=ii.nearBerry(vt.x,vt.z);if(s){let a=ii.berryLeft(s.i);t("berry"+s.i,s.x,s.z+.5,1.6,a?`Berries in ${ds(a)}`:"Pick berries",()=>Q_(s.i),Pe(s.spr,.1))}let r=ii.nearBug(vt.x,vt.z);r&&t("bug"+r.i,r.x,r.z,1.7,`Catch ${Be[r.kind].name}`,()=>tv(r),[r.x,r.y+.75,r.z])}Ee.atStall||t("cat",Ee.x,Ee.z+.2,1.3,"Pet Kuro",ev,Pe(Ee.spr,.2));let n=xn.nearest(vt.x,vt.z,1.35);if(n){let s=xn.state(n.i);t("plot"+n.i,n.x,n.z,1.35,s.ready?`Harvest ${s.def.name}`:`${s.def.name} in ${ds(s.left)}`,()=>j_(n.i),[n.x,1.5,n.z-.6])}Qt&&!Qt.moving&&t("cust",Qt.x,Qt.z+.2,1.7,V.cust.asked?`Give ${Qt.def.name} a potion`:`Talk to ${Qt.def.name}`,K_,Pe(Qt.spr,.3))}else{t("board",at.board[0],at.board[1]+.5,2,"Discovery board",lv,Pe(e.board,.1));for(let n of["mira","juniper","oz"]){let[s,r]=ki[n];t("stall-"+n,s,r+.3,1.9,`${bh[n]}'s stall`,()=>hv(n),Pe(an[n].spr,.35))}t("mystall",at.myStall[0],at.myStall[1]+.3,1.9,"Your stall",uv,Pe(e.myStall,.1)),t("fountain",at.fountain[0],at.fountain[1]+.9,2.5,"Make a wish",sv,[at.fountain[0],2.6,at.fountain[1]-1.4]);for(let n of["pip","wren"]){let s=an[n];s.busy||t("folk-"+n,s.x,s.z+.15,1.4,`Chat with ${bh[n]}`,()=>rv(n),Pe(s.spr,.3))}}return i}function xf(){if(ps()||lt.quiet>0){lt.target=null,Qr(null);return}let i=null,t=1e9;for(let e of gf()){let n=Math.hypot(e.x-vt.x,(e.z-vt.z)*1.25);n<e.r&&n/e.r<t&&(t=n/e.r,i=e)}if(lt.target=i,i){let e=si(i.anchor[0],i.anchor[1],i.anchor[2]);Qr(i.label,{x:Math.round(e.x),y:Math.round(e.y)})}else Qr(null)}function Th(){if(ps()||!lt.target)return;let i=lt.target;mf(i.x),i.act()}function j_(i){let t=xn.state(i);if(!t.ready){let r=xn.plots[i];zn(`Ready in ${ds(t.left)}`,si(r.x,1.2,r.z),"soft"),rt.click();return}let e=xn.plots[i];vt.setPose("witch_pick",.42);let n=xn.harvest(i);rt.harvest(),$e(10);let s=si(e.x,.8,e.z);ia(n.crop,n.n,s),zn(`+${n.n} ${Be[n.crop].name}`,{x:s.x,y:s.y-40}),lt.quiet=.9,ke()==="harvest"&&(V.qn++,V.qn>=ni[V.q].need&&Vn("harvest")),ge(!0)}function Q_(i){let t=ii.berries[i],e=ii.berryLeft(i);if(e){zn(`Regrows in ${ds(e)}`,si(t.x,1.6,t.z),"soft"),rt.click();return}vt.setPose("witch_pick",.42);let n=ii.pick(i);rt.harvest(),$e(10);let s=si(t.x,.8,t.z);ia("berry",n,s),zn(`+${n} ${Be.berry.name}`,{x:s.x,y:s.y-40}),lt.quiet=.9,ge(!0)}function tv(i){lt.swipe||(lt.swipe=!0,vt.setPose("witch_pick",.36),vt.hop&&vt.hop(),rt.stir(),setTimeout(()=>{lt.swipe=!1;let t=si(i.x,i.y+.4,i.z),e=ii.tryCatch(i,vt.x,vt.z);if(!e){zn("Missed!",t,"soft"),rt.click();return}rt.pop(),$e(12),ia(e,1,t),zn(`+1 ${Be[e].name}`,{x:t.x,y:t.y-40}),lt.quiet=.8,ge(!0)},230))}function ev(){Ee.hop(),rt.meow(),$e(8),zt.sparkle(Ee.x,.7,Ee.z,8,"#ffb3c8");let i=si(Ee.x,1.1,Ee.z);zn("\u2665",i,"heart"),lt.pets=(lt.pets||0)+1,lt.pets===5&&setTimeout(()=>Gi("Kuro","Mrrrp. (Kuro would like it noted that he is an excellent shopkeeper.)",[],{pitch:Wi.kuro}),300)}async function nv(){await Gi("Signpost","East: Mossbrook Square. West: Hazel Cottage, and past it Whisperwood. North: fog, and nobody knows.",[],{pitch:.9})}async function iv(){await Gi("Signpost","Whisperwood. Wild berries grow back by themselves. Moths by day, glowbugs after dark.",[],{pitch:.9})}function sv(){rt.discover(),$e(12),zt.sparkle(at.fountain[0],2.2,at.fountain[1]-.6,26,"#cfefff",1.2,1.6);let i=["The water glitters. Something in the fog feels closer.","A tiny rainbow. Kuro would approve.","You wish for a Perfect brew. The fountain hums back."];us(i[Math.floor(Math.random()*i.length)],"m_drop")}async function rv(i){let t=an[i];t.busy=!0,t.path=[],t.face=t.x>vt.x?-1:1;let e={pip:["Mira says blue caps pull a brew north. I wonder what is up there.","I sold three Healing potions before lunch! Okay, two. Okay, I drank one."],wren:["Nobody has put Luck on the board yet. The north fog is spooky.","Glow sells best at night. Everyone walks home in the dark."]}[i];lt.focus=[(t.x+vt.x)/2,(t.z+vt.z)/2],zt.distGoal=Ah,t.talking=2,await Gi(bh[i],e[Math.floor(Math.random()*e.length)],[],{pitch:Wi[i]}),t.talking=0,t.busy=!1,t.wait=1.5,lt.focus=null,zt.distGoal=ea}function av(){if(ke()!=="letter"){tn.props.mailbox.flash=.6,setTimeout(()=>tn.props.mailbox.flash=0,120),rt.click(),zn("Empty for now",si(at.mailbox[0],1.6,at.mailbox[1]),"soft");return}mi("letter-card",`
    <div class="letter">
      <p>Dear ${On(V.name)},</p>
      <p>The cottage is yours now, and so is the old cauldron. Do look after Kuro. He pretends he does not need looking after.</p>
      <p>Every herb pulls a brew a different way. Stir, follow where it leads, and the fog will lift. There are more potions out there than I ever found.</p>
      <p>Lavender for sleepy folk. Here are two sprigs to start you off.</p>
      <p>When the garden runs thin, take the little trail west into Whisperwood. The berries and moths there do odd things to a brew.</p>
      <p class="sign">With love,<br>Granny Hazel</p>
      <div class="gift"><img src="${Xt("i_lav")}" alt=""><img src="${Xt("i_lav")}" alt=""></div>
    </div>
    <button class="btn-green take"><span>Take the lavender</span></button>`,{onClose:()=>ov()}).querySelector(".take").addEventListener("click",()=>hs())}var cf=!1;function ov(){cf||ke()!=="letter"||(cf=!0,ia("lav",2,{x:innerWidth/2,y:innerHeight/2}),tn.props.mailbox.set("mailbox_empty"),zt.sparkle(at.mailbox[0]+.4,1.1,at.mailbox[1],10,"#fff2a8"),Vn("letter"))}function _f(i,{cls:t="",empty:e=0}={}){let n=i.map(s=>`<button class="slot ${t} ${s.sel?"sel":""}" data-k="${s.k}" ${s.title?`title="${On(s.title)}"`:""}><img src="${Xt(s.icon)}" alt=""><b>${s.n}</b>${s.tier!=null?`<i class="tdot t${s.tier}"></i>`:""}</button>`).join("");for(let s=i.length;s<e;s++)n+='<div class="slot blank"></div>';return n}function Ch(i){return i==="herbs"?W_.filter(t=>V.inv[t]>0).map(t=>({k:t,icon:Be[t].icon,n:V.inv[t],title:Be[t].name})):Object.keys(V.potions).filter(t=>V.potions[t]>0).map(t=>{let[e,n]=En(t);return{k:t,icon:$t[e].potion,n:V.potions[t],tier:n,title:`${$t[e].name} (${Qs[n]})`}})}function vf(i="herbs"){V.newCount=0,ir(0),ge(!0);let t=mi("bag-card",`
    <div class="tabs"><button class="tab" data-t="herbs">Herbs</button><button class="tab" data-t="potions">Potions</button></div>
    <div class="bag-grid"></div>
    <div class="bag-info"><p></p></div>`,{title:"Bag"}),e=n=>{i=n,t.querySelectorAll(".tab").forEach(r=>r.classList.toggle("on",r.dataset.t===n));let s=Ch(n);t.querySelector(".bag-grid").innerHTML=_f(s,{empty:10}),t.querySelector(".bag-info p").innerHTML=s.length?"Tap an item to read about it":n==="herbs"?"No herbs yet. Harvest your garden or buy from the stalls":"No potions yet. Brew one at the cauldron",t.querySelectorAll(".slot[data-k]").forEach(r=>r.addEventListener("click",()=>{rt.click(),t.querySelectorAll(".slot").forEach(l=>l.classList.remove("sel")),r.classList.add("sel");let a=r.dataset.k,o;if(n==="herbs"){let l=$r[a];o=`<b>${Be[a].name}</b> ${l?`Grows in your garden in ${l.growMin} minutes.`:"Sold at the town stalls."}`}else{let[l,c]=En(a);o=`<b>${$t[l].name}</b> ${bl(c)} Suggested price ${Sh(l,c)} coins.`}t.querySelector(".bag-info p").innerHTML=o}))};t.querySelectorAll(".tab").forEach(n=>n.addEventListener("click",()=>{rt.click(),e(n.dataset.t)})),e(i)}function yf(){let i=Object.entries($t).map(([e,n])=>{let s=V.discovered[e],r=V.recipes[e];return s?`<div class="rec"><img class="medal" src="${Xt(n.medal)}" alt=""><div class="rec-t"><b>${n.name}</b>${bl(s.tier)}</div><div class="rec-i">${r.ings.map(a=>`<img src="${Xt(Be[a].icon)}" alt="">`).join("<em>+</em>")}</div></div>`:`<div class="rec unknown"><img class="medal" src="${Xt("m_q")}" alt=""><div class="rec-t"><b>???</b><span>Somewhere ${n.hint}</span></div></div>`}).join(""),t=Object.keys(V.discovered).length;mi("book-card",`<p class="book-sub">${t} of ${Object.keys($t).length} found</p><div class="recs">${i}</div>`,{title:"Recipes"})}function lv(){let i=Object.entries($t).map(([t,e])=>{let n=hh.find(r=>r.effect===t);return V.board.find(r=>r.effect===t)?`<div class="pin-row mine"><img src="${Xt(e.medal)}" alt=""><b>${e.name}</b><span>${On(V.name)} (you)</span></div>`:n?`<div class="pin-row"><img src="${Xt(e.medal)}" alt=""><b>${e.name}</b><span>${On(n.who)}, ${n.when}</span></div>`:`<div class="pin-row open"><img src="${Xt("m_q")}" alt=""><b>Undiscovered</b><span>First finder gets their name here</span></div>`}).join("");mi("board-card",`<p class="book-sub">First discoveries in Mossbrook</p><div class="pins">${i}</div><p class="demo-note">Demo: other names are simulated townsfolk.</p>`,{title:"Discovery board",onClose:()=>Vn("board")})}function Mf(i,t,e){return`
    <div class="shop-top">
      <div class="keeper"><img src="${Xt(i)}" alt=""></div>
      <div class="shop-talk"><div class="ribbon sm"><span>${On(t)}</span></div><div class="speech"><p>${e}</p></div></div>
    </div>
    <div class="counter"></div>
    <div class="buybar"></div>
    <div class="bag-row"><button class="arrow l" aria-label="Previous"></button><div class="bag-strip"></div><button class="arrow r" aria-label="Next"></button><i class="badge hidden"></i></div>`}function bf(i,t,e,n){let s=0,r=6,a=()=>{let o=Ch(t).map(h=>({...h,sel:h.k===n})),l=Math.max(1,Math.ceil(o.length/r));s=Math.min(s,l-1),i.querySelector(".bag-strip").innerHTML=_f(o.slice(s*r,s*r+r),{empty:r,cls:e?"pick":""}),i.querySelector(".bag-row .arrow.l").classList.toggle("off",s===0),i.querySelector(".bag-row .arrow.r").classList.toggle("off",s>=l-1);let c=i.querySelector(".bag-row .badge");c.textContent=o.reduce((h,d)=>h+d.n,0),c.classList.toggle("hidden",!o.length),e&&i.querySelectorAll(".bag-strip .slot[data-k]").forEach(h=>h.addEventListener("click",()=>{n=h.dataset.k,e(h.dataset.k,h),a()}))};return i.querySelector(".bag-row .arrow.l").addEventListener("click",()=>{s>0&&(s--,rt.click(),a())}),i.querySelector(".bag-row .arrow.r").addEventListener("click",()=>{s++,rt.click(),a()}),a(),{draw:a,setSel:o=>{n=o,a()}}}function cv(){let i=Math.floor(Me()/36e5);V.boughtHour!==i&&(V.bought={},V.boughtHour=i)}function hv(i){cv();let t=H_[i],e=t.stall;an[i].hop(),rt.blip("h",Wi[i]);let s=mi("shop-card",Mf(t.sprite,t.name,On(e.line))),r=null,a=s.querySelector(".speech p"),o=h=>h.stock-(V.bought[`${i}:${h.ing}`]||0),l=()=>{s.querySelector(".counter").innerHTML=[0,1,2,3].map(M=>{let m=e.items[M];if(!m)return'<div class="ctile blank"></div>';let f=o(m);return`<button class="ctile ${r===M?"sel":""} ${f?"":"sold"}" data-i="${M}"><img src="${Xt(Be[m.ing].icon)}" alt=""><span class="price"><b>${m.price}</b></span><i class="stock">${f?"x"+f:"Sold out"}</i></button>`}).join(""),s.querySelectorAll(".ctile[data-i]").forEach(M=>M.addEventListener("click",()=>{r=+M.dataset.i,rt.click(),l()}));let h=s.querySelector(".buybar");if(r==null){h.innerHTML="<p>Tap an item on the counter</p>";return}let d=e.items[r],u=Be[d.ing],p=o(d),g=p>0&&V.coins>=d.price;h.innerHTML=`<p><b>${u.name}</b> ${p?`${p} left`:"sold out"}${V.coins<d.price&&p?". Not enough coins":""}</p><button class="btn-green buy" ${g?"":"disabled"}><span>Buy for ${d.price}</span></button>`,h.querySelector(".buy").addEventListener("click",M=>{if(!g)return;V.coins-=d.price,Kr(V.coins,!0),V.bought[`${i}:${d.ing}`]=(V.bought[`${i}:${d.ing}`]||0)+1;let m=M.currentTarget.getBoundingClientRect();rt.coin(0),rt.pop(),$e(10),ia(d.ing,1,{x:m.left+m.width/2,y:m.top}),a.textContent=["Thank you kindly!","Pleasure doing business!","Come back soon!"][Math.floor(Math.random()*3)],Bn(s.querySelector(".keeper img")),ge(!0),d.ing==="mush"&&Vn("buy"),l(),c.draw()})},c=bf(s,"herbs");l()}function uv(){let i=mi("shop-card mine",Mf("cat","Kuro","Mrrp. Leave potions on the counter and I will sell them, even while you sleep.")),t=null,e=0,n=()=>{let a=V.stall.items;i.querySelector(".counter").innerHTML=[0,1,2,3].map(o=>{let l=a[o];if(!l)return'<div class="ctile blank"><span class="plus">+</span></div>';let[c,h]=En(l.key);return`<div class="ctile listed"><img src="${Xt($t[c].potion)}" alt=""><i class="tdot t${h}"></i><span class="price"><b>${l.price}</b></span><i class="stock">sells in ${ds(l.sellAt-Me())}</i></div>`}).join("")},s=()=>{let a=V.stall.items;n();let o=i.querySelector(".buybar");if(!t){o.innerHTML=`<p>${a.length>=4?"The counter is full":Ch("potions").length?"Tap a potion in your bag to put it on the counter":"No potions to sell. Brew some at the cauldron"}</p>`;return}let[l,c]=En(t),h=Sh(l,c);o.innerHTML=`<img class="bb-icon" src="${Xt($t[l].potion)}" alt=""><p><b>${$t[l].short}</b> ${bl(c)}</p>
      <div class="pricer"><button class="arrow l sm" aria-label="Lower"></button><span class="price"><b>${e}</b></span><button class="arrow r sm" aria-label="Higher"></button></div>
      <p class="hint">${e>h*1.15?"Pricey. It will take longer to sell":e<h*.9?"A bargain. It will go fast":"A fair price"}</p>
      <button class="btn-green list" ${a.length>=4?"disabled":""}><span>Put on counter</span></button>`,o.querySelector(".arrow.l").addEventListener("click",()=>{e=Math.max(5,e-5),rt.click(),s()}),o.querySelector(".arrow.r").addEventListener("click",()=>{e+=5,rt.click(),s()}),o.querySelector(".list").addEventListener("click",()=>{let d=V.stall.items;if(d.length>=4||!(V.potions[t]>0))return;V.potions[t]--;let u=ke()==="stall",p=(u?25+Math.random()*15:60+Math.random()*90)*(e/h)**2;d.push({key:t,price:e,sellAt:Me()+p*1e3}),V.stall.open=!0,Ee.moveToStall(!0),rt.pop(),$e(8),Bn(i.querySelector(".keeper img")),i.querySelector(".speech p").textContent=u?"Meow! Someone will come by soon. Go on, I have got this.":"On the counter it goes.",V.potions[t]<=0&&(t=null),ge(!0),Vn("stall"),s(),r.draw()})},r=bf(i,"potions",a=>{t=a;let[o,l]=En(a);e=Sh(o,l),rt.click(),s()});s(),i._tick=n}function Sf(){let i=V.settings,t=mi("set-card",`
    <div class="set-rows">
      <div class="row"><span>Sound</span><button class="toggle ${i.sound?"on":""}" data-k="sound"></button></div>
      <div class="row"><span>Music</span><button class="toggle ${i.music?"on":""}" data-k="music"></button></div>
      <div class="row"><span>Time of day</span><input type="range" min="-1" max="23" step="1" value="${i.tod<0?-1:Math.floor(i.tod)}"><b class="tod"></b></div>
      <div class="row"><span>Skip ahead</span><button class="btn-pill skip"><span>+10 minutes</span></button></div>
      <div class="row"><span>Start over</span><button class="btn-pill reset"><span>Reset save</span></button></div>
    </div>
    <p class="demo-note">Vertical slice demo. Townsfolk, stall buyers and the other names on the board are simulated. Time follows your real clock; skipping ahead moves the game clock only.</p>`,{title:"Menu"}),e=()=>{t.querySelector(".tod").textContent=i.tod<0?"Real clock":Mh(i.tod)};e(),t.querySelectorAll(".toggle").forEach(s=>s.addEventListener("click",()=>{i[s.dataset.k]=!i[s.dataset.k],s.classList.toggle("on",i[s.dataset.k]),cl(),rt.click(),ge(!0)})),t.querySelector("input").addEventListener("input",s=>{i.tod=+s.target.value,e(),Rh(!0),ge(!0)}),t.querySelector(".skip").addEventListener("click",s=>{V.offsetMs=(V.offsetMs||0)+6e5,rt.quest(),Bn(s.currentTarget),us("Ten minutes pass in a blink","star"),ge(!0)});let n=t.querySelector(".reset");n.addEventListener("click",()=>{if(!n.classList.contains("confirm")){n.classList.add("confirm"),n.querySelector("span").textContent="Tap again to erase",rt.click();return}Nd(),location.reload()})}function dv(i,t){if(!i.length)return;mi("away-card",`<p class="book-sub">You were away for ${lf(t)}</p><div class="away">${i.map(([n,s])=>`<div class="away-row"><img src="${Xt(n)}" alt=""><span>${s}</span></div>`).join("")}</div><button class="btn-green ok"><span>Lovely</span></button>`,{title:"While you were away"}).querySelector(".ok").addEventListener("click",()=>hs())}function hf(){rf();let i=ke(),t={};if(i==="brew"||Qt&&V.cust.asked&&!Qt.moving){let e=Qt?Qt.def:js[0];t.ask={name:e.name,line:i==="brew"?"Something to help me sleep, please.":`A ${$t[e.want].name}, please.`},t.target=e.want}i==="mystery"&&(t.target="luck",t.ask={name:"Kuro",line:"Mrrp. Blue Mushroom drifts north. Something glows up there."}),vt.frozen=!0,ta(!0).then(()=>{document.body.classList.add("brewing"),cn.open(t),ta(!1)})}function fv(i,t,e,n){let s=$t[i],r=X_(i,t);V.potions[r]=(V.potions[r]||0)+3,V.newCount=(V.newCount||0)+3;let a=!V.discovered[i];(a||t<V.discovered[i].tier)&&(V.discovered[i]={tier:t,at:Me()},V.recipes[i]={ings:e,tier:t});let o=hh.find(h=>h.effect===i),l=a&&!o&&!V.board.some(h=>h.effect===i);l&&V.board.push({effect:i,at:Me()}),ge(),setTimeout(()=>{let h=n.getBoundingClientRect();for(let d=0;d<3;d++)vl(s.potion,{x:h.left+h.width/2,y:h.top+h.height/2},Ut("#bBag"),{delay:d*120,size:60,onArrive:d===2?()=>ir(V.newCount):null})},650);let c=()=>{ke()==="brew"&&i==="sleep"?(Vn("brew"),setTimeout(()=>cn.close(),300)):ke()==="mystery"&&i==="luck"?(Vn("mystery"),setTimeout(()=>cn.close(),300)):ke()==="brew"&&cn.toast("Mr. Crow asked for a <b>Sleep Potion</b>. Keep exploring the fog","m_moon")};a?setTimeout(async()=>{lt.disc=!0,rt.discover(),await jr({medal:s.medal,potion:s.potion,title:l?"First in Mossbrook!":"New potion!",name:s.name,tier:{i:t,label:Qs[t]},first:l?"Nobody in town has brewed this before. Your name goes on the discovery board.":`${o.who} found it first. Now you know it too.`,ings:e.map(h=>Be[h].icon)}),lt.disc=!1,ff(l?2:1,null),c()},1100):(cn.toast(`+3 ${s.name} ${bl(t)}`,s.medal),c())}function pv(){vt.frozen=!1,document.body.classList.remove("brewing"),ir(V.newCount)}function wf(i=!1){let t=Me(),e=[];if(V.stall.items=V.stall.items.filter(n=>n.sellAt<=t?(e.push(n),!1):!0),e.length){let n=e.reduce((s,r)=>s+r.price,0);if(i)V.coins+=n;else{let s=Math.abs(vt.x-at.myStall[0])<11,r=s?si(at.myStall[0],1.6,at.myStall[1]):null;for(let a of e){let[o]=En(a.key);us(`Kuro sold a <b>${$t[o].name}</b> for ${a.price}`,"coin")}pf(n,r),s&&(Ee.hop(),rt.meow(),zt.sparkle(at.myStall[0],1.5,at.myStall[1],14,"#fff2a8"))}V.stall.items.length||(V.stall.open=!1),ge(!0)}return!V.stall.items.length&&Ee.atStall&&Ee.moveToStall(!1),!i&&ke()==="free"&&!Qt&&!V.cust.here&&t>=V.cust.nextAt&&na(!0),{sold:e,total:e.reduce((n,s)=>n+s.price,0)}}function Rh(i){let t=af();zt.setLight(t),Jd(Mh(),of(),t.night);let e=Math.hypot(vt.x-at.fountain[0],vt.z-at.fountain[1]);Gd(t.night,Math.max(0,1-e/14))}function mv(i){for(let t of tn.occluders){let e=t.z-vt.z,s=e>.05&&e<t.h*1.52&&Math.abs(vt.x-t.x)<t.w*.36?.3:1;t.alpha!==s&&(t.alpha=Math.abs(t.alpha-s)<.01?s:t.alpha+(s-t.alpha)*Math.min(1,i*8))}}function gv(i){if(lt.chatT-=i,lt.chatT<=0&&vt.x>pi-2){lt.chatT=2.5+Math.random()*3;let t=["mira","juniper","oz","pip","wren"].filter(s=>!an[s].busy),e=t[Math.floor(Math.random()*t.length)],n=ch[Math.floor(Math.random()*ch.length)];fs.remove("c-"+e),fs.get("c-"+e,"chat",`<div class="tin"><p>${On(n)}</p></div>`),lt.chats=lt.chats||{},lt.chats[e]=3.6,an[e].talking=1.2,rt.blip("o",(Wi[e]||1)*1.3)}if(lt.chats)for(let t of Object.keys(lt.chats)){if(lt.chats[t]-=i,lt.chats[t]<=0||an[t].busy){fs.remove("c-"+t),delete lt.chats[t];continue}let e=Pe(an[t].spr,.75);fs.place("c-"+t,e[0],e[1],e[2],lt.started&&!cn.isOpen&&!yl())}}function xv(){let i=vt.x>pi+1?"town":vt.x<is-.5?"forest":vt.x<11&&vt.x>is+1?"home":lt.where;i==="town"&&ke()==="town"&&V.seenTown&&Vn("town"),i!==lt.where&&(lt.where=i,i==="town"?V.seenTown?kn("Mossbrook Square","",{ms:1600,kind:"loc"}):(V.seenTown=!0,kn("Mossbrook Square","Demo: townsfolk and buyers are simulated",{ms:3400}),Vn("town"),ge(!0)):i==="forest"?V.seenWood?kn("Whisperwood","",{ms:1600,kind:"loc"}):(V.seenWood=!0,kn("Whisperwood","Wild berries and bugs. They come back on the real clock",{ms:3400}),ge(!0)):kn("Hazel Cottage","",{ms:1600,kind:"loc"}),i==="home"&&Qt&&_l(null))}var Eh=performance.now();function Tf(i){requestAnimationFrame(Tf);let t=Math.min(.05,(i-Eh)/1e3);Eh=i,lt.t+=t;let e=sf();if(vt.frozen=ps(),cn.isOpen)cn.update(t),Qr(null),vh(zt,null);else{vt.update(t,e),Ee.update(t),Qt&&Qt.update(t);for(let n of Object.keys(an))an[n].update(t);Wd(an,t),xn.update(t,lt.t),ii.update(t,lt.t);for(let n of tn.tick)n(t,lt.t);if(lt.started?lt.focus?zt.follow(lt.focus[0],lt.focus[1]+.6,t):zt.follow(vt.x,vt.z+.5,t,[vt.vx*.32,vt.vz*.18],[-35,45]):(zt.target.x=3+Math.sin(lt.t*.08)*4,zt.target.z=.8,zt.distGoal=df,zt.follow(zt.target.x,zt.target.z,t)),mv(t),zt.update(t,lt.t),zt.render(),lt.started){xf(),gv(t),vh(zt,ps()||lt.target?null:Z_()),xv();let[n,s]=$_();Kd(n,s)}}if(lt.secT-=t,lt.secT<=0&&(lt.secT=1,Rh(),lt.started&&(wf(),Ml()))){let n=Ut("#panel .shop-card.mine");n&&n._tick&&n._tick()}lt.saveT-=t,lt.quiet>0&&(lt.quiet-=t),lt.saveT<=0&&lt.started&&(lt.saveT=5,V.pos=[+vt.x.toFixed(2),+vt.z.toFixed(2)],V.lastSeen=Me(),ge()),!lt.lowQ&&lt.started&&(lt.fps.push(t),lt.fps.length>180&&lt.fps.shift(),lt.fps.length===180&&lt.fps.reduce((s,r)=>s+r,0)/180>1/38&&(lt.lowQ=!0,zt.quality=0,zt.resize()))}function _v(i,t){if(lt.started){if(lt.disc){t&&["Enter","Space","KeyE"].includes(i)&&jr.close&&jr.close();return}if(cn.isOpen){cn.key(i,t);return}if(yl()){t&&ef(i);return}if(Ml()){t&&(i==="Escape"||i==="KeyB"&&Ut("#panel .bag-card"))&&hs();return}t&&(i==="KeyE"||i==="Space"||i==="Enter"?Th():i==="KeyB"||i==="KeyI"?(rt.click(),vf()):i==="KeyR"?(rt.click(),yf()):i==="Escape"&&(rt.click(),Sf()))}}async function vv(){let i=Ut("#loading .load-bar i");await Td(e=>{i.style.width=Math.round(e*100)+"%"});try{await document.fonts.load("700 20px Mali")}catch{}zt=new nl(Ut("#world")),tn=Ld(zt),xn=new dl(zt),ii=new al(zt,tn),Ee=new ul(zt),an=Hd(zt,lh);let t=V.name&&V.pos?V.pos:at.start;vt=new hl(zt,tn,t[0],t[1]),fs=new xl(zt),cn=new ml(Ut("#brewRoot"),{onBottle:fv,onClose:pv,onInv:()=>{}}),Qd(()=>cn.isOpen||lt.disc),V.stall.items.length&&Ee.moveToStall(!0),ke()!=="letter"&&tn.props.mailbox.set("mailbox_empty"),zt.snap(3,.8),zt.dist=df,Rh(),nf({onAct:Th,onKey:_v}),window.addEventListener("resize",()=>zt.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&lt.started&&(V.lastSeen=Me(),V.pos=[vt.x,vt.z],ge())}),Ut("#hud .hud-tr #bBag").addEventListener("click",()=>{ps()||(rt.click(),vf())}),Ut("#bBook").addEventListener("click",()=>{ps()||(rt.click(),yf())}),Ut("#bSet").addEventListener("click",()=>{ps()||(rt.click(),Sf())}),requestAnimationFrame(e=>{Eh=e,Tf(e)}),Ut("#loading").classList.add("done"),setTimeout(()=>Ut("#loading").remove(),600),yv(),location.hash==="#test"&&(window.__slice={G:lt,save:V,world:zt,get witch(){return vt},get cust(){return Qt},brew:cn,garden:xn,wild:ii,cat:Ee,folk:an,act:Th,targets:gf,pickTarget:xf,tp(e,n){vt.spr.mesh.position.x=e,vt.spr.mesh.position.z=n}})}function yv(){let i=Ut("#title");i.classList.remove("hidden");let t=i.querySelector(".title-main"),e=i.querySelector(".title-new"),n=Ut("#bStart");n.querySelector("span").textContent=V.name?`Continue as ${V.name}`:"Start";let s=()=>{Vd(),cl(),rt.click()};n.addEventListener("click",()=>{if(s(),V.name){uf(!1);return}t.classList.add("hidden"),e.classList.remove("hidden");let a=Ut("#nameIn");setTimeout(()=>a.focus(),50)});let r=()=>{let a=Ut("#nameIn").value.trim().replace(/[<>]/g,"").slice(0,12);if(!a){Bn(Ut("#nameIn")),rt.click();return}V.name=a,ge(),rt.quest(),uf(!0)};Ut("#bBegin").addEventListener("click",r),Ut("#nameIn").addEventListener("keydown",a=>{a.key==="Enter"&&r()})}async function uf(i){await ta(!0),Ut("#title").classList.add("hidden"),Ut("#hud").classList.remove("hidden"),Jr&&Ut("#touch").classList.remove("hidden"),lt.started=!0,zt.distGoal=ea,zt.dist=ea,zt.snap(vt.x,vt.z+.5);let t=Me()-(V.lastSeen||Me()),e=wf(!0);if(Kr(V.coins),_h(wh(),V.fame%3/3),ir(V.newCount||0),lt.where=vt.x>pi+1?"town":vt.x<is?"forest":"home",V.cust.here||ke()==="deliver"?na(!1):ke()==="talk"?na(!0):ke()==="free"&&Me()>=V.cust.nextAt&&na(!1),V.stall.items.length&&Ee.moveToStall(!0),await ta(!1),i)kn("Hazel Cottage",`Welcome home, ${On(V.name)}`,{ms:3e3}),setTimeout(async()=>{Ee.hop(),rt.meow();let n=at.mailbox[0]+1.5,s=at.mailbox[1]+.7;vt.walkTo(n,s,Ee.x,2.4),lt.focus=[(Ee.x+n)/2,(Ee.z+s)/2],zt.distGoal=Ah,await Gi("Kuro","Mrrow. (Kuro paws at the mailbox. A letter is sticking out.)",[],{pitch:Wi.kuro}),lt.focus=null,zt.distGoal=ea},1400);else{let n=()=>kn(vt.x>pi?"Mossbrook Square":vt.x<is?"Whisperwood":"Hazel Cottage",`Welcome back, ${On(V.name)}`,{ms:2400}),s=[],r=xn.readyCount();t>6e4&&(r&&s.push([$r[V.plots.find((a,o)=>xn.state(o).ready).crop].sprite[2],`${r} plant${r>1?"s are":" is"} ready to pick`]),e.sold.length&&s.push(["coin",`Kuro sold ${e.sold.length} potion${e.sold.length>1?"s":""} for ${e.total} coins`]),Qt&&s.push([Qt.def.sprite,`${Qt.def.name} is waiting at your door`])),s.length?setTimeout(()=>{dv(s,t),n()},700):n()}}vv().catch(i=>{console.error(i);let t=Ut("#loading p");t&&(t.textContent="Something went wrong while loading. Please reload.")});
