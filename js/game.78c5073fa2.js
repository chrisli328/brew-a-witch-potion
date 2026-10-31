var Nu=0,Mc=1,Uu=2;var Yr=1,Fu=2,tr=3,$i=0,un=1,Pn=2,ci=0,Yi=1,Zi=2,Sc=3,wc=4,Ou=5;var ps=100,ku=101,Bu=102,zu=103,Vu=104,Gu=200,Hu=201,Wu=202,Xu=203,Tc=204,Ec=205,qu=206,$u=207,Yu=208,Zu=209,Ju=210,Ku=211,ju=212,Qu=213,td=214,Ya=0,Za=1,Ja=2,Ys=3,Ka=4,ja=5,Qa=6,to=7,Ac=0,ed=1,nd=2,Xn=0,Cc=1,Rc=2,Ic=3,Pc=4,Lc=5,Dc=6,Nc=7;var Uc=300,Ji=301,ms=302,Eo=303,Ao=304,Zr=306,ds=1e3,ii=1001,eo=1002,Je=1003,id=1004;var Jr=1005;var We=1006,Co=1007;var Ki=1008;var Mn=1009,Fc=1010,Oc=1011,er=1012,Ro=1013,qn=1014,$n=1015,Yn=1016,Io=1017,Po=1018,nr=1020,kc=35902,Bc=35899,zc=1021,Vc=1022,Ln=1023,si=1026,ji=1027,Gc=1028,Lo=1029,Qi=1030,Do=1031;var No=1033,Kr=33776,jr=33777,Qr=33778,ta=33779,Uo=35840,Fo=35841,Oo=35842,ko=35843,Bo=36196,zo=37492,Vo=37496,Go=37488,Ho=37489,ea=37490,Wo=37491,Xo=37808,qo=37809,$o=37810,Yo=37811,Zo=37812,Jo=37813,Ko=37814,jo=37815,Qo=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,al=36494,ol=36495,ll=36283,cl=36284,na=36285,hl=36286;var Ir=2300,no=2301,qa=2302,mc=2303,gc=2400,xc=2401,_c=2402;var sd=3200;var Hc=0,rd=1,wi="",Ge="srgb",Pr="srgb-linear",Lr="linear",ue="srgb";var $a=7680;var ad=519,od=512,ld=513,cd=514,ul=515,hd=516,ud=517,dl=518,dd=519,fd=35044;var Wc="300 es",Wn=2e3,Dr=2001;function yp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=Nr("canvas");return i.style.display="block",i}var du={},Zs=null;function Xc(...i){let t="THREE."+i.shift();Zs?Zs("log",t,...i):console.log(t,...i)}function md(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=md(i);let t="THREE."+i.shift();if(Zs)Zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=md(i);let t="THREE."+i.shift();if(Zs)Zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function us(...i){let t=i.join(" ");t in du||(du[t]=!0,Vt(...i))}function gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xd={[Ya]:Za,[Ja]:Qa,[Ka]:to,[Ys]:ja,[Za]:Ya,[Qa]:Ja,[to]:Ka,[ja]:Ys},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,Cr=Math.PI/180,Js=180/Math.PI;function ir(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function qc(i,t){return(i%t+t)%t}function Mp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sp(i,t,e){return i!==t?(e-i)/(t-i):0}function Rr(i,t,e){return(1-e)*i+e*t}function wp(i,t,e,n){return Rr(i,t,1-Math.exp(-e*n))}function Tp(i,t=1){return t-Math.abs(qc(i,t*2)-t)}function Ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rp(i,t){return i+Math.random()*(t-i)}function Ip(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(fu=i);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lp(i){return i*Cr}function Dp(i){return i*Js}function Np(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Op(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $c={DEG2RAD:Cr,RAD2DEG:Js,generateUUID:ir,clamp:ie,euclideanModulo:qc,mapLinear:Mp,inverseLerp:Sp,lerp:Rr,damp:wp,pingpong:Tp,smoothstep:Ep,smootherstep:Ap,randInt:Cp,randFloat:Rp,randFloatSpread:Ip,seededRandom:Pp,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Np,ceilPowerOfTwo:Up,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Op,normalize:hn,denormalize:qs},jc=class jc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;var ae=jc,ai=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==m||h!==g){let p=l*u+c*m+h*g+f*x;p<0&&(u=-u,m=-m,g=-g,x=-x,p=-p);let d=1-o;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);d=Math.sin(d*M)/R,o=Math.sin(o*M)/R,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,f=f*d+x*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,f=f*d+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*m-c*u,t[e+1]=l*g+h*u+c*f-o*m,t[e+2]=c*g+h*m+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"YZX":this._x=u*h*f+c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f-u*m*g;break;case"XZY":this._x=u*h*f-c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f+u*m*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qc=class Qc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qc.prototype.isVector3=!0;var Z=Qc,Zl=new Z,pu=new ai,th=class th{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],x=s[0],p=s[3],d=s[6],M=s[1],R=s[4],b=s[7],S=s[2],w=s[5],I=s[8];return r[0]=a*x+o*M+l*S,r[3]=a*p+o*R+l*w,r[6]=a*d+o*b+l*I,r[1]=c*x+h*M+f*S,r[4]=c*p+h*R+f*w,r[7]=c*d+h*b+f*I,r[2]=u*x+m*M+g*S,r[5]=u*p+m*R+g*w,r[8]=u*d+m*b+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*f+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};th.prototype.isMatrix3=!0;var Xt=th,Jl=new Xt,mu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){let i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var ne=kp();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Nr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var zp=0,jl=new Z,Ke=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ii,s=ii,r=We,a=Ki,o=Ln,l=Mn,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ir(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Uc;Ke.DEFAULT_ANISOTROPY=1;var eh=class eh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(m+1)/2,S=(d+1)/2,w=(h+u)/4,I=(f+x)/4,v=(g+p)/4;return R>b&&R>S?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=I/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=I/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eh.prototype.isVector4=!0;var Ee=eh,so=class extends ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends so{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var To=class To{constructor(t,e,n,s,r,a,o,l,c,h,f,u,m,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,m,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,m,g,x,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new To().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),a=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*f,g=c*h,x=c*f;e[0]=u+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*f,g=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Gp)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ni.crossVectors(n,gn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ni.crossVectors(n,gn)),Ni.normalize(),Ta.crossVectors(gn,Ni),s[0]=Ni.x,s[4]=Ta.x,s[8]=gn.x,s[1]=Ni.y,s[5]=Ta.y,s[9]=gn.y,s[2]=Ni.z,s[6]=Ta.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],x=n[6],p=n[10],d=n[14],M=n[3],R=n[7],b=n[11],S=n[15],w=s[0],I=s[4],v=s[8],E=s[12],L=s[1],F=s[5],D=s[9],N=s[13],A=s[2],k=s[6],$=s[10],Y=s[14],st=s[3],K=s[7],nt=s[11],ot=s[15];return r[0]=a*w+o*L+l*A+c*st,r[4]=a*I+o*F+l*k+c*K,r[8]=a*v+o*D+l*$+c*nt,r[12]=a*E+o*N+l*Y+c*ot,r[1]=h*w+f*L+u*A+m*st,r[5]=h*I+f*F+u*k+m*K,r[9]=h*v+f*D+u*$+m*nt,r[13]=h*E+f*N+u*Y+m*ot,r[2]=g*w+x*L+p*A+d*st,r[6]=g*I+x*F+p*k+d*K,r[10]=g*v+x*D+p*$+d*nt,r[14]=g*E+x*N+p*Y+d*ot,r[3]=M*w+R*L+b*A+S*st,r[7]=M*I+R*F+b*k+S*K,r[11]=M*v+R*D+b*$+S*nt,r[15]=M*E+R*N+b*Y+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],m=t[14],g=t[3],x=t[7],p=t[11],d=t[15],M=l*m-c*u,R=o*m-c*f,b=o*u-l*f,S=a*m-c*h,w=a*u-l*h,I=a*f-o*h;return e*(x*M-p*R+d*b)-n*(g*M-p*S+d*w)+s*(g*R-x*S+d*I)-r*(g*b-x*w+p*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],m=t[11],g=t[12],x=t[13],p=t[14],d=t[15],M=e*o-n*a,R=e*l-s*a,b=e*c-r*a,S=n*l-s*o,w=n*c-r*o,I=s*c-r*l,v=h*x-f*g,E=h*p-u*g,L=h*d-m*g,F=f*p-u*x,D=f*d-m*x,N=u*d-m*p,A=M*N-R*D+b*F+S*L-w*E+I*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/A;return t[0]=(o*N-l*D+c*F)*k,t[1]=(s*D-n*N-r*F)*k,t[2]=(x*I-p*w+d*S)*k,t[3]=(u*w-f*I-m*S)*k,t[4]=(l*L-a*N-c*E)*k,t[5]=(e*N-s*L+r*E)*k,t[6]=(p*b-g*I-d*R)*k,t[7]=(h*I-u*b+m*R)*k,t[8]=(a*D-o*L+c*v)*k,t[9]=(n*L-e*D-r*v)*k,t[10]=(g*w-x*b+d*M)*k,t[11]=(f*b-h*w-m*M)*k,t[12]=(o*E-a*F-l*v)*k,t[13]=(e*F-n*E+s*v)*k,t[14]=(x*R-g*S-p*M)*k,t[15]=(h*S-f*R+u*M)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,m=r*h,g=r*f,x=a*h,p=a*f,d=o*f,M=l*c,R=l*h,b=l*f,S=n.x,w=n.y,I=n.z;return s[0]=(1-(x+d))*S,s[1]=(m+b)*S,s[2]=(g-R)*S,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(u+d))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(g+R)*I,s[9]=(p-M)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,h=1/o,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Wn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Wn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};To.prototype.isMatrix4=!0;var Le=To,Ns=new Z,zn=new Le,Vp=new Z(0,0,0),Gp=new Z(1,1,1),Ni=new Z,Ta=new Z,gn=new Z,xu=new Le,_u=new ai,zi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hp=0,vu=new Z,Us=new ai,xi=new Le,Ea=new Z,wr=new Z,Wp=new Z,Xp=new ai,yu=new Z(1,0,0),bu=new Z(0,1,0),Mu=new Z(0,0,1),Su={type:"added"},qp={type:"removed"},Fs={type:"childadded",child:null},Ql={type:"childremoved",child:null},_n=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new zi,n=new ai,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Xt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(wr,Ea,this.up):xi.lookAt(Ea,wr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(xi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new Z(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},$p={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=qc(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=tc(a,r,t+1/3),this.g=tc(a,r,t),this.b=tc(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ne.workingToColorSpace(rn.copy(this),t),Math.round(ie(rn.r*255,0,255))*65536+Math.round(ie(rn.g*255,0,255))*256+Math.round(ie(rn.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ge){ne.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Aa);let n=Rr(Ui.h,Aa.h,e),s=Rr(Ui.s,Aa.s,e),r=Rr(Ui.l,Aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Yt;Yt.NAMES=_d;var Or=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new Z,_i=new Z,ec=new Z,vi=new Z,Os=new Z,ks=new Z,wu=new Z,nc=new Z,ic=new Z,sc=new Z,rc=new Ee,ac=new Ee,oc=new Ee,Bi=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),_i.subVectors(n,e),ec.subVectors(t,e);let a=Vn.dot(Vn),o=Vn.dot(_i),l=Vn.dot(ec),c=_i.dot(_i),h=_i.dot(ec),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return rc.setScalar(0),ac.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),oc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(rc,r.x),a.addScaledVector(ac,r.y),a.addScaledVector(oc,r.z),a}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),_i.subVectors(t,e),Vn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),ks.subVectors(r,n),nc.subVectors(t,n);let l=Os.dot(nc),c=ks.dot(nc);if(l<=0&&c<=0)return e.copy(n);ic.subVectors(t,s);let h=Os.dot(ic),f=ks.dot(ic);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Os,a);sc.subVectors(t,r);let m=Os.dot(sc),g=ks.dot(sc);if(g>=0&&m<=g)return e.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ks,o);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return wu.subVectors(r,s),o=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(wu,o);let d=1/(p+x+u);return a=x*d,o=u*d,e.copy(n).addScaledVector(Os,a).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Ra.subVectors(this.max,Tr),Bs.subVectors(t.a,Tr),zs.subVectors(t.b,Tr),Vs.subVectors(t.c,Tr),Fi.subVectors(zs,Bs),Oi.subVectors(Vs,zs),os.subVectors(Bs,Vs);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!lc(e,Bs,zs,Vs,Ra)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,Bs,zs,Vs,Ra))?!1:(Ia.crossVectors(Fi,Oi),e=[Ia.x,Ia.y,Ia.z],lc(e,Bs,zs,Vs,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Gn=new Z,Ca=new Vi,Bs=new Z,zs=new Z,Vs=new Z,Fi=new Z,Oi=new Z,os=new Z,Tr=new Z,Ra=new Z,Ia=new Z,ls=new Z;function lc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ve=new Z,Pa=new ae,Yp=0,tn=class extends ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fd,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Br=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var In=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zp=new Vi,Er=new Z,cc=new Z,fs=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(cc)),this.expandByPoint(Er.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jp=0,Rn=new Le,hc=new _n,Gs=new Z,xn=new Vi,Ar=new Vi,Ze=new Z,vn=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yp(t)?Br:kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new In(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(xn.min,Ar.min),xn.expandByPoint(Ze),Ze.addVectors(xn.max,Ar.max),xn.expandByPoint(Ze)):(xn.expandByPoint(Ar.min),xn.expandByPoint(Ar.max))}xn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(t,c),Ze.add(Gs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new Z,l[v]=new Z;let c=new Z,h=new Z,f=new Z,u=new ae,m=new ae,g=new ae,x=new Z,p=new Z;function d(v,E,L){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,L),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,L),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(F),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(F),o[v].add(x),o[E].add(x),o[L].add(x),l[v].add(p),l[E].add(p),l[L].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,E=M.length;v<E;++v){let L=M[v],F=L.start,D=L.count;for(let N=F,A=F+D;N<A;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let R=new Z,b=new Z,S=new Z,w=new Z;function I(v){S.fromBufferAttribute(s,v),w.copy(S);let E=o[v];R.copy(E),R.sub(S.multiplyScalar(S.dot(E))).normalize(),b.crossVectors(w,E);let F=b.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,F)}for(let v=0,E=M.length;v<E;++v){let L=M[v],F=L.start,D=L.count;for(let N=F,A=F+D;N<A;N+=3)I(t.getX(N+0)),I(t.getX(N+1)),I(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,h=new Z,f=new Z;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new tn(u,h,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uc=new Z,Kp=new Z,jp=new Xt,Hn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=uc.subVectors(n,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jp.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qp=0,Gi=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Yi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ec,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var bi=new Z,dc=new Z,La=new Z,Da=new Z,zr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dc.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),Da.copy(this.origin).sub(dc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(La),o=Da.dot(this.direction),l=-Da.dot(La),c=Da.lengthSq(),h=Math.abs(1-a*a),f,u,m,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(La,u),m}intersectSphere(t,e){if(t.radius<0)return null;bi.subVectors(t.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,d=n.x-a.x,M=n.y-a.y,R=n.z-a.z,b=Math.abs(l),S=Math.abs(c),w=Math.abs(h),I,v,E,L,F,D,N,A,k,$,Y,st;if(b>=S&&b>=w?(E=l,D=f,k=g,st=d,l>=0?(I=c,v=h,L=u,F=m,N=x,A=p,$=M,Y=R):(I=h,v=c,L=m,F=u,N=p,A=x,$=R,Y=M)):S>=w?(E=c,D=u,k=x,st=M,c>=0?(I=h,v=l,L=m,F=f,N=p,A=g,$=R,Y=d):(I=l,v=h,L=f,F=m,N=g,A=p,$=d,Y=R)):(E=h,D=m,k=p,st=R,h>=0?(I=l,v=c,L=f,F=u,N=g,A=x,$=d,Y=M):(I=c,v=l,L=u,F=f,N=x,A=g,$=M,Y=d)),E===0)return null;let K=I/E,nt=v/E,ot=1/E,It=L-K*D,T=F-nt*D,O=N-K*k,z=A-nt*k,j=$-K*st,P=Y-nt*st,W=j*z-P*O,Q=It*P-T*j,ft=O*T-z*It;if(s){if(W<0||Q<0||ft<0)return null}else if((W<0||Q<0||ft<0)&&(W>0||Q>0||ft>0))return null;let dt=W+Q+ft;if(dt===0)return null;let Bt=ot*(W*D+Q*k+ft*st);return(dt>0?Bt<0:Bt>0)?null:this.at(Bt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tu=new Le,cs=new zr,Na=new fs,Eu=new Z,Ua=new Z,Fa=new Z,Oa=new Z,fc=new Z,ka=new Z,Au=new Z,Ba=new Z,He=class extends _n{constructor(t=new vn,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(fc.fromBufferAttribute(f,t),a?ka.addScaledVector(fc,h):ka.addScaledVector(fc.sub(e),h))}e.add(ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Na.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Na,Eu)===null||cs.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Tu.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],d=a[p.materialIndex],M=Math.max(p.start,m.start),R=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,S=R;b<S;b+=3){let w=o.getX(b),I=o.getX(b+1),v=o.getX(b+2);s=za(this,d,t,n,c,h,f,w,I,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let M=o.getX(p),R=o.getX(p+1),b=o.getX(p+2);s=za(this,a,t,n,c,h,f,M,R,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],d=a[p.materialIndex],M=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,S=R;b<S;b+=3){let w=b,I=b+1,v=b+2;s=za(this,d,t,n,c,h,f,w,I,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let M=p,R=p+1,b=p+2;s=za(this,a,t,n,c,h,f,M,R,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function tm(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$i,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ba);return c<e.near||c>e.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ua),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Oa);let h=tm(i,t,e,n,Ua,Fa,Oa,Au);if(h){let f=new Z;Bi.getBarycoord(Au,Ua,Fa,Oa,f),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,l,c,f,new ae)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,l,c,f,new ae)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,l,c,f,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Bi.getNormal(Ua,Fa,Oa,u.normal),h.face=u,h.barycoord=f}return h}var ao=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Je,h=Je,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=new fs,em=new ae(.5,.5),Va=new Z,Vr=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],m=r[7],g=r[8],x=r[9],p=r[10],d=r[11],M=r[12],R=r[13],b=r[14],S=r[15];if(s[0].setComponents(c-a,m-h,d-g,S-M).normalize(),s[1].setComponents(c+a,m+h,d+g,S+M).normalize(),s[2].setComponents(c+o,m+f,d+x,S+R).normalize(),s[3].setComponents(c-o,m-f,d-x,S-R).normalize(),n)s[4].setComponents(l,u,p,b).normalize(),s[5].setComponents(c-l,m-u,d-p,S-b).normalize();else if(s[4].setComponents(c-l,m-u,d-p,S-b).normalize(),e===Wn)s[5].setComponents(c+l,m+u,d+p,S+b).normalize();else if(e===Dr)s[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=em.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Va.x=s.normal.x>0?t.max.x:t.min.x,Va.y=s.normal.y>0?t.max.y:t.min.y,Va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oo=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cu=new Le,vc=new zr,Ga=new fs,Ha=new Z,Gr=class extends _n{constructor(t=new vn,e=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,t.ray.intersectsSphere(Ga)===!1)return;Cu.copy(s).invert(),vc.copy(t.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,x=m;g<x;g++){let p=c.getX(g);Ha.fromBufferAttribute(f,p),Ru(Ha,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,x=m;g<x;g++)Ha.fromBufferAttribute(f,g),Ru(Ha,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ru(i,t,e,n,s,r,a){let o=vc.distanceSqToPoint(i);if(o<e){let l=new Z;vc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Hr=class extends Ke{constructor(t=[],e=Ji,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends Ke{constructor(t,e,n=qn,s,r,a,o=Je,l=Je,c,h=si,f=1){if(h!==si&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lo=class extends Hi{constructor(t,e=qn,n=Ji,s,r,a=Je,o=Je,l,c=si){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wr=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qs=class i extends vn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(h,3)),this.setAttribute("uv",new In(f,2));function g(x,p,d,M,R,b,S,w,I,v,E){let L=b/I,F=S/v,D=b/2,N=S/2,A=w/2,k=I+1,$=v+1,Y=0,st=0,K=new Z;for(let nt=0;nt<$;nt++){let ot=nt*F-N;for(let It=0;It<k;It++){let T=It*L-D;K[x]=T*M,K[p]=ot*R,K[d]=A,c.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[d]=w>0?1:-1,h.push(K.x,K.y,K.z),f.push(It/I),f.push(1-nt/v),Y+=1}}for(let nt=0;nt<v;nt++)for(let ot=0;ot<I;ot++){let It=u+ot+k*nt,T=u+ot+k*(nt+1),O=u+(ot+1)+k*(nt+1),z=u+(ot+1)+k*nt;l.push(It,T,z),l.push(T,O,z),st+=6}o.addGroup(m,st,E),m+=st,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yn=class i extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let M=d*u-a;for(let R=0;R<c;R++){let b=R*f-r;g.push(b,-M,0),x.push(0,0,1),p.push(R/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let R=M+c*d,b=M+c*(d+1),S=M+1+c*(d+1),w=M+1+c*d;m.push(R,b,w),m.push(b,S,w)}this.setIndex(m),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Iu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Iu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function Iu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var vd={clone:gs,merge:on},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},co=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ho=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:r=t,o=2*e-n;break;case _c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,l=2*n-e;break;case _c:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,d=-u*p+2*u*x-u*g,M=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,R=(-1-m)*p+(1.5+m)*x+.5*g,b=m*p-m*x;for(let S=0;S!==o;++S)r[S]=d*a[h+S]+M*a[c+S]+R*a[l+S]+b*a[f+S];return r}},po=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},mo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},go=class extends Wi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],d=m*u+g*2,M=f[d],R=f[d+1],b=t*u+g*2,S=h[b],w=h[b+1],I=am(n,e,M,S,s);r[g]=yd(I,x,R,w,p)}return r}};function yd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function am(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=yd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=rm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),pc(t.settings)&&(n.settings={inTangents:Hs(t.settings.inTangents,Array),outTangents:Hs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case no:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;pc(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&bp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=no;var Xi=class extends bn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ir;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="color";var _o=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};_o.prototype.ValueTypeName="number";var vo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ai.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends bn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Ir;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="vector";var bo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new bo,Mo=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=new Z,Xa=new ai,ni=new Z,qr=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wa,Xa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wa,Xa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new Z,Lu=new ae,Du=new ae,an=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $r=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ws=-90,Xs=1,So=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Ws,Xs,t,e);s.layers=this.layers,this.add(s);let r=new an(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let a=new an(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let o=new an(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let l=new an(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new an(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wo=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zc="\\[\\]\\.:\\/",om=new RegExp("["+Zc+"]","g"),Jc="[^"+Zc+"]",lm="[^"+Zc.replace("\\.","")+"]",cm=/((?:WC+[\/:])*)/.source.replace("WC",Jc),hm=/(WCOD+)?/.source.replace("WCOD",lm),um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),fm=new RegExp("^"+cm+hm+um+dm+"$"),pm=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(om,"")}static parseTrackName(t){let e=fm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=yc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _y=new Float32Array(1);var nh=class nh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nh.prototype.isMatrix2=!0;var bc=nh;function Kc(i,t,e,n){let s=mm(n);switch(e){case zc:return i*t;case Gc:return i*t/s.components*s.byteLength;case Lo:return i*t/s.components*s.byteLength;case Qi:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case Uo:case Oo:return Math.max(i,8)*Math.max(t,8)/2;case Bo:case zo:case Go:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:case ea:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mm(i){switch(i){case Mn:case Fc:return{byteLength:1,components:1};case er:case Oc:case Yn:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case qn:case Ro:case $n:return{byteLength:4,components:1};case kc:case Bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let x=f[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
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
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vm=`#define PI 3.141592653589793
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
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:_m,alphahash_pars_fragment:vm,alphamap_fragment:ym,alphamap_pars_fragment:bm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:wm,aomap_pars_fragment:Tm,batching_pars_vertex:Em,batching_vertex:Am,begin_vertex:Cm,beginnormal_vertex:Rm,bsdfs:Im,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:Om,color_pars_fragment:km,color_pars_vertex:Bm,color_vertex:zm,common:Vm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:$m,colorspace_fragment:Ym,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:v0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:w0,map_fragment:T0,map_pars_fragment:E0,map_particle_fragment:A0,map_particle_pars_fragment:C0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:I0,morphinstance_vertex:P0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:k0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:$0,premultiplied_alpha_fragment:Y0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:K0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:ag,skinnormal_vertex:og,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:vg,backgroundCube_vert:yg,backgroundCube_frag:bg,cube_vert:Mg,cube_frag:Sg,depth_vert:wg,depth_frag:Tg,distance_vert:Eg,distance_frag:Ag,equirect_vert:Cg,equirect_frag:Rg,linedashed_vert:Ig,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Og,meshnormal_vert:kg,meshnormal_frag:Bg,meshphong_vert:zg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Hg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:$g,shadow_vert:Yg,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:Kg},Mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ui={basic:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:on([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:on([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:on([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:on([Mt.points,Mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:on([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:on([Mt.common,Mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:on([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:on([Mt.sprite,Mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:on([Mt.common,Mt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:on([Mt.lights,Mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var fl={r:0,b:0,g:0},jg=new Le,Wd=new Xt;Wd.set(-1,0,0,0,1,0,0,0,1);function Qg(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function m(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=t.get(R,b)}return R}function g(M){let R=!1,b=m(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,R){let b=m(R);b&&(b.isCubeTexture||b.mapping===Zr)?(c===void 0&&(c=new He(new Qs(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:gs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wd),c.material.toneMapped=ne.getTransfer(b.colorSpace)!==ue,(h!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new He(new yn(2,2),new je({name:"BackgroundMaterial",uniforms:gs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ne.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,R){M.getRGB(fl,Yc(i)),e.buffers.color.setClear(fl.r,fl.g,fl.b,R,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:x,dispose:d}}function tx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,D,N,A,k){let $=!1,Y=f(F,A,N,D);r!==Y&&(r=Y,c(r.object)),$=m(F,A,N,k),$&&g(F,A,N,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(F,D,N,A),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,D,N,A){let k=A.wireframe===!0,$=n[D.id];$===void 0&&($={},n[D.id]=$);let Y=F.isInstancedMesh===!0?F.id:0,st=$[Y];st===void 0&&(st={},$[Y]=st);let K=st[N.id];K===void 0&&(K={},st[N.id]=K);let nt=K[k];return nt===void 0&&(nt=u(l()),K[k]=nt),nt}function u(F){let D=[],N=[],A=[];for(let k=0;k<e;k++)D[k]=0,N[k]=0,A[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:A,object:F,attributes:{},index:null}}function m(F,D,N,A){let k=r.attributes,$=D.attributes,Y=0,st=N.getAttributes();for(let K in st)if(st[K].location>=0){let ot=k[K],It=$[K];if(It===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(It=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(It=F.instanceColor)),ot===void 0||ot.attribute!==It||It&&ot.data!==It.data)return!0;Y++}return r.attributesNum!==Y||r.index!==A}function g(F,D,N,A){let k={},$=D.attributes,Y=0,st=N.getAttributes();for(let K in st)if(st[K].location>=0){let ot=$[K];ot===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor));let It={};It.attribute=ot,ot&&ot.data&&(It.data=ot.data),k[K]=It,Y++}r.attributes=k,r.attributesNum=Y,r.index=A}function x(){let F=r.newAttributes;for(let D=0,N=F.length;D<N;D++)F[D]=0}function p(F){d(F,0)}function d(F,D){let N=r.newAttributes,A=r.enabledAttributes,k=r.attributeDivisors;N[F]=1,A[F]===0&&(i.enableVertexAttribArray(F),A[F]=1),k[F]!==D&&(i.vertexAttribDivisor(F,D),k[F]=D)}function M(){let F=r.newAttributes,D=r.enabledAttributes;for(let N=0,A=D.length;N<A;N++)D[N]!==F[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function R(F,D,N,A,k,$,Y){Y===!0?i.vertexAttribIPointer(F,D,N,k,$):i.vertexAttribPointer(F,D,N,A,k,$)}function b(F,D,N,A){x();let k=A.attributes,$=N.getAttributes(),Y=D.defaultAttributeValues;for(let st in $){let K=$[st];if(K.location>=0){let nt=k[st];if(nt===void 0&&(st==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),st==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor)),nt!==void 0){let ot=nt.normalized,It=nt.itemSize,T=t.get(nt);if(T===void 0)continue;let O=T.buffer,z=T.type,j=T.bytesPerElement,P=z===i.INT||z===i.UNSIGNED_INT||nt.gpuType===Ro;if(nt.isInterleavedBufferAttribute){let W=nt.data,Q=W.stride,ft=nt.offset;if(W.isInstancedInterleavedBuffer){for(let dt=0;dt<K.locationSize;dt++)d(K.location+dt,W.meshPerAttribute);F.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let dt=0;dt<K.locationSize;dt++)p(K.location+dt);i.bindBuffer(i.ARRAY_BUFFER,O);for(let dt=0;dt<K.locationSize;dt++)R(K.location+dt,It/K.locationSize,z,ot,Q*j,(ft+It/K.locationSize*dt)*j,P)}else{if(nt.isInstancedBufferAttribute){for(let W=0;W<K.locationSize;W++)d(K.location+W,nt.meshPerAttribute);F.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let W=0;W<K.locationSize;W++)p(K.location+W);i.bindBuffer(i.ARRAY_BUFFER,O);for(let W=0;W<K.locationSize;W++)R(K.location+W,It/K.locationSize,z,ot,It*j,It/K.locationSize*W*j,P)}}else if(Y!==void 0){let ot=Y[st];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(K.location,ot);break;case 3:i.vertexAttrib3fv(K.location,ot);break;case 4:i.vertexAttrib4fv(K.location,ot);break;default:i.vertexAttrib1fv(K.location,ot)}}}}M()}function S(){E();for(let F in n){let D=n[F];for(let N in D){let A=D[N];for(let k in A){let $=A[k];for(let Y in $)h($[Y].object),delete $[Y];delete A[k]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let D=n[F.id];for(let N in D){let A=D[N];for(let k in A){let $=A[k];for(let Y in $)h($[Y].object),delete $[Y];delete A[k]}}delete n[F.id]}function I(F){for(let D in n){let N=n[D];for(let A in N){let k=N[A];if(k[F.id]===void 0)continue;let $=k[F.id];for(let Y in $)h($[Y].object),delete $[Y];delete k[F.id]}}}function v(F){for(let D in n){let N=n[D],A=F.isInstancedMesh===!0?F.id:0,k=N[A];if(k!==void 0){for(let $ in k){let Y=k[$];for(let st in Y)h(Y[st].object),delete Y[st];delete k[$]}delete N[A],Object.keys(N).length===0&&delete n[D]}}}function E(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let v=I===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Mn&&I!==$n&&!v&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:S,samples:w}}function ix(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,R=M*4,b=d.clippingState||null;l.value=b,b=h(g,u,R,m);for(let S=0;S!==R;++S)b[S]=e[S];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let R=0,b=m;R!==x;++R,b+=4)a.copy(f[R]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var rr=4,sx=6,rx=20,ax=256,ia=new $r,Md=new Yt,ih=null,sh=0,rh=0,ah=!1,ox=new Z,xs=new Z,ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ox}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=ah,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Yn,format:Ln,colorSpace:Pr,depthBuffer:!1},s=Sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=hx(r,t,e),this._ggxMaterial=cx(r,t,e)}return s}_compileMaterial(t){let e=new He(new vn,t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Md),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Qs,new oi({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,d=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,d=!0):(p.color.copy(Md),d=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;sr(s,b*S,R>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(x,l),f.render(t,l)}f.toneMapping=m,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ji||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,m=f*u,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-rr?n-g+rr:0),d=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,sr(r,p,d,3*x,2*x),s.setRenderTarget(r),s.render(o,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,sr(t,p,d,3*x,2*x),s.setRenderTarget(t),s.render(o,ia)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-rr?s-this._lodMax+rr:0),u=4*(this._cubeSize-h);sr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ia)}};function lx(i){let t=[],e=[],n=i,s=i-rr+1+sx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,m=3,g=new Float32Array(m*u*f),x=new Float32Array(m*u*f);for(let d=0;d<f;d++){let M=d%3*2/3-1,R=d>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(b,m*u*d);for(let S=0;S<u;S++){let w=h[S*2]*2-1,I=h[S*2+1]*2-1;d===0?xs.set(1,I,w):d===1?xs.set(-w,1,-I):d===2?xs.set(-w,I,1):d===3?xs.set(-1,I,-w):d===4?xs.set(-w,-1,I):xs.set(w,I,-1),xs.toArray(x,(d*u+S)*m)}}let p=new vn;p.setAttribute("position",new tn(g,m)),p.setAttribute("outputDirection",new tn(x,m)),e.push(new He(p,null)),n>rr&&n--}return{lodMeshes:e,sizeLods:t}}function Sd(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cx(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function hx(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wd(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Td(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function _l(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gl=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qs(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ci});r.uniforms.tEquirect.value=e;let a=new He(s,r),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=We),new So(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Eo||m===Ao)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new gl(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===Eo||m===Ao,x=m===Ji||m===ms;if(g||x){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ml(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new ml(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Eo?u.mapping=Ji:m===Ao&&(u.mapping=ms),u}function l(u){let m=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function dx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function fx(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(f){let u=[],m=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(m!==null){let M=m.array;x=m.version;for(let R=0,b=M.length;R<b;R+=3){let S=M[R+0],w=M[R+1],I=M[R+2];u.push(S,w,w,I,I,S)}}else{let M=g.array;x=g.version;for(let R=0,b=M.length/3-1;R<b;R+=3){let S=R+0,w=R+1,I=R+2;u.push(S,w,w,I,I,S)}}let p=new(g.count>=65535?Br:kr)(u,1);p.version=x;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function px(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),e.update(u,n,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let x=0;for(let p=0;p<m;p++)x+=u[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;m===!0&&(R=1),g===!0&&(R=2),x===!0&&(R=3);let b=o.attributes.position.count*R,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*S*4*f),I=new Ur(w,b,S,f);I.type=$n,I.needsUpdate=!0;let v=R*4;for(let L=0;L<f;L++){let F=p[L],D=d[L],N=M[L],A=b*S*4*L;for(let k=0;k<F.count;k++){let $=k*v;m===!0&&(s.fromBufferAttribute(F,k),w[A+$+0]=s.x,w[A+$+1]=s.y,w[A+$+2]=s.z,w[A+$+3]=0),g===!0&&(s.fromBufferAttribute(D,k),w[A+$+4]=s.x,w[A+$+5]=s.y,w[A+$+6]=s.z,w[A+$+7]=0),x===!0&&(s.fromBufferAttribute(N,k),w[A+$+8]=s.x,w[A+$+9]=s.y,w[A+$+10]=s.z,w[A+$+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:I,size:new ae(b,S)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _x={[Cc]:"LINEAR_TONE_MAPPING",[Rc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[Pc]:"ACES_FILMIC_TONE_MAPPING",[Dc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function vx(i,t,e,n,s,r){let a=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new vn;c.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new In([0,2,0,0,2,0],2));let h=new co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new He(c,h),u=new $r(-1,1,1,-1,0,1),m=null,g=null,x=!1,p,d=null,M=[],R=!1;this.setSize=function(b,S){a.setSize(b,S),o!==null&&o.setSize(b,S),l!==null&&l.setSize(b,S);for(let w=0;w<M.length;w++){let I=M[w];I.setSize&&I.setSize(b,S)}},this.setEffects=function(b){M=b,R=M.length>0&&M[0].isRenderPass===!0;let S=a.width,w=a.height;M.length>0&&o===null&&(o=new pn(S,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(S,w,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<M.length;I++){let v=M[I];v.setSize&&v.setSize(S,w)}},this.begin=function(b,S){if(x||b.toneMapping===Xn&&M.length===0)return!1;if(d=S,S!==null){let w=S.width,I=S.height;(a.width!==w||a.height!==I)&&this.setSize(w,I)}return R===!1&&b.setRenderTarget(a),p=b.toneMapping,b.toneMapping=Xn,!0},this.hasRenderPass=function(){return R},this.end=function(b,S){b.toneMapping=p,x=!0;let w=a,I=o;for(let v=0;v<M.length;v++){let E=M[v];E.enabled!==!1&&(E.render(b,I,w,S),E.needsSwap!==!1&&(w=I,I=I===o?l:o))}if(m!==b.outputColorSpace||g!==b.toneMapping){m=b.outputColorSpace,g=b.toneMapping,h.defines={},ne.getTransfer(m)===ue&&(h.defines.SRGB_TRANSFER="");let v=_x[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(d),b.render(f,u),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xd=new Ke,ch=new Hi(1,1),qd=new Ur,$d=new ro,Yd=new Hr,Ed=[],Ad=[],Cd=new Float32Array(16),Rd=new Float32Array(9),Id=new Float32Array(4);function or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vl(i,t){let e=Ad[t];e===void 0&&(e=new Int32Array(t),Ad[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Id.set(n),i.uniformMatrix2fv(this.addr,!1,Id),qe(e,n)}}function Tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Rd.set(n),i.uniformMatrix3fv(this.addr,!1,Rd),qe(e,n)}}function Ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),qe(e,n)}}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=e.isReversedDepthBuffer()?dl:ul,r=ch):r=Xd,e.setTexture2D(t||r,s)}function Fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$d,s)}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yd,s)}function kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qd,s)}function Bx(i){switch(i){case 5126:return yx;case 35664:return bx;case 35665:return Mx;case 35666:return Sx;case 35674:return wx;case 35675:return Tx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return Lx;case 36295:return Dx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return kx}}function zx(i,t){i.uniform1fv(this.addr,t)}function Vx(i,t){let e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function Gx(i,t){let e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function Hx(i,t){let e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function Wx(i,t){let e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xx(i,t){let e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qx(i,t){let e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $x(i,t){i.uniform1iv(this.addr,t)}function Yx(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function Jx(i,t){i.uniform4iv(this.addr,t)}function Kx(i,t){i.uniform1uiv(this.addr,t)}function jx(i,t){i.uniform2uiv(this.addr,t)}function Qx(i,t){i.uniform3uiv(this.addr,t)}function t_(i,t){i.uniform4uiv(this.addr,t)}function e_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ch:a=Xd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function n_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$d,r[a])}function i_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yd,r[a])}function s_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qd,r[a])}function r_(i){switch(i){case 5126:return zx;case 35664:return Vx;case 35665:return Gx;case 35666:return Hx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return $x;case 35667:case 35671:return Yx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Kx;case 36294:return jx;case 36295:return Qx;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}var hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}},uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}},dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Pd(i,t){i.seq.push(t),i.map[t.id]=t}function a_(i,t,e){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pd(e,c===void 0?new hh(o,i,t):new uh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new dh(o),Pd(e,f)),e=f}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);a_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var o_=37297,l_=0;function c_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Dd=new Xt;function h_(i){ne._getMatrix(Dd,ne.workingColorSpace,i);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+c_(i.getShaderSource(t),o)}else return r}function u_(i,t){let e=h_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var d_={[Cc]:"Linear",[Rc]:"Reinhard",[Ic]:"Cineon",[Pc]:"ACESFilmic",[Dc]:"AgX",[Nc]:"Neutral",[Lc]:"Custom"};function f_(i,t){let e=d_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new Z;function p_(){ne.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function g_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ra(i){return i!==""}function Ud(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(__,y_)}var v_=new Map;function y_(i,t){let e=Jt[t];if(e===void 0){let n=v_.get(t);if(n!==void 0)e=Jt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(e)}var b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(i){return i.replace(b_,M_)}function M_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var S_={[Yr]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function w_(i){return S_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T_={[Ji]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function E_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var A_={[ms]:"ENVMAP_MODE_REFRACTION"};function C_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":A_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function I_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R_[i.combine]||"ENVMAP_BLENDING_NONE"}function P_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=w_(e),c=E_(e),h=C_(e),f=I_(e),u=P_(e),m=m_(e),g=g_(r),x=s.createProgram(),p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ra).join(`
`),d.length>0&&(d+=`
`)):(p=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),d=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),a=fh(a),a=Ud(a,e),a=Fd(a,e),o=fh(o),o=Ud(o,e),o=Fd(o,e),a=Od(a),o=Od(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let R=M+p+a,b=M+d+o,S=Ld(s,s.VERTEX_SHADER,R),w=Ld(s,s.FRAGMENT_SHADER,b);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(F){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(S)||"",A=s.getShaderInfoLog(w)||"",k=D.trim(),$=N.trim(),Y=A.trim(),st=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{let nt=Nd(s,S,"vertex"),ot=Nd(s,w,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+nt+`
`+ot)}else k!==""?Vt("WebGLProgram: Program Info Log:",k):($===""||Y==="")&&(K=!1);K&&(F.diagnostics={runnable:st,programLog:k,vertexShader:{log:$,prefix:p},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(S),s.deleteShader(w),v=new ar(s,x),E=x_(s,x)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,o_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var D_=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mh(t),e.set(t,n)),n}},mh=class{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}};function N_(i){return i===Qi||i===ea||i===na}function U_(i,t,e,n,s,r){let a=new Fr,o=new ph,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,L,F,D,N){let A=F.fog,k=D.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,st=t.get(v.envMap||$,Y),K=st&&st.mapping===Zr?st.image.height:null,nt=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,It=ot!==void 0?ot.length:0,T=0;k.morphAttributes.position!==void 0&&(T=1),k.morphAttributes.normal!==void 0&&(T=2),k.morphAttributes.color!==void 0&&(T=3);let O,z,j,P;if(nt){let ye=ui[nt];O=ye.vertexShader,z=ye.fragmentShader}else{O=v.vertexShader,z=v.fragmentShader;let ye=o.getVertexShaderStage(v),ce=o.getFragmentShaderStage(v);o.update(v,ye,ce),j=ye.id,P=ce.id}let W=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),ft=D.isInstancedMesh===!0,dt=D.isBatchedMesh===!0,Bt=!!v.map,Re=!!v.matcap,Kt=!!st,se=!!v.aoMap,re=!!v.lightMap,qt=!!v.bumpMap&&v.wireframe===!1,ge=!!v.normalMap,ke=!!v.displacementMap,Ye=!!v.emissiveMap,Se=!!v.metalnessMap,Be=!!v.roughnessMap,V=v.anisotropy>0,en=v.clearcoat>0,fe=v.dispersion>0,C=v.retroreflectivity>0,_=v.iridescence>0,H=v.sheen>0,J=v.transmission>0,et=V&&!!v.anisotropyMap,pt=en&&!!v.clearcoatMap,gt=en&&!!v.clearcoatNormalMap,it=en&&!!v.clearcoatRoughnessMap,at=_&&!!v.iridescenceMap,xt=_&&!!v.iridescenceThicknessMap,Ut=H&&!!v.sheenColorMap,bt=H&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Ft=!!v.specularColorMap,zt=!!v.specularIntensityMap,$t=J&&!!v.transmissionMap,B=J&&!!v.thicknessMap,vt=!!v.gradientMap,rt=!!v.alphaMap,yt=v.alphaTest>0,Tt=!!v.alphaHash,lt=!!v.extensions,Ot=Xn;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let Dt={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:z,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:P,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:dt,batchingColor:dt&&D._colorsTexture!==null,instancing:ft,instancingColor:ft&&D.instanceColor!==null,instancingMorph:ft&&D.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:Re,envMap:Kt,envMapMode:Kt&&st.mapping,envMapCubeUVHeight:K,aoMap:se,lightMap:re,bumpMap:qt,normalMap:ge,displacementMap:ke,emissiveMap:Ye,normalMapObjectSpace:ge&&v.normalMapType===rd,normalMapTangentSpace:ge&&v.normalMapType===Hc,packedNormalMap:ge&&v.normalMapType===Hc&&N_(v.normalMap.format),metalnessMap:Se,roughnessMap:Be,anisotropy:V,anisotropyMap:et,clearcoat:en,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:it,dispersion:fe,retroreflection:C,iridescence:_,iridescenceMap:at,iridescenceThicknessMap:xt,sheen:H,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:_t,specularColorMap:Ft,specularIntensityMap:zt,transmission:J,transmissionMap:$t,thicknessMap:B,gradientMap:vt,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:yt,alphaHash:Tt,combine:v.combine,mapUv:Bt&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:re&&g(v.lightMap.channel),bumpMapUv:qt&&g(v.bumpMap.channel),normalMapUv:ge&&g(v.normalMap.channel),displacementMapUv:ke&&g(v.displacementMap.channel),emissiveMapUv:Ye&&g(v.emissiveMap.channel),metalnessMapUv:Se&&g(v.metalnessMap.channel),roughnessMapUv:Be&&g(v.roughnessMap.channel),anisotropyMapUv:et&&g(v.anisotropyMap.channel),clearcoatMapUv:pt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(v.sheenRoughnessMap.channel),specularMapUv:_t&&g(v.specularMap.channel),specularColorMapUv:Ft&&g(v.specularColorMap.channel),specularIntensityMapUv:zt&&g(v.specularIntensityMap.channel),transmissionMapUv:$t&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:rt&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ge||V),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Bt||rt),fog:!!A,useFog:v.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Q,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:T,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Ye&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function p(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(E,v),M(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let E=m[v.type],L;if(E){let F=ui[E];L=vd.clone(F.uniforms)}else L=v.uniforms;return L}function b(v,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new L_(i,E,v,s),c.push(L),h.set(E,L)),L}function S(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function I(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:R,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:I}}function F_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,x,p,d){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:d},i[t]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=g,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=p,M.group=d),t++,M}function l(u,m,g,x,p,d,M){M.reversedDepth===!0&&(p=-p);let R=o(u,m,g,x,p,d);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,m,g,x,p,d){let M=o(u,m,g,x,p,d);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,m){e.length>1&&e.sort(u||O_),n.length>1&&n.sort(m||Bd),s.length>1&&s.sort(m||Bd)}function f(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function k_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new zd,i.set(n,[a])):s>=r.length?(a=new zd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new Yt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V_=0;function G_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H_(i){let t=new B_,e=z_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new Le,a=new Le;function o(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,g=0,x=0,p=0,d=0,M=0,R=0,b=0,S=0,w=0,I=0,v=0,E=0,L=0;c.sort(G_);for(let D=0,N=c.length;D<N;D++){let A=c[D],k=A.color,$=A.intensity,Y=A.distance,st=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Qi?st=A.shadow.map.texture:st=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=k.r*$,f+=k.g*$,u+=k.b*$;else if(A.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(A.sh.coefficients[K],$);L++}else if(A.isSunLight){let K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let nt=A.shadow,ot=e.get(A);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=st;let It=nt.getViewportCount();for(let T=0;T<It;T++)n.sunShadowMatrix[x+T]=nt.getMatrix(T),n.sunShadowCascade[x+T]=nt._cascadeData[T];x+=It,g++}n.sun[m]=K,m++}else if(A.isDirectionalLight){let K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let nt=A.shadow,ot=e.get(A);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,n.directionalShadow[p]=ot,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=A.shadow.matrix,S++}n.directional[p]=K,p++}else if(A.isSpotLight){let K=t.get(A);K.position.setFromMatrixPosition(A.matrixWorld),K.color.copy(k).multiplyScalar($),K.distance=Y,K.coneCos=Math.cos(A.angle),K.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),K.decay=A.decay,n.spot[M]=K;let nt=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,nt.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[M]=nt.matrix,A.castShadow){let ot=e.get(A);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,n.spotShadow[M]=ot,n.spotShadowMap[M]=st,I++}M++}else if(A.isRectAreaLight){let K=t.get(A);K.color.copy(k).multiplyScalar($),K.halfWidth.set(A.width*.5,0,0),K.halfHeight.set(0,A.height*.5,0),n.rectArea[R]=K,R++}else if(A.isPointLight){let K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),K.distance=A.distance,K.decay=A.decay,A.castShadow){let nt=A.shadow,ot=e.get(A);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,ot.shadowCameraNear=nt.camera.near,ot.shadowCameraFar=nt.camera.far,n.pointShadow[d]=ot,n.pointShadowMap[d]=st,n.pointShadowMatrix[d]=A.shadow.matrix,w++}n.point[d]=K,d++}else if(A.isHemisphereLight){let K=t.get(A);K.skyColor.copy(A.color).multiplyScalar($),K.groundColor.copy(A.groundColor).multiplyScalar($),n.hemi[b]=K,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.sunLength!==m||F.directionalLength!==p||F.pointLength!==d||F.spotLength!==M||F.rectAreaLength!==R||F.hemiLength!==b||F.numSunShadows!==g||F.numDirectionalShadows!==S||F.numPointShadows!==w||F.numSpotShadows!==I||F.numSpotMaps!==v||F.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=M,n.rectArea.length=R,n.point.length=d,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,F.sunLength=m,F.directionalLength=p,F.pointLength=d,F.spotLength=M,F.rectAreaLength=R,F.hemiLength=b,F.numSunShadows=g,F.numDirectionalShadows=S,F.numPointShadows=w,F.numSpotShadows=I,F.numSpotMaps=v,F.numLightProbes=L,n.version=V_++)}function l(c,h){let f=0,u=0,m=0,g=0,x=0,p=0,d=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(d),f++}else if(b.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(b.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(b.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let S=n.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let t=new H_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function W_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vd(i),t.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`,$_=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Y_=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Gd=new Le,sa=new Z,lh=new Z;function Z_(i,t,e){let n=new Vr,s=new ae,r=new ae,a=new Ee,o=new ho,l=new uo,c={},h=e.maxTextureSize,f={[$i]:un,[un]:$i,[Pn]:Pn},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new vn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new He(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let d=this.type;this.render=function(w,I,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Fu&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);let E=i.getRenderTarget(),L=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=d!==this.type;N&&I.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(k=>k.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,k=w.length;A<k;A++){let $=w[A],Y=$.shadow;if(Y===void 0){Vt("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let st=Y.getFrameExtents();s.multiply(st),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,Y.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||N===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===tr){if($.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new pn(s.x,s.y,{format:Qi,type:Yn,minFilter:We,magFilter:We,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new Hi(s.x,s.y,$n),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=si,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Je,Y.map.depthTexture.magFilter=Je}else $.isPointLight?(Y.map=new gl(s.x),Y.map.depthTexture=new lo(s.x,qn)):(Y.map=new pn(s.x,s.y),Y.map.depthTexture=new Hi(s.x,s.y,qn)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=si,this.type===Yr?(Y.map.depthTexture.compareFunction=K?dl:ul,Y.map.depthTexture.minFilter=We,Y.map.depthTexture.magFilter=We):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Je,Y.map.depthTexture.magFilter=Je);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let nt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,v);for(let ot=0;ot<nt;ot++){let It=Y.getCamera(ot);if($.isPointLight){let T=Y.camera,O=Y.matrix,z=$.distance||T.far;z!==T.far&&(T.far=z,T.updateProjectionMatrix()),sa.setFromMatrixPosition($.matrixWorld),T.position.copy(sa),lh.copy(T.position),lh.add($_[ot]),T.up.copy(Y_[ot]),T.lookAt(lh),T.updateMatrixWorld(),O.makeTranslation(-sa.x,-sa.y,-sa.z),Gd.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Gd,T.coordinateSystem,T.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(Y.map),i.clear());let T=Y.getViewport(ot);a.set(r.x*T.x,r.y*T.y,r.x*T.z,r.y*T.w),D.viewport(a)}n=Y.getFrustum(ot),b(I,v,It,$,this.type)}Y.isPointLightShadow!==!0&&this.type===tr&&M(Y,v),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,L,F)};function M(w,I){let v=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new pn(s.x,s.y,{format:Qi,type:Yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,v,u,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,v,m,x,null)}function R(w,I,v,E){let L=null,F=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)L=F;else if(L=v.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let D=L.uuid,N=I.uuid,A=c[D];A===void 0&&(A={},c[D]=A);let k=A[N];k===void 0&&(k=L.clone(),A[N]=k,I.addEventListener("dispose",S)),L=k}if(L.visible=I.visible,L.wireframe=I.wireframe,E===tr?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:f[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let D=i.properties.get(L);D.light=v}return L}function b(w,I,v,E,L){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===tr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let N=t.update(w),A=w.material;if(Array.isArray(A)){let k=N.groups;for(let $=0,Y=k.length;$<Y;$++){let st=k[$],K=A[st.materialIndex];if(K&&K.visible){let nt=R(w,K,E,L);w.onBeforeShadow(i,w,I,v,N,nt,st),i.renderBufferDirect(v,null,N,nt,w,st),w.onAfterShadow(i,w,I,v,N,nt,st)}}}else if(A.visible){let k=R(w,A,E,L);w.onBeforeShadow(i,w,I,v,N,k,null),i.renderBufferDirect(v,null,N,k,w,null),w.onAfterShadow(i,w,I,v,N,k,null)}}let D=w.children;for(let N=0,A=D.length;N<A;N++)b(D[N],I,v,E,L)}function S(w){w.target.removeEventListener("dispose",S);for(let v in c){let E=c[v],L=w.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function J_(i,t){function e(){let B=!1,vt=new Ee,rt=null,yt=new Ee(0,0,0,0);return{setMask:function(Tt){rt!==Tt&&!B&&(i.colorMask(Tt,Tt,Tt,Tt),rt=Tt)},setLocked:function(Tt){B=Tt},setClear:function(Tt,lt,Ot,Dt,ye){ye===!0&&(Tt*=Dt,lt*=Dt,Ot*=Dt),vt.set(Tt,lt,Ot,Dt),yt.equals(vt)===!1&&(i.clearColor(Tt,lt,Ot,Dt),yt.copy(vt))},reset:function(){B=!1,rt=null,yt.set(-1,0,0,0)}}}function n(){let B=!1,vt=!1,rt=null,yt=null,Tt=null;return{setReversed:function(lt){if(vt!==lt){let Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return vt},setTest:function(lt){lt?W(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(lt){rt!==lt&&!B&&(i.depthMask(lt),rt=lt)},setFunc:function(lt){if(vt&&(lt=xd[lt]),yt!==lt){switch(lt){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=lt}},setLocked:function(lt){B=lt},setClear:function(lt){Tt!==lt&&(Tt=lt,vt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){B=!1,rt=null,yt=null,Tt=null,vt=!1}}}function s(){let B=!1,vt=null,rt=null,yt=null,Tt=null,lt=null,Ot=null,Dt=null,ye=null;return{setTest:function(ce){B||(ce?W(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ce){vt!==ce&&!B&&(i.stencilMask(ce),vt=ce)},setFunc:function(ce,Bn,ti){(rt!==ce||yt!==Bn||Tt!==ti)&&(i.stencilFunc(ce,Bn,ti),rt=ce,yt=Bn,Tt=ti)},setOp:function(ce,Bn,ti){(lt!==ce||Ot!==Bn||Dt!==ti)&&(i.stencilOp(ce,Bn,ti),lt=ce,Ot=Bn,Dt=ti)},setLocked:function(ce){B=ce},setClear:function(ce){ye!==ce&&(i.clearStencil(ce),ye=ce)},reset:function(){B=!1,vt=null,rt=null,yt=null,Tt=null,lt=null,Ot=null,Dt=null,ye=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},m=new WeakMap,g=[],x=null,p=!1,d=null,M=null,R=null,b=null,S=null,w=null,I=null,v=new Yt(0,0,0),E=0,L=!1,F=null,D=null,N=null,A=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,st=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=st>=2);let nt=null,ot={},It=i.getParameter(i.SCISSOR_BOX),T=i.getParameter(i.VIEWPORT),O=new Ee().fromArray(It),z=new Ee().fromArray(T);function j(B,vt,rt,yt){let Tt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(B,lt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<rt;Ot++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(vt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return lt}let P={};P[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),P[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),P[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Ys),qt(!1),ge(Mc),W(i.CULL_FACE),se(ci);function W(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Q(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ft(B,vt){return u[B]!==vt?(i.bindFramebuffer(B,vt),u[B]=vt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function dt(B,vt){let rt=g,yt=!1;if(B){rt=m.get(vt),rt===void 0&&(rt=[],m.set(vt,rt));let Tt=B.textures;if(rt.length!==Tt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ot=Tt.length;lt<Ot;lt++)rt[lt]=i.COLOR_ATTACHMENT0+lt;rt.length=Tt.length,yt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(rt)}function Bt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let Re={[ps]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};Re[zu]=i.MIN,Re[Vu]=i.MAX;let Kt={[Gu]:i.ZERO,[Hu]:i.ONE,[Wu]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function se(B,vt,rt,yt,Tt,lt,Ot,Dt,ye,ce){if(B===ci){p===!0&&(Q(i.BLEND),p=!1);return}if(p===!1&&(W(i.BLEND),p=!0),B!==Ou){if(B!==d||ce!==L){if((M!==ps||S!==ps)&&(i.blendEquation(i.FUNC_ADD),M=ps,S=ps),ce)switch(B){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",B);break}else switch(B){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",B);break}R=null,b=null,w=null,I=null,v.set(0,0,0),E=0,d=B,L=ce}return}Tt=Tt||vt,lt=lt||rt,Ot=Ot||yt,(vt!==M||Tt!==S)&&(i.blendEquationSeparate(Re[vt],Re[Tt]),M=vt,S=Tt),(rt!==R||yt!==b||lt!==w||Ot!==I)&&(i.blendFuncSeparate(Kt[rt],Kt[yt],Kt[lt],Kt[Ot]),R=rt,b=yt,w=lt,I=Ot),(Dt.equals(v)===!1||ye!==E)&&(i.blendColor(Dt.r,Dt.g,Dt.b,ye),v.copy(Dt),E=ye),d=B,L=!1}function re(B,vt){B.side===Pn?Q(i.CULL_FACE):W(i.CULL_FACE);let rt=B.side===un;vt&&(rt=!rt),qt(rt),B.blending===Yi&&B.transparent===!1?se(ci):se(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let yt=B.stencilWrite;o.setTest(yt),yt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ye(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(B){F!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),F=B)}function ge(B){B!==Nu?(W(i.CULL_FACE),B!==D&&(B===Mc?i.cullFace(i.BACK):B===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),D=B}function ke(B){B!==N&&(Y&&i.lineWidth(B),N=B)}function Ye(B,vt,rt){B?(W(i.POLYGON_OFFSET_FILL),(A!==vt||k!==rt)&&(A=vt,k=rt,a.getReversed()&&(vt=-vt),i.polygonOffset(vt,rt))):Q(i.POLYGON_OFFSET_FILL)}function Se(B){B?W(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Be(B){B===void 0&&(B=i.TEXTURE0+$-1),nt!==B&&(i.activeTexture(B),nt=B)}function V(B,vt,rt){rt===void 0&&(nt===null?rt=i.TEXTURE0+$-1:rt=nt);let yt=ot[rt];yt===void 0&&(yt={type:void 0,texture:void 0},ot[rt]=yt),(yt.type!==B||yt.texture!==vt)&&(nt!==rt&&(i.activeTexture(rt),nt=rt),i.bindTexture(B,vt||P[B]),yt.type=B,yt.texture=vt)}function en(){let B=ot[nt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function H(){try{i.texSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function pt(){try{i.texStorage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function gt(){try{i.texStorage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function it(){try{i.texImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function at(){try{i.texImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function xt(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Ut(B,vt){f[B]!==vt&&(i.pixelStorei(B,vt),f[B]=vt)}function bt(B){O.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),O.copy(B))}function _t(B){z.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),z.copy(B))}function Ft(B,vt){let rt=c.get(vt);rt===void 0&&(rt=new WeakMap,c.set(vt,rt));let yt=rt.get(B);yt===void 0&&(yt=i.getUniformBlockIndex(vt,B.name),rt.set(B,yt))}function zt(B,vt){let yt=c.get(vt).get(B);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,B.__bindingPointIndex),l.set(vt,yt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},nt=null,ot={},u={},m=new WeakMap,g=[],x=null,p=!1,d=null,M=null,R=null,b=null,S=null,w=null,I=null,v=new Yt(0,0,0),E=0,L=!1,F=null,D=null,N=null,A=null,k=null,O.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:Q,bindFramebuffer:ft,drawBuffers:dt,useProgram:Bt,setBlending:se,setMaterial:re,setFlipSided:qt,setCullFace:ge,setLineWidth:ke,setPolygonOffset:Ye,setScissorTest:Se,activeTexture:Be,bindTexture:V,unbindTexture:en,compressedTexImage2D:fe,compressedTexImage3D:C,texImage2D:it,texImage3D:at,pixelStorei:Ut,getParameter:xt,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:bt,viewport:_t,reset:$t}}function K_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,f=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return g?new OffscreenCanvas(C,_):Nr("canvas")}function p(C,_,H){let J=1,et=fe(C);if((et.width>H||et.height>H)&&(J=H/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let pt=Math.floor(J*et.width),gt=Math.floor(J*et.height);u===void 0&&(u=x(pt,gt));let it=_?x(pt,gt):u;return it.width=pt,it.height=gt,it.getContext("2d").drawImage(C,0,0,pt,gt),Vt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+pt+"x"+gt+")."),it}else return"data"in C&&Vt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,_,H,J,et,pt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt;J&&(gt=t.get("EXT_texture_norm16"),gt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=_;if(_===i.RED&&(H===i.FLOAT&&(it=i.R32F),H===i.HALF_FLOAT&&(it=i.R16F),H===i.UNSIGNED_BYTE&&(it=i.R8),H===i.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),H===i.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.R8UI),H===i.UNSIGNED_SHORT&&(it=i.R16UI),H===i.UNSIGNED_INT&&(it=i.R32UI),H===i.BYTE&&(it=i.R8I),H===i.SHORT&&(it=i.R16I),H===i.INT&&(it=i.R32I)),_===i.RG&&(H===i.FLOAT&&(it=i.RG32F),H===i.HALF_FLOAT&&(it=i.RG16F),H===i.UNSIGNED_BYTE&&(it=i.RG8),H===i.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),H===i.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RG8UI),H===i.UNSIGNED_SHORT&&(it=i.RG16UI),H===i.UNSIGNED_INT&&(it=i.RG32UI),H===i.BYTE&&(it=i.RG8I),H===i.SHORT&&(it=i.RG16I),H===i.INT&&(it=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGB8UI),H===i.UNSIGNED_SHORT&&(it=i.RGB16UI),H===i.UNSIGNED_INT&&(it=i.RGB32UI),H===i.BYTE&&(it=i.RGB8I),H===i.SHORT&&(it=i.RGB16I),H===i.INT&&(it=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),H===i.UNSIGNED_INT&&(it=i.RGBA32UI),H===i.BYTE&&(it=i.RGBA8I),H===i.SHORT&&(it=i.RGBA16I),H===i.INT&&(it=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),H===i.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),_===i.RGBA){let at=pt?Lr:ne.getTransfer(et);H===i.FLOAT&&(it=i.RGBA32F),H===i.HALF_FLOAT&&(it=i.RGBA16F),H===i.UNSIGNED_BYTE&&(it=at===ue?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),H===i.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(C,_){let H;return C?_===null||_===qn||_===nr?H=i.DEPTH24_STENCIL8:_===$n?H=i.DEPTH32F_STENCIL8:_===er&&(H=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===nr?H=i.DEPTH_COMPONENT24:_===$n?H=i.DEPTH_COMPONENT32F:_===er&&(H=i.DEPTH_COMPONENT16),H}function w(C,_){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Je&&C.minFilter!==We?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function I(C){let _=C.target;_.removeEventListener("dispose",I),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function v(C){let _=C.target;_.removeEventListener("dispose",v),F(_)}function E(C){let _=n.get(C);if(_.__webglInit===void 0)return;let H=C.source,J=m.get(H);if(J){let et=J[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&L(C),Object.keys(J).length===0&&m.delete(H)}n.remove(C)}function L(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let H=C.source,J=m.get(H);delete J[_.__cacheKey],a.memory.textures--}function F(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let et=0;et<_.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[J][et]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=C.textures;for(let J=0,et=H.length;J<et;J++){let pt=n.get(H[J]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(C)}let D=0;function N(){D=0}function A(){return D}function k(C){D=C}function $(){let C=D;return C>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function Y(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function st(C,_){let H=n.get(C);if(C.isVideoTexture&&V(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let J=C.image;if(J===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,C,_);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function K(C,_){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Q(H,C,_);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function nt(C,_){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Q(H,C,_);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function ot(C,_){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){ft(H,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let It={[ds]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},T={[Je]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},O={[od]:i.NEVER,[dd]:i.ALWAYS,[ld]:i.LESS,[ul]:i.LEQUAL,[cd]:i.EQUAL,[dl]:i.GEQUAL,[hd]:i.GREATER,[ud]:i.NOTEQUAL};function z(C,_){if(_.type===$n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===We||_.magFilter===Co||_.magFilter===Jr||_.magFilter===Ki||_.minFilter===We||_.minFilter===Co||_.minFilter===Jr||_.minFilter===Ki)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,It[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,It[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,It[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,T[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,T[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,O[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==Jr&&_.minFilter!==Ki||_.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function j(C,_){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",I));let J=_.source,et=m.get(J);et===void 0&&(et={},m.set(J,et));let pt=Y(_);if(pt!==C.__cacheKey){et[pt]===void 0&&(et[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[pt].usedTimes++;let gt=et[C.__cacheKey];gt!==void 0&&(et[C.__cacheKey].usedTimes--,gt.usedTimes===0&&L(_)),C.__cacheKey=pt,C.__webglTexture=et[pt].texture}return H}function P(C,_,H){return Math.floor(Math.floor(C/H)/_)}function W(C,_,H,J){let pt=C.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,J,_.data);else{pt.sort((Ut,bt)=>Ut.start-bt.start);let gt=0;for(let Ut=1;Ut<pt.length;Ut++){let bt=pt[gt],_t=pt[Ut],Ft=bt.start+bt.count,zt=P(_t.start,_.width,4),$t=P(bt.start,_.width,4);_t.start<=Ft+1&&zt===$t&&P(_t.start+_t.count-1,_.width,4)===zt?bt.count=Math.max(bt.count,_t.start+_t.count-bt.start):(++gt,pt[gt]=_t)}pt.length=gt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ut=0,bt=pt.length;Ut<bt;Ut++){let _t=pt[Ut],Ft=Math.floor(_t.start/4),zt=Math.ceil(_t.count/4),$t=Ft%_.width,B=Math.floor(Ft/_.width),vt=zt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,vt,rt,H,J,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function Q(C,_,H){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let et=j(C,_),pt=_.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+H);let gt=n.get(pt);if(pt.version!==gt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let rt=ne.getPrimaries(ne.workingColorSpace),yt=_.colorSpace===wi?null:ne.getPrimaries(_.colorSpace),Tt=_.colorSpace===wi||rt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let at=p(_.image,!1,s.maxTextureSize);at=en(_,at);let xt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),bt=b(_.internalFormat,xt,Ut,_.normalized,_.colorSpace,_.isVideoTexture);z(J,_);let _t,Ft=_.mipmaps,zt=_.isVideoTexture!==!0,$t=gt.__version===void 0||et===!0,B=pt.dataReady,vt=w(_,at);if(_.isDepthTexture)bt=S(_.format===ji,_.type),$t&&(zt?e.texStorage2D(i.TEXTURE_2D,1,bt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,bt,at.width,at.height,0,xt,Ut,null));else if(_.isDataTexture)if(Ft.length>0){zt&&$t&&e.texStorage2D(i.TEXTURE_2D,vt,bt,Ft[0].width,Ft[0].height);for(let rt=0,yt=Ft.length;rt<yt;rt++)_t=Ft[rt],zt?B&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,rt,bt,_t.width,_t.height,0,xt,Ut,_t.data);_.generateMipmaps=!1}else zt?($t&&e.texStorage2D(i.TEXTURE_2D,vt,bt,at.width,at.height),B&&W(_,at,xt,Ut)):e.texImage2D(i.TEXTURE_2D,0,bt,at.width,at.height,0,xt,Ut,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,bt,Ft[0].width,Ft[0].height,at.depth);for(let rt=0,yt=Ft.length;rt<yt;rt++)if(_t=Ft[rt],_.format!==Ln)if(xt!==null)if(zt){if(B)if(_.layerUpdates.size>0){let Tt=Kc(_t.width,_t.height,_.format,_.type);for(let lt of _.layerUpdates){let Ot=_t.data.subarray(lt*Tt/_t.data.BYTES_PER_ELEMENT,(lt+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,lt,_t.width,_t.height,1,xt,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,at.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,bt,_t.width,_t.height,at.depth,0,_t.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,at.depth,xt,Ut,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,bt,_t.width,_t.height,at.depth,0,xt,Ut,_t.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{zt&&$t&&e.texStorage2D(i.TEXTURE_2D,vt,bt,Ft[0].width,Ft[0].height);for(let rt=0,yt=Ft.length;rt<yt;rt++)_t=Ft[rt],_.format!==Ln?xt!==null?zt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,bt,_t.width,_t.height,0,_t.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?B&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,rt,bt,_t.width,_t.height,0,xt,Ut,_t.data)}else if(_.isDataArrayTexture)if(zt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,bt,at.width,at.height,at.depth),B)if(_.layerUpdates.size>0){let rt=Kc(at.width,at.height,_.format,_.type);for(let yt of _.layerUpdates){let Tt=at.data.subarray(yt*rt/at.data.BYTES_PER_ELEMENT,(yt+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,at.width,at.height,1,xt,Ut,Tt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,Ut,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,at.width,at.height,at.depth,0,xt,Ut,at.data);else if(_.isData3DTexture)zt?($t&&e.texStorage3D(i.TEXTURE_3D,vt,bt,at.width,at.height,at.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,Ut,at.data)):e.texImage3D(i.TEXTURE_3D,0,bt,at.width,at.height,at.depth,0,xt,Ut,at.data);else if(_.isFramebufferTexture){if($t)if(zt)e.texStorage2D(i.TEXTURE_2D,vt,bt,at.width,at.height);else{let rt=at.width,yt=at.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,bt,rt,yt,0,xt,Ut,null),rt>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),at.parentNode!==rt){rt.appendChild(at),f.add(_),rt.onpaint=yt=>{let Tt=yt.changedElements;for(let lt of f)Tt.includes(lt.image)&&(lt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Tt=i.RGBA,lt=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,lt,Ot,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(zt&&$t){let rt=fe(Ft[0]);e.texStorage2D(i.TEXTURE_2D,vt,bt,rt.width,rt.height)}for(let rt=0,yt=Ft.length;rt<yt;rt++)_t=Ft[rt],zt?B&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt,Ut,_t):e.texImage2D(i.TEXTURE_2D,rt,bt,xt,Ut,_t);_.generateMipmaps=!1}else if(zt){if($t){let rt=fe(at);e.texStorage2D(i.TEXTURE_2D,vt,bt,rt.width,rt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ut,at)}else e.texImage2D(i.TEXTURE_2D,0,bt,xt,Ut,at);d(_)&&M(J),gt.__version=pt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ft(C,_,H){if(_.image.length!==6)return;let J=j(C,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let pt=n.get(et);if(et.version!==pt.__version||J===!0){e.activeTexture(i.TEXTURE0+H);let gt=ne.getPrimaries(ne.workingColorSpace),it=_.colorSpace===wi?null:ne.getPrimaries(_.colorSpace),at=_.colorSpace===wi||gt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let xt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ut=_.image[0]&&_.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!xt&&!Ut?bt[lt]=p(_.image[lt],!0,s.maxCubemapSize):bt[lt]=Ut?_.image[lt].image:_.image[lt],bt[lt]=en(_,bt[lt]);let _t=bt[0],Ft=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),$t=b(_.internalFormat,Ft,zt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,vt=pt.__version===void 0||J===!0,rt=et.dataReady,yt=w(_,_t);z(i.TEXTURE_CUBE_MAP,_);let Tt;if(xt){B&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,_t.width,_t.height);for(let lt=0;lt<6;lt++){Tt=bt[lt].mipmaps;for(let Ot=0;Ot<Tt.length;Ot++){let Dt=Tt[Ot];_.format!==Ln?Ft!==null?B?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,$t,Dt.width,Dt.height,0,Dt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,0,0,Dt.width,Dt.height,Ft,zt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot,$t,Dt.width,Dt.height,0,Ft,zt,Dt.data)}}}else{if(Tt=_.mipmaps,B&&vt){Tt.length>0&&yt++;let lt=fe(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ut){B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,Ft,zt,bt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,bt[lt].width,bt[lt].height,0,Ft,zt,bt[lt].data);for(let Ot=0;Ot<Tt.length;Ot++){let ye=Tt[Ot].image[lt].image;B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,ye.width,ye.height,Ft,zt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,$t,ye.width,ye.height,0,Ft,zt,ye.data)}}else{B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft,zt,bt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Ft,zt,bt[lt]);for(let Ot=0;Ot<Tt.length;Ot++){let Dt=Tt[Ot];B?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,0,0,Ft,zt,Dt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ot+1,$t,Ft,zt,Dt.image[lt])}}}d(_)&&M(i.TEXTURE_CUBE_MAP),pt.__version=et.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function dt(C,_,H,J,et,pt){let gt=r.convert(H.format,H.colorSpace),it=r.convert(H.type),at=b(H.internalFormat,gt,it,H.normalized,H.colorSpace),xt=n.get(_),Ut=n.get(H);if(Ut.__renderTarget=_,!xt.__hasExternalTextures){let bt=Math.max(1,_.width>>pt),_t=Math.max(1,_.height>>pt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,pt,at,bt,_t,_.depth,0,gt,it,null):e.texImage2D(et,pt,at,bt,_t,0,gt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,Ut.__webglTexture,0,Se(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,Ut.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let J=_.depthTexture,et=J&&J.isDepthTexture?J.type:null,pt=S(_.stencilBuffer,et),gt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(_),pt,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(_),pt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,C)}else{let J=_.textures;for(let et=0;et<J.length;et++){let pt=J[et],gt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),at=b(pt.internalFormat,gt,it,pt.normalized,pt.colorSpace);Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(_),at,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(C,_,H){let J=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(_.depthTexture);if(et.__renderTarget=_,(!et.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(et.__webglInit===void 0&&(et.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),z(i.TEXTURE_CUBE_MAP,_.depthTexture);let xt=r.convert(_.depthTexture.format),Ut=r.convert(_.depthTexture.type),bt;_.depthTexture.format===si?bt=i.DEPTH_COMPONENT24:_.depthTexture.format===ji&&(bt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,bt,_.width,_.height,0,xt,Ut,null)}}else st(_.depthTexture,0);let pt=et.__webglTexture,gt=Se(_),it=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,at=_.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,pt,0);else if(_.depthTexture.format===ji)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(C){let _=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=J}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)Re(_.__webglFramebuffer[J],C,J);else{let J=C.texture.mipmaps;J&&J.length>0?Re(_.__webglFramebuffer[0],C,0):Re(_.__webglFramebuffer,C,0)}else if(H){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),Bt(_.__webglDepthbuffer[J],C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,pt)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Bt(_.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(C,_,H){let J=n.get(C);_!==void 0&&dt(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Kt(C)}function re(C){let _=C.texture,H=n.get(C),J=n.get(_);C.addEventListener("dispose",v);let et=C.textures,pt=C.isWebGLCubeRenderTarget===!0,gt=et.length>1;if(gt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),pt){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let at=0;at<_.mipmaps.length;at++)H.__webglFramebuffer[it][at]=i.createFramebuffer()}else H.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)H.__webglFramebuffer[it]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(gt)for(let it=0,at=et.length;it<at;it++){let xt=n.get(et[it]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Be(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let at=et[it];H.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[it]);let xt=r.convert(at.format,at.colorSpace),Ut=r.convert(at.type),bt=b(at.internalFormat,xt,Ut,at.normalized,at.colorSpace,C.isXRRenderTarget===!0),_t=Se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,bt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,H.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),z(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)dt(H.__webglFramebuffer[it][at],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else dt(H.__webglFramebuffer[it],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);d(_)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let it=0,at=et.length;it<at;it++){let xt=et[it],Ut=n.get(xt),bt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ut.__webglTexture),z(bt,xt),dt(H.__webglFramebuffer,C,xt,i.COLOR_ATTACHMENT0+it,bt,0),d(xt)&&M(bt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),z(it,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)dt(H.__webglFramebuffer[at],C,_,i.COLOR_ATTACHMENT0,it,at);else dt(H.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,it,0);d(_)&&M(it),e.unbindTexture()}C.depthBuffer&&Kt(C)}function qt(C){let _=C.textures;for(let H=0,J=_.length;H<J;H++){let et=_[H];if(d(et)){let pt=R(C),gt=n.get(et).__webglTexture;e.bindTexture(pt,gt),M(pt),e.unbindTexture()}}}let ge=[],ke=[];function Ye(C){if(C.samples>0){if(Be(C)===!1){let _=C.textures,H=C.width,J=C.height,et=i.COLOR_BUFFER_BIT,pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(C),it=_.length>1;if(it)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let at=C.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ut=n.get(_[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,et,i.NEAREST),l===!0&&(ge.length=0,ke.length=0,ge.push(i.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ge.push(pt),ke.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ut=n.get(_[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Se(C){return Math.min(s.maxSamples,C.samples)}function Be(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function V(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function en(C,_){let H=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Pr&&H!==wi&&(ne.getTransfer(H)===ue?(J!==Ln||et!==Mn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",H)),_}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=N,this.getTextureUnits=A,this.setTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=ot,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function j_(i,t){function e(n,s=wi){let r,a=ne.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Ro)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===Ln)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Qi)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Qr||n===ta)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===Fo||n===Oo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===Vo||n===Go||n===Ho||n===ea||n===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===zo)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Go)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xo||n===qo||n===$o||n===Yo||n===Zo||n===Jo||n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===al||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===na||n===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:Q_,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,g=null,x=typeof XRWebGLBinding<"u",p=new gh,d={},M=e.getContextAttributes(),R=null,b=null,S=[],w=[],I=new ae,v=null,E=null,L=new an;L.viewport=new Ee;let F=new an;F.viewport=new Ee;let D=[L,F],N=new wo,A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let W=S[P];return W===void 0&&(W=new js,S[P]=W),W.getTargetRaySpace()},this.getControllerGrip=function(P){let W=S[P];return W===void 0&&(W=new js,S[P]=W),W.getGripSpace()},this.getHand=function(P){let W=S[P];return W===void 0&&(W=new js,S[P]=W),W.getHandSpace()};function $(P){let W=w.indexOf(P.inputSource);if(W===-1)return;let Q=S[W];Q!==void 0&&(Q.update(P.inputSource,P.frame,c||a),Q.dispatchEvent({type:P.type,data:P.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",st);for(let P=0;P<S.length;P++){let W=w[P];W!==null&&(w[P]=null,S[P].disconnect(W))}A=null,k=null,p.reset();for(let P in d)delete d[P];if(t.setRenderTarget(R),m=null,u=null,f=null,s=null,b=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),E!==null){let P=E.camera;P.fov=E.fov,P.zoom=E.zoom,P.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",st),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,ft=null,dt=null;M.depth&&(dt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=M.stencil?ji:si,ft=M.stencil?nr:qn);let Bt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new pn(u.textureWidth,u.textureHeight,{format:Ln,type:Mn,depthTexture:new Hi(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new pn(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function st(P){for(let W=0;W<P.removed.length;W++){let Q=P.removed[W],ft=w.indexOf(Q);ft>=0&&(w[ft]=null,S[ft].disconnect(Q))}for(let W=0;W<P.added.length;W++){let Q=P.added[W],ft=w.indexOf(Q);if(ft===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=w.length){w.push(Q),ft=Bt;break}else if(w[Bt]===null){w[Bt]=Q,ft=Bt;break}if(ft===-1)break}let dt=S[ft];dt&&dt.connect(Q)}}let K=new Z,nt=new Z;function ot(P,W,Q){K.setFromMatrixPosition(W.matrixWorld),nt.setFromMatrixPosition(Q.matrixWorld);let ft=K.distanceTo(nt),dt=W.projectionMatrix.elements,Bt=Q.projectionMatrix.elements,Re=dt[14]/(dt[10]-1),Kt=dt[14]/(dt[10]+1),se=(dt[9]+1)/dt[5],re=(dt[9]-1)/dt[5],qt=(dt[8]-1)/dt[0],ge=(Bt[8]+1)/Bt[0],ke=Re*qt,Ye=Re*ge,Se=ft/(-qt+ge),Be=Se*-qt;if(W.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Be),P.translateZ(Se),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),dt[10]===-1)P.projectionMatrix.copy(W.projectionMatrix),P.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let V=Re+Se,en=Kt+Se,fe=ke-Be,C=Ye+(ft-Be),_=se*Kt/en*V,H=re*Kt/en*V;P.projectionMatrix.makePerspective(fe,C,_,H,V,en),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function It(P,W){W===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(W.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let W=P.near,Q=P.far;p.texture!==null&&(p.depthNear>0&&(W=p.depthNear),p.depthFar>0&&(Q=p.depthFar)),N.near=F.near=L.near=W,N.far=F.far=L.far=Q,(A!==N.near||k!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),A=N.near,k=N.far),N.layers.mask=P.layers.mask|6,L.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;let ft=P.parent,dt=N.cameras;It(N,ft);for(let Bt=0;Bt<dt.length;Bt++)It(dt[Bt],ft);dt.length===2?ot(N,L,F):N.projectionMatrix.copy(L.projectionMatrix),E===null&&P.isPerspectiveCamera&&(E={camera:P,fov:P.fov,zoom:P.zoom}),T(P,N,ft)};function T(P,W,Q){Q===null?P.matrix.copy(W.matrixWorld):(P.matrix.copy(Q.matrixWorld),P.matrix.invert(),P.matrix.multiply(W.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(W.projectionMatrix),P.projectionMatrixInverse.copy(W.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Js*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(P){l=P,u!==null&&(u.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(P){return d[P]};let O=null;function z(P,W){if(h=W.getViewerPose(c||a),g=W,h!==null){let Q=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ft=!1;Q.length!==N.cameras.length&&(N.cameras.length=0,ft=!0);for(let Kt=0;Kt<Q.length;Kt++){let se=Q[Kt],re=null;if(m!==null)re=m.getViewport(se);else{let ge=f.getViewSubImage(u,se);re=ge.viewport,Kt===0&&(t.setRenderTargetTextures(b,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(b))}let qt=D[Kt];qt===void 0&&(qt=new an,qt.layers.enable(Kt),qt.viewport=new Ee,D[Kt]=qt),qt.matrix.fromArray(se.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(se.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(re.x,re.y,re.width,re.height),Kt===0&&(N.matrix.copy(qt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ft===!0&&N.cameras.push(qt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Kt=f.getDepthInformation(Q[0]);Kt&&Kt.isValid&&Kt.texture&&p.init(Kt,s.renderState)}if(dt&&dt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Kt=0;Kt<Q.length;Kt++){let se=Q[Kt].camera;if(se){let re=d[se];re||(re=new Wr,d[se]=re);let qt=f.getCameraImage(se);re.sourceTexture=qt}}}}for(let Q=0;Q<S.length;Q++){let ft=w[Q],dt=S[Q];ft!==null&&dt!==void 0&&dt.update(ft,W,c||a)}O&&O(P,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let j=new Hd;j.setAnimationLoop(z),this.setAnimationLoop=function(P){O=P},this.dispose=function(){}}},ev=new Le,Zd=new Xt;Zd.set(-1,0,0,0,1,0,0,0,1);function nv(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Yc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,R,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,R):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===un&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===un&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=t.get(d),R=M.envMap,b=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zd),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,R){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=R*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let w=S.program;n.uniformBlockBinding(b,w)}function c(b,S){let w=s[b.id];w===void 0&&(p(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",M));let I=S.program;n.updateUBOMapping(b,I);let v=t.render.frame;r[b.id]!==v&&(u(b),r[b.id]=v)}function h(b){let S=f();b.__bindingPointIndex=S;let w=i.createBuffer(),I=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let S=s[b.id],w=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,E=w.length;v<E;v++){let L=w[v];if(Array.isArray(L))for(let F=0,D=L.length;F<D;F++)m(L[F],v,F,I);else m(L,v,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,w,I){if(x(b,S,w,I)===!0){let v=b.__offset,E=b.value;if(Array.isArray(E)){let L=0;for(let F=0;F<E.length;F++){let D=E[F],N=d(D);g(D,b.__data,L),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function g(b,S,w){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,w)}function x(b,S,w,I){let v=b.value,E=S+"_"+w;if(I[E]===void 0)return typeof v=="number"||typeof v=="boolean"?I[E]=v:ArrayBuffer.isView(v)?I[E]=v.slice():I[E]=v.clone(),!0;{let L=I[E];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return I[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function p(b){let S=b.uniforms,w=0,I=16;for(let E=0,L=S.length;E<L;E++){let F=Array.isArray(S[E])?S[E]:[S[E]];for(let D=0,N=F.length;D<N;D++){let A=F[D],k=Array.isArray(A.value)?A.value:[A.value];for(let $=0,Y=k.length;$<Y;$++){let st=k[$],K=d(st),nt=w%I,ot=nt%K.boundary,It=nt+ot;w+=ot,It!==0&&I-It<K.storage&&(w+=I-It),A.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,w+=K.storage}}}let v=w%I;return v>0&&(w+=I-v),b.__size=w,b.__cache={},this}function d(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",b),S}function M(b){let S=b.target;S.removeEventListener("dispose",M);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function rv(){return hi===null&&(hi=new ao(sv,16,16,Qi,Yn),hi.name="DFG_LUT",hi.minFilter=We,hi.magFilter=We,hi.wrapS=ii,hi.wrapT=ii,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var xl=class{constructor(t={}){let{canvas:e=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=m,p=new Set([No,Do,Lo]),d=new Set([Mn,qn,er,nr,Io,Po]),M=new Uint32Array(4),R=new Int32Array(4),b=new Z,S=null,w=null,I=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,F=!1,D=null,N=null,A=null,k=null;this._outputColorSpace=Ge;let $=0,Y=0,st=null,K=-1,nt=null,ot=new Ee,It=new Ee,T=null,O=new Yt(0),z=0,j=e.width,P=e.height,W=1,Q=null,ft=null,dt=new Ee(0,0,j,P),Bt=new Ee(0,0,j,P),Re=!1,Kt=new Vr,se=!1,re=!1,qt=new Le,ge=new Z,ke=new Ee,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Be(){return st===null?W:1}let V=n;function en(y,U){return e.getContext(y,U)}let fe,C,_,H,J,et,pt,gt,it,at,xt,Ut,bt,_t,Ft,zt,$t,B,vt,rt,yt,Tt,lt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),V===null){let U="webgl2";if(V=en(U,y),V===null)throw en(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(y){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Ht("WebGLRenderer: "+y.message),y}function Ot(){fe=new dx(V),fe.init(),yt=new j_(V,fe),C=new nx(V,fe,t,yt),_=new J_(V,fe),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),N=V.createFramebuffer(),A=V.createFramebuffer(),k=V.createFramebuffer(),H=new mx(V),J=new F_,et=new K_(V,fe,_,J,C,yt,H),pt=new ux(L),gt=new xm(V),Tt=new tx(V,gt),it=new fx(V,gt,H,Tt),at=new xx(V,it,gt,Tt,H),B=new gx(V,C,et),Ft=new ix(J),xt=new U_(L,pt,fe,C,Tt,Ft),Ut=new nv(L,J),bt=new k_,_t=new W_(fe),$t=new Qg(L,pt,_,at,g,l),zt=new Z_(L,at,C),lt=new iv(V,H,C,_),vt=new ex(V,fe,H),rt=new px(V,fe,H),H.programs=xt.programs,L.capabilities=C,L.extensions=fe,L.properties=J,L.renderLists=bt,L.shadowMap=zt,L.state=_,L.info=H}x!==Mn&&(E=new vx(x,e.width,e.height,o,s,r));let Dt=new xh(L,V);this.xr=Dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let y=fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(j,P,!1))},this.getSize=function(y){return y.set(j,P)},this.setSize=function(y,U,tt=!0){if(Dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,P=U,e.width=Math.floor(y*W),e.height=Math.floor(U*W),tt===!0&&(e.style.width=y+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(j*W,P*W).floor()},this.setDrawingBufferSize=function(y,U,tt){j=y,P=U,W=tt,e.width=Math.floor(y*tt),e.height=Math.floor(U*tt),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===Mn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ot)},this.getViewport=function(y){return y.copy(dt)},this.setViewport=function(y,U,tt,X){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,U,tt,X),_.viewport(ot.copy(dt).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,U,tt,X){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,U,tt,X),_.scissor(It.copy(Bt).multiplyScalar(W).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(y){_.setScissorTest(Re=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,tt=!0){let X=0;if(y){let q=!1;if(st!==null){let wt=st.texture.format;q=p.has(wt)}if(q){let wt=st.texture.type,Ct=d.has(wt),St=$t.getClearColor(),Pt=$t.getClearAlpha(),Nt=St.r,Zt=St.g,te=St.b;Ct?(M[0]=Nt,M[1]=Zt,M[2]=te,M[3]=Pt,V.clearBufferuiv(V.COLOR,0,M)):(R[0]=Nt,R[1]=Zt,R[2]=te,R[3]=Pt,V.clearBufferiv(V.COLOR,0,R))}else X|=V.COLOR_BUFFER_BIT}U&&(X|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),D=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),$t.dispose(),bt.dispose(),_t.dispose(),J.dispose(),pt.dispose(),at.dispose(),Tt.dispose(),lt.dispose(),xt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",iu),Dt.removeEventListener("sessionend",su),as.stop()};function ye(y){y.preventDefault(),Xc("WebGLRenderer: Context Lost."),F=!0}function ce(){Xc("WebGLRenderer: Context Restored."),F=!1;let y=H.autoReset,U=zt.enabled,tt=zt.autoUpdate,X=zt.needsUpdate,q=zt.type;Ot(),H.autoReset=y,zt.enabled=U,zt.autoUpdate=tt,zt.needsUpdate=X,zt.type=q}function Bn(y){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ti(y){let U=y.target;U.removeEventListener("dispose",ti),fp(U)}function fp(y){pp(y),J.remove(y)}function pp(y){let U=J.get(y).programs;U!==void 0&&(U.forEach(function(tt){xt.releaseProgram(tt)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,tt,X,q,wt){U===null&&(U=Ye);let Ct=q.isMesh&&q.matrixWorld.determinantAffine()<0,St=xp(y,U,tt,X,q);_.setMaterial(X,Ct);let Pt=tt.index,Nt=1;if(X.wireframe===!0){if(Pt=it.getWireframeAttribute(tt),Pt===void 0)return;Nt=2}let Zt=tt.drawRange,te=tt.attributes.position,Lt=Zt.start*Nt,he=(Zt.start+Zt.count)*Nt;wt!==null&&(Lt=Math.max(Lt,wt.start*Nt),he=Math.min(he,(wt.start+wt.count)*Nt)),Pt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,Pt.count)):te!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,te.count));let ze=he-Lt;if(ze<0||ze===1/0)return;Tt.setup(q,X,St,tt,Pt);let we,_e=vt;if(Pt!==null&&(we=gt.get(Pt),_e=rt,_e.setIndex(we)),q.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*Be()),_e.setMode(V.LINES)):_e.setMode(V.TRIANGLES);else if(q.isLine){let nn=X.linewidth;nn===void 0&&(nn=1),_.setLineWidth(nn*Be()),q.isLineSegments?_e.setMode(V.LINES):q.isLineLoop?_e.setMode(V.LINE_LOOP):_e.setMode(V.LINE_STRIP)}else q.isPoints?_e.setMode(V.POINTS):q.isSprite&&_e.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let nn=q._multiDrawStarts,At=q._multiDrawCounts,cn=q._multiDrawCount,oe=Pt?gt.get(Pt).bytesPerElement:1,Cn=J.get(X).currentProgram.getUniforms();for(let ei=0;ei<cn;ei++)Cn.setValue(V,"_gl_DrawID",ei),_e.render(nn[ei]/oe,At[ei])}else if(q.isInstancedMesh)_e.renderInstances(Lt,ze,q.count);else if(tt.isInstancedBufferGeometry){let nn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,nn);_e.renderInstances(Lt,ze,At)}else _e.render(Lt,ze)};function nu(y,U,tt,X){D!==null&&y.isNodeMaterial&&D.setObject(X,y),se===!0&&Ft.setState(y,tt,!1),y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=un,y.needsUpdate=!0,wa(y,U,X),y.side=$i,y.needsUpdate=!0,wa(y,U,X),y.side=Pn):wa(y,U,X)}this.compile=function(y,U,tt=null){tt===null&&(tt=y),D!==null&&D.renderStart(y,U,tt),w=_t.get(tt),w.init(U),v.push(w),tt.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),y!==tt&&y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),re=this.localClippingEnabled,se=Ft.init(this.clippingPlanes,re),se===!0&&Ft.setGlobalState(this.clippingPlanes,U),D!==null&&zt.render(w.state.shadowsArray,tt,U);let X=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let wt=q.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let St=wt[Ct];nu(St,tt,U,q),X.add(St)}else nu(wt,tt,U,q),X.add(wt)}),w=v.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(y,U,tt=null){let X=this.compile(y,U,tt);return new Promise(q=>{function wt(){if(X.forEach(function(Ct){let Pt=J.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&X.delete(Ct)}),X.size===0){q(y);return}setTimeout(wt,10)}fe.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let $l=null;function mp(y){$l&&$l(y)}function iu(){as.stop()}function su(){as.start()}let as=new Hd;as.setAnimationLoop(mp),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(y){$l=y,Dt.setAnimationLoop(y),y===null?as.stop():as.start()},Dt.addEventListener("sessionstart",iu),Dt.addEventListener("sessionend",su),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;D!==null&&D.renderStart(y,U);let tt=Dt.enabled===!0&&Dt.isPresenting===!0,X=E!==null&&(st===null||tt)&&E.begin(L,st);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(U),U=Dt.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,U,st),w=_t.get(y,v.length),w.init(U),w.state.textureUnits=et.getTextureUnits(),v.push(w),qt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(qt,Wn,U.reversedDepth),re=this.localClippingEnabled,se=Ft.init(this.clippingPlanes,re),S=bt.get(y,I.length),S.init(),I.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=L.xr.getDepthSensingMesh();Ct!==null&&Yl(Ct,U,-1/0,L.sortObjects)}Yl(y,U,0,L.sortObjects),S.finish(),D!==null&&D.updateLights(w.state.lightsArray),L.sortObjects===!0&&S.sort(Q,ft),Se=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Se&&$t.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ft.beginShadows();let q=w.state.shadowsArray;if(zt.render(q,y,U),se===!0&&Ft.endShadows(),(X&&E.hasRenderPass())===!1){let Ct=S.opaque,St=S.transmissive;if(w.setupLights(),U.isArrayCamera){let Pt=U.cameras;if(St.length>0)for(let Nt=0,Zt=Pt.length;Nt<Zt;Nt++){let te=Pt[Nt];au(Ct,St,y,te)}Se&&$t.render(y);for(let Nt=0,Zt=Pt.length;Nt<Zt;Nt++){let te=Pt[Nt];ru(S,y,te,te.viewport)}}else St.length>0&&au(Ct,St,y,U),Se&&$t.render(y),ru(S,y,U)}st!==null&&Y===0&&(et.updateMultisampleRenderTarget(st),et.updateRenderTargetMipmap(st)),X&&E.end(L),y.isScene===!0&&y.onAfterRender(L,y,U),Tt.resetDefaultState(),K=-1,nt=null,v.pop(),v.length>0?(w=v[v.length-1],et.setTextureUnits(w.state.textureUnits),se===!0&&Ft.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,D!==null&&D.renderEnd()};function Yl(y,U,tt,X){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)tt=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Kt)){X&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qt);let Ct=at.update(y),St=y.material;St.visible&&S.push(y,Ct,St,tt,ke.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Kt))){let Ct=at.update(y),St=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ke.copy(Ct.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(qt)),Array.isArray(St)){let Pt=Ct.groups;for(let Nt=0,Zt=Pt.length;Nt<Zt;Nt++){let te=Pt[Nt],Lt=St[te.materialIndex];Lt&&Lt.visible&&S.push(y,Ct,Lt,tt,ke.z,te,U)}}else St.visible&&S.push(y,Ct,St,tt,ke.z,null,U)}}let wt=y.children;for(let Ct=0,St=wt.length;Ct<St;Ct++)Yl(wt[Ct],U,tt,X)}function ru(y,U,tt,X){let{opaque:q,transmissive:wt,transparent:Ct}=y;w.setupLightsView(tt),se===!0&&Ft.setGlobalState(L.clippingPlanes,tt),X&&_.viewport(ot.copy(X)),q.length>0&&Sa(q,U,tt),wt.length>0&&Sa(wt,U,tt),Ct.length>0&&Sa(Ct,U,tt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function au(y,U,tt,X){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let Lt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new pn(1,1,{generateMipmaps:!0,type:Lt?Yn:Mn,minFilter:Ki,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let wt=w.state.transmissionRenderTarget[X.id],Ct=X.viewport||ot;wt.setSize(Ct.z*L.transmissionResolutionScale,Ct.w*L.transmissionResolutionScale);let St=L.getRenderTarget(),Pt=L.getActiveCubeFace(),Nt=L.getActiveMipmapLevel();L.setRenderTarget(wt),L.getClearColor(O),z=L.getClearAlpha(),z<1&&L.setClearColor(16777215,.5),L.clear(),Se&&$t.render(tt);let Zt=L.toneMapping;L.toneMapping=Xn;let te=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),se===!0&&Ft.setGlobalState(L.clippingPlanes,X),Sa(y,tt,X),et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,ze=U.length;he<ze;he++){let we=U[he],{object:_e,geometry:nn,material:At,group:cn}=we;if(At.side===Pn&&_e.layers.test(X.layers)){let oe=At.side;At.side=un,At.needsUpdate=!0,ou(_e,tt,X,nn,At,cn),At.side=oe,At.needsUpdate=!0,Lt=!0}}Lt===!0&&(et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt))}L.setRenderTarget(St,Pt,Nt),L.setClearColor(O,z),te!==void 0&&(X.viewport=te),L.toneMapping=Zt}function Sa(y,U,tt){let X=U.isScene===!0?U.overrideMaterial:null;for(let q=0,wt=y.length;q<wt;q++){let Ct=y[q],{object:St,geometry:Pt,group:Nt}=Ct,Zt=Ct.material;Zt.allowOverride===!0&&X!==null&&(Zt=X),St.layers.test(tt.layers)&&ou(St,U,tt,Pt,Zt,Nt)}}function ou(y,U,tt,X,q,wt){D!==null&&q.isNodeMaterial&&D.setObject(y,q),y.onBeforeRender(L,U,tt,X,q,wt),y.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(L,U,tt,X,y,wt),q.transparent===!0&&q.side===Pn&&q.forceSinglePass===!1?(q.side=un,q.needsUpdate=!0,L.renderBufferDirect(tt,U,X,q,y,wt),q.side=$i,q.needsUpdate=!0,L.renderBufferDirect(tt,U,X,q,y,wt),q.side=Pn):L.renderBufferDirect(tt,U,X,q,y,wt),y.onAfterRender(L,U,tt,X,q,wt)}function wa(y,U,tt){U.isScene!==!0&&(U=Ye);let X=J.get(y),q=w.state.lights,wt=w.state.shadowsArray,Ct=q.state.version,St=xt.getParameters(y,q.state,wt,U,tt,w.state.lightProbeGridArray),Pt=xt.getProgramCacheKey(St),Nt=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let Zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=pt.get(y.envMap||X.environment,Zt),X.envMapRotation=X.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",ti),Nt=new Map,X.programs=Nt);let te=Nt.get(Pt);if(te!==void 0){if(X.currentProgram===te&&X.lightsStateVersion===Ct)return cu(y,St),te}else St.uniforms=xt.getUniforms(y),D!==null&&y.isNodeMaterial&&D.build(y,tt,St),y.onBeforeCompile(St,L),te=xt.acquireProgram(St,Pt),Nt.set(Pt,te),X.uniforms=St.uniforms;let Lt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Ft.uniform),cu(y,St),X.needsLights=vp(y),X.lightsStateVersion=Ct,X.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=te,X.uniformsList=null,te}function lu(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=ar.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function cu(y,U){let tt=J.get(y);tt.outputColorSpace=U.outputColorSpace,tt.batching=U.batching,tt.batchingColor=U.batchingColor,tt.instancing=U.instancing,tt.instancingColor=U.instancingColor,tt.instancingMorph=U.instancingMorph,tt.skinning=U.skinning,tt.morphTargets=U.morphTargets,tt.morphNormals=U.morphNormals,tt.morphColors=U.morphColors,tt.morphTargetsCount=U.morphTargetsCount,tt.numClippingPlanes=U.numClippingPlanes,tt.numIntersection=U.numClipIntersection,tt.vertexAlphas=U.vertexAlphas,tt.vertexTangents=U.vertexTangents,tt.toneMapping=U.toneMapping}function gp(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let tt=0,X=y.length;tt<X;tt++){let q=y[tt];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function xp(y,U,tt,X,q){U.isScene!==!0&&(U=Ye),et.resetTextureUnits();let wt=U.fog,Ct=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,St=st===null?L.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ne.workingColorSpace,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Nt=pt.get(X.envMap||Ct,Pt),Zt=X.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,te=!!tt.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,ze=!!tt.morphAttributes.color,we=Xn;X.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(we=L.toneMapping);let _e=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,nn=_e!==void 0?_e.length:0,At=J.get(X),cn=w.state.lights;if(se===!0&&(re===!0||y!==nt)){let be=y===nt&&X.id===K;Ft.setState(X,y,be)}let oe=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==cn.state.version||At.outputColorSpace!==St||q.isBatchedMesh&&At.batching===!1||!q.isBatchedMesh&&At.batching===!0||q.isBatchedMesh&&At.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&At.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&At.instancing===!1||!q.isInstancedMesh&&At.instancing===!0||q.isSkinnedMesh&&At.skinning===!1||!q.isSkinnedMesh&&At.skinning===!0||q.isInstancedMesh&&At.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&At.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&At.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&At.instancingMorph===!1&&q.morphTexture!==null||At.envMap!==Nt||X.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ft.numPlanes||At.numIntersection!==Ft.numIntersection)||At.vertexAlphas!==Zt||At.vertexTangents!==te||At.morphTargets!==Lt||At.morphNormals!==he||At.morphColors!==ze||At.toneMapping!==we||At.morphTargetsCount!==nn||!!At.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,At.__version=X.version);let Cn=At.currentProgram;oe===!0&&(Cn=wa(X,U,q),D&&X.isNodeMaterial&&D.onUpdateProgram(X,Cn,At));let ei=!1,Pi=!1,Ps=!1,xe=Cn.getUniforms(),Ne=At.uniforms;if(_.useProgram(Cn.program)&&(ei=!0,Pi=!0,Ps=!0),X.id!==K&&(K=X.id,Pi=!0),At.needsLights){let be=gp(w.state.lightProbeGridArray,q);At.lightProbeGrid!==be&&(At.lightProbeGrid=be,Pi=!0)}if(ei||nt!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(V,"projectionMatrix",y.projectionMatrix),xe.setValue(V,"viewMatrix",y.matrixWorldInverse);let Di=xe.map.cameraPosition;Di!==void 0&&Di.setValue(V,ge.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(V,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(V,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,Pi=!0,Ps=!0)}if(At.needsLights&&(cn.state.sunShadowMap.length>0&&xe.setValue(V,"sunShadowMap",cn.state.sunShadowMap,et),cn.state.directionalShadowMap.length>0&&xe.setValue(V,"directionalShadowMap",cn.state.directionalShadowMap,et),cn.state.spotShadowMap.length>0&&xe.setValue(V,"spotShadowMap",cn.state.spotShadowMap,et),cn.state.pointShadowMap.length>0&&xe.setValue(V,"pointShadowMap",cn.state.pointShadowMap,et)),q.isSkinnedMesh){xe.setOptional(V,q,"bindMatrix"),xe.setOptional(V,q,"bindMatrixInverse");let be=q.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),xe.setValue(V,"boneTexture",be.boneTexture,et))}q.isBatchedMesh&&(xe.setOptional(V,q,"batchingTexture"),xe.setValue(V,"batchingTexture",q._matricesTexture,et),xe.setOptional(V,q,"batchingIdTexture"),xe.setValue(V,"batchingIdTexture",q._indirectTexture,et),xe.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&xe.setValue(V,"batchingColorTexture",q._colorsTexture,et));let Li=tt.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&B.update(q,tt,Cn),(Pi||At.receiveShadow!==q.receiveShadow)&&(At.receiveShadow=q.receiveShadow,xe.setValue(V,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=rv()),Pi){if(xe.setValue(V,"toneMappingExposure",L.toneMappingExposure),At.needsLights&&_p(Ne,Ps),wt&&X.fog===!0&&Ut.refreshFogUniforms(Ne,wt),Ut.refreshMaterialUniforms(Ne,X,W,P,w.state.transmissionRenderTarget[y.id]),At.needsLights&&At.lightProbeGrid){let be=At.lightProbeGrid;Ne.probesSH.value=be.texture,Ne.probesMin.value.copy(be.boundingBox.min),Ne.probesMax.value.copy(be.boundingBox.max),Ne.probesResolution.value.copy(be.resolution)}ar.upload(V,lu(At),Ne,et)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ar.upload(V,lu(At),Ne,et),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(V,"center",q.center),xe.setValue(V,"modelViewMatrix",q.modelViewMatrix),xe.setValue(V,"normalMatrix",q.normalMatrix),xe.setValue(V,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let be=X.uniformsGroups;for(let Di=0,Ls=be.length;Di<Ls;Di++){let uu=be[Di];lt.update(uu,Cn),lt.bind(uu,Cn)}}return Cn}function _p(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function vp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(y,U,tt){let X=J.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),J.get(y.texture).__webglTexture=U,J.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:tt,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let tt=J.get(y);tt.__webglFramebuffer=U,tt.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,tt=0){st=y,$=U,Y=tt;let X=null,q=!1,wt=!1;if(y){let St=J.get(y);if(St.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(V.FRAMEBUFFER,St.__webglFramebuffer),ot.copy(y.viewport),It.copy(y.scissor),T=y.scissorTest,_.viewport(ot),_.scissor(It),_.setScissorTest(T),K=-1;return}else if(St.__webglFramebuffer===void 0)et.setupRenderTarget(y);else if(St.__hasExternalTextures)et.rebindTextures(y,J.get(y.texture).__webglTexture,J.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Zt=y.depthTexture;if(St.__boundDepthTexture!==Zt){if(Zt!==null&&J.has(Zt)&&(y.width!==Zt.image.width||y.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(y)}}let Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(wt=!0);let Nt=J.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?X=Nt[U][tt]:X=Nt[U],q=!0):y.samples>0&&et.useMultisampledRTT(y)===!1?X=J.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?X=Nt[tt]:X=Nt,ot.copy(y.viewport),It.copy(y.scissor),T=y.scissorTest}else ot.copy(dt).multiplyScalar(W).floor(),It.copy(Bt).multiplyScalar(W).floor(),T=Re;if(tt!==0&&(X=N),_.bindFramebuffer(V.FRAMEBUFFER,X)&&_.drawBuffers(y,X),_.viewport(ot),_.scissor(It),_.setScissorTest(T),q){let St=J.get(y.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,tt)}else if(wt){let St=U;for(let Pt=0;Pt<y.textures.length;Pt++){let Nt=J.get(y.textures[Pt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,tt,St)}}else if(y!==null&&tt!==0){let St=J.get(y.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,St.__webglTexture,tt)}K=-1};function hu(y){let U=J.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=C.textureFormatReadable(y.format),U.__typeReadable=C.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,tt,X,q,wt,Ct,St=0){if(!(y&&y.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=J.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){_.bindFramebuffer(V.FRAMEBUFFER,Pt);try{let Nt=y.textures[St],Zt=Nt.format,te=Nt.type;y.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+St);let Lt=hu(Nt);if(Lt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-X&&tt>=0&&tt<=y.height-q&&V.readPixels(U,tt,X,q,yt.convert(Zt),yt.convert(te),wt)}finally{let Nt=st!==null?J.get(st).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(y,U,tt,X,q,wt,Ct,St=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=J.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(U>=0&&U<=y.width-X&&tt>=0&&tt<=y.height-q){_.bindFramebuffer(V.FRAMEBUFFER,Pt);let Nt=y.textures[St],Zt=Nt.format,te=Nt.type;y.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+St);let Lt=hu(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(U,tt,X,q,yt.convert(Zt),yt.convert(te),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let ze=st!==null?J.get(st).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,ze);let we=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await gd(V,we,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(he),V.deleteSync(we),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,tt=0){let X=Math.pow(2,-tt),q=Math.floor(y.image.width*X),wt=Math.floor(y.image.height*X),Ct=U!==null?U.x:0,St=U!==null?U.y:0;et.setTexture2D(y,0),V.copyTexSubImage2D(V.TEXTURE_2D,tt,0,0,Ct,St,q,wt),_.unbindTexture()},this.copyTextureToTexture=function(y,U,tt=null,X=null,q=0,wt=0){let Ct,St,Pt,Nt,Zt,te,Lt,he,ze,we=y.isCompressedTexture?y.mipmaps[wt]:y.image;if(tt!==null)Ct=tt.max.x-tt.min.x,St=tt.max.y-tt.min.y,Pt=tt.isBox3?tt.max.z-tt.min.z:1,Nt=tt.min.x,Zt=tt.min.y,te=tt.isBox3?tt.min.z:0;else{let Ne=Math.pow(2,-q);Ct=Math.floor(we.width*Ne),St=Math.floor(we.height*Ne),y.isDataArrayTexture?Pt=we.depth:y.isData3DTexture?Pt=Math.floor(we.depth*Ne):Pt=1,Nt=0,Zt=0,te=0}X!==null?(Lt=X.x,he=X.y,ze=X.z):(Lt=0,he=0,ze=0);let _e=yt.convert(U.format),nn=yt.convert(U.type),At;U.isData3DTexture?(et.setTexture3D(U,0),At=V.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(et.setTexture2DArray(U,0),At=V.TEXTURE_2D_ARRAY):(et.setTexture2D(U,0),At=V.TEXTURE_2D),_.activeTexture(V.TEXTURE0),_.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(V.UNPACK_ALIGNMENT,U.unpackAlignment);let cn=_.getParameter(V.UNPACK_ROW_LENGTH),oe=_.getParameter(V.UNPACK_IMAGE_HEIGHT),Cn=_.getParameter(V.UNPACK_SKIP_PIXELS),ei=_.getParameter(V.UNPACK_SKIP_ROWS),Pi=_.getParameter(V.UNPACK_SKIP_IMAGES);_.pixelStorei(V.UNPACK_ROW_LENGTH,we.width),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we.height),_.pixelStorei(V.UNPACK_SKIP_PIXELS,Nt),_.pixelStorei(V.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(V.UNPACK_SKIP_IMAGES,te);let Ps=y.isDataArrayTexture||y.isData3DTexture,xe=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let Ne=J.get(y),Li=J.get(U),be=J.get(Ne.__renderTarget),Di=J.get(Li.__renderTarget);_.bindFramebuffer(V.READ_FRAMEBUFFER,be.__webglFramebuffer),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ls=0;Ls<Pt;Ls++)Ps&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(y).__webglTexture,q,te+Ls),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(U).__webglTexture,wt,ze+Ls)),V.blitFramebuffer(Nt,Zt,Ct,St,Lt,he,Ct,St,V.DEPTH_BUFFER_BIT,V.NEAREST);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||y.isRenderTargetTexture||J.has(y)){let Ne=J.get(y),Li=J.get(U);_.bindFramebuffer(V.READ_FRAMEBUFFER,A),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,k);for(let be=0;be<Pt;be++)Ps?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.__webglTexture,q,te+be):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ne.__webglTexture,q),xe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Li.__webglTexture,wt,ze+be):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Li.__webglTexture,wt),q!==0?V.blitFramebuffer(Nt,Zt,Ct,St,Lt,he,Ct,St,V.COLOR_BUFFER_BIT,V.NEAREST):xe?V.copyTexSubImage3D(At,wt,Lt,he,ze+be,Nt,Zt,Ct,St):V.copyTexSubImage2D(At,wt,Lt,he,Nt,Zt,Ct,St);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else xe?y.isDataTexture||y.isData3DTexture?V.texSubImage3D(At,wt,Lt,he,ze,Ct,St,Pt,_e,nn,we.data):U.isCompressedArrayTexture?V.compressedTexSubImage3D(At,wt,Lt,he,ze,Ct,St,Pt,_e,we.data):V.texSubImage3D(At,wt,Lt,he,ze,Ct,St,Pt,_e,nn,we):y.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,Lt,he,Ct,St,_e,nn,we.data):y.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,Lt,he,we.width,we.height,_e,we.data):V.texSubImage2D(V.TEXTURE_2D,wt,Lt,he,Ct,St,_e,nn,we);_.pixelStorei(V.UNPACK_ROW_LENGTH,cn),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe),_.pixelStorei(V.UNPACK_SKIP_PIXELS,Cn),_.pixelStorei(V.UNPACK_SKIP_ROWS,ei),_.pixelStorei(V.UNPACK_SKIP_IMAGES,Pi),wt===0&&U.generateMipmaps&&V.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(y){J.get(y).__webglFramebuffer===void 0&&et.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?et.setTextureCube(y,0):y.isData3DTexture?et.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?et.setTexture2DArray(y,0):et.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){$=0,Y=0,st=null,_.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Ae={},ln={};async function Kd(i=()=>{}){let t=await(await fetch("img/manifest.json")).json(),e=Object.keys(t),n=0;return await Promise.all(e.map(s=>new Promise(r=>{let a=new Image;a.decoding="async",a.onload=()=>{Ae[s]=a,ln[s]=t[s],n++,i(n/e.length),r()},a.onerror=()=>{console.warn("image failed",s),n++,r()},a.src=t[s].src}))),t}var jt=i=>ln[i]?ln[i].src:`img/ui/${i}.webp`;var di=.72,jd=30,Qd=21,Dn={uTime:{value:0},uTint:{value:new Yt(1,1,1)},uHazeCol:{value:new Yt("#9fbfb4")},uNight:{value:0}},av=`
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
}`,ov=`
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
  vec3 col = c.rgb * mix(uTint, vec3(1.0), uEmit) * (1.0 - uDark);
  col = mix(col, uHazeCol * uTint, uHaze);
  col = mix(col, vec3(1.0, 0.98, 0.9), uFlash);
  col = (col * c.a + vec3(1.0, 0.96, 0.82) * o * (1.0 - c.a)) / a;
  gl_FragColor = vec4(col, a * uAlpha);
  #include <colorspace_fragment>
}`,tf=.055,lv=new yn(1,1).translate(0,.5,0),_h=new Map;function nf(i,{repeat:t=!1,blur:e=0}={}){let n=i+(e?":b"+e:"");if(_h.has(n))return _h.get(n);let s=Ae[i];if(!s)throw new Error("missing image "+i);if(e){let a=document.createElement("canvas"),o=e*3;a.width=s.width+o*2,a.height=s.height+o*2;let l=a.getContext("2d");l.filter=`blur(${e}px)`,l.drawImage(s,o,o),s=a}let r=new Ke(s);return r.colorSpace=Ge,r.anisotropy=4,t&&(r.wrapS=r.wrapT=ds),r.needsUpdate=!0,_h.set(n,r),r}var lr=class{constructor(t,e,n,{x:s=0,z:r=0,y:a=0,sway:o=0,flip:l=!1,shadow:c=0,haze:h=0,dark:f=0,order:u=2,blur:m=0,emit:g=0}={}){this.world=t,this.h=n,this.flip=l,this.sx=1,this.sy=1,this.blur=m,this.mat=new je({vertexShader:av,fragmentShader:ov,transparent:!0,depthWrite:!1,side:Pn,uniforms:{map:{value:null},uTint:Dn.uTint,uTime:Dn.uTime,uHazeCol:Dn.uHazeCol,uSway:{value:o},uPhase:{value:Math.random()*6.28},uAlpha:{value:1},uFlash:{value:0},uHaze:{value:h},uDark:{value:f},uEmit:{value:g},uOut:{value:0},uPad:{value:new ae(0,0)}}}),this.mesh=new He(lv,this.mat),this.mesh.rotation.x=-di,this.mesh.renderOrder=u,this.mesh.position.set(s,a,r),this.set(e),t.scene.add(this.mesh),c&&(this.shadow=new He(t.shadowGeo,t.shadowMat),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.shadowW=c,t.scene.add(this.shadow)),this.sync()}set(t){if(this.name===t)return;this.name=t,this.mat.uniforms.map.value=nf(t,{blur:this.blur});let e=ln[t]||{w:Ae[t].width,h:Ae[t].height};this.aspect=e.w/e.h}useCanvas(t){let e=new li(t);e.colorSpace=Ge,e.anisotropy=4,this.name=null,this.canvasTex=e,this.mat.uniforms.map.value=e,this.aspect=t.width/t.height}refresh(){this.canvasTex&&(this.canvasTex.needsUpdate=!0)}get x(){return this.mesh.position.x}get z(){return this.mesh.position.z}get w(){return this.h*this.aspect}setPos(t,e,n=this.mesh.position.y){this.mesh.position.set(t,n,e),this.sync()}sync(){let t=this.h*this.aspect;if(this.mesh.scale.set(t*this.sx*(this.flip?-1:1),this.h*this.sy,1),this.mat.uniforms.uOut.value>0&&this.mat.uniforms.uPad.value.set(tf/Math.max(.05,t*this.sx),tf/Math.max(.05,this.h*this.sy)),this.shadow){this.shadow.position.set(this.mesh.position.x,.02,this.mesh.position.z+.02);let e=this.shadowW*(1-Math.min(.5,this.mesh.position.y*.25));this.shadow.scale.set(e,e*.42,1)}}set alpha(t){this.mat.uniforms.uAlpha.value=t}get alpha(){return this.mat.uniforms.uAlpha.value}set flash(t){this.mat.uniforms.uFlash.value=t}set outline(t){let e=this.mat.uniforms;if(t<=0){e.uOut.value=0,e.uPad.value.set(0,0);return}let n=e.uOut.value;e.uOut.value=t,n||this.sync()}get outline(){return this.mat.uniforms.uOut.value}set visible(t){this.mesh.visible=t,this.shadow&&(this.shadow.visible=t)}get visible(){return this.mesh.visible}dispose(){this.world.scene.remove(this.mesh),this.shadow&&this.world.scene.remove(this.shadow),this.mat.dispose()}};function ef(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=128,n=0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,i),a.addColorStop(n,i),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,e,e);let o=new li(s);return o.colorSpace=Ge,o}var cv=`
attribute vec4 aCol; attribute float aSize; attribute float aKind;
uniform float uScale;
varying vec4 vCol; varying float vKind;
void main(){
  vCol = aCol; vKind = aKind;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,hv=`
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
}`,yl=class{constructor(t,e,n){this.max=e,this.p=[];let s=new vn;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.kind=new Float32Array(e),s.setAttribute("position",new tn(this.pos,3)),s.setAttribute("aCol",new tn(this.col,4)),s.setAttribute("aSize",new tn(this.size,1)),s.setAttribute("aKind",new tn(this.kind,1)),this.geo=s,this.mat=new je({vertexShader:cv,fragmentShader:hv,transparent:!0,depthWrite:!1,blending:n?Zi:Yi,uniforms:{uScale:{value:400}}}),this.pts=new Gr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=4,t.add(this.pts)}add(t){this.p.length>=this.max&&this.p.shift(),t.t=0,this.p.push(t)}update(t){let e=0,n=new Yt;for(let s=this.p.length-1;s>=0;s--){let r=this.p[s];if(r.t+=t,r.t>=r.life){this.p.splice(s,1);continue}r.vy-=(r.g||0)*t;let a=r.drag?Math.max(0,1-r.drag*t):1;r.vx*=a,r.vy*=a,r.vz*=a,r.wander&&(r.vx+=Math.sin(r.t*2.1+r.ph)*r.wander*t,r.vy+=Math.cos(r.t*1.7+r.ph)*r.wander*.6*t),r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.02&&r.g&&(r.y=.02,r.vy*=-.3,r.vx*=.6,r.vz*=.6);let o=r.t/r.life,l=r.a;r.fadeIn&&(l*=Math.min(1,r.t/r.fadeIn)),l*=r.blink?.55+.45*Math.sin(r.t*r.blink+r.ph):1,l*=1-Math.pow(o,r.fadePow||3),n.set(r.c),this.pos[e*3]=r.x,this.pos[e*3+1]=r.y,this.pos[e*3+2]=r.z,this.col[e*4]=n.r,this.col[e*4+1]=n.g,this.col[e*4+2]=n.b,this.col[e*4+3]=l,this.size[e]=r.s*(r.grow?.6+o*.9:1),this.kind[e]=r.k||0,e++}this.geo.setDrawRange(0,e);for(let s of["position","aCol","aSize","aKind"])this.geo.attributes[s].needsUpdate=!0}},uv=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,dv=`
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
  // something to define the negative space ... make it dark"). G: pond water, high in the middle.
  vec3 ex = texture2D(tExtra, mu).rgb;
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
}`;function fv(i){let t=i.width,e=i.height,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.drawImage(i,-t/2,-e/2),s.drawImage(i,t/2,-e/2),s.drawImage(i,-t/2,e/2),s.drawImage(i,t/2,e/2);let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d");a.drawImage(i,0,0),a.globalCompositeOperation="destination-in";let o=a.createRadialGradient(t/2,e/2,t*.18,t/2,e/2,t*.5);return o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,t,e),s.drawImage(r,0,0),n}var bl=class{constructor(t){this.canvas=t,this.renderer=new xl({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ge,this.renderer.setClearColor("#2d3a2c"),this.renderer.setTransparentSort((e,n)=>e.groupOrder-n.groupOrder||e.renderOrder-n.renderOrder||e.object.matrixWorld.elements[14]-n.object.matrixWorld.elements[14]||e.id-n.id),this.scene=new Or,this.camera=new an(jd,16/9,1,200),this.target=new Z(0,0,0),this.look=new Z(0,0,0),this.dist=Qd,this.distGoal=Qd,this.shake=0,this.shadowGeo=new yn(1,1),this.shadowMat=new oi({map:ef("rgba(28,30,40,1)","rgba(28,30,40,0)",64,.25),transparent:!0,depthWrite:!1,opacity:.32}),this.glowTex=ef("rgba(255,210,140,1)","rgba(255,170,90,0)",128,.05),this.soft=new yl(this.scene,500,!1),this.glow=new yl(this.scene,500,!0),this.glows=[],this.layers=[],this.sprites=[],this.quality=1,this.resize()}get uniforms(){return Dn}buildGround(t,e,n,s){let[r,a,o,l]=t,c=S=>{let w=document.createElement("canvas");return w.width=Math.round(o*S),w.height=Math.round(l*S),w},h=c(6),f=c(3),u=h.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,h.width,h.height);let m=S=>({s:S,X:w=>(w-r)*S,Z:w=>(w-a)*S});e(u,m(6));let g=f.getContext("2d");g.fillStyle="#000",g.fillRect(0,0,f.width,f.height),n(g,m(3));let x=c(3),p=x.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,x.width,x.height),s&&s(p,m(3));let d=S=>{let w=new li(S);return w.flipY=!1,w.minFilter=We,w.generateMipmaps=!1,w},M=S=>{let w=new Ke(fv(Ae[S]));return w.wrapS=w.wrapT=ds,w.colorSpace=Ge,w.anisotropy=8,w.needsUpdate=!0,w},R=new je({vertexShader:uv,fragmentShader:dv,uniforms:{tGrass:{value:M("grass")},tDirt:{value:M("dirt")},tCobble:{value:M("cobble")},tMask:{value:d(h)},tShade:{value:d(f)},tExtra:{value:d(x)},uTime:Dn.uTime,uRect:{value:new Ee(r,a,o,l)},uTint:Dn.uTint,uNight:Dn.uNight}}),b=new He(new yn(o,l),R);b.rotation.x=-Math.PI/2,b.position.set(r+o/2,0,a+l/2),b.renderOrder=0,this.scene.add(b),this.maskCanvas=h}sprite(t,e,n){let s=new lr(this,t,e,n);return this.sprites.push(s),s}decal(t,e,n,s,r,{rot:a=0,y:o=.03,order:l=1,alpha:c=1,dark:h=0}={}){let f=typeof t=="string"?nf(t):(()=>{let g=new li(t);return g.colorSpace=Ge,g})(),u=new je({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; uniform float uDark; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(mix(c.rgb, vec3(0.08, 0.16, 0.2), uDark) * uTint, c.a * uAlpha);
#include <colorspace_fragment>
}`,uniforms:{map:{value:f},uTint:Dn.uTint,uAlpha:{value:c},uDark:{value:h}},transparent:!0,depthWrite:!1}),m=new He(new yn(1,1),u);return m.rotation.set(-Math.PI/2,0,a),m.scale.set(s,r,1),m.position.set(e,o,n),m.renderOrder=l,this.scene.add(m),m}addGlow(t,e,n,s,r="#ffc98a",{always:a=0,flicker:o=.08}={}){let l=new He(new yn(1,1),new oi({map:this.glowTex,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:Zi,opacity:0}));l.rotation.x=-di,l.position.set(t,e,n),l.scale.set(s,s,1),l.renderOrder=3,this.scene.add(l);let c={m:l,size:s,always:a,flicker:o,ph:Math.random()*9};return this.glows.push(c),c}addLayer(t,e,n=0){return this.scene.add(t),this.layers.push({group:t,dz:e,dy:n}),t}setLight(t){Dn.uTint.value.setRGB(t.tint[0],t.tint[1],t.tint[2]),Dn.uNight.value=t.night,this.shadowMat.opacity=t.shadow,Dn.uHazeCol.value.set("#a7c4b8").lerp(new Yt("#5a6aa8"),t.night),this.night=t.night,this.renderer.setClearColor(new Yt("#33452f").lerp(new Yt("#1b2140"),t.night))}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.quality>0?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=jd*Math.max(1,16/9/(t/e)*.85),this.camera.updateProjectionMatrix();let s=e*n/(2*Math.tan($c.degToRad(this.camera.fov)/2));this.soft.mat.uniforms.uScale.value=s*.05,this.glow.mat.uniforms.uScale.value=s*.05}follow(t,e,n,s=[0,0],r=[-1e9,1e9],a=1e9){let o=Math.min(r[1],Math.max(r[0],t+s[0])),l=Math.min(a,e+s[1]),c=1-Math.exp(-n*4.5);this.target.x+=(o-this.target.x)*c,this.target.z+=(l-this.target.z)*c,this.dist+=(this.distGoal-this.dist)*(1-Math.exp(-n*3))}snap(t,e){this.target.set(t,0,e)}update(t,e){Dn.uTime.value=e;let n=this.dist,s=0,r=0;this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),s=(Math.random()-.5)*this.shake*.4,r=(Math.random()-.5)*this.shake*.4),this.camera.position.set(this.target.x+s,n*Math.sin(di)+r+.9,this.target.z+n*Math.cos(di)),this.look.set(this.target.x+s,.9+r,this.target.z),this.camera.lookAt(this.look);for(let a of this.layers)a.group.position.z=this.target.z+a.dz,a.group.position.y=a.dy;for(let a of this.glows){let o=1+Math.sin(e*7+a.ph)*a.flicker+Math.sin(e*13.1+a.ph*2)*a.flicker*.5;a.m.material.opacity=Math.min(1,a.always+(1-a.always)*this.night)*.75*o,a.m.scale.set(a.size*o,a.size*o,1)}this.soft.update(t),this.glow.update(t)}render(){this.renderer.render(this.scene,this.camera)}toScreen(t,e,n,s={x:0,y:0}){let r=new Z(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.behind=r.z>1,s}static topY(t){return t*Math.cos(di)}static topZ(t){return-t*Math.sin(di)}dust(t,e,n=3,s="#e8dcc0"){for(let r=0;r<n;r++){let a=Math.random()*6.28;this.soft.add({x:t+Math.cos(a)*.15,y:.1,z:e+Math.sin(a)*.1,vx:Math.cos(a)*.6,vy:.5+Math.random()*.4,vz:Math.sin(a)*.3,drag:3,life:.5+Math.random()*.2,s:4+Math.random()*3,c:s,a:.55,grow:!0})}}sparkle(t,e,n,s=8,r="#fff4c2",a=.6,o=1.2){for(let l=0;l<s;l++){let c=Math.random()*6.28,h=Math.random()*a;this.glow.add({x:t+Math.cos(c)*h,y:e+Math.random()*.4,z:n+Math.sin(c)*h*.6,vx:Math.cos(c)*.6,vy:o*(.5+Math.random()),vz:Math.sin(c)*.3,drag:2.5,life:.7+Math.random()*.5,s:5+Math.random()*5,c:r,a:1,k:1})}}burst(t,e,n,s,r=10){for(let a=0;a<r;a++){let o=Math.random()*6.28,l=1.5+Math.random()*2;this.soft.add({x:t,y:e,z:n,vx:Math.cos(o)*l,vy:2+Math.random()*2.5,vz:Math.sin(o)*l*.5,g:9,life:.6+Math.random()*.3,s:3.5+Math.random()*3,c:s,a:1,fadePow:4})}}};var aa={crow:{h:1.55,front:!0,neck:[.52,.13],shN:[.6,.3],shF:[.36,.3],hipN:[.55,.9],hipF:[.42,.88],tail:[.14,.8],arms:2},bear:{h:1.6,front:!0,neck:[.52,.1],shN:[.74,.3],shF:[.24,.3],hipN:[.66,.86],hipF:[.32,.86],arms:2},duck:{h:1.35,front:!0,neck:[.5,.13],shN:[.5,.35],shF:[.5,.35],hipN:[.58,.88],hipF:[.44,.88],tail:[.16,.74],arms:0,waddle:1},fish:{h:1.5,front:!1,neck:[.52,.19],shN:[.84,.3],shF:[.2,.3],hipN:[.62,.88],hipF:[.38,.88],arms:1},raccoon:{h:1.45,front:!0,neck:[.5,.12],shN:[.8,.34],shF:[.2,.34],hipN:[.6,.88],hipF:[.4,.88],tail:[.2,.78],arms:1},croc:{h:1.65,front:!0,neck:[.5,.12],shN:[.8,.4],shF:[.2,.4],hipN:[.62,.9],hipF:[.38,.9],tail:[.22,.85],arms:1},turtle:{h:1.4,front:!1,neck:[.55,.12],shN:[.74,.4],shF:[.32,.38],hipN:[.64,.88],hipF:[.42,.88],arms:2,waddle:.7}},pv=.6,_s=(i,t,e)=>i+(t-i)*e,Sn=(i,t)=>Ae[`rn_${i}_${t}`],cr=(i,t)=>ln[`rn_${i}_${t}`]&&ln[`rn_${i}_${t}`].j||[.5,.1],vs=class{constructor(t,e=pv){this.who=t,this.cfg=aa[t],this.res=e,this.t=Math.random()*10,this.ph=0,this.amp=0,this.lean=0,this.headLag=0,this.blinkIn=1+Math.random()*3,this.blinkT=0,this.mouth=0,this.happy=0,this.c=document.createElement("canvas"),this.g=this.c.getContext("2d"),this.measure()}measure(){let t=this.who,e=this.cfg,n=Sn(t,"body"),s=Sn(t,"head"),r=Sn(t,"leg"),h=-((1-cr(t,"leg")[1])*r.height)-e.hipN[1]*n.height+e.neck[1]*n.height-cr(t,"head")[1]*s.height,f=Sn(t,"arm"),u=Math.max(n.width*.62,s.width*.62);f&&e.arms&&(u=Math.max(u,Math.abs(e.shN[0]-.5)*n.width+f.height*.85));let m=Sn(t,"tail");m&&e.tail&&(u=Math.max(u,n.width*.5+m.width*.95)),this.figPx=-h,this.W=Math.ceil(u*2+30),this.H=Math.ceil(-h+30),this.c.width=Math.ceil(this.W*this.res),this.c.height=Math.ceil(this.H*this.res),this.worldH=e.h*this.H/this.figPx}update(t,{speed01:e=0,talking:n=!1,happy:s=!1,draw:r=!0}={}){this.t+=t,this.amp=_s(this.amp,Math.min(1,e),Math.min(1,t*8)),this.amp>.02?this.ph+=t*9*Math.max(.4,e):this.ph=_s(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.12,this.blinkIn=2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t),n?(this.mouthT=(this.mouthT||0)-t,this.mouthT<=0&&(this.mouth=this.mouth?0:1,this.mouthT=this.mouth?.09+Math.random()*.08:.06+Math.random()*.07)):this.mouth=0,this.happy=_s(this.happy,s?1:0,Math.min(1,t*6));let a=this.lean;this.lean=_s(this.lean,this.amp*.06,Math.min(1,t*8)),this.headLag=_s(this.headLag,-(this.lean-a)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.talking=n,r&&this.draw()}draw(){let t=this.who,e=this.cfg,n=this.g,s=this.t,r=this.amp,a=Math.sin(this.ph),o=Math.cos(this.ph),l=Sn(t,"body"),c=Sn(t,"leg"),h=Sn(t,"arm"),f=Sn(t,"tail");if(!l||!c)return;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.c.width,this.c.height),n.setTransform(this.res,0,0,this.res,0,0);let u=this.H-4,m=this.W*.5,g=cr(t,"leg"),x=cr(t,"arm"),p=.5*r,d=-a*p,M=a*p,R=Math.max(0,o)*6*r,b=Math.max(0,-o)*6*r,S=(1-g[1])*c.height,w=u-S*Math.max(Math.cos(d),Math.cos(M)),I=(1-r)*Math.sin(s*2.2)*.018,v=(e.waddle||0)*a*.09*r,E=w-e.hipN[1]*l.height,L=m-l.width*.5,F=z=>[L+e[z][0]*l.width,E+e[z][1]*l.height],D=[m,w],N=z=>{n.save(),n.translate(D[0],D[1]),n.rotate(this.lean+v+Math.sin(this.ph*2)*.015*r),n.scale(1-I*.4,1+I),n.translate(-D[0],-D[1]),z(),n.restore()},A=(z,j,P,W=0,Q=0,ft=1)=>{z&&(n.save(),n.translate(P[0],P[1]+Q),n.rotate(W),n.scale(ft,1),n.drawImage(z,-j[0]*z.width,-j[1]*z.height),n.restore())},k=Math.sin(s*1.5)*.05*(1-r),$=a*.55*r+k,Y=-a*.45*r-k;this.happy>.01&&($=_s($,-2.3+Math.sin(s*9)*.25,this.happy),Y=_s(Y,2.2-Math.sin(s*9+1)*.25,this.happy)),this.talking&&($+=Math.sin(s*3.1)*.18);let st=this.talking?Math.sin(s*7.3)*.05+Math.sin(s*2.3)*.03:0,K=this.headLag+Math.sin(this.ph*2-.8)*.04*r+Math.sin(s*1.1)*.03*(1-r)+st-v*.5-this.happy*.08,nt=Math.sin(this.ph*2-.9)*3*r-this.happy*4,ot=this.mouth&&Sn(t,"talk")?"talk":this.blinkT>0&&Sn(t,"blink")?"blink":"head",It=Sn(t,ot),T=cr(t,ot),O=Math.sin(s*2.6)*.12+Math.sin(this.ph*2)*.22*r;f&&e.tail&&N(()=>A(f,cr(t,"tail"),F("tail"),O)),e.arms>=2&&N(()=>A(h,x,F("shF"),Y)),A(c,g,[F("hipF")[0],w],M,-b),A(c,g,[F("hipN")[0],w],d,-R),N(()=>{e.front||A(It,T,F("neck"),K,nt),n.drawImage(l,L,E),e.front&&A(It,T,F("neck"),K,nt),e.arms>=1&&A(h,x,F("shN"),$)})}};function sf(){for(let i of Object.keys(aa)){if(!Sn(i,"body"))continue;let t=new vs(i,1);t.blinkIn=99,t.t=0,t.update(0,{});let e="pt_"+i;Ae[e]=t.c,ln[e]={w:t.c.width,h:t.c.height,src:t.c.toDataURL("image/png")}}}var Rt=(i,t=1)=>(ln[i]&&ln[i].wh||1)*t,ca=[[-44,-10.9,-5.8,6.8],[-11,12,-6.4,7],[12,30,-3.4,4.6],[30,54,-5.6,7],[-2.1,-.7,6.5,9.2],[-11,11.5,8.6,19]],Ti=8.1,fi=-1.4,ve={x:1.2,z:14.6,rx:6.2,rz:3},Nn=[2.3,3.7,10.4,13.5];function of(i){return 1+.07*Math.sin(3*i+1)+.045*Math.sin(5*i+2.2)}function lf(i,t){let e=(i-ve.x)/ve.rx,n=(t-ve.z)/ve.rz;return Math.hypot(e,n)/of(Math.atan2(n,e))}var Ei=30,ys=-12,la=[];for(let i=0;i<2;i++)for(let t=0;t<3;t++)la.push({x:3.6+t*2.1,z:-.7+i*2.3});var ct={start:[1.5,1.8],door:[-4.1,-6.2],mailbox:[-.4,-5.2],cauldron:[-8.6,-2.4],cat:[-2.3,-5.5],crowWait:[1.4,-3.6],crowEnter:[16,.6],sign:[10.6,1.2],fountain:[42,0],board:[39.6,-5.4],myStall:[47.6,4.4],roadEnd:[29.5,.6],woodSign:[-10.6,.1],arch:[fi,9.5],fish:[3,13],pondSign:[-3.2,6.2]},Sl=[[-16.6,-2.9],[-21.2,4.7],[-26.4,-3.5],[-31.2,4.3],[-37.4,-1.4]],Mh=[[-19.2,0],[-24.6,-1.4],[-33.4,-.4],[-39.4,3.4],[-8.4,16.8]],cf=["moth","ladybug","moth","ladybug","ladybug"],rf=[[-15.2,-4.6],[-23.4,-4.8],[-29.6,-2.2],[-35.2,-4.6],[-41.6,-4.2]],af=[[-18.4,6],[-28.6,6.3],[-34.8,6.1],[-42.2,5.6]],pi={mira:[36,-3.3],juniper:[48,-3.3],oz:[36.6,4.4]};function vh(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function yh(i,t,e=0){return ca.some(([n,s,r,a])=>i>n-e&&i<s+e&&t>r-e&&t<a+e)}function hf(i){let t={colliders:[],occluders:[],props:{},tick:[]},e=vh(20261031),n=(T,O,z,j,P={})=>{let W=i.sprite(T,O,{x:z,z:j,shadow:P.shadow??O*.5,...P});return P.col&&t.colliders.push({x:z+(P.colX||0),z:j-(P.colZ??.15),r:P.col}),P.occ!==!1&&O>2.2&&t.occluders.push(W),W},s=(T,O,z,j=.06)=>{let P=(1-z)*T.h;return[T.x+(O-.5)*T.w*(T.flip?-1:1),P*Math.cos(di),T.z-P*Math.sin(di)+j]},r=(T,O,z,j)=>t.colliders.push({rect:[T,O,z,j]}),a=n("cottage",Rt("cottage"),ct.door[0]+.11*(ln.cottage?ln.cottage.ww:6.7),-6.7,{shadow:0,occ:!0});r(a.x-a.w*.45,a.x+a.w*.45,-10,-6.5),t.props.cottage=a;for(let[T,O,z]of[[.35,.4,1.5],[.7,.71,1.5],[.39,.74,1.1]]){let j=s(a,T,O);i.addGlow(j[0],j[1],j[2],z,"#ffc477")}t.chimney=s(a,.78,.03),t.props.cauldron=n("cauldron_out",Rt("cauldron_out"),ct.cauldron[0],ct.cauldron[1],{col:.8,shadow:1.6}),i.addGlow(ct.cauldron[0],.35,ct.cauldron[1]+.1,2.4,"#ff9a4a",{always:.55,flicker:.12}),t.props.mailbox=n("mailbox",Rt("mailbox"),ct.mailbox[0],ct.mailbox[1],{col:.35,shadow:.7});let o=n("lantern",Rt("lantern"),1.2,-5.6,{col:.3,shadow:.6});{let T=s(o,.71,.42);i.addGlow(T[0],T[1],T[2],2.6,"#ffc066",{always:.15})}n("barrel",Rt("barrel"),.4,-6.3,{col:.5,shadow:1}),n("basket",Rt("basket"),-.9,-6.4,{shadow:.6}),n("bench",Rt("bench"),-7.4,3.6,{col:.6,colX:0,shadow:1.6}),n("wcan",Rt("wcan"),9.3,-1.5,{shadow:.5}),n("basket",Rt("basket"),2.2,-2.2,{shadow:.55}),t.props.sign=n("signpost",Rt("signpost"),ct.sign[0],ct.sign[1],{col:.3,shadow:.9}),t.props.woodSign=n("signpost",Rt("signpost",.92),ct.woodSign[0],ct.woodSign[1],{col:.3,shadow:.9,flip:!0});let l=n("lantern",Rt("lantern"),12.6,-3.4,{col:.3,shadow:.6});{let T=s(l,.71,.42);i.addGlow(T[0],T[1],T[2],2.6,"#ffc066",{always:.15})}t.props.fountain=n("fountain",Rt("fountain"),ct.fountain[0],ct.fountain[1],{col:1.75,colZ:.9,shadow:3.4}),t.props.board=n("board",Rt("board"),ct.board[0],ct.board[1],{col:.7,shadow:1.6});let c={};for(let[T,O,z]of[["mira","stall_red",pi.mira],["juniper","stall_green",pi.juniper],["oz","stall_blue",pi.oz]]){let j=n(O,Rt(O),z[0],z[1],{shadow:2.8});r(z[0]-1.45,z[0]+1.45,z[1]-1.6,z[1]-.25),c[T]=j}t.props.stalls=c,t.props.myStall=n("stall_mine",Rt("stall_mine"),ct.myStall[0],ct.myStall[1],{shadow:2.8}),r(ct.myStall[0]-1.4,ct.myStall[0]+1.4,ct.myStall[1]-1.3,ct.myStall[1]-.25);let h=[["house_a",32.2,-7.6,!1],["house_b",38.2,-8.4,!0],["house_a",46.2,-8.4,!0],["house_b",52,-7.6,!1]];for(let[T,O,z,j]of h){let P=n(T,Rt(T),O,z,{shadow:0,flip:j});r(O-2.1,O+2.1,z-3,z-.2);for(let[W,Q]of T==="house_a"?[[.4,.52],[.38,.36]]:[[.3,.52],[.62,.52]]){let ft=s(P,W,Q);i.addGlow(ft[0],ft[1],ft[2],2.2,"#ffb866",{flicker:.04})}}for(let T of[33.6,50.4]){let O=n("lamp",Rt("lamp"),T,2.6,{col:.25,shadow:.6}),z=s(O,.5,.2);i.addGlow(z[0],z[1],z[2],3,"#ffcf7a",{always:.12})}n("barrel",Rt("barrel"),30.8,-4.8,{col:.5,shadow:1}),n("bench",Rt("bench"),44.6,6.4,{col:.6,shadow:1.6}),n("bench",Rt("bench"),39.4,6.4,{col:.6,shadow:1.6,flip:!0}),n("basket",Rt("basket"),49.9,-2.4,{shadow:.55}),n("basket",Rt("basket"),34.4,-2.5,{shadow:.55}),n("wcan",Rt("wcan"),53,-4.9,{shadow:.5});let f=[],u=["oak","pine","birch","oak","pine"],m=["tallwood","pine","bluewood","oak","tallwood","pine"],g=(T,O,z={})=>{let j=z.kinds||(T<ys?m:u),P=j[Math.floor(e()*j.length)],W=Rt(P)*(.85+e()*.3)*(z.scale||1),Q=n(z.kind||P,z.kind&&z.h||W,T,O,{sway:.05+e()*.05,flip:e()<.5,shadow:W*.32,col:z.noCol?0:.45,haze:z.haze||0});return f.push([T,O,W]),Q};for(let T=-47;T<30;T+=1.6+e()*1.4){if(T>a.x-a.w*.5&&T<a.x+a.w*.5){g(T,-11.2-e()*1.4,{haze:.08});continue}g(T,-8.2-e()*1.2),e()<.75&&g(T+e()*1.2,-10.8-e()*1.6,{haze:.12})}for(let T=28;T<58;T+=1.7+e()*1.4)g(T,-11.6-e()*1.6,{haze:.15});for(let T=12.5;T<29.5;T+=1.8+e()*1.6)g(T,-4.8-e()*1.6),e()<.6&&g(T+.8,-6.8-e()*1.4,{haze:.06});for(let T=-8;T<4;T+=1.4+e()*1.1)T>-.4||g(-12.2-e()*.8,T);for(let T=4.4;T<8.6;T+=1.1+e()*.5)n(e()<.5?"bush":"bush_flower",Rt("bush",.95+e()*.25),-12.4-e()*.6,T,{sway:.05,flip:e()<.5,shadow:1.2});r(-13.2,-11.6,-12,.2),r(-13.2,-11.6,3.6,8.2);for(let T=-8;T<10;T+=1.5+e()*1.2)g(-45.6-e()*1.2,T),g(-48.6-e()*2,T+e(),{haze:.12});for(let T=-44.5;T<-13;T+=1.3+e()*.9)e()<.22?g(T,7.9+e()*.8,{kinds:["bluewood"],scale:.75}):n(e()<.7?"bush":"bush_flower",Rt("bush",.9+e()*.3),T,7.5+e()*.7,{col:.55,sway:.05,flip:e()<.5,shadow:1.2});for(let[T,O]of rf)g(T,O),g(T+1.3+e()*.6,O-.9,{kinds:["bluewood","tallwood"],scale:.8}),e()<.6&&g(T-1.4-e()*.5,O-.6,{kinds:["bluewood","pine"],scale:.7});for(let[T,O]of af)g(T,O,{kinds:["bluewood"],scale:.8}),n("bush",Rt("bush",1.1),T-1.1,O+.4,{col:.55,sway:.05,shadow:1.3}),n(e()<.5?"bush_flower":"fern",Rt("bush_flower"),T+1,O+.5,{sway:.06,flip:!0,shadow:1});for(let T=-8;T<10;T+=1.6+e()*1.3)g(55.6+e()*1.6,T),g(58.5+e()*2.5,T+e(),{haze:.1});for(let T=12.5;T<29.5;T+=2.2+e()*2)g(T,6.4+e()*2.2,{scale:.9});for(let[T,O]of[[33,9],[52.5,8.6]])g(T,O,{scale:.95,kinds:u});g(44,9.8,{kind:"bush_flower",h:Rt("bush_flower",1.2),noCol:!0}),g(-9.8,-.8,{kind:"ytree",h:Rt("ytree")}),g(10.4,-3.8,{kind:"birch",h:Rt("birch")});let x=1.35,p=Rt("ledge")?ln.ledge.ww*x:2.3,d=!1;for(let T=-12.4;T<13;T+=p*.8){let O=T+p*.5;if(O+p*.5>fi-.75&&O-p*.5<fi+.75){O<fi?n("ledge",Rt("ledge",x),fi-.8-p*.5,Ti-.35,{shadow:0,flip:d=!d}):n("ledge",Rt("ledge",x),fi+.8+p*.5,Ti-.35,{shadow:0,flip:d=!d});continue}n("ledge",Rt("ledge",x)*(.95+e()*.1),O,Ti-.35+e()*.12,{shadow:0,flip:d=!d})}t.props.steps=n("steps",Rt("steps",x),fi,Ti+.35,{shadow:0,order:1});let M=n("arch",Rt("arch"),ct.arch[0],ct.arch[1],{shadow:2,occ:!1});t.colliders.push({x:ct.arch[0]-1.05,z:ct.arch[1],r:.2},{x:ct.arch[0]+1.05,z:ct.arch[1],r:.2});{let T=s(M,.52,.42);i.addGlow(T[0],T[1],T[2],2.2,"#ffc066",{always:.12,flicker:.05})}t.props.pondSign=n("signpost",Rt("signpost",.85),ct.pondSign[0],ct.pondSign[1],{col:.3,shadow:.9}),t.props.willow=n("willow",Rt("willow"),-7.4,11,{col:.55,sway:.08,shadow:2.4}),f.push([-7.4,11,Rt("willow")]);for(let T=9.2;T<20;T+=1.6+e()*1.1)g(-12.3-e()*.7,T,{kinds:["oak","birch","pine"],scale:.9}),g(12.4+e()*.8,T+e()*.6,{kinds:["oak","pine","birch"],scale:.9});let R=(T,O,z,j=1)=>{for(let P=T;P<O;P+=ln.hedge_dark.ww*j*.72)n("hedge_dark",Rt("hedge_dark",j*(.9+e()*.2)),P,z+e()*.4,{flip:e()<.5,shadow:0,sway:.02})};R(-12.8,13,20),R(-45,-12,9.3,.95);let b=(T,O=1)=>{let z=of(T)*O;return[ve.x+Math.cos(T)*ve.rx*z,ve.z+Math.sin(T)*ve.rz*z]};for(let[T,O,z,j]of[[3,"reeds",1,{}],[3.3,"reeds",.85,{flip:!0}],[3.55,"iris",1,{}],[2.6,"rock_pond",1,{col:.4}],[.35,"reeds",1.05,{flip:!0}],[.1,"iris",1,{flip:!0}],[-.35,"rock_pond",.85,{col:.4,flip:!0}],[1.95,"reeds",.8,{}],[2.25,"iris",.9,{flip:!0}],[1.05,"rock_pond",.7,{col:.35}],[-2.3,"iris",.8,{}],[-2.75,"reeds",.75,{flip:!0}]]){let[P,W]=b(T,1.06);n(O,Rt(O,z),P,W,{sway:O==="rock_pond"?0:.06,shadow:Rt(O,z)*.6,...j})}t.props.boat=n("boat",Rt("boat",1.1),ve.x-3.2,ve.z+1.7,{shadow:0,sway:0}),n("stepstones",Rt("stepstones",1.1),-5.6,9.6,{shadow:0,order:1}),n("stepstones",Rt("stepstones",1),-3.6,18.2,{shadow:0,order:1,flip:!0});for(let[T,O,z]of[[-9.6,9.6,"fern"],[9.4,9.3,"bush_flower"],[10.4,17.6,"fern"],[-10.2,18.4,"bush"],[6.2,18.6,"flowers"],[-6.4,18.8,"grass_tuft"],[8.2,10.2,"flowers"],[-4,10,"grass_tuft"],[7.9,16.4,"grass_tuft"]])n(z,Rt(z)*(.9+e()*.2),T,O,{sway:z==="flowers"?.04:.06,flip:e()<.5,shadow:.6});t.props.dock=i.decal("mp_dock_top",(Nn[0]+Nn[1])/2,(Nn[2]+Nn[3])/2,Nn[3]-Nn[2]+.3,1.9,{rot:Math.PI/2,y:.04}),t.props.bucket=n("mp_bucket",.48,Nn[1]-.2,Nn[3]-.55,{shadow:.4});let S=[[-2.6,13.3,.9,.4],[-1.4,16,.75,2.2],[4.9,15.9,.85,4.1],[5.9,13.7,.6,1],[.4,15.3,.55,5.2]];t.pads=S.map(([T,O,z,j])=>({m:i.decal("mp_lilypad",T,O,z,z,{rot:j,y:.035}),x:T,z:O,r:j,ph:e()*6})),n("lily",Rt("lily",1.1),ve.x+5.2,ve.z+1.6,{shadow:0,sway:.02});let w=b(.5,1.08),I=[S[2][0],S[2][1]-.05],v=n("frog",Rt("frog",.9),w[0],w[1],{shadow:.35});t.props.frog=v;let E=4+e()*4,L=0,F=-1,D=[["mp_minnow",.9,.42],["mp_bluegill",.8,.65],["mp_carp",1.05,.62],["mp_minnow",.7,.33]].map(([T,O,z],j)=>({m:i.decal(T,ve.x,ve.z,O,z,{dark:1,alpha:.32,y:.025}),ph:j*1.7,sp:.13+j*.03,a:.45+j%2*.18,b:.42+(j+1)%2*.2}));t.fishShadows=D,t.tick.push((T,O)=>{for(let z of t.pads)z.m.rotation.z=z.r+Math.sin(O*.4+z.ph)*.08,z.m.position.x=z.x+Math.sin(O*.3+z.ph)*.05;for(let z of D){let j=O*z.sp+z.ph,P=ve.x+Math.sin(j)*ve.rx*z.a+Math.sin(j*2.3)*.5,W=ve.z+Math.sin(j*1.6+z.ph)*ve.rz*z.b,Q=P-z.m.position.x,ft=W-z.m.position.z;if(Q*Q+ft*ft>1e-7){let dt=Math.atan2(-ft,Q),Bt=z.m.rotation.z;z.m.rotation.z=Bt+Math.atan2(Math.sin(dt-Bt),Math.cos(dt-Bt))*Math.min(1,T*4)}z.m.position.set(P,.025,W)}if(E-=T,F<0&&E<=0&&(F=0),F>=0){F+=T/.55;let z=L?I:w,j=L?w:I,P=Math.min(1,F);if(v.flip=j[0]<z[0],v.setPos(z[0]+(j[0]-z[0])*P,z[1]+(j[1]-z[1])*P,Math.sin(P*Math.PI)*.7),P>=1){F=-1,L=1-L,E=5+e()*6;for(let W=0;W<8;W++){let Q=W/8*6.28;i.soft.add({x:j[0]+Math.cos(Q)*.2,y:.08,z:j[1]+Math.sin(Q)*.1,vx:Math.cos(Q)*.6,vy:.5,vz:Math.sin(Q)*.3,g:2.5,life:.5,s:3,c:"#e6fbff",a:.8,k:0})}}}}),t.trees=f,t.props.berries=Sl.map(([T,O],z)=>n("berry_full",Rt("berry_full",1.05),T,O,{col:.6,shadow:1.5,flip:z%2===1,sway:.03}));let N=[["bush",Rt("bush"),.55],["bush_flower",Rt("bush_flower"),.55],["fern",Rt("fern"),0],["boulder",Rt("boulder"),.5],["stump",Rt("stump"),.45],["flowers",Rt("flowers"),0],["pebbles",Rt("pebbles"),0],["grass_tuft",Rt("grass_tuft"),0]],A=(T,O,z)=>{for(let j of la)if(Math.abs(T-j.x)<1.3+z&&Math.abs(O-j.z)<1.3+z)return!1;for(let j of["door","mailbox","cauldron","cat","crowWait","sign","board","myStall","fountain"]){let P=ct[j];if(Math.hypot(T-P[0],O-P[1])<2.2+z)return!1}for(let j of Object.values(pi))if(Math.hypot(T-j[0],O-j[1])<2.6)return!1;return!0},k=0;for(let T=0;T<150&&k<3e3;k++){let O=-12+e()*68,z=-7+e()*16,[j,P,W]=N[Math.floor(e()*N.length)],Q=yh(O,z,-.4);Q&&(W||P>1)||A(O,z,Q?.3:0)&&(O>30&&O<54&&z>-6&&z<7&&Math.hypot(O-42,z-.5)<9.5||Math.abs(z-bh(O))<1.3&&O>-2&&O<33||O<0&&Math.abs(z-Ml(O))<1.3||Math.hypot(O-ct.woodSign[0],z-ct.woodSign[1])<1.6||z>6.2&&O>-12.5&&O<12.5||Math.abs(O-fi)<2&&z>3.5||(n(j,P*(.85+e()*.3),O,z,{col:Q?0:W,sway:j==="fern"||j==="grass_tuft"||j.startsWith("bush")?.06:0,flip:e()<.5,shadow:P*.7}),T++))}for(let T=0,O=0;T<70&&O<2e3;O++){let z=-10+e()*64,j=-6+e()*13;if(!yh(z,j)||!A(z,j,0)||Math.abs(j-bh(z))<1.2&&z>-2&&z<33||z<0&&Math.abs(j-Ml(z))<1.1||z>31&&Math.hypot(z-42,j-.5)<9||j>6.4&&z<12.5)continue;let P=e()<.6?"grass_tuft":e()<.8?"pebbles":"mushrooms";n(P,Rt(P)*(.8+e()*.4),z,j,{sway:P==="grass_tuft"?.07:0,flip:e()<.5,shadow:.4}),T++}let $=(T,O,z)=>{for(let[j,P]of Sl)if(Math.hypot(T-j,O-P)<1.5+z)return!1;for(let[j,P]of Mh)if(Math.hypot(T-j,O-P)<1.4+z)return!1;for(let[j,P]of[...rf,...af])if(Math.hypot(T-j,O-P)<1.4)return!1;return Math.hypot(T-ct.woodSign[0],O-ct.woodSign[1])>1.6},st=[["fern",0,.06,4],["tallgrass",0,.07,3],["flowers",0,.04,2],["mushrooms",0,0,1],["grass_tuft",0,.07,3],["stump",.45,0,1],["log",.6,0,1],["boulder",.5,0,1],["bush",.55,.05,2]].flatMap(T=>Array(T[3]).fill(T));for(let T=0,O=0;T<95&&O<4e3;O++){let z=-45+e()*33.5,j=-7.2+e()*15,[P,W,Q]=st[Math.floor(e()*st.length)],ft=yh(z,j,-.3);if(Math.abs(j-Ml(z))<(W?2.1:1)||!$(z,j,W?.6:0)||ft&&W&&e()<.7)continue;let Bt=Rt(P)*(.85+e()*.35);n(P,Bt,z,j,{col:W,sway:Q,flip:e()<.5,shadow:Bt*.7}),T++}let K=new Mi;for(let T=0;T<7;T++){let O=new lr(i,"backdrop",8.5,{x:-60+T*30.5,z:0,haze:.35,order:2});i.scene.remove(O.mesh),K.add(O.mesh)}for(let T=0;T<8;T++){let O=new lr(i,"backdrop",7,{x:-55+T*25.5,z:2.5,haze:.18,order:2,flip:!0});i.scene.remove(O.mesh),K.add(O.mesh)}K.position.z=-16,i.scene.add(K),t.back=K,i.buildGround([-60,-35,150,65],(T,O)=>{let z=(Q,ft,dt,Bt,Re=1)=>{T.fillStyle=Bt,T.globalAlpha=Re,T.beginPath(),T.ellipse(O.X(Q),O.Z(ft),dt*O.s,dt*O.s*.9,0,0,7),T.fill(),T.globalAlpha=1},j=vh(7);T.globalCompositeOperation="lighter";let P=[];for(let Q=-6.2;Q<4.1;Q+=.25)P.push([-4.1+(Q+6.2)*.45+Math.sin(Q)*.3,Q]);for(let Q=0;Q<33;Q+=.25)P.push([Q,bh(Q)]);for(let[Q,ft]of P)z(Q+(j()-.5)*.4,ft+(j()-.5)*.4,.95+j()*.35,"rgb(150,0,0)",.55);for(let Q=0;Q>-46;Q-=.25)z(Q+(j()-.5)*.4,Ml(Q)+(j()-.5)*.5,.6+j()*.3,"rgb(118,0,0)",Q<-12?.42:.5);for(let Q=0;Q<=1;Q+=.04)z(fi+Q*4.4,9.9+Math.sin(Q*3)*.25,.55+j()*.25,"rgb(118,0,0)",.5);for(let Q=6.2;Q<9.4;Q+=.25)z(fi+(j()-.5)*.3,Q,.55,"rgb(110,0,0)",.45);for(let Q=0;Q<=1;Q+=.05)z(-3-Q*5.4,-2.2+Math.sin(Q*3)*.3,.75+j()*.3,"rgb(120,0,0)",.5);for(let Q of la)for(let ft=0;ft<6;ft++)z(Q.x+(j()-.5)*.6,Q.z+(j()-.5)*.5,.75+j()*.2,"rgb(0,0,150)",.6);for(let Q=0;Q<340;Q++){let ft=j()*6.28,dt=Math.sqrt(j())*9;z(42+Math.cos(ft)*dt*1.25,.5+Math.sin(ft)*dt*.7,1+j()*.5,"rgb(0,140,0)",.6)}for(let Q=30;Q<55;Q+=.6)z(Q,-5+(j()-.5)*.8,1.1,"rgb(0,120,0)",.5);T.globalCompositeOperation="source-over";let W=document.createElement("canvas");W.width=T.canvas.width,W.height=T.canvas.height,W.getContext("2d").drawImage(T.canvas,0,0),T.filter="blur(2px)",T.drawImage(W,0,0),T.filter="none"},(T,O)=>{for(let[P,W,Q]of f){let ft=T.createRadialGradient(O.X(P),O.Z(W-.6),0,O.X(P),O.Z(W-.6),Q*.55*O.s);ft.addColorStop(0,"rgba(255,0,0,0.55)"),ft.addColorStop(1,"rgba(255,0,0,0)"),T.fillStyle=ft,T.beginPath(),T.arc(O.X(P),O.Z(W-.6),Q*.55*O.s,0,7),T.fill()}let z=(P,W,Q,ft,dt=.6)=>{let Bt=T.createLinearGradient(O.X(P),O.Z(W),O.X(Q),O.Z(ft));Bt.addColorStop(0,`rgba(255,0,0,${dt})`),Bt.addColorStop(1,"rgba(255,0,0,0)"),T.fillStyle=Bt,T.fillRect(0,0,T.canvas.width,T.canvas.height)};T.globalCompositeOperation="lighten",z(0,-13,0,-6.5),z(-14.5,0,-11.5,0,.3),z(-50,0,-42,0),z(58,0,53,0);{let P=T.createLinearGradient(0,O.Z(Ti-.2),0,O.Z(Ti+1.9));P.addColorStop(0,"rgba(255,0,0,0.8)"),P.addColorStop(1,"rgba(255,0,0,0)"),T.fillStyle=P,T.fillRect(O.X(-12.5),O.Z(Ti-.2),O.X(13)-O.X(-12.5),O.Z(Ti+1.9)-O.Z(Ti-.2))}T.fillStyle="rgba(255,0,0,0.42)",T.fillRect(O.X(-60),0,O.X(-12.5)-O.X(-60),T.canvas.height);let j=vh(11);for(let P=0;P<90;P++){let W=-46+j()*34,Q=-7+j()*16,ft=(1.2+j()*2.2)*O.s,dt=T.createRadialGradient(O.X(W),O.Z(Q),0,O.X(W),O.Z(Q),ft);dt.addColorStop(0,"rgba(0,255,0,0.7)"),dt.addColorStop(1,"rgba(0,255,0,0)"),T.fillStyle=dt,T.beginPath(),T.arc(O.X(W),O.Z(Q),ft,0,7),T.fill()}for(let P=0;P<70;P++){let W=-45+j()*33,Q=-6.5+j()*14,ft=(.4+j()*.9)*O.s,dt=T.createRadialGradient(O.X(W),O.Z(Q),0,O.X(W),O.Z(Q),ft);dt.addColorStop(0,"rgba(0,0,255,0.9)"),dt.addColorStop(.6,"rgba(0,0,255,0.5)"),dt.addColorStop(1,"rgba(0,0,255,0)"),T.fillStyle=dt,T.beginPath(),T.ellipse(O.X(W),O.Z(Q),ft*1.3,ft,.5,0,7),T.fill()}},(T,O)=>{let z=T.canvas.width,j=T.canvas.height;T.fillStyle="#f00",T.fillRect(0,0,z,j),T.fillStyle="#000";for(let[re,qt,,ge]of ca)T.fillRect(O.X(re-1),0,O.X(qt+1)-O.X(re-1),O.Z(ge+.8));let P=document.createElement("canvas");P.width=z,P.height=j,P.getContext("2d").drawImage(T.canvas,0,0),T.clearRect(0,0,z,j),T.fillStyle="#000",T.fillRect(0,0,z,j),T.filter="blur(5px)",T.drawImage(P,0,0),T.filter="none";let W=Math.floor(O.X(ve.x-ve.rx*1.4)),Q=Math.ceil(O.X(ve.x+ve.rx*1.4)),ft=Math.floor(O.Z(ve.z-ve.rz*1.5)),dt=Math.ceil(O.Z(ve.z+ve.rz*1.5)),Bt=T.getImageData(W,ft,Q-W,dt-ft),Re=Bt.data,Kt=O.X(0),se=O.Z(0);for(let re=0;re<dt-ft;re++)for(let qt=0;qt<Q-W;qt++){let ge=(W+qt+.5-Kt)/O.s,ke=(ft+re+.5-se)/O.s,Ye=lf(ge,ke),Se=Ye>1?.46*Math.max(0,1-(Ye-1)/.22):Math.min(1,.46+(1-Ye)*.85);Re[(re*(Q-W)+qt)*4+1]=Math.round(Se*255)}T.putImageData(Bt,W,ft)});let nt=(()=>{let T=document.createElement("canvas");T.width=64,T.height=256;let O=T.getContext("2d"),z=O.createLinearGradient(0,0,0,256);z.addColorStop(0,"rgba(255,240,200,0)"),z.addColorStop(.3,"rgba(255,240,200,0.9)"),z.addColorStop(1,"rgba(255,240,200,0)"),O.fillStyle=z,O.fillRect(0,0,64,256);let j=O.createLinearGradient(0,0,64,0);return j.addColorStop(0,"rgba(0,0,0,1)"),j.addColorStop(.5,"rgba(0,0,0,0)"),j.addColorStop(1,"rgba(0,0,0,1)"),O.globalCompositeOperation="destination-out",O.fillStyle=j,O.fillRect(0,0,64,256),new li(T)})(),ot=[];for(let[T,O,z]of[[-1,-3,2.2],[6,-2,3],[21,-1,2.6],[40,-2,3.2],[47,1,2],[-19,0,2.4],[-27.5,1.5,3],[-38,-.5,2.2]]){let j=new He(new yn(z,11),new oi({map:nt,transparent:!0,depthWrite:!1,blending:Zi,opacity:.2}));j.position.set(T,4,O),j.rotation.set(-di,0,-.42),j.renderOrder=4,i.scene.add(j),ot.push({m:j,ph:e()*6})}t.tick.push((T,O)=>{for(let z of ot)z.m.material.opacity=(1-i.night)*(.13+.05*Math.sin(O*.5+z.ph))});let It=0;return t.tick.push((T,O)=>{if(It+=T,It<.05)return;It=0;let z=i.target.x,j=i.target.z,[P,W]=ct.cauldron;Math.abs(z-P)<22&&e()<.5&&i.glow.add({x:P+(e()-.5)*.7,y:1.05,z:W+.1,vx:0,vy:.5+e()*.4,vz:0,wander:.6,ph:e()*6,life:1.4,s:3+e()*3,c:e()<.5?"#c79bff":"#8fe0a8",a:.9,k:0}),Math.abs(z-42)<22&&e()<.6&&i.glow.add({x:42+(e()-.5)*1.2,y:2+e()*.6,z:-.4,vx:(e()-.5)*.8,vy:.6,vz:0,g:3,life:.8,s:3+e()*2,c:"#cfefff",a:.8,k:1}),t.chimney&&Math.abs(z-t.chimney[0])<24&&e()<.22&&i.soft.add({x:t.chimney[0]+(e()-.5)*.2,y:t.chimney[1]+.1,z:t.chimney[2],vx:.18,vy:.45,vz:0,wander:.25,ph:e()*6,fadeIn:.4,life:3.4,s:7+e()*5,grow:1.6,c:"#efe9df",a:.5,k:0,fadePow:2});let Q=i.night;if(e()<.25+Q*.5){let ft=z+(e()-.5)*24,dt=j+(e()-.5)*12;Q>.4?i.glow.add({x:ft,y:.4+e()*2,z:dt,vx:0,vy:0,vz:0,wander:1.2,ph:e()*6,blink:3+e()*3,fadeIn:1,life:5+e()*3,s:5+e()*4,c:"#d8ff8a",a:.95,k:0,fadePow:2}):i.soft.add({x:ft,y:.5+e()*3,z:dt,vx:.1,vy:.02,vz:0,wander:.3,ph:e()*6,fadeIn:1,life:5,s:2+e()*2,c:"#fff8dc",a:.6,k:0,fadePow:2})}e()<.08&&i.soft.add({x:z+(e()-.5)*22,y:7+e()*2,z:j-3+e()*6,vx:.5,vy:-.7,vz:0,wander:2,ph:e()*6,life:9,s:5+e()*3,c:e()<.5?"#8fae4a":"#d6a84a",a:.95,g:0,fadePow:6})}),t}function bh(i){if(i<9)return 4.1+Math.sin(i*.35)*.35;if(i<15){let t=(i-9)/6;return 4.1+(.6-4.1)*(t*t*(3-2*t))}return .6+Math.sin(i*.4)*.5}function Ml(i){let t=1.9+Math.sin(i*.28)*1.1;if(i<=-11)return t;let e=Math.min(1,(i+11)/11),n=e*e*(3-2*e);return t+(4-t)*n}function oa(i,t,e){let n=i.maskCanvas;if(!n)return"grass";oa.data||(oa.data=n.getContext("2d").getImageData(0,0,n.width,n.height).data);let s=Math.round((t+60)*6),a=(Math.round((e+35)*6)*n.width+s)*4,o=oa.data;return o[a+1]>110?"stone":o[a]>100||o[a+2]>100?"dirt":"grass"}function mv(i,t){return i>Nn[0]&&i<Nn[1]&&t>Nn[2]-.6&&t<Nn[3]}function Sh(i,t,e,n=.32){if(!ca.some(([s,r,a,o])=>t>s&&t<r&&e>a&&e<o)||e>9&&!mv(t,e)&&lf(t,e)<1+n/ve.rz*.6)return!0;for(let s of i.colliders)if(s.rect){let[r,a,o,l]=s.rect;if(t>r-n&&t<a+n&&e>o-n&&e<l+n)return!0}else if(s.r&&(t-s.x)**2+((e-s.z)*1.3)**2<(s.r+n)**2)return!0;return!1}var gv={stall_red:[.12,.9,.655,.6],stall_green:[.12,.9,.655,.6],stall_blue:[.12,.9,.655,.6],stall_mine:[.14,.88,.585,.53]};function wh(i,t,e){let n=e.join(",");if(i.goodsKey===n)return;i.goodsKey=n;let s=Ae[t],r=2,a=i.goodsC;a||(a=i.goodsC=document.createElement("canvas"),a.width=s.width*r,a.height=s.height*r,i.useCanvas(a));let o=a.getContext("2d"),l=a.width,c=a.height;o.clearRect(0,0,l,c),o.drawImage(s,0,0,l,c);let[h,f,u,m]=gv[t],g=Math.min(e.length,7),x=Math.max(g,4),p=(f-h)/x,d=h+(f-h-p*g)/2+p/2,M=[];for(let R=0;R<g;R++){let b=g>3&&R%2===1,S=Math.sin(R*12.9898+n.length)*.5;M.push({name:e[R],u:d+p*R+S*p*.12,v:b?m:u,s:(b?.19:.21)*c,rot:S*.12})}M.sort((R,b)=>R.v-b.v);for(let R of M){let b=Ae[R.name];if(!b)continue;let S=R.u*l,w=R.v*c,I=R.s,v=I*b.width/b.height;o.save(),o.fillStyle="rgba(58,30,16,0.32)",o.beginPath(),o.ellipse(S+I*.04,w-I*.02,v*.4,I*.08,0,0,Math.PI*2),o.fill(),o.translate(S,w),o.rotate(R.rot),o.drawImage(b,-v/2,-I*.94,v,I),o.restore()}i.refresh()}var Eh="brew-a-witch-potion-v1";function de(){return Date.now()+(G.offsetMs||0)}function Th(){let i=Date.now();return{v:1,name:"",coins:120,fame:0,fameLv:1,inv:{cham:0,lav:0,man:0,mush:0,feather:0,berry:0,moth:0,glowbug:0,ladybug:0,beetle:0,minnow:0,bluegill:0,carp:0},found:{},wild:{berry:[],bug:[],fish:[]},potions:{},seen:{},plots:[{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-36e5},{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-6*6e4}],q:0,qn:0,discovered:{},recipes:{},fog:[],stall:{open:!1,items:[]},bought:{},cust:{i:0,nextAt:0,here:!1,asked:!1},board:[],newCount:0,brewTut:0,lesson:0,seenTown:!1,seenWood:!1,seenPond:!1,beetles:0,boughtHour:0,pos:[1.5,1.5],lastSeen:i,offsetMs:0,settings:{sound:!0,music:!0,tod:-1}}}var G=xv();function xv(){try{let i=JSON.parse(localStorage.getItem(Eh));if(i&&i.v===1){let t=Th();return Object.assign(t,i,{settings:Object.assign(t.settings,i.settings),inv:Object.assign(t.inv,i.inv),wild:Object.assign(t.wild,i.wild)})}}catch{}return Th()}var uf=0;function pe(i=!1){if(i){clearTimeout(uf),uf=setTimeout(()=>pe(),400);return}try{localStorage.setItem(Eh,JSON.stringify(G))}catch{}}function df(){localStorage.removeItem(Eh),G=Th()}var Et=null,hr=null,ua=null,ts=null,bs=null,wl=null,da=!1,ur=0,Tl=0,Rh=0,ff=0,Ih=0,_v=0,ha=null,dr=null;function _f(){if(Et){Et.state==="suspended"&&Et.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Et=new i,hr=Et.createGain(),hr.gain.value=.85,hr.connect(Et.destination),ua=Et.createGain(),ua.connect(hr),ts=Et.createGain(),ts.gain.value=.12,ts.connect(hr),bs=Et.createGain(),bs.gain.value=.5,bs.connect(hr),wl=Et.createBuffer(1,Et.sampleRate*2,Et.sampleRate);let t=wl.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;ha=Et.createBufferSource(),ha.buffer=wl,ha.loop=!0;let e=Et.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=.6,dr=Et.createGain(),dr.gain.value=0,ha.connect(e),e.connect(dr),dr.connect(bs),ha.start(),El(),clearInterval(ff),ff=setInterval(yv,700)}function El(){Et&&(ua.gain.value=G.settings.sound?1:0,bs.gain.value=G.settings.sound?.5:0,G.settings.music&&!da&&Mv(),!G.settings.music&&da&&Sv())}function vf(i,t){Ih=i,_v=t,dr&&dr.gain.setTargetAtTime(.09*t,Et.currentTime,.3)}function me(i,t,e,{type:n="sine",vol:s=.3,slide:r=0,attack:a=.005,bus:o=ua}={}){let l=Et.createOscillator(),c=Et.createGain();l.type=n,l.frequency.setValueAtTime(i,t),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,i*r),t+e),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+a),c.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(o),l.start(t),l.stop(t+e+.02)}function Un(i,t,{vol:e=.2,freq:n=1200,q:s=1,type:r="bandpass",to:a=0,bus:o=ua}={}){let l=Et.createBufferSource();l.buffer=wl;let c=Et.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(n,i),c.Q.value=s,a&&c.frequency.exponentialRampToValueAtTime(a,i+t);let h=Et.createGain();h.gain.setValueAtTime(e,i),h.gain.exponentialRampToValueAtTime(1e-4,i+t),l.connect(c),c.connect(h),h.connect(o),l.start(i,Math.random()),l.stop(i+t+.02)}var vv=[0,2,4,7,9],pf=0,Ah=0,mf=0,ut={step(i="grass"){if(!Et)return;let t=Et.currentTime;t-pf<.12||(pf=t,Ah^=1,i==="stone"?Un(t,.05,{vol:.09,freq:Ah?1900:1500,q:3}):Un(t,.07,{vol:.07,freq:Ah?700:560,q:1.2,type:"lowpass"}))},pluck(i=0){if(!Et)return;let t=Et.currentTime,e=vv[i%5]+12*Math.floor(i/5),n=523*Math.pow(2,e/12);me(n,t,.35,{type:"triangle",vol:.2}),me(n*2,t,.18,{type:"sine",vol:.06})},harvest(){if(!Et)return;let i=Et.currentTime;Un(i,.12,{vol:.12,freq:900,to:300,q:1}),me(392,i,.12,{type:"sine",vol:.18,slide:1.8}),me(784,i+.08,.25,{type:"triangle",vol:.14})},pop(){if(!Et)return;let i=Et.currentTime;me(620,i,.09,{type:"sine",vol:.18,slide:1.9})},splash(){if(!Et)return;let i=Et.currentTime;Un(i,.35,{vol:.2,freq:1400,to:300,q:.8}),[0,.06,.13].forEach((t,e)=>me(300+e*140+Math.random()*60,i+t,.12,{type:"sine",vol:.12,slide:2.4}))},bubble(){if(!Et)return;let i=Et.currentTime;me(180+Math.random()*260,i,.1,{type:"sine",vol:.07,slide:2.6})},stir(){if(!Et)return;let i=Et.currentTime;Un(i,.18,{vol:.05,freq:500,to:900,q:2})},pour(){if(!Et)return;let i=Et.currentTime;Un(i,.2,{vol:.06,freq:2600,q:1.4})},reveal(){if(!Et)return;let i=Et.currentTime;me(880+Math.random()*200,i,.4,{type:"sine",vol:.03})},near(){if(!Et)return;let i=Et.currentTime;me(1175,i,.3,{type:"sine",vol:.1}),me(1568,i+.07,.4,{type:"sine",vol:.08})},bottle(){if(!Et)return;let i=Et.currentTime;Un(i,.08,{vol:.12,freq:3e3,q:3}),me(1046,i+.05,.12,{type:"square",vol:.05}),[523,659,784,1046].forEach((t,e)=>me(t,i+.1+e*.07,.45,{type:"triangle",vol:.13}))},discover(){if(!Et)return;let i=Et.currentTime;Un(i,.8,{vol:.12,freq:400,to:7e3,q:.7}),[523,659,784,988,1175,1568].forEach((t,e)=>me(t,i+.15+e*.08,.7,{type:"triangle",vol:.12})),[262,330,392].forEach(t=>me(t,i+.6,1.4,{type:"sine",vol:.12}))},fail(){if(!Et)return;let i=Et.currentTime;Un(i,.4,{vol:.2,freq:300,q:.7,type:"lowpass"}),[330,277,220].forEach((t,e)=>me(t,i+e*.12,.25,{type:"triangle",vol:.15}))},coin(i=0){if(!Et)return;let t=Et.currentTime+i*.05;me(1568,t,.07,{type:"square",vol:.05}),me(2093,t+.06,.18,{type:"square",vol:.05})},click(){if(!Et)return;let i=Et.currentTime;me(700,i,.06,{type:"triangle",vol:.16,slide:1.4})},open(){if(!Et)return;let i=Et.currentTime;Un(i,.25,{vol:.08,freq:500,to:2500,q:.8}),me(523,i,.15,{type:"triangle",vol:.1,slide:1.5})},close(){if(!Et)return;let i=Et.currentTime;Un(i,.2,{vol:.06,freq:2e3,to:500,q:.8})},quest(){if(!Et)return;let i=Et.currentTime;[784,988,1175].forEach((t,e)=>me(t,i+e*.09,.4,{type:"sine",vol:.12}))},meow(){if(!Et)return;let i=Et.currentTime;me(700,i,.32,{type:"triangle",vol:.09,slide:1.35,attack:.04}),me(950,i+.12,.25,{type:"sine",vol:.05,slide:.7})},caw(){if(!Et)return;let i=Et.currentTime;Un(i,.18,{vol:.14,freq:1100,q:4}),me(420,i,.18,{type:"sawtooth",vol:.04,slide:.8})},blip(i,t=1){if(!Et||!/[a-z0-9]/i.test(i))return;let e=Et.currentTime;if(e-mf<.045)return;mf=e;let n=i.toLowerCase().charCodeAt(0)%7;me((300+n*38)*t,e,.05,{type:"square",vol:.035,slide:1.1})}};function yv(){if(!Et||!G.settings.sound)return;let i=Et.currentTime;if(Math.random()<.55*(1-Ih)){let t=2200+Math.random()*1400,e=2+(Math.random()*2|0);for(let n=0;n<e;n++)me(t*(1+n*.08),i+n*.09,.07,{type:"sine",vol:.025,slide:1.25,bus:bs})}if(Math.random()<.8*Ih)for(let t=0;t<4;t++)me(4400+Math.random()*200,i+t*.045,.03,{type:"sine",vol:.012,bus:bs})}var bv=72,gf=[77,0,81,0,84,0,81,79,77,0,76,0,72,0,0,0,74,0,77,0,81,0,79,77,76,0,79,0,77,0,0,0],xf=[53,60,57,60,50,57,53,57,46,53,50,53,48,55,52,55],Ch=i=>440*Math.pow(2,(i-69)/12);function Mv(){da=!0,ur=Et.currentTime+.3,Tl=0,clearInterval(Rh),Rh=setInterval(wv,80)}function Sv(){da=!1,clearInterval(Rh)}function wv(){if(!Et||!da)return;let i=60/bv/2;for(;ur<Et.currentTime+.3;){let t=gf[Tl%gf.length];t&&(me(Ch(t),ur,i*3,{type:"sine",vol:.5,bus:ts,attack:.004}),me(Ch(t+12),ur,i*1.2,{type:"sine",vol:.12,bus:ts})),me(Ch(xf[Tl%xf.length]-12),ur,i*1.8,{type:"triangle",vol:.28,bus:ts,attack:.01}),ur+=i,Tl++}}function fa(i){ts&&ts.gain.setTargetAtTime(i?.04:.12,Et.currentTime,.3)}function Ue(i=10){try{navigator.vibrate&&navigator.userActivation&&navigator.userActivation.hasBeenActive&&navigator.vibrate(i)}catch{}}var Gt=(i,t=document)=>t.querySelector(i);function mr(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Fn=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Fn);var Zn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Al=0,yf=0,bf=0;function pa(i,t=!1){yf=i;let e=Gt("#coinN");if(!t){Al=i,e.textContent=i;return}cancelAnimationFrame(bf);let n=Al,s=performance.now(),r=()=>{let a=Math.min(1,(performance.now()-s)/650);Al=Math.round(n+(yf-n)*(1-(1-a)**3)),e.textContent=Al,a<1&&(bf=requestAnimationFrame(r))};r(),Jn(Gt("#hud .coins"))}function Nh(i,t){Gt("#fameN").textContent="Lv "+i,Gt("#hud .fame .bar i").style.width=Math.round(t*100)+"%"}function wf(i,t,e){let n=Gt("#clock");n.querySelector("span").textContent=i,n.querySelector("em").textContent=t,n.classList.toggle("night",e>.5)}var Ph="";function Tf(i,t=""){let e=Gt("#quest"),n=i+"|"+t;if(n===Ph)return;let s=!Ph.startsWith(i+"|");if(Ph=n,!i){e.classList.add("hidden");return}e.classList.remove("hidden"),e.querySelector(".qtext").textContent=i,e.querySelector(".qprog").textContent=t,s?(e.classList.remove("new"),e.offsetWidth,e.classList.add("new")):Jn(e.querySelector(".qprog"))}function gr(i){let t=Gt("#bBag .badge");t.textContent=i,t.classList.toggle("hidden",!i),i&&Jn(t)}function Rl(i,t){let e=Gt("#note");if(!i){e.classList.add("hidden"),e.onclick=null;return}e.innerHTML=i,e.classList.remove("hidden"),e.onclick=t||null}function Jn(i){i&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}function ns(i,t,{ms:e=2600}={}){let n=Gt("#toasts"),s=mr("div","toast",(t?`<img src="${jt(t)}" alt="">`:"")+`<span>${i}</span>`);for(n.appendChild(s);n.children.length>3;)n.firstChild.remove();return setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},e),s}var Mf=0,Lh=!1,Ef=()=>!1,fr=[];function Af(i){Ef=i}function wn(i,t="",e={}){for(let n=fr.length-1;n>=0;n--)fr[n].title===i&&fr.splice(n,1);fr.push({title:i,sub:t,...e}),Dh()}function Dh(){if(Lh||!fr.length)return;if(es||pr||Ef()){setTimeout(Dh,300);return}let{title:i,sub:t,icon:e=null,ms:n=2800,kind:s="",onShow:r=null}=fr.shift(),a=Gt("#banner");a.className="banner "+s,a.innerHTML=`<div class="ribbon big"><span>${i}</span></div>${t?`<p>${t}</p>`:""}${e?`<img src="${jt(e)}" alt="">`:""}`,a.offsetWidth,a.classList.add("show"),Lh=!0,r&&r(),clearTimeout(Mf),Mf=setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>{Lh=!1,Dh()},450)},n)}function Il(i,t,e,{size:n=56,delay:s=0,arc:r=120,dur:a=.75,onArrive:o=null}={}){setTimeout(()=>{let l=e.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2,f=mr("img","flyer");f.src=i.includes("/")?i:jt(i),f.style.width=n+"px",Gt("#fly").appendChild(f);let u=performance.now(),m=t.x+(Math.random()-.5)*30,g=t.y+(Math.random()-.5)*20,x=()=>{let p=Math.min(1,(performance.now()-u)/(a*1e3)),d=p<.5?2*p*p:1-(-2*p+2)**2/2,M=m+(c-m)*d,R=g+(h-g)*d-Math.sin(p*Math.PI)*r,b=p<.15?.4+p/.15*.8:1.2-(p-.15)*.6;f.style.transform=`translate(${M-n/2}px, ${R-n/2}px) scale(${b}) rotate(${p*30}deg)`,p<1?requestAnimationFrame(x):(f.remove(),Jn(e),o&&o())};x()},s)}function Cf(i,t,e){let n=Gt("#hud .coins"),s=Math.min(10,Math.max(3,Math.round(i/12)));for(let r=0;r<s;r++)Il("coin",t,n,{size:34,delay:r*55,arc:80+Math.random()*60,dur:.6,onArrive:()=>{ut.coin(r%3),e&&e(r,s)}})}function On(i,t,e=""){let n=mr("div","pop-text "+e,i);n.style.left=t.x+"px",n.style.top=t.y+"px",Gt("#fly").appendChild(n),setTimeout(()=>n.remove(),1300)}var Cl=class{constructor(t){this.world=t,this.root=Gt("#tags"),this.map=new Map,this.tmp={x:0,y:0}}get(t,e,n){let s=this.map.get(t);return s||(s={el:mr("div","tag "+e),html:null,vis:!0},this.root.appendChild(s.el),this.map.set(t,s)),n!=null&&n!==s.html&&(s.el.innerHTML=n,s.html=n),s}place(t,e,n,s,r=!0){let a=this.map.get(t);if(!a)return;let o=this.world.toScreen(e,n,s,this.tmp),l=r&&!o.behind&&o.x>-80&&o.x<innerWidth+80&&o.y>-60&&o.y<innerHeight*.8;return l!==a.vis&&(a.el.classList.toggle("off",!l),a.vis=l),l&&(a.el.style.transform=`translate(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px)`),o}remove(t){let e=this.map.get(t);e&&(e.el.remove(),this.map.delete(t))}has(t){return this.map.has(t)}};function Pl(i,t){let e=Gt("#qptr");if(!t){e.classList.add("hidden");return}let n=i.toScreen(t[0],t[1],t[2]),s=innerWidth,r=innerHeight,a=46;if(e.classList.remove("hidden"),!n.behind&&n.x>a&&n.x<s-a&&n.y>a+30&&n.y<r-a)e.classList.remove("edge"),e.style.transform=`translate(${n.x}px, ${n.y}px)`;else{let o=n.x-s/2,l=n.y-r/2;n.behind&&(o=-o,l=-l);let c=Math.min((s/2-a)/Math.abs(o||1e-6),(r/2-a)/Math.abs(l||1e-6));e.classList.add("edge"),e.style.transform=`translate(${s/2+o*c}px, ${r/2+l*c}px) rotate(${Math.atan2(l,o)}rad)`}}var es=null;function Ll(){return!!es}function Ai(i,t,e=[],{pitch:n=1,side:s="left"}={}){return new Promise(r=>{let a=Gt("#dialog");a.classList.remove("hidden"),a.classList.toggle("right",s==="right"),a.querySelector(".dlg-name span").textContent=i;let o=a.querySelector(".dlg-text"),l=a.querySelector(".dlg-choices"),c=a.querySelector(".dlg-next");o.textContent="",l.innerHTML="",c.classList.add("hidden"),fa(!0);let h={i:0,done:!1,sel:0};es=h;let f=a.querySelector(".dlg-box");f.classList.remove("pop"),f.offsetWidth,f.classList.add("pop");let u=x=>{es=null,a.classList.add("hidden"),fa(!1),r(x)},m=()=>{if(h.done=!0,!e.length){c.classList.remove("hidden");return}e.forEach((x,p)=>{let d=mr("button","choice"+(x.disabled?" disabled":""),(x.icon?`<img src="${jt(x.icon)}" alt="">`:"")+`<span>${x.label||x}</span>${Fn?"":`<kbd>${p+1}</kbd>`}`);d.style.animationDelay=p*.06+"s",d.addEventListener("click",M=>{if(M.stopPropagation(),x.disabled){ut.click(),Jn(d);return}ut.click(),u(p)}),l.appendChild(d)})};h.choose=x=>{let p=e[x];p&&!p.disabled&&(ut.click(),u(x))},h.advance=()=>{if(!h.done){h.i=t.length,o.textContent=t,m();return}e.length||(ut.click(),u(-1))};let g=()=>{if(es!==h||h.done)return;if(h.i++,o.textContent=t.slice(0,h.i),ut.blip(t[h.i-1]||"",n),h.i>=t.length){m();return}let x=t[h.i-1];setTimeout(g,x==="."||x==="?"||x==="!"?180:x===","?90:24)};setTimeout(g,120),a.onclick=()=>h.advance()})}function Rf(i){if(!es)return!1;if(i==="KeyE"||i==="Space"||i==="Enter")return es.advance(),!0;let t=parseInt(i.replace("Digit",""),10);return t>=1&&t<=4&&es.choose(t-1),!0}var pr=null;function Dl(){return!!pr}function Ci(i,t,{onClose:e=null,title:n=""}={}){Ms(!0);let s=Gt("#panel");s.className="modal";let r=mr("div","card "+i);return r.innerHTML=(n?`<div class="ribbon card-title"><span>${n}</span></div>`:"")+t+'<button class="btn-close" aria-label="Close"></button>',s.appendChild(r),r.querySelector(".btn-close").addEventListener("click",()=>Ms()),s.onclick=a=>{a.target===s&&Ms()},pr={card:r,onClose:e},ut.open(),fa(!0),r}function Ms(i=!1){if(!pr)return;let t=pr;pr=null;let e=Gt("#panel");e.className="modal hidden",e.innerHTML="",i||ut.close(),fa(!1),t.onClose&&t.onClose()}function ma({medal:i,potion:t,title:e,name:n,tier:s,first:r,ings:a}){return new Promise(o=>{let l=Gt("#discovery");l.innerHTML=`
      <div class="rays"></div>
      <div class="disc-card">
        <div class="ribbon big"><span>${e}</span></div>
        <div class="disc-icons"><img class="medal" src="${jt(i)}" alt=""><img class="potion" src="${jt(t)}" alt=""></div>
        <h2>${n}</h2>
        <p class="tier t${s.i}">${s.label}</p>
        <p class="first">${r}</p>
        <div class="recipe">${a.map(h=>`<img src="${jt(h)}" alt="">`).join("<b>+</b>")}</div>
        <button class="btn-green"><span>Wonderful!</span></button>
      </div>`,l.classList.remove("hidden"),l.offsetWidth,l.classList.add("show"),Ue(60);let c=()=>{l.classList.remove("show"),setTimeout(()=>{l.classList.add("hidden"),l.innerHTML=""},300),ut.click(),o()};l.querySelector(".btn-green").addEventListener("click",c),ma.close=c})}var Me={x:0,z:0,keys:new Set},Qe=null;function If({onAct:i,onKey:t}){let e=()=>{let h=Me.keys;Me.kx=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),Me.kz=(h.has("KeyS")||h.has("ArrowDown")?1:0)-(h.has("KeyW")||h.has("ArrowUp")?1:0)};window.addEventListener("keydown",h=>{h.target&&h.target.tagName==="INPUT"||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault(),!h.repeat&&(Me.keys.add(h.code),e(),t(h.code,!0)))}),window.addEventListener("keyup",h=>{Me.keys.delete(h.code),e(),t(h.code,!1)}),window.addEventListener("blur",()=>{Me.keys.clear(),e()}),Me.kx=Me.kz=0;let n=Gt("#touch"),s=Gt("#stick"),r=s.querySelector("i");n.addEventListener("pointerdown",h=>{Qe||(Qe={id:h.pointerId,ox:h.clientX,oy:h.clientY},n.setPointerCapture(h.pointerId),s.style.left=Qe.ox+"px",s.style.top=Qe.oy+"px",s.classList.remove("hidden"),r.style.transform="translate(-50%,-50%)")}),n.addEventListener("pointermove",h=>{if(!Qe||h.pointerId!==Qe.id)return;let f=46,u=h.clientX-Qe.ox,m=h.clientY-Qe.oy,g=Math.hypot(u,m);g>f&&(Qe.ox+=u*(1-f/g),Qe.oy+=m*(1-f/g),u=h.clientX-Qe.ox,m=h.clientY-Qe.oy,s.style.left=Qe.ox+"px",s.style.top=Qe.oy+"px");let x=Math.min(1,Math.hypot(u,m)/f),p=Math.atan2(m,u);Me.sx=x>.12?Math.cos(p)*x:0,Me.sz=x>.12?Math.sin(p)*x:0,r.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${m}px))`});let a=h=>{!Qe||h.pointerId!==Qe.id||(Qe=null,Me.sx=Me.sz=0,s.classList.add("hidden"))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),Me.sx=Me.sz=0;let o=Gt("#act"),l=null,c=()=>{l&&(window.removeEventListener("click",l,!0),l=null)};o.addEventListener("pointerdown",h=>{h.preventDefault(),Jn(o),i(),c(),l=f=>{f.stopPropagation(),f.preventDefault(),c()},window.addEventListener("click",l,!0),setTimeout(c,700)}),window.addEventListener("pointerdown",h=>{o.contains(h.target)||c()},!0)}function Pf(){let i=Me.kx+Me.sx,t=Me.kz+Me.sz,e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),Me.x=i,Me.z=t,Me}function Nl(){Me.keys.clear(),Me.kx=Me.kz=Me.sx=Me.sz=0,Qe=null,Gt("#stick").classList.add("hidden")}var Sf="";function xr(i,t){let e=Gt("#prompt"),n=Gt("#act"),s=i||"";s!==Sf&&(Sf=s,i?(e.innerHTML=`<div class="pin">${Fn?"":"<kbd>E</kbd>"}<span>${i}</span></div>`,e.classList.remove("hidden"),e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),n.querySelector("span").textContent=i.replace(/ \(.+\)$/,""),n.classList.remove("hidden")):(e.classList.add("hidden"),n.classList.add("hidden"))),i&&t&&(e.style.transform=`translate(${t.x}px, ${t.y}px)`)}function ga(i){return Gt("#fade").classList.toggle("on",i),new Promise(t=>setTimeout(t,i?260:10))}var le=Math.PI*2,Ri=(i,t,e)=>Math.max(t,Math.min(e,i)),Fe=(i,t,e)=>i+(t-i)*e,Ss=i=>i*i*(3-2*i),Lf=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),kt=(i,t)=>i+Math.random()*(t-i),Tv=[["minnow",.55],["bluegill",.3],["carp",.15]];function Ev(){let i=Math.random();for(let[t,e]of Tv)if((i-=e)<0)return t;return"minnow"}var Av={ladybug:"Ladybug",beetle:"Moss Beetle",moth:"Wood Moth",glowbug:"Glowbug",minnow:"Pond Minnow",bluegill:"Bluegill",carp:"Golden Carp"},Cv={ladybug:{img:"mb_ladybug",h:104,speed:92,r:40},beetle:{img:"mb_beetle",h:112,speed:78,r:42},moth:{img:"mb_moth",h:104,speed:150,r:46,flies:!0},glowbug:{img:"mb_glowbug",h:98,speed:62,r:38}},Rv={minnow:{img:"mp_minnow",len:74,speed:62,window:.8,nib:[1,3]},bluegill:{img:"mp_bluegill",len:84,speed:52,window:.68,nib:[1,3]},carp:{img:"mp_carp",len:112,speed:44,window:.56,nib:[2,4]}},Iv={ladybug:"i_ladybug",beetle:"i_beetle",moth:"i_moth",glowbug:"i_glowbug",minnow:"i_minnow",bluegill:"i_bluegill",carp:"i_carp"},Ul=class{constructor(){let t=this.c=document.createElement("canvas");t.id="mini",t.className="hidden",document.body.appendChild(t),this.g=t.getContext("2d"),this.isOpen=!1,this.covers=!1,this.fx=[],this.sil={};let e=n=>[n.clientX,n.clientY];t.addEventListener("pointermove",n=>{!this.isOpen||n.pointerType==="touch"||(this.aimMode="mouse",[this.ax,this.ay]=e(n))}),t.addEventListener("pointerdown",n=>{if(!this.isOpen||this.phase!=="play")return;n.preventDefault();let[s,r]=e(n);if(Math.hypot(s-this.closeBtn[0],r-this.closeBtn[1])<this.closeBtn[2]*1.3){ut.close(),this.finish();return}this.aimMode=n.pointerType==="touch"?"touch":"mouse",this.ax=s,this.ay=r,this.press(!0)})}open(t,e={}){return this.kind=t,this.o=e,this.got=[],this.fled=!1,this.fx=[],this.isOpen=!0,this.covers=!1,this.phase="in",this.pt=0,this.t=0,this.from=e.from||{x:innerWidth/2,y:innerHeight/2},this.resize(),this.ax=this.W*.5,this.ay=this.H*.5,this.aimMode=Fn?"touch":"mouse",t==="bug"?this.setupBug(e):this.setupFish(e),this.c.classList.remove("hidden"),this.clip(0),ut.open(),new Promise(n=>{this.done=n})}finish(){this.phase!=="out"&&(this.phase="out",this.pt=0,this.covers=!1)}resize(){let t=Math.min(2,devicePixelRatio||1);this.W=innerWidth,this.H=innerHeight,this.d=t,this.c.width=Math.round(this.W*t),this.c.height=Math.round(this.H*t),this.S=Math.min(this.W/1100,this.H/620),this.closeBtn=[this.W-40*Math.max(.8,this.S),40*Math.max(.8,this.S),22*Math.max(.8,this.S)]}clip(t){let e=Math.hypot(this.W,this.H)*Ss(Ri(t,0,1));this.c.style.clipPath=t>=1?"none":`circle(${e.toFixed(1)}px at ${this.from.x.toFixed(1)}px ${this.from.y.toFixed(1)}px)`}key(t,e){if(!(!e||this.phase!=="play")){if(t==="Escape"){ut.close(),this.finish();return}(t==="Space"||t==="KeyE"||t==="Enter")&&this.press(!1),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&(this.aimMode="key")}}press(t){this.kind==="bug"?this.bugPress(t):this.fishPress(t)}update(t,e){if(!this.isOpen)return;if((innerWidth!==this.W||innerHeight!==this.H)&&this.resize(),this.t+=t,this.phase==="in")this.pt+=t/.45,this.clip(this.pt),this.pt>=1&&(this.phase="play",this.covers=!0);else if(this.phase==="out"&&(this.pt+=t/.4,this.clip(1-this.pt),this.pt>=1)){this.isOpen=!1,this.c.classList.add("hidden"),this.c.style.clipPath="";let s=this.done;this.done=null,s&&s({got:this.got,fled:this.fled});return}if(this.aimMode==="key"&&e&&(e.x||e.z)){let s=620*this.S*t;this.ax=Ri(this.ax+e.x*s,0,this.W),this.ay=Ri(this.ay+e.z*s,0,this.H)}this.endT!=null&&this.phase==="play"&&(this.endT-=t,this.endT<=0&&(this.endT=null,this.finish())),this.kind==="bug"?this.bugUpdate(t):this.fishUpdate(t),this.fxUpdate(t);let n=this.g;n.setTransform(this.d,0,0,this.d,0,0),this.kind==="bug"?this.bugDraw(n):this.fishDraw(n),this.fxDraw(n),this.drawChrome(n)}img(t,e,n,s,r,{rot:a=0,sx:o=1,sy:l=1,alpha:c=1,w:h=null}={}){let f=Ae[e];if(!f)return;let u=h??r*f.width/f.height;t.save(),t.globalAlpha=c,t.translate(n,s),t.rotate(a),t.scale(o,l),t.drawImage(f,-u/2,-r/2,u,r),t.restore()}silhouette(t,e){let n=t+e;if(this.sil[n])return this.sil[n];let s=Ae[t],r=document.createElement("canvas");r.width=s.width,r.height=s.height;let a=r.getContext("2d");return a.drawImage(s,0,0),a.globalCompositeOperation="source-in",a.fillStyle=e,a.fillRect(0,0,r.width,r.height),this.sil[n]=r}pill(t,e,n,s,{size:r=20,bg:a="rgba(251,246,234,0.94)",fg:o="#5a3424",alpha:l=1}={}){let c=this.S,h=Math.max(13,r*c);t.save(),t.globalAlpha=l,t.font=`700 ${h}px Mali, sans-serif`,t.textAlign="center",t.textBaseline="middle";let f=t.measureText(e).width+h*1.6,u=h*2;t.fillStyle="rgba(40,24,30,0.25)",Df(t,n-f/2,s-u/2+3,f,u,u/2),t.fill(),t.fillStyle=a,Df(t,n-f/2,s-u/2,f,u,u/2),t.fill(),t.fillStyle=o,t.fillText(e,n,s+h*.04),t.restore()}drawChrome(t){let[e,n,s]=this.closeBtn;t.save(),t.fillStyle="rgba(40,24,30,0.3)",t.beginPath(),t.arc(e,n+3,s,0,le),t.fill(),t.fillStyle="rgba(251,246,234,0.95)",t.beginPath(),t.arc(e,n,s,0,le),t.fill(),t.strokeStyle="#5a3424",t.lineWidth=Math.max(2.5,s*.16),t.lineCap="round";let r=s*.38;t.beginPath(),t.moveTo(e-r,n-r),t.lineTo(e+r,n+r),t.moveTo(e+r,n-r),t.lineTo(e-r,n+r),t.stroke(),t.restore(),this.hint&&this.phase==="play"&&this.pill(t,this.hint,this.W/2,34*Math.max(.8,this.S),{size:17,alpha:this.hintA==null?1:this.hintA}),this.say&&this.sayT>0&&this.pill(t,this.say,this.sayX,this.sayY-(1-Math.min(1,this.sayT*3))*0-(.9-this.sayT)*30*this.S,{size:18,alpha:Math.min(1,this.sayT*3)}),this.card&&this.drawCard(t)}shout(t,e,n,s=.9){this.say=t,this.sayX=e,this.sayY=n,this.sayT=s}showCard(t,e){this.card={kind:t,t:0,x0:e[0],y0:e[1]},ut.discover(),Ue(14),this.burst(this.W/2,this.H*.42,26,["#fff6c9","#ffd76a","#ffffff"])}drawCard(t){let e=this.card,n=this.S,s=Math.min(1,e.t/.45),r=Ri((e.t-1.25)/.35,0,1),a=Fe(e.x0,this.W/2,Ss(s)),o=Fe(e.y0,this.H*.42,Ss(s))-Math.sin(s*Math.PI)*60*n,l=(.4+.75*Ss(s)+Math.sin(e.t*9)*.03*(1-r))*(1-r*.7);t.save(),t.globalAlpha=1-r;let c=t.createRadialGradient(a,o,0,a,o,170*n);c.addColorStop(0,"rgba(255,246,200,0.75)"),c.addColorStop(1,"rgba(255,246,200,0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,170*n,0,le),t.fill(),t.translate(a,o),t.rotate(Math.sin(e.t*3)*.06*(1-s)),this.img(t,Iv[e.kind],0,0,170*n*l),t.restore(),s>=1&&r<1&&this.pill(t,`${Av[e.kind]}!`,this.W/2,this.H*.42+120*n,{size:24,alpha:1-r})}burst(t,e,n,s,r=260){for(let a=0;a<n;a++){let o=kt(0,le),l=kt(.3,1)*r*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-60*this.S,life:kt(.5,.9),t:0,s:kt(3,7)*this.S,c:s[a%s.length]})}}ring(t,e,n,s,r=.9,a=.7,o=2.5){this.fx.push({k:"ring",x:t,y:e,r0:n*this.S,r1:s*this.S,life:r,t:0,a,w:o})}drops(t,e,n,s=200){for(let r=0;r<n;r++){let a=kt(-Math.PI*.95,-Math.PI*.05),o=kt(.4,1)*s*this.S;this.fx.push({k:"drop",x:t,y:e,vx:Math.cos(a)*o,vy:Math.sin(a)*o,life:kt(.4,.7),t:0,s:kt(2.5,5)*this.S})}}fxUpdate(t){for(let e of this.fx)e.t+=t,e.vx!=null&&(e.x+=e.vx*t,e.y+=e.vy*t,e.vy+=(e.k==="drop"?700:240)*this.S*t,e.vx*=1-t*1.5),e.k==="leaf"&&(e.rot+=e.vr*t);this.fx=this.fx.filter(e=>e.t<e.life),this.sayT>0&&(this.sayT-=t),this.card&&(this.card.t+=t,this.card.t>1.6&&(this.card=null))}fxDraw(t){for(let e of this.fx){let n=e.t/e.life;if(e.k==="ring")t.save(),t.globalAlpha=e.a*(1-n),t.strokeStyle="#eafcff",t.lineWidth=e.w*this.S*(1-n*.5),t.beginPath(),t.ellipse(e.x,e.y,Fe(e.r0,e.r1,Ss(n)),Fe(e.r0,e.r1,Ss(n))*.42,0,0,le),t.stroke(),t.restore();else if(e.k==="drop")t.save(),t.globalAlpha=1-n,t.fillStyle="#eafcff",t.beginPath(),t.arc(e.x,e.y,e.s,0,le),t.fill(),t.restore();else if(e.k==="spark"){t.save(),t.globalAlpha=1-n,t.fillStyle=e.c,t.translate(e.x,e.y),t.rotate(e.t*6);let s=e.s*(1-n*.5);t.beginPath();for(let r=0;r<8;r++){let a=r%2?s*.4:s;t.lineTo(Math.cos(r/8*le)*a,Math.sin(r/8*le)*a)}t.fill(),t.restore()}else e.k==="leaf"&&this.img(t,e.img,e.x,e.y,e.h,{rot:e.rot,alpha:1-n*n})}}setupBug(t){let e=this.S,n=this.W,s=this.H;this.arena=[n*.14,s*.2,n*.86,s*.86],this.bugs=[],this.addBug(t.kind||"ladybug",n*kt(.3,.7),s*kt(.4,.65),!0),this.misses=0,this.net={x:n*.5,y:s*.72,h:1,swoop:-1,hold:0,vx:0,vy:0},this.ax=this.net.x,this.ay=this.net.y,this.dress=[];let r=[[.05,.12,"mb_rock_a",150],[.95,.15,"mb_fern",190],[.03,.9,"mb_fern",200],[.97,.88,"mb_rock_b",120],[.5,.04,"mb_leaves_a",150],[.2,.98,"mb_leaves_b",120],[.8,1,"mb_leaves_a",140],[0,.5,"mb_leaves_b",130],[1,.52,"mb_leaves_a",150],[.3,.06,"mb_rock_b",90],[.72,.05,"mb_fern",150]];for(let[a,o,l,c]of r)this.dress.push({n:l,x:a*n,y:o*s,h:c*e*kt(.9,1.1),rot:kt(-.5,.5),f:Math.random()<.5?-1:1});this.pebbles=Array.from({length:40},()=>({x:kt(0,n),y:kt(0,s),r:kt(2,6)*e,c:Math.random()<.5?"#8a6a4a":"#6d523a"})),this.pileT=0,this.pileNag=!1,this.leftT=0,this.leftNag=!1,this.pile=t.beetle?{x:n*(Math.random()<.5?.25:.74),y:s*kt(.32,.72),open:0,has:"beetle",rus:2}:null,this.hint=Fn?"Tap the bug to bring the net down":"Move the net, then click or press Space",this.hintA=1,t.beetle&&t.firstBeetle&&(this.hint2="Something rustles under the leaves...")}addBug(t,e,n,s=!1){let r=Cv[t];this.bugs.push({kind:t,d:r,x:e,y:n,a:kt(0,le),at:0,v:0,mode:"walk",t:kt(1,2.5),main:s,wob:0,fly:r.flies?1:0,sc:1,alpha:1})}bugUpdate(t){let e=this.S,n=this.net,[s,r,a,o]=this.arena,l=n.swoop>=0?0:Math.min(1,t*(this.aimMode==="touch"?20:11)),c=n.x,h=n.y;n.x=Fe(n.x,this.ax,l),n.y=Fe(n.y,this.ay,l),n.vx=(n.x-c)/Math.max(t,.001),n.vy=(n.y-h)/Math.max(t,.001);let f=Math.hypot(n.vx,n.vy)>1250*e;n.swoop>=0?(n.swoop+=t,n.h=Math.max(0,1-n.swoop/.16),n.swoop>=.16&&!n.landed&&(n.landed=!0,this.netLanded()),n.swoop>=.16+(n.hold||.22)&&(n.swoop=-1,n.landed=!1,n.hold=0)):n.h=Fe(n.h,1,Math.min(1,t*10)),this.pile&&!this.pile.open&&(this.pile.rus-=t,this.pile.rus<-.5&&(this.pile.rus=kt(1.5,3)),this.pile.rus<0&&this.hint2&&(this.hint=this.hint2,this.hint2=null)),this.pile&&this.pile.open&&(this.pile.open+=t);let u=0;for(let x of this.bugs){if(x.t-=t,x.mode==="caught"){x.wob+=t,u++;continue}if(x.mode==="gone")continue;if(u++,x.mode==="flee"){x.v=Fe(x.v,x.d.speed*5*e,Math.min(1,t*3)),(x.d.flies||x.kind!=="beetle")&&(x.fly=Math.min(1.6,x.fly+t*2),x.sc=1+x.fly*.25),x.x+=Math.cos(x.a)*x.v*t,x.y+=Math.sin(x.a)*x.v*t,(x.x<-150||x.x>this.W+150||x.y<-150||x.y>this.H+150)&&(x.mode="gone",u--),x.wob+=t*18;continue}f&&x.mode!=="dash"&&Math.hypot(x.x-n.x,x.y-n.y)<190*e&&n.swoop<0&&this.scare(x,.5);let p=x.x<s||x.x>a,d=x.y<r||x.y>o;x.t<=0&&(x.mode==="walk"?(x.mode="pause",x.t=x.d.flies?kt(1.2,2.4):kt(.5,1.4)):(x.mode="walk",x.t=kt(1.4,3.2),x.at=x.a+kt(-1.6,1.6))),p||d?x.at=Math.atan2((r+o)/2-x.y,(s+a)/2-x.x):Math.random()<t*.9&&(x.at=x.a+kt(-1.2,1.2));let M=x.mode==="pause"?0:x.mode==="dash"?x.d.speed*3.4:x.d.speed;x.v=Fe(x.v,M*e,Math.min(1,t*(x.mode==="dash"?8:4))),x.mode==="dash"&&x.t<=0&&(x.mode="walk",x.t=kt(1,2)),x.a+=Lf(x.a,x.at)*Math.min(1,t*(x.mode==="dash"?7:2.6)),x.d.flies&&(x.fly=Fe(x.fly,x.mode==="pause"?0:1,Math.min(1,t*3)),x.a+=Math.sin(this.t*2.3+x.x*.01)*t*1.2*x.fly),x.x+=Math.cos(x.a)*x.v*t,x.y+=Math.sin(x.a)*x.v*t,x.wob+=t*(x.v/(e*6)+2)}let m=this.bugs.filter(x=>x.main);if(m.length&&m.every(x=>x.mode==="gone")&&!this.card&&u&&(this.leftT=(this.leftT||0)+t,!this.leftNag&&this.got.length&&(this.leftNag=!0,this.hint="One more! Catch it before it wanders off",this.hintA=1),this.leftT>4.5))for(let x of this.bugs)x.mode!=="caught"&&x.mode!=="gone"&&x.mode!=="flee"&&(x.mode="flee",x.v=x.d.speed*3*this.S,x.a=x.at=Math.atan2(x.y-this.H/2,x.x-this.W/2));this.pile&&!this.pile.open&&this.pile.has&&!u&&!this.card&&(this.pileT=(this.pileT||0)+t,this.pileNag||(this.pileNag=!0,this.hint=Fn?"Something is still under the leaves. Tap them":"Something is still under the leaves",this.hintA=1),this.pileT>7&&(this.pile.has=null),u++),!u&&this.endT==null&&!this.card&&(this.endT=this.got.length?.15:.6),this.hintA!=null&&this.t>4&&!this.pileNag&&!this.leftNag&&(this.hintA=Math.max(.55,1-(this.t-4)*.2))}scare(t,e=.6){t.mode="dash",t.t=e;let n=this.net;t.at=Math.atan2(t.y-n.y,t.x-n.x)+kt(-.6,.6)}bugPress(t){let e=this.net;e.swoop>=0||this.card||(t&&this.aimMode==="touch"&&(e.x=Fe(e.x,this.ax,.75),e.y=Fe(e.y,this.ay,.75)),e.swoop=0,e.landed=!1,ut.stir())}netLanded(){let t=this.S,e=this.net,n=66*t,s=this.bugs.filter(r=>r.mode!=="caught"&&r.mode!=="gone"&&r.mode!=="flee"&&Math.hypot(r.x-e.x,r.y-e.y)<n*.78+r.d.r*t*.35);if(this.pile&&!this.pile.open&&Math.hypot(this.pile.x-e.x,this.pile.y-e.y)<n+30*t&&this.openPile(),s.length){for(let a of s)a.mode="caught",a.cx=a.x-e.x,a.cy=a.y-e.y,this.got.push(a.kind);e.hold=.65,ut.pop(),Ue(16),this.burst(e.x,e.y,14,["#fff6c9","#ffffff","#ffd76a"],220);let r=s[0];setTimeout(()=>{this.isOpen&&(r.mode="gone",this.showCard(r.kind,[e.x,e.y]))},520);for(let a of s.slice(1))setTimeout(()=>{a.mode="gone"},520);return}if(this.dust(e.x,e.y),!(this.pile&&this.pile.open&&this.pile.open<.05)){this.misses++,ut.click(),this.shout(this.misses>=3?"It got away!":"Missed!",e.x,e.y-80*t);for(let r of this.bugs)(r.mode==="walk"||r.mode==="pause"||r.mode==="dash")&&(this.misses>=3?(r.mode="flee",r.a=r.at=Math.atan2(r.y-e.y,r.x-e.x),this.fled=this.fled||r.main):Math.hypot(r.x-e.x,r.y-e.y)<300*t&&this.scare(r,.7))}}openPile(){let t=this.pile,e=this.S;t.open=.001,ut.harvest();for(let n=0;n<5;n++){let s=kt(0,le);this.fx.push({k:"leaf",img:n%2?"mb_leaves_a":"mb_leaves_b",x:t.x,y:t.y,vx:Math.cos(s)*kt(200,380)*e,vy:Math.sin(s)*kt(200,380)*e-150*e,life:.9,t:0,h:kt(60,90)*e,rot:kt(0,le),vr:kt(-6,6)})}if(t.has){this.addBug(t.has,t.x,t.y);let n=this.bugs[this.bugs.length-1];n.mode="dash",n.t=.6,n.at=n.a=kt(0,le),this.shout("A beetle!",t.x,t.y-70*e,1.1)}else this.shout("Just leaves",t.x,t.y-70*e)}dust(t,e){for(let n=0;n<10;n++){let s=kt(0,le),r=kt(60,160)*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(s)*r,vy:Math.sin(s)*r*.5,life:.45,t:0,s:kt(3,6)*this.S,c:"#a88a66"})}}bugDraw(t){let e=this.S,n=this.W,s=this.H;this.dirtPat||(this.dirtPat=t.createPattern(Ae.dirt,"repeat")),t.save();let r=1.5*e;t.scale(r,r),t.fillStyle=this.dirtPat,t.fillRect(0,0,n/r,s/r),t.restore(),t.save(),t.globalCompositeOperation="multiply",t.fillStyle="#8c6a5c",t.fillRect(0,0,n,s),t.restore();for(let d of this.pebbles)t.fillStyle=d.c,t.globalAlpha=.5,t.beginPath(),t.ellipse(d.x,d.y,d.r,d.r*.7,0,0,le),t.fill();t.globalAlpha=1;let a=t.createRadialGradient(n/2,s*.52,Math.min(n,s)*.25,n/2,s*.52,Math.hypot(n,s)*.62);a.addColorStop(0,"rgba(255,236,190,0.12)"),a.addColorStop(1,"rgba(40,22,10,0.55)"),t.fillStyle=a,t.fillRect(0,0,n,s);for(let d of this.dress)this.img(t,d.n,d.x,d.y,d.h,{rot:d.rot,sx:d.f});let o=this.pile;if(o&&o.open<.5){let d=!o.open&&o.rus<0?Math.sin(this.t*40)*.06:0,M=o.open?1-o.open*2:1;this.img(t,"mb_leaves_b",o.x-30*e,o.y+6*e,96*e,{rot:-.4+d,alpha:M}),this.img(t,"mb_leaves_a",o.x+24*e,o.y-4*e,104*e,{rot:.5-d,alpha:M}),this.img(t,"mb_leaves_b",o.x,o.y-18*e,88*e,{rot:1.8+d*1.5,alpha:M}),!o.open&&o.has&&o.rus<0&&this.drawAntennae(t,o.x+6*e,o.y-46*e,e)}for(let d of this.bugs){if(d.mode==="gone")continue;let M=d.d,R=M.h*e*d.sc,b=this.net,S=d.mode==="caught"?b.x+d.cx*.6:d.x,w=d.mode==="caught"?b.y+d.cy*.6:d.y,I=(M.flies?d.fly*26:0)*e+(d.mode==="flee"?d.fly*40*e:0);if(t.save(),t.globalAlpha=.28,t.fillStyle="#1c1008",t.beginPath(),t.ellipse(S+6*e+I*.4,w+10*e+I,R*.36,R*.24,0,0,le),t.fill(),t.restore(),d.kind==="glowbug"){let F=.65+.35*Math.sin(this.t*3+d.x*.01),D=t.createRadialGradient(S,w+R*.25,0,S,w+R*.25,R*1.1);D.addColorStop(0,`rgba(226,255,140,${.55*F})`),D.addColorStop(1,"rgba(226,255,140,0)"),t.fillStyle=D,t.beginPath(),t.arc(S,w+R*.25,R*1.1,0,le),t.fill()}let v=d.a+Math.PI/2+(M.flies?0:Math.sin(d.wob)*.07)+(d.mode==="caught"?Math.sin(d.wob*30)*.15:0),E=1,L=1;M.flies?E=d.fly>.3?.45+.55*Math.abs(Math.sin(this.t*17+d.x)):.88+.12*Math.sin(this.t*2.2):d.mode==="flee"?E=1+Math.abs(Math.sin(d.wob))*.1:L=1+Math.sin(d.wob*2)*.02,this.img(t,M.img,S,w-I,R,{rot:v,sx:E,sy:L})}let l=this.net,c=66*e*(1+l.h*.22),h=l.x,f=l.y-l.h*26*e;t.save(),t.globalAlpha=.22*(1-l.h*.4),t.fillStyle="#1c1008",t.beginPath(),t.ellipse(l.x+10*e*l.h,l.y+22*e*l.h,c*.95,c*.7,0,0,le),t.fill(),t.restore();let u=Math.PI*.25,m=h+Math.cos(u)*c,g=f+Math.sin(u)*c,x=170*e;t.save(),t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=13*e,t.beginPath(),t.moveTo(m,g),t.lineTo(m+Math.cos(u)*x,g+Math.sin(u)*x),t.stroke(),t.strokeStyle="#b4834c",t.lineWidth=7*e,t.beginPath(),t.moveTo(m,g),t.lineTo(m+Math.cos(u)*x,g+Math.sin(u)*x),t.stroke(),t.beginPath(),t.arc(h,f,c,0,le),t.save(),t.clip(),t.fillStyle="rgba(255,255,255,0.1)",t.fillRect(h-c,f-c,c*2,c*2),t.strokeStyle="rgba(255,255,255,0.78)",t.lineWidth=1.7*e;let p=14*e;t.beginPath();for(let d=-c*2;d<c*2;d+=p)t.moveTo(h+d-c,f-c),t.lineTo(h+d+c,f+c),t.moveTo(h+d+c,f-c),t.lineTo(h+d-c,f+c);t.stroke(),t.restore(),t.strokeStyle="#2e1c14",t.lineWidth=9*e,t.beginPath(),t.arc(h,f,c,0,le),t.stroke(),t.strokeStyle="#8a5a3c",t.lineWidth=4*e,t.beginPath(),t.arc(h,f,c,0,le),t.stroke(),t.restore();for(let d=0;d<3;d++){let M=40*e+d*34*e,R=36*Math.max(.8,e),b=d<this.misses,S=11*e;t.save(),t.globalAlpha=b?.35:1,t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=7*e,t.beginPath(),t.moveTo(M+7*e,R+7*e),t.lineTo(M+19*e,R+19*e),t.stroke(),t.strokeStyle="#c08a5a",t.lineWidth=4*e,t.beginPath(),t.moveTo(M+7*e,R+7*e),t.lineTo(M+19*e,R+19*e),t.stroke(),t.save(),t.beginPath(),t.arc(M,R,S,0,le),t.fillStyle="rgba(251,246,234,0.28)",t.fill(),t.clip(),t.strokeStyle="rgba(251,246,234,0.85)",t.lineWidth=1.4*e,t.beginPath();for(let w=-S*2;w<=S*2;w+=5*e)t.moveTo(M+w-S,R-S),t.lineTo(M+w+S,R+S),t.moveTo(M+w+S,R-S),t.lineTo(M+w-S,R+S);t.stroke(),t.restore(),t.strokeStyle="#3b2418",t.lineWidth=5*e,t.beginPath(),t.arc(M,R,S,0,le),t.stroke(),t.strokeStyle="#fbf6ea",t.lineWidth=2.5*e,t.beginPath(),t.arc(M,R,S,0,le),t.stroke(),t.restore()}}drawAntennae(t,e,n,s){t.save(),t.strokeStyle="#2b2b22",t.lineWidth=3*s,t.lineCap="round";let r=Math.sin(this.t*12)*4*s;t.beginPath(),t.moveTo(e-5*s,n+16*s),t.quadraticCurveTo(e-10*s,n,e-16*s+r,n-6*s),t.moveTo(e+5*s,n+16*s),t.quadraticCurveTo(e+10*s,n,e+16*s-r,n-6*s),t.stroke(),t.restore()}setupFish(t){let e=this.S,n=this.W,s=this.H;this.bankY=s*.17,this.dockY=s*.8,this.bites=t.bites||3,this.fish=[];for(let r=0;r<Math.min(4,this.bites+1);r++)this.spawnFish(!0);this.state="aim",this.bob=null,this.tension=0,this.bucket=0,this.tip0=[n*.55,s*.5],this.ripples=Array.from({length:46},()=>({x:kt(0,n),y:kt(this.bankY,this.dockY),l:kt(18,46)*e,ph:kt(0,le),sp:kt(8,18)*e})),this.pads=[[.08,.27,92,.3],[.88,.25,110,2],[.95,.6,80,4],[.04,.64,70,1],[.66,.24,64,5]].map(([r,a,o,l])=>({x:r*n,y:a*s,h:o*e,r:l})),this.hint=Fn?"Tap the water to cast":"Click the water to cast (or press Space)",this.hintA=1}spawnFish(t=!1){let e=this.W,n=Ev(),s=Rv[n];this.fish.push({kind:n,d:s,x:t?kt(e*.15,e*.85):Math.random()<.5?-60:e+60,y:kt(this.bankY+60*this.S,this.dockY-60*this.S),a:kt(0,le),at:0,v:s.speed*this.S,mode:"swim",t:kt(1,3),ph:kt(0,le),alpha:0})}fishPress(){let t=this.S;if(!(this.card||this.state==="reel"||this.state==="cast")){if(this.state==="aim"){let e=Ri(this.ay,this.bankY+40*t,this.dockY-40*t),n=Ri(this.ax,50*t,this.W-50*t);this.state="cast",this.castT=0,this.bob={x:n,y:e,fromX:this.tip0[0],fromY:this.tip0[1],dip:0,under:0,t:0},ut.stir(),this.hintA=.55;return}if(this.state==="wait"){let e=this.biter;if(e&&e.mode==="bite"){this.hook(e);return}if(e&&(e.mode==="nibble"||e.mode==="approach")){this.spook(e),this.shout("Too soon!",this.bob.x,this.bob.y-70*t),ut.click(),this.reelIn();return}this.reelIn()}}}reelIn(){this.state="aim",this.bob=null,this.biter=null,this.tension=0,ut.pour()}spook(t){t.mode="flee",t.t=1.2,t.at=t.a+Math.PI+kt(-.5,.5)}hook(t){let e=this.S;this.state="reel",this.reelT=0,t.mode="hooked",this.tension=1,ut.splash(),Ue(20),this.drops(this.bob.x,this.bob.y,14,260),this.ring(this.bob.x,this.bob.y,10,70,.7,.9,4),this.shout("Got it!",this.bob.x,this.bob.y-80*e,.7)}fishUpdate(t){let e=this.S,n=this.W;this.state==="cast"&&(this.castT+=t/.45,this.castT>=1&&(this.state="wait",this.waitT=0,this.biter=null,this.lureT=kt(.3,.9),ut.splash(),this.ring(this.bob.x,this.bob.y,6,46,.8),this.drops(this.bob.x,this.bob.y,6,140),this.hint=Fn?"Tap when the float goes under":"Click (or Space) when the float goes under",this.hintA=1));let s=this.bob;if(s&&(s.t+=t,s.dip=Fe(s.dip,s.under?14*e:0,Math.min(1,t*14)),this.state==="wait"&&Math.random()<t*.6&&this.ring(s.x,s.y+4*e,6,30,1.2,.35,1.5)),this.state==="wait"&&(this.waitT+=t,!this.biter&&(this.lureT-=t,this.lureT<=0))){let r=null,a=1e9;for(let o of this.fish){if(o.mode!=="swim")continue;let l=Math.hypot(o.x-s.x,o.y-s.y);l<a&&(a=l,r=o)}r&&(a<380*e||this.waitT>1.8)?(this.biter=r,r.mode="approach",r.nibs=Math.round(kt(r.d.nib[0],r.d.nib[1]))):this.lureT=.4}if(this.state==="reel"){this.reelT+=t;let r=this.biter;r.x=Fe(r.x,this.W*.56,Math.min(1,t*2.2)),r.y=Fe(r.y,this.dockY-30*e,Math.min(1,t*2.2)),s.x=r.x+Math.cos(r.a)*r.d.len*e*.45,s.y=r.y+Math.sin(r.a)*r.d.len*e*.45,r.a=-Math.PI/2+Math.sin(this.reelT*22)*.5,Math.random()<t*14&&this.drops(r.x+kt(-20,20)*e,r.y,2,160),this.reelT>.75&&(this.fish.splice(this.fish.indexOf(r),1),this.got.push(r.kind),this.bites--,this.bucket++,this.o.onCatch&&this.o.onCatch(r.kind),this.showCard(r.kind,[r.x,r.y]),this.drops(r.x,r.y,18,320),this.ring(r.x,r.y,10,90,.8,.9,4),this.bob=null,this.biter=null,this.tension=0,this.state="aim",this.hint=Fn?"Tap the water to cast":"Click the water to cast (or press Space)",this.bites>0?setTimeout(()=>{this.isOpen&&this.kind==="fish"&&this.spawnFish()},1600):(this.endT=2.4,setTimeout(()=>{this.isOpen&&(this.hint="The fish are wary now. Come back later")},1500)))}this.tension=Fe(this.tension,this.state==="reel"?1:this.biter&&this.biter.mode==="bite"?.6:0,Math.min(1,t*8));for(let r of this.fish){if(r.t-=t,r.ph+=t*(r.mode==="flee"?26:9),r.alpha=Math.min(1,r.alpha+t*.8),r.mode==="hooked")continue;let a=r.d.speed*e;if(r.mode==="swim"){r.t<=0&&(r.t=kt(1.5,3.5),r.at=r.a+kt(-1.4,1.4));let o=70*e;(r.x<o||r.x>n-o||r.y<this.bankY+o||r.y>this.dockY-o)&&(r.at=Math.atan2((this.bankY+this.dockY)/2-r.y,n/2-r.x)),Math.sin(r.ph*.13)>.7&&(a*=.3)}else if(r.mode==="approach"){let o=r.d.len*e,l=Math.hypot(s.x-r.x,s.y-r.y);r.at=Math.atan2(s.y-r.y,s.x-r.x),a=l>o*.5?r.d.speed*e*1.4*Ri((l-o*.45)/(60*e),.3,1):0,l<o*.62&&(r.mode="nibble",r.t=kt(.6,1.2))}else r.mode==="nibble"?(a=0,r.at=Math.atan2(s.y-r.y,s.x-r.x),r.t<=0&&(r.nibs>0?(r.nibs--,r.t=kt(.45,1.05),r.lunge=.15,s.under=0,s.dip=5*e,this.ring(s.x,s.y+4*e,6,26,.5,.6,2),ut.bubble()):(r.mode="bite",r.t=r.d.window,r.lunge=.25,s.under=1,ut.splash(),Ue(14),this.ring(s.x,s.y,8,60,.6,.9,3.5),this.drops(s.x,s.y,10,200),this.shout("!",s.x,s.y-60*e,r.d.window)))):r.mode==="bite"?(a=0,r.t<=0&&(s.under=0,this.spook(r),this.shout("It got away",s.x,s.y-70*e),this.biter=null,this.lureT=kt(1.5,2.5),this.reelIn())):r.mode==="flee"&&(a=r.d.speed*e*3.5,r.t<=0&&(r.mode="swim",r.t=kt(1,3)));r.lunge>0&&(r.lunge-=t,a=r.d.speed*e*2),r.a+=Lf(r.a,r.at)*Math.min(1,t*(r.mode==="flee"?6:2.5)),r.v=Fe(r.v,a,Math.min(1,t*3)),r.x+=Math.cos(r.a)*r.v*t,r.y+=Math.sin(r.a)*r.v*t,r.mode==="nibble"&&r.lunge>0&&(r.x-=Math.cos(r.a)*r.v*t*1.8,r.y-=Math.sin(r.a)*r.v*t*1.8)}}fishDraw(t){let e=this.S,n=this.W,s=this.H,r=this.t,a=this.bankY,o=this.dockY,l=t.createLinearGradient(0,a,0,o);l.addColorStop(0,"#7cc6b6"),l.addColorStop(.35,"#4c9fa2"),l.addColorStop(1,"#3a8790"),t.fillStyle=l,t.fillRect(0,0,n,s),t.save(),t.strokeStyle="rgba(232,252,248,0.22)",t.lineCap="round",t.lineWidth=2.4*e;for(let p of this.ripples){let d=(p.x+r*p.sp)%(n+80)-40,M=p.y+Math.sin(r*.8+p.ph)*6*e,R=p.l*(.7+.3*Math.sin(r*1.3+p.ph));t.globalAlpha=.5+.5*Math.sin(r*.9+p.ph),t.beginPath(),t.moveTo(d-R/2,M),t.quadraticCurveTo(d,M-5*e,d+R/2,M),t.stroke()}t.restore();for(let p of this.fish){let d=this.silhouette(p.d.img,"#173c46"),M=p.d.len*e,R=M*d.height/d.width;t.save(),t.globalAlpha=(p.mode==="hooked"?.75:.42)*p.alpha,t.translate(p.x,p.y),t.rotate(p.a+Math.sin(p.ph)*(p.v>5?.08:.03)),Math.cos(p.a)<0&&t.scale(1,-1),t.drawImage(d,-M/2,-R/2,M,R),t.restore()}for(let p of this.pads)this.img(t,"mp_lilypad",p.x,p.y+Math.sin(r*.8+p.r)*2*e,p.h,{rot:p.r+Math.sin(r*.4+p.r)*.06});t.save(),t.fillStyle="#6e9a3e",t.beginPath(),t.moveTo(0,0),t.lineTo(n,0),t.lineTo(n,a);for(let p=n;p>=0;p-=20)t.lineTo(p,a+Math.sin(p*.02)*10*e+Math.sin(p*.051)*6*e);t.closePath(),t.fill(),t.strokeStyle="rgba(240,255,250,0.55)",t.lineWidth=3*e,t.beginPath();for(let p=0;p<=n;p+=20){let d=a+Math.sin(p*.02)*10*e+Math.sin(p*.051)*6*e+4*e+Math.sin(r*1.5+p*.03)*1.5*e;p?t.lineTo(p,d):t.moveTo(p,d)}t.stroke(),t.restore(),t.save(),t.globalAlpha=.5,this.img(t,"grass",n/2,a*.4,a*.9,{w:n}),t.restore();for(let p=0,d=-20*e;d<n+60*e;p++,d+=92*e)this.img(t,"mp_grass_edge",d,a-18*e+p%2*8*e,104*e,{sx:p%2?-1:1});this.img(t,"mp_rock_wet",n*.2,a+10*e,92*e),this.img(t,"mp_rock_wet",n*.78,a+4*e,74*e,{sx:-1});let c=s-o+40*e;this.img(t,"mp_dock_top",n/2,o-20*e+c/2,c,{w:n*1.04}),this.img(t,"mp_bucket",n*.13,s-74*e,118*e),this.bucket&&this.pill(t,`x${this.bucket}`,n*.13+58*e,s-120*e,{size:16});let h=this.bob,f=[...this.tip0],u=h?h.x:this.ax,m=h?h.y:this.ay;f[0]=Fe(f[0],u,.16),f[1]=Fe(f[1],Math.min(m,s*.62),.12),this.state==="reel"&&(f[0]+=Math.sin(this.t*30)*6*e,f[1]+=30*e);let g=null,x=null;if(h){if(this.state==="cast"){let R=Ss(Math.min(1,this.castT));g=Fe(f[0],h.x,R),x=Fe(f[1],h.y,R)-Math.sin(R*Math.PI)*120*e}else g=h.x,x=h.y+Math.sin(h.t*2.4)*2*e+h.dip;t.save(),t.strokeStyle="rgba(250,250,240,0.85)",t.lineWidth=1.6*e;let p=(f[0]+g)/2,d=(f[1]+x)/2+(1-this.tension)*40*e;t.beginPath(),t.moveTo(f[0],f[1]),t.quadraticCurveTo(p,d,g,x),t.stroke(),t.restore();let M=this.state!=="cast"&&h.under;this.img(t,"mp_bobber",g,x-(M?0:16*e),64*e,{alpha:M?.45:1,sy:M?.6:1})}if(this.drawRod(t,f),!h&&this.state==="aim"&&!this.card&&this.aimMode!=="touch"){let p=Ri(this.ax,50*e,n-50*e),d=Ri(this.ay,a+40*e,o-40*e);t.save(),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=2.5*e,t.setLineDash([6*e,6*e]),t.lineDashOffset=-r*20,t.beginPath(),t.ellipse(p,d,26*e,11*e,0,0,le),t.stroke(),t.restore()}}drawRod(t,e){let n=this.S,s=this.W,r=this.H,a=[s*.7,r+12*n],o=e[0]-a[0],l=e[1]-a[1],c=Math.hypot(o,l),h=-l/c,f=o/c,u=(14+this.tension*70)*n,m=(a[0]+e[0])/2+h*u,g=(a[1]+e[1])/2+f*u+this.tension*30*n,x=p=>[(1-p)**2*a[0]+2*(1-p)*p*m+p*p*e[0],(1-p)**2*a[1]+2*(1-p)*p*g+p*p*e[1]];t.save(),t.lineCap="round";for(let[p,d]of[[26,"#3b2418"],[19,"#a7c46a"]]){t.strokeStyle=d;for(let M=0;M<24;M++){let R=x(M/24),b=x((M+1)/24);t.lineWidth=p*n*(1-M/24*.62),t.beginPath(),t.moveTo(R[0],R[1]),t.lineTo(b[0],b[1]),t.stroke()}}t.strokeStyle="#5f7f34";for(let p of[.18,.36,.52,.66,.78,.88]){let d=x(p),M=x(p+.01),R=M[1]-d[1],b=-(M[0]-d[0]),S=Math.hypot(R,b)||1,w=10*n*(1-p*.62);t.lineWidth=3*n,t.beginPath(),t.moveTo(d[0]-R/S*w,d[1]-b/S*w),t.lineTo(d[0]+R/S*w,d[1]+b/S*w),t.stroke()}t.restore();for(let[p,d]of[[.06,42],[.2,38]]){let M=x(p);t.save(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(M[0]+18*n,M[1]+26*n,d*1.25*n+3,d*.9*n+3,-.5,0,le),t.fill(),t.fillStyle="#5b3f7c",t.beginPath(),t.ellipse(M[0]+18*n,M[1]+26*n,d*1.25*n,d*.9*n,-.5,0,le),t.fill(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(M[0],M[1],d*.62*n+3,d*.5*n+3,-.6,0,le),t.fill(),t.fillStyle="#f3cfa8",t.beginPath(),t.ellipse(M[0],M[1],d*.62*n,d*.5*n,-.6,0,le),t.fill(),t.restore()}}};function Df(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Pv=20*6e4,Nf=8*6e4,Lv=2,Fl=class{constructor(t,e){this.world=t,G.wild||(G.wild={berry:[],bug:[],fish:[]}),this.berries=Sl.map(([n,s],r)=>({i:r,x:n,z:s,spr:e.props.berries[r],full:null,pop:0,tw:r*1.3})),this.bugs=Mh.map(([n,s],r)=>({i:r,hx:n,hz:s,x:n,z:s,y:.9,ph:r*1.7,dir:1,kind:null,scare:0,away:null,spr:t.sprite("moth",Rt("moth",1.4),{x:n,z:s,y:.9,shadow:.3})}))}kind(t){return this.world.night>.5?"glowbug":cf[t]||"moth"}berryLeft(t){let e=G.wild.berry[t];return e?Math.max(0,e+Pv-de()):0}bugLeft(t){let e=G.wild.bug[t];return e?Math.max(0,e+Nf-de()):0}update(t,e){let n=this.world;for(let s of this.berries){let r=this.berryLeft(s.i)===0;r!==s.full&&(s.full===!1&&(s.pop=.5,n.sparkle(s.x,.8,s.z,12,"#ffd0d8")),s.full=r,s.spr.set(r?"berry_full":"berry_bare")),s.pop=Math.max(0,s.pop-t*1.5);let a=s.pop>0?Math.sin(s.pop*16)*s.pop*.3:0,o=r?Math.max(0,Math.sin(e*1.9+s.tw))**8*.05:0;s.spr.sx=1+a+o,s.spr.sy=1-a*.7+o*.4,s.spr.sync(),r&&Math.random()<t*.5&&n.glow.add({x:s.x+(Math.random()-.5)*1.2,y:.5+Math.random()*.8,z:s.z+.1,vx:0,vy:.3,vz:0,life:1,s:3+Math.random()*3,c:"#ffe0e6",a:.85,k:1,fadeIn:.2})}for(let s of this.bugs){let r=this.kind(s.i),a=this.bugLeft(s.i)>0;if(a!==s.away&&(s.away&&!a&&n.sparkle(s.hx,1,s.hz,6,r==="glowbug"?"#e6ff9a":"#f4e6ff"),s.away=a,s.spr.visible=!a),a)continue;s.kind!==r&&(s.kind=r,s.spr.set(r==="ladybug"?"mb_ladybug":r),s.spr.h=r==="ladybug"?.4:Rt(r,r==="moth"?1.4:1.7),s.spr.mat.uniforms.uEmit.value=r==="glowbug"?.85:0),s.ph+=t*(1+s.scare*2.2);let o=.85+s.scare*1.3,l=s.hx+Math.sin(s.ph*.8)*o,c=s.hz+Math.sin(s.ph*1.6)*o*.42;Math.abs(l-s.x)>.002&&(s.dir=l>s.x?1:-1),s.x=l,s.z=c,s.y=.75+Math.sin(s.ph*3.1)*.16+s.scare*.6,s.scare=Math.max(0,s.scare-t*.55),r==="moth"?(s.spr.sx=.5+.5*Math.abs(Math.sin(e*15+s.i)),s.spr.sy=1):r==="ladybug"?(s.spr.sx=1+Math.sin(e*22+s.i)*.06,s.spr.sy=1):(s.spr.sx=1,s.spr.sy=1+Math.sin(e*6+s.i)*.05),s.spr.flip=s.dir<0,s.spr.setPos(s.x,s.z,s.y),r==="glowbug"&&Math.random()<t*9&&n.glow.add({x:s.x+(Math.random()-.5)*.15,y:s.y+.12,z:s.z+.05,vx:0,vy:.05,vz:0,life:.9,s:7+Math.random()*5,c:"#dcff7a",a:.8,k:0,fadeIn:.1,fadePow:2})}}nearBerry(t,e,n=1.6){let s=null,r=n;for(let a of this.berries){let o=Math.hypot(a.x-t,(a.z+.5-e)*1.25);o<r&&(r=o,s=a)}return s}nearBug(t,e,n=1.7){let s=null,r=n;for(let a of this.bugs){if(a.away)continue;let o=Math.hypot(a.x-t,(a.z-e)*1.25);o<r&&(r=o,s=a)}return s}pick(t){if(this.berryLeft(t)>0)return 0;let e=this.berries[t];return G.wild.berry[t]=de(),e.pop=.6,this.world.burst(e.x,.7,e.z+.2,"#c8455a",10),this.world.dust(e.x,e.z+.3,4,"#6d8a3a"),this.update(0,0),Lv}markCaught(t){G.wild.bug[t.i]=de(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff"),this.update(0,0)}markFled(t){G.wild.bug[t.i]=de()-Nf+12e4,this.update(0,0)}tryCatch(t,e,n){if(t.away)return null;if(!(Math.hypot(t.x-e,(t.z-n)*1.25)<1.5))return t.scare=1,null;G.wild.bug[t.i]=de(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff");let r=t.kind;return this.update(0,0),r}};var kn={head:[.53,.885],head_back:[.49,.94],arm:[.5,.1],leg:[.38,.08],body:{neck:[.53,.05],shN:[.33,.24],shF:[.8,.24],hipN:[.42,.8],hipF:[.63,.78]},body_back:{neck:[.52,.03],shN:[.24,.24],shF:[.76,.24],hipN:[.38,.8],hipF:[.62,.8]}},Uh=380,xa=470,Dv=xa-4,Ff=426,_r=(i,t,e)=>i+(t-i)*e,Uf=new Map;function Nv(i,t=.4){if(!i)return i;let e=Uf.get(i);if(e)return e;e=document.createElement("canvas"),e.width=i.width,e.height=i.height;let n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data,a=e.width,o=e.height,l=new Array(o).fill(0);for(let f=0;f<o;f++){let u=0;for(let m=0;m<a;m++)r[(f*a+m)*4+3]>128&&u++;l[f]=u}let c=Math.max(...l),h=o-1;for(;h>o*.6&&l[h]<c*t;){for(let f=0;f<a;f++)r[(h*a+f)*4+3]=0;h--}for(let f=1;f<=3&&h-f+1>0;f++){let u=h-f+1,m=f/4;for(let g=0;g<a;g++)r[(u*a+g)*4+3]*=m}return n.putImageData(s,0,0),Uf.set(i,e),e}var vr=class{constructor(t=document.createElement("canvas")){this.c=t,t.width=Uh,t.height=xa,this.g=t.getContext("2d"),this.t=Math.random()*10,this.ph=0,this.amp=0,this.blinkIn=1.5+Math.random()*3,this.blinkT=0,this.lean=0,this.headLag=0,this.pose=null,this.poseT=0,this.poseDur=1}part(t){return Ae["rw_"+t]}update(t,{speed01:e=0,back:n=!1,stir:s=!1,pose:r=null,poseT:a=0,poseDur:o=1}={}){this.t+=t,this.amp=_r(this.amp,Math.min(1,e),Math.min(1,t*10)),this.amp>.02?this.ph+=t*(5.4+3.2*e)*Math.max(.35,e):this.ph=_r(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.13,this.blinkIn=2.2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t);let l=r&&o>0?Math.sin(Math.min(1,1-a/o)*Math.PI):0,c=this.amp*.07+(r==="witch_pick"?l*.22:0)+(s?.06:0),h=this.lean;this.lean=_r(this.lean,c,Math.min(1,t*9)),this.headLag=_r(this.headLag,-(this.lean-h)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.draw({back:n,stir:s,pick:r==="witch_pick"?l:0})}draw({back:t,stir:e,pick:n}){let s=this.g,r=this.t,a=this.amp,o=Math.sin(this.ph),l=Math.cos(this.ph);s.clearRect(0,0,Uh,xa);let c=t?"body_back":"body",h=kn[c],f=this.part(c),u=this.part("leg"),m=this.part("arm");if(!f||!u||!m)return;let g=.42*a+n*.3,x=t?o*g:-o*g,p=t?-o*g:o*g,d=Math.max(0,t?-l:l)*7*a,M=Math.max(0,t?l:-l)*7*a,R=(1-kn.leg[1])*u.height,b=Dv-R*Math.max(Math.cos(x),Math.cos(p))+n*16,S=(1-a)*Math.sin(r*2.4)*.014,w=Uh*.5,I=w-f.width*.5,v=b-h.hipN[1]*f.height,E=nt=>[I+h[nt][0]*f.width,v+h[nt][1]*f.height],L=[w,b],F=nt=>{s.save(),s.translate(L[0],L[1]),s.rotate(this.lean+Math.sin(this.ph*2)*.015*a),s.scale(1,1+S),s.translate(-L[0],-L[1]),nt(),s.restore()},D=(nt,ot,It,T=0,O=0)=>{s.save(),s.translate(It[0],It[1]+O),s.rotate(T),s.drawImage(nt,-ot[0]*nt.width,-ot[1]*nt.height),s.restore()},N=Math.sin(r*1.6)*.04*(1-a),A=o*.5*a*(t?-1:1)+N,k=-o*.4*a*(t?-1:1)-N;e&&(A=-1.15+Math.sin(r*7)*.35,k=-.35+Math.sin(r*7+1)*.12),n&&(A=_r(A,-1.25,n),k=_r(k,-.5,n));let $=this.headLag+Math.sin(this.ph*2-.8)*.035*a+Math.sin(r*1.1)*.025*(1-a)+n*.1+(e?.06:0),Y=Math.sin(this.ph*2-.9)*2.2*a,st=t?this.part("head_back"):Nv(this.part(this.blinkT>0?"blink":"head")),K=t?kn.head_back:kn.head;t?(F(()=>{D(m,kn.arm,E("shN"),A),D(m,kn.arm,E("shF"),k)}),D(u,kn.leg,[E("hipF")[0],b],p,-M),D(u,kn.leg,[E("hipN")[0],b],x,-d),F(()=>{s.drawImage(f,I,v),D(st,K,E("neck"),$,Y)})):(F(()=>D(m,kn.arm,E("shF"),k)),D(u,kn.leg,[E("hipF")[0],b],p,-M),D(u,kn.leg,[E("hipN")[0],b],x,-d),F(()=>{s.drawImage(f,I,v),D(st,K,E("neck"),$,Y),D(m,kn.arm,E("shN"),A)}))}};var Uv=i=>i*i*(3-2*i),Fv=(i,t,e)=>i+(t-i)*e,Ol=class{constructor(t,e,n,s){this.world=t,this.S=e,this.spr=t.sprite("witch_idle",1.75*xa/Ff,{x:n,z:s,shadow:1}),this.rig=new vr,this.spr.useCanvas(this.rig.c),this.vx=0,this.vz=0,this.face=1,this.flipT=1,this.flipFrom=1,this.back=!1,this.stepN=0,this.pose=null,this.poseT=0,this.poseDur=1,this.squash=0,this.frozen=!1,this.speed=4.8,this.goto=null,this.gotoT=0}walkTo(t,e,n,s=1.2){this.goto=[t,e],this.gotoT=s,this.lookX=n}lookAt(t){let e=t>this.x?1:-1;e!==this.face&&(this.flipFrom=this.face,this.face=e,this.flipT=0)}get x(){return this.spr.x}get z(){return this.spr.z}setPose(t,e=.38){this.pose=t,this.poseT=this.poseDur=e,this.squash=.12}hop(){this.squash=.3}update(t,e){let n=this.frozen?0:e.x,s=this.frozen?0:e.z;if(this.goto){let p=this.goto[0]-this.x,d=this.goto[1]-this.z,M=Math.hypot(p,d);if(this.gotoT-=t,M<.1||this.gotoT<=0)this.goto=null,this.vx=this.vz=0,this.lookX!=null&&(this.back=!1,this.lookAt(this.lookX));else{let R=Math.min(1,M*1.8)/M;n=p*R,s=d*R}}let r=Math.hypot(n,s);r>1&&(n/=r,s/=r);let a=r>.05?14:18;this.vx+=(n*this.speed-this.vx)*Math.min(1,a*t),this.vz+=(s*this.speed-this.vz)*Math.min(1,a*t);let o=this.x+this.vx*t,l=this.z+this.vz*t;Sh(this.S,o,this.z)&&(o=this.x,this.vx*=.3),Sh(this.S,o,l)&&(l=this.z,this.vz*=.3),this.spr.mesh.position.x=o,this.spr.mesh.position.z=l;let c=Math.hypot(this.vx,this.vz),h=c>.6;if(Math.abs(this.vx)>.5){let p=this.vx>0?1:-1;p!==this.face&&(this.flipFrom=this.face,this.face=p,this.flipT=0)}Math.abs(this.vz)>.8&&(this.back=this.vz<-.3&&Math.abs(this.vz)>Math.abs(this.vx)*.6),Math.abs(this.vx)>1.2&&Math.abs(this.vz)<1&&(this.back=!1),this.flipT=Math.min(1,this.flipT+t/.14),this.poseT>0&&(this.poseT-=t,this.poseT<=0&&(this.pose=null));let f=this.rig;f.update(t,{speed01:h?c/this.speed:0,back:this.back,pose:this.pose,poseT:Math.max(0,this.poseT),poseDur:this.poseDur}),this.spr.refresh();let u=Math.floor(f.ph/Math.PI);if(u!==this.stepN&&(this.stepN=u,h)){let p=oa(this.world,this.x,this.z);ut.step(p),this.world.dust(this.x,this.z+.05,p==="grass"?1:2,p==="stone"?"#e7e2d6":p==="dirt"?"#d9b98a":"#c9d9a0")}this.squash=Math.max(0,this.squash-t*1.6);let m=Math.sin(this.squash*10)*this.squash*.5;this.spr.mesh.position.y=Math.abs(Math.cos(f.ph))*.035*f.amp;let g=this.flipT<1?Math.cos(Uv(this.flipT)*Math.PI)*-1:1,x=this.flipT<1?this.flipT<.5?this.flipFrom*Math.abs(g):this.face*Math.abs(g):this.face;this.spr.flip=!1,this.spr.sx=Math.max(.06,Math.abs(x))*Math.sign(x||1)*(1+m*.6),this.spr.sy=1-m*.5,this.spr.sync()}},is=class{constructor(t,e,n,s,r,a={}){this.world=t,this.base=e,this.talkName=a.talk||null,a.rig&&aa[a.rig]?(this.pup=new vs(a.rig),this.spr=t.sprite(`rn_${a.rig}_head`,this.pup.worldH,{x:s,z:r,shadow:aa[a.rig].h*.5}),this.spr.useCanvas(this.pup.c),this.native=1,this.drawT=1):(this.spr=t.sprite(e,n,{x:s,z:r,shadow:n*.5}),this.native=/^crow/.test(e)?-1:1),this.path=[],this.speed=a.speed||2.2,this.t=Math.random()*10,this.face=a.face||1,this.fx=this.face,this.talking=0,this.onArrive=null,this.hopT=0,this.cheerT=0}get x(){return this.spr.x}get z(){return this.spr.z}goTo(t,e){this.path=t.slice(),this.onArrive=e||null}get moving(){return this.path.length>0}hop(){this.hopT=.45}cheer(t=1.4){this.cheerT=t,this.hop()}update(t){this.t+=t;let e=!1;if(this.path.length){let[r,a]=this.path[0],o=r-this.x,l=a-this.z,c=Math.hypot(o,l);if(c<.08){if(this.path.shift(),!this.path.length&&this.onArrive){let h=this.onArrive;this.onArrive=null,h()}}else{let h=Math.min(c,this.speed*t);this.spr.mesh.position.x+=o/c*h,this.spr.mesh.position.z+=l/c*h,Math.abs(o)>.05&&(this.face=o>0?1:-1),e=!0}}this.talking=Math.max(0,this.talking-t),this.hopT=Math.max(0,this.hopT-t),this.cheerT=Math.max(0,this.cheerT-t);let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.35:0;if(this.pup){let r=this.pup,a=this.spr.visible&&Math.abs(this.x-this.world.camera.position.x)<18;this.drawT+=t;let o=a&&this.drawT>=1/30;r.update(t,{speed01:e?Math.min(1,this.speed/2.4):0,talking:this.talking>0,happy:this.cheerT>0,draw:o}),o&&(this.drawT=0,this.spr.refresh()),this.spr.mesh.position.y=n+Math.abs(Math.cos(r.ph))*.03*r.amp,this.fx=Fv(this.fx,this.face,Math.min(1,t*12)),this.spr.sx=Math.max(.06,Math.abs(this.fx))*Math.sign(this.fx||1),this.spr.sy=1,this.spr.sync();return}let s=e?Math.abs(Math.sin(this.t*9))*.08:0;this.spr.mesh.position.y=s+n,this.talkName&&this.spr.set(this.talking>0&&Math.floor(this.t*6)%2?this.talkName:this.base),this.spr.sx=this.face*this.native*(e?1+Math.sin(this.t*18)*.02:1),this.spr.sy=1+(e?Math.sin(this.t*18)*.03:Math.sin(this.t*2+1)*.015),this.spr.sync()}},kl=class{constructor(t){this.world=t,this.spr=t.sprite("cat",.72,{x:ct.cat[0],z:ct.cat[1],shadow:.6}),this.t=0,this.hopT=0,this.atStall=!1}get x(){return this.spr.x}get z(){return this.spr.z}hop(){this.hopT=.45}moveToStall(t){if(t===this.atStall)return;this.atStall=t;let[e,n]=t?[ct.myStall[0]+.9,ct.myStall[1]+.35]:ct.cat;this.world.sparkle(this.x,.3,this.z,10,"#e9d6ff"),this.spr.setPos(e,n),this.world.sparkle(e,.3,n,10,"#e9d6ff")}update(t){this.t+=t,this.hopT=Math.max(0,this.hopT-t);let e=this.world.night>.6&&!this.atStall;this.spr.set(e?"cat_sleep":"cat"),this.spr.h=e?.5:.72;let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.3:0;this.spr.mesh.position.y=n,this.spr.sy=1+Math.sin(this.t*(e?1.2:2.2))*(e?.035:.02),this.spr.sx=-1,this.spr.sync(),e&&Math.random()<t*.4&&this.world.soft.add({x:this.x+.2,y:.6,z:this.z,vx:.15,vy:.35,vz:0,life:2,s:3,c:"#ffffff",a:.7,fadeIn:.3})}},Bl=["pip","wren","basil"];function Of(i,t){let e={};for(let l of t)if(l.stall){let[c,h]=pi[l.id],f=c+1.8,u=h+.15,m=new is(i,l.sprite,1.6,f,u,{face:f<ct.fountain[0]?1:-1,rig:l.rig});m.home=[f,u],e[l.id]=m}let n=[[38,1.8],[45.5,1.6],[44,-2.6],[40,-2.4],[37.5,.6],[46.5,.4],[41,4.6],[43.5,4.8]],s=Object.fromEntries(t.map(l=>[l.id,l])),r=new is(i,s.pip.sprite,1.55,44,2.4,{speed:1.7,rig:s.pip.rig}),a=new is(i,s.bramble.sprite,1.6,39,-1.4,{speed:1.5,rig:s.bramble.rig}),o=new is(i,s.basil.sprite,1.6,46,-1.8,{speed:1.3,rig:s.basil.rig});for(let l of[r,a,o])l.wander=n,l.wait=1+Math.random()*3;return e.pip=r,e.wren=a,e.basil=o,e}function kf(i,t){for(let e of Bl){let n=i[e];if(!(!n||n.busy)&&!n.moving&&(n.wait-=t,n.wait<=0)){let s=n.wander[Math.floor(Math.random()*n.wander.length)];n.goTo([[s[0]+(Math.random()-.5),s[1]+(Math.random()-.5)]],()=>{n.wait=2+Math.random()*4})}}}var Ie={cham:{name:"Chamomile",icon:"i_cham",color:"#f3e7b0",path:[[1.5,1.2],[3.2,1.6]]},lav:{name:"Lavender",icon:"i_lav",color:"#a98be0",path:[[-1.2,-.8],[-2,-2.2],[-3.2,-2.6]]},man:{name:"Mandrake",icon:"i_man",color:"#e8d2a6",path:[[3,0],[4,1.5]]},mush:{name:"Blue Mushroom",short:"Blue Cap",icon:"i_mush",color:"#7fa7e8",path:[[.8,1.5],[-.4,2.6],[.6,4]]},feather:{name:"Owl Feather",short:"Feather",icon:"i_feather",color:"#f2efe8",path:[[-1.6,.6],[-3.4,.4]]},berry:{name:"Wild Berry",short:"Berry",icon:"i_berry",color:"#c8455a",path:[[.9,.9],[2.3,1.4]],wild:!0,from:"Grows wild in Whisperwood."},moth:{name:"Wood Moth",short:"Moth",icon:"i_moth",color:"#d9c8e8",path:[[-1.5,-.3],[-3,-.1],[-3.4,.5]],wild:!0,from:"Caught with your net."},glowbug:{name:"Glowbug",icon:"i_glowbug",color:"#d8f27a",path:[[1.8,.2],[3.6,.75]],wild:!0,from:"Caught with your net, after dark."},ladybug:{name:"Ladybug",icon:"i_ladybug",color:"#d8453a",path:[[.4,1.5],[.7,2.8]],wild:!0,from:"Caught with your net."},beetle:{name:"Moss Beetle",short:"Beetle",icon:"i_beetle",color:"#3f8a6e",path:[[-1.3,-.9],[-2.5,-2.1]],wild:!0,from:"Hides under fallen leaves."},minnow:{name:"Pond Minnow",short:"Minnow",icon:"i_minnow",color:"#9fb8c8",path:[[-1.6,.1],[-3.3,.5]],wild:!0,from:"Caught at Willow Pond."},bluegill:{name:"Bluegill",icon:"i_bluegill",color:"#5a8cc8",path:[[1.2,.5],[2.35,1.4]],wild:!0,from:"Caught at Willow Pond."},carp:{name:"Golden Carp",short:"Carp",icon:"i_carp",color:"#f0a040",path:[[.3,1.8],[.9,3.6],[1.4,5.5]],wild:!0,from:"A rare bite at Willow Pond."}},ws=[.6,1.1,1.6],Fh=[2.2,1.5,1],Qt={sleep:{name:"Sleep Potion",short:"Sleep",medal:"m_moon",potion:"p_round",at:[-5.1,-4.3],base:60,liquid:"#9b7fe0",hint:"deep in the lower-left fog"},heal:{name:"Healing Potion",short:"Healing",medal:"m_heart",potion:"p_heart",at:[4.7,2.8],base:50,liquid:"#e98aa0",hint:"up and to the right"},glow:{name:"Glow Potion",short:"Glow",medal:"m_sun",potion:"p_gold",at:[7,1.5],base:70,liquid:"#f2c75c",hint:"far to the right"},luck:{name:"Luck Potion",short:"Luck",medal:"m_star",potion:"p_tube",at:[1.4,5.5],base:120,liquid:"#7fd6c4",hint:"north, past the brambles"},calm:{name:"Calm Potion",short:"Calm",medal:"m_drop",potion:"p_tube",at:[-6.6,1],base:55,liquid:"#8cc8f0",hint:"far to the left"}},Oh=[{at:[-2.4,1.7],r:.95},{at:[3.4,-2.3],r:1.05},{at:[2.9,4.1],r:.8}],Ts=24,Es=16,_a={cham:{name:"Chamomile",yield:2,growMin:4,sprite:["cham_0","cham_1","cham_2"]},lav:{name:"Lavender",yield:2,growMin:6,sprite:["lav_0","lav_1","lav_2"]},man:{name:"Mandrake",yield:1,growMin:15,sprite:["man_0","man_1","man_2"]}},mi=[{id:"letter",text:"Read Granny's letter in the mailbox"},{id:"harvest",text:"Harvest herbs in your garden",need:3},{id:"talk",text:"A customer is at your door. Say hello"},{id:"brew",text:"Brew a Sleep Potion at the cauldron"},{id:"deliver",text:"Give the Sleep Potion to Mr. Crow"},{id:"town",text:"Follow the path east to Mossbrook"},{id:"board",text:"Check the discovery board in the square"},{id:"stall",text:"Open your stall. Kuro will mind it"},{id:"buy",text:"Buy a Blue Mushroom from Mira's stall"},{id:"mystery",text:"Something glows in the north fog. Brew it"},{id:"free",text:"Your garden, stall and customers run on the real clock"}],zl=[{id:"mira",name:"Mira",sprite:"pt_bear",rig:"bear",stall:{sprite:"stall_red",title:"Mira's Remedies",line:"Fresh from the north woods! Blue caps are rare this week.",items:[{ing:"mush",price:40,stock:3},{ing:"feather",price:25,stock:2}]}},{id:"juniper",name:"Juniper",sprite:"pt_turtle",rig:"turtle",stall:{sprite:"stall_green",title:"Juniper's Garden",line:"Seeds and sprigs, picked this morning.",items:[{ing:"cham",price:12,stock:5},{ing:"lav",price:15,stock:4}]}},{id:"oz",name:"Oz",sprite:"pt_fish",rig:"fish",stall:{sprite:"stall_blue",title:"Oz's Odd Bottles",line:"Rare roots. Ask about my Glow recipe.",items:[{ing:"man",price:35,stock:2}]}},{id:"pip",name:"Pip",sprite:"pt_duck",rig:"duck"},{id:"bramble",name:"Wren",sprite:"pt_raccoon",rig:"raccoon"},{id:"basil",name:"Basil",sprite:"pt_croc",rig:"croc"}],kh=["anyone selling moon dew?","WTS lavender x10, cheap!","who found Healing first??","the north fog is huge","Kuro is so cute omg","buying blue caps 45 each","my mandrake yelled at me","Glow sells great at night"],Bh=[{effect:"heal",who:"Juniper",when:"3 days ago"},{effect:"glow",who:"Oz",when:"yesterday"}],yr=[{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Hello, young witch. I haven't slept in three nights. The owls keep singing. Do you have something to help me sleep?",thanks:"Ah... I can almost hear my pillow calling. Thank you, little witch."},{who:"pip",name:"Pip",sprite:"pt_duck",rig:"duck",want:"heal",ask:"I fell off my broom. Again. Got anything for scraped knees?",thanks:"Wow, it stopped stinging already! You are good at this."},{who:"wren",name:"Wren",sprite:"pt_raccoon",rig:"raccoon",want:"glow",ask:"The forest gets so dark on my way home. Could you make me something that glows?",thanks:"It shines like a tiny moon! I will tell everyone in town."},{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Me again. The owls are back, and louder. Another Sleep Potion, please?",thanks:"Bless you. I shall sleep like a stone."}];var Vl=class{constructor(t){this.world=t,this.plots=la.map((e,n)=>({...e,i:n,spr:t.sprite("cham_0",.6,{x:e.x,z:e.z+.15,shadow:.7,sway:.03}),stage:-1,crop:null,pop:0,tw:Math.random()*4}))}state(t){let e=G.plots[t],n=_a[e.crop],s=n.growMin*6e4,r=de()-e.at;return{crop:e.crop,def:n,k:Math.max(0,Math.min(1,r/s)),ready:r>=s,left:s-r}}readyCount(){return this.plots.filter(t=>this.state(t.i).ready).length}update(t,e){for(let n of this.plots){let s=this.state(n.i),r=s.ready?2:s.k<.45?0:1;if(r!==n.stage||s.crop!==n.crop){let l=n.stage>=0&&r>n.stage;n.stage=r,n.crop=s.crop,n.spr.set(s.def.sprite[r]),n.spr.h=Rt(s.def.sprite[r],1.15),n.spr.mat.uniforms.uSway.value=r===0?.02:.05,l&&(n.pop=.5,this.world.sparkle(n.x,.5,n.z,r===2?14:6,r===2?"#fff2a8":"#d8f5b0"))}n.pop=Math.max(0,n.pop-t*1.4);let a=n.pop>0?Math.sin(n.pop*14)*n.pop*.35:0,o=r===2?Math.max(0,Math.sin(e*2.6+n.tw))**6*.06:0;n.spr.sx=1+a+o,n.spr.sy=1-a*.8+o*.5,n.spr.sync(),r===2&&Math.random()<t*.9&&this.world.glow.add({x:n.x+(Math.random()-.5)*.9,y:.4+Math.random()*.7,z:n.z+.1,vx:0,vy:.35,vz:0,life:1.1,s:4+Math.random()*3,c:"#fff1a0",a:.9,k:1,fadeIn:.2})}}harvest(t){let e=this.state(t);if(!e.ready)return null;let n=this.plots[t];return G.plots[t].at=de(),this.world.burst(n.x,.5,n.z,"#7fb04e",12),this.world.sparkle(n.x,.6,n.z,10,"#fff2a8"),this.world.dust(n.x,n.z+.1,5,"#b48a5a"),n.stage=-1,this.update(0,0),n.pop=.6,{crop:e.crop,n:e.def.yield}}nearest(t,e,n=1.35){let s=null,r=n;for(let a of this.plots){let o=Math.hypot(a.x-t,(a.z-e)*1.2);o<r&&(r=o,s=a)}return s}};var Ce=50,zh=Ts*Ce,Vh=Es*Ce,Tn=(i,t)=>[(i+Ts/2)*Ce,(Es/2-t)*Ce],br=["Perfect","Fine","Weak"],Gh=1.75,Ov=13,Hh=["lav","cham","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],Bf="#86c9d0",Hl=new Image;Hl.src=jt("ui_arrow_r");var Gl={intro:{say:"Mrrp! This is your potion map. Your potion starts at the little bottle. Mr. Crow's Sleep Potion is hiding in the fog, down and to the left.",tap:"Show me",ring:".map-frame",mark:"sleep"},drop:{say:"Lavender pulls a brew down and to the left. Drag one into the cauldron.",ring:'.tile[data-id="lav"]'},path:{say:"See the dotted line? Stirring walks your potion along it, and the fog lifts as it goes.",tap:"Got it",ring:".map-frame",mark:"end"},stir:{say:"Hold Stir, or draw circles in the pot.",ring:".stir"},more:{say:"Not there yet. One more Lavender carries it further.",ring:'.tile[data-id="lav"]'},stir2:{say:"Stir again. I will catch the spoon when you reach it.",ring:".stir",mark:"sleep"},bottle:{say:"Right on it! The closer to the middle, the better the potion. Bottle it!",ring:".bottle"},back:{say:"Oops, you went past. Hold Moon water: it drifts your potion back toward the start.",ring:".water"}},ya=(i,t,e)=>{let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=a=>Math.round((n>>a&255)*(1-e)+(s>>a&255)*e);return"#"+(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")},As=(i,t)=>ya(i,t>0?"#ffffff":"#1d1430",Math.abs(t));function va(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Wl=class{constructor(t,e){this.hooks=e,this.isOpen=!1,this.t=0;let n=this.el=va("section","brew hidden");n.innerHTML=`
      <div class="brew-bg"></div>
      <div class="brew-ask hidden"><div class="ribbon sm"><span></span></div><div class="speech sm"><p></p></div></div>
      <div class="brew-stage">
        <canvas class="brew-witch"></canvas>
        <div class="pot">
          <canvas class="liquid"></canvas>
          <img class="pot-img" src="${jt("cauldron_pot")}" alt="" draggable="false">
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
          <button class="btn-pill water" data-k="Q"><img src="${jt("i_dew")}" alt=""><span>Moon water</span></button>
          <button class="btn-green stir" data-k="Space"><img src="${jt("spoon")}" alt=""><span>Hold to stir</span></button>
          <button class="btn-green bottle" disabled><img src="${jt("bottle")}" alt=""><span>Bottle it</span></button>
        </div>
      </div>
      <button class="btn-pill dump"><span>Dump</span></button>
      <button class="btn-close" aria-label="Close"></button>
      <div class="lesson-ring hidden"><img src="${jt("ui_arrow_r")}" alt=""></div>
      <img class="lesson-ghost hidden" src="${jt("i_lav")}" alt="">
      <div class="brew-coach hidden"><img class="coach-cat" src="${jt("cat")}" alt=""><div class="speech coach-say"><p></p><button class="btn-green coach-ok hidden"><span></span></button></div></div>
      <div class="brew-toast"></div>`,t.appendChild(n),this.$=s=>n.querySelector(s),this.mapc=this.$(".mapc"),this.liq=this.$(".liquid"),this.fx=this.$(".potfx"),this.rig=new vr(n.querySelector(".brew-witch")),this.potEl=this.$(".pot"),this.base=this.buildBase(),this.fog=document.createElement("canvas"),this.fog.width=zh/2,this.fog.height=Vh/2,this.cam={x:0,y:0},this.bubbles=[],this.steam=[],this.drops=[],this.stirHold=!1,this.waterHold=!1,this.stirV=0,this.spoonA=0,this.circleAmt=0,this.wire(),this.reset(!0)}buildBase(){let t=document.createElement("canvas");t.width=zh,t.height=Vh;let e=t.getContext("2d");e.drawImage(Ae.mapbg,0,0,zh,Vh),e.fillStyle="rgba(90,60,40,0.18)";for(let r=-11;r<=11;r++)for(let a=-7;a<=7;a++){let[o,l]=Tn(r,a);e.beginPath(),e.arc(o,l,2,0,7),e.fill()}for(let r of Oh){let[a,o]=Tn(r.at[0],r.at[1]),l=r.r*Ce,c=e.createRadialGradient(a,o,l*.2,a,o,l*1.15);c.addColorStop(0,"rgba(58,92,48,0.75)"),c.addColorStop(.75,"rgba(58,92,48,0.45)"),c.addColorStop(1,"rgba(58,92,48,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,l*1.15,0,7),e.fill(),e.strokeStyle="rgba(40,58,30,0.9)",e.lineWidth=3,e.lineCap="round";for(let f=0;f<9;f++){let u=f*.7+r.r,m=l*(.35+f%3*.22);e.beginPath(),e.arc(a,o,m,u,u+2.2),e.stroke();for(let g=0;g<4;g++){let x=u+g*.55,p=a+Math.cos(x)*m,d=o+Math.sin(x)*m;e.beginPath(),e.moveTo(p,d),e.lineTo(p+Math.cos(x)*9,d+Math.sin(x)*9),e.stroke()}}let h=l*.95;e.drawImage(Ae.m_thorn,a-h/2,o-h/2,h,h)}let[n,s]=Tn(0,0);return e.strokeStyle="rgba(90,55,35,0.8)",e.lineWidth=3,e.beginPath(),e.arc(n,s,16,0,7),e.stroke(),e.beginPath(),e.moveTo(n-24,s),e.lineTo(n+24,s),e.moveTo(n,s-24),e.lineTo(n,s+24),e.stroke(),t}rebuildFog(){let t=this.fog.getContext("2d"),e=this.fog.width,n=this.fog.height;t.globalCompositeOperation="source-over",t.clearRect(0,0,e,n),t.fillStyle="rgba(232,226,240,0.8)",t.fillRect(0,0,e,n);let s=9,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<260;a++){let o=r()*e,l=r()*n,c=20+r()*70,h=r(),f=t.createRadialGradient(o,l,0,o,l,c),u=h<.5?`rgba(255,255,255,${.35+h*.5})`:`rgba(170,160,196,${(h-.5)*.45})`;f.addColorStop(0,u),f.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=f,t.beginPath(),t.arc(o,l,c,0,7),t.fill()}t.globalCompositeOperation="destination-out",this.cut(0,0,!1),this.cut(.6,.3,!1),this.cut(-.6,-.3,!1);for(let[a,o]of G.fog)this.cut(a,o,!1);t.globalCompositeOperation="source-over"}cut(t,e,n=!0){let s=this.fog.getContext("2d");n&&(s.globalCompositeOperation="destination-out");let r=(t+Ts/2)*Ce/2,a=(Es/2-e)*Ce/2,o=Gh*Ce/2,l=s.createRadialGradient(r,a,o*.35,r,a,o);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.beginPath(),s.arc(r,a,o,0,7),s.fill(),n&&(s.globalCompositeOperation="source-over")}reveal(t,e){let n=this.lastReveal;if(n&&Math.hypot(n[0]-t,n[1]-e)<.22)return;this.lastReveal=[t,e];let s=[Math.round(t*10)/10,Math.round(e*10)/10];G.fog.push(s),G.fog.length>4e3&&G.fog.splice(0,500),this.cut(s[0],s[1]),Math.random()<.18&&ut.reveal();for(let[r,a]of Object.entries(Qt))!this.seen[r]&&Math.hypot(a.at[0]-t,a.at[1]-e)<Gh+.3&&(this.seen[r]=!0,this.spot(r))}isSeen(t){if(this.seen[t])return!0;let e=Qt[t];return G.fog.some(([n,s])=>Math.hypot(e.at[0]-n,e.at[1]-s)<Gh)}spot(t){this.flashEffect={id:t,t:0},ut.near(),this.toast(`You spotted <b>${Qt[t].name}</b> in the fog`,Qt[t].medal)}reset(t=!1){this.pos=[0,0],this.path=[],this.trail=[[0,0]],this.ings=[],this.liquidCol=Bf,this.curdle=0,this.lastReveal=null,this.nearId=null,this.nearTier=-1,this.nearD=null,this.nearAny=null,this.caught={},this.stirLock=!1,this.lockT=0,this.passed=null,this.catchFx=null,t||this.updateUI()}open(t={}){this.ctx=t,this.isOpen=!0,this.t=0,this.reset(!0),this.seen={};for(let n of Object.keys(Qt))(this.isSeen(n)||G.discovered[n])&&(this.seen[n]=!0);this.rebuildFog(),this.cam.x=0,this.cam.y=0;let e=this.$(".brew-ask");t.ask?(e.classList.remove("hidden"),e.querySelector(".ribbon span").textContent=t.ask.name,e.querySelector("p").textContent=t.ask.line):e.classList.add("hidden"),this.el.classList.remove("hidden"),this.el.classList.add("opening"),setTimeout(()=>this.el.classList.remove("opening"),600),this.lesson=null,!G.lesson&&!G.discovered.sleep&&((G.inv.lav||0)<2&&(G.inv.lav=2,this.hooks.onInv&&this.hooks.onInv()),t.target||(t.target="sleep")),this.buildShelf(),this.resize(),this.updateUI(),this.lessonGo(!G.lesson&&!G.discovered.sleep?"intro":null),ut.open()}close(){this.isOpen&&(this.isOpen=!1,this.stirHold=this.waterHold=!1,this.el.classList.add("hidden"),pe(),ut.close(),this.hooks.onClose&&this.hooks.onClose())}wire(){let t=this.$;t(".btn-close").addEventListener("click",()=>this.close()),t(".dump").addEventListener("click",()=>this.dump()),t(".bottle").addEventListener("click",()=>this.bottle()),t(".coach-ok").addEventListener("click",()=>this.lessonNext());let e=(o,l)=>{let c=f=>{f.preventDefault(),this[l]=!0,o.classList.add("down"),o.setPointerCapture&&f.pointerId!=null&&o.setPointerCapture(f.pointerId)},h=()=>{this[l]=!1,o.classList.remove("down")};o.addEventListener("pointerdown",c),o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};e(t(".stir"),"stirHold"),e(t(".water"),"waterHold");let n=t(".pot-hit"),s=null,r=o=>{let l=this.potEl.getBoundingClientRect();return Math.atan2((o.clientY-(l.top+l.height*.17))*2.6,o.clientX-(l.left+l.width*.5))};n.addEventListener("pointerdown",o=>{s={id:o.pointerId,a:r(o)},n.setPointerCapture(o.pointerId)}),n.addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=r(o),c=l-s.a;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),s.a=l,this.circleAmt+=Math.abs(c)*.32,this.spoonA=l,this.circleAt=this.t});let a=()=>{s=null};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),window.addEventListener("resize",()=>this.isOpen&&this.resize())}buildShelf(){let t=this.$(".shelf");t.innerHTML="";for(let e of Hh){let n=Ie[e],s=G.inv[e]||0;if(n.wild&&!s&&!G.found[e])continue;let r=va("div","tile"+(s?"":" empty"));r.dataset.id=e,r.innerHTML=`<img src="${jt(n.icon)}" alt="" draggable="false"><b class="count">${s}</b><i class="nm">${n.short||n.name}</i>`,t.appendChild(r),r.addEventListener("pointerdown",a=>this.dragStart(a,e,r))}}refreshShelf(){for(let t of this.$(".shelf").children){let e=G.inv[t.dataset.id]||0;t.querySelector(".count").textContent=e,t.classList.toggle("empty",!e)}}dragStart(t,e,n){if(t.preventDefault(),this.lessonLocked(e)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),ut.click(),this.coachBump();return}if(!(G.inv[e]>0)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),ut.click(),this.toast(`No ${Ie[e].name} left. Grow or buy more`);return}let s=va("img","drag-ghost");s.src=jt(Ie[e].icon),document.body.appendChild(s);let r=t.clientX,a=t.clientY,o=0,l=(u,m)=>{s.style.transform=`translate(${u-40}px, ${m-40}px) rotate(${Math.sin(performance.now()/120)*8}deg)`};l(r,a),ut.pop(),n.classList.add("lift");let c=(u,m)=>{let g=this.potEl.getBoundingClientRect();return u>g.left&&u<g.right&&m>g.top-g.height*.3&&m<g.top+g.height*.6},h=u=>{o=Math.max(o,Math.hypot(u.clientX-r,u.clientY-a)),l(u.clientX,u.clientY),this.potEl.classList.toggle("target",c(u.clientX,u.clientY))},f=u=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),n.classList.remove("lift"),this.potEl.classList.remove("target");let m=o<10;if(m||c(u.clientX,u.clientY))this.drop(e,s,m?null:[u.clientX,u.clientY]);else{s.classList.add("back");let g=n.getBoundingClientRect();s.style.transform=`translate(${g.left+g.width/2-40}px, ${g.top+g.height/2-40}px) scale(0.6)`,setTimeout(()=>s.remove(),250)}};window.addEventListener("pointermove",h),window.addEventListener("pointerup",f),window.addEventListener("pointercancel",f)}drop(t,e,n){let s=this.potEl.getBoundingClientRect(),r=s.left+s.width*.5-40,a=s.top+s.height*.12-40;e.classList.add("fall"),e.style.transform=`translate(${r}px, ${a}px) rotate(200deg) scale(0.55)`,G.inv[t]--,this.refreshShelf(),this.hooks.onInv&&this.hooks.onInv(),setTimeout(()=>{e.remove(),this.addIngredient(t)},n?230:330)}addIngredient(t){let e=Ie[t],n=this.path.length?this.path[this.path.length-1]:this.pos;for(let[r,a]of e.path)this.path.push([n[0]+r,n[1]+a]);this.ings.push(t),this.liquidCol=ya(this.liquidCol,e.color,this.ings.length===1?.65:.45),ut.splash(),Ue(12),this.splash(e.color),this.pathFlash=1,this.updateUI();let s=this.lesson;(s==="drop"||s==="more"||s==="path"||s==="stir")&&this.lessonGo(this.ings.length>=2?"stir2":"path")}sweetStop(t,e,n,s,r,a){let o=Math.hypot(n-t,s-e);if(o<1e-6)return null;let l=(n-t)/o,c=(s-e)/o,h=null;for(let[f,u]of Object.entries(Qt)){if(this.caught[a+f])continue;let m=(u.at[0]-t)*l+(u.at[1]-e)*c;m<=.002||m>r||Math.hypot(u.at[0]-(t+l*m),u.at[1]-(e+c*m))>=ws[1]||(!h||m<h.s)&&(h={s:m,id:f})}return h}moveAlong(t){for(;t>0&&this.path.length;){let[e,n]=this.path[0],[s,r]=this.pos,a=Math.hypot(e-s,n-r),o=this.sweetStop(s,r,e,n,Math.min(a,t),"s"),l=o?o.s:Math.min(a,t);if(l>=a-1e-9?(this.pos=[e,n],this.path.shift()):this.pos=[s+(e-s)/a*l,r+(n-r)/a*l],t-=Math.max(l,1e-6),this.afterMove(),this.curdle)return;if(o){this.catchSpoon(o.id,"s");return}}}pullWater(t){let[e,n]=this.pos,s=Math.hypot(e,n);if(s<.01)return;let r=this.sweetStop(e,n,0,0,Math.min(t,s),"w"),a=(r?r.s:Math.min(t,s))/s,o=-e*a,l=-n*a;this.pos=[e+o,n+l];for(let c of this.path)c[0]+=o,c[1]+=l;this.liquidCol=ya(this.liquidCol,Bf,.02),this.afterMove(),r&&this.catchSpoon(r.id,"w")}catchSpoon(t,e){this.caught[e+t]=!0,this.stirV=0,this.stirLock=this.stirHold||this.waterHold,this.lockT=.7,this.catchFx={at:this.pos.slice(),t:0},ut.near(),setTimeout(()=>ut.pop(),90),Ue(18);let n=this.$(".readout");n.classList.remove("hot"),n.offsetWidth,n.classList.add("hot");for(let s of[this.$(".stir"),this.$(".water")])s.classList.remove("down");this.lesson&&t==="sleep"&&this.nearId==="sleep"&&this.lessonGo("bottle")}afterMove(){let[t,e]=this.pos,n=this.trail[this.trail.length-1];Math.hypot(n[0]-t,n[1]-e)>.08&&this.trail.push([t,e]),this.reveal(t,e);for(let o of Oh)if(Math.hypot(o.at[0]-t,o.at[1]-e)<o.r*.82){this.curdleNow();return}let s=null,r=1e9;for(let[o,l]of Object.entries(Qt)){let c=Math.hypot(l.at[0]-t,l.at[1]-e);c<r&&(r=c,s=o)}let a=r<ws[0]?0:r<ws[1]?1:r<ws[2]?2:-1;(a!==this.nearTier||s!==this.nearId)&&(a>=0&&(this.nearTier<0||a<this.nearTier)&&(ut.near(),Ue(8)),a<0&&this.nearTier>=0&&(this.passed=this.nearId),a>=0&&(this.passed=null),this.nearTier=a,this.nearId=a>=0?s:null,this.updateUI(),this.lesson==="bottle"&&(a<0||a===2)?this.lessonGo("back"):this.lesson==="back"&&s==="sleep"&&a>=0&&a<=1&&this.lessonGo("bottle")),this.nearD=r,this.nearAny=s}curdleNow(){this.curdle=1.4,this.stirHold=!1,this.stirV=0,ut.fail(),Ue(40),this.liquidCol="#6d6a4a",this.el.classList.remove("shake"),this.el.offsetWidth,this.el.classList.add("shake"),this.toast("The brew snagged on the thorns and curdled"),this.path=[],setTimeout(()=>{this.reset(),this.updateUI()},1300)}dump(){this.ings.length&&(ut.pour(),this.splash("#cfd8e6"),this.reset(),this.updateUI(),this.toast("Poured out. The cauldron is fresh again"))}bottle(){if(this.nearTier<0||!this.nearId)return;let t=this.nearId,e=this.nearTier,n=this.ings.slice(),s=Qt[t];ut.bottle(),Ue(25),this.lesson&&(this.lessonGo(null),G.lesson=1,G.brewTut=3,pe());let r=this.potEl.getBoundingClientRect(),a=va("img","rise-bottle");a.src=jt(s.potion),a.style.left=r.left+r.width/2-45+"px",a.style.top=r.top+r.height*.05+"px",document.body.appendChild(a);for(let o=0;o<24;o++)this.steam.push({x:.5+(Math.random()-.5)*.4,y:.17,vx:(Math.random()-.5)*.4,vy:-.4-Math.random()*.6,life:1.2,t:0,s:6+Math.random()*8,c:"#fff6c8",glow:1});setTimeout(()=>a.remove(),1600),this.reset(),this.updateUI(),this.hooks.onBottle(t,e,n,a)}update(t){if(!this.isOpen)return;this.t+=t,this.curdle>0&&(this.curdle=Math.max(0,this.curdle-t));let e=this.nearD!=null&&this.nearD<ws[1]?.5:1;!this.stirHold&&!this.waterHold&&(this.stirLock=!1),this.lockT=Math.max(0,this.lockT-t);let n=this.stirLock||this.lockT>0,s=this.stirHold&&!n&&this.path.length&&!this.curdle?1.7*e:0;this.stirV+=(s-this.stirV)*Math.min(1,t*(s>this.stirV?5:12));let r=n?0:this.stirV*t+this.circleAmt*e;this.circleAmt=0,r>0&&this.path.length&&!this.curdle&&(this.moveAlong(r),this.stirHold&&(this.spoonA+=t*7),this.stirSound=(this.stirSound||0)+r,this.stirSound>.5&&(this.stirSound=0,ut.stir())),this.waterHold&&!n&&!this.curdle&&(this.pullWater(t*1.1),Math.random()<t*6&&ut.pour()),this.lesson==="path"&&r>0&&this.lessonGo("stir"),(this.lesson==="stir"||this.lesson==="stir2")&&!this.path.length&&this.stirV<.05&&this.lessonGo(this.nearId==="sleep"?"bottle":"more"),this.drawMap(t),this.drawPot(t),this.placeRing()}resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.mapc,this.liq,this.fx]){let n=e.getBoundingClientRect();e.width=Math.max(2,Math.round(n.width*t)),e.height=Math.max(2,Math.round(n.height*t))}}drawMap(t){let e=this.mapc,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.path.length?this.path[this.path.length-1]:this.pos,o=this.pos[0]*.6+a[0]*.4,l=this.pos[1]*.6+a[1]*.4;(this.lesson==="intro"||this.lesson==="drop")&&(o=Qt.sleep.at[0]*.5,l=Qt.sleep.at[1]*.5);let c=Ov,h=c*r/s,f=Math.max(-Ts/2+c/2,Math.min(Ts/2-c/2,o)),u=Math.max(-Es/2+h/2,Math.min(Es/2-h/2,l)),m=1-Math.exp(-t*3);this.cam.x+=(f-this.cam.x)*m,this.cam.y+=(u-this.cam.y)*m;let g=(this.cam.x-c/2+Ts/2)*Ce,x=(Es/2-this.cam.y-h/2)*Ce,p=c*Ce,d=h*Ce,M=s/p;n.setTransform(1,0,0,1,0,0),n.drawImage(this.base,g,x,p,d,0,0,s,r),n.setTransform(M,0,0,M,-g*M,-x*M);let R=this.t;for(let[D,N]of Object.entries(Qt)){if(!this.seen[D])continue;let[A,k]=Tn(N.at[0],N.at[1]),$=this.nearId===D;for(let Y=2;Y>=0;Y--)n.beginPath(),n.arc(A,k,ws[Y]*Ce,0,7),n.fillStyle=`rgba(255,236,170,${$?.16+(2-Y)*.06:.07})`,n.fill(),n.setLineDash([6,6]),n.lineDashOffset=-R*12,n.lineWidth=2.2,n.strokeStyle=`rgba(120,80,40,${$&&Y>=this.nearTier?.85:.35})`,n.stroke(),n.setLineDash([])}this.trail.length>1&&(n.beginPath(),n.lineWidth=4,n.strokeStyle="rgba(92,52,36,0.75)",n.lineJoin=n.lineCap="round",this.trail.forEach(([D,N],A)=>{let[k,$]=Tn(D,N);A?n.lineTo(k,$):n.moveTo(k,$)}),n.stroke()),n.setTransform(1,0,0,1,0,0),n.drawImage(this.fog,g/2,x/2,p/2,d/2,0,0,s,r),n.setTransform(M,0,0,M,-g*M,-x*M);for(let[D,N]of Object.entries(Qt)){if(!this.seen[D])continue;let[A,k]=Tn(N.at[0],N.at[1]),$=this.nearId===D,Y=this.flashEffect&&this.flashEffect.id===D?Math.max(0,1-this.flashEffect.t):0,st=Ce*(1.25+($?Math.sin(R*6)*.06:0)+Y*.6);n.drawImage(Ae[N.medal],A-st/2,k-st/2,st,st),n.font=`700 ${Ce*.42}px Mali, sans-serif`,n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(255,248,230,0.95)",n.strokeText(N.short,A,k+st*.78),n.fillStyle="#5a3424",n.fillText(N.short,A,k+st*.78)}this.flashEffect&&(this.flashEffect.t+=t,this.flashEffect.t>1&&(this.flashEffect=null));let[b,S]=Tn(this.pos[0],this.pos[1]),w=Math.sin(R*3)*3,I=Ce*.95,v=Ce*(.9+Math.sin(R*4)*.08),E=n.createRadialGradient(b,S,0,b,S,v);E.addColorStop(0,this.nearTier>=0?"rgba(255,240,160,0.9)":"rgba(255,255,255,0.7)"),E.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=E,n.beginPath(),n.arc(b,S,v,0,7),n.fill(),n.save(),n.translate(b,S+w),n.rotate(Math.sin(R*2.2)*.12+(this.curdle?Math.sin(R*40)*.2:0)),n.drawImage(Ae.bottle,-I*.35,-I*.7,I*.7,I*1),n.restore();for(let[D,N]of Object.entries(Qt)){if(this.seen[D])continue;let[A,k]=Tn(N.at[0],N.at[1]),$=this.ctx&&this.ctx.target===D,Y=1+Math.sin(R*2.5+A)*.06;if($){let K=n.createRadialGradient(A,k,0,A,k,Ce*1.6);K.addColorStop(0,"rgba(255,226,120,0.55)"),K.addColorStop(1,"rgba(255,226,120,0)"),n.fillStyle=K,n.beginPath(),n.arc(A,k,Ce*1.6,0,7),n.fill()}n.globalAlpha=$?.95:.6;let st=Ce*.95*Y;n.drawImage(Ae.m_q,A-st/2,k-st/2,st,st),n.globalAlpha=1}if(this.path.length){let D=this.pathFlash||0;this.pathFlash=Math.max(0,D-t*1.5),n.beginPath(),n.lineWidth=5+D*4,n.setLineDash([2,12]),n.lineDashOffset=R*20,n.strokeStyle=`rgba(110,60,40,${.85})`;let[N,A]=Tn(this.pos[0],this.pos[1]);n.moveTo(N,A);for(let[Y,st]of this.path){let[K,nt]=Tn(Y,st);n.lineTo(K,nt)}n.stroke(),n.setLineDash([]);let[k,$]=Tn(a[0],a[1]);n.beginPath(),n.arc(k,$,9,0,7),n.fillStyle="rgba(255,250,235,0.9)",n.fill(),n.lineWidth=3,n.strokeStyle="#6e3c28",n.stroke()}if(this.catchFx){let D=this.catchFx;D.t+=t;let[N,A]=Tn(D.at[0],D.at[1]),k=Math.min(1,D.t/.6);n.lineWidth=6*(1-k)+1,n.strokeStyle=`rgba(255,214,90,${1-k})`,n.beginPath(),n.arc(N,A,Ce*(.5+k*1.3),0,7),n.stroke(),D.t>.6&&(this.catchFx=null)}let L=this.lesson&&Gl[this.lesson].mark;if(L){let D=L==="sleep"?Qt.sleep.at:a,[N,A]=Tn(D[0],D[1]),k=Ce*(L==="sleep"?1:.55)*(1+Math.sin(R*5)*.06);if(n.setLineDash([]),n.lineWidth=4,n.strokeStyle="rgba(255,206,70,0.95)",n.beginPath(),n.arc(N,A,k,0,7),n.stroke(),Hl.complete&&Hl.naturalWidth){let $=Ce*.9,Y=A-k-$*.55-Math.abs(Math.sin(R*4))*Ce*.25;n.save(),n.translate(N,Y),n.rotate(Math.PI/2),n.drawImage(Hl,-$/2,-$*.4,$,$*.8),n.restore()}}n.setTransform(1,0,0,1,0,0);let F=n.createRadialGradient(s/2,r/2,Math.min(s,r)*.42,s/2,r/2,Math.max(s,r)*.72);F.addColorStop(0,"rgba(60,35,20,0)"),F.addColorStop(1,"rgba(60,35,20,0.35)"),n.fillStyle=F,n.fillRect(0,0,s,r)}drawPot(t){let e=this.liq,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.t,o=this.liquidCol;this.nearAny&&this.nearD<2.4&&!this.curdle&&(o=ya(o,Qt[this.nearAny].liquid,Math.max(0,1-this.nearD/2.4)*.8)),this.shownCol=this.shownCol?ya(this.shownCol,o,Math.min(1,t*4)):o;let l=s*.504,c=r*.172,h=s*.325,f=r*.125;n.clearRect(0,0,s,r);let u=n.createRadialGradient(l,c-f*.3,h*.1,l,c,h);u.addColorStop(0,As(this.shownCol,.35)),u.addColorStop(.6,this.shownCol),u.addColorStop(1,As(this.shownCol,-.45)),n.fillStyle=u,n.beginPath(),n.ellipse(l,c,h,f,0,0,7),n.fill(),n.save(),n.beginPath(),n.ellipse(l,c,h*.98,f*.95,0,0,7),n.clip(),n.strokeStyle=As(this.shownCol,.5),n.globalAlpha=.45,n.lineWidth=s*.006,n.lineCap="round";for(let N=0;N<3;N++){let A=this.spoonA*.6+N*2.1+a*.4;n.beginPath(),n.ellipse(l,c,h*(.35+N*.2),f*(.35+N*.2),0,A,A+1.3),n.stroke()}n.globalAlpha=1,Math.random()<t*(this.curdle?3:9+this.stirV*6)&&this.bubbles.push({x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.4,r:0,max:s*(.012+Math.random()*.022),t:0,life:.6+Math.random()*.8});for(let N=this.bubbles.length-1;N>=0;N--){let A=this.bubbles[N];if(A.t+=t,A.t>A.life){this.bubbles.splice(N,1),Math.random()<.25&&ut.bubble(),this.steam.push({x:.504+A.x*.325*.5,y:.172+A.y*.125*.5,vx:0,vy:-.15,life:.35,t:0,s:4,c:As(this.shownCol,.6),pop:1});continue}let k=A.max*Math.min(1,A.t/(A.life*.7)),$=l+A.x*h*.5,Y=c+A.y*f*.5;n.fillStyle=As(this.shownCol,.25),n.beginPath(),n.ellipse($,Y,k,k*.8,0,0,7),n.fill(),n.strokeStyle=As(this.shownCol,.65),n.lineWidth=s*.003,n.stroke(),n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.arc($-k*.35,Y-k*.3,k*.22,0,7),n.fill()}let m=this.spoonA,g=l+Math.cos(m)*h*.45,x=c+Math.sin(m)*f*.45;n.strokeStyle=As(this.shownCol,.55),n.lineWidth=s*.004,n.globalAlpha=.7,n.beginPath(),n.ellipse(g,x,s*.035,s*.012,0,0,7),n.stroke(),n.globalAlpha=1,n.restore();let p=this.fx,d=p.getContext("2d"),M=p.width,R=p.height;d.clearRect(0,0,M,R);let b=N=>N*M,S=N=>R*(.6+N),w=b(.504+Math.cos(m)*.325*.45),I=S(.172+Math.sin(m)*.125*.45),v=M*.62,E=v*220/476;d.save(),d.beginPath(),d.rect(0,0,M,I-M*.004),d.clip(),d.translate(w,I),d.rotate(Math.cos(m)*.18+Math.sin(a*2)*.03),d.drawImage(Ae.spoon,-E*.14,-v*.93,E,v),d.restore(),Math.random()<t*5&&this.steam.push({x:.504+(Math.random()-.5)*.4,y:.16,vx:(Math.random()-.5)*.04,vy:-.12-Math.random()*.08,life:2.4,t:0,s:14+Math.random()*18,c:"rgba(255,255,255,1)",soft:1});for(let N=this.steam.length-1;N>=0;N--){let A=this.steam[N];if(A.t+=t,A.t>A.life){this.steam.splice(N,1);continue}A.x+=A.vx*t,A.y+=A.vy*t,A.x+=Math.sin(A.t*2+N)*8e-4;let k=A.t/A.life,$=b(A.x),Y=S(A.y);if(A.soft){let st=A.s*(M/400)*(.6+k*1.4),K=d.createRadialGradient($,Y,0,$,Y,st);K.addColorStop(0,`rgba(255,255,255,${.22*(1-k)})`),K.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=K,d.beginPath(),d.arc($,Y,st,0,7),d.fill()}else if(A.pop)d.strokeStyle=A.c,d.globalAlpha=1-k,d.lineWidth=2,d.beginPath(),d.arc($,Y,4+k*14,0,7),d.stroke(),d.globalAlpha=1;else{d.fillStyle=A.c,d.globalAlpha=1-k;let st=A.s*(M/400);d.beginPath(),d.arc($,Y,st*(1-k*.5),0,7),d.fill(),d.globalAlpha=1}}for(let N=this.drops.length-1;N>=0;N--){let A=this.drops[N];if(A.t+=t,A.vy+=1.6*t,A.x+=A.vx*t,A.y+=A.vy*t,A.t>A.life){this.drops.splice(N,1);continue}d.fillStyle=A.c,d.globalAlpha=1-A.t/A.life,d.beginPath(),d.arc(b(A.x),S(A.y),A.s*M/400,0,7),d.fill(),d.globalAlpha=1}let L=this.$(".brew-witch"),F=this.stirV>.1||a-(this.circleAt||-9)<.25;this.rig.update(t,{stir:F}),L.style.transform=F?`translateY(${Math.abs(Math.sin(a*7))*-4}px)`:"";let D=this.$(".bottle");D.style.transform=this.nearTier>=0?`scale(${1+Math.max(0,Math.sin(a*5))*.05})`:""}splash(t){for(let e=0;e<18;e++)this.drops.push({x:.504+(Math.random()-.5)*.15,y:.17,vx:(Math.random()-.5)*.5,vy:-.5-Math.random()*.5,t:0,life:.8,s:4+Math.random()*5,c:t});for(let e=0;e<6;e++)this.bubbles.push({x:(Math.random()-.5)*.8,y:(Math.random()-.5)*.6,r:0,max:this.liq.width*(.02+Math.random()*.02),t:0,life:.4+Math.random()*.4});this.potEl.classList.remove("bump"),this.potEl.offsetWidth,this.potEl.classList.add("bump")}updateUI(){let t=this.$(".readout"),e=this.$(".bottle");if(this.nearTier>=0&&this.nearId){let n=Qt[this.nearId],s=[2,1,0].map(r=>`<i class="pip ${this.nearTier<=r?"on":""}"></i>`).join("");t.innerHTML=`<img src="${jt(n.medal)}" alt=""><div><b>${n.name}</b><span class="tier t${this.nearTier}">${br[this.nearTier]}</span></div><div class="pips">${s}</div>`,t.className="readout hot",e.disabled=!1}else{let n=this.ings.length?this.passed?`Went past ${Qt[this.passed].short}. Hold Moon water to drift back`:this.path.length?"Stir to follow the dotted path. Fog lifts as you go":"Path used up. Add another ingredient to go further":"Drop an ingredient in the cauldron to draw a path";t.innerHTML=`<p>${n}</p>`,t.className="readout",e.disabled=!0}this.$(".dump").classList.toggle("hidden",!this.ings.length||!!this.lesson),this.$(".water").classList.toggle("hidden",!!this.lesson&&this.lesson!=="back")}lessonGo(t){if(t===this.lesson&&t)return;this.lesson=t;let e=this.$(".brew-coach"),n=this.$(".coach-ok");this.el.classList.toggle("lesson",!!t),this.$(".brew-ask").classList.toggle("hidden",!!t||!(this.ctx&&this.ctx.ask));for(let r of this.$(".shelf").children)r.classList.toggle("locked",this.lessonLocked(r.dataset.id));if(this.updateUI(),!t){e.classList.add("hidden"),this.$(".lesson-ring").classList.add("hidden");return}let s=Gl[t];e.querySelector("p").textContent=s.say,n.classList.toggle("hidden",!s.tap),s.tap&&(n.querySelector("span").textContent=s.tap),e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),t!=="intro"&&ut.pop(),this.placeRing()}lessonNext(){ut.click(),this.lesson==="intro"?this.lessonGo("drop"):this.lesson==="path"&&this.lessonGo("stir")}lessonLocked(t){return!!this.lesson&&t!=="lav"}coachBump(){let t=this.$(".brew-coach");t.classList.remove("nudge"),t.offsetWidth,t.classList.add("nudge")}placeRing(){let t=this.$(".lesson-ghost");if(this.lesson==="drop"||this.lesson==="more"){let o=this.$('.tile[data-id="lav"]').getBoundingClientRect(),l=this.potEl.getBoundingClientRect(),c=this.t%1.9/1.3,h=Math.min(1,c),f=h*h*(3-2*h),u=o.left+o.width/2,m=o.top+o.height*.4,g=l.left+l.width*.5,x=l.top+l.height*.12,p=u+(g-u)*f,d=m+(x-m)*f-Math.sin(f*Math.PI)*l.height*.25;t.classList.remove("hidden"),t.style.opacity=c<.12?c/.12:c>1?Math.max(0,1-(c-1)*3.5):.85,t.style.transform=`translate(${p-32}px, ${d-32}px) rotate(${f*30-10}deg) scale(${1-f*.3})`}else t.classList.add("hidden");let e=this.$(".lesson-ring"),n=this.lesson&&Gl[this.lesson].ring,s=n&&this.$(n);if(!s){e.classList.add("hidden");return}let r=s.getBoundingClientRect(),a=6;e.classList.remove("hidden"),e.classList.toggle("big",n===".map-frame"),e.style.left=r.left-a+"px",e.style.top=r.top-a+"px",e.style.width=r.width+a*2+"px",e.style.height=r.height+a*2+"px"}toast(t,e){let n=this.$(".brew-toast");n.innerHTML=(e?`<img src="${jt(e)}" alt="">`:"")+`<span>${t}</span>`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}key(t,e){if(t==="Space"||t==="KeyS")return this.stirHold=e,this.$(".stir").classList.toggle("down",e),!0;if(t==="KeyQ"||t==="KeyW")return this.waterHold=e,this.$(".water").classList.toggle("down",e),!0;if(!e)return!1;if(t==="Enter"||t==="KeyE")return this.lesson&&Gl[this.lesson].tap?this.lessonNext():this.bottle(),!0;if(t==="Escape")return this.close(),!0;let n=parseInt(t.replace("Digit",""),10);if(n>=1&&n<=Hh.length){let s=Hh[n-1],r=this.$(`.tile[data-id="${s}"]`);if(!r)return!0;if(this.lessonLocked(s))return r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope"),this.coachBump(),!0;if(G.inv[s]>0){let a=va("img","drag-ghost");a.src=jt(Ie[s].icon);let o=r.getBoundingClientRect();a.style.transform=`translate(${o.left+o.width/2-40}px, ${o.top-40}px)`,document.body.appendChild(a),a.offsetWidth,this.drop(s,a,null),ut.pop()}else r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope");return!0}return!1}};function Wh(){if(G.settings.tod>=0)return G.settings.tod;let i=new Date(de());return i.getHours()+i.getMinutes()/60}var ss=[[0,[.42,.48,.78],.18,1],[4.5,[.46,.5,.8],.18,1],[6,[1,.78,.78],.25,.35],[7.5,[1,.95,.9],.32,0],[12,[1,1,1],.36,0],[16.5,[1,.97,.9],.34,0],[18.2,[1,.8,.62],.28,.15],[19.5,[.66,.6,.9],.22,.7],[21,[.44,.5,.8],.18,1],[24,[.42,.48,.78],.18,1]];function zf(i=Wh()){let t=ss[0],e=ss[ss.length-1];for(let a=0;a<ss.length-1;a++)if(i>=ss[a][0]&&i<=ss[a+1][0]){t=ss[a],e=ss[a+1];break}let n=(i-t[0])/Math.max(1e-6,e[0]-t[0]),s=n*n*(3-2*n),r=(a,o)=>a+(o-a)*s;return{tint:[r(t[1][0],e[1][0]),r(t[1][1],e[1][1]),r(t[1][2],e[1][2])],shadow:r(t[2],e[2]),night:r(t[3],e[3])}}function Vf(i=Wh()){return i<5?"Night":i<7.5?"Dawn":i<12?"Morning":i<17?"Afternoon":i<19.5?"Evening":"Night"}function Xh(i=Wh()){let t=Math.floor(i)%24,e=Math.floor(i%1*60),n=t<12?"AM":"PM";return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${n}`}function Ii(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/60),n=t%60;return e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}:${String(n).padStart(2,"0")}`}function Gf(i){let t=Math.max(1,Math.round(i/6e4)),e=Math.floor(t/60),n=Math.floor(e/24),s=(r,a)=>`${r} ${a}${r===1?"":"s"}`;return n>=1?s(n,"day"):e>=1?t%60?`${s(e,"hour")} ${s(t%60,"minute")}`:s(e,"hour"):s(t,"minute")}var Rs=21,gi=15,qf=19,kv=5*6e4,qh={mira:"Mira",juniper:"Juniper",oz:"Oz",pip:"Pip",wren:"Wren",basil:"Basil"},rs={crow:.75,pip:1.3,wren:1.12,basil:.8,mira:1.05,juniper:1.2,oz:.9,kuro:1.6,me:1.25},Bv=Object.fromEntries(zl.map(i=>[i.id,i])),zv=["cham","lav","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],Wt,Oe,mt,Pe,An,Kn,dn,fn,Cs,jn,ee=null,ht={started:!1,quiet:0,t:0,focus:null,target:null,disc:!1,chatT:3,secT:0,saveT:0,where:"home",fps:[],lowQ:!1},$e=()=>(mi[G.q]||mi[mi.length-1]).id,Vv=(i,t)=>`${i}:${t}`,En=i=>{let[t,e]=i.split(":");return[t,+e]},$h=(i,t)=>Math.max(5,Math.round(Qt[i].base*Fh[t]*1.1/5)*5),Gv=(i,t)=>Math.round(Qt[i].base*Fh[t]),ql=i=>`<span class="tier t${i}">${br[i]}</span>`,Is=()=>!ht.started||ht.disc||dn.isOpen||jn.isOpen||Ll()||Dl()||ht.cut,Kh=i=>new Promise(t=>setTimeout(t,i)),$f=10*6e4,Hv=3,Yf=()=>(G.wild.fish||[]).filter(i=>de()-i<$f),Zf=()=>Hv-Yf().length,Jf=()=>{let i=Yf();return i.length?Math.min(...i)+$f-de():0},mn=(i,t,e)=>Wt.toScreen(i,t,e,{x:0,y:0}),De=(i,t=.15)=>[i.x,(i.h*i.sy+t)*Math.cos(.72)+i.mesh.position.y,i.z-(i.h*i.sy+t)*Math.sin(.72)];function Yh(){return 1+Math.floor(G.fame/3)}function Mr(i,t,e=gi){ht.focus=[i,t],Wt.distGoal=e}function Sr(){ht.focus=null,Wt.distGoal=Rs}function Kf(i,t){let e=Yh();G.fame+=i;let n=Yh();Nh(n,G.fame%3/3),t&&On(`+${i} fame`,t,"fame"),n>e&&setTimeout(()=>wn(`Fame Lv ${n}`,"More of Mossbrook knows your name",{kind:"gold",onShow:()=>ut.discover()}),600)}function jf(i,t){G.coins+=i,t?Cf(i,t,(e,n)=>{e===n-1&&pa(G.coins,!0)}):pa(G.coins,!0),t&&On(`+${i}`,{x:t.x,y:t.y-30},"coin")}function Ma(i,t,e){G.inv[i]=(G.inv[i]||0)+t,G.found[i]=!0,G.newCount=(G.newCount||0)+t;for(let n=0;n<Math.min(t,4);n++)Il(Ie[i].icon,e,Gt("#bBag"),{delay:n*110,size:52,onArrive:n===Math.min(t,4)-1?()=>{gr(G.newCount),ut.pop()}:null})}function jh(i){let t=i>mt.x?1:-1;t!==mt.face&&(mt.flipFrom=mt.face,mt.face=t,mt.flipT=0)}function Wv(){let i=mi[G.q]||mi[mi.length-1];if(i.id==="free"){if(G.cust.here){let e=yr[G.cust.i%yr.length];return[G.cust.asked?`Brew a ${Qt[e.want].name} for ${e.name}`:`${e.name} is at your door`,""]}let t=G.cust.nextAt-de();return["Explore at your own pace",t>1e3?`Visitor in ${Ii(t)}`:"Visitor soon"]}return[i.text,i.need?`${Math.min(G.qn,i.need)}/${i.need}`:""]}function Qn(i){if($e()!==i)return!1;let t=mi[G.q];return G.q=Math.min(mi.length-1,G.q+1),G.qn=0,pe(),ut.quest(),Ue(15),ns(`<b>Done!</b> ${t.text}`,"star"),setTimeout(()=>Xv($e()),700),!0}function Xv(i){i==="talk"&&!ee&&ba(!0),i==="mystery"&&wn("Something glows","Far north on the potion map, past the brambles",{icon:"m_q",kind:"gold",ms:3200}),i==="free"&&(G.cust.nextAt=Math.max(G.cust.nextAt,de()+9e4),wn("The slice is yours","Everything keeps growing on the real clock. Come back later!",{ms:3600})),pe(!0)}function qv(){switch($e()){case"letter":return De(Oe.props.mailbox,.5);case"harvest":{let i=null,t=1e9;for(let e of An.plots)if(An.state(e.i).ready){let n=Math.hypot(e.x-mt.x,e.z-mt.z);n<t&&(t=n,i=e)}return i?[i.x,1.9,i.z-.4]:null}case"talk":case"deliver":return ee&&!ee.moving?De(ee.spr,.5):null;case"brew":case"mystery":return mt.x<Ei?De(Oe.props.cauldron,.6):[ct.roadEnd[0],1,ct.roadEnd[1]];case"town":return[ct.roadEnd[0],1.2,ct.roadEnd[1]];case"board":return De(Oe.props.board,.4);case"stall":return De(Oe.props.myStall,.4);case"buy":return De(Oe.props.stalls.mira,.3);default:{if(!G.cust.here||!ee||ee.moving||mt.x>=Ei)return null;let i=ee.def.want,t=Object.keys(G.potions).some(e=>e.startsWith(i+":")&&G.potions[e]>0);return G.cust.asked&&!t?De(Oe.props.cauldron,.6):De(ee.spr,.5)}}}function ba(i){let t=yr[G.cust.i%yr.length],e=t.who==="crow"?1.5:1.6,n=i?ct.crowEnter:ct.crowWait;if(ee=new is(Wt,t.sprite,e,n[0],n[1],{talk:t.talk,speed:2.4,rig:t.rig}),ee.def=t,t.who==="pip"||t.who==="wren"){let r=fn[t.who];r.busy=!0,r.spr.visible=!1,Cs.remove("n-"+t.who)}let s=()=>{G.cust.here=!0,pe(!0),ee.face=1,ee.hop(),t.who==="crow"?ut.caw():ut.blip("a",rs[t.who]||1)};i?(ee.goTo([[12,1.6],[9,4],[1.5,4.1],ct.crowWait],s),t.who==="crow"&&setTimeout(()=>ut.caw(),400),ht.started&&(mt.x<Ei?ns(`${t.name} is coming up the path`,t.sprite):Rl(`<img src="${jt(t.sprite)}" alt=""><span>${Zn(t.name)} is waiting at your cottage</span>`))):(G.cust.here=!0,ee.face=1)}function $v(){let i=ee;ee=null,i&&(i.goTo([[1.5,4.1],[9,4],[12,1.6],ct.crowEnter,[22,.8]],()=>{i.spr.dispose();let t=i.def.who;if(t==="pip"||t==="wren"){let e=fn[t];e.busy=!1,e.spr.visible=!0}}),Cs.remove("n-cust"))}async function Yv(){let i=ee,t=i.def,e=Qt[t.want];if(Math.abs(mt.x-i.x)<1.2){let r=mt.x>=i.x?1:-1;mt.walkTo(i.x+r*1.35,i.z+.4,i.x),i.face=r}else jh(i.x),i.face=i.x>mt.x?-1:1;let n=rs[t.who]||1,s=async(r,a=[])=>{i.talking=Math.min(6,r.length*.035);let o=await Ai(t.name,r,a,{pitch:n});return i.talking=0,o};ht.focus=[(i.x+mt.x)/2,(i.z+mt.z)/2],Wt.distGoal=gi;try{if(!G.cust.asked){await s(t.ask,[{label:"Leave it to me!"},{label:"What happened?"}])===1&&await s(t.who==="crow"?"Owls. Singing. All night. They even take requests.":"It is a long story, and most of it is embarrassing."),G.cust.asked=!0,pe(!0),$e()==="talk"?(await Ai(G.name,"Granny's letter said lavender pulls a brew toward Sleep. The cauldron is by the cottage.",[],{pitch:rs.me}),Qn("talk")):ns(`${t.name} wants a <b>${e.name}</b>`,e.medal);return}let r=Object.keys(G.potions).filter(u=>G.potions[u]>0).sort((u,m)=>(En(u)[0]===t.want?-1:0)-(En(m)[0]===t.want?-1:0)||En(u)[1]-En(m)[1]).slice(0,3);if(!r.length){await s(`No rush. A ${e.name} whenever you are ready.`);return}let a=r.map(u=>{let[m,g]=En(u);return{label:`${Qt[m].short} (${br[g]})`,icon:Qt[m].potion}});a.push({label:"Not yet"});let o=await s(`Is that a ${e.name} I smell?`,a);if(o<0||o>=r.length)return;let[l,c]=En(r[o]);if(l!==t.want){ut.fail(),await s(`Hmm. That smells like ${Qt[l].short}. I need a ${e.name}.`);return}G.potions[r[o]]--;let h=Gv(l,c),f=mn(i.x,1.4,i.z);i.cheer(),ut.bottle(),Wt.sparkle(i.x,1,i.z,16,"#fff2a8"),jf(h,f),Kf(1,{x:f.x,y:f.y-60}),await s(`${t.thanks} Here, ${h} coins.${c===0?" A perfect brew, too!":""}`),G.cust.i++,G.cust.here=!1,G.cust.asked=!1,G.cust.nextAt=de()+kv,pe(),$v(),Rl(null),Qn("deliver")}finally{ht.focus=null,Wt.distGoal=Rs}}function Qf(){let i=[],t=(n,s,r,a,o,l,c,h)=>i.push({id:n,x:s,z:r,r:a,label:o,act:l,anchor:c,spr:h}),e=Oe.props;if(mt.x<Ei-4){if(t("mailbox",ct.mailbox[0],ct.mailbox[1]+.3,1.7,$e()==="letter"?"Read letter":"Mailbox",sy,De(e.mailbox),e.mailbox),t("cauldron",ct.cauldron[0],ct.cauldron[1]+.3,2.1,"Brew",Wf,De(e.cauldron,.3),e.cauldron),t("door",ct.door[0],ct.door[1]+.5,1.4,"Enter workshop",Wf,[ct.door[0],2.4,ct.door[1]-.6]),t("sign",ct.sign[0],ct.sign[1]+.3,1.5,"Read sign",Qv,De(e.sign),e.sign),t("woodsign",ct.woodSign[0],ct.woodSign[1]+.3,2,"Read sign",ey,De(e.woodSign),e.woodSign),mt.x<ys+3||mt.z>8.6){let s=Kn.nearBerry(mt.x,mt.z);if(s){let a=Kn.berryLeft(s.i);t("berry"+s.i,s.x,s.z+.5,1.6,a?`Berries in ${Ii(a)}`:"Pick berries",()=>Kv(s.i),De(s.spr,.1),s.spr)}let r=Kn.nearBug(mt.x,mt.z);r&&t("bug"+r.i,r.x,r.z,1.7,`Catch ${Ie[r.kind].name}`,()=>ep(r),[r.x,r.y+.75,r.z],r.spr)}if(mt.z>5){t("pondsign",ct.pondSign[0],ct.pondSign[1]+.3,1.5,"Read sign",ty,De(e.pondSign),e.pondSign);let s=Zf();t("fish",ct.fish[0],ct.fish[1],1.7,s>0?"Fish":`Fish bite again in ${Ii(Jf())}`,ip,De(e.bucket,.5),e.bucket)}Pe.atStall||t("cat",Pe.x,Pe.z+.2,1.3,"Pet Kuro",jv,De(Pe.spr,.2),Pe.spr);let n=An.nearest(mt.x,mt.z,1.35);if(n){let s=An.state(n.i);t("plot"+n.i,n.x,n.z,1.35,s.ready?`Harvest ${s.def.name}`:`${s.def.name} in ${Ii(s.left)}`,()=>Jv(n.i),[n.x,1.5,n.z-.6],n.spr)}ee&&!ee.moving&&t("cust",ee.x,ee.z+.2,1.7,G.cust.asked?`Give ${ee.def.name} a potion`:`Talk to ${ee.def.name}`,Yv,De(ee.spr,.3),ee.spr)}else{t("board",ct.board[0],ct.board[1]+.5,2,"Discovery board",ay,De(e.board,.1),e.board);for(let n of["mira","juniper","oz"]){let[s,r]=pi[n];t("stall-"+n,s,r+.3,1.9,`${qh[n]}'s stall`,()=>oy(n),De(fn[n].spr,.35),e.stalls[n])}t("mystall",ct.myStall[0],ct.myStall[1]+.3,1.9,"Your stall",ly,De(e.myStall,.1),e.myStall),t("fountain",ct.fountain[0],ct.fountain[1]+.9,2.5,"Make a wish",ny,[ct.fountain[0],2.6,ct.fountain[1]-1.4],e.fountain);for(let n of Bl){let s=fn[n];s.busy||t("folk-"+n,s.x,s.z+.15,1.4,`Chat with ${qh[n]}`,()=>iy(n),De(s.spr,.3),s.spr)}}return i}function tp(){if(Is()||ht.quiet>0){ht.target=null,Xl(null),xr(null);return}let i=null,t=1e9;for(let e of Qf()){let n=Math.hypot(e.x-mt.x,(e.z-mt.z)*1.25);n<e.r&&n/e.r<t&&(t=n/e.r,i=e)}if(ht.target=i,Xl(i&&i.spr),i){let e=mn(i.anchor[0],i.anchor[1],i.anchor[2]);xr(i.label,{x:Math.round(e.x),y:Math.round(e.y)})}else xr(null)}function Xl(i){ht.lit!==i&&(ht.lit&&(ht.lit.outline=0),ht.lit=i||null,ht.litT=0)}function Zv(i){ht.lit&&(ht.litT=Math.min(1,(ht.litT||0)+i*6),ht.lit.outline=ht.litT)}function Zh(){if(Is()||!ht.target)return;let i=ht.target;jh(i.x),i.act()}function Jv(i){let t=An.state(i);if(!t.ready){let r=An.plots[i];On(`Ready in ${Ii(t.left)}`,mn(r.x,1.2,r.z),"soft"),ut.click();return}let e=An.plots[i];mt.setPose("witch_pick",.42);let n=An.harvest(i);ut.harvest(),Ue(10);let s=mn(e.x,.8,e.z);Ma(n.crop,n.n,s),On(`+${n.n} ${Ie[n.crop].name}`,{x:s.x,y:s.y-40}),ht.quiet=.9,$e()==="harvest"&&(G.qn++,G.qn>=mi[G.q].need&&Qn("harvest")),pe(!0)}function Kv(i){let t=Kn.berries[i],e=Kn.berryLeft(i);if(e){On(`Regrows in ${Ii(e)}`,mn(t.x,1.6,t.z),"soft"),ut.click();return}mt.setPose("witch_pick",.42);let n=Kn.pick(i);ut.harvest(),Ue(10);let s=mn(t.x,.8,t.z);Ma("berry",n,s),On(`+${n} ${Ie.berry.name}`,{x:s.x,y:s.y-40}),ht.quiet=.9,pe(!0)}async function ep(i){if(ht.cut)return;ht.cut=!0,Nl(),mt.setPose("witch_pick",.36),Mr(i.x,i.z-.3,gi-2),await Kh(420);let t=!G.beetles||Math.random()<.45,e=await jn.open("bug",{kind:i.kind,beetle:t,firstBeetle:!G.beetles,from:mn(i.x,i.y,i.z)});e.got.includes("beetle")&&(G.beetles=(G.beetles||0)+1),Sr();let n=mn(mt.x,1.6,mt.z);e.got.includes(i.kind)?Kn.markCaught(i):Kn.markFled(i),np(e.got,n),e.got.length||On("It flew off. It will be back soon",n,"soft"),ht.cut=!1,ht.quiet=.8,pe(!0)}function np(i,t){let e={};for(let s of i)e[s]=(e[s]||0)+1;let n=0;for(let[s,r]of Object.entries(e)){let a=!G.found[s];setTimeout(()=>{Ma(s,r,t),On(`+${r} ${Ie[s].name}`,{x:t.x,y:t.y-40-n*4}),a&&ns(`<b>${Ie[s].name}</b> joins your shelf`,Ie[s].icon)},150+n++*380)}}async function ip(){let i=Zf(),t=mn(ct.fish[0],1.4,ct.fish[1]);if(i<=0){On(`The fish are wary. Back in ${Ii(Jf())}`,t,"soft"),ut.click();return}if(ht.cut)return;ht.cut=!0,Nl(),jh(ct.fish[0]+1),Mr(ct.fish[0],ct.fish[1]+.8,gi-2),await Kh(420);let e=await jn.open("fish",{bites:i,from:mn(ct.fish[0],.1,ct.fish[1]+1.2),onCatch:()=>{G.wild.fish.push(de()),pe(!0)}});Sr(),np(e.got,mn(mt.x,1.6,mt.z)),ht.cut=!1,ht.quiet=.8,pe(!0)}function jv(){Pe.hop(),ut.meow(),Ue(8),Wt.sparkle(Pe.x,.7,Pe.z,8,"#ffb3c8");let i=mn(Pe.x,1.1,Pe.z);On("\u2665",i,"heart"),ht.pets=(ht.pets||0)+1,ht.pets===5&&setTimeout(()=>Ai("Kuro","Mrrrp. (Kuro would like it noted that he is an excellent shopkeeper.)",[],{pitch:rs.kuro}),300)}async function Qv(){await Ai("Signpost","East: Mossbrook Square. West: Hazel Cottage, and past it Whisperwood. North: fog, and nobody knows.",[],{pitch:.9})}async function ty(){await Ai("Signpost","Willow Pond, down the steps. Fish bite from the end of the dock. Mind the frog.",[],{pitch:.9})}async function ey(){await Ai("Signpost","Whisperwood. Wild berries grow back by themselves. Moths and ladybugs by day, glowbugs after dark. Bring a net.",[],{pitch:.9})}function ny(){ut.discover(),Ue(12),Wt.sparkle(ct.fountain[0],2.2,ct.fountain[1]-.6,26,"#cfefff",1.2,1.6);let i=["The water glitters. Something in the fog feels closer.","A tiny rainbow. Kuro would approve.","You wish for a Perfect brew. The fountain hums back."];ns(i[Math.floor(Math.random()*i.length)],"m_drop")}async function iy(i){let t=fn[i];t.busy=!0,t.path=[],t.face=t.x>mt.x?-1:1;let e={pip:["Mira says blue caps pull a brew north. I wonder what is up there.","I sold three Healing potions before lunch! Okay, two. Okay, I drank one."],wren:["Nobody has put Luck on the board yet. The north fog is spooky.","Glow sells best at night. Everyone walks home in the dark."],basil:["I trade river reeds for anything sweet. Mostly I just like the walk.","The pond past your cottage has fish that bite at dusk. Bring a light hand."]}[i];ht.focus=[(t.x+mt.x)/2,(t.z+mt.z)/2],Wt.distGoal=gi,t.talking=2,await Ai(qh[i],e[Math.floor(Math.random()*e.length)],[],{pitch:rs[i]}),t.talking=0,t.busy=!1,t.wait=1.5,ht.focus=null,Wt.distGoal=Rs}function sy(){if($e()!=="letter"){Oe.props.mailbox.flash=.6,setTimeout(()=>Oe.props.mailbox.flash=0,120),ut.click(),On("Empty for now",mn(ct.mailbox[0],1.6,ct.mailbox[1]),"soft");return}Ci("letter-card",`
    <div class="letter">
      <p>Dear ${Zn(G.name)},</p>
      <p>The cottage is yours now, and so is the old cauldron. Do look after Kuro. He pretends he does not need looking after.</p>
      <p>Every herb pulls a brew a different way. Stir, follow where it leads, and the fog will lift. There are more potions out there than I ever found.</p>
      <p>Lavender for sleepy folk. Here are two sprigs to start you off.</p>
      <p>When the garden runs thin, take the little trail west into Whisperwood. The berries and moths there do odd things to a brew.</p>
      <p class="sign">With love,<br>Granny Hazel</p>
      <div class="gift"><img src="${jt("i_lav")}" alt=""><img src="${jt("i_lav")}" alt=""></div>
    </div>
    <button class="btn-green take"><span>Take the lavender</span></button>`,{onClose:()=>ry()}).querySelector(".take").addEventListener("click",()=>Ms())}var Hf=!1;function ry(){Hf||$e()!=="letter"||(Hf=!0,Ma("lav",2,{x:innerWidth/2,y:innerHeight/2}),Oe.props.mailbox.set("mailbox_empty"),Wt.sparkle(ct.mailbox[0]+.4,1.1,ct.mailbox[1],10,"#fff2a8"),Qn("letter"))}function sp(i,{cls:t="",empty:e=0}={}){let n=i.map(s=>`<button class="slot ${t} ${s.sel?"sel":""}" data-k="${s.k}" ${s.title?`title="${Zn(s.title)}"`:""}><img src="${jt(s.icon)}" alt=""><b>${s.n}</b>${s.tier!=null?`<i class="tdot t${s.tier}"></i>`:""}</button>`).join("");for(let s=i.length;s<e;s++)n+='<div class="slot blank"></div>';return n}function Qh(i){return i==="herbs"?zv.filter(t=>G.inv[t]>0).map(t=>({k:t,icon:Ie[t].icon,n:G.inv[t],title:Ie[t].name})):Object.keys(G.potions).filter(t=>G.potions[t]>0).map(t=>{let[e,n]=En(t);return{k:t,icon:Qt[e].potion,n:G.potions[t],tier:n,title:`${Qt[e].name} (${br[n]})`}})}function rp(i="herbs"){G.newCount=0,gr(0),pe(!0);let t=Ci("bag-card",`
    <div class="tabs"><button class="tab" data-t="herbs">Herbs</button><button class="tab" data-t="potions">Potions</button></div>
    <div class="bag-grid"></div>
    <div class="bag-info"><p></p></div>`,{title:"Bag"}),e=n=>{i=n,t.querySelectorAll(".tab").forEach(r=>r.classList.toggle("on",r.dataset.t===n));let s=Qh(n);t.querySelector(".bag-grid").innerHTML=sp(s,{empty:10}),t.querySelector(".bag-info p").innerHTML=s.length?"Tap an item to read about it":n==="herbs"?"No herbs yet. Harvest your garden or buy from the stalls":"No potions yet. Brew one at the cauldron",t.querySelectorAll(".slot[data-k]").forEach(r=>r.addEventListener("click",()=>{ut.click(),t.querySelectorAll(".slot").forEach(l=>l.classList.remove("sel")),r.classList.add("sel");let a=r.dataset.k,o;if(n==="herbs"){let l=_a[a];o=`<b>${Ie[a].name}</b> ${l?`Grows in your garden in ${l.growMin} minutes.`:Ie[a].from||"Sold at the town stalls."}`}else{let[l,c]=En(a);o=`<b>${Qt[l].name}</b> ${ql(c)} Suggested price ${$h(l,c)} coins.`}t.querySelector(".bag-info p").innerHTML=o}))};t.querySelectorAll(".tab").forEach(n=>n.addEventListener("click",()=>{ut.click(),e(n.dataset.t)})),e(i)}function ap(){let i=Object.entries(Qt).map(([e,n])=>{let s=G.discovered[e],r=G.recipes[e];return s?`<div class="rec"><img class="medal" src="${jt(n.medal)}" alt=""><div class="rec-t"><b>${n.name}</b>${ql(s.tier)}</div><div class="rec-i">${r.ings.map(a=>`<img src="${jt(Ie[a].icon)}" alt="">`).join("<em>+</em>")}</div></div>`:`<div class="rec unknown"><img class="medal" src="${jt("m_q")}" alt=""><div class="rec-t"><b>???</b><span>Somewhere ${n.hint}</span></div></div>`}).join(""),t=Object.keys(G.discovered).length;Ci("book-card",`<p class="book-sub">${t} of ${Object.keys(Qt).length} found</p><div class="recs">${i}</div>`,{title:"Recipes"})}function ay(){let i=Object.entries(Qt).map(([t,e])=>{let n=Bh.find(r=>r.effect===t);return G.board.find(r=>r.effect===t)?`<div class="pin-row mine"><img src="${jt(e.medal)}" alt=""><b>${e.name}</b><span>${Zn(G.name)} (you)</span></div>`:n?`<div class="pin-row"><img src="${jt(e.medal)}" alt=""><b>${e.name}</b><span>${Zn(n.who)}, ${n.when}</span></div>`:`<div class="pin-row open"><img src="${jt("m_q")}" alt=""><b>Undiscovered</b><span>First finder gets their name here</span></div>`}).join("");Ci("board-card",`<p class="book-sub">First discoveries in Mossbrook</p><div class="pins">${i}</div><p class="demo-note">Demo: other names are simulated townsfolk.</p>`,{title:"Discovery board",onClose:()=>{Sr(),Qn("board")}}),Mr(ct.board[0],ct.board[1]+.6,gi)}function op(i,t,e){return`
    <div class="shop-top">
      <div class="keeper"><img src="${jt(i)}" alt=""></div>
      <div class="shop-talk"><div class="ribbon sm"><span>${Zn(t)}</span></div><div class="speech"><p>${e}</p></div></div>
    </div>
    <div class="counter"></div>
    <div class="buybar"></div>
    <div class="bag-row"><button class="arrow l" aria-label="Previous"></button><div class="bag-strip"></div><button class="arrow r" aria-label="Next"></button><i class="badge hidden"></i></div>`}function lp(i,t,e,n){let s=0,r=6,a=()=>{let o=Qh(t).map(h=>({...h,sel:h.k===n})),l=Math.max(1,Math.ceil(o.length/r));s=Math.min(s,l-1),i.querySelector(".bag-strip").innerHTML=sp(o.slice(s*r,s*r+r),{empty:r,cls:e?"pick":""}),i.querySelector(".bag-row .arrow.l").classList.toggle("off",s===0),i.querySelector(".bag-row .arrow.r").classList.toggle("off",s>=l-1);let c=i.querySelector(".bag-row .badge");c.textContent=o.reduce((h,f)=>h+f.n,0),c.classList.toggle("hidden",!o.length),e&&i.querySelectorAll(".bag-strip .slot[data-k]").forEach(h=>h.addEventListener("click",()=>{n=h.dataset.k,e(h.dataset.k,h),a()}))};return i.querySelector(".bag-row .arrow.l").addEventListener("click",()=>{s>0&&(s--,ut.click(),a())}),i.querySelector(".bag-row .arrow.r").addEventListener("click",()=>{s++,ut.click(),a()}),a(),{draw:a,setSel:o=>{n=o,a()}}}function cp(){let i=Math.floor(de()/36e5);G.boughtHour!==i&&(G.bought={},G.boughtHour=i)}function tu(){cp();for(let i of zl){if(!i.stall||!Oe.props.stalls[i.id])continue;let t=[];for(let e of i.stall.items){let n=Math.min(3,e.stock-(G.bought[`${i.id}:${e.ing}`]||0));for(let s=0;s<n;s++)t.push(Ie[e.ing].icon)}wh(Oe.props.stalls[i.id],i.stall.sprite,t)}wh(Oe.props.myStall,"stall_mine",G.stall.items.map(i=>Qt[En(i.key)[0]].potion))}function oy(i){cp();let t=Bv[i],e=t.stall;fn[i].hop(),ut.blip("h",rs[i]);let s=Ci("shop-card",op(t.sprite,t.name,Zn(e.line)),{onClose:Sr});Mr(pi[i][0],pi[i][1]+.4,gi);let r=null,a=s.querySelector(".speech p"),o=h=>h.stock-(G.bought[`${i}:${h.ing}`]||0),l=()=>{s.querySelector(".counter").innerHTML=[0,1,2,3].map(x=>{let p=e.items[x];if(!p)return'<div class="ctile blank"></div>';let d=o(p);return`<button class="ctile ${r===x?"sel":""} ${d?"":"sold"}" data-i="${x}"><img src="${jt(Ie[p.ing].icon)}" alt=""><span class="price"><b>${p.price}</b></span><i class="stock">${d?"x"+d:"Sold out"}</i></button>`}).join(""),s.querySelectorAll(".ctile[data-i]").forEach(x=>x.addEventListener("click",()=>{r=+x.dataset.i,ut.click(),l()}));let h=s.querySelector(".buybar");if(r==null){h.innerHTML="<p>Tap an item on the counter</p>";return}let f=e.items[r],u=Ie[f.ing],m=o(f),g=m>0&&G.coins>=f.price;h.innerHTML=`<p><b>${u.name}</b> ${m?`${m} left`:"sold out"}${G.coins<f.price&&m?". Not enough coins":""}</p><button class="btn-green buy" ${g?"":"disabled"}><span>Buy for ${f.price}</span></button>`,h.querySelector(".buy").addEventListener("click",x=>{if(!g)return;G.coins-=f.price,pa(G.coins,!0),G.bought[`${i}:${f.ing}`]=(G.bought[`${i}:${f.ing}`]||0)+1;let p=x.currentTarget.getBoundingClientRect();ut.coin(0),ut.pop(),Ue(10),Ma(f.ing,1,{x:p.left+p.width/2,y:p.top}),a.textContent=["Thank you kindly!","Pleasure doing business!","Come back soon!"][Math.floor(Math.random()*3)],Jn(s.querySelector(".keeper img")),pe(!0),f.ing==="mush"&&Qn("buy"),tu(),l(),c.draw()})},c=lp(s,"herbs");l()}function ly(){let i=Ci("shop-card mine",op("cat","Kuro","Mrrp. Leave potions on the counter and I will sell them, even while you sleep."),{onClose:Sr});Mr(ct.myStall[0],ct.myStall[1]+.4,gi);let t=null,e=0,n=()=>{let a=G.stall.items;i.querySelector(".counter").innerHTML=[0,1,2,3].map(o=>{let l=a[o];if(!l)return'<div class="ctile blank"><span class="plus">+</span></div>';let[c,h]=En(l.key);return`<div class="ctile listed"><img src="${jt(Qt[c].potion)}" alt=""><i class="tdot t${h}"></i><span class="price"><b>${l.price}</b></span><i class="stock">sells in ${Ii(l.sellAt-de())}</i></div>`}).join("")},s=()=>{let a=G.stall.items;n();let o=i.querySelector(".buybar");if(!t){o.innerHTML=`<p>${a.length>=4?"The counter is full":Qh("potions").length?"Tap a potion in your bag to put it on the counter":"No potions to sell. Brew some at the cauldron"}</p>`;return}let[l,c]=En(t),h=$h(l,c);o.innerHTML=`<img class="bb-icon" src="${jt(Qt[l].potion)}" alt=""><p><b>${Qt[l].short}</b> ${ql(c)}</p>
      <div class="pricer"><button class="arrow l sm" aria-label="Lower"></button><span class="price"><b>${e}</b></span><button class="arrow r sm" aria-label="Higher"></button></div>
      <p class="hint">${e>h*1.15?"Pricey. It will take longer to sell":e<h*.9?"A bargain. It will go fast":"A fair price"}</p>
      <button class="btn-green list" ${a.length>=4?"disabled":""}><span>Put on counter</span></button>`,o.querySelector(".arrow.l").addEventListener("click",()=>{e=Math.max(5,e-5),ut.click(),s()}),o.querySelector(".arrow.r").addEventListener("click",()=>{e+=5,ut.click(),s()}),o.querySelector(".list").addEventListener("click",()=>{let f=G.stall.items;if(f.length>=4||!(G.potions[t]>0))return;G.potions[t]--;let u=$e()==="stall",m=(u?25+Math.random()*15:60+Math.random()*90)*(e/h)**2;f.push({key:t,price:e,sellAt:de()+m*1e3}),G.stall.open=!0,Pe.moveToStall(!0),ut.pop(),Ue(8),Jn(i.querySelector(".keeper img")),i.querySelector(".speech p").textContent=u?"Meow! Someone will come by soon. Go on, I have got this.":"On the counter it goes.",G.potions[t]<=0&&(t=null),pe(!0),Qn("stall"),tu(),s(),r.draw()})},r=lp(i,"potions",a=>{t=a;let[o,l]=En(a);e=$h(o,l),ut.click(),s()});s(),i._tick=n}function hp(){let i=G.settings,t=Ci("set-card",`
    <div class="set-rows">
      <div class="row"><span>Sound</span><button class="toggle ${i.sound?"on":""}" data-k="sound"></button></div>
      <div class="row"><span>Music</span><button class="toggle ${i.music?"on":""}" data-k="music"></button></div>
      <div class="row"><span>Time of day</span><input type="range" min="-1" max="23" step="1" value="${i.tod<0?-1:Math.floor(i.tod)}"><b class="tod"></b></div>
      <div class="row"><span>Skip ahead</span><button class="btn-pill skip"><span>+10 minutes</span></button></div>
      <div class="row"><span>Start over</span><button class="btn-pill reset"><span>Reset save</span></button></div>
    </div>
    <p class="demo-note">Vertical slice demo. Townsfolk, stall buyers and the other names on the board are simulated. Time follows your real clock; skipping ahead moves the game clock only.</p>`,{title:"Menu"}),e=()=>{t.querySelector(".tod").textContent=i.tod<0?"Real clock":Xh(i.tod)};e(),t.querySelectorAll(".toggle").forEach(s=>s.addEventListener("click",()=>{i[s.dataset.k]=!i[s.dataset.k],s.classList.toggle("on",i[s.dataset.k]),El(),ut.click(),pe(!0)})),t.querySelector("input").addEventListener("input",s=>{i.tod=+s.target.value,e(),eu(!0),pe(!0)}),t.querySelector(".skip").addEventListener("click",s=>{G.offsetMs=(G.offsetMs||0)+6e5,ut.quest(),Jn(s.currentTarget),ns("Ten minutes pass in a blink","star"),pe(!0)});let n=t.querySelector(".reset");n.addEventListener("click",()=>{if(!n.classList.contains("confirm")){n.classList.add("confirm"),n.querySelector("span").textContent="Tap again to erase",ut.click();return}df(),location.reload()})}function cy(i,t){if(!i.length)return;Ci("away-card",`<p class="book-sub">You were away for ${Gf(t)}</p><div class="away">${i.map(([n,s])=>`<div class="away-row"><img src="${jt(n)}" alt=""><span>${s}</span></div>`).join("")}</div><button class="btn-green ok"><span>Lovely</span></button>`,{title:"While you were away"}).querySelector(".ok").addEventListener("click",()=>Ms())}function Wf(){Nl();let i=$e(),t={};if(i==="brew"||ee&&G.cust.asked&&!ee.moving){let e=ee?ee.def:yr[0];t.ask={name:e.name,line:i==="brew"?"Something to help me sleep, please.":`A ${Qt[e.want].name}, please.`},t.target=e.want}i==="mystery"&&(t.target="luck",t.ask={name:"Kuro",line:"Mrrp. Blue Mushroom drifts north. Something glows up there."}),mt.frozen=!0,ht.cut=!0,Mr(ct.cauldron[0],ct.cauldron[1]+.2,gi-1),Kh(320).then(()=>ga(!0)).then(()=>{ht.cut=!1,document.body.classList.add("brewing"),dn.open(t),ga(!1)})}function hy(i,t,e,n){let s=Qt[i],r=Vv(i,t);G.potions[r]=(G.potions[r]||0)+3,G.newCount=(G.newCount||0)+3;let a=!G.discovered[i];(a||t<G.discovered[i].tier)&&(G.discovered[i]={tier:t,at:de()},G.recipes[i]={ings:e,tier:t});let o=Bh.find(h=>h.effect===i),l=a&&!o&&!G.board.some(h=>h.effect===i);l&&G.board.push({effect:i,at:de()}),pe(),setTimeout(()=>{let h=n.getBoundingClientRect();for(let f=0;f<3;f++)Il(s.potion,{x:h.left+h.width/2,y:h.top+h.height/2},Gt("#bBag"),{delay:f*120,size:60,onArrive:f===2?()=>gr(G.newCount):null})},650);let c=()=>{$e()==="brew"&&i==="sleep"?(Qn("brew"),setTimeout(()=>dn.close(),300)):$e()==="mystery"&&i==="luck"?(Qn("mystery"),setTimeout(()=>dn.close(),300)):$e()==="brew"&&dn.toast("Mr. Crow asked for a <b>Sleep Potion</b>. Keep exploring the fog","m_moon")};a?setTimeout(async()=>{ht.disc=!0,ut.discover(),await ma({medal:s.medal,potion:s.potion,title:l?"First in Mossbrook!":"New potion!",name:s.name,tier:{i:t,label:br[t]},first:l?"Nobody in town has brewed this before. Your name goes on the discovery board.":`${o.who} found it first. Now you know it too.`,ings:e.map(h=>Ie[h].icon)}),ht.disc=!1,Kf(l?2:1,null),c()},1100):(dn.toast(`+3 ${s.name} ${ql(t)}`,s.medal),c())}function uy(){mt.frozen=!1,Sr(),document.body.classList.remove("brewing"),gr(G.newCount)}function up(i=!1){let t=de(),e=[];if(G.stall.items=G.stall.items.filter(n=>n.sellAt<=t?(e.push(n),!1):!0),e.length){let n=e.reduce((s,r)=>s+r.price,0);if(i)G.coins+=n;else{let s=Math.abs(mt.x-ct.myStall[0])<11,r=s?mn(ct.myStall[0],1.6,ct.myStall[1]):null;for(let a of e){let[o]=En(a.key);ns(`Kuro sold a <b>${Qt[o].name}</b> for ${a.price}`,"coin")}jf(n,r),s&&(Pe.hop(),ut.meow(),Wt.sparkle(ct.myStall[0],1.5,ct.myStall[1],14,"#fff2a8"))}G.stall.items.length||(G.stall.open=!1),pe(!0)}return!G.stall.items.length&&Pe.atStall&&Pe.moveToStall(!1),Oe&&tu(),!i&&$e()==="free"&&!ee&&!G.cust.here&&t>=G.cust.nextAt&&ba(!0),{sold:e,total:e.reduce((n,s)=>n+s.price,0)}}function eu(i){let t=zf();Wt.setLight(t),wf(Xh(),Vf(),t.night);let e=Math.hypot(mt.x-ct.fountain[0],mt.z-ct.fountain[1]);vf(t.night,Math.max(0,1-e/14))}function dy(i){for(let t of Oe.occluders){let e=t.z-mt.z,s=e>.05&&e<t.h*1.52&&Math.abs(mt.x-t.x)<t.w*.4+.3?.3:1;t.alpha!==s&&(t.alpha=Math.abs(t.alpha-s)<.01?s:t.alpha+(s-t.alpha)*Math.min(1,i*8))}}function fy(i){if(ht.chatT-=i,ht.chatT<=0&&mt.x>Ei-2){ht.chatT=2.5+Math.random()*3;let t=["mira","juniper","oz",...Bl].filter(s=>!fn[s].busy),e=t[Math.floor(Math.random()*t.length)],n=kh[Math.floor(Math.random()*kh.length)];Cs.remove("c-"+e),Cs.get("c-"+e,"chat",`<div class="tin"><p>${Zn(n)}</p></div>`),ht.chats=ht.chats||{},ht.chats[e]=3.6,fn[e].talking=1.2,ut.blip("o",(rs[e]||1)*1.3)}if(ht.chats)for(let t of Object.keys(ht.chats)){if(ht.chats[t]-=i,ht.chats[t]<=0||fn[t].busy){Cs.remove("c-"+t),delete ht.chats[t];continue}let e=De(fn[t].spr,.75);Cs.place("c-"+t,e[0],e[1],e[2],ht.started&&!dn.isOpen&&!Ll())}}function py(){let i=mt.z>8.8&&Math.abs(mt.x)<12.5,t=mt.z<7.6,e=i||!t&&ht.where==="pond"?"pond":mt.x>Ei+1?"town":mt.x<ys-.5?"forest":mt.x<11&&mt.x>ys+1?"home":ht.where;e==="town"&&$e()==="town"&&G.seenTown&&Qn("town"),e!==ht.where&&(ht.where=e,ht.kick=1,e==="town"?G.seenTown?wn("Mossbrook Square","",{ms:1600,kind:"loc"}):(G.seenTown=!0,wn("Mossbrook Square","Demo: townsfolk and buyers are simulated",{ms:3400}),Qn("town"),pe(!0)):e==="forest"?G.seenWood?wn("Whisperwood","",{ms:1600,kind:"loc"}):(G.seenWood=!0,wn("Whisperwood","Wild berries and bugs. They come back on the real clock",{ms:3400}),pe(!0)):e==="pond"?G.seenPond?wn("Willow Pond","",{ms:1600,kind:"loc"}):(G.seenPond=!0,wn("Willow Pond","Fish from the dock. Catch what bites",{ms:3400}),pe(!0)):wn("Hazel Cottage","",{ms:1600,kind:"loc"}),e==="home"&&ee&&Rl(null))}var Jh=performance.now();function dp(i){requestAnimationFrame(dp);let t=Math.min(.05,(i-Jh)/1e3);Jh=i,ht.t+=t;let e=Pf();if(mt.frozen=Is(),jn.isOpen&&(jn.update(t,e),xr(null),Xl(null),Pl(Wt,null)),!dn.isOpen&&!jn.covers){mt.update(t,e),Pe.update(t),ee&&ee.update(t);for(let n of Object.keys(fn))fn[n].update(t);kf(fn,t),An.update(t,ht.t),Kn.update(t,ht.t);for(let n of Oe.tick)n(t,ht.t);if(!ht.started)Wt.target.x=3+Math.sin(ht.t*.08)*4,Wt.target.z=.8,Wt.distGoal=qf,Wt.follow(Wt.target.x,Wt.target.z,t);else if(ht.focus)Wt.follow(ht.focus[0],ht.focus[1]+.6,t);else{let n=-1e9;for(let[s,r,a,o]of ca)mt.x>=s-.3&&mt.x<=r+.3&&mt.z>=a-.3&&mt.z<=o+.3&&(n=Math.max(n,o-1.2));n<-1e8&&(n=1e9),Wt.follow(mt.x,mt.z+.5,t,[mt.vx*.32,mt.vz*.18],[-35,45],n),ht.kick>0&&(ht.kick=Math.max(0,ht.kick-t/1.6),Wt.distGoal=Rs+Math.sin(ht.kick*Math.PI)*2.4)}if(dy(t),Wt.update(t,ht.t),Wt.render(),ht.started){tp(),Zv(t),fy(t),Pl(Wt,Is()||ht.target?null:qv()),py();let[n,s]=Wv();Tf(n,s)}}else dn.isOpen&&(dn.update(t),xr(null),Xl(null),Pl(Wt,null));if(ht.secT-=t,ht.secT<=0&&(ht.secT=1,eu(),ht.started&&(up(),Dl()))){let n=Gt("#panel .shop-card.mine");n&&n._tick&&n._tick()}ht.saveT-=t,ht.quiet>0&&(ht.quiet-=t),ht.saveT<=0&&ht.started&&(ht.saveT=5,G.pos=[+mt.x.toFixed(2),+mt.z.toFixed(2)],G.lastSeen=de(),pe()),!ht.lowQ&&ht.started&&(ht.fps.push(t),ht.fps.length>180&&ht.fps.shift(),ht.fps.length===180&&ht.fps.reduce((s,r)=>s+r,0)/180>1/38&&(ht.lowQ=!0,Wt.quality=0,Wt.resize()))}function my(i,t){if(ht.started){if(ht.disc){t&&["Enter","Space","KeyE"].includes(i)&&ma.close&&ma.close();return}if(jn.isOpen){jn.key(i,t);return}if(dn.isOpen){dn.key(i,t);return}if(Ll()){t&&Rf(i);return}if(Dl()){t&&(i==="Escape"||i==="KeyB"&&Gt("#panel .bag-card"))&&Ms();return}t&&(i==="KeyE"||i==="Space"||i==="Enter"?Zh():i==="KeyB"||i==="KeyI"?(ut.click(),rp()):i==="KeyR"?(ut.click(),ap()):i==="Escape"&&(ut.click(),hp()))}}async function gy(){let i=Gt("#loading .load-bar i");await Kd(e=>{i.style.width=Math.round(e*100)+"%"}),sf();try{await document.fonts.load("700 20px Mali")}catch{}Wt=new bl(Gt("#world")),Oe=hf(Wt),An=new Vl(Wt),Kn=new Fl(Wt,Oe),Pe=new kl(Wt),fn=Of(Wt,zl);let t=G.name&&G.pos?G.pos:ct.start;mt=new Ol(Wt,Oe,t[0],t[1]),Cs=new Cl(Wt),dn=new Wl(Gt("#brewRoot"),{onBottle:hy,onClose:uy,onInv:()=>{}}),jn=new Ul,Af(()=>dn.isOpen||jn.isOpen||ht.disc),G.stall.items.length&&Pe.moveToStall(!0),$e()!=="letter"&&Oe.props.mailbox.set("mailbox_empty"),Wt.snap(3,.8),Wt.dist=qf,eu(),If({onAct:Zh,onKey:my}),window.addEventListener("resize",()=>Wt.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&ht.started&&(G.lastSeen=de(),G.pos=[mt.x,mt.z],pe())}),Gt("#hud .hud-tr #bBag").addEventListener("click",()=>{Is()||(ut.click(),rp())}),Gt("#bBook").addEventListener("click",()=>{Is()||(ut.click(),ap())}),Gt("#bSet").addEventListener("click",()=>{Is()||(ut.click(),hp())}),requestAnimationFrame(e=>{Jh=e,dp(e)}),Gt("#loading").classList.add("done"),setTimeout(()=>Gt("#loading").remove(),600),xy(),location.hash==="#test"&&(window.__slice={G:ht,save:G,world:Wt,Puppet:vs,get witch(){return mt},get cust(){return ee},brew:dn,garden:An,wild:Kn,cat:Pe,folk:fn,act:Zh,targets:Qf,pickTarget:tp,get mini(){return jn},get S(){return Oe},catchBug:ep,goFish:ip,tp(e,n){mt.spr.mesh.position.x=e,mt.spr.mesh.position.z=n}})}function xy(){let i=Gt("#title");i.classList.remove("hidden");let t=i.querySelector(".title-main"),e=i.querySelector(".title-new"),n=Gt("#bStart");n.querySelector("span").textContent=G.name?`Continue as ${G.name}`:"Start";let s=()=>{_f(),El(),ut.click()};n.addEventListener("click",()=>{if(s(),G.name){Xf(!1);return}t.classList.add("hidden"),e.classList.remove("hidden");let a=Gt("#nameIn");setTimeout(()=>a.focus(),50)});let r=()=>{let a=Gt("#nameIn").value.trim().replace(/[<>]/g,"").slice(0,12);if(!a){Jn(Gt("#nameIn")),ut.click();return}G.name=a,pe(),ut.quest(),Xf(!0)};Gt("#bBegin").addEventListener("click",r),Gt("#nameIn").addEventListener("keydown",a=>{a.key==="Enter"&&r()})}async function Xf(i){await ga(!0),Gt("#title").classList.add("hidden"),Gt("#hud").classList.remove("hidden"),Fn&&Gt("#touch").classList.remove("hidden"),ht.started=!0,Wt.distGoal=Rs,Wt.dist=Rs,Wt.snap(mt.x,mt.z+.5);let t=de()-(G.lastSeen||de()),e=up(!0);if(pa(G.coins),Nh(Yh(),G.fame%3/3),gr(G.newCount||0),ht.where=mt.x>Ei+1?"town":mt.x<ys?"forest":"home",G.cust.here||$e()==="deliver"?ba(!1):$e()==="talk"?ba(!0):$e()==="free"&&de()>=G.cust.nextAt&&ba(!1),G.stall.items.length&&Pe.moveToStall(!0),await ga(!1),i)wn("Hazel Cottage",`Welcome home, ${Zn(G.name)}`,{ms:3e3}),setTimeout(async()=>{Pe.hop(),ut.meow();let n=ct.mailbox[0]+1.5,s=ct.mailbox[1]+.7;mt.walkTo(n,s,Pe.x,2.4),ht.focus=[(Pe.x+n)/2,(Pe.z+s)/2],Wt.distGoal=gi,await Ai("Kuro","Mrrow. (Kuro paws at the mailbox. A letter is sticking out.)",[],{pitch:rs.kuro}),ht.focus=null,Wt.distGoal=Rs},1400);else{let n=()=>wn(mt.x>Ei?"Mossbrook Square":mt.x<ys?"Whisperwood":"Hazel Cottage",`Welcome back, ${Zn(G.name)}`,{ms:2400}),s=[],r=An.readyCount();t>6e4&&(r&&s.push([_a[G.plots.find((a,o)=>An.state(o).ready).crop].sprite[2],`${r} plant${r>1?"s are":" is"} ready to pick`]),e.sold.length&&s.push(["coin",`Kuro sold ${e.sold.length} potion${e.sold.length>1?"s":""} for ${e.total} coins`]),ee&&s.push([ee.def.sprite,`${ee.def.name} is waiting at your door`])),s.length?setTimeout(()=>{cy(s,t),n()},700):n()}}gy().catch(i=>{console.error(i);let t=Gt("#loading p");t&&(t.textContent="Something went wrong while loading. Please reload.")});
