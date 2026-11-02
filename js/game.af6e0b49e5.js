var md=0,Zc=1,gd=2;var ea=1,xd=2,rr=3,Ki=0,pn=1,yn=2,pi=0,ji=1,Qi=2,Jc=3,Kc=4,_d=5;var _s=100,vd=101,yd=102,bd=103,Md=104,Sd=200,wd=201,Td=202,Ed=203,jc=204,Qc=205,Ad=206,Cd=207,Rd=208,Pd=209,Id=210,Ld=211,Dd=212,Nd=213,Ud=214,oo=0,lo=1,co=2,Qs=3,ho=4,uo=5,fo=6,po=7,th=0,Fd=1,Od=2,Kn=0,eh=1,nh=2,ih=3,sh=4,rh=5,ah=6,oh=7;var lh=300,ts=301,vs=302,Bo=303,zo=304,na=306,Ai=1e3,kn=1001,mo=1002,tn=1003,kd=1004;var ia=1005;var Ze=1006,Ho=1007;var es=1008;var Rn=1009,ch=1010,hh=1011,ar=1012,Go=1013,jn=1014,Qn=1015,ti=1016,Vo=1017,Wo=1018,or=1020,uh=35902,dh=35899,fh=1021,ph=1022,zn=1023,hi=1026,ns=1027,mh=1028,Xo=1029,is=1030,qo=1031;var $o=1033,sa=33776,ra=33777,aa=33778,oa=33779,Yo=35840,Zo=35841,Jo=35842,Ko=35843,jo=36196,Qo=37492,tl=37496,el=37488,nl=37489,la=37490,il=37491,sl=37808,rl=37809,al=37810,ol=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,xl=37821,_l=36492,vl=36494,yl=36495,bl=36283,Ml=36284,ca=36285,Sl=36286;var Or=2300,go=2301,ro=2302,Gc=2303,Vc=2400,Wc=2401,Xc=2402;var Bd=3200;var gh=0,zd=1,Ci="",Ne="srgb",kr="srgb-linear",Br="linear",pe="srgb";var ao=7680;var Hd=519,Gd=512,Vd=513,Wd=514,wl=515,Xd=516,qd=517,Tl=518,$d=519,Yd=35044;var xh="300 es",Jn=2e3,zr=2001;function gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){let i=Hr("canvas");return i.style.display="block",i}var $u={},tr=null;function _h(...i){let t="THREE."+i.shift();tr?tr("log",t,...i):console.log(t,...i)}function Jd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Jd(i);let t="THREE."+i.shift();if(tr)tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Jd(i);let t="THREE."+i.shift();if(tr)tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in $u||($u[t]=!0,Ht(...i))}function Kd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var jd={[oo]:lo,[co]:fo,[ho]:po,[Qs]:uo,[lo]:oo,[fo]:co,[po]:ho,[uo]:Qs},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Ur=Math.PI/180,er=180/Math.PI;function lr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function vh(i,t){return(i%t+t)%t}function _m(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vm(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function ym(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function bm(i,t=1){return t-Math.abs(vh(i,t*2)-t)}function Mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tm(i,t){return i+Math.random()*(t-i)}function Em(i){return i*(.5-Math.random())}function Am(i){i!==void 0&&(Yu=i);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cm(i){return i*Ur}function Rm(i){return i*er}function Pm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*m,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yh={DEG2RAD:Ur,RAD2DEG:er,generateUUID:lr,clamp:ae,euclideanModulo:vh,mapLinear:_m,inverseLerp:vm,lerp:Fr,damp:ym,pingpong:bm,smoothstep:Mm,smootherstep:Sm,randInt:wm,randFloat:Tm,randFloatSpread:Em,seededRandom:Am,degToRad:Cm,radToDeg:Rm,isPowerOfTwo:Pm,ceilPowerOfTwo:Im,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Dm,normalize:dn,denormalize:Ks},Th=class Th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Th.prototype.isVector2=!0;var oe=Th,di=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(d!==g||l!==u||c!==m||h!==x){let p=l*u+c*m+h*x+d*g;p<0&&(u=-u,m=-m,x=-x,g=-g,p=-p);let f=1-o;if(p<.9995){let E=Math.acos(p),P=Math.sin(E);f=Math.sin(f*E)/P,o=Math.sin(o*E)/P,l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+g*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+g*o;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*d+l*m-c*u,t[e+1]=l*x+h*u+c*d-o*m,t[e+2]=c*x+h*m+o*u-l*d,t[e+3]=h*x-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"YZX":this._x=u*h*d+c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d-u*m*x;break;case"XZY":this._x=u*h*d-c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d+u*m*x;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var J=Eh,Mc=new J,Zu=new di,Ah=class Ah{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],x=n[8],g=s[0],p=s[3],f=s[6],E=s[1],P=s[4],M=s[7],w=s[2],T=s[5],L=s[8];return r[0]=a*g+o*E+l*w,r[3]=a*p+o*P+l*T,r[6]=a*f+o*M+l*L,r[1]=c*g+h*E+d*w,r[4]=c*p+h*P+d*T,r[7]=c*f+h*M+d*L,r[2]=u*g+m*E+x*w,r[5]=u*p+m*P+x*T,r[8]=u*f+m*M+x*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,x=e*d+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ah.prototype.isMatrix3=!0;var Zt=Ah,Sc=new Zt,Ju=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nm(){let i={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kr]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:Ju,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Ju,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var re=Nm();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ks,xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ks===void 0&&(ks=Hr("canvas")),ks.width=t.width,ks.height=t.height;let s=ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Um=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wc(s[a].image)):r.push(wc(s[a]))}else r=wc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Fm=0,Tc=new J,en=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=kn,s=kn,r=Ze,a=es,o=zn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=lr(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=lh;en.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],x=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,M=(m+1)/2,w=(f+1)/2,T=(h+u)/4,L=(d+g)/4,v=(x+p)/4;return P>M&&P>w?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=T/n,r=L/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=L/r,s=v/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-x)*(p-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-x)/E,this.y=(d-g)/E,this.z=(u-h)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var Re=Ch,_o=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new en(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends _o{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ko=class ko{constructor(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,m,x,g,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=x,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ko().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),a=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,x=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+x*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,x=c*h,g=c*d;e[0]=u+g*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,x=c*h,g=c*d;e[0]=u-g*o,e[4]=-a*d,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,x=o*h,g=o*d;e[0]=l*h,e[4]=x*c-m,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-u*d,e[8]=x*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+x,e[10]=u-g*d}else if(t.order==="XZY"){let u=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=a*h,e[9]=m*d-x,e[2]=x*d-m,e[6]=o*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Om,t,km)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ki.crossVectors(n,wn),ki.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ki.crossVectors(n,wn)),ki.normalize(),ka.crossVectors(wn,ki),s[0]=ki.x,s[4]=ka.x,s[8]=wn.x,s[1]=ki.y,s[5]=ka.y,s[9]=wn.y,s[2]=ki.z,s[6]=ka.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],x=n[2],g=n[6],p=n[10],f=n[14],E=n[3],P=n[7],M=n[11],w=n[15],T=s[0],L=s[4],v=s[8],S=s[12],R=s[1],U=s[5],F=s[9],k=s[13],D=s[2],O=s[6],W=s[10],V=s[14],j=s[3],y=s[7],C=s[11],A=s[15];return r[0]=a*T+o*R+l*D+c*j,r[4]=a*L+o*U+l*O+c*y,r[8]=a*v+o*F+l*W+c*C,r[12]=a*S+o*k+l*V+c*A,r[1]=h*T+d*R+u*D+m*j,r[5]=h*L+d*U+u*O+m*y,r[9]=h*v+d*F+u*W+m*C,r[13]=h*S+d*k+u*V+m*A,r[2]=x*T+g*R+p*D+f*j,r[6]=x*L+g*U+p*O+f*y,r[10]=x*v+g*F+p*W+f*C,r[14]=x*S+g*k+p*V+f*A,r[3]=E*T+P*R+M*D+w*j,r[7]=E*L+P*U+M*O+w*y,r[11]=E*v+P*F+M*W+w*C,r[15]=E*S+P*k+M*V+w*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],x=t[3],g=t[7],p=t[11],f=t[15],E=l*m-c*u,P=o*m-c*d,M=o*u-l*d,w=a*m-c*h,T=a*u-l*h,L=a*d-o*h;return e*(g*E-p*P+f*M)-n*(x*E-p*w+f*T)+s*(x*P-g*w+f*L)-r*(x*M-g*T+p*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],x=t[12],g=t[13],p=t[14],f=t[15],E=e*o-n*a,P=e*l-s*a,M=e*c-r*a,w=n*l-s*o,T=n*c-r*o,L=s*c-r*l,v=h*g-d*x,S=h*p-u*x,R=h*f-m*x,U=d*p-u*g,F=d*f-m*g,k=u*f-m*p,D=E*k-P*F+M*U+w*R-T*S+L*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(o*k-l*F+c*U)*O,t[1]=(s*F-n*k-r*U)*O,t[2]=(g*L-p*T+f*w)*O,t[3]=(u*T-d*L-m*w)*O,t[4]=(l*R-a*k-c*S)*O,t[5]=(e*k-s*R+r*S)*O,t[6]=(p*M-x*L-f*P)*O,t[7]=(h*L-u*M+m*P)*O,t[8]=(a*F-o*R+c*v)*O,t[9]=(n*R-e*F-r*v)*O,t[10]=(x*T-g*M+f*E)*O,t[11]=(d*M-h*T-m*E)*O,t[12]=(o*S-a*U-l*v)*O,t[13]=(e*U-n*S+s*v)*O,t[14]=(g*P-x*w-p*E)*O,t[15]=(h*w-d*P+u*E)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,x=r*d,g=a*h,p=a*d,f=o*d,E=l*c,P=l*h,M=l*d,w=n.x,T=n.y,L=n.z;return s[0]=(1-(g+f))*w,s[1]=(m+M)*w,s[2]=(x-P)*w,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(u+f))*T,s[6]=(p+E)*T,s[7]=0,s[8]=(x+P)*L,s[9]=(p-E)*L,s[10]=(1-(u+g))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qn.copy(this);let c=1/a,h=1/o,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,e.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===Jn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===zr)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===Jn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===zr)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ko.prototype.isMatrix4=!0;var ke=ko,Bs=new J,qn=new ke,Om=new J(0,0,0),km=new J(1,1,1),ki=new J,ka=new J,wn=new J,ju=new ke,Qu=new di,Wi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bm=0,td=new J,zs=new di,yi=new ke,Ba=new J,Ir=new J,zm=new J,Hm=new di,ed=new J(1,0,0),nd=new J(0,1,0),id=new J(0,0,1),sd={type:"added"},Gm={type:"removed"},Hs={type:"childadded",child:null},Ec={type:"childremoved",child:null},En=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new J,e=new Wi,n=new di,s=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Zt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ba.copy(t):Ba.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ir,Ba,this.up):yi.lookAt(Ba,Ir,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(yi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gm),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new J(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},za={h:0,s:0,l:0};function Ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=vh(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ac(a,r,t+1/3),this.g=Ac(a,r,t),this.b=Ac(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return re.workingToColorSpace(ln.copy(this),t),Math.round(ae(ln.r*255,0,255))*65536+Math.round(ae(ln.g*255,0,255))*256+Math.round(ae(ln.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ne){re.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(za);let n=Fr(Bi.h,za.h,e),s=Fr(Bi.s,za.s,e),r=Fr(Bi.l,za.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Kt;Kt.NAMES=Qd;var Wr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new J,bi=new J,Cc=new J,Mi=new J,Gs=new J,Vs=new J,rd=new J,Rc=new J,Pc=new J,Ic=new J,Lc=new Re,Dc=new Re,Nc=new Re,Vi=class i{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),bi.subVectors(n,e),Cc.subVectors(t,e);let a=$n.dot($n),o=$n.dot(bi),l=$n.dot(Cc),c=bi.dot(bi),h=bi.dot(Cc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Lc.setScalar(0),Dc.setScalar(0),Nc.setScalar(0),Lc.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,n),Nc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lc,r.x),a.addScaledVector(Dc,r.y),a.addScaledVector(Nc,r.z),a}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),bi.subVectors(t,e),$n.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),$n.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Vs.subVectors(r,n),Rc.subVectors(t,n);let l=Gs.dot(Rc),c=Vs.dot(Rc);if(l<=0&&c<=0)return e.copy(n);Pc.subVectors(t,s);let h=Gs.dot(Pc),d=Vs.dot(Pc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Gs,a);Ic.subVectors(t,r);let m=Gs.dot(Ic),x=Vs.dot(Ic);if(x>=0&&m<=x)return e.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Vs,o);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return rd.subVectors(r,s),o=(d-h)/(d-h+(m-x)),e.copy(s).addScaledVector(rd,o);let f=1/(p+g+u);return a=g*f,o=u*f,e.copy(n).addScaledVector(Gs,a).addScaledVector(Vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xi=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ha.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(t.matrixWorld),this.union(Ha)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Ga.subVectors(this.max,Lr),Ws.subVectors(t.a,Lr),Xs.subVectors(t.b,Lr),qs.subVectors(t.c,Lr),zi.subVectors(Xs,Ws),Hi.subVectors(qs,Xs),ds.subVectors(Ws,qs);let e=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-ds.z,ds.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,ds.z,0,-ds.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-ds.y,ds.x,0];return!Uc(e,Ws,Xs,qs,Ga)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,Ws,Xs,qs,Ga))?!1:(Va.crossVectors(zi,Hi),e=[Va.x,Va.y,Va.z],Uc(e,Ws,Xs,qs,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new J,new J,new J,new J,new J,new J,new J,new J],Yn=new J,Ha=new Xi,Ws=new J,Xs=new J,qs=new J,zi=new J,Hi=new J,ds=new J,Lr=new J,Ga=new J,Va=new J,fs=new J;function Uc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qe=new J,Wa=new oe,Wm=0,$e=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yd,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wa.fromBufferAttribute(this,e),Wa.applyMatrix3(t),this.setXY(e,Wa.x,Wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Xr=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qr=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bn=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xm=new Xi,Dr=new J,Fc=new J,xs=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(Fc)),this.expandByPoint(Dr.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qm=0,On=new ke,Oc=new En,$s=new J,Tn=new Xi,Nr=new Xi,Qe=new J,fn=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?qr:Xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Oc.lookAt(t),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Tn.min,Nr.min),Tn.expandByPoint(Qe),Qe.addVectors(Tn.max,Nr.max),Tn.expandByPoint(Qe)):(Tn.expandByPoint(Nr.min),Tn.expandByPoint(Nr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(t,c),Qe.add($s)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new J,l[v]=new J;let c=new J,h=new J,d=new J,u=new oe,m=new oe,x=new oe,g=new J,p=new J;function f(v,S,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,S),x.fromBufferAttribute(r,R),h.sub(c),d.sub(c),m.sub(u),x.sub(u);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(U),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(U),o[v].add(g),o[S].add(g),o[R].add(g),l[v].add(p),l[S].add(p),l[R].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,S=E.length;v<S;++v){let R=E[v],U=R.start,F=R.count;for(let k=U,D=U+F;k<D;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let P=new J,M=new J,w=new J,T=new J;function L(v){w.fromBufferAttribute(s,v),T.copy(w);let S=o[v];P.copy(S),P.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(T,S);let U=M.dot(l[v])<0?-1:1;a.setXYZW(v,P.x,P.y,P.z,U)}for(let v=0,S=E.length;v<S;++v){let R=E[v],U=R.start,F=R.count;for(let k=U,D=U+F;k<D;k+=3)L(t.getX(k+0)),L(t.getX(k+1)),L(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new J,r=new J,a=new J,o=new J,l=new J,c=new J,h=new J,d=new J;if(t)for(let u=0,m=t.count;u<m;u+=3){let x=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)u[x++]=c[m++]}return new $e(u,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var kc=new J,$m=new J,Ym=new Zt,Zn=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=kc.subVectors(n,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ym.getNormalMatrix(t),s=this.coplanarPoint(kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zm=0,qi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=ji,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Qc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wi=new J,Bc=new J,Xa=new J,qa=new J,$r=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bc.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),qa.copy(this.origin).sub(Bc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xa),o=qa.dot(this.direction),l=-qa.dot(Xa),c=qa.lengthSq(),h=Math.abs(1-a*a),d,u,m,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bc).addScaledVector(Xa,u),m}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,x=e.x-a.x,g=e.y-a.y,p=e.z-a.z,f=n.x-a.x,E=n.y-a.y,P=n.z-a.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(h),L,v,S,R,U,F,k,D,O,W,V,j;if(M>=w&&M>=T?(S=l,F=d,O=x,j=f,l>=0?(L=c,v=h,R=u,U=m,k=g,D=p,W=E,V=P):(L=h,v=c,R=m,U=u,k=p,D=g,W=P,V=E)):w>=T?(S=c,F=u,O=g,j=E,c>=0?(L=h,v=l,R=m,U=d,k=p,D=x,W=P,V=f):(L=l,v=h,R=d,U=m,k=x,D=p,W=f,V=P)):(S=h,F=m,O=p,j=P,h>=0?(L=l,v=c,R=d,U=u,k=x,D=g,W=f,V=E):(L=c,v=l,R=u,U=d,k=g,D=x,W=E,V=f)),S===0)return null;let y=L/S,C=v/S,A=1/S,N=R-y*F,$=U-C*F,at=k-y*O,Q=D-C*O,ut=W-y*j,X=V-C*j,et=ut*Q-X*at,vt=N*X-$*ut,Nt=at*$-Q*N;if(s){if(et<0||vt<0||Nt<0)return null}else if((et<0||vt<0||Nt<0)&&(et>0||vt>0||Nt>0))return null;let St=et+vt+Nt;if(St===0)return null;let Vt=A*(et*F+vt*O+Nt*j);return(St>0?Vt<0:Vt>0)?null:this.at(Vt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ad=new ke,ps=new $r,$a=new xs,od=new J,Ya=new J,Za=new J,Ja=new J,zc=new J,Ka=new J,ld=new J,ja=new J,Pe=class extends En{constructor(t=new fn,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(zc.fromBufferAttribute(d,t),a?Ka.addScaledVector(zc,h):Ka.addScaledVector(zc.sub(e),h))}e.add(Ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!($a.containsPoint(ps.origin)===!1&&(ps.intersectSphere($a,od)===null||ps.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(ad.copy(r).invert(),ps.copy(t.ray).applyMatrix4(ad),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let p=u[x],f=a[p.materialIndex],E=Math.max(p.start,m.start),P=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,w=P;M<w;M+=3){let T=o.getX(M),L=o.getX(M+1),v=o.getX(M+2);s=Qa(this,f,t,n,c,h,d,T,L,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let E=o.getX(p),P=o.getX(p+1),M=o.getX(p+2);s=Qa(this,a,t,n,c,h,d,E,P,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let p=u[x],f=a[p.materialIndex],E=Math.max(p.start,m.start),P=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,w=P;M<w;M+=3){let T=M,L=M+1,v=M+2;s=Qa(this,f,t,n,c,h,d,T,L,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,f=g;p<f;p+=3){let E=p,P=p+1,M=p+2;s=Qa(this,a,t,n,c,h,d,E,P,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Jm(i,t,e,n,s,r,a,o){let l;if(t.side===pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;ja.copy(o),ja.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:i}}function Qa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ya),i.getVertexPosition(l,Za),i.getVertexPosition(c,Ja);let h=Jm(i,t,e,n,Ya,Za,Ja,ld);if(h){let d=new J;Vi.getBarycoord(ld,Ya,Za,Ja,d),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,l,c,d,new oe)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,l,c,d,new oe)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,l,c,d,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new J,materialIndex:0};Vi.getNormal(Ya,Za,Ja,u.normal),h.face=u,h.barycoord=d}return h}var yo=class extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,h=tn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=new xs,Km=new oe(.5,.5),to=new J,Yr=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],x=r[8],g=r[9],p=r[10],f=r[11],E=r[12],P=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,m-h,f-x,w-E).normalize(),s[1].setComponents(c+a,m+h,f+x,w+E).normalize(),s[2].setComponents(c+o,m+d,f+g,w+P).normalize(),s[3].setComponents(c-o,m-d,f-g,w-P).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,m-u,f-p,w-M).normalize();else if(s[4].setComponents(c-l,m-u,f-p,w-M).normalize(),e===Jn)s[5].setComponents(c+l,m+u,f+p,w+M).normalize();else if(e===zr)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=Km.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(to.x=s.normal.x>0?t.max.x:t.min.x,to.y=s.normal.y>0?t.max.y:t.min.y,to.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bo=class extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cd=new ke,qc=new $r,eo=new xs,no=new J,Zr=class extends En{constructor(t=new fn,e=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;cd.copy(s).invert(),qc.copy(t.ray).applyMatrix4(cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=u,g=m;x<g;x++){let p=c.getX(x);no.fromBufferAttribute(d,p),hd(no,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=u,g=m;x<g;x++)no.fromBufferAttribute(d,x),hd(no,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hd(i,t,e,n,s,r,a){let o=qc.distanceSqToPoint(i);if(o<e){let l=new J;qc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Jr=class extends en{constructor(t=[],e=ts,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},An=class extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends en{constructor(t,e,n=jn,s,r,a,o=tn,l=tn,c,h=hi,d=1){if(h!==hi&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mo=class extends $i{constructor(t,e=jn,n=ts,s,r,a=tn,o=tn,l,c=hi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Kr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},sr=class i extends fn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(d,2));function x(g,p,f,E,P,M,w,T,L,v,S){let R=M/L,U=w/v,F=M/2,k=w/2,D=T/2,O=L+1,W=v+1,V=0,j=0,y=new J;for(let C=0;C<W;C++){let A=C*U-k;for(let N=0;N<O;N++){let $=N*R-F;y[g]=$*E,y[p]=A*P,y[f]=D,c.push(y.x,y.y,y.z),y[g]=0,y[p]=0,y[f]=T>0?1:-1,h.push(y.x,y.y,y.z),d.push(N/L),d.push(1-C/v),V+=1}}for(let C=0;C<v;C++)for(let A=0;A<L;A++){let N=u+A+O*C,$=u+A+O*(C+1),at=u+(A+1)+O*(C+1),Q=u+(A+1)+O*C;l.push(N,$,Q),l.push($,at,Q),j+=6}o.addGroup(m,j,S),m+=j,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rn=class i extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,m=[],x=[],g=[],p=[];for(let f=0;f<h;f++){let E=f*u-a;for(let P=0;P<c;P++){let M=P*d-r;x.push(M,-E,0),g.push(0,0,1),p.push(P/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let P=E+c*f,M=E+c*(f+1),w=E+1+c*(f+1),T=E+1+c*f;m.push(P,M,T),m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new Bn(x,3)),this.setAttribute("normal",new Bn(g,3)),this.setAttribute("uv",new Bn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ud(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ud(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var tf={clone:ys,merge:hn},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new J().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},So=class extends Ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wo=class extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},To=class extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Eo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,o=2*e-n;break;case Xc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:a=t,l=2*n-e;break;case Xc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),g=x*x,p=g*x,f=-u*p+2*u*g-u*x,E=(1+u)*p+(-1.5-2*u)*g+(-.5+u)*x+1,P=(-1-m)*p+(1.5+m)*g+.5*x,M=m*p-m*g;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+E*a[c+w]+P*a[l+w]+M*a[d+w];return r}},Ao=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Co=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ro=class extends Yi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),g=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*g+a[l+p]*x;return r}let u=o*2,m=t-1;for(let x=0;x!==o;++x){let g=a[c+x],p=a[l+x],f=m*u+x*2,E=d[f],P=d[f+1],M=t*u+x*2,w=h[M],T=h[M+1],L=n0(n,e,E,w,s);r[x]=ef(L,g,P,T,p)}return r}};function ef(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function e0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function n0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ef(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=e0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Hc(t.settings)&&(n.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case go:e=this.InterpolantFactoryMethodLinear;break;case ro:e=this.InterpolantFactoryMethodSmooth;break;case Gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return ro;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Hc(this.settings)&&(dd(this.settings.inTangents,t),dd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&xm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let x=0;x!==n;++x){let g=e[d+x];if(g!==e[u+x]||g!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Hc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=go;var Zi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Or;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Po.prototype.ValueTypeName="color";var Io=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="number";var Lo=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(r,0,a,c-o,a,c,l);return r}},jr=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Cn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Or;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="vector";var No=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nf=new No,Uo=class{constructor(t){this.manager=t!==void 0?t:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=new J,so=new di,ci=new J,Qr=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(io,so,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(io,so,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new J,fd=new oe,pd=new oe,cn=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ta=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Zs=-90,Js=1,Fo=class extends En{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Zs,Js,t,e);s.layers=this.layers,this.add(s);let r=new cn(Zs,Js,t,e);r.layers=this.layers,this.add(r);let a=new cn(Zs,Js,t,e);a.layers=this.layers,this.add(a);let o=new cn(Zs,Js,t,e);o.layers=this.layers,this.add(o);let l=new cn(Zs,Js,t,e);l.layers=this.layers,this.add(l);let c=new cn(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Oo=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Mh="\\[\\]\\.:\\/",i0=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",s0="[^"+Mh.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Sh),a0=/(WCOD+)?/.source.replace("WCOD",s0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),c0=new RegExp("^"+r0+a0+o0+l0+"$"),h0=["material","materials","bones","map"],$c=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){let e=c0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=$c;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cb=new Float32Array(1);var Rh=class Rh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Rh.prototype.isMatrix2=!0;var Yc=Rh;function wh(i,t,e,n){let s=u0(n);switch(e){case fh:return i*t;case mh:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case ph:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case $o:return i*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case Jo:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Qo:case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case la:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _l:case vl:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ca:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u0(i){switch(i){case Rn:case ch:return{byteLength:1,components:1};case ar:case hh:case ti:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case jn:case Go:case Qn:return{byteLength:4,components:1};case uh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function f0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],g=d[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let g=d[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
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
#endif`,dg=`uniform sampler2D dfgLUT;
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Og=`#ifdef USE_NORMALMAP
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
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define PHONG
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
}`,kx=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:y0,aomap_pars_fragment:b0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:w0,beginnormal_vertex:T0,bsdfs:E0,iridescence_fragment:A0,bumpmap_pars_fragment:C0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:N0,color_pars_vertex:U0,color_vertex:F0,common:O0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:B0,displacementmap_pars_vertex:z0,displacementmap_vertex:H0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:$0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:ag,envmap_vertex:J0,fog_vertex:K0,fog_pars_vertex:j0,fog_fragment:Q0,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:og,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:hg,lights_physical_fragment:ug,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,lightprobes_pars_fragment:gg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:yg,map_fragment:bg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:wg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Ag,morphcolor_vertex:Cg,morphnormal_vertex:Rg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Ig,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:Fg,normalmap_pars_fragment:Og,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Hg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:$g,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:xx,cube_vert:_x,cube_frag:vx,depth_vert:yx,depth_frag:bx,distance_vert:Mx,distance_frag:Sx,equirect_vert:wx,equirect_frag:Tx,linedashed_vert:Ex,linedashed_frag:Ax,meshbasic_vert:Cx,meshbasic_frag:Rx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:kx,meshphysical_frag:Bx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Gx,points_frag:Vx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:$x},bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},gi={basic:{uniforms:hn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:hn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:hn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:hn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:hn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:hn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:hn([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:hn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:hn([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:hn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:hn([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:hn([bt.common,bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:hn([bt.lights,bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var El={r:0,b:0,g:0},Yx=new ke,Ef=new Zt;Ef.set(-1,0,0,0,1,0,0,0,1);function Zx(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(E){let P=E.isScene===!0?E.background:null;if(P&&P.isTexture){let M=E.backgroundBlurriness>0;P=t.get(P,M)}return P}function x(E){let P=!1,M=m(E);M===null?p(a,o):M&&M.isColor&&(p(M,1),P=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,P){let M=m(P);M&&(M.isCubeTexture||M.mapping===na)?(c===void 0&&(c=new Pe(new sr(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:ys(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=re.getTransfer(M.colorSpace)!==pe,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Pe(new rn(2,2),new Ue({name:"BackgroundMaterial",uniforms:ys(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,P){E.getRGB(El,bh(i)),e.buffers.color.setClear(El.r,El.g,El.b,P,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,P=1){a.set(E),o=P,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:x,addToRenderList:g,dispose:f}}function Jx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,F,k,D,O){let W=!1,V=d(U,D,k,F);r!==V&&(r=V,c(r.object)),W=m(U,D,k,O),W&&x(U,D,k,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(U,F,k,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,F,k,D){let O=D.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let V=U.isInstancedMesh===!0?U.id:0,j=W[V];j===void 0&&(j={},W[V]=j);let y=j[k.id];y===void 0&&(y={},j[k.id]=y);let C=y[O];return C===void 0&&(C=u(l()),y[O]=C),C}function u(U){let F=[],k=[],D=[];for(let O=0;O<e;O++)F[O]=0,k[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:D,object:U,attributes:{},index:null}}function m(U,F,k,D){let O=r.attributes,W=F.attributes,V=0,j=k.getAttributes();for(let y in j)if(j[y].location>=0){let A=O[y],N=W[y];if(N===void 0&&(y==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),y==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),A===void 0||A.attribute!==N||N&&A.data!==N.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function x(U,F,k,D){let O={},W=F.attributes,V=0,j=k.getAttributes();for(let y in j)if(j[y].location>=0){let A=W[y];A===void 0&&(y==="instanceMatrix"&&U.instanceMatrix&&(A=U.instanceMatrix),y==="instanceColor"&&U.instanceColor&&(A=U.instanceColor));let N={};N.attribute=A,A&&A.data&&(N.data=A.data),O[y]=N,V++}r.attributes=O,r.attributesNum=V,r.index=D}function g(){let U=r.newAttributes;for(let F=0,k=U.length;F<k;F++)U[F]=0}function p(U){f(U,0)}function f(U,F){let k=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;k[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),O[U]!==F&&(i.vertexAttribDivisor(U,F),O[U]=F)}function E(){let U=r.newAttributes,F=r.enabledAttributes;for(let k=0,D=F.length;k<D;k++)F[k]!==U[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function P(U,F,k,D,O,W,V){V===!0?i.vertexAttribIPointer(U,F,k,O,W):i.vertexAttribPointer(U,F,k,D,O,W)}function M(U,F,k,D){g();let O=D.attributes,W=k.getAttributes(),V=F.defaultAttributeValues;for(let j in W){let y=W[j];if(y.location>=0){let C=O[j];if(C===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(C=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(C=U.instanceColor)),C!==void 0){let A=C.normalized,N=C.itemSize,$=t.get(C);if($===void 0)continue;let at=$.buffer,Q=$.type,ut=$.bytesPerElement,X=Q===i.INT||Q===i.UNSIGNED_INT||C.gpuType===Go;if(C.isInterleavedBufferAttribute){let et=C.data,vt=et.stride,Nt=C.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<y.locationSize;St++)f(y.location+St,et.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<y.locationSize;St++)p(y.location+St);i.bindBuffer(i.ARRAY_BUFFER,at);for(let St=0;St<y.locationSize;St++)P(y.location+St,N/y.locationSize,Q,A,vt*ut,(Nt+N/y.locationSize*St)*ut,X)}else{if(C.isInstancedBufferAttribute){for(let et=0;et<y.locationSize;et++)f(y.location+et,C.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let et=0;et<y.locationSize;et++)p(y.location+et);i.bindBuffer(i.ARRAY_BUFFER,at);for(let et=0;et<y.locationSize;et++)P(y.location+et,N/y.locationSize,Q,A,N*ut,N/y.locationSize*et*ut,X)}}else if(V!==void 0){let A=V[j];if(A!==void 0)switch(A.length){case 2:i.vertexAttrib2fv(y.location,A);break;case 3:i.vertexAttrib3fv(y.location,A);break;case 4:i.vertexAttrib4fv(y.location,A);break;default:i.vertexAttrib1fv(y.location,A)}}}}E()}function w(){S();for(let U in n){let F=n[U];for(let k in F){let D=F[k];for(let O in D){let W=D[O];for(let V in W)h(W[V].object),delete W[V];delete D[O]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let k in F){let D=F[k];for(let O in D){let W=D[O];for(let V in W)h(W[V].object),delete W[V];delete D[O]}}delete n[U.id]}function L(U){for(let F in n){let k=n[F];for(let D in k){let O=k[D];if(O[U.id]===void 0)continue;let W=O[U.id];for(let V in W)h(W[V].object),delete W[V];delete O[U.id]}}}function v(U){for(let F in n){let k=n[F],D=U.isInstancedMesh===!0?U.id:0,O=k[D];if(O!==void 0){for(let W in O){let V=O[W];for(let j in V)h(V[j].object),delete V[j];delete O[W]}delete k[D],Object.keys(k).length===0&&delete n[F]}}}function S(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function Kx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==zn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let v=L===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Rn&&L!==Qn&&!v&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:P,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Qx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Zn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,P=E*4,M=f.clippingState||null;l.value=M,M=h(x,u,P,m);for(let w=0;w!==P;++w)M[w]=e[w];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,x){let g=d!==null?d.length:0,p=null;if(g!==0){if(p=l.value,x!==!0||p===null){let f=m+g*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let P=0,M=m;P!==g;++P,M+=4)a.copy(d[P]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}var hr=4,t_=6,e_=20,n_=256,ha=new ta,sf=new Kt,Ph=null,Ih=0,Lh=0,Dh=!1,i_=new J,bs=new J,Cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=i_}=r;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Ih,Lh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:ti,format:zn,colorSpace:kr,depthBuffer:!1},s=rf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s_(r)),this._blurMaterial=a_(r,t,e),this._ggxMaterial=r_(r,t,e)}return s}_compileMaterial(t){let e=new Pe(new fn,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s,r){let l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(sf),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new sr,new fi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,p=g.material,f=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,f=!0):(p.color.copy(sf),f=!0);for(let P=0;P<6;P++){let M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let w=this._cubeSize;cr(s,M*w,P>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(g,l),d.render(t,l)}d.toneMapping=m,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ts||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,m=d*u,{_lodMax:x}=this,g=this._sizeLods[n],p=3*g*(n>x-hr?n-x+hr:0),f=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,cr(r,p,f,3*g,2*g),s.setRenderTarget(r),s.render(o,ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,cr(t,p,f,3*g,2*g),s.setRenderTarget(t),s.render(o,ha)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-hr?s-this._lodMax+hr:0),u=4*(this._cubeSize-h);cr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ha)}};function s_(i){let t=[],e=[],n=i,s=i-hr+1+t_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,m=3,x=new Float32Array(m*u*d),g=new Float32Array(m*u*d);for(let f=0;f<d;f++){let E=f%3*2/3-1,P=f>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(M,m*u*f);for(let w=0;w<u;w++){let T=h[w*2]*2-1,L=h[w*2+1]*2-1;f===0?bs.set(1,L,T):f===1?bs.set(-T,1,-L):f===2?bs.set(-T,L,1):f===3?bs.set(-1,L,-T):f===4?bs.set(-T,-1,L):bs.set(T,L,-1),bs.toArray(g,(f*u+w)*m)}}let p=new fn;p.setAttribute("position",new $e(x,m)),p.setAttribute("outputDirection",new $e(g,m)),e.push(new Pe(p,null)),n>hr&&n--}return{lodMeshes:e,sizeLods:t}}function rf(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r_(i,t,e){return new Ue({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function a_(i,t,e){return new Ue({name:"SphericalGaussianBlur",defines:{SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function af(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function of(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sr(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:pi});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=Ze),new Fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function o_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Bo||m===zo)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let g=new Rl(x.height);return g.fromEquirectangularTexture(i,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,x=m===Bo||m===zo,g=m===ts||m===vs;if(x||g){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Cl(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let E=u.image;return x&&E&&E.height>0||g&&E&&l(E)?(n===null&&(n=new Cl(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Bo?u.mapping=ts:m===zo&&(u.mapping=vs),u}function l(u){let m=0,x=6;for(let g=0;g<x;g++)u[g]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function l_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function c_(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(d){let u=[],m=d.index,x=d.attributes.position,g=0;if(x===void 0)return;if(m!==null){let E=m.array;g=m.version;for(let P=0,M=E.length;P<M;P+=3){let w=E[P+0],T=E[P+1],L=E[P+2];u.push(w,T,T,L,L,w)}}else{let E=x.array;g=x.version;for(let P=0,M=E.length/3-1;P<M;P+=3){let w=P+0,T=P+1,L=P+2;u.push(w,T,T,L,L,w)}}let p=new(x.count>=65535?qr:Xr)(u,1);p.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function h_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function d_(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],P=0;m===!0&&(P=1),x===!0&&(P=2),g===!0&&(P=3);let M=o.attributes.position.count*P,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*w*4*d),L=new Gr(T,M,w,d);L.type=Qn,L.needsUpdate=!0;let v=P*4;for(let R=0;R<d;R++){let U=p[R],F=f[R],k=E[R],D=M*w*4*R;for(let O=0;O<U.count;O++){let W=O*v;m===!0&&(s.fromBufferAttribute(U,O),T[D+W+0]=s.x,T[D+W+1]=s.y,T[D+W+2]=s.z,T[D+W+3]=0),x===!0&&(s.fromBufferAttribute(F,O),T[D+W+4]=s.x,T[D+W+5]=s.y,T[D+W+6]=s.z,T[D+W+7]=0),g===!0&&(s.fromBufferAttribute(k,O),T[D+W+8]=s.x,T[D+W+9]=s.y,T[D+W+10]=s.z,T[D+W+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new oe(M,w)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function f_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var p_={[eh]:"LINEAR_TONE_MAPPING",[nh]:"REINHARD_TONE_MAPPING",[ih]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[oh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function m_(i,t,e,n,s,r){let a=new vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new fn;c.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bn([0,2,0,0,2,0],2));let h=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(c,h),u=new ta(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,f=null,E=[],P=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let T=0;T<E.length;T++){let L=E[T];L.setSize&&L.setSize(M,w)}},this.setEffects=function(M){E=M,P=E.length>0&&E[0].isRenderPass===!0;let w=a.width,T=a.height;E.length>0&&o===null&&(o=new vn(w,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new vn(w,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<E.length;L++){let v=E[L];v.setSize&&v.setSize(w,T)}},this.begin=function(M,w){if(g||M.toneMapping===Kn&&E.length===0)return!1;if(f=w,w!==null){let T=w.width,L=w.height;(a.width!==T||a.height!==L)&&this.setSize(T,L)}return P===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=Kn,!0},this.hasRenderPass=function(){return P},this.end=function(M,w){M.toneMapping=p,g=!0;let T=a,L=o;for(let v=0;v<E.length;v++){let S=E[v];S.enabled!==!1&&(S.render(M,L,T,w),S.needsSwap!==!1&&(T=L,L=L===o?l:o))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,h.defines={},re.getTransfer(m)===pe&&(h.defines.SRGB_TRANSFER="");let v=p_[x];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(f),M.render(d,u),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Af=new en,Fh=new $i(1,1),Cf=new Gr,Rf=new vo,Pf=new Jr,lf=[],cf=[],hf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ll(i,t){let e=cf[t];e===void 0&&(e=new Int32Array(t),cf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function y_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;df.set(n),i.uniformMatrix2fv(this.addr,!1,df),Ke(e,n)}}function b_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Ke(e,n)}}function M_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;hf.set(n),i.uniformMatrix4fv(this.addr,!1,hf),Ke(e,n)}}function S_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function T_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function A_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function I_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=e.isReversedDepthBuffer()?Tl:wl,r=Fh):r=Af,e.setTexture2D(t||r,s)}function L_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function D_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pf,s)}function N_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cf,s)}function U_(i){switch(i){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return v_;case 35674:return y_;case 35675:return b_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return E_;case 5125:return A_;case 36294:return C_;case 36295:return R_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(i,t){i.uniform1fv(this.addr,t)}function O_(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function k_(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function B_(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function z_(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function H_(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function G_(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function V_(i,t){i.uniform1iv(this.addr,t)}function W_(i,t){i.uniform2iv(this.addr,t)}function X_(i,t){i.uniform3iv(this.addr,t)}function q_(i,t){i.uniform4iv(this.addr,t)}function $_(i,t){i.uniform1uiv(this.addr,t)}function Y_(i,t){i.uniform2uiv(this.addr,t)}function Z_(i,t){i.uniform3uiv(this.addr,t)}function J_(i,t){i.uniform4uiv(this.addr,t)}function K_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fh:a=Af;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function j_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rf,r[a])}function Q_(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pf,r[a])}function tv(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cf,r[a])}function ev(i){switch(i){case 5126:return F_;case 35664:return O_;case 35665:return k_;case 35666:return B_;case 35674:return z_;case 35675:return H_;case 35676:return G_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return $_;case 36294:return Y_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return tv}}var Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U_(e.type)}},kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}},Bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function ff(i,t){i.seq.push(t),i.map[t.id]=t}function nv(i,t,e){let n=i.name,s=n.length;for(Nh.lastIndex=0;;){let r=Nh.exec(n),a=Nh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ff(e,c===void 0?new Oh(o,i,t):new kh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Bh(o),ff(e,d)),e=d}}}var ur=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);nv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var iv=37297,sv=0;function rv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mf=new Zt;function av(i){re._getMatrix(mf,re.workingColorSpace,i);let t=`mat3( ${mf.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+rv(i.getShaderSource(t),o)}else return r}function ov(i,t){let e=av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var lv={[eh]:"Linear",[nh]:"Reinhard",[ih]:"Cineon",[sh]:"ACESFilmic",[ah]:"AgX",[oh]:"Neutral",[rh]:"Custom"};function cv(i,t){let e=lv[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new J;function hv(){re.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function dv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function da(i){return i!==""}function xf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _f(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(i){return i.replace(pv,gv)}var mv=new Map;function gv(i,t){let e=Qt[t];if(e===void 0){let n=mv.get(t);if(n!==void 0)e=Qt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zh(e)}var xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(xv,_v)}function _v(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var vv={[ea]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function yv(i){return vv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bv={[ts]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function Mv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sv={[vs]:"ENVMAP_MODE_REFRACTION"};function wv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Sv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tv={[th]:"ENVMAP_BLENDING_MULTIPLY",[Fd]:"ENVMAP_BLENDING_MIX",[Od]:"ENVMAP_BLENDING_ADD"};function Ev(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tv[i.combine]||"ENVMAP_BLENDING_NONE"}function Av(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=yv(e),c=Mv(e),h=wv(e),d=Ev(e),u=Av(e),m=uv(e),x=dv(r),g=s.createProgram(),p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(da).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(da).join(`
`),f.length>0&&(f+=`
`)):(p=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),f=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=zh(a),a=xf(a,e),a=_f(a,e),o=zh(o),o=xf(o,e),o=_f(o,e),a=vf(a),o=vf(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let P=E+p+a,M=E+f+o,w=pf(s,s.VERTEX_SHADER,P),T=pf(s,s.FRAGMENT_SHADER,M);s.attachShader(g,w),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function L(U){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(T)||"",O=F.trim(),W=k.trim(),V=D.trim(),j=!0,y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,T);else{let C=gf(s,w,"vertex"),A=gf(s,T,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+C+`
`+A)}else O!==""?Ht("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(y=!1);y&&(U.diagnostics={runnable:j,programLog:O,vertexShader:{log:W,prefix:p},fragmentShader:{log:V,prefix:f}})}s.deleteShader(w),s.deleteShader(T),v=new ur(s,g),S=fv(s,g)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,iv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=T,this}var Rv=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gh(t),e.set(t,n)),n}},Gh=class{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}};function Pv(i){return i===is||i===la||i===ca}function Iv(i,t,e,n,s,r){let a=new Vr,o=new Hh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,S,R,U,F,k){let D=U.fog,O=F.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||W,V),y=j&&j.mapping===na?j.image.height:null,C=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ht("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let A=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=A!==void 0?A.length:0,$=0;O.morphAttributes.position!==void 0&&($=1),O.morphAttributes.normal!==void 0&&($=2),O.morphAttributes.color!==void 0&&($=3);let at,Q,ut,X;if(C){let Se=gi[C];at=Se.vertexShader,Q=Se.fragmentShader}else{at=v.vertexShader,Q=v.fragmentShader;let Se=o.getVertexShaderStage(v),de=o.getFragmentShaderStage(v);o.update(v,Se,de),ut=Se.id,X=de.id}let et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Vt=!!v.map,Wt=!!v.matcap,Rt=!!j,Yt=!!v.aoMap,ne=!!v.lightMap,qt=!!v.bumpMap&&v.wireframe===!1,ge=!!v.normalMap,Ie=!!v.displacementMap,sn=!!v.emissiveMap,Ee=!!v.metalnessMap,De=!!v.roughnessMap,z=v.anisotropy>0,We=v.clearcoat>0,le=v.dispersion>0,I=v.retroreflectivity>0,_=v.iridescence>0,q=v.sheen>0,K=v.transmission>0,nt=z&&!!v.anisotropyMap,dt=We&&!!v.clearcoatMap,pt=We&&!!v.clearcoatNormalMap,it=We&&!!v.clearcoatRoughnessMap,rt=_&&!!v.iridescenceMap,mt=_&&!!v.iridescenceThicknessMap,Ut=q&&!!v.sheenColorMap,yt=q&&!!v.sheenRoughnessMap,gt=!!v.specularMap,Ft=!!v.specularColorMap,zt=!!v.specularIntensityMap,Jt=K&&!!v.transmissionMap,H=K&&!!v.thicknessMap,xt=!!v.gradientMap,st=!!v.alphaMap,_t=v.alphaTest>0,Tt=!!v.alphaHash,ot=!!v.extensions,kt=Kn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Lt={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:Q,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:Wt,envMap:Rt,envMapMode:Rt&&j.mapping,envMapCubeUVHeight:y,aoMap:Yt,lightMap:ne,bumpMap:qt,normalMap:ge,displacementMap:Ie,emissiveMap:sn,normalMapObjectSpace:ge&&v.normalMapType===zd,normalMapTangentSpace:ge&&v.normalMapType===gh,packedNormalMap:ge&&v.normalMapType===gh&&Pv(v.normalMap.format),metalnessMap:Ee,roughnessMap:De,anisotropy:z,anisotropyMap:nt,clearcoat:We,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:it,dispersion:le,retroreflection:I,iridescence:_,iridescenceMap:rt,iridescenceThicknessMap:mt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:gt,specularColorMap:Ft,specularIntensityMap:zt,transmission:K,transmissionMap:Jt,thicknessMap:H,gradientMap:xt,opaque:v.transparent===!1&&v.blending===ji&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:Tt,combine:v.combine,mapUv:Vt&&x(v.map.channel),aoMapUv:Yt&&x(v.aoMap.channel),lightMapUv:ne&&x(v.lightMap.channel),bumpMapUv:qt&&x(v.bumpMap.channel),normalMapUv:ge&&x(v.normalMap.channel),displacementMapUv:Ie&&x(v.displacementMap.channel),emissiveMapUv:sn&&x(v.emissiveMap.channel),metalnessMapUv:Ee&&x(v.metalnessMap.channel),roughnessMapUv:De&&x(v.roughnessMap.channel),anisotropyMapUv:nt&&x(v.anisotropyMap.channel),clearcoatMapUv:dt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(v.sheenRoughnessMap.channel),specularMapUv:gt&&x(v.specularMap.channel),specularColorMapUv:Ft&&x(v.specularColorMap.channel),specularIntensityMapUv:zt&&x(v.specularIntensityMap.channel),transmissionMapUv:Jt&&x(v.transmissionMap.channel),thicknessMapUv:H&&x(v.thicknessMap.channel),alphaMapUv:st&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||z),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Vt||st),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:sn&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yn,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ot&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)S.push(R),S.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(f(S,v),E(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function f(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function P(v){let S=m[v.type],R;if(S){let U=gi[S];R=tf.clone(U.uniforms)}else R=v.uniforms;return R}function M(v,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new Cv(i,S,v,s),c.push(R),h.set(S,R)),R}function w(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function L(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:P,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:L}}function Lv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,g,p,f){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},i[t]=E):(E.id=u.id,E.object=u,E.geometry=m,E.material=x,E.materialVariant=a(u),E.groupOrder=g,E.renderOrder=u.renderOrder,E.z=p,E.group=f),t++,E}function l(u,m,x,g,p,f,E){E.reversedDepth===!0&&(p=-p);let P=o(u,m,x,g,p,f);x.transmission>0?n.push(P):x.transparent===!0?s.push(P):e.push(P)}function c(u,m,x,g,p,f){let E=o(u,m,x,g,p,f);x.transmission>0?n.unshift(E):x.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,m){e.length>1&&e.sort(u||Dv),n.length>1&&n.sort(m||bf),s.length>1&&s.sort(m||bf)}function d(){for(let u=t,m=i.length;u<m;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Nv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Mf,i.set(n,[a])):s>=r.length?(a=new Mf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Kt};break;case"SpotLight":e={position:new J,direction:new J,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function Fv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ov=0;function kv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bv(i){let t=new Uv,e=Fv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let s=new J,r=new ke,a=new ke;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,x=0,g=0,p=0,f=0,E=0,P=0,M=0,w=0,T=0,L=0,v=0,S=0,R=0;c.sort(kv);for(let F=0,k=c.length;F<k;F++){let D=c[F],O=D.color,W=D.intensity,V=D.distance,j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===is?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(D.isLightProbe){for(let y=0;y<9;y++)n.probe[y].addScaledVector(D.sh.coefficients[y],W);R++}else if(D.isSunLight){let y=t.get(D);if(y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let C=D.shadow,A=e.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[x]=A,n.sunShadowMap[x]=j;let N=C.getViewportCount();for(let $=0;$<N;$++)n.sunShadowMatrix[g+$]=C.getMatrix($),n.sunShadowCascade[g+$]=C._cascadeData[$];g+=N,x++}n.sun[m]=y,m++}else if(D.isDirectionalLight){let y=t.get(D);if(y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let C=D.shadow,A=e.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,n.directionalShadow[p]=A,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=D.shadow.matrix,w++}n.directional[p]=y,p++}else if(D.isSpotLight){let y=t.get(D);y.position.setFromMatrixPosition(D.matrixWorld),y.color.copy(O).multiplyScalar(W),y.distance=V,y.coneCos=Math.cos(D.angle),y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),y.decay=D.decay,n.spot[E]=y;let C=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,C.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[E]=C.matrix,D.castShadow){let A=e.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,n.spotShadow[E]=A,n.spotShadowMap[E]=j,L++}E++}else if(D.isRectAreaLight){let y=t.get(D);y.color.copy(O).multiplyScalar(W),y.halfWidth.set(D.width*.5,0,0),y.halfHeight.set(0,D.height*.5,0),n.rectArea[P]=y,P++}else if(D.isPointLight){let y=t.get(D);if(y.color.copy(D.color).multiplyScalar(D.intensity),y.distance=D.distance,y.decay=D.decay,D.castShadow){let C=D.shadow,A=e.get(D);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,A.shadowCameraNear=C.camera.near,A.shadowCameraFar=C.camera.far,n.pointShadow[f]=A,n.pointShadowMap[f]=j,n.pointShadowMatrix[f]=D.shadow.matrix,T++}n.point[f]=y,f++}else if(D.isHemisphereLight){let y=t.get(D);y.skyColor.copy(D.color).multiplyScalar(W),y.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[M]=y,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==f||U.spotLength!==E||U.rectAreaLength!==P||U.hemiLength!==M||U.numSunShadows!==x||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==L||U.numSpotMaps!==v||U.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=p,n.spot.length=E,n.rectArea.length=P,n.point.length=f,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,U.sunLength=m,U.directionalLength=p,U.pointLength=f,U.spotLength=E,U.rectAreaLength=P,U.hemiLength=M,U.numSunShadows=x,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=L,U.numSpotMaps=v,U.numLightProbes=R,n.version=Ov++)}function l(c,h){let d=0,u=0,m=0,x=0,g=0,p=0,f=h.matrixWorldInverse;for(let E=0,P=c.length;E<P;E++){let M=c[E];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(M.isSpotLight){let w=n.spot[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Sf(i){let t=new Bv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sf(i),t.set(s,[o])):r>=a.length?(o=new Sf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
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
}`,Vv=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Wv=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],wf=new ke,ua=new J,Uh=new J;function Xv(i,t,e){let n=new Yr,s=new oe,r=new oe,a=new Re,o=new wo,l=new To,c={},h=e.maxTextureSize,d={[Ki]:pn,[pn]:Ki,[yn]:yn},u=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Hv,fragmentShader:Gv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new fn;x.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Pe(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let f=this.type;this.render=function(T,L,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===xd&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ea);let S=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=f!==this.type;k&&L.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=T.length;D<O;D++){let W=T[D],V=W.shadow;if(V===void 0){Ht("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let j=V.getFrameExtents();s.multiply(j),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,V.mapSize.y=r.y));let y=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=y,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===rr){if(W.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new vn(s.x,s.y,{format:is,type:ti,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new $i(s.x,s.y,Qn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn}else W.isPointLight?(V.map=new Rl(s.x),V.map.depthTexture=new Mo(s.x,jn)):(V.map=new vn(s.x,s.y),V.map.depthTexture=new $i(s.x,s.y,jn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=hi,this.type===ea?(V.map.depthTexture.compareFunction=y?Tl:wl,V.map.depthTexture.minFilter=Ze,V.map.depthTexture.magFilter=Ze):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let C=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,v);for(let A=0;A<C;A++){let N=V.getCamera(A);if(W.isPointLight){let $=V.camera,at=V.matrix,Q=W.distance||$.far;Q!==$.far&&($.far=Q,$.updateProjectionMatrix()),ua.setFromMatrixPosition(W.matrixWorld),$.position.copy(ua),Uh.copy($.position),Uh.add(Vv[A]),$.up.copy(Wv[A]),$.lookAt(Uh),$.updateMatrixWorld(),at.makeTranslation(-ua.x,-ua.y,-ua.z),wf.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(wf,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,A),i.clear();else{A===0&&(i.setRenderTarget(V.map),i.clear());let $=V.getViewport(A);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}n=V.getFrustum(A),M(L,v,N,W,this.type)}V.isPointLightShadow!==!0&&this.type===rr&&E(V,v),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,R,U)};function E(T,L){let v=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(s.x,s.y,{format:is,type:ti}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,v,u,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,v,m,g,null)}function P(T,L,v,S){let R=null,U=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=R.uuid,k=L.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let O=D[k];O===void 0&&(O=R.clone(),D[k]=O,L.addEventListener("dispose",w)),R=O}if(R.visible=L.visible,R.wireframe=L.wireframe,S===rr?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:d[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=v}return R}function M(T,L,v,S,R){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===rr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let k=t.update(T),D=T.material;if(Array.isArray(D)){let O=k.groups;for(let W=0,V=O.length;W<V;W++){let j=O[W],y=D[j.materialIndex];if(y&&y.visible){let C=P(T,y,S,R);T.onBeforeShadow(i,T,L,v,k,C,j),i.renderBufferDirect(v,null,k,C,T,j),T.onAfterShadow(i,T,L,v,k,C,j)}}}else if(D.visible){let O=P(T,D,S,R);T.onBeforeShadow(i,T,L,v,k,O,null),i.renderBufferDirect(v,null,k,O,T,null),T.onAfterShadow(i,T,L,v,k,O,null)}}let F=T.children;for(let k=0,D=F.length;k<D;k++)M(F[k],L,v,S,R)}function w(T){T.target.removeEventListener("dispose",w);for(let v in c){let S=c[v],R=T.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function qv(i,t){function e(){let H=!1,xt=new Re,st=null,_t=new Re(0,0,0,0);return{setMask:function(Tt){st!==Tt&&!H&&(i.colorMask(Tt,Tt,Tt,Tt),st=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,ot,kt,Lt,Se){Se===!0&&(Tt*=Lt,ot*=Lt,kt*=Lt),xt.set(Tt,ot,kt,Lt),_t.equals(xt)===!1&&(i.clearColor(Tt,ot,kt,Lt),_t.copy(xt))},reset:function(){H=!1,st=null,_t.set(-1,0,0,0)}}}function n(){let H=!1,xt=!1,st=null,_t=null,Tt=null;return{setReversed:function(ot){if(xt!==ot){let kt=t.get("EXT_clip_control");ot?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(ot){ot?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(ot){st!==ot&&!H&&(i.depthMask(ot),st=ot)},setFunc:function(ot){if(xt&&(ot=jd[ot]),_t!==ot){switch(ot){case oo:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ot}},setLocked:function(ot){H=ot},setClear:function(ot){Tt!==ot&&(Tt=ot,xt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){H=!1,st=null,_t=null,Tt=null,xt=!1}}}function s(){let H=!1,xt=null,st=null,_t=null,Tt=null,ot=null,kt=null,Lt=null,Se=null;return{setTest:function(de){H||(de?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(de){xt!==de&&!H&&(i.stencilMask(de),xt=de)},setFunc:function(de,Xn,oi){(st!==de||_t!==Xn||Tt!==oi)&&(i.stencilFunc(de,Xn,oi),st=de,_t=Xn,Tt=oi)},setOp:function(de,Xn,oi){(ot!==de||kt!==Xn||Lt!==oi)&&(i.stencilOp(de,Xn,oi),ot=de,kt=Xn,Lt=oi)},setLocked:function(de){H=de},setClear:function(de){Se!==de&&(i.clearStencil(de),Se=de)},reset:function(){H=!1,xt=null,st=null,_t=null,Tt=null,ot=null,kt=null,Lt=null,Se=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],g=null,p=!1,f=null,E=null,P=null,M=null,w=null,T=null,L=null,v=new Kt(0,0,0),S=0,R=!1,U=null,F=null,k=null,D=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,y=i.getParameter(i.VERSION);y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(y)[1]),V=j>=1):y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(y)[1]),V=j>=2);let C=null,A={},N=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),at=new Re().fromArray(N),Q=new Re().fromArray($);function ut(H,xt,st,_t){let Tt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(H,ot),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<st;kt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(xt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ot}let X={};X[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Qs),qt(!1),ge(Zc),et(i.CULL_FACE),Yt(pi);function et(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function vt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Nt(H,xt){return u[H]!==xt?(i.bindFramebuffer(H,xt),u[H]=xt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function St(H,xt){let st=x,_t=!1;if(H){st=m.get(xt),st===void 0&&(st=[],m.set(xt,st));let Tt=H.textures;if(st.length!==Tt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,kt=Tt.length;ot<kt;ot++)st[ot]=i.COLOR_ATTACHMENT0+ot;st.length=Tt.length,_t=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,_t=!0);_t&&i.drawBuffers(st)}function Vt(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let Wt={[_s]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};Wt[bd]=i.MIN,Wt[Md]=i.MAX;let Rt={[Sd]:i.ZERO,[wd]:i.ONE,[Td]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[Qc]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(H,xt,st,_t,Tt,ot,kt,Lt,Se,de){if(H===pi){p===!0&&(vt(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),H!==_d){if(H!==f||de!==R){if((E!==_s||w!==_s)&&(i.blendEquation(i.FUNC_ADD),E=_s,w=_s),de)switch(H){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",H);break}else switch(H){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",H);break}P=null,M=null,T=null,L=null,v.set(0,0,0),S=0,f=H,R=de}return}Tt=Tt||xt,ot=ot||st,kt=kt||_t,(xt!==E||Tt!==w)&&(i.blendEquationSeparate(Wt[xt],Wt[Tt]),E=xt,w=Tt),(st!==P||_t!==M||ot!==T||kt!==L)&&(i.blendFuncSeparate(Rt[st],Rt[_t],Rt[ot],Rt[kt]),P=st,M=_t,T=ot,L=kt),(Lt.equals(v)===!1||Se!==S)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Se),v.copy(Lt),S=Se),f=H,R=!1}function ne(H,xt){H.side===yn?vt(i.CULL_FACE):et(i.CULL_FACE);let st=H.side===pn;xt&&(st=!st),qt(st),H.blending===ji&&H.transparent===!1?Yt(pi):Yt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let _t=H.stencilWrite;o.setTest(_t),_t&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),sn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(H){U!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),U=H)}function ge(H){H!==md?(et(i.CULL_FACE),H!==F&&(H===Zc?i.cullFace(i.BACK):H===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),F=H}function Ie(H){H!==k&&(V&&i.lineWidth(H),k=H)}function sn(H,xt,st){H?(et(i.POLYGON_OFFSET_FILL),(D!==xt||O!==st)&&(D=xt,O=st,a.getReversed()&&(xt=-xt),i.polygonOffset(xt,st))):vt(i.POLYGON_OFFSET_FILL)}function Ee(H){H?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function De(H){H===void 0&&(H=i.TEXTURE0+W-1),C!==H&&(i.activeTexture(H),C=H)}function z(H,xt,st){st===void 0&&(C===null?st=i.TEXTURE0+W-1:st=C);let _t=A[st];_t===void 0&&(_t={type:void 0,texture:void 0},A[st]=_t),(_t.type!==H||_t.texture!==xt)&&(C!==st&&(i.activeTexture(st),C=st),i.bindTexture(H,xt||X[H]),_t.type=H,_t.texture=xt)}function We(){let H=A[C];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(H){Xt("WebGLState:",H)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(H){Xt("WebGLState:",H)}}function _(){try{i.texSubImage2D(...arguments)}catch(H){Xt("WebGLState:",H)}}function q(){try{i.texSubImage3D(...arguments)}catch(H){Xt("WebGLState:",H)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Xt("WebGLState:",H)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Xt("WebGLState:",H)}}function dt(){try{i.texStorage2D(...arguments)}catch(H){Xt("WebGLState:",H)}}function pt(){try{i.texStorage3D(...arguments)}catch(H){Xt("WebGLState:",H)}}function it(){try{i.texImage2D(...arguments)}catch(H){Xt("WebGLState:",H)}}function rt(){try{i.texImage3D(...arguments)}catch(H){Xt("WebGLState:",H)}}function mt(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Ut(H,xt){d[H]!==xt&&(i.pixelStorei(H,xt),d[H]=xt)}function yt(H){at.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),at.copy(H))}function gt(H){Q.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function Ft(H,xt){let st=c.get(xt);st===void 0&&(st=new WeakMap,c.set(xt,st));let _t=st.get(H);_t===void 0&&(_t=i.getUniformBlockIndex(xt,H.name),st.set(H,_t))}function zt(H,xt){let _t=c.get(xt).get(H);l.get(xt)!==_t&&(i.uniformBlockBinding(xt,_t,H.__bindingPointIndex),l.set(xt,_t))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,A={},u={},m=new WeakMap,x=[],g=null,p=!1,f=null,E=null,P=null,M=null,w=null,T=null,L=null,v=new Kt(0,0,0),S=0,R=!1,U=null,F=null,k=null,D=null,O=null,at.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Nt,drawBuffers:St,useProgram:Vt,setBlending:Yt,setMaterial:ne,setFlipSided:qt,setCullFace:ge,setLineWidth:Ie,setPolygonOffset:sn,setScissorTest:Ee,activeTexture:De,bindTexture:z,unbindTexture:We,compressedTexImage2D:le,compressedTexImage3D:I,texImage2D:it,texImage3D:rt,pixelStorei:Ut,getParameter:mt,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:dt,texStorage3D:pt,texSubImage2D:_,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:nt,scissor:yt,viewport:gt,reset:Jt}}function $v(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,_){return x?new OffscreenCanvas(I,_):Hr("canvas")}function p(I,_,q){let K=1,nt=le(I);if((nt.width>q||nt.height>q)&&(K=q/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let dt=Math.floor(K*nt.width),pt=Math.floor(K*nt.height);u===void 0&&(u=g(dt,pt));let it=_?g(dt,pt):u;return it.width=dt,it.height=pt,it.getContext("2d").drawImage(I,0,0,dt,pt),Ht("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+dt+"x"+pt+")."),it}else return"data"in I&&Ht("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function f(I){return I.generateMipmaps}function E(I){i.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,_,q,K,nt,dt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt;K&&(pt=t.get("EXT_texture_norm16"),pt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=_;if(_===i.RED&&(q===i.FLOAT&&(it=i.R32F),q===i.HALF_FLOAT&&(it=i.R16F),q===i.UNSIGNED_BYTE&&(it=i.R8),q===i.UNSIGNED_SHORT&&pt&&(it=pt.R16_EXT),q===i.SHORT&&pt&&(it=pt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.R8UI),q===i.UNSIGNED_SHORT&&(it=i.R16UI),q===i.UNSIGNED_INT&&(it=i.R32UI),q===i.BYTE&&(it=i.R8I),q===i.SHORT&&(it=i.R16I),q===i.INT&&(it=i.R32I)),_===i.RG&&(q===i.FLOAT&&(it=i.RG32F),q===i.HALF_FLOAT&&(it=i.RG16F),q===i.UNSIGNED_BYTE&&(it=i.RG8),q===i.UNSIGNED_SHORT&&pt&&(it=pt.RG16_EXT),q===i.SHORT&&pt&&(it=pt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RG8UI),q===i.UNSIGNED_SHORT&&(it=i.RG16UI),q===i.UNSIGNED_INT&&(it=i.RG32UI),q===i.BYTE&&(it=i.RG8I),q===i.SHORT&&(it=i.RG16I),q===i.INT&&(it=i.RG32I)),_===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGB8UI),q===i.UNSIGNED_SHORT&&(it=i.RGB16UI),q===i.UNSIGNED_INT&&(it=i.RGB32UI),q===i.BYTE&&(it=i.RGB8I),q===i.SHORT&&(it=i.RGB16I),q===i.INT&&(it=i.RGB32I)),_===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),q===i.UNSIGNED_INT&&(it=i.RGBA32UI),q===i.BYTE&&(it=i.RGBA8I),q===i.SHORT&&(it=i.RGBA16I),q===i.INT&&(it=i.RGBA32I)),_===i.RGB&&(q===i.UNSIGNED_SHORT&&pt&&(it=pt.RGB16_EXT),q===i.SHORT&&pt&&(it=pt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),_===i.RGBA){let rt=dt?Br:re.getTransfer(nt);q===i.FLOAT&&(it=i.RGBA32F),q===i.HALF_FLOAT&&(it=i.RGBA16F),q===i.UNSIGNED_BYTE&&(it=rt===pe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&pt&&(it=pt.RGBA16_EXT),q===i.SHORT&&pt&&(it=pt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function w(I,_){let q;return I?_===null||_===jn||_===or?q=i.DEPTH24_STENCIL8:_===Qn?q=i.DEPTH32F_STENCIL8:_===ar&&(q=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===or?q=i.DEPTH_COMPONENT24:_===Qn?q=i.DEPTH_COMPONENT32F:_===ar&&(q=i.DEPTH_COMPONENT16),q}function T(I,_){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==Ze?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function L(I){let _=I.target;_.removeEventListener("dispose",L),S(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(I){let _=I.target;_.removeEventListener("dispose",v),U(_)}function S(I){let _=n.get(I);if(_.__webglInit===void 0)return;let q=I.source,K=m.get(q);if(K){let nt=K[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(I),Object.keys(K).length===0&&m.delete(q)}n.remove(I)}function R(I){let _=n.get(I);i.deleteTexture(_.__webglTexture);let q=I.source,K=m.get(q);delete K[_.__cacheKey],a.memory.textures--}function U(I){let _=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let nt=0;nt<_.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let q=I.textures;for(let K=0,nt=q.length;K<nt;K++){let dt=n.get(q[K]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(q[K])}n.remove(I)}let F=0;function k(){F=0}function D(){return F}function O(I){F=I}function W(){let I=F;return I>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function V(I){let _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.wrapR||0),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.colorSpace),_.join()}function j(I,_){let q=n.get(I);if(I.isVideoTexture&&z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let K=I.image;if(K===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(q,I,_);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+_)}function y(I,_){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){vt(q,I,_);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+_)}function C(I,_){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){vt(q,I,_);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+_)}function A(I,_){let q=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){Nt(q,I,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+_)}let N={[Ai]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},$={[tn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},at={[Gd]:i.NEVER,[$d]:i.ALWAYS,[Vd]:i.LESS,[wl]:i.LEQUAL,[Wd]:i.EQUAL,[Tl]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Q(I,_){if(_.type===Qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ze||_.magFilter===Ho||_.magFilter===ia||_.magFilter===es||_.minFilter===Ze||_.minFilter===Ho||_.minFilter===ia||_.minFilter===es)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,N[_.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,N[_.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,N[_.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,$[_.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,$[_.minFilter]),_.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,at[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==ia&&_.minFilter!==es||_.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(I,_){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",L));let K=_.source,nt=m.get(K);nt===void 0&&(nt={},m.set(K,nt));let dt=V(_);if(dt!==I.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),nt[dt].usedTimes++;let pt=nt[I.__cacheKey];pt!==void 0&&(nt[I.__cacheKey].usedTimes--,pt.usedTimes===0&&R(_)),I.__cacheKey=dt,I.__webglTexture=nt[dt].texture}return q}function X(I,_,q){return Math.floor(Math.floor(I/q)/_)}function et(I,_,q,K){let dt=I.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,q,K,_.data);else{dt.sort((Ut,yt)=>Ut.start-yt.start);let pt=0;for(let Ut=1;Ut<dt.length;Ut++){let yt=dt[pt],gt=dt[Ut],Ft=yt.start+yt.count,zt=X(gt.start,_.width,4),Jt=X(yt.start,_.width,4);gt.start<=Ft+1&&zt===Jt&&X(gt.start+gt.count-1,_.width,4)===zt?yt.count=Math.max(yt.count,gt.start+gt.count-yt.start):(++pt,dt[pt]=gt)}dt.length=pt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ut=0,yt=dt.length;Ut<yt;Ut++){let gt=dt[Ut],Ft=Math.floor(gt.start/4),zt=Math.ceil(gt.count/4),Jt=Ft%_.width,H=Math.floor(Ft/_.width),xt=zt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Jt,H,xt,st,q,K,_.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function vt(I,_,q){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);let nt=ut(I,_),dt=_.source;e.bindTexture(K,I.__webglTexture,i.TEXTURE0+q);let pt=n.get(dt);if(dt.version!==pt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let st=re.getPrimaries(re.workingColorSpace),_t=_.colorSpace===Ci?null:re.getPrimaries(_.colorSpace),Tt=_.colorSpace===Ci||st===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let rt=p(_.image,!1,s.maxTextureSize);rt=We(_,rt);let mt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),yt=M(_.internalFormat,mt,Ut,_.normalized,_.colorSpace,_.isVideoTexture);Q(K,_);let gt,Ft=_.mipmaps,zt=_.isVideoTexture!==!0,Jt=pt.__version===void 0||nt===!0,H=dt.dataReady,xt=T(_,rt);if(_.isDepthTexture)yt=w(_.format===ns,_.type),Jt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,yt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,yt,rt.width,rt.height,0,mt,Ut,null));else if(_.isDataTexture)if(Ft.length>0){zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ft[0].width,Ft[0].height);for(let st=0,_t=Ft.length;st<_t;st++)gt=Ft[st],zt?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,mt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,st,yt,gt.width,gt.height,0,mt,Ut,gt.data);_.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,rt.width,rt.height),H&&et(_,rt,mt,Ut)):e.texImage2D(i.TEXTURE_2D,0,yt,rt.width,rt.height,0,mt,Ut,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,Ft[0].width,Ft[0].height,rt.depth);for(let st=0,_t=Ft.length;st<_t;st++)if(gt=Ft[st],_.format!==zn)if(mt!==null)if(zt){if(H)if(_.layerUpdates.size>0){let Tt=wh(gt.width,gt.height,_.format,_.type);for(let ot of _.layerUpdates){let kt=gt.data.subarray(ot*Tt/gt.data.BYTES_PER_ELEMENT,(ot+1)*Tt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ot,gt.width,gt.height,1,mt,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,rt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,yt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,rt.depth,mt,Ut,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,yt,gt.width,gt.height,rt.depth,0,mt,Ut,gt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ft[0].width,Ft[0].height);for(let st=0,_t=Ft.length;st<_t;st++)gt=Ft[st],_.format!==zn?mt!==null?zt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,yt,gt.width,gt.height,0,gt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,mt,Ut,gt.data):e.texImage2D(i.TEXTURE_2D,st,yt,gt.width,gt.height,0,mt,Ut,gt.data)}else if(_.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,rt.width,rt.height,rt.depth),H)if(_.layerUpdates.size>0){let st=wh(rt.width,rt.height,_.format,_.type);for(let _t of _.layerUpdates){let Tt=rt.data.subarray(_t*st/rt.data.BYTES_PER_ELEMENT,(_t+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,rt.width,rt.height,1,mt,Ut,Tt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,rt.width,rt.height,rt.depth,0,mt,Ut,rt.data);else if(_.isData3DTexture)zt?(Jt&&e.texStorage3D(i.TEXTURE_3D,xt,yt,rt.width,rt.height,rt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,rt.width,rt.height,rt.depth,0,mt,Ut,rt.data);else if(_.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(i.TEXTURE_2D,xt,yt,rt.width,rt.height);else{let st=rt.width,_t=rt.height;for(let Tt=0;Tt<xt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,yt,st,_t,0,mt,Ut,null),st>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),d.add(_),st.onpaint=_t=>{let Tt=_t.changedElements;for(let ot of d)Tt.includes(ot.image)&&(ot.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let Tt=i.RGBA,ot=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,ot,kt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(zt&&Jt){let st=le(Ft[0]);e.texStorage2D(i.TEXTURE_2D,xt,yt,st.width,st.height)}for(let st=0,_t=Ft.length;st<_t;st++)gt=Ft[st],zt?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt,Ut,gt):e.texImage2D(i.TEXTURE_2D,st,yt,mt,Ut,gt);_.generateMipmaps=!1}else if(zt){if(Jt){let st=le(rt);e.texStorage2D(i.TEXTURE_2D,xt,yt,st.width,st.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Ut,rt);f(_)&&E(K),pt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function Nt(I,_,q){if(_.image.length!==6)return;let K=ut(I,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let dt=n.get(nt);if(nt.version!==dt.__version||K===!0){e.activeTexture(i.TEXTURE0+q);let pt=re.getPrimaries(re.workingColorSpace),it=_.colorSpace===Ci?null:re.getPrimaries(_.colorSpace),rt=_.colorSpace===Ci||pt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ut=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let ot=0;ot<6;ot++)!mt&&!Ut?yt[ot]=p(_.image[ot],!0,s.maxCubemapSize):yt[ot]=Ut?_.image[ot].image:_.image[ot],yt[ot]=We(_,yt[ot]);let gt=yt[0],Ft=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),Jt=M(_.internalFormat,Ft,zt,_.normalized,_.colorSpace),H=_.isVideoTexture!==!0,xt=dt.__version===void 0||K===!0,st=nt.dataReady,_t=T(_,gt);Q(i.TEXTURE_CUBE_MAP,_);let Tt;if(mt){H&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,gt.width,gt.height);for(let ot=0;ot<6;ot++){Tt=yt[ot].mipmaps;for(let kt=0;kt<Tt.length;kt++){let Lt=Tt[kt];_.format!==zn?Ft!==null?H?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,Jt,Lt.width,Lt.height,0,Lt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,0,0,Lt.width,Lt.height,Ft,zt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,Jt,Lt.width,Lt.height,0,Ft,zt,Lt.data)}}}else{if(Tt=_.mipmaps,H&&xt){Tt.length>0&&_t++;let ot=le(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ut){H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,yt[ot].width,yt[ot].height,Ft,zt,yt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,yt[ot].width,yt[ot].height,0,Ft,zt,yt[ot].data);for(let kt=0;kt<Tt.length;kt++){let Se=Tt[kt].image[ot].image;H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,0,0,Se.width,Se.height,Ft,zt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,Jt,Se.width,Se.height,0,Ft,zt,Se.data)}}else{H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ft,zt,yt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Ft,zt,yt[ot]);for(let kt=0;kt<Tt.length;kt++){let Lt=Tt[kt];H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,0,0,Ft,zt,Lt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,Jt,Ft,zt,Lt.image[ot])}}}f(_)&&E(i.TEXTURE_CUBE_MAP),dt.__version=nt.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function St(I,_,q,K,nt,dt){let pt=r.convert(q.format,q.colorSpace),it=r.convert(q.type),rt=M(q.internalFormat,pt,it,q.normalized,q.colorSpace),mt=n.get(_),Ut=n.get(q);if(Ut.__renderTarget=_,!mt.__hasExternalTextures){let yt=Math.max(1,_.width>>dt),gt=Math.max(1,_.height>>dt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,dt,rt,yt,gt,_.depth,0,pt,it,null):e.texImage2D(nt,dt,rt,yt,gt,0,pt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),De(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,Ut.__webglTexture,0,Ee(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,Ut.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(I,_,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),_.depthBuffer){let K=_.depthTexture,nt=K&&K.isDepthTexture?K.type:null,dt=w(_.stencilBuffer,nt),pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;De(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(_),dt,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,I)}else{let K=_.textures;for(let nt=0;nt<K.length;nt++){let dt=K[nt],pt=r.convert(dt.format,dt.colorSpace),it=r.convert(dt.type),rt=M(dt.internalFormat,pt,it,dt.normalized,dt.colorSpace);De(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(_),rt,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(_),rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(I,_,q){let K=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(_.depthTexture);if(nt.__renderTarget=_,(!nt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Q(i.TEXTURE_CUBE_MAP,_.depthTexture);let mt=r.convert(_.depthTexture.format),Ut=r.convert(_.depthTexture.type),yt;_.depthTexture.format===hi?yt=i.DEPTH_COMPONENT24:_.depthTexture.format===ns&&(yt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,yt,_.width,_.height,0,mt,Ut,null)}}else j(_.depthTexture,0);let dt=nt.__webglTexture,pt=Ee(_),it=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,rt=_.depthTexture.format===ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===hi)De(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,dt,0);else if(_.depthTexture.format===ns)De(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(I){let _=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==I.depthTexture){let K=I.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=K}if(I.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)Wt(_.__webglFramebuffer[K],I,K);else{let K=I.texture.mipmaps;K&&K.length>0?Wt(_.__webglFramebuffer[0],I,0):Wt(_.__webglFramebuffer,I,0)}else if(q){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),Vt(_.__webglDepthbuffer[K],I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}else{let K=I.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Vt(_.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(I,_,q){let K=n.get(I);_!==void 0&&St(K.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Rt(I)}function ne(I){let _=I.texture,q=n.get(I),K=n.get(_);I.addEventListener("dispose",v);let nt=I.textures,dt=I.isWebGLCubeRenderTarget===!0,pt=nt.length>1;if(pt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),dt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let rt=0;rt<_.mipmaps.length;rt++)q.__webglFramebuffer[it][rt]=i.createFramebuffer()}else q.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)q.__webglFramebuffer[it]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(pt)for(let it=0,rt=nt.length;it<rt;it++){let mt=n.get(nt[it]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&De(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let rt=nt[it];q.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let mt=r.convert(rt.format,rt.colorSpace),Ut=r.convert(rt.type),yt=M(rt.internalFormat,mt,Ut,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),gt=Ee(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,yt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,q.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Q(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)St(q.__webglFramebuffer[it][rt],I,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else St(q.__webglFramebuffer[it],I,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);f(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let it=0,rt=nt.length;it<rt;it++){let mt=nt[it],Ut=n.get(mt),yt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),Q(yt,mt),St(q.__webglFramebuffer,I,mt,i.COLOR_ATTACHMENT0+it,yt,0),f(mt)&&E(yt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(it=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,K.__webglTexture),Q(it,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)St(q.__webglFramebuffer[rt],I,_,i.COLOR_ATTACHMENT0,it,rt);else St(q.__webglFramebuffer,I,_,i.COLOR_ATTACHMENT0,it,0);f(_)&&E(it),e.unbindTexture()}I.depthBuffer&&Rt(I)}function qt(I){let _=I.textures;for(let q=0,K=_.length;q<K;q++){let nt=_[q];if(f(nt)){let dt=P(I),pt=n.get(nt).__webglTexture;e.bindTexture(dt,pt),E(dt),e.unbindTexture()}}}let ge=[],Ie=[];function sn(I){if(I.samples>0){if(De(I)===!1){let _=I.textures,q=I.width,K=I.height,nt=i.COLOR_BUFFER_BIT,dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(I),it=_.length>1;if(it)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let rt=I.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Ut=n.get(_[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,nt,i.NEAREST),l===!0&&(ge.length=0,Ie.length=0,ge.push(i.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ge.push(dt),Ie.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Ut=n.get(_[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let _=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ee(I){return Math.min(s.maxSamples,I.samples)}function De(I){let _=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function z(I){let _=a.render.frame;h.get(I)!==_&&(h.set(I,_),I.update())}function We(I,_){let q=I.colorSpace,K=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==kr&&q!==Ci&&(re.getTransfer(q)===pe?(K!==zn||nt!==Rn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",q)),_}function le(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=y,this.setTexture3D=C,this.setTextureCube=A,this.rebindTextures=Yt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Yv(i,t){function e(n,s=Ci){let r,a=re.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===hh)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===zn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===is)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===Jo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===tl||n===el||n===nl||n===la||n===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===vl||n===yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Ml||n===ca||n===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ue({vertexShader:Zv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,x=null,g=typeof XRWebGLBinding<"u",p=new Vh,f={},E=e.getContextAttributes(),P=null,M=null,w=[],T=[],L=new oe,v=null,S=null,R=new cn;R.viewport=new Re;let U=new cn;U.viewport=new Re;let F=[R,U],k=new Oo,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=w[X];return et===void 0&&(et=new ir,w[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=w[X];return et===void 0&&(et=new ir,w[X]=et),et.getGripSpace()},this.getHand=function(X){let et=w[X];return et===void 0&&(et=new ir,w[X]=et),et.getHandSpace()};function W(X){let et=T.indexOf(X.inputSource);if(et===-1)return;let vt=w[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let X=0;X<w.length;X++){let et=T[X];et!==null&&(T[X]=null,w[X].disconnect(et))}D=null,O=null,p.reset();for(let X in f)delete f[X];if(t.setRenderTarget(P),m=null,u=null,d=null,s=null,M=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(L.width,L.height,!1),S!==null){let X=S.camera;X.fov=S.fov,X.zoom=S.zoom,X.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Nt=null,St=null;E.depth&&(St=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=E.stencil?ns:hi,Nt=E.stencil?or:jn);let Vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new vn(u.textureWidth,u.textureHeight,{format:zn,type:Rn,depthTexture:new $i(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new vn(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(X){for(let et=0;et<X.removed.length;et++){let vt=X.removed[et],Nt=T.indexOf(vt);Nt>=0&&(T[Nt]=null,w[Nt].disconnect(vt))}for(let et=0;et<X.added.length;et++){let vt=X.added[et],Nt=T.indexOf(vt);if(Nt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=T.length){T.push(vt),Nt=Vt;break}else if(T[Vt]===null){T[Vt]=vt,Nt=Vt;break}if(Nt===-1)break}let St=w[Nt];St&&St.connect(vt)}}let y=new J,C=new J;function A(X,et,vt){y.setFromMatrixPosition(et.matrixWorld),C.setFromMatrixPosition(vt.matrixWorld);let Nt=y.distanceTo(C),St=et.projectionMatrix.elements,Vt=vt.projectionMatrix.elements,Wt=St[14]/(St[10]-1),Rt=St[14]/(St[10]+1),Yt=(St[9]+1)/St[5],ne=(St[9]-1)/St[5],qt=(St[8]-1)/St[0],ge=(Vt[8]+1)/Vt[0],Ie=Wt*qt,sn=Wt*ge,Ee=Nt/(-qt+ge),De=Ee*-qt;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),St[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let z=Wt+Ee,We=Rt+Ee,le=Ie-De,I=sn+(Nt-De),_=Yt*Rt/We*z,q=ne*Rt/We*z;X.projectionMatrix.makePerspective(le,I,_,q,z,We),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function N(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,vt=X.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),k.near=U.near=R.near=et,k.far=U.far=R.far=vt,(D!==k.near||O!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,O=k.far),k.layers.mask=X.layers.mask|6,R.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let Nt=X.parent,St=k.cameras;N(k,Nt);for(let Vt=0;Vt<St.length;Vt++)N(St[Vt],Nt);St.length===2?A(k,R,U):k.projectionMatrix.copy(R.projectionMatrix),S===null&&X.isPerspectiveCamera&&(S={camera:X,fov:X.fov,zoom:X.zoom}),$(X,k,Nt)};function $(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=er*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(X){return f[X]};let at=null;function Q(X,et){if(h=et.getViewerPose(c||a),x=et,h!==null){let vt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Nt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,Nt=!0);for(let Rt=0;Rt<vt.length;Rt++){let Yt=vt[Rt],ne=null;if(m!==null)ne=m.getViewport(Yt);else{let ge=d.getViewSubImage(u,Yt);ne=ge.viewport,Rt===0&&(t.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(M))}let qt=F[Rt];qt===void 0&&(qt=new cn,qt.layers.enable(Rt),qt.viewport=new Re,F[Rt]=qt),qt.matrix.fromArray(Yt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Yt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ne.x,ne.y,ne.width,ne.height),Rt===0&&(k.matrix.copy(qt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Nt===!0&&k.cameras.push(qt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let Rt=d.getDepthInformation(vt[0]);Rt&&Rt.isValid&&Rt.texture&&p.init(Rt,s.renderState)}if(St&&St.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<vt.length;Rt++){let Yt=vt[Rt].camera;if(Yt){let ne=f[Yt];ne||(ne=new Kr,f[Yt]=ne);let qt=d.getCameraImage(Yt);ne.sourceTexture=qt}}}}for(let vt=0;vt<w.length;vt++){let Nt=T[vt],St=w[vt];Nt!==null&&St!==void 0&&St.update(Nt,et,c||a)}at&&at(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let ut=new Tf;ut.setAnimationLoop(Q),this.setAnimationLoop=function(X){at=X},this.dispose=function(){}}},Kv=new ke,If=new Zt;If.set(-1,0,0,0,1,0,0,0,1);function jv(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,bh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,P,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,P):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===pn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===pn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=t.get(f),P=E.envMap,M=E.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(If),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,P){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=P*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){let E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let T=w.program;n.uniformBlockBinding(M,T)}function c(M,w){let T=s[M.id];T===void 0&&(p(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",E));let L=w.program;n.updateUBOMapping(M,L);let v=t.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let w=d();M.__bindingPointIndex=w;let T=i.createBuffer(),L=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],T=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,S=T.length;v<S;v++){let R=T[v];if(Array.isArray(R))for(let U=0,F=R.length;U<F;U++)m(R[U],v,U,L);else m(R,v,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,w,T,L){if(g(M,w,T,L)===!0){let v=M.__offset,S=M.value;if(Array.isArray(S)){let R=0;for(let U=0;U<S.length;U++){let F=S[U],k=f(F);x(F,M.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function x(M,w,T){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,T)}function g(M,w,T,L){let v=M.value,S=w+"_"+T;if(L[S]===void 0)return typeof v=="number"||typeof v=="boolean"?L[S]=v:ArrayBuffer.isView(v)?L[S]=v.slice():L[S]=v.clone(),!0;{let R=L[S];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return L[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(M){let w=M.uniforms,T=0,L=16;for(let S=0,R=w.length;S<R;S++){let U=Array.isArray(w[S])?w[S]:[w[S]];for(let F=0,k=U.length;F<k;F++){let D=U[F],O=Array.isArray(D.value)?D.value:[D.value];for(let W=0,V=O.length;W<V;W++){let j=O[W],y=f(j),C=T%L,A=C%y.boundary,N=C+A;T+=A,N!==0&&L-N<y.storage&&(T+=L-N),D.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=y.storage}}}let v=T%L;return v>0&&(T+=L-v),M.__size=T,M.__cache={},this}function f(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",M),w}function E(M){let w=M.target;w.removeEventListener("dispose",E);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function P(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function ey(){return mi===null&&(mi=new yo(ty,16,16,is,ti),mi.name="DFG_LUT",mi.minFilter=Ze,mi.magFilter=Ze,mi.wrapS=kn,mi.wrapT=kn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var Pl=class{constructor(t={}){let{canvas:e=Zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Rn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let g=m,p=new Set([$o,qo,Xo]),f=new Set([Rn,jn,ar,or,Vo,Wo]),E=new Uint32Array(4),P=new Int32Array(4),M=new J,w=null,T=null,L=[],v=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,F=null,k=null,D=null,O=null;this._outputColorSpace=Ne;let W=0,V=0,j=null,y=-1,C=null,A=new Re,N=new Re,$=null,at=new Kt(0),Q=0,ut=e.width,X=e.height,et=1,vt=null,Nt=null,St=new Re(0,0,ut,X),Vt=new Re(0,0,ut,X),Wt=!1,Rt=new Yr,Yt=!1,ne=!1,qt=new ke,ge=new J,Ie=new Re,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return j===null?et:1}let z=n;function We(b,B){return e.getContext(b,B)}let le,I,_,q,K,nt,dt,pt,it,rt,mt,Ut,yt,gt,Ft,zt,Jt,H,xt,st,_t,Tt,ot;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Xn,!1),z===null){let B="webgl2";if(z=We(B,b),z===null)throw We(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(b){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Xn,!1),Xt("WebGLRenderer: "+b.message),b}function kt(){le=new l_(z),le.init(),_t=new Yv(z,le),I=new jx(z,le,t,_t),_=new qv(z,le),I.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),k=z.createFramebuffer(),D=z.createFramebuffer(),O=z.createFramebuffer(),q=new u_(z),K=new Lv,nt=new $v(z,le,_,K,I,_t,q),dt=new o_(R),pt=new f0(z),Tt=new Jx(z,pt),it=new c_(z,pt,q,Tt),rt=new f_(z,it,pt,Tt,q),H=new d_(z,I,nt),Ft=new Qx(K),mt=new Iv(R,dt,le,I,Tt,Ft),Ut=new jv(R,K),yt=new Nv,gt=new zv(le),Jt=new Zx(R,dt,_,rt,x,l),zt=new Xv(R,rt,I),ot=new Qv(z,q,I,_),xt=new Kx(z,le,q),st=new h_(z,le,q),q.programs=mt.programs,R.capabilities=I,R.extensions=le,R.properties=K,R.renderLists=yt,R.shadowMap=zt,R.state=_,R.info=q}g!==Rn&&(S=new m_(g,e.width,e.height,o,s,r));let Lt=new Wh(R,z);this.xr=Lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(ut,X,!1))},this.getSize=function(b){return b.set(ut,X)},this.setSize=function(b,B,tt=!0){if(Lt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=b,X=B,e.width=Math.floor(b*et),e.height=Math.floor(B*et),tt===!0&&(e.style.width=b+"px",e.style.height=B+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(ut*et,X*et).floor()},this.setDrawingBufferSize=function(b,B,tt){ut=b,X=B,et=tt,e.width=Math.floor(b*tt),e.height=Math.floor(B*tt),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(g===Rn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,B,tt,Y){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,B,tt,Y),_.viewport(A.copy(St).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,B,tt,Y){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,B,tt,Y),_.scissor(N.copy(Vt).multiplyScalar(et).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){_.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Nt=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,tt=!0){let Y=0;if(b){let Z=!1;if(j!==null){let wt=j.texture.format;Z=p.has(wt)}if(Z){let wt=j.texture.type,Ct=f.has(wt),Mt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),Dt=Mt.r,jt=Mt.g,ie=Mt.b;Ct?(E[0]=Dt,E[1]=jt,E[2]=ie,E[3]=Pt,z.clearBufferuiv(z.COLOR,0,E)):(P[0]=Dt,P[1]=jt,P[2]=ie,P[3]=Pt,z.clearBufferiv(z.COLOR,0,P))}else Y|=z.COLOR_BUFFER_BIT}B&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Xn,!1),Jt.dispose(),yt.dispose(),gt.dispose(),K.dispose(),dt.dispose(),rt.dispose(),Tt.dispose(),ot.dispose(),mt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",ku),Lt.removeEventListener("sessionend",Bu),us.stop()};function Se(b){b.preventDefault(),_h("WebGLRenderer: Context Lost."),U=!0}function de(){_h("WebGLRenderer: Context Restored."),U=!1;let b=q.autoReset,B=zt.enabled,tt=zt.autoUpdate,Y=zt.needsUpdate,Z=zt.type;kt(),q.autoReset=b,zt.enabled=B,zt.autoUpdate=tt,zt.needsUpdate=Y,zt.type=Z}function Xn(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oi(b){let B=b.target;B.removeEventListener("dispose",oi),cm(B)}function cm(b){hm(b),K.remove(b)}function hm(b){let B=K.get(b).programs;B!==void 0&&(B.forEach(function(tt){mt.releaseProgram(tt)}),b.isShaderMaterial&&mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,tt,Y,Z,wt){B===null&&(B=sn);let Ct=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Mt=fm(b,B,tt,Y,Z);_.setMaterial(Y,Ct);let Pt=tt.index,Dt=1;if(Y.wireframe===!0){if(Pt=it.getWireframeAttribute(tt),Pt===void 0)return;Dt=2}let jt=tt.drawRange,ie=tt.attributes.position,It=jt.start*Dt,fe=(jt.start+jt.count)*Dt;wt!==null&&(It=Math.max(It,wt.start*Dt),fe=Math.min(fe,(wt.start+wt.count)*Dt)),Pt!==null?(It=Math.max(It,0),fe=Math.min(fe,Pt.count)):ie!=null&&(It=Math.max(It,0),fe=Math.min(fe,ie.count));let Xe=fe-It;if(Xe<0||Xe===1/0)return;Tt.setup(Z,Y,Mt,tt,Pt);let Ae,ye=xt;if(Pt!==null&&(Ae=pt.get(Pt),ye=st,ye.setIndex(Ae)),Z.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*De()),ye.setMode(z.LINES)):ye.setMode(z.TRIANGLES);else if(Z.isLine){let an=Y.linewidth;an===void 0&&(an=1),_.setLineWidth(an*De()),Z.isLineSegments?ye.setMode(z.LINES):Z.isLineLoop?ye.setMode(z.LINE_LOOP):ye.setMode(z.LINE_STRIP)}else Z.isPoints?ye.setMode(z.POINTS):Z.isSprite&&ye.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ye.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let an=Z._multiDrawStarts,At=Z._multiDrawCounts,un=Z._multiDrawCount,ce=Pt?pt.get(Pt).bytesPerElement:1,Fn=K.get(Y).currentProgram.getUniforms();for(let li=0;li<un;li++)Fn.setValue(z,"_gl_DrawID",li),ye.render(an[li]/ce,At[li])}else if(Z.isInstancedMesh)ye.renderInstances(It,Xe,Z.count);else if(tt.isInstancedBufferGeometry){let an=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,an);ye.renderInstances(It,Xe,At)}else ye.render(It,Xe)};function Ou(b,B,tt,Y){F!==null&&b.isNodeMaterial&&F.setObject(Y,b),Yt===!0&&Ft.setState(b,tt,!1),b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,Oa(b,B,Y),b.side=Ki,b.needsUpdate=!0,Oa(b,B,Y),b.side=yn):Oa(b,B,Y)}this.compile=function(b,B,tt=null){tt===null&&(tt=b),F!==null&&F.renderStart(b,B,tt),T=gt.get(tt),T.init(B),v.push(T),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),b!==tt&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ne=this.localClippingEnabled,Yt=Ft.init(this.clippingPlanes,ne),Yt===!0&&Ft.setGlobalState(this.clippingPlanes,B),F!==null&&zt.render(T.state.shadowsArray,tt,B);let Y=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let wt=Z.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let Mt=wt[Ct];Ou(Mt,tt,B,Z),Y.add(Mt)}else Ou(wt,tt,B,Z),Y.add(wt)}),T=v.pop(),F!==null&&F.renderEnd(),Y},this.compileAsync=function(b,B,tt=null){let Y=this.compile(b,B,tt);return new Promise(Z=>{function wt(){if(Y.forEach(function(Ct){let Pt=K.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&Y.delete(Ct)}),Y.size===0){Z(b);return}setTimeout(wt,10)}le.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let yc=null;function um(b){yc&&yc(b)}function ku(){us.stop()}function Bu(){us.start()}let us=new Tf;us.setAnimationLoop(um),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(b){yc=b,Lt.setAnimationLoop(b),b===null?us.stop():us.start()},Lt.addEventListener("sessionstart",ku),Lt.addEventListener("sessionend",Bu),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(b,B);let tt=Lt.enabled===!0&&Lt.isPresenting===!0,Y=S!==null&&(j===null||tt)&&S.begin(R,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(B),B=Lt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,B,j),T=gt.get(b,v.length),T.init(B),T.state.textureUnits=nt.getTextureUnits(),v.push(T),qt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Rt.setFromProjectionMatrix(qt,Jn,B.reversedDepth),ne=this.localClippingEnabled,Yt=Ft.init(this.clippingPlanes,ne),w=yt.get(b,L.length),w.init(),L.push(w),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&bc(Ct,B,-1/0,R.sortObjects)}bc(b,B,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(vt,Nt),Ee=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Ee&&Jt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Ft.beginShadows();let Z=T.state.shadowsArray;if(zt.render(Z,b,B),Yt===!0&&Ft.endShadows(),(Y&&S.hasRenderPass())===!1){let Ct=w.opaque,Mt=w.transmissive;if(T.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(Mt.length>0)for(let Dt=0,jt=Pt.length;Dt<jt;Dt++){let ie=Pt[Dt];Hu(Ct,Mt,b,ie)}Ee&&Jt.render(b);for(let Dt=0,jt=Pt.length;Dt<jt;Dt++){let ie=Pt[Dt];zu(w,b,ie,ie.viewport)}}else Mt.length>0&&Hu(Ct,Mt,b,B),Ee&&Jt.render(b),zu(w,b,B)}j!==null&&V===0&&(nt.updateMultisampleRenderTarget(j),nt.updateRenderTargetMipmap(j)),Y&&S.end(R),b.isScene===!0&&b.onAfterRender(R,b,B),Tt.resetDefaultState(),y=-1,C=null,v.pop(),v.length>0?(T=v[v.length-1],nt.setTextureUnits(T.state.textureUnits),Yt===!0&&Ft.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,F!==null&&F.renderEnd()};function bc(b,B,tt,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)tt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Rt)){Y&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qt);let Ct=rt.update(b),Mt=b.material;Mt.visible&&w.push(b,Ct,Mt,tt,Ie.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Rt))){let Ct=rt.update(b),Mt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ie.copy(Ct.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(qt)),Array.isArray(Mt)){let Pt=Ct.groups;for(let Dt=0,jt=Pt.length;Dt<jt;Dt++){let ie=Pt[Dt],It=Mt[ie.materialIndex];It&&It.visible&&w.push(b,Ct,It,tt,Ie.z,ie,B)}}else Mt.visible&&w.push(b,Ct,Mt,tt,Ie.z,null,B)}}let wt=b.children;for(let Ct=0,Mt=wt.length;Ct<Mt;Ct++)bc(wt[Ct],B,tt,Y)}function zu(b,B,tt,Y){let{opaque:Z,transmissive:wt,transparent:Ct}=b;T.setupLightsView(tt),Yt===!0&&Ft.setGlobalState(R.clippingPlanes,tt),Y&&_.viewport(A.copy(Y)),Z.length>0&&Fa(Z,B,tt),wt.length>0&&Fa(wt,B,tt),Ct.length>0&&Fa(Ct,B,tt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Hu(b,B,tt,Y){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let It=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new vn(1,1,{generateMipmaps:!0,type:It?ti:Rn,minFilter:es,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let wt=T.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||A;wt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(wt),R.getClearColor(at),Q=R.getClearAlpha(),Q<1&&R.setClearColor(16777215,.5),R.clear(),Ee&&Jt.render(tt);let jt=R.toneMapping;R.toneMapping=Kn;let ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),Yt===!0&&Ft.setGlobalState(R.clippingPlanes,Y),Fa(b,tt,Y),nt.updateMultisampleRenderTarget(wt),nt.updateRenderTargetMipmap(wt),le.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let fe=0,Xe=B.length;fe<Xe;fe++){let Ae=B[fe],{object:ye,geometry:an,material:At,group:un}=Ae;if(At.side===yn&&ye.layers.test(Y.layers)){let ce=At.side;At.side=pn,At.needsUpdate=!0,Gu(ye,tt,Y,an,At,un),At.side=ce,At.needsUpdate=!0,It=!0}}It===!0&&(nt.updateMultisampleRenderTarget(wt),nt.updateRenderTargetMipmap(wt))}R.setRenderTarget(Mt,Pt,Dt),R.setClearColor(at,Q),ie!==void 0&&(Y.viewport=ie),R.toneMapping=jt}function Fa(b,B,tt){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,wt=b.length;Z<wt;Z++){let Ct=b[Z],{object:Mt,geometry:Pt,group:Dt}=Ct,jt=Ct.material;jt.allowOverride===!0&&Y!==null&&(jt=Y),Mt.layers.test(tt.layers)&&Gu(Mt,B,tt,Pt,jt,Dt)}}function Gu(b,B,tt,Y,Z,wt){F!==null&&Z.isNodeMaterial&&F.setObject(b,Z),b.onBeforeRender(R,B,tt,Y,Z,wt),b.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(R,B,tt,Y,b,wt),Z.transparent===!0&&Z.side===yn&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,R.renderBufferDirect(tt,B,Y,Z,b,wt),Z.side=Ki,Z.needsUpdate=!0,R.renderBufferDirect(tt,B,Y,Z,b,wt),Z.side=yn):R.renderBufferDirect(tt,B,Y,Z,b,wt),b.onAfterRender(R,B,tt,Y,Z,wt)}function Oa(b,B,tt){B.isScene!==!0&&(B=sn);let Y=K.get(b),Z=T.state.lights,wt=T.state.shadowsArray,Ct=Z.state.version,Mt=mt.getParameters(b,Z.state,wt,B,tt,T.state.lightProbeGridArray),Pt=mt.getProgramCacheKey(Mt),Dt=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=dt.get(b.envMap||Y.environment,jt),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",oi),Dt=new Map,Y.programs=Dt);let ie=Dt.get(Pt);if(ie!==void 0){if(Y.currentProgram===ie&&Y.lightsStateVersion===Ct)return Wu(b,Mt),ie}else Mt.uniforms=mt.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,tt,Mt),b.onBeforeCompile(Mt,R),ie=mt.acquireProgram(Mt,Pt),Dt.set(Pt,ie),Y.uniforms=Mt.uniforms;let It=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=Ft.uniform),Wu(b,Mt),Y.needsLights=mm(b),Y.lightsStateVersion=Ct,Y.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.sunLights.value=Z.state.sun,It.sunLightShadows.value=Z.state.sunShadow,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.sunShadowMatrix.value=Z.state.sunShadowMatrix,It.sunShadowCascade.value=Z.state.sunShadowCascade,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=ie,Y.uniformsList=null,ie}function Vu(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=ur.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Wu(b,B){let tt=K.get(b);tt.outputColorSpace=B.outputColorSpace,tt.batching=B.batching,tt.batchingColor=B.batchingColor,tt.instancing=B.instancing,tt.instancingColor=B.instancingColor,tt.instancingMorph=B.instancingMorph,tt.skinning=B.skinning,tt.morphTargets=B.morphTargets,tt.morphNormals=B.morphNormals,tt.morphColors=B.morphColors,tt.morphTargetsCount=B.morphTargetsCount,tt.numClippingPlanes=B.numClippingPlanes,tt.numIntersection=B.numClipIntersection,tt.vertexAlphas=B.vertexAlphas,tt.vertexTangents=B.vertexTangents,tt.toneMapping=B.toneMapping}function dm(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let tt=0,Y=b.length;tt<Y;tt++){let Z=b[tt];if(Z.texture!==null&&Z.boundingBox.containsPoint(M))return Z}return null}function fm(b,B,tt,Y,Z){B.isScene!==!0&&(B=sn),nt.resetTextureUnits();let wt=B.fog,Ct=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Mt=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:re.workingColorSpace,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Dt=dt.get(Y.envMap||Ct,Pt),jt=Y.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ie=!!tt.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!tt.morphAttributes.position,fe=!!tt.morphAttributes.normal,Xe=!!tt.morphAttributes.color,Ae=Kn;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let ye=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,an=ye!==void 0?ye.length:0,At=K.get(Y),un=T.state.lights;if(Yt===!0&&(ne===!0||b!==C)){let we=b===C&&Y.id===y;Ft.setState(Y,b,we)}let ce=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==un.state.version||At.outputColorSpace!==Mt||Z.isBatchedMesh&&At.batching===!1||!Z.isBatchedMesh&&At.batching===!0||Z.isBatchedMesh&&At.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&At.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&At.instancing===!1||!Z.isInstancedMesh&&At.instancing===!0||Z.isSkinnedMesh&&At.skinning===!1||!Z.isSkinnedMesh&&At.skinning===!0||Z.isInstancedMesh&&At.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&At.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&At.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&At.instancingMorph===!1&&Z.morphTexture!==null||At.envMap!==Dt||Y.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ft.numPlanes||At.numIntersection!==Ft.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==ie||At.morphTargets!==It||At.morphNormals!==fe||At.morphColors!==Xe||At.toneMapping!==Ae||At.morphTargetsCount!==an||!!At.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,At.__version=Y.version);let Fn=At.currentProgram;ce===!0&&(Fn=Oa(Y,B,Z),F&&Y.isNodeMaterial&&F.onUpdateProgram(Y,Fn,At));let li=!1,Ui=!1,Fs=!1,ve=Fn.getUniforms(),He=At.uniforms;if(_.useProgram(Fn.program)&&(li=!0,Ui=!0,Fs=!0),Y.id!==y&&(y=Y.id,Ui=!0),At.needsLights){let we=dm(T.state.lightProbeGridArray,Z);At.lightProbeGrid!==we&&(At.lightProbeGrid=we,Ui=!0)}if(li||C!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",b.projectionMatrix),ve.setValue(z,"viewMatrix",b.matrixWorldInverse);let Oi=ve.map.cameraPosition;Oi!==void 0&&Oi.setValue(z,ge.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ui=!0,Fs=!0)}if(At.needsLights&&(un.state.sunShadowMap.length>0&&ve.setValue(z,"sunShadowMap",un.state.sunShadowMap,nt),un.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",un.state.directionalShadowMap,nt),un.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",un.state.spotShadowMap,nt),un.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",un.state.pointShadowMap,nt)),Z.isSkinnedMesh){ve.setOptional(z,Z,"bindMatrix"),ve.setOptional(z,Z,"bindMatrixInverse");let we=Z.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ve.setValue(z,"boneTexture",we.boneTexture,nt))}Z.isBatchedMesh&&(ve.setOptional(z,Z,"batchingTexture"),ve.setValue(z,"batchingTexture",Z._matricesTexture,nt),ve.setOptional(z,Z,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",Z._indirectTexture,nt),ve.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",Z._colorsTexture,nt));let Fi=tt.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&H.update(Z,tt,Fn),(Ui||At.receiveShadow!==Z.receiveShadow)&&(At.receiveShadow=Z.receiveShadow,ve.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(He.envMapIntensity.value=B.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=ey()),Ui){if(ve.setValue(z,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&pm(He,Fs),wt&&Y.fog===!0&&Ut.refreshFogUniforms(He,wt),Ut.refreshMaterialUniforms(He,Y,et,X,T.state.transmissionRenderTarget[b.id]),At.needsLights&&At.lightProbeGrid){let we=At.lightProbeGrid;He.probesSH.value=we.texture,He.probesMin.value.copy(we.boundingBox.min),He.probesMax.value.copy(we.boundingBox.max),He.probesResolution.value.copy(we.resolution)}ur.upload(z,Vu(At),He,nt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ur.upload(z,Vu(At),He,nt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(z,"center",Z.center),ve.setValue(z,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(z,"normalMatrix",Z.normalMatrix),ve.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let we=Y.uniformsGroups;for(let Oi=0,Os=we.length;Oi<Os;Oi++){let qu=we[Oi];ot.update(qu,Fn),ot.bind(qu,Fn)}}return Fn}function pm(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function mm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,B,tt){let Y=K.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(b.texture).__webglTexture=B,K.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:tt,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let tt=K.get(b);tt.__webglFramebuffer=B,tt.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,tt=0){j=b,W=B,V=tt;let Y=null,Z=!1,wt=!1;if(b){let Mt=K.get(b);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(z.FRAMEBUFFER,Mt.__webglFramebuffer),A.copy(b.viewport),N.copy(b.scissor),$=b.scissorTest,_.viewport(A),_.scissor(N),_.setScissorTest($),y=-1;return}else if(Mt.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(Mt.__hasExternalTextures)nt.rebindTextures(b,K.get(b.texture).__webglTexture,K.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let jt=b.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&K.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}let Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(wt=!0);let Dt=K.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[B])?Y=Dt[B][tt]:Y=Dt[B],Z=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?Y=K.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?Y=Dt[tt]:Y=Dt,A.copy(b.viewport),N.copy(b.scissor),$=b.scissorTest}else A.copy(St).multiplyScalar(et).floor(),N.copy(Vt).multiplyScalar(et).floor(),$=Wt;if(tt!==0&&(Y=k),_.bindFramebuffer(z.FRAMEBUFFER,Y)&&_.drawBuffers(b,Y),_.viewport(A),_.scissor(N),_.setScissorTest($),Z){let Mt=K.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,tt)}else if(wt){let Mt=B;for(let Pt=0;Pt<b.textures.length;Pt++){let Dt=K.get(b.textures[Pt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,tt,Mt)}}else if(b!==null&&tt!==0){let Mt=K.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,tt)}y=-1};function Xu(b){let B=K.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=I.textureFormatReadable(b.format),B.__typeReadable=I.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,tt,Y,Z,wt,Ct,Mt=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=K.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){_.bindFramebuffer(z.FRAMEBUFFER,Pt);try{let Dt=b.textures[Mt],jt=Dt.format,ie=Dt.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);let It=Xu(Dt);if(It.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&tt>=0&&tt<=b.height-Z&&z.readPixels(B,tt,Y,Z,_t.convert(jt),_t.convert(ie),wt)}finally{let Dt=j!==null?K.get(j).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,B,tt,Y,Z,wt,Ct,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=K.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(B>=0&&B<=b.width-Y&&tt>=0&&tt<=b.height-Z){_.bindFramebuffer(z.FRAMEBUFFER,Pt);let Dt=b.textures[Mt],jt=Dt.format,ie=Dt.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);let It=Xu(Dt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,fe),z.bufferData(z.PIXEL_PACK_BUFFER,wt.byteLength,z.STREAM_READ),z.readPixels(B,tt,Y,Z,_t.convert(jt),_t.convert(ie),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Xe=j!==null?K.get(j).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Xe);let Ae=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Kd(z,Ae,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,fe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,wt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(fe),z.deleteSync(Ae),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,tt=0){let Y=Math.pow(2,-tt),Z=Math.floor(b.image.width*Y),wt=Math.floor(b.image.height*Y),Ct=B!==null?B.x:0,Mt=B!==null?B.y:0;nt.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,Ct,Mt,Z,wt),_.unbindTexture()},this.copyTextureToTexture=function(b,B,tt=null,Y=null,Z=0,wt=0){let Ct,Mt,Pt,Dt,jt,ie,It,fe,Xe,Ae=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(tt!==null)Ct=tt.max.x-tt.min.x,Mt=tt.max.y-tt.min.y,Pt=tt.isBox3?tt.max.z-tt.min.z:1,Dt=tt.min.x,jt=tt.min.y,ie=tt.isBox3?tt.min.z:0;else{let He=Math.pow(2,-Z);Ct=Math.floor(Ae.width*He),Mt=Math.floor(Ae.height*He),b.isDataArrayTexture?Pt=Ae.depth:b.isData3DTexture?Pt=Math.floor(Ae.depth*He):Pt=1,Dt=0,jt=0,ie=0}Y!==null?(It=Y.x,fe=Y.y,Xe=Y.z):(It=0,fe=0,Xe=0);let ye=_t.convert(B.format),an=_t.convert(B.type),At;B.isData3DTexture?(nt.setTexture3D(B,0),At=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(nt.setTexture2DArray(B,0),At=z.TEXTURE_2D_ARRAY):(nt.setTexture2D(B,0),At=z.TEXTURE_2D),_.activeTexture(z.TEXTURE0),_.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let un=_.getParameter(z.UNPACK_ROW_LENGTH),ce=_.getParameter(z.UNPACK_IMAGE_HEIGHT),Fn=_.getParameter(z.UNPACK_SKIP_PIXELS),li=_.getParameter(z.UNPACK_SKIP_ROWS),Ui=_.getParameter(z.UNPACK_SKIP_IMAGES);_.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),_.pixelStorei(z.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(z.UNPACK_SKIP_ROWS,jt),_.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);let Fs=b.isDataArrayTexture||b.isData3DTexture,ve=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let He=K.get(b),Fi=K.get(B),we=K.get(He.__renderTarget),Oi=K.get(Fi.__renderTarget);_.bindFramebuffer(z.READ_FRAMEBUFFER,we.__webglFramebuffer),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Os=0;Os<Pt;Os++)Fs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(b).__webglTexture,Z,ie+Os),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(B).__webglTexture,wt,Xe+Os)),z.blitFramebuffer(Dt,jt,Ct,Mt,It,fe,Ct,Mt,z.DEPTH_BUFFER_BIT,z.NEAREST);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||K.has(b)){let He=K.get(b),Fi=K.get(B);_.bindFramebuffer(z.READ_FRAMEBUFFER,D),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let we=0;we<Pt;we++)Fs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,Z,ie+we):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,Z),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fi.__webglTexture,wt,Xe+we):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Fi.__webglTexture,wt),Z!==0?z.blitFramebuffer(Dt,jt,Ct,Mt,It,fe,Ct,Mt,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(At,wt,It,fe,Xe+we,Dt,jt,Ct,Mt):z.copyTexSubImage2D(At,wt,It,fe,Dt,jt,Ct,Mt);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(At,wt,It,fe,Xe,Ct,Mt,Pt,ye,an,Ae.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(At,wt,It,fe,Xe,Ct,Mt,Pt,ye,Ae.data):z.texSubImage3D(At,wt,It,fe,Xe,Ct,Mt,Pt,ye,an,Ae):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,wt,It,fe,Ct,Mt,ye,an,Ae.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,wt,It,fe,Ae.width,Ae.height,ye,Ae.data):z.texSubImage2D(z.TEXTURE_2D,wt,It,fe,Ct,Mt,ye,an,Ae);_.pixelStorei(z.UNPACK_ROW_LENGTH,un),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),_.pixelStorei(z.UNPACK_SKIP_PIXELS,Fn),_.pixelStorei(z.UNPACK_SKIP_ROWS,li),_.pixelStorei(z.UNPACK_SKIP_IMAGES,Ui),wt===0&&B.generateMipmaps&&z.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(b){K.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){W=0,V=0,j=null,_.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var he={},bn={},Dl=[500,1500,3500],ny=i=>new Promise(t=>setTimeout(t,i)),Lf=(i,t)=>t?i+(i.includes("?")?"&":"?")+"r="+t:i;async function iy(i){for(let t=0;;t++)try{let e=await fetch(Lf(i,t));if(e.ok)return await e.json();throw new Error(e.status+" "+i)}catch(e){if(t>=Dl.length)throw e;await ny(Dl[t])}}async function Df(i=()=>{}){let t=await iy("img/manifest.json"),e=Object.keys(t),n=0;return await Promise.all(e.map(s=>new Promise(r=>{let a=0,o=()=>{let l=new Image;l.decoding="async",l.onload=()=>{he[s]=l,bn[s]=t[s],n++,i(n/e.length),r()},l.onerror=()=>{if(a<Dl.length){setTimeout(o,Dl[a++]);return}console.warn("image failed",s),n++,r()},l.src=Lf(t[s].src,a)};o()}))),t}var te=i=>bn[i]?bn[i].src:`img/ui/${i}.webp`;var mn=.72,Nf=30,Uf=21,Pn={uTime:{value:0},uTint:{value:new Kt(1,1,1)},uHazeCol:{value:new Kt("#9fbfb4")},uNight:{value:0}},sy=`
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
}`,ry=`
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
}`,Ff=.055,ay=new rn(1,1).translate(0,.5,0),qh=new Map;function kf(i,{repeat:t=!1,blur:e=0}={}){let n=i+(e?":b"+e:"");if(qh.has(n))return qh.get(n);let s=he[i];if(!s)throw new Error("missing image "+i);if(e){let a=document.createElement("canvas"),o=e*3;a.width=s.width+o*2,a.height=s.height+o*2;let l=a.getContext("2d");l.filter=`blur(${e}px)`,l.drawImage(s,o,o),s=a}let r=new en(s);return r.colorSpace=Ne,r.anisotropy=4,t&&(r.wrapS=r.wrapT=Ai),r.needsUpdate=!0,qh.set(n,r),r}var fr=class{constructor(t,e,n,{x:s=0,z:r=0,y:a=0,sway:o=0,flip:l=!1,shadow:c=0,shadowK:h=.25,haze:d=0,dark:u=0,order:m=2,blur:x=0,emit:g=0}={}){this.world=t,this.h=n,this.flip=l,this.sx=1,this.sy=1,this.blur=x,this.shadowK=h,this.mat=new Ue({vertexShader:sy,fragmentShader:ry,transparent:!0,depthWrite:!1,side:yn,uniforms:{map:{value:null},uTint:Pn.uTint,uTime:Pn.uTime,uHazeCol:Pn.uHazeCol,uSway:{value:o},uPhase:{value:Math.random()*6.28},uAlpha:{value:1},uFlash:{value:0},uHaze:{value:d},uDark:{value:u},uEmit:{value:g},uOut:{value:0},uPad:{value:new oe(0,0)}}}),this.mesh=new Pe(ay,this.mat),this.mesh.rotation.x=-mn,this.mesh.renderOrder=m,this.mesh.position.set(s,a,r),this.set(e),t.scene.add(this.mesh),c&&(this.shadow=new Pe(t.shadowGeo,t.shadowMat),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.shadowW=c,t.scene.add(this.shadow)),this.sync()}set(t){if(this.name===t)return;this.name=t,this.mat.uniforms.map.value=kf(t,{blur:this.blur});let e=bn[t]||{w:he[t].width,h:he[t].height};this.aspect=e.w/e.h}useCanvas(t){let e=new An(t);e.colorSpace=Ne,e.anisotropy=4,this.name=null,this.canvasTex=e,this.mat.uniforms.map.value=e,this.aspect=t.width/t.height}refresh(){this.canvasTex&&(this.canvasTex.needsUpdate=!0)}useTex(t,e){this.name=null,this.mat.uniforms.map.value=t,this.aspect=e,this.sync()}get x(){return this.mesh.position.x}get z(){return this.mesh.position.z}get w(){return this.h*this.aspect}setPos(t,e,n=this.mesh.position.y){this.mesh.position.set(t,n,e),this.sync()}sync(){let t=this.h*this.aspect;if(this.mesh.scale.set(t*this.sx*(this.flip?-1:1),this.h*this.sy,1),this.mat.uniforms.uOut.value>0&&this.mat.uniforms.uPad.value.set(Math.min(.5,Ff/Math.max(.05,Math.abs(t*this.sx))),Math.min(.5,Ff/Math.max(.05,Math.abs(this.h*this.sy)))),this.shadow){this.shadow.position.set(this.mesh.position.x,.02,this.mesh.position.z+.02);let e=this.shadowW*(1-Math.min(.5,this.mesh.position.y*this.shadowK));this.shadow.scale.set(e,e*.42,1)}}set alpha(t){this.mat.uniforms.uAlpha.value=t}get alpha(){return this.mat.uniforms.uAlpha.value}set flash(t){this.mat.uniforms.uFlash.value=t}set outline(t){let e=this.mat.uniforms;if(t<=0){e.uOut.value=0,e.uPad.value.set(0,0);return}let n=e.uOut.value;e.uOut.value=t,n||this.sync()}get outline(){return this.mat.uniforms.uOut.value}set visible(t){this.mesh.visible=t,this.shadow&&(this.shadow.visible=t)}get visible(){return this.mesh.visible}dispose(){this.world.scene.remove(this.mesh),this.shadow&&this.world.scene.remove(this.shadow),this.mat.dispose()}};function Of(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=128,n=0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,i),a.addColorStop(n,i),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,e,e);let o=new An(s);return o.colorSpace=Ne,o}var oy=`
attribute vec4 aCol; attribute float aSize; attribute float aKind;
uniform float uScale;
varying vec4 vCol; varying float vKind;
void main(){
  vCol = aCol; vKind = aKind;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,ly=`
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
}`,Nl=class{constructor(t,e,n){this.max=e,this.p=[];let s=new fn;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.kind=new Float32Array(e),s.setAttribute("position",new $e(this.pos,3)),s.setAttribute("aCol",new $e(this.col,4)),s.setAttribute("aSize",new $e(this.size,1)),s.setAttribute("aKind",new $e(this.kind,1)),this.geo=s,this.mat=new Ue({vertexShader:oy,fragmentShader:ly,transparent:!0,depthWrite:!1,blending:n?Qi:ji,uniforms:{uScale:{value:400}}}),this.pts=new Zr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=4,t.add(this.pts)}add(t){this.p.length>=this.max&&this.p.shift(),t.t=0,this.p.push(t)}update(t){let e=0,n=new Kt;for(let s=this.p.length-1;s>=0;s--){let r=this.p[s];if(r.t+=t,r.t>=r.life){this.p.splice(s,1);continue}r.vy-=(r.g||0)*t;let a=r.drag?Math.max(0,1-r.drag*t):1;r.vx*=a,r.vy*=a,r.vz*=a,r.wander&&(r.vx+=Math.sin(r.t*2.1+r.ph)*r.wander*t,r.vy+=Math.cos(r.t*1.7+r.ph)*r.wander*.6*t),r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.y<.02&&r.g&&(r.y=.02,r.vy*=-.3,r.vx*=.6,r.vz*=.6);let o=r.t/r.life,l=r.a;r.fadeIn&&(l*=Math.min(1,r.t/r.fadeIn)),l*=r.blink?.55+.45*Math.sin(r.t*r.blink+r.ph):1,l*=1-Math.pow(o,r.fadePow||3),n.set(r.c),this.pos[e*3]=r.x,this.pos[e*3+1]=r.y,this.pos[e*3+2]=r.z,this.col[e*4]=n.r,this.col[e*4+1]=n.g,this.col[e*4+2]=n.b,this.col[e*4+3]=l,this.size[e]=r.s*(r.grow?.6+o*.9:1),this.kind[e]=r.k||0,e++}this.geo.setDrawRange(0,e);for(let s of["position","aCol","aSize","aKind"])this.geo.attributes[s].needsUpdate=!0}},cy=`
varying vec3 vW;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,hy=`
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
}`;function uy(i){let t=i.width,e=i.height,n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");s.drawImage(i,-t/2,-e/2),s.drawImage(i,t/2,-e/2),s.drawImage(i,-t/2,e/2),s.drawImage(i,t/2,e/2);let r=document.createElement("canvas");r.width=t,r.height=e;let a=r.getContext("2d");a.drawImage(i,0,0),a.globalCompositeOperation="destination-in";let o=a.createRadialGradient(t/2,e/2,t*.18,t/2,e/2,t*.5);return o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,t,e),s.drawImage(r,0,0),n}var Ul=class{constructor(t){this.canvas=t,this.renderer=new Pl({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ne,this.renderer.setClearColor("#2d3a2c"),this.renderer.setTransparentSort((e,n)=>e.groupOrder-n.groupOrder||e.renderOrder-n.renderOrder||e.object.matrixWorld.elements[14]-n.object.matrixWorld.elements[14]||e.id-n.id),this.scene=new Wr,this.camera=new cn(Nf,16/9,1,200),this.target=new J(0,0,0),this.look=new J(0,0,0),this.dist=Uf,this.distGoal=Uf,this.shake=0,this.shadowGeo=new rn(1,1),this.shadowMat=new fi({map:Of("rgba(28,30,40,1)","rgba(28,30,40,0)",64,.25),transparent:!0,depthWrite:!1,opacity:.32}),this.glowTex=Of("rgba(255,210,140,1)","rgba(255,170,90,0)",128,.05),this.soft=new Nl(this.scene,500,!1),this.glow=new Nl(this.scene,500,!0),this.glows=[],this.layers=[],this.sprites=[],this.quality=1,this.resize()}get uniforms(){return Pn}buildGround(t,e,n,s){let[r,a,o,l]=t,c=w=>{let T=document.createElement("canvas");return T.width=Math.round(o*w),T.height=Math.round(l*w),T},h=c(6),d=c(3),u=h.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,h.width,h.height);let m=w=>({s:w,X:T=>(T-r)*w,Z:T=>(T-a)*w});e(u,m(6));let x=d.getContext("2d");x.fillStyle="#000",x.fillRect(0,0,d.width,d.height),n(x,m(3));let g=c(3),p=g.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,g.width,g.height),s&&s(p,m(3));let f=w=>{let T=new An(w);return T.flipY=!1,T.minFilter=Ze,T.generateMipmaps=!1,T},E=w=>{let T=new en(uy(he[w]));return T.wrapS=T.wrapT=Ai,T.colorSpace=Ne,T.anisotropy=8,T.needsUpdate=!0,T},P=new Ue({vertexShader:cy,fragmentShader:hy,uniforms:{tGrass:{value:E("grass")},tDirt:{value:E("dirt")},tCobble:{value:E("cobble")},tMask:{value:f(h)},tShade:{value:f(d)},tExtra:{value:f(g)},uTime:Pn.uTime,uRect:{value:new Re(r,a,o,l)},uTint:Pn.uTint,uNight:Pn.uNight}}),M=new Pe(new rn(o,l),P);M.rotation.x=-Math.PI/2,M.position.set(r+o/2,0,a+l/2),M.renderOrder=0,this.scene.add(M),this.maskCanvas=h}sprite(t,e,n){let s=new fr(this,t,e,n);return this.sprites.push(s),s}decal(t,e,n,s,r,{rot:a=0,y:o=.03,order:l=1,alpha:c=1,dark:h=0}={}){let d=typeof t=="string"?kf(t):(()=>{let x=new An(t);return x.colorSpace=Ne,x})(),u=new Ue({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; uniform float uDark; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(mix(c.rgb, vec3(0.08, 0.16, 0.2), uDark) * uTint, c.a * uAlpha);
#include <colorspace_fragment>
}`,uniforms:{map:{value:d},uTint:Pn.uTint,uAlpha:{value:c},uDark:{value:h}},transparent:!0,depthWrite:!1}),m=new Pe(new rn(1,1),u);return m.rotation.set(-Math.PI/2,0,a),m.scale.set(s,r,1),m.position.set(e,o,n),m.renderOrder=l,this.scene.add(m),m}addGlow(t,e,n,s,r="#ffc98a",{always:a=0,flicker:o=.08}={}){let l=new Pe(new rn(1,1),new fi({map:this.glowTex,color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:Qi,opacity:0}));l.rotation.x=-mn,l.position.set(t,e,n),l.scale.set(s,s,1),l.renderOrder=3,this.scene.add(l);let c={m:l,size:s,always:a,flicker:o,ph:Math.random()*9};return this.glows.push(c),c}addLayer(t,e,n=0){return this.scene.add(t),this.layers.push({group:t,dz:e,dy:n}),t}setLight(t){Pn.uTint.value.setRGB(t.tint[0],t.tint[1],t.tint[2]),Pn.uNight.value=t.night,this.shadowMat.opacity=t.shadow,Pn.uHazeCol.value.set("#a7c4b8").lerp(new Kt("#5a6aa8"),t.night),this.night=t.night,this.renderer.setClearColor(new Kt("#33452f").lerp(new Kt("#1b2140"),t.night))}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.quality>0?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=Nf*Math.max(1,16/9/(t/e)*.85),this.camera.updateProjectionMatrix();let s=e*n/(2*Math.tan(yh.degToRad(this.camera.fov)/2));this.soft.mat.uniforms.uScale.value=s*.05,this.glow.mat.uniforms.uScale.value=s*.05}follow(t,e,n,s=[0,0],r=[-1e9,1e9],a=1e9){let o=Math.min(r[1],Math.max(r[0],t+s[0])),l=Math.min(a,e+s[1]),c=1-Math.exp(-n*4.5);this.target.x+=(o-this.target.x)*c,this.target.z+=(l-this.target.z)*c,this.dist+=(this.distGoal-this.dist)*(1-Math.exp(-n*3))}snap(t,e){this.target.set(t,0,e)}update(t,e){Pn.uTime.value=e;let n=this.dist,s=0,r=0;this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.5),s=(Math.random()-.5)*this.shake*.4,r=(Math.random()-.5)*this.shake*.4),this.camera.position.set(this.target.x+s,n*Math.sin(mn)+r+.9,this.target.z+n*Math.cos(mn)),this.look.set(this.target.x+s,.9+r,this.target.z),this.camera.lookAt(this.look);for(let a of this.layers)a.group.position.z=this.target.z+a.dz,a.group.position.y=a.dy;for(let a of this.glows){let o=1+Math.sin(e*7+a.ph)*a.flicker+Math.sin(e*13.1+a.ph*2)*a.flicker*.5;a.m.material.opacity=Math.min(1,a.always+(1-a.always)*this.night)*.75*o,a.m.scale.set(a.size*o,a.size*o,1)}this.soft.update(t),this.glow.update(t),this.updatePuffs(t)}render(){this.renderer.render(this.scene,this.camera)}toScreen(t,e,n,s={x:0,y:0}){let r=new J(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*window.innerWidth,s.y=(-r.y*.5+.5)*window.innerHeight,s.behind=r.z>1,s}static topY(t){return t*Math.cos(mn)}static topZ(t){return-t*Math.sin(mn)}puff(t,e,n=.62){if(!this.puffTex){let r=a=>{let o=document.createElement("canvas");o.width=o.height=128;let l=o.getContext("2d");l.fillStyle=l.strokeStyle="#fff",a(l);let c=new An(o);return c.colorSpace=Ne,c};this.puffTex=[r(a=>{a.beginPath(),a.arc(64,64,26,0,6.283),a.fill()}),r(a=>{a.lineWidth=13,a.beginPath(),a.arc(64,64,50,.5,6.283-.2),a.stroke()}),r(a=>{for(let o=0;o<7;o++){let l=o/7*6.283+.3;a.beginPath(),a.arc(64+Math.cos(l)*52,64+Math.sin(l)*52,7,0,6.283),a.fill()}})],this.puffs=[]}let s=this.puffs.find(r=>r.t>=r.life);if(!s){if(this.puffs.length>=8)return;let r=new Ue({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(c.rgb * mix(vec3(1.0), uTint, 0.7), c.a * uAlpha);
#include <colorspace_fragment>
}`,uniforms:{map:{value:this.puffTex[0]},uTint:Pn.uTint,uAlpha:{value:0}},transparent:!0,depthWrite:!1});s={m:new Pe(new rn(1,1),r),t:0,life:.25},s.m.rotation.x=-Math.PI/2,s.m.renderOrder=1,this.scene.add(s.m),this.puffs.push(s)}s.t=0,s.size=n,s.m.position.set(t,.04,e),s.m.visible=!0,this.placePuff(s)}placePuff(t){let e=t.t,n=t.m.material.uniforms,s=t.size,r,a,o;if(e<.035)o=0,r=.3,a=.95;else if(e<.12){let l=(e-.035)/.085;o=1,r=.3+.55*(1-(1-l)*(1-l)),a=.9}else{let l=(e-.12)/.13;o=2,r=.85+.15*l,a=.9*(1-l*l)}n.map.value=this.puffTex[o],n.uAlpha.value=Math.max(0,a),t.m.scale.set(s*r,s*r*.8,1)}updatePuffs(t){if(this.puffs){for(let e of this.puffs)if(!(e.t>=e.life)){if(e.t+=t,e.t>=e.life){e.m.visible=!1;continue}this.placePuff(e)}}}dust(t,e,n=3,s="#e8dcc0"){for(let r=0;r<n;r++){let a=Math.random()*6.28;this.soft.add({x:t+Math.cos(a)*.15,y:.1,z:e+Math.sin(a)*.1,vx:Math.cos(a)*.6,vy:.5+Math.random()*.4,vz:Math.sin(a)*.3,drag:3,life:.5+Math.random()*.2,s:4+Math.random()*3,c:s,a:.55,grow:!0})}}sparkle(t,e,n,s=8,r="#fff4c2",a=.6,o=1.2){for(let l=0;l<s;l++){let c=Math.random()*6.28,h=Math.random()*a;this.glow.add({x:t+Math.cos(c)*h,y:e+Math.random()*.4,z:n+Math.sin(c)*h*.6,vx:Math.cos(c)*.6,vy:o*(.5+Math.random()),vz:Math.sin(c)*.3,drag:2.5,life:.7+Math.random()*.5,s:5+Math.random()*5,c:r,a:1,k:1})}}burst(t,e,n,s,r=10){for(let a=0;a<r;a++){let o=Math.random()*6.28,l=1.5+Math.random()*2;this.soft.add({x:t,y:e,z:n,vx:Math.cos(o)*l,vy:2+Math.random()*2.5,vz:Math.sin(o)*l*.5,g:9,life:.6+Math.random()*.3,s:3.5+Math.random()*3,c:s,a:1,fadePow:4})}}};var gn={swing:.66,lift:12,lean:.1,rock:.04,headBob:5,bounce:.16,squash:.012,kick:.4,flare:.35,stepRate:13.5},fa={crow:{h:1.55,front:!0,neck:[.52,.13],shN:[.6,.3],shF:[.36,.3],hipN:[.55,.9],hipF:[.42,.88],tail:[.14,.8],arms:2},bear:{h:1.6,front:!0,neck:[.52,.1],shN:[.74,.3],shF:[.24,.3],hipN:[.66,.86],hipF:[.32,.86],arms:2},duck:{h:1.35,front:!0,neck:[.5,.13],shN:[.5,.35],shF:[.5,.35],hipN:[.58,.88],hipF:[.44,.88],tail:[.16,.74],arms:0,waddle:1},fish:{h:1.5,front:!1,neck:[.52,.19],shN:[.84,.3],shF:[.2,.3],hipN:[.62,.88],hipF:[.38,.88],arms:1},raccoon:{h:1.45,front:!0,neck:[.5,.12],shN:[.8,.34],shF:[.2,.34],hipN:[.6,.88],hipF:[.4,.88],tail:[.2,.78],arms:1},croc:{h:1.65,front:!0,neck:[.5,.12],shN:[.8,.4],shF:[.2,.4],hipN:[.62,.9],hipF:[.38,.9],tail:[.22,.85],arms:1},turtle:{h:1.4,front:!1,neck:[.55,.12],shN:[.74,.4],shF:[.32,.38],hipN:[.64,.88],hipF:[.42,.88],arms:2,waddle:.7}},dy=.6,Ms=(i,t,e)=>i+(t-i)*e,In=(i,t)=>he[`rn_${i}_${t}`],pr=(i,t)=>bn[`rn_${i}_${t}`]&&bn[`rn_${i}_${t}`].j||[.5,.1],Ss=class{constructor(t,e=dy){this.who=t,this.cfg=fa[t],this.res=e,this.t=Math.random()*10,this.ph=0,this.amp=0,this.lean=0,this.headLag=0,this.blinkIn=1+Math.random()*3,this.blinkT=0,this.mouth=0,this.happy=0,this.out={lift:0,sq:0},this.c=document.createElement("canvas"),this.g=this.c.getContext("2d"),this.measure()}measure(){let t=this.who,e=this.cfg,n=In(t,"body"),s=In(t,"head"),r=In(t,"leg"),h=-((1-pr(t,"leg")[1])*r.height)-e.hipN[1]*n.height+e.neck[1]*n.height-pr(t,"head")[1]*s.height,d=In(t,"arm"),u=Math.max(n.width*.62,s.width*.62);d&&e.arms&&(u=Math.max(u,Math.abs(e.shN[0]-.5)*n.width+d.height*.85));let m=In(t,"tail");m&&e.tail&&(u=Math.max(u,n.width*.5+m.width*.95)),this.figPx=-h,this.W=Math.ceil(u*2+30+2*gn.rock*-h),this.H=Math.ceil(-h+30),this.c.width=Math.ceil(this.W*this.res),this.c.height=Math.ceil(this.H*this.res),this.worldH=e.h*this.H/this.figPx}update(t,{speed01:e=0,talking:n=!1,happy:s=!1,draw:r=!0}={}){this.t+=t,this.amp=Ms(this.amp,Math.min(1,e),Math.min(1,t*8)),this.amp>.02?this.ph+=t*gn.stepRate*Math.max(.4,e):this.ph=Ms(this.ph,Math.round(this.ph/Math.PI)*Math.PI,Math.min(1,t*8)),this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.12,this.blinkIn=2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t),n?(this.mouthT=(this.mouthT||0)-t,this.mouthT<=0&&(this.mouth=this.mouth?0:1,this.mouthT=this.mouth?.09+Math.random()*.08:.06+Math.random()*.07)):this.mouth=0,this.happy=Ms(this.happy,s?1:0,Math.min(1,t*(s?22:5)));let a=this.lean;this.lean=Ms(this.lean,this.amp*gn.lean,Math.min(1,t*8)),this.headLag=Ms(this.headLag,-(this.lean-a)/Math.max(t,.001)*.06,Math.min(1,t*6)),this.talking=n;let o=this.up=Math.cos(this.ph)**2;this.out.lift=o*gn.bounce*this.amp,this.out.sq=(.5-o)*2*gn.squash*this.amp,r&&this.draw()}draw(){let t=this.who,e=this.cfg,n=this.g,s=this.t,r=this.amp,a=Math.sin(this.ph),o=Math.cos(this.ph),l=In(t,"body"),c=In(t,"leg"),h=In(t,"arm"),d=In(t,"tail");if(!l||!c)return;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,this.c.width,this.c.height),n.setTransform(this.res,0,0,this.res,0,0);let u=this.H-4,m=this.W*.5;n.translate(m,u),n.rotate(a*gn.rock*r),n.translate(-m,-u);let x=pr(t,"leg"),g=pr(t,"arm"),p=gn.swing*r,f=Math.max(0,o)*gn.lift*r,E=Math.max(0,-o)*gn.lift*r,P=-a*p+(f/gn.lift)**2*gn.kick,M=a*p+(E/gn.lift)**2*gn.kick,w=(1-x[1])*c.height,T=u-w*Math.max(Math.cos(P),Math.cos(M)),L=(1-r)*Math.sin(s*2.2)*.018,v=(e.waddle||0)*a*.09*r,S=T-e.hipN[1]*l.height,R=m-l.width*.5,U=ut=>[R+e[ut][0]*l.width,S+e[ut][1]*l.height],F=[m,T],k=ut=>{n.save(),n.translate(F[0],F[1]),n.rotate(this.lean+v+Math.sin(this.ph*2)*.015*r),n.scale(1-L*.4,1+L),n.translate(-F[0],-F[1]),ut(),n.restore()},D=(ut,X,et,vt=0,Nt=0,St=1)=>{ut&&(n.save(),n.translate(et[0],et[1]+Nt),n.rotate(vt),n.scale(St,1),n.drawImage(ut,-X[0]*ut.width,-X[1]*ut.height),n.restore())},O=Math.sin(s*1.5)*.05*(1-r),W=(this.up||0)*gn.flare*r,V=a*.55*r+O-W,j=-a*.45*r-O+W;this.happy>.01&&(V=Ms(V,-2.3+Math.sin(s*9)*.25,this.happy),j=Ms(j,2.2-Math.sin(s*9+1)*.25,this.happy)),this.talking&&(V+=Math.sin(s*3.1)*.18);let y=this.talking?Math.sin(s*7.3)*.05+Math.sin(s*2.3)*.03:0,C=this.headLag+Math.sin(this.ph*2-.8)*.04*r+Math.sin(s*1.1)*.03*(1-r)+y-v*.5-this.happy*.08,A=Math.sin(this.ph*2-.9)*gn.headBob*r-this.happy*4,N=this.mouth&&In(t,"talk")?"talk":this.blinkT>0&&In(t,"blink")?"blink":"head",$=In(t,N),at=pr(t,N),Q=Math.sin(s*2.6)*.12+Math.sin(this.ph*2)*.22*r;d&&e.tail&&k(()=>D(d,pr(t,"tail"),U("tail"),Q)),e.arms>=2&&k(()=>D(h,g,U("shF"),j)),D(c,x,[U("hipF")[0],T],M,-E),D(c,x,[U("hipN")[0],T],P,-f),k(()=>{e.front||D($,at,U("neck"),C,A),n.drawImage(l,R,S),e.front&&D($,at,U("neck"),C,A),e.arms>=1&&D(h,g,U("shN"),V)})}};function Bf(){for(let i of Object.keys(fa)){if(!In(i,"body"))continue;let t=new Ss(i,1);t.blinkIn=99,t.t=0,t.update(0,{});let e="pt_"+i;he[e]=t.c,bn[e]={w:t.c.width,h:t.c.height,src:t.c.toDataURL("image/png")}}}var $h=[[-70,7.8],[-13.8,7.8],[-13.8,20],[14,20],[14,5.6],[29.6,5.6],[29.6,8],[100,8]];function Jh(i){return i<-13.8?7.8:i<=14?20:i<29.6?5.6:8}var Bl=(i,t,e=.4)=>t<Jh(i)-e,Fl=.4,Gf=-2.8,Ol=16,Be=128;function mr(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var pa=null;function Vf(){if(pa)return pa;pa=[];let i=0;for(let t=0;t<$h.length-1;t++){let[e,n]=$h[t],[s,r]=$h[t+1],a=Math.hypot(s-e,r-n),o=(s-e)/a,l=(r-n)/a,c=-l,h=o,d=Math.max(1,Math.round(a/.25));for(let u=t?1:0;u<=d;u++){let m=u/d*a,x=i+m,p=Math.max(0,Math.min(1,m/2.2,(a-m)/2.2))*(.2*Math.sin(x*.57+.3)+.11*Math.sin(x*1.43+1.9)+.05*Math.sin(x*3.7+.4));pa.push({x:e+o*m+c*p,z:n+l*m+h*p,nx:c,nz:h,s:x})}i+=a}return pa}function Wf(i,t){let e=document.createElement("canvas");e.width=i.canvas.width,e.height=i.canvas.height;let n=e.getContext("2d"),s=Vf();n.fillStyle="rgb(0,0,255)",n.beginPath(),n.moveTo(t.X(s[0].x),t.Z(s[0].z));for(let r of s)n.lineTo(t.X(r.x),t.Z(r.z));n.lineTo(t.X(110),t.Z(60)),n.lineTo(t.X(-80),t.Z(60)),n.closePath(),n.fill(),i.save(),i.globalCompositeOperation="lighter",i.drawImage(e,0,0),i.restore()}var Yh=2.55,ma=.35;function kl(i,t=.04){let e=Math.round(i.width*t),n=document.createElement("canvas");return n.width=i.width-2*e,n.height=i.height,n.getContext("2d").drawImage(i,-e,0),n}function zl(i,t,e,n,s){let r=document.createElement("canvas");r.width=Math.round(t),r.height=Math.round(e);let a=r.getContext("2d");a.drawImage(i,0,0,r.width,r.height),a.globalCompositeOperation="destination-out";let o=ma*Be;if(n){let l=a.createLinearGradient(0,0,o,0);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=l,a.fillRect(0,0,o,r.height)}if(s){let l=a.createLinearGradient(r.width-o,0,r.width,0);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,1)"),a.fillStyle=l,a.fillRect(r.width-o,0,o,r.height)}return r}function fy(){let i=kl(he.isle_face_a),t=kl(he.isle_face_b),e=i.width*Yh/i.height,n=t.width*Yh/t.height;Ol=e+n-2*ma;let s=Math.round(Ol*Be),r=Math.round((Fl-Gf)*Be),a=0,o=Yh*Be,l=document.createElement("canvas");l.width=s,l.height=r;let c=l.getContext("2d"),h=(e-ma)*Be;c.drawImage(t,h,a,n*Be,o),c.drawImage(t,h-s,a,n*Be,o),c.drawImage(zl(i,e*Be,o,!0,!0),0,a),c.globalCompositeOperation="source-atop";let d=c.createLinearGradient(0,(Fl+1)*Be,0,(Fl+2.4)*Be);return d.addColorStop(0,"rgba(160,198,200,0)"),d.addColorStop(1,"rgba(170,204,206,0.7)"),c.fillStyle=d,c.fillRect(0,0,s,r),c.globalCompositeOperation="source-over",l}function py(i){let n=mr(i),s=document.createElement("canvas");s.width=768,s.height=320;let r=s.getContext("2d"),a=[];for(let l=0;l<10;l++){let c=l/9,h=120+c*528+(n()-.5)*70,d=46+n()*44+44*Math.sin(c*Math.PI);a.push([h,224-d*.4-n()*24,d])}r.filter="blur(14px)",r.fillStyle="rgba(150,190,194,0.85)";for(let[l,c,h]of a)r.beginPath(),r.arc(l,c+16,h,0,7),r.fill();r.fillStyle="rgba(226,234,224,0.92)";for(let[l,c,h]of a)r.beginPath(),r.arc(l-h*.08,c-h*.1,h*.86,0,7),r.fill();r.filter="blur(20px)",r.fillStyle="rgba(252,248,232,0.85)";for(let[l,c,h]of a)r.beginPath(),r.arc(l-h*.2,c-h*.3,h*.56,0,7),r.fill();r.filter="none",r.globalCompositeOperation="destination-out";let o=r.createLinearGradient(0,180,0,290);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),r.fillStyle=o,r.fillRect(0,0,768,320),s}function my(){let t=mr(77),e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d");n.fillStyle="#9fc4c6",n.fillRect(0,0,512,512),n.filter="blur(24px)";for(let s=0;s<46;s++){let r=t()*512,a=t()*512,o=50+t()*100,l=o*(.35+t()*.3),c=t()<.6?"rgba(236,238,220,0.5)":"rgba(128,174,180,0.4)";for(let h of[-512,0,512])for(let d of[-512,0,512])n.fillStyle=c,n.beginPath(),n.ellipse(r+h,a+d,o,l,0,0,7),n.fill()}return n.filter="none",e}var Zh=(i,t)=>{let e=new An(i);return e.colorSpace=Ne,e.anisotropy=4,t&&(e.wrapS=e.wrapT=Ai),e},zf=`uniform sampler2D map; uniform vec3 uTint; uniform float uAlpha; varying vec2 vUv; void main(){ vec4 c = texture2D(map, vUv); if (c.a * uAlpha < 0.01) discard; gl_FragColor = vec4(c.rgb * uTint, c.a * uAlpha);
#include <colorspace_fragment>
}`,Hf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";function Xf(i){let t=Vf(),e=i.uniforms,n=Zh(fy(),!0);n.flipY=!1,n.wrapT=kn;let s=new Float32Array(t.length*6),r=new Float32Array(t.length*4),a=[];t.forEach((p,f)=>{if(s.set([p.x,Fl,p.z,p.x,Gf,p.z],f*6),r.set([p.s/Ol,0,p.s/Ol,1],f*4),f){let E=2*f-2,P=2*f-1,M=2*f,w=2*f+1;a.push(P,w,M,P,M,E)}});let o=new fn;o.setAttribute("position",new $e(s,3)),o.setAttribute("uv",new $e(r,2)),o.setIndex(a);let l=new Pe(o,new Ue({vertexShader:Hf,fragmentShader:zf,transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{map:{value:n},uTint:e.uTint,uAlpha:{value:1}}}));l.renderOrder=.3,l.frustumCulled=!1,i.scene.add(l);let c=Zh(my(),!0);c.repeat.set(280/22,160/22);let h=new Pe(new rn(280,160),new Ue({vertexShader:"varying vec2 vUv; uniform vec2 uRep; void main(){ vUv = uv * uRep; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec3 uTint; varying vec2 vUv; void main(){ gl_FragColor = vec4(texture2D(map, vUv).rgb * uTint, 1.0);
#include <colorspace_fragment>
}`,uniforms:{map:{value:c},uTint:e.uTint,uRep:{value:new oe(280/22,160/22)}}}));h.rotation.x=-Math.PI/2,h.position.set(20,-3.4,10),h.renderOrder=-1,i.scene.add(h);let d=[0,1,2].map(p=>Zh(py(900+p*37))),u=mr(4242),m=[],x=new rn(1,1),g=d.map(p=>new Ue({vertexShader:Hf,fragmentShader:zf,transparent:!0,depthWrite:!1,side:yn,uniforms:{map:{value:p},uTint:e.uTint,uAlpha:{value:.88}}}));for(let[p,f,E,P,M]of[[[2.2,1.4],[.3,.7],[-2.5,.3],[3.4,1.8],.95],[[3,1.8],[1.8,1.4],[-2.9,.3],[6,3],1],[[4.2,2.2],[4.4,2],[-3.25,.1],[8.5,3.5],1]]){let w=u()*p[0];for(let T of t){if(T.s<w||T.x<-66||T.x>70||f[0]<1&&T.nz<.7)continue;w=T.s+p[0]+u()*p[1];let L=P[0]+u()*P[1],v=f[0]+u()*f[1],S=E[0]+u()*E[1],R=new Pe(x,g[Math.floor(u()*3)]);R.rotation.x=-mn,R.scale.set(L*(u()<.5?-1:1),L*.42,1),R.renderOrder=.35;let U=T.x+T.nx*v,F=T.z+T.nz*v;R.position.set(U,S,F),i.scene.add(R),m.push({m:R,x:U,y:S,ph:u()*6.28,sp:.06+u()*.07})}}return(p,f)=>{for(let E of m)E.m.position.x=E.x+Math.sin(f*E.sp+E.ph)*.3,E.m.position.y=E.y+Math.sin(f*E.sp*1.7+E.ph)*.05}}var Vl=7.1,Kh=1.65,Gl=.18,$f=.34,Wl=Vl+Kh/Math.sin(mn),ss=[-13.6,13.8],ga=3.2;function Yf(i,t=Gl){let e=document.createElement("canvas");return e.width=Math.round(i*Be),e.height=Math.round((t+Kh)*Be),e}function Hl(i,t,e,n,s,r=0){let a=he[t()<.72?"grass_tuft":"fern"];if(!a)return;let o=s*a.width/a.height;i.save(),r&&(i.filter=`brightness(${1-r})`),i.translate(e,n),t()<.5&&i.scale(-1,1),i.drawImage(a,-o/2,-s,o,s),i.restore()}function gy(i,t,e,n){let s=["#fff6e6","#f6c9de","#fff1a8","#ffffff"][Math.floor(t()*4)];for(let r=0;r<2+Math.floor(t()*3);r++){let a=e+(t()-.5)*22,o=n+(t()-.5)*10;i.fillStyle="#5f8a2e",i.beginPath(),i.ellipse(a+4,o+6,5,2.4,.5,0,7),i.fill(),i.fillStyle=s;for(let l=0;l<5;l++){let c=l/5*6.28;i.beginPath(),i.arc(a+Math.cos(c)*3.4,o+Math.sin(c)*3.4,2.8,0,7),i.fill()}i.fillStyle="#f2b632",i.beginPath(),i.arc(a,o,2,0,7),i.fill()}}function xy(i,t,e,n){for(let s=0;s<e;s+=4+t()*5){let r=6+t()*18,a=(t()-.5)*7,o=["#6f9f33","#83b23c","#5d8a2a","#93bf47"][Math.floor(t()*4)];i.fillStyle=o,i.beginPath(),i.moveTo(s-3,n),i.quadraticCurveTo(s+a*.3,n-r*.5,s+a,n-r),i.quadraticCurveTo(s+a*.3+1,n-r*.4,s+3,n),i.closePath(),i.fill()}}function qf(i,t,e){let n=Yf(i),s=n.getContext("2d"),r=n.width,a=n.height,o=mr(t),l=Gl*Be,c=kl(he.wall_stone),h=l-.05*Be,d=a-h,u=c.width*d/c.height,m=u-ma*Be;if(e==="l"){let x=zl(c,u,d,!1,!0),g=r-u+o()*u*.2;for(s.drawImage(c,g,h,u,d),g-=m;g>-u;g-=m)s.drawImage(x,g,h)}else{let x=zl(c,u,d,!0,!1),g=-o()*u*.2;for(s.drawImage(c,g,h,u,d),g+=m;g<r;g+=m)s.drawImage(x,g,h)}for(let x=20+o()*60;x<r-10;x+=(.6+o()*.9)*Be)o()<.25?gy(s,o,x,a-.16*Be):Hl(s,o,x,a+3,(.22+o()*.18)*Be,.05);if(xy(s,o,r,a),e){let x=e==="l"?22:r-22;Hl(s,o,x,a+4,.6*Be,.03),Hl(s,o,x+(e==="l"?26:-26),a+2,.45*Be,.06)}return n}var Zf=.52;function _y(i){let t=Yf(ga,$f+.04),e=t.getContext("2d"),n=t.width,s=t.height,r=mr(i);e.drawImage(he.steps_stone,0,0,n,s);for(let a of[10,n-10])Hl(e,r,a,s+3,.3*Be,.05);return t}function Jf(i,t,e){let n=[],s=(o,l,c,h,d)=>{let u=t("steps",d+Kh,(l+c)/2,Wl+h,{shadow:0,order:.9,occ:!1});return u.useCanvas(o),u.sync(),n.push(u),u},r=e-ga/2,a=e+ga/2;return s(qf(r+.25-ss[0],3101,"l"),ss[0],r+.25,0,Gl),s(qf(ss[1]-(a-.25),3307,"r"),a-.25,ss[1],0,Gl),s(_y(3511),r,a,.002,$f+.04),n}var Ot=(i,t=1)=>(bn[i]&&bn[i].wh||1)*t,ba=[[-44,-10.9,-5.8,6.8],[-11,12,-6.4,7],[12,30,-3.4,4.6],[30,54,-5.6,7],[-2.5,-.3,6.5,9.8],[-11,11.5,9.65,19]],xa=-1.4,be={x:1.2,z:14.6,rx:6.2,rz:3},Mn=[2.3,3.7,10.4,13.5];function Qf(i){return 1+.07*Math.sin(3*i+1)+.045*Math.sin(5*i+2.2)}function tp(i,t){let e=(i-be.x)/be.rx,n=(t-be.z)/be.rz;return Math.hypot(e,n)/Qf(Math.atan2(n,e))}var Ri=30,ws=-12,ya=[];for(let i=0;i<2;i++)for(let t=0;t<3;t++)ya.push({x:3.6+t*2.1,z:-.7+i*2.3});var ct={start:[1.5,1.8],door:[-4.1,-6.2],mailbox:[-.4,-5.2],cauldron:[-8.6,-2.4],cat:[-2.3,-5.5],crowWait:[1.4,-3.6],crowEnter:[16,.6],sign:[10.6,1.2],fountain:[42,0],board:[39.6,-5.4],myStall:[47.6,4.4],roadEnd:[29.5,.6],woodSign:[-10.6,.1],fish:[3,13],pondSign:[-3.7,6]},$l=[[-16.6,-2.9],[-21.2,4.7],[-26.4,-3.5],[-31.2,4.3],[-37.4,-1.4]],tu=[[-19.2,0],[-24.6,-1.4],[-33.4,-.4],[-39.4,3.4],[-8.4,16.8]],ep=["moth","ladybug","moth","ladybug","ladybug"],Kf=[[-15.2,-4.6],[-23.4,-4.8],[-29.6,-2.2],[-35.2,-4.6],[-41.6,-4.2]],jf=[[-18.4,6],[-28.6,6.3],[-34.8,6.1],[-42.2,5.6]],xi={mira:[36,-3.3],juniper:[48,-3.3],oz:[36.6,4.4]};function ql(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function jh(i,t,e=0){return ba.some(([n,s,r,a])=>i>n-e&&i<s+e&&t>r-e&&t<a+e)}var gr=.5;function _a(i,t,e,n){let s=document.createElement("canvas");s.width=Math.round(i*e),s.height=Math.round(t*e);let r=s.getContext("2d");return n(r,s.width,s.height,e),s}function vy(i){let t=Mn[0]-.2,e=Mn[1]+.2,n=Mn[2]-.25,s=Mn[3]+.2,r=e-t,a=s-n,o=(t+e)/2,l=(n+s)/2,c=150,h=.045,d=ql(7319),u="#4a2a26",m=S=>{let R=176+S*26,U=116+S*20,F=64+S*12;return`rgb(${R|0},${U|0},${F|0})`},x=_a(r,a,c,(S,R,U,F)=>{S.fillStyle="#3a2218",S.fillRect(0,0,R,U);let k=Math.round(a/.28),D=U/k;for(let O=0;O<k;O++){let W=O*D+2,V=D-4,j=4+(d()-.5)*8,y=R-4+(d()-.5)*8,C=(d()-.5)*.35;S.fillStyle=m(C),S.beginPath(),S.roundRect(j,W,y-j,V,5),S.fill(),S.fillStyle="rgba(255,224,170,0.35)",S.fillRect(j+4,W+2,y-j-8,3),S.fillStyle="rgba(90,50,26,0.45)",S.fillRect(j+4,W+V-5,y-j-8,4),S.strokeStyle="rgba(110,64,34,0.45)",S.lineWidth=1.6;for(let A=0;A<3;A++){let N=W+V*(.28+A*.22)+(d()-.5)*4;S.beginPath(),S.moveTo(j+10+d()*30,N);for(let $=j+40;$<y-10;$+=30)S.lineTo($,N+Math.sin($*.05+A+O)*2.2);S.stroke()}d()<.35&&(S.fillStyle="rgba(96,56,30,0.6)",S.beginPath(),S.ellipse(j+(y-j)*(.3+d()*.4),W+V/2,7,3.5,0,0,7),S.fill());for(let A of[.17,.83])S.fillStyle="#3d2419",S.beginPath(),S.arc(R*A,W+V/2,3.2,0,7),S.fill(),S.fillStyle="rgba(255,230,190,0.5)",S.beginPath(),S.arc(R*A-1,W+V/2-1,1.2,0,7),S.fill()}S.strokeStyle=u,S.lineWidth=5,S.strokeRect(2.5,2.5,R-5,U-5)}),g=[],p=_a(r+.9,a+.9,40,(S,R,U)=>{S.filter="blur(7px)",S.fillStyle="rgba(4,18,24,0.85)",S.beginPath(),S.roundRect(.45*40,.45*40,R-.9*40,U-.9*40,.3*40),S.fill(),S.filter="none"});g.push(i.decal(p,o,l+.32,r+.9,a+.9,{y:.01,order:.4,alpha:.7}));let f=.07,E=.17,P=S=>_a(S,gr+.42,c,(R,U,F,k)=>{let D=gr*k,O=f*k,W=(f+E)*k;R.fillStyle="rgba(10,26,28,0.88)",R.fillRect(0,W,U,D-W);let V=R.createLinearGradient(0,W,0,D);V.addColorStop(0,"rgba(0,0,0,0.35)"),V.addColorStop(1,"rgba(30,70,70,0.25)"),R.fillStyle=V,R.fillRect(0,W,U,D-W),R.fillStyle="#a8693a",R.fillRect(0,0,U,O),R.fillStyle="rgba(255,224,170,0.45)",R.fillRect(0,2,U,3),R.strokeStyle="rgba(60,30,16,0.6)",R.lineWidth=2;for(let y=.28*k;y<U;y+=.28*k)R.beginPath(),R.moveTo(y,0),R.lineTo(y,O),R.stroke();R.fillStyle="#704226",R.fillRect(0,O,U,W-O),R.fillStyle="rgba(255,210,150,0.18)",R.fillRect(0,O+2,U,2),R.strokeStyle="rgba(40,20,10,0.4)",R.lineWidth=1.5;{let y=(O+W)/2;R.beginPath(),R.moveTo(6,y);for(let C=6;C<U-6;C+=24)R.lineTo(C,y+Math.sin(C*.04)*1.6);R.stroke()}R.strokeStyle=u,R.lineWidth=4,R.beginPath(),R.moveTo(0,2),R.lineTo(U,2),R.moveTo(0,W),R.lineTo(U,W),R.stroke();let j=R.createLinearGradient(0,D,0,F);j.addColorStop(0,"rgba(8,24,28,0.5)"),j.addColorStop(1,"rgba(8,24,28,0)"),R.fillStyle=j,R.fillRect(0,D,U,F-D),R.strokeStyle="rgba(214,240,228,0.85)",R.lineWidth=3,R.beginPath();for(let y=0;y<=U;y+=8){let C=D+2+Math.sin(y*.09)*1.6;y?R.lineTo(y,C):R.moveTo(y,C)}R.stroke()}),M=(S,R,U,F,k,D)=>{let O=i.decal(S,U,F,R,gr+.42,{y:h-(gr+.42)/2,order:D});return O.rotation.set(0,k,0),O.material.depthTest=!1,g.push(O),O};M(P(r),r,o,s,0,.55),M(P(a),a,t,l,-Math.PI/2,.55),M(P(a),a,e,l,Math.PI/2,.55),g.push(i.decal(x,o,l,r,a,{y:h,order:.5}));let w=.2,T=gr+.3,L=.24,v=_a(L,w+T,c,(S,R,U,F)=>{let k=.1*F,D=(w+gr)*F,O=S.createLinearGradient(0,0,R,0);O.addColorStop(0,"#5a341e"),O.addColorStop(.3,"#b07440"),O.addColorStop(.55,"#9a6236"),O.addColorStop(1,"#4a2a18"),S.fillStyle=O,S.fillRect(3,k/2,R-6,U-k/2),S.strokeStyle=u,S.lineWidth=4,S.beginPath(),S.moveTo(3,k/2),S.lineTo(3,D),S.moveTo(R-3,k/2),S.lineTo(R-3,D),S.stroke(),S.fillStyle="#d9a46a",S.beginPath(),S.ellipse(R/2,k/2,R/2-3,k/2-1,0,0,7),S.fill(),S.stroke(),S.strokeStyle="rgba(120,70,36,0.7)",S.lineWidth=1.5,S.beginPath(),S.ellipse(R/2,k/2,R*.24,k*.24,0,0,7),S.stroke();for(let j of[.62,.78]){let y=w*F*j+k*.3;S.fillStyle="#d8b679",S.fillRect(2,y,R-4,.045*F),S.strokeStyle="rgba(90,60,30,0.6)",S.lineWidth=1.5,S.strokeRect(2,y,R-4,.045*F)}S.globalCompositeOperation="source-atop";let W=S.createLinearGradient(0,D,0,U);W.addColorStop(0,"rgba(24,70,74,0.55)"),W.addColorStop(1,"rgba(24,70,74,1)"),S.fillStyle=W,S.fillRect(0,D,R,U-D),S.globalCompositeOperation="destination-out";let V=S.createLinearGradient(0,D,0,U);V.addColorStop(0,"rgba(0,0,0,0.25)"),V.addColorStop(1,"rgba(0,0,0,1)"),S.fillStyle=V,S.fillRect(0,D,R,U-D),S.globalCompositeOperation="source-over",S.strokeStyle="rgba(214,240,228,0.85)",S.lineWidth=3,S.beginPath(),S.ellipse(R/2,D+2,R/2,5,0,0,Math.PI),S.stroke()});for(let[S,R,U]of[[t+.12,s+.02,!0],[e-.12,s+.02,!0],[t+.12,n+.15,!1],[e-.12,n+.15,!1]])if(U){let F=i.decal(v,S,R,L,w+T,{y:h+w-(w+T)/2,order:.6});F.rotation.set(0,0,0),F.material.depthTest=!1,g.push(F)}else{let F=_a(L,w+.02,c,(D,O,W)=>D.drawImage(v,0,0,O,W,0,0,O,W)),k=i.decal(F,S,R,L,w+.02,{y:h+(w+.02)/2-.02,order:.6});k.rotation.set(0,0,0),k.material.depthTest=!1,g.push(k)}return g}function np(i){let t={colliders:[],occluders:[],props:{},tick:[]},e=ql(20261031),n=(y,C,A,N,$={})=>{let at=i.sprite(y,C,{x:A,z:N,shadow:$.shadow??C*.5,...$});return $.col&&t.colliders.push({x:A+($.colX||0),z:N-($.colZ??.15),r:$.col}),$.occ!==!1&&C>2.2&&t.occluders.push(at),at},s=(y,C,A,N=.06)=>{let $=(1-A)*y.h;return[y.x+(C-.5)*y.w*(y.flip?-1:1),$*Math.cos(mn),y.z-$*Math.sin(mn)+N]},r=(y,C,A,N)=>t.colliders.push({rect:[y,C,A,N]}),a=n("cottage",Ot("cottage"),ct.door[0]+.11*(bn.cottage?bn.cottage.ww:6.7),-6.7,{shadow:0,occ:!0});r(a.x-a.w*.45,a.x+a.w*.45,-10,-6.5),t.props.cottage=a;for(let[y,C,A]of[[.35,.4,1.5],[.7,.71,1.5],[.39,.74,1.1]]){let N=s(a,y,C);i.addGlow(N[0],N[1],N[2],A,"#ffc477")}t.chimney=s(a,.78,.03),t.props.cauldron=n("cauldron_out",Ot("cauldron_out"),ct.cauldron[0],ct.cauldron[1],{col:.8,shadow:1.6}),i.addGlow(ct.cauldron[0],.35,ct.cauldron[1]+.1,2.4,"#ff9a4a",{always:.55,flicker:.12}),t.props.mailbox=n("mailbox",Ot("mailbox"),ct.mailbox[0],ct.mailbox[1],{col:.35,shadow:.7});let o=n("lantern",Ot("lantern"),1.2,-5.6,{col:.3,shadow:.6});{let y=s(o,.71,.42);i.addGlow(y[0],y[1],y[2],2.6,"#ffc066",{always:.15})}n("barrel",Ot("barrel"),.4,-6.3,{col:.5,shadow:1}),n("basket",Ot("basket"),-.9,-6.4,{shadow:.6}),n("bench",Ot("bench"),-7.4,3.6,{col:.6,colX:0,shadow:1.6}),n("wcan",Ot("wcan"),9.3,-1.5,{shadow:.5}),n("basket",Ot("basket"),2.2,-2.2,{shadow:.55}),t.props.sign=n("signpost",Ot("signpost"),ct.sign[0],ct.sign[1],{col:.3,shadow:.9}),t.props.woodSign=n("signpost",Ot("signpost",.92),ct.woodSign[0],ct.woodSign[1],{col:.3,shadow:.9,flip:!0});let l=n("lantern",Ot("lantern"),12.6,-3.4,{col:.3,shadow:.6});{let y=s(l,.71,.42);i.addGlow(y[0],y[1],y[2],2.6,"#ffc066",{always:.15})}t.props.fountain=n("fountain",Ot("fountain"),ct.fountain[0],ct.fountain[1],{col:1.75,colZ:.9,shadow:3.4}),t.props.board=n("board",Ot("board"),ct.board[0],ct.board[1],{col:.7,shadow:1.6});let c={};for(let[y,C,A]of[["mira","stall_red",xi.mira],["juniper","stall_green",xi.juniper],["oz","stall_blue",xi.oz]]){let N=n(C,Ot(C),A[0],A[1],{shadow:2.8});r(A[0]-1.45,A[0]+1.45,A[1]-1.6,A[1]-.25),c[y]=N}t.props.stalls=c,t.props.myStall=n("stall_mine",Ot("stall_mine"),ct.myStall[0],ct.myStall[1],{shadow:2.8}),r(ct.myStall[0]-1.4,ct.myStall[0]+1.4,ct.myStall[1]-1.3,ct.myStall[1]-.25);let h=[["house_a",32.2,-7.6,!1],["house_b",38.2,-8.4,!0],["house_a",46.2,-8.4,!0],["house_b",52,-7.6,!1]];for(let[y,C,A,N]of h){let $=n(y,Ot(y),C,A,{shadow:0,flip:N});r(C-2.1,C+2.1,A-3,A-.2);for(let[at,Q]of y==="house_a"?[[.4,.52],[.38,.36]]:[[.3,.52],[.62,.52]]){let ut=s($,at,Q);i.addGlow(ut[0],ut[1],ut[2],2.2,"#ffb866",{flicker:.04})}}for(let y of[33.6,50.4]){let C=n("lamp",Ot("lamp"),y,2.6,{col:.25,shadow:.6}),A=s(C,.5,.2);i.addGlow(A[0],A[1],A[2],3,"#ffcf7a",{always:.12})}n("barrel",Ot("barrel"),30.8,-4.8,{col:.5,shadow:1}),n("bench",Ot("bench"),44.6,6.4,{col:.6,shadow:1.6}),n("bench",Ot("bench"),39.4,6.4,{col:.6,shadow:1.6,flip:!0}),n("basket",Ot("basket"),49.9,-2.4,{shadow:.55}),n("basket",Ot("basket"),34.4,-2.5,{shadow:.55}),n("wcan",Ot("wcan"),53,-4.9,{shadow:.5});let d=[],u=["oak","pine","birch","oak","pine"],m=["tallwood","pine","bluewood","oak","tallwood","pine"],x=(y,C,A={})=>{if(!Bl(y,C,.8))return null;let N=A.kinds||(y<ws?m:u),$=N[Math.floor(e()*N.length)],at=Ot($)*(.85+e()*.3)*(A.scale||1),Q=n(A.kind||$,A.kind&&A.h||at,y,C,{sway:.05+e()*.05,flip:e()<.5,shadow:at*.32,col:A.noCol?0:.45,haze:A.haze||0});return d.push([y,C,at]),Q};for(let y=-47;y<30;y+=1.6+e()*1.4){if(y>a.x-a.w*.5&&y<a.x+a.w*.5){x(y,-11.2-e()*1.4,{haze:.08});continue}x(y,-8.2-e()*1.2),e()<.75&&x(y+e()*1.2,-10.8-e()*1.6,{haze:.12})}for(let y=28;y<58;y+=1.7+e()*1.4)x(y,-11.6-e()*1.6,{haze:.15});for(let y=12.5;y<29.5;y+=1.8+e()*1.6)x(y,-4.8-e()*1.6),e()<.6&&x(y+.8,-6.8-e()*1.4,{haze:.06});for(let y=-8;y<4;y+=1.4+e()*1.1)y>-.4||x(-12.2-e()*.8,y);for(let y=4.4;y<7;y+=1.1+e()*.5)n(e()<.5?"bush":"bush_flower",Ot("bush",.95+e()*.25),-12.4-e()*.6,y,{sway:.05,flip:e()<.5,shadow:1.2});r(-13.2,-11.6,-12,.2),r(-13.2,-11.6,3.6,7.2);for(let y=-8;y<10;y+=1.5+e()*1.2)x(-45.6-e()*1.2,y),x(-48.6-e()*2,y+e(),{haze:.12});for(let[y,C]of Kf)x(y,C),x(y+1.3+e()*.6,C-.9,{kinds:["bluewood","tallwood"],scale:.8}),e()<.6&&x(y-1.4-e()*.5,C-.6,{kinds:["bluewood","pine"],scale:.7});for(let[y,C]of jf)x(y,C,{kinds:["bluewood"],scale:.8}),n("bush",Ot("bush",1.1),y-1.1,C+.4,{col:.55,sway:.05,shadow:1.3}),n(e()<.5?"bush_flower":"fern",Ot("bush_flower"),y+1,C+.5,{sway:.06,flip:!0,shadow:1});for(let y=-8;y<10;y+=1.6+e()*1.3)x(55.6+e()*1.6,y),x(58.5+e()*2.5,y+e(),{haze:.1});x(-9.8,-.8,{kind:"ytree",h:Ot("ytree")}),x(10.4,-3.8,{kind:"birch",h:Ot("birch")}),t.props.steps=Jf(i,n,xa);let g=n("lantern",.72,xa-ga/2+Zf/2,Vl-.36/Math.sin(mn),{shadow:0,col:.22,colZ:-.1});{let y=he.lantern,C=document.createElement("canvas"),A=78/164,N=92/397,$=214/397;C.width=Math.round(y.width*(1-A)),C.height=Math.round(y.height*($-N)),C.getContext("2d").drawImage(y,y.width*A,y.height*N,C.width,C.height,0,0,C.width,C.height),g.useCanvas(C),g.sync()}{let y=s(g,.5,.55);i.addGlow(y[0],y[1],y[2],1.8,"#ffc066",{always:.12,flicker:.05})}t.props.pondSign=n("signpost",Ot("signpost",.85),ct.pondSign[0],ct.pondSign[1],{col:.3,shadow:.9}),t.props.willow=n("willow",Ot("willow"),-7.4,11,{col:.55,sway:.08,shadow:2.4}),d.push([-7.4,11,Ot("willow")]);for(let y=9.9;y<19.4;y+=1.6+e()*1.1)x(-12.3-e()*.7,y,{kinds:["oak","birch","pine"],scale:.9}),x(12.4+e()*.8,y+e()*.6,{kinds:["oak","pine","birch"],scale:.9});let p=(y,C=1)=>{let A=Qf(y)*C;return[be.x+Math.cos(y)*be.rx*A,be.z+Math.sin(y)*be.rz*A]};for(let[y,C,A,N]of[[3,"reeds",1,{}],[3.3,"reeds",.85,{flip:!0}],[3.55,"iris",1,{}],[2.6,"rock_pond",1,{col:.4}],[.35,"reeds",1.05,{flip:!0}],[.1,"iris",1,{flip:!0}],[-.35,"rock_pond",.85,{col:.4,flip:!0}],[1.95,"reeds",.8,{}],[2.25,"iris",.9,{flip:!0}],[1.05,"rock_pond",.7,{col:.35}],[-2.3,"iris",.8,{}],[-2.75,"reeds",.75,{flip:!0}]]){let[$,at]=p(y,1.06);n(C,Ot(C,A),$,at,{sway:C==="rock_pond"?0:.06,shadow:Ot(C,A)*.6,...N})}t.props.boat=n("boat",Ot("boat",1.1),be.x-3.2,be.z+1.7,{shadow:0,sway:0}),n("stepstones",Ot("stepstones",1.1),-5.4,10.35,{shadow:0,order:1}),n("stepstones",Ot("stepstones",1),-3.6,18.2,{shadow:0,order:1,flip:!0});for(let[y,C,A]of[[-9.6,10.1,"fern"],[9.6,10,"bush_flower"],[-12.9,9.95,"bush"],[13.1,9.9,"bush_flower"],[10.4,17.6,"fern"],[-10.2,18.4,"bush"],[6.2,18.6,"flowers"],[-6.4,18.8,"grass_tuft"],[8.2,10.2,"flowers"],[-4,10,"grass_tuft"],[7.9,16.4,"grass_tuft"]])n(A,Ot(A)*(.9+e()*.2),y,C,{sway:A==="flowers"?.04:.06,flip:e()<.5,shadow:.6});t.props.dock=vy(i),t.props.bucket=n("mp_bucket",.48,Mn[1]-.2,Mn[3]-.55,{shadow:.4});let f=[[-2.6,13.3,.9,.4],[-1.4,16,.75,2.2],[4.9,15.9,.85,4.1],[5.9,13.7,.6,1],[.4,15.3,.55,5.2]];t.pads=f.map(([y,C,A,N])=>({m:i.decal("mp_lilypad",y,C,A,A,{rot:N,y:.035}),x:y,z:C,r:N,ph:e()*6})),n("lily",Ot("lily",1.1),be.x+5.2,be.z+1.6,{shadow:0,sway:.02});let E=p(.5,1.08),P=[f[2][0],f[2][1]-.05],M=n("frog",Ot("frog",.9),E[0],E[1],{shadow:.35});t.props.frog=M;let w=4+e()*4,T=0,L=-1,v=[["mp_minnow",.9,.42],["mp_bluegill",.8,.65],["mp_carp",1.05,.62],["mp_minnow",.7,.33]].map(([y,C,A],N)=>({m:i.decal(y,be.x,be.z,C,A,{dark:1,alpha:.32,y:.025}),ph:N*1.7,sp:.13+N*.03,a:.45+N%2*.18,b:.42+(N+1)%2*.2}));t.fishShadows=v,t.tick.push((y,C)=>{for(let A of t.pads)A.m.rotation.z=A.r+Math.sin(C*.4+A.ph)*.08,A.m.position.x=A.x+Math.sin(C*.3+A.ph)*.05;for(let A of v){let N=C*A.sp+A.ph,$=be.x+Math.sin(N)*be.rx*A.a+Math.sin(N*2.3)*.5,at=be.z+Math.sin(N*1.6+A.ph)*be.rz*A.b,Q=$-A.m.position.x,ut=at-A.m.position.z;if(Q*Q+ut*ut>1e-7){let vt=Math.atan2(-ut,Q),Nt=A.m.rotation.z;A.m.rotation.z=Nt+Math.atan2(Math.sin(vt-Nt),Math.cos(vt-Nt))*Math.min(1,y*4)}A.m.position.set($,.025,at);let X=Math.max(0,Mn[0]-.5-$,$-Mn[1]-.5),et=Math.max(0,Mn[2]-.4-at,at-Mn[3]-.9);A.m.material.uniforms.uAlpha.value=.32*Math.min(1,Math.hypot(X,et)/.6)}if(w-=y,L<0&&w<=0&&(L=0),L>=0){L+=y/.55;let A=T?P:E,N=T?E:P,$=Math.min(1,L);if(M.flip=N[0]<A[0],M.setPos(A[0]+(N[0]-A[0])*$,A[1]+(N[1]-A[1])*$,Math.sin($*Math.PI)*.7),$>=1){L=-1,T=1-T,w=5+e()*6;for(let at=0;at<8;at++){let Q=at/8*6.28;i.soft.add({x:N[0]+Math.cos(Q)*.2,y:.08,z:N[1]+Math.sin(Q)*.1,vx:Math.cos(Q)*.6,vy:.5,vz:Math.sin(Q)*.3,g:2.5,life:.5,s:3,c:"#e6fbff",a:.8,k:0})}}}}),t.trees=d,t.props.berries=$l.map(([y,C],A)=>n("berry_full",Ot("berry_full",1.05),y,C,{col:.6,shadow:1.5,flip:A%2===1,sway:.03}));let S=[["bush",Ot("bush"),.55],["bush_flower",Ot("bush_flower"),.55],["fern",Ot("fern"),0],["boulder",Ot("boulder"),.5],["stump",Ot("stump"),.45],["flowers",Ot("flowers"),0],["pebbles",Ot("pebbles"),0],["grass_tuft",Ot("grass_tuft"),0]],R=(y,C,A)=>{for(let N of ya)if(Math.abs(y-N.x)<1.3+A&&Math.abs(C-N.z)<1.3+A)return!1;for(let N of["door","mailbox","cauldron","cat","crowWait","sign","board","myStall","fountain"]){let $=ct[N];if(Math.hypot(y-$[0],C-$[1])<2.2+A)return!1}for(let N of Object.values(xi))if(Math.hypot(y-N[0],C-N[1])<2.6)return!1;return!0},U=0;for(let y=0;y<150&&U<3e3;U++){let C=-12+e()*68,A=-7+e()*16,[N,$,at]=S[Math.floor(e()*S.length)],Q=jh(C,A,-.4);Q&&(at||$>1)||R(C,A,Q?.3:0)&&(C>30&&C<54&&A>-6&&A<7&&Math.hypot(C-42,A-.5)<9.5||Math.abs(A-Qh(C))<1.3&&C>-2&&C<33||C<0&&Math.abs(A-Xl(C))<1.3||Math.hypot(C-ct.woodSign[0],A-ct.woodSign[1])<1.6||A>6.2&&C>-14.5&&C<14.5||Bl(C,A,.6)&&(Math.abs(C-xa)<2&&A>3.5||(n(N,$*(.85+e()*.3),C,A,{col:Q?0:at,sway:N==="fern"||N==="grass_tuft"||N.startsWith("bush")?.06:0,flip:e()<.5,shadow:$*.7}),y++)))}for(let y=0,C=0;y<70&&C<2e3;C++){let A=-10+e()*64,N=-6+e()*13;if(!jh(A,N)||!R(A,N,0)||Math.abs(N-Qh(A))<1.2&&A>-2&&A<33||A<0&&Math.abs(N-Xl(A))<1.1||A>31&&Math.hypot(A-42,N-.5)<9||N>6.4&&A<12.5)continue;let $=e()<.6?"grass_tuft":e()<.8?"pebbles":"mushrooms";n($,Ot($)*(.8+e()*.4),A,N,{sway:$==="grass_tuft"?.07:0,flip:e()<.5,shadow:.4}),y++}let F=(y,C,A)=>{for(let[N,$]of $l)if(Math.hypot(y-N,C-$)<1.5+A)return!1;for(let[N,$]of tu)if(Math.hypot(y-N,C-$)<1.4+A)return!1;for(let[N,$]of[...Kf,...jf])if(Math.hypot(y-N,C-$)<1.4)return!1;return Math.hypot(y-ct.woodSign[0],C-ct.woodSign[1])>1.6},D=[["fern",0,.06,4],["tallgrass",0,.07,3],["flowers",0,.04,2],["mushrooms",0,0,1],["grass_tuft",0,.07,3],["stump",.45,0,1],["log",.6,0,1],["boulder",.5,0,1],["bush",.55,.05,2]].flatMap(y=>Array(y[3]).fill(y));for(let y=0,C=0;y<95&&C<4e3;C++){let A=-45+e()*33.5,N=-7.2+e()*15,[$,at,Q]=D[Math.floor(e()*D.length)],ut=jh(A,N,-.3);if(Math.abs(N-Xl(A))<(at?2.1:1)||!F(A,N,at?.6:0)||!Bl(A,N,.5)||ut&&at&&e()<.7)continue;let et=Ot($)*(.85+e()*.35);n($,et,A,N,{col:at,sway:Q,flip:e()<.5,shadow:et*.7}),y++}let O=new Ti;for(let y=0;y<7;y++){let C=new fr(i,"backdrop",8.5,{x:-60+y*30.5,z:0,haze:.35,order:2});i.scene.remove(C.mesh),O.add(C.mesh)}for(let y=0;y<8;y++){let C=new fr(i,"backdrop",7,{x:-55+y*25.5,z:2.5,haze:.18,order:2,flip:!0});i.scene.remove(C.mesh),O.add(C.mesh)}O.position.z=-16,i.scene.add(O),t.back=O,i.buildGround([-60,-35,150,65],(y,C)=>{let A=(Q,ut,X,et,vt=1)=>{y.fillStyle=et,y.globalAlpha=vt,y.beginPath(),y.ellipse(C.X(Q),C.Z(ut),X*C.s,X*C.s*.9,0,0,7),y.fill(),y.globalAlpha=1},N=ql(7);y.globalCompositeOperation="lighter";let $=[];for(let Q=-6.2;Q<4.1;Q+=.25)$.push([-4.1+(Q+6.2)*.45+Math.sin(Q)*.3,Q]);for(let Q=0;Q<33;Q+=.25)$.push([Q,Qh(Q)]);for(let[Q,ut]of $)A(Q+(N()-.5)*.4,ut+(N()-.5)*.4,.95+N()*.35,"rgb(150,0,0)",.55);for(let Q=0;Q>-46;Q-=.25)A(Q+(N()-.5)*.4,Xl(Q)+(N()-.5)*.5,.6+N()*.3,"rgb(118,0,0)",Q<-12?.42:.5);for(let Q=0;Q<=1;Q+=.04)A(xa+Q*4.4,9.9+Math.sin(Q*3)*.25,.55+N()*.25,"rgb(118,0,0)",.5);for(let Q=4.2;Q<Vl+.2;Q+=.25)A(xa+(N()-.5)*.3,Q,.6,"rgb(110,0,0)",.45);for(let Q=0;Q<=1;Q+=.05)A(-3-Q*5.4,-2.2+Math.sin(Q*3)*.3,.75+N()*.3,"rgb(120,0,0)",.5);for(let Q of ya)for(let ut=0;ut<6;ut++)A(Q.x+(N()-.5)*.6,Q.z+(N()-.5)*.5,.75+N()*.2,"rgb(0,0,150)",.6);for(let Q=0;Q<340;Q++){let ut=N()*6.28,X=Math.sqrt(N())*9;A(42+Math.cos(ut)*X*1.25,.5+Math.sin(ut)*X*.7,1+N()*.5,"rgb(0,140,0)",.6)}for(let Q=30;Q<55;Q+=.6)A(Q,-5+(N()-.5)*.8,1.1,"rgb(0,120,0)",.5);y.globalCompositeOperation="source-over";let at=document.createElement("canvas");at.width=y.canvas.width,at.height=y.canvas.height,at.getContext("2d").drawImage(y.canvas,0,0),y.filter="blur(2px)",y.drawImage(at,0,0),y.filter="none"},(y,C)=>{for(let[$,at,Q]of d){let ut=y.createRadialGradient(C.X($),C.Z(at-.6),0,C.X($),C.Z(at-.6),Q*.55*C.s);ut.addColorStop(0,"rgba(255,0,0,0.55)"),ut.addColorStop(1,"rgba(255,0,0,0)"),y.fillStyle=ut,y.beginPath(),y.arc(C.X($),C.Z(at-.6),Q*.55*C.s,0,7),y.fill()}let A=($,at,Q,ut,X=.6)=>{let et=y.createLinearGradient(C.X($),C.Z(at),C.X(Q),C.Z(ut));et.addColorStop(0,`rgba(255,0,0,${X})`),et.addColorStop(1,"rgba(255,0,0,0)"),y.fillStyle=et,y.fillRect(0,0,y.canvas.width,y.canvas.height)};y.globalCompositeOperation="lighten",A(0,-13,0,-6.5),A(-14.5,0,-11.5,0,.3),A(-50,0,-42,0),A(58,0,53,0);{let $=Wl-.1,at=Wl+1.1,Q=y.createLinearGradient(0,C.Z($),0,C.Z(at));Q.addColorStop(0,"rgba(255,0,0,0.75)"),Q.addColorStop(1,"rgba(255,0,0,0)"),y.fillStyle=Q,y.fillRect(C.X(ss[0]),C.Z($),C.X(ss[1])-C.X(ss[0]),C.Z(at)-C.Z($))}y.fillStyle="rgba(255,0,0,0.42)",y.fillRect(C.X(-60),0,C.X(-12.5)-C.X(-60),y.canvas.height);let N=ql(11);for(let $=0;$<90;$++){let at=-46+N()*34,Q=-7+N()*16,ut=(1.2+N()*2.2)*C.s,X=y.createRadialGradient(C.X(at),C.Z(Q),0,C.X(at),C.Z(Q),ut);X.addColorStop(0,"rgba(0,255,0,0.7)"),X.addColorStop(1,"rgba(0,255,0,0)"),y.fillStyle=X,y.beginPath(),y.arc(C.X(at),C.Z(Q),ut,0,7),y.fill()}for(let $=0;$<70;$++){let at=-45+N()*33,Q=-6.5+N()*14,ut=(.4+N()*.9)*C.s,X=y.createRadialGradient(C.X(at),C.Z(Q),0,C.X(at),C.Z(Q),ut);X.addColorStop(0,"rgba(0,0,255,0.9)"),X.addColorStop(.6,"rgba(0,0,255,0.5)"),X.addColorStop(1,"rgba(0,0,255,0)"),y.fillStyle=X,y.beginPath(),y.ellipse(C.X(at),C.Z(Q),ut*1.3,ut,.5,0,7),y.fill()}},(y,C)=>{let A=y.canvas.width,N=y.canvas.height;y.fillStyle="#f00",y.fillRect(0,0,A,N),y.fillStyle="#000";for(let[Vt,Wt]of ba)for(let Rt=Vt-1;Rt<Wt+1;Rt+=.25)y.fillRect(C.X(Rt),0,C.X(Rt+.25)-C.X(Rt)+1,C.Z(Jh(Rt)+.6));let $=document.createElement("canvas");$.width=A,$.height=N,$.getContext("2d").drawImage(y.canvas,0,0),y.clearRect(0,0,A,N),y.fillStyle="#000",y.fillRect(0,0,A,N),y.filter="blur(5px)",y.drawImage($,0,0),y.filter="none";let at=Math.floor(C.X(be.x-be.rx*1.4)),Q=Math.ceil(C.X(be.x+be.rx*1.4)),ut=Math.floor(C.Z(be.z-be.rz*1.5)),X=Math.ceil(C.Z(be.z+be.rz*1.5)),et=y.getImageData(at,ut,Q-at,X-ut),vt=et.data,Nt=C.X(0),St=C.Z(0);for(let Vt=0;Vt<X-ut;Vt++)for(let Wt=0;Wt<Q-at;Wt++){let Rt=(at+Wt+.5-Nt)/C.s,Yt=(ut+Vt+.5-St)/C.s,ne=tp(Rt,Yt),qt=ne>1?.46*Math.max(0,1-(ne-1)/.22):Math.min(1,.46+(1-ne)*.85);vt[(Vt*(Q-at)+Wt)*4+1]=Math.round(qt*255)}y.putImageData(et,at,ut),Wf(y,C)}),t.tick.push(Xf(i));let W=(()=>{let y=document.createElement("canvas");y.width=64,y.height=256;let C=y.getContext("2d"),A=C.createLinearGradient(0,0,0,256);A.addColorStop(0,"rgba(255,240,200,0)"),A.addColorStop(.3,"rgba(255,240,200,0.9)"),A.addColorStop(1,"rgba(255,240,200,0)"),C.fillStyle=A,C.fillRect(0,0,64,256);let N=C.createLinearGradient(0,0,64,0);return N.addColorStop(0,"rgba(0,0,0,1)"),N.addColorStop(.5,"rgba(0,0,0,0)"),N.addColorStop(1,"rgba(0,0,0,1)"),C.globalCompositeOperation="destination-out",C.fillStyle=N,C.fillRect(0,0,64,256),new An(y)})(),V=[];for(let[y,C,A]of[[-1,-3,2.2],[6,-2,3],[21,-1,2.6],[40,-2,3.2],[47,1,2],[-19,0,2.4],[-27.5,1.5,3],[-38,-.5,2.2]]){let N=new Pe(new rn(A,11),new fi({map:W,transparent:!0,depthWrite:!1,blending:Qi,opacity:.2}));N.position.set(y,4,C),N.rotation.set(-mn,0,-.42),N.renderOrder=4,i.scene.add(N),V.push({m:N,ph:e()*6})}t.tick.push((y,C)=>{for(let A of V)A.m.material.opacity=(1-i.night)*(.13+.05*Math.sin(C*.5+A.ph))});let j=0;return t.tick.push((y,C)=>{if(j+=y,j<.05)return;j=0;let A=i.target.x,N=i.target.z,[$,at]=ct.cauldron;Math.abs(A-$)<22&&e()<.5&&i.glow.add({x:$+(e()-.5)*.7,y:1.05,z:at+.1,vx:0,vy:.5+e()*.4,vz:0,wander:.6,ph:e()*6,life:1.4,s:3+e()*3,c:e()<.5?"#c79bff":"#8fe0a8",a:.9,k:0}),Math.abs(A-42)<22&&e()<.6&&i.glow.add({x:42+(e()-.5)*1.2,y:2+e()*.6,z:-.4,vx:(e()-.5)*.8,vy:.6,vz:0,g:3,life:.8,s:3+e()*2,c:"#cfefff",a:.8,k:1}),t.chimney&&Math.abs(A-t.chimney[0])<24&&e()<.22&&i.soft.add({x:t.chimney[0]+(e()-.5)*.2,y:t.chimney[1]+.1,z:t.chimney[2],vx:.18,vy:.45,vz:0,wander:.25,ph:e()*6,fadeIn:.4,life:3.4,s:7+e()*5,grow:1.6,c:"#efe9df",a:.5,k:0,fadePow:2});let Q=i.night;if(e()<.25+Q*.5){let ut=A+(e()-.5)*24,X=N+(e()-.5)*12;Q>.4?i.glow.add({x:ut,y:.4+e()*2,z:X,vx:0,vy:0,vz:0,wander:1.2,ph:e()*6,blink:3+e()*3,fadeIn:1,life:5+e()*3,s:5+e()*4,c:"#d8ff8a",a:.95,k:0,fadePow:2}):i.soft.add({x:ut,y:.5+e()*3,z:X,vx:.1,vy:.02,vz:0,wander:.3,ph:e()*6,fadeIn:1,life:5,s:2+e()*2,c:"#fff8dc",a:.6,k:0,fadePow:2})}e()<.08&&i.soft.add({x:A+(e()-.5)*22,y:7+e()*2,z:N-3+e()*6,vx:.5,vy:-.7,vz:0,wander:2,ph:e()*6,life:9,s:5+e()*3,c:e()<.5?"#8fae4a":"#d6a84a",a:.95,g:0,fadePow:6})}),t}function Qh(i){if(i<9)return 4.1+Math.sin(i*.35)*.35;if(i<15){let t=(i-9)/6;return 4.1+(.6-4.1)*(t*t*(3-2*t))}return .6+Math.sin(i*.4)*.5}function Xl(i){let t=1.9+Math.sin(i*.28)*1.1;if(i<=-11)return t;let e=Math.min(1,(i+11)/11),n=e*e*(3-2*e);return t+(4-t)*n}function va(i,t,e){let n=i.maskCanvas;if(!n)return"grass";va.data||(va.data=n.getContext("2d").getImageData(0,0,n.width,n.height).data);let s=Math.round((t+60)*6),a=(Math.round((e+35)*6)*n.width+s)*4,o=va.data;return o[a+1]>110?"stone":o[a]>100||o[a+2]>100?"dirt":"grass"}function yy(i,t){return i>Mn[0]&&i<Mn[1]&&t>Mn[2]-.6&&t<Mn[3]}function eu(i,t,e,n=.32){if(!ba.some(([s,r,a,o])=>t>s&&t<r&&e>a&&e<o)||e>9&&!yy(t,e)&&tp(t,e)<1+n/be.rz*.6)return!0;for(let s of i.colliders)if(s.rect){let[r,a,o,l]=s.rect;if(t>r-n&&t<a+n&&e>o-n&&e<l+n)return!0}else if(s.r&&(t-s.x)**2+((e-s.z)*1.3)**2<(s.r+n)**2)return!0;return!1}var by={stall_red:[.12,.9,.655,.6],stall_green:[.12,.9,.655,.6],stall_blue:[.12,.9,.655,.6],stall_mine:[.14,.88,.585,.53]};function nu(i,t,e){let n=e.join(",");if(i.goodsKey===n)return;i.goodsKey=n;let s=he[t],r=2,a=i.goodsC;a||(a=i.goodsC=document.createElement("canvas"),a.width=s.width*r,a.height=s.height*r,i.useCanvas(a));let o=a.getContext("2d"),l=a.width,c=a.height;o.clearRect(0,0,l,c),o.drawImage(s,0,0,l,c);let[h,d,u,m]=by[t],x=Math.min(e.length,7),g=Math.max(x,4),p=(d-h)/g,f=h+(d-h-p*x)/2+p/2,E=[];for(let P=0;P<x;P++){let M=x>3&&P%2===1,w=Math.sin(P*12.9898+n.length)*.5;E.push({name:e[P],u:f+p*P+w*p*.12,v:M?m:u,s:(M?.19:.21)*c,rot:w*.12})}E.sort((P,M)=>P.v-M.v);for(let P of E){let M=he[P.name];if(!M)continue;let w=P.u*l,T=P.v*c,L=P.s,v=L*M.width/M.height;o.save(),o.fillStyle="rgba(58,30,16,0.32)",o.beginPath(),o.ellipse(w+L*.04,T-L*.02,v*.4,L*.08,0,0,Math.PI*2),o.fill(),o.translate(w,T),o.rotate(P.rot),o.drawImage(M,-v/2,-L*.94,v,L),o.restore()}i.refresh()}var su="brew-a-witch-potion-v1";function me(){return Date.now()+(G.offsetMs||0)}function iu(){let i=Date.now();return{v:1,name:"",coins:120,fame:0,fameLv:1,inv:{cham:0,lav:0,man:0,mush:0,feather:0,berry:0,moth:0,glowbug:0,ladybug:0,beetle:0,minnow:0,bluegill:0,carp:0},found:{},wild:{berry:[],bug:[],fish:[]},potions:{},seen:{},plots:[{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-36e5},{crop:"cham",at:i-36e5},{crop:"lav",at:i-36e5},{crop:"man",at:i-6*6e4}],q:0,qn:0,discovered:{},recipes:{},fog:[],stall:{open:!1,items:[]},bought:{},cust:{i:0,nextAt:0,here:!1,asked:!1},board:[],newCount:0,brewTut:0,lesson:0,seenTown:!1,seenWood:!1,seenPond:!1,beetles:0,boughtHour:0,pos:[1.5,1.5],lastSeen:i,offsetMs:0,settings:{sound:!0,music:!0,tod:-1}}}var G=My();function My(){try{let i=JSON.parse(localStorage.getItem(su));if(i&&i.v===1){let t=iu();return Object.assign(t,i,{settings:Object.assign(t.settings,i.settings),inv:Object.assign(t.inv,i.inv),wild:Object.assign(t.wild,i.wild)})}}catch{}return iu()}var ip=0;function xe(i=!1){if(i){clearTimeout(ip),ip=setTimeout(()=>xe(),400);return}try{localStorage.setItem(su,JSON.stringify(G))}catch{}}function sp(){localStorage.removeItem(su),G=iu()}var Et=null,xr=null,Sa=null,rs=null,Ts=null,Yl=null,wa=!1,_r=0,Zl=0,ou=0,rp=0,lu=0,Sy=0,Ma=null,vr=null;function hp(){if(Et){Et.state==="suspended"&&Et.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Et=new i,xr=Et.createGain(),xr.gain.value=.85,xr.connect(Et.destination),Sa=Et.createGain(),Sa.connect(xr),rs=Et.createGain(),rs.gain.value=.12,rs.connect(xr),Ts=Et.createGain(),Ts.gain.value=.5,Ts.connect(xr),Yl=Et.createBuffer(1,Et.sampleRate*2,Et.sampleRate);let t=Yl.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;Ma=Et.createBufferSource(),Ma.buffer=Yl,Ma.loop=!0;let e=Et.createBiquadFilter();e.type="bandpass",e.frequency.value=900,e.Q.value=.6,vr=Et.createGain(),vr.gain.value=0,Ma.connect(e),e.connect(vr),vr.connect(Ts),Ma.start(),Jl(),clearInterval(rp),rp=setInterval(Ty,700)}function Jl(){Et&&(Sa.gain.value=G.settings.sound?1:0,Ts.gain.value=G.settings.sound?.5:0,G.settings.music&&!wa&&Ay(),!G.settings.music&&wa&&Cy())}function up(i,t){lu=i,Sy=t,vr&&vr.gain.setTargetAtTime(.09*t,Et.currentTime,.3)}function _e(i,t,e,{type:n="sine",vol:s=.3,slide:r=0,attack:a=.005,bus:o=Sa}={}){let l=Et.createOscillator(),c=Et.createGain();l.type=n,l.frequency.setValueAtTime(i,t),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,i*r),t+e),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(s,t+a),c.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(o),l.start(t),l.stop(t+e+.02)}function Hn(i,t,{vol:e=.2,freq:n=1200,q:s=1,type:r="bandpass",to:a=0,bus:o=Sa}={}){let l=Et.createBufferSource();l.buffer=Yl;let c=Et.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(n,i),c.Q.value=s,a&&c.frequency.exponentialRampToValueAtTime(a,i+t);let h=Et.createGain();h.gain.setValueAtTime(e,i),h.gain.exponentialRampToValueAtTime(1e-4,i+t),l.connect(c),c.connect(h),h.connect(o),l.start(i,Math.random()),l.stop(i+t+.02)}var wy=[0,2,4,7,9],ap=0,ru=0,op=0,ht={step(i="grass"){if(!Et)return;let t=Et.currentTime;t-ap<.12||(ap=t,ru^=1,i==="stone"?Hn(t,.05,{vol:.09,freq:ru?1900:1500,q:3}):Hn(t,.07,{vol:.07,freq:ru?700:560,q:1.2,type:"lowpass"}))},pluck(i=0){if(!Et)return;let t=Et.currentTime,e=wy[i%5]+12*Math.floor(i/5),n=523*Math.pow(2,e/12);_e(n,t,.35,{type:"triangle",vol:.2}),_e(n*2,t,.18,{type:"sine",vol:.06})},harvest(){if(!Et)return;let i=Et.currentTime;Hn(i,.12,{vol:.12,freq:900,to:300,q:1}),_e(392,i,.12,{type:"sine",vol:.18,slide:1.8}),_e(784,i+.08,.25,{type:"triangle",vol:.14})},pop(){if(!Et)return;let i=Et.currentTime;_e(620,i,.09,{type:"sine",vol:.18,slide:1.9})},splash(){if(!Et)return;let i=Et.currentTime;Hn(i,.35,{vol:.2,freq:1400,to:300,q:.8}),[0,.06,.13].forEach((t,e)=>_e(300+e*140+Math.random()*60,i+t,.12,{type:"sine",vol:.12,slide:2.4}))},bubble(){if(!Et)return;let i=Et.currentTime;_e(180+Math.random()*260,i,.1,{type:"sine",vol:.07,slide:2.6})},stir(){if(!Et)return;let i=Et.currentTime;Hn(i,.18,{vol:.05,freq:500,to:900,q:2})},pour(){if(!Et)return;let i=Et.currentTime;Hn(i,.2,{vol:.06,freq:2600,q:1.4})},reveal(){if(!Et)return;let i=Et.currentTime;_e(880+Math.random()*200,i,.4,{type:"sine",vol:.03})},near(){if(!Et)return;let i=Et.currentTime;_e(1175,i,.3,{type:"sine",vol:.1}),_e(1568,i+.07,.4,{type:"sine",vol:.08})},bottle(){if(!Et)return;let i=Et.currentTime;Hn(i,.08,{vol:.12,freq:3e3,q:3}),_e(1046,i+.05,.12,{type:"square",vol:.05}),[523,659,784,1046].forEach((t,e)=>_e(t,i+.1+e*.07,.45,{type:"triangle",vol:.13}))},discover(){if(!Et)return;let i=Et.currentTime;Hn(i,.8,{vol:.12,freq:400,to:7e3,q:.7}),[523,659,784,988,1175,1568].forEach((t,e)=>_e(t,i+.15+e*.08,.7,{type:"triangle",vol:.12})),[262,330,392].forEach(t=>_e(t,i+.6,1.4,{type:"sine",vol:.12}))},fail(){if(!Et)return;let i=Et.currentTime;Hn(i,.4,{vol:.2,freq:300,q:.7,type:"lowpass"}),[330,277,220].forEach((t,e)=>_e(t,i+e*.12,.25,{type:"triangle",vol:.15}))},coin(i=0){if(!Et)return;let t=Et.currentTime+i*.05;_e(1568,t,.07,{type:"square",vol:.05}),_e(2093,t+.06,.18,{type:"square",vol:.05})},click(){if(!Et)return;let i=Et.currentTime;_e(700,i,.06,{type:"triangle",vol:.16,slide:1.4})},open(){if(!Et)return;let i=Et.currentTime;Hn(i,.25,{vol:.08,freq:500,to:2500,q:.8}),_e(523,i,.15,{type:"triangle",vol:.1,slide:1.5})},close(){if(!Et)return;let i=Et.currentTime;Hn(i,.2,{vol:.06,freq:2e3,to:500,q:.8})},quest(){if(!Et)return;let i=Et.currentTime;[784,988,1175].forEach((t,e)=>_e(t,i+e*.09,.4,{type:"sine",vol:.12}))},meow(){if(!Et)return;let i=Et.currentTime;_e(700,i,.32,{type:"triangle",vol:.09,slide:1.35,attack:.04}),_e(950,i+.12,.25,{type:"sine",vol:.05,slide:.7})},caw(){if(!Et)return;let i=Et.currentTime;Hn(i,.18,{vol:.14,freq:1100,q:4}),_e(420,i,.18,{type:"sawtooth",vol:.04,slide:.8})},blip(i,t=1){if(!Et||!/[a-z0-9]/i.test(i))return;let e=Et.currentTime;if(e-op<.045)return;op=e;let n=i.toLowerCase().charCodeAt(0)%7;_e((300+n*38)*t,e,.05,{type:"square",vol:.035,slide:1.1})}};function Ty(){if(!Et||!G.settings.sound)return;let i=Et.currentTime;if(Math.random()<.55*(1-lu)){let t=2200+Math.random()*1400,e=2+(Math.random()*2|0);for(let n=0;n<e;n++)_e(t*(1+n*.08),i+n*.09,.07,{type:"sine",vol:.025,slide:1.25,bus:Ts})}if(Math.random()<.8*lu)for(let t=0;t<4;t++)_e(4400+Math.random()*200,i+t*.045,.03,{type:"sine",vol:.012,bus:Ts})}var Ey=72,lp=[77,0,81,0,84,0,81,79,77,0,76,0,72,0,0,0,74,0,77,0,81,0,79,77,76,0,79,0,77,0,0,0],cp=[53,60,57,60,50,57,53,57,46,53,50,53,48,55,52,55],au=i=>440*Math.pow(2,(i-69)/12);function Ay(){wa=!0,_r=Et.currentTime+.3,Zl=0,clearInterval(ou),ou=setInterval(Ry,80)}function Cy(){wa=!1,clearInterval(ou)}function Ry(){if(!Et||!wa)return;let i=60/Ey/2;for(;_r<Et.currentTime+.3;){let t=lp[Zl%lp.length];t&&(_e(au(t),_r,i*3,{type:"sine",vol:.5,bus:rs,attack:.004}),_e(au(t+12),_r,i*1.2,{type:"sine",vol:.12,bus:rs})),_e(au(cp[Zl%cp.length]-12),_r,i*1.8,{type:"triangle",vol:.28,bus:rs,attack:.01}),_r+=i,Zl++}}function Ta(i){rs&&rs.gain.setTargetAtTime(i?.04:.12,Et.currentTime,.3)}function Ge(i=10){try{navigator.vibrate&&navigator.userActivation&&navigator.userActivation.hasBeenActive&&navigator.vibrate(i)}catch{}}var Gt=(i,t=document)=>t.querySelector(i);function Mr(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var Gn=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;document.body.classList.toggle("touch",Gn);var ei=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Kl=0,dp=0,fp=0;function Ea(i,t=!1){dp=i;let e=Gt("#coinN");if(!t){Kl=i,e.textContent=i;return}cancelAnimationFrame(fp);let n=Kl,s=performance.now(),r=()=>{let a=Math.min(1,(performance.now()-s)/650);Kl=Math.round(n+(dp-n)*(1-(1-a)**3)),e.textContent=Kl,a<1&&(fp=requestAnimationFrame(r))};r(),ni(Gt("#hud .coins"))}function du(i,t){Gt("#fameN").textContent="Lv "+i,Gt("#hud .fame .bar i").style.width=Math.round(t*100)+"%"}function gp(i,t,e){let n=Gt("#clock");n.querySelector("span").textContent=i,n.querySelector("em").textContent=t,n.classList.toggle("night",e>.5)}var cu="";function xp(i,t=""){let e=Gt("#quest"),n=i+"|"+t;if(n===cu)return;let s=!cu.startsWith(i+"|");if(cu=n,!i){e.classList.add("hidden");return}e.classList.remove("hidden"),e.querySelector(".qtext").textContent=i,e.querySelector(".qprog").textContent=t,s?(e.classList.remove("new"),e.offsetWidth,e.classList.add("new")):ni(e.querySelector(".qprog"))}function Sr(i){let t=Gt("#bBag .badge");t.textContent=i,t.classList.toggle("hidden",!i),i&&ni(t)}function Ql(i,t){let e=Gt("#note");if(!i){e.classList.add("hidden"),e.onclick=null;return}e.innerHTML=i,e.classList.remove("hidden"),e.onclick=t||null}function ni(i){i&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}function os(i,t,{ms:e=2600}={}){let n=Gt("#toasts"),s=Mr("div","toast",(t?`<img src="${te(t)}" alt="">`:"")+`<span>${i}</span>`);for(n.appendChild(s);n.children.length>3;)n.firstChild.remove();return setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},e),s}var pp=0,hu=!1,_p=()=>!1,yr=[];function vp(i){_p=i}function Ln(i,t="",e={}){for(let n=yr.length-1;n>=0;n--)yr[n].title===i&&yr.splice(n,1);yr.push({title:i,sub:t,...e}),uu()}function uu(){if(hu||!yr.length)return;if(as||br||_p()){setTimeout(uu,300);return}let{title:i,sub:t,icon:e=null,ms:n=2800,kind:s="",onShow:r=null}=yr.shift(),a=Gt("#banner");a.className="banner "+s,a.innerHTML=`<div class="ribbon big"><span>${i}</span></div>${t?`<p>${t}</p>`:""}${e?`<img src="${te(e)}" alt="">`:""}`,a.offsetWidth,a.classList.add("show"),hu=!0,r&&r(),clearTimeout(pp),pp=setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>{hu=!1,uu()},450)},n)}function tc(i,t,e,{size:n=56,delay:s=0,arc:r=120,dur:a=.75,onArrive:o=null}={}){setTimeout(()=>{let l=e.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2,d=Mr("img","flyer");d.src=i.includes("/")?i:te(i),d.style.width=n+"px",Gt("#fly").appendChild(d);let u=performance.now(),m=t.x+(Math.random()-.5)*30,x=t.y+(Math.random()-.5)*20,g=()=>{let p=Math.min(1,(performance.now()-u)/(a*1e3)),f=p<.5?2*p*p:1-(-2*p+2)**2/2,E=m+(c-m)*f,P=x+(h-x)*f-Math.sin(p*Math.PI)*r,M=p<.15?.4+p/.15*.8:1.2-(p-.15)*.6;d.style.transform=`translate(${E-n/2}px, ${P-n/2}px) scale(${M}) rotate(${p*30}deg)`,p<1?requestAnimationFrame(g):(d.remove(),ni(e),o&&o())};g()},s)}function yp(i,t,e){let n=Gt("#hud .coins"),s=Math.min(10,Math.max(3,Math.round(i/12)));for(let r=0;r<s;r++)tc("coin",t,n,{size:34,delay:r*55,arc:80+Math.random()*60,dur:.6,onArrive:()=>{ht.coin(r%3),e&&e(r,s)}})}function Vn(i,t,e=""){let n=Mr("div","pop-text "+e,i);n.style.left=t.x+"px",n.style.top=t.y+"px",Gt("#fly").appendChild(n),setTimeout(()=>n.remove(),1300)}var jl=class{constructor(t){this.world=t,this.root=Gt("#tags"),this.map=new Map,this.tmp={x:0,y:0}}get(t,e,n){let s=this.map.get(t);return s||(s={el:Mr("div","tag "+e),html:null,vis:!0},this.root.appendChild(s.el),this.map.set(t,s)),n!=null&&n!==s.html&&(s.el.innerHTML=n,s.html=n),s}place(t,e,n,s,r=!0){let a=this.map.get(t);if(!a)return;let o=this.world.toScreen(e,n,s,this.tmp),l=r&&!o.behind&&o.x>-80&&o.x<innerWidth+80&&o.y>-60&&o.y<innerHeight*.8;return l!==a.vis&&(a.el.classList.toggle("off",!l),a.vis=l),l&&(a.el.style.transform=`translate(${o.x.toFixed(1)}px, ${o.y.toFixed(1)}px)`),o}remove(t){let e=this.map.get(t);e&&(e.el.remove(),this.map.delete(t))}has(t){return this.map.has(t)}};function ec(i,t){let e=Gt("#qptr");if(!t){e.classList.add("hidden");return}let n=i.toScreen(t[0],t[1],t[2]),s=innerWidth,r=innerHeight,a=46;if(e.classList.remove("hidden"),!n.behind&&n.x>a&&n.x<s-a&&n.y>a+30&&n.y<r-a)e.classList.remove("edge"),e.style.transform=`translate(${n.x}px, ${n.y}px)`;else{let o=n.x-s/2,l=n.y-r/2;n.behind&&(o=-o,l=-l);let c=Math.min((s/2-a)/Math.abs(o||1e-6),(r/2-a)/Math.abs(l||1e-6));e.classList.add("edge"),e.style.transform=`translate(${s/2+o*c}px, ${r/2+l*c}px) rotate(${Math.atan2(l,o)}rad)`}}var as=null;function nc(){return!!as}function Pi(i,t,e=[],{pitch:n=1,side:s="left"}={}){return new Promise(r=>{let a=Gt("#dialog");a.classList.remove("hidden"),a.classList.toggle("right",s==="right"),a.querySelector(".dlg-name span").textContent=i;let o=a.querySelector(".dlg-text"),l=a.querySelector(".dlg-choices"),c=a.querySelector(".dlg-next");o.textContent="",l.innerHTML="",c.classList.add("hidden"),Ta(!0);let h={i:0,done:!1,sel:0};as=h;let d=a.querySelector(".dlg-box");d.classList.remove("pop"),d.offsetWidth,d.classList.add("pop");let u=g=>{as=null,a.classList.add("hidden"),Ta(!1),r(g)},m=()=>{if(h.done=!0,!e.length){c.classList.remove("hidden");return}e.forEach((g,p)=>{let f=Mr("button","choice"+(g.disabled?" disabled":""),(g.icon?`<img src="${te(g.icon)}" alt="">`:"")+`<span>${g.label||g}</span>${Gn?"":`<kbd>${p+1}</kbd>`}`);f.style.animationDelay=p*.06+"s",f.addEventListener("click",E=>{if(E.stopPropagation(),g.disabled){ht.click(),ni(f);return}ht.click(),u(p)}),l.appendChild(f)})};h.choose=g=>{let p=e[g];p&&!p.disabled&&(ht.click(),u(g))},h.advance=()=>{if(!h.done){h.i=t.length,o.textContent=t,m();return}e.length||(ht.click(),u(-1))};let x=()=>{if(as!==h||h.done)return;if(h.i++,o.textContent=t.slice(0,h.i),ht.blip(t[h.i-1]||"",n),h.i>=t.length){m();return}let g=t[h.i-1];setTimeout(x,g==="."||g==="?"||g==="!"?180:g===","?90:24)};setTimeout(x,120),a.onclick=()=>h.advance()})}function bp(i){if(!as)return!1;if(i==="KeyE"||i==="Space"||i==="Enter")return as.advance(),!0;let t=parseInt(i.replace("Digit",""),10);return t>=1&&t<=4&&as.choose(t-1),!0}var br=null;function ic(){return!!br}function Ii(i,t,{onClose:e=null,title:n=""}={}){Es(!0);let s=Gt("#panel");s.className="modal";let r=Mr("div","card "+i);return r.innerHTML=(n?`<div class="ribbon card-title"><span>${n}</span></div>`:"")+t+'<button class="btn-close" aria-label="Close"></button>',s.appendChild(r),r.querySelector(".btn-close").addEventListener("click",()=>Es()),s.onclick=a=>{a.target===s&&Es()},br={card:r,onClose:e},ht.open(),Ta(!0),r}function Es(i=!1){if(!br)return;let t=br;br=null;let e=Gt("#panel");e.className="modal hidden",e.innerHTML="",i||ht.close(),Ta(!1),t.onClose&&t.onClose()}function Aa({medal:i,potion:t,title:e,name:n,tier:s,first:r,ings:a}){return new Promise(o=>{let l=Gt("#discovery");l.innerHTML=`
      <div class="rays"></div>
      <div class="disc-card">
        <div class="ribbon big"><span>${e}</span></div>
        <div class="disc-icons"><img class="medal" src="${te(i)}" alt=""><img class="potion" src="${te(t)}" alt=""></div>
        <h2>${n}</h2>
        <p class="tier t${s.i}">${s.label}</p>
        <p class="first">${r}</p>
        <div class="recipe">${a.map(h=>`<img src="${te(h)}" alt="">`).join("<b>+</b>")}</div>
        <button class="btn-green"><span>Wonderful!</span></button>
      </div>`,l.classList.remove("hidden"),l.offsetWidth,l.classList.add("show"),Ge(60);let c=()=>{l.classList.remove("show"),setTimeout(()=>{l.classList.add("hidden"),l.innerHTML=""},300),ht.click(),o()};l.querySelector(".btn-green").addEventListener("click",c),Aa.close=c})}var Te={x:0,z:0,keys:new Set},nn=null;function Mp({onAct:i,onKey:t}){let e=()=>{let h=Te.keys;Te.kx=(h.has("KeyD")||h.has("ArrowRight")?1:0)-(h.has("KeyA")||h.has("ArrowLeft")?1:0),Te.kz=(h.has("KeyS")||h.has("ArrowDown")?1:0)-(h.has("KeyW")||h.has("ArrowUp")?1:0)};window.addEventListener("keydown",h=>{h.target&&h.target.tagName==="INPUT"||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(h.code)&&h.preventDefault(),!h.repeat&&(Te.keys.add(h.code),e(),t(h.code,!0)))}),window.addEventListener("keyup",h=>{Te.keys.delete(h.code),e(),t(h.code,!1)}),window.addEventListener("blur",()=>{Te.keys.clear(),e()}),Te.kx=Te.kz=0;let n=Gt("#touch"),s=Gt("#stick"),r=s.querySelector("i");n.addEventListener("pointerdown",h=>{nn||(nn={id:h.pointerId,ox:h.clientX,oy:h.clientY},n.setPointerCapture(h.pointerId),s.style.left=nn.ox+"px",s.style.top=nn.oy+"px",s.classList.remove("hidden"),r.style.transform="translate(-50%,-50%)")}),n.addEventListener("pointermove",h=>{if(!nn||h.pointerId!==nn.id)return;let d=46,u=h.clientX-nn.ox,m=h.clientY-nn.oy,x=Math.hypot(u,m);x>d&&(nn.ox+=u*(1-d/x),nn.oy+=m*(1-d/x),u=h.clientX-nn.ox,m=h.clientY-nn.oy,s.style.left=nn.ox+"px",s.style.top=nn.oy+"px");let g=Math.min(1,Math.hypot(u,m)/d),p=Math.atan2(m,u);Te.sx=g>.12?Math.cos(p)*g:0,Te.sz=g>.12?Math.sin(p)*g:0,r.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${m}px))`});let a=h=>{!nn||h.pointerId!==nn.id||(nn=null,Te.sx=Te.sz=0,s.classList.add("hidden"))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),Te.sx=Te.sz=0;let o=Gt("#act"),l=null,c=()=>{l&&(window.removeEventListener("click",l,!0),l=null)};o.addEventListener("pointerdown",h=>{h.preventDefault(),ni(o),i(),c(),l=d=>{d.stopPropagation(),d.preventDefault(),c()},window.addEventListener("click",l,!0),setTimeout(c,700)}),window.addEventListener("pointerdown",h=>{o.contains(h.target)||c()},!0)}function Sp(){let i=Te.kx+Te.sx,t=Te.kz+Te.sz,e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),Te.x=i,Te.z=t,Te}function sc(){Te.keys.clear(),Te.kx=Te.kz=Te.sx=Te.sz=0,nn=null,Gt("#stick").classList.add("hidden")}var mp="";function wr(i,t){let e=Gt("#prompt"),n=Gt("#act"),s=i||"";s!==mp&&(mp=s,i?(e.innerHTML=`<div class="pin">${Gn?"":"<kbd>E</kbd>"}<span>${i}</span></div>`,e.classList.remove("hidden"),e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),n.querySelector("span").textContent=i.replace(/ \(.+\)$/,""),n.classList.remove("hidden")):(e.classList.add("hidden"),n.classList.add("hidden"))),i&&t&&(e.style.transform=`translate(${t.x}px, ${t.y}px)`)}function Ca(i){return Gt("#fade").classList.toggle("on",i),new Promise(t=>setTimeout(t,i?260:10))}var ue=Math.PI*2,Li=(i,t,e)=>Math.max(t,Math.min(e,i)),Ye=(i,t,e)=>i+(t-i)*e,As=i=>i*i*(3-2*i),wp=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i)),Bt=(i,t)=>i+Math.random()*(t-i),Py=[["minnow",.55],["bluegill",.3],["carp",.15]];function Iy(){let i=Math.random();for(let[t,e]of Py)if((i-=e)<0)return t;return"minnow"}var Ly={ladybug:"Ladybug",beetle:"Moss Beetle",moth:"Wood Moth",glowbug:"Glowbug",minnow:"Pond Minnow",bluegill:"Bluegill",carp:"Golden Carp"},Dy={ladybug:{img:"mb_ladybug",h:104,speed:92,r:40},beetle:{img:"mb_beetle",h:112,speed:78,r:42},moth:{img:"mb_moth",h:104,speed:150,r:46,flies:!0},glowbug:{img:"mb_glowbug",h:98,speed:62,r:38}},Ny={minnow:{img:"mp_minnow",len:74,speed:62,window:.8,nib:[1,3]},bluegill:{img:"mp_bluegill",len:84,speed:52,window:.68,nib:[1,3]},carp:{img:"mp_carp",len:112,speed:44,window:.56,nib:[2,4]}},Uy={ladybug:"i_ladybug",beetle:"i_beetle",moth:"i_moth",glowbug:"i_glowbug",minnow:"i_minnow",bluegill:"i_bluegill",carp:"i_carp"},rc=class{constructor(){let t=this.c=document.createElement("canvas");t.id="mini",t.className="hidden",document.body.appendChild(t),this.g=t.getContext("2d"),this.isOpen=!1,this.covers=!1,this.fx=[],this.sil={};let e=n=>[n.clientX,n.clientY];t.addEventListener("pointermove",n=>{!this.isOpen||n.pointerType==="touch"||(this.aimMode="mouse",[this.ax,this.ay]=e(n))}),t.addEventListener("pointerdown",n=>{if(!this.isOpen||this.phase!=="play")return;n.preventDefault();let[s,r]=e(n);if(Math.hypot(s-this.closeBtn[0],r-this.closeBtn[1])<this.closeBtn[2]*1.3){ht.close(),this.finish();return}this.aimMode=n.pointerType==="touch"?"touch":"mouse",this.ax=s,this.ay=r,this.press(!0)})}open(t,e={}){return this.kind=t,this.o=e,this.got=[],this.fled=!1,this.fx=[],this.endT=null,this.card=null,this.isOpen=!0,this.covers=!1,this.phase="in",this.pt=0,this.t=0,this.from=e.from||{x:innerWidth/2,y:innerHeight/2},this.resize(),this.ax=this.W*.5,this.ay=this.H*.5,this.aimMode=Gn?"touch":"mouse",t==="bug"?this.setupBug(e):this.setupFish(e),this.c.classList.remove("hidden"),this.clip(0),ht.open(),new Promise(n=>{this.done=n})}finish(){this.phase!=="out"&&(this.phase="out",this.pt=0,this.covers=!1)}resize(){let t=Math.min(2,devicePixelRatio||1);this.W=innerWidth,this.H=innerHeight,this.d=t,this.c.width=Math.round(this.W*t),this.c.height=Math.round(this.H*t),this.S=Math.min(this.W/1100,this.H/620),this.closeBtn=[this.W-40*Math.max(.8,this.S),40*Math.max(.8,this.S),22*Math.max(.8,this.S)]}clip(t){let e=Math.hypot(this.W,this.H)*As(Li(t,0,1));this.c.style.clipPath=t>=1?"none":`circle(${e.toFixed(1)}px at ${this.from.x.toFixed(1)}px ${this.from.y.toFixed(1)}px)`}key(t,e){if(!(!e||this.phase!=="play")){if(t==="Escape"){ht.close(),this.finish();return}(t==="Space"||t==="KeyE"||t==="Enter")&&this.press(!1),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&(this.aimMode="key")}}press(t){this.kind==="bug"?this.bugPress(t):this.fishPress(t)}update(t,e){if(!this.isOpen)return;if((innerWidth!==this.W||innerHeight!==this.H)&&this.resize(),this.t+=t,this.phase==="in")this.pt+=t/.45,this.clip(this.pt),this.pt>=1&&(this.phase="play",this.covers=!0);else if(this.phase==="out"&&(this.pt+=t/.4,this.clip(1-this.pt),this.pt>=1)){this.isOpen=!1,this.c.classList.add("hidden"),this.c.style.clipPath="";let s=this.done;this.done=null,s&&s({got:this.got,fled:this.fled});return}if(this.aimMode==="key"&&e&&(e.x||e.z)){let s=620*this.S*t;this.ax=Li(this.ax+e.x*s,0,this.W),this.ay=Li(this.ay+e.z*s,0,this.H)}this.endT!=null&&this.phase==="play"&&(this.endT-=t,this.endT<=0&&(this.endT=null,this.finish())),this.kind==="bug"?this.bugUpdate(t):this.fishUpdate(t),this.fxUpdate(t);let n=this.g;n.setTransform(this.d,0,0,this.d,0,0),this.kind==="bug"?this.bugDraw(n):this.fishDraw(n),this.fxDraw(n),this.drawChrome(n)}img(t,e,n,s,r,{rot:a=0,sx:o=1,sy:l=1,alpha:c=1,w:h=null}={}){let d=he[e];if(!d)return;let u=h??r*d.width/d.height;t.save(),t.globalAlpha=c,t.translate(n,s),t.rotate(a),t.scale(o,l),t.drawImage(d,-u/2,-r/2,u,r),t.restore()}silhouette(t,e){let n=t+e;if(this.sil[n])return this.sil[n];let s=he[t],r=document.createElement("canvas");r.width=s.width,r.height=s.height;let a=r.getContext("2d");return a.drawImage(s,0,0),a.globalCompositeOperation="source-in",a.fillStyle=e,a.fillRect(0,0,r.width,r.height),this.sil[n]=r}pill(t,e,n,s,{size:r=20,bg:a="rgba(251,246,234,0.94)",fg:o="#5a3424",alpha:l=1}={}){let c=this.S,h=Math.max(13,r*c);t.save(),t.globalAlpha=l,t.font=`700 ${h}px Mali, sans-serif`,t.textAlign="center",t.textBaseline="middle";let d=t.measureText(e).width+h*1.6,u=h*2;t.fillStyle="rgba(40,24,30,0.25)",Tp(t,n-d/2,s-u/2+3,d,u,u/2),t.fill(),t.fillStyle=a,Tp(t,n-d/2,s-u/2,d,u,u/2),t.fill(),t.fillStyle=o,t.fillText(e,n,s+h*.04),t.restore()}drawChrome(t){let[e,n,s]=this.closeBtn;t.save(),t.fillStyle="rgba(40,24,30,0.3)",t.beginPath(),t.arc(e,n+3,s,0,ue),t.fill(),t.fillStyle="rgba(251,246,234,0.95)",t.beginPath(),t.arc(e,n,s,0,ue),t.fill(),t.strokeStyle="#5a3424",t.lineWidth=Math.max(2.5,s*.16),t.lineCap="round";let r=s*.38;t.beginPath(),t.moveTo(e-r,n-r),t.lineTo(e+r,n+r),t.moveTo(e+r,n-r),t.lineTo(e-r,n+r),t.stroke(),t.restore(),this.hint&&this.phase==="play"&&this.pill(t,this.hint,this.W/2,34*Math.max(.8,this.S),{size:17,alpha:this.hintA==null?1:this.hintA}),this.say&&this.sayT>0&&this.pill(t,this.say,this.sayX,this.sayY-(1-Math.min(1,this.sayT*3))*0-(.9-this.sayT)*30*this.S,{size:18,alpha:Math.min(1,this.sayT*3)}),this.card&&this.drawCard(t)}shout(t,e,n,s=.9){this.say=t,this.sayX=e,this.sayY=n,this.sayT=s}showCard(t,e){this.card={kind:t,t:0,x0:e[0],y0:e[1]},ht.discover(),Ge(14),this.burst(this.W/2,this.H*.42,26,["#fff6c9","#ffd76a","#ffffff"])}drawCard(t){let e=this.card,n=this.S,s=Math.min(1,e.t/.45),r=Li((e.t-1.25)/.35,0,1),a=Ye(e.x0,this.W/2,As(s)),o=Ye(e.y0,this.H*.42,As(s))-Math.sin(s*Math.PI)*60*n,l=(.4+.75*As(s)+Math.sin(e.t*9)*.03*(1-r))*(1-r*.7);t.save(),t.globalAlpha=1-r;let c=t.createRadialGradient(a,o,0,a,o,170*n);c.addColorStop(0,"rgba(255,246,200,0.75)"),c.addColorStop(1,"rgba(255,246,200,0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,170*n,0,ue),t.fill(),t.translate(a,o),t.rotate(Math.sin(e.t*3)*.06*(1-s)),this.img(t,Uy[e.kind],0,0,170*n*l),t.restore(),s>=1&&r<1&&this.pill(t,`${Ly[e.kind]}!`,this.W/2,this.H*.42+120*n,{size:24,alpha:1-r})}burst(t,e,n,s,r=260){for(let a=0;a<n;a++){let o=Bt(0,ue),l=Bt(.3,1)*r*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-60*this.S,life:Bt(.5,.9),t:0,s:Bt(3,7)*this.S,c:s[a%s.length]})}}ring(t,e,n,s,r=.9,a=.7,o=2.5){this.fx.push({k:"ring",x:t,y:e,r0:n*this.S,r1:s*this.S,life:r,t:0,a,w:o})}drops(t,e,n,s=200){for(let r=0;r<n;r++){let a=Bt(-Math.PI*.95,-Math.PI*.05),o=Bt(.4,1)*s*this.S;this.fx.push({k:"drop",x:t,y:e,vx:Math.cos(a)*o,vy:Math.sin(a)*o,life:Bt(.4,.7),t:0,s:Bt(2.5,5)*this.S})}}fxUpdate(t){for(let e of this.fx)e.t+=t,e.vx!=null&&(e.x+=e.vx*t,e.y+=e.vy*t,e.vy+=(e.k==="drop"?700:240)*this.S*t,e.vx*=1-t*1.5),e.k==="leaf"&&(e.rot+=e.vr*t);this.fx=this.fx.filter(e=>e.t<e.life),this.sayT>0&&(this.sayT-=t),this.card&&(this.card.t+=t,this.card.t>1.6&&(this.card=null))}fxDraw(t){for(let e of this.fx){let n=e.t/e.life;if(e.k==="ring")t.save(),t.globalAlpha=e.a*(1-n),t.strokeStyle="#eafcff",t.lineWidth=e.w*this.S*(1-n*.5),t.beginPath(),t.ellipse(e.x,e.y,Ye(e.r0,e.r1,As(n)),Ye(e.r0,e.r1,As(n))*.42,0,0,ue),t.stroke(),t.restore();else if(e.k==="drop")t.save(),t.globalAlpha=1-n,t.fillStyle="#eafcff",t.beginPath(),t.arc(e.x,e.y,e.s,0,ue),t.fill(),t.restore();else if(e.k==="spark"){t.save(),t.globalAlpha=1-n,t.fillStyle=e.c,t.translate(e.x,e.y),t.rotate(e.t*6);let s=e.s*(1-n*.5);t.beginPath();for(let r=0;r<8;r++){let a=r%2?s*.4:s;t.lineTo(Math.cos(r/8*ue)*a,Math.sin(r/8*ue)*a)}t.fill(),t.restore()}else e.k==="leaf"&&this.img(t,e.img,e.x,e.y,e.h,{rot:e.rot,alpha:1-n*n})}}setupBug(t){let e=this.S,n=this.W,s=this.H;this.arena=[n*.14,s*.2,n*.86,s*.86],this.bugs=[],this.addBug(t.kind||"ladybug",n*Bt(.3,.7),s*Bt(.4,.65),!0),this.misses=0,this.net={x:n*.5,y:s*.72,h:1,swoop:-1,hold:0,vx:0,vy:0},this.ax=this.net.x,this.ay=this.net.y,this.dress=[];let r=[[.05,.12,"mb_rock_a",150],[.95,.15,"mb_fern",190],[.03,.9,"mb_fern",200],[.97,.88,"mb_rock_b",120],[.5,.04,"mb_leaves_a",150],[.2,.98,"mb_leaves_b",120],[.8,1,"mb_leaves_a",140],[0,.5,"mb_leaves_b",130],[1,.52,"mb_leaves_a",150],[.3,.06,"mb_rock_b",90],[.72,.05,"mb_fern",150]];for(let[a,o,l,c]of r)this.dress.push({n:l,x:a*n,y:o*s,h:c*e*Bt(.9,1.1),rot:Bt(-.5,.5),f:Math.random()<.5?-1:1});this.pebbles=Array.from({length:40},()=>({x:Bt(0,n),y:Bt(0,s),r:Bt(2,6)*e,c:Math.random()<.5?"#8a6a4a":"#6d523a"})),this.bugBgKey=null,this.pileT=0,this.pileNag=!1,this.leftT=0,this.leftNag=!1,this.pile=t.beetle?{x:n*(Math.random()<.5?.25:.74),y:s*Bt(.32,.72),open:0,has:"beetle",rus:2}:null,this.hint=Gn?"Tap the bug to bring the net down":"Move the net, then click or press Space",this.hintA=1,t.beetle&&t.firstBeetle&&(this.hint2="Something rustles under the leaves...")}addBug(t,e,n,s=!1){let r=Dy[t];this.bugs.push({kind:t,d:r,x:e,y:n,a:Bt(0,ue),at:0,v:0,mode:"walk",t:Bt(1,2.5),main:s,wob:0,fly:r.flies?1:0,sc:1,alpha:1})}bugUpdate(t){let e=this.S,n=this.net,[s,r,a,o]=this.arena,l=n.swoop>=0?0:1,c=n.x,h=n.y;n.x=Ye(n.x,this.ax,l),n.y=Ye(n.y,this.ay,l),n.vx=(n.x-c)/Math.max(t,.001),n.vy=(n.y-h)/Math.max(t,.001),n.sp=Ye(n.sp||0,Math.hypot(n.vx,n.vy),Math.min(1,t*12));let d=n.sp>1250*e;n.swoop>=0?(n.swoop+=t,n.h=Math.max(0,1-n.swoop/.12),n.swoop>=.12&&!n.landed&&(n.landed=!0,this.netLanded()),n.swoop>=.12+(n.hold||.08)&&(n.swoop=-1,n.landed=!1,n.hold=0)):n.h=Ye(n.h,1,Math.min(1,t*10)),this.pile&&!this.pile.open&&(this.pile.rus-=t,this.pile.rus<-.5&&(this.pile.rus=Bt(1.5,3)),this.pile.rus<0&&this.hint2&&(this.hint=this.hint2,this.hint2=null)),this.pile&&this.pile.open&&(this.pile.open+=t);let u=0;for(let g of this.bugs){if(g.t-=t,g.mode==="caught"){g.wob+=t,u++;continue}if(g.mode==="gone")continue;if(u++,g.mode==="flee"){g.v=Ye(g.v,g.d.speed*5*e,Math.min(1,t*3)),(g.d.flies||g.kind!=="beetle")&&(g.fly=Math.min(1.6,g.fly+t*2),g.sc=1+g.fly*.25),g.x+=Math.cos(g.a)*g.v*t,g.y+=Math.sin(g.a)*g.v*t,(g.x<-150||g.x>this.W+150||g.y<-150||g.y>this.H+150)&&(g.mode="gone",u--),g.wob+=t*18;continue}d&&g.mode!=="dash"&&Math.hypot(g.x-n.x,g.y-n.y)<190*e&&n.swoop<0&&this.scare(g,.5);let p=g.x<s||g.x>a,f=g.y<r||g.y>o;g.t<=0&&(g.mode==="walk"?(g.mode="pause",g.t=g.d.flies?Bt(1.2,2.4):Bt(.5,1.4)):(g.mode="walk",g.t=Bt(1.4,3.2),g.at=g.a+Bt(-1.6,1.6))),p||f?g.at=Math.atan2((r+o)/2-g.y,(s+a)/2-g.x):Math.random()<t*.9&&(g.at=g.a+Bt(-1.2,1.2));let E=g.mode==="pause"?0:g.mode==="dash"?g.d.speed*3.4:g.d.speed;g.v=Ye(g.v,E*e,Math.min(1,t*(g.mode==="dash"?8:4))),g.mode==="dash"&&g.t<=0&&(g.mode="walk",g.t=Bt(1,2)),g.a+=wp(g.a,g.at)*Math.min(1,t*(g.mode==="dash"?7:2.6)),g.d.flies&&(g.fly=Ye(g.fly,g.mode==="pause"?0:1,Math.min(1,t*3)),g.a+=Math.sin(this.t*2.3+g.x*.01)*t*1.2*g.fly),g.x+=Math.cos(g.a)*g.v*t,g.y+=Math.sin(g.a)*g.v*t,g.wob+=t*(g.v/(e*6)+2)}let m=this.bugs.filter(g=>g.main);if(m.length&&m.every(g=>g.mode==="gone")&&!this.card&&u&&(this.leftT=(this.leftT||0)+t,!this.leftNag&&this.got.length&&(this.leftNag=!0,this.hint="One more! Catch it before it wanders off",this.hintA=1),this.leftT>4.5))for(let g of this.bugs)g.mode!=="caught"&&g.mode!=="gone"&&g.mode!=="flee"&&(g.mode="flee",g.v=g.d.speed*3*this.S,g.a=g.at=Math.atan2(g.y-this.H/2,g.x-this.W/2));this.pile&&!this.pile.open&&this.pile.has&&!u&&!this.card&&(this.pileT=(this.pileT||0)+t,this.pileNag||(this.pileNag=!0,this.hint=Gn?"Something is still under the leaves. Tap them":"Something is still under the leaves",this.hintA=1),this.pileT>7&&(this.pile.has=null),u++),!u&&this.endT==null&&!this.card&&this.phase==="play"&&(this.endT=this.got.length?.15:.6),this.hintA!=null&&this.t>4&&!this.pileNag&&!this.leftNag&&(this.hintA=Math.max(.55,1-(this.t-4)*.2))}scare(t,e=.6){t.mode="dash",t.t=e;let n=this.net;t.at=Math.atan2(t.y-n.y,t.x-n.x)+Bt(-.6,.6)}bugPress(t){let e=this.net;e.swoop>=0||this.card||(t&&(e.x=this.ax,e.y=this.ay),e.swoop=0,e.landed=!1,ht.stir())}netLanded(){let t=this.S,e=this.net,n=66*t,s=this.bugs.filter(r=>r.mode!=="caught"&&r.mode!=="gone"&&r.mode!=="flee"&&Math.hypot(r.x-e.x,r.y-e.y)<n*.78+r.d.r*t*.35);if(this.pile&&!this.pile.open&&Math.hypot(this.pile.x-e.x,this.pile.y-e.y)<n+30*t&&this.openPile(),s.length){for(let a of s)a.mode="caught",a.cx=a.x-e.x,a.cy=a.y-e.y,this.got.push(a.kind);e.hold=.65,ht.pop(),Ge(16),this.burst(e.x,e.y,14,["#fff6c9","#ffffff","#ffd76a"],220);let r=s[0];setTimeout(()=>{this.isOpen&&(r.mode="gone",this.showCard(r.kind,[e.x,e.y]))},520);for(let a of s.slice(1))setTimeout(()=>{a.mode="gone"},520);return}if(this.dust(e.x,e.y),!(this.pile&&this.pile.open&&this.pile.open<.05)){this.misses++,ht.click(),this.shout(this.misses>=3?"It got away!":"Missed!",e.x,e.y-80*t);for(let r of this.bugs)(r.mode==="walk"||r.mode==="pause"||r.mode==="dash")&&(this.misses>=3?(r.mode="flee",r.a=r.at=Math.atan2(r.y-e.y,r.x-e.x),this.fled=this.fled||r.main):Math.hypot(r.x-e.x,r.y-e.y)<300*t&&this.scare(r,.7))}}openPile(){let t=this.pile,e=this.S;t.open=.001,ht.harvest();for(let n=0;n<5;n++){let s=Bt(0,ue);this.fx.push({k:"leaf",img:n%2?"mb_leaves_a":"mb_leaves_b",x:t.x,y:t.y,vx:Math.cos(s)*Bt(200,380)*e,vy:Math.sin(s)*Bt(200,380)*e-150*e,life:.9,t:0,h:Bt(60,90)*e,rot:Bt(0,ue),vr:Bt(-6,6)})}if(t.has){this.addBug(t.has,t.x,t.y);let n=this.bugs[this.bugs.length-1];n.mode="dash",n.t=.6,n.at=n.a=Bt(0,ue),this.shout("A beetle!",t.x,t.y-70*e,1.1)}else this.shout("Just leaves",t.x,t.y-70*e)}dust(t,e){for(let n=0;n<10;n++){let s=Bt(0,ue),r=Bt(60,160)*this.S;this.fx.push({k:"spark",x:t,y:e,vx:Math.cos(s)*r,vy:Math.sin(s)*r*.5,life:.45,t:0,s:Bt(3,6)*this.S,c:"#a88a66"})}}bakeBug(){let t=this.S,e=this.W,n=this.H,s=this.d,r=this.bugBg||(this.bugBg=document.createElement("canvas"));r.width=Math.round(e*s),r.height=Math.round(n*s);let a=r.getContext("2d");a.setTransform(s,0,0,s,0,0);let o=a.createPattern(he.dirt,"repeat");a.save();let l=1.5*t;a.scale(l,l),a.fillStyle=o,a.fillRect(0,0,e/l,n/l),a.restore(),a.save(),a.globalCompositeOperation="multiply",a.fillStyle="#8c6a5c",a.fillRect(0,0,e,n),a.restore();for(let h of this.pebbles)a.fillStyle=h.c,a.globalAlpha=.5,a.beginPath(),a.ellipse(h.x,h.y,h.r,h.r*.7,0,0,ue),a.fill();a.globalAlpha=1;let c=a.createRadialGradient(e/2,n*.52,Math.min(e,n)*.25,e/2,n*.52,Math.hypot(e,n)*.62);c.addColorStop(0,"rgba(255,236,190,0.12)"),c.addColorStop(1,"rgba(40,22,10,0.55)"),a.fillStyle=c,a.fillRect(0,0,e,n);for(let h of this.dress)this.img(a,h.n,h.x,h.y,h.h,{rot:h.rot,sx:h.f});this.bugBgKey=e+"x"+n+"@"+s}bugDraw(t){let e=this.S,n=this.W,s=this.H;this.bugBgKey!==n+"x"+s+"@"+this.d&&this.bakeBug(),t.setTransform(1,0,0,1,0,0),t.drawImage(this.bugBg,0,0),t.setTransform(this.d,0,0,this.d,0,0);let r=this.pile;if(r&&r.open<.5){let g=!r.open&&r.rus<0?Math.sin(this.t*40)*.06:0,p=r.open?1-r.open*2:1;this.img(t,"mb_leaves_b",r.x-30*e,r.y+6*e,96*e,{rot:-.4+g,alpha:p}),this.img(t,"mb_leaves_a",r.x+24*e,r.y-4*e,104*e,{rot:.5-g,alpha:p}),this.img(t,"mb_leaves_b",r.x,r.y-18*e,88*e,{rot:1.8+g*1.5,alpha:p}),!r.open&&r.has&&r.rus<0&&this.drawAntennae(t,r.x+6*e,r.y-46*e,e)}for(let g of this.bugs){if(g.mode==="gone")continue;let p=g.d,f=p.h*e*g.sc,E=this.net,P=g.mode==="caught"?E.x+g.cx*.6:g.x,M=g.mode==="caught"?E.y+g.cy*.6:g.y,w=(p.flies?g.fly*26:0)*e+(g.mode==="flee"?g.fly*40*e:0);if(t.save(),t.globalAlpha=.28,t.fillStyle="#1c1008",t.beginPath(),t.ellipse(P+6*e+w*.4,M+10*e+w,f*.36,f*.24,0,0,ue),t.fill(),t.restore(),g.kind==="glowbug"){let S=.65+.35*Math.sin(this.t*3+g.x*.01),R=t.createRadialGradient(P,M+f*.25,0,P,M+f*.25,f*1.1);R.addColorStop(0,`rgba(226,255,140,${.55*S})`),R.addColorStop(1,"rgba(226,255,140,0)"),t.fillStyle=R,t.beginPath(),t.arc(P,M+f*.25,f*1.1,0,ue),t.fill()}let T=g.a+Math.PI/2+(p.flies?0:Math.sin(g.wob)*.07)+(g.mode==="caught"?Math.sin(g.wob*30)*.15:0),L=1,v=1;p.flies?L=g.fly>.3?.45+.55*Math.abs(Math.sin(this.t*17+g.x)):.88+.12*Math.sin(this.t*2.2):g.mode==="flee"?L=1+Math.abs(Math.sin(g.wob))*.1:v=1+Math.sin(g.wob*2)*.02,this.img(t,p.img,P,M-w,f,{rot:T,sx:L,sy:v})}let a=this.net,o=66*e*(1+a.h*.22),l=a.x,c=a.y-a.h*26*e;t.save(),t.globalAlpha=.22*(1-a.h*.4),t.fillStyle="#1c1008",t.beginPath(),t.ellipse(a.x+10*e*a.h,a.y+22*e*a.h,o*.95,o*.7,0,0,ue),t.fill(),t.restore();let h=Math.PI*.25,d=l+Math.cos(h)*o,u=c+Math.sin(h)*o,m=170*e;t.save(),t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=13*e,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(h)*m,u+Math.sin(h)*m),t.stroke(),t.strokeStyle="#b4834c",t.lineWidth=7*e,t.beginPath(),t.moveTo(d,u),t.lineTo(d+Math.cos(h)*m,u+Math.sin(h)*m),t.stroke(),t.beginPath(),t.arc(l,c,o,0,ue),t.save(),t.clip(),t.fillStyle="rgba(255,255,255,0.1)",t.fillRect(l-o,c-o,o*2,o*2),t.strokeStyle="rgba(255,255,255,0.78)",t.lineWidth=1.7*e;let x=14*e;t.beginPath();for(let g=-o*2;g<o*2;g+=x)t.moveTo(l+g-o,c-o),t.lineTo(l+g+o,c+o),t.moveTo(l+g+o,c-o),t.lineTo(l+g-o,c+o);t.stroke(),t.restore(),t.strokeStyle="#2e1c14",t.lineWidth=9*e,t.beginPath(),t.arc(l,c,o,0,ue),t.stroke(),t.strokeStyle="#8a5a3c",t.lineWidth=4*e,t.beginPath(),t.arc(l,c,o,0,ue),t.stroke(),t.restore();for(let g=0;g<3;g++){let p=40*e+g*34*e,f=36*Math.max(.8,e),E=g<this.misses,P=11*e;t.save(),t.globalAlpha=E?.35:1,t.lineCap="round",t.strokeStyle="#3b2418",t.lineWidth=7*e,t.beginPath(),t.moveTo(p+7*e,f+7*e),t.lineTo(p+19*e,f+19*e),t.stroke(),t.strokeStyle="#c08a5a",t.lineWidth=4*e,t.beginPath(),t.moveTo(p+7*e,f+7*e),t.lineTo(p+19*e,f+19*e),t.stroke(),t.save(),t.beginPath(),t.arc(p,f,P,0,ue),t.fillStyle="rgba(251,246,234,0.28)",t.fill(),t.clip(),t.strokeStyle="rgba(251,246,234,0.85)",t.lineWidth=1.4*e,t.beginPath();for(let M=-P*2;M<=P*2;M+=5*e)t.moveTo(p+M-P,f-P),t.lineTo(p+M+P,f+P),t.moveTo(p+M+P,f-P),t.lineTo(p+M-P,f+P);t.stroke(),t.restore(),t.strokeStyle="#3b2418",t.lineWidth=5*e,t.beginPath(),t.arc(p,f,P,0,ue),t.stroke(),t.strokeStyle="#fbf6ea",t.lineWidth=2.5*e,t.beginPath(),t.arc(p,f,P,0,ue),t.stroke(),t.restore()}}drawAntennae(t,e,n,s){t.save(),t.strokeStyle="#2b2b22",t.lineWidth=3*s,t.lineCap="round";let r=Math.sin(this.t*12)*4*s;t.beginPath(),t.moveTo(e-5*s,n+16*s),t.quadraticCurveTo(e-10*s,n,e-16*s+r,n-6*s),t.moveTo(e+5*s,n+16*s),t.quadraticCurveTo(e+10*s,n,e+16*s-r,n-6*s),t.stroke(),t.restore()}setupFish(t){let e=this.S,n=this.W,s=this.H;this.bankY=s*.17,this.dockY=s*.8,this.bites=t.bites||3,this.fish=[];for(let r=0;r<Math.min(4,this.bites+1);r++)this.spawnFish(!0);this.state="aim",this.bob=null,this.tension=0,this.bucket=0,this.tip0=[n*.55,s*.5],this.ripples=Array.from({length:46},()=>({x:Bt(0,n),y:Bt(this.bankY,this.dockY),l:Bt(18,46)*e,ph:Bt(0,ue),sp:Bt(8,18)*e})),this.pads=[[.08,.27,92,.3],[.88,.25,110,2],[.95,.6,80,4],[.04,.64,70,1],[.66,.24,64,5]].map(([r,a,o,l])=>({x:r*n,y:a*s,h:o*e,r:l})),this.hint=Gn?"Tap the water to cast":"Click the water to cast (or press Space)",this.hintA=1,this.fishBgKey=null}spawnFish(t=!1){let e=this.W,n=Iy(),s=Ny[n];this.fish.push({kind:n,d:s,x:t?Bt(e*.15,e*.85):Math.random()<.5?-60:e+60,y:Bt(this.bankY+60*this.S,this.dockY-60*this.S),a:Bt(0,ue),at:0,v:s.speed*this.S,mode:"swim",t:Bt(1,3),ph:Bt(0,ue),alpha:0})}fishPress(){let t=this.S;if(!(this.card||this.state==="reel"||this.state==="cast")){if(this.state==="aim"){let e=Li(this.ay,this.bankY+40*t,this.dockY-40*t),n=Li(this.ax,50*t,this.W-50*t);this.state="cast",this.castT=0,this.bob={x:n,y:e,fromX:this.tip0[0],fromY:this.tip0[1],dip:0,under:0,t:0},ht.stir(),this.hintA=.55;return}if(this.state==="wait"){let e=this.biter;if(e&&e.mode==="bite"){this.hook(e);return}if(e&&(e.mode==="nibble"||e.mode==="approach")){this.spook(e),this.shout("Too soon!",this.bob.x,this.bob.y-70*t),ht.click(),this.reelIn();return}this.reelIn()}}}reelIn(){this.state="aim",this.bob=null,this.biter=null,this.tension=0,ht.pour()}spook(t){t.mode="flee",t.t=1.2,t.at=t.a+Math.PI+Bt(-.5,.5)}hook(t){let e=this.S;this.state="reel",this.reelT=0,t.mode="hooked",this.tension=1,ht.splash(),Ge(20),this.drops(this.bob.x,this.bob.y,14,260),this.ring(this.bob.x,this.bob.y,10,70,.7,.9,4),this.shout("Got it!",this.bob.x,this.bob.y-80*e,.7)}fishUpdate(t){let e=this.S,n=this.W;this.state==="cast"&&(this.castT+=t/.45,this.castT>=1&&(this.state="wait",this.waitT=0,this.biter=null,this.lureT=Bt(.3,.9),ht.splash(),this.ring(this.bob.x,this.bob.y,6,46,.8),this.drops(this.bob.x,this.bob.y,6,140),this.hint=Gn?"Tap when the float goes under":"Click (or Space) when the float goes under",this.hintA=1));let s=this.bob;if(s&&(s.t+=t,s.dip=Ye(s.dip,s.under?14*e:0,Math.min(1,t*14)),this.state==="wait"&&Math.random()<t*.6&&this.ring(s.x,s.y+4*e,6,30,1.2,.35,1.5)),this.state==="wait"&&(this.waitT+=t,!this.biter&&(this.lureT-=t,this.lureT<=0))){let r=null,a=1e9;for(let o of this.fish){if(o.mode!=="swim")continue;let l=Math.hypot(o.x-s.x,o.y-s.y);l<a&&(a=l,r=o)}r&&(a<380*e||this.waitT>1.8)?(this.biter=r,r.mode="approach",r.nibs=Math.round(Bt(r.d.nib[0],r.d.nib[1]))):this.lureT=.4}if(this.state==="reel"){this.reelT+=t;let r=this.biter;r.x=Ye(r.x,this.W*.56,Math.min(1,t*2.2)),r.y=Ye(r.y,this.dockY-30*e,Math.min(1,t*2.2)),s.x=r.x+Math.cos(r.a)*r.d.len*e*.45,s.y=r.y+Math.sin(r.a)*r.d.len*e*.45,r.a=-Math.PI/2+Math.sin(this.reelT*22)*.5,Math.random()<t*14&&this.drops(r.x+Bt(-20,20)*e,r.y,2,160),this.reelT>.75&&(this.fish.splice(this.fish.indexOf(r),1),this.got.push(r.kind),this.bites--,this.bucket++,this.o.onCatch&&this.o.onCatch(r.kind),this.showCard(r.kind,[r.x,r.y]),this.drops(r.x,r.y,18,320),this.ring(r.x,r.y,10,90,.8,.9,4),this.bob=null,this.biter=null,this.tension=0,this.state="aim",this.hint=Gn?"Tap the water to cast":"Click the water to cast (or press Space)",this.bites>0?setTimeout(()=>{this.isOpen&&this.kind==="fish"&&this.spawnFish()},1600):(this.endT=2.4,setTimeout(()=>{this.isOpen&&(this.hint="The fish are wary now. Come back later")},1500)))}this.tension=Ye(this.tension,this.state==="reel"?1:this.biter&&this.biter.mode==="bite"?.6:0,Math.min(1,t*8));for(let r of this.fish){if(r.t-=t,r.ph+=t*(r.mode==="flee"?26:9),r.alpha=Math.min(1,r.alpha+t*.8),r.mode==="hooked")continue;let a=r.d.speed*e;if(r.mode==="swim"){r.t<=0&&(r.t=Bt(1.5,3.5),r.at=r.a+Bt(-1.4,1.4));let o=70*e;(r.x<o||r.x>n-o||r.y<this.bankY+o||r.y>this.dockY-o)&&(r.at=Math.atan2((this.bankY+this.dockY)/2-r.y,n/2-r.x)),Math.sin(r.ph*.13)>.7&&(a*=.3)}else if(r.mode==="approach"){let o=r.d.len*e,l=Math.hypot(s.x-r.x,s.y-r.y);r.at=Math.atan2(s.y-r.y,s.x-r.x),a=l>o*.5?r.d.speed*e*1.4*Li((l-o*.45)/(60*e),.3,1):0,l<o*.62&&(r.mode="nibble",r.t=Bt(.6,1.2))}else r.mode==="nibble"?(a=0,r.at=Math.atan2(s.y-r.y,s.x-r.x),r.t<=0&&(r.nibs>0?(r.nibs--,r.t=Bt(.45,1.05),r.lunge=.15,s.under=0,s.dip=5*e,this.ring(s.x,s.y+4*e,6,26,.5,.6,2),ht.bubble()):(r.mode="bite",r.t=r.d.window,r.lunge=.25,s.under=1,ht.splash(),Ge(14),this.ring(s.x,s.y,8,60,.6,.9,3.5),this.drops(s.x,s.y,10,200),this.shout("!",s.x,s.y-60*e,r.d.window)))):r.mode==="bite"?(a=0,r.t<=0&&(s.under=0,this.spook(r),this.shout("It got away",s.x,s.y-70*e),this.biter=null,this.lureT=Bt(1.5,2.5),this.reelIn())):r.mode==="flee"&&(a=r.d.speed*e*3.5,r.t<=0&&(r.mode="swim",r.t=Bt(1,3)));r.lunge>0&&(r.lunge-=t,a=r.d.speed*e*2),r.a+=wp(r.a,r.at)*Math.min(1,t*(r.mode==="flee"?6:2.5)),r.v=Ye(r.v,a,Math.min(1,t*3)),r.x+=Math.cos(r.a)*r.v*t,r.y+=Math.sin(r.a)*r.v*t,r.mode==="nibble"&&r.lunge>0&&(r.x-=Math.cos(r.a)*r.v*t*1.8,r.y-=Math.sin(r.a)*r.v*t*1.8)}}bakeFish(){let t=this.S,e=this.W,n=this.H,s=this.d,r=this.bankY,a=this.dockY,o=(l,c,h,d)=>{let u=l?l.c:document.createElement("canvas");u.width=Math.round(e*s),u.height=Math.max(1,Math.round((h-c)*s));let m=u.getContext("2d");return m.setTransform(s,0,0,s,0,-c*s),d(m),{c:u,y0:c}};this.fishWater=o(this.fishWater,0,n,l=>{let c=l.createLinearGradient(0,r,0,a);c.addColorStop(0,"#7cc6b6"),c.addColorStop(.35,"#4c9fa2"),c.addColorStop(1,"#3a8790"),l.fillStyle=c,l.fillRect(0,0,e,n)}),this.fishBank=o(this.fishBank,0,r+60*t,l=>{l.fillStyle="#6e9a3e",l.beginPath(),l.moveTo(0,0),l.lineTo(e,0),l.lineTo(e,r);for(let c=e;c>=0;c-=20)l.lineTo(c,r+Math.sin(c*.02)*10*t+Math.sin(c*.051)*6*t);l.closePath(),l.fill(),l.save(),l.globalAlpha=.5,this.img(l,"grass",e/2,r*.4,r*.9,{w:e}),l.restore();for(let c=0,h=-20*t;h<e+60*t;c++,h+=92*t)this.img(l,"mp_grass_edge",h,r-18*t+c%2*8*t,104*t,{sx:c%2?-1:1});this.img(l,"mp_rock_wet",e*.2,r+10*t,92*t),this.img(l,"mp_rock_wet",e*.78,r+4*t,74*t,{sx:-1})}),this.fishDock=o(this.fishDock,Math.min(a-24*t,n-140*t),n,l=>{let c=n-a+40*t;this.img(l,"mp_dock_top",e/2,a-20*t+c/2,c,{w:e*1.04}),this.img(l,"mp_bucket",e*.13,n-74*t,118*t)}),this.fishBgKey=e+"x"+n+"@"+s}fishDraw(t){let e=this.S,n=this.W,s=this.H,r=this.t,a=this.bankY,o=this.dockY;this.fishBgKey!==n+"x"+s+"@"+this.d&&this.bakeFish();let l=g=>{t.setTransform(1,0,0,1,0,0),t.drawImage(g.c,0,Math.round(g.y0*this.d)),t.setTransform(this.d,0,0,this.d,0,0)};l(this.fishWater),t.save(),t.strokeStyle="rgba(232,252,248,0.22)",t.lineCap="round",t.lineWidth=2.4*e;for(let g of this.ripples){let p=(g.x+r*g.sp)%(n+80)-40,f=g.y+Math.sin(r*.8+g.ph)*6*e,E=g.l*(.7+.3*Math.sin(r*1.3+g.ph));t.globalAlpha=.5+.5*Math.sin(r*.9+g.ph),t.beginPath(),t.moveTo(p-E/2,f),t.quadraticCurveTo(p,f-5*e,p+E/2,f),t.stroke()}t.restore();for(let g of this.fish){let p=this.silhouette(g.d.img,"#173c46"),f=g.d.len*e,E=f*p.height/p.width;t.save(),t.globalAlpha=(g.mode==="hooked"?.75:.42)*g.alpha,t.translate(g.x,g.y),t.rotate(g.a+Math.sin(g.ph)*(g.v>5?.08:.03)),Math.cos(g.a)<0&&t.scale(1,-1),t.drawImage(p,-f/2,-E/2,f,E),t.restore()}for(let g of this.pads)this.img(t,"mp_lilypad",g.x,g.y+Math.sin(r*.8+g.r)*2*e,g.h,{rot:g.r+Math.sin(r*.4+g.r)*.06});t.save(),t.strokeStyle="rgba(240,255,250,0.55)",t.lineWidth=3*e,t.beginPath();for(let g=0;g<=n;g+=20){let p=a+Math.sin(g*.02)*10*e+Math.sin(g*.051)*6*e+4*e+Math.sin(r*1.5+g*.03)*1.5*e;g?t.lineTo(g,p):t.moveTo(g,p)}t.stroke(),t.restore(),l(this.fishBank),l(this.fishDock),this.bucket&&this.pill(t,`x${this.bucket}`,n*.13+58*e,s-120*e,{size:16});let c=this.bob,h=[...this.tip0],d=c?c.x:this.ax,u=c?c.y:this.ay;h[0]=Ye(h[0],d,.16),h[1]=Ye(h[1],Math.min(u,s*.62),.12),this.state==="reel"&&(h[0]+=Math.sin(this.t*30)*6*e,h[1]+=30*e);let m=null,x=null;if(c){if(this.state==="cast"){let L=As(Math.min(1,this.castT));m=Ye(h[0],c.x,L),x=Ye(h[1],c.y,L)-Math.sin(L*Math.PI)*120*e}else m=c.x,x=c.y;let g=this.state==="cast",p=!g&&c.under,f=64*e,E=g?0:Math.sin(c.t*2.4)*1.5*e+c.dip*(.32*f)/(14*e),P=x+E-.1*f,M=[m+.02*f,P-.46*f];g?this.img(t,"mp_bobber",m,P,f):this.floatInWater(t,m,x,P,f,p),t.save(),t.strokeStyle="rgba(250,250,240,0.85)",t.lineWidth=1.6*e;let w=(h[0]+M[0])/2,T=(h[1]+M[1])/2+(1-this.tension)*40*e;t.beginPath(),t.moveTo(h[0],h[1]),t.quadraticCurveTo(w,T,M[0],M[1]),t.stroke(),t.restore()}if(this.drawRod(t,h),!c&&this.state==="aim"&&!this.card&&this.aimMode!=="touch"){let g=Li(this.ax,50*e,n-50*e),p=Li(this.ay,a+40*e,o-40*e);t.save(),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=2.5*e,t.setLineDash([6*e,6*e]),t.lineDashOffset=-r*20,t.beginPath(),t.ellipse(g,p,26*e,11*e,0,0,ue),t.stroke(),t.restore()}}floatInWater(t,e,n,s,r,a){let o=this.S,l=this.t,c=r*75/90,h=x=>{x.beginPath(),x.rect(e-c,n,c*2,r*1.5),x.clip()};t.save(),h(t);let d=e+Math.sin(l*3)*1.2*o,u=s+1.5*o;this.img(t,"mp_bobber",d,u,r,{sy:.92,alpha:.55}),t.globalAlpha=.5,t.translate(d,u),t.scale(1,.92),t.drawImage(this.silhouette("mp_bobber","#2f6f73"),-c/2,-r/2,c,r),t.restore(),t.save(),t.beginPath(),t.rect(e-c,n-r*1.5,c*2,r*1.5),t.clip(),this.img(t,"mp_bobber",e,s,r),t.restore();let m=(a?.32:.56)*c;t.save(),t.strokeStyle="rgba(240,255,250,0.7)",t.lineWidth=1.6*o,t.beginPath(),t.ellipse(e,n,m,m*.3,0,0,ue),t.stroke();for(let x=0;x<2;x++){let g=(l*(a?1.4:.45)+x*.5)%1;t.globalAlpha=(1-g)*.55,t.lineWidth=1.8*o,t.beginPath(),t.ellipse(e,n,m*(1+g*1.6),m*.3*(1+g*1.6),0,0,ue),t.stroke()}t.restore()}drawRod(t,e){let n=this.S,s=this.W,r=this.H,a=[s*.7,r+12*n],o=e[0]-a[0],l=e[1]-a[1],c=Math.hypot(o,l),h=-l/c,d=o/c,u=(14+this.tension*70)*n,m=(a[0]+e[0])/2+h*u,x=(a[1]+e[1])/2+d*u+this.tension*30*n,g=p=>[(1-p)**2*a[0]+2*(1-p)*p*m+p*p*e[0],(1-p)**2*a[1]+2*(1-p)*p*x+p*p*e[1]];t.save(),t.lineCap="round";for(let[p,f]of[[26,"#3b2418"],[19,"#a7c46a"]]){t.strokeStyle=f;for(let E=0;E<24;E++){let P=g(E/24),M=g((E+1)/24);t.lineWidth=p*n*(1-E/24*.62),t.beginPath(),t.moveTo(P[0],P[1]),t.lineTo(M[0],M[1]),t.stroke()}}t.strokeStyle="#5f7f34";for(let p of[.18,.36,.52,.66,.78,.88]){let f=g(p),E=g(p+.01),P=E[1]-f[1],M=-(E[0]-f[0]),w=Math.hypot(P,M)||1,T=10*n*(1-p*.62);t.lineWidth=3*n,t.beginPath(),t.moveTo(f[0]-P/w*T,f[1]-M/w*T),t.lineTo(f[0]+P/w*T,f[1]+M/w*T),t.stroke()}t.restore();for(let[p,f]of[[.32,38],[.15,42]]){let E=g(p);t.save(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(E[0]+18*n,E[1]+26*n,f*1.25*n+3,f*.9*n+3,-.5,0,ue),t.fill(),t.fillStyle="#5b3f7c",t.beginPath(),t.ellipse(E[0]+18*n,E[1]+26*n,f*1.25*n,f*.9*n,-.5,0,ue),t.fill(),t.fillStyle="#2e1c14",t.beginPath(),t.ellipse(E[0],E[1],f*.62*n+3,f*.5*n+3,-.6,0,ue),t.fill(),t.fillStyle="#f3cfa8",t.beginPath(),t.ellipse(E[0],E[1],f*.62*n,f*.5*n,-.6,0,ue),t.fill(),t.restore()}}};function Tp(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Fy=20*6e4,Ep=8*6e4,Oy=2,ac=class{constructor(t,e){this.world=t,G.wild||(G.wild={berry:[],bug:[],fish:[]}),this.berries=$l.map(([n,s],r)=>({i:r,x:n,z:s,spr:e.props.berries[r],full:null,pop:0,tw:r*1.3})),this.bugs=tu.map(([n,s],r)=>({i:r,hx:n,hz:s,x:n,z:s,y:.9,ph:r*1.7,dir:1,kind:null,scare:0,away:null,spr:t.sprite("moth",Ot("moth",1.4),{x:n,z:s,y:.9,shadow:.3})}))}kind(t){return this.world.night>.5?"glowbug":ep[t]||"moth"}berryLeft(t){let e=G.wild.berry[t];return e?Math.max(0,e+Fy-me()):0}bugLeft(t){let e=G.wild.bug[t];return e?Math.max(0,e+Ep-me()):0}update(t,e){let n=this.world;for(let s of this.berries){let r=this.berryLeft(s.i)===0;r!==s.full&&(s.full===!1&&(s.pop=.5,n.sparkle(s.x,.8,s.z,12,"#ffd0d8")),s.full=r,s.spr.set(r?"berry_full":"berry_bare")),s.pop=Math.max(0,s.pop-t*1.5);let a=s.pop>0?Math.sin(s.pop*16)*s.pop*.3:0,o=r?Math.max(0,Math.sin(e*1.9+s.tw))**8*.05:0;s.spr.sx=1+a+o,s.spr.sy=1-a*.7+o*.4,s.spr.sync(),r&&Math.random()<t*.5&&n.glow.add({x:s.x+(Math.random()-.5)*1.2,y:.5+Math.random()*.8,z:s.z+.1,vx:0,vy:.3,vz:0,life:1,s:3+Math.random()*3,c:"#ffe0e6",a:.85,k:1,fadeIn:.2})}for(let s of this.bugs){let r=this.kind(s.i),a=this.bugLeft(s.i)>0;if(a!==s.away&&(s.away&&!a&&n.sparkle(s.hx,1,s.hz,6,r==="glowbug"?"#e6ff9a":"#f4e6ff"),s.away=a,s.spr.visible=!a),a)continue;s.kind!==r&&(s.kind=r,s.spr.set(r==="ladybug"?"mb_ladybug":r),s.spr.h=r==="ladybug"?.4:Ot(r,r==="moth"?1.4:1.7),s.spr.mat.uniforms.uEmit.value=r==="glowbug"?.85:0),s.ph+=t*(1+s.scare*2.2);let o=.85+s.scare*1.3,l=s.hx+Math.sin(s.ph*.8)*o,c=s.hz+Math.sin(s.ph*1.6)*o*.42;Math.abs(l-s.x)>.002&&(s.dir=l>s.x?1:-1),s.x=l,s.z=c,s.y=.75+Math.sin(s.ph*3.1)*.16+s.scare*.6,s.scare=Math.max(0,s.scare-t*.55),r==="moth"?(s.spr.sx=.5+.5*Math.abs(Math.sin(e*15+s.i)),s.spr.sy=1):r==="ladybug"?(s.spr.sx=1+Math.sin(e*22+s.i)*.06,s.spr.sy=1):(s.spr.sx=1,s.spr.sy=1+Math.sin(e*6+s.i)*.05),s.spr.flip=s.dir<0,s.spr.setPos(s.x,s.z,s.y),r==="glowbug"&&Math.random()<t*9&&n.glow.add({x:s.x+(Math.random()-.5)*.15,y:s.y+.12,z:s.z+.05,vx:0,vy:.05,vz:0,life:.9,s:7+Math.random()*5,c:"#dcff7a",a:.8,k:0,fadeIn:.1,fadePow:2})}}nearBerry(t,e,n=1.6){let s=null,r=n;for(let a of this.berries){let o=Math.hypot(a.x-t,(a.z+.5-e)*1.25);o<r&&(r=o,s=a)}return s}nearBug(t,e,n=1.7){let s=null,r=n;for(let a of this.bugs){if(a.away)continue;let o=Math.hypot(a.x-t,(a.z-e)*1.25);o<r&&(r=o,s=a)}return s}pick(t){if(this.berryLeft(t)>0)return 0;let e=this.berries[t];return G.wild.berry[t]=me(),e.pop=.6,this.world.burst(e.x,.7,e.z+.2,"#c8455a",10),this.world.dust(e.x,e.z+.3,4,"#6d8a3a"),this.update(0,0),Oy}markCaught(t){G.wild.bug[t.i]=me(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff"),this.update(0,0)}markFled(t){G.wild.bug[t.i]=me()-Ep+12e4,this.update(0,0)}tryCatch(t,e,n){if(t.away)return null;if(!(Math.hypot(t.x-e,(t.z-n)*1.25)<1.5))return t.scare=1,null;G.wild.bug[t.i]=me(),this.world.sparkle(t.x,t.y+.2,t.z,10,t.kind==="glowbug"?"#e6ff9a":"#f4e6ff");let r=t.kind;return this.update(0,0),r}};var ii={head:[.53,.885],head_back:[.49,.94],arm:[.5,.1],leg:[.38,.08],body:{neck:[.53,.05],shN:[.33,.24],shF:[.8,.24],hipN:[.42,.8],hipF:[.63,.78]},body_back:{neck:[.52,.03],shN:[.24,.24],shF:[.76,.24],hipN:[.38,.8],hipF:[.62,.8]}},Cs=560,Ra=470,oc=Ra-4,ky=.86,gu=426,Wn=(i,t,e)=>i+(t-i)*e,mu=i=>i*i*(3-2*i),Di=class{constructor(t,e,n,s=0){this.tune(t,e,n),this.xp=s,this.y=s,this.v=0}tune(t,e,n){let s=2*Math.PI*t;return this.k1=e/(Math.PI*t),this.k2=1/(s*s),this.k3=n*e/s,this}step(t,e){if(!(t>0))return this.y;let n=(e-this.xp)/t;this.xp=e;let s=Math.max(this.k2,t*t/2+t*this.k1/2,t*this.k1);return this.y+=t*this.v,this.v+=t*(e+this.k3*n-this.y-this.k1*this.v)/s,this.y}},fu=gu/1.75,Me={stride:1.6,cadence:3,contact:.2,hop:.19,crouch:15,kickX:22,kickH:30,passH:14,reachX:6,reachH:16,arm:.9,flare:.35,lean:.12,leanAcc:.012,rock:.03,squash:.015,headBob:9,hatDrag:22,scarf:.38,breathe:12},lc=[[0,0,0,0,0],[.16,1.12,.02,1.12,.56],[.26,1,.012,1,.5],[.5,1,.012,1,.48],[.62,0,-.015,-1,-.12],[.74,0,-.012,-1,-.12],[1,0,0,0,0]];function pu(i){let t=0;for(;t<lc.length-2&&i>lc[t+1][0];)t++;let e=lc[t],n=lc[t+1],s=mu(Math.max(0,Math.min(1,(i-e[0])/(n[0]-e[0]))));return{crouch:Wn(e[1],n[1],s),sq:Wn(e[2],n[2],s),arm:Wn(e[3],n[3],s),lean:Wn(e[4],n[4],s)}}var Ap=new Map;function By(i,t=.4){if(!i)return i;let e=Ap.get(i);if(e)return e;e=document.createElement("canvas"),e.width=i.width,e.height=i.height;let n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data,a=e.width,o=e.height,l=new Array(o).fill(0);for(let d=0;d<o;d++){let u=0;for(let m=0;m<a;m++)r[(d*a+m)*4+3]>128&&u++;l[d]=u}let c=Math.max(...l),h=o-1;for(;h>o*.6&&l[h]<c*t;){for(let d=0;d<a;d++)r[(h*a+d)*4+3]=0;h--}for(let d=1;d<=3&&h-d+1>0;d++){let u=h-d+1,m=d/4;for(let x=0;x<a;x++)r[(u*a+x)*4+3]*=m}return n.putImageData(s,0,0),Ap.set(i,e),e}var Rp={cut:[[0,0],[58,0],[58,33],[53,40],[53,70],[28,106],[0,106]],knot:[58,27]},Cp=new Map;function zy(i){let t=Cp.get(i);if(t)return t;let e=()=>{let l=document.createElement("canvas");return l.width=i.width,l.height=i.height,l},n=l=>{l.beginPath(),Rp.cut.forEach(([c,h],d)=>d?l.lineTo(c,h):l.moveTo(c,h)),l.closePath()},s=e(),r=s.getContext("2d");r.save(),n(r),r.clip(),r.drawImage(i,0,0),r.restore();let a=e(),o=a.getContext("2d");return o.drawImage(i,0,0),o.globalCompositeOperation="destination-out",n(o),o.fill(),t={body:a,tails:s},Cp.set(i,t),t}function Hy(i,t,e,n){(i.width!==t.width||i.height!==t.height)&&(i.width=t.width,i.height=t.height);let s=i.getContext("2d");s.clearRect(0,0,i.width,i.height),s.drawImage(t,0,n,t.width,t.height-n,0,n,t.width,t.height-n);for(let r=0;r<n;r+=2){let a=(n-r-1)/n;s.drawImage(t,0,r,t.width,2,e*a*a,r,t.width,2)}return i}var Gy={head:72,head_back:80};function Vy(i,t,e,n){let s=0;for(;s<i.length-2&&n>i[s+1][0];)s++;let r=i[s],a=i[s+1],o=a[0]-r[0],l=Math.max(0,Math.min(1,(n-r[0])/o)),c=(p,f)=>p===0?t[f-1]:p===i.length-1?e[f-1]:(i[p+1][f]-i[p-1][f])/(i[p+1][0]-i[p-1][0]),h=l*l,d=h*l,u=2*d-3*h+1,m=d-2*h+l,x=-2*d+3*h,g=d-h;return[1,2].map(p=>u*r[p]+m*o*c(s,p)+x*a[p]+g*o*c(s+1,p))}var Tr=class{constructor(t=document.createElement("canvas")){this.c=t,t.width=Cs,t.height=Ra,this.g=t.getContext("2d"),this.hc=document.createElement("canvas"),this.t=Math.random()*10,this.ph=Me.contact/2*Math.PI,this.w=0,this.hx=1,this.s01=0,this.lean=0,this.up=0,this.blinkIn=1.5+Math.random()*3,this.blinkT=0,this.pose=null,this.poseT=0,this.poseDur=1,this.beat=pu(0),this.wF=new Di(3.2,.9,0),this.crouchF=new Di(4,.5,0),this.leanF=new Di(2.4,.5,-.3),this.headF=new Di(3.5,.45,0),this.bobF=new Di(4.5,.4,0),this.hatF=new Di(2.1,.3,0),this.scarfF=new Di(1.7,.3,0),this.bodyUp=0,this.headDy=0,this.hat=0,this.scarf=0,this.out={lift:0,sq:0}}part(t){return he["rw_"+t]}update(t,{speed01:e=0,dist:n=0,go:s=!1,hx:r=null,back:a=!1,stir:o=!1,hold:l=null,pose:c=null,poseT:h=0,poseDur:d=1}={}){this.t+=t;let u=Me.contact;r!=null&&(this.hx=r);let m=t>0?(e-this.s01)/t:0;this.s01=e;let x=this.w=Math.max(0,Math.min(1.1,this.wF.step(t,s?Math.min(1,e*1.4):0))),g=Math.min(1,x),p=n/Me.stride;this.ph/Math.PI-Math.floor(this.ph/Math.PI)>=u&&x>.05&&(p=Math.max(p,t*Me.cadence*Math.min(1,x*2))),this.ph+=p*Math.PI,this.blinkIn-=t,this.blinkIn<=0&&(this.blinkT=.13,this.blinkIn=2.2+Math.random()*3.5,Math.random()<.2&&(this.blinkIn=.25)),this.blinkT=Math.max(0,this.blinkT-t);let E=this.ph/Math.PI,P=E-Math.floor(E),M=Me.hop*fu*Math.sqrt(g),w=M*Math.sin(Math.PI*(P-u/2))**2,T=M*Math.sin(Math.PI*u/2)**2;this.up=M>0?w/M:0,this.out.lift=Math.max(0,w-T)/fu;let L=this.beat=c==="witch_pick"&&d>0?pu(Math.min(1,1-h/d)):pu(0);this.crouchF.tune(4,.5,s?0:-.8);let v=Math.max(-1,this.crouchF.step(t,s?Me.crouch*Math.min(1,e*1.4):0)),S=Math.min(w,T)-v,R=Me.lean*Math.min(1,e)+Me.leanAcc*Math.max(-12,Math.min(12,m)),U=this.leanF.step(t,R),F=c==="witch_pick"?L.lean+U:U+L.lean+(o?.06:0);this.lean=F,this.headLag=(this.headF.step(t,F)-F)*.8,this.bodyUp=w+S,this.headDy=Math.max(-Me.headBob,Math.min(Me.headBob,this.bodyUp-this.bobF.step(t,this.bodyUp))),this.hat=this.hatF.step(t,-Me.hatDrag*Math.min(1,e))-this.headDy*1.6,this.scarf=this.scarfF.step(t,Me.scarf*Math.min(1,e))+this.headDy*.012+Math.sin(this.t*13)*.05*g,this.out.sq=Me.squash*g*Math.cos(2*Math.PI*(P-u/2))+L.sq,this.draw({back:a,stir:o,pick:L.crouch,arm:L.arm,hold:l,U:E,hipUp:S,w:g})}foot(t,e){let n=Me.contact,s=n*Me.stride*fu*this.hx/2*Math.min(1,e*1.25),r=-2*s/n;if(t<n)return[s*(1-2*t/n),0];let a=this.hx,o=[[n,-s,0],[.6,-s-Me.kickX*a*e,Me.kickH*e],[1+n/2,0,Me.passH*e],[1.6,s+Me.reachX*a*e,Me.reachH*e],[2,s,0]];return Vy(o,[r,0],[r*.6,-Me.reachH*e],t)}draw({back:t,stir:e,pick:n,arm:s=0,hold:r=null,U:a=this.ph/Math.PI,hipUp:o=0,w:l=0}){let c=this.g,h=this.t,d=Me.contact;c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,Cs,Ra);let u=t?"body_back":"body",m=ii[u],x=this.part(u),g=this.part("leg"),p=this.part("arm");if(!x||!g||!p)return;let f=Cs*.5,E=Math.sin(Math.PI*(a-d/2)),P=E*Me.rock*l;c.translate(f,oc),c.rotate(P),c.translate(-f,-oc);let M=(1-ii.leg[1])*g.height,w=oc-M-o+n*6,T=oc-w,L=Wt=>{let[Rt,Yt]=this.foot(Wt,l),ne=T-Yt,qt=-Math.atan2(Rt,ne),ge=Math.max(0,M-Math.hypot(Rt,ne));return{ang:qt,r:ge}},v=(a%2+2)%2,S=(v+1)%2,R=L(v),U=L(S);n&&(R.ang=Wn(R.ang,t?.4:-.4,n),U.ang=Wn(U.ang,t?-.3:.3,n),R.r=Wn(R.r,0,n),U.r=Wn(U.r,0,n));let F=(1-l)*Math.sin(h*2.4)*.014,k=h%2.4/2.4,D=(1-l)*(1-n)*Me.breathe*(k<.625?mu(k/.625):1-mu((k-.625)/.375))-(r&&e?Math.abs(Math.sin(h*7))*6:0),O=f-x.width*.5,W=w-m.hipN[1]*x.height,V=Wt=>[O+m[Wt][0]*x.width,W+m[Wt][1]*x.height],j=[f,w],y=Math.sin(2*Math.PI*(a-d/2))*.015*l,C=Wt=>{c.save(),c.translate(j[0],j[1]+D),c.rotate(this.lean+y),c.scale(1,1+F),c.translate(-j[0],-j[1]),Wt(),c.restore()},A=(Wt,Rt,Yt,ne=0,qt=0)=>{c.save(),c.translate(Yt[0],Yt[1]+qt),c.rotate(ne),c.drawImage(Wt,-Rt[0]*Wt.width,-Rt[1]*Wt.height),c.restore()},N=(Wt,Rt)=>A(g,ii.leg,[Wt+Math.sin(Rt.ang)*Rt.r,w-Math.cos(Rt.ang)*Rt.r],Rt.ang),$=Math.sin(h*1.6)*.04*(1-l),at=-E*Me.arm*l*(t?-1:1)+$,Q=E*Me.arm*.8*l*(t?-1:1)-$,ut=this.up*Me.flare*l;at-=ut,Q+=ut,e&&(at=-1.15+Math.sin(h*7)*.35,Q=-.35+Math.sin(h*7+1)*.12),s>0?(at=Wn(at,-.35-this.lean,s),Q=Wn(Q,.7,s)):s<0&&(at=Wn(at,-1.55-this.lean,-s),Q=Wn(Q,-.5,-s));let X=null;if(r&&!t){let Wt=this.lean+y,Rt=Math.cos(Wt),Yt=Math.sin(Wt),ne=([z,We])=>{let le=z-j[0],I=(We-j[1])*(1+F);return[j[0]+le*Rt-I*Yt,j[1]+D+le*Yt+I*Rt]},qt=(ky-ii.arm[1])*p.height,ge=(z,We,le)=>Math.atan2(z[0]-We,le-z[1])-Wt,Ie=ne(V("shF")),sn=r.a||0;Q=ge(Ie,Ie[0]+qt*.95+Math.cos(sn)*9,Ie[1]-qt*.3+Math.sin(sn)*5),X=this.hand=[Ie[0]-Math.sin(Q+Wt)*qt,Ie[1]+Math.cos(Q+Wt)*qt];let Ee=ne(V("shN")),De=r.tip||X;at=ge(Ee,X[0]+(De[0]-X[0])*.3,X[1]+(De[1]-X[1])*.3)}let et=this.headLag+this.headDy*.004+Math.sin(h*1.1)*.025*(1-l)+n*.22+Math.min(0,s)*.12+(e?.06:0),vt=this.headDy,Nt=t?this.part("head_back"):By(this.part(this.blinkT>0?"blink":"head"));Nt&&Math.abs(this.hat)>.3&&(Nt=Hy(this.hc,Nt,this.hat,Gy[t?"head_back":"head"]));let St=t?ii.head_back:ii.head,Vt=()=>{if(t){c.drawImage(x,O,W);return}let Wt=zy(x),[Rt,Yt]=Rp.knot;c.save(),c.translate(O+Rt,W+Yt),c.rotate(this.scarf),c.drawImage(Wt.tails,-Rt,-Yt),c.restore(),c.drawImage(Wt.body,O,W)};t?(C(()=>{A(p,ii.arm,V("shN"),at),A(p,ii.arm,V("shF"),Q)}),N(V("hipF")[0],U),N(V("hipN")[0],R),C(()=>{Vt(),A(Nt,St,V("neck"),et,vt)})):(C(()=>A(p,ii.arm,V("shF"),Q)),N(V("hipF")[0],U),N(V("hipN")[0],R),C(()=>{Vt(),A(Nt,St,V("neck"),et,vt)}),X&&r.under&&(r.under(c,X),c.save(),c.beginPath(),c.arc(X[0],X[1],p.width*.42,0,7),c.clip(),C(()=>A(p,ii.arm,V("shF"),Q)),c.restore()),C(()=>A(p,ii.arm,V("shN"),at)))}};var Wy=i=>i*i*(3-2*i),Xy=(i,t,e)=>i+(t-i)*e,cc=class{constructor(t,e,n,s){this.world=t,this.S=e,this.spr=t.sprite("witch_idle",1.75*Ra/gu,{x:n,z:s,shadow:1,shadowK:.7}),this.rig=new Tr,this.spr.useCanvas(this.rig.c),this.vx=0,this.vz=0,this.face=1,this.flipT=1,this.flipFrom=1,this.back=!1,this.stepN=0,this.pose=null,this.poseT=0,this.poseDur=1,this.squash=0,this.frozen=!1,this.speed=4.8,this.hx=1,this.goto=null,this.gotoT=0}walkTo(t,e,n,s=1.2){this.goto=[t,e],this.gotoT=s,this.lookX=n}lookAt(t){let e=t>this.x?1:-1;e!==this.face&&(this.flipFrom=this.face,this.face=e,this.flipT=0)}get x(){return this.spr.x}get z(){return this.spr.z}setPose(t,e=.38){this.pose=t,this.poseT=this.poseDur=e,this.squash=.12}hop(){this.squash=.3}update(t,e){let n=this.frozen?0:e.x,s=this.frozen?0:e.z;if(this.goto){let T=this.goto[0]-this.x,L=this.goto[1]-this.z,v=Math.hypot(T,L);if(this.gotoT-=t,v<.1||this.gotoT<=0)this.goto=null,this.vx=this.vz=0,this.lookX!=null&&(this.back=!1,this.lookAt(this.lookX));else{let S=Math.min(1,v*1.8)/v;n=T*S,s=L*S}}let r=Math.hypot(n,s);r>1&&(n/=r,s/=r);let a=n*this.speed,o=s*this.speed,l=a-this.vx,c=o-this.vz,h=Math.hypot(l,c),d=this.speed/(r>.05?.12:.1)*t;h<=d?(this.vx=a,this.vz=o):(this.vx+=l/h*d,this.vz+=c/h*d);let u=this.vx*t,m=this.vz*t,x=this.x+u,g=this.z+m;eu(this.S,x,this.z)&&(x=this.x,u=0,this.vx*=.3),eu(this.S,x,g)&&(g=this.z,m=0,this.vz*=.3),this.spr.mesh.position.x=x,this.spr.mesh.position.z=g;let p=this.rig,f=Math.hypot(this.vx,this.vz);if(Math.abs(this.vx)>.5){let T=this.vx>0?1:-1;T!==this.face&&(this.flipFrom=this.face,this.face=T,this.flipT=0)}Math.abs(this.vz)>.8&&(this.back=this.vz<-.3&&Math.abs(this.vz)>Math.abs(this.vx)*.6),Math.abs(this.vx)>1.2&&Math.abs(this.vz)<1&&(this.back=!1),this.flipT=Math.min(1,this.flipT+t/.07),this.poseT>0&&(this.poseT-=t,this.poseT<=0&&(this.pose=null)),f>.3&&(this.hx+=(Math.abs(this.vx)/f-this.hx)*(1-Math.exp(-t*12))),p.update(t,{speed01:f/this.speed,dist:Math.hypot(u,m),go:r>.05,hx:this.hx,back:this.back,pose:this.pose,poseT:Math.max(0,this.poseT),poseDur:this.poseDur}),this.spr.refresh();let E=Math.floor(p.ph/Math.PI);E!==this.stepN&&(this.stepN=E,p.w>.25&&(ht.step(va(this.world,this.x,this.z)),this.world.puff(this.x+this.face*.12,this.z+.06))),this.squash=Math.max(0,this.squash-t*1.6);let P=this.animExtra(p);this.spr.mesh.position.y=P.lift;let M=this.flipT<1?Math.cos(Wy(this.flipT)*Math.PI)*-1:1,w=this.flipT<1?this.flipT<.5?this.flipFrom*Math.abs(M):this.face*Math.abs(M):this.face;this.spr.flip=!1,this.spr.sx=Math.max(.06,Math.abs(w))*Math.sign(w||1)*P.sx,this.spr.sy=P.sy,this.spr.sync()}animExtra(t=this.rig){let e=Math.sin(this.squash*10)*this.squash*.5*(t===this.rig?1:0)+t.out.sq;return{lift:t.out.lift,sx:1+e,sy:1-e}}},ls=class{constructor(t,e,n,s,r,a={}){this.world=t,this.base=e,this.talkName=a.talk||null,a.rig&&fa[a.rig]?(this.pup=new Ss(a.rig),this.spr=t.sprite(`rn_${a.rig}_head`,this.pup.worldH,{x:s,z:r,shadow:fa[a.rig].h*.5,shadowK:.7}),this.spr.useCanvas(this.pup.c),this.native=1,this.drawT=1):(this.spr=t.sprite(e,n,{x:s,z:r,shadow:n*.5}),this.native=/^crow/.test(e)?-1:1),this.path=[],this.speed=a.speed||2.2,this.t=Math.random()*10,this.face=a.face||1,this.fx=this.face,this.talking=0,this.onArrive=null,this.hopT=0,this.cheerT=0}get x(){return this.spr.x}get z(){return this.spr.z}goTo(t,e){this.path=t.slice(),this.onArrive=e||null}get moving(){return this.path.length>0}hop(){this.hopT=.45}cheer(t=1.4){this.cheerT=t,this.hop()}update(t){this.t+=t;let e=!1;if(this.path.length){let[r,a]=this.path[0],o=r-this.x,l=a-this.z,c=Math.hypot(o,l);if(c<.08){if(this.path.shift(),!this.path.length&&this.onArrive){let h=this.onArrive;this.onArrive=null,h()}}else{let h=Math.min(c,this.speed*t);this.spr.mesh.position.x+=o/c*h,this.spr.mesh.position.z+=l/c*h,Math.abs(o)>.05&&(this.face=o>0?1:-1),e=!0}}this.talking=Math.max(0,this.talking-t),this.hopT=Math.max(0,this.hopT-t),this.cheerT=Math.max(0,this.cheerT-t);let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.35:0;if(this.pup){let r=this.pup,a=this.spr.visible&&Math.abs(this.x-this.world.camera.position.x)<18;this.drawT+=t;let o=a&&this.drawT>=1/30;r.update(t,{speed01:e?Math.min(1,this.speed/2.4):0,talking:this.talking>0,happy:this.cheerT>0,draw:o}),o&&(this.drawT=0,this.spr.refresh()),this.spr.mesh.position.y=n+r.out.lift,this.fx=Xy(this.fx,this.face,Math.min(1,t*12)),this.spr.sx=Math.max(.06,Math.abs(this.fx))*Math.sign(this.fx||1)*(1+r.out.sq),this.spr.sy=1-r.out.sq,this.spr.sync();return}let s=e?Math.abs(Math.sin(this.t*9))*.08:0;this.spr.mesh.position.y=s+n,this.talkName&&this.spr.set(this.talking>0&&Math.floor(this.t*6)%2?this.talkName:this.base),this.spr.sx=this.face*this.native*(e?1+Math.sin(this.t*18)*.02:1),this.spr.sy=1+(e?Math.sin(this.t*18)*.03:Math.sin(this.t*2+1)*.015),this.spr.sync()}},hc=class{constructor(t){this.world=t,this.spr=t.sprite("cat",.72,{x:ct.cat[0],z:ct.cat[1],shadow:.6}),this.t=0,this.hopT=0,this.atStall=!1}get x(){return this.spr.x}get z(){return this.spr.z}hop(){this.hopT=.45}moveToStall(t){if(t===this.atStall)return;this.atStall=t;let[e,n]=t?[ct.myStall[0]+.9,ct.myStall[1]+.35]:ct.cat;this.world.sparkle(this.x,.3,this.z,10,"#e9d6ff"),this.spr.setPos(e,n),this.world.sparkle(e,.3,n,10,"#e9d6ff")}update(t){this.t+=t,this.hopT=Math.max(0,this.hopT-t);let e=this.world.night>.6&&!this.atStall;this.spr.set(e?"cat_sleep":"cat"),this.spr.h=e?.5:.72;let n=this.hopT>0?Math.sin((1-this.hopT/.45)*Math.PI)*.3:0;this.spr.mesh.position.y=n,this.spr.sy=1+Math.sin(this.t*(e?1.2:2.2))*(e?.035:.02),this.spr.sx=-1,this.spr.sync(),e&&Math.random()<t*.4&&this.world.soft.add({x:this.x+.2,y:.6,z:this.z,vx:.15,vy:.35,vz:0,life:2,s:3,c:"#ffffff",a:.7,fadeIn:.3})}},uc=["pip","wren","basil"];function Pp(i,t){let e={};for(let l of t)if(l.stall){let[c,h]=xi[l.id],d=c+1.8,u=h+.15,m=new ls(i,l.sprite,1.6,d,u,{face:d<ct.fountain[0]?1:-1,rig:l.rig});m.home=[d,u],e[l.id]=m}let n=[[38,1.8],[45.5,1.6],[44,-2.6],[40,-2.4],[37.5,.6],[46.5,.4],[41,4.6],[43.5,4.8]],s=Object.fromEntries(t.map(l=>[l.id,l])),r=new ls(i,s.pip.sprite,1.55,44,2.4,{speed:1.7,rig:s.pip.rig}),a=new ls(i,s.bramble.sprite,1.6,39,-1.4,{speed:1.5,rig:s.bramble.rig}),o=new ls(i,s.basil.sprite,1.6,46,-1.8,{speed:1.3,rig:s.basil.rig});for(let l of[r,a,o])l.wander=n,l.wait=1+Math.random()*3;return e.pip=r,e.wren=a,e.basil=o,e}function Ip(i,t){for(let e of uc){let n=i[e];if(!(!n||n.busy)&&!n.moving&&(n.wait-=t,n.wait<=0)){let s=n.wander[Math.floor(Math.random()*n.wander.length)];n.goTo([[s[0]+(Math.random()-.5),s[1]+(Math.random()-.5)]],()=>{n.wait=2+Math.random()*4})}}}var Fe={cham:{name:"Chamomile",icon:"i_cham",color:"#f3e7b0",path:[[1.5,1.2],[3.2,1.6]]},lav:{name:"Lavender",icon:"i_lav",color:"#a98be0",path:[[-1.2,-.8],[-2,-2.2],[-3.2,-2.6]]},man:{name:"Mandrake",icon:"i_man",color:"#e8d2a6",path:[[3,0],[4,1.5]]},mush:{name:"Blue Mushroom",short:"Blue Cap",icon:"i_mush",color:"#7fa7e8",path:[[.8,1.5],[-.4,2.6],[.6,4]]},feather:{name:"Owl Feather",short:"Feather",icon:"i_feather",color:"#f2efe8",path:[[-1.6,.6],[-3.4,.4]]},berry:{name:"Wild Berry",short:"Berry",icon:"i_berry",color:"#c8455a",path:[[.9,.9],[2.3,1.4]],wild:!0,from:"Grows wild in Whisperwood."},moth:{name:"Wood Moth",short:"Moth",icon:"i_moth",color:"#d9c8e8",path:[[-1.5,-.3],[-3,-.1],[-3.4,.5]],wild:!0,from:"Caught with your net."},glowbug:{name:"Glowbug",icon:"i_glowbug",color:"#d8f27a",path:[[1.8,.2],[3.6,.75]],wild:!0,from:"Caught with your net, after dark."},ladybug:{name:"Ladybug",icon:"i_ladybug",color:"#d8453a",path:[[.4,1.5],[.7,2.8]],wild:!0,from:"Caught with your net."},beetle:{name:"Moss Beetle",short:"Beetle",icon:"i_beetle",color:"#3f8a6e",path:[[-1.3,-.9],[-2.5,-2.1]],wild:!0,from:"Hides under fallen leaves."},minnow:{name:"Pond Minnow",short:"Minnow",icon:"i_minnow",color:"#9fb8c8",path:[[-1.6,.1],[-3.3,.5]],wild:!0,from:"Caught at Willow Pond."},bluegill:{name:"Bluegill",icon:"i_bluegill",color:"#5a8cc8",path:[[1.2,.5],[2.35,1.4]],wild:!0,from:"Caught at Willow Pond."},carp:{name:"Golden Carp",short:"Carp",icon:"i_carp",color:"#f0a040",path:[[.3,1.8],[.9,3.6],[1.4,5.5]],wild:!0,from:"A rare bite at Willow Pond."}},Rs=[.6,1.1,1.6],xu=[2.2,1.5,1],ee={sleep:{name:"Sleep Potion",short:"Sleep",medal:"m_moon",potion:"p_round",at:[-5.1,-4.3],base:60,liquid:"#9b7fe0",hint:"deep in the lower-left fog"},heal:{name:"Healing Potion",short:"Healing",medal:"m_heart",potion:"p_heart",at:[4.7,2.8],base:50,liquid:"#e98aa0",hint:"up and to the right"},glow:{name:"Glow Potion",short:"Glow",medal:"m_sun",potion:"p_gold",at:[7,1.5],base:70,liquid:"#f2c75c",hint:"far to the right"},luck:{name:"Luck Potion",short:"Luck",medal:"m_star",potion:"p_tube",at:[1.4,5.5],base:120,liquid:"#7fd6c4",hint:"north, past the brambles"},calm:{name:"Calm Potion",short:"Calm",medal:"m_drop",potion:"p_tube",at:[-6.6,1],base:55,liquid:"#8cc8f0",hint:"far to the left"}},_u=[{at:[-2.4,1.7],r:.95},{at:[3.4,-2.3],r:1.05},{at:[2.9,4.1],r:.8}],Ps=24,Is=16,Pa={cham:{name:"Chamomile",yield:2,growMin:4,sprite:["cham_0","cham_1","cham_2"]},lav:{name:"Lavender",yield:2,growMin:6,sprite:["lav_0","lav_1","lav_2"]},man:{name:"Mandrake",yield:1,growMin:15,sprite:["man_0","man_1","man_2"]}},_i=[{id:"letter",text:"Read Granny's letter in the mailbox"},{id:"harvest",text:"Harvest herbs in your garden",need:3},{id:"talk",text:"A customer is at your door. Say hello"},{id:"brew",text:"Brew a Sleep Potion at the cauldron"},{id:"deliver",text:"Give the Sleep Potion to Mr. Crow"},{id:"town",text:"Follow the path east to Mossbrook"},{id:"board",text:"Check the discovery board in the square"},{id:"stall",text:"Open your stall. Kuro will mind it"},{id:"buy",text:"Buy a Blue Mushroom from Mira's stall"},{id:"mystery",text:"Something glows in the north fog. Brew it"},{id:"free",text:"Your garden, stall and customers run on the real clock"}],dc=[{id:"mira",name:"Mira",sprite:"pt_bear",rig:"bear",stall:{sprite:"stall_red",title:"Mira's Remedies",line:"Fresh from the north woods! Blue caps are rare this week.",items:[{ing:"mush",price:40,stock:3},{ing:"feather",price:25,stock:2}]}},{id:"juniper",name:"Juniper",sprite:"pt_turtle",rig:"turtle",stall:{sprite:"stall_green",title:"Juniper's Garden",line:"Seeds and sprigs, picked this morning.",items:[{ing:"cham",price:12,stock:5},{ing:"lav",price:15,stock:4}]}},{id:"oz",name:"Oz",sprite:"pt_fish",rig:"fish",stall:{sprite:"stall_blue",title:"Oz's Odd Bottles",line:"Rare roots. Ask about my Glow recipe.",items:[{ing:"man",price:35,stock:2}]}},{id:"pip",name:"Pip",sprite:"pt_duck",rig:"duck"},{id:"bramble",name:"Wren",sprite:"pt_raccoon",rig:"raccoon"},{id:"basil",name:"Basil",sprite:"pt_croc",rig:"croc"}],vu=["anyone selling moon dew?","WTS lavender x10, cheap!","who found Healing first??","the north fog is huge","Kuro is so cute omg","buying blue caps 45 each","my mandrake yelled at me","Glow sells great at night"],yu=[{effect:"heal",who:"Juniper",when:"3 days ago"},{effect:"glow",who:"Oz",when:"yesterday"}],Er=[{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Hello, young witch. I haven't slept in three nights. The owls keep singing. Do you have something to help me sleep?",thanks:"Ah... I can almost hear my pillow calling. Thank you, little witch."},{who:"pip",name:"Pip",sprite:"pt_duck",rig:"duck",want:"heal",ask:"I fell off my broom. Again. Got anything for scraped knees?",thanks:"Wow, it stopped stinging already! You are good at this."},{who:"wren",name:"Wren",sprite:"pt_raccoon",rig:"raccoon",want:"glow",ask:"The forest gets so dark on my way home. Could you make me something that glows?",thanks:"It shines like a tiny moon! I will tell everyone in town."},{who:"crow",name:"Mr. Crow",sprite:"pt_crow",rig:"crow",want:"sleep",ask:"Me again. The owls are back, and louder. Another Sleep Potion, please?",thanks:"Bless you. I shall sleep like a stone."}];var fc=class{constructor(t){this.world=t,this.plots=ya.map((e,n)=>({...e,i:n,spr:t.sprite("cham_0",.6,{x:e.x,z:e.z+.15,shadow:.7,sway:.03}),stage:-1,crop:null,pop:0,tw:Math.random()*4}))}state(t){let e=G.plots[t],n=Pa[e.crop],s=n.growMin*6e4,r=me()-e.at;return{crop:e.crop,def:n,k:Math.max(0,Math.min(1,r/s)),ready:r>=s,left:s-r}}readyCount(){return this.plots.filter(t=>this.state(t.i).ready).length}update(t,e){for(let n of this.plots){let s=this.state(n.i),r=s.ready?2:s.k<.45?0:1;if(r!==n.stage||s.crop!==n.crop){let l=n.stage>=0&&r>n.stage;n.stage=r,n.crop=s.crop,n.spr.set(s.def.sprite[r]),n.spr.h=Ot(s.def.sprite[r],1.15),n.spr.mat.uniforms.uSway.value=r===0?.02:.05,l&&(n.pop=.5,this.world.sparkle(n.x,.5,n.z,r===2?14:6,r===2?"#fff2a8":"#d8f5b0"))}n.pop=Math.max(0,n.pop-t*1.4);let a=n.pop>0?Math.sin(n.pop*14)*n.pop*.35:0,o=r===2?Math.max(0,Math.sin(e*2.6+n.tw))**6*.06:0;n.spr.sx=1+a+o,n.spr.sy=1-a*.8+o*.5,n.spr.sync(),r===2&&Math.random()<t*.9&&this.world.glow.add({x:n.x+(Math.random()-.5)*.9,y:.4+Math.random()*.7,z:n.z+.1,vx:0,vy:.35,vz:0,life:1.1,s:4+Math.random()*3,c:"#fff1a0",a:.9,k:1,fadeIn:.2})}}harvest(t){let e=this.state(t);if(!e.ready)return null;let n=this.plots[t];return G.plots[t].at=me(),this.world.burst(n.x,.5,n.z,"#7fb04e",12),this.world.sparkle(n.x,.6,n.z,10,"#fff2a8"),this.world.dust(n.x,n.z+.1,5,"#b48a5a"),n.stage=-1,this.update(0,0),n.pop=.6,{crop:e.crop,n:e.def.yield}}nearest(t,e,n=1.35){let s=null,r=n;for(let a of this.plots){let o=Math.hypot(a.x-t,(a.z-e)*1.2);o<r&&(r=o,s=a)}return s}};var Le=50,bu=Ps*Le,Mu=Is*Le,Dn=(i,t)=>[(i+Ps/2)*Le,(Is/2-t)*Le],Ar=["Perfect","Fine","Weak"],Lp=[.14,.93],qy=Math.atan2(.84-.14,(.93-.03)*476/220),pc=.3,Dp=.12;function Np(i,t,e,n,s,r){let a=he.spoon;if(!a)return;let o=n*220/476,l=Math.atan2(e[0]-t[0],t[1]-e[1]);i.save(),i.beginPath(),i.rect(-1e4,s,2e4,r-s),i.clip(),i.translate(t[0]-Math.sin(l)*n*Dp,t[1]+Math.cos(l)*n*Dp),i.rotate(l-qy),i.drawImage(a,-o*Lp[0],-n*Lp[1],o,n),i.restore()}var Su=1.75,$y=13,wu=["lav","cham","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],Up="#86c9d0",gc=new Image;gc.src=te("ui_arrow_r");var mc={intro:{say:"Mrrp! This is your potion map. Your potion starts at the little bottle. Mr. Crow's Sleep Potion is hiding in the fog, down and to the left.",tap:"Show me",ring:".map-frame",mark:"sleep"},drop:{say:"Lavender pulls a brew down and to the left. Drag one into the cauldron.",ring:'.tile[data-id="lav"]'},path:{say:"See the dotted line? Stirring walks your potion along it, and the fog lifts as it goes.",tap:"Got it",ring:".map-frame",mark:"end"},stir:{say:"Hold Stir, or draw circles in the pot.",ring:".stir"},more:{say:"Not there yet. One more Lavender carries it further.",ring:'.tile[data-id="lav"]'},stir2:{say:"Stir again. I will catch the spoon when you reach it.",ring:".stir",mark:"sleep"},bottle:{say:"Right on it! The closer to the middle, the better the potion. Bottle it!",ring:".bottle"},back:{say:"Oops, you went past. Hold Moon water: it drifts your potion back toward the start.",ring:".water"}},La=(i,t,e)=>{let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=a=>Math.round((n>>a&255)*(1-e)+(s>>a&255)*e);return"#"+(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")},Ls=(i,t)=>La(i,t>0?"#ffffff":"#1d1430",Math.abs(t));function Ia(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var xc=class{constructor(t,e){this.hooks=e,this.isOpen=!1,this.t=0;let n=this.el=Ia("section","brew hidden");n.innerHTML=`
      <div class="brew-bg"></div>
      <div class="brew-ask hidden"><div class="ribbon sm"><span></span></div><div class="speech sm"><p></p></div></div>
      <div class="brew-stage">
        <canvas class="brew-witch"></canvas>
        <div class="pot">
          <canvas class="liquid"></canvas>
          <img class="pot-img" src="${te("cauldron_pot")}" alt="" draggable="false">
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
          <button class="btn-pill water" data-k="Q"><img src="${te("i_dew")}" alt=""><span>Moon water</span></button>
          <button class="btn-green stir" data-k="Space"><img src="${te("spoon")}" alt=""><span>Hold to stir</span></button>
          <button class="btn-green bottle" disabled><img src="${te("bottle")}" alt=""><span>Bottle it</span></button>
        </div>
      </div>
      <button class="btn-pill dump"><span>Dump</span></button>
      <button class="btn-close" aria-label="Close"></button>
      <div class="lesson-ring hidden"><img src="${te("ui_arrow_r")}" alt=""></div>
      <img class="lesson-ghost hidden" src="${te("i_lav")}" alt="">
      <div class="brew-coach hidden"><img class="coach-cat" src="${te("cat")}" alt=""><div class="speech coach-say"><p></p><button class="btn-green coach-ok hidden"><span></span></button></div></div>
      <div class="brew-toast"></div>`,t.appendChild(n),this.$=s=>n.querySelector(s),this.mapc=this.$(".mapc"),this.liq=this.$(".liquid"),this.fx=this.$(".potfx"),this.rig=new Tr(n.querySelector(".brew-witch")),this.potEl=this.$(".pot"),this.base=this.buildBase(),this.fog=document.createElement("canvas"),this.fog.width=bu/2,this.fog.height=Mu/2,this.cam={x:0,y:0},this.bubbles=[],this.steam=[],this.drops=[],this.stirHold=!1,this.waterHold=!1,this.stirV=0,this.spoonA=-1,this.circleAmt=0,this.wire(),this.reset(!0)}buildBase(){let t=document.createElement("canvas");t.width=bu,t.height=Mu;let e=t.getContext("2d");e.drawImage(he.mapbg,0,0,bu,Mu),e.fillStyle="rgba(90,60,40,0.18)";for(let r=-11;r<=11;r++)for(let a=-7;a<=7;a++){let[o,l]=Dn(r,a);e.beginPath(),e.arc(o,l,2,0,7),e.fill()}for(let r of _u){let[a,o]=Dn(r.at[0],r.at[1]),l=r.r*Le,c=e.createRadialGradient(a,o,l*.2,a,o,l*1.15);c.addColorStop(0,"rgba(58,92,48,0.75)"),c.addColorStop(.75,"rgba(58,92,48,0.45)"),c.addColorStop(1,"rgba(58,92,48,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,l*1.15,0,7),e.fill(),e.strokeStyle="rgba(40,58,30,0.9)",e.lineWidth=3,e.lineCap="round";for(let d=0;d<9;d++){let u=d*.7+r.r,m=l*(.35+d%3*.22);e.beginPath(),e.arc(a,o,m,u,u+2.2),e.stroke();for(let x=0;x<4;x++){let g=u+x*.55,p=a+Math.cos(g)*m,f=o+Math.sin(g)*m;e.beginPath(),e.moveTo(p,f),e.lineTo(p+Math.cos(g)*9,f+Math.sin(g)*9),e.stroke()}}let h=l*.95;e.drawImage(he.m_thorn,a-h/2,o-h/2,h,h)}let[n,s]=Dn(0,0);return e.strokeStyle="rgba(90,55,35,0.8)",e.lineWidth=3,e.beginPath(),e.arc(n,s,16,0,7),e.stroke(),e.beginPath(),e.moveTo(n-24,s),e.lineTo(n+24,s),e.moveTo(n,s-24),e.lineTo(n,s+24),e.stroke(),t}rebuildFog(){let t=this.fog.getContext("2d"),e=this.fog.width,n=this.fog.height;t.globalCompositeOperation="source-over",t.clearRect(0,0,e,n),t.fillStyle="rgba(232,226,240,0.8)",t.fillRect(0,0,e,n);let s=9,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<260;a++){let o=r()*e,l=r()*n,c=20+r()*70,h=r(),d=t.createRadialGradient(o,l,0,o,l,c),u=h<.5?`rgba(255,255,255,${.35+h*.5})`:`rgba(170,160,196,${(h-.5)*.45})`;d.addColorStop(0,u),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,l,c,0,7),t.fill()}t.globalCompositeOperation="destination-out",this.cut(0,0,!1),this.cut(.6,.3,!1),this.cut(-.6,-.3,!1);for(let[a,o]of G.fog)this.cut(a,o,!1);t.globalCompositeOperation="source-over"}cut(t,e,n=!0){let s=this.fog.getContext("2d");n&&(s.globalCompositeOperation="destination-out");let r=(t+Ps/2)*Le/2,a=(Is/2-e)*Le/2,o=Su*Le/2,l=s.createRadialGradient(r,a,o*.35,r,a,o);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=l,s.beginPath(),s.arc(r,a,o,0,7),s.fill(),n&&(s.globalCompositeOperation="source-over")}reveal(t,e){let n=this.lastReveal;if(n&&Math.hypot(n[0]-t,n[1]-e)<.22)return;this.lastReveal=[t,e];let s=[Math.round(t*10)/10,Math.round(e*10)/10];G.fog.push(s),G.fog.length>4e3&&G.fog.splice(0,500),this.cut(s[0],s[1]),Math.random()<.18&&ht.reveal();for(let[r,a]of Object.entries(ee))!this.seen[r]&&Math.hypot(a.at[0]-t,a.at[1]-e)<Su+.3&&(this.seen[r]=!0,this.spot(r))}isSeen(t){if(this.seen[t])return!0;let e=ee[t];return G.fog.some(([n,s])=>Math.hypot(e.at[0]-n,e.at[1]-s)<Su)}spot(t){this.flashEffect={id:t,t:0},ht.near(),this.toast(`You spotted <b>${ee[t].name}</b> in the fog`,ee[t].medal)}reset(t=!1){this.pos=[0,0],this.path=[],this.trail=[[0,0]],this.ings=[],this.liquidCol=Up,this.curdle=0,this.lastReveal=null,this.nearId=null,this.nearTier=-1,this.nearD=null,this.nearAny=null,this.caught={},this.stirLock=!1,this.lockT=0,this.passed=null,this.catchFx=null,t||this.updateUI()}open(t={}){this.ctx=t,this.isOpen=!0,this.t=0,this.reset(!0),this.seen={};for(let n of Object.keys(ee))(this.isSeen(n)||G.discovered[n])&&(this.seen[n]=!0);this.rebuildFog(),this.cam.x=0,this.cam.y=0;let e=this.$(".brew-ask");t.ask?(e.classList.remove("hidden"),e.querySelector(".ribbon span").textContent=t.ask.name,e.querySelector("p").textContent=t.ask.line):e.classList.add("hidden"),this.el.classList.remove("hidden"),this.el.classList.add("opening"),setTimeout(()=>this.el.classList.remove("opening"),600),this.lesson=null,!G.lesson&&!G.discovered.sleep&&((G.inv.lav||0)<2&&(G.inv.lav=2,this.hooks.onInv&&this.hooks.onInv()),t.target||(t.target="sleep")),this.buildShelf(),this.resize(),this.updateUI(),this.lessonGo(!G.lesson&&!G.discovered.sleep?"intro":null),ht.open()}close(){this.isOpen&&(this.isOpen=!1,this.stirHold=this.waterHold=!1,this.el.classList.add("hidden"),xe(),ht.close(),this.hooks.onClose&&this.hooks.onClose())}wire(){let t=this.$;t(".btn-close").addEventListener("click",()=>this.close()),t(".dump").addEventListener("click",()=>this.dump()),t(".bottle").addEventListener("click",()=>this.bottle()),t(".coach-ok").addEventListener("click",()=>this.lessonNext());let e=(o,l)=>{let c=d=>{d.preventDefault(),this[l]=!0,o.classList.add("down"),o.setPointerCapture&&d.pointerId!=null&&o.setPointerCapture(d.pointerId)},h=()=>{this[l]=!1,o.classList.remove("down")};o.addEventListener("pointerdown",c),o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};e(t(".stir"),"stirHold"),e(t(".water"),"waterHold");let n=t(".pot-hit"),s=null,r=o=>{let l=this.potEl.getBoundingClientRect();return Math.atan2((o.clientY-(l.top+l.height*.17))*2.6,o.clientX-(l.left+l.width*.5))};n.addEventListener("pointerdown",o=>{s={id:o.pointerId,a:r(o)},n.setPointerCapture(o.pointerId)}),n.addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=r(o),c=l-s.a;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),s.a=l,this.circleAmt+=Math.abs(c)*.32,this.spoonA=l,this.circleAt=this.t});let a=()=>{s=null};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),window.addEventListener("resize",()=>this.isOpen&&this.resize())}buildShelf(){let t=this.$(".shelf");t.innerHTML="";for(let e of wu){let n=Fe[e],s=G.inv[e]||0;if(n.wild&&!s&&!G.found[e])continue;let r=Ia("div","tile"+(s?"":" empty"));r.dataset.id=e,r.innerHTML=`<img src="${te(n.icon)}" alt="" draggable="false"><b class="count">${s}</b><i class="nm">${n.short||n.name}</i>`,t.appendChild(r),r.addEventListener("pointerdown",a=>this.dragStart(a,e,r))}}refreshShelf(){for(let t of this.$(".shelf").children){let e=G.inv[t.dataset.id]||0;t.querySelector(".count").textContent=e,t.classList.toggle("empty",!e)}}dragStart(t,e,n){if(t.preventDefault(),this.lessonLocked(e)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),ht.click(),this.coachBump();return}if(!(G.inv[e]>0)){n.classList.remove("nope"),n.offsetWidth,n.classList.add("nope"),ht.click(),this.toast(`No ${Fe[e].name} left. Grow or buy more`);return}let s=Ia("img","drag-ghost");s.src=te(Fe[e].icon),document.body.appendChild(s);let r=t.clientX,a=t.clientY,o=0,l=(u,m)=>{s.style.transform=`translate(${u-40}px, ${m-40}px) rotate(${Math.sin(performance.now()/120)*8}deg)`};l(r,a),ht.pop(),n.classList.add("lift");let c=(u,m)=>{let x=this.potEl.getBoundingClientRect();return u>x.left&&u<x.right&&m>x.top-x.height*.3&&m<x.top+x.height*.6},h=u=>{o=Math.max(o,Math.hypot(u.clientX-r,u.clientY-a)),l(u.clientX,u.clientY),this.potEl.classList.toggle("target",c(u.clientX,u.clientY))},d=u=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),n.classList.remove("lift"),this.potEl.classList.remove("target");let m=o<10;if(m||c(u.clientX,u.clientY))this.drop(e,s,m?null:[u.clientX,u.clientY]);else{s.classList.add("back");let x=n.getBoundingClientRect();s.style.transform=`translate(${x.left+x.width/2-40}px, ${x.top+x.height/2-40}px) scale(0.6)`,setTimeout(()=>s.remove(),250)}};window.addEventListener("pointermove",h),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)}drop(t,e,n){let s=this.potEl.getBoundingClientRect(),r=s.left+s.width*.5-40,a=s.top+s.height*.12-40;e.classList.add("fall"),e.style.transform=`translate(${r}px, ${a}px) rotate(200deg) scale(0.55)`,G.inv[t]--,this.refreshShelf(),this.hooks.onInv&&this.hooks.onInv(),setTimeout(()=>{e.remove(),this.addIngredient(t)},n?230:330)}addIngredient(t){let e=Fe[t],n=this.path.length?this.path[this.path.length-1]:this.pos;for(let[r,a]of e.path)this.path.push([n[0]+r,n[1]+a]);this.ings.push(t),this.liquidCol=La(this.liquidCol,e.color,this.ings.length===1?.65:.45),ht.splash(),Ge(12),this.splash(e.color),this.pathFlash=1,this.updateUI();let s=this.lesson;(s==="drop"||s==="more"||s==="path"||s==="stir")&&this.lessonGo(this.ings.length>=2?"stir2":"path")}sweetStop(t,e,n,s,r,a){let o=Math.hypot(n-t,s-e);if(o<1e-6)return null;let l=(n-t)/o,c=(s-e)/o,h=null;for(let[d,u]of Object.entries(ee)){if(this.caught[a+d])continue;let m=(u.at[0]-t)*l+(u.at[1]-e)*c;m<=.002||m>r||Math.hypot(u.at[0]-(t+l*m),u.at[1]-(e+c*m))>=Rs[1]||(!h||m<h.s)&&(h={s:m,id:d})}return h}moveAlong(t){for(;t>0&&this.path.length;){let[e,n]=this.path[0],[s,r]=this.pos,a=Math.hypot(e-s,n-r),o=this.sweetStop(s,r,e,n,Math.min(a,t),"s"),l=o?o.s:Math.min(a,t);if(l>=a-1e-9?(this.pos=[e,n],this.path.shift()):this.pos=[s+(e-s)/a*l,r+(n-r)/a*l],t-=Math.max(l,1e-6),this.afterMove(),this.curdle)return;if(o){this.catchSpoon(o.id,"s");return}}}pullWater(t){let[e,n]=this.pos,s=Math.hypot(e,n);if(s<.01)return;let r=this.sweetStop(e,n,0,0,Math.min(t,s),"w"),a=(r?r.s:Math.min(t,s))/s,o=-e*a,l=-n*a;this.pos=[e+o,n+l];for(let c of this.path)c[0]+=o,c[1]+=l;this.liquidCol=La(this.liquidCol,Up,.02),this.afterMove(),r&&this.catchSpoon(r.id,"w")}catchSpoon(t,e){this.caught[e+t]=!0,this.stirV=0,this.stirLock=this.stirHold||this.waterHold,this.lockT=.7,this.catchFx={at:this.pos.slice(),t:0},ht.near(),setTimeout(()=>ht.pop(),90),Ge(18);let n=this.$(".readout");n.classList.remove("hot"),n.offsetWidth,n.classList.add("hot");for(let s of[this.$(".stir"),this.$(".water")])s.classList.remove("down");this.lesson&&t==="sleep"&&this.nearId==="sleep"&&this.lessonGo("bottle")}afterMove(){let[t,e]=this.pos,n=this.trail[this.trail.length-1];Math.hypot(n[0]-t,n[1]-e)>.08&&this.trail.push([t,e]),this.reveal(t,e);for(let o of _u)if(Math.hypot(o.at[0]-t,o.at[1]-e)<o.r*.82){this.curdleNow();return}let s=null,r=1e9;for(let[o,l]of Object.entries(ee)){let c=Math.hypot(l.at[0]-t,l.at[1]-e);c<r&&(r=c,s=o)}let a=r<Rs[0]?0:r<Rs[1]?1:r<Rs[2]?2:-1;(a!==this.nearTier||s!==this.nearId)&&(a>=0&&(this.nearTier<0||a<this.nearTier)&&(ht.near(),Ge(8)),a<0&&this.nearTier>=0&&(this.passed=this.nearId),a>=0&&(this.passed=null),this.nearTier=a,this.nearId=a>=0?s:null,this.updateUI(),this.lesson==="bottle"&&(a<0||a===2)?this.lessonGo("back"):this.lesson==="back"&&s==="sleep"&&a>=0&&a<=1&&this.lessonGo("bottle")),this.nearD=r,this.nearAny=s}curdleNow(){this.curdle=1.4,this.stirHold=!1,this.stirV=0,ht.fail(),Ge(40),this.liquidCol="#6d6a4a",this.el.classList.remove("shake"),this.el.offsetWidth,this.el.classList.add("shake"),this.toast("The brew snagged on the thorns and curdled"),this.path=[],setTimeout(()=>{this.reset(),this.updateUI()},1300)}dump(){this.ings.length&&(ht.pour(),this.splash("#cfd8e6"),this.reset(),this.updateUI(),this.toast("Poured out. The cauldron is fresh again"))}bottle(){if(this.nearTier<0||!this.nearId)return;let t=this.nearId,e=this.nearTier,n=this.ings.slice(),s=ee[t];ht.bottle(),Ge(25),this.lesson&&(this.lessonGo(null),G.lesson=1,G.brewTut=3,xe());let r=this.potEl.getBoundingClientRect(),a=Ia("img","rise-bottle");a.src=te(s.potion),a.style.left=r.left+r.width/2-45+"px",a.style.top=r.top+r.height*.05+"px",document.body.appendChild(a);for(let o=0;o<24;o++)this.steam.push({x:.5+(Math.random()-.5)*.4,y:.17,vx:(Math.random()-.5)*.4,vy:-.4-Math.random()*.6,life:1.2,t:0,s:6+Math.random()*8,c:"#fff6c8",glow:1});setTimeout(()=>a.remove(),1600),this.reset(),this.updateUI(),this.hooks.onBottle(t,e,n,a)}update(t){if(!this.isOpen)return;this.t+=t,this.curdle>0&&(this.curdle=Math.max(0,this.curdle-t));let e=this.nearD!=null&&this.nearD<Rs[1]?.5:1;!this.stirHold&&!this.waterHold&&(this.stirLock=!1),this.lockT=Math.max(0,this.lockT-t);let n=this.stirLock||this.lockT>0,s=this.stirHold&&!n&&this.path.length&&!this.curdle?1.7*e:0;this.stirV+=(s-this.stirV)*Math.min(1,t*(s>this.stirV?5:12));let r=n?0:this.stirV*t+this.circleAmt*e;this.circleAmt=0,r>0&&this.path.length&&!this.curdle&&(this.moveAlong(r),this.stirHold&&(this.spoonA+=t*7),this.stirSound=(this.stirSound||0)+r,this.stirSound>.5&&(this.stirSound=0,ht.stir())),this.waterHold&&!n&&!this.curdle&&(this.pullWater(t*1.1),Math.random()<t*6&&ht.pour()),this.lesson==="path"&&r>0&&this.lessonGo("stir"),(this.lesson==="stir"||this.lesson==="stir2")&&!this.path.length&&this.stirV<.05&&this.lessonGo(this.nearId==="sleep"?"bottle":"more"),this.drawMap(t),this.drawPot(t),this.placeRing()}resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.mapc,this.liq,this.fx]){let n=e.getBoundingClientRect();e.width=Math.max(2,Math.round(n.width*t)),e.height=Math.max(2,Math.round(n.height*t))}}drawMap(t){let e=this.mapc,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.path.length?this.path[this.path.length-1]:this.pos,o=this.pos[0]*.6+a[0]*.4,l=this.pos[1]*.6+a[1]*.4;(this.lesson==="intro"||this.lesson==="drop")&&(o=ee.sleep.at[0]*.5,l=ee.sleep.at[1]*.5);let c=$y,h=c*r/s,d=Math.max(-Ps/2+c/2,Math.min(Ps/2-c/2,o)),u=Math.max(-Is/2+h/2,Math.min(Is/2-h/2,l)),m=1-Math.exp(-t*3);this.cam.x+=(d-this.cam.x)*m,this.cam.y+=(u-this.cam.y)*m;let x=(this.cam.x-c/2+Ps/2)*Le,g=(Is/2-this.cam.y-h/2)*Le,p=c*Le,f=h*Le,E=s/p;n.setTransform(1,0,0,1,0,0),n.drawImage(this.base,x,g,p,f,0,0,s,r),n.setTransform(E,0,0,E,-x*E,-g*E);let P=this.t;for(let[F,k]of Object.entries(ee)){if(!this.seen[F])continue;let[D,O]=Dn(k.at[0],k.at[1]),W=this.nearId===F;for(let V=2;V>=0;V--)n.beginPath(),n.arc(D,O,Rs[V]*Le,0,7),n.fillStyle=`rgba(255,236,170,${W?.16+(2-V)*.06:.07})`,n.fill(),n.setLineDash([6,6]),n.lineDashOffset=-P*12,n.lineWidth=2.2,n.strokeStyle=`rgba(120,80,40,${W&&V>=this.nearTier?.85:.35})`,n.stroke(),n.setLineDash([])}this.trail.length>1&&(n.beginPath(),n.lineWidth=4,n.strokeStyle="rgba(92,52,36,0.75)",n.lineJoin=n.lineCap="round",this.trail.forEach(([F,k],D)=>{let[O,W]=Dn(F,k);D?n.lineTo(O,W):n.moveTo(O,W)}),n.stroke()),n.setTransform(1,0,0,1,0,0),n.drawImage(this.fog,x/2,g/2,p/2,f/2,0,0,s,r),n.setTransform(E,0,0,E,-x*E,-g*E);for(let[F,k]of Object.entries(ee)){if(!this.seen[F])continue;let[D,O]=Dn(k.at[0],k.at[1]),W=this.nearId===F,V=this.flashEffect&&this.flashEffect.id===F?Math.max(0,1-this.flashEffect.t):0,j=Le*(1.25+(W?Math.sin(P*6)*.06:0)+V*.6);n.drawImage(he[k.medal],D-j/2,O-j/2,j,j),n.font=`700 ${Le*.42}px Mali, sans-serif`,n.textAlign="center",n.lineWidth=5,n.strokeStyle="rgba(255,248,230,0.95)",n.strokeText(k.short,D,O+j*.78),n.fillStyle="#5a3424",n.fillText(k.short,D,O+j*.78)}this.flashEffect&&(this.flashEffect.t+=t,this.flashEffect.t>1&&(this.flashEffect=null));let[M,w]=Dn(this.pos[0],this.pos[1]),T=Math.sin(P*3)*3,L=Le*.95,v=Le*(.9+Math.sin(P*4)*.08),S=n.createRadialGradient(M,w,0,M,w,v);S.addColorStop(0,this.nearTier>=0?"rgba(255,240,160,0.9)":"rgba(255,255,255,0.7)"),S.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=S,n.beginPath(),n.arc(M,w,v,0,7),n.fill(),n.save(),n.translate(M,w+T),n.rotate(Math.sin(P*2.2)*.12+(this.curdle?Math.sin(P*40)*.2:0)),n.drawImage(he.bottle,-L*.35,-L*.7,L*.7,L*1),n.restore();for(let[F,k]of Object.entries(ee)){if(this.seen[F])continue;let[D,O]=Dn(k.at[0],k.at[1]),W=this.ctx&&this.ctx.target===F,V=1+Math.sin(P*2.5+D)*.06;if(W){let y=n.createRadialGradient(D,O,0,D,O,Le*1.6);y.addColorStop(0,"rgba(255,226,120,0.55)"),y.addColorStop(1,"rgba(255,226,120,0)"),n.fillStyle=y,n.beginPath(),n.arc(D,O,Le*1.6,0,7),n.fill()}n.globalAlpha=W?.95:.6;let j=Le*.95*V;n.drawImage(he.m_q,D-j/2,O-j/2,j,j),n.globalAlpha=1}if(this.path.length){let F=this.pathFlash||0;this.pathFlash=Math.max(0,F-t*1.5),n.beginPath(),n.lineWidth=5+F*4,n.setLineDash([2,12]),n.lineDashOffset=P*20,n.strokeStyle=`rgba(110,60,40,${.85})`;let[k,D]=Dn(this.pos[0],this.pos[1]);n.moveTo(k,D);for(let[V,j]of this.path){let[y,C]=Dn(V,j);n.lineTo(y,C)}n.stroke(),n.setLineDash([]);let[O,W]=Dn(a[0],a[1]);n.beginPath(),n.arc(O,W,9,0,7),n.fillStyle="rgba(255,250,235,0.9)",n.fill(),n.lineWidth=3,n.strokeStyle="#6e3c28",n.stroke()}if(this.catchFx){let F=this.catchFx;F.t+=t;let[k,D]=Dn(F.at[0],F.at[1]),O=Math.min(1,F.t/.6);n.lineWidth=6*(1-O)+1,n.strokeStyle=`rgba(255,214,90,${1-O})`,n.beginPath(),n.arc(k,D,Le*(.5+O*1.3),0,7),n.stroke(),F.t>.6&&(this.catchFx=null)}let R=this.lesson&&mc[this.lesson].mark;if(R){let F=R==="sleep"?ee.sleep.at:a,[k,D]=Dn(F[0],F[1]),O=Le*(R==="sleep"?1:.55)*(1+Math.sin(P*5)*.06);if(n.setLineDash([]),n.lineWidth=4,n.strokeStyle="rgba(255,206,70,0.95)",n.beginPath(),n.arc(k,D,O,0,7),n.stroke(),gc.complete&&gc.naturalWidth){let W=Le*.9,V=D-O-W*.55-Math.abs(Math.sin(P*4))*Le*.25;n.save(),n.translate(k,V),n.rotate(Math.PI/2),n.drawImage(gc,-W/2,-W*.4,W,W*.8),n.restore()}}n.setTransform(1,0,0,1,0,0);let U=n.createRadialGradient(s/2,r/2,Math.min(s,r)*.42,s/2,r/2,Math.max(s,r)*.72);U.addColorStop(0,"rgba(60,35,20,0)"),U.addColorStop(1,"rgba(60,35,20,0.35)"),n.fillStyle=U,n.fillRect(0,0,s,r)}drawPot(t){let e=this.liq,n=e.getContext("2d"),s=e.width,r=e.height;if(s<4)return;let a=this.t,o=this.liquidCol;this.nearAny&&this.nearD<2.4&&!this.curdle&&(o=La(o,ee[this.nearAny].liquid,Math.max(0,1-this.nearD/2.4)*.8)),this.shownCol=this.shownCol?La(this.shownCol,o,Math.min(1,t*4)):o;let l=s*.504,c=r*.172,h=s*.325,d=r*.125;n.clearRect(0,0,s,r);let u=n.createRadialGradient(l,c-d*.3,h*.1,l,c,h);u.addColorStop(0,Ls(this.shownCol,.35)),u.addColorStop(.6,this.shownCol),u.addColorStop(1,Ls(this.shownCol,-.45)),n.fillStyle=u,n.beginPath(),n.ellipse(l,c,h,d,0,0,7),n.fill(),n.save(),n.beginPath(),n.ellipse(l,c,h*.98,d*.95,0,0,7),n.clip(),n.strokeStyle=Ls(this.shownCol,.5),n.globalAlpha=.45,n.lineWidth=s*.006,n.lineCap="round";for(let A=0;A<3;A++){let N=this.spoonA*.6+A*2.1+a*.4;n.beginPath(),n.ellipse(l,c,h*(.35+A*.2),d*(.35+A*.2),0,N,N+1.3),n.stroke()}n.globalAlpha=1,Math.random()<t*(this.curdle?3:9+this.stirV*6)&&this.bubbles.push({x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.4,r:0,max:s*(.012+Math.random()*.022),t:0,life:.6+Math.random()*.8});for(let A=this.bubbles.length-1;A>=0;A--){let N=this.bubbles[A];if(N.t+=t,N.t>N.life){this.bubbles.splice(A,1),Math.random()<.25&&ht.bubble(),this.steam.push({x:.504+N.x*.325*.5,y:.172+N.y*.125*.5,vx:0,vy:-.15,life:.35,t:0,s:4,c:Ls(this.shownCol,.6),pop:1});continue}let $=N.max*Math.min(1,N.t/(N.life*.7)),at=l+N.x*h*.5,Q=c+N.y*d*.5;n.fillStyle=Ls(this.shownCol,.25),n.beginPath(),n.ellipse(at,Q,$,$*.8,0,0,7),n.fill(),n.strokeStyle=Ls(this.shownCol,.65),n.lineWidth=s*.003,n.stroke(),n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.arc(at-$*.35,Q-$*.3,$*.22,0,7),n.fill()}let m=this.spoonA,x=l+Math.cos(m)*h*pc,g=c+Math.sin(m)*d*pc;n.strokeStyle=Ls(this.shownCol,.55),n.lineWidth=s*.004,n.globalAlpha=.7,n.beginPath(),n.ellipse(x,g,s*.035,s*.012,0,0,7),n.stroke(),n.globalAlpha=1,n.restore();let p=this.fx,f=p.getContext("2d"),E=p.width,P=p.height;f.clearRect(0,0,E,P);let M=A=>A*E,w=A=>P*(.6+A),T=M(.504+Math.cos(m)*.325*pc),L=w(.172+Math.sin(m)*.125*pc),v=E*.56,S=w(.018),R=this.$(".brew-witch"),U=p.getBoundingClientRect(),F=R.getBoundingClientRect(),k=U.width/E*(Cs/Math.max(1,F.width)),D=(A,N)=>[(U.left-F.left)*Cs/Math.max(1,F.width)+A*k,(U.top-F.top)*Cs/Math.max(1,F.width)+N*k],O=(A,N)=>{let $=D(0,0);return[(A-$[0])/k,(N-$[1])/k]},W=this.stirV>.1||a-(this.circleAt||-9)<.25,V=D(T,L),j=D(0,S)[1];this.rig.update(t,{stir:W,hold:{a:m,tip:V,under:(A,N)=>Np(A,V,N,v*k,-1e4,j)}});let y=this.rig.hand?O(...this.rig.hand):[T+v*.3,L-v*.8];Np(f,[T,L],y,v,S,L-E*.004),Math.random()<t*5&&this.steam.push({x:.504+(Math.random()-.5)*.4,y:.16,vx:(Math.random()-.5)*.04,vy:-.12-Math.random()*.08,life:2.4,t:0,s:14+Math.random()*18,c:"rgba(255,255,255,1)",soft:1});for(let A=this.steam.length-1;A>=0;A--){let N=this.steam[A];if(N.t+=t,N.t>N.life){this.steam.splice(A,1);continue}N.x+=N.vx*t,N.y+=N.vy*t,N.x+=Math.sin(N.t*2+A)*8e-4;let $=N.t/N.life,at=M(N.x),Q=w(N.y);if(N.soft){let ut=N.s*(E/400)*(.6+$*1.4),X=f.createRadialGradient(at,Q,0,at,Q,ut);X.addColorStop(0,`rgba(255,255,255,${.22*(1-$)})`),X.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=X,f.beginPath(),f.arc(at,Q,ut,0,7),f.fill()}else if(N.pop)f.strokeStyle=N.c,f.globalAlpha=1-$,f.lineWidth=2,f.beginPath(),f.arc(at,Q,4+$*14,0,7),f.stroke(),f.globalAlpha=1;else{f.fillStyle=N.c,f.globalAlpha=1-$;let ut=N.s*(E/400);f.beginPath(),f.arc(at,Q,ut*(1-$*.5),0,7),f.fill(),f.globalAlpha=1}}for(let A=this.drops.length-1;A>=0;A--){let N=this.drops[A];if(N.t+=t,N.vy+=1.6*t,N.x+=N.vx*t,N.y+=N.vy*t,N.t>N.life){this.drops.splice(A,1);continue}f.fillStyle=N.c,f.globalAlpha=1-N.t/N.life,f.beginPath(),f.arc(M(N.x),w(N.y),N.s*E/400,0,7),f.fill(),f.globalAlpha=1}let C=this.$(".bottle");C.style.transform=this.nearTier>=0?`scale(${1+Math.max(0,Math.sin(a*5))*.05})`:""}splash(t){for(let e=0;e<18;e++)this.drops.push({x:.504+(Math.random()-.5)*.15,y:.17,vx:(Math.random()-.5)*.5,vy:-.5-Math.random()*.5,t:0,life:.8,s:4+Math.random()*5,c:t});for(let e=0;e<6;e++)this.bubbles.push({x:(Math.random()-.5)*.8,y:(Math.random()-.5)*.6,r:0,max:this.liq.width*(.02+Math.random()*.02),t:0,life:.4+Math.random()*.4});this.potEl.classList.remove("bump"),this.potEl.offsetWidth,this.potEl.classList.add("bump")}updateUI(){let t=this.$(".readout"),e=this.$(".bottle");if(this.nearTier>=0&&this.nearId){let n=ee[this.nearId],s=[2,1,0].map(r=>`<i class="pip ${this.nearTier<=r?"on":""}"></i>`).join("");t.innerHTML=`<img src="${te(n.medal)}" alt=""><div><b>${n.name}</b><span class="tier t${this.nearTier}">${Ar[this.nearTier]}</span></div><div class="pips">${s}</div>`,t.className="readout hot",e.disabled=!1}else{let n=this.ings.length?this.passed?`Went past ${ee[this.passed].short}. Hold Moon water to drift back`:this.path.length?"Stir to follow the dotted path. Fog lifts as you go":"Path used up. Add another ingredient to go further":"Drop an ingredient in the cauldron to draw a path";t.innerHTML=`<p>${n}</p>`,t.className="readout",e.disabled=!0}this.$(".dump").classList.toggle("hidden",!this.ings.length||!!this.lesson),this.$(".water").classList.toggle("hidden",!!this.lesson&&this.lesson!=="back")}lessonGo(t){if(t===this.lesson&&t)return;this.lesson=t;let e=this.$(".brew-coach"),n=this.$(".coach-ok");this.el.classList.toggle("lesson",!!t),this.$(".brew-ask").classList.toggle("hidden",!!t||!(this.ctx&&this.ctx.ask));for(let r of this.$(".shelf").children)r.classList.toggle("locked",this.lessonLocked(r.dataset.id));if(this.updateUI(),!t){e.classList.add("hidden"),this.$(".lesson-ring").classList.add("hidden"),this.el.classList.remove("ring-low");return}let s=mc[t];e.querySelector("p").textContent=s.say,n.classList.toggle("hidden",!s.tap),s.tap&&(n.querySelector("span").textContent=s.tap),e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),t!=="intro"&&ht.pop(),this.placeRing()}lessonNext(){ht.click(),this.lesson==="intro"?this.lessonGo("drop"):this.lesson==="path"&&this.lessonGo("stir")}lessonLocked(t){return!!this.lesson&&t!=="lav"}coachBump(){let t=this.$(".brew-coach");t.classList.remove("nudge"),t.offsetWidth,t.classList.add("nudge")}placeRing(){let t=this.$(".lesson-ghost");if(this.lesson==="drop"||this.lesson==="more"){let o=this.$('.tile[data-id="lav"]').getBoundingClientRect(),l=this.potEl.getBoundingClientRect(),c=this.t%1.9/1.3,h=Math.min(1,c),d=h*h*(3-2*h),u=o.left+o.width/2,m=o.top+o.height*.4,x=l.left+l.width*.5,g=l.top+l.height*.12,p=u+(x-u)*d,f=m+(g-m)*d-Math.sin(d*Math.PI)*l.height*.25;t.classList.remove("hidden"),t.style.opacity=c<.12?c/.12:c>1?Math.max(0,1-(c-1)*3.5):.85,t.style.transform=`translate(${p-32}px, ${f-32}px) rotate(${d*30-10}deg) scale(${1-d*.3})`}else t.classList.add("hidden");let e=this.$(".lesson-ring"),n=this.lesson&&mc[this.lesson].ring,s=n&&this.$(n);if(this.el.classList.toggle("ring-low",n===".stir"||n===".bottle"||n===".water"),!s){e.classList.add("hidden");return}let r=s.getBoundingClientRect(),a=6;e.classList.remove("hidden"),e.classList.toggle("big",n===".map-frame"),e.style.left=r.left-a+"px",e.style.top=r.top-a+"px",e.style.width=r.width+a*2+"px",e.style.height=r.height+a*2+"px"}toast(t,e){let n=this.$(".brew-toast");n.innerHTML=(e?`<img src="${te(e)}" alt="">`:"")+`<span>${t}</span>`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}key(t,e){if(t==="Space"||t==="KeyS")return this.stirHold=e,this.$(".stir").classList.toggle("down",e),!0;if(t==="KeyQ"||t==="KeyW")return this.waterHold=e,this.$(".water").classList.toggle("down",e),!0;if(!e)return!1;if(t==="Enter"||t==="KeyE")return this.lesson&&mc[this.lesson].tap?this.lessonNext():this.bottle(),!0;if(t==="Escape")return this.close(),!0;let n=parseInt(t.replace("Digit",""),10);if(n>=1&&n<=wu.length){let s=wu[n-1],r=this.$(`.tile[data-id="${s}"]`);if(!r)return!0;if(this.lessonLocked(s))return r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope"),this.coachBump(),!0;if(G.inv[s]>0){let a=Ia("img","drag-ghost");a.src=te(Fe[s].icon);let o=r.getBoundingClientRect();a.style.transform=`translate(${o.left+o.width/2-40}px, ${o.top-40}px)`,document.body.appendChild(a),a.offsetWidth,this.drop(s,a,null),ht.pop()}else r.classList.remove("nope"),r.offsetWidth,r.classList.add("nope");return!0}return!1}};function Tu(){if(G.settings.tod>=0)return G.settings.tod;let i=new Date(me());return i.getHours()+i.getMinutes()/60}var cs=[[0,[.42,.48,.78],.18,1],[4.5,[.46,.5,.8],.18,1],[6,[1,.78,.78],.25,.35],[7.5,[1,.95,.9],.32,0],[12,[1,1,1],.36,0],[16.5,[1,.97,.9],.34,0],[18.2,[1,.8,.62],.28,.15],[19.5,[.66,.6,.9],.22,.7],[21,[.44,.5,.8],.18,1],[24,[.42,.48,.78],.18,1]];function Fp(i=Tu()){let t=cs[0],e=cs[cs.length-1];for(let a=0;a<cs.length-1;a++)if(i>=cs[a][0]&&i<=cs[a+1][0]){t=cs[a],e=cs[a+1];break}let n=(i-t[0])/Math.max(1e-6,e[0]-t[0]),s=n*n*(3-2*n),r=(a,o)=>a+(o-a)*s;return{tint:[r(t[1][0],e[1][0]),r(t[1][1],e[1][1]),r(t[1][2],e[1][2])],shadow:r(t[2],e[2]),night:r(t[3],e[3])}}function Op(i=Tu()){return i<5?"Night":i<7.5?"Dawn":i<12?"Morning":i<17?"Afternoon":i<19.5?"Evening":"Night"}function Eu(i=Tu()){let t=Math.floor(i)%24,e=Math.floor(i%1*60),n=t<12?"AM":"PM";return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${n}`}function Ni(i){let t=Math.max(0,Math.ceil(i/1e3)),e=Math.floor(t/60),n=t%60;return e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}:${String(n).padStart(2,"0")}`}function kp(i){let t=Math.max(1,Math.round(i/6e4)),e=Math.floor(t/60),n=Math.floor(e/24),s=(r,a)=>`${r} ${a}${r===1?"":"s"}`;return n>=1?s(n,"day"):e>=1?t%60?`${s(e,"hour")} ${s(t%60,"minute")}`:s(e,"hour"):s(t,"minute")}var Ns=21,vi=15,Gp=19,Yy=5*6e4,Au={mira:"Mira",juniper:"Juniper",oz:"Oz",pip:"Pip",wren:"Wren",basil:"Basil"},hs={crow:.75,pip:1.3,wren:1.12,basil:.8,mira:1.05,juniper:1.2,oz:.9,kuro:1.6,me:1.25},Zy=Object.fromEntries(dc.map(i=>[i.id,i])),Jy=["cham","lav","man","mush","feather","berry","moth","glowbug","ladybug","beetle","minnow","bluegill","carp"],$t,Ve,ft,Oe,Un,si,xn,_n,Ds,ri,se=null,lt={started:!1,quiet:0,t:0,focus:null,target:null,disc:!1,chatT:3,secT:0,saveT:0,where:"home",fps:[],lowQ:!1},je=()=>(_i[G.q]||_i[_i.length-1]).id,Ky=(i,t)=>`${i}:${t}`,Nn=i=>{let[t,e]=i.split(":");return[t,+e]},Cu=(i,t)=>Math.max(5,Math.round(ee[i].base*xu[t]*1.1/5)*5),jy=(i,t)=>Math.round(ee[i].base*xu[t]),vc=i=>`<span class="tier t${i}">${Ar[i]}</span>`,Us=()=>!lt.started||lt.disc||xn.isOpen||ri.isOpen||nc()||ic()||lt.cut,Lu=i=>new Promise(t=>setTimeout(t,i)),Vp=10*6e4,Qy=3,Wp=()=>(G.wild.fish||[]).filter(i=>me()-i<Vp),Xp=()=>Qy-Wp().length,qp=()=>{let i=Wp();return i.length?Math.min(...i)+Vp-me():0},Sn=(i,t,e)=>$t.toScreen(i,t,e,{x:0,y:0}),ze=(i,t=.15)=>[i.x,(i.h*i.sy+t)*Math.cos(.72)+i.mesh.position.y,i.z-(i.h*i.sy+t)*Math.sin(.72)];function Ru(){return 1+Math.floor(G.fame/3)}function Rr(i,t,e=vi){lt.focus=[i,t],$t.distGoal=e}function Pr(){lt.focus=null,$t.distGoal=Ns}function $p(i,t){let e=Ru();G.fame+=i;let n=Ru();du(n,G.fame%3/3),t&&Vn(`+${i} fame`,t,"fame"),n>e&&setTimeout(()=>Ln(`Fame Lv ${n}`,"More of Mossbrook knows your name",{kind:"gold",onShow:()=>ht.discover()}),600)}function Yp(i,t){G.coins+=i,t?yp(i,t,(e,n)=>{e===n-1&&Ea(G.coins,!0)}):Ea(G.coins,!0),t&&Vn(`+${i}`,{x:t.x,y:t.y-30},"coin")}function Ua(i,t,e){G.inv[i]=(G.inv[i]||0)+t,G.found[i]=!0,G.newCount=(G.newCount||0)+t;for(let n=0;n<Math.min(t,4);n++)tc(Fe[i].icon,e,Gt("#bBag"),{delay:n*110,size:52,onArrive:n===Math.min(t,4)-1?()=>{Sr(G.newCount),ht.pop()}:null})}function Du(i){let t=i>ft.x?1:-1;t!==ft.face&&(ft.flipFrom=ft.face,ft.face=t,ft.flipT=0)}function tb(){let i=_i[G.q]||_i[_i.length-1];if(i.id==="free"){if(G.cust.here){let e=Er[G.cust.i%Er.length];return[G.cust.asked?`Brew a ${ee[e.want].name} for ${e.name}`:`${e.name} is at your door`,""]}let t=G.cust.nextAt-me();return["Explore at your own pace",t>1e3?`Visitor in ${Ni(t)}`:"Visitor soon"]}return[i.text,i.need?`${Math.min(G.qn,i.need)}/${i.need}`:""]}function ai(i){if(je()!==i)return!1;let t=_i[G.q];return G.q=Math.min(_i.length-1,G.q+1),G.qn=0,xe(),ht.quest(),Ge(15),os(`<b>Done!</b> ${t.text}`,"star"),setTimeout(()=>eb(je()),700),!0}function eb(i){i==="talk"&&!se&&Na(!0),i==="mystery"&&Ln("Something glows","Far north on the potion map, past the brambles",{icon:"m_q",kind:"gold",ms:3200}),i==="free"&&(G.cust.nextAt=Math.max(G.cust.nextAt,me()+9e4),Ln("The slice is yours","Everything keeps growing on the real clock. Come back later!",{ms:3600})),xe(!0)}function nb(){switch(je()){case"letter":return ze(Ve.props.mailbox,.5);case"harvest":{let i=null,t=1e9;for(let e of Un.plots)if(Un.state(e.i).ready){let n=Math.hypot(e.x-ft.x,e.z-ft.z);n<t&&(t=n,i=e)}return i?[i.x,1.9,i.z-.4]:null}case"talk":case"deliver":return se&&!se.moving?ze(se.spr,.5):null;case"brew":case"mystery":return ft.x<Ri?ze(Ve.props.cauldron,.6):[ct.roadEnd[0],1,ct.roadEnd[1]];case"town":return[ct.roadEnd[0],1.2,ct.roadEnd[1]];case"board":return ze(Ve.props.board,.4);case"stall":return ze(Ve.props.myStall,.4);case"buy":return ze(Ve.props.stalls.mira,.3);default:{if(!G.cust.here||!se||se.moving||ft.x>=Ri)return null;let i=se.def.want,t=Object.keys(G.potions).some(e=>e.startsWith(i+":")&&G.potions[e]>0);return G.cust.asked&&!t?ze(Ve.props.cauldron,.6):ze(se.spr,.5)}}}function Na(i){let t=Er[G.cust.i%Er.length],e=t.who==="crow"?1.5:1.6,n=i?ct.crowEnter:ct.crowWait;if(se=new ls($t,t.sprite,e,n[0],n[1],{talk:t.talk,speed:2.4,rig:t.rig}),se.def=t,t.who==="pip"||t.who==="wren"){let r=_n[t.who];r.busy=!0,r.spr.visible=!1,Ds.remove("n-"+t.who)}let s=()=>{G.cust.here=!0,xe(!0),se.face=1,se.hop(),t.who==="crow"?ht.caw():ht.blip("a",hs[t.who]||1)};i?(se.goTo([[12,1.6],[9,4],[1.5,4.1],ct.crowWait],s),t.who==="crow"&&setTimeout(()=>ht.caw(),400),lt.started&&(ft.x<Ri?os(`${t.name} is coming up the path`,t.sprite):Ql(`<img src="${te(t.sprite)}" alt=""><span>${ei(t.name)} is waiting at your cottage</span>`))):(G.cust.here=!0,se.face=1)}function ib(){let i=se;se=null,i&&(i.goTo([[1.5,4.1],[9,4],[12,1.6],ct.crowEnter,[22,.8]],()=>{i.spr.dispose();let t=i.def.who;if(t==="pip"||t==="wren"){let e=_n[t];e.busy=!1,e.spr.visible=!0}}),Ds.remove("n-cust"))}async function sb(){let i=se,t=i.def,e=ee[t.want];if(Math.abs(ft.x-i.x)<1.2){let r=ft.x>=i.x?1:-1;ft.walkTo(i.x+r*1.35,i.z+.4,i.x),i.face=r}else Du(i.x),i.face=i.x>ft.x?-1:1;let n=hs[t.who]||1,s=async(r,a=[])=>{i.talking=Math.min(6,r.length*.035);let o=await Pi(t.name,r,a,{pitch:n});return i.talking=0,o};lt.focus=[(i.x+ft.x)/2,(i.z+ft.z)/2],$t.distGoal=vi;try{if(!G.cust.asked){await s(t.ask,[{label:"Leave it to me!"},{label:"What happened?"}])===1&&await s(t.who==="crow"?"Owls. Singing. All night. They even take requests.":"It is a long story, and most of it is embarrassing."),G.cust.asked=!0,xe(!0),je()==="talk"?(await Pi(G.name,"Granny's letter said lavender pulls a brew toward Sleep. The cauldron is by the cottage.",[],{pitch:hs.me}),ai("talk")):os(`${t.name} wants a <b>${e.name}</b>`,e.medal);return}let r=Object.keys(G.potions).filter(u=>G.potions[u]>0).sort((u,m)=>(Nn(u)[0]===t.want?-1:0)-(Nn(m)[0]===t.want?-1:0)||Nn(u)[1]-Nn(m)[1]).slice(0,3);if(!r.length){await s(`No rush. A ${e.name} whenever you are ready.`);return}let a=r.map(u=>{let[m,x]=Nn(u);return{label:`${ee[m].short} (${Ar[x]})`,icon:ee[m].potion}});a.push({label:"Not yet"});let o=await s(`Is that a ${e.name} I smell?`,a);if(o<0||o>=r.length)return;let[l,c]=Nn(r[o]);if(l!==t.want){ht.fail(),await s(`Hmm. That smells like ${ee[l].short}. I need a ${e.name}.`);return}G.potions[r[o]]--;let h=jy(l,c),d=Sn(i.x,1.4,i.z);i.cheer(),ht.bottle(),$t.sparkle(i.x,1,i.z,16,"#fff2a8"),Yp(h,d),$p(1,{x:d.x,y:d.y-60}),await s(`${t.thanks} Here, ${h} coins.${c===0?" A perfect brew, too!":""}`),G.cust.i++,G.cust.here=!1,G.cust.asked=!1,G.cust.nextAt=me()+Yy,xe(),ib(),Ql(null),ai("deliver")}finally{lt.focus=null,$t.distGoal=Ns}}function Zp(){let i=[],t=(n,s,r,a,o,l,c,h)=>i.push({id:n,x:s,z:r,r:a,label:o,act:l,anchor:c,spr:h}),e=Ve.props;if(ft.x<Ri-4){if(t("mailbox",ct.mailbox[0],ct.mailbox[1]+.3,1.7,je()==="letter"?"Read letter":"Mailbox",pb,ze(e.mailbox),e.mailbox),t("cauldron",ct.cauldron[0],ct.cauldron[1]+.3,2.1,"Brew",zp,ze(e.cauldron,.3),e.cauldron),t("door",ct.door[0],ct.door[1]+.5,1.4,"Enter workshop",zp,[ct.door[0],2.4,ct.door[1]-.6]),t("sign",ct.sign[0],ct.sign[1]+.3,1.5,"Read sign",cb,ze(e.sign),e.sign),t("woodsign",ct.woodSign[0],ct.woodSign[1]+.3,2,"Read sign",ub,ze(e.woodSign),e.woodSign),ft.x<ws+3||ft.z>8.6){let s=si.nearBerry(ft.x,ft.z);if(s){let a=si.berryLeft(s.i);t("berry"+s.i,s.x,s.z+.5,1.6,a?`Berries in ${Ni(a)}`:"Pick berries",()=>ob(s.i),ze(s.spr,.1),s.spr)}let r=si.nearBug(ft.x,ft.z);r&&t("bug"+r.i,r.x,r.z,1.7,`Catch ${Fe[r.kind].name}`,()=>Kp(r),[r.x,r.y+.75,r.z],r.spr)}if(ft.z>5){t("pondsign",ct.pondSign[0],ct.pondSign[1]+.3,1.5,"Read sign",hb,ze(e.pondSign),e.pondSign);let s=Xp();t("fish",ct.fish[0],ct.fish[1],1.7,s>0?"Fish":`Fish bite again in ${Ni(qp())}`,Qp,ze(e.bucket,.5),e.bucket)}Oe.atStall||t("cat",Oe.x,Oe.z+.2,1.3,"Pet Kuro",lb,ze(Oe.spr,.2),Oe.spr);let n=Un.nearest(ft.x,ft.z,1.35);if(n){let s=Un.state(n.i);t("plot"+n.i,n.x,n.z,1.35,s.ready?`Harvest ${s.def.name}`:`${s.def.name} in ${Ni(s.left)}`,()=>ab(n.i),[n.x,1.5,n.z-.6],n.spr)}se&&!se.moving&&t("cust",se.x,se.z+.2,1.7,G.cust.asked?`Give ${se.def.name} a potion`:`Talk to ${se.def.name}`,sb,ze(se.spr,.3),se.spr)}else{t("board",ct.board[0],ct.board[1]+.5,2,"Discovery board",gb,ze(e.board,.1),e.board);for(let n of["mira","juniper","oz"]){let[s,r]=xi[n];t("stall-"+n,s,r+.3,1.9,`${Au[n]}'s stall`,()=>xb(n),ze(_n[n].spr,.35),e.stalls[n])}t("mystall",ct.myStall[0],ct.myStall[1]+.3,1.9,"Your stall",_b,ze(e.myStall,.1),e.myStall),t("fountain",ct.fountain[0],ct.fountain[1]+.9,2.5,"Make a wish",db,[ct.fountain[0],2.6,ct.fountain[1]-1.4],e.fountain);for(let n of uc){let s=_n[n];s.busy||t("folk-"+n,s.x,s.z+.15,1.4,`Chat with ${Au[n]}`,()=>fb(n),ze(s.spr,.3),s.spr)}}return i}function Jp(){if(Us()||lt.quiet>0){lt.target=null,_c(null),wr(null);return}let i=null,t=1e9;for(let e of Zp()){let n=Math.hypot(e.x-ft.x,(e.z-ft.z)*1.25);n<e.r&&n/e.r<t&&(t=n/e.r,i=e)}if(lt.target=i,_c(i&&i.spr),i){let e=Sn(i.anchor[0],i.anchor[1],i.anchor[2]);wr(i.label,{x:Math.round(e.x),y:Math.round(e.y)})}else wr(null)}function _c(i){lt.lit!==i&&(lt.lit&&(lt.lit.outline=0),lt.lit=i||null,lt.litT=0)}function rb(i){lt.lit&&(lt.litT=Math.min(1,(lt.litT||0)+i*6),lt.lit.outline=lt.litT)}function Pu(){if(Us()||!lt.target)return;let i=lt.target;Du(i.x),i.act()}function ab(i){let t=Un.state(i);if(!t.ready){let r=Un.plots[i];Vn(`Ready in ${Ni(t.left)}`,Sn(r.x,1.2,r.z),"soft"),ht.click();return}let e=Un.plots[i];ft.setPose("witch_pick",.8);let n=Un.harvest(i);ht.harvest(),Ge(10);let s=Sn(e.x,.8,e.z);Ua(n.crop,n.n,s),Vn(`+${n.n} ${Fe[n.crop].name}`,{x:s.x,y:s.y-40}),lt.quiet=.9,je()==="harvest"&&(G.qn++,G.qn>=_i[G.q].need&&ai("harvest")),xe(!0)}function ob(i){let t=si.berries[i],e=si.berryLeft(i);if(e){Vn(`Regrows in ${Ni(e)}`,Sn(t.x,1.6,t.z),"soft"),ht.click();return}ft.setPose("witch_pick",.8);let n=si.pick(i);ht.harvest(),Ge(10);let s=Sn(t.x,.8,t.z);Ua("berry",n,s),Vn(`+${n} ${Fe.berry.name}`,{x:s.x,y:s.y-40}),lt.quiet=.9,xe(!0)}async function Kp(i){if(lt.cut)return;lt.cut=!0,sc(),ft.setPose("witch_pick",.6),Rr(i.x,i.z-.3,vi-2),await Lu(420);let t=!G.beetles||Math.random()<.45,e=await ri.open("bug",{kind:i.kind,beetle:t,firstBeetle:!G.beetles,from:Sn(i.x,i.y,i.z)});e.got.includes("beetle")&&(G.beetles=(G.beetles||0)+1),Pr();let n=Sn(ft.x,1.6,ft.z);e.got.includes(i.kind)?si.markCaught(i):si.markFled(i),jp(e.got,n),e.got.length||Vn("It flew off. It will be back soon",n,"soft"),lt.cut=!1,lt.quiet=.8,xe(!0)}function jp(i,t){let e={};for(let s of i)e[s]=(e[s]||0)+1;let n=0;for(let[s,r]of Object.entries(e)){let a=!G.found[s];setTimeout(()=>{Ua(s,r,t),Vn(`+${r} ${Fe[s].name}`,{x:t.x,y:t.y-40-n*4}),a&&os(`<b>${Fe[s].name}</b> joins your shelf`,Fe[s].icon)},150+n++*380)}}async function Qp(){let i=Xp(),t=Sn(ct.fish[0],1.4,ct.fish[1]);if(i<=0){Vn(`The fish are wary. Back in ${Ni(qp())}`,t,"soft"),ht.click();return}if(lt.cut)return;lt.cut=!0,sc(),Du(ct.fish[0]+1),Rr(ct.fish[0],ct.fish[1]+.8,vi-2),await Lu(420);let e=await ri.open("fish",{bites:i,from:Sn(ct.fish[0],.1,ct.fish[1]+1.2),onCatch:()=>{G.wild.fish.push(me()),xe(!0)}});Pr(),jp(e.got,Sn(ft.x,1.6,ft.z)),lt.cut=!1,lt.quiet=.8,xe(!0)}function lb(){Oe.hop(),ht.meow(),Ge(8),$t.sparkle(Oe.x,.7,Oe.z,8,"#ffb3c8");let i=Sn(Oe.x,1.1,Oe.z);Vn("\u2665",i,"heart"),lt.pets=(lt.pets||0)+1,lt.pets===5&&setTimeout(()=>Pi("Kuro","Mrrrp. (Kuro would like it noted that he is an excellent shopkeeper.)",[],{pitch:hs.kuro}),300)}async function cb(){await Pi("Signpost","East: Mossbrook Square. West: Hazel Cottage, and past it Whisperwood. North: fog, and nobody knows.",[],{pitch:.9})}async function hb(){await Pi("Signpost","Willow Pond, down the steps. Fish bite from the end of the dock. Mind the frog.",[],{pitch:.9})}async function ub(){await Pi("Signpost","Whisperwood. Wild berries grow back by themselves. Moths and ladybugs by day, glowbugs after dark. Bring a net.",[],{pitch:.9})}function db(){ht.discover(),Ge(12),$t.sparkle(ct.fountain[0],2.2,ct.fountain[1]-.6,26,"#cfefff",1.2,1.6);let i=["The water glitters. Something in the fog feels closer.","A tiny rainbow. Kuro would approve.","You wish for a Perfect brew. The fountain hums back."];os(i[Math.floor(Math.random()*i.length)],"m_drop")}async function fb(i){let t=_n[i];t.busy=!0,t.path=[],t.face=t.x>ft.x?-1:1;let e={pip:["Mira says blue caps pull a brew north. I wonder what is up there.","I sold three Healing potions before lunch! Okay, two. Okay, I drank one."],wren:["Nobody has put Luck on the board yet. The north fog is spooky.","Glow sells best at night. Everyone walks home in the dark."],basil:["I trade river reeds for anything sweet. Mostly I just like the walk.","The pond past your cottage has fish that bite at dusk. Bring a light hand."]}[i];lt.focus=[(t.x+ft.x)/2,(t.z+ft.z)/2],$t.distGoal=vi,t.talking=2,await Pi(Au[i],e[Math.floor(Math.random()*e.length)],[],{pitch:hs[i]}),t.talking=0,t.busy=!1,t.wait=1.5,lt.focus=null,$t.distGoal=Ns}function pb(){if(je()!=="letter"){Ve.props.mailbox.flash=.6,setTimeout(()=>Ve.props.mailbox.flash=0,120),ht.click(),Vn("Empty for now",Sn(ct.mailbox[0],1.6,ct.mailbox[1]),"soft");return}Ii("letter-card",`
    <div class="letter">
      <p>Dear ${ei(G.name)},</p>
      <p>The cottage is yours now, and so is the old cauldron. Do look after Kuro. He pretends he does not need looking after.</p>
      <p>Every herb pulls a brew a different way. Stir, follow where it leads, and the fog will lift. There are more potions out there than I ever found.</p>
      <p>Lavender for sleepy folk. Here are two sprigs to start you off.</p>
      <p>When the garden runs thin, take the little trail west into Whisperwood. The berries and moths there do odd things to a brew.</p>
      <p class="sign">With love,<br>Granny Hazel</p>
      <div class="gift"><img src="${te("i_lav")}" alt=""><img src="${te("i_lav")}" alt=""></div>
    </div>
    <button class="btn-green take"><span>Take the lavender</span></button>`,{onClose:()=>mb()}).querySelector(".take").addEventListener("click",()=>Es())}var Bp=!1;function mb(){Bp||je()!=="letter"||(Bp=!0,Ua("lav",2,{x:innerWidth/2,y:innerHeight/2}),Ve.props.mailbox.set("mailbox_empty"),$t.sparkle(ct.mailbox[0]+.4,1.1,ct.mailbox[1],10,"#fff2a8"),ai("letter"))}function tm(i,{cls:t="",empty:e=0}={}){let n=i.map(s=>`<button class="slot ${t} ${s.sel?"sel":""}" data-k="${s.k}" ${s.title?`title="${ei(s.title)}"`:""}><img src="${te(s.icon)}" alt=""><b>${s.n}</b>${s.tier!=null?`<i class="tdot t${s.tier}"></i>`:""}</button>`).join("");for(let s=i.length;s<e;s++)n+='<div class="slot blank"></div>';return n}function Nu(i){return i==="herbs"?Jy.filter(t=>G.inv[t]>0).map(t=>({k:t,icon:Fe[t].icon,n:G.inv[t],title:Fe[t].name})):Object.keys(G.potions).filter(t=>G.potions[t]>0).map(t=>{let[e,n]=Nn(t);return{k:t,icon:ee[e].potion,n:G.potions[t],tier:n,title:`${ee[e].name} (${Ar[n]})`}})}function em(i="herbs"){G.newCount=0,Sr(0),xe(!0);let t=Ii("bag-card",`
    <div class="tabs"><button class="tab" data-t="herbs">Herbs</button><button class="tab" data-t="potions">Potions</button></div>
    <div class="bag-grid"></div>
    <div class="bag-info"><p></p></div>`,{title:"Bag"}),e=n=>{i=n,t.querySelectorAll(".tab").forEach(r=>r.classList.toggle("on",r.dataset.t===n));let s=Nu(n);t.querySelector(".bag-grid").innerHTML=tm(s,{empty:10}),t.querySelector(".bag-info p").innerHTML=s.length?"Tap an item to read about it":n==="herbs"?"No herbs yet. Harvest your garden or buy from the stalls":"No potions yet. Brew one at the cauldron",t.querySelectorAll(".slot[data-k]").forEach(r=>r.addEventListener("click",()=>{ht.click(),t.querySelectorAll(".slot").forEach(l=>l.classList.remove("sel")),r.classList.add("sel");let a=r.dataset.k,o;if(n==="herbs"){let l=Pa[a];o=`<b>${Fe[a].name}</b> ${l?`Grows in your garden in ${l.growMin} minutes.`:Fe[a].from||"Sold at the town stalls."}`}else{let[l,c]=Nn(a);o=`<b>${ee[l].name}</b> ${vc(c)} Suggested price ${Cu(l,c)} coins.`}t.querySelector(".bag-info p").innerHTML=o}))};t.querySelectorAll(".tab").forEach(n=>n.addEventListener("click",()=>{ht.click(),e(n.dataset.t)})),e(i)}function nm(){let i=Object.entries(ee).map(([e,n])=>{let s=G.discovered[e],r=G.recipes[e];return s?`<div class="rec"><img class="medal" src="${te(n.medal)}" alt=""><div class="rec-t"><b>${n.name}</b>${vc(s.tier)}</div><div class="rec-i">${r.ings.map(a=>`<img src="${te(Fe[a].icon)}" alt="">`).join("<em>+</em>")}</div></div>`:`<div class="rec unknown"><img class="medal" src="${te("m_q")}" alt=""><div class="rec-t"><b>???</b><span>Somewhere ${n.hint}</span></div></div>`}).join(""),t=Object.keys(G.discovered).length;Ii("book-card",`<p class="book-sub">${t} of ${Object.keys(ee).length} found</p><div class="recs">${i}</div>`,{title:"Recipes"})}function gb(){let i=Object.entries(ee).map(([t,e])=>{let n=yu.find(r=>r.effect===t);return G.board.find(r=>r.effect===t)?`<div class="pin-row mine"><img src="${te(e.medal)}" alt=""><b>${e.name}</b><span>${ei(G.name)} (you)</span></div>`:n?`<div class="pin-row"><img src="${te(e.medal)}" alt=""><b>${e.name}</b><span>${ei(n.who)}, ${n.when}</span></div>`:`<div class="pin-row open"><img src="${te("m_q")}" alt=""><b>Undiscovered</b><span>First finder gets their name here</span></div>`}).join("");Ii("board-card",`<p class="book-sub">First discoveries in Mossbrook</p><div class="pins">${i}</div><p class="demo-note">Demo: other names are simulated townsfolk.</p>`,{title:"Discovery board",onClose:()=>{Pr(),ai("board")}}),Rr(ct.board[0],ct.board[1]+.6,vi)}function im(i,t,e){return`
    <div class="shop-top">
      <div class="keeper"><img src="${te(i)}" alt=""></div>
      <div class="shop-talk"><div class="ribbon sm"><span>${ei(t)}</span></div><div class="speech"><p>${e}</p></div></div>
    </div>
    <div class="counter"></div>
    <div class="buybar"></div>
    <div class="bag-row"><button class="arrow l" aria-label="Previous"></button><div class="bag-strip"></div><button class="arrow r" aria-label="Next"></button><i class="badge hidden"></i></div>`}function sm(i,t,e,n){let s=0,r=6,a=()=>{let o=Nu(t).map(h=>({...h,sel:h.k===n})),l=Math.max(1,Math.ceil(o.length/r));s=Math.min(s,l-1),i.querySelector(".bag-strip").innerHTML=tm(o.slice(s*r,s*r+r),{empty:r,cls:e?"pick":""}),i.querySelector(".bag-row .arrow.l").classList.toggle("off",s===0),i.querySelector(".bag-row .arrow.r").classList.toggle("off",s>=l-1);let c=i.querySelector(".bag-row .badge");c.textContent=o.reduce((h,d)=>h+d.n,0),c.classList.toggle("hidden",!o.length),e&&i.querySelectorAll(".bag-strip .slot[data-k]").forEach(h=>h.addEventListener("click",()=>{n=h.dataset.k,e(h.dataset.k,h),a()}))};return i.querySelector(".bag-row .arrow.l").addEventListener("click",()=>{s>0&&(s--,ht.click(),a())}),i.querySelector(".bag-row .arrow.r").addEventListener("click",()=>{s++,ht.click(),a()}),a(),{draw:a,setSel:o=>{n=o,a()}}}function rm(){let i=Math.floor(me()/36e5);G.boughtHour!==i&&(G.bought={},G.boughtHour=i)}function Uu(){rm();for(let i of dc){if(!i.stall||!Ve.props.stalls[i.id])continue;let t=[];for(let e of i.stall.items){let n=Math.min(3,e.stock-(G.bought[`${i.id}:${e.ing}`]||0));for(let s=0;s<n;s++)t.push(Fe[e.ing].icon)}nu(Ve.props.stalls[i.id],i.stall.sprite,t)}nu(Ve.props.myStall,"stall_mine",G.stall.items.map(i=>ee[Nn(i.key)[0]].potion))}function xb(i){rm();let t=Zy[i],e=t.stall;_n[i].hop(),ht.blip("h",hs[i]);let s=Ii("shop-card",im(t.sprite,t.name,ei(e.line)),{onClose:Pr});Rr(xi[i][0],xi[i][1]+.4,vi);let r=null,a=s.querySelector(".speech p"),o=h=>h.stock-(G.bought[`${i}:${h.ing}`]||0),l=()=>{s.querySelector(".counter").innerHTML=[0,1,2,3].map(g=>{let p=e.items[g];if(!p)return'<div class="ctile blank"></div>';let f=o(p);return`<button class="ctile ${r===g?"sel":""} ${f?"":"sold"}" data-i="${g}"><img src="${te(Fe[p.ing].icon)}" alt=""><span class="price"><b>${p.price}</b></span><i class="stock">${f?"x"+f:"Sold out"}</i></button>`}).join(""),s.querySelectorAll(".ctile[data-i]").forEach(g=>g.addEventListener("click",()=>{r=+g.dataset.i,ht.click(),l()}));let h=s.querySelector(".buybar");if(r==null){h.innerHTML="<p>Tap an item on the counter</p>";return}let d=e.items[r],u=Fe[d.ing],m=o(d),x=m>0&&G.coins>=d.price;h.innerHTML=`<p><b>${u.name}</b> ${m?`${m} left`:"sold out"}${G.coins<d.price&&m?". Not enough coins":""}</p><button class="btn-green buy" ${x?"":"disabled"}><span>Buy for ${d.price}</span></button>`,h.querySelector(".buy").addEventListener("click",g=>{if(!x)return;G.coins-=d.price,Ea(G.coins,!0),G.bought[`${i}:${d.ing}`]=(G.bought[`${i}:${d.ing}`]||0)+1;let p=g.currentTarget.getBoundingClientRect();ht.coin(0),ht.pop(),Ge(10),Ua(d.ing,1,{x:p.left+p.width/2,y:p.top}),a.textContent=["Thank you kindly!","Pleasure doing business!","Come back soon!"][Math.floor(Math.random()*3)],ni(s.querySelector(".keeper img")),xe(!0),d.ing==="mush"&&ai("buy"),Uu(),l(),c.draw()})},c=sm(s,"herbs");l()}function _b(){let i=Ii("shop-card mine",im("cat","Kuro","Mrrp. Leave potions on the counter and I will sell them, even while you sleep."),{onClose:Pr});Rr(ct.myStall[0],ct.myStall[1]+.4,vi);let t=null,e=0,n=()=>{let a=G.stall.items;i.querySelector(".counter").innerHTML=[0,1,2,3].map(o=>{let l=a[o];if(!l)return'<div class="ctile blank"><span class="plus">+</span></div>';let[c,h]=Nn(l.key);return`<div class="ctile listed"><img src="${te(ee[c].potion)}" alt=""><i class="tdot t${h}"></i><span class="price"><b>${l.price}</b></span><i class="stock">sells in ${Ni(l.sellAt-me())}</i></div>`}).join("")},s=()=>{let a=G.stall.items;n();let o=i.querySelector(".buybar");if(!t){o.innerHTML=`<p>${a.length>=4?"The counter is full":Nu("potions").length?"Tap a potion in your bag to put it on the counter":"No potions to sell. Brew some at the cauldron"}</p>`;return}let[l,c]=Nn(t),h=Cu(l,c);o.innerHTML=`<img class="bb-icon" src="${te(ee[l].potion)}" alt=""><p><b>${ee[l].short}</b> ${vc(c)}</p>
      <div class="pricer"><button class="arrow l sm" aria-label="Lower"></button><span class="price"><b>${e}</b></span><button class="arrow r sm" aria-label="Higher"></button></div>
      <p class="hint">${e>h*1.15?"Pricey. It will take longer to sell":e<h*.9?"A bargain. It will go fast":"A fair price"}</p>
      <button class="btn-green list" ${a.length>=4?"disabled":""}><span>Put on counter</span></button>`,o.querySelector(".arrow.l").addEventListener("click",()=>{e=Math.max(5,e-5),ht.click(),s()}),o.querySelector(".arrow.r").addEventListener("click",()=>{e+=5,ht.click(),s()}),o.querySelector(".list").addEventListener("click",()=>{let d=G.stall.items;if(d.length>=4||!(G.potions[t]>0))return;G.potions[t]--;let u=je()==="stall",m=(u?25+Math.random()*15:60+Math.random()*90)*(e/h)**2;d.push({key:t,price:e,sellAt:me()+m*1e3}),G.stall.open=!0,Oe.moveToStall(!0),ht.pop(),Ge(8),ni(i.querySelector(".keeper img")),i.querySelector(".speech p").textContent=u?"Meow! Someone will come by soon. Go on, I have got this.":"On the counter it goes.",G.potions[t]<=0&&(t=null),xe(!0),ai("stall"),Uu(),s(),r.draw()})},r=sm(i,"potions",a=>{t=a;let[o,l]=Nn(a);e=Cu(o,l),ht.click(),s()});s(),i._tick=n}function am(){let i=G.settings,t=Ii("set-card",`
    <div class="set-rows">
      <div class="row"><span>Sound</span><button class="toggle ${i.sound?"on":""}" data-k="sound"></button></div>
      <div class="row"><span>Music</span><button class="toggle ${i.music?"on":""}" data-k="music"></button></div>
      <div class="row"><span>Time of day</span><input type="range" min="-1" max="23" step="1" value="${i.tod<0?-1:Math.floor(i.tod)}"><b class="tod"></b></div>
      <div class="row"><span>Skip ahead</span><button class="btn-pill skip"><span>+10 minutes</span></button></div>
      <div class="row"><span>Start over</span><button class="btn-pill reset"><span>Reset save</span></button></div>
    </div>
    <p class="demo-note">Vertical slice demo. Townsfolk, stall buyers and the other names on the board are simulated. Time follows your real clock; skipping ahead moves the game clock only.</p>`,{title:"Menu"}),e=()=>{t.querySelector(".tod").textContent=i.tod<0?"Real clock":Eu(i.tod)};e(),t.querySelectorAll(".toggle").forEach(s=>s.addEventListener("click",()=>{i[s.dataset.k]=!i[s.dataset.k],s.classList.toggle("on",i[s.dataset.k]),Jl(),ht.click(),xe(!0)})),t.querySelector("input").addEventListener("input",s=>{i.tod=+s.target.value,e(),Fu(!0),xe(!0)}),t.querySelector(".skip").addEventListener("click",s=>{G.offsetMs=(G.offsetMs||0)+6e5,ht.quest(),ni(s.currentTarget),os("Ten minutes pass in a blink","star"),xe(!0)});let n=t.querySelector(".reset");n.addEventListener("click",()=>{if(!n.classList.contains("confirm")){n.classList.add("confirm"),n.querySelector("span").textContent="Tap again to erase",ht.click();return}sp(),location.reload()})}function vb(i,t){if(!i.length)return;Ii("away-card",`<p class="book-sub">You were away for ${kp(t)}</p><div class="away">${i.map(([n,s])=>`<div class="away-row"><img src="${te(n)}" alt=""><span>${s}</span></div>`).join("")}</div><button class="btn-green ok"><span>Lovely</span></button>`,{title:"While you were away"}).querySelector(".ok").addEventListener("click",()=>Es())}function zp(){sc();let i=je(),t={};if(i==="brew"||se&&G.cust.asked&&!se.moving){let e=se?se.def:Er[0];t.ask={name:e.name,line:i==="brew"?"Something to help me sleep, please.":`A ${ee[e.want].name}, please.`},t.target=e.want}i==="mystery"&&(t.target="luck",t.ask={name:"Kuro",line:"Mrrp. Blue Mushroom drifts north. Something glows up there."}),ft.frozen=!0,lt.cut=!0,Rr(ct.cauldron[0],ct.cauldron[1]+.2,vi-1),Lu(320).then(()=>Ca(!0)).then(()=>{lt.cut=!1,document.body.classList.add("brewing"),xn.open(t),Ca(!1)})}function yb(i,t,e,n){let s=ee[i],r=Ky(i,t);G.potions[r]=(G.potions[r]||0)+3,G.newCount=(G.newCount||0)+3;let a=!G.discovered[i];(a||t<G.discovered[i].tier)&&(G.discovered[i]={tier:t,at:me()},G.recipes[i]={ings:e,tier:t});let o=yu.find(h=>h.effect===i),l=a&&!o&&!G.board.some(h=>h.effect===i);l&&G.board.push({effect:i,at:me()}),xe(),setTimeout(()=>{let h=n.getBoundingClientRect();for(let d=0;d<3;d++)tc(s.potion,{x:h.left+h.width/2,y:h.top+h.height/2},Gt("#bBag"),{delay:d*120,size:60,onArrive:d===2?()=>Sr(G.newCount):null})},650);let c=()=>{je()==="brew"&&i==="sleep"?(ai("brew"),setTimeout(()=>xn.close(),300)):je()==="mystery"&&i==="luck"?(ai("mystery"),setTimeout(()=>xn.close(),300)):je()==="brew"&&xn.toast("Mr. Crow asked for a <b>Sleep Potion</b>. Keep exploring the fog","m_moon")};a?setTimeout(async()=>{lt.disc=!0,ht.discover(),await Aa({medal:s.medal,potion:s.potion,title:l?"First in Mossbrook!":"New potion!",name:s.name,tier:{i:t,label:Ar[t]},first:l?"Nobody in town has brewed this before. Your name goes on the discovery board.":`${o.who} found it first. Now you know it too.`,ings:e.map(h=>Fe[h].icon)}),lt.disc=!1,$p(l?2:1,null),c()},1100):(xn.toast(`+3 ${s.name} ${vc(t)}`,s.medal),c())}function bb(){ft.frozen=!1,Pr(),document.body.classList.remove("brewing"),Sr(G.newCount)}function om(i=!1){let t=me(),e=[];if(G.stall.items=G.stall.items.filter(n=>n.sellAt<=t?(e.push(n),!1):!0),e.length){let n=e.reduce((s,r)=>s+r.price,0);if(i)G.coins+=n;else{let s=Math.abs(ft.x-ct.myStall[0])<11,r=s?Sn(ct.myStall[0],1.6,ct.myStall[1]):null;for(let a of e){let[o]=Nn(a.key);os(`Kuro sold a <b>${ee[o].name}</b> for ${a.price}`,"coin")}Yp(n,r),s&&(Oe.hop(),ht.meow(),$t.sparkle(ct.myStall[0],1.5,ct.myStall[1],14,"#fff2a8"))}G.stall.items.length||(G.stall.open=!1),xe(!0)}return!G.stall.items.length&&Oe.atStall&&Oe.moveToStall(!1),Ve&&Uu(),!i&&je()==="free"&&!se&&!G.cust.here&&t>=G.cust.nextAt&&Na(!0),{sold:e,total:e.reduce((n,s)=>n+s.price,0)}}function Fu(i){let t=Fp();$t.setLight(t),gp(Eu(),Op(),t.night);let e=Math.hypot(ft.x-ct.fountain[0],ft.z-ct.fountain[1]);up(t.night,Math.max(0,1-e/14))}function Mb(i){for(let t of Ve.occluders){let e=t.z-ft.z,s=e>.05&&e<t.h*1.52&&Math.abs(ft.x-t.x)<t.w*.4+.3?.3:1;t.alpha!==s&&(t.alpha=Math.abs(t.alpha-s)<.01?s:t.alpha+(s-t.alpha)*Math.min(1,i*8))}}function Sb(i){if(lt.chatT-=i,lt.chatT<=0&&ft.x>Ri-2){lt.chatT=2.5+Math.random()*3;let t=["mira","juniper","oz",...uc].filter(s=>!_n[s].busy),e=t[Math.floor(Math.random()*t.length)],n=vu[Math.floor(Math.random()*vu.length)];Ds.remove("c-"+e),Ds.get("c-"+e,"chat",`<div class="tin"><p>${ei(n)}</p></div>`),lt.chats=lt.chats||{},lt.chats[e]=3.6,_n[e].talking=1.2,ht.blip("o",(hs[e]||1)*1.3)}if(lt.chats)for(let t of Object.keys(lt.chats)){if(lt.chats[t]-=i,lt.chats[t]<=0||_n[t].busy){Ds.remove("c-"+t),delete lt.chats[t];continue}let e=ze(_n[t].spr,.75);Ds.place("c-"+t,e[0],e[1],e[2],lt.started&&!xn.isOpen&&!nc())}}function wb(){let i=ft.z>8.8&&Math.abs(ft.x)<12.5,t=ft.z<7.6,e=i||!t&&lt.where==="pond"?"pond":ft.x>Ri+1?"town":ft.x<ws-.5?"forest":ft.x<11&&ft.x>ws+1?"home":lt.where;e==="town"&&je()==="town"&&G.seenTown&&ai("town"),e!==lt.where&&(lt.where=e,lt.kick=1,e==="town"?G.seenTown?Ln("Mossbrook Square","",{ms:1600,kind:"loc"}):(G.seenTown=!0,Ln("Mossbrook Square","Demo: townsfolk and buyers are simulated",{ms:3400}),ai("town"),xe(!0)):e==="forest"?G.seenWood?Ln("Whisperwood","",{ms:1600,kind:"loc"}):(G.seenWood=!0,Ln("Whisperwood","Wild berries and bugs. They come back on the real clock",{ms:3400}),xe(!0)):e==="pond"?G.seenPond?Ln("Willow Pond","",{ms:1600,kind:"loc"}):(G.seenPond=!0,Ln("Willow Pond","Fish from the dock. Catch what bites",{ms:3400}),xe(!0)):Ln("Hazel Cottage","",{ms:1600,kind:"loc"}),e==="home"&&se&&Ql(null))}var Iu=performance.now(),Cr=[],Da=[0,0];function lm(i){requestAnimationFrame(lm);let t=(i-Iu)/1e3;Iu=i,t>0&&t<.1&&(Cr.push(t),Cr.length>6&&Cr.shift());let e=Math.min(.05,Cr.length?Cr.reduce((s,r)=>s+r,0)/Cr.length:1/60);lt.t+=e;let n=Sp();if(ft.frozen=Us(),ri.isOpen&&(ri.update(e,n),wr(null),_c(null),ec($t,null)),!xn.isOpen&&!ri.covers){ft.update(e,n),Oe.update(e),se&&se.update(e);for(let s of Object.keys(_n))_n[s].update(e);Ip(_n,e),Un.update(e,lt.t),si.update(e,lt.t);for(let s of Ve.tick)s(e,lt.t);if(!lt.started)$t.target.x=3+Math.sin(lt.t*.08)*4,$t.target.z=.8,$t.distGoal=Gp,$t.follow($t.target.x,$t.target.z,e);else if(lt.focus)$t.follow(lt.focus[0],lt.focus[1]+.6,e);else{let s=-1e9;for(let[a,o,l,c]of ba)ft.x>=a-.3&&ft.x<=o+.3&&ft.z>=l-.3&&ft.z<=c+.3&&(s=Math.max(s,c-1.2));s<-1e8&&(s=1e9);let r=1-Math.exp(-e*2);Da[0]+=(ft.face*.55+ft.vx*.2-Da[0])*r,Da[1]+=(ft.vz*.14-Da[1])*r,$t.follow(ft.x,ft.z+.5,e,Da,[-35,45],s),lt.kick>0&&(lt.kick=Math.max(0,lt.kick-e/1.6),$t.distGoal=Ns+Math.sin(lt.kick*Math.PI)*2.4)}if(Mb(e),$t.update(e,lt.t),$t.render(),lt.started){Jp(),rb(e),Sb(e),ec($t,Us()||lt.target?null:nb()),wb();let[s,r]=tb();xp(s,r)}}else xn.isOpen&&(xn.update(e),wr(null),_c(null),ec($t,null));if(lt.secT-=e,lt.secT<=0&&(lt.secT=1,Fu(),lt.started&&(om(),ic()))){let s=Gt("#panel .shop-card.mine");s&&s._tick&&s._tick()}lt.saveT-=e,lt.quiet>0&&(lt.quiet-=e),lt.saveT<=0&&lt.started&&(lt.saveT=5,G.pos=[+ft.x.toFixed(2),+ft.z.toFixed(2)],G.lastSeen=me(),xe()),!lt.lowQ&&lt.started&&(lt.fps.push(e),lt.fps.length>180&&lt.fps.shift(),lt.fps.length===180&&lt.fps.reduce((r,a)=>r+a,0)/180>1/38&&(lt.lowQ=!0,$t.quality=0,$t.resize()))}function Tb(i,t){if(lt.started){if(lt.disc){t&&["Enter","Space","KeyE"].includes(i)&&Aa.close&&Aa.close();return}if(ri.isOpen){ri.key(i,t);return}if(xn.isOpen){xn.key(i,t);return}if(nc()){t&&bp(i);return}if(ic()){t&&(i==="Escape"||i==="KeyB"&&Gt("#panel .bag-card"))&&Es();return}t&&(i==="KeyE"||i==="Space"||i==="Enter"?Pu():i==="KeyB"||i==="KeyI"?(ht.click(),em()):i==="KeyR"?(ht.click(),nm()):i==="Escape"&&(ht.click(),am()))}}async function Eb(){let i=Gt("#loading .load-bar i");await Df(e=>{i.style.width=Math.round(e*100)+"%"}),Bf();try{await document.fonts.load("700 20px Mali")}catch{}$t=new Ul(Gt("#world")),Ve=np($t),Un=new fc($t),si=new ac($t,Ve),Oe=new hc($t),_n=Pp($t,dc);let t=G.name&&G.pos?G.pos:ct.start;ft=new cc($t,Ve,t[0],t[1]),Ds=new jl($t),xn=new xc(Gt("#brewRoot"),{onBottle:yb,onClose:bb,onInv:()=>{}}),ri=new rc,vp(()=>xn.isOpen||ri.isOpen||lt.disc),G.stall.items.length&&Oe.moveToStall(!0),je()!=="letter"&&Ve.props.mailbox.set("mailbox_empty"),$t.snap(3,.8),$t.dist=Gp,Fu(),Mp({onAct:Pu,onKey:Tb}),window.addEventListener("resize",()=>$t.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&lt.started&&(G.lastSeen=me(),G.pos=[ft.x,ft.z],xe())}),Gt("#hud .hud-tr #bBag").addEventListener("click",()=>{Us()||(ht.click(),em())}),Gt("#bBook").addEventListener("click",()=>{Us()||(ht.click(),nm())}),Gt("#bSet").addEventListener("click",()=>{Us()||(ht.click(),am())}),requestAnimationFrame(e=>{Iu=e,lm(e)}),Gt("#loading").classList.add("done"),setTimeout(()=>Gt("#loading").remove(),600),Ab(),location.hash==="#test"&&(window.__slice={G:lt,save:G,world:$t,Puppet:Ss,get witch(){return ft},get cust(){return se},brew:xn,garden:Un,wild:si,cat:Oe,folk:_n,act:Pu,targets:Zp,pickTarget:Jp,get mini(){return ri},get S(){return Ve},catchBug:Kp,goFish:Qp,tp(e,n){ft.spr.mesh.position.x=e,ft.spr.mesh.position.z=n}})}function Ab(){let i=Gt("#title");i.classList.remove("hidden");let t=i.querySelector(".title-main"),e=i.querySelector(".title-new"),n=Gt("#bStart");n.querySelector("span").textContent=G.name?`Continue as ${G.name}`:"Start";let s=()=>{hp(),Jl(),ht.click()};n.addEventListener("click",()=>{if(s(),G.name){Hp(!1);return}t.classList.add("hidden"),e.classList.remove("hidden");let a=Gt("#nameIn");setTimeout(()=>a.focus(),50)});let r=()=>{let a=Gt("#nameIn").value.trim().replace(/[<>]/g,"").slice(0,12);if(!a){ni(Gt("#nameIn")),ht.click();return}G.name=a,xe(),ht.quest(),Hp(!0)};Gt("#bBegin").addEventListener("click",r),Gt("#nameIn").addEventListener("keydown",a=>{a.key==="Enter"&&r()})}async function Hp(i){await Ca(!0),Gt("#title").classList.add("hidden"),Gt("#hud").classList.remove("hidden"),Gn&&Gt("#touch").classList.remove("hidden"),lt.started=!0,$t.distGoal=Ns,$t.dist=Ns,$t.snap(ft.x,ft.z+.5);let t=me()-(G.lastSeen||me()),e=om(!0);if(Ea(G.coins),du(Ru(),G.fame%3/3),Sr(G.newCount||0),lt.where=ft.x>Ri+1?"town":ft.x<ws?"forest":"home",G.cust.here||je()==="deliver"?Na(!1):je()==="talk"?Na(!0):je()==="free"&&me()>=G.cust.nextAt&&Na(!1),G.stall.items.length&&Oe.moveToStall(!0),await Ca(!1),i)Ln("Hazel Cottage",`Welcome home, ${ei(G.name)}`,{ms:3e3}),setTimeout(async()=>{Oe.hop(),ht.meow();let n=ct.mailbox[0]+1.5,s=ct.mailbox[1]+.7;ft.walkTo(n,s,Oe.x,2.4),lt.focus=[(Oe.x+n)/2,(Oe.z+s)/2],$t.distGoal=vi,await Pi("Kuro","Mrrow. (Kuro paws at the mailbox. A letter is sticking out.)",[],{pitch:hs.kuro}),lt.focus=null,$t.distGoal=Ns},1400);else{let n=()=>Ln(ft.x>Ri?"Mossbrook Square":ft.x<ws?"Whisperwood":"Hazel Cottage",`Welcome back, ${ei(G.name)}`,{ms:2400}),s=[],r=Un.readyCount();t>6e4&&(r&&s.push([Pa[G.plots.find((a,o)=>Un.state(o).ready).crop].sprite[2],`${r} plant${r>1?"s are":" is"} ready to pick`]),e.sold.length&&s.push(["coin",`Kuro sold ${e.sold.length} potion${e.sold.length>1?"s":""} for ${e.total} coins`]),se&&s.push([se.def.sprite,`${se.def.name} is waiting at your door`])),s.length?setTimeout(()=>{vb(s,t),n()},700):n()}}Eb().catch(i=>{console.error(i);let t=Gt("#loading p");t&&(t.textContent="Something went wrong while loading. Please reload.")});
