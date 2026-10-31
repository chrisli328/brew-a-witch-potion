var Bu=0,Ac=1,zu=2;var Jr=1,Gu=2,tr=3,Xi=0,un=1,Ln=2,ci=0,qi=1,$i=2,Cc=3,Rc=4,Vu=5;var ds=100,Hu=101,Wu=102,Xu=103,qu=104,$u=200,Yu=201,Zu=202,Ju=203,Ic=204,Pc=205,Ku=206,ju=207,Qu=208,td=209,ed=210,nd=211,id=212,sd=213,rd=214,Ka=0,ja=1,Qa=2,Ys=3,to=4,eo=5,no=6,io=7,Lc=0,ad=1,od=2,qn=0,Dc=1,Nc=2,Uc=3,Fc=4,Oc=5,kc=6,Bc=7;var zc=300,Yi=301,fs=302,Ro=303,Io=304,Kr=306,hs=1e3,si=1001,so=1002,Je=1003,ld=1004;var jr=1005;var We=1006,Po=1007;var Zi=1008;var Sn=1009,Gc=1010,Vc=1011,er=1012,Lo=1013,$n=1014,Yn=1015,Zn=1016,Do=1017,No=1018,nr=1020,Hc=35902,Wc=35899,Xc=1021,qc=1022,Dn=1023,ri=1026,Ji=1027,$c=1028,Uo=1029,Ki=1030,Fo=1031;var Oo=1033,Qr=33776,ta=33777,ea=33778,na=33779,ko=35840,Bo=35841,zo=35842,Go=35843,Vo=36196,Ho=37492,Wo=37496,Xo=37488,qo=37489,ia=37490,$o=37491,Yo=37808,Zo=37809,Jo=37810,Ko=37811,jo=37812,Qo=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,sa=36285,fl=36286;var Lr=2300,ro=2301,Za=2302,yc=2303,bc=2400,Mc=2401,Sc=2402;var cd=3200;var Yc=0,hd=1,Si="",Le="srgb",Dr="srgb-linear",Nr="linear",fe="srgb";var Ja=7680;var ud=519,dd=512,fd=513,pd=514,pl=515,md=516,gd=517,ml=518,xd=519,_d=35044;var Zc="300 es",Wn=2e3,Ur=2001;function Ep(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vd(){let i=Fr("canvas");return i.style.display="block",i}var xu={},Zs=null;function Jc(...i){let t="THREE."+i.shift();Zs?Zs("log",t,...i):console.log(t,...i)}function yd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=yd(i);let t="THREE."+i.shift();if(Zs)Zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=yd(i);let t="THREE."+i.shift();if(Zs)Zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function cs(...i){let t=i.join(" ");t in xu||(xu[t]=!0,Gt(...i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Md={[Ka]:ja,[Qa]:no,[to]:io,[Ys]:eo,[ja]:Ka,[no]:Qa,[io]:to,[eo]:Ys},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=1234567,Ir=Math.PI/180,Js=180/Math.PI;function ir(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function Cp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rp(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Ip(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Pp(i,t=1){return t-Math.abs(Kc(i,t*2)-t)}function Lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Up(i,t){return i+Math.random()*(t-i)}function Fp(i){return i*(.5-Math.random())}function Op(i){i!==void 0&&(_u=i);let t=_u+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kp(i){return i*Ir}function Bp(i){return i*Js}function zp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*m,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jc={DEG2RAD:Ir,RAD2DEG:Js,generateUUID:ir,clamp:ae,euclideanModulo:Kc,mapLinear:Cp,inverseLerp:Rp,lerp:Pr,damp:Ip,pingpong:Pp,smoothstep:Lp,smootherstep:Dp,randInt:Np,randFloat:Up,randFloatSpread:Fp,seededRandom:Op,degToRad:kp,radToDeg:Bp,isPowerOfTwo:zp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Hp,normalize:hn,denormalize:qs},ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var oe=ih,oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(d!==g||l!==u||c!==m||h!==x){let p=l*u+c*m+h*x+d*g;p<0&&(u=-u,m=-m,x=-x,g=-g,p=-p);let f=1-o;if(p<.9995){let w=Math.acos(p),I=Math.sin(w);f=Math.sin(f*w)/I,o=Math.sin(o*w)/I,l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+g*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+g*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*d+l*m-c*u,t[e+1]=l*x+h*u+c*d-o*m,t[e+2]=c*x+h*m+o*u-l*d,t[e+3]=h*x-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"YZX":this._x=u*h*d+c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d-u*m*x;break;case"XZY":this._x=u*h*d-c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d+u*m*x;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var j=sh,tc=new j,vu=new oi,rh=class rh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],x=n[8],g=s[0],p=s[3],f=s[6],w=s[1],I=s[4],M=s[7],S=s[2],T=s[5],P=s[8];return r[0]=a*g+o*w+l*S,r[3]=a*p+o*I+l*T,r[6]=a*f+o*M+l*P,r[1]=c*g+h*w+d*S,r[4]=c*p+h*I+d*T,r[7]=c*f+h*M+d*P,r[2]=u*g+m*w+x*S,r[5]=u*p+m*I+x*T,r[8]=u*f+m*M+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,x=e*d+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;var Yt=rh,ec=new Yt,yu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:t,whitePoint:n,transfer:Nr,toXYZ:yu,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:yu,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}var re=Wp();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Fr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xp=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nc(s[a].image)):r.push(nc(s[a]))}else r=nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var qp=0,ic=new j,Ke=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=We,a=Zi,o=Dn,l=Sn,c=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ir(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=zc;Ke.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],x=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,M=(m+1)/2,S=(f+1)/2,T=(h+u)/4,P=(d+g)/4,v=(x+p)/4;return I>M&&I>S?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=T/n,r=P/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=P/r,s=v/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-x)*(p-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-x)/w,this.y=(d-g)/w,this.z=(u-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var Ce=ah,oo=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Co=class Co{constructor(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=x,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),a=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,x=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+x*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,x=c*h,g=c*d;e[0]=u+g*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,x=c*h,g=c*d;e[0]=u-g*o,e[4]=-a*d,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,x=o*h,g=o*d;e[0]=l*h,e[4]=x*c-m,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-u*d,e[8]=x*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+x,e[10]=u-g*d}else if(t.order==="XZY"){let u=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=a*h,e[9]=m*d-x,e[2]=x*d-m,e[6]=o*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,Yp)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Li.crossVectors(n,xn),Li.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Li.crossVectors(n,xn)),Li.normalize(),Ca.crossVectors(xn,Li),s[0]=Li.x,s[4]=Ca.x,s[8]=xn.x,s[1]=Li.y,s[5]=Ca.y,s[9]=xn.y,s[2]=Li.z,s[6]=Ca.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],x=n[2],g=n[6],p=n[10],f=n[14],w=n[3],I=n[7],M=n[11],S=n[15],T=s[0],P=s[4],v=s[8],b=s[12],C=s[1],L=s[5],F=s[9],D=s[13],E=s[2],N=s[6],H=s[10],q=s[14],et=s[3],X=s[7],nt=s[11],rt=s[15];return r[0]=a*T+o*C+l*E+c*et,r[4]=a*P+o*L+l*N+c*X,r[8]=a*v+o*F+l*H+c*nt,r[12]=a*b+o*D+l*q+c*rt,r[1]=h*T+d*C+u*E+m*et,r[5]=h*P+d*L+u*N+m*X,r[9]=h*v+d*F+u*H+m*nt,r[13]=h*b+d*D+u*q+m*rt,r[2]=x*T+g*C+p*E+f*et,r[6]=x*P+g*L+p*N+f*X,r[10]=x*v+g*F+p*H+f*nt,r[14]=x*b+g*D+p*q+f*rt,r[3]=w*T+I*C+M*E+S*et,r[7]=w*P+I*L+M*N+S*X,r[11]=w*v+I*F+M*H+S*nt,r[15]=w*b+I*D+M*q+S*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],x=t[3],g=t[7],p=t[11],f=t[15],w=l*m-c*u,I=o*m-c*d,M=o*u-l*d,S=a*m-c*h,T=a*u-l*h,P=a*d-o*h;return e*(g*w-p*I+f*M)-n*(x*w-p*S+f*T)+s*(x*I-g*S+f*P)-r*(x*M-g*T+p*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],x=t[12],g=t[13],p=t[14],f=t[15],w=e*o-n*a,I=e*l-s*a,M=e*c-r*a,S=n*l-s*o,T=n*c-r*o,P=s*c-r*l,v=h*g-d*x,b=h*p-u*x,C=h*f-m*x,L=d*p-u*g,F=d*f-m*g,D=u*f-m*p,E=w*D-I*F+M*L+S*C-T*b+P*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/E;return t[0]=(o*D-l*F+c*L)*N,t[1]=(s*F-n*D-r*L)*N,t[2]=(g*P-p*T+f*S)*N,t[3]=(u*T-d*P-m*S)*N,t[4]=(l*C-a*D-c*b)*N,t[5]=(e*D-s*C+r*b)*N,t[6]=(p*M-x*P-f*I)*N,t[7]=(h*P-u*M+m*I)*N,t[8]=(a*F-o*C+c*v)*N,t[9]=(n*C-e*F-r*v)*N,t[10]=(x*T-g*M+f*w)*N,t[11]=(d*M-h*T-m*w)*N,t[12]=(o*b-a*L-l*v)*N,t[13]=(e*L-n*b+s*v)*N,t[14]=(g*I-x*S-p*w)*N,t[15]=(h*S-d*I+u*w)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,x=r*d,g=a*h,p=a*d,f=o*d,w=l*c,I=l*h,M=l*d,S=n.x,T=n.y,P=n.z;return s[0]=(1-(g+f))*S,s[1]=(m+M)*S,s[2]=(x-I)*S,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(u+f))*T,s[6]=(p+w)*T,s[7]=0,s[8]=(x+I)*P,s[9]=(p-w)*P,s[10]=(1-(u+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,h=1/o,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Wn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===Wn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ur)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Wn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===Wn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===Ur)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Co.prototype.isMatrix4=!0;var De=Co,Ns=new j,zn=new De,$p=new j(0,0,0),Yp=new j(1,1,1),Li=new j,Ca=new j,xn=new j,Mu=new De,Su=new oi,ki=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zp=0,wu=new j,Us=new oi,gi=new De,Ra=new j,Er=new j,Jp=new j,Kp=new oi,Tu=new j(1,0,0),Eu=new j(0,1,0),Au=new j(0,0,1),Cu={type:"added"},jp={type:"removed"},Fs={type:"childadded",child:null},sc={type:"childremoved",child:null},vn=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new ki,n=new oi,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Yt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return wu.copy(t).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ra.copy(t):Ra.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Er,Ra,this.up):gi.lookAt(Ra,Er,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(gi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jp),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new j(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Kc(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rc(a,r,t+1/3),this.g=rc(a,r,t),this.b=rc(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=Sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return re.workingToColorSpace(rn.copy(this),t),Math.round(ae(rn.r*255,0,255))*65536+Math.round(ae(rn.g*255,0,255))*256+Math.round(ae(rn.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Le){re.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(Ia);let n=Pr(Di.h,Ia.h,e),s=Pr(Di.s,Ia.s,e),r=Pr(Di.l,Ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Kt;Kt.NAMES=Sd;var Br=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new j,xi=new j,ac=new j,_i=new j,Os=new j,ks=new j,Ru=new j,oc=new j,lc=new j,cc=new j,hc=new Ce,uc=new Ce,dc=new Ce,Oi=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),xi.subVectors(n,e),ac.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(xi),l=Gn.dot(ac),c=xi.dot(xi),h=xi.dot(ac),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,n),dc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hc,r.x),a.addScaledVector(uc,r.y),a.addScaledVector(dc,r.z),a}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),xi.subVectors(t,e),Gn.cross(xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),ks.subVectors(r,n),oc.subVectors(t,n);let l=Os.dot(oc),c=ks.dot(oc);if(l<=0&&c<=0)return e.copy(n);lc.subVectors(t,s);let h=Os.dot(lc),d=ks.dot(lc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Os,a);cc.subVectors(t,r);let m=Os.dot(cc),x=ks.dot(cc);if(x>=0&&m<=x)return e.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(ks,o);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return Ru.subVectors(r,s),o=(d-h)/(d-h+(m-x)),e.copy(s).addScaledVector(Ru,o);let f=1/(p+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(Os,a).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),La.subVectors(this.max,Ar),Bs.subVectors(t.a,Ar),zs.subVectors(t.b,Ar),Gs.subVectors(t.c,Ar),Ni.subVectors(zs,Bs),Ui.subVectors(Gs,zs),rs.subVectors(Bs,Gs);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-rs.z,rs.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,rs.z,0,-rs.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-rs.y,rs.x,0];return!fc(e,Bs,zs,Gs,La)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,Bs,zs,Gs,La))?!1:(Da.crossVectors(Ni,Ui),e=[Da.x,Da.y,Da.z],fc(e,Bs,zs,Gs,La))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new j,new j,new j,new j,new j,new j,new j,new j],Vn=new j,Pa=new Bi,Bs=new j,zs=new j,Gs=new j,Ni=new j,Ui=new j,rs=new j,Ar=new j,La=new j,Da=new j,as=new j;function fc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){as.fromArray(i,r);let o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new j,Na=new oe,tm=0,tn=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_d,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gr=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Pn=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},em=new Bi,Cr=new j,pc=new j,us=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):em.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(pc)),this.expandByPoint(Cr.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},nm=0,In=new De,mc=new vn,Vs=new j,_n=new Bi,Rr=new Bi,Ze=new j,yn=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ep(t)?Gr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(_n.min,Rr.min),_n.expandByPoint(Ze),Ze.addVectors(_n.max,Rr.max),_n.expandByPoint(Ze)):(_n.expandByPoint(Rr.min),_n.expandByPoint(Rr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(t,c),Ze.add(Vs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new j,l[v]=new j;let c=new j,h=new j,d=new j,u=new oe,m=new oe,x=new oe,g=new j,p=new j;function f(v,b,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,C),h.sub(c),d.sub(c),m.sub(u),x.sub(u);let L=1/(m.x*x.y-x.x*m.y);isFinite(L)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(L),o[v].add(g),o[b].add(g),o[C].add(g),l[v].add(p),l[b].add(p),l[C].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let v=0,b=w.length;v<b;++v){let C=w[v],L=C.start,F=C.count;for(let D=L,E=L+F;D<E;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let I=new j,M=new j,S=new j,T=new j;function P(v){S.fromBufferAttribute(s,v),T.copy(S);let b=o[v];I.copy(b),I.sub(S.multiplyScalar(S.dot(b))).normalize(),M.crossVectors(T,b);let L=M.dot(l[v])<0?-1:1;a.setXYZW(v,I.x,I.y,I.z,L)}for(let v=0,b=w.length;v<b;++v){let C=w[v],L=C.start,F=C.count;for(let D=L,E=L+F;D<E;D+=3)P(t.getX(D+0)),P(t.getX(D+1)),P(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new j,r=new j,a=new j,o=new j,l=new j,c=new j,h=new j,d=new j;if(t)for(let u=0,m=t.count;u<m;u+=3){let x=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)u[x++]=c[m++]}return new tn(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gc=new j,im=new j,sm=new Yt,Hn=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gc.subVectors(n,e).cross(im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sm.getNormalMatrix(t),s=this.coplanarPoint(gc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rm=0,zi=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=qi,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Pc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yi=new j,xc=new j,Ua=new j,Fa=new j,Vr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xc.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Fa.copy(this.origin).sub(xc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ua),o=Fa.dot(this.direction),l=-Fa.dot(Ua),c=Fa.lengthSq(),h=Math.abs(1-a*a),d,u,m,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xc).addScaledVector(Ua,u),m}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,x=e.x-a.x,g=e.y-a.y,p=e.z-a.z,f=n.x-a.x,w=n.y-a.y,I=n.z-a.z,M=Math.abs(l),S=Math.abs(c),T=Math.abs(h),P,v,b,C,L,F,D,E,N,H,q,et;if(M>=S&&M>=T?(b=l,F=d,N=x,et=f,l>=0?(P=c,v=h,C=u,L=m,D=g,E=p,H=w,q=I):(P=h,v=c,C=m,L=u,D=p,E=g,H=I,q=w)):S>=T?(b=c,F=u,N=g,et=w,c>=0?(P=h,v=l,C=m,L=d,D=p,E=x,H=I,q=f):(P=l,v=h,C=d,L=m,D=x,E=p,H=f,q=I)):(b=h,F=m,N=p,et=I,h>=0?(P=l,v=c,C=d,L=u,D=x,E=g,H=f,q=w):(P=c,v=l,C=u,L=d,D=g,E=x,H=w,q=f)),b===0)return null;let X=P/b,nt=v/b,rt=1/b,Ct=C-X*F,A=L-nt*F,O=D-X*N,k=E-nt*N,J=H-X*et,U=q-nt*et,W=J*k-U*O,K=Ct*U-A*J,ft=O*A-k*Ct;if(s){if(W<0||K<0||ft<0)return null}else if((W<0||K<0||ft<0)&&(W>0||K>0||ft>0))return null;let ut=W+K+ft;if(ut===0)return null;let Ut=rt*(W*F+K*N+ft*et);return(ut>0?Ut<0:Ut>0)?null:this.at(Ut/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},li=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Iu=new De,os=new Vr,Oa=new us,Pu=new j,ka=new j,Ba=new j,za=new j,_c=new j,Ga=new j,Lu=new j,Va=new j,Ve=class extends vn{constructor(t=new yn,e=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(_c.fromBufferAttribute(d,t),a?Ga.addScaledVector(_c,h):Ga.addScaledVector(_c.sub(e),h))}e.add(Ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Oa.containsPoint(os.origin)===!1&&(os.intersectSphere(Oa,Pu)===null||os.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Iu.copy(r).invert(),os.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let p=u[x],f=a[p.materialIndex],w=Math.max(p.start,m.start),I=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,S=I;M<S;M+=3){let T=o.getX(M),P=o.getX(M+1),v=o.getX(M+2);s=Ha(this,f,t,n,c,h,d,T,P,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let w=o.getX(p),I=o.getX(p+1),M=o.getX(p+2);s=Ha(this,a,t,n,c,h,d,w,I,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let p=u[x],f=a[p.materialIndex],w=Math.max(p.start,m.start),I=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,S=I;M<S;M+=3){let T=M,P=M+1,v=M+2;s=Ha(this,f,t,n,c,h,d,T,P,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let w=p,I=p+1,M=p+2;s=Ha(this,a,t,n,c,h,d,w,I,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function am(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xi,o),l===null)return null;Va.copy(o),Va.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Va);return c<e.near||c>e.far?null:{distance:c,point:Va.clone(),object:i}}function Ha(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Ba),i.getVertexPosition(c,za);let h=am(i,t,e,n,ka,Ba,za,Lu);if(h){let d=new j;Oi.getBarycoord(Lu,ka,Ba,za,d),s&&(h.uv=Oi.getInterpolatedAttribute(s,o,l,c,d,new oe)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(h.normal=Oi.getInterpolatedAttribute(a,o,l,c,d,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new j,materialIndex:0};Oi.getNormal(ka,Ba,za,u.normal),h.face=u,h.barycoord=d}return h}var co=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Je,h=Je,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=new us,om=new oe(.5,.5),Wa=new j,Hr=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],x=r[8],g=r[9],p=r[10],f=r[11],w=r[12],I=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,m-h,f-x,S-w).normalize(),s[1].setComponents(c+a,m+h,f+x,S+w).normalize(),s[2].setComponents(c+o,m+d,f+g,S+I).normalize(),s[3].setComponents(c-o,m-d,f-g,S-I).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,m-u,f-p,S-M).normalize();else if(s[4].setComponents(c-l,m-u,f-p,S-M).normalize(),e===Wn)s[5].setComponents(c+l,m+u,f+p,S+M).normalize();else if(e===Ur)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);let e=om.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ho=class extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Du=new De,wc=new Vr,Xa=new us,qa=new j,Wr=class extends vn{constructor(t=new yn,e=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;Du.copy(s).invert(),wc.copy(t.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=u,g=m;x<g;x++){let p=c.getX(x);qa.fromBufferAttribute(d,p),Nu(qa,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=u,g=m;x<g;x++)qa.fromBufferAttribute(d,x),Nu(qa,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nu(i,t,e,n,s,r,a){let o=wc.distanceSqToPoint(i);if(o<e){let l=new j;wc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xr=class extends Ke{constructor(t=[],e=Yi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xn=class extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends Ke{constructor(t,e,n=$n,s,r,a,o=Je,l=Je,c,h=ri,d=1){if(h!==ri&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},uo=class extends Gi{constructor(t,e=$n,n=Yi,s,r,a=Je,o=Je,l,c=ri){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qr=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qs=class i extends yn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(h,3)),this.setAttribute("uv",new Pn(d,2));function x(g,p,f,w,I,M,S,T,P,v,b){let C=M/P,L=S/v,F=M/2,D=S/2,E=T/2,N=P+1,H=v+1,q=0,et=0,X=new j;for(let nt=0;nt<H;nt++){let rt=nt*L-D;for(let Ct=0;Ct<N;Ct++){let A=Ct*C-F;X[g]=A*w,X[p]=rt*I,X[f]=E,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[f]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(Ct/P),d.push(1-nt/v),q+=1}}for(let nt=0;nt<v;nt++)for(let rt=0;rt<P;rt++){let Ct=u+rt+N*nt,A=u+rt+N*(nt+1),O=u+(rt+1)+N*(nt+1),k=u+(rt+1)+N*nt;l.push(Ct,A,k),l.push(A,O,k),et+=6}o.addGroup(m,et,b),m+=et,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bn=class i extends yn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,m=[],x=[],g=[],p=[];for(let f=0;f<h;f++){let w=f*u-a;for(let I=0;I<c;I++){let M=I*d-r;x.push(M,-w,0),g.push(0,0,1),p.push(I/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let I=w+c*f,M=w+c*(f+1),S=w+1+c*(f+1),T=w+1+c*f;m.push(I,M,T),m.push(M,S,T)}this.setIndex(m),this.setAttribute("position",new Pn(x,3)),this.setAttribute("normal",new Pn(g,3)),this.setAttribute("uv",new Pn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uu(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function Uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var wd={clone:ps,merge:on},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new De().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fo=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var po=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mo=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends Vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,o=2*e-n;break;case Sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:a=t,l=2*n-e;break;case Sc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),g=x*x,p=g*x,f=-u*p+2*u*g-u*x,w=(1+u)*p+(-1.5-2*u)*g+(-.5+u)*x+1,I=(-1-m)*p+(1.5+m)*g+.5*x,M=m*p-m*g;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+w*a[c+S]+I*a[l+S]+M*a[d+S];return r}},xo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},_o=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends Vi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),g=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*g+a[l+p]*x;return r}let u=o*2,m=t-1;for(let x=0;x!==o;++x){let g=a[c+x],p=a[l+x],f=m*u+x*2,w=d[f],I=d[f+1],M=t*u+x*2,S=h[M],T=h[M+1],P=dm(n,e,w,S,s);r[x]=Td(P,g,I,T,p)}return r}};function Td(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function um(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Td(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=um(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vc(t.settings)&&(n.settings={inTangents:Hs(t.settings.inTangents,Array),outTangents:Hs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case ro:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break;case yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vc(this.settings)&&(Fu(this.settings.inTangents,t),Fu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ap(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let x=0;x!==n;++x){let g=e[d+x];if(g!==e[u+x]||g!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ro;var Hi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Lr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="color";var bo=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="number";var Mo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},$r=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Lr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};So.prototype.ValueTypeName="vector";var wo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new wo,To=class{constructor(t){this.manager=t!==void 0?t:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var $a=new j,Ya=new oi,ii=new j,Yr=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($a,Ya,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ya,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($a,Ya,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ya,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new j,Ou=new oe,ku=new oe,an=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,ku),e.subVectors(ku,Ou)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zr=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ws=-90,Xs=1,Eo=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Ws,Xs,t,e);s.layers=this.layers,this.add(s);let r=new an(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let a=new an(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let o=new an(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let l=new an(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new an(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ao=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var th="\\[\\]\\.:\\/",fm=new RegExp("["+th+"]","g"),eh="[^"+th+"]",pm="[^"+th.replace("\\.","")+"]",mm=/((?:WC+[\/:])*)/.source.replace("WC",eh),gm=/(WCOD+)?/.source.replace("WCOD",pm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),_m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),vm=new RegExp("^"+mm+gm+xm+_m+"$"),ym=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fm,"")}static parseTrackName(t){let e=vm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Tc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iy=new Float32Array(1);var oh=class oh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};oh.prototype.isMatrix2=!0;var Ec=oh;function nh(i,t,e,n){let s=bm(n);switch(e){case Xc:return i*t;case $c:return i*t/s.components*s.byteLength;case Uo:return i*t/s.components*s.byteLength;case Ki:return i*t*2/s.components*s.byteLength;case Fo:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case Oo:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case Go:return Math.max(i,16)*Math.max(t,8)/4;case ko:case zo:return Math.max(i,8)*Math.max(t,8)/2;case Vo:case Ho:case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case ia:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bm(i){switch(i){case Sn:case Gc:return{byteLength:1,components:1};case er:case Vc:case Zn:return{byteLength:2,components:1};case Do:case No:return{byteLength:2,components:4};case $n:case Lo:case Yn:return{byteLength:4,components:1};case Hc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],g=d[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let g=d[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$m=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,M0=`uniform sampler2D dfgLUT;
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
}`,S0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define TOON
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
}`,Kg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,ex=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:wm,alphahash_pars_fragment:Tm,alphamap_fragment:Em,alphamap_pars_fragment:Am,alphatest_fragment:Cm,alphatest_pars_fragment:Rm,aomap_fragment:Im,aomap_pars_fragment:Pm,batching_pars_vertex:Lm,batching_vertex:Dm,begin_vertex:Nm,beginnormal_vertex:Um,bsdfs:Fm,iridescence_fragment:Om,bumpmap_pars_fragment:km,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Hm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:$m,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Km,emissivemap_fragment:jm,emissivemap_pars_fragment:Qm,colorspace_fragment:t0,colorspace_pars_fragment:e0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:a0,fog_vertex:o0,fog_pars_vertex:l0,fog_fragment:c0,fog_pars_fragment:h0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:d0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:x0,lights_toon_pars_fragment:_0,lights_phong_fragment:v0,lights_phong_pars_fragment:y0,lights_physical_fragment:b0,lights_physical_pars_fragment:M0,lights_fragment_begin:S0,lights_fragment_maps:w0,lights_fragment_end:T0,lightprobes_pars_fragment:E0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:I0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:N0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:F0,morphinstance_vertex:O0,morphcolor_vertex:k0,morphnormal_vertex:B0,morphtarget_pars_vertex:z0,morphtarget_vertex:G0,normal_fragment_begin:V0,normal_fragment_maps:H0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:K0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:vg,uv_pars_fragment:yg,uv_pars_vertex:bg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:wg,background_frag:Tg,backgroundCube_vert:Eg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Rg,depth_vert:Ig,depth_frag:Pg,distance_vert:Lg,distance_frag:Dg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:kg,meshbasic_frag:Bg,meshlambert_vert:zg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Hg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:$g,meshphysical_vert:Yg,meshphysical_frag:Zg,meshtoon_vert:Jg,meshtoon_frag:Kg,points_vert:jg,points_frag:Qg,shadow_vert:tx,shadow_frag:ex,sprite_vert:nx,sprite_frag:ix},Mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ui={basic:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:on([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:on([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:on([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:on([Mt.points,Mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:on([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:on([Mt.common,Mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:on([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:on([Mt.sprite,Mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:on([Mt.common,Mt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:on([Mt.lights,Mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var gl={r:0,b:0,g:0},sx=new De,Zd=new Yt;Zd.set(-1,0,0,0,1,0,0,0,1);function rx(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(w){let I=w.isScene===!0?w.background:null;if(I&&I.isTexture){let M=w.backgroundBlurriness>0;I=t.get(I,M)}return I}function x(w){let I=!1,M=m(w);M===null?p(a,o):M&&M.isColor&&(p(M,1),I=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,I){let M=m(I);M&&(M.isCubeTexture||M.mapping===Kr)?(c===void 0&&(c=new Ve(new Qs(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ps(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=re.getTransfer(M.colorSpace)!==fe,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ve(new bn(2,2),new je({name:"BackgroundMaterial",uniforms:ps(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,I){w.getRGB(gl,Qc(i)),e.buffers.color.setClear(gl.r,gl.g,gl.b,I,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,I=1){a.set(w),o=I,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(a,o)},render:x,addToRenderList:g,dispose:f}}function ax(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,F,D,E,N){let H=!1,q=d(L,E,D,F);r!==q&&(r=q,c(r.object)),H=m(L,E,D,N),H&&x(L,E,D,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(L,F,D,E),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,F,D,E){let N=E.wireframe===!0,H=n[F.id];H===void 0&&(H={},n[F.id]=H);let q=L.isInstancedMesh===!0?L.id:0,et=H[q];et===void 0&&(et={},H[q]=et);let X=et[D.id];X===void 0&&(X={},et[D.id]=X);let nt=X[N];return nt===void 0&&(nt=u(l()),X[N]=nt),nt}function u(L){let F=[],D=[],E=[];for(let N=0;N<e;N++)F[N]=0,D[N]=0,E[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:E,object:L,attributes:{},index:null}}function m(L,F,D,E){let N=r.attributes,H=F.attributes,q=0,et=D.getAttributes();for(let X in et)if(et[X].location>=0){let rt=N[X],Ct=H[X];if(Ct===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),rt===void 0||rt.attribute!==Ct||Ct&&rt.data!==Ct.data)return!0;q++}return r.attributesNum!==q||r.index!==E}function x(L,F,D,E){let N={},H=F.attributes,q=0,et=D.getAttributes();for(let X in et)if(et[X].location>=0){let rt=H[X];rt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));let Ct={};Ct.attribute=rt,rt&&rt.data&&(Ct.data=rt.data),N[X]=Ct,q++}r.attributes=N,r.attributesNum=q,r.index=E}function g(){let L=r.newAttributes;for(let F=0,D=L.length;F<D;F++)L[F]=0}function p(L){f(L,0)}function f(L,F){let D=r.newAttributes,E=r.enabledAttributes,N=r.attributeDivisors;D[L]=1,E[L]===0&&(i.enableVertexAttribArray(L),E[L]=1),N[L]!==F&&(i.vertexAttribDivisor(L,F),N[L]=F)}function w(){let L=r.newAttributes,F=r.enabledAttributes;for(let D=0,E=F.length;D<E;D++)F[D]!==L[D]&&(i.disableVertexAttribArray(D),F[D]=0)}function I(L,F,D,E,N,H,q){q===!0?i.vertexAttribIPointer(L,F,D,N,H):i.vertexAttribPointer(L,F,D,E,N,H)}function M(L,F,D,E){g();let N=E.attributes,H=D.getAttributes(),q=F.defaultAttributeValues;for(let et in H){let X=H[et];if(X.location>=0){let nt=N[et];if(nt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor)),nt!==void 0){let rt=nt.normalized,Ct=nt.itemSize,A=t.get(nt);if(A===void 0)continue;let O=A.buffer,k=A.type,J=A.bytesPerElement,U=k===i.INT||k===i.UNSIGNED_INT||nt.gpuType===Lo;if(nt.isInterleavedBufferAttribute){let W=nt.data,K=W.stride,ft=nt.offset;if(W.isInstancedInterleavedBuffer){for(let ut=0;ut<X.locationSize;ut++)f(X.location+ut,W.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ut=0;ut<X.locationSize;ut++)p(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,O);for(let ut=0;ut<X.locationSize;ut++)I(X.location+ut,Ct/X.locationSize,k,rt,K*J,(ft+Ct/X.locationSize*ut)*J,U)}else{if(nt.isInstancedBufferAttribute){for(let W=0;W<X.locationSize;W++)f(X.location+W,nt.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let W=0;W<X.locationSize;W++)p(X.location+W);i.bindBuffer(i.ARRAY_BUFFER,O);for(let W=0;W<X.locationSize;W++)I(X.location+W,Ct/X.locationSize,k,rt,Ct*J,Ct/X.locationSize*W*J,U)}}else if(q!==void 0){let rt=q[et];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(X.location,rt);break;case 3:i.vertexAttrib3fv(X.location,rt);break;case 4:i.vertexAttrib4fv(X.location,rt);break;default:i.vertexAttrib1fv(X.location,rt)}}}}w()}function S(){b();for(let L in n){let F=n[L];for(let D in F){let E=F[D];for(let N in E){let H=E[N];for(let q in H)h(H[q].object),delete H[q];delete E[N]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let D in F){let E=F[D];for(let N in E){let H=E[N];for(let q in H)h(H[q].object),delete H[q];delete E[N]}}delete n[L.id]}function P(L){for(let F in n){let D=n[F];for(let E in D){let N=D[E];if(N[L.id]===void 0)continue;let H=N[L.id];for(let q in H)h(H[q].object),delete H[q];delete N[L.id]}}}function v(L){for(let F in n){let D=n[F],E=L.isInstancedMesh===!0?L.id:0,N=D[E];if(N!==void 0){for(let H in N){let q=N[H];for(let et in q)h(q[et].object),delete q[et];delete N[H]}delete D[E],Object.keys(D).length===0&&delete n[F]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:w}}function ox(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Dn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Sn&&P!==Yn&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:I,maxFragmentUniforms:M,maxSamples:S,samples:T}}function cx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,I=w*4,M=f.clippingState||null;l.value=M,M=h(x,u,I,m);for(let S=0;S!==I;++S)M[S]=e[S];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,x){let g=d!==null?d.length:0,p=null;if(g!==0){if(p=l.value,x!==!0||p===null){let f=m+g*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let I=0,M=m;I!==g;++I,M+=4)a.copy(d[I]).applyMatrix4(w,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}var rr=4,hx=6,ux=20,dx=256,ra=new Zr,Ad=new Kt,lh=null,ch=0,hh=0,uh=!1,fx=new j,ms=new j,_l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=fx}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Zn,format:Dn,colorSpace:Dr,depthBuffer:!1},s=Cd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=px(r)),this._blurMaterial=gx(r,t,e),this._ggxMaterial=mx(r,t,e)}return s}_compileMaterial(t){let e=new Ve(new yn,t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(Ad),d.toneMapping=qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Qs,new li({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,p=g.material,f=!1,w=t.background;w?w.isColor&&(p.color.copy(w),t.background=null,f=!0):(p.color.copy(Ad),f=!0);for(let I=0;I<6;I++){let M=I%3;M===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[I],r.y,r.z)):M===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[I]));let S=this._cubeSize;sr(s,M*S,I>2?S:0,S,S),d.setRenderTarget(s),f&&d.render(g,l),d.render(t,l)}d.toneMapping=m,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,m=d*u,{_lodMax:x}=this,g=this._sizeLods[n],p=3*g*(n>x-rr?n-x+rr:0),f=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,sr(r,p,f,3*g,2*g),s.setRenderTarget(r),s.render(o,ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,sr(t,p,f,3*g,2*g),s.setRenderTarget(t),s.render(o,ra)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-rr?s-this._lodMax+rr:0),u=4*(this._cubeSize-h);sr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ra)}};function px(i){let t=[],e=[],n=i,s=i-rr+1+hx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,m=3,x=new Float32Array(m*u*d),g=new Float32Array(m*u*d);for(let f=0;f<d;f++){let w=f%3*2/3-1,I=f>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];x.set(M,m*u*f);for(let S=0;S<u;S++){let T=h[S*2]*2-1,P=h[S*2+1]*2-1;f===0?ms.set(1,P,T):f===1?ms.set(-T,1,-P):f===2?ms.set(-T,P,1):f===3?ms.set(-1,P,-T):f===4?ms.set(-T,-1,P):ms.set(T,P,-1),ms.toArray(g,(f*u+S)*m)}}let p=new yn;p.setAttribute("position",new tn(x,m)),p.setAttribute("outputDirection",new tn(g,m)),e.push(new Ve(p,null)),n>rr&&n--}return{lodMeshes:e,sizeLods:t}}function Cd(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mx(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function gx(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:ux,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Rd(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Id(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vl=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qs(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ci});r.uniforms.tEquirect.value=e;let a=new Ve(s,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=We),new Eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function xx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ro||m===Io)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let g=new vl(x.height);return g.fromEquirectangularTexture(i,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,x=m===Ro||m===Io,g=m===Yi||m===fs;if(x||g){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new _l(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let w=u.image;return x&&w&&w.height>0||g&&w&&l(w)?(n===null&&(n=new _l(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Ro?u.mapping=Yi:m===Io&&(u.mapping=fs),u}function l(u){let m=0,x=6;for(let g=0;g<x;g++)u[g]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function _x(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function vx(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(d){let u=[],m=d.index,x=d.attributes.position,g=0;if(x===void 0)return;if(m!==null){let w=m.array;g=m.version;for(let I=0,M=w.length;I<M;I+=3){let S=w[I+0],T=w[I+1],P=w[I+2];u.push(S,T,T,P,P,S)}}else{let w=x.array;g=x.version;for(let I=0,M=w.length/3-1;I<M;I+=3){let S=I+0,T=I+1,P=I+2;u.push(S,T,T,P,P,S)}}let p=new(x.count>=65535?Gr:zr)(u,1);p.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function yx(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,t,e){let n=new WeakMap,s=new Ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],I=0;m===!0&&(I=1),x===!0&&(I=2),g===!0&&(I=3);let M=o.attributes.position.count*I,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*S*4*d),P=new Or(T,M,S,d);P.type=Yn,P.needsUpdate=!0;let v=I*4;for(let C=0;C<d;C++){let L=p[C],F=f[C],D=w[C],E=M*S*4*C;for(let N=0;N<L.count;N++){let H=N*v;m===!0&&(s.fromBufferAttribute(L,N),T[E+H+0]=s.x,T[E+H+1]=s.y,T[E+H+2]=s.z,T[E+H+3]=0),x===!0&&(s.fromBufferAttribute(F,N),T[E+H+4]=s.x,T[E+H+5]=s.y,T[E+H+6]=s.z,T[E+H+7]=0),g===!0&&(s.fromBufferAttribute(D,N),T[E+H+8]=s.x,T[E+H+9]=s.y,T[E+H+10]=s.z,T[E+H+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new oe(M,S)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var wx={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function Tx(i,t,e,n,s,r){let a=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new yn;c.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pn([0,2,0,0,2,0],2));let h=new fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ve(c,h),u=new Zr(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,f=null,w=[],I=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let T=0;T<w.length;T++){let P=w[T];P.setSize&&P.setSize(M,S)}},this.setEffects=function(M){w=M,I=w.length>0&&w[0].isRenderPass===!0;let S=a.width,T=a.height;w.length>0&&o===null&&(o=new pn(S,T,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(S,T,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<w.length;P++){let v=w[P];v.setSize&&v.setSize(S,T)}},this.begin=function(M,S){if(g||M.toneMapping===qn&&w.length===0)return!1;if(f=S,S!==null){let T=S.width,P=S.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return I===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=qn,!0},this.hasRenderPass=function(){return I},this.end=function(M,S){M.toneMapping=p,g=!0;let T=a,P=o;for(let v=0;v<w.length;v++){let b=w[v];b.enabled!==!1&&(b.render(M,P,T,S),b.needsSwap!==!1&&(T=P,P=P===o?l:o))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,h.defines={},re.getTransfer(m)===fe&&(h.defines.SRGB_TRANSFER="");let v=wx[x];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(f),M.render(d,u),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Jd=new Ke,ph=new Gi(1,1),Kd=new Or,jd=new lo,Qd=new Xr,Pd=[],Ld=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pd[s];if(r===void 0&&(r=new Float32Array(s),Pd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ml(i,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),qe(e,n)}}function Px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),qe(e,n)}}function Lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Dd.set(n),i.uniformMatrix4fv(this.addr,!1,Dd),qe(e,n)}}function Dx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function Ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=e.isReversedDepthBuffer()?ml:pl,r=ph):r=Jd,e.setTexture2D(t||r,s)}function Vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jd,s)}function Hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qd,s)}function Wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function Xx(i){switch(i){case 5126:return Ex;case 35664:return Ax;case 35665:return Cx;case 35666:return Rx;case 35674:return Ix;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return kx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qx(i,t){i.uniform1fv(this.addr,t)}function $x(i,t){let e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function Yx(i,t){let e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function Zx(i,t){let e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function Jx(i,t){let e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kx(i,t){let e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jx(i,t){let e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qx(i,t){i.uniform1iv(this.addr,t)}function t_(i,t){i.uniform2iv(this.addr,t)}function e_(i,t){i.uniform3iv(this.addr,t)}function n_(i,t){i.uniform4iv(this.addr,t)}function i_(i,t){i.uniform1uiv(this.addr,t)}function s_(i,t){i.uniform2uiv(this.addr,t)}function r_(i,t){i.uniform3uiv(this.addr,t)}function a_(i,t){i.uniform4uiv(this.addr,t)}function o_(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ph:a=Jd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function l_(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jd,r[a])}function c_(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qd,r[a])}function h_(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kd,r[a])}function u_(i){switch(i){case 5126:return qx;case 35664:return $x;case 35665:return Yx;case 35666:return Zx;case 35674:return Jx;case 35675:return Kx;case 35676:return jx;case 5124:case 35670:return Qx;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xx(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function Fd(i,t){i.seq.push(t),i.map[t.id]=t}function d_(i,t,e){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fd(e,c===void 0?new mh(o,i,t):new gh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new xh(o),Fd(e,d)),e=d}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);d_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f_=37297,p_=0;function m_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var kd=new Yt;function g_(i){re._getMatrix(kd,re.workingColorSpace,i);let t=`mat3( ${kd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Nr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+m_(i.getShaderSource(t),o)}else return r}function x_(i,t){let e=g_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var __={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Fc]:"ACESFilmic",[kc]:"AgX",[Bc]:"Neutral",[Oc]:"Custom"};function v_(i,t){let e=__[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new j;function y_(){re.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function M_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function oa(i){return i!==""}function zd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(w_,E_)}var T_=new Map;function E_(i,t){let e=te[t];if(e===void 0){let n=T_.get(t);if(n!==void 0)e=te[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _h(e)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(i){return i.replace(A_,C_)}function C_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var R_={[Jr]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function I_(i){return R_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[Yi]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function L_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":P_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var D_={[fs]:"ENVMAP_MODE_REFRACTION"};function N_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U_={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function F_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function O_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function k_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=I_(e),c=L_(e),h=N_(e),d=F_(e),u=O_(e),m=b_(e),x=M_(r),g=s.createProgram(),p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(oa).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(oa).join(`
`),f.length>0&&(f+=`
`)):(p=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),f=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?te.tonemapping_pars_fragment:"",e.toneMapping!==qn?v_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,x_("linearToOutputTexel",e.outputColorSpace),y_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),a=_h(a),a=zd(a,e),a=Gd(a,e),o=_h(o),o=zd(o,e),o=Gd(o,e),a=Vd(a),o=Vd(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let I=w+p+a,M=w+f+o,S=Od(s,s.VERTEX_SHADER,I),T=Od(s,s.FRAGMENT_SHADER,M);s.attachShader(g,S),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(S)||"",E=s.getShaderInfoLog(T)||"",N=F.trim(),H=D.trim(),q=E.trim(),et=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,T);else{let nt=Bd(s,S,"vertex"),rt=Bd(s,T,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+nt+`
`+rt)}else N!==""?Gt("WebGLProgram: Program Info Log:",N):(H===""||q==="")&&(X=!1);X&&(L.diagnostics={runnable:et,programLog:N,vertexShader:{log:H,prefix:p},fragmentShader:{log:q,prefix:f}})}s.deleteShader(S),s.deleteShader(T),v=new ar(s,g),b=S_(s,g)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,f_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}var B_=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yh(t),e.set(t,n)),n}},yh=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function z_(i){return i===Ki||i===ia||i===sa}function G_(i,t,e,n,s,r){let a=new kr,o=new vh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,C,L,F,D){let E=L.fog,N=F.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,et=t.get(v.envMap||H,q),X=et&&et.mapping===Kr?et.image.height:null,nt=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let rt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ct=rt!==void 0?rt.length:0,A=0;N.morphAttributes.position!==void 0&&(A=1),N.morphAttributes.normal!==void 0&&(A=2),N.morphAttributes.color!==void 0&&(A=3);let O,k,J,U;if(nt){let Me=ui[nt];O=Me.vertexShader,k=Me.fragmentShader}else{O=v.vertexShader,k=v.fragmentShader;let Me=o.getVertexShaderStage(v),ue=o.getFragmentShaderStage(v);o.update(v,Me,ue),J=Me.id,U=ue.id}let W=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),ft=F.isInstancedMesh===!0,ut=F.isBatchedMesh===!0,Ut=!!v.map,jt=!!v.matcap,Xt=!!et,Zt=!!v.aoMap,qt=!!v.lightMap,Ht=!!v.bumpMap&&v.wireframe===!1,le=!!v.normalMap,ke=!!v.displacementMap,Ye=!!v.emissiveMap,Te=!!v.metalnessMap,Be=!!v.roughnessMap,G=v.anisotropy>0,en=v.clearcoat>0,me=v.dispersion>0,R=v.retroreflectivity>0,_=v.iridescence>0,$=v.sheen>0,Q=v.transmission>0,it=G&&!!v.anisotropyMap,pt=en&&!!v.clearcoatMap,gt=en&&!!v.clearcoatNormalMap,st=en&&!!v.clearcoatRoughnessMap,ot=_&&!!v.iridescenceMap,xt=_&&!!v.iridescenceThicknessMap,Ft=$&&!!v.sheenColorMap,bt=$&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Ot=!!v.specularColorMap,zt=!!v.specularIntensityMap,Jt=Q&&!!v.transmissionMap,z=Q&&!!v.thicknessMap,vt=!!v.gradientMap,at=!!v.alphaMap,yt=v.alphaTest>0,Tt=!!v.alphaHash,lt=!!v.extensions,kt=qn;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Lt={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:k,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ut,batchingColor:ut&&F._colorsTexture!==null,instancing:ft,instancingColor:ft&&F.instanceColor!==null,instancingMorph:ft&&F.morphTexture!==null,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:jt,envMap:Xt,envMapMode:Xt&&et.mapping,envMapCubeUVHeight:X,aoMap:Zt,lightMap:qt,bumpMap:Ht,normalMap:le,displacementMap:ke,emissiveMap:Ye,normalMapObjectSpace:le&&v.normalMapType===hd,normalMapTangentSpace:le&&v.normalMapType===Yc,packedNormalMap:le&&v.normalMapType===Yc&&z_(v.normalMap.format),metalnessMap:Te,roughnessMap:Be,anisotropy:G,anisotropyMap:it,clearcoat:en,clearcoatMap:pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:st,dispersion:me,retroreflection:R,iridescence:_,iridescenceMap:ot,iridescenceThicknessMap:xt,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:_t,specularColorMap:Ot,specularIntensityMap:zt,transmission:Q,transmissionMap:Jt,thicknessMap:z,gradientMap:vt,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:yt,alphaHash:Tt,combine:v.combine,mapUv:Ut&&x(v.map.channel),aoMapUv:Zt&&x(v.aoMap.channel),lightMapUv:qt&&x(v.lightMap.channel),bumpMapUv:Ht&&x(v.bumpMap.channel),normalMapUv:le&&x(v.normalMap.channel),displacementMapUv:ke&&x(v.displacementMap.channel),emissiveMapUv:Ye&&x(v.emissiveMap.channel),metalnessMapUv:Te&&x(v.metalnessMap.channel),roughnessMapUv:Be&&x(v.roughnessMap.channel),anisotropyMapUv:it&&x(v.anisotropyMap.channel),clearcoatMapUv:pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(v.sheenRoughnessMap.channel),specularMapUv:_t&&x(v.specularMap.channel),specularColorMapUv:Ot&&x(v.specularColorMap.channel),specularIntensityMapUv:zt&&x(v.specularIntensityMap.channel),transmissionMapUv:Jt&&x(v.transmissionMap.channel),thicknessMapUv:z&&x(v.thicknessMap.channel),alphaMapUv:at&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(le||G),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Ut||at),fog:!!E,useFog:v.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&le===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:A,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===fe,decodeVideoTextureEmissive:Ye&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:lt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&v.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(b,v),w(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function f(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function w(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function I(v){let b=m[v.type],C;if(b){let L=ui[b];C=wd.clone(L.uniforms)}else C=v.uniforms;return C}function M(v,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new k_(i,b,v,s),c.push(C),h.set(b,C)),C}function S(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:I,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:P}}function V_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,g,p,f){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},i[t]=w):(w.id=u.id,w.object=u,w.geometry=m,w.material=x,w.materialVariant=a(u),w.groupOrder=g,w.renderOrder=u.renderOrder,w.z=p,w.group=f),t++,w}function l(u,m,x,g,p,f,w){w.reversedDepth===!0&&(p=-p);let I=o(u,m,x,g,p,f);x.transmission>0?n.push(I):x.transparent===!0?s.push(I):e.push(I)}function c(u,m,x,g,p,f){let w=o(u,m,x,g,p,f);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,m){e.length>1&&e.sort(u||H_),n.length>1&&n.sort(m||Wd),s.length>1&&s.sort(m||Wd)}function d(){for(let u=t,m=i.length;u<m;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function W_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xd,i.set(n,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function X_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new Kt};break;case"SpotLight":e={position:new j,direction:new j,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $_=0;function Y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z_(i){let t=new X_,e=q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);let s=new j,r=new De,a=new De;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,x=0,g=0,p=0,f=0,w=0,I=0,M=0,S=0,T=0,P=0,v=0,b=0,C=0;c.sort(Y_);for(let F=0,D=c.length;F<D;F++){let E=c[F],N=E.color,H=E.intensity,q=E.distance,et=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ki?et=E.shadow.map.texture:et=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=N.r*H,d+=N.g*H,u+=N.b*H;else if(E.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(E.sh.coefficients[X],H);C++}else if(E.isSunLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let nt=E.shadow,rt=e.get(E);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[x]=rt,n.sunShadowMap[x]=et;let Ct=nt.getViewportCount();for(let A=0;A<Ct;A++)n.sunShadowMatrix[g+A]=nt.getMatrix(A),n.sunShadowCascade[g+A]=nt._cascadeData[A];g+=Ct,x++}n.sun[m]=X,m++}else if(E.isDirectionalLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let nt=E.shadow,rt=e.get(E);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=E.shadow.matrix,S++}n.directional[p]=X,p++}else if(E.isSpotLight){let X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(N).multiplyScalar(H),X.distance=q,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,n.spot[w]=X;let nt=E.shadow;if(E.map&&(n.spotLightMap[v]=E.map,v++,nt.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[w]=nt.matrix,E.castShadow){let rt=e.get(E);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.spotShadow[w]=rt,n.spotShadowMap[w]=et,P++}w++}else if(E.isRectAreaLight){let X=t.get(E);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),n.rectArea[I]=X,I++}else if(E.isPointLight){let X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){let nt=E.shadow,rt=e.get(E);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,n.pointShadow[f]=rt,n.pointShadowMap[f]=et,n.pointShadowMatrix[f]=E.shadow.matrix,T++}n.point[f]=X,f++}else if(E.isHemisphereLight){let X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(H),X.groundColor.copy(E.groundColor).multiplyScalar(H),n.hemi[M]=X,M++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==f||L.spotLength!==w||L.rectAreaLength!==I||L.hemiLength!==M||L.numSunShadows!==x||L.numDirectionalShadows!==S||L.numPointShadows!==T||L.numSpotShadows!==P||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=p,n.spot.length=w,n.rectArea.length=I,n.point.length=f,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=m,L.directionalLength=p,L.pointLength=f,L.spotLength=w,L.rectAreaLength=I,L.hemiLength=M,L.numSunShadows=x,L.numDirectionalShadows=S,L.numPointShadows=T,L.numSpotShadows=P,L.numSpotMaps=v,L.numLightProbes=C,n.version=$_++)}function l(c,h){let d=0,u=0,m=0,x=0,g=0,p=0,f=h.matrixWorldInverse;for(let w=0,I=c.length;w<I;w++){let M=c[w];if(M.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(M.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let S=n.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function qd(i){let t=new Z_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function J_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qd(i),t.set(s,[o])):r>=a.length?(o=new qd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
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
}`,Q_=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],tv=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],$d=new De,aa=new j,fh=new j;function ev(i,t,e){let n=new Hr,s=new oe,r=new oe,a=new Ce,o=new po,l=new mo,c={},h=e.maxTextureSize,d={[Xi]:un,[un]:Xi,[Ln]:Ln},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:K_,fragmentShader:j_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new yn;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ve(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let f=this.type;this.render=function(T,P,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Gu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ci),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=f!==this.type;D&&P.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(N=>N.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,N=T.length;E<N;E++){let H=T[E],q=H.shadow;if(q===void 0){Gt("WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let et=q.getFrameExtents();s.multiply(et),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,q.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||D===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===tr){if(H.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pn(s.x,s.y,{format:Ki,type:Zn,minFilter:We,magFilter:We,generateMipmaps:!1}),q.map.texture.name=H.name+".shadowMap",q.map.depthTexture=new Gi(s.x,s.y,Yn),q.map.depthTexture.name=H.name+".shadowMapDepth",q.map.depthTexture.format=ri,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Je,q.map.depthTexture.magFilter=Je}else H.isPointLight?(q.map=new vl(s.x),q.map.depthTexture=new uo(s.x,$n)):(q.map=new pn(s.x,s.y),q.map.depthTexture=new Gi(s.x,s.y,$n)),q.map.depthTexture.name=H.name+".shadowMap",q.map.depthTexture.format=ri,this.type===Jr?(q.map.depthTexture.compareFunction=X?ml:pl,q.map.depthTexture.minFilter=We,q.map.depthTexture.magFilter=We):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Je,q.map.depthTexture.magFilter=Je);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let nt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();H.isPointLight!==!0&&q.updateMatrices(H,v);for(let rt=0;rt<nt;rt++){let Ct=q.getCamera(rt);if(H.isPointLight){let A=q.camera,O=q.matrix,k=H.distance||A.far;k!==A.far&&(A.far=k,A.updateProjectionMatrix()),aa.setFromMatrixPosition(H.matrixWorld),A.position.copy(aa),fh.copy(A.position),fh.add(Q_[rt]),A.up.copy(tv[rt]),A.lookAt(fh),A.updateMatrixWorld(),O.makeTranslation(-aa.x,-aa.y,-aa.z),$d.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),q._frustum.setFromProjectionMatrix($d,A.coordinateSystem,A.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(q.map),i.clear());let A=q.getViewport(rt);a.set(r.x*A.x,r.y*A.y,r.x*A.z,r.y*A.w),F.viewport(a)}n=q.getFrustum(rt),M(P,v,Ct,H,this.type)}q.isPointLightShadow!==!0&&this.type===tr&&w(q,v),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(b,C,L)};function w(T,P){let v=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new pn(s.x,s.y,{format:Ki,type:Zn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,v,u,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,v,m,g,null)}function I(T,P,v,b){let C=null,L=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=C.uuid,D=P.uuid,E=c[F];E===void 0&&(E={},c[F]=E);let N=E[D];N===void 0&&(N=C.clone(),E[D]=N,P.addEventListener("dispose",S)),C=N}if(C.visible=P.visible,C.wireframe=P.wireframe,b===tr?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:d[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=v}return C}function M(T,P,v,b,C){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===tr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let D=t.update(T),E=T.material;if(Array.isArray(E)){let N=D.groups;for(let H=0,q=N.length;H<q;H++){let et=N[H],X=E[et.materialIndex];if(X&&X.visible){let nt=I(T,X,b,C);T.onBeforeShadow(i,T,P,v,D,nt,et),i.renderBufferDirect(v,null,D,nt,T,et),T.onAfterShadow(i,T,P,v,D,nt,et)}}}else if(E.visible){let N=I(T,E,b,C);T.onBeforeShadow(i,T,P,v,D,N,null),i.renderBufferDirect(v,null,D,N,T,null),T.onAfterShadow(i,T,P,v,D,N,null)}}let F=T.children;for(let D=0,E=F.length;D<E;D++)M(F[D],P,v,b,C)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let b=c[v],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function nv(i,t){function e(){let z=!1,vt=new Ce,at=null,yt=new Ce(0,0,0,0);return{setMask:function(Tt){at!==Tt&&!z&&(i.colorMask(Tt,Tt,Tt,Tt),at=Tt)},setLocked:function(Tt){z=Tt},setClear:function(Tt,lt,kt,Lt,Me){Me===!0&&(Tt*=Lt,lt*=Lt,kt*=Lt),vt.set(Tt,lt,kt,Lt),yt.equals(vt)===!1&&(i.clearColor(Tt,lt,kt,Lt),yt.copy(vt))},reset:function(){z=!1,at=null,yt.set(-1,0,0,0)}}}function n(){let z=!1,vt=!1,at=null,yt=null,Tt=null;return{setReversed:function(lt){if(vt!==lt){let kt=t.get("EXT_clip_control");lt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return vt},setTest:function(lt){lt?W(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(lt){at!==lt&&!z&&(i.depthMask(lt),at=lt)},setFunc:function(lt){if(vt&&(lt=Md[lt]),yt!==lt){switch(lt){case Ka:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=lt}},setLocked:function(lt){z=lt},setClear:function(lt){Tt!==lt&&(Tt=lt,vt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){z=!1,at=null,yt=null,Tt=null,vt=!1}}}function s(){let z=!1,vt=null,at=null,yt=null,Tt=null,lt=null,kt=null,Lt=null,Me=null;return{setTest:function(ue){z||(ue?W(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(ue){vt!==ue&&!z&&(i.stencilMask(ue),vt=ue)},setFunc:function(ue,Bn,ei){(at!==ue||yt!==Bn||Tt!==ei)&&(i.stencilFunc(ue,Bn,ei),at=ue,yt=Bn,Tt=ei)},setOp:function(ue,Bn,ei){(lt!==ue||kt!==Bn||Lt!==ei)&&(i.stencilOp(ue,Bn,ei),lt=ue,kt=Bn,Lt=ei)},setLocked:function(ue){z=ue},setClear:function(ue){Me!==ue&&(i.clearStencil(ue),Me=ue)},reset:function(){z=!1,vt=null,at=null,yt=null,Tt=null,lt=null,kt=null,Lt=null,Me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],g=null,p=!1,f=null,w=null,I=null,M=null,S=null,T=null,P=null,v=new Kt(0,0,0),b=0,C=!1,L=null,F=null,D=null,E=null,N=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,et=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=et>=2);let nt=null,rt={},Ct=i.getParameter(i.SCISSOR_BOX),A=i.getParameter(i.VIEWPORT),O=new Ce().fromArray(Ct),k=new Ce().fromArray(A);function J(z,vt,at,yt){let Tt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(z,lt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<at;kt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(vt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return lt}let U={};U[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(Ys),Ht(!1),le(Ac),W(i.CULL_FACE),Zt(ci);function W(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function K(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ft(z,vt){return u[z]!==vt?(i.bindFramebuffer(z,vt),u[z]=vt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ut(z,vt){let at=x,yt=!1;if(z){at=m.get(vt),at===void 0&&(at=[],m.set(vt,at));let Tt=z.textures;if(at.length!==Tt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,kt=Tt.length;lt<kt;lt++)at[lt]=i.COLOR_ATTACHMENT0+lt;at.length=Tt.length,yt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,yt=!0);yt&&i.drawBuffers(at)}function Ut(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let jt={[ds]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[Wu]:i.FUNC_REVERSE_SUBTRACT};jt[Xu]=i.MIN,jt[qu]=i.MAX;let Xt={[$u]:i.ZERO,[Yu]:i.ONE,[Zu]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[Ku]:i.DST_ALPHA,[Ju]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[ju]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(z,vt,at,yt,Tt,lt,kt,Lt,Me,ue){if(z===ci){p===!0&&(K(i.BLEND),p=!1);return}if(p===!1&&(W(i.BLEND),p=!0),z!==Vu){if(z!==f||ue!==C){if((w!==ds||S!==ds)&&(i.blendEquation(i.FUNC_ADD),w=ds,S=ds),ue)switch(z){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",z);break}else switch(z){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",z);break}I=null,M=null,T=null,P=null,v.set(0,0,0),b=0,f=z,C=ue}return}Tt=Tt||vt,lt=lt||at,kt=kt||yt,(vt!==w||Tt!==S)&&(i.blendEquationSeparate(jt[vt],jt[Tt]),w=vt,S=Tt),(at!==I||yt!==M||lt!==T||kt!==P)&&(i.blendFuncSeparate(Xt[at],Xt[yt],Xt[lt],Xt[kt]),I=at,M=yt,T=lt,P=kt),(Lt.equals(v)===!1||Me!==b)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Me),v.copy(Lt),b=Me),f=z,C=!1}function qt(z,vt){z.side===Ln?K(i.CULL_FACE):W(i.CULL_FACE);let at=z.side===un;vt&&(at=!at),Ht(at),z.blending===qi&&z.transparent===!1?Zt(ci):Zt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let yt=z.stencilWrite;o.setTest(yt),yt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ye(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(z){L!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),L=z)}function le(z){z!==Bu?(W(i.CULL_FACE),z!==F&&(z===Ac?i.cullFace(i.BACK):z===zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),F=z}function ke(z){z!==D&&(q&&i.lineWidth(z),D=z)}function Ye(z,vt,at){z?(W(i.POLYGON_OFFSET_FILL),(E!==vt||N!==at)&&(E=vt,N=at,a.getReversed()&&(vt=-vt),i.polygonOffset(vt,at))):K(i.POLYGON_OFFSET_FILL)}function Te(z){z?W(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function Be(z){z===void 0&&(z=i.TEXTURE0+H-1),nt!==z&&(i.activeTexture(z),nt=z)}function G(z,vt,at){at===void 0&&(nt===null?at=i.TEXTURE0+H-1:at=nt);let yt=rt[at];yt===void 0&&(yt={type:void 0,texture:void 0},rt[at]=yt),(yt.type!==z||yt.texture!==vt)&&(nt!==at&&(i.activeTexture(at),nt=at),i.bindTexture(z,vt||U[z]),yt.type=z,yt.texture=vt)}function en(){let z=rt[nt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function _(){try{i.texSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function $(){try{i.texSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function pt(){try{i.texStorage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function gt(){try{i.texStorage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function st(){try{i.texImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function ot(){try{i.texImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function xt(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function Ft(z,vt){d[z]!==vt&&(i.pixelStorei(z,vt),d[z]=vt)}function bt(z){O.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),O.copy(z))}function _t(z){k.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),k.copy(z))}function Ot(z,vt){let at=c.get(vt);at===void 0&&(at=new WeakMap,c.set(vt,at));let yt=at.get(z);yt===void 0&&(yt=i.getUniformBlockIndex(vt,z.name),at.set(z,yt))}function zt(z,vt){let yt=c.get(vt).get(z);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,z.__bindingPointIndex),l.set(vt,yt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},nt=null,rt={},u={},m=new WeakMap,x=[],g=null,p=!1,f=null,w=null,I=null,M=null,S=null,T=null,P=null,v=new Kt(0,0,0),b=0,C=!1,L=null,F=null,D=null,E=null,N=null,O.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:K,bindFramebuffer:ft,drawBuffers:ut,useProgram:Ut,setBlending:Zt,setMaterial:qt,setFlipSided:Ht,setCullFace:le,setLineWidth:ke,setPolygonOffset:Ye,setScissorTest:Te,activeTexture:Be,bindTexture:G,unbindTexture:en,compressedTexImage2D:me,compressedTexImage3D:R,texImage2D:st,texImage3D:ot,pixelStorei:Ft,getParameter:xt,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:_,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:it,scissor:bt,viewport:_t,reset:Jt}}function iv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return x?new OffscreenCanvas(R,_):Fr("canvas")}function p(R,_,$){let Q=1,it=me(R);if((it.width>$||it.height>$)&&(Q=$/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pt=Math.floor(Q*it.width),gt=Math.floor(Q*it.height);u===void 0&&(u=g(pt,gt));let st=_?g(pt,gt):u;return st.width=pt,st.height=gt,st.getContext("2d").drawImage(R,0,0,pt,gt),Gt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+pt+"x"+gt+")."),st}else return"data"in R&&Gt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function f(R){return R.generateMipmaps}function w(R){i.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,_,$,Q,it,pt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;Q&&(gt=t.get("EXT_texture_norm16"),gt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=_;if(_===i.RED&&($===i.FLOAT&&(st=i.R32F),$===i.HALF_FLOAT&&(st=i.R16F),$===i.UNSIGNED_BYTE&&(st=i.R8),$===i.UNSIGNED_SHORT&&gt&&(st=gt.R16_EXT),$===i.SHORT&&gt&&(st=gt.R16_SNORM_EXT)),_===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.R8UI),$===i.UNSIGNED_SHORT&&(st=i.R16UI),$===i.UNSIGNED_INT&&(st=i.R32UI),$===i.BYTE&&(st=i.R8I),$===i.SHORT&&(st=i.R16I),$===i.INT&&(st=i.R32I)),_===i.RG&&($===i.FLOAT&&(st=i.RG32F),$===i.HALF_FLOAT&&(st=i.RG16F),$===i.UNSIGNED_BYTE&&(st=i.RG8),$===i.UNSIGNED_SHORT&&gt&&(st=gt.RG16_EXT),$===i.SHORT&&gt&&(st=gt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RG8UI),$===i.UNSIGNED_SHORT&&(st=i.RG16UI),$===i.UNSIGNED_INT&&(st=i.RG32UI),$===i.BYTE&&(st=i.RG8I),$===i.SHORT&&(st=i.RG16I),$===i.INT&&(st=i.RG32I)),_===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RGB8UI),$===i.UNSIGNED_SHORT&&(st=i.RGB16UI),$===i.UNSIGNED_INT&&(st=i.RGB32UI),$===i.BYTE&&(st=i.RGB8I),$===i.SHORT&&(st=i.RGB16I),$===i.INT&&(st=i.RGB32I)),_===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),$===i.UNSIGNED_INT&&(st=i.RGBA32UI),$===i.BYTE&&(st=i.RGBA8I),$===i.SHORT&&(st=i.RGBA16I),$===i.INT&&(st=i.RGBA32I)),_===i.RGB&&($===i.UNSIGNED_SHORT&&gt&&(st=gt.RGB16_EXT),$===i.SHORT&&gt&&(st=gt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),_===i.RGBA){let ot=pt?Nr:re.getTransfer(it);$===i.FLOAT&&(st=i.RGBA32F),$===i.HALF_FLOAT&&(st=i.RGBA16F),$===i.UNSIGNED_BYTE&&(st=ot===fe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&gt&&(st=gt.RGBA16_EXT),$===i.SHORT&&gt&&(st=gt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function S(R,_){let $;return R?_===null||_===$n||_===nr?$=i.DEPTH24_STENCIL8:_===Yn?$=i.DEPTH32F_STENCIL8:_===er&&($=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$n||_===nr?$=i.DEPTH_COMPONENT24:_===Yn?$=i.DEPTH_COMPONENT32F:_===er&&($=i.DEPTH_COMPONENT16),$}function T(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==We?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function P(R){let _=R.target;_.removeEventListener("dispose",P),b(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(R){let _=R.target;_.removeEventListener("dispose",v),L(_)}function b(R){let _=n.get(R);if(_.__webglInit===void 0)return;let $=R.source,Q=m.get($);if(Q){let it=Q[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(R),Object.keys(Q).length===0&&m.delete($)}n.remove(R)}function C(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let $=R.source,Q=m.get($);delete Q[_.__cacheKey],a.memory.textures--}function L(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let it=0;it<_.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(_.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let $=R.textures;for(let Q=0,it=$.length;Q<it;Q++){let pt=n.get($[Q]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove($[Q])}n.remove(R)}let F=0;function D(){F=0}function E(){return F}function N(R){F=R}function H(){let R=F;return R>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function q(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function et(R,_){let $=n.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){let Q=R.image;if(Q===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{K($,R,_);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+_)}function X(R,_){let $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){K($,R,_);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+_)}function nt(R,_){let $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){K($,R,_);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+_)}function rt(R,_){let $=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&$.__version!==R.version){ft($,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+_)}let Ct={[hs]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},A={[Je]:i.NEAREST,[ld]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},O={[dd]:i.NEVER,[xd]:i.ALWAYS,[fd]:i.LESS,[pl]:i.LEQUAL,[pd]:i.EQUAL,[ml]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function k(R,_){if(_.type===Yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===We||_.magFilter===Po||_.magFilter===jr||_.magFilter===Zi||_.minFilter===We||_.minFilter===Po||_.minFilter===jr||_.minFilter===Zi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ct[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ct[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ct[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,A[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,A[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,O[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==jr&&_.minFilter!==Zi||_.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function J(R,_){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",P));let Q=_.source,it=m.get(Q);it===void 0&&(it={},m.set(Q,it));let pt=q(_);if(pt!==R.__cacheKey){it[pt]===void 0&&(it[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),it[pt].usedTimes++;let gt=it[R.__cacheKey];gt!==void 0&&(it[R.__cacheKey].usedTimes--,gt.usedTimes===0&&C(_)),R.__cacheKey=pt,R.__webglTexture=it[pt].texture}return $}function U(R,_,$){return Math.floor(Math.floor(R/$)/_)}function W(R,_,$,Q){let pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,$,Q,_.data);else{pt.sort((Ft,bt)=>Ft.start-bt.start);let gt=0;for(let Ft=1;Ft<pt.length;Ft++){let bt=pt[gt],_t=pt[Ft],Ot=bt.start+bt.count,zt=U(_t.start,_.width,4),Jt=U(bt.start,_.width,4);_t.start<=Ot+1&&zt===Jt&&U(_t.start+_t.count-1,_.width,4)===zt?bt.count=Math.max(bt.count,_t.start+_t.count-bt.start):(++gt,pt[gt]=_t)}pt.length=gt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ft=0,bt=pt.length;Ft<bt;Ft++){let _t=pt[Ft],Ot=Math.floor(_t.start/4),zt=Math.ceil(_t.count/4),Jt=Ot%_.width,z=Math.floor(Ot/_.width),vt=zt,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Jt,z,vt,at,$,Q,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function K(R,_,$){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);let it=J(R,_),pt=_.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+$);let gt=n.get(pt);if(pt.version!==gt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let at=re.getPrimaries(re.workingColorSpace),yt=_.colorSpace===Si?null:re.getPrimaries(_.colorSpace),Tt=_.colorSpace===Si||at===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ot=p(_.image,!1,s.maxTextureSize);ot=en(_,ot);let xt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),bt=M(_.internalFormat,xt,Ft,_.normalized,_.colorSpace,_.isVideoTexture);k(Q,_);let _t,Ot=_.mipmaps,zt=_.isVideoTexture!==!0,Jt=gt.__version===void 0||it===!0,z=pt.dataReady,vt=T(_,ot);if(_.isDepthTexture)bt=S(_.format===Ji,_.type),Jt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,bt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,xt,Ft,null));else if(_.isDataTexture)if(Ot.length>0){zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,bt,Ot[0].width,Ot[0].height);for(let at=0,yt=Ot.length;at<yt;at++)_t=Ot[at],zt?z&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,at,bt,_t.width,_t.height,0,xt,Ft,_t.data);_.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(i.TEXTURE_2D,vt,bt,ot.width,ot.height),z&&W(_,ot,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,xt,Ft,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,bt,Ot[0].width,Ot[0].height,ot.depth);for(let at=0,yt=Ot.length;at<yt;at++)if(_t=Ot[at],_.format!==Dn)if(xt!==null)if(zt){if(z)if(_.layerUpdates.size>0){let Tt=nh(_t.width,_t.height,_.format,_.type);for(let lt of _.layerUpdates){let kt=_t.data.subarray(lt*Tt/_t.data.BYTES_PER_ELEMENT,(lt+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,lt,_t.width,_t.height,1,xt,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,ot.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,bt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,ot.depth,xt,Ft,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,bt,_t.width,_t.height,ot.depth,0,xt,Ft,_t.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,bt,Ot[0].width,Ot[0].height);for(let at=0,yt=Ot.length;at<yt;at++)_t=Ot[at],_.format!==Dn?xt!==null?zt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,at,bt,_t.width,_t.height,0,_t.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?z&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,at,bt,_t.width,_t.height,0,xt,Ft,_t.data)}else if(_.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,bt,ot.width,ot.height,ot.depth),z)if(_.layerUpdates.size>0){let at=nh(ot.width,ot.height,_.format,_.type);for(let yt of _.layerUpdates){let Tt=ot.data.subarray(yt*at/ot.data.BYTES_PER_ELEMENT,(yt+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,ot.width,ot.height,1,xt,Ft,Tt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,xt,Ft,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,ot.width,ot.height,ot.depth,0,xt,Ft,ot.data);else if(_.isData3DTexture)zt?(Jt&&e.texStorage3D(i.TEXTURE_3D,vt,bt,ot.width,ot.height,ot.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,xt,Ft,ot.data)):e.texImage3D(i.TEXTURE_3D,0,bt,ot.width,ot.height,ot.depth,0,xt,Ft,ot.data);else if(_.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(i.TEXTURE_2D,vt,bt,ot.width,ot.height);else{let at=ot.width,yt=ot.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,bt,at,yt,0,xt,Ft,null),at>>=1,yt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),ot.parentNode!==at){at.appendChild(ot),d.add(_),at.onpaint=yt=>{let Tt=yt.changedElements;for(let lt of d)Tt.includes(lt.image)&&(lt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let Tt=i.RGBA,lt=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,lt,kt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(zt&&Jt){let at=me(Ot[0]);e.texStorage2D(i.TEXTURE_2D,vt,bt,at.width,at.height)}for(let at=0,yt=Ot.length;at<yt;at++)_t=Ot[at],zt?z&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt,Ft,_t):e.texImage2D(i.TEXTURE_2D,at,bt,xt,Ft,_t);_.generateMipmaps=!1}else if(zt){if(Jt){let at=me(ot);e.texStorage2D(i.TEXTURE_2D,vt,bt,at.width,at.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,ot)}else e.texImage2D(i.TEXTURE_2D,0,bt,xt,Ft,ot);f(_)&&w(Q),gt.__version=pt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ft(R,_,$){if(_.image.length!==6)return;let Q=J(R,_),it=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+$);let pt=n.get(it);if(it.version!==pt.__version||Q===!0){e.activeTexture(i.TEXTURE0+$);let gt=re.getPrimaries(re.workingColorSpace),st=_.colorSpace===Si?null:re.getPrimaries(_.colorSpace),ot=_.colorSpace===Si||gt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let xt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ft=_.image[0]&&_.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!xt&&!Ft?bt[lt]=p(_.image[lt],!0,s.maxCubemapSize):bt[lt]=Ft?_.image[lt].image:_.image[lt],bt[lt]=en(_,bt[lt]);let _t=bt[0],Ot=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),Jt=M(_.internalFormat,Ot,zt,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,vt=pt.__version===void 0||Q===!0,at=it.dataReady,yt=T(_,_t);k(i.TEXTURE_CUBE_MAP,_);let Tt;if(xt){z&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Jt,_t.width,_t.height);for(let lt=0;lt<6;lt++){Tt=bt[lt].mipmaps;for(let kt=0;kt<Tt.length;kt++){let Lt=Tt[kt];_.format!==Dn?Ot!==null?z?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,0,0,Lt.width,Lt.height,Ot,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,Jt,Lt.width,Lt.height,0,Lt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,0,0,Lt.width,Lt.height,Ot,zt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt,Jt,Lt.width,Lt.height,0,Ot,zt,Lt.data)}}}else{if(Tt=_.mipmaps,z&&vt){Tt.length>0&&yt++;let lt=me(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ft){z?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,Ot,zt,bt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,bt[lt].width,bt[lt].height,0,Ot,zt,bt[lt].data);for(let kt=0;kt<Tt.length;kt++){let Me=Tt[kt].image[lt].image;z?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,0,0,Me.width,Me.height,Ot,zt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,Jt,Me.width,Me.height,0,Ot,zt,Me.data)}}else{z?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ot,zt,bt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,Ot,zt,bt[lt]);for(let kt=0;kt<Tt.length;kt++){let Lt=Tt[kt];z?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,0,0,Ot,zt,Lt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,kt+1,Jt,Ot,zt,Lt.image[lt])}}}f(_)&&w(i.TEXTURE_CUBE_MAP),pt.__version=it.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ut(R,_,$,Q,it,pt){let gt=r.convert($.format,$.colorSpace),st=r.convert($.type),ot=M($.internalFormat,gt,st,$.normalized,$.colorSpace),xt=n.get(_),Ft=n.get($);if(Ft.__renderTarget=_,!xt.__hasExternalTextures){let bt=Math.max(1,_.width>>pt),_t=Math.max(1,_.height>>pt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,pt,ot,bt,_t,_.depth,0,gt,st,null):e.texImage2D(it,pt,ot,bt,_t,0,gt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,Ft.__webglTexture,0,Te(_)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,Ft.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(R,_,$){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let Q=_.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,pt=S(_.stencilBuffer,it),gt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(_),pt,_.width,_.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(_),pt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,R)}else{let Q=_.textures;for(let it=0;it<Q.length;it++){let pt=Q[it],gt=r.convert(pt.format,pt.colorSpace),st=r.convert(pt.type),ot=M(pt.internalFormat,gt,st,pt.normalized,pt.colorSpace);Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(_),ot,_.width,_.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(R,_,$){let Q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(_.depthTexture);if(it.__renderTarget=_,(!it.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(it.__webglInit===void 0&&(it.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),k(i.TEXTURE_CUBE_MAP,_.depthTexture);let xt=r.convert(_.depthTexture.format),Ft=r.convert(_.depthTexture.type),bt;_.depthTexture.format===ri?bt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ji&&(bt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,bt,_.width,_.height,0,xt,Ft,null)}}else et(_.depthTexture,0);let pt=it.__webglTexture,gt=Te(_),st=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ot=_.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ri)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,pt,0);else if(_.depthTexture.format===Ji)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,pt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(R){let _=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=Q}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if($)for(let Q=0;Q<6;Q++)jt(_.__webglFramebuffer[Q],R,Q);else{let Q=R.texture.mipmaps;Q&&Q.length>0?jt(_.__webglFramebuffer[0],R,0):jt(_.__webglFramebuffer,R,0)}else if($){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ut(_.__webglDepthbuffer[Q],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}else{let Q=R.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ut(_.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(R,_,$){let Q=n.get(R);_!==void 0&&ut(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Xt(R)}function qt(R){let _=R.texture,$=n.get(R),Q=n.get(_);R.addEventListener("dispose",v);let it=R.textures,pt=R.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,a.memory.textures++),pt){$.__webglFramebuffer=[];for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer[st]=[];for(let ot=0;ot<_.mipmaps.length;ot++)$.__webglFramebuffer[st][ot]=i.createFramebuffer()}else $.__webglFramebuffer[st]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){$.__webglFramebuffer=[];for(let st=0;st<_.mipmaps.length;st++)$.__webglFramebuffer[st]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(gt)for(let st=0,ot=it.length;st<ot;st++){let xt=n.get(it[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Be(R)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let ot=it[st];$.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[st]);let xt=r.convert(ot.format,ot.colorSpace),Ft=r.convert(ot.type),bt=M(ot.internalFormat,xt,Ft,ot.normalized,ot.colorSpace,R.isXRRenderTarget===!0),_t=Te(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,bt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,$.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),k(i.TEXTURE_CUBE_MAP,_);for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)ut($.__webglFramebuffer[st][ot],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ot);else ut($.__webglFramebuffer[st],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);f(_)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let st=0,ot=it.length;st<ot;st++){let xt=it[st],Ft=n.get(xt),bt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ft.__webglTexture),k(bt,xt),ut($.__webglFramebuffer,R,xt,i.COLOR_ATTACHMENT0+st,bt,0),f(xt)&&w(bt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),k(st,_),_.mipmaps&&_.mipmaps.length>0)for(let ot=0;ot<_.mipmaps.length;ot++)ut($.__webglFramebuffer[ot],R,_,i.COLOR_ATTACHMENT0,st,ot);else ut($.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,st,0);f(_)&&w(st),e.unbindTexture()}R.depthBuffer&&Xt(R)}function Ht(R){let _=R.textures;for(let $=0,Q=_.length;$<Q;$++){let it=_[$];if(f(it)){let pt=I(R),gt=n.get(it).__webglTexture;e.bindTexture(pt,gt),w(pt),e.unbindTexture()}}}let le=[],ke=[];function Ye(R){if(R.samples>0){if(Be(R)===!1){let _=R.textures,$=R.width,Q=R.height,it=i.COLOR_BUFFER_BIT,pt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(R),st=_.length>1;if(st)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let ot=R.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ft=n.get(_[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,$,Q,0,0,$,Q,it,i.NEAREST),l===!0&&(le.length=0,ke.length=0,le.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(le.push(pt),ke.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);let Ft=n.get(_[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Te(R){return Math.min(s.maxSamples,R.samples)}function Be(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function G(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function en(R,_){let $=R.colorSpace,Q=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Dr&&$!==Si&&(re.getTransfer($)===fe?(Q!==Dn||it!==Sn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",$)),_}function me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.getTextureUnits=E,this.setTextureUnits=N,this.setTexture2D=et,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=rt,this.rebindTextures=Zt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function sv(i,t){function e(n,s=Si){let r,a=re.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===Dn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Bo||n===zo||n===Go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===ia||n===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Ho)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xo)return r.COMPRESSED_R11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===$o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===Zo||n===Jo||n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===sa||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:rv,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,x=null,g=typeof XRWebGLBinding<"u",p=new bh,f={},w=e.getContextAttributes(),I=null,M=null,S=[],T=[],P=new oe,v=null,b=null,C=new an;C.viewport=new Ce;let L=new an;L.viewport=new Ce;let F=[C,L],D=new Ao,E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=S[U];return W===void 0&&(W=new js,S[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=S[U];return W===void 0&&(W=new js,S[U]=W),W.getGripSpace()},this.getHand=function(U){let W=S[U];return W===void 0&&(W=new js,S[U]=W),W.getHandSpace()};function H(U){let W=T.indexOf(U.inputSource);if(W===-1)return;let K=S[W];K!==void 0&&(K.update(U.inputSource,U.frame,c||a),K.dispatchEvent({type:U.type,data:U.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",et);for(let U=0;U<S.length;U++){let W=T[U];W!==null&&(T[U]=null,S[U].disconnect(W))}E=null,N=null,p.reset();for(let U in f)delete f[U];if(t.setRenderTarget(I),m=null,u=null,d=null,s=null,M=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),b!==null){let U=b.camera;U.fov=b.fov,U.zoom=b.zoom,U.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",et),w.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,ft=null,ut=null;w.depth&&(ut=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=w.stencil?Ji:ri,ft=w.stencil?nr:$n);let Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new pn(u.textureWidth,u.textureHeight,{format:Dn,type:Sn,depthTexture:new Gi(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let K={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new pn(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(U){for(let W=0;W<U.removed.length;W++){let K=U.removed[W],ft=T.indexOf(K);ft>=0&&(T[ft]=null,S[ft].disconnect(K))}for(let W=0;W<U.added.length;W++){let K=U.added[W],ft=T.indexOf(K);if(ft===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=T.length){T.push(K),ft=Ut;break}else if(T[Ut]===null){T[Ut]=K,ft=Ut;break}if(ft===-1)break}let ut=S[ft];ut&&ut.connect(K)}}let X=new j,nt=new j;function rt(U,W,K){X.setFromMatrixPosition(W.matrixWorld),nt.setFromMatrixPosition(K.matrixWorld);let ft=X.distanceTo(nt),ut=W.projectionMatrix.elements,Ut=K.projectionMatrix.elements,jt=ut[14]/(ut[10]-1),Xt=ut[14]/(ut[10]+1),Zt=(ut[9]+1)/ut[5],qt=(ut[9]-1)/ut[5],Ht=(ut[8]-1)/ut[0],le=(Ut[8]+1)/Ut[0],ke=jt*Ht,Ye=jt*le,Te=ft/(-Ht+le),Be=Te*-Ht;if(W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Be),U.translateZ(Te),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ut[10]===-1)U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let G=jt+Te,en=Xt+Te,me=ke-Be,R=Ye+(ft-Be),_=Zt*Xt/en*G,$=qt*Xt/en*G;U.projectionMatrix.makePerspective(me,R,_,$,G,en),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Ct(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let W=U.near,K=U.far;p.texture!==null&&(p.depthNear>0&&(W=p.depthNear),p.depthFar>0&&(K=p.depthFar)),D.near=L.near=C.near=W,D.far=L.far=C.far=K,(E!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),E=D.near,N=D.far),D.layers.mask=U.layers.mask|6,C.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let ft=U.parent,ut=D.cameras;Ct(D,ft);for(let Ut=0;Ut<ut.length;Ut++)Ct(ut[Ut],ft);ut.length===2?rt(D,C,L):D.projectionMatrix.copy(C.projectionMatrix),b===null&&U.isPerspectiveCamera&&(b={camera:U,fov:U.fov,zoom:U.zoom}),A(U,D,ft)};function A(U,W,K){K===null?U.matrix.copy(W.matrixWorld):(U.matrix.copy(K.matrixWorld),U.matrix.invert(),U.matrix.multiply(W.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Js*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(U){return f[U]};let O=null;function k(U,W){if(h=W.getViewerPose(c||a),x=W,h!==null){let K=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let ft=!1;K.length!==D.cameras.length&&(D.cameras.length=0,ft=!0);for(let Xt=0;Xt<K.length;Xt++){let Zt=K[Xt],qt=null;if(m!==null)qt=m.getViewport(Zt);else{let le=d.getViewSubImage(u,Zt);qt=le.viewport,Xt===0&&(t.setRenderTargetTextures(M,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(M))}let Ht=F[Xt];Ht===void 0&&(Ht=new an,Ht.layers.enable(Xt),Ht.viewport=new Ce,F[Xt]=Ht),Ht.matrix.fromArray(Zt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Zt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(qt.x,qt.y,qt.width,qt.height),Xt===0&&(D.matrix.copy(Ht.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ft===!0&&D.cameras.push(Ht)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let Xt=d.getDepthInformation(K[0]);Xt&&Xt.isValid&&Xt.texture&&p.init(Xt,s.renderState)}if(ut&&ut.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Xt=0;Xt<K.length;Xt++){let Zt=K[Xt].camera;if(Zt){let qt=f[Zt];qt||(qt=new qr,f[Zt]=qt);let Ht=d.getCameraImage(Zt);qt.sourceTexture=Ht}}}}for(let K=0;K<S.length;K++){let ft=T[K],ut=S[K];ft!==null&&ut!==void 0&&ut.update(ft,W,c||a)}O&&O(U,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),x=null}let J=new Yd;J.setAnimationLoop(k),this.setAnimationLoop=function(U){O=U},this.dispose=function(){}}},ov=new De,tf=new Yt;tf.set(-1,0,0,0,1,0,0,0,1);function lv(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Qc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,I,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,w,I):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===un&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===un&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=t.get(f),I=w.envMap,M=w.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tf),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,I){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=I*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){let w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let T=S.program;n.uniformBlockBinding(M,T)}function c(M,S){let T=s[M.id];T===void 0&&(p(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",w));let P=S.program;n.updateUBOMapping(M,P);let v=t.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let S=d();M.__bindingPointIndex=S;let T=i.createBuffer(),P=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=s[M.id],T=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,b=T.length;v<b;v++){let C=T[v];if(Array.isArray(C))for(let L=0,F=C.length;L<F;L++)m(C[L],v,L,P);else m(C,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,S,T,P){if(g(M,S,T,P)===!0){let v=M.__offset,b=M.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){let F=b[L],D=f(F);x(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function x(M,S,T){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,T)}function g(M,S,T,P){let v=M.value,b=S+"_"+T;if(P[b]===void 0)return typeof v=="number"||typeof v=="boolean"?P[b]=v:ArrayBuffer.isView(v)?P[b]=v.slice():P[b]=v.clone(),!0;{let C=P[b];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return P[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(M){let S=M.uniforms,T=0,P=16;for(let b=0,C=S.length;b<C;b++){let L=Array.isArray(S[b])?S[b]:[S[b]];for(let F=0,D=L.length;F<D;F++){let E=L[F],N=Array.isArray(E.value)?E.value:[E.value];for(let H=0,q=N.length;H<q;H++){let et=N[H],X=f(et),nt=T%P,rt=nt%X.boundary,Ct=nt+rt;T+=rt,Ct!==0&&P-Ct<X.storage&&(T+=P-Ct),E.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,T+=X.storage}}}let v=T%P;return v>0&&(T+=P-v),M.__size=T,M.__cache={},this}function f(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",M),S}function w(M){let S=M.target;S.removeEventListener("dispose",w);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function I(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:I}}var hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function uv(){return hi===null&&(hi=new co(hv,16,16,Ki,Zn),hi.name="DFG_LUT",hi.minFilter=We,hi.magFilter=We,hi.wrapS=si,hi.wrapT=si,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var yl=class{constructor(t={}){let{canvas:e=vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Sn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let g=m,p=new Set([Oo,Fo,Uo]),f=new Set([Sn,$n,er,nr,Do,No]),w=new Uint32Array(4),I=new Int32Array(4),M=new j,S=null,T=null,P=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,D=null,E=null,N=null;this._outputColorSpace=Le;let H=0,q=0,et=null,X=-1,nt=null,rt=new Ce,Ct=new Ce,A=null,O=new Kt(0),k=0,J=e.width,U=e.height,W=1,K=null,ft=null,ut=new Ce(0,0,J,U),Ut=new Ce(0,0,J,U),jt=!1,Xt=new Hr,Zt=!1,qt=!1,Ht=new De,le=new j,ke=new Ce,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Be(){return et===null?W:1}let G=n;function en(y,B){return e.getContext(y,B)}let me,R,_,$,Q,it,pt,gt,st,ot,xt,Ft,bt,_t,Ot,zt,Jt,z,vt,at,yt,Tt,lt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),G===null){let B="webgl2";if(G=en(B,y),G===null)throw en(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(y){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Wt("WebGLRenderer: "+y.message),y}function kt(){me=new _x(G),me.init(),yt=new sv(G,me),R=new lx(G,me,t,yt),_=new nv(G,me),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),D=G.createFramebuffer(),E=G.createFramebuffer(),N=G.createFramebuffer(),$=new bx(G),Q=new V_,it=new iv(G,me,_,Q,R,yt,$),pt=new xx(C),gt=new Sm(G),Tt=new ax(G,gt),st=new vx(G,gt,$,Tt),ot=new Sx(G,st,gt,Tt,$),z=new Mx(G,R,it),Ot=new cx(Q),xt=new G_(C,pt,me,R,Tt,Ot),Ft=new lv(C,Q),bt=new W_,_t=new J_(me),Jt=new rx(C,pt,_,ot,x,l),zt=new ev(C,ot,R),lt=new cv(G,$,R,_),vt=new ox(G,me,$),at=new yx(G,me,$),$.programs=xt.programs,C.capabilities=R,C.extensions=me,C.properties=Q,C.renderLists=bt,C.shadowMap=zt,C.state=_,C.info=$}g!==Sn&&(b=new Tx(g,e.width,e.height,o,s,r));let Lt=new Mh(C,G);this.xr=Lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let y=me.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=me.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(J,U,!1))},this.getSize=function(y){return y.set(J,U)},this.setSize=function(y,B,tt=!0){if(Lt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,U=B,e.width=Math.floor(y*W),e.height=Math.floor(B*W),tt===!0&&(e.style.width=y+"px",e.style.height=B+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(J*W,U*W).floor()},this.setDrawingBufferSize=function(y,B,tt){J=y,U=B,W=tt,e.width=Math.floor(y*tt),e.height=Math.floor(B*tt),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(g===Sn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(rt)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,B,tt,Y){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,B,tt,Y),_.viewport(rt.copy(ut).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(Ut)},this.setScissor=function(y,B,tt,Y){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,B,tt,Y),_.scissor(Ct.copy(Ut).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){_.setScissorTest(jt=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,tt=!0){let Y=0;if(y){let Z=!1;if(et!==null){let wt=et.texture.format;Z=p.has(wt)}if(Z){let wt=et.texture.type,Rt=f.has(wt),St=Jt.getClearColor(),It=Jt.getClearAlpha(),Dt=St.r,Qt=St.g,ie=St.b;Rt?(w[0]=Dt,w[1]=Qt,w[2]=ie,w[3]=It,G.clearBufferuiv(G.COLOR,0,w)):(I[0]=Dt,I[1]=Qt,I[2]=ie,I[3]=It,G.clearBufferiv(G.COLOR,0,I))}else Y|=G.COLOR_BUFFER_BIT}B&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Jt.dispose(),bt.dispose(),_t.dispose(),Q.dispose(),pt.dispose(),ot.dispose(),Tt.dispose(),lt.dispose(),xt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",lu),Lt.removeEventListener("sessionend",cu),ss.stop()};function Me(y){y.preventDefault(),Jc("WebGLRenderer: Context Lost."),L=!0}function ue(){Jc("WebGLRenderer: Context Restored."),L=!1;let y=$.autoReset,B=zt.enabled,tt=zt.autoUpdate,Y=zt.needsUpdate,Z=zt.type;kt(),$.autoReset=y,zt.enabled=B,zt.autoUpdate=tt,zt.needsUpdate=Y,zt.type=Z}function Bn(y){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ei(y){let B=y.target;B.removeEventListener("dispose",ei),vp(B)}function vp(y){yp(y),Q.remove(y)}function yp(y){let B=Q.get(y).programs;B!==void 0&&(B.forEach(function(tt){xt.releaseProgram(tt)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,tt,Y,Z,wt){B===null&&(B=Ye);let Rt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,St=Sp(y,B,tt,Y,Z);_.setMaterial(Y,Rt);let It=tt.index,Dt=1;if(Y.wireframe===!0){if(It=st.getWireframeAttribute(tt),It===void 0)return;Dt=2}let Qt=tt.drawRange,ie=tt.attributes.position,Pt=Qt.start*Dt,de=(Qt.start+Qt.count)*Dt;wt!==null&&(Pt=Math.max(Pt,wt.start*Dt),de=Math.min(de,(wt.start+wt.count)*Dt)),It!==null?(Pt=Math.max(Pt,0),de=Math.min(de,It.count)):ie!=null&&(Pt=Math.max(Pt,0),de=Math.min(de,ie.count));let ze=de-Pt;if(ze<0||ze===1/0)return;Tt.setup(Z,Y,St,tt,It);let Ee,ve=vt;if(It!==null&&(Ee=gt.get(It),ve=at,ve.setIndex(Ee)),Z.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*Be()),ve.setMode(G.LINES)):ve.setMode(G.TRIANGLES);else if(Z.isLine){let nn=Y.linewidth;nn===void 0&&(nn=1),_.setLineWidth(nn*Be()),Z.isLineSegments?ve.setMode(G.LINES):Z.isLineLoop?ve.setMode(G.LINE_LOOP):ve.setMode(G.LINE_STRIP)}else Z.isPoints?ve.setMode(G.POINTS):Z.isSprite&&ve.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(me.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let nn=Z._multiDrawStarts,At=Z._multiDrawCounts,cn=Z._multiDrawCount,ce=It?gt.get(It).bytesPerElement:1,Rn=Q.get(Y).currentProgram.getUniforms();for(let ni=0;ni<cn;ni++)Rn.setValue(G,"_gl_DrawID",ni),ve.render(nn[ni]/ce,At[ni])}else if(Z.isInstancedMesh)ve.renderInstances(Pt,ze,Z.count);else if(tt.isInstancedBufferGeometry){let nn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,nn);ve.renderInstances(Pt,ze,At)}else ve.render(Pt,ze)};function ou(y,B,tt,Y){F!==null&&y.isNodeMaterial&&F.setObject(Y,y),Zt===!0&&Ot.setState(y,tt,!1),y.transparent===!0&&y.side===Ln&&y.forceSinglePass===!1?(y.side=un,y.needsUpdate=!0,Aa(y,B,Y),y.side=Xi,y.needsUpdate=!0,Aa(y,B,Y),y.side=Ln):Aa(y,B,Y)}this.compile=function(y,B,tt=null){tt===null&&(tt=y),F!==null&&F.renderStart(y,B,tt),T=_t.get(tt),T.init(B),v.push(T),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),y!==tt&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),qt=this.localClippingEnabled,Zt=Ot.init(this.clippingPlanes,qt),Zt===!0&&Ot.setGlobalState(this.clippingPlanes,B),F!==null&&zt.render(T.state.shadowsArray,tt,B);let Y=new Set;return y.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let wt=Z.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let St=wt[Rt];ou(St,tt,B,Z),Y.add(St)}else ou(wt,tt,B,Z),Y.add(wt)}),T=v.pop(),F!==null&&F.renderEnd(),Y},this.compileAsync=function(y,B,tt=null){let Y=this.compile(y,B,tt);return new Promise(Z=>{function wt(){if(Y.forEach(function(Rt){let It=Q.get(Rt).currentProgram;(It===void 0||It.isReady())&&Y.delete(Rt)}),Y.size===0){Z(y);return}setTimeout(wt,10)}me.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let jl=null;function bp(y){jl&&jl(y)}function lu(){ss.stop()}function cu(){ss.start()}let ss=new Yd;ss.setAnimationLoop(bp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(y){jl=y,Lt.setAnimationLoop(y),y===null?ss.stop():ss.start()},Lt.addEventListener("sessionstart",lu),Lt.addEventListener("sessionend",cu),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(y,B);let tt=Lt.enabled===!0&&Lt.isPresenting===!0,Y=b!==null&&(et===null||tt)&&b.begin(C,et);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(B),B=Lt.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,B,et),T=_t.get(y,v.length),T.init(B),T.state.textureUnits=it.getTextureUnits(),v.push(T),Ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Xt.setFromProjectionMatrix(Ht,Wn,B.reversedDepth),qt=this.localClippingEnabled,Zt=Ot.init(this.clippingPlanes,qt),S=bt.get(y,P.length),S.init(),P.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&Ql(Rt,B,-1/0,C.sortObjects)}Ql(y,B,0,C.sortObjects),S.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&S.sort(K,ft),Te=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Te&&Jt.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Ot.beginShadows();let Z=T.state.shadowsArray;if(zt.render(Z,y,B),Zt===!0&&Ot.endShadows(),(Y&&b.hasRenderPass())===!1){let Rt=S.opaque,St=S.transmissive;if(T.setupLights(),B.isArrayCamera){let It=B.cameras;if(St.length>0)for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let ie=It[Dt];uu(Rt,St,y,ie)}Te&&Jt.render(y);for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let ie=It[Dt];hu(S,y,ie,ie.viewport)}}else St.length>0&&uu(Rt,St,y,B),Te&&Jt.render(y),hu(S,y,B)}et!==null&&q===0&&(it.updateMultisampleRenderTarget(et),it.updateRenderTargetMipmap(et)),Y&&b.end(C),y.isScene===!0&&y.onAfterRender(C,y,B),Tt.resetDefaultState(),X=-1,nt=null,v.pop(),v.length>0?(T=v[v.length-1],it.setTextureUnits(T.state.textureUnits),Zt===!0&&Ot.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,F!==null&&F.renderEnd()};function Ql(y,B,tt,Y){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)tt=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Xt)){Y&&ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ht);let Rt=ot.update(y),St=y.material;St.visible&&S.push(y,Rt,St,tt,ke.z,null,B)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Xt))){let Rt=ot.update(y),St=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ke.copy(y.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ke.copy(Rt.boundingSphere.center)),ke.applyMatrix4(y.matrixWorld).applyMatrix4(Ht)),Array.isArray(St)){let It=Rt.groups;for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let ie=It[Dt],Pt=St[ie.materialIndex];Pt&&Pt.visible&&S.push(y,Rt,Pt,tt,ke.z,ie,B)}}else St.visible&&S.push(y,Rt,St,tt,ke.z,null,B)}}let wt=y.children;for(let Rt=0,St=wt.length;Rt<St;Rt++)Ql(wt[Rt],B,tt,Y)}function hu(y,B,tt,Y){let{opaque:Z,transmissive:wt,transparent:Rt}=y;T.setupLightsView(tt),Zt===!0&&Ot.setGlobalState(C.clippingPlanes,tt),Y&&_.viewport(rt.copy(Y)),Z.length>0&&Ea(Z,B,tt),wt.length>0&&Ea(wt,B,tt),Rt.length>0&&Ea(Rt,B,tt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function uu(y,B,tt,Y){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Pt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new pn(1,1,{generateMipmaps:!0,type:Pt?Zn:Sn,minFilter:Zi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let wt=T.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||rt;wt.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let St=C.getRenderTarget(),It=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(O),k=C.getClearAlpha(),k<1&&C.setClearColor(16777215,.5),C.clear(),Te&&Jt.render(tt);let Qt=C.toneMapping;C.toneMapping=qn;let ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),Zt===!0&&Ot.setGlobalState(C.clippingPlanes,Y),Ea(y,tt,Y),it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let de=0,ze=B.length;de<ze;de++){let Ee=B[de],{object:ve,geometry:nn,material:At,group:cn}=Ee;if(At.side===Ln&&ve.layers.test(Y.layers)){let ce=At.side;At.side=un,At.needsUpdate=!0,du(ve,tt,Y,nn,At,cn),At.side=ce,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt))}C.setRenderTarget(St,It,Dt),C.setClearColor(O,k),ie!==void 0&&(Y.viewport=ie),C.toneMapping=Qt}function Ea(y,B,tt){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,wt=y.length;Z<wt;Z++){let Rt=y[Z],{object:St,geometry:It,group:Dt}=Rt,Qt=Rt.material;Qt.allowOverride===!0&&Y!==null&&(Qt=Y),St.layers.test(tt.layers)&&du(St,B,tt,It,Qt,Dt)}}function du(y,B,tt,Y,Z,wt){F!==null&&Z.isNodeMaterial&&F.setObject(y,Z),y.onBeforeRender(C,B,tt,Y,Z,wt),y.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(C,B,tt,Y,y,wt),Z.transparent===!0&&Z.side===Ln&&Z.forceSinglePass===!1?(Z.side=un,Z.needsUpdate=!0,C.renderBufferDirect(tt,B,Y,Z,y,wt),Z.side=Xi,Z.needsUpdate=!0,C.renderBufferDirect(tt,B,Y,Z,y,wt),Z.side=Ln):C.renderBufferDirect(tt,B,Y,Z,y,wt),y.onAfterRender(C,B,tt,Y,Z,wt)}function Aa(y,B,tt){B.isScene!==!0&&(B=Ye);let Y=Q.get(y),Z=T.state.lights,wt=T.state.shadowsArray,Rt=Z.state.version,St=xt.getParameters(y,Z.state,wt,B,tt,T.state.lightProbeGridArray),It=xt.getProgramCacheKey(St),Dt=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Qt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=pt.get(y.envMap||Y.environment,Qt),Y.envMapRotation=Y.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",ei),Dt=new Map,Y.programs=Dt);let ie=Dt.get(It);if(ie!==void 0){if(Y.currentProgram===ie&&Y.lightsStateVersion===Rt)return pu(y,St),ie}else St.uniforms=xt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,tt,St),y.onBeforeCompile(St,C),ie=xt.acquireProgram(St,It),Dt.set(It,ie),Y.uniforms=St.uniforms;let Pt=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=Ot.uniform),pu(y,St),Y.needsLights=Tp(y),Y.lightsStateVersion=Rt,Y.needsLights&&(Pt.ambientLightColor.value=Z.state.ambient,Pt.lightProbe.value=Z.state.probe,Pt.sunLights.value=Z.state.sun,Pt.sunLightShadows.value=Z.state.sunShadow,Pt.directionalLights.value=Z.state.directional,Pt.directionalLightShadows.value=Z.state.directionalShadow,Pt.spotLights.value=Z.state.spot,Pt.spotLightShadows.value=Z.state.spotShadow,Pt.rectAreaLights.value=Z.state.rectArea,Pt.ltc_1.value=Z.state.rectAreaLTC1,Pt.ltc_2.value=Z.state.rectAreaLTC2,Pt.pointLights.value=Z.state.point,Pt.pointLightShadows.value=Z.state.pointShadow,Pt.hemisphereLights.value=Z.state.hemi,Pt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Pt.sunShadowCascade.value=Z.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Z.state.spotLightMatrix,Pt.spotLightMap.value=Z.state.spotLightMap,Pt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=ie,Y.uniformsList=null,ie}function fu(y){if(y.uniformsList===null){let B=y.currentProgram.getUniforms();y.uniformsList=ar.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function pu(y,B){let tt=Q.get(y);tt.outputColorSpace=B.outputColorSpace,tt.batching=B.batching,tt.batchingColor=B.batchingColor,tt.instancing=B.instancing,tt.instancingColor=B.instancingColor,tt.instancingMorph=B.instancingMorph,tt.skinning=B.skinning,tt.morphTargets=B.morphTargets,tt.morphNormals=B.morphNormals,tt.morphColors=B.morphColors,tt.morphTargetsCount=B.morphTargetsCount,tt.numClippingPlanes=B.numClippingPlanes,tt.numIntersection=B.numClipIntersection,tt.vertexAlphas=B.vertexAlphas,tt.vertexTangents=B.vertexTangents,tt.toneMapping=B.toneMapping}function Mp(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let tt=0,Y=y.length;tt<Y;tt++){let Z=y[tt];if(Z.texture!==null&&Z.boundingBox.containsPoint(M))return Z}return null}function Sp(y,B,tt,Y,Z){B.isScene!==!0&&(B=Ye),it.resetTextureUnits();let wt=B.fog,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,St=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,It=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Dt=pt.get(Y.envMap||Rt,It),Qt=Y.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ie=!!tt.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!tt.morphAttributes.position,de=!!tt.morphAttributes.normal,ze=!!tt.morphAttributes.color,Ee=qn;Y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ee=C.toneMapping);let ve=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,nn=ve!==void 0?ve.length:0,At=Q.get(Y),cn=T.state.lights;if(Zt===!0&&(qt===!0||y!==nt)){let Se=y===nt&&Y.id===X;Ot.setState(Y,y,Se)}let ce=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==cn.state.version||At.outputColorSpace!==St||Z.isBatchedMesh&&At.batching===!1||!Z.isBatchedMesh&&At.batching===!0||Z.isBatchedMesh&&At.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&At.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&At.instancing===!1||!Z.isInstancedMesh&&At.instancing===!0||Z.isSkinnedMesh&&At.skinning===!1||!Z.isSkinnedMesh&&At.skinning===!0||Z.isInstancedMesh&&At.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&At.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&At.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&At.instancingMorph===!1&&Z.morphTexture!==null||At.envMap!==Dt||Y.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ot.numPlanes||At.numIntersection!==Ot.numIntersection)||At.vertexAlphas!==Qt||At.vertexTangents!==ie||At.morphTargets!==Pt||At.morphNormals!==de||At.morphColors!==ze||At.toneMapping!==Ee||At.morphTargetsCount!==nn||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,At.__version=Y.version);let Rn=At.currentProgram;ce===!0&&(Rn=Aa(Y,B,Z),F&&Y.isNodeMaterial&&F.onUpdateProgram(Y,Rn,At));let ni=!1,Ri=!1,Ps=!1,_e=Rn.getUniforms(),Ue=At.uniforms;if(_.useProgram(Rn.program)&&(ni=!0,Ri=!0,Ps=!0),Y.id!==X&&(X=Y.id,Ri=!0),At.needsLights){let Se=Mp(T.state.lightProbeGridArray,Z);At.lightProbeGrid!==Se&&(At.lightProbeGrid=Se,Ri=!0)}if(ni||nt!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),_e.setValue(G,"projectionMatrix",y.projectionMatrix),_e.setValue(G,"viewMatrix",y.matrixWorldInverse);let Pi=_e.map.cameraPosition;Pi!==void 0&&Pi.setValue(G,le.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&_e.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_e.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,Ri=!0,Ps=!0)}if(At.needsLights&&(cn.state.sunShadowMap.length>0&&_e.setValue(G,"sunShadowMap",cn.state.sunShadowMap,it),cn.state.directionalShadowMap.length>0&&_e.setValue(G,"directionalShadowMap",cn.state.directionalShadowMap,it),cn.state.spotShadowMap.length>0&&_e.setValue(G,"spotShadowMap",cn.state.spotShadowMap,it),cn.state.pointShadowMap.length>0&&_e.setValue(G,"pointShadowMap",cn.state.pointShadowMap,it)),Z.isSkinnedMesh){_e.setOptional(G,Z,"bindMatrix"),_e.setOptional(G,Z,"bindMatrixInverse");let Se=Z.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),_e.setValue(G,"boneTexture",Se.boneTexture,it))}Z.isBatchedMesh&&(_e.setOptional(G,Z,"batchingTexture"),_e.setValue(G,"batchingTexture",Z._matricesTexture,it),_e.setOptional(G,Z,"batchingIdTexture"),_e.setValue(G,"batchingIdTexture",Z._indirectTexture,it),_e.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&_e.setValue(G,"batchingColorTexture",Z._colorsTexture,it));let Ii=tt.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&z.update(Z,tt,Rn),(Ri||At.receiveShadow!==Z.receiveShadow)&&(At.receiveShadow=Z.receiveShadow,_e.setValue(G,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Ue.envMapIntensity.value=B.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=uv()),Ri){if(_e.setValue(G,"toneMappingExposure",C.toneMappingExposure),At.needsLights&&wp(Ue,Ps),wt&&Y.fog===!0&&Ft.refreshFogUniforms(Ue,wt),Ft.refreshMaterialUniforms(Ue,Y,W,U,T.state.transmissionRenderTarget[y.id]),At.needsLights&&At.lightProbeGrid){let Se=At.lightProbeGrid;Ue.probesSH.value=Se.texture,Ue.probesMin.value.copy(Se.boundingBox.min),Ue.probesMax.value.copy(Se.boundingBox.max),Ue.probesResolution.value.copy(Se.resolution)}ar.upload(G,fu(At),Ue,it)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ar.upload(G,fu(At),Ue,it),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_e.setValue(G,"center",Z.center),_e.setValue(G,"modelViewMatrix",Z.modelViewMatrix),_e.setValue(G,"normalMatrix",Z.normalMatrix),_e.setValue(G,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Se=Y.uniformsGroups;for(let Pi=0,Ls=Se.length;Pi<Ls;Pi++){let gu=Se[Pi];lt.update(gu,Rn),lt.bind(gu,Rn)}}return Rn}function wp(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.sunLights.needsUpdate=B,y.sunLightShadows.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Tp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(y,B,tt){let Y=Q.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Q.get(y.texture).__webglTexture=B,Q.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:tt,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){let tt=Q.get(y);tt.__webglFramebuffer=B,tt.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,tt=0){et=y,H=B,q=tt;let Y=null,Z=!1,wt=!1;if(y){let St=Q.get(y);if(St.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(G.FRAMEBUFFER,St.__webglFramebuffer),rt.copy(y.viewport),Ct.copy(y.scissor),A=y.scissorTest,_.viewport(rt),_.scissor(Ct),_.setScissorTest(A),X=-1;return}else if(St.__webglFramebuffer===void 0)it.setupRenderTarget(y);else if(St.__hasExternalTextures)it.rebindTextures(y,Q.get(y.texture).__webglTexture,Q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Qt=y.depthTexture;if(St.__boundDepthTexture!==Qt){if(Qt!==null&&Q.has(Qt)&&(y.width!==Qt.image.width||y.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(y)}}let It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let Dt=Q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[B])?Y=Dt[B][tt]:Y=Dt[B],Z=!0):y.samples>0&&it.useMultisampledRTT(y)===!1?Y=Q.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?Y=Dt[tt]:Y=Dt,rt.copy(y.viewport),Ct.copy(y.scissor),A=y.scissorTest}else rt.copy(ut).multiplyScalar(W).floor(),Ct.copy(Ut).multiplyScalar(W).floor(),A=jt;if(tt!==0&&(Y=D),_.bindFramebuffer(G.FRAMEBUFFER,Y)&&_.drawBuffers(y,Y),_.viewport(rt),_.scissor(Ct),_.setScissorTest(A),Z){let St=Q.get(y.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,tt)}else if(wt){let St=B;for(let It=0;It<y.textures.length;It++){let Dt=Q.get(y.textures[It]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+It,Dt.__webglTexture,tt,St)}}else if(y!==null&&tt!==0){let St=Q.get(y.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,St.__webglTexture,tt)}X=-1};function mu(y){let B=Q.get(y);return(B.__readFormat!==y.format||B.__readType!==y.type)&&(B.__readFormat=y.format,B.__readType=y.type,B.__formatReadable=R.textureFormatReadable(y.format),B.__typeReadable=R.textureTypeReadable(y.type)),B}this.readRenderTargetPixels=function(y,B,tt,Y,Z,wt,Rt,St=0){if(!(y&&y.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){_.bindFramebuffer(G.FRAMEBUFFER,It);try{let Dt=y.textures[St],Qt=Dt.format,ie=Dt.type;y.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+St);let Pt=mu(Dt);if(Pt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-Y&&tt>=0&&tt<=y.height-Z&&G.readPixels(B,tt,Y,Z,yt.convert(Qt),yt.convert(ie),wt)}finally{let Dt=et!==null?Q.get(et).__webglFramebuffer:null;_.bindFramebuffer(G.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,B,tt,Y,Z,wt,Rt,St=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(B>=0&&B<=y.width-Y&&tt>=0&&tt<=y.height-Z){_.bindFramebuffer(G.FRAMEBUFFER,It);let Dt=y.textures[St],Qt=Dt.format,ie=Dt.type;y.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+St);let Pt=mu(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),G.readPixels(B,tt,Y,Z,yt.convert(Qt),yt.convert(ie),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let ze=et!==null?Q.get(et).__webglFramebuffer:null;_.bindFramebuffer(G.FRAMEBUFFER,ze);let Ee=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await bd(G,Ee,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,de),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(de),G.deleteSync(Ee),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,tt=0){let Y=Math.pow(2,-tt),Z=Math.floor(y.image.width*Y),wt=Math.floor(y.image.height*Y),Rt=B!==null?B.x:0,St=B!==null?B.y:0;it.setTexture2D(y,0),G.copyTexSubImage2D(G.TEXTURE_2D,tt,0,0,Rt,St,Z,wt),_.unbindTexture()},this.copyTextureToTexture=function(y,B,tt=null,Y=null,Z=0,wt=0){let Rt,St,It,Dt,Qt,ie,Pt,de,ze,Ee=y.isCompressedTexture?y.mipmaps[wt]:y.image;if(tt!==null)Rt=tt.max.x-tt.min.x,St=tt.max.y-tt.min.y,It=tt.isBox3?tt.max.z-tt.min.z:1,Dt=tt.min.x,Qt=tt.min.y,ie=tt.isBox3?tt.min.z:0;else{let Ue=Math.pow(2,-Z);Rt=Math.floor(Ee.width*Ue),St=Math.floor(Ee.height*Ue),y.isDataArrayTexture?It=Ee.depth:y.isData3DTexture?It=Math.floor(Ee.depth*Ue):It=1,Dt=0,Qt=0,ie=0}Y!==null?(Pt=Y.x,de=Y.y,ze=Y.z):(Pt=0,de=0,ze=0);let ve=yt.convert(B.format),nn=yt.convert(B.type),At;B.isData3DTexture?(it.setTexture3D(B,0),At=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(it.setTexture2DArray(B,0),At=G.TEXTURE_2D_ARRAY):(it.setTexture2D(B,0),At=G.TEXTURE_2D),_.activeTexture(G.TEXTURE0),_.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let cn=_.getParameter(G.UNPACK_ROW_LENGTH),ce=_.getParameter(G.UNPACK_IMAGE_HEIGHT),Rn=_.getParameter(G.UNPACK_SKIP_PIXELS),ni=_.getParameter(G.UNPACK_SKIP_ROWS),Ri=_.getParameter(G.UNPACK_SKIP_IMAGES);_.pixelStorei(G.UNPACK_ROW_LENGTH,Ee.width),_.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ee.height),_.pixelStorei(G.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(G.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(G.UNPACK_SKIP_IMAGES,ie);let Ps=y.isDataArrayTexture||y.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){let Ue=Q.get(y),Ii=Q.get(B),Se=Q.get(Ue.__renderTarget),Pi=Q.get(Ii.__renderTarget);_.bindFramebuffer(G.READ_FRAMEBUFFER,Se.__webglFramebuffer),_.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ls=0;Ls<It;Ls++)Ps&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Q.get(y).__webglTexture,Z,ie+Ls),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Q.get(B).__webglTexture,wt,ze+Ls)),G.blitFramebuffer(Dt,Qt,Rt,St,Pt,de,Rt,St,G.DEPTH_BUFFER_BIT,G.NEAREST);_.bindFramebuffer(G.READ_FRAMEBUFFER,null),_.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||y.isRenderTargetTexture||Q.has(y)){let Ue=Q.get(y),Ii=Q.get(B);_.bindFramebuffer(G.READ_FRAMEBUFFER,E),_.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let Se=0;Se<It;Se++)Ps?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ue.__webglTexture,Z,ie+Se):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ue.__webglTexture,Z),_e?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ii.__webglTexture,wt,ze+Se):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ii.__webglTexture,wt),Z!==0?G.blitFramebuffer(Dt,Qt,Rt,St,Pt,de,Rt,St,G.COLOR_BUFFER_BIT,G.NEAREST):_e?G.copyTexSubImage3D(At,wt,Pt,de,ze+Se,Dt,Qt,Rt,St):G.copyTexSubImage2D(At,wt,Pt,de,Dt,Qt,Rt,St);_.bindFramebuffer(G.READ_FRAMEBUFFER,null),_.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else _e?y.isDataTexture||y.isData3DTexture?G.texSubImage3D(At,wt,Pt,de,ze,Rt,St,It,ve,nn,Ee.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(At,wt,Pt,de,ze,Rt,St,It,ve,Ee.data):G.texSubImage3D(At,wt,Pt,de,ze,Rt,St,It,ve,nn,Ee):y.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,Pt,de,Rt,St,ve,nn,Ee.data):y.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,Pt,de,Ee.width,Ee.height,ve,Ee.data):G.texSubImage2D(G.TEXTURE_2D,wt,Pt,de,Rt,St,ve,nn,Ee);_.pixelStorei(G.UNPACK_ROW_LENGTH,cn),_.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ce),_.pixelStorei(G.UNPACK_SKIP_PIXELS,Rn),_.pixelStorei(G.UNPACK_SKIP_ROWS,ni),_.pixelStorei(G.UNPACK_SKIP_IMAGES,Ri),wt===0&&B.generateMipmaps&&G.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(y){Q.get(y).__webglFramebuffer===void 0&&it.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?it.setTextureCube(y,0):y.isData3DTexture?it.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?it.setTexture2DArray(y,0):it.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){H=0,q=0,et=null,_.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var ye={},ln={},Sl=[500,1500,3500],dv=i=>new Promise(t=>setTimeout(t,i)),nf=(i,t)=>t?i+(i.includes("?")?"&":"?")+"r="+t:i;async function fv(i){for(let t=0;;t++)try{let e=await fetch(nf(i,t));if(e.ok)return await e.json();throw new Error(e.status+" "+i)}catch(e){if(t>=Sl.length)throw e;await dv(Sl[t])}}async function sf(i=()=>{}){let t=await fv("img/manifest.json"),e=Object.keys(t),n=0;return await Promise.all(e.map(s=>new Promise(r=>{let a=0,o=()=>{let l=new Image;l.decoding="async",l.onload=()=>{ye[s]=l,ln[s]=t[s],n++,i(n/e.length),r()},l.onerror=()=>{if(a<Sl.length){setTimeout(o,Sl[a++]);return}console.warn("image failed",s),n++,r()},l.src=nf(t[s].src,a)};o()}))),t}var ee=i=>ln[i]?ln[i].src:`img/ui/${i}.webp`;var di=.72,rf=30,af=21,Nn={uTime:{value:0},uTint:{value:new Kt(1,1,1)},uHazeCol:{value:new Kt("#9fbfb4")},uNight:{value:0}},pv=`
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
}`,mv=`
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
}`,of=.055,gv=new bn(1,1).translate(0,.5,0),Sh=new Map;function cf(i,{repeat:t=!1,blur:e=0}={}){let n=i+(e?":b"+e:"");if(Sh.has(n))return Sh.get(n);let s=ye[i];if(!s)throw new Error("missing image "+i);if(e){let a=document.createElement("canvas"),o=e*3;a.width=s.width+o*2,a.height=s.height+o*2;let l=a.getContext("2d");l.filter=`blur(${e}px)`,l.drawImage(s,o,o),s=a}let r=new Ke(s);return r.colorSpace=Le,r.anisotropy=4,t&&(r.wrapS=r.wrapT=hs),r.needsUpdate=!0,Sh.set(n,r),r}var gs=class{constructor(t,e,n,{x:s=0,z:r=0,y:a=0,sway:o=0,flip:l=!1,shadow:c=0,haze:h=0,dark:d=0,order:u=2,blur:m=0,emit:x=0}={}){this.world=t,this.h=n,this.flip=l,this.sx=1,this.sy=1,this.blur=m,this.mat=new je({vertexShader:pv,fragmentShader:mv,transparent:!0,depthWrite:!1,side:Ln,uniforms:{map:{value:null},uTint:Nn.uTint,uTime:Nn.uTime,uHazeCol:Nn.uHazeCol,uSway:{value:o},uPhase:{value:Math.random()*6.28},uAlpha:{value:1},uFlash:{value:0},uHaze:{value:h},uDark:{value:d},uEmit:{value:x},uOut:{value:0},uPad:{value:new oe(0,0)}}}),this.mesh=new Ve(gv,this.mat),this.mesh.rotation.x=-di,this.mesh.renderOrder=u,this.mesh.position.set(s,a,r),this.set(e),t.scene.add(this.mesh),c&&(this.shadow=new Ve(t.shadowGeo,t.shadowMat),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.shadowW=c,t.scene.add(this.shadow)),this.sync()}set(t){if(this.name===t)return;this.name=t,this.mat.uniforms.map.value=cf(t,{blur:this.blur});let e=ln[t]||{w:ye[t].width,h:ye[t].height};this.aspect=e.w/e.h}useCanvas(t){let e=new Xn(t);e.colorSpace=Le,e.anisotropy=4,this.name=null,this.canvasTex=e,this.mat.uniforms.map.value=e,this.aspect=t.width/t.height}refresh(){this.canvasTex&&(this.canvasTex.needsUpdate=!0)}useTex(t,e){this.name=null,this.mat.uniforms.map.value=t,this.aspect=e,this.sync()}get x(){return this.mesh.position.x}get z(){return this.mesh.position.z}get w(){return this.h*this.aspect}setPos(t,e,n=this.mesh.position.y){this.mesh.position.set(t,n,e),this.sync()}sync(){let t=this.h*this.aspect;if(this.mesh.scale.set(t*this.sx*(this.flip?-1:1),this.h*this.sy,1),this.mat.uniforms.uOut.value>0&&this.mat.uniforms.uPad.value.set(Math.min(.5,of/Math.max(.05,Math.abs(t*this.sx))),Math.min(.5,of/Math.max(.05,Math.abs(this.h*this.sy)))),this.shadow){this.shadow.position.set(this.mesh.position.x,.02,this.mesh.position.z+.02);let e=this.shadowW*(1-Math.min(.5,this.mesh.position.y*.25));this.shadow.scale.set(e,e*.42,1)}}set alpha(t){this.mat.uniforms.uAlpha.value=t}get alpha(){return this.mat.uniforms.uAlpha.value}set flash(t){this.mat.uniforms.uFlash.value=t}set outline(t){let e=this.mat.uniforms;if(t<=0){e.uOut.value=0,e.uPad.value.set(0,0);return}let n=e.uOut.value;e.uOut.value=t,n||this.sync()}get outline(){return this.mat.uniforms.uOut.value}set visible(t){this.mesh.visible=t,this.shadow&&(this.shadow.visible=t)}get visible(){return this.mesh.visible}dispose(){this.world.scene.remove(this.mesh),this.shadow&&this.world.scene.remove(this.shadow),this.mat.dispose()}};function lf(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=128,n=0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,i),a.addColorStop(n,i),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,e,e);let o=new Xn(s);return o.colorSpace=Le,o}var xv=`
attribute vec4 aCol; attribute float aSize; attribute float aKind;
uniform float uScale;
varying vec4 vCol; varying float vKind;
void main(){
  vCol = aCol; vKind = aKind;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,_v=`
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
}`,wl=class{constructor(t,e,n){this.max=e,this.p=[];let s=new yn;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.kind=new Float32Array(e),s.setAttribute("position",new tn(this.pos,3)),s.setAttribute("aCol",new tn(this.col,4)),s.setAttribute("aSize",new tn(this.size,1)),s.setAttribute("aKind",new tn(this.kind,1)),this.geo=s,this.mat=new je({vertexShader:xv,fragmentShader:_v,transparent:!0,depthWrite:!1,blending:n?$i:qi,uniforms:{uScale:{value:400}}}),this.pts=new Wr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=4,t.add(this.pts)}add(t){this.p.length>=this.max&&this.p.shift(),t.t=0,this.p.push(t)}update(t){let e=0,n=new Kt;for(let s=this.p.length-1;s>=0;s--){let r=this.p[s];if(r.t+=t,r.t>=r.life){this.p.splice(s,1);continue}r.vy-=(r.g||0)*t;let a=r.drag?Math.max(0,1-r.drag*t):1;r.vx*=a,r.vy*=a,r.vz*=a,r.wander&&(r.vx+=Math.sin(r.t*2.1+r.ph)*r.wander*t,r.vy+=Math.cos(r.t*1.7+r.ph)*r.wander*.6*t),r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.02&&r.g&&(r.y=.02,r.vy*=-.3,r.vx*=.6,r.vz*=.6);let o=r.t/r.life,l=r.a;r.fadeIn&&(l*=Math.min(1,r.t/r.fadeIn)),l*=r.blink?.55+.45*Math.sin(r.t*r.blink+r.ph):1,l*=1-Math.pow(o,r.fadePow||3),n.set(r.c),this.pos[e*3]=r.x,this.pos[e*3+1]=r.y,this.pos[e*3+2]=r.z,this.col[e*4]=n.r,this.col[e*4+1]=n.g,this.col[e*4+2]=n.b,this.col[e*4+3]=l,this.size[e]=r.s*(r.grow?.6+o*.9:1),this.kind[e]=r.k||0,e++}this.geo.setDrawRange(0,e);for(let s of["position","aCol","aSize","aKind"])this.geo.attributes[s].needsUpdate=!0}},vv=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,yv=`
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
}`;function bv(i){let t=i.width,e=i.height,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.drawImage(i,-t/2,-e/2),s.drawImage(i,t/2,-e/2),s.drawImage(i,-t/2,e/2),s.drawImage(i,t/2,e/2);let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d");a.drawImage(i,0,0),a.globalCompositeOperation="destination-in";let o=a.createRadialGradient(t/2,e/2,t*.18,t/2,e/2,t*.5);return o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,t,e),s.drawImage(r,0,0),n}var Tl=class{constructor(t){this.canvas=t,this.renderer=new yl({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Le,this.renderer.setClearColor("#2d3a2c"),this.renderer.setTransparentSort((e,n)=>e.groupOrder-n.groupOrder||e.renderOrder-n.renderOrder||e.object.matrixWorld.elements[14]-n.object.matrixWorld.elements[14]||e.id-n.id),this.scene=new Br,this.camera=new an(rf,16/9,1,200),this.target=new j(0,0,0),this.look=new j(0,0,0),this.dist=af,this.distGoal=af,this.shake=0,this.shadowGeo=new bn(1,1),this.shadowMat=new li({map:lf("rgba(28,30,40,1)","rgba(28,30,40,0)",64,.25),transparent:!0,depthWrite:!1,opacity:.32}),this.glowTex=lf("rgba(255,210,140,1)","rgba(255,170,90,0)",128,.05),this.soft=new wl(this.scene,500,!1),this.glow=new wl(this.scene,500,!0),this.glows=[],this.layers=[],this.sprites=[],this.quality=1,this.resize()}get uniforms(){return Nn}buildGround(t,e,n,s){let[r,a,o,l]=t,c=S=>{let T=document.createElement("canvas");return T.width=Math.round(o*S),T.height=Math.round(l*S),T},h=c(6),d=c(3),u=h.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,h.width,h.height);let m=S=>({s:S,X:T=>(T-r)*S,Z:T=>(T-a)*S});e(u,m(6));let x=d.getContext("2d");x.fillStyle="#000",x.fillRect(0,0,d.width,d.height),n(x,m(3));let g=c(3),p=g.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,g.width,g.height),s&&s(p,m(3));let f=S=>{let T=new Xn(S);return T.flipY=!1,T.minFilter=We,T.generateMipmaps=!1,T},w=S=>{let T=new Ke(bv(ye[S]));return T.wrapS=T.wrapT=hs,T.colorSpace=Le,T.anisotropy=8,T.needsUpdate=!0,T},I=new je({vertexShader:vv,fragmentShader:yv,uniforms:{tGrass:{value:w("grass")},tDirt:{value:w("dirt")},tCobble:{value:w("cobble")},tMask:{value:f(h)},tShade:{value:f(d)},tExtra:{value:f(g)},uTime:Nn.uTime,uRect:{value:new Ce(r,a,o,l)},uTint:Nn.uTint,uNight:Nn.uNight}}),M=new Ve(new bn(o,l),I);M.rotation.x=-Math.PI/2,M.position.set(r+o/2,0,a+l/2),M.renderOrder=0,this.scene.add(M),this.maskCanvas=h}sprite(t,e,n){let s=new gs(this,t,e,n);return this.sprites.push(s),s}decal(t,e,n,s,r,{rot:a=0,y:o=.03,order:l=1,alpha:c=1,dark:h=0}={}){let d=typeof t=="string"?cf(t):(()=>{let x=new Xn(t);return x.colorSpace=Le,x})(),u=new je({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; uniform float uDark; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(mix(c.rgb, vec3(0.08, 0.16, 0.2), uDark) * uTint, c.a * uAlpha);
#include <colorspace_fragment>
}`,uniforms:{map:{value:d},uTint:Nn.uTint,uAlpha:{value:c},uDark:{value:h}},transparent:!0,depthWrite:!1}),m=new Ve(new bn(1,1),u);return m.rotation.set(-Math.PI/2,0,a),m.scale.set(s,r,1),m.position.set(e,o,n),m.renderOrder=l,this.scene.add(m),m}addGlow(t,e,n,s,r="#ffc98a",{always:a=0,flicker:o=.08}={}){let l=new Ve(new bn(1,1),new li({map:this.glowTex,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:$i,opacity:0}));l.rotation.x=-di,l.position.set(t,e,n),l.scale.set(s,s,1),l.renderOrder=3,this.scene.add(l);let c={m:l,size:s,always:a,flicker:o,ph:Math.random()*9};return this.glows.push(c),c}addLayer(t,e,n=0){return this.scene.add(t),this.layers.push({group:t,dz:e,dy:n}),t}setLight(t){Nn.uTint.value.setRGB(t.tint[0],t.tint[1],t.tint[2]),Nn.uNight.value=t.night,this.shadowMat.opacity=t.shadow,Nn.uHazeCol.value.set("#a7c4b8").lerp(new Kt("#5a6aa8"),t.night),this.night=t.night,this.renderer.setClearColor(new Kt("#33452f").lerp(new Kt("#1b2140"),t.night))}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.quality>0?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=rf*Math.max(1,16/9/(t/e)*.85),this.camera.updateProjectionMatrix();let s=e*n/(2*Math.tan(jc.degToRad(this.camera.fov)/2));this.soft.mat.uniforms.uScale.value=s*.05,this.glow.mat.uniforms.uScale.value=s*.05}follow(t,e,n,s=[0,0],r=[-1e9,1e9],a=1e9){let o=Math.min(r[1],Math.max(r[0],t+s[0])),l=Math.min(a,e+s[1]),c=1-Math.exp(-n*4.5);this.target.x+=(o-this.target.x)*c,this.target.z+=(l-this.target.z)*c,this.dist+=(this.distGoal-this.dist)*(1-Math.exp(-n*3))}snap(t,e){this.target.set(t,0,e)}update(t,e){Nn.uTime.value=e;let n=this.dist,s=0,r=0;this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),s=(Math.random()-.5)*this.shake*.4,r=(Math.random()-.5)*this.shake*.4),this.camera.position.set(this.target.x+s,n*Math.sin(di)+r+.9,this.target.z+n*Math.cos(di)),this.look.set(this.target.x+s,.9+r,this.target.z),this.camera.lookAt(this.look);for(let a of this.layers)a.group.position.z=this.target.z+a.dz,a.group.position.y=a.dy;for(let a of this.glows){let o=1+Math.sin(e*7+a.ph)*a.flicker+Math.sin(e*13.1+a.ph*2)*a.flicker*.5;a.m.material.opacity=Math.min(1,a.always+(1-a.always)*this.night)*.75*o,a.m.scale.set(a.size*o,a.size*o,1)}this.soft.update(t),this.glow.update(t)}render(){this.renderer.render(this.scene,this.camera)}toScreen(t,e,n,s={x:0,y:0}){let r=new j(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.behind=r.z>1,s}static topY(t){return t*Math.cos(di)}static topZ(t){return-t*Math.sin(di)}dust(t,e,n=3,s="#e8dcc0"){for(let r=0;r<n;r++){let a=Math.random()*6.28;this.soft.add({x:t+Math.cos(a)*.15,y:.1,z:e+Math.sin(a)*.1,vx:Math.cos(a)*.6,vy:.5+Math.random()*.4,vz:Math.sin(a)*.3,drag:3,life:.5+Math.random()*.2,s:4+Math.random()*3,c:s,a:.55,grow:!0})}}sparkle(t,e,n,s=8,r="#fff4c2",a=.6,o=1.2){for(let l=0;l<s;l++){let c=Math.random()*6.28,h=Math.random()*a;this.glow.add({x:t+Math.cos(c)*h,y:e+Math.random()*.4,z:n+Math.sin(c)*h*.6,vx:Math.cos(c)*.6,vy:o*(.5+Math.random()),vz:Math.sin(c)*.3,drag:2.5,life:.7+Math.random()*.5,s:5+Math.random()*5,c:r,a:1,k:1})}}burst(t,e,n,s,r=10){for(let a=0;a<r;a++){let o=Math.random()*6.28,l=1.5+Math.random()*2;this.soft.add({x:t,y:e,z:n,vx:Math.cos(o)*l,vy:2+Math.random()*2.5,vz:Math.sin(o)*l*.5,g:9,life:.6+Math.random()*.3,s:3.5+Math.random()*3,c:s,a:1,fadePow:4})}}};var la={crow:{h:1.55,front:!0,neck:[.52,.13],shN:[.6,.3],shF:[.36,.3],hipN:[.55,.9],hipF:[.42,.88],tail:[.14,.8],arms:2},bear:{h:1.6,front:!0,neck:[.52,.1],shN:[.74,.3],shF:[.24,.3],hipN:[.66,.86],hipF:[.32,.86],arms:2},duck:{h:1.35,front:!0,neck:[.5,.13],shN:[.5,.35],shF:[.5,.35],hipN:[.58,.88],hipF:[.44,.88],tail:[.16,.74],arms:0,waddle:1},fish:{h:1.5,front:!1,neck:[.52,.19],shN:[.84,.3],shF:[.2,.3],hipN:[.62,.88],hipF:[.38,.88],arms:1},raccoon:{h:1.45,front:!0,neck:[.5,.12],shN:[.8,.34],shF:[.2,.34],hipN:[.6,.88],hipF:[.4,.88],tail:[.2,.78],arms:1},croc:{h:1.65,front:!0,neck:[.5,.12],shN:[.8,.4],shF:[.2,.4],hipN:[.62,.9],hipF:[.38,.9],tail:[.22,.85],arms:1},turtle:{h:1.4,front:!1,neck:[.55,.12],shN:[.74,.4],shF:[.32,.38],hipN:[.64,.88],hipF:[.42,.88],arms:2,waddle:.7}},Mv=.6,xs=(i,t,e)=>i+(t-i)*e,wn=(i,t)=>ye[`rn_${i}_${t}`],lr=(i,t)=>ln[`rn_${i}_${t}`]&&ln[`rn_${i}_${t}`].j||[.5,.1],_s=class{constructor(t,e=Mv){this.who=t,this.cfg=la[t],this.res=e,this.t=Math.random()*10,this.ph=0,this.amp=0,this.lean=0,this.headLag=0,this.blinkIn=1+Math.random()*3,this.blinkT=0,this.mouth=0,this.happy=0,this.c=document.createElement("canvas"),this.g=this.c.getContext("2d"),this.measure()}measure(){let t=this.who,e=this.cfg,n=wn(t,"body"),s=wn(t,"head"),r=wn(t,"leg"),h=-((1-lr(t,"leg")[1])*r.height)-e.hipN[1]*n.height+e.neck[1]*n.height-lr(t,"head")[1]*s.height,d=wn(t,"arm"),u=Math.max(n.width*.62,s.width*.62);d&&e.arms&&(u=Math.max(u,Math.abs(e.shN[0]-.5)*n.width+d.height*.85));let m=wn(t,"tail");m&&e.tail&&(u=Math.max(u,n.width*.5+m.width*.95)),this.figPx=-h,this.W=Math.ceil(u*2+30),this.H=Math.ceil(-h+30),this.c.width=Math.ceil(this.W*this.res),this.c.height=Math.ceil(this.H*this.res),this.worldH=e.h*this.H/this.figPx}update(t,{speed01:e=0,talking:n=!1,happy:s=!1,draw:r=!0}={}){this.t+=t,this.amp=xs(this.amp,Math.min(1,e),Math.min(1,t*8)),this.amp>.02?this.ph+=t*9*Math.max(.4,e):this.ph=xs(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.12,this.blinkIn=2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t),n?(this.mouthT=(this.mouthT||0)-t,this.mouthT<=0&&(this.mouth=this.mouth?0:1,this.mouthT=this.mouth?.09+Math.random()*.08:.06+Math.random()*.07)):this.mouth=0,this.happy=xs(this.happy,s?1:0,Math.min(1,t*6));let a=this.lean;this.lean=xs(this.lean,this.amp*.06,Math.min(1,t*8)),this.headLag=xs(this.headLag,-(this.lean-a)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.talking=n,r&&this.draw()}draw(){let t=this.who,e=this.cfg,n=this.g,s=this.t,r=this.amp,a=Math.sin(this.ph),o=Math.cos(this.ph),l=wn(t,"body"),c=wn(t,"leg"),h=wn(t,"arm"),d=wn(t,"tail");if(!l||!c)return;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.c.width,this.c.height),n.setTransform(this.res,0,0,this.res,0,0);let u=this.H-4,m=this.W*.5,x=lr(t,"leg"),g=lr(t,"arm"),p=.5*r,f=-a*p,w=a*p,I=Math.max(0,o)*6*r,M=Math.max(0,-o)*6*r,S=(1-x[1])*c.height,T=u-S*Math.max(Math.cos(f),Math.cos(w)),P=(1-r)*Math.sin(s*2.2)*.018,v=(e.waddle||0)*a*.09*r,b=T-e.hipN[1]*l.height,C=m-l.width*.5,L=k=>[C+e[k][0]*l.width,b+e[k][1]*l.height],F=[m,T],D=k=>{n.save(),n.translate(F[0],F[1]),n.rotate(this.lean+v+Math.sin(this.ph*2)*.015*r),n.scale(1-P*.4,1+P),n.translate(-F[0],-F[1]),k(),n.restore()},E=(k,J,U,W=0,K=0,ft=1)=>{k&&(n.save(),n.translate(U[0],U[1]+K),n.rotate(W),n.scale(ft,1),n.drawImage(k,-J[0]*k.width,-J[1]*k.height),n.restore())},N=Math.sin(s*1.5)*.05*(1-r),H=a*.55*r+N,q=-a*.45*r-N;this.happy>.01&&(H=xs(H,-2.3+Math.sin(s*9)*.25,this.happy),q=xs(q,2.2-Math.sin(s*9+1)*.25,this.happy)),this.talking&&(H+=Math.sin(s*3.1)*.18);let et=this.talking?Math.sin(s*7.3)*.05+Math.sin(s*2.3)*.03:0,X=this.headLag+Math.sin(this.ph*2-.8)*.04*r+Math.sin(s*1.1)*.03*(1-r)+et-v*.5-this.happy*.08,nt=Math.sin(this.ph*2-.9)*3*r-this.happy*4,rt=this.mouth&&wn(t,"talk")?"talk":this.blinkT>0&&wn(t,"blink")?"blink":"head",Ct=wn(t,rt),A=lr(t,rt),O=Math.sin(s*2.6)*.12+Math.sin(this.ph*2)*.22*r;d&&e.tail&&D(()=>E(d,lr(t,"tail"),L("tail"),O)),e.arms>=2&&D(()=>E(h,g,L("shF"),q)),E(c,x,[L("hipF")[0],T],w,-M),E(c,x,[L("hipN")[0],T],f,-I),D(()=>{e.front||E(Ct,A,L("neck"),X,nt),n.drawImage(l,C,b),e.front&&E(Ct,A,L("neck"),X,nt),e.arms>=1&&E(h,g,L("shN"),H)})}};function hf(){for(let i of Object.keys(la)){if(!wn(i,"body"))continue;let t=new _s(i,1);t.blinkIn=99,t.t=0,t.update(0,{});let e="pt_"+i;ye[e]=t.c,ln[e]={w:t.c.width,h:t.c.height,src:t.c.toDataURL("image/png")}}}var Nt=(i,t=1)=>(ln[i]&&ln[i].wh||1)*t,da=[[-44,-10.9,-5.8,6.8],[-11,12,-6.4,7],[12,30,-3.4,4.6],[30,54,-5.6,7],[-2.1,-.7,6.5,9.2],[-11,11.5,8.6,19]],cr=8.1,vs=-1.4,be={x:1.2,z:14.6,rx:6.2,rz:3},mn=[2.3,3.7,10.4,13.5];function ff(i){return 1+.07*Math.sin(3*i+1)+.045*Math.sin(5*i+2.2)}function pf(i,t){let e=(i-be.x)/be.rx,n=(t-be.z)/be.rz;return Math.hypot(e,n)/ff(Math.atan2(n,e))}var wi=30,ys=-12,ua=[];for(let i=0;i<2;i++)for(let t=0;t<3;t++)ua.push({x:3.6+t*2.1,z:-.7+i*2.3});var ct={start:[1.5,1.8],door:[-4.1,-6.2],mailbox:[-.4,-5.2],cauldron:[-8.6,-2.4],cat:[-2.3,-5.5],crowWait:[1.4,-3.6],crowEnter:[16,.6],sign:[10.6,1.2],fountain:[42,0],board:[39.6,-5.4],myStall:[47.6,4.4],roadEnd:[29.5,.6],woodSign:[-10.6,.1],arch:[vs,9.5],fish:[3,13],pondSign:[-3.2,6.2]},Cl=[[-16.6,-2.9],[-21.2,4.7],[-26.4,-3.5],[-31.2,4.3],[-37.4,-1.4]],Ah=[[-19.2,0],[-24.6,-1.4],[-33.4,-.4],[-39.4,3.4],[-8.4,16.8]],mf=["moth","ladybug","moth","ladybug","ladybug"],uf=[[-15.2,-4.6],[-23.4,-4.8],[-29.6,-2.2],[-35.2,-4.6],[-41.6,-4.2]],df=[[-18.4,6],[-28.6,6.3],[-34.8,6.1],[-42.2,5.6]],fi={mira:[36,-3.3],juniper:[48,-3.3],oz:[36.6,4.4]};function ca(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function wh(i,t,e=0){return da.some(([n,s,r,a])=>i>n-e&&i<s+e&&t>r-e&&t<a+e)}var hr=.5;function ur(i,t,e,n){let s=document.createElement("canvas");s.width=Math.round(i*e),s.height=Math.round(t*e);let r=s.getContext("2d");return n(r,s.width,s.height,e),s}function Sv(i){let t=mn[0]-.2,e=mn[1]+.2,n=mn[2]-.25,s=mn[3]+.2,r=e-t,a=s-n,o=(t+e)/2,l=(n+s)/2,c=150,h=.045,d=ca(7319),u="#4a2a26",m=b=>{let C=176+b*26,L=116+b*20,F=64+b*12;return`rgb(${C|0},${L|0},${F|0})`},x=ur(r,a,c,(b,C,L,F)=>{b.fillStyle="#3a2218",b.fillRect(0,0,C,L);let D=Math.round(a/.28),E=L/D;for(let N=0;N<D;N++){let H=N*E+2,q=E-4,et=4+(d()-.5)*8,X=C-4+(d()-.5)*8,nt=(d()-.5)*.35;b.fillStyle=m(nt),b.beginPath(),b.roundRect(et,H,X-et,q,5),b.fill(),b.fillStyle="rgba(255,224,170,0.35)",b.fillRect(et+4,H+2,X-et-8,3),b.fillStyle="rgba(90,50,26,0.45)",b.fillRect(et+4,H+q-5,X-et-8,4),b.strokeStyle="rgba(110,64,34,0.45)",b.lineWidth=1.6;for(let rt=0;rt<3;rt++){let Ct=H+q*(.28+rt*.22)+(d()-.5)*4;b.beginPath(),b.moveTo(et+10+d()*30,Ct);for(let A=et+40;A<X-10;A+=30)b.lineTo(A,Ct+Math.sin(A*.05+rt+N)*2.2);b.stroke()}d()<.35&&(b.fillStyle="rgba(96,56,30,0.6)",b.beginPath(),b.ellipse(et+(X-et)*(.3+d()*.4),H+q/2,7,3.5,0,0,7),b.fill());for(let rt of[.17,.83])b.fillStyle="#3d2419",b.beginPath(),b.arc(C*rt,H+q/2,3.2,0,7),b.fill(),b.fillStyle="rgba(255,230,190,0.5)",b.beginPath(),b.arc(C*rt-1,H+q/2-1,1.2,0,7),b.fill()}b.strokeStyle=u,b.lineWidth=5,b.strokeRect(2.5,2.5,C-5,L-5)}),g=[],p=ur(r+.9,a+.9,40,(b,C,L)=>{b.filter="blur(7px)",b.fillStyle="rgba(4,18,24,0.85)",b.beginPath(),b.roundRect(.45*40,.45*40,C-.9*40,L-.9*40,.3*40),b.fill(),b.filter="none"});g.push(i.decal(p,o,l+.32,r+.9,a+.9,{y:.01,order:.4,alpha:.7}));let f=.07,w=.17,I=b=>ur(b,hr+.42,c,(C,L,F,D)=>{let E=hr*D,N=f*D,H=(f+w)*D;C.fillStyle="rgba(10,26,28,0.88)",C.fillRect(0,H,L,E-H);let q=C.createLinearGradient(0,H,0,E);q.addColorStop(0,"rgba(0,0,0,0.35)"),q.addColorStop(1,"rgba(30,70,70,0.25)"),C.fillStyle=q,C.fillRect(0,H,L,E-H),C.fillStyle="#a8693a",C.fillRect(0,0,L,N),C.fillStyle="rgba(255,224,170,0.45)",C.fillRect(0,2,L,3),C.strokeStyle="rgba(60,30,16,0.6)",C.lineWidth=2;for(let X=.28*D;X<L;X+=.28*D)C.beginPath(),C.moveTo(X,0),C.lineTo(X,N),C.stroke();C.fillStyle="#704226",C.fillRect(0,N,L,H-N),C.fillStyle="rgba(255,210,150,0.18)",C.fillRect(0,N+2,L,2),C.strokeStyle="rgba(40,20,10,0.4)",C.lineWidth=1.5;{let X=(N+H)/2;C.beginPath(),C.moveTo(6,X);for(let nt=6;nt<L-6;nt+=24)C.lineTo(nt,X+Math.sin(nt*.04)*1.6);C.stroke()}C.strokeStyle=u,C.lineWidth=4,C.beginPath(),C.moveTo(0,2),C.lineTo(L,2),C.moveTo(0,H),C.lineTo(L,H),C.stroke();let et=C.createLinearGradient(0,E,0,F);et.addColorStop(0,"rgba(8,24,28,0.5)"),et.addColorStop(1,"rgba(8,24,28,0)"),C.fillStyle=et,C.fillRect(0,E,L,F-E),C.strokeStyle="rgba(214,240,228,0.85)",C.lineWidth=3,C.beginPath();for(let X=0;X<=L;X+=8){let nt=E+2+Math.sin(X*.09)*1.6;X?C.lineTo(X,nt):C.moveTo(X,nt)}C.stroke()}),M=(b,C,L,F,D,E)=>{let N=i.decal(b,L,F,C,hr+.42,{y:h-(hr+.42)/2,order:E});return N.rotation.set(0,D,0),N.material.depthTest=!1,g.push(N),N};M(I(r),r,o,s,0,.55),M(I(a),a,t,l,-Math.PI/2,.55),M(I(a),a,e,l,Math.PI/2,.55),g.push(i.decal(x,o,l,r,a,{y:h,order:.5}));let S=.2,T=hr+.3,P=.24,v=ur(P,S+T,c,(b,C,L,F)=>{let D=.1*F,E=(S+hr)*F,N=b.createLinearGradient(0,0,C,0);N.addColorStop(0,"#5a341e"),N.addColorStop(.3,"#b07440"),N.addColorStop(.55,"#9a6236"),N.addColorStop(1,"#4a2a18"),b.fillStyle=N,b.fillRect(3,D/2,C-6,L-D/2),b.strokeStyle=u,b.lineWidth=4,b.beginPath(),b.moveTo(3,D/2),b.lineTo(3,E),b.moveTo(C-3,D/2),b.lineTo(C-3,E),b.stroke(),b.fillStyle="#d9a46a",b.beginPath(),b.ellipse(C/2,D/2,C/2-3,D/2-1,0,0,7),b.fill(),b.stroke(),b.strokeStyle="rgba(120,70,36,0.7)",b.lineWidth=1.5,b.beginPath(),b.ellipse(C/2,D/2,C*.24,D*.24,0,0,7),b.stroke();for(let et of[.62,.78]){let X=S*F*et+D*.3;b.fillStyle="#d8b679",b.fillRect(2,X,C-4,.045*F),b.strokeStyle="rgba(90,60,30,0.6)",b.lineWidth=1.5,b.strokeRect(2,X,C-4,.045*F)}b.globalCompositeOperation="source-atop";let H=b.createLinearGradient(0,E,0,L);H.addColorStop(0,"rgba(24,70,74,0.55)"),H.addColorStop(1,"rgba(24,70,74,1)"),b.fillStyle=H,b.fillRect(0,E,C,L-E),b.globalCompositeOperation="destination-out";let q=b.createLinearGradient(0,E,0,L);q.addColorStop(0,"rgba(0,0,0,0.25)"),q.addColorStop(1,"rgba(0,0,0,1)"),b.fillStyle=q,b.fillRect(0,E,C,L-E),b.globalCompositeOperation="source-over",b.strokeStyle="rgba(214,240,228,0.85)",b.lineWidth=3,b.beginPath(),b.ellipse(C/2,E+2,C/2,5,0,0,Math.PI),b.stroke()});for(let[b,C,L]of[[t+.12,s+.02,!0],[e-.12,s+.02,!0],[t+.12,n+.15,!1],[e-.12,n+.15,!1]])if(L){let F=i.decal(v,b,C,P,S+T,{y:h+S-(S+T)/2,order:.6});F.rotation.set(0,0,0),F.material.depthTest=!1,g.push(F)}else{let F=ur(P,S+.02,c,(E,N,H)=>E.drawImage(v,0,0,N,H,0,0,N,H)),D=i.decal(F,b,C,P,S+.02,{y:h+(S+.02)/2-.02,order:.6});D.rotation.set(0,0,0),D.material.depthTest=!1,g.push(D)}return g}var Al=7.5,Eh=100,wv=.22,Tv={full:{h:1.6,pieces:[["bush",1.05,4],["hedge_dark",.85,3],["fern",1.1,2]]},fringe:{h:1,pieces:[["grass_tuft",1.1,4],["fern",.72,2],["flowers",.9,1],["bush_flower",.6,1]]}};function Ev(i,t){let e=ca(i),n=Tv[t],s=n.pieces.flatMap(c=>Array(c[2]).fill(c)).filter(([c])=>ye[c]&&ln[c]),r=ur(Al,n.h,Eh,(c,h,d,u)=>{for(let[x,g,p]of t==="full"?[[.22,.7,.55],[.02,1,.5]]:[[.1,.85,.42],[0,1,.4]]){c.filter=g<1?`brightness(${g})`:"none";for(let f=.3;f<Al-.3;f+=p*(.7+e()*.6)){if(t==="fringe"&&e()<.3)continue;let[w,I]=s[Math.floor(e()*s.length)],M=ln[w],S=Math.min(n.h-x-.04,M.wh*I*(.7+e()*.5)),T=S*M.ww/M.wh,P=Math.max(T/2,Math.min(Al-T/2,f)),v=d-(x+e()*.1)*u;c.save(),c.translate(P*u,v),e()<.5&&c.scale(-1,1),c.drawImage(ye[w],-T*u/2,-S*u,T*u,S*u),c.restore()}}c.filter="none",c.globalCompositeOperation="source-atop";let m=c.createLinearGradient(0,d*.3,0,d);m.addColorStop(0,"rgba(8,24,26,0)"),m.addColorStop(.75,"rgba(8,24,26,0.6)"),m.addColorStop(1,"rgba(8,24,26,0.7)"),c.fillStyle=m,c.fillRect(0,0,h,d)});if(t==="fringe")return r;let a=Math.round(wv*Eh),o=document.createElement("canvas");o.width=r.width,o.height=r.height+a;let l=o.getContext("2d");return l.filter=`brightness(0) blur(${Math.round(a*.35)}px)`,l.globalAlpha=.7,l.drawImage(r,0,a*.4),l.filter="none",l.globalAlpha=1,l.drawImage(r,0,a),o}function gf(i){let t={colliders:[],occluders:[],props:{},tick:[],edge:[]},e=ca(20261031),n=(A,O,k,J,U={})=>{let W=i.sprite(A,O,{x:k,z:J,shadow:U.shadow??O*.5,...U});return U.col&&t.colliders.push({x:k+(U.colX||0),z:J-(U.colZ??.15),r:U.col}),U.occ!==!1&&O>2.2&&t.occluders.push(W),W},s=(A,O,k,J=.06)=>{let U=(1-k)*A.h;return[A.x+(O-.5)*A.w*(A.flip?-1:1),U*Math.cos(di),A.z-U*Math.sin(di)+J]},r=(A,O,k,J)=>t.colliders.push({rect:[A,O,k,J]}),a=n("cottage",Nt("cottage"),ct.door[0]+.11*(ln.cottage?ln.cottage.ww:6.7),-6.7,{shadow:0,occ:!0});r(a.x-a.w*.45,a.x+a.w*.45,-10,-6.5),t.props.cottage=a;for(let[A,O,k]of[[.35,.4,1.5],[.7,.71,1.5],[.39,.74,1.1]]){let J=s(a,A,O);i.addGlow(J[0],J[1],J[2],k,"#ffc477")}t.chimney=s(a,.78,.03),t.props.cauldron=n("cauldron_out",Nt("cauldron_out"),ct.cauldron[0],ct.cauldron[1],{col:.8,shadow:1.6}),i.addGlow(ct.cauldron[0],.35,ct.cauldron[1]+.1,2.4,"#ff9a4a",{always:.55,flicker:.12}),t.props.mailbox=n("mailbox",Nt("mailbox"),ct.mailbox[0],ct.mailbox[1],{col:.35,shadow:.7});let o=n("lantern",Nt("lantern"),1.2,-5.6,{col:.3,shadow:.6});{let A=s(o,.71,.42);i.addGlow(A[0],A[1],A[2],2.6,"#ffc066",{always:.15})}n("barrel",Nt("barrel"),.4,-6.3,{col:.5,shadow:1}),n("basket",Nt("basket"),-.9,-6.4,{shadow:.6}),n("bench",Nt("bench"),-7.4,3.6,{col:.6,colX:0,shadow:1.6}),n("wcan",Nt("wcan"),9.3,-1.5,{shadow:.5}),n("basket",Nt("basket"),2.2,-2.2,{shadow:.55}),t.props.sign=n("signpost",Nt("signpost"),ct.sign[0],ct.sign[1],{col:.3,shadow:.9}),t.props.woodSign=n("signpost",Nt("signpost",.92),ct.woodSign[0],ct.woodSign[1],{col:.3,shadow:.9,flip:!0});let l=n("lantern",Nt("lantern"),12.6,-3.4,{col:.3,shadow:.6});{let A=s(l,.71,.42);i.addGlow(A[0],A[1],A[2],2.6,"#ffc066",{always:.15})}t.props.fountain=n("fountain",Nt("fountain"),ct.fountain[0],ct.fountain[1],{col:1.75,colZ:.9,shadow:3.4}),t.props.board=n("board",Nt("board"),ct.board[0],ct.board[1],{col:.7,shadow:1.6});let c={};for(let[A,O,k]of[["mira","stall_red",fi.mira],["juniper","stall_green",fi.juniper],["oz","stall_blue",fi.oz]]){let J=n(O,Nt(O),k[0],k[1],{shadow:2.8});r(k[0]-1.45,k[0]+1.45,k[1]-1.6,k[1]-.25),c[A]=J}t.props.stalls=c,t.props.myStall=n("stall_mine",Nt("stall_mine"),ct.myStall[0],ct.myStall[1],{shadow:2.8}),r(ct.myStall[0]-1.4,ct.myStall[0]+1.4,ct.myStall[1]-1.3,ct.myStall[1]-.25);let h=[["house_a",32.2,-7.6,!1],["house_b",38.2,-8.4,!0],["house_a",46.2,-8.4,!0],["house_b",52,-7.6,!1]];for(let[A,O,k,J]of h){let U=n(A,Nt(A),O,k,{shadow:0,flip:J});r(O-2.1,O+2.1,k-3,k-.2);for(let[W,K]of A==="house_a"?[[.4,.52],[.38,.36]]:[[.3,.52],[.62,.52]]){let ft=s(U,W,K);i.addGlow(ft[0],ft[1],ft[2],2.2,"#ffb866",{flicker:.04})}}for(let A of[33.6,50.4]){let O=n("lamp",Nt("lamp"),A,2.6,{col:.25,shadow:.6}),k=s(O,.5,.2);i.addGlow(k[0],k[1],k[2],3,"#ffcf7a",{always:.12})}n("barrel",Nt("barrel"),30.8,-4.8,{col:.5,shadow:1}),n("bench",Nt("bench"),44.6,6.4,{col:.6,shadow:1.6}),n("bench",Nt("bench"),39.4,6.4,{col:.6,shadow:1.6,flip:!0}),n("basket",Nt("basket"),49.9,-2.4,{shadow:.55}),n("basket",Nt("basket"),34.4,-2.5,{shadow:.55}),n("wcan",Nt("wcan"),53,-4.9,{shadow:.5});let d=[],u=["oak","pine","birch","oak","pine"],m=["tallwood","pine","bluewood","oak","tallwood","pine"],x=(A,O,k={})=>{let J=k.kinds||(A<ys?m:u),U=J[Math.floor(e()*J.length)],W=Nt(U)*(.85+e()*.3)*(k.scale||1),K=n(k.kind||U,k.kind&&k.h||W,A,O,{sway:.05+e()*.05,flip:e()<.5,shadow:W*.32,col:k.noCol?0:.45,haze:k.haze||0});return d.push([A,O,W]),K};for(let A=-47;A<30;A+=1.6+e()*1.4){if(A>a.x-a.w*.5&&A<a.x+a.w*.5){x(A,-11.2-e()*1.4,{haze:.08});continue}x(A,-8.2-e()*1.2),e()<.75&&x(A+e()*1.2,-10.8-e()*1.6,{haze:.12})}for(let A=28;A<58;A+=1.7+e()*1.4)x(A,-11.6-e()*1.6,{haze:.15});for(let A=12.5;A<29.5;A+=1.8+e()*1.6)x(A,-4.8-e()*1.6),e()<.6&&x(A+.8,-6.8-e()*1.4,{haze:.06});for(let A=-8;A<4;A+=1.4+e()*1.1)A>-.4||x(-12.2-e()*.8,A);for(let A=4.4;A<8.6;A+=1.1+e()*.5)n(e()<.5?"bush":"bush_flower",Nt("bush",.95+e()*.25),-12.4-e()*.6,A,{sway:.05,flip:e()<.5,shadow:1.2});r(-13.2,-11.6,-12,.2),r(-13.2,-11.6,3.6,8.2);for(let A=-8;A<10;A+=1.5+e()*1.2)x(-45.6-e()*1.2,A),x(-48.6-e()*2,A+e(),{haze:.12});for(let[A,O]of uf)x(A,O),x(A+1.3+e()*.6,O-.9,{kinds:["bluewood","tallwood"],scale:.8}),e()<.6&&x(A-1.4-e()*.5,O-.6,{kinds:["bluewood","pine"],scale:.7});for(let[A,O]of df)x(A,O,{kinds:["bluewood"],scale:.8}),n("bush",Nt("bush",1.1),A-1.1,O+.4,{col:.55,sway:.05,shadow:1.3}),n(e()<.5?"bush_flower":"fern",Nt("bush_flower"),A+1,O+.5,{sway:.06,flip:!0,shadow:1});for(let A=-8;A<10;A+=1.6+e()*1.3)x(55.6+e()*1.6,A),x(58.5+e()*2.5,A+e(),{haze:.1});x(-9.8,-.8,{kind:"ytree",h:Nt("ytree")}),x(10.4,-3.8,{kind:"birch",h:Nt("birch")}),t.props.steps=n("steps",Nt("steps",1.35),vs,cr+.35,{shadow:0,order:1});let g=n("arch",Nt("arch"),ct.arch[0],ct.arch[1],{shadow:2,occ:!1});t.colliders.push({x:ct.arch[0]-1.05,z:ct.arch[1],r:.2},{x:ct.arch[0]+1.05,z:ct.arch[1],r:.2});{let A=s(g,.52,.42);i.addGlow(A[0],A[1],A[2],2.2,"#ffc066",{always:.12,flicker:.05})}t.props.pondSign=n("signpost",Nt("signpost",.85),ct.pondSign[0],ct.pondSign[1],{col:.3,shadow:.9}),t.props.willow=n("willow",Nt("willow"),-7.4,11,{col:.55,sway:.08,shadow:2.4}),d.push([-7.4,11,Nt("willow")]);for(let A=9.2;A<20;A+=1.6+e()*1.1)x(-12.3-e()*.7,A,{kinds:["oak","birch","pine"],scale:.9}),x(12.4+e()*.8,A+e()*.6,{kinds:["oak","pine","birch"],scale:.9});let p=new Map,f=(A,O)=>{let k=A+O;if(!p.has(k)){let J=Ev(7700+O*131+(A==="fringe"?57:0),A),U=new Xn(J);U.colorSpace=Le,U.anisotropy=4,p.set(k,{t:U,aspect:J.width/J.height,h:J.height/Eh})}return p.get(k)},w=(A,O,k,J,U,W,K,ft)=>{let ut=Al*U,Ut=O-A,jt=Math.max(1,Math.ceil((Ut-ut)/(ut*.7))+1),Xt=jt>1?(Ut-ut)/(jt-1):0;for(let Zt=0;Zt<jt;Zt++){let qt=f(J,((ft+Zt)%4+4)%4),Ht=jt>1?A+ut/2+Zt*Xt+(Zt>0&&Zt<jt-1?(e()-.5)*.6:0):(A+O)/2,le=new gs(i,"bush",qt.h*U*(.94+e()*.12),{x:Ht,z:k+(e()-.5)*.16,sway:K,flip:e()<.5,dark:W});le.useTex(qt.t,qt.aspect),t.edge.push(le)}},I=(A,O,k,J,U={})=>{let W=U.step||.95,K=Math.max(1,Math.round((J-k)/W)),ft=U.gap?[[A,U.gap[0]],[U.gap[1],O]]:[[A,O]];(U.rows||Array.from({length:K+1},(Ut,jt)=>[k+jt*W,jt===0?"fringe":"full",jt===0?.9:Math.min(1,.7+(jt-1)*.15),Math.min(.9,jt*.17)])).forEach(([Ut,jt,Xt,Zt],qt)=>{for(let[Ht,le]of ft)w(Ht,le,Ut,jt,Xt,Zt,qt<3?.012:0,qt*3+Math.round(Ht))})};I(-22,22,19.35,25.6),I(-46.8,-12,7.15,13.2),I(12.5,30.25,4.95,11.4),I(29.7,57.5,7.35,13.4),I(-12.6,13.1,0,0,{gap:[vs-.55,vs+.55],rows:[[7.15,"fringe",.85,0],[7.55,"full",.4,.3],[7.95,"full",.44,.55],[8.38,"full",.48,.78]]});let M=(A,O=1)=>{let k=ff(A)*O;return[be.x+Math.cos(A)*be.rx*k,be.z+Math.sin(A)*be.rz*k]};for(let[A,O,k,J]of[[3,"reeds",1,{}],[3.3,"reeds",.85,{flip:!0}],[3.55,"iris",1,{}],[2.6,"rock_pond",1,{col:.4}],[.35,"reeds",1.05,{flip:!0}],[.1,"iris",1,{flip:!0}],[-.35,"rock_pond",.85,{col:.4,flip:!0}],[1.95,"reeds",.8,{}],[2.25,"iris",.9,{flip:!0}],[1.05,"rock_pond",.7,{col:.35}],[-2.3,"iris",.8,{}],[-2.75,"reeds",.75,{flip:!0}]]){let[U,W]=M(A,1.06);n(O,Nt(O,k),U,W,{sway:O==="rock_pond"?0:.06,shadow:Nt(O,k)*.6,...J})}t.props.boat=n("boat",Nt("boat",1.1),be.x-3.2,be.z+1.7,{shadow:0,sway:0}),n("stepstones",Nt("stepstones",1.1),-5.6,9.6,{shadow:0,order:1}),n("stepstones",Nt("stepstones",1),-3.6,18.2,{shadow:0,order:1,flip:!0});for(let[A,O,k]of[[-9.6,9.6,"fern"],[9.4,9.3,"bush_flower"],[10.4,17.6,"fern"],[-10.2,18.4,"bush"],[6.2,18.6,"flowers"],[-6.4,18.8,"grass_tuft"],[8.2,10.2,"flowers"],[-4,10,"grass_tuft"],[7.9,16.4,"grass_tuft"]])n(k,Nt(k)*(.9+e()*.2),A,O,{sway:k==="flowers"?.04:.06,flip:e()<.5,shadow:.6});t.props.dock=Sv(i),t.props.bucket=n("mp_bucket",.48,mn[1]-.2,mn[3]-.55,{shadow:.4});let S=[[-2.6,13.3,.9,.4],[-1.4,16,.75,2.2],[4.9,15.9,.85,4.1],[5.9,13.7,.6,1],[.4,15.3,.55,5.2]];t.pads=S.map(([A,O,k,J])=>({m:i.decal("mp_lilypad",A,O,k,k,{rot:J,y:.035}),x:A,z:O,r:J,ph:e()*6})),n("lily",Nt("lily",1.1),be.x+5.2,be.z+1.6,{shadow:0,sway:.02});let T=M(.5,1.08),P=[S[2][0],S[2][1]-.05],v=n("frog",Nt("frog",.9),T[0],T[1],{shadow:.35});t.props.frog=v;let b=4+e()*4,C=0,L=-1,F=[["mp_minnow",.9,.42],["mp_bluegill",.8,.65],["mp_carp",1.05,.62],["mp_minnow",.7,.33]].map(([A,O,k],J)=>({m:i.decal(A,be.x,be.z,O,k,{dark:1,alpha:.32,y:.025}),ph:J*1.7,sp:.13+J*.03,a:.45+J%2*.18,b:.42+(J+1)%2*.2}));t.fishShadows=F,t.tick.push((A,O)=>{for(let k of t.pads)k.m.rotation.z=k.r+Math.sin(O*.4+k.ph)*.08,k.m.position.x=k.x+Math.sin(O*.3+k.ph)*.05;for(let k of F){let J=O*k.sp+k.ph,U=be.x+Math.sin(J)*be.rx*k.a+Math.sin(J*2.3)*.5,W=be.z+Math.sin(J*1.6+k.ph)*be.rz*k.b,K=U-k.m.position.x,ft=W-k.m.position.z;if(K*K+ft*ft>1e-7){let jt=Math.atan2(-ft,K),Xt=k.m.rotation.z;k.m.rotation.z=Xt+Math.atan2(Math.sin(jt-Xt),Math.cos(jt-Xt))*Math.min(1,A*4)}k.m.position.set(U,.025,W);let ut=Math.max(0,mn[0]-.5-U,U-mn[1]-.5),Ut=Math.max(0,mn[2]-.4-W,W-mn[3]-.9);k.m.material.uniforms.uAlpha.value=.32*Math.min(1,Math.hypot(ut,Ut)/.6)}if(b-=A,L<0&&b<=0&&(L=0),L>=0){L+=A/.55;let k=C?P:T,J=C?T:P,U=Math.min(1,L);if(v.flip=J[0]<k[0],v.setPos(k[0]+(J[0]-k[0])*U,k[1]+(J[1]-k[1])*U,Math.sin(U*Math.PI)*.7),U>=1){L=-1,C=1-C,b=5+e()*6;for(let W=0;W<8;W++){let K=W/8*6.28;i.soft.add({x:J[0]+Math.cos(K)*.2,y:.08,z:J[1]+Math.sin(K)*.1,vx:Math.cos(K)*.6,vy:.5,vz:Math.sin(K)*.3,g:2.5,life:.5,s:3,c:"#e6fbff",a:.8,k:0})}}}}),t.trees=d,t.props.berries=Cl.map(([A,O],k)=>n("berry_full",Nt("berry_full",1.05),A,O,{col:.6,shadow:1.5,flip:k%2===1,sway:.03}));let D=[["bush",Nt("bush"),.55],["bush_flower",Nt("bush_flower"),.55],["fern",Nt("fern"),0],["boulder",Nt("boulder"),.5],["stump",Nt("stump"),.45],["flowers",Nt("flowers"),0],["pebbles",Nt("pebbles"),0],["grass_tuft",Nt("grass_tuft"),0]],E=(A,O,k)=>{for(let J of ua)if(Math.abs(A-J.x)<1.3+k&&Math.abs(O-J.z)<1.3+k)return!1;for(let J of["door","mailbox","cauldron","cat","crowWait","sign","board","myStall","fountain"]){let U=ct[J];if(Math.hypot(A-U[0],O-U[1])<2.2+k)return!1}for(let J of Object.values(fi))if(Math.hypot(A-J[0],O-J[1])<2.6)return!1;return!0},N=0;for(let A=0;A<150&&N<3e3;N++){let O=-12+e()*68,k=-7+e()*16,[J,U,W]=D[Math.floor(e()*D.length)],K=wh(O,k,-.4);K&&(W||U>1)||E(O,k,K?.3:0)&&(O>30&&O<54&&k>-6&&k<7&&Math.hypot(O-42,k-.5)<9.5||Math.abs(k-Th(O))<1.3&&O>-2&&O<33||O<0&&Math.abs(k-El(O))<1.3||Math.hypot(O-ct.woodSign[0],k-ct.woodSign[1])<1.6||k>6.2&&O>-12.5&&O<12.5||Math.abs(O-vs)<2&&k>3.5||(n(J,U*(.85+e()*.3),O,k,{col:K?0:W,sway:J==="fern"||J==="grass_tuft"||J.startsWith("bush")?.06:0,flip:e()<.5,shadow:U*.7}),A++))}for(let A=0,O=0;A<70&&O<2e3;O++){let k=-10+e()*64,J=-6+e()*13;if(!wh(k,J)||!E(k,J,0)||Math.abs(J-Th(k))<1.2&&k>-2&&k<33||k<0&&Math.abs(J-El(k))<1.1||k>31&&Math.hypot(k-42,J-.5)<9||J>6.4&&k<12.5)continue;let U=e()<.6?"grass_tuft":e()<.8?"pebbles":"mushrooms";n(U,Nt(U)*(.8+e()*.4),k,J,{sway:U==="grass_tuft"?.07:0,flip:e()<.5,shadow:.4}),A++}let H=(A,O,k)=>{for(let[J,U]of Cl)if(Math.hypot(A-J,O-U)<1.5+k)return!1;for(let[J,U]of Ah)if(Math.hypot(A-J,O-U)<1.4+k)return!1;for(let[J,U]of[...uf,...df])if(Math.hypot(A-J,O-U)<1.4)return!1;return Math.hypot(A-ct.woodSign[0],O-ct.woodSign[1])>1.6},et=[["fern",0,.06,4],["tallgrass",0,.07,3],["flowers",0,.04,2],["mushrooms",0,0,1],["grass_tuft",0,.07,3],["stump",.45,0,1],["log",.6,0,1],["boulder",.5,0,1],["bush",.55,.05,2]].flatMap(A=>Array(A[3]).fill(A));for(let A=0,O=0;A<95&&O<4e3;O++){let k=-45+e()*33.5,J=-7.2+e()*15,[U,W,K]=et[Math.floor(e()*et.length)],ft=wh(k,J,-.3);if(Math.abs(J-El(k))<(W?2.1:1)||!H(k,J,W?.6:0)||ft&&W&&e()<.7)continue;let Ut=Nt(U)*(.85+e()*.35);n(U,Ut,k,J,{col:W,sway:K,flip:e()<.5,shadow:Ut*.7}),A++}let X=new bi;for(let A=0;A<7;A++){let O=new gs(i,"backdrop",8.5,{x:-60+A*30.5,z:0,haze:.35,order:2});i.scene.remove(O.mesh),X.add(O.mesh)}for(let A=0;A<8;A++){let O=new gs(i,"backdrop",7,{x:-55+A*25.5,z:2.5,haze:.18,order:2,flip:!0});i.scene.remove(O.mesh),X.add(O.mesh)}X.position.z=-16,i.scene.add(X),t.back=X,i.buildGround([-60,-35,150,65],(A,O)=>{let k=(K,ft,ut,Ut,jt=1)=>{A.fillStyle=Ut,A.globalAlpha=jt,A.beginPath(),A.ellipse(O.X(K),O.Z(ft),ut*O.s,ut*O.s*.9,0,0,7),A.fill(),A.globalAlpha=1},J=ca(7);A.globalCompositeOperation="lighter";let U=[];for(let K=-6.2;K<4.1;K+=.25)U.push([-4.1+(K+6.2)*.45+Math.sin(K)*.3,K]);for(let K=0;K<33;K+=.25)U.push([K,Th(K)]);for(let[K,ft]of U)k(K+(J()-.5)*.4,ft+(J()-.5)*.4,.95+J()*.35,"rgb(150,0,0)",.55);for(let K=0;K>-46;K-=.25)k(K+(J()-.5)*.4,El(K)+(J()-.5)*.5,.6+J()*.3,"rgb(118,0,0)",K<-12?.42:.5);for(let K=0;K<=1;K+=.04)k(vs+K*4.4,9.9+Math.sin(K*3)*.25,.55+J()*.25,"rgb(118,0,0)",.5);for(let K=6.2;K<9.4;K+=.25)k(vs+(J()-.5)*.3,K,.55,"rgb(110,0,0)",.45);for(let K=0;K<=1;K+=.05)k(-3-K*5.4,-2.2+Math.sin(K*3)*.3,.75+J()*.3,"rgb(120,0,0)",.5);for(let K of ua)for(let ft=0;ft<6;ft++)k(K.x+(J()-.5)*.6,K.z+(J()-.5)*.5,.75+J()*.2,"rgb(0,0,150)",.6);for(let K=0;K<340;K++){let ft=J()*6.28,ut=Math.sqrt(J())*9;k(42+Math.cos(ft)*ut*1.25,.5+Math.sin(ft)*ut*.7,1+J()*.5,"rgb(0,140,0)",.6)}for(let K=30;K<55;K+=.6)k(K,-5+(J()-.5)*.8,1.1,"rgb(0,120,0)",.5);A.globalCompositeOperation="source-over";let W=document.createElement("canvas");W.width=A.canvas.width,W.height=A.canvas.height,W.getContext("2d").drawImage(A.canvas,0,0),A.filter="blur(2px)",A.drawImage(W,0,0),A.filter="none"},(A,O)=>{for(let[U,W,K]of d){let ft=A.createRadialGradient(O.X(U),O.Z(W-.6),0,O.X(U),O.Z(W-.6),K*.55*O.s);ft.addColorStop(0,"rgba(255,0,0,0.55)"),ft.addColorStop(1,"rgba(255,0,0,0)"),A.fillStyle=ft,A.beginPath(),A.arc(O.X(U),O.Z(W-.6),K*.55*O.s,0,7),A.fill()}let k=(U,W,K,ft,ut=.6)=>{let Ut=A.createLinearGradient(O.X(U),O.Z(W),O.X(K),O.Z(ft));Ut.addColorStop(0,`rgba(255,0,0,${ut})`),Ut.addColorStop(1,"rgba(255,0,0,0)"),A.fillStyle=Ut,A.fillRect(0,0,A.canvas.width,A.canvas.height)};A.globalCompositeOperation="lighten",k(0,-13,0,-6.5),k(-14.5,0,-11.5,0,.3),k(-50,0,-42,0),k(58,0,53,0);{let U=A.createLinearGradient(0,O.Z(cr-.2),0,O.Z(cr+1.9));U.addColorStop(0,"rgba(255,0,0,0.8)"),U.addColorStop(1,"rgba(255,0,0,0)"),A.fillStyle=U,A.fillRect(O.X(-12.5),O.Z(cr-.2),O.X(13)-O.X(-12.5),O.Z(cr+1.9)-O.Z(cr-.2))}A.fillStyle="rgba(255,0,0,0.42)",A.fillRect(O.X(-60),0,O.X(-12.5)-O.X(-60),A.canvas.height);let J=ca(11);for(let U=0;U<90;U++){let W=-46+J()*34,K=-7+J()*16,ft=(1.2+J()*2.2)*O.s,ut=A.createRadialGradient(O.X(W),O.Z(K),0,O.X(W),O.Z(K),ft);ut.addColorStop(0,"rgba(0,255,0,0.7)"),ut.addColorStop(1,"rgba(0,255,0,0)"),A.fillStyle=ut,A.beginPath(),A.arc(O.X(W),O.Z(K),ft,0,7),A.fill()}for(let U=0;U<70;U++){let W=-45+J()*33,K=-6.5+J()*14,ft=(.4+J()*.9)*O.s,ut=A.createRadialGradient(O.X(W),O.Z(K),0,O.X(W),O.Z(K),ft);ut.addColorStop(0,"rgba(0,0,255,0.9)"),ut.addColorStop(.6,"rgba(0,0,255,0.5)"),ut.addColorStop(1,"rgba(0,0,255,0)"),A.fillStyle=ut,A.beginPath(),A.ellipse(O.X(W),O.Z(K),ft*1.3,ft,.5,0,7),A.fill()}},(A,O)=>{let k=A.canvas.width,J=A.canvas.height;A.fillStyle="#f00",A.fillRect(0,0,k,J),A.fillStyle="#000";for(let[qt,Ht,,le]of da)A.fillRect(O.X(qt-1),0,O.X(Ht+1)-O.X(qt-1),O.Z(le+.8));let U=document.createElement("canvas");U.width=k,U.height=J,U.getContext("2d").drawImage(A.canvas,0,0),A.clearRect(0,0,k,J),A.fillStyle="#000",A.fillRect(0,0,k,J),A.filter="blur(5px)",A.drawImage(U,0,0),A.filter="none";{let qt=A.createLinearGradient(0,O.Z(8.3),0,O.Z(11));qt.addColorStop(0,"rgba(255,0,0,1)"),qt.addColorStop(.25,"rgba(255,0,0,0.78)"),qt.addColorStop(.6,"rgba(255,0,0,0.35)"),qt.addColorStop(1,"rgba(255,0,0,0)"),A.globalCompositeOperation="lighten",A.fillStyle=qt,A.fillRect(O.X(-12.5),O.Z(8.3),O.X(13)-O.X(-12.5),O.Z(11)-O.Z(8.3)),A.globalCompositeOperation="source-over"}let W=Math.floor(O.X(be.x-be.rx*1.4)),K=Math.ceil(O.X(be.x+be.rx*1.4)),ft=Math.floor(O.Z(be.z-be.rz*1.5)),ut=Math.ceil(O.Z(be.z+be.rz*1.5)),Ut=A.getImageData(W,ft,K-W,ut-ft),jt=Ut.data,Xt=O.X(0),Zt=O.Z(0);for(let qt=0;qt<ut-ft;qt++)for(let Ht=0;Ht<K-W;Ht++){let le=(W+Ht+.5-Xt)/O.s,ke=(ft+qt+.5-Zt)/O.s,Ye=pf(le,ke),Te=Ye>1?.46*Math.max(0,1-(Ye-1)/.22):Math.min(1,.46+(1-Ye)*.85);jt[(qt*(K-W)+Ht)*4+1]=Math.round(Te*255)}A.putImageData(Ut,W,ft)});let nt=(()=>{let A=document.createElement("canvas");A.width=64,A.height=256;let O=A.getContext("2d"),k=O.createLinearGradient(0,0,0,256);k.addColorStop(0,"rgba(255,240,200,0)"),k.addColorStop(.3,"rgba(255,240,200,0.9)"),k.addColorStop(1,"rgba(255,240,200,0)"),O.fillStyle=k,O.fillRect(0,0,64,256);let J=O.createLinearGradient(0,0,64,0);return J.addColorStop(0,"rgba(0,0,0,1)"),J.addColorStop(.5,"rgba(0,0,0,0)"),J.addColorStop(1,"rgba(0,0,0,1)"),O.globalCompositeOperation="destination-out",O.fillStyle=J,O.fillRect(0,0,64,256),new Xn(A)})(),rt=[];for(let[A,O,k]of[[-1,-3,2.2],[6,-2,3],[21,-1,2.6],[40,-2,3.2],[47,1,2],[-19,0,2.4],[-27.5,1.5,3],[-38,-.5,2.2]]){let J=new Ve(new bn(k,11),new li({map:nt,transparent:!0,depthWrite:!1,blending:$i,opacity:.2}));J.position.set(A,4,O),J.rotation.set(-di,0,-.42),J.renderOrder=4,i.scene.add(J),rt.push({m:J,ph:e()*6})}t.tick.push((A,O)=>{for(let k of rt)k.m.material.opacity=(1-i.night)*(.13+.05*Math.sin(O*.5+k.ph))});let Ct=0;return t.tick.push((A,O)=>{if(Ct+=A,Ct<.05)return;Ct=0;let k=i.target.x,J=i.target.z,[U,W]=ct.cauldron;Math.abs(k-U)<22&&e()<.5&&i.glow.add({x:U+(e()-.5)*.7,y:1.05,z:W+.1,vx:0,vy:.5+e()*.4,vz:0,wander:.6,ph:e()*6,life:1.4,s:3+e()*3,c:e()<.5?"#c79bff":"#8fe0a8",a:.9,k:0}),Math.abs(k-42)<22&&e()<.6&&i.glow.add({x:42+(e()-.5)*1.2,y:2+e()*.6,z:-.4,vx:(e()-.5)*.8,vy:.6,vz:0,g:3,life:.8,s:3+e()*2,c:"#cfefff",a:.8,k:1}),t.chimney&&Math.abs(k-t.chimney[0])<24&&e()<.22&&i.soft.add({x:t.chimney[0]+(e()-.5)*.2,y:t.chimney[1]+.1,z:t.chimney[2],vx:.18,vy:.45,vz:0,wander:.25,ph:e()*6,fadeIn:.4,life:3.4,s:7+e()*5,grow:1.6,c:"#efe9df",a:.5,k:0,fadePow:2});let K=i.night;if(e()<.25+K*.5){let ft=k+(e()-.5)*24,ut=J+(e()-.5)*12;K>.4?i.glow.add({x:ft,y:.4+e()*2,z:ut,vx:0,vy:0,vz:0,wander:1.2,ph:e()*6,blink:3+e()*3,fadeIn:1,life:5+e()*3,s:5+e()*4,c:"#d8ff8a",a:.95,k:0,fadePow:2}):i.soft.add({x:ft,y:.5+e()*3,z:ut,vx:.1,vy:.02,vz:0,wander:.3,ph:e()*6,fadeIn:1,life:5,s:2+e()*2,c:"#fff8dc",a:.6,k:0,fadePow:2})}e()<.08&&i.soft.add({x:k+(e()-.5)*22,y:7+e()*2,z:J-3+e()*6,vx:.5,vy:-.7,vz:0,wander:2,ph:e()*6,life:9,s:5+e()*3,c:e()<.5?"#8fae4a":"#d6a84a",a:.95,g:0,fadePow:6})}),t}function Th(i){if(i<9)return 4.1+Math.sin(i*.35)*.35;if(i<15){let t=(i-9)/6;return 4.1+(.6-4.1)*(t*t*(3-2*t))}return .6+Math.sin(i*.4)*.5}function El(i){let t=1.9+Math.sin(i*.28)*1.1;if(i<=-11)return t;let e=Math.min(1,(i+11)/11),n=e*e*(3-2*e);return t+(4-t)*n}function ha(i,t,e){let n=i.maskCanvas;if(!n)return"grass";ha.data||(ha.data=n.getContext("2d").getImageData(0,0,n.width,n.height).data);let s=Math.round((t+60)*6),a=(Math.round((e+35)*6)*n.width+s)*4,o=ha.data;return o[a+1]>110?"stone":o[a]>100||o[a+2]>100?"dirt":"grass"}function Av(i,t){return i>mn[0]&&i<mn[1]&&t>mn[2]-.6&&t<mn[3]}function Ch(i,t,e,n=.32){if(!da.some(([s,r,a,o])=>t>s&&t<r&&e>a&&e<o)||e>9&&!Av(t,e)&&pf(t,e)<1+n/be.rz*.6)return!0;for(let s of i.colliders)if(s.rect){let[r,a,o,l]=s.rect;if(t>r-n&&t<a+n&&e>o-n&&e<l+n)return!0}else if(s.r&&(t-s.x)**2+((e-s.z)*1.3)**2<(s.r+n)**2)return!0;return!1}var Cv={stall_red:[.12,.9,.655,.6],stall_green:[.12,.9,.655,.6],stall_blue:[.12,.9,.655,.6],stall_mine:[.14,.88,.585,.53]};function Rh(i,t,e){let n=e.join(",");if(i.goodsKey===n)return;i.goodsKey=n;let s=ye[t],r=2,a=i.goodsC;a||(a=i.goodsC=document.createElement("canvas"),a.width=s.width*r,a.height=s.height*r,i.useCanvas(a));let o=a.getContext("2d"),l=a.width,c=a.height;o.clearRect(0,0,l,c),o.drawImage(s,0,0,l,c);let[h,d,u,m]=Cv[t],x=Math.min(e.length,7),g=Math.max(x,4),p=(d-h)/g,f=h+(d-h-p*x)/2+p/2,w=[];for(let I=0;I<x;I++){let M=x>3&&I%2===1,S=Math.sin(I*12.9898+n.length)*.5;w.push({name:e[I],u:f+p*I+S*p*.12,v:M?m:u,s:(M?.19:.21)*c,rot:S*.12})}w.sort((I,M)=>I.v-M.v);for(let I of w){let M=ye[I.name];if(!M)continue;let S=I.u*l,T=I.v*c,P=I.s,v=P*M.width/M.height;o.save(),o.fillStyle="rgba(58,30,16,0.32)",o.beginPath(),o.ellipse(S+P*.04,T-P*.02,v*.4,P*.08,0,0,Math.PI*2),o.fill(),o.translate(S,T),o.rotate(I.rot),o.drawImage(M,-v/2,-P*.94,v,P),o.restore()}i.refresh()}var Ph="brew-a-witch-potion-v1";function pe(){return Date.now()+(V.offsetMs||0)}function Ih(){let i=Date.now();return{v:1,name:"",coins:120,fame:0,fameLv:1,inv:{cham:0,lav:0,man:0,mush:0,feather:0,berry:0,moth:0,glowbug:0,ladybug:0,beetle:0,minnow:0,bluegill:0,carp:0},found:{},wild:{berry:[],bug:[],fish:[]},potions:{},seen:{},plots:[{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-36e5},{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-6*6e4}],q:0,qn:0,discovered:{},recipes:{},fog:[],stall:{open:!1,items:[]},bought:{},cust:{i:0,nextAt:0,here:!1,asked:!1},board:[],newCount:0,brewTut:0,lesson:0,seenTown:!1,seenWood:!1,seenPond:!1,beetles:0,boughtHour:0,pos:[1.5,1.5],lastSeen:i,offsetMs:0,settings:{sound:!0,music:!0,tod:-1}}}var V=Rv();function Rv(){try{let i=JSON.parse(localStorage.getItem(Ph));if(i&&i.v===1){let t=Ih();return Object.assign(t,i,{settings:Object.assign(t.settings,i.settings),inv:Object.assign(t.inv,i.inv),wild:Object.assign(t.wild,i.wild)})}}catch{}return Ih()}var xf=0;function ge(i=!1){if(i){clearTimeout(xf),xf=setTimeout(()=>ge(),400);return}try{localStorage.setItem(Ph,JSON.stringify(V))}catch{}}function _f(){localStorage.removeItem(Ph),V=Ih()}var Et=null,dr=null,pa=null,ji=null,bs=null,Rl=null,ma=!1,fr=0,Il=0,Nh=0,vf=0,Uh=0,Iv=0,fa=null,pr=null;function wf(){if(Et){Et.state==="suspended"&&Et.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Et=new i,dr=Et.createGain(),dr.gain.value=.85,dr.connect(Et.destination),pa=Et.createGain(),pa.connect(dr),ji=Et.createGain(),ji.gain.value=.12,ji.connect(dr),bs=Et.createGain(),bs.gain.value=.5,bs.connect(dr),Rl=Et.createBuffer(1,Et.sampleRate*2,Et.sampleRate);let t=Rl.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;fa=Et.createBufferSource(),fa.buffer=Rl,fa.loop=!0;let e=Et.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=.6,pr=Et.createGain(),pr.gain.value=0,fa.connect(e),e.connect(pr),pr.connect(bs),fa.start(),Pl(),clearInterval(vf),vf=setInterval(Lv,700)}function Pl(){Et&&(pa.gain.value=V.settings.sound?1:0,bs.gain.value=V.settings.sound?.5:0,V.settings.music&&!ma&&Nv(),!V.settings.music&&ma&&Uv())}function Tf(i,t){Uh=i,Iv=t,pr&&pr.gain.setTargetAtTime(.09*t,Et.currentTime,.3)}function xe(i,t,e,{type:n="sine",vol:s=.3,slide:r=0,attack:a=.005,bus:o=pa}={}){let l=Et.createOscillator(),c=Et.createGain();l.type=n,l.frequency.setValueAtTime(i,t),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,i*r),t+e),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+a),c.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(o),l.start(t),l.stop(t+e+.02)}function Un(i,t,{vol:e=.2,freq:n=1200,q:s=1,type:r="bandpass",to:a=0,bus:o=pa}={}){let l=Et.createBufferSource();l.buffer=Rl;let c=Et.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(n,i),c.Q.value=s,a&&c.frequency.exponentialRampToValueAtTime(a,i+t);let h=Et.createGain();h.gain.setValueAtTime(e,i),h.gain.exponentialRampToValueAtTime(1e-4,i+t),l.connect(c),c.connect(h),h.connect(o),l.start(i,Math.random()),l.stop(i+t+.02)}var Pv=[0,2,4,7,9],yf=0,Lh=0,bf=0,dt={step(i="grass"){if(!Et)return;let t=Et.currentTime;t-yf<.12||(yf=t,Lh^=1,i==="stone"?Un(t,.05,{vol:.09,freq:Lh?1900:1500,q:3}):Un(t,.07,{vol:.07,freq:Lh?700:560,q:1.2,type:"lowpass"}))},pluck(i=0){if(!Et)return;let t=Et.currentTime,e=Pv[i%5]+12*Math.floor(i/5),n=523*Math.pow(2,e/12);xe(n,t,.35,{type:"triangle",vol:.2}),xe(n*2,t,.18,{type:"sine",vol:.06})},harvest(){if(!Et)return;let i=Et.currentTime;Un(i,.12,{vol:.12,freq:900,to:300,q:1}),xe(392,i,.12,{type:"sine",vol:.18,slide:1.8}),xe(784,i+.08,.25,{type:"triangle",vol:.14})},pop(){if(!Et)return;let i=Et.currentTime;xe(620,i,.09,{type:"sine",vol:.18,slide:1.9})},splash(){if(!Et)return;let i=Et.currentTime;Un(i,.35,{vol:.2,freq:1400,to:300,q:.8}),[0,.06,.13].forEach((t,e)=>xe(300+e*140+Math.random()*60,i+t,.12,{type:"sine",vol:.12,slide:2.4}))},bubble(){if(!Et)return;let i=Et.currentTime;xe(180+Math.random()*260,i,.1,{type:"sine",vol:.07,slide:2.6})},stir(){if(!Et)return;let i=Et.currentTime;Un(i,.18,{vol:.05,freq:500,to:900,q:2})},pour(){if(!Et)return;let i=Et.currentTime;Un(i,.2,{vol:.06,freq:2600,q:1.4})},reveal(){if(!Et)return;let i=Et.currentTime;xe(880+Math.random()*200,i,.4,{type:"sine",vol:.03})},near(){if(!Et)return;let i=Et.currentTime;xe(1175,i,.3,{type:"sine",vol:.1}),xe(1568,i+.07,.4,{type:"sine",vol:.08})},bottle(){if(!Et)return;let i=Et.currentTime;Un(i,.08,{vol:.12,freq:3e3,q:3}),xe(1046,i+.05,.12,{type:"square",vol:.05}),[523,659,784,1046].forEach((t,e)=>xe(t,i+.1+e*.07,.45,{type:"triangle",vol:.13}))},discover(){if(!Et)return;let i=Et.currentTime;Un(i,.8,{vol:.12,freq:400,to:7e3,q:.7}),[523,659,784,988,1175,1568].forEach((t,e)=>xe(t,i+.15+e*.08,.7,{type:"triangle",vol:.12})),[262,330,392].forEach(t=>xe(t,i+.6,1.4,{type:"sine",vol:.12}))},fail(){if(!Et)return;let i=Et.currentTime;Un(i,.4,{vol:.2,freq:300,q:.7,type:"lowpass"}),[330,277,220].forEach((t,e)=>xe(t,i+e*.12,.25,{type:"triangle",vol:.15}))},coin(i=0){if(!Et)return;let t=Et.currentTime+i*.05;xe(1568,t,.07,{type:"square",vol:.05}),xe(2093,t+.06,.18,{type:"square",vol:.05})},click(){if(!Et)return;let i=Et.currentTime;xe(700,i,.06,{type:"triangle",vol:.16,slide:1.4})},open(){if(!Et)return;let i=Et.currentTime;Un(i,.25,{vol:.08,freq:500,to:2500,q:.8}),xe(523,i,.15,{type:"triangle",vol:.1,slide:1.5})},close(){if(!Et)return;let i=Et.currentTime;Un(i,.2,{vol:.06,freq:2e3,to:500,q:.8})},quest(){if(!Et)return;let i=Et.currentTime;[784,988,1175].forEach((t,e)=>xe(t,i+e*.09,.4,{type:"sine",vol:.12}))},meow(){if(!Et)return;let i=Et.currentTime;xe(700,i,.32,{type:"triangle",vol:.09,slide:1.35,attack:.04}),xe(950,i+.12,.25,{type:"sine",vol:.05,slide:.7})},caw(){if(!Et)return;let i=Et.currentTime;Un(i,.18,{vol:.14,freq:1100,q:4}),xe(420,i,.18,{type:"sawtooth",vol:.04,slide:.8})},blip(i,t=1){if(!Et||!/[a-z0-9]/i.test(i))return;let e=Et.currentTime;if(e-bf<.045)return;bf=e;let n=i.toLowerCase().charCodeAt(0)%7;xe((300+n*38)*t,e,.05,{type:"square",vol:.035,slide:1.1})}};function Lv(){if(!Et||!V.settings.sound)return;let i=Et.currentTime;if(Math.random()<.55*(1-Uh)){let t=2200+Math.random()*1400,e=2+(Math.random()*2|0);for(let n=0;n<e;n++)xe(t*(1+n*.08),i+n*.09,.07,{type:"sine",vol:.025,slide:1.25,bus:bs})}if(Math.random()<.8*Uh)for(let t=0;t<4;t++)xe(4400+Math.random()*200,i+t*.045,.03,{type:"sine",vol:.012,bus:bs})}var Dv=72,Mf=[77,0,81,0,84,0,81,79,77,0,76,0,72,0,0,0,74,0,77,0,81,0,79,77,76,0,79,0,77,0,0,0],Sf=[53,60,57,60,50,57,53,57,46,53,50,53,48,55,52,55],Dh=i=>440*Math.pow(2,(i-69)/12);function Nv(){ma=!0,fr=Et.currentTime+.3,Il=0,clearInterval(Nh),Nh=setInterval(Fv,80)}function Uv(){ma=!1,clearInterval(Nh)}function Fv(){if(!Et||!ma)return;let i=60/Dv/2;for(;fr<Et.currentTime+.3;){let t=Mf[Il%Mf.length];t&&(xe(Dh(t),fr,i*3,{type:"sine",vol:.5,bus:ji,attack:.004}),xe(Dh(t+12),fr,i*1.2,{type:"sine",vol:.12,bus:ji})),xe(Dh(Sf[Il%Sf.length]-12),fr,i*1.8,{type:"triangle",vol:.28,bus:ji,attack:.01}),fr+=i,Il++}}function ga(i){ji&&ji.gain.setTargetAtTime(i?.04:.12,Et.currentTime,.3)}function Fe(i=10){try{navigator.vibrate&&navigator.userActivation&&navigator.userActivation.hasBeenActive&&navigator.vibrate(i)}catch{}}var Vt=(i,t=document)=>t.querySelector(i);function xr(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Fn=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Fn);var Jn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ll=0,Ef=0,Af=0;function xa(i,t=!1){Ef=i;let e=Vt("#coinN");if(!t){Ll=i,e.textContent=i;return}cancelAnimationFrame(Af);let n=Ll,s=performance.now(),r=()=>{let a=Math.min(1,(performance.now()-s)/650);Ll=Math.round(n+(Ef-n)*(1-(1-a)**3)),e.textContent=Ll,a<1&&(Af=requestAnimationFrame(r))};r(),Kn(Vt("#hud .coins"))}function Bh(i,t){Vt("#fameN").textContent="Lv "+i,Vt("#hud .fame .bar i").style.width=Math.round(t*100)+"%"}function If(i,t,e){let n=Vt("#clock");n.querySelector("span").textContent=i,n.querySelector("em").textContent=t,n.classList.toggle("night",e>.5)}var Fh="";function Pf(i,t=""){let e=Vt("#quest"),n=i+"|"+t;if(n===Fh)return;let s=!Fh.startsWith(i+"|");if(Fh=n,!i){e.classList.add("hidden");return}e.classList.remove("hidden"),e.querySelector(".qtext").textContent=i,e.querySelector(".qprog").textContent=t,s?(e.classList.remove("new"),e.offsetWidth,e.classList.add("new")):Kn(e.querySelector(".qprog"))}function _r(i){let t=Vt("#bBag .badge");t.textContent=i,t.classList.toggle("hidden",!i),i&&Kn(t)}function Nl(i,t){let e=Vt("#note");if(!i){e.classList.add("hidden"),e.onclick=null;return}e.innerHTML=i,e.classList.remove("hidden"),e.onclick=t||null}function Kn(i){i&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}function ts(i,t,{ms:e=2600}={}){let n=Vt("#toasts"),s=xr("div","toast",(t?`<img src="${ee(t)}" alt="">`:"")+`<span>${i}</span>`);for(n.appendChild(s);n.children.length>3;)n.firstChild.remove();return setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},e),s}var Cf=0,Oh=!1,Lf=()=>!1,mr=[];function Df(i){Lf=i}function Tn(i,t="",e={}){for(let n=mr.length-1;n>=0;n--)mr[n].title===i&&mr.splice(n,1);mr.push({title:i,sub:t,...e}),kh()}function kh(){if(Oh||!mr.length)return;if(Qi||gr||Lf()){setTimeout(kh,300);return}let{title:i,sub:t,icon:e=null,ms:n=2800,kind:s="",onShow:r=null}=mr.shift(),a=Vt("#banner");a.className="banner "+s,a.innerHTML=`<div class="ribbon big"><span>${i}</span></div>${t?`<p>${t}</p>`:""}${e?`<img src="${ee(e)}" alt="">`:""}`,a.offsetWidth,a.classList.add("show"),Oh=!0,r&&r(),clearTimeout(Cf),Cf=setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>{Oh=!1,kh()},450)},n)}function Ul(i,t,e,{size:n=56,delay:s=0,arc:r=120,dur:a=.75,onArrive:o=null}={}){setTimeout(()=>{let l=e.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2,d=xr("img","flyer");d.src=i.includes("/")?i:ee(i),d.style.width=n+"px",Vt("#fly").appendChild(d);let u=performance.now(),m=t.x+(Math.random()-.5)*30,x=t.y+(Math.random()-.5)*20,g=()=>{let p=Math.min(1,(performance.now()-u)/(a*1e3)),f=p<.5?2*p*p:1-(-2*p+2)**2/2,w=m+(c-m)*f,I=x+(h-x)*f-Math.sin(p*Math.PI)*r,M=p<.15?.4+p/.15*.8:1.2-(p-.15)*.6;d.style.transform=`translate(${w-n/2}px, ${I-n/2}px) scale(${M}) rotate(${p*30}deg)`,p<1?requestAnimationFrame(g):(d.remove(),Kn(e),o&&o())};g()},s)}function Nf(i,t,e){let n=Vt("#hud .coins"),s=Math.min(10,Math.max(3,Math.round(i/12)));for(let r=0;r<s;r++)Ul("coin",t,n,{size:34,delay:r*55,arc:80+Math.random()*60,dur:.6,onArrive:()=>{dt.coin(r%3),e&&e(r,s)}})}function On(i,t,e=""){let n=xr("div","pop-text "+e,i);n.style.left=t.x+"px",n.style.top=t.y+"px",Vt("#fly").appendChild(n),setTimeout(()=>n.remove(),1300)}var Dl=class{constructor(t){this.world=t,this.root=Vt("#tags"),this.map=new Map,this.tmp={x:0,y:0}}get(t,e,n){let s=this.map.get(t);return s||(s={el:xr("div","tag "+e),html:null,vis:!0},this.root.appendChild(s.el),this.map.set(t,s)),n!=null&&n!==s.html&&(s.el.innerHTML=n,s.html=n),s}place(t,e,n,s,r=!0){let a=this.map.get(t);if(!a)return;let o=this.world.toScreen(e,n,s,this.tmp),l=r&&!o.behind&&o.x>-80&&o.x<innerWidth+80&&o.y>-60&&o.y<innerHeight*.8;return l!==a.vis&&(a.el.classList.toggle("off",!l),a.vis=l),l&&(a.el.style.transform=`translate(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px)`),o}remove(t){let e=this.map.get(t);e&&(e.el.remove(),this.map.delete(t))}has(t){return this.map.has(t)}};function Fl(i,t){let e=Vt("#qptr");if(!t){e.classList.add("hidden");return}let n=i.toScreen(t[0],t[1],t[2]),s=innerWidth,r=innerHeight,a=46;if(e.classList.remove("hidden"),!n.behind&&n.x>a&&n.x<s-a&&n.y>a+30&&n.y<r-a)e.classList.remove("edge"),e.style.transform=`translate(${n.x}px, ${n.y}px)`;else{let o=n.x-s/2,l=n.y-r/2;n.behind&&(o=-o,l=-l);let c=Math.min((s/2-a)/Math.abs(o||1e-6),(r/2-a)/Math.abs(l||1e-6));e.classList.add("edge"),e.style.transform=`translate(${s/2+o*c}px, ${r/2+l*c}px) rotate(${Math.atan2(l,o)}rad)`}}var Qi=null;function Ol(){return!!Qi}function Ti(i,t,e=[],{pitch:n=1,side:s="left"}={}){return new Promise(r=>{let a=Vt("#dialog");a.classList.remove("hidden"),a.classList.toggle("right",s==="right"),a.querySelector(".dlg-name span").textContent=i;let o=a.querySelector(".dlg-text"),l=a.querySelector(".dlg-choices"),c=a.querySelector(".dlg-next");o.textContent="",l.innerHTML="",c.classList.add("hidden"),ga(!0);let h={i:0,done:!1,sel:0};Qi=h;let d=a.querySelector(".dlg-box");d.classList.remove("pop"),d.offsetWidth,d.classList.add("pop");let u=g=>{Qi=null,a.classList.add("hidden"),ga(!1),r(g)},m=()=>{if(h.done=!0,!e.length){c.classList.remove("hidden");return}e.forEach((g,p)=>{let f=xr("button","choice"+(g.disabled?" disabled":""),(g.icon?`<img src="${ee(g.icon)}" alt="">`:"")+`<span>${g.label||g}</span>${Fn?"":`<kbd>${p+1}</kbd>`}`);f.style.animationDelay=p*.06+"s",f.addEventListener("click",w=>{if(w.stopPropagation(),g.disabled){dt.click(),Kn(f);return}dt.click(),u(p)}),l.appendChild(f)})};h.choose=g=>{let p=e[g];p&&!p.disabled&&(dt.click(),u(g))},h.advance=()=>{if(!h.done){h.i=t.length,o.textContent=t,m();return}e.length||(dt.click(),u(-1))};let x=()=>{if(Qi!==h||h.done)return;if(h.i++,o.textContent=t.slice(0,h.i),dt.blip(t[h.i-1]||"",n),h.i>=t.length){m();return}let g=t[h.i-1];setTimeout(x,g==="."||g==="?"||g==="!"?180:g===","?90:24)};setTimeout(x,120),a.onclick=()=>h.advance()})}function Uf(i){if(!Qi)return!1;if(i==="KeyE"||i==="Space"||i==="Enter")return Qi.advance(),!0;let t=parseInt(i.replace("Digit",""),10);return t>=1&&t<=4&&Qi.choose(t-1),!0}var gr=null;function kl(){return!!gr}function Ei(i,t,{onClose:e=null,title:n=""}={}){Ms(!0);let s=Vt("#panel");s.className="modal";let r=xr("div","card "+i);return r.innerHTML=(n?`<div class="ribbon card-title"><span>${n}</span></div>`:"")+t+'<button class="btn-close" aria-label="Close"></button>',s.appendChild(r),r.querySelector(".btn-close").addEventListener("click",()=>Ms()),s.onclick=a=>{a.target===s&&Ms()},gr={card:r,onClose:e},dt.open(),ga(!0),r}function Ms(i=!1){if(!gr)return;let t=gr;gr=null;let e=Vt("#panel");e.className="modal hidden",e.innerHTML="",i||dt.close(),ga(!1),t.onClose&&t.onClose()}function _a({medal:i,potion:t,title:e,name:n,tier:s,first:r,ings:a}){return new Promise(o=>{let l=Vt("#discovery");l.innerHTML=`
      <div class="rays"></div>
      <div class="disc-card">
        <div class="ribbon big"><span>${e}</span></div>
        <div class="disc-icons"><img class="medal" src="${ee(i)}" alt=""><img class="potion" src="${ee(t)}" alt=""></div>
        <h2>${n}</h2>
        <p class="tier t${s.i}">${s.label}</p>
        <p class="first">${r}</p>
        <div class="recipe">${a.map(h=>`<img src="${ee(h)}" alt="">`).join("<b>+</b>")}</div>
        <button class="btn-green"><span>Wonderful!</span></button>
      </div>`,l.classList.remove("hidden"),l.offsetWidth,l.classList.add("show"),Fe(60);let c=()=>{l.classList.remove("show"),setTimeout(()=>{l.classList.add("hidden"),l.innerHTML=""},300),dt.click(),o()};l.querySelector(".btn-green").addEventListener("click",c),_a.close=c})}var we={x:0,z:0,keys:new Set},Qe=null;function Ff({onAct:i,onKey:t}){let e=()=>{let h=we.keys;we.kx=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),we.kz=(h.has("KeyS")||h.has("ArrowDown")?1:0)-(h.has("KeyW")||h.has("ArrowUp")?1:0)};window.addEventListener("keydown",h=>{h.target&&h.target.tagName==="INPUT"||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault(),!h.repeat&&(we.keys.add(h.code),e(),t(h.code,!0)))}),window.addEventListener("keyup",h=>{we.keys.delete(h.code),e(),t(h.code,!1)}),window.addEventListener("blur",()=>{we.keys.clear(),e()}),we.kx=we.kz=0;let n=Vt("#touch"),s=Vt("#stick"),r=s.querySelector("i");n.addEventListener("pointerdown",h=>{Qe||(Qe={id:h.pointerId,ox:h.clientX,oy:h.clientY},n.setPointerCapture(h.pointerId),s.style.left=Qe.ox+"px",s.style.top=Qe.oy+"px",s.classList.remove("hidden"),r.style.transform="translate(-50%,-50%)")}),n.addEventListener("pointermove",h=>{if(!Qe||h.pointerId!==Qe.id)return;let d=46,u=h.clientX-Qe.ox,m=h.clientY-Qe.oy,x=Math.hypot(u,m);x>d&&(Qe.ox+=u*(1-d/x),Qe.oy+=m*(1-d/x),u=h.clientX-Qe.ox,m=h.clientY-Qe.oy,s.style.left=Qe.ox+"px",s.style.top=Qe.oy+"px");let g=Math.min(1,Math.hypot(u,m)/d),p=Math.atan2(m,u);we.sx=g>.12?Math.cos(p)*g:0,we.sz=g>.12?Math.sin(p)*g:0,r.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${m}px))`});let a=h=>{!Qe||h.pointerId!==Qe.id||(Qe=null,we.sx=we.sz=0,s.classList.add("hidden"))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),we.sx=we.sz=0;let o=Vt("#act"),l=null,c=()=>{l&&(window.removeEventListener("click",l,!0),l=null)};o.addEventListener("pointerdown",h=>{h.preventDefault(),Kn(o),i(),c(),l=d=>{d.stopPropagation(),d.preventDefault(),c()},window.addEventListener("click",l,!0),setTimeout(c,700)}),window.addEventListener("pointerdown",h=>{o.contains(h.target)||c()},!0)}function Of(){let i=we.kx+we.sx,t=we.kz+we.sz,e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),we.x=i,we.z=t,we}function Bl(){we.keys.clear(),we.kx=we.kz=we.sx=we.sz=0,Qe=null,Vt("#stick").classList.add("hidden")}var Rf="";function vr(i,t){let e=Vt("#prompt"),n=Vt("#act"),s=i||"";s!==Rf&&(Rf=s,i?(e.innerHTML=`<div class="pin">${Fn?"":"<kbd>E</kbd>"}<span>${i}</span></div>`,e.classList.remove("hidden"),e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),n.querySelector("span").textContent=i.replace(/ \(.+\)$/,""),n.classList.remove("hidden")):(e.classList.add("hidden"),n.classList.add("hidden"))),i&&t&&(e.style.transform=`translate(${t.x}px, ${t.y}px)`)}function va(i){return Vt("#fade").classList.toggle("on",i),new Promise(t=>setTimeout(t,i?260:10))}var he=Math.PI*2,Ai=(i,t,e)=>Math.max(t,Math.min(e,i)),He=(i,t,e)=>i+(t-i)*e,Ss=i=>i*i*(3-2*i),kf=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),Bt=(i,t)=>i+Math.random()*(t-i),Ov=[["minnow",.55],["bluegill",.3],["carp",.15]];function kv(){let i=Math.random();for(let[t,e]of Ov)if((i-=e)<0)return t;return"minnow"}var Bv={ladybug:"Ladybug",beetle:"Moss Beetle",moth:"Wood Moth",glowbug:"Glowbug",minnow:"Pond Minnow",bluegill:"Bluegill",carp:"Golden Carp"},zv={ladybug:{img:"mb_ladybug",h:104,speed:92,r:40},beetle:{img:"mb_beetle",h:112,speed:78,r:42},moth:{img:"mb_moth",h:104,speed:150,r:46,flies:!0},glowbug:{img:"mb_glowbug",h:98,speed:62,r:38}},Gv={minnow:{img:"mp_minnow",len:74,speed:62,window:.8,nib:[1,3]},bluegill:{img:"mp_bluegill",len:84,speed:52,window:.68,nib:[1,3]},carp:{img:"mp_carp",len:112,speed:44,window:.56,nib:[2,4]}},Vv={ladybug:"i_ladybug",beetle:"i_beetle",moth:"i_moth",glowbug:"i_glowbug",minnow:"i_minnow",bluegill:"i_bluegill",carp:"i_carp"},zl=class{constructor(){let t=this.c=document.createElement("canvas");t.id="mini",t.className="hidden",document.body.appendChild(t),this.g=t.getContext("2d"),this.isOpen=!1,this.covers=!1,this.fx=[],this.sil={};let e=n=>[n.clientX,n.clientY];t.addEventListener("pointermove",n=>{!this.isOpen||n.pointerType==="touch"||(this.aimMode="mouse",[this.ax,this.ay]=e(n))}),t.addEventListener("pointerdown",n=>{if(!this.isOpen||this.phase!=="play")return;n.preventDefault();let[s,r]=e(n);if(Math.hypot(s-this.closeBtn[0],r-this.closeBtn[1])<this.closeBtn[2]*1.3){dt.close(),this.finish();return}this.aimMode=n.pointerType==="touch"?"touch":"mouse",this.ax=s,this.ay=r,this.press(!0)})}open(t,e={}){return this.kind=t,this.o=e,this.got=[],this.fled=!1,this.fx=[],this.endT=null,this.card=null,this.isOpen=!0,this.covers=!1,this.phase="in",this.pt=0,this.t=0,this.from=e.from||{x:innerWidth/2,y:innerHeight/2},this.resize(),this.ax=this.W*.5,this.ay=this.H*.5,this.aimMode=Fn?"touch":"mouse",t==="bug"?this.setupBug(e):this.setupFish(e),this.c.classList.remove("hidden"),this.clip(0),dt.open(),new Promise(n=>{this.done=n})}finish(){this.phase!=="out"&&(this.phase="out",this.pt=0,this.covers=!1)}resize(){let t=Math.min(2,devicePixelRatio||1);this.W=innerWidth,this.H=innerHeight,this.d=t,this.c.width=Math.round(this.W*t),this.c.height=Math.round(this.H*t),this.S=Math.min(this.W/1100,this.H/620),this.closeBtn=[this.W-40*Math.max(.8,this.S),40*Math.max(.8,this.S),22*Math.max(.8,this.S)]}clip(t){let e=Math.hypot(this.W,this.H)*Ss(Ai(t,0,1));this.c.style.clipPath=t>=1?"none":`circle(${e.toFixed(1)}px at ${this.from.x.toFixed(1)}px ${this.from.y.toFixed(1)}px)`}key(t,e){if(!(!e||this.phase!=="play")){if(t==="Escape"){dt.close(),this.finish();return}(t==="Space"||t==="KeyE"||t==="Enter")&&this.press(!1),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&(this.aimMode="key")}}press(t){this.kind==="bug"?this.bugPress(t):this.fishPress(t)}update(t,e){if(!this.isOpen)return;if((innerWidth!==this.W||innerHeight!==this.H)&&this.resize(),this.t+=t,this.phase==="in")this.pt+=t/.45,this.clip(this.pt),this.pt>=1&&(this.phase="play",this.covers=!0);else if(this.phase==="out"&&(this.pt+=t/.4,this.clip(1-this.pt),this.pt>=1)){this.isOpen=!1,this.c.classList.add("hidden"),this.c.style.clipPath="";let s=this.done;this.done=null,s&&s({got:this.got,fled:this.fled});return}if(this.aimMode==="key"&&e&&(e.x||e.z)){let s=620*this.S*t;this.ax=Ai(this.ax+e.x*s,0,this.W),this.ay=Ai(this.ay+e.z*s,0,this.H)}this.endT!=null&&this.phase==="play"&&(this.endT-=t,this.endT<=0&&(this.endT=null,this.finish())),this.kind==="bug"?this.bugUpdate(t):this.fishUpdate(t),this.fxUpdate(t);let n=this.g;n.setTransform(this.d,0,0,this.d,0,0),this.kind==="bug"?this.bugDraw(n):this.fishDraw(n),this.fxDraw(n),this.drawChrome(n)}img(t,e,n,s,r,{rot:a=0,sx:o=1,sy:l=1,alpha:c=1,w:h=null}={}){let d=ye[e];if(!d)return;let u=h??r*d.width/d.height;t.save(),t.globalAlpha=c,t.translate(n,s),t.rotate(a),t.scale(o,l),t.drawImage(d,-u/2,-r/2,u,r),t.restore()}silhouette(t,e){let n=t+e;if(this.sil[n])return this.sil[n];let s=ye[t],r=document.createElement("canvas");r.width=s.width,r.height=s.height;let a=r.getContext("2d");return a.drawImage(s,0,0),a.globalCompositeOperation="source-in",a.fillStyle=e,a.fillRect(0,0,r.width,r.height),this.sil[n]=r}pill(t,e,n,s,{size:r=20,bg:a="rgba(251,246,234,0.94)",fg:o="#5a3424",alpha:l=1}={}){let c=this.S,h=Math.max(13,r*c);t.save(),t.globalAlpha=l,t.font=`700 ${h}px Mali, sans-serif`,t.textAlign="center",t.textBaseline="middle";let d=t.measureText(e).width+h*1.6,u=h*2;t.fillStyle="rgba(40,24,30,0.25)",Bf(t,n-d/2,s-u/2+3,d,u,u/2),t.fill(),t.fillStyle=a,Bf(t,n-d/2,s-u/2,d,u,u/2),t.fill(),t.fillStyle=o,t.fillText(e,n,s+h*.04),t.restore()}drawChrome(t){let[e,n,s]=this.closeBtn;t.save(),t.fillStyle="rgba(40,24,30,0.3)",t.beginPath(),t.arc(e,n+3,s,0,he),t.fill(),t.fillStyle="rgba(251,246,234,0.95)",t.beginPath(),t.arc(e,n,s,0,he),t.fill(),t.strokeStyle="#5a3424",t.lineWidth=Math.max(2.5,s*.16),t.lineCap="round";let r=s*.38;t.beginPath(),t.moveTo(e-r,n-r),t.lineTo(e+r,n+r),t.moveTo(e+r,n-r),t.lineTo(e-r,n+r),t.stroke(),t.restore(),this.hint&&this.phase==="play"&&this.pill(t,this.hint,this.W/2,34*Math.max(.8,this.S),{size:17,alpha:this.hintA==null?1:this.hintA}),this.say&&this.sayT>0&&this.pill(t,this.say,this.sayX,this.sayY-(1-Math.min(1,this.sayT*3))*0-(.9-this.sayT)*30*this.S,{size:18,alpha:Math.min(1,this.sayT*3)}),this.card&&this.drawCard(t)}shout(t,e,n,s=.9){this.say=t,this.sayX=e,this.sayY=n,this.sayT=s}showCard(t,e){this.card={kind:t,t:0,x0:e[0],y0:e[1]},dt.discover(),Fe(14),this.burst(this.W/2,this.H*.42,26,["#fff6c9","#ffd76a","#ffffff"])}drawCard(t){let e=this.card,n=this.S,s=Math.min(1,e.t/.45),r=Ai((e.t-1.25)/.35,0,1),a=He(e.x0,this.W/2,Ss(s)),o=He(e.y0,this.H*.42,Ss(s))-Math.sin(s*Math.PI)*60*n,l=(.4+.75*Ss(s)+Math.sin(e.t*9)*.03*(1-r))*(1-r*.7);t.save(),t.globalAlpha=1-r;let c=t.createRadialGradient(a,o,0,a,o,170*n);c.addColorStop(0,"rgba(255,246,200,0.75)"),c.addColorStop(1,"rgba(255,246,200,0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,170*n,0,he),t.fill(),t.translate(a,o),t.rotate(Math.sin(e.t*3)*.06*(1-s)),this.img(t,Vv[e.kind],0,0,170*n*l),t.restore(),s>=1&&r<1&&this.pill(t,`${Bv[e.kind]}!`,this.W/2,this.H*.42+120*n,{size:24,alpha:1-r})}burst(t,e,n,s,r=260){for(let a=0;a<n;a++){let o=Bt(0,he),l=Bt(.3,1)*r*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-60*this.S,life:Bt(.5,.9),t:0,s:Bt(3,7)*this.S,c:s[a%s.length]})}}ring(t,e,n,s,r=.9,a=.7,o=2.5){this.fx.push({k:"ring",x:t,y:e,r0:n*this.S,r1:s*this.S,life:r,t:0,a,w:o})}drops(t,e,n,s=200){for(let r=0;r<n;r++){let a=Bt(-Math.PI*.95,-Math.PI*.05),o=Bt(.4,1)*s*this.S;this.fx.push({k:"drop",x:t,y:e,vx:Math.cos(a)*o,vy:Math.sin(a)*o,life:Bt(.4,.7),t:0,s:Bt(2.5,5)*this.S})}}fxUpdate(t){for(let e of this.fx)e.t+=t,e.vx!=null&&(e.x+=e.vx*t,e.y+=e.vy*t,e.vy+=(e.k==="drop"?700:240)*this.S*t,e.vx*=1-t*1.5),e.k==="leaf"&&(e.rot+=e.vr*t);this.fx=this.fx.filter(e=>e.t<e.life),this.sayT>0&&(this.sayT-=t),this.card&&(this.card.t+=t,this.card.t>1.6&&(this.card=null))}fxDraw(t){for(let e of this.fx){let n=e.t/e.life;if(e.k==="ring")t.save(),t.globalAlpha=e.a*(1-n),t.strokeStyle="#eafcff",t.lineWidth=e.w*this.S*(1-n*.5),t.beginPath(),t.ellipse(e.x,e.y,He(e.r0,e.r1,Ss(n)),He(e.r0,e.r1,Ss(n))*.42,0,0,he),t.stroke(),t.restore();else if(e.k==="drop")t.save(),t.globalAlpha=1-n,t.fillStyle="#eafcff",t.beginPath(),t.arc(e.x,e.y,e.s,0,he),t.fill(),t.restore();else if(e.k==="spark"){t.save(),t.globalAlpha=1-n,t.fillStyle=e.c,t.translate(e.x,e.y),t.rotate(e.t*6);let s=e.s*(1-n*.5);t.beginPath();for(let r=0;r<8;r++){let a=r%2?s*.4:s;t.lineTo(Math.cos(r/8*he)*a,Math.sin(r/8*he)*a)}t.fill(),t.restore()}else e.k==="leaf"&&this.img(t,e.img,e.x,e.y,e.h,{rot:e.rot,alpha:1-n*n})}}setupBug(t){let e=this.S,n=this.W,s=this.H;this.arena=[n*.14,s*.2,n*.86,s*.86],this.bugs=[],this.addBug(t.kind||"ladybug",n*Bt(.3,.7),s*Bt(.4,.65),!0),this.misses=0,this.net={x:n*.5,y:s*.72,h:1,swoop:-1,hold:0,vx:0,vy:0},this.ax=this.net.x,this.ay=this.net.y,this.dress=[];let r=[[.05,.12,"mb_rock_a",150],[.95,.15,"mb_fern",190],[.03,.9,"mb_fern",200],[.97,.88,"mb_rock_b",120],[.5,.04,"mb_leaves_a",150],[.2,.98,"mb_leaves_b",120],[.8,1,"mb_leaves_a",140],[0,.5,"mb_leaves_b",130],[1,.52,"mb_leaves_a",150],[.3,.06,"mb_rock_b",90],[.72,.05,"mb_fern",150]];for(let[a,o,l,c]of r)this.dress.push({n:l,x:a*n,y:o*s,h:c*e*Bt(.9,1.1),rot:Bt(-.5,.5),f:Math.random()<.5?-1:1});this.pebbles=Array.from({length:40},()=>({x:Bt(0,n),y:Bt(0,s),r:Bt(2,6)*e,c:Math.random()<.5?"#8a6a4a":"#6d523a"})),this.bugBgKey=null,this.pileT=0,this.pileNag=!1,this.leftT=0,this.leftNag=!1,this.pile=t.beetle?{x:n*(Math.random()<.5?.25:.74),y:s*Bt(.32,.72),open:0,has:"beetle",rus:2}:null,this.hint=Fn?"Tap the bug to bring the net down":"Move the net, then click or press Space",this.hintA=1,t.beetle&&t.firstBeetle&&(this.hint2="Something rustles under the leaves...")}addBug(t,e,n,s=!1){let r=zv[t];this.bugs.push({kind:t,d:r,x:e,y:n,a:Bt(0,he),at:0,v:0,mode:"walk",t:Bt(1,2.5),main:s,wob:0,fly:r.flies?1:0,sc:1,alpha:1})}bugUpdate(t){let e=this.S,n=this.net,[s,r,a,o]=this.arena,l=n.swoop>=0?0:1,c=n.x,h=n.y;n.x=He(n.x,this.ax,l),n.y=He(n.y,this.ay,l),n.vx=(n.x-c)/Math.max(t,.001),n.vy=(n.y-h)/Math.max(t,.001),n.sp=He(n.sp||0,Math.hypot(n.vx,n.vy),Math.min(1,t*12));let d=n.sp>1250*e;n.swoop>=0?(n.swoop+=t,n.h=Math.max(0,1-n.swoop/.12),n.swoop>=.12&&!n.landed&&(n.landed=!0,this.netLanded()),n.swoop>=.12+(n.hold||.08)&&(n.swoop=-1,n.landed=!1,n.hold=0)):n.h=He(n.h,1,Math.min(1,t*10)),this.pile&&!this.pile.open&&(this.pile.rus-=t,this.pile.rus<-.5&&(this.pile.rus=Bt(1.5,3)),this.pile.rus<0&&this.hint2&&(this.hint=this.hint2,this.hint2=null)),this.pile&&this.pile.open&&(this.pile.open+=t);let u=0;for(let g of this.bugs){if(g.t-=t,g.mode==="caught"){g.wob+=t,u++;continue}if(g.mode==="gone")continue;if(u++,g.mode==="flee"){g.v=He(g.v,g.d.speed*5*e,Math.min(1,t*3)),(g.d.flies||g.kind!=="beetle")&&(g.fly=Math.min(1.6,g.fly+t*2),g.sc=1+g.fly*.25),g.x+=Math.cos(g.a)*g.v*t,g.y+=Math.sin(g.a)*g.v*t,(g.x<-150||g.x>this.W+150||g.y<-150||g.y>this.H+150)&&(g.mode="gone",u--),g.wob+=t*18;continue}d&&g.mode!=="dash"&&Math.hypot(g.x-n.x,g.y-n.y)<190*e&&n.swoop<0&&this.scare(g,.5);let p=g.x<s||g.x>a,f=g.y<r||g.y>o;g.t<=0&&(g.mode==="walk"?(g.mode="pause",g.t=g.d.flies?Bt(1.2,2.4):Bt(.5,1.4)):(g.mode="walk",g.t=Bt(1.4,3.2),g.at=g.a+Bt(-1.6,1.6))),p||f?g.at=Math.atan2((r+o)/2-g.y,(s+a)/2-g.x):Math.random()<t*.9&&(g.at=g.a+Bt(-1.2,1.2));let w=g.mode==="pause"?0:g.mode==="dash"?g.d.speed*3.4:g.d.speed;g.v=He(g.v,w*e,Math.min(1,t*(g.mode==="dash"?8:4))),g.mode==="dash"&&g.t<=0&&(g.mode="walk",g.t=Bt(1,2)),g.a+=kf(g.a,g.at)*Math.min(1,t*(g.mode==="dash"?7:2.6)),g.d.flies&&(g.fly=He(g.fly,g.mode==="pause"?0:1,Math.min(1,t*3)),g.a+=Math.sin(this.t*2.3+g.x*.01)*t*1.2*g.fly),g.x+=Math.cos(g.a)*g.v*t,g.y+=Math.sin(g.a)*g.v*t,g.wob+=t*(g.v/(e*6)+2)}let m=this.bugs.filter(g=>g.main);if(m.length&&m.every(g=>g.mode==="gone")&&!this.card&&u&&(this.leftT=(this.leftT||0)+t,!this.leftNag&&this.got.length&&(this.leftNag=!0,this.hint="One more! Catch it before it wanders off",this.hintA=1),this.leftT>4.5))for(let g of this.bugs)g.mode!=="caught"&&g.mode!=="gone"&&g.mode!=="flee"&&(g.mode="flee",g.v=g.d.speed*3*this.S,g.a=g.at=Math.atan2(g.y-this.H/2,g.x-this.W/2));this.pile&&!this.pile.open&&this.pile.has&&!u&&!this.card&&(this.pileT=(this.pileT||0)+t,this.pileNag||(this.pileNag=!0,this.hint=Fn?"Something is still under the leaves. Tap them":"Something is still under the leaves",this.hintA=1),this.pileT>7&&(this.pile.has=null),u++),!u&&this.endT==null&&!this.card&&this.phase==="play"&&(this.endT=this.got.length?.15:.6),this.hintA!=null&&this.t>4&&!this.pileNag&&!this.leftNag&&(this.hintA=Math.max(.55,1-(this.t-4)*.2))}scare(t,e=.6){t.mode="dash",t.t=e;let n=this.net;t.at=Math.atan2(t.y-n.y,t.x-n.x)+Bt(-.6,.6)}bugPress(t){let e=this.net;e.swoop>=0||this.card||(t&&(e.x=this.ax,e.y=this.ay),e.swoop=0,e.landed=!1,dt.stir())}netLanded(){let t=this.S,e=this.net,n=66*t,s=this.bugs.filter(r=>r.mode!=="caught"&&r.mode!=="gone"&&r.mode!=="flee"&&Math.hypot(r.x-e.x,r.y-e.y)<n*.78+r.d.r*t*.35);if(this.pile&&!this.pile.open&&Math.hypot(this.pile.x-e.x,this.pile.y-e.y)<n+30*t&&this.openPile(),s.length){for(let a of s)a.mode="caught",a.cx=a.x-e.x,a.cy=a.y-e.y,this.got.push(a.kind);e.hold=.65,dt.pop(),Fe(16),this.burst(e.x,e.y,14,["#fff6c9","#ffffff","#ffd76a"],220);let r=s[0];setTimeout(()=>{this.isOpen&&(r.mode="gone",this.showCard(r.kind,[e.x,e.y]))},520);for(let a of s.slice(1))setTimeout(()=>{a.mode="gone"},520);return}if(this.dust(e.x,e.y),!(this.pile&&this.pile.open&&this.pile.open<.05)){this.misses++,dt.click(),this.shout(this.misses>=3?"It got away!":"Missed!",e.x,e.y-80*t);for(let r of this.bugs)(r.mode==="walk"||r.mode==="pause"||r.mode==="dash")&&(this.misses>=3?(r.mode="flee",r.a=r.at=Math.atan2(r.y-e.y,r.x-e.x),this.fled=this.fled||r.main):Math.hypot(r.x-e.x,r.y-e.y)<300*t&&this.scare(r,.7))}}openPile(){let t=this.pile,e=this.S;t.open=.001,dt.harvest();for(let n=0;n<5;n++){let s=Bt(0,he);this.fx.push({k:"leaf",img:n%2?"mb_leaves_a":"mb_leaves_b",x:t.x,y:t.y,vx:Math.cos(s)*Bt(200,380)*e,vy:Math.sin(s)*Bt(200,380)*e-150*e,life:.9,t:0,h:Bt(60,90)*e,rot:Bt(0,he),vr:Bt(-6,6)})}if(t.has){this.addBug(t.has,t.x,t.y);let n=this.bugs[this.bugs.length-1];n.mode="dash",n.t=.6,n.at=n.a=Bt(0,he),this.shout("A beetle!",t.x,t.y-70*e,1.1)}else this.shout("Just leaves",t.x,t.y-70*e)}dust(t,e){for(let n=0;n<10;n++){let s=Bt(0,he),r=Bt(60,160)*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(s)*r,vy:Math.sin(s)*r*.5,life:.45,t:0,s:Bt(3,6)*this.S,c:"#a88a66"})}}bakeBug(){let t=this.S,e=this.W,n=this.H,s=this.d,r=this.bugBg||(this.bugBg=document.createElement("canvas"));r.width=Math.round(e*s),r.height=Math.round(n*s);let a=r.getContext("2d");a.setTransform(s,0,0,s,0,0);let o=a.createPattern(ye.dirt,"repeat");a.save();let l=1.5*t;a.scale(l,l),a.fillStyle=o,a.fillRect(0,0,e/l,n/l),a.restore(),a.save(),a.globalCompositeOperation="multiply",a.fillStyle="#8c6a5c",a.fillRect(0,0,e,n),a.restore();for(let h of this.pebbles)a.fillStyle=h.c,a.globalAlpha=.5,a.beginPath(),a.ellipse(h.x,h.y,h.r,h.r*.7,0,0,he),a.fill();a.globalAlpha=1;let c=a.createRadialGradient(e/2,n*.52,Math.min(e,n)*.25,e/2,n*.52,Math.hypot(e,n)*.62);c.addColorStop(0,"rgba(255,236,190,0.12)"),c.addColorStop(1,"rgba(40,22,10,0.55)"),a.fillStyle=c,a.fillRect(0,0,e,n);for(let h of this.dress)this.img(a,h.n,h.x,h.y,h.h,{rot:h.rot,sx:h.f});this.bugBgKey=e+"x"+n+"@"+s}bugDraw(t){let e=this.S,n=this.W,s=this.H;this.bugBgKey!==n+"x"+s+"@"+this.d&&this.bakeBug(),t.setTransform(1,0,0,1,0,0),t.drawImage(this.bugBg,0,0),t.setTransform(this.d,0,0,this.d,0,0);let r=this.pile;if(r&&r.open<.5){let g=!r.open&&r.rus<0?Math.sin(this.t*40)*.06:0,p=r.open?1-r.open*2:1;this.img(t,"mb_leaves_b",r.x-30*e,r.y+6*e,96*e,{rot:-.4+g,alpha:p}),this.img(t,"mb_leaves_a",r.x+24*e,r.y-4*e,104*e,{rot:.5-g,alpha:p}),this.img(t,"mb_leaves_b",r.x,r.y-18*e,88*e,{rot:1.8+g*1.5,alpha:p}),!r.open&&r.has&&r.rus<0&&this.drawAntennae(t,r.x+6*e,r.y-46*e,e)}for(let g of this.bugs){if(g.mode==="gone")continue;let p=g.d,f=p.h*e*g.sc,w=this.net,I=g.mode==="caught"?w.x+g.cx*.6:g.x,M=g.mode==="caught"?w.y+g.cy*.6:g.y,S=(p.flies?g.fly*26:0)*e+(g.mode==="flee"?g.fly*40*e:0);if(t.save(),t.globalAlpha=.28,t.fillStyle="#1c1008",t.beginPath(),t.ellipse(I+6*e+S*.4,M+10*e+S,f*.36,f*.24,0,0,he),t.fill(),t.restore(),g.kind==="glowbug"){let b=.65+.35*Math.sin(this.t*3+g.x*.01),C=t.createRadialGradient(I,M+f*.25,0,I,M+f*.25,f*1.1);C.addColorStop(0,`rgba(226,255,140,${.55*b})`),C.addColorStop(1,"rgba(226,255,140,0)"),t.fillStyle=C,t.beginPath(),t.arc(I,M+f*.25,f*1.1,0,he),t.fill()}let T=g.a+Math.PI/2+(p.flies?0:Math.sin(g.wob)*.07)+(g.mode==="caught"?Math.sin(g.wob*30)*.15:0),P=1,v=1;p.flies?P=g.fly>.3?.45+.55*Math.abs(Math.sin(this.t*17+g.x)):.88+.12*Math.sin(this.t*2.2):g.mode==="flee"?P=1+Math.abs(Math.sin(g.wob))*.1:v=1+Math.sin(g.wob*2)*.02,this.img(t,p.img,I,M-S,f,{rot:T,sx:P,sy:v})}let a=this.net,o=66*e*(1+a.h*.22),l=a.x,c=a.y-a.h*26*e;t.save(),t.globalAlpha=.22*(1-a.h*.4),t.fillStyle="#1c1008",t.beginPath(),t.ellipse(a.x+10*e*a.h,a.y+22*e*a.h,o*.95,o*.7,0,0,he),t.fill(),t.restore();let h=Math.PI*.25,d=l+Math.cos(h)*o,u=c+Math.sin(h)*o,m=170*e;t.save(),t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=13*e,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(h)*m,u+Math.sin(h)*m),t.stroke(),t.strokeStyle="#b4834c",t.lineWidth=7*e,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(h)*m,u+Math.sin(h)*m),t.stroke(),t.beginPath(),t.arc(l,c,o,0,he),t.save(),t.clip(),t.fillStyle="rgba(255,255,255,0.1)",t.fillRect(l-o,c-o,o*2,o*2),t.strokeStyle="rgba(255,255,255,0.78)",t.lineWidth=1.7*e;let x=14*e;t.beginPath();for(let g=-o*2;g<o*2;g+=x)t.moveTo(l+g-o,c-o),t.lineTo(l+g+o,c+o),t.moveTo(l+g+o,c-o),t.lineTo(l+g-o,c+o);t.stroke(),t.restore(),t.strokeStyle="#2e1c14",t.lineWidth=9*e,t.beginPath(),t.arc(l,c,o,0,he),t.stroke(),t.strokeStyle="#8a5a3c",t.lineWidth=4*e,t.beginPath(),t.arc(l,c,o,0,he),t.stroke(),t.restore();for(let g=0;g<3;g++){let p=40*e+g*34*e,f=36*Math.max(.8,e),w=g<this.misses,I=11*e;t.save(),t.globalAlpha=w?.35:1,t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=7*e,t.beginPath(),t.moveTo(p+7*e,f+7*e),t.lineTo(p+19*e,f+19*e),t.stroke(),t.strokeStyle="#c08a5a",t.lineWidth=4*e,t.beginPath(),t.moveTo(p+7*e,f+7*e),t.lineTo(p+19*e,f+19*e),t.stroke(),t.save(),t.beginPath(),t.arc(p,f,I,0,he),t.fillStyle="rgba(251,246,234,0.28)",t.fill(),t.clip(),t.strokeStyle="rgba(251,246,234,0.85)",t.lineWidth=1.4*e,t.beginPath();for(let M=-I*2;M<=I*2;M+=5*e)t.moveTo(p+M-I,f-I),t.lineTo(p+M+I,f+I),t.moveTo(p+M+I,f-I),t.lineTo(p+M-I,f+I);t.stroke(),t.restore(),t.strokeStyle="#3b2418",t.lineWidth=5*e,t.beginPath(),t.arc(p,f,I,0,he),t.stroke(),t.strokeStyle="#fbf6ea",t.lineWidth=2.5*e,t.beginPath(),t.arc(p,f,I,0,he),t.stroke(),t.restore()}}drawAntennae(t,e,n,s){t.save(),t.strokeStyle="#2b2b22",t.lineWidth=3*s,t.lineCap="round";let r=Math.sin(this.t*12)*4*s;t.beginPath(),t.moveTo(e-5*s,n+16*s),t.quadraticCurveTo(e-10*s,n,e-16*s+r,n-6*s),t.moveTo(e+5*s,n+16*s),t.quadraticCurveTo(e+10*s,n,e+16*s-r,n-6*s),t.stroke(),t.restore()}setupFish(t){let e=this.S,n=this.W,s=this.H;this.bankY=s*.17,this.dockY=s*.8,this.bites=t.bites||3,this.fish=[];for(let r=0;r<Math.min(4,this.bites+1);r++)this.spawnFish(!0);this.state="aim",this.bob=null,this.tension=0,this.bucket=0,this.tip0=[n*.55,s*.5],this.ripples=Array.from({length:46},()=>({x:Bt(0,n),y:Bt(this.bankY,this.dockY),l:Bt(18,46)*e,ph:Bt(0,he),sp:Bt(8,18)*e})),this.pads=[[.08,.27,92,.3],[.88,.25,110,2],[.95,.6,80,4],[.04,.64,70,1],[.66,.24,64,5]].map(([r,a,o,l])=>({x:r*n,y:a*s,h:o*e,r:l})),this.hint=Fn?"Tap the water to cast":"Click the water to cast (or press Space)",this.hintA=1,this.fishBgKey=null}spawnFish(t=!1){let e=this.W,n=kv(),s=Gv[n];this.fish.push({kind:n,d:s,x:t?Bt(e*.15,e*.85):Math.random()<.5?-60:e+60,y:Bt(this.bankY+60*this.S,this.dockY-60*this.S),a:Bt(0,he),at:0,v:s.speed*this.S,mode:"swim",t:Bt(1,3),ph:Bt(0,he),alpha:0})}fishPress(){let t=this.S;if(!(this.card||this.state==="reel"||this.state==="cast")){if(this.state==="aim"){let e=Ai(this.ay,this.bankY+40*t,this.dockY-40*t),n=Ai(this.ax,50*t,this.W-50*t);this.state="cast",this.castT=0,this.bob={x:n,y:e,fromX:this.tip0[0],fromY:this.tip0[1],dip:0,under:0,t:0},dt.stir(),this.hintA=.55;return}if(this.state==="wait"){let e=this.biter;if(e&&e.mode==="bite"){this.hook(e);return}if(e&&(e.mode==="nibble"||e.mode==="approach")){this.spook(e),this.shout("Too soon!",this.bob.x,this.bob.y-70*t),dt.click(),this.reelIn();return}this.reelIn()}}}reelIn(){this.state="aim",this.bob=null,this.biter=null,this.tension=0,dt.pour()}spook(t){t.mode="flee",t.t=1.2,t.at=t.a+Math.PI+Bt(-.5,.5)}hook(t){let e=this.S;this.state="reel",this.reelT=0,t.mode="hooked",this.tension=1,dt.splash(),Fe(20),this.drops(this.bob.x,this.bob.y,14,260),this.ring(this.bob.x,this.bob.y,10,70,.7,.9,4),this.shout("Got it!",this.bob.x,this.bob.y-80*e,.7)}fishUpdate(t){let e=this.S,n=this.W;this.state==="cast"&&(this.castT+=t/.45,this.castT>=1&&(this.state="wait",this.waitT=0,this.biter=null,this.lureT=Bt(.3,.9),dt.splash(),this.ring(this.bob.x,this.bob.y,6,46,.8),this.drops(this.bob.x,this.bob.y,6,140),this.hint=Fn?"Tap when the float goes under":"Click (or Space) when the float goes under",this.hintA=1));let s=this.bob;if(s&&(s.t+=t,s.dip=He(s.dip,s.under?14*e:0,Math.min(1,t*14)),this.state==="wait"&&Math.random()<t*.6&&this.ring(s.x,s.y+4*e,6,30,1.2,.35,1.5)),this.state==="wait"&&(this.waitT+=t,!this.biter&&(this.lureT-=t,this.lureT<=0))){let r=null,a=1e9;for(let o of this.fish){if(o.mode!=="swim")continue;let l=Math.hypot(o.x-s.x,o.y-s.y);l<a&&(a=l,r=o)}r&&(a<380*e||this.waitT>1.8)?(this.biter=r,r.mode="approach",r.nibs=Math.round(Bt(r.d.nib[0],r.d.nib[1]))):this.lureT=.4}if(this.state==="reel"){this.reelT+=t;let r=this.biter;r.x=He(r.x,this.W*.56,Math.min(1,t*2.2)),r.y=He(r.y,this.dockY-30*e,Math.min(1,t*2.2)),s.x=r.x+Math.cos(r.a)*r.d.len*e*.45,s.y=r.y+Math.sin(r.a)*r.d.len*e*.45,r.a=-Math.PI/2+Math.sin(this.reelT*22)*.5,Math.random()<t*14&&this.drops(r.x+Bt(-20,20)*e,r.y,2,160),this.reelT>.75&&(this.fish.splice(this.fish.indexOf(r),1),this.got.push(r.kind),this.bites--,this.bucket++,this.o.onCatch&&this.o.onCatch(r.kind),this.showCard(r.kind,[r.x,r.y]),this.drops(r.x,r.y,18,320),this.ring(r.x,r.y,10,90,.8,.9,4),this.bob=null,this.biter=null,this.tension=0,this.state="aim",this.hint=Fn?"Tap the water to cast":"Click the water to cast (or press Space)",this.bites>0?setTimeout(()=>{this.isOpen&&this.kind==="fish"&&this.spawnFish()},1600):(this.endT=2.4,setTimeout(()=>{this.isOpen&&(this.hint="The fish are wary now. Come back later")},1500)))}this.tension=He(this.tension,this.state==="reel"?1:this.biter&&this.biter.mode==="bite"?.6:0,Math.min(1,t*8));for(let r of this.fish){if(r.t-=t,r.ph+=t*(r.mode==="flee"?26:9),r.alpha=Math.min(1,r.alpha+t*.8),r.mode==="hooked")continue;let a=r.d.speed*e;if(r.mode==="swim"){r.t<=0&&(r.t=Bt(1.5,3.5),r.at=r.a+Bt(-1.4,1.4));let o=70*e;(r.x<o||r.x>n-o||r.y<this.bankY+o||r.y>this.dockY-o)&&(r.at=Math.atan2((this.bankY+this.dockY)/2-r.y,n/2-r.x)),Math.sin(r.ph*.13)>.7&&(a*=.3)}else if(r.mode==="approach"){let o=r.d.len*e,l=Math.hypot(s.x-r.x,s.y-r.y);r.at=Math.atan2(s.y-r.y,s.x-r.x),a=l>o*.5?r.d.speed*e*1.4*Ai((l-o*.45)/(60*e),.3,1):0,l<o*.62&&(r.mode="nibble",r.t=Bt(.6,1.2))}else r.mode==="nibble"?(a=0,r.at=Math.atan2(s.y-r.y,s.x-r.x),r.t<=0&&(r.nibs>0?(r.nibs--,r.t=Bt(.45,1.05),r.lunge=.15,s.under=0,s.dip=5*e,this.ring(s.x,s.y+4*e,6,26,.5,.6,2),dt.bubble()):(r.mode="bite",r.t=r.d.window,r.lunge=.25,s.under=1,dt.splash(),Fe(14),this.ring(s.x,s.y,8,60,.6,.9,3.5),this.drops(s.x,s.y,10,200),this.shout("!",s.x,s.y-60*e,r.d.window)))):r.mode==="bite"?(a=0,r.t<=0&&(s.under=0,this.spook(r),this.shout("It got away",s.x,s.y-70*e),this.biter=null,this.lureT=Bt(1.5,2.5),this.reelIn())):r.mode==="flee"&&(a=r.d.speed*e*3.5,r.t<=0&&(r.mode="swim",r.t=Bt(1,3)));r.lunge>0&&(r.lunge-=t,a=r.d.speed*e*2),r.a+=kf(r.a,r.at)*Math.min(1,t*(r.mode==="flee"?6:2.5)),r.v=He(r.v,a,Math.min(1,t*3)),r.x+=Math.cos(r.a)*r.v*t,r.y+=Math.sin(r.a)*r.v*t,r.mode==="nibble"&&r.lunge>0&&(r.x-=Math.cos(r.a)*r.v*t*1.8,r.y-=Math.sin(r.a)*r.v*t*1.8)}}bakeFish(){let t=this.S,e=this.W,n=this.H,s=this.d,r=this.bankY,a=this.dockY,o=(l,c,h,d)=>{let u=l?l.c:document.createElement("canvas");u.width=Math.round(e*s),u.height=Math.max(1,Math.round((h-c)*s));let m=u.getContext("2d");return m.setTransform(s,0,0,s,0,-c*s),d(m),{c:u,y0:c}};this.fishWater=o(this.fishWater,0,n,l=>{let c=l.createLinearGradient(0,r,0,a);c.addColorStop(0,"#7cc6b6"),c.addColorStop(.35,"#4c9fa2"),c.addColorStop(1,"#3a8790"),l.fillStyle=c,l.fillRect(0,0,e,n)}),this.fishBank=o(this.fishBank,0,r+60*t,l=>{l.fillStyle="#6e9a3e",l.beginPath(),l.moveTo(0,0),l.lineTo(e,0),l.lineTo(e,r);for(let c=e;c>=0;c-=20)l.lineTo(c,r+Math.sin(c*.02)*10*t+Math.sin(c*.051)*6*t);l.closePath(),l.fill(),l.save(),l.globalAlpha=.5,this.img(l,"grass",e/2,r*.4,r*.9,{w:e}),l.restore();for(let c=0,h=-20*t;h<e+60*t;c++,h+=92*t)this.img(l,"mp_grass_edge",h,r-18*t+c%2*8*t,104*t,{sx:c%2?-1:1});this.img(l,"mp_rock_wet",e*.2,r+10*t,92*t),this.img(l,"mp_rock_wet",e*.78,r+4*t,74*t,{sx:-1})}),this.fishDock=o(this.fishDock,Math.min(a-24*t,n-140*t),n,l=>{let c=n-a+40*t;this.img(l,"mp_dock_top",e/2,a-20*t+c/2,c,{w:e*1.04}),this.img(l,"mp_bucket",e*.13,n-74*t,118*t)}),this.fishBgKey=e+"x"+n+"@"+s}fishDraw(t){let e=this.S,n=this.W,s=this.H,r=this.t,a=this.bankY,o=this.dockY;this.fishBgKey!==n+"x"+s+"@"+this.d&&this.bakeFish();let l=g=>{t.setTransform(1,0,0,1,0,0),t.drawImage(g.c,0,Math.round(g.y0*this.d)),t.setTransform(this.d,0,0,this.d,0,0)};l(this.fishWater),t.save(),t.strokeStyle="rgba(232,252,248,0.22)",t.lineCap="round",t.lineWidth=2.4*e;for(let g of this.ripples){let p=(g.x+r*g.sp)%(n+80)-40,f=g.y+Math.sin(r*.8+g.ph)*6*e,w=g.l*(.7+.3*Math.sin(r*1.3+g.ph));t.globalAlpha=.5+.5*Math.sin(r*.9+g.ph),t.beginPath(),t.moveTo(p-w/2,f),t.quadraticCurveTo(p,f-5*e,p+w/2,f),t.stroke()}t.restore();for(let g of this.fish){let p=this.silhouette(g.d.img,"#173c46"),f=g.d.len*e,w=f*p.height/p.width;t.save(),t.globalAlpha=(g.mode==="hooked"?.75:.42)*g.alpha,t.translate(g.x,g.y),t.rotate(g.a+Math.sin(g.ph)*(g.v>5?.08:.03)),Math.cos(g.a)<0&&t.scale(1,-1),t.drawImage(p,-f/2,-w/2,f,w),t.restore()}for(let g of this.pads)this.img(t,"mp_lilypad",g.x,g.y+Math.sin(r*.8+g.r)*2*e,g.h,{rot:g.r+Math.sin(r*.4+g.r)*.06});t.save(),t.strokeStyle="rgba(240,255,250,0.55)",t.lineWidth=3*e,t.beginPath();for(let g=0;g<=n;g+=20){let p=a+Math.sin(g*.02)*10*e+Math.sin(g*.051)*6*e+4*e+Math.sin(r*1.5+g*.03)*1.5*e;g?t.lineTo(g,p):t.moveTo(g,p)}t.stroke(),t.restore(),l(this.fishBank),l(this.fishDock),this.bucket&&this.pill(t,`x${this.bucket}`,n*.13+58*e,s-120*e,{size:16});let c=this.bob,h=[...this.tip0],d=c?c.x:this.ax,u=c?c.y:this.ay;h[0]=He(h[0],d,.16),h[1]=He(h[1],Math.min(u,s*.62),.12),this.state==="reel"&&(h[0]+=Math.sin(this.t*30)*6*e,h[1]+=30*e);let m=null,x=null;if(c){if(this.state==="cast"){let w=Ss(Math.min(1,this.castT));m=He(h[0],c.x,w),x=He(h[1],c.y,w)-Math.sin(w*Math.PI)*120*e}else m=c.x,x=c.y+Math.sin(c.t*2.4)*2*e+c.dip;t.save(),t.strokeStyle="rgba(250,250,240,0.85)",t.lineWidth=1.6*e;let g=(h[0]+m)/2,p=(h[1]+x)/2+(1-this.tension)*40*e;t.beginPath(),t.moveTo(h[0],h[1]),t.quadraticCurveTo(g,p,m,x),t.stroke(),t.restore();let f=this.state!=="cast"&&c.under;this.img(t,"mp_bobber",m,x-(f?0:16*e),64*e,{alpha:f?.45:1,sy:f?.6:1})}if(this.drawRod(t,h),!c&&this.state==="aim"&&!this.card&&this.aimMode!=="touch"){let g=Ai(this.ax,50*e,n-50*e),p=Ai(this.ay,a+40*e,o-40*e);t.save(),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=2.5*e,t.setLineDash([6*e,6*e]),t.lineDashOffset=-r*20,t.beginPath(),t.ellipse(g,p,26*e,11*e,0,0,he),t.stroke(),t.restore()}}drawRod(t,e){let n=this.S,s=this.W,r=this.H,a=[s*.7,r+12*n],o=e[0]-a[0],l=e[1]-a[1],c=Math.hypot(o,l),h=-l/c,d=o/c,u=(14+this.tension*70)*n,m=(a[0]+e[0])/2+h*u,x=(a[1]+e[1])/2+d*u+this.tension*30*n,g=p=>[(1-p)**2*a[0]+2*(1-p)*p*m+p*p*e[0],(1-p)**2*a[1]+2*(1-p)*p*x+p*p*e[1]];t.save(),t.lineCap="round";for(let[p,f]of[[26,"#3b2418"],[19,"#a7c46a"]]){t.strokeStyle=f;for(let w=0;w<24;w++){let I=g(w/24),M=g((w+1)/24);t.lineWidth=p*n*(1-w/24*.62),t.beginPath(),t.moveTo(I[0],I[1]),t.lineTo(M[0],M[1]),t.stroke()}}t.strokeStyle="#5f7f34";for(let p of[.18,.36,.52,.66,.78,.88]){let f=g(p),w=g(p+.01),I=w[1]-f[1],M=-(w[0]-f[0]),S=Math.hypot(I,M)||1,T=10*n*(1-p*.62);t.lineWidth=3*n,t.beginPath(),t.moveTo(f[0]-I/S*T,f[1]-M/S*T),t.lineTo(f[0]+I/S*T,f[1]+M/S*T),t.stroke()}t.restore();for(let[p,f]of[[.06,42],[.2,38]]){let w=g(p);t.save(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(w[0]+18*n,w[1]+26*n,f*1.25*n+3,f*.9*n+3,-.5,0,he),t.fill(),t.fillStyle="#5b3f7c",t.beginPath(),t.ellipse(w[0]+18*n,w[1]+26*n,f*1.25*n,f*.9*n,-.5,0,he),t.fill(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(w[0],w[1],f*.62*n+3,f*.5*n+3,-.6,0,he),t.fill(),t.fillStyle="#f3cfa8",t.beginPath(),t.ellipse(w[0],w[1],f*.62*n,f*.5*n,-.6,0,he),t.fill(),t.restore()}}};function Bf(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Hv=20*6e4,zf=8*6e4,Wv=2,Gl=class{constructor(t,e){this.world=t,V.wild||(V.wild={berry:[],bug:[],fish:[]}),this.berries=Cl.map(([n,s],r)=>({i:r,x:n,z:s,spr:e.props.berries[r],full:null,pop:0,tw:r*1.3})),this.bugs=Ah.map(([n,s],r)=>({i:r,hx:n,hz:s,x:n,z:s,y:.9,ph:r*1.7,dir:1,kind:null,scare:0,away:null,spr:t.sprite("moth",Nt("moth",1.4),{x:n,z:s,y:.9,shadow:.3})}))}kind(t){return this.world.night>.5?"glowbug":mf[t]||"moth"}berryLeft(t){let e=V.wild.berry[t];return e?Math.max(0,e+Hv-pe()):0}bugLeft(t){let e=V.wild.bug[t];return e?Math.max(0,e+zf-pe()):0}update(t,e){let n=this.world;for(let s of this.berries){let r=this.berryLeft(s.i)===0;r!==s.full&&(s.full===!1&&(s.pop=.5,n.sparkle(s.x,.8,s.z,12,"#ffd0d8")),s.full=r,s.spr.set(r?"berry_full":"berry_bare")),s.pop=Math.max(0,s.pop-t*1.5);let a=s.pop>0?Math.sin(s.pop*16)*s.pop*.3:0,o=r?Math.max(0,Math.sin(e*1.9+s.tw))**8*.05:0;s.spr.sx=1+a+o,s.spr.sy=1-a*.7+o*.4,s.spr.sync(),r&&Math.random()<t*.5&&n.glow.add({x:s.x+(Math.random()-.5)*1.2,y:.5+Math.random()*.8,z:s.z+.1,vx:0,vy:.3,vz:0,life:1,s:3+Math.random()*3,c:"#ffe0e6",a:.85,k:1,fadeIn:.2})}for(let s of this.bugs){let r=this.kind(s.i),a=this.bugLeft(s.i)>0;if(a!==s.away&&(s.away&&!a&&n.sparkle(s.hx,1,s.hz,6,r==="glowbug"?"#e6ff9a":"#f4e6ff"),s.away=a,s.spr.visible=!a),a)continue;s.kind!==r&&(s.kind=r,s.spr.set(r==="ladybug"?"mb_ladybug":r),s.spr.h=r==="ladybug"?.4:Nt(r,r==="moth"?1.4:1.7),s.spr.mat.uniforms.uEmit.value=r==="glowbug"?.85:0),s.ph+=t*(1+s.scare*2.2);let o=.85+s.scare*1.3,l=s.hx+Math.sin(s.ph*.8)*o,c=s.hz+Math.sin(s.ph*1.6)*o*.42;Math.abs(l-s.x)>.002&&(s.dir=l>s.x?1:-1),s.x=l,s.z=c,s.y=.75+Math.sin(s.ph*3.1)*.16+s.scare*.6,s.scare=Math.max(0,s.scare-t*.55),r==="moth"?(s.spr.sx=.5+.5*Math.abs(Math.sin(e*15+s.i)),s.spr.sy=1):r==="ladybug"?(s.spr.sx=1+Math.sin(e*22+s.i)*.06,s.spr.sy=1):(s.spr.sx=1,s.spr.sy=1+Math.sin(e*6+s.i)*.05),s.spr.flip=s.dir<0,s.spr.setPos(s.x,s.z,s.y),r==="glowbug"&&Math.random()<t*9&&n.glow.add({x:s.x+(Math.random()-.5)*.15,y:s.y+.12,z:s.z+.05,vx:0,vy:.05,vz:0,life:.9,s:7+Math.random()*5,c:"#dcff7a",a:.8,k:0,fadeIn:.1,fadePow:2})}}nearBerry(t,e,n=1.6){let s=null,r=n;for(let a of this.berries){let o=Math.hypot(a.x-t,(a.z+.5-e)*1.25);o<r&&(r=o,s=a)}return s}nearBug(t,e,n=1.7){let s=null,r=n;for(let a of this.bugs){if(a.away)continue;let o=Math.hypot(a.x-t,(a.z-e)*1.25);o<r&&(r=o,s=a)}return s}pick(t){if(this.berryLeft(t)>0)return 0;let e=this.berries[t];return V.wild.berry[t]=pe(),e.pop=.6,this.world.burst(e.x,.7,e.z+.2,"#c8455a",10),this.world.dust(e.x,e.z+.3,4,"#6d8a3a"),this.update(0,0),Wv}markCaught(t){V.wild.bug[t.i]=pe(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff"),this.update(0,0)}markFled(t){V.wild.bug[t.i]=pe()-zf+12e4,this.update(0,0)}tryCatch(t,e,n){if(t.away)return null;if(!(Math.hypot(t.x-e,(t.z-n)*1.25)<1.5))return t.scare=1,null;V.wild.bug[t.i]=pe(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff");let r=t.kind;return this.update(0,0),r}};var kn={head:[.53,.885],head_back:[.49,.94],arm:[.5,.1],leg:[.38,.08],body:{neck:[.53,.05],shN:[.33,.24],shF:[.8,.24],hipN:[.42,.8],hipF:[.63,.78]},body_back:{neck:[.52,.03],shN:[.24,.24],shF:[.76,.24],hipN:[.38,.8],hipF:[.62,.8]}},zh=380,ya=470,Xv=ya-4,Vf=426,yr=(i,t,e)=>i+(t-i)*e,Gf=new Map;function qv(i,t=.4){if(!i)return i;let e=Gf.get(i);if(e)return e;e=document.createElement("canvas"),e.width=i.width,e.height=i.height;let n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data,a=e.width,o=e.height,l=new Array(o).fill(0);for(let d=0;d<o;d++){let u=0;for(let m=0;m<a;m++)r[(d*a+m)*4+3]>128&&u++;l[d]=u}let c=Math.max(...l),h=o-1;for(;h>o*.6&&l[h]<c*t;){for(let d=0;d<a;d++)r[(h*a+d)*4+3]=0;h--}for(let d=1;d<=3&&h-d+1>0;d++){let u=h-d+1,m=d/4;for(let x=0;x<a;x++)r[(u*a+x)*4+3]*=m}return n.putImageData(s,0,0),Gf.set(i,e),e}var br=class{constructor(t=document.createElement("canvas")){this.c=t,t.width=zh,t.height=ya,this.g=t.getContext("2d"),this.t=Math.random()*10,this.ph=0,this.amp=0,this.blinkIn=1.5+Math.random()*3,this.blinkT=0,this.lean=0,this.headLag=0,this.pose=null,this.poseT=0,this.poseDur=1}part(t){return ye["rw_"+t]}update(t,{speed01:e=0,back:n=!1,stir:s=!1,pose:r=null,poseT:a=0,poseDur:o=1}={}){this.t+=t,this.amp=yr(this.amp,Math.min(1,e),Math.min(1,t*10)),this.amp>.02?this.ph+=t*(5.4+3.2*e)*Math.max(.35,e):this.ph=yr(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.13,this.blinkIn=2.2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t);let l=r&&o>0?Math.sin(Math.min(1,1-a/o)*Math.PI):0,c=this.amp*.07+(r==="witch_pick"?l*.22:0)+(s?.06:0),h=this.lean;this.lean=yr(this.lean,c,Math.min(1,t*9)),this.headLag=yr(this.headLag,-(this.lean-h)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.draw({back:n,stir:s,pick:r==="witch_pick"?l:0})}draw({back:t,stir:e,pick:n}){let s=this.g,r=this.t,a=this.amp,o=Math.sin(this.ph),l=Math.cos(this.ph);s.clearRect(0,0,zh,ya);let c=t?"body_back":"body",h=kn[c],d=this.part(c),u=this.part("leg"),m=this.part("arm");if(!d||!u||!m)return;let x=.42*a+n*.3,g=t?o*x:-o*x,p=t?-o*x:o*x,f=Math.max(0,t?-l:l)*7*a,w=Math.max(0,t?l:-l)*7*a,I=(1-kn.leg[1])*u.height,M=Xv-I*Math.max(Math.cos(g),Math.cos(p))+n*16,S=(1-a)*Math.sin(r*2.4)*.014,T=zh*.5,P=T-d.width*.5,v=M-h.hipN[1]*d.height,b=nt=>[P+h[nt][0]*d.width,v+h[nt][1]*d.height],C=[T,M],L=nt=>{s.save(),s.translate(C[0],C[1]),s.rotate(this.lean+Math.sin(this.ph*2)*.015*a),s.scale(1,1+S),s.translate(-C[0],-C[1]),nt(),s.restore()},F=(nt,rt,Ct,A=0,O=0)=>{s.save(),s.translate(Ct[0],Ct[1]+O),s.rotate(A),s.drawImage(nt,-rt[0]*nt.width,-rt[1]*nt.height),s.restore()},D=Math.sin(r*1.6)*.04*(1-a),E=o*.5*a*(t?-1:1)+D,N=-o*.4*a*(t?-1:1)-D;e&&(E=-1.15+Math.sin(r*7)*.35,N=-.35+Math.sin(r*7+1)*.12),n&&(E=yr(E,-1.25,n),N=yr(N,-.5,n));let H=this.headLag+Math.sin(this.ph*2-.8)*.035*a+Math.sin(r*1.1)*.025*(1-a)+n*.1+(e?.06:0),q=Math.sin(this.ph*2-.9)*2.2*a,et=t?this.part("head_back"):qv(this.part(this.blinkT>0?"blink":"head")),X=t?kn.head_back:kn.head;t?(L(()=>{F(m,kn.arm,b("shN"),E),F(m,kn.arm,b("shF"),N)}),F(u,kn.leg,[b("hipF")[0],M],p,-w),F(u,kn.leg,[b("hipN")[0],M],g,-f),L(()=>{s.drawImage(d,P,v),F(et,X,b("neck"),H,q)})):(L(()=>F(m,kn.arm,b("shF"),N)),F(u,kn.leg,[b("hipF")[0],M],p,-w),F(u,kn.leg,[b("hipN")[0],M],g,-f),L(()=>{s.drawImage(d,P,v),F(et,X,b("neck"),H,q),F(m,kn.arm,b("shN"),E)}))}};var $v=i=>i*i*(3-2*i),Yv=(i,t,e)=>i+(t-i)*e,Vl=class{constructor(t,e,n,s){this.world=t,this.S=e,this.spr=t.sprite("witch_idle",1.75*ya/Vf,{x:n,z:s,shadow:1}),this.rig=new br,this.spr.useCanvas(this.rig.c),this.vx=0,this.vz=0,this.face=1,this.flipT=1,this.flipFrom=1,this.back=!1,this.stepN=0,this.pose=null,this.poseT=0,this.poseDur=1,this.squash=0,this.frozen=!1,this.speed=4.8,this.goto=null,this.gotoT=0}walkTo(t,e,n,s=1.2){this.goto=[t,e],this.gotoT=s,this.lookX=n}lookAt(t){let e=t>this.x?1:-1;e!==this.face&&(this.flipFrom=this.face,this.face=e,this.flipT=0)}get x(){return this.spr.x}get z(){return this.spr.z}setPose(t,e=.38){this.pose=t,this.poseT=this.poseDur=e,this.squash=.12}hop(){this.squash=.3}update(t,e){let n=this.frozen?0:e.x,s=this.frozen?0:e.z;if(this.goto){let p=this.goto[0]-this.x,f=this.goto[1]-this.z,w=Math.hypot(p,f);if(this.gotoT-=t,w<.1||this.gotoT<=0)this.goto=null,this.vx=this.vz=0,this.lookX!=null&&(this.back=!1,this.lookAt(this.lookX));else{let I=Math.min(1,w*1.8)/w;n=p*I,s=f*I}}let r=Math.hypot(n,s);r>1&&(n/=r,s/=r);let a=r>.05?14:18;this.vx+=(n*this.speed-this.vx)*Math.min(1,a*t),this.vz+=(s*this.speed-this.vz)*Math.min(1,a*t);let o=this.x+this.vx*t,l=this.z+this.vz*t;Ch(this.S,o,this.z)&&(o=this.x,this.vx*=.3),Ch(this.S,o,l)&&(l=this.z,this.vz*=.3),this.spr.mesh.position.x=o,this.spr.mesh.position.z=l;let c=Math.hypot(this.vx,this.vz),h=c>.6;if(Math.abs(this.vx)>.5){let p=this.vx>0?1:-1;p!==this.face&&(this.flipFrom=this.face,this.face=p,this.flipT=0)}Math.abs(this.vz)>.8&&(this.back=this.vz<-.3&&Math.abs(this.vz)>Math.abs(this.vx)*.6),Math.abs(this.vx)>1.2&&Math.abs(this.vz)<1&&(this.back=!1),this.flipT=Math.min(1,this.flipT+t/.14),this.poseT>0&&(this.poseT-=t,this.poseT<=0&&(this.pose=null));let d=this.rig;d.update(t,{speed01:h?c/this.speed:0,back:this.back,pose:this.pose,poseT:Math.max(0,this.poseT),poseDur:this.poseDur}),this.spr.refresh();let u=Math.floor(d.ph/Math.PI);if(u!==this.stepN&&(this.stepN=u,h)){let p=ha(this.world,this.x,this.z);dt.step(p),this.world.dust(this.x,this.z+.05,p==="grass"?1:2,p==="stone"?"#e7e2d6":p==="dirt"?"#d9b98a":"#c9d9a0")}this.squash=Math.max(0,this.squash-t*1.6);let m=Math.sin(this.squash*10)*this.squash*.5;this.spr.mesh.position.y=Math.abs(Math.cos(d.ph))*.035*d.amp;let x=this.flipT<1?Math.cos($v(this.flipT)*Math.PI)*-1:1,g=this.flipT<1?this.flipT<.5?this.flipFrom*Math.abs(x):this.face*Math.abs(x):this.face;this.spr.flip=!1,this.spr.sx=Math.max(.06,Math.abs(g))*Math.sign(g||1)*(1+m*.6),this.spr.sy=1-m*.5,this.spr.sync()}},es=class{constructor(t,e,n,s,r,a={}){this.world=t,this.base=e,this.talkName=a.talk||null,a.rig&&la[a.rig]?(this.pup=new _s(a.rig),this.spr=t.sprite(`rn_${a.rig}_head`,this.pup.worldH,{x:s,z:r,shadow:la[a.rig].h*.5}),this.spr.useCanvas(this.pup.c),this.native=1,this.drawT=1):(this.spr=t.sprite(e,n,{x:s,z:r,shadow:n*.5}),this.native=/^crow/.test(e)?-1:1),this.path=[],this.speed=a.speed||2.2,this.t=Math.random()*10,this.face=a.face||1,this.fx=this.face,this.talking=0,this.onArrive=null,this.hopT=0,this.cheerT=0}get x(){return this.spr.x}get z(){return this.spr.z}goTo(t,e){this.path=t.slice(),this.onArrive=e||null}get moving(){return this.path.length>0}hop(){this.hopT=.45}cheer(t=1.4){this.cheerT=t,this.hop()}update(t){this.t+=t;let e=!1;if(this.path.length){let[r,a]=this.path[0],o=r-this.x,l=a-this.z,c=Math.hypot(o,l);if(c<.08){if(this.path.shift(),!this.path.length&&this.onArrive){let h=this.onArrive;this.onArrive=null,h()}}else{let h=Math.min(c,this.speed*t);this.spr.mesh.position.x+=o/c*h,this.spr.mesh.position.z+=l/c*h,Math.abs(o)>.05&&(this.face=o>0?1:-1),e=!0}}this.talking=Math.max(0,this.talking-t),this.hopT=Math.max(0,this.hopT-t),this.cheerT=Math.max(0,this.cheerT-t);let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.35:0;if(this.pup){let r=this.pup,a=this.spr.visible&&Math.abs(this.x-this.world.camera.position.x)<18;this.drawT+=t;let o=a&&this.drawT>=1/30;r.update(t,{speed01:e?Math.min(1,this.speed/2.4):0,talking:this.talking>0,happy:this.cheerT>0,draw:o}),o&&(this.drawT=0,this.spr.refresh()),this.spr.mesh.position.y=n+Math.abs(Math.cos(r.ph))*.03*r.amp,this.fx=Yv(this.fx,this.face,Math.min(1,t*12)),this.spr.sx=Math.max(.06,Math.abs(this.fx))*Math.sign(this.fx||1),this.spr.sy=1,this.spr.sync();return}let s=e?Math.abs(Math.sin(this.t*9))*.08:0;this.spr.mesh.position.y=s+n,this.talkName&&this.spr.set(this.talking>0&&Math.floor(this.t*6)%2?this.talkName:this.base),this.spr.sx=this.face*this.native*(e?1+Math.sin(this.t*18)*.02:1),this.spr.sy=1+(e?Math.sin(this.t*18)*.03:Math.sin(this.t*2+1)*.015),this.spr.sync()}},Hl=class{constructor(t){this.world=t,this.spr=t.sprite("cat",.72,{x:ct.cat[0],z:ct.cat[1],shadow:.6}),this.t=0,this.hopT=0,this.atStall=!1}get x(){return this.spr.x}get z(){return this.spr.z}hop(){this.hopT=.45}moveToStall(t){if(t===this.atStall)return;this.atStall=t;let[e,n]=t?[ct.myStall[0]+.9,ct.myStall[1]+.35]:ct.cat;this.world.sparkle(this.x,.3,this.z,10,"#e9d6ff"),this.spr.setPos(e,n),this.world.sparkle(e,.3,n,10,"#e9d6ff")}update(t){this.t+=t,this.hopT=Math.max(0,this.hopT-t);let e=this.world.night>.6&&!this.atStall;this.spr.set(e?"cat_sleep":"cat"),this.spr.h=e?.5:.72;let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.3:0;this.spr.mesh.position.y=n,this.spr.sy=1+Math.sin(this.t*(e?1.2:2.2))*(e?.035:.02),this.spr.sx=-1,this.spr.sync(),e&&Math.random()<t*.4&&this.world.soft.add({x:this.x+.2,y:.6,z:this.z,vx:.15,vy:.35,vz:0,life:2,s:3,c:"#ffffff",a:.7,fadeIn:.3})}},Wl=["pip","wren","basil"];function Hf(i,t){let e={};for(let l of t)if(l.stall){let[c,h]=fi[l.id],d=c+1.8,u=h+.15,m=new es(i,l.sprite,1.6,d,u,{face:d<ct.fountain[0]?1:-1,rig:l.rig});m.home=[d,u],e[l.id]=m}let n=[[38,1.8],[45.5,1.6],[44,-2.6],[40,-2.4],[37.5,.6],[46.5,.4],[41,4.6],[43.5,4.8]],s=Object.fromEntries(t.map(l=>[l.id,l])),r=new es(i,s.pip.sprite,1.55,44,2.4,{speed:1.7,rig:s.pip.rig}),a=new es(i,s.bramble.sprite,1.6,39,-1.4,{speed:1.5,rig:s.bramble.rig}),o=new es(i,s.basil.sprite,1.6,46,-1.8,{speed:1.3,rig:s.basil.rig});for(let l of[r,a,o])l.wander=n,l.wait=1+Math.random()*3;return e.pip=r,e.wren=a,e.basil=o,e}function Wf(i,t){for(let e of Wl){let n=i[e];if(!(!n||n.busy)&&!n.moving&&(n.wait-=t,n.wait<=0)){let s=n.wander[Math.floor(Math.random()*n.wander.length)];n.goTo([[s[0]+(Math.random()-.5),s[1]+(Math.random()-.5)]],()=>{n.wait=2+Math.random()*4})}}}var Ie={cham:{name:"Chamomile",icon:"i_cham",color:"#f3e7b0",path:[[1.5,1.2],[3.2,1.6]]},lav:{name:"Lavender",icon:"i_lav",color:"#a98be0",path:[[-1.2,-.8],[-2,-2.2],[-3.2,-2.6]]},man:{name:"Mandrake",icon:"i_man",color:"#e8d2a6",path:[[3,0],[4,1.5]]},mush:{name:"Blue Mushroom",short:"Blue Cap",icon:"i_mush",color:"#7fa7e8",path:[[.8,1.5],[-.4,2.6],[.6,4]]},feather:{name:"Owl Feather",short:"Feather",icon:"i_feather",color:"#f2efe8",path:[[-1.6,.6],[-3.4,.4]]},berry:{name:"Wild Berry",short:"Berry",icon:"i_berry",color:"#c8455a",path:[[.9,.9],[2.3,1.4]],wild:!0,from:"Grows wild in Whisperwood."},moth:{name:"Wood Moth",short:"Moth",icon:"i_moth",color:"#d9c8e8",path:[[-1.5,-.3],[-3,-.1],[-3.4,.5]],wild:!0,from:"Caught with your net."},glowbug:{name:"Glowbug",icon:"i_glowbug",color:"#d8f27a",path:[[1.8,.2],[3.6,.75]],wild:!0,from:"Caught with your net, after dark."},ladybug:{name:"Ladybug",icon:"i_ladybug",color:"#d8453a",path:[[.4,1.5],[.7,2.8]],wild:!0,from:"Caught with your net."},beetle:{name:"Moss Beetle",short:"Beetle",icon:"i_beetle",color:"#3f8a6e",path:[[-1.3,-.9],[-2.5,-2.1]],wild:!0,from:"Hides under fallen leaves."},minnow:{name:"Pond Minnow",short:"Minnow",icon:"i_minnow",color:"#9fb8c8",path:[[-1.6,.1],[-3.3,.5]],wild:!0,from:"Caught at Willow Pond."},bluegill:{name:"Bluegill",icon:"i_bluegill",color:"#5a8cc8",path:[[1.2,.5],[2.35,1.4]],wild:!0,from:"Caught at Willow Pond."},carp:{name:"Golden Carp",short:"Carp",icon:"i_carp",color:"#f0a040",path:[[.3,1.8],[.9,3.6],[1.4,5.5]],wild:!0,from:"A rare bite at Willow Pond."}},ws=[.6,1.1,1.6],Gh=[2.2,1.5,1],ne={sleep:{name:"Sleep Potion",short:"Sleep",medal:"m_moon",potion:"p_round",at:[-5.1,-4.3],base:60,liquid:"#9b7fe0",hint:"deep in the lower-left fog"},heal:{name:"Healing Potion",short:"Healing",medal:"m_heart",potion:"p_heart",at:[4.7,2.8],base:50,liquid:"#e98aa0",hint:"up and to the right"},glow:{name:"Glow Potion",short:"Glow",medal:"m_sun",potion:"p_gold",at:[7,1.5],base:70,liquid:"#f2c75c",hint:"far to the right"},luck:{name:"Luck Potion",short:"Luck",medal:"m_star",potion:"p_tube",at:[1.4,5.5],base:120,liquid:"#7fd6c4",hint:"north, past the brambles"},calm:{name:"Calm Potion",short:"Calm",medal:"m_drop",potion:"p_tube",at:[-6.6,1],base:55,liquid:"#8cc8f0",hint:"far to the left"}},Vh=[{at:[-2.4,1.7],r:.95},{at:[3.4,-2.3],r:1.05},{at:[2.9,4.1],r:.8}],Ts=24,Es=16,ba={cham:{name:"Chamomile",yield:2,growMin:4,sprite:["cham_0","cham_1","cham_2"]},lav:{name:"Lavender",yield:2,growMin:6,sprite:["lav_0","lav_1","lav_2"]},man:{name:"Mandrake",yield:1,growMin:15,sprite:["man_0","man_1","man_2"]}},pi=[{id:"letter",text:"Read Granny's letter in the mailbox"},{id:"harvest",text:"Harvest herbs in your garden",need:3},{id:"talk",text:"A customer is at your door. Say hello"},{id:"brew",text:"Brew a Sleep Potion at the cauldron"},{id:"deliver",text:"Give the Sleep Potion to Mr. Crow"},{id:"town",text:"Follow the path east to Mossbrook"},{id:"board",text:"Check the discovery board in the square"},{id:"stall",text:"Open your stall. Kuro will mind it"},{id:"buy",text:"Buy a Blue Mushroom from Mira's stall"},{id:"mystery",text:"Something glows in the north fog. Brew it"},{id:"free",text:"Your garden, stall and customers run on the real clock"}],Xl=[{id:"mira",name:"Mira",sprite:"pt_bear",rig:"bear",stall:{sprite:"stall_red",title:"Mira's Remedies",line:"Fresh from the north woods! Blue caps are rare this week.",items:[{ing:"mush",price:40,stock:3},{ing:"feather",price:25,stock:2}]}},{id:"juniper",name:"Juniper",sprite:"pt_turtle",rig:"turtle",stall:{sprite:"stall_green",title:"Juniper's Garden",line:"Seeds and sprigs, picked this morning.",items:[{ing:"cham",price:12,stock:5},{ing:"lav",price:15,stock:4}]}},{id:"oz",name:"Oz",sprite:"pt_fish",rig:"fish",stall:{sprite:"stall_blue",title:"Oz's Odd Bottles",line:"Rare roots. Ask about my Glow recipe.",items:[{ing:"man",price:35,stock:2}]}},{id:"pip",name:"Pip",sprite:"pt_duck",rig:"duck"},{id:"bramble",name:"Wren",sprite:"pt_raccoon",rig:"raccoon"},{id:"basil",name:"Basil",sprite:"pt_croc",rig:"croc"}],Hh=["anyone selling moon dew?","WTS lavender x10, cheap!","who found Healing first??","the north fog is huge","Kuro is so cute omg","buying blue caps 45 each","my mandrake yelled at me","Glow sells great at night"],Wh=[{effect:"heal",who:"Juniper",when:"3 days ago"},{effect:"glow",who:"Oz",when:"yesterday"}],Mr=[{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Hello, young witch. I haven't slept in three nights. The owls keep singing. Do you have something to help me sleep?",thanks:"Ah... I can almost hear my pillow calling. Thank you, little witch."},{who:"pip",name:"Pip",sprite:"pt_duck",rig:"duck",want:"heal",ask:"I fell off my broom. Again. Got anything for scraped knees?",thanks:"Wow, it stopped stinging already! You are good at this."},{who:"wren",name:"Wren",sprite:"pt_raccoon",rig:"raccoon",want:"glow",ask:"The forest gets so dark on my way home. Could you make me something that glows?",thanks:"It shines like a tiny moon! I will tell everyone in town."},{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Me again. The owls are back, and louder. Another Sleep Potion, please?",thanks:"Bless you. I shall sleep like a stone."}];var ql=class{constructor(t){this.world=t,this.plots=ua.map((e,n)=>({...e,i:n,spr:t.sprite("cham_0",.6,{x:e.x,z:e.z+.15,shadow:.7,sway:.03}),stage:-1,crop:null,pop:0,tw:Math.random()*4}))}state(t){let e=V.plots[t],n=ba[e.crop],s=n.growMin*6e4,r=pe()-e.at;return{crop:e.crop,def:n,k:Math.max(0,Math.min(1,r/s)),ready:r>=s,left:s-r}}readyCount(){return this.plots.filter(t=>this.state(t.i).ready).length}update(t,e){for(let n of this.plots){let s=this.state(n.i),r=s.ready?2:s.k<.45?0:1;if(r!==n.stage||s.crop!==n.crop){let l=n.stage>=0&&r>n.stage;n.stage=r,n.crop=s.crop,n.spr.set(s.def.sprite[r]),n.spr.h=Nt(s.def.sprite[r],1.15),n.spr.mat.uniforms.uSway.value=r===0?.02:.05,l&&(n.pop=.5,this.world.sparkle(n.x,.5,n.z,r===2?14:6,r===2?"#fff2a8":"#d8f5b0"))}n.pop=Math.max(0,n.pop-t*1.4);let a=n.pop>0?Math.sin(n.pop*14)*n.pop*.35:0,o=r===2?Math.max(0,Math.sin(e*2.6+n.tw))**6*.06:0;n.spr.sx=1+a+o,n.spr.sy=1-a*.8+o*.5,n.spr.sync(),r===2&&Math.random()<t*.9&&this.world.glow.add({x:n.x+(Math.random()-.5)*.9,y:.4+Math.random()*.7,z:n.z+.1,vx:0,vy:.35,vz:0,life:1.1,s:4+Math.random()*3,c:"#fff1a0",a:.9,k:1,fadeIn:.2})}}harvest(t){let e=this.state(t);if(!e.ready)return null;let n=this.plots[t];return V.plots[t].at=pe(),this.world.burst(n.x,.5,n.z,"#7fb04e",12),this.world.sparkle(n.x,.6,n.z,10,"#fff2a8"),this.world.dust(n.x,n.z+.1,5,"#b48a5a"),n.stage=-1,this.update(0,0),n.pop=.6,{crop:e.crop,n:e.def.yield}}nearest(t,e,n=1.35){let s=null,r=n;for(let a of this.plots){let o=Math.hypot(a.x-t,(a.z-e)*1.2);o<r&&(r=o,s=a)}return s}};var Re=50,Xh=Ts*Re,qh=Es*Re,En=(i,t)=>[(i+Ts/2)*Re,(Es/2-t)*Re],Sr=["Perfect","Fine","Weak"],$h=1.75,Zv=13,Yh=["lav","cham","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],Xf="#86c9d0",Yl=new Image;Yl.src=ee("ui_arrow_r");var $l={intro:{say:"Mrrp! This is your potion map. Your potion starts at the little bottle. Mr. Crow's Sleep Potion is hiding in the fog, down and to the left.",tap:"Show me",ring:".map-frame",mark:"sleep"},drop:{say:"Lavender pulls a brew down and to the left. Drag one into the cauldron.",ring:'.tile[data-id="lav"]'},path:{say:"See the dotted line? Stirring walks your potion along it, and the fog lifts as it goes.",tap:"Got it",ring:".map-frame",mark:"end"},stir:{say:"Hold Stir, or draw circles in the pot.",ring:".stir"},more:{say:"Not there yet. One more Lavender carries it further.",ring:'.tile[data-id="lav"]'},stir2:{say:"Stir again. I will catch the spoon when you reach it.",ring:".stir",mark:"sleep"},bottle:{say:"Right on it! The closer to the middle, the better the potion. Bottle it!",ring:".bottle"},back:{say:"Oops, you went past. Hold Moon water: it drifts your potion back toward the start.",ring:".water"}},Sa=(i,t,e)=>{let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=a=>Math.round((n>>a&255)*(1-e)+(s>>a&255)*e);return"#"+(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")},As=(i,t)=>Sa(i,t>0?"#ffffff":"#1d1430",Math.abs(t));function Ma(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Zl=class{constructor(t,e){this.hooks=e,this.isOpen=!1,this.t=0;let n=this.el=Ma("section","brew hidden");n.innerHTML=`
      <div class="brew-bg"></div>
      <div class="brew-ask hidden"><div class="ribbon sm"><span></span></div><div class="speech sm"><p></p></div></div>
      <div class="brew-stage">
        <canvas class="brew-witch"></canvas>
        <div class="pot">
          <canvas class="liquid"></canvas>
          <img class="pot-img" src="${ee("cauldron_pot")}" alt="" draggable="false">
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
          <button class="btn-pill water" data-k="Q"><img src="${ee("i_dew")}" alt=""><span>Moon water</span></button>
          <button class="btn-green stir" data-k="Space"><img src="${ee("spoon")}" alt=""><span>Hold to stir</span></button>
          <button class="btn-green bottle" disabled><img src="${ee("bottle")}" alt=""><span>Bottle it</span></button>
        </div>
      </div>
      <button class="btn-pill dump"><span>Dump</span></button>
      <button class="btn-close" aria-label="Close"></button>
      <div class="lesson-ring hidden"><img src="${ee("ui_arrow_r")}" alt=""></div>
      <img class="lesson-ghost hidden" src="${ee("i_lav")}" alt="">
      <div class="brew-coach hidden"><img class="coach-cat" src="${ee("cat")}" alt=""><div class="speech coach-say"><p></p><button class="btn-green coach-ok hidden"><span></span></button></div></div>
      <div class="brew-toast"></div>`,t.appendChild(n),this.$=s=>n.querySelector(s),this.mapc=this.$(".mapc"),this.liq=this.$(".liquid"),this.fx=this.$(".potfx"),this.rig=new br(n.querySelector(".brew-witch")),this.potEl=this.$(".pot"),this.base=this.buildBase(),this.fog=document.createElement("canvas"),this.fog.width=Xh/2,this.fog.height=qh/2,this.cam={x:0,y:0},this.bubbles=[],this.steam=[],this.drops=[],this.stirHold=!1,this.waterHold=!1,this.stirV=0,this.spoonA=0,this.circleAmt=0,this.wire(),this.reset(!0)}buildBase(){let t=document.createElement("canvas");t.width=Xh,t.height=qh;let e=t.getContext("2d");e.drawImage(ye.mapbg,0,0,Xh,qh),e.fillStyle="rgba(90,60,40,0.18)";for(let r=-11;r<=11;r++)for(let a=-7;a<=7;a++){let[o,l]=En(r,a);e.beginPath(),e.arc(o,l,2,0,7),e.fill()}for(let r of Vh){let[a,o]=En(r.at[0],r.at[1]),l=r.r*Re,c=e.createRadialGradient(a,o,l*.2,a,o,l*1.15);c.addColorStop(0,"rgba(58,92,48,0.75)"),c.addColorStop(.75,"rgba(58,92,48,0.45)"),c.addColorStop(1,"rgba(58,92,48,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,l*1.15,0,7),e.fill(),e.strokeStyle="rgba(40,58,30,0.9)",e.lineWidth=3,e.lineCap="round";for(let d=0;d<9;d++){let u=d*.7+r.r,m=l*(.35+d%3*.22);e.beginPath(),e.arc(a,o,m,u,u+2.2),e.stroke();for(let x=0;x<4;x++){let g=u+x*.55,p=a+Math.cos(g)*m,f=o+Math.sin(g)*m;e.beginPath(),e.moveTo(p,f),e.lineTo(p+Math.cos(g)*9,f+Math.sin(g)*9),e.stroke()}}let h=l*.95;e.drawImage(ye.m_thorn,a-h/2,o-h/2,h,h)}let[n,s]=En(0,0);return e.strokeStyle="rgba(90,55,35,0.8)",e.lineWidth=3,e.beginPath(),e.arc(n,s,16,0,7),e.stroke(),e.beginPath(),e.moveTo(n-24,s),e.lineTo(n+24,s),e.moveTo(n,s-24),e.lineTo(n,s+24),e.stroke(),t}rebuildFog(){let t=this.fog.getContext("2d"),e=this.fog.width,n=this.fog.height;t.globalCompositeOperation="source-over",t.clearRect(0,0,e,n),t.fillStyle="rgba(232,226,240,0.8)",t.fillRect(0,0,e,n);let s=9,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<260;a++){let o=r()*e,l=r()*n,c=20+r()*70,h=r(),d=t.createRadialGradient(o,l,0,o,l,c),u=h<.5?`rgba(255,255,255,${.35+h*.5})`:`rgba(170,160,196,${(h-.5)*.45})`;d.addColorStop(0,u),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,l,c,0,7),t.fill()}t.globalCompositeOperation="destination-out",this.cut(0,0,!1),this.cut(.6,.3,!1),this.cut(-.6,-.3,!1);for(let[a,o]of V.fog)this.cut(a,o,!1);t.globalCompositeOperation="source-over"}cut(t,e,n=!0){let s=this.fog.getContext("2d");n&&(s.globalCompositeOperation="destination-out");let r=(t+Ts/2)*Re/2,a=(Es/2-e)*Re/2,o=$h*Re/2,l=s.createRadialGradient(r,a,o*.35,r,a,o);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.beginPath(),s.arc(r,a,o,0,7),s.fill(),n&&(s.globalCompositeOperation="source-over")}reveal(t,e){let n=this.lastReveal;if(n&&Math.hypot(n[0]-t,n[1]-e)<.22)return;this.lastReveal=[t,e];let s=[Math.round(t*10)/10,Math.round(e*10)/10];V.fog.push(s),V.fog.length>4e3&&V.fog.splice(0,500),this.cut(s[0],s[1]),Math.random()<.18&&dt.reveal();for(let[r,a]of Object.entries(ne))!this.seen[r]&&Math.hypot(a.at[0]-t,a.at[1]-e)<$h+.3&&(this.seen[r]=!0,this.spot(r))}isSeen(t){if(this.seen[t])return!0;let e=ne[t];return V.fog.some(([n,s])=>Math.hypot(e.at[0]-n,e.at[1]-s)<$h)}spot(t){this.flashEffect={id:t,t:0},dt.near(),this.toast(`You spotted <b>${ne[t].name}</b> in the fog`,ne[t].medal)}reset(t=!1){this.pos=[0,0],this.path=[],this.trail=[[0,0]],this.ings=[],this.liquidCol=Xf,this.curdle=0,this.lastReveal=null,this.nearId=null,this.nearTier=-1,this.nearD=null,this.nearAny=null,this.caught={},this.stirLock=!1,this.lockT=0,this.passed=null,this.catchFx=null,t||this.updateUI()}open(t={}){this.ctx=t,this.isOpen=!0,this.t=0,this.reset(!0),this.seen={};for(let n of Object.keys(ne))(this.isSeen(n)||V.discovered[n])&&(this.seen[n]=!0);this.rebuildFog(),this.cam.x=0,this.cam.y=0;let e=this.$(".brew-ask");t.ask?(e.classList.remove("hidden"),e.querySelector(".ribbon span").textContent=t.ask.name,e.querySelector("p").textContent=t.ask.line):e.classList.add("hidden"),this.el.classList.remove("hidden"),this.el.classList.add("opening"),setTimeout(()=>this.el.classList.remove("opening"),600),this.lesson=null,!V.lesson&&!V.discovered.sleep&&((V.inv.lav||0)<2&&(V.inv.lav=2,this.hooks.onInv&&this.hooks.onInv()),t.target||(t.target="sleep")),this.buildShelf(),this.resize(),this.updateUI(),this.lessonGo(!V.lesson&&!V.discovered.sleep?"intro":null),dt.open()}close(){this.isOpen&&(this.isOpen=!1,this.stirHold=this.waterHold=!1,this.el.classList.add("hidden"),ge(),dt.close(),this.hooks.onClose&&this.hooks.onClose())}wire(){let t=this.$;t(".btn-close").addEventListener("click",()=>this.close()),t(".dump").addEventListener("click",()=>this.dump()),t(".bottle").addEventListener("click",()=>this.bottle()),t(".coach-ok").addEventListener("click",()=>this.lessonNext());let e=(o,l)=>{let c=d=>{d.preventDefault(),this[l]=!0,o.classList.add("down"),o.setPointerCapture&&d.pointerId!=null&&o.setPointerCapture(d.pointerId)},h=()=>{this[l]=!1,o.classList.remove("down")};o.addEventListener("pointerdown",c),o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};e(t(".stir"),"stirHold"),e(t(".water"),"waterHold");let n=t(".pot-hit"),s=null,r=o=>{let l=this.potEl.getBoundingClientRect();return Math.atan2((o.clientY-(l.top+l.height*.17))*2.6,o.clientX-(l.left+l.width*.5))};n.addEventListener("pointerdown",o=>{s={id:o.pointerId,a:r(o)},n.setPointerCapture(o.pointerId)}),n.addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=r(o),c=l-s.a;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),s.a=l,this.circleAmt+=Math.abs(c)*.32,this.spoonA=l,this.circleAt=this.t});let a=()=>{s=null};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),window.addEventListener("resize",()=>this.isOpen&&this.resize())}buildShelf(){let t=this.$(".shelf");t.innerHTML="";for(let e of Yh){let n=Ie[e],s=V.inv[e]||0;if(n.wild&&!s&&!V.found[e])continue;let r=Ma("div","tile"+(s?"":" empty"));r.dataset.id=e,r.innerHTML=`<img src="${ee(n.icon)}" alt="" draggable="false"><b class="count">${s}</b><i class="nm">${n.short||n.name}</i>`,t.appendChild(r),r.addEventListener("pointerdown",a=>this.dragStart(a,e,r))}}refreshShelf(){for(let t of this.$(".shelf").children){let e=V.inv[t.dataset.id]||0;t.querySelector(".count").textContent=e,t.classList.toggle("empty",!e)}}dragStart(t,e,n){if(t.preventDefault(),this.lessonLocked(e)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),dt.click(),this.coachBump();return}if(!(V.inv[e]>0)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),dt.click(),this.toast(`No ${Ie[e].name} left. Grow or buy more`);return}let s=Ma("img","drag-ghost");s.src=ee(Ie[e].icon),document.body.appendChild(s);let r=t.clientX,a=t.clientY,o=0,l=(u,m)=>{s.style.transform=`translate(${u-40}px, ${m-40}px) rotate(${Math.sin(performance.now()/120)*8}deg)`};l(r,a),dt.pop(),n.classList.add("lift");let c=(u,m)=>{let x=this.potEl.getBoundingClientRect();return u>x.left&&u<x.right&&m>x.top-x.height*.3&&m<x.top+x.height*.6},h=u=>{o=Math.max(o,Math.hypot(u.clientX-r,u.clientY-a)),l(u.clientX,u.clientY),this.potEl.classList.toggle("target",c(u.clientX,u.clientY))},d=u=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),n.classList.remove("lift"),this.potEl.classList.remove("target");let m=o<10;if(m||c(u.clientX,u.clientY))this.drop(e,s,m?null:[u.clientX,u.clientY]);else{s.classList.add("back");let x=n.getBoundingClientRect();s.style.transform=`translate(${x.left+x.width/2-40}px, ${x.top+x.height/2-40}px) scale(0.6)`,setTimeout(()=>s.remove(),250)}};window.addEventListener("pointermove",h),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)}drop(t,e,n){let s=this.potEl.getBoundingClientRect(),r=s.left+s.width*.5-40,a=s.top+s.height*.12-40;e.classList.add("fall"),e.style.transform=`translate(${r}px, ${a}px) rotate(200deg) scale(0.55)`,V.inv[t]--,this.refreshShelf(),this.hooks.onInv&&this.hooks.onInv(),setTimeout(()=>{e.remove(),this.addIngredient(t)},n?230:330)}addIngredient(t){let e=Ie[t],n=this.path.length?this.path[this.path.length-1]:this.pos;for(let[r,a]of e.path)this.path.push([n[0]+r,n[1]+a]);this.ings.push(t),this.liquidCol=Sa(this.liquidCol,e.color,this.ings.length===1?.65:.45),dt.splash(),Fe(12),this.splash(e.color),this.pathFlash=1,this.updateUI();let s=this.lesson;(s==="drop"||s==="more"||s==="path"||s==="stir")&&this.lessonGo(this.ings.length>=2?"stir2":"path")}sweetStop(t,e,n,s,r,a){let o=Math.hypot(n-t,s-e);if(o<1e-6)return null;let l=(n-t)/o,c=(s-e)/o,h=null;for(let[d,u]of Object.entries(ne)){if(this.caught[a+d])continue;let m=(u.at[0]-t)*l+(u.at[1]-e)*c;m<=.002||m>r||Math.hypot(u.at[0]-(t+l*m),u.at[1]-(e+c*m))>=ws[1]||(!h||m<h.s)&&(h={s:m,id:d})}return h}moveAlong(t){for(;t>0&&this.path.length;){let[e,n]=this.path[0],[s,r]=this.pos,a=Math.hypot(e-s,n-r),o=this.sweetStop(s,r,e,n,Math.min(a,t),"s"),l=o?o.s:Math.min(a,t);if(l>=a-1e-9?(this.pos=[e,n],this.path.shift()):this.pos=[s+(e-s)/a*l,r+(n-r)/a*l],t-=Math.max(l,1e-6),this.afterMove(),this.curdle)return;if(o){this.catchSpoon(o.id,"s");return}}}pullWater(t){let[e,n]=this.pos,s=Math.hypot(e,n);if(s<.01)return;let r=this.sweetStop(e,n,0,0,Math.min(t,s),"w"),a=(r?r.s:Math.min(t,s))/s,o=-e*a,l=-n*a;this.pos=[e+o,n+l];for(let c of this.path)c[0]+=o,c[1]+=l;this.liquidCol=Sa(this.liquidCol,Xf,.02),this.afterMove(),r&&this.catchSpoon(r.id,"w")}catchSpoon(t,e){this.caught[e+t]=!0,this.stirV=0,this.stirLock=this.stirHold||this.waterHold,this.lockT=.7,this.catchFx={at:this.pos.slice(),t:0},dt.near(),setTimeout(()=>dt.pop(),90),Fe(18);let n=this.$(".readout");n.classList.remove("hot"),n.offsetWidth,n.classList.add("hot");for(let s of[this.$(".stir"),this.$(".water")])s.classList.remove("down");this.lesson&&t==="sleep"&&this.nearId==="sleep"&&this.lessonGo("bottle")}afterMove(){let[t,e]=this.pos,n=this.trail[this.trail.length-1];Math.hypot(n[0]-t,n[1]-e)>.08&&this.trail.push([t,e]),this.reveal(t,e);for(let o of Vh)if(Math.hypot(o.at[0]-t,o.at[1]-e)<o.r*.82){this.curdleNow();return}let s=null,r=1e9;for(let[o,l]of Object.entries(ne)){let c=Math.hypot(l.at[0]-t,l.at[1]-e);c<r&&(r=c,s=o)}let a=r<ws[0]?0:r<ws[1]?1:r<ws[2]?2:-1;(a!==this.nearTier||s!==this.nearId)&&(a>=0&&(this.nearTier<0||a<this.nearTier)&&(dt.near(),Fe(8)),a<0&&this.nearTier>=0&&(this.passed=this.nearId),a>=0&&(this.passed=null),this.nearTier=a,this.nearId=a>=0?s:null,this.updateUI(),this.lesson==="bottle"&&(a<0||a===2)?this.lessonGo("back"):this.lesson==="back"&&s==="sleep"&&a>=0&&a<=1&&this.lessonGo("bottle")),this.nearD=r,this.nearAny=s}curdleNow(){this.curdle=1.4,this.stirHold=!1,this.stirV=0,dt.fail(),Fe(40),this.liquidCol="#6d6a4a",this.el.classList.remove("shake"),this.el.offsetWidth,this.el.classList.add("shake"),this.toast("The brew snagged on the thorns and curdled"),this.path=[],setTimeout(()=>{this.reset(),this.updateUI()},1300)}dump(){this.ings.length&&(dt.pour(),this.splash("#cfd8e6"),this.reset(),this.updateUI(),this.toast("Poured out. The cauldron is fresh again"))}bottle(){if(this.nearTier<0||!this.nearId)return;let t=this.nearId,e=this.nearTier,n=this.ings.slice(),s=ne[t];dt.bottle(),Fe(25),this.lesson&&(this.lessonGo(null),V.lesson=1,V.brewTut=3,ge());let r=this.potEl.getBoundingClientRect(),a=Ma("img","rise-bottle");a.src=ee(s.potion),a.style.left=r.left+r.width/2-45+"px",a.style.top=r.top+r.height*.05+"px",document.body.appendChild(a);for(let o=0;o<24;o++)this.steam.push({x:.5+(Math.random()-.5)*.4,y:.17,vx:(Math.random()-.5)*.4,vy:-.4-Math.random()*.6,life:1.2,t:0,s:6+Math.random()*8,c:"#fff6c8",glow:1});setTimeout(()=>a.remove(),1600),this.reset(),this.updateUI(),this.hooks.onBottle(t,e,n,a)}update(t){if(!this.isOpen)return;this.t+=t,this.curdle>0&&(this.curdle=Math.max(0,this.curdle-t));let e=this.nearD!=null&&this.nearD<ws[1]?.5:1;!this.stirHold&&!this.waterHold&&(this.stirLock=!1),this.lockT=Math.max(0,this.lockT-t);let n=this.stirLock||this.lockT>0,s=this.stirHold&&!n&&this.path.length&&!this.curdle?1.7*e:0;this.stirV+=(s-this.stirV)*Math.min(1,t*(s>this.stirV?5:12));let r=n?0:this.stirV*t+this.circleAmt*e;this.circleAmt=0,r>0&&this.path.length&&!this.curdle&&(this.moveAlong(r),this.stirHold&&(this.spoonA+=t*7),this.stirSound=(this.stirSound||0)+r,this.stirSound>.5&&(this.stirSound=0,dt.stir())),this.waterHold&&!n&&!this.curdle&&(this.pullWater(t*1.1),Math.random()<t*6&&dt.pour()),this.lesson==="path"&&r>0&&this.lessonGo("stir"),(this.lesson==="stir"||this.lesson==="stir2")&&!this.path.length&&this.stirV<.05&&this.lessonGo(this.nearId==="sleep"?"bottle":"more"),this.drawMap(t),this.drawPot(t),this.placeRing()}resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.mapc,this.liq,this.fx]){let n=e.getBoundingClientRect();e.width=Math.max(2,Math.round(n.width*t)),e.height=Math.max(2,Math.round(n.height*t))}}drawMap(t){let e=this.mapc,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.path.length?this.path[this.path.length-1]:this.pos,o=this.pos[0]*.6+a[0]*.4,l=this.pos[1]*.6+a[1]*.4;(this.lesson==="intro"||this.lesson==="drop")&&(o=ne.sleep.at[0]*.5,l=ne.sleep.at[1]*.5);let c=Zv,h=c*r/s,d=Math.max(-Ts/2+c/2,Math.min(Ts/2-c/2,o)),u=Math.max(-Es/2+h/2,Math.min(Es/2-h/2,l)),m=1-Math.exp(-t*3);this.cam.x+=(d-this.cam.x)*m,this.cam.y+=(u-this.cam.y)*m;let x=(this.cam.x-c/2+Ts/2)*Re,g=(Es/2-this.cam.y-h/2)*Re,p=c*Re,f=h*Re,w=s/p;n.setTransform(1,0,0,1,0,0),n.drawImage(this.base,x,g,p,f,0,0,s,r),n.setTransform(w,0,0,w,-x*w,-g*w);let I=this.t;for(let[F,D]of Object.entries(ne)){if(!this.seen[F])continue;let[E,N]=En(D.at[0],D.at[1]),H=this.nearId===F;for(let q=2;q>=0;q--)n.beginPath(),n.arc(E,N,ws[q]*Re,0,7),n.fillStyle=`rgba(255,236,170,${H?.16+(2-q)*.06:.07})`,n.fill(),n.setLineDash([6,6]),n.lineDashOffset=-I*12,n.lineWidth=2.2,n.strokeStyle=`rgba(120,80,40,${H&&q>=this.nearTier?.85:.35})`,n.stroke(),n.setLineDash([])}this.trail.length>1&&(n.beginPath(),n.lineWidth=4,n.strokeStyle="rgba(92,52,36,0.75)",n.lineJoin=n.lineCap="round",this.trail.forEach(([F,D],E)=>{let[N,H]=En(F,D);E?n.lineTo(N,H):n.moveTo(N,H)}),n.stroke()),n.setTransform(1,0,0,1,0,0),n.drawImage(this.fog,x/2,g/2,p/2,f/2,0,0,s,r),n.setTransform(w,0,0,w,-x*w,-g*w);for(let[F,D]of Object.entries(ne)){if(!this.seen[F])continue;let[E,N]=En(D.at[0],D.at[1]),H=this.nearId===F,q=this.flashEffect&&this.flashEffect.id===F?Math.max(0,1-this.flashEffect.t):0,et=Re*(1.25+(H?Math.sin(I*6)*.06:0)+q*.6);n.drawImage(ye[D.medal],E-et/2,N-et/2,et,et),n.font=`700 ${Re*.42}px Mali, sans-serif`,n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(255,248,230,0.95)",n.strokeText(D.short,E,N+et*.78),n.fillStyle="#5a3424",n.fillText(D.short,E,N+et*.78)}this.flashEffect&&(this.flashEffect.t+=t,this.flashEffect.t>1&&(this.flashEffect=null));let[M,S]=En(this.pos[0],this.pos[1]),T=Math.sin(I*3)*3,P=Re*.95,v=Re*(.9+Math.sin(I*4)*.08),b=n.createRadialGradient(M,S,0,M,S,v);b.addColorStop(0,this.nearTier>=0?"rgba(255,240,160,0.9)":"rgba(255,255,255,0.7)"),b.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=b,n.beginPath(),n.arc(M,S,v,0,7),n.fill(),n.save(),n.translate(M,S+T),n.rotate(Math.sin(I*2.2)*.12+(this.curdle?Math.sin(I*40)*.2:0)),n.drawImage(ye.bottle,-P*.35,-P*.7,P*.7,P*1),n.restore();for(let[F,D]of Object.entries(ne)){if(this.seen[F])continue;let[E,N]=En(D.at[0],D.at[1]),H=this.ctx&&this.ctx.target===F,q=1+Math.sin(I*2.5+E)*.06;if(H){let X=n.createRadialGradient(E,N,0,E,N,Re*1.6);X.addColorStop(0,"rgba(255,226,120,0.55)"),X.addColorStop(1,"rgba(255,226,120,0)"),n.fillStyle=X,n.beginPath(),n.arc(E,N,Re*1.6,0,7),n.fill()}n.globalAlpha=H?.95:.6;let et=Re*.95*q;n.drawImage(ye.m_q,E-et/2,N-et/2,et,et),n.globalAlpha=1}if(this.path.length){let F=this.pathFlash||0;this.pathFlash=Math.max(0,F-t*1.5),n.beginPath(),n.lineWidth=5+F*4,n.setLineDash([2,12]),n.lineDashOffset=I*20,n.strokeStyle=`rgba(110,60,40,${.85})`;let[D,E]=En(this.pos[0],this.pos[1]);n.moveTo(D,E);for(let[q,et]of this.path){let[X,nt]=En(q,et);n.lineTo(X,nt)}n.stroke(),n.setLineDash([]);let[N,H]=En(a[0],a[1]);n.beginPath(),n.arc(N,H,9,0,7),n.fillStyle="rgba(255,250,235,0.9)",n.fill(),n.lineWidth=3,n.strokeStyle="#6e3c28",n.stroke()}if(this.catchFx){let F=this.catchFx;F.t+=t;let[D,E]=En(F.at[0],F.at[1]),N=Math.min(1,F.t/.6);n.lineWidth=6*(1-N)+1,n.strokeStyle=`rgba(255,214,90,${1-N})`,n.beginPath(),n.arc(D,E,Re*(.5+N*1.3),0,7),n.stroke(),F.t>.6&&(this.catchFx=null)}let C=this.lesson&&$l[this.lesson].mark;if(C){let F=C==="sleep"?ne.sleep.at:a,[D,E]=En(F[0],F[1]),N=Re*(C==="sleep"?1:.55)*(1+Math.sin(I*5)*.06);if(n.setLineDash([]),n.lineWidth=4,n.strokeStyle="rgba(255,206,70,0.95)",n.beginPath(),n.arc(D,E,N,0,7),n.stroke(),Yl.complete&&Yl.naturalWidth){let H=Re*.9,q=E-N-H*.55-Math.abs(Math.sin(I*4))*Re*.25;n.save(),n.translate(D,q),n.rotate(Math.PI/2),n.drawImage(Yl,-H/2,-H*.4,H,H*.8),n.restore()}}n.setTransform(1,0,0,1,0,0);let L=n.createRadialGradient(s/2,r/2,Math.min(s,r)*.42,s/2,r/2,Math.max(s,r)*.72);L.addColorStop(0,"rgba(60,35,20,0)"),L.addColorStop(1,"rgba(60,35,20,0.35)"),n.fillStyle=L,n.fillRect(0,0,s,r)}drawPot(t){let e=this.liq,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.t,o=this.liquidCol;this.nearAny&&this.nearD<2.4&&!this.curdle&&(o=Sa(o,ne[this.nearAny].liquid,Math.max(0,1-this.nearD/2.4)*.8)),this.shownCol=this.shownCol?Sa(this.shownCol,o,Math.min(1,t*4)):o;let l=s*.504,c=r*.172,h=s*.325,d=r*.125;n.clearRect(0,0,s,r);let u=n.createRadialGradient(l,c-d*.3,h*.1,l,c,h);u.addColorStop(0,As(this.shownCol,.35)),u.addColorStop(.6,this.shownCol),u.addColorStop(1,As(this.shownCol,-.45)),n.fillStyle=u,n.beginPath(),n.ellipse(l,c,h,d,0,0,7),n.fill(),n.save(),n.beginPath(),n.ellipse(l,c,h*.98,d*.95,0,0,7),n.clip(),n.strokeStyle=As(this.shownCol,.5),n.globalAlpha=.45,n.lineWidth=s*.006,n.lineCap="round";for(let D=0;D<3;D++){let E=this.spoonA*.6+D*2.1+a*.4;n.beginPath(),n.ellipse(l,c,h*(.35+D*.2),d*(.35+D*.2),0,E,E+1.3),n.stroke()}n.globalAlpha=1,Math.random()<t*(this.curdle?3:9+this.stirV*6)&&this.bubbles.push({x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.4,r:0,max:s*(.012+Math.random()*.022),t:0,life:.6+Math.random()*.8});for(let D=this.bubbles.length-1;D>=0;D--){let E=this.bubbles[D];if(E.t+=t,E.t>E.life){this.bubbles.splice(D,1),Math.random()<.25&&dt.bubble(),this.steam.push({x:.504+E.x*.325*.5,y:.172+E.y*.125*.5,vx:0,vy:-.15,life:.35,t:0,s:4,c:As(this.shownCol,.6),pop:1});continue}let N=E.max*Math.min(1,E.t/(E.life*.7)),H=l+E.x*h*.5,q=c+E.y*d*.5;n.fillStyle=As(this.shownCol,.25),n.beginPath(),n.ellipse(H,q,N,N*.8,0,0,7),n.fill(),n.strokeStyle=As(this.shownCol,.65),n.lineWidth=s*.003,n.stroke(),n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.arc(H-N*.35,q-N*.3,N*.22,0,7),n.fill()}let m=this.spoonA,x=l+Math.cos(m)*h*.45,g=c+Math.sin(m)*d*.45;n.strokeStyle=As(this.shownCol,.55),n.lineWidth=s*.004,n.globalAlpha=.7,n.beginPath(),n.ellipse(x,g,s*.035,s*.012,0,0,7),n.stroke(),n.globalAlpha=1,n.restore();let p=this.fx,f=p.getContext("2d"),w=p.width,I=p.height;f.clearRect(0,0,w,I);let M=D=>D*w,S=D=>I*(.6+D),T=M(.504+Math.cos(m)*.325*.45),P=S(.172+Math.sin(m)*.125*.45),v=w*.62,b=v*220/476;f.save(),f.beginPath(),f.rect(0,0,w,P-w*.004),f.clip(),f.translate(T,P),f.rotate(Math.cos(m)*.18+Math.sin(a*2)*.03),f.drawImage(ye.spoon,-b*.14,-v*.93,b,v),f.restore(),Math.random()<t*5&&this.steam.push({x:.504+(Math.random()-.5)*.4,y:.16,vx:(Math.random()-.5)*.04,vy:-.12-Math.random()*.08,life:2.4,t:0,s:14+Math.random()*18,c:"rgba(255,255,255,1)",soft:1});for(let D=this.steam.length-1;D>=0;D--){let E=this.steam[D];if(E.t+=t,E.t>E.life){this.steam.splice(D,1);continue}E.x+=E.vx*t,E.y+=E.vy*t,E.x+=Math.sin(E.t*2+D)*8e-4;let N=E.t/E.life,H=M(E.x),q=S(E.y);if(E.soft){let et=E.s*(w/400)*(.6+N*1.4),X=f.createRadialGradient(H,q,0,H,q,et);X.addColorStop(0,`rgba(255,255,255,${.22*(1-N)})`),X.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=X,f.beginPath(),f.arc(H,q,et,0,7),f.fill()}else if(E.pop)f.strokeStyle=E.c,f.globalAlpha=1-N,f.lineWidth=2,f.beginPath(),f.arc(H,q,4+N*14,0,7),f.stroke(),f.globalAlpha=1;else{f.fillStyle=E.c,f.globalAlpha=1-N;let et=E.s*(w/400);f.beginPath(),f.arc(H,q,et*(1-N*.5),0,7),f.fill(),f.globalAlpha=1}}for(let D=this.drops.length-1;D>=0;D--){let E=this.drops[D];if(E.t+=t,E.vy+=1.6*t,E.x+=E.vx*t,E.y+=E.vy*t,E.t>E.life){this.drops.splice(D,1);continue}f.fillStyle=E.c,f.globalAlpha=1-E.t/E.life,f.beginPath(),f.arc(M(E.x),S(E.y),E.s*w/400,0,7),f.fill(),f.globalAlpha=1}let C=this.$(".brew-witch"),L=this.stirV>.1||a-(this.circleAt||-9)<.25;this.rig.update(t,{stir:L}),C.style.transform=L?`translateY(${Math.abs(Math.sin(a*7))*-4}px)`:"";let F=this.$(".bottle");F.style.transform=this.nearTier>=0?`scale(${1+Math.max(0,Math.sin(a*5))*.05})`:""}splash(t){for(let e=0;e<18;e++)this.drops.push({x:.504+(Math.random()-.5)*.15,y:.17,vx:(Math.random()-.5)*.5,vy:-.5-Math.random()*.5,t:0,life:.8,s:4+Math.random()*5,c:t});for(let e=0;e<6;e++)this.bubbles.push({x:(Math.random()-.5)*.8,y:(Math.random()-.5)*.6,r:0,max:this.liq.width*(.02+Math.random()*.02),t:0,life:.4+Math.random()*.4});this.potEl.classList.remove("bump"),this.potEl.offsetWidth,this.potEl.classList.add("bump")}updateUI(){let t=this.$(".readout"),e=this.$(".bottle");if(this.nearTier>=0&&this.nearId){let n=ne[this.nearId],s=[2,1,0].map(r=>`<i class="pip ${this.nearTier<=r?"on":""}"></i>`).join("");t.innerHTML=`<img src="${ee(n.medal)}" alt=""><div><b>${n.name}</b><span class="tier t${this.nearTier}">${Sr[this.nearTier]}</span></div><div class="pips">${s}</div>`,t.className="readout hot",e.disabled=!1}else{let n=this.ings.length?this.passed?`Went past ${ne[this.passed].short}. Hold Moon water to drift back`:this.path.length?"Stir to follow the dotted path. Fog lifts as you go":"Path used up. Add another ingredient to go further":"Drop an ingredient in the cauldron to draw a path";t.innerHTML=`<p>${n}</p>`,t.className="readout",e.disabled=!0}this.$(".dump").classList.toggle("hidden",!this.ings.length||!!this.lesson),this.$(".water").classList.toggle("hidden",!!this.lesson&&this.lesson!=="back")}lessonGo(t){if(t===this.lesson&&t)return;this.lesson=t;let e=this.$(".brew-coach"),n=this.$(".coach-ok");this.el.classList.toggle("lesson",!!t),this.$(".brew-ask").classList.toggle("hidden",!!t||!(this.ctx&&this.ctx.ask));for(let r of this.$(".shelf").children)r.classList.toggle("locked",this.lessonLocked(r.dataset.id));if(this.updateUI(),!t){e.classList.add("hidden"),this.$(".lesson-ring").classList.add("hidden");return}let s=$l[t];e.querySelector("p").textContent=s.say,n.classList.toggle("hidden",!s.tap),s.tap&&(n.querySelector("span").textContent=s.tap),e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),t!=="intro"&&dt.pop(),this.placeRing()}lessonNext(){dt.click(),this.lesson==="intro"?this.lessonGo("drop"):this.lesson==="path"&&this.lessonGo("stir")}lessonLocked(t){return!!this.lesson&&t!=="lav"}coachBump(){let t=this.$(".brew-coach");t.classList.remove("nudge"),t.offsetWidth,t.classList.add("nudge")}placeRing(){let t=this.$(".lesson-ghost");if(this.lesson==="drop"||this.lesson==="more"){let o=this.$('.tile[data-id="lav"]').getBoundingClientRect(),l=this.potEl.getBoundingClientRect(),c=this.t%1.9/1.3,h=Math.min(1,c),d=h*h*(3-2*h),u=o.left+o.width/2,m=o.top+o.height*.4,x=l.left+l.width*.5,g=l.top+l.height*.12,p=u+(x-u)*d,f=m+(g-m)*d-Math.sin(d*Math.PI)*l.height*.25;t.classList.remove("hidden"),t.style.opacity=c<.12?c/.12:c>1?Math.max(0,1-(c-1)*3.5):.85,t.style.transform=`translate(${p-32}px, ${f-32}px) rotate(${d*30-10}deg) scale(${1-d*.3})`}else t.classList.add("hidden");let e=this.$(".lesson-ring"),n=this.lesson&&$l[this.lesson].ring,s=n&&this.$(n);if(!s){e.classList.add("hidden");return}let r=s.getBoundingClientRect(),a=6;e.classList.remove("hidden"),e.classList.toggle("big",n===".map-frame"),e.style.left=r.left-a+"px",e.style.top=r.top-a+"px",e.style.width=r.width+a*2+"px",e.style.height=r.height+a*2+"px"}toast(t,e){let n=this.$(".brew-toast");n.innerHTML=(e?`<img src="${ee(e)}" alt="">`:"")+`<span>${t}</span>`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}key(t,e){if(t==="Space"||t==="KeyS")return this.stirHold=e,this.$(".stir").classList.toggle("down",e),!0;if(t==="KeyQ"||t==="KeyW")return this.waterHold=e,this.$(".water").classList.toggle("down",e),!0;if(!e)return!1;if(t==="Enter"||t==="KeyE")return this.lesson&&$l[this.lesson].tap?this.lessonNext():this.bottle(),!0;if(t==="Escape")return this.close(),!0;let n=parseInt(t.replace("Digit",""),10);if(n>=1&&n<=Yh.length){let s=Yh[n-1],r=this.$(`.tile[data-id="${s}"]`);if(!r)return!0;if(this.lessonLocked(s))return r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope"),this.coachBump(),!0;if(V.inv[s]>0){let a=Ma("img","drag-ghost");a.src=ee(Ie[s].icon);let o=r.getBoundingClientRect();a.style.transform=`translate(${o.left+o.width/2-40}px, ${o.top-40}px)`,document.body.appendChild(a),a.offsetWidth,this.drop(s,a,null),dt.pop()}else r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope");return!0}return!1}};function Zh(){if(V.settings.tod>=0)return V.settings.tod;let i=new Date(pe());return i.getHours()+i.getMinutes()/60}var ns=[[0,[.42,.48,.78],.18,1],[4.5,[.46,.5,.8],.18,1],[6,[1,.78,.78],.25,.35],[7.5,[1,.95,.9],.32,0],[12,[1,1,1],.36,0],[16.5,[1,.97,.9],.34,0],[18.2,[1,.8,.62],.28,.15],[19.5,[.66,.6,.9],.22,.7],[21,[.44,.5,.8],.18,1],[24,[.42,.48,.78],.18,1]];function qf(i=Zh()){let t=ns[0],e=ns[ns.length-1];for(let a=0;a<ns.length-1;a++)if(i>=ns[a][0]&&i<=ns[a+1][0]){t=ns[a],e=ns[a+1];break}let n=(i-t[0])/Math.max(1e-6,e[0]-t[0]),s=n*n*(3-2*n),r=(a,o)=>a+(o-a)*s;return{tint:[r(t[1][0],e[1][0]),r(t[1][1],e[1][1]),r(t[1][2],e[1][2])],shadow:r(t[2],e[2]),night:r(t[3],e[3])}}function $f(i=Zh()){return i<5?"Night":i<7.5?"Dawn":i<12?"Morning":i<17?"Afternoon":i<19.5?"Evening":"Night"}function Jh(i=Zh()){let t=Math.floor(i)%24,e=Math.floor(i%1*60),n=t<12?"AM":"PM";return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${n}`}function Ci(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/60),n=t%60;return e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}:${String(n).padStart(2,"0")}`}function Yf(i){let t=Math.max(1,Math.round(i/6e4)),e=Math.floor(t/60),n=Math.floor(e/24),s=(r,a)=>`${r} ${a}${r===1?"":"s"}`;return n>=1?s(n,"day"):e>=1?t%60?`${s(e,"hour")} ${s(t%60,"minute")}`:s(e,"hour"):s(t,"minute")}var Rs=21,mi=15,jf=19,Jv=5*6e4,Kh={mira:"Mira",juniper:"Juniper",oz:"Oz",pip:"Pip",wren:"Wren",basil:"Basil"},is={crow:.75,pip:1.3,wren:1.12,basil:.8,mira:1.05,juniper:1.2,oz:.9,kuro:1.6,me:1.25},Kv=Object.fromEntries(Xl.map(i=>[i.id,i])),jv=["cham","lav","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],$t,Oe,mt,Pe,Cn,jn,dn,fn,Cs,Qn,se=null,ht={started:!1,quiet:0,t:0,focus:null,target:null,disc:!1,chatT:3,secT:0,saveT:0,where:"home",fps:[],lowQ:!1},$e=()=>(pi[V.q]||pi[pi.length-1]).id,Qv=(i,t)=>`${i}:${t}`,An=i=>{let[t,e]=i.split(":");return[t,+e]},jh=(i,t)=>Math.max(5,Math.round(ne[i].base*Gh[t]*1.1/5)*5),ty=(i,t)=>Math.round(ne[i].base*Gh[t]),Kl=i=>`<span class="tier t${i}">${Sr[i]}</span>`,Is=()=>!ht.started||ht.disc||dn.isOpen||Qn.isOpen||Ol()||kl()||ht.cut,nu=i=>new Promise(t=>setTimeout(t,i)),Qf=10*6e4,ey=3,tp=()=>(V.wild.fish||[]).filter(i=>pe()-i<Qf),ep=()=>ey-tp().length,np=()=>{let i=tp();return i.length?Math.min(...i)+Qf-pe():0},gn=(i,t,e)=>$t.toScreen(i,t,e,{x:0,y:0}),Ne=(i,t=.15)=>[i.x,(i.h*i.sy+t)*Math.cos(.72)+i.mesh.position.y,i.z-(i.h*i.sy+t)*Math.sin(.72)];function Qh(){return 1+Math.floor(V.fame/3)}function wr(i,t,e=mi){ht.focus=[i,t],$t.distGoal=e}function Tr(){ht.focus=null,$t.distGoal=Rs}function ip(i,t){let e=Qh();V.fame+=i;let n=Qh();Bh(n,V.fame%3/3),t&&On(`+${i} fame`,t,"fame"),n>e&&setTimeout(()=>Tn(`Fame Lv ${n}`,"More of Mossbrook knows your name",{kind:"gold",onShow:()=>dt.discover()}),600)}function sp(i,t){V.coins+=i,t?Nf(i,t,(e,n)=>{e===n-1&&xa(V.coins,!0)}):xa(V.coins,!0),t&&On(`+${i}`,{x:t.x,y:t.y-30},"coin")}function Ta(i,t,e){V.inv[i]=(V.inv[i]||0)+t,V.found[i]=!0,V.newCount=(V.newCount||0)+t;for(let n=0;n<Math.min(t,4);n++)Ul(Ie[i].icon,e,Vt("#bBag"),{delay:n*110,size:52,onArrive:n===Math.min(t,4)-1?()=>{_r(V.newCount),dt.pop()}:null})}function iu(i){let t=i>mt.x?1:-1;t!==mt.face&&(mt.flipFrom=mt.face,mt.face=t,mt.flipT=0)}function ny(){let i=pi[V.q]||pi[pi.length-1];if(i.id==="free"){if(V.cust.here){let e=Mr[V.cust.i%Mr.length];return[V.cust.asked?`Brew a ${ne[e.want].name} for ${e.name}`:`${e.name} is at your door`,""]}let t=V.cust.nextAt-pe();return["Explore at your own pace",t>1e3?`Visitor in ${Ci(t)}`:"Visitor soon"]}return[i.text,i.need?`${Math.min(V.qn,i.need)}/${i.need}`:""]}function ti(i){if($e()!==i)return!1;let t=pi[V.q];return V.q=Math.min(pi.length-1,V.q+1),V.qn=0,ge(),dt.quest(),Fe(15),ts(`<b>Done!</b> ${t.text}`,"star"),setTimeout(()=>iy($e()),700),!0}function iy(i){i==="talk"&&!se&&wa(!0),i==="mystery"&&Tn("Something glows","Far north on the potion map, past the brambles",{icon:"m_q",kind:"gold",ms:3200}),i==="free"&&(V.cust.nextAt=Math.max(V.cust.nextAt,pe()+9e4),Tn("The slice is yours","Everything keeps growing on the real clock. Come back later!",{ms:3600})),ge(!0)}function sy(){switch($e()){case"letter":return Ne(Oe.props.mailbox,.5);case"harvest":{let i=null,t=1e9;for(let e of Cn.plots)if(Cn.state(e.i).ready){let n=Math.hypot(e.x-mt.x,e.z-mt.z);n<t&&(t=n,i=e)}return i?[i.x,1.9,i.z-.4]:null}case"talk":case"deliver":return se&&!se.moving?Ne(se.spr,.5):null;case"brew":case"mystery":return mt.x<wi?Ne(Oe.props.cauldron,.6):[ct.roadEnd[0],1,ct.roadEnd[1]];case"town":return[ct.roadEnd[0],1.2,ct.roadEnd[1]];case"board":return Ne(Oe.props.board,.4);case"stall":return Ne(Oe.props.myStall,.4);case"buy":return Ne(Oe.props.stalls.mira,.3);default:{if(!V.cust.here||!se||se.moving||mt.x>=wi)return null;let i=se.def.want,t=Object.keys(V.potions).some(e=>e.startsWith(i+":")&&V.potions[e]>0);return V.cust.asked&&!t?Ne(Oe.props.cauldron,.6):Ne(se.spr,.5)}}}function wa(i){let t=Mr[V.cust.i%Mr.length],e=t.who==="crow"?1.5:1.6,n=i?ct.crowEnter:ct.crowWait;if(se=new es($t,t.sprite,e,n[0],n[1],{talk:t.talk,speed:2.4,rig:t.rig}),se.def=t,t.who==="pip"||t.who==="wren"){let r=fn[t.who];r.busy=!0,r.spr.visible=!1,Cs.remove("n-"+t.who)}let s=()=>{V.cust.here=!0,ge(!0),se.face=1,se.hop(),t.who==="crow"?dt.caw():dt.blip("a",is[t.who]||1)};i?(se.goTo([[12,1.6],[9,4],[1.5,4.1],ct.crowWait],s),t.who==="crow"&&setTimeout(()=>dt.caw(),400),ht.started&&(mt.x<wi?ts(`${t.name} is coming up the path`,t.sprite):Nl(`<img src="${ee(t.sprite)}" alt=""><span>${Jn(t.name)} is waiting at your cottage</span>`))):(V.cust.here=!0,se.face=1)}function ry(){let i=se;se=null,i&&(i.goTo([[1.5,4.1],[9,4],[12,1.6],ct.crowEnter,[22,.8]],()=>{i.spr.dispose();let t=i.def.who;if(t==="pip"||t==="wren"){let e=fn[t];e.busy=!1,e.spr.visible=!0}}),Cs.remove("n-cust"))}async function ay(){let i=se,t=i.def,e=ne[t.want];if(Math.abs(mt.x-i.x)<1.2){let r=mt.x>=i.x?1:-1;mt.walkTo(i.x+r*1.35,i.z+.4,i.x),i.face=r}else iu(i.x),i.face=i.x>mt.x?-1:1;let n=is[t.who]||1,s=async(r,a=[])=>{i.talking=Math.min(6,r.length*.035);let o=await Ti(t.name,r,a,{pitch:n});return i.talking=0,o};ht.focus=[(i.x+mt.x)/2,(i.z+mt.z)/2],$t.distGoal=mi;try{if(!V.cust.asked){await s(t.ask,[{label:"Leave it to me!"},{label:"What happened?"}])===1&&await s(t.who==="crow"?"Owls. Singing. All night. They even take requests.":"It is a long story, and most of it is embarrassing."),V.cust.asked=!0,ge(!0),$e()==="talk"?(await Ti(V.name,"Granny's letter said lavender pulls a brew toward Sleep. The cauldron is by the cottage.",[],{pitch:is.me}),ti("talk")):ts(`${t.name} wants a <b>${e.name}</b>`,e.medal);return}let r=Object.keys(V.potions).filter(u=>V.potions[u]>0).sort((u,m)=>(An(u)[0]===t.want?-1:0)-(An(m)[0]===t.want?-1:0)||An(u)[1]-An(m)[1]).slice(0,3);if(!r.length){await s(`No rush. A ${e.name} whenever you are ready.`);return}let a=r.map(u=>{let[m,x]=An(u);return{label:`${ne[m].short} (${Sr[x]})`,icon:ne[m].potion}});a.push({label:"Not yet"});let o=await s(`Is that a ${e.name} I smell?`,a);if(o<0||o>=r.length)return;let[l,c]=An(r[o]);if(l!==t.want){dt.fail(),await s(`Hmm. That smells like ${ne[l].short}. I need a ${e.name}.`);return}V.potions[r[o]]--;let h=ty(l,c),d=gn(i.x,1.4,i.z);i.cheer(),dt.bottle(),$t.sparkle(i.x,1,i.z,16,"#fff2a8"),sp(h,d),ip(1,{x:d.x,y:d.y-60}),await s(`${t.thanks} Here, ${h} coins.${c===0?" A perfect brew, too!":""}`),V.cust.i++,V.cust.here=!1,V.cust.asked=!1,V.cust.nextAt=pe()+Jv,ge(),ry(),Nl(null),ti("deliver")}finally{ht.focus=null,$t.distGoal=Rs}}function rp(){let i=[],t=(n,s,r,a,o,l,c,h)=>i.push({id:n,x:s,z:r,r:a,label:o,act:l,anchor:c,spr:h}),e=Oe.props;if(mt.x<wi-4){if(t("mailbox",ct.mailbox[0],ct.mailbox[1]+.3,1.7,$e()==="letter"?"Read letter":"Mailbox",gy,Ne(e.mailbox),e.mailbox),t("cauldron",ct.cauldron[0],ct.cauldron[1]+.3,2.1,"Brew",Jf,Ne(e.cauldron,.3),e.cauldron),t("door",ct.door[0],ct.door[1]+.5,1.4,"Enter workshop",Jf,[ct.door[0],2.4,ct.door[1]-.6]),t("sign",ct.sign[0],ct.sign[1]+.3,1.5,"Read sign",uy,Ne(e.sign),e.sign),t("woodsign",ct.woodSign[0],ct.woodSign[1]+.3,2,"Read sign",fy,Ne(e.woodSign),e.woodSign),mt.x<ys+3||mt.z>8.6){let s=jn.nearBerry(mt.x,mt.z);if(s){let a=jn.berryLeft(s.i);t("berry"+s.i,s.x,s.z+.5,1.6,a?`Berries in ${Ci(a)}`:"Pick berries",()=>cy(s.i),Ne(s.spr,.1),s.spr)}let r=jn.nearBug(mt.x,mt.z);r&&t("bug"+r.i,r.x,r.z,1.7,`Catch ${Ie[r.kind].name}`,()=>op(r),[r.x,r.y+.75,r.z],r.spr)}if(mt.z>5){t("pondsign",ct.pondSign[0],ct.pondSign[1]+.3,1.5,"Read sign",dy,Ne(e.pondSign),e.pondSign);let s=ep();t("fish",ct.fish[0],ct.fish[1],1.7,s>0?"Fish":`Fish bite again in ${Ci(np())}`,cp,Ne(e.bucket,.5),e.bucket)}Pe.atStall||t("cat",Pe.x,Pe.z+.2,1.3,"Pet Kuro",hy,Ne(Pe.spr,.2),Pe.spr);let n=Cn.nearest(mt.x,mt.z,1.35);if(n){let s=Cn.state(n.i);t("plot"+n.i,n.x,n.z,1.35,s.ready?`Harvest ${s.def.name}`:`${s.def.name} in ${Ci(s.left)}`,()=>ly(n.i),[n.x,1.5,n.z-.6],n.spr)}se&&!se.moving&&t("cust",se.x,se.z+.2,1.7,V.cust.asked?`Give ${se.def.name} a potion`:`Talk to ${se.def.name}`,ay,Ne(se.spr,.3),se.spr)}else{t("board",ct.board[0],ct.board[1]+.5,2,"Discovery board",_y,Ne(e.board,.1),e.board);for(let n of["mira","juniper","oz"]){let[s,r]=fi[n];t("stall-"+n,s,r+.3,1.9,`${Kh[n]}'s stall`,()=>vy(n),Ne(fn[n].spr,.35),e.stalls[n])}t("mystall",ct.myStall[0],ct.myStall[1]+.3,1.9,"Your stall",yy,Ne(e.myStall,.1),e.myStall),t("fountain",ct.fountain[0],ct.fountain[1]+.9,2.5,"Make a wish",py,[ct.fountain[0],2.6,ct.fountain[1]-1.4],e.fountain);for(let n of Wl){let s=fn[n];s.busy||t("folk-"+n,s.x,s.z+.15,1.4,`Chat with ${Kh[n]}`,()=>my(n),Ne(s.spr,.3),s.spr)}}return i}function ap(){if(Is()||ht.quiet>0){ht.target=null,Jl(null),vr(null);return}let i=null,t=1e9;for(let e of rp()){let n=Math.hypot(e.x-mt.x,(e.z-mt.z)*1.25);n<e.r&&n/e.r<t&&(t=n/e.r,i=e)}if(ht.target=i,Jl(i&&i.spr),i){let e=gn(i.anchor[0],i.anchor[1],i.anchor[2]);vr(i.label,{x:Math.round(e.x),y:Math.round(e.y)})}else vr(null)}function Jl(i){ht.lit!==i&&(ht.lit&&(ht.lit.outline=0),ht.lit=i||null,ht.litT=0)}function oy(i){ht.lit&&(ht.litT=Math.min(1,(ht.litT||0)+i*6),ht.lit.outline=ht.litT)}function tu(){if(Is()||!ht.target)return;let i=ht.target;iu(i.x),i.act()}function ly(i){let t=Cn.state(i);if(!t.ready){let r=Cn.plots[i];On(`Ready in ${Ci(t.left)}`,gn(r.x,1.2,r.z),"soft"),dt.click();return}let e=Cn.plots[i];mt.setPose("witch_pick",.42);let n=Cn.harvest(i);dt.harvest(),Fe(10);let s=gn(e.x,.8,e.z);Ta(n.crop,n.n,s),On(`+${n.n} ${Ie[n.crop].name}`,{x:s.x,y:s.y-40}),ht.quiet=.9,$e()==="harvest"&&(V.qn++,V.qn>=pi[V.q].need&&ti("harvest")),ge(!0)}function cy(i){let t=jn.berries[i],e=jn.berryLeft(i);if(e){On(`Regrows in ${Ci(e)}`,gn(t.x,1.6,t.z),"soft"),dt.click();return}mt.setPose("witch_pick",.42);let n=jn.pick(i);dt.harvest(),Fe(10);let s=gn(t.x,.8,t.z);Ta("berry",n,s),On(`+${n} ${Ie.berry.name}`,{x:s.x,y:s.y-40}),ht.quiet=.9,ge(!0)}async function op(i){if(ht.cut)return;ht.cut=!0,Bl(),mt.setPose("witch_pick",.36),wr(i.x,i.z-.3,mi-2),await nu(420);let t=!V.beetles||Math.random()<.45,e=await Qn.open("bug",{kind:i.kind,beetle:t,firstBeetle:!V.beetles,from:gn(i.x,i.y,i.z)});e.got.includes("beetle")&&(V.beetles=(V.beetles||0)+1),Tr();let n=gn(mt.x,1.6,mt.z);e.got.includes(i.kind)?jn.markCaught(i):jn.markFled(i),lp(e.got,n),e.got.length||On("It flew off. It will be back soon",n,"soft"),ht.cut=!1,ht.quiet=.8,ge(!0)}function lp(i,t){let e={};for(let s of i)e[s]=(e[s]||0)+1;let n=0;for(let[s,r]of Object.entries(e)){let a=!V.found[s];setTimeout(()=>{Ta(s,r,t),On(`+${r} ${Ie[s].name}`,{x:t.x,y:t.y-40-n*4}),a&&ts(`<b>${Ie[s].name}</b> joins your shelf`,Ie[s].icon)},150+n++*380)}}async function cp(){let i=ep(),t=gn(ct.fish[0],1.4,ct.fish[1]);if(i<=0){On(`The fish are wary. Back in ${Ci(np())}`,t,"soft"),dt.click();return}if(ht.cut)return;ht.cut=!0,Bl(),iu(ct.fish[0]+1),wr(ct.fish[0],ct.fish[1]+.8,mi-2),await nu(420);let e=await Qn.open("fish",{bites:i,from:gn(ct.fish[0],.1,ct.fish[1]+1.2),onCatch:()=>{V.wild.fish.push(pe()),ge(!0)}});Tr(),lp(e.got,gn(mt.x,1.6,mt.z)),ht.cut=!1,ht.quiet=.8,ge(!0)}function hy(){Pe.hop(),dt.meow(),Fe(8),$t.sparkle(Pe.x,.7,Pe.z,8,"#ffb3c8");let i=gn(Pe.x,1.1,Pe.z);On("\u2665",i,"heart"),ht.pets=(ht.pets||0)+1,ht.pets===5&&setTimeout(()=>Ti("Kuro","Mrrrp. (Kuro would like it noted that he is an excellent shopkeeper.)",[],{pitch:is.kuro}),300)}async function uy(){await Ti("Signpost","East: Mossbrook Square. West: Hazel Cottage, and past it Whisperwood. North: fog, and nobody knows.",[],{pitch:.9})}async function dy(){await Ti("Signpost","Willow Pond, down the steps. Fish bite from the end of the dock. Mind the frog.",[],{pitch:.9})}async function fy(){await Ti("Signpost","Whisperwood. Wild berries grow back by themselves. Moths and ladybugs by day, glowbugs after dark. Bring a net.",[],{pitch:.9})}function py(){dt.discover(),Fe(12),$t.sparkle(ct.fountain[0],2.2,ct.fountain[1]-.6,26,"#cfefff",1.2,1.6);let i=["The water glitters. Something in the fog feels closer.","A tiny rainbow. Kuro would approve.","You wish for a Perfect brew. The fountain hums back."];ts(i[Math.floor(Math.random()*i.length)],"m_drop")}async function my(i){let t=fn[i];t.busy=!0,t.path=[],t.face=t.x>mt.x?-1:1;let e={pip:["Mira says blue caps pull a brew north. I wonder what is up there.","I sold three Healing potions before lunch! Okay, two. Okay, I drank one."],wren:["Nobody has put Luck on the board yet. The north fog is spooky.","Glow sells best at night. Everyone walks home in the dark."],basil:["I trade river reeds for anything sweet. Mostly I just like the walk.","The pond past your cottage has fish that bite at dusk. Bring a light hand."]}[i];ht.focus=[(t.x+mt.x)/2,(t.z+mt.z)/2],$t.distGoal=mi,t.talking=2,await Ti(Kh[i],e[Math.floor(Math.random()*e.length)],[],{pitch:is[i]}),t.talking=0,t.busy=!1,t.wait=1.5,ht.focus=null,$t.distGoal=Rs}function gy(){if($e()!=="letter"){Oe.props.mailbox.flash=.6,setTimeout(()=>Oe.props.mailbox.flash=0,120),dt.click(),On("Empty for now",gn(ct.mailbox[0],1.6,ct.mailbox[1]),"soft");return}Ei("letter-card",`
    <div class="letter">
      <p>Dear ${Jn(V.name)},</p>
      <p>The cottage is yours now, and so is the old cauldron. Do look after Kuro. He pretends he does not need looking after.</p>
      <p>Every herb pulls a brew a different way. Stir, follow where it leads, and the fog will lift. There are more potions out there than I ever found.</p>
      <p>Lavender for sleepy folk. Here are two sprigs to start you off.</p>
      <p>When the garden runs thin, take the little trail west into Whisperwood. The berries and moths there do odd things to a brew.</p>
      <p class="sign">With love,<br>Granny Hazel</p>
      <div class="gift"><img src="${ee("i_lav")}" alt=""><img src="${ee("i_lav")}" alt=""></div>
    </div>
    <button class="btn-green take"><span>Take the lavender</span></button>`,{onClose:()=>xy()}).querySelector(".take").addEventListener("click",()=>Ms())}var Zf=!1;function xy(){Zf||$e()!=="letter"||(Zf=!0,Ta("lav",2,{x:innerWidth/2,y:innerHeight/2}),Oe.props.mailbox.set("mailbox_empty"),$t.sparkle(ct.mailbox[0]+.4,1.1,ct.mailbox[1],10,"#fff2a8"),ti("letter"))}function hp(i,{cls:t="",empty:e=0}={}){let n=i.map(s=>`<button class="slot ${t} ${s.sel?"sel":""}" data-k="${s.k}" ${s.title?`title="${Jn(s.title)}"`:""}><img src="${ee(s.icon)}" alt=""><b>${s.n}</b>${s.tier!=null?`<i class="tdot t${s.tier}"></i>`:""}</button>`).join("");for(let s=i.length;s<e;s++)n+='<div class="slot blank"></div>';return n}function su(i){return i==="herbs"?jv.filter(t=>V.inv[t]>0).map(t=>({k:t,icon:Ie[t].icon,n:V.inv[t],title:Ie[t].name})):Object.keys(V.potions).filter(t=>V.potions[t]>0).map(t=>{let[e,n]=An(t);return{k:t,icon:ne[e].potion,n:V.potions[t],tier:n,title:`${ne[e].name} (${Sr[n]})`}})}function up(i="herbs"){V.newCount=0,_r(0),ge(!0);let t=Ei("bag-card",`
    <div class="tabs"><button class="tab" data-t="herbs">Herbs</button><button class="tab" data-t="potions">Potions</button></div>
    <div class="bag-grid"></div>
    <div class="bag-info"><p></p></div>`,{title:"Bag"}),e=n=>{i=n,t.querySelectorAll(".tab").forEach(r=>r.classList.toggle("on",r.dataset.t===n));let s=su(n);t.querySelector(".bag-grid").innerHTML=hp(s,{empty:10}),t.querySelector(".bag-info p").innerHTML=s.length?"Tap an item to read about it":n==="herbs"?"No herbs yet. Harvest your garden or buy from the stalls":"No potions yet. Brew one at the cauldron",t.querySelectorAll(".slot[data-k]").forEach(r=>r.addEventListener("click",()=>{dt.click(),t.querySelectorAll(".slot").forEach(l=>l.classList.remove("sel")),r.classList.add("sel");let a=r.dataset.k,o;if(n==="herbs"){let l=ba[a];o=`<b>${Ie[a].name}</b> ${l?`Grows in your garden in ${l.growMin} minutes.`:Ie[a].from||"Sold at the town stalls."}`}else{let[l,c]=An(a);o=`<b>${ne[l].name}</b> ${Kl(c)} Suggested price ${jh(l,c)} coins.`}t.querySelector(".bag-info p").innerHTML=o}))};t.querySelectorAll(".tab").forEach(n=>n.addEventListener("click",()=>{dt.click(),e(n.dataset.t)})),e(i)}function dp(){let i=Object.entries(ne).map(([e,n])=>{let s=V.discovered[e],r=V.recipes[e];return s?`<div class="rec"><img class="medal" src="${ee(n.medal)}" alt=""><div class="rec-t"><b>${n.name}</b>${Kl(s.tier)}</div><div class="rec-i">${r.ings.map(a=>`<img src="${ee(Ie[a].icon)}" alt="">`).join("<em>+</em>")}</div></div>`:`<div class="rec unknown"><img class="medal" src="${ee("m_q")}" alt=""><div class="rec-t"><b>???</b><span>Somewhere ${n.hint}</span></div></div>`}).join(""),t=Object.keys(V.discovered).length;Ei("book-card",`<p class="book-sub">${t} of ${Object.keys(ne).length} found</p><div class="recs">${i}</div>`,{title:"Recipes"})}function _y(){let i=Object.entries(ne).map(([t,e])=>{let n=Wh.find(r=>r.effect===t);return V.board.find(r=>r.effect===t)?`<div class="pin-row mine"><img src="${ee(e.medal)}" alt=""><b>${e.name}</b><span>${Jn(V.name)} (you)</span></div>`:n?`<div class="pin-row"><img src="${ee(e.medal)}" alt=""><b>${e.name}</b><span>${Jn(n.who)}, ${n.when}</span></div>`:`<div class="pin-row open"><img src="${ee("m_q")}" alt=""><b>Undiscovered</b><span>First finder gets their name here</span></div>`}).join("");Ei("board-card",`<p class="book-sub">First discoveries in Mossbrook</p><div class="pins">${i}</div><p class="demo-note">Demo: other names are simulated townsfolk.</p>`,{title:"Discovery board",onClose:()=>{Tr(),ti("board")}}),wr(ct.board[0],ct.board[1]+.6,mi)}function fp(i,t,e){return`
    <div class="shop-top">
      <div class="keeper"><img src="${ee(i)}" alt=""></div>
      <div class="shop-talk"><div class="ribbon sm"><span>${Jn(t)}</span></div><div class="speech"><p>${e}</p></div></div>
    </div>
    <div class="counter"></div>
    <div class="buybar"></div>
    <div class="bag-row"><button class="arrow l" aria-label="Previous"></button><div class="bag-strip"></div><button class="arrow r" aria-label="Next"></button><i class="badge hidden"></i></div>`}function pp(i,t,e,n){let s=0,r=6,a=()=>{let o=su(t).map(h=>({...h,sel:h.k===n})),l=Math.max(1,Math.ceil(o.length/r));s=Math.min(s,l-1),i.querySelector(".bag-strip").innerHTML=hp(o.slice(s*r,s*r+r),{empty:r,cls:e?"pick":""}),i.querySelector(".bag-row .arrow.l").classList.toggle("off",s===0),i.querySelector(".bag-row .arrow.r").classList.toggle("off",s>=l-1);let c=i.querySelector(".bag-row .badge");c.textContent=o.reduce((h,d)=>h+d.n,0),c.classList.toggle("hidden",!o.length),e&&i.querySelectorAll(".bag-strip .slot[data-k]").forEach(h=>h.addEventListener("click",()=>{n=h.dataset.k,e(h.dataset.k,h),a()}))};return i.querySelector(".bag-row .arrow.l").addEventListener("click",()=>{s>0&&(s--,dt.click(),a())}),i.querySelector(".bag-row .arrow.r").addEventListener("click",()=>{s++,dt.click(),a()}),a(),{draw:a,setSel:o=>{n=o,a()}}}function mp(){let i=Math.floor(pe()/36e5);V.boughtHour!==i&&(V.bought={},V.boughtHour=i)}function ru(){mp();for(let i of Xl){if(!i.stall||!Oe.props.stalls[i.id])continue;let t=[];for(let e of i.stall.items){let n=Math.min(3,e.stock-(V.bought[`${i.id}:${e.ing}`]||0));for(let s=0;s<n;s++)t.push(Ie[e.ing].icon)}Rh(Oe.props.stalls[i.id],i.stall.sprite,t)}Rh(Oe.props.myStall,"stall_mine",V.stall.items.map(i=>ne[An(i.key)[0]].potion))}function vy(i){mp();let t=Kv[i],e=t.stall;fn[i].hop(),dt.blip("h",is[i]);let s=Ei("shop-card",fp(t.sprite,t.name,Jn(e.line)),{onClose:Tr});wr(fi[i][0],fi[i][1]+.4,mi);let r=null,a=s.querySelector(".speech p"),o=h=>h.stock-(V.bought[`${i}:${h.ing}`]||0),l=()=>{s.querySelector(".counter").innerHTML=[0,1,2,3].map(g=>{let p=e.items[g];if(!p)return'<div class="ctile blank"></div>';let f=o(p);return`<button class="ctile ${r===g?"sel":""} ${f?"":"sold"}" data-i="${g}"><img src="${ee(Ie[p.ing].icon)}" alt=""><span class="price"><b>${p.price}</b></span><i class="stock">${f?"x"+f:"Sold out"}</i></button>`}).join(""),s.querySelectorAll(".ctile[data-i]").forEach(g=>g.addEventListener("click",()=>{r=+g.dataset.i,dt.click(),l()}));let h=s.querySelector(".buybar");if(r==null){h.innerHTML="<p>Tap an item on the counter</p>";return}let d=e.items[r],u=Ie[d.ing],m=o(d),x=m>0&&V.coins>=d.price;h.innerHTML=`<p><b>${u.name}</b> ${m?`${m} left`:"sold out"}${V.coins<d.price&&m?". Not enough coins":""}</p><button class="btn-green buy" ${x?"":"disabled"}><span>Buy for ${d.price}</span></button>`,h.querySelector(".buy").addEventListener("click",g=>{if(!x)return;V.coins-=d.price,xa(V.coins,!0),V.bought[`${i}:${d.ing}`]=(V.bought[`${i}:${d.ing}`]||0)+1;let p=g.currentTarget.getBoundingClientRect();dt.coin(0),dt.pop(),Fe(10),Ta(d.ing,1,{x:p.left+p.width/2,y:p.top}),a.textContent=["Thank you kindly!","Pleasure doing business!","Come back soon!"][Math.floor(Math.random()*3)],Kn(s.querySelector(".keeper img")),ge(!0),d.ing==="mush"&&ti("buy"),ru(),l(),c.draw()})},c=pp(s,"herbs");l()}function yy(){let i=Ei("shop-card mine",fp("cat","Kuro","Mrrp. Leave potions on the counter and I will sell them, even while you sleep."),{onClose:Tr});wr(ct.myStall[0],ct.myStall[1]+.4,mi);let t=null,e=0,n=()=>{let a=V.stall.items;i.querySelector(".counter").innerHTML=[0,1,2,3].map(o=>{let l=a[o];if(!l)return'<div class="ctile blank"><span class="plus">+</span></div>';let[c,h]=An(l.key);return`<div class="ctile listed"><img src="${ee(ne[c].potion)}" alt=""><i class="tdot t${h}"></i><span class="price"><b>${l.price}</b></span><i class="stock">sells in ${Ci(l.sellAt-pe())}</i></div>`}).join("")},s=()=>{let a=V.stall.items;n();let o=i.querySelector(".buybar");if(!t){o.innerHTML=`<p>${a.length>=4?"The counter is full":su("potions").length?"Tap a potion in your bag to put it on the counter":"No potions to sell. Brew some at the cauldron"}</p>`;return}let[l,c]=An(t),h=jh(l,c);o.innerHTML=`<img class="bb-icon" src="${ee(ne[l].potion)}" alt=""><p><b>${ne[l].short}</b> ${Kl(c)}</p>
      <div class="pricer"><button class="arrow l sm" aria-label="Lower"></button><span class="price"><b>${e}</b></span><button class="arrow r sm" aria-label="Higher"></button></div>
      <p class="hint">${e>h*1.15?"Pricey. It will take longer to sell":e<h*.9?"A bargain. It will go fast":"A fair price"}</p>
      <button class="btn-green list" ${a.length>=4?"disabled":""}><span>Put on counter</span></button>`,o.querySelector(".arrow.l").addEventListener("click",()=>{e=Math.max(5,e-5),dt.click(),s()}),o.querySelector(".arrow.r").addEventListener("click",()=>{e+=5,dt.click(),s()}),o.querySelector(".list").addEventListener("click",()=>{let d=V.stall.items;if(d.length>=4||!(V.potions[t]>0))return;V.potions[t]--;let u=$e()==="stall",m=(u?25+Math.random()*15:60+Math.random()*90)*(e/h)**2;d.push({key:t,price:e,sellAt:pe()+m*1e3}),V.stall.open=!0,Pe.moveToStall(!0),dt.pop(),Fe(8),Kn(i.querySelector(".keeper img")),i.querySelector(".speech p").textContent=u?"Meow! Someone will come by soon. Go on, I have got this.":"On the counter it goes.",V.potions[t]<=0&&(t=null),ge(!0),ti("stall"),ru(),s(),r.draw()})},r=pp(i,"potions",a=>{t=a;let[o,l]=An(a);e=jh(o,l),dt.click(),s()});s(),i._tick=n}function gp(){let i=V.settings,t=Ei("set-card",`
    <div class="set-rows">
      <div class="row"><span>Sound</span><button class="toggle ${i.sound?"on":""}" data-k="sound"></button></div>
      <div class="row"><span>Music</span><button class="toggle ${i.music?"on":""}" data-k="music"></button></div>
      <div class="row"><span>Time of day</span><input type="range" min="-1" max="23" step="1" value="${i.tod<0?-1:Math.floor(i.tod)}"><b class="tod"></b></div>
      <div class="row"><span>Skip ahead</span><button class="btn-pill skip"><span>+10 minutes</span></button></div>
      <div class="row"><span>Start over</span><button class="btn-pill reset"><span>Reset save</span></button></div>
    </div>
    <p class="demo-note">Vertical slice demo. Townsfolk, stall buyers and the other names on the board are simulated. Time follows your real clock; skipping ahead moves the game clock only.</p>`,{title:"Menu"}),e=()=>{t.querySelector(".tod").textContent=i.tod<0?"Real clock":Jh(i.tod)};e(),t.querySelectorAll(".toggle").forEach(s=>s.addEventListener("click",()=>{i[s.dataset.k]=!i[s.dataset.k],s.classList.toggle("on",i[s.dataset.k]),Pl(),dt.click(),ge(!0)})),t.querySelector("input").addEventListener("input",s=>{i.tod=+s.target.value,e(),au(!0),ge(!0)}),t.querySelector(".skip").addEventListener("click",s=>{V.offsetMs=(V.offsetMs||0)+6e5,dt.quest(),Kn(s.currentTarget),ts("Ten minutes pass in a blink","star"),ge(!0)});let n=t.querySelector(".reset");n.addEventListener("click",()=>{if(!n.classList.contains("confirm")){n.classList.add("confirm"),n.querySelector("span").textContent="Tap again to erase",dt.click();return}_f(),location.reload()})}function by(i,t){if(!i.length)return;Ei("away-card",`<p class="book-sub">You were away for ${Yf(t)}</p><div class="away">${i.map(([n,s])=>`<div class="away-row"><img src="${ee(n)}" alt=""><span>${s}</span></div>`).join("")}</div><button class="btn-green ok"><span>Lovely</span></button>`,{title:"While you were away"}).querySelector(".ok").addEventListener("click",()=>Ms())}function Jf(){Bl();let i=$e(),t={};if(i==="brew"||se&&V.cust.asked&&!se.moving){let e=se?se.def:Mr[0];t.ask={name:e.name,line:i==="brew"?"Something to help me sleep, please.":`A ${ne[e.want].name}, please.`},t.target=e.want}i==="mystery"&&(t.target="luck",t.ask={name:"Kuro",line:"Mrrp. Blue Mushroom drifts north. Something glows up there."}),mt.frozen=!0,ht.cut=!0,wr(ct.cauldron[0],ct.cauldron[1]+.2,mi-1),nu(320).then(()=>va(!0)).then(()=>{ht.cut=!1,document.body.classList.add("brewing"),dn.open(t),va(!1)})}function My(i,t,e,n){let s=ne[i],r=Qv(i,t);V.potions[r]=(V.potions[r]||0)+3,V.newCount=(V.newCount||0)+3;let a=!V.discovered[i];(a||t<V.discovered[i].tier)&&(V.discovered[i]={tier:t,at:pe()},V.recipes[i]={ings:e,tier:t});let o=Wh.find(h=>h.effect===i),l=a&&!o&&!V.board.some(h=>h.effect===i);l&&V.board.push({effect:i,at:pe()}),ge(),setTimeout(()=>{let h=n.getBoundingClientRect();for(let d=0;d<3;d++)Ul(s.potion,{x:h.left+h.width/2,y:h.top+h.height/2},Vt("#bBag"),{delay:d*120,size:60,onArrive:d===2?()=>_r(V.newCount):null})},650);let c=()=>{$e()==="brew"&&i==="sleep"?(ti("brew"),setTimeout(()=>dn.close(),300)):$e()==="mystery"&&i==="luck"?(ti("mystery"),setTimeout(()=>dn.close(),300)):$e()==="brew"&&dn.toast("Mr. Crow asked for a <b>Sleep Potion</b>. Keep exploring the fog","m_moon")};a?setTimeout(async()=>{ht.disc=!0,dt.discover(),await _a({medal:s.medal,potion:s.potion,title:l?"First in Mossbrook!":"New potion!",name:s.name,tier:{i:t,label:Sr[t]},first:l?"Nobody in town has brewed this before. Your name goes on the discovery board.":`${o.who} found it first. Now you know it too.`,ings:e.map(h=>Ie[h].icon)}),ht.disc=!1,ip(l?2:1,null),c()},1100):(dn.toast(`+3 ${s.name} ${Kl(t)}`,s.medal),c())}function Sy(){mt.frozen=!1,Tr(),document.body.classList.remove("brewing"),_r(V.newCount)}function xp(i=!1){let t=pe(),e=[];if(V.stall.items=V.stall.items.filter(n=>n.sellAt<=t?(e.push(n),!1):!0),e.length){let n=e.reduce((s,r)=>s+r.price,0);if(i)V.coins+=n;else{let s=Math.abs(mt.x-ct.myStall[0])<11,r=s?gn(ct.myStall[0],1.6,ct.myStall[1]):null;for(let a of e){let[o]=An(a.key);ts(`Kuro sold a <b>${ne[o].name}</b> for ${a.price}`,"coin")}sp(n,r),s&&(Pe.hop(),dt.meow(),$t.sparkle(ct.myStall[0],1.5,ct.myStall[1],14,"#fff2a8"))}V.stall.items.length||(V.stall.open=!1),ge(!0)}return!V.stall.items.length&&Pe.atStall&&Pe.moveToStall(!1),Oe&&ru(),!i&&$e()==="free"&&!se&&!V.cust.here&&t>=V.cust.nextAt&&wa(!0),{sold:e,total:e.reduce((n,s)=>n+s.price,0)}}function au(i){let t=qf();$t.setLight(t),If(Jh(),$f(),t.night);let e=Math.hypot(mt.x-ct.fountain[0],mt.z-ct.fountain[1]);Tf(t.night,Math.max(0,1-e/14))}function wy(i){for(let t of Oe.occluders){let e=t.z-mt.z,s=e>.05&&e<t.h*1.52&&Math.abs(mt.x-t.x)<t.w*.4+.3?.3:1;t.alpha!==s&&(t.alpha=Math.abs(t.alpha-s)<.01?s:t.alpha+(s-t.alpha)*Math.min(1,i*8))}}function Ty(i){if(ht.chatT-=i,ht.chatT<=0&&mt.x>wi-2){ht.chatT=2.5+Math.random()*3;let t=["mira","juniper","oz",...Wl].filter(s=>!fn[s].busy),e=t[Math.floor(Math.random()*t.length)],n=Hh[Math.floor(Math.random()*Hh.length)];Cs.remove("c-"+e),Cs.get("c-"+e,"chat",`<div class="tin"><p>${Jn(n)}</p></div>`),ht.chats=ht.chats||{},ht.chats[e]=3.6,fn[e].talking=1.2,dt.blip("o",(is[e]||1)*1.3)}if(ht.chats)for(let t of Object.keys(ht.chats)){if(ht.chats[t]-=i,ht.chats[t]<=0||fn[t].busy){Cs.remove("c-"+t),delete ht.chats[t];continue}let e=Ne(fn[t].spr,.75);Cs.place("c-"+t,e[0],e[1],e[2],ht.started&&!dn.isOpen&&!Ol())}}function Ey(){let i=mt.z>8.8&&Math.abs(mt.x)<12.5,t=mt.z<7.6,e=i||!t&&ht.where==="pond"?"pond":mt.x>wi+1?"town":mt.x<ys-.5?"forest":mt.x<11&&mt.x>ys+1?"home":ht.where;e==="town"&&$e()==="town"&&V.seenTown&&ti("town"),e!==ht.where&&(ht.where=e,ht.kick=1,e==="town"?V.seenTown?Tn("Mossbrook Square","",{ms:1600,kind:"loc"}):(V.seenTown=!0,Tn("Mossbrook Square","Demo: townsfolk and buyers are simulated",{ms:3400}),ti("town"),ge(!0)):e==="forest"?V.seenWood?Tn("Whisperwood","",{ms:1600,kind:"loc"}):(V.seenWood=!0,Tn("Whisperwood","Wild berries and bugs. They come back on the real clock",{ms:3400}),ge(!0)):e==="pond"?V.seenPond?Tn("Willow Pond","",{ms:1600,kind:"loc"}):(V.seenPond=!0,Tn("Willow Pond","Fish from the dock. Catch what bites",{ms:3400}),ge(!0)):Tn("Hazel Cottage","",{ms:1600,kind:"loc"}),e==="home"&&se&&Nl(null))}var eu=performance.now();function _p(i){requestAnimationFrame(_p);let t=Math.min(.05,(i-eu)/1e3);eu=i,ht.t+=t;let e=Of();if(mt.frozen=Is(),Qn.isOpen&&(Qn.update(t,e),vr(null),Jl(null),Fl($t,null)),!dn.isOpen&&!Qn.covers){mt.update(t,e),Pe.update(t),se&&se.update(t);for(let n of Object.keys(fn))fn[n].update(t);Wf(fn,t),Cn.update(t,ht.t),jn.update(t,ht.t);for(let n of Oe.tick)n(t,ht.t);if(!ht.started)$t.target.x=3+Math.sin(ht.t*.08)*4,$t.target.z=.8,$t.distGoal=jf,$t.follow($t.target.x,$t.target.z,t);else if(ht.focus)$t.follow(ht.focus[0],ht.focus[1]+.6,t);else{let n=-1e9;for(let[s,r,a,o]of da)mt.x>=s-.3&&mt.x<=r+.3&&mt.z>=a-.3&&mt.z<=o+.3&&(n=Math.max(n,o-1.2));n<-1e8&&(n=1e9),$t.follow(mt.x,mt.z+.5,t,[mt.vx*.32,mt.vz*.18],[-35,45],n),ht.kick>0&&(ht.kick=Math.max(0,ht.kick-t/1.6),$t.distGoal=Rs+Math.sin(ht.kick*Math.PI)*2.4)}if(wy(t),$t.update(t,ht.t),$t.render(),ht.started){ap(),oy(t),Ty(t),Fl($t,Is()||ht.target?null:sy()),Ey();let[n,s]=ny();Pf(n,s)}}else dn.isOpen&&(dn.update(t),vr(null),Jl(null),Fl($t,null));if(ht.secT-=t,ht.secT<=0&&(ht.secT=1,au(),ht.started&&(xp(),kl()))){let n=Vt("#panel .shop-card.mine");n&&n._tick&&n._tick()}ht.saveT-=t,ht.quiet>0&&(ht.quiet-=t),ht.saveT<=0&&ht.started&&(ht.saveT=5,V.pos=[+mt.x.toFixed(2),+mt.z.toFixed(2)],V.lastSeen=pe(),ge()),!ht.lowQ&&ht.started&&(ht.fps.push(t),ht.fps.length>180&&ht.fps.shift(),ht.fps.length===180&&ht.fps.reduce((s,r)=>s+r,0)/180>1/38&&(ht.lowQ=!0,$t.quality=0,$t.resize()))}function Ay(i,t){if(ht.started){if(ht.disc){t&&["Enter","Space","KeyE"].includes(i)&&_a.close&&_a.close();return}if(Qn.isOpen){Qn.key(i,t);return}if(dn.isOpen){dn.key(i,t);return}if(Ol()){t&&Uf(i);return}if(kl()){t&&(i==="Escape"||i==="KeyB"&&Vt("#panel .bag-card"))&&Ms();return}t&&(i==="KeyE"||i==="Space"||i==="Enter"?tu():i==="KeyB"||i==="KeyI"?(dt.click(),up()):i==="KeyR"?(dt.click(),dp()):i==="Escape"&&(dt.click(),gp()))}}async function Cy(){let i=Vt("#loading .load-bar i");await sf(e=>{i.style.width=Math.round(e*100)+"%"}),hf();try{await document.fonts.load("700 20px Mali")}catch{}$t=new Tl(Vt("#world")),Oe=gf($t),Cn=new ql($t),jn=new Gl($t,Oe),Pe=new Hl($t),fn=Hf($t,Xl);let t=V.name&&V.pos?V.pos:ct.start;mt=new Vl($t,Oe,t[0],t[1]),Cs=new Dl($t),dn=new Zl(Vt("#brewRoot"),{onBottle:My,onClose:Sy,onInv:()=>{}}),Qn=new zl,Df(()=>dn.isOpen||Qn.isOpen||ht.disc),V.stall.items.length&&Pe.moveToStall(!0),$e()!=="letter"&&Oe.props.mailbox.set("mailbox_empty"),$t.snap(3,.8),$t.dist=jf,au(),Ff({onAct:tu,onKey:Ay}),window.addEventListener("resize",()=>$t.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&ht.started&&(V.lastSeen=pe(),V.pos=[mt.x,mt.z],ge())}),Vt("#hud .hud-tr #bBag").addEventListener("click",()=>{Is()||(dt.click(),up())}),Vt("#bBook").addEventListener("click",()=>{Is()||(dt.click(),dp())}),Vt("#bSet").addEventListener("click",()=>{Is()||(dt.click(),gp())}),requestAnimationFrame(e=>{eu=e,_p(e)}),Vt("#loading").classList.add("done"),setTimeout(()=>Vt("#loading").remove(),600),Ry(),location.hash==="#test"&&(window.__slice={G:ht,save:V,world:$t,Puppet:_s,get witch(){return mt},get cust(){return se},brew:dn,garden:Cn,wild:jn,cat:Pe,folk:fn,act:tu,targets:rp,pickTarget:ap,get mini(){return Qn},get S(){return Oe},catchBug:op,goFish:cp,tp(e,n){mt.spr.mesh.position.x=e,mt.spr.mesh.position.z=n}})}function Ry(){let i=Vt("#title");i.classList.remove("hidden");let t=i.querySelector(".title-main"),e=i.querySelector(".title-new"),n=Vt("#bStart");n.querySelector("span").textContent=V.name?`Continue as ${V.name}`:"Start";let s=()=>{wf(),Pl(),dt.click()};n.addEventListener("click",()=>{if(s(),V.name){Kf(!1);return}t.classList.add("hidden"),e.classList.remove("hidden");let a=Vt("#nameIn");setTimeout(()=>a.focus(),50)});let r=()=>{let a=Vt("#nameIn").value.trim().replace(/[<>]/g,"").slice(0,12);if(!a){Kn(Vt("#nameIn")),dt.click();return}V.name=a,ge(),dt.quest(),Kf(!0)};Vt("#bBegin").addEventListener("click",r),Vt("#nameIn").addEventListener("keydown",a=>{a.key==="Enter"&&r()})}async function Kf(i){await va(!0),Vt("#title").classList.add("hidden"),Vt("#hud").classList.remove("hidden"),Fn&&Vt("#touch").classList.remove("hidden"),ht.started=!0,$t.distGoal=Rs,$t.dist=Rs,$t.snap(mt.x,mt.z+.5);let t=pe()-(V.lastSeen||pe()),e=xp(!0);if(xa(V.coins),Bh(Qh(),V.fame%3/3),_r(V.newCount||0),ht.where=mt.x>wi+1?"town":mt.x<ys?"forest":"home",V.cust.here||$e()==="deliver"?wa(!1):$e()==="talk"?wa(!0):$e()==="free"&&pe()>=V.cust.nextAt&&wa(!1),V.stall.items.length&&Pe.moveToStall(!0),await va(!1),i)Tn("Hazel Cottage",`Welcome home, ${Jn(V.name)}`,{ms:3e3}),setTimeout(async()=>{Pe.hop(),dt.meow();let n=ct.mailbox[0]+1.5,s=ct.mailbox[1]+.7;mt.walkTo(n,s,Pe.x,2.4),ht.focus=[(Pe.x+n)/2,(Pe.z+s)/2],$t.distGoal=mi,await Ti("Kuro","Mrrow. (Kuro paws at the mailbox. A letter is sticking out.)",[],{pitch:is.kuro}),ht.focus=null,$t.distGoal=Rs},1400);else{let n=()=>Tn(mt.x>wi?"Mossbrook Square":mt.x<ys?"Whisperwood":"Hazel Cottage",`Welcome back, ${Jn(V.name)}`,{ms:2400}),s=[],r=Cn.readyCount();t>6e4&&(r&&s.push([ba[V.plots.find((a,o)=>Cn.state(o).ready).crop].sprite[2],`${r} plant${r>1?"s are":" is"} ready to pick`]),e.sold.length&&s.push(["coin",`Kuro sold ${e.sold.length} potion${e.sold.length>1?"s":""} for ${e.total} coins`]),se&&s.push([se.def.sprite,`${se.def.name} is waiting at your door`])),s.length?setTimeout(()=>{by(s,t),n()},700):n()}}Cy().catch(i=>{console.error(i);let t=Vt("#loading p");t&&(t.textContent="Something went wrong while loading. Please reload.")});
