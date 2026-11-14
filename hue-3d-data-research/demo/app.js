(()=>{var Tc="169",Sn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Jc=1,Eu=2;var hh=1,Ac=2,Un=3,vn=0,Re=1,$e=2,Kn=0,ki=1,jc=2,Qc=3,tl=4,wu=5,hi=100,Tu=101,Au=102,Ru=103,Cu=104,Pu=200,Iu=201,Lu=202,Du=203,jo=204,Qo=205,Uu=206,Nu=207,Ou=208,Fu=209,Bu=210,zu=211,ku=212,Hu=213,Vu=214,ta=0,ea=1,na=2,Wi=3,ia=4,sa=5,ra=6,oa=7,Rc=0,Gu=1,Wu=2,Jn=0,Xu=1,qu=2,Yu=3,Cc=4,Zu=5,$u=6,Ku=7;var uh=300,Xi=301,qi=302,aa=303,ca=304,Jr=306,la=1e3,fi=1001,ha=1002,Je=1003,Ju=1004;var Us=1005;var _n=1006,xo=1007;var pi=1008;var On=1009,dh=1010,fh=1011,vs=1012,Pc=1013,mi=1014,wn=1015,Is=1016,Ic=1017,Lc=1018,Yi=1020,ph=35902,mh=1021,gh=1022,xn=1023,_h=1024,xh=1025,Hi=1026,Zi=1027,Dc=1028,Uc=1029,vh=1030,Nc=1031;var Oc=1033,hr=33776,ur=33777,dr=33778,fr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37808,va=37809,ya=37810,Ma=37811,ba=37812,Sa=37813,Ea=37814,wa=37815,Ta=37816,Aa=37817,Ra=37818,Ca=37819,Pa=37820,Ia=37821,pr=36492,La=36494,Da=36495,yh=36283,Ua=36284,Na=36285,Oa=36286;var gr=2300,Fa=2301,vo=2302,el=2400,nl=2401,il=2402;var ju=3200,Qu=3201;var Mh=0,td=1,$n="",cn="srgb",ei="srgb-linear",Fc="display-p3",jr="display-p3-linear",_r="linear",ge="srgb",xr="rec709",vr="p3";var bi=7680;var sl=519,ed=512,nd=513,id=514,bh=515,sd=516,rd=517,od=518,ad=519,rl=35044,Sh=35048;var ol="300 es",Nn=2e3,yr=2001,Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],al=1234567,ps=Math.PI/180,ys=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function cd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ld(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function ud(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function md(i,t){return i+Math.random()*(t-i)}function gd(i){return i*(.5-Math.random())}function _d(i){i!==void 0&&(al=i);let t=al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*ps}function vd(i){return i*ys}function yd(i){return(i&i-1)===0&&i!==0}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),g=r((n-t)/2),f=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*f,c*g,a*l);break;case"YXY":i.set(c*g,a*h,c*f,a*l);break;case"ZYZ":i.set(c*f,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Te={DEG2RAD:ps,RAD2DEG:ys,generateUUID:Qi,clamp:Oe,euclideanModulo:Bc,mapLinear:cd,inverseLerp:ld,lerp:ms,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:_d,degToRad:xd,radToDeg:vd,isPowerOfTwo:yd,ceilPowerOfTwo:Md,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Sd,normalize:qe,denormalize:Fi},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],g=n[5],f=n[8],_=s[0],p=s[3],m=s[6],M=s[1],x=s[4],y=s[7],C=s[2],T=s[5],w=s[8];return r[0]=o*_+a*M+c*C,r[3]=o*p+a*x+c*T,r[6]=o*m+a*y+c*w,r[1]=l*_+h*M+d*C,r[4]=l*p+h*x+d*T,r[7]=l*m+h*y+d*w,r[2]=u*_+g*M+f*C,r[5]=u*p+g*x+f*T,r[8]=u*m+g*y+f*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,g=l*r-o*c,f=e*d+n*u+s*g;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=g*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yo=new Gt;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){let i=Ms("canvas");return i.style.display="block",i}var cl={};function mr(i){i in cl||(cl[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Td(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ad(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ll=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hl=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rs={[ei]:{transfer:_r,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[cn]:{transfer:ge,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jr]:{transfer:_r,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hl),fromReference:i=>i.applyMatrix3(ll)},[Fc]:{transfer:ge,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hl),fromReference:i=>i.applyMatrix3(ll).convertLinearToSRGB()}},Rd=new Set([ei,jr]),oe={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=rs[t].toReference,s=rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return rs[i].primaries},getTransfer:function(i){return i===$n?_r:rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(rs[t].luminanceCoefficients)}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Si,Ba=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Ms("canvas")),Si.width=t.width,Si.height=t.height;let n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,Mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bo(s[o].image)):r.push(bo(s[o]))}else r=bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pd=0,je=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fi,s=fi,r=_n,o=pi,a=xn,c=On,l=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Qi(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=uh;je.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],g=c[5],f=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+p)<.1&&Math.abs(l+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,y=(g+1)/2,C=(m+1)/2,T=(h+u)/4,w=(d+_)/4,P=(f+p)/4;return x>y&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-f)*(p-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-f)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends Fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Mr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},br=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],g=r[o+1],f=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=g,t[e+2]=f,t[e+3]=_;return}if(d!==_||c!==u||l!==g||h!==f){let p=1-a,m=c*u+l*g+h*f+d*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,m*M);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}let y=a*M;if(c=c*p+u*y,l=l*p+g*y,h=h*p+f*y,d=d*p+_*y,p===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],g=r[o+2],f=r[o+3];return t[e]=a*f+h*d+c*g-l*u,t[e+1]=c*f+h*u+l*d-a*g,t[e+2]=l*f+h*g+a*u-c*d,t[e+3]=h*f-a*d-c*u-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),g=c(s/2),f=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*g*f,this._y=l*g*d-u*h*f,this._z=l*h*f+u*g*d,this._w=l*h*d-u*g*f;break;case"YXZ":this._x=u*h*d+l*g*f,this._y=l*g*d-u*h*f,this._z=l*h*f-u*g*d,this._w=l*h*d+u*g*f;break;case"ZXY":this._x=u*h*d-l*g*f,this._y=l*g*d+u*h*f,this._z=l*h*f+u*g*d,this._w=l*h*d-u*g*f;break;case"ZYX":this._x=u*h*d-l*g*f,this._y=l*g*d+u*h*f,this._z=l*h*f-u*g*d,this._w=l*h*d+u*g*f;break;case"YZX":this._x=u*h*d+l*g*f,this._y=l*g*d+u*h*f,this._z=l*h*f-u*g*d,this._w=l*h*d-u*g*f;break;case"XZY":this._x=u*h*d-l*g*f,this._y=l*g*d-u*h*f,this._z=l*h*f+u*g*d,this._w=l*h*d+u*g*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new R,ul=new Ge,zn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Os.subVectors(this.max,os),Ei.subVectors(t.a,os),wi.subVectors(t.b,os),Ti.subVectors(t.c,os),Gn.subVectors(wi,Ei),Wn.subVectors(Ti,wi),ii.subVectors(Ei,Ti);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ii.z,ii.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ii.z,0,-ii.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ii.y,ii.x,0];return!Eo(e,Ei,wi,Ti,Os)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Ei,wi,Ti,Os))?!1:(Fs.crossVectors(Gn,Wn),e=[Fs.x,Fs.y,Fs.z],Eo(e,Ei,wi,Ti,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new R,new R,new R,new R,new R,new R,new R,new R],fn=new R,Ns=new zn,Ei=new R,wi=new R,Ti=new R,Gn=new R,Wn=new R,ii=new R,os=new R,Os=new R,Fs=new R,si=new R;function Eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);let a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),c=t.dot(si),l=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Id=new zn,as=new R,wo=new R,yn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);let e=as.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(wo)),this.expandByPoint(as.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new R,To=new R,Bs=new R,Xn=new R,Ao=new R,zs=new R,Ro=new R,jn=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){To.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(To);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),a=Xn.dot(this.direction),c=-Xn.dot(Bs),l=Xn.lengthSq(),h=Math.abs(1-o*o),d,u,g,f;if(h>0)if(d=o*c-a,u=o*a-c,f=r*h,d>=0)if(u>=-f)if(u<=f){let _=1/h;d*=_,u*=_,g=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),g=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),g=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),g=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(To).addScaledVector(Bs,u),g}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){Ao.subVectors(e,t),zs.subVectors(n,t),Ro.crossVectors(Ao,zs);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);let c=a*this.direction.dot(zs.crossVectors(Xn,zs));if(c<0)return null;let l=a*this.direction.dot(Ao.cross(Xn));if(l<0||c+l>o)return null;let h=-a*Xn.dot(Ro);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,g,f,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,g,f,_,p)}set(t,e,n,s,r,o,a,c,l,h,d,u,g,f,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=g,m[7]=f,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,g=o*d,f=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=g+f*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=f+g*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,g=c*d,f=l*h,_=l*d;e[0]=u+_*a,e[4]=f*a-g,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=g*a-f,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,g=c*d,f=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=f+g*a,e[1]=g+f*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,g=o*d,f=a*h,_=a*d;e[0]=c*h,e[4]=f*l-g,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=g*l-f,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,g=o*l,f=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=f*d+g,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*d+f,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*c,g=o*l,f=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=g*d-f,e[2]=f*d-g,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),qn.crossVectors(n,nn),qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),qn.crossVectors(n,nn)),qn.normalize(),ks.crossVectors(nn,qn),s[0]=qn.x,s[4]=ks.x,s[8]=nn.x,s[1]=qn.y,s[5]=ks.y,s[9]=nn.y,s[2]=qn.z,s[6]=ks.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],g=n[13],f=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],C=n[15],T=s[0],w=s[4],P=s[8],O=s[12],v=s[1],b=s[5],F=s[9],N=s[13],L=s[2],W=s[6],D=s[10],Z=s[14],z=s[3],et=s[7],J=s[11],V=s[15];return r[0]=o*T+a*v+c*L+l*z,r[4]=o*w+a*b+c*W+l*et,r[8]=o*P+a*F+c*D+l*J,r[12]=o*O+a*N+c*Z+l*V,r[1]=h*T+d*v+u*L+g*z,r[5]=h*w+d*b+u*W+g*et,r[9]=h*P+d*F+u*D+g*J,r[13]=h*O+d*N+u*Z+g*V,r[2]=f*T+_*v+p*L+m*z,r[6]=f*w+_*b+p*W+m*et,r[10]=f*P+_*F+p*D+m*J,r[14]=f*O+_*N+p*Z+m*V,r[3]=M*T+x*v+y*L+C*z,r[7]=M*w+x*b+y*W+C*et,r[11]=M*P+x*F+y*D+C*J,r[15]=M*O+x*N+y*Z+C*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],g=t[14],f=t[3],_=t[7],p=t[11],m=t[15];return f*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*g-n*c*g)+_*(+e*c*g-e*l*u+r*o*u-s*o*g+s*l*h-r*c*h)+p*(+e*l*d-e*a*g-r*o*d+n*o*g+r*a*h-n*l*h)+m*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],g=t[11],f=t[12],_=t[13],p=t[14],m=t[15],M=d*p*l-_*u*l+_*c*g-a*p*g-d*c*m+a*u*m,x=f*u*l-h*p*l-f*c*g+o*p*g+h*c*m-o*u*m,y=h*_*l-f*d*l+f*a*g-o*_*g-h*a*m+o*d*m,C=f*d*c-h*_*c-f*a*u+o*_*u+h*a*p-o*d*p,T=e*M+n*x+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(_*u*r-d*p*r-_*s*g+n*p*g+d*s*m-n*u*m)*w,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*w,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*g-n*c*g)*w,t[4]=x*w,t[5]=(h*p*r-f*u*r+f*s*g-e*p*g-h*s*m+e*u*m)*w,t[6]=(f*c*r-o*p*r-f*s*l+e*p*l+o*s*m-e*c*m)*w,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*g+e*c*g)*w,t[8]=y*w,t[9]=(f*d*r-h*_*r-f*n*g+e*_*g+h*n*m-e*d*m)*w,t[10]=(o*_*r-f*a*r+f*n*l-e*_*l-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*g-e*a*g)*w,t[12]=C*w,t[13]=(h*_*s-f*d*s+f*n*u-e*_*u-h*n*p+e*d*p)*w,t[14]=(f*a*s-o*_*s-f*n*c+e*_*c+o*n*p-e*a*p)*w,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,g=r*h,f=r*d,_=o*h,p=o*d,m=a*d,M=c*l,x=c*h,y=c*d,C=n.x,T=n.y,w=n.z;return s[0]=(1-(_+m))*C,s[1]=(g+y)*C,s[2]=(f-x)*C,s[3]=0,s[4]=(g-y)*T,s[5]=(1-(u+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(f+x)*w,s[9]=(p-M)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);let l=1/r,h=1/o,d=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,f;if(a===Nn)g=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===yr)g=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,g=(n+s)*h,f,_;if(a===Nn)f=(o+r)*d,_=-2*d;else if(a===yr)f=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ai=new R,pn=new ee,Ld=new R(0,0,0),Dd=new R(1,1,1),qn=new R,ks=new R,nn=new R,dl=new ee,fl=new Ge,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fl.setFromEuler(this),this.setFromQuaternion(fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ud=0,pl=new R,Ri=new Ge,In=new ee,Hs=new R,cs=new R,Nd=new R,Od=new Ge,ml=new R(1,0,0),gl=new R(0,1,0),_l=new R(0,0,1),xl={type:"added"},Fd={type:"removed"},Ci={type:"childadded",child:null},Co={type:"childremoved",child:null},ze=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Tn,n=new Ge,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Gt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(cs,Hs,this.up):In.lookAt(Hs,cs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(In),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),Co.child=t,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),g=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new R(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new R,Ln=new R,Po=new R,Dn=new R,Pi=new R,Ii=new R,vl=new R,Io=new R,Lo=new R,Do=new R,Uo=new be,No=new be,Oo=new be,ui=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Ln.subVectors(n,e),Po.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(Ln),c=mn.dot(Po),l=Ln.dot(Ln),h=Ln.dot(Po),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,g=(l*c-a*h)*u,f=(o*h-a*c)*u;return r.set(1-g-f,f,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Uo.setScalar(0),No.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),Oo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Uo,r.x),o.addScaledVector(No,r.y),o.addScaledVector(Oo,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Ln.subVectors(t,e),mn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Pi.subVectors(s,n),Ii.subVectors(r,n),Io.subVectors(t,n);let c=Pi.dot(Io),l=Ii.dot(Io);if(c<=0&&l<=0)return e.copy(n);Lo.subVectors(t,s);let h=Pi.dot(Lo),d=Ii.dot(Lo);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Pi,o);Do.subVectors(t,r);let g=Pi.dot(Do),f=Ii.dot(Do);if(f>=0&&g<=f)return e.copy(r);let _=g*l-c*f;if(_<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Ii,a);let p=h*f-g*d;if(p<=0&&d-h>=0&&g-f>=0)return vl.subVectors(r,s),a=(d-h)/(d-h+(g-f)),e.copy(s).addScaledVector(vl,a);let m=1/(p+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(Pi,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Bc(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fo(o,r,t+1/3),this.g=Fo(o,r,t),this.b=Fo(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){let n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return oe.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Oe(Ve.r*255,0,255))*65536+Math.round(Oe(Ve.g*255,0,255))*256+Math.round(Oe(Ve.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=cn){oe.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Vs);let n=ms(Yn.h,Vs.h,e),s=ms(Yn.s,Vs.s,e),r=ms(Yn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Tt;Tt.NAMES=wh;var Bd=0,kn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=ki,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Qo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new R,Gs=new pt,ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}};var Sr=class extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Er=class extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},zd=0,an=new ee,Bo=new ze,Li=new R,sn=new zn,ls=new zn,Ne=new R,de=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Er:Sr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(sn.min,ls.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,ls.max),sn.expandByPoint(Ne)):(sn.expandByPoint(ls.min),sn.expandByPoint(ls.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(Li.fromBufferAttribute(t,l),Ne.add(Li)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;let l=new R,h=new R,d=new R,u=new pt,g=new pt,f=new pt,_=new R,p=new R;function m(P,O,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,O),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,P),g.fromBufferAttribute(r,O),f.fromBufferAttribute(r,v),h.sub(l),d.sub(l),g.sub(u),f.sub(u);let b=1/(g.x*f.y-f.x*g.y);isFinite(b)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-g.y).multiplyScalar(b),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-f.x).multiplyScalar(b),a[P].add(_),a[O].add(_),a[v].add(_),c[P].add(p),c[O].add(p),c[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,O=M.length;P<O;++P){let v=M[P],b=v.start,F=v.count;for(let N=b,L=b+F;N<L;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new R,y=new R,C=new R,T=new R;function w(P){C.fromBufferAttribute(s,P),T.copy(C);let O=a[P];x.copy(O),x.sub(C.multiplyScalar(C.dot(O))).normalize(),y.crossVectors(T,O);let b=y.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,O=M.length;P<O;++P){let v=M[P],b=v.start,F=v.count;for(let N=b,L=b+F;N<L;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,g=t.count;u<g;u+=3){let f=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,g=e.count;u<g;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),g=0,f=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?g=c[_]*a.data.stride+a.offset:g=c[_]*h;for(let m=0;m<h;m++)u[f++]=l[g++]}return new ne(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],g=t(u,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let g=l[d];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,g=d.length;u<g;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yl=new ee,ri=new jn,Ws=new yn,Ml=new R,Xs=new R,qs=new R,Ys=new R,zo=new R,Zs=new R,bl=new R,$s=new R,Xt=class extends ze{constructor(t=new de,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(zo.fromBufferAttribute(d,t),o?Zs.addScaledVector(zo,h):Zs.addScaledVector(zo.sub(e),h))}e.add(Zs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(Ws.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Ws,Ml)===null||ri.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(yl.copy(r).invert(),ri.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=u.length;f<_;f++){let p=u[f],m=o[p.materialIndex],M=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=M,C=x;y<C;y+=3){let T=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);s=Ks(this,m,t,n,l,h,d,T,w,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let f=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=f,m=_;p<m;p+=3){let M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=Ks(this,o,t,n,l,h,d,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let f=0,_=u.length;f<_;f++){let p=u[f],m=o[p.materialIndex],M=Math.max(p.start,g.start),x=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let y=M,C=x;y<C;y+=3){let T=y,w=y+1,P=y+2;s=Ks(this,m,t,n,l,h,d,T,w,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let f=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let p=f,m=_;p<m;p+=3){let M=p,x=p+1,y=p+2;s=Ks(this,o,t,n,l,h,d,M,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function kd(i,t,e,n,s,r,o,a){let c;if(t.side===Re?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===vn,a),c===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo($s);return l<e.near||l>e.far?null:{distance:l,point:$s.clone(),object:i}}function Ks(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(l,Ys);let h=kd(i,t,e,n,Xs,qs,Ys,bl);if(h){let d=new R;ui.getBarycoord(bl,Xs,qs,Ys,d),s&&(h.uv=ui.getInterpolatedAttribute(s,a,c,l,d,new pt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,c,l,d,new pt)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};ui.getNormal(Xs,qs,Ys,u.normal),h.face=u,h.barycoord=d}return h}var ke=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,g=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,s,o,2),f("x","z","y",1,-1,t,n,-e,s,o,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function f(_,p,m,M,x,y,C,T,w,P,O){let v=y/w,b=C/P,F=y/2,N=C/2,L=T/2,W=w+1,D=P+1,Z=0,z=0,et=new R;for(let J=0;J<D;J++){let V=J*b-N;for(let ht=0;ht<W;ht++){let Mt=ht*v-F;et[_]=Mt*M,et[p]=V*x,et[m]=L,l.push(et.x,et.y,et.z),et[_]=0,et[p]=0,et[m]=T>0?1:-1,h.push(et.x,et.y,et.z),d.push(ht/w),d.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let V=0;V<w;V++){let ht=u+V+W*J,Mt=u+V+W*(J+1),G=u+(V+1)+W*(J+1),$=u+(V+1)+W*J;c.push(ht,Mt,$),c.push(Mt,G,$),z+=6}a.addGroup(g,z,O),g+=z,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function Hd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var zc={clone:$i,merge:Ye},Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new R,Sl=new pt,El=new pt,Ze=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,El),e.subVectors(El,Sl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Di=-90,Ui=1,Ha=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(Di,Ui,t,e);s.layers=this.layers,this.add(s);let r=new Ze(Di,Ui,t,e);r.layers=this.layers,this.add(r);let o=new Ze(Di,Ui,t,e);o.layers=this.layers,this.add(o);let a=new Ze(Di,Ui,t,e);a.layers=this.layers,this.add(a);let c=new Ze(Di,Ui,t,e);c.layers=this.layers,this.add(c);let l=new Ze(Di,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,g),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Tr=class extends je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Va=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Kn});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=_n),new Ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ko=new R,Wd=new R,Xd=new Gt,gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ko.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new yn,Js=new R,Ss=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],g=s[8],f=s[9],_=s[10],p=s[11],m=s[12],M=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,u-l,p-g,y-m).normalize(),n[1].setComponents(c+r,u+l,p+g,y+m).normalize(),n[2].setComponents(c+o,u+h,p+f,y+M).normalize(),n[3].setComponents(c-o,u-h,p-f,y-M).normalize(),n[4].setComponents(c-a,u-d,p-_,y-x).normalize(),e===Nn)n[5].setComponents(c+a,u+d,p+_,y+x).normalize();else if(e===yr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ah(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qd(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((g,f)=>g.start-f.start);let u=0;for(let g=1;g<d.length;g++){let f=d[u],_=d[g];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,d[u]=_)}d.length=u+1;for(let g=0,f=d.length;g<f;g++){let _=d[g];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ki=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,g=[],f=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*u-o;for(let x=0;x<l;x++){let y=x*d-r;f.push(y,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let x=M+l*m,y=M+l*(m+1),C=M+1+l*(m+1),T=M+1+l*m;g.push(x,y,T),g.push(y,C,T)}this.setIndex(g),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,cf=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_f=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,_m=`#define STANDARD
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
}`,xm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vm=`#define TOON
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
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:$d,alphamap_pars_fragment:Kd,alphatest_fragment:Jd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:cf,clipping_planes_fragment:lf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:xf,defaultnormal_vertex:vf,displacementmap_pars_vertex:yf,displacementmap_vertex:Mf,emissivemap_fragment:bf,emissivemap_pars_fragment:Sf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Of,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:$f,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Op,specularmap_fragment:Fp,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Hp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:Kp,cube_vert:Jp,cube_frag:jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:cm,meshlambert_vert:lm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:ym,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},dt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},En={basic:{uniforms:Ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ye([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ye([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ye([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ye([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ye([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ye([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ye([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ye([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ye([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ye([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ye([dt.lights,dt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};En.physical={uniforms:Ye([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var js={r:0,b:0,g:0},ai=new Tn,Am=new ee;function Rm(i,t,e,n,s,r,o){let a=new Tt(0),c=r===!0?0:1,l,h,d=null,u=0,g=null;function f(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,y=f(M);y===null?m(a,c):y&&y.isColor&&(m(y,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,x){let y=f(x);y&&(y.isCubeTexture||y.mapping===Jr)?(h===void 0&&(h=new Xt(new ke(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:$i(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(ai)),h.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,(d!==y||u!==y.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xt(new Ki(2,2),new We({name:"BackgroundMaterial",uniforms:$i(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,g=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,x){M.getRGB(js,Th(i)),n.buffers.color.setClear(js.r,js.g,js.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:_,addToRenderList:p}}function Cm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(v,b,F,N,L){let W=!1,D=d(N,F,b);r!==D&&(r=D,l(r.object)),W=g(v,N,F,L),W&&f(v,N,F,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(v,b,F,N),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,b,F){let N=F.wireframe===!0,L=n[v.id];L===void 0&&(L={},n[v.id]=L);let W=L[b.id];W===void 0&&(W={},L[b.id]=W);let D=W[N];return D===void 0&&(D=u(c()),W[N]=D),D}function u(v){let b=[],F=[],N=[];for(let L=0;L<e;L++)b[L]=0,F[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:N,object:v,attributes:{},index:null}}function g(v,b,F,N){let L=r.attributes,W=b.attributes,D=0,Z=F.getAttributes();for(let z in Z)if(Z[z].location>=0){let J=L[z],V=W[z];if(V===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),J===void 0||J.attribute!==V||V&&J.data!==V.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function f(v,b,F,N){let L={},W=b.attributes,D=0,Z=F.getAttributes();for(let z in Z)if(Z[z].location>=0){let J=W[z];J===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));let V={};V.attribute=J,J&&J.data&&(V.data=J.data),L[z]=V,D++}r.attributes=L,r.attributesNum=D,r.index=N}function _(){let v=r.newAttributes;for(let b=0,F=v.length;b<F;b++)v[b]=0}function p(v){m(v,0)}function m(v,b){let F=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;F[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),L[v]!==b&&(i.vertexAttribDivisor(v,b),L[v]=b)}function M(){let v=r.newAttributes,b=r.enabledAttributes;for(let F=0,N=b.length;F<N;F++)b[F]!==v[F]&&(i.disableVertexAttribArray(F),b[F]=0)}function x(v,b,F,N,L,W,D){D===!0?i.vertexAttribIPointer(v,b,F,L,W):i.vertexAttribPointer(v,b,F,N,L,W)}function y(v,b,F,N){_();let L=N.attributes,W=F.getAttributes(),D=b.defaultAttributeValues;for(let Z in W){let z=W[Z];if(z.location>=0){let et=L[Z];if(et===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let J=et.normalized,V=et.itemSize,ht=t.get(et);if(ht===void 0)continue;let Mt=ht.buffer,G=ht.type,$=ht.bytesPerElement,nt=G===i.INT||G===i.UNSIGNED_INT||et.gpuType===Pc;if(et.isInterleavedBufferAttribute){let at=et.data,ut=at.stride,bt=et.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<z.locationSize;Ot++)m(z.location+Ot,at.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<z.locationSize;Ot++)p(z.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Ot=0;Ot<z.locationSize;Ot++)x(z.location+Ot,V/z.locationSize,G,J,ut*$,(bt+V/z.locationSize*Ot)*$,nt)}else{if(et.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)m(z.location+at,et.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let at=0;at<z.locationSize;at++)p(z.location+at);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let at=0;at<z.locationSize;at++)x(z.location+at,V/z.locationSize,G,J,V*$,V/z.locationSize*at*$,nt)}}else if(D!==void 0){let J=D[Z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(z.location,J);break;case 3:i.vertexAttrib3fv(z.location,J);break;case 4:i.vertexAttrib4fv(z.location,J);break;default:i.vertexAttrib1fv(z.location,J)}}}}M()}function C(){P();for(let v in n){let b=n[v];for(let F in b){let N=b[F];for(let L in N)h(N[L].object),delete N[L];delete b[F]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let F in b){let N=b[F];for(let L in N)h(N[L].object),delete N[L];delete b[F]}delete n[v.id]}function w(v){for(let b in n){let F=n[b];if(F[v.id]===void 0)continue;let N=F[v.id];for(let L in N)h(N[L].object),delete N[L];delete F[v.id]}}function P(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Pm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let g=0;for(let f=0;f<d;f++)g+=h[f];e.update(g,n,1)}function c(l,h,d,u){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<l.length;f++)o(l[f],h[f],u[f]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];for(let _=0;_<u.length;_++)e.update(f,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:g,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function Lm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let g=d.length!==0||u||n!==0||s;return s=u,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,g){let f=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||f===null||f.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,x=M*4,y=m.clippingState||null;c.value=y,y=h(f,u,x,g);for(let C=0;C!==x;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,g,f){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,f!==!0||p===null){let m=g+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=g;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Dm(i){let t=new WeakMap;function e(o,a){return a===aa?o.mapping=Xi:a===ca&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===aa||a===ca)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Va(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ar=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bi=4,wl=[.125,.215,.35,.446,.526,.582],di=20,Ho=new Ar,Tl=new Tt,Vo=null,Go=0,Wo=0,Xo=!1,li=(1+Math.sqrt(5))/2,Ni=1/li,Al=[new R(-li,Ni,0),new R(li,Ni,0),new R(-Ni,0,li),new R(Ni,0,li),new R(0,li,-Ni),new R(0,li,Ni),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Go,Wo),this._renderer.xr.enabled=Xo,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Is,format:xn,colorSpace:ei,depthBuffer:!1},s=Rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Tl),h.toneMapping=Jn,h.autoClear=!1;let g=new Ke({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),f=new Xt(new ke,g),_=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,_=!0):(g.color.copy(Tl),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):M===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let x=this._cubeSize;Qs(s,M*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(f,a),h.render(t,a)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ho)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Al[(s-r-1)%Al.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Xt(this._lodPlanes[s],l),u=l.uniforms,g=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*di-1),_=r/f,p=isFinite(r)?1+Math.floor(h*_):di;p>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);let m=[],M=0;for(let w=0;w<di;++w){let P=w/_,O=Math.exp(-P*P/2);m.push(O),w===0?M+=O:w<p&&(M+=2*O)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=f,u.mipInt.value=x-n;let y=this._sizeLods[s],C=3*y*(s>x-Bi?s-x+Bi:0),T=4*(this._cubeSize-y);Qs(e,C,T,3*y,2*y),c.setRenderTarget(e),c.render(d,Ho)}};function Um(i){let t=[],e=[],n=[],s=i,r=i-Bi+1+wl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Bi?c=wl[o-i+Bi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,f=6,_=3,p=2,m=1,M=new Float32Array(_*f*g),x=new Float32Array(p*f*g),y=new Float32Array(m*f*g);for(let T=0;T<g;T++){let w=T%3*2/3-1,P=T>2?0:-1,O=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];M.set(O,_*f*T),x.set(u,p*f*T);let v=[T,T,T,T,T,T];y.set(v,m*f*T)}let C=new de;C.setAttribute("position",new ne(M,_)),C.setAttribute("uv",new ne(x,p)),C.setAttribute("faceIndex",new ne(y,m)),t.push(C),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rl(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nm(i,t,e){let n=new Float32Array(di),s=new R(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Cl(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Pl(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Om(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===aa||c===ca,h=c===Xi||c===qi;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Rr(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let g=a.image;return l&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new Rr(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let f in u.attributes)t.remove(u.attributes[f]);for(let f in u.morphAttributes){let _=u.morphAttributes[f];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}u.removeEventListener("dispose",o),delete s[u.id];let g=r.get(u);g&&(t.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let f in g){let _=g[f];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(d){let u=[],g=d.index,f=d.attributes.position,_=0;if(g!==null){let M=g.array;_=g.version;for(let x=0,y=M.length;x<y;x+=3){let C=M[x+0],T=M[x+1],w=M[x+2];u.push(C,T,T,w,w,C)}}else if(f!==void 0){let M=f.array;_=f.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let C=x+0,T=x+1,w=x+2;u.push(C,T,T,w,w,C)}}else return;let p=new(Eh(u)?Er:Sr)(u,1);p.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let g=d.index;g!==null&&u.version<g.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function zm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,g){i.drawElements(n,g,r,u*o),e.update(g,n,1)}function l(u,g,f){f!==0&&(i.drawElementsInstanced(n,g,r,u*o,f),e.update(g,n,f))}function h(u,g,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,u,0,f);let p=0;for(let m=0;m<f;m++)p+=g[m];e.update(p,n,1)}function d(u,g,f,_){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/o,g[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,u,0,_,0,f);let m=0;for(let M=0;M<f;M++)m+=g[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,t,e){let n=new WeakMap,s=new be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let O=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let g=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;g===!0&&(x=1),f===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*C*4*d),w=new br(T,y,C,d);w.type=wn,w.needsUpdate=!0;let P=x*4;for(let v=0;v<d;v++){let b=p[v],F=m[v],N=M[v],L=y*C*4*v;for(let W=0;W<b.count;W++){let D=W*P;g===!0&&(s.fromBufferAttribute(b,W),T[L+D+0]=s.x,T[L+D+1]=s.y,T[L+D+2]=s.z,T[L+D+3]=0),f===!0&&(s.fromBufferAttribute(F,W),T[L+D+4]=s.x,T[L+D+5]=s.y,T[L+D+6]=s.z,T[L+D+7]=0),_===!0&&(s.fromBufferAttribute(N,W),T[L+D+8]=s.x,T[L+D+9]=s.y,T[L+D+10]=s.z,T[L+D+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new pt(y,C)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let _=0;_<l.length;_++)g+=l[_];let f=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Cr=class extends je{constructor(t,e,n,s,r,o,a,c,l,h=Hi){if(h!==Hi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=mi),n===void 0&&h===Zi&&(n=Yi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rh=new je,Il=new Cr(1,1),Ch=new br,Ph=new ka,Ih=new Tr,Ll=[],Dl=[],Ul=new Float32Array(16),Nl=new Float32Array(9),Ol=new Float32Array(4);function ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ll[s];if(r===void 0&&(r=new Float32Array(s),Ll[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),Le(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),Le(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Ul.set(n),i.uniformMatrix4fv(this.addr,!1,Ul),Le(e,n)}}function Km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Il.compareFunction=bh,r=Il):r=Rh,e.setTexture2D(t||r,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ph,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ih,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ch,s)}function cg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(i,t){i.uniform1fv(this.addr,t)}function hg(i,t){let e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){let e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){let e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){let e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pg(i,t){let e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){let e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function Mg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function Eg(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rh,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ph,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ih,r[o])}function Ag(i,t,e){let n=this.cache,s=t.length,r=Qr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ch,r[o])}function Rg(i){switch(i){case 5126:return lg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return yg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}var Ga=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}},Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}},Xa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},qo=/(\w+)(\])?(\[|\.)?/g;function Fl(i,t){i.seq.push(t),i.map[t.id]=t}function Cg(i,t,e){let n=i.name,s=n.length;for(qo.lastIndex=0;;){let r=qo.exec(n),o=qo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fl(e,l===void 0?new Ga(a,i,t):new Wa(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Xa(a),Fl(e,d)),e=d}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Cg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Pg=37297,Ig=0;function Lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Dg(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===vr&&e===xr?n="LinearDisplayP3ToLinearSRGB":t===xr&&e===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case jr:return[n,"LinearTransferOETF"];case cn:case Fc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(t),o)}else return s}function Ug(i,t){let e=Dg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ng(i,t){let e;switch(t){case Xu:e="Linear";break;case qu:e="Reinhard";break;case Yu:e="Cineon";break;case Cc:e="ACESFilmic";break;case $u:e="AgX";break;case Ku:e="Neutral";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tr=new R;function Og(){oe.getLuminanceCoefficients(tr);let i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Bg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fs(i){return i!==""}function kl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(i){return i.replace(kg,Vg)}var Hg=new Map;function Vg(i,t){let e=Vt[t];if(e===void 0){let n=Hg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(Gg,Wg)}function Wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Xg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function qg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:t="ENVMAP_MODE_REFRACTION";break}return t}function Zg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Wu:t="ENVMAP_BLENDING_ADD";break}return t}function $g(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Xg(e),l=qg(e),h=Yg(e),d=Zg(e),u=$g(e),g=Fg(e),f=Bg(r),_=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(fs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(fs).join(`
`),m.length>0&&(m+=`
`)):(p=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),m=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=qa(o),o=kl(o,e),o=Hl(o,e),a=qa(a),a=kl(a,e),a=Hl(a,e),o=Vl(o),a=Vl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=M+p+o,y=M+m+a,C=Bl(s,s.VERTEX_SHADER,x),T=Bl(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(b){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(C).trim(),L=s.getShaderInfoLog(T).trim(),W=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,T);else{let Z=zl(s,C,"vertex"),z=zl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+Z+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||L==="")&&(D=!1);D&&(b.diagnostics={runnable:W,programLog:F,vertexShader:{log:N,prefix:p},fragmentShader:{log:L,prefix:m}})}s.deleteShader(C),s.deleteShader(T),P=new Gi(s,_),O=zg(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let O;this.getAttributes=function(){return O===void 0&&w(this),O};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Pg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ig++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}var Jg=0,Ya=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Za(t),e.set(t,n)),n}},Za=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function jg(i,t,e,n,s,r,o){let a=new bs,c=new Ya,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,g=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,F,N,L){let W=N.fog,D=L.geometry,Z=v.isMeshStandardMaterial?N.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),et=z&&z.mapping===Jr?z.image.height:null,J=_[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ht=V!==void 0?V.length:0,Mt=0;D.morphAttributes.position!==void 0&&(Mt=1),D.morphAttributes.normal!==void 0&&(Mt=2),D.morphAttributes.color!==void 0&&(Mt=3);let G,$,nt,at;if(J){let Ee=En[J];G=Ee.vertexShader,$=Ee.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,c.update(v),nt=c.getVertexShaderID(v),at=c.getFragmentShaderID(v);let ut=i.getRenderTarget(),bt=L.isInstancedMesh===!0,Ot=L.isBatchedMesh===!0,Yt=!!v.map,Zt=!!v.matcap,U=!!z,Xe=!!v.aoMap,Lt=!!v.lightMap,qt=!!v.bumpMap,Ct=!!v.normalMap,ie=!!v.displacementMap,Nt=!!v.emissiveMap,A=!!v.metalnessMap,S=!!v.roughnessMap,X=v.anisotropy>0,Q=v.clearcoat>0,st=v.dispersion>0,j=v.iridescence>0,At=v.sheen>0,ft=v.transmission>0,St=X&&!!v.anisotropyMap,jt=Q&&!!v.clearcoatMap,ot=Q&&!!v.clearcoatNormalMap,Et=Q&&!!v.clearcoatRoughnessMap,Ft=j&&!!v.iridescenceMap,Ut=j&&!!v.iridescenceThicknessMap,gt=At&&!!v.sheenColorMap,Kt=At&&!!v.sheenRoughnessMap,kt=!!v.specularMap,ae=!!v.specularColorMap,B=!!v.specularIntensityMap,_t=ft&&!!v.transmissionMap,K=ft&&!!v.thicknessMap,tt=!!v.gradientMap,mt=!!v.alphaMap,xt=v.alphaTest>0,$t=!!v.alphaHash,ve=!!v.extensions,Ue=Jn;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let Qt={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&L._colorsTexture!==null,instancing:bt,instancingColor:bt&&L.instanceColor!==null,instancingMorph:bt&&L.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ei,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Zt,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:et,aoMap:Xe,lightMap:Lt,bumpMap:qt,normalMap:Ct,displacementMap:g&&ie,emissiveMap:Nt,normalMapObjectSpace:Ct&&v.normalMapType===td,normalMapTangentSpace:Ct&&v.normalMapType===Mh,metalnessMap:A,roughnessMap:S,anisotropy:X,anisotropyMap:St,clearcoat:Q,clearcoatMap:jt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:st,iridescence:j,iridescenceMap:Ft,iridescenceThicknessMap:Ut,sheen:At,sheenColorMap:gt,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:ae,specularIntensityMap:B,transmission:ft,transmissionMap:_t,thicknessMap:K,gradientMap:tt,opaque:v.transparent===!1&&v.blending===ki&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:xt,alphaHash:$t,combine:v.combine,mapUv:Yt&&p(v.map.channel),aoMapUv:Xe&&p(v.aoMap.channel),lightMapUv:Lt&&p(v.lightMap.channel),bumpMapUv:qt&&p(v.bumpMap.channel),normalMapUv:Ct&&p(v.normalMap.channel),displacementMapUv:ie&&p(v.displacementMap.channel),emissiveMapUv:Nt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:St&&p(v.anisotropyMap.channel),clearcoatMapUv:jt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&p(v.sheenRoughnessMap.channel),specularMapUv:kt&&p(v.specularMap.channel),specularColorMapUv:ae&&p(v.specularColorMap.channel),specularIntensityMapUv:B&&p(v.specularIntensityMap.channel),transmissionMapUv:_t&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:mt&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ct||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Yt||mt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Mt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===Re,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function M(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(b,v),y(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let b=_[v.type],F;if(b){let N=En[b];F=zc.clone(N.uniforms)}else F=v.uniforms;return F}function T(v,b){let F;for(let N=0,L=h.length;N<L;N++){let W=h[N];if(W.cacheKey===b){F=W,++F.usedTimes;break}}return F===void 0&&(F=new Kg(i,b,v,r),h.push(F)),F}function w(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function P(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:O}}function Qg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function t0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,g,f,_,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:g,groupOrder:f,renderOrder:d.renderOrder,z:_,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=g,m.groupOrder=f,m.renderOrder=d.renderOrder,m.z=_,m.group=p),t++,m}function a(d,u,g,f,_,p){let m=o(d,u,g,f,_,p);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):e.push(m)}function c(d,u,g,f,_,p){let m=o(d,u,g,f,_,p);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,u){e.length>1&&e.sort(d||t0),n.length>1&&n.sort(u||Wl),s.length>1&&s.sort(u||Wl)}function h(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function e0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xl,i.set(n,[o])):s>=r.length?(o=new Xl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function n0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Tt};break;case"SpotLight":e={position:new R,direction:new R,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function i0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var s0=0;function r0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o0(i){let t=new n0,e=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new ee,o=new ee;function a(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,f=0,_=0,p=0,m=0,M=0,x=0,y=0,C=0,T=0,w=0;l.sort(r0);for(let O=0,v=l.length;O<v;O++){let b=l[O],F=b.color,N=b.intensity,L=b.distance,W=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=F.r*N,d+=F.g*N,u+=F.b*N;else if(b.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(b.sh.coefficients[D],N);w++}else if(b.isDirectionalLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Z=b.shadow,z=e.get(b);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=b.shadow.matrix,M++}n.directional[g]=D,g++}else if(b.isSpotLight){let D=t.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(F).multiplyScalar(N),D.distance=L,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,n.spot[_]=D;let Z=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,Z.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,b.castShadow){let z=e.get(b);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=W,y++}_++}else if(b.isRectAreaLight){let D=t.get(b);D.color.copy(F).multiplyScalar(N),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=D,p++}else if(b.isPointLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){let Z=b.shadow,z=e.get(b);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[f]=z,n.pointShadowMap[f]=W,n.pointShadowMatrix[f]=b.shadow.matrix,x++}n.point[f]=D,f++}else if(b.isHemisphereLight){let D=t.get(b);D.skyColor.copy(b.color).multiplyScalar(N),D.groundColor.copy(b.groundColor).multiplyScalar(N),n.hemi[m]=D,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==g||P.pointLength!==f||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=_,n.rectArea.length=p,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=g,P.pointLength=f,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=w,n.version=s0++)}function c(l,h){let d=0,u=0,g=0,f=0,_=0,p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let x=l[m];if(x.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(x.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let y=n.rectArea[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),f++}else if(x.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function ql(i){let t=new o0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function a0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ql(i),t.set(s,[a])):r>=o.length?(a=new ql(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $a=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h0(i,t,e){let n=new Ss,s=new pt,r=new pt,o=new be,a=new $a({depthPacking:Qu}),c=new Ka,l={},h=e.maxTextureSize,d={[vn]:Re,[Re]:vn,[$e]:$e},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:c0,fragmentShader:l0}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let f=new de;f.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(f,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let m=this.type;this.render=function(T,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=m!==Un&&this.type===Un,L=m===Un&&this.type!==Un;for(let W=0,D=T.length;W<D;W++){let Z=T[W],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let et=z.getFrameExtents();if(s.multiply(et),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||N===!0||L===!0){let V=this.type!==Un?{minFilter:Je,magFilter:Je}:{};z.map!==null&&z.map.dispose(),z.map=new Bn(s.x,s.y,V),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let J=z.getViewportCount();for(let V=0;V<J;V++){let ht=z.getViewport(V);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),F.viewport(o),z.updateMatrices(Z,V),n=z.getFrustum(),y(w,P,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Un&&M(z,P),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(O,v,b)};function M(T,w){let P=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,u,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,g,_,null)}function x(T,w,P,O){let v=null,b=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=v.uuid,N=w.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let W=L[N];W===void 0&&(W=v.clone(),L[N]=W,w.addEventListener("dispose",C)),v=W}if(v.visible=w.visible,v.wireframe=w.wireframe,O===Un?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:d[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=P}return v}function y(T,w,P,O,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Un)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let N=t.update(T),L=T.material;if(Array.isArray(L)){let W=N.groups;for(let D=0,Z=W.length;D<Z;D++){let z=W[D],et=L[z.materialIndex];if(et&&et.visible){let J=x(T,et,O,v);T.onBeforeShadow(i,T,w,P,N,J,z),i.renderBufferDirect(P,null,N,J,T,z),T.onAfterShadow(i,T,w,P,N,J,z)}}}else if(L.visible){let W=x(T,L,O,v);T.onBeforeShadow(i,T,w,P,N,W,null),i.renderBufferDirect(P,null,N,W,T,null),T.onAfterShadow(i,T,w,P,N,W,null)}}let F=T.children;for(let N=0,L=F.length;N<L;N++)y(F[N],w,P,O,v)}function C(T){T.target.removeEventListener("dispose",C);for(let P in l){let O=l[P],v=T.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var u0={[ta]:ea,[na]:ra,[ia]:oa,[Wi]:sa,[ea]:ta,[ra]:na,[oa]:ia,[sa]:Wi};function d0(i){function t(){let B=!1,_t=new be,K=null,tt=new be(0,0,0,0);return{setMask:function(mt){K!==mt&&!B&&(i.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){B=mt},setClear:function(mt,xt,$t,ve,Ue){Ue===!0&&(mt*=ve,xt*=ve,$t*=ve),_t.set(mt,xt,$t,ve),tt.equals(_t)===!1&&(i.clearColor(mt,xt,$t,ve),tt.copy(_t))},reset:function(){B=!1,K=null,tt.set(-1,0,0,0)}}}function e(){let B=!1,_t=!1,K=null,tt=null,mt=null;return{setReversed:function(xt){_t=xt},setTest:function(xt){xt?nt(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(xt){K!==xt&&!B&&(i.depthMask(xt),K=xt)},setFunc:function(xt){if(_t&&(xt=u0[xt]),tt!==xt){switch(xt){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=xt}},setLocked:function(xt){B=xt},setClear:function(xt){mt!==xt&&(i.clearDepth(xt),mt=xt)},reset:function(){B=!1,K=null,tt=null,mt=null}}}function n(){let B=!1,_t=null,K=null,tt=null,mt=null,xt=null,$t=null,ve=null,Ue=null;return{setTest:function(Qt){B||(Qt?nt(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Qt){_t!==Qt&&!B&&(i.stencilMask(Qt),_t=Qt)},setFunc:function(Qt,Ee,I){(K!==Qt||tt!==Ee||mt!==I)&&(i.stencilFunc(Qt,Ee,I),K=Qt,tt=Ee,mt=I)},setOp:function(Qt,Ee,I){(xt!==Qt||$t!==Ee||ve!==I)&&(i.stencilOp(Qt,Ee,I),xt=Qt,$t=Ee,ve=I)},setLocked:function(Qt){B=Qt},setClear:function(Qt){Ue!==Qt&&(i.clearStencil(Qt),Ue=Qt)},reset:function(){B=!1,_t=null,K=null,tt=null,mt=null,xt=null,$t=null,ve=null,Ue=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},d=new WeakMap,u=[],g=null,f=!1,_=null,p=null,m=null,M=null,x=null,y=null,C=null,T=new Tt(0,0,0),w=0,P=!1,O=null,v=null,b=null,F=null,N=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,D=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=D>=1):Z.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=D>=2);let z=null,et={},J=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),ht=new be().fromArray(J),Mt=new be().fromArray(V);function G(B,_t,K,tt){let mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(B,xt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<K;$t++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(_t+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return xt}let $={};$[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),r.setFunc(Wi),Lt(!1),qt(Jc),nt(i.CULL_FACE),U(Kn);function nt(B){l[B]!==!0&&(i.enable(B),l[B]=!0)}function at(B){l[B]!==!1&&(i.disable(B),l[B]=!1)}function ut(B,_t){return h[B]!==_t?(i.bindFramebuffer(B,_t),h[B]=_t,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function bt(B,_t){let K=u,tt=!1;if(B){K=d.get(_t),K===void 0&&(K=[],d.set(_t,K));let mt=B.textures;if(K.length!==mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,$t=mt.length;xt<$t;xt++)K[xt]=i.COLOR_ATTACHMENT0+xt;K.length=mt.length,tt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,tt=!0);tt&&i.drawBuffers(K)}function Ot(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let Yt={[hi]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};Yt[Ru]=i.MIN,Yt[Cu]=i.MAX;let Zt={[Pu]:i.ZERO,[Iu]:i.ONE,[Lu]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(B,_t,K,tt,mt,xt,$t,ve,Ue,Qt){if(B===Kn){f===!0&&(at(i.BLEND),f=!1);return}if(f===!1&&(nt(i.BLEND),f=!0),B!==wu){if(B!==_||Qt!==P){if((p!==hi||x!==hi)&&(i.blendEquation(i.FUNC_ADD),p=hi,x=hi),Qt)switch(B){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,M=null,y=null,C=null,T.set(0,0,0),w=0,_=B,P=Qt}return}mt=mt||_t,xt=xt||K,$t=$t||tt,(_t!==p||mt!==x)&&(i.blendEquationSeparate(Yt[_t],Yt[mt]),p=_t,x=mt),(K!==m||tt!==M||xt!==y||$t!==C)&&(i.blendFuncSeparate(Zt[K],Zt[tt],Zt[xt],Zt[$t]),m=K,M=tt,y=xt,C=$t),(ve.equals(T)===!1||Ue!==w)&&(i.blendColor(ve.r,ve.g,ve.b,Ue),T.copy(ve),w=Ue),_=B,P=!1}function Xe(B,_t){B.side===$e?at(i.CULL_FACE):nt(i.CULL_FACE);let K=B.side===Re;_t&&(K=!K),Lt(K),B.blending===ki&&B.transparent===!1?U(Kn):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);let tt=B.stencilWrite;o.setTest(tt),tt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(B){O!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),O=B)}function qt(B){B!==Su?(nt(i.CULL_FACE),B!==v&&(B===Jc?i.cullFace(i.BACK):B===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),v=B}function Ct(B){B!==b&&(W&&i.lineWidth(B),b=B)}function ie(B,_t,K){B?(nt(i.POLYGON_OFFSET_FILL),(F!==_t||N!==K)&&(i.polygonOffset(_t,K),F=_t,N=K)):at(i.POLYGON_OFFSET_FILL)}function Nt(B){B?nt(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function A(B){B===void 0&&(B=i.TEXTURE0+L-1),z!==B&&(i.activeTexture(B),z=B)}function S(B,_t,K){K===void 0&&(z===null?K=i.TEXTURE0+L-1:K=z);let tt=et[K];tt===void 0&&(tt={type:void 0,texture:void 0},et[K]=tt),(tt.type!==B||tt.texture!==_t)&&(z!==K&&(i.activeTexture(K),z=K),i.bindTexture(B,_t||$[B]),tt.type=B,tt.texture=_t)}function X(){let B=et[z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(B){ht.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ht.copy(B))}function gt(B){Mt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Mt.copy(B))}function Kt(B,_t){let K=c.get(_t);K===void 0&&(K=new WeakMap,c.set(_t,K));let tt=K.get(B);tt===void 0&&(tt=i.getUniformBlockIndex(_t,B.name),K.set(B,tt))}function kt(B,_t){let tt=c.get(_t).get(B);a.get(_t)!==tt&&(i.uniformBlockBinding(_t,tt,B.__bindingPointIndex),a.set(_t,tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},z=null,et={},h={},d=new WeakMap,u=[],g=null,f=!1,_=null,p=null,m=null,M=null,x=null,y=null,C=null,T=new Tt(0,0,0),w=0,P=!1,O=null,v=null,b=null,F=null,N=null,ht.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:nt,disable:at,bindFramebuffer:ut,drawBuffers:bt,useProgram:Ot,setBlending:U,setMaterial:Xe,setFlipSided:Lt,setCullFace:qt,setLineWidth:Ct,setPolygonOffset:ie,setScissorTest:Nt,activeTexture:A,bindTexture:S,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:st,texImage2D:Et,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:kt,texStorage2D:jt,texStorage3D:ot,texSubImage2D:j,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:St,scissor:Ut,viewport:gt,reset:ae}}function Yl(i,t,e,n){let s=f0(n);switch(e){case mh:return i*t;case _h:return i*t;case xh:return i*t*2;case Dc:return i*t/s.components*s.byteLength;case Uc:return i*t/s.components*s.byteLength;case vh:return i*t*2/s.components*s.byteLength;case Nc:return i*t*2/s.components*s.byteLength;case gh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Oc:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case La:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yh:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(i){switch(i){case On:case dh:return{byteLength:1,components:1};case vs:case fh:case Is:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case mi:case Pc:case wn:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function p0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,d,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return g?new OffscreenCanvas(A,S):Ms("canvas")}function _(A,S,X){let Q=1,st=Nt(A);if((st.width>X||st.height>X)&&(Q=X/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let j=Math.floor(Q*st.width),At=Math.floor(Q*st.height);d===void 0&&(d=f(j,At));let ft=S?f(j,At):d;return ft.width=j,ft.height=At,ft.getContext("2d").drawImage(A,0,0,j,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+j+"x"+At+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Je&&A.minFilter!==_n}function m(A){i.generateMipmap(A)}function M(A,S,X,Q,st=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===i.RED&&(X===i.FLOAT&&(j=i.R32F),X===i.HALF_FLOAT&&(j=i.R16F),X===i.UNSIGNED_BYTE&&(j=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.R8UI),X===i.UNSIGNED_SHORT&&(j=i.R16UI),X===i.UNSIGNED_INT&&(j=i.R32UI),X===i.BYTE&&(j=i.R8I),X===i.SHORT&&(j=i.R16I),X===i.INT&&(j=i.R32I)),S===i.RG&&(X===i.FLOAT&&(j=i.RG32F),X===i.HALF_FLOAT&&(j=i.RG16F),X===i.UNSIGNED_BYTE&&(j=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RG8UI),X===i.UNSIGNED_SHORT&&(j=i.RG16UI),X===i.UNSIGNED_INT&&(j=i.RG32UI),X===i.BYTE&&(j=i.RG8I),X===i.SHORT&&(j=i.RG16I),X===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGB8UI),X===i.UNSIGNED_SHORT&&(j=i.RGB16UI),X===i.UNSIGNED_INT&&(j=i.RGB32UI),X===i.BYTE&&(j=i.RGB8I),X===i.SHORT&&(j=i.RGB16I),X===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),X===i.UNSIGNED_INT&&(j=i.RGBA32UI),X===i.BYTE&&(j=i.RGBA8I),X===i.SHORT&&(j=i.RGBA16I),X===i.INT&&(j=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),S===i.RGBA){let At=st?_r:oe.getTransfer(Q);X===i.FLOAT&&(j=i.RGBA32F),X===i.HALF_FLOAT&&(j=i.RGBA16F),X===i.UNSIGNED_BYTE&&(j=At===ge?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(A,S){let X;return A?S===null||S===mi||S===Yi?X=i.DEPTH24_STENCIL8:S===wn?X=i.DEPTH32F_STENCIL8:S===vs&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mi||S===Yi?X=i.DEPTH_COMPONENT24:S===wn?X=i.DEPTH_COMPONENT32F:S===vs&&(X=i.DEPTH_COMPONENT16),X}function y(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){let S=A.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),O(S)}function w(A){let S=n.get(A);if(S.__webglInit===void 0)return;let X=A.source,Q=u.get(X);if(Q){let st=Q[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&P(A),Object.keys(Q).length===0&&u.delete(X)}n.remove(A)}function P(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let X=A.source,Q=u.get(X);delete Q[S.__cacheKey],o.memory.textures--}function O(A){let S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let st=0;st<S.__webglFramebuffer[Q].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[Q][st]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=A.textures;for(let Q=0,st=X.length;Q<st;Q++){let j=n.get(X[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(A)}let v=0;function b(){v=0}function F(){let A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function N(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function L(A,S){let X=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(X,A,S);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function W(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Mt(X,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function D(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Mt(X,A,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function Z(A,S){let X=n.get(A);if(A.version>0&&X.__version!==A.version){G(X,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let z={[la]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},et={[Je]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},J={[ed]:i.NEVER,[ad]:i.ALWAYS,[nd]:i.LESS,[bh]:i.LEQUAL,[id]:i.EQUAL,[od]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function V(A,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===xo||S.magFilter===Us||S.magFilter===pi||S.minFilter===_n||S.minFilter===xo||S.minFilter===Us||S.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,z[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,z[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,z[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,et[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Je||S.minFilter!==Us&&S.minFilter!==pi||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ht(A,S){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));let Q=S.source,st=u.get(Q);st===void 0&&(st={},u.set(Q,st));let j=N(S);if(j!==A.__cacheKey){st[j]===void 0&&(st[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),st[j].usedTimes++;let At=st[A.__cacheKey];At!==void 0&&(st[A.__cacheKey].usedTimes--,At.usedTimes===0&&P(S)),A.__cacheKey=j,A.__webglTexture=st[j].texture}return X}function Mt(A,S,X){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);let st=ht(A,S),j=S.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+X);let At=n.get(j);if(j.version!==At.__version||st===!0){e.activeTexture(i.TEXTURE0+X);let ft=oe.getPrimaries(oe.workingColorSpace),St=S.colorSpace===$n?null:oe.getPrimaries(S.colorSpace),jt=S.colorSpace===$n||ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ot=_(S.image,!1,s.maxTextureSize);ot=ie(S,ot);let Et=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),Ut=M(S.internalFormat,Et,Ft,S.colorSpace,S.isVideoTexture);V(Q,S);let gt,Kt=S.mipmaps,kt=S.isVideoTexture!==!0,ae=At.__version===void 0||st===!0,B=j.dataReady,_t=y(S,ot);if(S.isDepthTexture)Ut=x(S.format===Zi,S.type),ae&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,Et,Ft,null));else if(S.isDataTexture)if(Kt.length>0){kt&&ae&&e.texStorage2D(i.TEXTURE_2D,_t,Ut,Kt[0].width,Kt[0].height);for(let K=0,tt=Kt.length;K<tt;K++)gt=Kt[K],kt?B&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,gt.width,gt.height,Et,Ft,gt.data):e.texImage2D(i.TEXTURE_2D,K,Ut,gt.width,gt.height,0,Et,Ft,gt.data);S.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(i.TEXTURE_2D,_t,Ut,ot.width,ot.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Et,Ft,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,Et,Ft,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ut,Kt[0].width,Kt[0].height,ot.depth);for(let K=0,tt=Kt.length;K<tt;K++)if(gt=Kt[K],S.format!==xn)if(Et!==null)if(kt){if(B)if(S.layerUpdates.size>0){let mt=Yl(gt.width,gt.height,S.format,S.type);for(let xt of S.layerUpdates){let $t=gt.data.subarray(xt*mt/gt.data.BYTES_PER_ELEMENT,(xt+1)*mt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,xt,gt.width,gt.height,1,Et,$t,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,ot.depth,Et,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ut,gt.width,gt.height,ot.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,ot.depth,Et,Ft,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ut,gt.width,gt.height,ot.depth,0,Et,Ft,gt.data)}else{kt&&ae&&e.texStorage2D(i.TEXTURE_2D,_t,Ut,Kt[0].width,Kt[0].height);for(let K=0,tt=Kt.length;K<tt;K++)gt=Kt[K],S.format!==xn?Et!==null?kt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,gt.width,gt.height,Et,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ut,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,gt.width,gt.height,Et,Ft,gt.data):e.texImage2D(i.TEXTURE_2D,K,Ut,gt.width,gt.height,0,Et,Ft,gt.data)}else if(S.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ut,ot.width,ot.height,ot.depth),B)if(S.layerUpdates.size>0){let K=Yl(ot.width,ot.height,S.format,S.type);for(let tt of S.layerUpdates){let mt=ot.data.subarray(tt*K/ot.data.BYTES_PER_ELEMENT,(tt+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,Et,Ft,mt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Et,Ft,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,Et,Ft,ot.data);else if(S.isData3DTexture)kt?(ae&&e.texStorage3D(i.TEXTURE_3D,_t,Ut,ot.width,ot.height,ot.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Et,Ft,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,Et,Ft,ot.data);else if(S.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(i.TEXTURE_2D,_t,Ut,ot.width,ot.height);else{let K=ot.width,tt=ot.height;for(let mt=0;mt<_t;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ut,K,tt,0,Et,Ft,null),K>>=1,tt>>=1}}else if(Kt.length>0){if(kt&&ae){let K=Nt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Ut,K.width,K.height)}for(let K=0,tt=Kt.length;K<tt;K++)gt=Kt[K],kt?B&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Et,Ft,gt):e.texImage2D(i.TEXTURE_2D,K,Ut,Et,Ft,gt);S.generateMipmaps=!1}else if(kt){if(ae){let K=Nt(ot);e.texStorage2D(i.TEXTURE_2D,_t,Ut,K.width,K.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ut,Et,Ft,ot);p(S)&&m(Q),At.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function G(A,S,X){if(S.image.length!==6)return;let Q=ht(A,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let j=n.get(st);if(st.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+X);let At=oe.getPrimaries(oe.workingColorSpace),ft=S.colorSpace===$n?null:oe.getPrimaries(S.colorSpace),St=S.colorSpace===$n||At===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let jt=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!jt&&!ot?Et[tt]=_(S.image[tt],!0,s.maxCubemapSize):Et[tt]=ot?S.image[tt].image:S.image[tt],Et[tt]=ie(S,Et[tt]);let Ft=Et[0],Ut=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),Kt=M(S.internalFormat,Ut,gt,S.colorSpace),kt=S.isVideoTexture!==!0,ae=j.__version===void 0||Q===!0,B=st.dataReady,_t=y(S,Ft);V(i.TEXTURE_CUBE_MAP,S);let K;if(jt){kt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Kt,Ft.width,Ft.height);for(let tt=0;tt<6;tt++){K=Et[tt].mipmaps;for(let mt=0;mt<K.length;mt++){let xt=K[mt];S.format!==xn?Ut!==null?kt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,xt.width,xt.height,Ut,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Kt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,xt.width,xt.height,Ut,gt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Kt,xt.width,xt.height,0,Ut,gt,xt.data)}}}else{if(K=S.mipmaps,kt&&ae){K.length>0&&_t++;let tt=Nt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Ut,gt,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Et[tt].width,Et[tt].height,0,Ut,gt,Et[tt].data);for(let mt=0;mt<K.length;mt++){let $t=K[mt].image[tt].image;kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,$t.width,$t.height,Ut,gt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Kt,$t.width,$t.height,0,Ut,gt,$t.data)}}else{kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,gt,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Ut,gt,Et[tt]);for(let mt=0;mt<K.length;mt++){let xt=K[mt];kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Ut,gt,xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Kt,Ut,gt,xt.image[tt])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),j.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $(A,S,X,Q,st,j){let At=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),St=M(X.internalFormat,At,ft,X.colorSpace);if(!n.get(S).__hasExternalTextures){let ot=Math.max(1,S.width>>j),Et=Math.max(1,S.height>>j);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,j,St,ot,Et,S.depth,0,At,ft,null):e.texImage2D(st,j,St,ot,Et,0,At,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,st,n.get(X).__webglTexture,0,Lt(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,st,n.get(X).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(A,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let Q=S.depthTexture,st=Q&&Q.isDepthTexture?Q.type:null,j=x(S.stencilBuffer,st),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Lt(S);qt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,j,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{let Q=S.textures;for(let st=0;st<Q.length;st++){let j=Q[st],At=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),St=M(j.internalFormat,At,ft,j.colorSpace),jt=Lt(S);X&&qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,St,S.width,S.height):qt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,St,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,St,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);let Q=n.get(S.depthTexture).__webglTexture,st=Lt(S);if(S.depthTexture.format===Hi)qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Zi)qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ut(A){let S=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",st)};Q.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,A)}else if(X){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),nt(S.__webglDepthbuffer[Q],A,!1);else{let st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),nt(S.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(A,S,X){let Q=n.get(A);S!==void 0&&$(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ut(A)}function Ot(A){let S=A.texture,X=n.get(A),Q=n.get(S);A.addEventListener("dispose",T);let st=A.textures,j=A.isWebGLCubeRenderTarget===!0,At=st.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,o.memory.textures++),j){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let St=0;St<S.mipmaps.length;St++)X.__webglFramebuffer[ft][St]=i.createFramebuffer()}else X.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)X.__webglFramebuffer[ft]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(At)for(let ft=0,St=st.length;ft<St;ft++){let jt=n.get(st[ft]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&qt(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){let St=st[ft];X.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);let jt=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),Et=M(St.internalFormat,jt,ot,St.colorSpace,A.isXRRenderTarget===!0),Ft=Lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),V(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)$(X.__webglFramebuffer[ft][St],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St);else $(X.__webglFramebuffer[ft],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,St=st.length;ft<St;ft++){let jt=st[ft],ot=n.get(jt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),V(i.TEXTURE_2D,jt),$(X.__webglFramebuffer,A,jt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),p(jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),V(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)$(X.__webglFramebuffer[St],A,S,i.COLOR_ATTACHMENT0,ft,St);else $(X.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ft,0);p(S)&&m(ft),e.unbindTexture()}A.depthBuffer&&ut(A)}function Yt(A){let S=A.textures;for(let X=0,Q=S.length;X<Q;X++){let st=S[X];if(p(st)){let j=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(st).__webglTexture;e.bindTexture(j,At),m(j),e.unbindTexture()}}}let Zt=[],U=[];function Xe(A){if(A.samples>0){if(qt(A)===!1){let S=A.textures,X=A.width,Q=A.height,st=i.COLOR_BUFFER_BIT,j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),ft=S.length>1;if(ft)for(let St=0;St<S.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let St=0;St<S.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[St]);let jt=n.get(S[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,st,i.NEAREST),c===!0&&(Zt.length=0,U.length=0,Zt.push(i.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Zt.push(j),U.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let St=0;St<S.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,At.__webglColorRenderbuffer[St]);let jt=n.get(S[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Lt(A){return Math.min(s.maxSamples,A.samples)}function qt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ie(A,S){let X=A.colorSpace,Q=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==ei&&X!==$n&&(oe.getTransfer(X)===ge?(Q!==xn||st!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=D,this.setTextureCube=Z,this.rebindTextures=bt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=$,this.useMultisampledRTT=qt}function m0(i,t){function e(n,s=$n){let r,o=oe.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===fh)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===mh)return i.ALPHA;if(n===gh)return i.RGB;if(n===xn)return i.RGBA;if(n===_h)return i.LUMINANCE;if(n===xh)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===vh)return i.RG;if(n===Nc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===va||n===ya||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===La||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===Ua||n===Na||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ja=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pe=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},g0={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),g=.02,f=.005;l.inputState.pinching&&u>g+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=g-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x0=`
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

}`,ja=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:_0,fragmentShader:x0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qa=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,g=null,f=null,_=new ja,p=e.getContextAttributes(),m=null,M=null,x=[],y=[],C=new pt,T=null,w=new Ze;w.layers.enable(1),w.viewport=new be;let P=new Ze;P.layers.enable(2),P.viewport=new be;let O=[w,P],v=new Ja;v.layers.enable(1),v.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=x[G];return $===void 0&&($=new gs,x[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=x[G];return $===void 0&&($=new gs,x[G]=$),$.getGripSpace()},this.getHand=function(G){let $=x[G];return $===void 0&&($=new gs,x[G]=$),$.getHandSpace()};function N(G){let $=y.indexOf(G.inputSource);if($===-1)return;let nt=x[$];nt!==void 0&&(nt.update(G.inputSource,G.frame,l||o),nt.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",W);for(let G=0;G<x.length;G++){let $=y[G];$!==null&&(y[G]=null,x[G].disconnect($))}b=null,F=null,_.reset(),t.setRenderTarget(m),g=null,u=null,d=null,s=null,M=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",L),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Bn(g.framebufferWidth,g.framebufferHeight,{format:xn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,nt=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=p.stencil?Zi:Hi,nt=p.stencil?Yi:mi);let ut={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Bn(u.textureWidth,u.textureHeight,{format:xn,type:On,depthTexture:new Cr(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(G){for(let $=0;$<G.removed.length;$++){let nt=G.removed[$],at=y.indexOf(nt);at>=0&&(y[at]=null,x[at].disconnect(nt))}for(let $=0;$<G.added.length;$++){let nt=G.added[$],at=y.indexOf(nt);if(at===-1){for(let bt=0;bt<x.length;bt++)if(bt>=y.length){y.push(nt),at=bt;break}else if(y[bt]===null){y[bt]=nt,at=bt;break}if(at===-1)break}let ut=x[at];ut&&ut.connect(nt)}}let D=new R,Z=new R;function z(G,$,nt){D.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(nt.matrixWorld);let at=D.distanceTo(Z),ut=$.projectionMatrix.elements,bt=nt.projectionMatrix.elements,Ot=ut[14]/(ut[10]-1),Yt=ut[14]/(ut[10]+1),Zt=(ut[9]+1)/ut[5],U=(ut[9]-1)/ut[5],Xe=(ut[8]-1)/ut[0],Lt=(bt[8]+1)/bt[0],qt=Ot*Xe,Ct=Ot*Lt,ie=at/(-Xe+Lt),Nt=ie*-Xe;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Nt),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ut[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let A=Ot+ie,S=Yt+ie,X=qt-Nt,Q=Ct+(at-Nt),st=Zt*Yt/S*A,j=U*Yt/S*A;G.projectionMatrix.makePerspective(X,Q,st,j,A,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function et(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,nt=G.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(nt=_.depthFar)),v.near=P.near=w.near=$,v.far=P.far=w.far=nt,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far);let at=G.parent,ut=v.cameras;et(v,at);for(let bt=0;bt<ut.length;bt++)et(ut[bt],at);ut.length===2?z(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),J(G,v,at)};function J(G,$,nt){nt===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(nt.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ys*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let V=null;function ht(G,$){if(h=$.getViewerPose(l||o),f=$,h!==null){let nt=h.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let at=!1;nt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let bt=0;bt<nt.length;bt++){let Ot=nt[bt],Yt=null;if(g!==null)Yt=g.getViewport(Ot);else{let U=d.getViewSubImage(u,Ot);Yt=U.viewport,bt===0&&(t.setRenderTargetTextures(M,U.colorTexture,u.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let Zt=O[bt];Zt===void 0&&(Zt=new Ze,Zt.layers.enable(bt),Zt.viewport=new be,O[bt]=Zt),Zt.matrix.fromArray(Ot.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Ot.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),bt===0&&(v.matrix.copy(Zt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Zt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){let bt=d.getDepthInformation(nt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let nt=0;nt<x.length;nt++){let at=y[nt],ut=x[nt];at!==null&&ut!==void 0&&ut.update(at,$,l||o)}V&&V(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),f=null}let Mt=new Ah;Mt.setAnimationLoop(ht),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}},ci=new Tn,v0=new ee;function y0(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Th(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&g(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),f(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Re&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Re&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(ci)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Re&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function l(M,x){let y=s[M.id];y===void 0&&(f(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));let C=x.program;n.updateUBOMapping(M,C);let T=t.render.frame;r[M.id]!==T&&(u(M),r[M.id]=T)}function h(M){let x=d();M.__bindingPointIndex=x;let y=i.createBuffer(),C=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let x=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=y.length;T<w;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let O=0,v=P.length;O<v;O++){let b=P[O];if(g(b,T,O,C)===!0){let F=b.__offset,N=Array.isArray(b.value)?b.value:[b.value],L=0;for(let W=0;W<N.length;W++){let D=N[W],Z=_(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,F+L,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,x,y,C){let T=M.value,w=x+"_"+y;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{let P=C[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function f(M){let x=M.uniforms,y=0,C=16;for(let w=0,P=x.length;w<P;w++){let O=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,b=O.length;v<b;v++){let F=O[v],N=Array.isArray(F.value)?F.value:[F.value];for(let L=0,W=N.length;L<W;L++){let D=N[L],Z=_(D),z=y%C,et=z%Z.boundary,J=z+et;y+=et,J!==0&&C-J<Z.storage&&(y+=C-J),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Z.storage}}}let T=y%C;return T>0&&(y+=C-T),M.__size=y,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Pr=class{constructor(t={}){let{canvas:e=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),f=new Int32Array(4),_=null,p=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Jn,this.toneMappingExposure=1;let x=this,y=!1,C=0,T=0,w=null,P=-1,O=null,v=new be,b=new be,F=null,N=new Tt(0),L=0,W=e.width,D=e.height,Z=1,z=null,et=null,J=new be(0,0,W,D),V=new be(0,0,W,D),ht=!1,Mt=new Ss,G=!1,$=!1,nt=new ee,at=new ee,ut=new R,bt=new be,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Zt(){return w===null?Z:1}let U=n;function Xe(E,k){return e.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),U===null){let k="webgl2";if(U=Xe(k,E),U===null)throw Xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Lt,qt,Ct,ie,Nt,A,S,X,Q,st,j,At,ft,St,jt,ot,Et,Ft,Ut,gt,Kt,kt,ae,B;function _t(){Lt=new Fm(U),Lt.init(),kt=new m0(U,Lt),qt=new Im(U,Lt,t,kt),Ct=new d0(U),qt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),ie=new km(U),Nt=new Qg,A=new p0(U,Lt,Ct,Nt,qt,kt,ie),S=new Dm(x),X=new Om(x),Q=new qd(U),ae=new Cm(U,Q),st=new Bm(U,Q,ie,ae),j=new Vm(U,st,Q,ie),Ut=new Hm(U,qt,A),ot=new Lm(Nt),At=new jg(x,S,X,Lt,qt,ae,ot),ft=new y0(x,Nt),St=new e0,jt=new a0(Lt),Ft=new Rm(x,S,X,Ct,j,u,c),Et=new h0(x,j,qt),B=new M0(U,ie,qt,Ct),gt=new Pm(U,Lt,ie),Kt=new zm(U,Lt,ie),ie.programs=At.programs,x.capabilities=qt,x.extensions=Lt,x.properties=Nt,x.renderLists=St,x.shadowMap=Et,x.state=Ct,x.info=ie}_t();let K=new Qa(x,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(W,D,!1))},this.getSize=function(E){return E.set(W,D)},this.setSize=function(E,k,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,D=k,e.width=Math.floor(E*Z),e.height=Math.floor(k*Z),q===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(W*Z,D*Z).floor()},this.setDrawingBufferSize=function(E,k,q){W=E,D=k,Z=q,e.width=Math.floor(E*q),e.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,k,q,Y){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,k,q,Y),Ct.viewport(v.copy(J).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,k,q,Y){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,k,q,Y),Ct.scissor(b.copy(V).multiplyScalar(Z).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){Ct.setScissorTest(ht=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,k=!0,q=!0){let Y=0;if(E){let H=!1;if(w!==null){let ct=w.texture.format;H=ct===Oc||ct===Nc||ct===Uc}if(H){let ct=w.texture.type,yt=ct===On||ct===mi||ct===vs||ct===Yi||ct===Ic||ct===Lc,wt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Bt=wt.r,zt=wt.g,Pt=wt.b;yt?(g[0]=Bt,g[1]=zt,g[2]=Pt,g[3]=Rt,U.clearBufferuiv(U.COLOR,0,g)):(f[0]=Bt,f[1]=zt,f[2]=Pt,f[3]=Rt,U.clearBufferiv(U.COLOR,0,f))}else Y|=U.COLOR_BUFFER_BIT}k&&(Y|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),St.dispose(),jt.dispose(),Nt.dispose(),S.dispose(),X.dispose(),j.dispose(),ae.dispose(),B.dispose(),At.dispose(),K.dispose(),K.removeEventListener("sessionstart",it),K.removeEventListener("sessionend",rt),vt.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=ie.autoReset,k=Et.enabled,q=Et.autoUpdate,Y=Et.needsUpdate,H=Et.type;_t(),ie.autoReset=E,Et.enabled=k,Et.autoUpdate=q,Et.needsUpdate=Y,Et.type=H}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){let k=E.target;k.removeEventListener("dispose",$t),ve(k)}function ve(E){Ue(E),Nt.remove(E)}function Ue(E){let k=Nt.get(E).programs;k!==void 0&&(k.forEach(function(q){At.releaseProgram(q)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,Y,H,ct){k===null&&(k=Ot);let yt=H.isMesh&&H.matrixWorld.determinant()<0,wt=hn(E,k,q,Y,H);Ct.setMaterial(Y,yt);let Rt=q.index,Bt=1;if(Y.wireframe===!0){if(Rt=st.getWireframeAttribute(q),Rt===void 0)return;Bt=2}let zt=q.drawRange,Pt=q.attributes.position,le=zt.start*Bt,me=(zt.start+zt.count)*Bt;ct!==null&&(le=Math.max(le,ct.start*Bt),me=Math.min(me,(ct.start+ct.count)*Bt)),Rt!==null?(le=Math.max(le,0),me=Math.min(me,Rt.count)):Pt!=null&&(le=Math.max(le,0),me=Math.min(me,Pt.count));let Me=me-le;if(Me<0||Me===1/0)return;ae.setup(H,Y,wt,q,Rt);let tn,se=gt;if(Rt!==null&&(tn=Q.get(Rt),se=Kt,se.setIndex(tn)),H.isMesh)Y.wireframe===!0?(Ct.setLineWidth(Y.wireframeLinewidth*Zt()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(H.isLine){let It=Y.linewidth;It===void 0&&(It=1),Ct.setLineWidth(It*Zt()),H.isLineSegments?se.setMode(U.LINES):H.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else H.isPoints?se.setMode(U.POINTS):H.isSprite&&se.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let It=H._multiDrawStarts,Be=H._multiDrawCounts,re=H._multiDrawCount,dn=Rt?Q.get(Rt).bytesPerElement:1,Mi=Nt.get(Y).currentProgram.getUniforms();for(let en=0;en<re;en++)Mi.setValue(U,"_gl_DrawID",en),se.render(It[en]/dn,Be[en])}else if(H.isInstancedMesh)se.renderInstances(le,Me,H.count);else if(q.isInstancedBufferGeometry){let It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Be=Math.min(q.instanceCount,It);se.renderInstances(le,Me,Be)}else se.render(le,Me)};function Qt(E,k,q){E.transparent===!0&&E.side===$e&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,Ht(E,k,q),E.side=vn,E.needsUpdate=!0,Ht(E,k,q),E.side=$e):Ht(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),p=jt.get(q),p.init(k),M.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let Y=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ct=H.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){let wt=ct[yt];Qt(wt,q,H),Y.add(wt)}else Qt(ct,q,H),Y.add(ct)}),M.pop(),p=null,Y},this.compileAsync=function(E,k,q=null){let Y=this.compile(E,k,q);return new Promise(H=>{function ct(){if(Y.forEach(function(yt){Nt.get(yt).currentProgram.isReady()&&Y.delete(yt)}),Y.size===0){H(E);return}setTimeout(ct,10)}Lt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ee=null;function I(E){Ee&&Ee(E)}function it(){vt.stop()}function rt(){vt.start()}let vt=new Ah;vt.setAnimationLoop(I),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(E){Ee=E,K.setAnimationLoop(E),E===null?vt.stop():vt.start()},K.addEventListener("sessionstart",it),K.addEventListener("sessionend",rt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,w),p=jt.get(E,M.length),p.init(k),M.push(p),at.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Mt.setFromProjectionMatrix(at),$=this.localClippingEnabled,G=ot.init(this.clippingPlanes,$),_=St.get(E,m.length),_.init(),m.push(_),K.enabled===!0&&K.isPresenting===!0){let ct=x.xr.getDepthSensingMesh();ct!==null&&Dt(ct,k,-1/0,x.sortObjects)}Dt(E,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(z,et),Yt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Yt&&Ft.addToRenderList(_,E),this.info.render.frame++,G===!0&&ot.beginShadows();let q=p.state.shadowsArray;Et.render(q,E,k),G===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=_.opaque,H=_.transmissive;if(p.setupLights(),k.isArrayCamera){let ct=k.cameras;if(H.length>0)for(let yt=0,wt=ct.length;yt<wt;yt++){let Rt=ct[yt];he(Y,H,E,Rt)}Yt&&Ft.render(E);for(let yt=0,wt=ct.length;yt<wt;yt++){let Rt=ct[yt];te(_,E,Rt,Rt.viewport)}}else H.length>0&&he(Y,H,E,k),Yt&&Ft.render(E),te(_,E,k);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,k),ae.resetDefaultState(),P=-1,O=null,M.pop(),M.length>0?(p=M[M.length-1],G===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Dt(E,k,q,Y){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Mt.intersectsSprite(E)){Y&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);let yt=j.update(E),wt=E.material;wt.visible&&_.push(E,yt,wt,q,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Mt.intersectsObject(E))){let yt=j.update(E),wt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),bt.copy(yt.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(wt)){let Rt=yt.groups;for(let Bt=0,zt=Rt.length;Bt<zt;Bt++){let Pt=Rt[Bt],le=wt[Pt.materialIndex];le&&le.visible&&_.push(E,yt,le,q,bt.z,Pt)}}else wt.visible&&_.push(E,yt,wt,q,bt.z,null)}}let ct=E.children;for(let yt=0,wt=ct.length;yt<wt;yt++)Dt(ct[yt],k,q,Y)}function te(E,k,q,Y){let H=E.opaque,ct=E.transmissive,yt=E.transparent;p.setupLightsView(q),G===!0&&ot.setGlobalState(x.clippingPlanes,q),Y&&Ct.viewport(v.copy(Y)),H.length>0&&Wt(H,k,q),ct.length>0&&Wt(ct,k,q),yt.length>0&&Wt(yt,k,q),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function he(E,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Is:On,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ct=p.state.transmissionRenderTarget[Y.id],yt=Y.viewport||v;ct.setSize(yt.z,yt.w);let wt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(N),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&Ft.render(q);let Rt=x.toneMapping;x.toneMapping=Jn;let Bt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),G===!0&&ot.setGlobalState(x.clippingPlanes,Y),Wt(E,q,Y),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Pt=0,le=k.length;Pt<le;Pt++){let me=k[Pt],Me=me.object,tn=me.geometry,se=me.material,It=me.group;if(se.side===$e&&Me.layers.test(Y.layers)){let Be=se.side;se.side=Re,se.needsUpdate=!0,pe(Me,q,Y,tn,se,It),se.side=Be,se.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct))}x.setRenderTarget(wt),x.setClearColor(N,L),Bt!==void 0&&(Y.viewport=Bt),x.toneMapping=Rt}function Wt(E,k,q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ct=E.length;H<ct;H++){let yt=E[H],wt=yt.object,Rt=yt.geometry,Bt=Y===null?yt.material:Y,zt=yt.group;wt.layers.test(q.layers)&&pe(wt,k,q,Rt,Bt,zt)}}function pe(E,k,q,Y,H,ct){E.onBeforeRender(x,k,q,Y,H,ct),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,k,q,Y,E,ct),H.transparent===!0&&H.side===$e&&H.forceSinglePass===!1?(H.side=Re,H.needsUpdate=!0,x.renderBufferDirect(q,k,Y,H,E,ct),H.side=vn,H.needsUpdate=!0,x.renderBufferDirect(q,k,Y,H,E,ct),H.side=$e):x.renderBufferDirect(q,k,Y,H,E,ct),E.onAfterRender(x,k,q,Y,H,ct)}function Ht(E,k,q){k.isScene!==!0&&(k=Ot);let Y=Nt.get(E),H=p.state.lights,ct=p.state.shadowsArray,yt=H.state.version,wt=At.getParameters(E,H.state,ct,k,q),Rt=At.getProgramCacheKey(wt),Bt=Y.programs;Y.environment=E.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(E.isMeshStandardMaterial?X:S).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",$t),Bt=new Map,Y.programs=Bt);let zt=Bt.get(Rt);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===yt)return Ce(E,wt),zt}else wt.uniforms=At.getUniforms(E),E.onBeforeCompile(wt,x),zt=At.acquireProgram(wt,Rt),Bt.set(Rt,zt),Y.uniforms=wt.uniforms;let Pt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),Ce(E,wt),Y.needsLights=un(E),Y.lightsStateVersion=yt,Y.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.directionalShadowMap.value=H.state.directionalShadowMap,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotShadowMap.value=H.state.spotShadowMap,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMap.value=H.state.pointShadowMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function ce(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Gi.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Ce(E,k){let q=Nt.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function hn(E,k,q,Y,H){k.isScene!==!0&&(k=Ot),A.resetTextureUnits();let ct=k.fog,yt=Y.isMeshStandardMaterial?k.environment:null,wt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ei,Rt=(Y.isMeshStandardMaterial?X:S).get(Y.envMap||yt),Bt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!q.morphAttributes.position,le=!!q.morphAttributes.normal,me=!!q.morphAttributes.color,Me=Jn;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Me=x.toneMapping);let tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=tn!==void 0?tn.length:0,It=Nt.get(Y),Be=p.state.lights;if(G===!0&&($===!0||E!==O)){let on=E===O&&Y.id===P;ot.setState(Y,E,on)}let re=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Be.state.version||It.outputColorSpace!==wt||H.isBatchedMesh&&It.batching===!1||!H.isBatchedMesh&&It.batching===!0||H.isBatchedMesh&&It.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&It.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||H.isInstancedMesh&&It.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&It.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&It.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&It.instancingMorph===!1&&H.morphTexture!==null||It.envMap!==Rt||Y.fog===!0&&It.fog!==ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==Bt||It.vertexTangents!==zt||It.morphTargets!==Pt||It.morphNormals!==le||It.morphColors!==me||It.toneMapping!==Me||It.morphTargetsCount!==se)&&(re=!0):(re=!0,It.__version=Y.version);let dn=It.currentProgram;re===!0&&(dn=Ht(Y,k,H));let Mi=!1,en=!1,mo=!1,we=dn.getUniforms(),Vn=It.uniforms;if(Ct.useProgram(dn.program)&&(Mi=!0,en=!0,mo=!0),Y.id!==P&&(P=Y.id,en=!0),Mi||O!==E){qt.reverseDepthBuffer?(nt.copy(E.projectionMatrix),Td(nt),Ad(nt),we.setValue(U,"projectionMatrix",nt)):we.setValue(U,"projectionMatrix",E.projectionMatrix),we.setValue(U,"viewMatrix",E.matrixWorldInverse);let on=we.map.cameraPosition;on!==void 0&&on.setValue(U,ut.setFromMatrixPosition(E.matrixWorld)),qt.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,en=!0,mo=!0)}if(H.isSkinnedMesh){we.setOptional(U,H,"bindMatrix"),we.setOptional(U,H,"bindMatrixInverse");let on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),we.setValue(U,"boneTexture",on.boneTexture,A))}H.isBatchedMesh&&(we.setOptional(U,H,"batchingTexture"),we.setValue(U,"batchingTexture",H._matricesTexture,A),we.setOptional(U,H,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",H._indirectTexture,A),we.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",H._colorsTexture,A));let go=q.morphAttributes;if((go.position!==void 0||go.normal!==void 0||go.color!==void 0)&&Ut.update(H,q,dn),(en||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,we.setValue(U,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Vn.envMap.value=Rt,Vn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Vn.envMapIntensity.value=k.environmentIntensity),en&&(we.setValue(U,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&rn(Vn,mo),ct&&Y.fog===!0&&ft.refreshFogUniforms(Vn,ct),ft.refreshMaterialUniforms(Vn,Y,Z,D,p.state.transmissionRenderTarget[E.id]),Gi.upload(U,ce(It),Vn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Gi.upload(U,ce(It),Vn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(U,"center",H.center),we.setValue(U,"modelViewMatrix",H.modelViewMatrix),we.setValue(U,"normalMatrix",H.normalMatrix),we.setValue(U,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let on=Y.uniformsGroups;for(let _o=0,bu=on.length;_o<bu;_o++){let Kc=on[_o];B.update(Kc,dn),B.bind(Kc,dn)}}return dn}function rn(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function un(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,k,q){Nt.get(E.texture).__webglTexture=k,Nt.get(E.depthTexture).__webglTexture=q;let Y=Nt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){let q=Nt.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,q=0){w=E,C=k,T=q;let Y=!0,H=null,ct=!1,yt=!1;if(E){let Rt=Nt.get(E);if(Rt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Rt.__hasExternalTextures)A.rebindTextures(E,Nt.get(E.texture).__webglTexture,Nt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Pt=E.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&Nt.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(yt=!0);let zt=Nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[k])?H=zt[k][q]:H=zt[k],ct=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?H=Nt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?H=zt[q]:H=zt,v.copy(E.viewport),b.copy(E.scissor),F=E.scissorTest}else v.copy(J).multiplyScalar(Z).floor(),b.copy(V).multiplyScalar(Z).floor(),F=ht;if(Ct.bindFramebuffer(U.FRAMEBUFFER,H)&&Y&&Ct.drawBuffers(E,H),Ct.viewport(v),Ct.scissor(b),Ct.setScissorTest(F),ct){let Rt=Nt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,q)}else if(yt){let Rt=Nt.get(E.texture),Bt=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,q||0,Bt)}P=-1},this.readRenderTargetPixels=function(E,k,q,Y,H,ct,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){Ct.bindFramebuffer(U.FRAMEBUFFER,wt);try{let Rt=E.texture,Bt=Rt.format,zt=Rt.type;if(!qt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Y&&q>=0&&q<=E.height-H&&U.readPixels(k,q,Y,H,kt.convert(Bt),kt.convert(zt),ct)}finally{let Rt=w!==null?Nt.get(w).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,Y,H,ct,yt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){let Rt=E.texture,Bt=Rt.format,zt=Rt.type;if(!qt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-Y&&q>=0&&q<=E.height-H){Ct.bindFramebuffer(U.FRAMEBUFFER,wt);let Pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(k,q,Y,H,kt.convert(Bt),kt.convert(zt),0);let le=w!==null?Nt.get(w).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,le);let me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wd(U,me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(Pt),U.deleteSync(me),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,q=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);let Y=Math.pow(2,-q),H=Math.floor(E.image.width*Y),ct=Math.floor(E.image.height*Y),yt=k!==null?k.x:0,wt=k!==null?k.y:0;A.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,yt,wt,H,ct),Ct.unbindTexture()},this.copyTextureToTexture=function(E,k,q=null,Y=null,H=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],k=arguments[2],H=arguments[3]||0,q=null);let ct,yt,wt,Rt,Bt,zt;q!==null?(ct=q.max.x-q.min.x,yt=q.max.y-q.min.y,wt=q.min.x,Rt=q.min.y):(ct=E.image.width,yt=E.image.height,wt=0,Rt=0),Y!==null?(Bt=Y.x,zt=Y.y):(Bt=0,zt=0);let Pt=kt.convert(k.format),le=kt.convert(k.type);A.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let me=U.getParameter(U.UNPACK_ROW_LENGTH),Me=U.getParameter(U.UNPACK_IMAGE_HEIGHT),tn=U.getParameter(U.UNPACK_SKIP_PIXELS),se=U.getParameter(U.UNPACK_SKIP_ROWS),It=U.getParameter(U.UNPACK_SKIP_IMAGES),Be=E.isCompressedTexture?E.mipmaps[H]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Be.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Be.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Bt,zt,ct,yt,Pt,le,Be.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Bt,zt,Be.width,Be.height,Pt,Be.data):U.texSubImage2D(U.TEXTURE_2D,H,Bt,zt,ct,yt,Pt,le,Be),U.pixelStorei(U.UNPACK_ROW_LENGTH,me),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me),U.pixelStorei(U.UNPACK_SKIP_PIXELS,tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,se),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It),H===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q=null,Y=null,H=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],k=arguments[3],H=arguments[4]||0);let ct,yt,wt,Rt,Bt,zt,Pt,le,me,Me=E.isCompressedTexture?E.mipmaps[H]:E.image;q!==null?(ct=q.max.x-q.min.x,yt=q.max.y-q.min.y,wt=q.max.z-q.min.z,Rt=q.min.x,Bt=q.min.y,zt=q.min.z):(ct=Me.width,yt=Me.height,wt=Me.depth,Rt=0,Bt=0,zt=0),Y!==null?(Pt=Y.x,le=Y.y,me=Y.z):(Pt=0,le=0,me=0);let tn=kt.convert(k.format),se=kt.convert(k.type),It;if(k.isData3DTexture)A.setTexture3D(k,0),It=U.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)A.setTexture2DArray(k,0),It=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Be=U.getParameter(U.UNPACK_ROW_LENGTH),re=U.getParameter(U.UNPACK_IMAGE_HEIGHT),dn=U.getParameter(U.UNPACK_SKIP_PIXELS),Mi=U.getParameter(U.UNPACK_SKIP_ROWS),en=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(It,H,Pt,le,me,ct,yt,wt,tn,se,Me.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(It,H,Pt,le,me,ct,yt,wt,tn,Me.data):U.texSubImage3D(It,H,Pt,le,me,ct,yt,wt,tn,se,Me),U.pixelStorei(U.UNPACK_ROW_LENGTH,Be),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),U.pixelStorei(U.UNPACK_SKIP_PIXELS,dn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,en),H===0&&k.generateMipmaps&&U.generateMipmap(It),Ct.unbindTexture()},this.initRenderTarget=function(E){Nt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,Ct.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Fc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===jr?"display-p3":"srgb"}};var Ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var tc=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Je,h=Je,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Es=class extends ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Oi=new ee,Zl=new ee,er=[],$l=new zn,b0=new ee,hs=new Xt,us=new yn,Qn=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,b0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),$l.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union($l)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),us.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),Zl.multiplyMatrices(n,Oi),hs.matrixWorld=Zl,hs.raycast(t,er);for(let o=0,a=er.length;o<a;o++){let c=er[o];c.instanceId=r,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tc(new Float32Array(s*this.count),s,this.count,Dc,wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ws=class extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dr=new R,Ur=new R,Kl=new ee,ds=new jn,nr=new yn,Yo=new R,Jl=new R,Nr=class extends ze{constructor(t=new de,e=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ur);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;Kl.copy(s).invert(),ds.copy(t.ray).applyMatrix4(Kl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=g,p=f-1;_<p;_+=l){let m=h.getX(_),M=h.getX(_+1),x=ir(this,t,ds,c,m,M);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(f-1),p=h.getX(g),m=ir(this,t,ds,c,_,p);m&&e.push(m)}}else{let g=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=g,p=f-1;_<p;_+=l){let m=ir(this,t,ds,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=ir(this,t,ds,c,f-1,g);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ir(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ur.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ur,Yo,Jl)>n)return;Yo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yo);if(!(c<t.near||c>t.far))return{distance:c,point:Jl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ec=class extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jl=new ee,nc=new jn,sr=new yn,rr=new R,Or=class extends ze{constructor(t=new de,e=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;jl.copy(s).invert(),nc.copy(t.ray).applyMatrix4(jl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let f=u,_=g;f<_;f++){let p=l.getX(f);rr.fromBufferAttribute(d,p),Ql(rr,p,c,s,t,e,this)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let f=u,_=g;f<_;f++)rr.fromBufferAttribute(d,f),Ql(rr,f,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ql(i,t,e,n,s,r,o){let a=nc.distanceSqToPoint(i);if(a<e){let c=new R;nc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,g=(o-h)/u;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new ee;for(let g=0;g<=t;g++){let f=g/t;s[g]=this.getTangentAt(f,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Oe(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,f))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Oe(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let f=1;f<=t;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],g*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fr=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,g=l-this.aY;c=u*h-g*d+this.aX,l=u*d+g*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ic=class extends Fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,g=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,g*=h,s(o,a,u,g)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var or=new R,Zo=new Hc,$o=new Hc,Ko=new Hc,ti=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),l=or);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(d),g),_=Math.pow(d.distanceToSquared(u),g),p=Math.pow(u.distanceToSquared(h),g);_<1e-4&&(_=1),f<1e-4&&(f=_),p<1e-4&&(p=_),Zo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,f,_,p),$o.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,f,_,p),Ko.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,f,_,p)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),$o.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Ko.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Zo.calc(c),$o.calc(c),Ko.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function S0(i,t){let e=1-i;return e*e*t}function E0(i,t){return 2*(1-i)*i*t}function w0(i,t){return i*i*t}function _s(i,t,e,n){return S0(i,t)+E0(i,e)+w0(i,n)}function T0(i,t){let e=1-i;return e*e*e*t}function A0(i,t){let e=1-i;return 3*e*e*i*t}function R0(i,t){return 3*(1-i)*i*i*t}function C0(i,t){return i*i*i*t}function xs(i,t,e,n,s){return T0(i,t)+A0(i,e)+R0(i,n)+C0(i,s)}var sc=class extends Mn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(t,s.x,r.x,o.x,a.x),xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rc=class extends Mn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(t,s.x,r.x,o.x,a.x),xs(t,s.y,r.y,o.y,a.y),xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oc=class extends Mn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends Mn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends Mn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Mn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y),_s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lc=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(th(a,c.x,l.x,h.x,d.x),th(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},P0=Object.freeze({__proto__:null,ArcCurve:ic,CatmullRomCurve3:ti,CubicBezierCurve:sc,CubicBezierCurve3:rc,EllipseCurve:Fr,LineCurve:oc,LineCurve3:ac,QuadraticBezierCurve:cc,QuadraticBezierCurve3:Br,SplineCurve:lc});var zr=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let g=n+d/e*s;l.x=t*Math.cos(g),l.y=t*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},An=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],g=[],f=0,_=[],p=n/2,m=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(g,2));function M(){let y=new R,C=new R,T=0,w=(e-t)/n;for(let P=0;P<=r;P++){let O=[],v=P/r,b=v*(e-t)+t;for(let F=0;F<=s;F++){let N=F/s,L=N*c+a,W=Math.sin(L),D=Math.cos(L);C.x=b*W,C.y=-v*n+p,C.z=b*D,d.push(C.x,C.y,C.z),y.set(W,w,D).normalize(),u.push(y.x,y.y,y.z),g.push(N,1-v),O.push(f++)}_.push(O)}for(let P=0;P<s;P++)for(let O=0;O<r;O++){let v=_[O][P],b=_[O+1][P],F=_[O+1][P+1],N=_[O][P+1];t>0&&(h.push(v,b,N),T+=3),e>0&&(h.push(b,F,N),T+=3)}l.addGroup(m,T,0),m+=T}function x(y){let C=f,T=new pt,w=new R,P=0,O=y===!0?t:e,v=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,p*v,0),u.push(0,v,0),g.push(.5,.5),f++;let b=f;for(let F=0;F<=s;F++){let L=F/s*c+a,W=Math.cos(L),D=Math.sin(L);w.x=O*D,w.y=p*v,w.z=O*W,d.push(w.x,w.y,w.z),u.push(0,v,0),T.x=W*.5+.5,T.y=D*.5*v+.5,g.push(T.x,T.y),f++}for(let F=0;F<s;F++){let N=C+F,L=b+F;y===!0?h.push(L,L+1,N):h.push(L+1,L,N),P+=3}l.addGroup(m,P,y===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hc=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new R,y=new R,C=new R;for(let T=0;T<e.length;T+=3)g(e[T+0],x),g(e[T+1],y),g(e[T+2],C),c(x,y,C,M)}function c(M,x,y,C){let T=C+1,w=[];for(let P=0;P<=T;P++){w[P]=[];let O=M.clone().lerp(y,P/T),v=x.clone().lerp(y,P/T),b=T-P;for(let F=0;F<=b;F++)F===0&&P===T?w[P][F]=O:w[P][F]=O.clone().lerp(v,F/b)}for(let P=0;P<T;P++)for(let O=0;O<2*(T-P)-1;O++){let v=Math.floor(O/2);O%2===0?(u(w[P][v+1]),u(w[P+1][v]),u(w[P][v])):(u(w[P][v+1]),u(w[P+1][v+1]),u(w[P+1][v]))}}function l(M){let x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new R;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=p(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;o.push(y,1-C)}f(),d()}function d(){for(let M=0;M<o.length;M+=6){let x=o[M+0],y=o[M+2],C=o[M+4],T=Math.max(x,y,C),w=Math.min(x,y,C);T>.9&&w<.1&&(x<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function g(M,x){let y=M*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function f(){let M=new R,x=new R,y=new R,C=new R,T=new pt,w=new pt,P=new pt;for(let O=0,v=0;O<r.length;O+=9,v+=6){M.set(r[O+0],r[O+1],r[O+2]),x.set(r[O+3],r[O+4],r[O+5]),y.set(r[O+6],r[O+7],r[O+8]),T.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),C.copy(M).add(x).add(y).divideScalar(3);let b=p(C);_(T,v+0,M,b),_(w,v+2,x,b),_(P,v+4,y,b)}}function _(M,x,y,C){C<0&&M.x===1&&(o[x]=M.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var I0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Lh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,g;if(n&&(r=O0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let f=e;f<s;f+=e)d=i[f],u=i[f+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);g=Math.max(l-a,h-c),g=g!==0?32767/g:0}return Ts(r,o,e,a,c,g,0),o}};function Lh(i,t,e,n,s){let r,o;if(s===Y0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=eh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=eh(r,i[r],i[r+1],o);return o&&to(o,o.next)&&(Rs(o),o=o.next),o}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(to(e,e.next)||ye(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&H0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?D0(i,n,s,r):L0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Rs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=U0(gi(i),t,e),Ts(i,t,e,n,s,r,2)):o===2&&N0(i,t,e,n,s,r):Ts(gi(i),t,e,n,s,r,1);break}}}function L0(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,g=a>c?a>l?a:l:c>l?c:l,f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=g&&zi(s,a,r,c,o,l,f.x,f.y)&&ye(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function D0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,g=a<c?a<l?a:l:c<l?c:l,f=h<d?h<u?h:u:d<u?d:u,_=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,m=uc(g,f,t,e,n),M=uc(_,p,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=g&&x.x<=_&&x.y>=f&&x.y<=p&&x!==s&&x!==o&&zi(a,h,c,d,l,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=g&&y.x<=_&&y.y>=f&&y.y<=p&&y!==s&&y!==o&&zi(a,h,c,d,l,u,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=g&&x.x<=_&&x.y>=f&&x.y<=p&&x!==s&&x!==o&&zi(a,h,c,d,l,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=g&&y.x<=_&&y.y>=f&&y.y<=p&&y!==s&&y!==o&&zi(a,h,c,d,l,u,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function U0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!to(s,r)&&Dh(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rs(n),Rs(n.next),n=i=r),n=n.next}while(n!==i);return gi(n)}function N0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let c=Uh(o,a);o=gi(o,o.next),c=gi(c,c.next),Ts(o,t,e,n,s,r,0),Ts(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function O0(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Lh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(G0(l));for(s.sort(F0),r=0;r<s.length;r++)e=B0(s[r],e);return e}function F0(i,t){return i.x-t.x}function B0(i,t){let e=z0(i,t);if(!e)return t;let n=Uh(e,i);return gi(n,n.next),gi(e,e.next)}function z0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&zi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),As(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&k0(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function k0(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function H0(i,t,e,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,V0(s)}function V0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function G0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(As(i,t)&&As(t,i)&&q0(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||to(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function to(i,t){return i.x===t.x&&i.y===t.y}function Dh(i,t,e,n){let s=cr(ye(i,t,e)),r=cr(ye(i,t,n)),o=cr(ye(e,n,i)),a=cr(ye(e,n,t));return!!(s!==r&&o!==a||s===0&&ar(i,e,t)||r===0&&ar(i,n,t)||o===0&&ar(e,i,n)||a===0&&ar(e,t,n))}function ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cr(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function q0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uh(i,t){let e=new dc(i.i,i.x,i.y),n=new dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eh(i,t,e,n){let s=new dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Y0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nh(t),ih(n,t);let o=t.length;e.forEach(nh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ih(n,e[c]);let a=I0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function nh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kr=class i extends hc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Hr=class i extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,g=new R,f=new pt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let m=r+p/n*o;g.x=d*Math.cos(m),g.y=d*Math.sin(m),c.push(g.x,g.y,g.z),l.push(0,0,1),f.x=(g.x/e+1)/2,f.y=(g.y/e+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<s;_++){let p=_*(n+1);for(let m=0;m<n;m++){let M=m+p,x=M,y=M+n+1,C=M+n+2,T=M+1;a.push(x,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var _i=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new R,u=new R,g=[],f=[],_=[],p=[];for(let m=0;m<=n;m++){let M=[],x=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(T+y,1-x),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let x=h[m][M+1],y=h[m][M],C=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&g.push(x,y,T),(m!==n-1||c<Math.PI)&&g.push(y,C,T)}this.setIndex(g),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vr=class i extends de{constructor(t=new Br(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new pt,h=new R,d=[],u=[],g=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(g,2));function _(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),M(),m()}function p(x){h=t.getPointAt(x/e,h);let y=o.normals[x],C=o.binormals[x];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,P=Math.sin(w),O=-Math.cos(w);c.x=O*y.x+P*C.x,c.y=O*y.y+P*C.y,c.z=O*y.z+P*C.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let C=(s+1)*(x-1)+(y-1),T=(s+1)*x+(y-1),w=(s+1)*x+y,P=(s+1)*(x-1)+y;f.push(C,T,P),f.push(T,w,P)}}function M(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)l.x=x/e,l.y=y/s,g.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new P0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Fe=class extends kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function lr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:el,endingEnd:el}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:r=t,a=2*e-n;break;case il:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nl:o=t,c=2*n-e;break;case il:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,g=this._weightNext,f=(n-e)/(s-e),_=f*f,p=_*f,m=-u*p+2*u*_-u*f,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*f+1,x=(-1-g)*p+(1.5+g)*_+.5*f,y=g*p-g*_;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+M*o[l+C]+x*o[c+C]+y*o[d+C];return r}},pc=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},mc=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Z0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,g=d+n;for(let f=0;f!==n;++f){let _=e[d+f];if(_!==e[u+f]||_!==e[g+f]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let g=0;g!==n;++g)e[u+g]=e[d+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Fa;var xi=class extends bn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=gr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends bn{};gc.prototype.ValueTypeName="color";var _c=class extends bn{};_c.prototype.ValueTypeName="number";var xc=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ge.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gr=class extends bn{InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends bn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=gr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends bn{};vc.prototype.ValueTypeName="vector";var sh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},yc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let g=l[d],f=l[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return f}return null}}},$0=new yc,Cs=class{constructor(t){this.manager=t!==void 0?t:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mc=class extends Cs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=sh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ms("img");function c(){h(),sh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Wr=class extends Cs{constructor(t){super(t)}load(t,e,n,s){let r=new je,o=new Mc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Xr=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qr=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Jo=new ee,rh=new R,oh=new R,bc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sc=class extends bc{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Zr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ah(){return performance.now()}var Vc="\\[\\]\\.:\\/",K0=new RegExp("["+Vc+"]","g"),Gc="[^"+Vc+"]",J0="[^"+Vc.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Gc),Q0=/(WCOD+)?/.source.replace("WCOD",J0),t_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),n_=new RegExp("^"+j0+Q0+t_+e_+"$"),i_=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(t){let e=n_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Ec;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);var ch=new ee,$r=class{constructor(t,e,n=0,s=1/0){this.ray=new jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ch),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(lh),n}};function lh(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)wc(r[o],t,e,!0)}}var Ps=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Kr=class extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);var Nh={type:"change"},Xc={type:"start"},Fh={type:"end"},eo=new jn,Oh=new gn,s_=Math.cos(70*Te.DEG2RAD),De=new R,Qe=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wc=1e-6,no=class extends Kr{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sn.ROTATE,MIDDLE:Sn.DOLLY,RIGHT:Sn.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ge,this._lastTargetPosition=new R,this._quat=new Ge().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ps,this._sphericalDelta=new Ps,this._scale=1,this._panOffset=new R,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new R,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o_.bind(this),this._onPointerDown=r_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=p_.bind(this),this._onMouseWheel=h_.bind(this),this._onKeyDown=u_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=c_.bind(this),this._onMouseMove=l_.bind(this),this._interceptControlDown=m_.bind(this),this._interceptControlUp=g_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nh),this.update(),this.state=ue.NONE}update(t=null){let e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=De.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<s_?this.object.lookAt(this.target):(Oh.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(Oh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wc||this._lastTargetPosition.distanceToSquared(this.target)>Wc?(this.dispatchEvent(Nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function r_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function o_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fh),this.state=ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function c_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case Sn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case Sn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Xc)}function l_(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function h_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fh))}function u_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function d_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Rn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case Rn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Rn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Xc)}function f_(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function p_(i){this.enabled!==!1&&i.preventDefault()}function m_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var io=class extends no{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Sn.PAN,MIDDLE:Sn.DOLLY,RIGHT:Sn.ROTATE},this.touches={ONE:Rn.PAN,TWO:Rn.DOLLY_ROTATE}}};var Ls=class i extends Xt{constructor(){let t=i.SkyShader,e=new We({name:t.name,uniforms:zc.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Re,depthWrite:!1});super(new ke(1,1,1),e),this.isSky=!0}};Ls.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var fe=.1,ao=class{constructor(t){this.nx=t.nx,this.nz=t.nz,this.cell=t.cell,this.x0=t.x0,this.z0=t.z0,this.h=new Float32Array(t.h.length),this.wl=new Float32Array(t.wl.length);for(let e=0;e<t.h.length;e++)this.h[e]=t.h[e]*fe,this.wl[e]=t.wl[e]<=-9999?NaN:t.wl[e]*fe;this.lc=Uint8Array.from(t.lc),this.xmax=this.x0+(this.nx-1)*this.cell,this.zmax=this.z0+(this.nz-1)*this.cell}height(t,e){let n=Math.min(Math.max((t-this.x0)/this.cell,0),this.nx-1.001),s=Math.min(Math.max((e-this.z0)/this.cell,0),this.nz-1.001),r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=o*this.nx+r,h=this.h;return h[l]*(1-a)*(1-c)+h[l+1]*a*(1-c)+h[l+this.nx]*(1-a)*c+h[l+this.nx+1]*a*c}waterLevel(t,e){let n=Math.round((t-this.x0)/this.cell),s=Math.round((e-this.z0)/this.cell);if(n<0||s<0||n>=this.nx||s>=this.nz)return NaN;let r=this.wl[s*this.nx+n];return r>this.height(t,e)?r:NaN}surface(t,e){let n=this.height(t,e),s=this.waterLevel(t,e);return s>n?s:n}},Gh=`
float hz_h(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float hz_n(vec2 p){ vec2 i = mod(floor(p), 289.0), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);   // small hash inputs keep float precision
  return mix(mix(hz_h(i), hz_h(i + vec2(1, 0)), u.x), mix(hz_h(i + vec2(0, 1)), hz_h(i + vec2(1, 1)), u.x), u.y); }
float hz_fbm(vec2 p){ float a = 0.5, v = 0.0; for (int k = 0; k < 4; k++) { v += a * hz_n(p); p *= 2.03; a *= 0.5; } return v; }
`,Bh={10:[.34,.5,.28],20:[.47,.58,.36],30:[.52,.64,.4],40:[.62,.68,.42],50:[.74,.71,.65],60:[.74,.67,.56],80:[.5,.52,.44],90:[.45,.58,.45],95:[.4,.55,.42]};function Wh(i,t){let{nx:e,nz:n,cell:s}=i,r=new Float32Array(e*n*3),o=new Float32Array(e*n*3),a=new Float32Array(e*n*2),c=new Float32Array(e*n*3),l=new Float32Array(e*n*3);for(let p=0;p<n;p++)for(let m=0;m<e;m++){let M=p*e+m;r[M*3]=i.x0+m*s,r[M*3+1]=i.h[M],r[M*3+2]=i.z0+p*s,a[M*2]=m/(e-1),a[M*2+1]=1-p/(n-1);let x=Bh[i.lc[M]]||Bh[50];l[M*3]=x[0]**2.2,l[M*3+1]=x[1]**2.2,l[M*3+2]=x[2]**2.2}for(let p=0;p<n;p++)for(let m=0;m<e;m++){let M=0,x=0,y=0,C=0;for(let O=-1;O<=1;O++)for(let v=-1;v<=1;v++){let b=m+v,F=p+O;if(b<0||F<0||b>=e||F>=n)continue;let N=(F*e+b)*3;M+=l[N],x+=l[N+1],y+=l[N+2],C++}let T=p*e+m,w=.94+.12*((m*73856093^p*19349663)>>>0)%1e3/1e3,P=!Number.isNaN(i.wl[T])&&i.wl[T]>i.h[T]?.72:1;o[T*3]=M/C*w*P,o[T*3+1]=x/C*w*P,o[T*3+2]=y/C*w*P,c[T*3]=c[T*3+1]=c[T*3+2]=P}let h=new Uint32Array((e-1)*(n-1)*6),d=0;for(let p=0;p<n-1;p++)for(let m=0;m<e-1;m++){let M=p*e+m,x=M+1,y=M+e,C=y+1;h[d++]=M,h[d++]=y,h[d++]=x,h[d++]=x,h[d++]=y,h[d++]=C}let u=new de;u.setAttribute("position",new ne(r,3));let g=new ne(t?c:o,3);u.setAttribute("color",g),u.setAttribute("uv",new ne(a,2)),u.setIndex(new ne(h,1)),u.computeVertexNormals();let f=new Fe({vertexColors:!0,map:t||null});f.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerrW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTerrW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTerrW;`+Gh).replace("#include <color_fragment>",`#include <color_fragment>
        float tDist = length(cameraPosition - vTerrW);
        float tFade = 1.0 - smoothstep(120.0, 900.0, tDist);
        vec2 tl = mod(vTerrW.xz, 600.0);
        float tg = hz_fbm(tl * 0.45) * 0.7 + hz_n(tl * 2.7) * 0.3;
        diffuseColor.rgb *= 1.0 + (tg - 0.5) * 0.22 * tFade;`)};let _=new Xt(u,f);return _.name="terrain",_.receiveShadow=!0,_.userData.setMode=p=>{let m=p==="photo"&&!!t;g.array.set(m?c:o),g.needsUpdate=!0,f.map=m?t:null,f.needsUpdate=!0},_}function yi(i,t=fe){let e=[];for(let n=0;n<i.length;n+=2)e.push(new pt(i[n]*t,i[n+1]*t));return e}function Xh(i){let t=0;for(let e=0,n=i.length;e<n;e++){let s=i[e],r=i[(e+1)%n];t+=s.x*r.y-r.x*s.y}return t/2}var ns=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.idx=[]}extrude(t,e,n,s,r){let[o,...a]=t,c=this.pos.length/3,l=o.concat(...a);for(let h of l)this.pos.push(h.x,n,h.y),this.nor.push(0,1,0),this.col.push(r.r,r.g,r.b);for(let h of Ji.triangulateShape(o,a)){let[d,u,g]=h.map(_=>l[_]);(u.y-d.y)*(g.x-d.x)-(u.x-d.x)*(g.y-d.y)>=0?this.idx.push(c+h[0],c+h[1],c+h[2]):this.idx.push(c+h[0],c+h[2],c+h[1])}t.forEach((h,d)=>this.walls(h,e,n,s,d>0))}walls(t,e,n,s,r=!1){let o=t.length,a=Xh(t)>0===r;for(let c=0;c<o;c++){let l=t[c],h=t[(c+1)%o],d=h.x-l.x,u=h.y-l.y,g=Math.hypot(d,u)||1,f=u/g,_=-d/g;a&&(f=-f,_=-_);let p=this.pos.length/3;this.pos.push(l.x,e,l.y,h.x,e,h.y,h.x,n,h.y,l.x,n,l.y);for(let m=0;m<4;m++){this.nor.push(f,0,_);let M=m<2?.78:1;this.col.push(s.r*M,s.g*M,s.b*M)}-u*f+d*_>0?this.idx.push(p,p+1,p+2,p,p+2,p+3):this.idx.push(p,p+2,p+1,p,p+3,p+2)}}box(t,e,n,s,r,o,a,c,l){let h=-s,d=n,u=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,f])=>new pt(t+n*r*g+h*o*f,e+s*r*g+d*o*f));this.extrude([u],a,c,l,l)}mesh(t){let e=new de;return e.setAttribute("position",new Jt(this.pos,3)),e.setAttribute("normal",new Jt(this.nor,3)),e.setAttribute("color",new Jt(this.col,3)),e.setIndex(this.idx),new Xt(e,t||new Fe({vertexColors:!0,side:$e,shadowSide:Re}))}};function so(i,t){let e=0,n=0;for(let s of i)e+=s.x,n+=s.y;return e/=i.length,n/=i.length,i.map(s=>new pt(e+(s.x-e)*t,n+(s.y-n)*t))}var Ds=class i{constructor(t=32){this.cell=t,this.map=new Map,this.items=[]}add(t,e,n,s){let r=1/0,o=-1/0,a=1/0,c=-1/0,l=t[0];for(let u=0;u<l.length;u+=2)r=Math.min(r,l[u]),o=Math.max(o,l[u]),a=Math.min(a,l[u+1]),c=Math.max(c,l[u+1]);let h=this.items.length;this.items.push({rings:t,y0:e,y1:n,info:s});let d=this.cell;for(let u=Math.floor(r/d);u<=Math.floor(o/d);u++)for(let g=Math.floor(a/d);g<=Math.floor(c/d);g++){let f=u*100003+g,_=this.map.get(f);_||(_=[],this.map.set(f,_)),_.push(h)}return h}static inRing(t,e,n){let s=!1;for(let r=0,o=t.length,a=o-2;r<o;a=r,r+=2){let c=t[r],l=t[r+1],h=t[a],d=t[a+1];l>n!=d>n&&e<(h-c)*(n-l)/(d-l)+c&&(s=!s)}return s}static inside(t,e,n){if(!i.inRing(t.rings[0],e,n))return!1;for(let s=1;s<t.rings.length;s++)if(i.inRing(t.rings[s],e,n))return!1;return!0}pick(t,e){let n=this.map.get(Math.floor(t/this.cell)*100003+Math.floor(e/this.cell));if(!n)return null;let s=null;for(let r of n){let o=this.items[r];i.inside(o,t,e)&&(!s||o.y1>s.y1)&&(s=o)}return s}hit(t,e,n,s){let r=[[0,0],[s,0],[-s,0],[0,s],[0,-s]];for(let[o,a]of r){let c=this.map.get(Math.floor((t+o)/this.cell)*100003+Math.floor((n+a)/this.cell));if(c)for(let l of c){let h=this.items[l];if(e-s<h.y1&&e+s>h.y0&&i.inside(h,t+o,n+a))return h}}return null}};function qh(i,t){let e=[],n=[];for(let a of i){let c=a.rings.map(u=>yi(u)),l=c[0].concat(...c.slice(1)),h=e.length/3,d=a.y*fe;for(let u of l)e.push(u.x,d,u.y);for(let u of Ji.triangulateShape(c[0],c.slice(1)))n.push(h+u[0],h+u[1],h+u[2])}let s=new de;s.setAttribute("position",new Jt(e,3)),s.setIndex(n);let r=new We({transparent:!0,side:$e,depthWrite:!1,uniforms:{uTime:{value:0},uDeep:{value:new Tt("#2f6f73")},uShallow:{value:new Tt("#5fa39a")},uSky:{value:t.skyColor.clone()},uSun:{value:new Tt("#fff2d0")},uSunDir:{value:t.sunDir.clone()},uFogColor:{value:t.fogColor.clone()},uFogNear:{value:t.fogNear},uFogFar:{value:t.fogFar}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogNear, uFogFar; uniform vec3 uDeep, uShallow, uSky, uSun, uSunDir, uFogColor; varying vec3 vW;
      float hgt(vec2 p){ return sin(p.x*0.21+uTime*1.1)*0.5 + sin(p.y*0.17-uTime*0.9)*0.5 + sin((p.x+p.y)*0.43+uTime*1.7)*0.25 + sin((p.x-p.y)*0.71-uTime*2.3)*0.12; }
      void main(){
        vec2 p = vW.xz; float e = 0.35;
        float hx = hgt(p + vec2(e, 0.0)) - hgt(p - vec2(e, 0.0)); float hz = hgt(p + vec2(0.0, e)) - hgt(p - vec2(0.0, e));
        vec3 n = normalize(vec3(-hx * 0.22, 1.0, -hz * 0.22));
        vec3 v = normalize(cameraPosition - vW);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        vec3 col = mix(uDeep, uShallow, 0.4 + 0.3 * n.x);
        col = mix(col, uSky, clamp(fres * 0.8 + 0.06, 0.0, 1.0));
        float spec = pow(max(dot(reflect(-uSunDir, n), v), 0.0), 80.0);
        col += uSun * spec * 0.55;
        float f = smoothstep(uFogNear, uFogFar, length(cameraPosition - vW));
        gl_FragColor = vec4(mix(col, uFogColor, f), 0.94);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),o=new Xt(s,r);return o.name="water",o.renderOrder=2,o}function qc(i,t,e,n,s=fe){let r=t.length/3;if(r<2)return;let o=i.pos.length/3,a=e/2;for(let c=0;c<r;c++){let l=t[c*3]*s,h=t[c*3+1]*s,d=t[c*3+2]*s,u=Math.max(c-1,0),g=Math.min(c+1,r-1),f=(t[g*3]-t[u*3])*s,_=(t[g*3+1]-t[u*3+1])*s,p=Math.hypot(f,_)||1;if(f/=p,_/=p,i.pos.push(l-_*a,d+n,h+f*a,l+_*a,d+n,h-f*a),i.nor.push(0,1,0,0,1,0),c<r-1){let m=o+c*2;i.idx.push(m,m+2,m+1,m+1,m+2,m+3)}}}function Yc(i,t,e={}){let n=new de;return n.setAttribute("position",new Jt(i.pos,3)),n.setAttribute("normal",new Jt(i.nor,3)),n.setIndex(i.idx),new Xt(n,new Fe({color:t,side:$e,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,...e}))}var ro=[["#565a61",.34],["#666a70",.28],["#777a7e",.22],["#c7bfae",.16],["#5a4a3c",.24]];function Yh(i){let t=new Pe;t.name="roads";let e=ro.map(()=>({pos:[],nor:[],idx:[]})),n={pos:[],nor:[],idx:[]};for(let s of i)qc(e[s.g],s.p,s.w,ro[s.g][1]),s.g===0&&s.w>=9&&qc(n,s.p,.25,ro[0][1]+.05);return e.forEach((s,r)=>{s.pos.length&&t.add(Yc(s,ro[r][0]))}),n.pos.length&&t.add(Yc(n,"#e6dfc8",{polygonOffsetFactor:-5,polygonOffsetUnits:-5})),t}var zh={road:{th:1.2,col:"#5d6168",side:"#8d9096"},rail:{th:1.4,col:"#5a4a3c",side:"#6f6a64"},foot:{th:.45,col:"#a58e6d",side:"#8a7658"}};function Zh(i,t,e){let n=new Pe;n.name="bridges";let s={road:{pos:[],nor:[],idx:[]},rail:{pos:[],nor:[],idx:[]},foot:{pos:[],nor:[],idx:[]}},r=new ns,o=[],a=[],c=new Tt("#9a958c"),l=new Tt("#c9cbd0"),h=(f,_,p,m,M,x,y)=>{let C=t.height(f,_)-1;y-C<1.5||(r.box(f,_,p,m,M,x,C,y,c),a.push({cx:f,cz:_,ux:p,uz:m,halfL:M,halfW:x,y0:C,y1:y}))};for(let f of i)for(let _ of f.ways){let p=zh[_.kind],m=_.pts,M=m.length/3,x=_.width/2;qc(s[_.kind],m,_.width,.3);let y=new Tt(p.side),C=0,T=19;for(let w=0;w<M-1;w++){let P=m[w*3]*fe,O=m[w*3+1]*fe,v=m[w*3+2]*fe+.3,b=m[w*3+3]*fe,F=m[w*3+4]*fe,N=m[w*3+5]*fe+.3,L=b-P,W=F-O,D=Math.hypot(L,W);if(D<.05)continue;let Z=L/D,z=W/D,et=(P+b)/2,J=(O+F)/2,V=(v+N)/2;if(r.box(et,J,Z,z,D/2+.02,x,V-p.th,V-.02,y),_.kind!=="rail")for(let ht of[-1,1])r.box(et-z*ht*(x-.1),J+Z*ht*(x-.1),Z,z,D/2,.1,V,V+1,l);if(o.push({ax:P,az:O,bx:b,bz:F,halfW:x,yTop:V+1,yBot:V-p.th,name:f.name,len:f.len,special:f.special,kind:_.kind}),!f.special&&!_.beside_truss&&_.kind!=="foot"&&f.len>=60&&(C+=D,C>=T)){let ht=t.waterLevel(et,J);!Number.isNaN(ht)&&V-p.th-ht>2.5&&h(et,J,Z,z,1.1,x*.8,V-p.th),T+=38}}}let d=e.truong_tien,u=null,g=null;if(d){let f=d.ax,_=d.az,p=d.bx,m=d.bz,M=Math.hypot(p-f,m-_),x=(p-f)/M,y=(m-_)/M,C=-y,T=x,w=d.deck_y+.3,P=1.2,O=9,v=3.5,b=d.spans,F=M/b;for(let J=0;J<=b;J++)h(f+x*F*J,_+y*F*J,x,y,1.6,7.6,w-P);let N=[],L=(J,V,ht)=>new R(f+x*J+C*V,ht,_+y*J+T*V),W=12;for(let J=0;J<b;J++)for(let V of[-v,v]){let ht=null;for(let Mt=0;Mt<=W;Mt++){let G=Mt/W,$=F*(J+G),nt=w+O*4*G*(1-G),at=L($,V,nt);ht&&N.push([ht,at,.42]),Mt>0&&Mt<W&&N.push([L($,V,w),at,.2]),V>0&&Mt>0&&Mt<W&&nt-w>5.2&&N.push([L($,-v,nt),at,.24]),ht=at}}u=new Qn(new ke(1,1,1),new Fe({color:"#b7bcc2"}),N.length);let D=new ee,Z=new Ge,z=new R(0,1,0),et=new R;N.forEach(([J,V,ht],Mt)=>{et.subVectors(V,J);let G=et.length();Z.setFromUnitVectors(z,et.normalize()),D.compose(new R().addVectors(J,V).multiplyScalar(.5),Z,new R(ht,G,ht)),u.setMatrixAt(Mt,D)}),u.name="truss",g={ax:f,az:_,ux:x,uz:y,vx:C,vz:T,L:M,S:F,spans:b,deckY:w,underside:w-P,water:d.water_y}}return["road","rail","foot"].forEach(f=>{s[f].pos.length&&n.add(Yc(s[f],zh[f].col,{polygonOffsetFactor:-1,polygonOffsetUnits:-1}))}),n.add(r.mesh()),u&&n.add(u),{group:n,decks:o,piers:a,ttInfo:g}}function $h(i,t,e,n,s){for(let r of i.decks){if(e-s>r.yTop||e+s<r.yBot)continue;let o=r.bx-r.ax,a=r.bz-r.az,c=o*o+a*a,l=((t-r.ax)*o+(n-r.az)*a)/c;l=Math.max(0,Math.min(1,l));let h=r.ax+o*l-t,d=r.az+a*l-n;if(h*h+d*d<(r.halfW+s)*(r.halfW+s))return"deck"}for(let r of i.piers){if(e-s>r.y1||e+s<r.y0)continue;let o=t-r.cx,a=n-r.cz,c=o*r.ux+a*r.uz,l=-o*r.uz+a*r.ux;if(Math.abs(c)<r.halfL+s&&Math.abs(l)<r.halfW+s)return"pier"}return null}var kh=["#e8e0cd","#e2d2b2","#d8cab0","#efe8d9","#cdc5b6","#e5d6a9","#dcc9b4"].map(i=>new Tt(i)),Hh=["#a5553b","#b1654a","#9a4f3b","#a85f45","#8d8882","#7a848d","#b06a4e"].map(i=>new Tt(i)),__=["#3f86b3","#e2a23a","#9b6fc2"].map(i=>new Tt(i)),x_=["#3f9c6b","#e2a23a","#c0564b"].map(i=>new Tt(i)),Kh=["OpenStreetMap (v\u1EBD tay)","Google Open Buildings (h\u1ECDc m\xE1y)","Microsoft ML Buildings (h\u1ECDc m\xE1y)"],Jh=["Th\u1EBB OSM (chi\u1EC1u cao/s\u1ED1 t\u1EA7ng)","\u01AF\u1EDBc l\u01B0\u1EE3ng h\u1ECDc m\xE1y \u2014 Open Buildings 2.5D","M\u1EB7c \u0111\u1ECBnh 4,5 m (kh\xF4ng c\xF3 d\u1EEF li\u1EC7u)"];function jh(i,t,e=6,n){let s=new Pe;s.name="buildings";let r=i.n.length,o=new Float32Array(i.xz.length);for(let x=0;x<o.length;x++)o[x]=i.xz[x]*fe;let a=new Uint32Array(r+1);for(let x=0;x<r;x++)a[x+1]=a[x]+i.n[x]*2;let c=(n.xmax-n.xmin)/e,l=(n.zmax-n.zmin)/e,h=new Uint16Array(r),d=new Uint32Array(e*e),u=new Uint32Array(e*e);for(let x=0;x<r;x++){let y=i.n[x],C=0,T=0;for(let v=a[x];v<a[x+1];v+=2)C+=o[v],T+=o[v+1];C/=y,T/=y;let w=Math.min(e-1,Math.max(0,Math.floor((C-n.xmin)/c))),O=Math.min(e-1,Math.max(0,Math.floor((T-n.zmin)/l)))*e+w;h[x]=O,d[O]+=5*y,u[O]+=6*y+3*(y-2)}let g=[];for(let x=0;x<d.length;x++)g.push(d[x]?{pos:new Float32Array(d[x]*3),nor:new Int8Array(d[x]*3),col:new Uint8Array(d[x]*3),bt:new Int16Array(d[x]*2),su:new Float32Array(d[x]),idx:new Uint32Array(u[x]),v:0,i:0,ranges:[]}:null);let f=[];for(let x=0;x<r;x++){let y=g[h[x]],C=i.n[x],T=i.base[x]*fe,w=T+i.h[x]*fe,P=o.subarray(a[x],a[x+1]);f.length=0;for(let L=0;L<C;L++)f.push(new pt(P[L*2],P[L*2+1]));let O=Xh(f)>0,v=y.v,b=Math.round(T*10),F=Math.round(w*10);for(let L=0;L<C;L++){let W=y.v*3;y.pos[W]=P[L*2],y.pos[W+1]=w,y.pos[W+2]=P[L*2+1],y.nor[W+1]=127,y.bt[y.v*2]=b,y.bt[y.v*2+1]=F,y.v++}for(let L of Ji.triangulateShape(f,[])){let W=f[L[0]],D=f[L[1]],Z=f[L[2]],z=(D.y-W.y)*(Z.x-W.x)-(D.x-W.x)*(Z.y-W.y);y.idx[y.i++]=v+L[0],y.idx[y.i++]=v+(z>=0?L[1]:L[2]),y.idx[y.i++]=v+(z>=0?L[2]:L[1])}let N=0;for(let L=0;L<C;L++){let W=P[L*2],D=P[L*2+1],Z=P[(L+1)%C*2],z=P[(L+1)%C*2+1],et=Z-W,J=z-D,V=Math.hypot(et,J)||1,ht=J/V,Mt=-et/V;O||(ht=-ht,Mt=-Mt);let G=y.v,$=(nt,at,ut)=>{let bt=y.v*3;y.pos[bt]=nt,y.pos[bt+1]=at,y.pos[bt+2]=ut,y.nor[bt]=Math.round(ht*127),y.nor[bt+2]=Math.round(Mt*127),y.bt[y.v*2]=b,y.bt[y.v*2+1]=F,y.v++};$(W,T,D),$(Z,T,z),$(Z,w,z),$(W,w,D),y.su[G]=N,y.su[G+1]=N+V,y.su[G+2]=N+V,y.su[G+3]=N,N+=V,-J*ht+et*Mt>0?(y.idx[y.i++]=G,y.idx[y.i++]=G+1,y.idx[y.i++]=G+2,y.idx[y.i++]=G,y.idx[y.i++]=G+2,y.idx[y.i++]=G+3):(y.idx[y.i++]=G,y.idx[y.i++]=G+2,y.idx[y.i++]=G+1,y.idx[y.i++]=G,y.idx[y.i++]=G+3,y.idx[y.i++]=G+2)}y.ranges.push(x,v,C),t.add([P],T,w,{type:"building",index:x})}let _=new Fe({vertexColors:!0,side:vn,shadowSide:Re}),p={value:1};_.onBeforeCompile=x=>{x.uniforms.uDetail=p,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aBT; attribute float aSU;
varying vec3 vBW; varying vec3 vBN; varying vec2 vBT; varying float vSU;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBW = (modelMatrix * vec4(transformed, 1.0)).xyz; vBN = normal; vBT = aBT * 0.1; vSU = aSU;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDetail; varying vec3 vBW; varying vec3 vBN; varying vec2 vBT; varying float vSU;`+Gh).replace("#include <color_fragment>",`#include <color_fragment>
        if (uDetail > 0.5) {
          float bDist = length(cameraPosition - vBW);
          float near = 1.0 - smoothstep(350.0, 1400.0, bDist);
          vec3 n = normalize(vBN);
          // interpolated varyings wobble in the last bits; round to whole decimetres before hashing,
          // otherwise the high-frequency hash turns that wobble into per-pixel speckle
          vec2 btq = mod(floor(vBT * 10.0 + 0.5), 113.0);
          float seed = hz_h(btq * vec2(0.731, 0.379) + 0.21);
          if (abs(n.y) < 0.5) {
            float u = vSU + seed * 3.0;
            float h = vBW.y - vBT.x;
            float storey = 3.3, fy = fract(h / storey), fl = floor(h / storey);
            float bay = 2.6 + seed * 1.2, fx = fract(u / bay);
            float win = step(0.24, fx) * step(fx, 0.76) * step(0.34, fy) * step(fy, 0.84);
            if (fl < 1.0) win = step(0.06, fx) * step(fx, 0.94) * step(0.04, fy) * step(fy, 0.80) * 0.9;   // shop front
            win *= step(0.7, vBT.y - vBW.y);                                                        // nothing in the parapet
            win *= step(2.4, vBT.y - vBT.x);                                                        // sheds stay plain
            float lit = hz_h(vec2(floor(u / bay), fl) + seed);
            vec3 glass = mix(vec3(0.10, 0.13, 0.16), vec3(0.34, 0.42, 0.50), clamp(0.5 + 0.45 * n.x + 0.2 * lit, 0.0, 1.0));
            diffuseColor.rgb = mix(diffuseColor.rgb, glass, win * 0.9 * near);
            diffuseColor.rgb *= mix(0.86, 1.0, 1.0 - near);                                         // average window darkness far away
            diffuseColor.rgb *= 0.9 + 0.1 * smoothstep(0.0, 1.2, h);                                 // grime at street level
            diffuseColor.rgb *= 0.94 + 0.12 * hz_fbm(vec2(u * 0.3, vBW.y * 0.6));                   // plaster stains
          } else {
            float warm = step(diffuseColor.g * 1.25, diffuseColor.r);
            vec2 rl = mod(vBW.xz, 500.0);                                   // local roof coordinates
            float rows = smoothstep(0.0, 0.18, fract(rl.x * 2.6 + rl.y * 0.4)) * 0.18 + 0.82;
            float conc = 0.86 + 0.24 * hz_fbm(rl * 0.35);
            diffuseColor.rgb *= mix(conc, rows * (0.92 + 0.12 * hz_n(rl * 0.9)), warm) * mix(1.0, 0.96, near);
          }
        }`)};let m=[];for(let x of g){if(!x)continue;let y=new de;y.setAttribute("position",new ne(x.pos,3)),y.setAttribute("normal",new ne(x.nor,3,!0)),y.setAttribute("color",new ne(x.col,3,!0)),y.setAttribute("aBT",new ne(x.bt,2)),y.setAttribute("aSU",new ne(x.su,1)),y.setIndex(new ne(x.idx.subarray(0,x.i),1)),y.computeBoundingSphere();let C=new Xt(y,_);C.castShadow=!0,C.receiveShadow=!0,C.userData.ranges=x.ranges,m.push(C),s.add(C)}function M(x){p.value=x==="natural"?1:0;let y=new Tt;for(let C of m){let T=C.geometry.attributes.color.array,w=C.userData.ranges;for(let P=0;P<w.length;P+=3){let O=w[P],v=w[P+1],b=w[P+2],F=O*2654435761>>>0,N,L;x==="source"?N=L=__[i.src[O]]:x==="height"?N=L=x_[i.hs[O]]:(N=kh[F%kh.length],L=Hh[(F>>>8)%Hh.length]);let W=(Z,z,et)=>{y.copy(z).multiplyScalar(et),T[Z*3]=Math.min(255,y.r*255),T[Z*3+1]=Math.min(255,y.g*255),T[Z*3+2]=Math.min(255,y.b*255)},D=x!=="natural";for(let Z=0;Z<b;Z++)W(v+Z,L,D?1:.95);for(let Z=0;Z<b;Z++){let z=v+b+Z*4;W(z,N,D?.62:.74),W(z+1,N,D?.62:.74),W(z+2,N,D?.8:1),W(z+3,N,D?.8:1)}}C.geometry.attributes.color.needsUpdate=!0}}return M("natural"),{group:s,recolor:M}}function Qh(i,t){let e=new ns,n=new Tt("#8f8274"),s=new Tt("#7f8f66"),r=new Tt("#a39382"),o=new Tt("#8c7d6e");for(let c of i){let l=c.rings.map(u=>yi(u)),h=c.base*fe,d=h+c.h*fe;e.extrude(l,h,d,c.kind==="rampart"?n:r,c.kind==="rampart"?s:o),t.add(c.rings.map(u=>Float32Array.from(u,g=>g*fe)),h,d,{type:"wall",kind:c.kind})}let a=e.mesh();return a.name="walls",a}function tu(i,t){let e=new Pe;e.name="landmarks";let n=new ns,s=i.landmarks||{},r=a=>new Tt(a),o=(a,c,l,h,d,u,g)=>{let f=so(a,c);n.extrude([f],l,h,r(d),r(u));let _=new Float32Array(f.length*2);f.forEach((p,m)=>{_[m*2]=p.x,_[m*2+1]=p.y}),t.add([_],l,h,g)};if(s.ky_dai){let a=yi(s.ky_dai.ring),c=s.ky_dai.base*fe,l={type:"landmark",key:"ky_dai",name:"K\u1EF3 \u0110\xE0i"};o(a,1,c,c+5.6,"#8b7d70","#a39686",l),o(a,.8,c+5.6,c+11.4,"#8b7d70","#a39686",l),o(a,.62,c+11.4,c+17.5,"#8b7d70","#a39686",l);let h=0,d=0;a.forEach(p=>{h+=p.x,d+=p.y}),h/=a.length,d/=a.length;let u=new Xt(new An(.22,.42,37,10),new Fe({color:"#d8d4c8"}));u.position.set(h,c+17.5+18.5,d),e.add(u);let g=new Xt(new Ki(9,6),new Fe({color:"#d5262e",side:$e}));g.position.set(h+4.7,c+17.5+33.6,d),e.add(g);let f=new Xt(new zr(1.6,5),new Ke({color:"#f6d743",side:$e}));f.position.set(h+4.7,c+17.5+33.6,d+.03),f.rotation.z=Math.PI/2,e.add(f);let _=f.clone();_.position.z=d-.03,e.add(_),e.userData.flag=g}if(s.ngo_mon){let a=yi(s.ngo_mon.ring),c=s.ngo_mon.base*fe,l={type:"landmark",key:"ngo_mon",name:"Ng\u1ECD M\xF4n"};o(a,1,c,c+5.3,"#9a8a79","#b0a391",l),o(a,.88,c+5.3,c+9.3,"#9b3d2d","#9b3d2d",l),o(a,1,c+9.3,c+10,"#c9982c","#d4a63a",l),o(a,.7,c+10,c+12.4,"#9b3d2d","#9b3d2d",l),o(a,.84,c+12.4,c+13.2,"#c9982c","#d4a63a",l)}if(s.thai_hoa){let a=yi(s.thai_hoa.ring),c=s.thai_hoa.base*fe,l={type:"landmark",key:"thai_hoa",name:"\u0110i\u1EC7n Th\xE1i H\xF2a"};o(a,1.04,c,c+1.4,"#a79c8c","#b9ae9e",l),o(a,.94,c+1.4,c+7,"#9b3d2d","#9b3d2d",l),o(a,1.06,c+7,c+7.8,"#c9982c","#d4a63a",l),o(a,.78,c+7.8,c+10,"#9b3d2d","#9b3d2d",l),o(a,.92,c+10,c+11,"#c9982c","#d4a63a",l)}if(s.phu_cam&&s.phu_cam.plan){let a=s.phu_cam,c=a.plan,l=a.base*fe,h={type:"landmark",key:"phu_cam",name:"Nh\xE0 th\u1EDD ch\xEDnh t\xF2a Ph\u1EE7 Cam"},d=c.u[0],u=c.u[1],g=-u,f=d,_=c.c[0],p=c.c[1],m=(L,W,D)=>new R(_+d*L+g*W,D,p+u*L+f*W),M=l+13,x=l+oo.roof,y=r("#e8d9ab"),C=r("#a3482f"),T=r("#8e8a82"),w=(L,W,D,Z,z)=>{let et=[m(L,-D,0),m(W,-D,0),m(W,D,0),m(L,D,0)];t.add([new Float32Array(et.flatMap(J=>[J.x,J.z]))],Z,z,h)},P=[c.s0+9.5,c.s1-3.5],O=c.nave_hw,v=[c.tr_s0??1.3,c.tr_s1??20],b=c.tr_hw;n.box(_+d*(P[0]+P[1])/2,p+u*(P[0]+P[1])/2,d,u,(P[1]-P[0])/2,O,l,M,y),n.box(_+d*(v[0]+v[1])/2,p+u*(v[0]+v[1])/2,d,u,(v[1]-v[0])/2,b,l,M,y),n.box(_+d*(P[1]+1.6),p+u*(P[1]+1.6),d,u,2,O*.62,l,M-2,y),w(P[0],P[1]+3.6,O+2.5,l,x),w(v[0],v[1],b+2.5,l,x),((L,W,D,Z)=>{let et=M-.6,J=(G,$,nt)=>m(G,$,nt),V=Z?[J(L,-D-2.5,et),J(W,-D-2.5,et),J(W,0,x),J(L,0,x),J(L,D+2.5,et),J(W,D+2.5,et)]:[J(L-2.5,-D,et),J(L-2.5,D,et),J((L+W)/2,D,x),J((L+W)/2,-D,x),J(W+2.5,-D,et),J(W+2.5,D,et)],ht=(G,$,nt,at)=>{let ut=new R().subVectors($,G).cross(new R().subVectors(nt,G)).normalize();(ut.y<0||Math.abs(ut.y)<.001&&!1)&&(ut.negate(),[$,nt]=[nt,$]);let bt=n.pos.length/3;for(let Ot of[G,$,nt])n.pos.push(Ot.x,Ot.y,Ot.z),n.nor.push(ut.x,ut.y,ut.z),n.col.push(at.r,at.g,at.b);n.idx.push(bt,bt+1,bt+2)};ht(V[0],V[1],V[2],C),ht(V[0],V[2],V[3],C),ht(V[4],V[3],V[2],C),ht(V[4],V[2],V[5],C);let Mt=G=>Z?[m(G,-D,M),m(G,D,M),m(G,0,x-.4)]:null;if(Z)for(let G of[L+2.5,W-.1]){let[$,nt,at]=Mt(G),ut=n.pos.length/3,bt=new R(-d,0,-u);for(let Ot of[$,nt,at])n.pos.push(Ot.x,Ot.y,Ot.z),n.nor.push(bt.x,bt.y,bt.z),n.col.push(y.r,y.g,y.b);n.idx.push(ut,ut+1,ut+2,ut,ut+2,ut+1)}})(P[0]-2.5,P[1]+2.5,O,!0);{let W=M-.6,D=(v[0]+v[1])/2,Z=(v[1]-v[0])/2,z=(J,V,ht)=>m(J,V,ht),et=(J,V,ht,Mt)=>{for(let[G,$,nt]of[[J,V,ht],[J,ht,Mt]]){let at=new R().subVectors($,G).cross(new R().subVectors(nt,G)).normalize(),ut=$,bt=nt;at.y<0&&(at.negate(),ut=nt,bt=$);let Ot=n.pos.length/3;for(let Yt of[G,ut,bt])n.pos.push(Yt.x,Yt.y,Yt.z),n.nor.push(at.x,at.y,at.z),n.col.push(C.r,C.g,C.b);n.idx.push(Ot,Ot+1,Ot+2)}};et(z(D-Z-2.5,-b-2.5,W),z(D-Z-2.5,b+2.5,W),z(D,b+2.5,x),z(D,-b-2.5,x)),et(z(D+Z+2.5,-b-2.5,W),z(D,-b-2.5,x),z(D,b+2.5,x),z(D+Z+2.5,b+2.5,W))}let N=r("#4b4038");for(let L=P[0]+3;L<P[1]-2;L+=4.6)if(!(L>v[0]-1&&L<v[1]+1))for(let W of[-1,1])n.box(_+d*L+g*W*(O+.05),p+u*L+f*W*(O+.05),d,u,.8,.08,l+3,l+10.5,N);for(let L of[-1,1]){let W=c.s0+4.9,D=L*(O+.2),Z=5,z=[[Z,0],[0,Z],[-Z,0],[0,-Z]].map(([ht,Mt])=>{let G=m(W+ht,D+Mt,0);return new pt(G.x,G.z)}),et=7;for(let ht=0;ht<et;ht++){let Mt=ht/et,G=(ht+1)/et,$=so(z,1-.32*Mt),nt=so(z,1-.32*G);n.extrude([$],l+oo.tower*Mt,l+oo.tower*G,T,T)}let J=l+oo.tower,V=m(W,D,J);n.box(V.x,V.z,d,u,.25,.25,J,J+4.2,r("#e8e4da")),n.box(V.x,V.z+0,g,f,1.3,.22,J+2.6,J+3.1,r("#e8e4da")),w(W-Z,W+Z,Math.abs(D)+Z,l,J+4.2)}}if(s.vincom){let a=s.vincom,c=a.base*fe,l=yi(a.ring),h={type:"landmark",key:"vincom",name:"Vincom Plaza Hu\u1EBF \xB7 Meli\xE1 Vinpearl Hu\u1EBF"},d=c+Vh.podium,u=c+Vh.top;o(l,1,c,d,"#d7d2c6","#8f969c",h);let g=new ns;for(let f of a.tower||[]){let _=yi(f);g.extrude([_],d,u-1.2,r("#ffffff"),r("#c9ced3")),g.extrude([so(_,.97)],u-1.2,u,r("#aab0b6"),r("#b9bec4"));let p=new Float32Array(_.length*2);_.forEach((m,M)=>{p[M*2]=m.x,p[M*2+1]=m.y}),t.add([p],d,u,h)}if((a.tower||[]).length){let f=new Fe({vertexColors:!0,side:vn,shadowSide:Re});f.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW; varying vec3 vTN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz; vTN = normal;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW; varying vec3 vTN;`).replace("#include <color_fragment>",`#include <color_fragment>
            if (abs(vTN.y) < 0.5 && diffuseColor.r > 0.7) {   // tower walls (vertex colour 0.78..1); the crown is darker
              float f = fract((vTW.y - ${d.toFixed(2)}) / 3.3);
              float mull = step(0.93, fract((vTW.x + vTW.z) / 1.6));
              vec3 glass = mix(vec3(0.24, 0.33, 0.40), vec3(0.42, 0.52, 0.60), clamp(0.5 + 0.5 * vTN.x, 0.0, 1.0));
              diffuseColor.rgb = mix(glass, vec3(0.86, 0.87, 0.86), max(step(0.86, f), mull * 0.6));
            }`)};let _=g.mesh(f);_.name="vincom-tower",e.add(_)}}return e.add(n.mesh()),e}var oo={tower:43.5,roof:32},Vh={podium:22.5,top:22.5+28*3.3+1};function eu(i){let t=i.x.length,e=new Pe;e.name="trees";let n=new kr(1,1),s=new An(.16,.24,1,5);{let h=n.attributes.position;for(let d=0;d<h.count;d++){let u=h.getX(d),g=h.getY(d),f=h.getZ(d),p=.86+.28*(((Math.round(u*1e3)*73856093^Math.round(g*1e3)*19349663^Math.round(f*1e3)*83492791)>>>0)%1e3)/1e3;h.setXYZ(d,u*p,g*p,f*p)}n.computeVertexNormals()}let r=new Qn(n,new Fe({flatShading:!0}),t);r.castShadow=!0,r.receiveShadow=!0;let o=new Qn(s,new Fe({color:"#6b5544"}),t),a=new ee,c=new Ge,l=new Tt;for(let h=0;h<t;h++){let d=i.x[h]*fe,u=i.z[h]*fe,g=i.y[h]*fe,f=i.h[h]*fe,_=(h+1)*2654435761>>>0,p=f*(.26+_%100/700);c.setFromAxisAngle(new R(0,1,0),_%628/100),a.compose(new R(d,g+f*.66,u),c,new R(p,f*.36,p)),r.setMatrixAt(h,a),a.compose(new R(d,g+f*.2,u),c,new R(1,f*.42,1)),o.setMatrixAt(h,a),l.setHSL(.27+(_>>>8)%100/1400,.38+(_>>>16)%100/500,.26+(_>>>4)%100/900),r.setColorAt(h,l)}return r.instanceColor.needsUpdate=!0,e.add(r,o),e}var ni=2600,co=class{constructor(t){this.pos=new Float32Array(ni*3),this.vel=new Float32Array(ni*3),this.life=new Float32Array(ni),this.ttl=new Float32Array(ni),this.size=new Float32Array(ni),this.alpha=new Float32Array(ni),this.next=0;let e=new de;e.setAttribute("position",new ne(this.pos,3)),e.setAttribute("aSize",new ne(this.size,1)),e.setAttribute("aAlpha",new ne(this.alpha,1)),e.boundingSphere=new yn(new R,1e5),this.points=new Or(e,new We({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:`attribute float aSize, aAlpha; varying float vA; uniform float uScale;
        void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = min(aSize * uScale / max(-mv.z, 0.5), 40.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
        gl_FragColor = vec4(0.93, 0.97, 1.0, vA * smoothstep(0.25, 0.02, d)); }`})),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.rings=[];let n=new Hr(.86,1,40);n.rotateX(-Math.PI/2);for(let s=0;s<28;s++){let r=new Xt(n,new Ke({color:"#eaf6f7",transparent:!0,opacity:0,depthWrite:!1}));r.visible=!1,r.renderOrder=4,t.add(r),this.rings.push({mesh:r,age:0,ttl:0,grow:0})}this.ringIdx=0,this.ringClock=0}emit(t,e,n,s,r,o,a,c){let l=this.next;this.next=(this.next+1)%ni,this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=n,this.vel[l*3]=s,this.vel[l*3+1]=r,this.vel[l*3+2]=o,this.life[l]=a,this.ttl[l]=a,this.size[l]=c}ripple(t,e,n,s,r,o){let a=this.rings[this.ringIdx];this.ringIdx=(this.ringIdx+1)%this.rings.length,a.mesh.position.set(t,e+.04,n),a.mesh.scale.setScalar(s),a.mesh.visible=!0,a.age=0,a.ttl=o,a.grow=r}wash(t,e,n,s,r,o,a){let c=Math.floor(s*260*r+Math.random());for(let l=0;l<c;l++){let h=Math.random()*Math.PI*2,d=.5+Math.random()*1.3,u=2.5+Math.random()*4.5*s;this.emit(t+Math.cos(h)*d,e+.05,n+Math.sin(h)*d,Math.cos(h)*u+o*.25,1.2+Math.random()*3.2*s,Math.sin(h)*u+a*.25,.5+Math.random()*.6,.16+Math.random()*.2)}this.ringClock+=r,this.ringClock>.22&&(this.ringClock=0,this.ripple(t,e,n,1.2,5+4*s,1.3))}splash(t,e,n,s){let r=Math.floor(160+160*s);for(let o=0;o<r;o++){let a=Math.random()*Math.PI*2,c=1.5+Math.random()*6*(.5+s),l=4+Math.random()*9*(.5+s);this.emit(t+Math.cos(a)*.5,e+.1,n+Math.sin(a)*.5,Math.cos(a)*c,l,Math.sin(a)*c,.8+Math.random()*.9,.22+Math.random()*.3)}for(let o=0;o<3;o++)this.ripple(t,e,n,.8+o*.9,7+o*2,1.6+o*.4)}update(t){for(let n=0;n<ni;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t,this.vel[n*3+1]-=9.81*t;let s=Math.exp(-1.4*t);this.vel[n*3]*=s,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.alpha[n]=Math.max(0,Math.min(1,this.life[n]/this.ttl[n]))*.85}let e=this.points.geometry;e.attributes.position.needsUpdate=!0,e.attributes.aAlpha.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0;for(let n of this.rings)if(n.mesh.visible){if(n.age+=t,n.age>=n.ttl){n.mesh.visible=!1;continue}n.mesh.scale.setScalar(n.mesh.scale.x+n.grow*t),n.mesh.material.opacity=.55*(1-n.age/n.ttl)}}};var lo=.9;function v_(){let i=new Pe,t=new Fe({color:"#2a2630"}),e=new Fe({color:"#e9b949"}),n=new Xt(new ke(.5,.2,.9),t);i.add(n);let s=new Xt(new ke(.34,.14,.24),e);s.position.set(0,0,-.5),i.add(s);let r=[];for(let[a,c]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let l=new Xt(new ke(.08,.06,1),t);l.position.set(a*.36,0,c*.36),l.rotation.y=Math.atan2(a,c),i.add(l);let h=new Xt(new An(.07,.07,.14,8),t);h.position.set(a*.72,.08,c*.72),i.add(h);let d=new Xt(new An(.42,.42,.015,20),new Ke({color:"#d9dde4",transparent:!0,opacity:.32,depthWrite:!1}));d.position.set(a*.72,.17,c*.72),i.add(d);let u=new Xt(new ke(.8,.012,.06),t);u.position.copy(d.position),i.add(u),r.push(u)}for(let a of[-1,1]){let c=new Xt(new ke(.05,.05,.8),t);c.position.set(a*.25,-.2,0),i.add(c)}let o=new Xt(new _i(.06,8,6),new Ke({color:"#ff4a3d"}));return o.position.set(0,.03,.47),i.add(o),i.scale.setScalar(1.5),i.userData.rotors=r,i}var nu={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",KeyD:"right",KeyQ:"yawL",ArrowLeft:"yawL",KeyE:"yawR",ArrowRight:"yawR",Space:"up",KeyR:"up",PageUp:"up",ShiftLeft:"down",ShiftRight:"down",KeyF:"down",PageDown:"down"},iu={w:"fwd",\u01B0:"fwd",s:"back",a:"left",\u0103:"left",\u00E2:"left",d:"right",\u0111:"right",q:"yawL",e:"yawR",\u00EA:"yawR"," ":"up",r:"up",f:"down",shift:"down",arrowup:"fwd",arrowdown:"back",arrowleft:"yawL",arrowright:"yawR"},y_={fwd:"Ti\u1EBFn",back:"L\xF9i",left:"Sang tr\xE1i",right:"Sang ph\u1EA3i",yawL:"Xoay tr\xE1i",yawR:"Xoay ph\u1EA3i",up:"L\xEAn",down:"Xu\u1ED1ng"};function M_(i){return i?i.isContentEditable||i.tagName==="TEXTAREA"?!0:i.tagName==="INPUT"&&!/^(radio|checkbox|button|range|submit|reset)$/i.test(i.type):!1}var ho=class{constructor(){this.held=new Map,this.active=!1,this.last="",this.lastKey="",this.lastAt=0,this.left={x:0,y:0},this.right={x:0,y:0};let t=600,e=30;window.addEventListener("keydown",n=>{if(n.metaKey||n.ctrlKey||n.altKey||M_(n.target))return;let s=nu[n.code]||iu[(n.key||"").toLowerCase()];if(!s)return;let r=n.code||`key:${n.key}`,o=performance.now(),a=this.held.get(r);!a||a.released?this.held.set(r,{action:s,since:o,expires:1/0,released:!1}):a.expires=1/0,this.last=y_[s],this.lastKey=n.key===" "?"Space":n.key||n.code,this.lastAt=o,this.active&&n.preventDefault()},!0),window.addEventListener("keyup",n=>{let s=n.code||`key:${n.key}`,r=performance.now(),o=this.held.get(s);if(o&&(o.released=!0,o.expires=r-o.since<e?r+t:r),!n.code)for(let a of this.held.values())!a.released&&a.since<r-1e3&&(a.released=!0,a.expires=r);this.active&&(nu[n.code]||iu[(n.key||"").toLowerCase()])&&n.preventDefault()},!0),window.addEventListener("blur",()=>this.held.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.held.clear()})}read(){let t=performance.now(),e=new Set;for(let[o,a]of this.held)a.expires<=t?this.held.delete(o):e.add(a.action);let n=o=>Math.max(-1,Math.min(1,o)),s=(o,a)=>(e.has(a)?1:0)-(e.has(o)?1:0),r=o=>{let a=Math.abs(o);return a<.15?0:Math.sign(o)*((a-.15)/.85)**2};return{forward:n(s("back","fwd")-r(this.right.y)),strafe:n(s("left","right")+r(this.right.x)),up:n(s("down","up")-r(this.left.y)),yaw:n(s("yawR","yawL")-r(this.left.x))}}},uo=class{constructor(t,e){this.world=t,this.fx=e,this.model=v_(),this.pos=new R,this.vel=new R,this.yaw=0,this.tilt={pitch:0,roll:0},this.yawRate=0,this.yawMax=.6,this.auto=null,this.touches=0,this.crashes=0,this.cooldown=0,this.flash=0,this.lastHit="",this.status={agl:0,overWater:!1,clearanceUp:NaN}}place(t,e,n,s=0){this.pos.set(t,e,n),this.vel.set(0,0,0),this.yaw=s,this.yawRate=0,this.auto=null,this.sync()}sync(){this.model.position.copy(this.pos),this.model.rotation.set(0,0,0),this.model.rotateY(this.yaw),this.model.rotateX(this.tilt.pitch),this.model.rotateZ(this.tilt.roll)}startAuto(t,e){let n=new ti(t,!1,"centripetal");this.auto={curve:n,length:n.getLength(),s:0,speed:e},this.pos.copy(t[0]),this.vel.set(0,0,0)}collides(t,e,n){let s=this.world.terrain;if(e-lo*.6<s.height(t,n))return"m\u1EB7t \u0111\u1EA5t";let r=this.world.solids.hit(t,e,n,lo);if(r)return r.info.type==="wall"?"t\u01B0\u1EDDng th\xE0nh":r.info.name||"c\xF4ng tr\xECnh";let o=$h(this.world.bridgeCol,t,e,n,lo);if(o)return o==="pier"?"tr\u1EE5 c\u1EA7u":"m\u1EB7t c\u1EA7u";let a=this.world.traffic&&this.world.traffic.enabled?this.world.traffic.hit(t,e,n,lo):null;return a?`${a.spec.name.toLowerCase()} (m\xF4 ph\u1ECFng)`:null}update(t,e,n){let s=this.world.terrain,r=this.pos.clone();if(this.cooldown=Math.max(0,this.cooldown-t),this.flash=Math.max(0,this.flash-t),this.auto){let u=this.auto,g=u.curve.getPointAt(Math.min(1,u.s/u.length)),f=s.waterLevel(g.x,g.z),_=!Number.isNaN(f)&&g.y-f<6;u.s+=(_?u.speed*.6:u.speed)*t;let p=Math.min(1,u.s/u.length),m=u.curve.getPointAt(p),M=u.curve.getTangentAt(p);this.vel.subVectors(m,this.pos).divideScalar(Math.max(t,.001)),this.pos.copy(m);let y=Math.atan2(-M.x,-M.z)-this.yaw;y=Math.atan2(Math.sin(y),Math.cos(y)),this.yaw+=y*Math.min(1,t*4),this.tilt.roll+=(Te.clamp(-y*2.2,-.5,.5)-this.tilt.roll)*Math.min(1,t*5),this.tilt.pitch+=(-.16-this.tilt.pitch)*Math.min(1,t*4),p>=1&&(this.auto=null,this.vel.set(0,0,0),this.onAutoEnd&&this.onAutoEnd())}else{let u=e;this.yawRate+=(u.yaw*this.yawMax-this.yawRate)*Math.min(1,t*3.5),this.yaw+=this.yawRate*t;let g=Math.sin(this.yaw),f=Math.cos(this.yaw),_=(-g*u.forward+f*u.strafe)*16,p=(-f*u.forward-g*u.strafe)*16;this.vel.x+=_*t,this.vel.z+=p*t,this.vel.y+=u.up*13*t;let m=Math.exp(-.9*t),M=Math.exp(-2.2*t);this.vel.x*=m,this.vel.z*=m,this.vel.y*=M;let x=Math.hypot(this.vel.x,this.vel.z),y=26;x>y&&(this.vel.x*=y/x,this.vel.z*=y/x),this.pos.addScaledVector(this.vel,t),this.pos.x=Te.clamp(this.pos.x,n.xmin+20,n.xmax-20),this.pos.z=Te.clamp(this.pos.z,n.zmin+20,n.zmax-20),this.pos.y=Math.min(this.pos.y,450);let C=-(this.vel.x*g+this.vel.z*f),T=this.vel.x*f-this.vel.z*g;this.tilt.pitch+=(Te.clamp(-C*.02,-.45,.45)-this.tilt.pitch)*Math.min(1,t*6),this.tilt.roll+=(Te.clamp(-T*.02,-.45,.45)-this.tilt.roll)*Math.min(1,t*6);let w=this.collides(this.pos.x,this.pos.y,this.pos.z);w&&(this.pos.copy(r),this.vel.multiplyScalar(-.25),this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos.y+=1.5),this.cooldown<=0&&(this.crashes++,this.cooldown=.6),this.flash=.7,this.lastHit=w)}let o=s.waterLevel(this.pos.x,this.pos.z),a=s.height(this.pos.x,this.pos.z),c=!Number.isNaN(o),l=c?o:a,h=this.pos.y-l;c&&(h<3.2&&this.fx.wash(this.pos.x,o,this.pos.z,1-Math.max(0,h-.3)/2.9,t,this.vel.x,this.vel.z),h<.45&&((this.cooldown<=0||this.vel.y<-1)&&(this.fx.splash(this.pos.x,o,this.pos.z,Math.min(1,Math.abs(this.vel.y)/8+Math.hypot(this.vel.x,this.vel.z)/30)),this.cooldown<=0&&(this.touches++,this.cooldown=.7)),this.auto||(this.pos.y=o+.45,this.vel.y=Math.max(2.2,-this.vel.y*.5))));let d=NaN;for(let u of this.world.bridgeCol.decks){if(u.yBot<this.pos.y)continue;let g=u.bx-u.ax,f=u.bz-u.az,_=g*g+f*f,p=((this.pos.x-u.ax)*g+(this.pos.z-u.az)*f)/_;if(p<0||p>1)continue;let m=u.ax+g*p-this.pos.x,M=u.az+f*p-this.pos.z;m*m+M*M<u.halfW*u.halfW&&(Number.isNaN(d)||u.yBot-this.pos.y<d)&&(d=u.yBot-this.pos.y)}this.status={agl:h,overWater:c,clearanceUp:d,speed:this.vel.length()};for(let u of this.model.userData.rotors)u.rotation.y+=t*55;this.sync()}};function su(i,t){let{ax:e,az:n,ux:s,uz:r,vx:o,vz:a,S:c,water:l}=i,h=(g,f,_,p)=>new R(e+s*(c*(g-.5)+f)+o*_,l+p,n+r*(c*(g-.5)+f)+a*_),d=g=>{let f=0;for(let _=60;_<=420;_+=30){let p=h(3,0,g*_,0);Number.isNaN(t.waterLevel(p.x,p.z))||f++}return f},u=d(1)>=d(-1)?1:-1;return[h(3,-10,u*330,42),h(3,-6,u*230,20),h(3,-2,u*150,5.5),h(3,0,u*95,1.1),h(3,0,u*62,.3),h(3,0,u*40,1.3),h(3,0,u*28,2.2),h(3,0,0,2.6),h(3,0,-u*30,2.4),h(3,14,-u*75,3.2),h(3.5,20,-u*115,5),h(4,10,-u*95,3.4),h(4,0,-u*45,2.4),h(4,0,0,2.5),h(4,0,u*40,2.3),h(4,6,u*95,1.2),h(4,16,u*150,6),h(4.3,40,u*230,24),h(4.5,70,u*300,46)]}var ru="hue3d.sound";function b_(){try{return window.localStorage.getItem(ru)!=="off"}catch{return!0}}function S_(i){try{window.localStorage.setItem(ru,i?"on":"off")}catch{}}function E_(i,t=2){let e=Math.floor(i.sampleRate*t),n=i.createBuffer(1,e,i.sampleRate),s=n.getChannelData(0),r=1234567;for(let o=0;o<e;o++)r=r*1103515245+12345&2147483647,s[o]=r/1073741823-1;return n}function w_(i,t){let e=i.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=12,e.ratio.value=4,e.attack.value=.005,e.release.value=.2,e.connect(t);let n=i.createGain();n.gain.value=0,n.connect(e);let s=[1,1.017,.986,1.031],r=i.createBiquadFilter();r.type="lowpass",r.Q.value=.9,r.frequency.value=1400;let o=i.createGain();o.gain.value=.16,r.connect(o),o.connect(n);let a=s.map(O=>{let v=i.createOscillator();v.type="sawtooth",v.frequency.value=190*O;let b=i.createGain();return b.gain.value=.25,v.connect(b),b.connect(r),v.start(),{o:v,r:O}}),c=i.createOscillator();c.type="triangle",c.frequency.value=380;let l=i.createGain();l.gain.value=.035,c.connect(l),l.connect(n),c.start();let h=E_(i),d=()=>{let O=i.createBufferSource();return O.buffer=h,O.loop=!0,O.start(),O},u=d(),g=i.createBiquadFilter();g.type="bandpass",g.Q.value=.55,g.frequency.value=900;let f=i.createGain();f.gain.value=.08,u.connect(g),g.connect(f),f.connect(n);let _=d(),p=i.createBiquadFilter();p.type="highpass",p.frequency.value=1900;let m=i.createGain();m.gain.value=0,_.connect(p),p.connect(m),m.connect(n);let M=d(),x=i.createBiquadFilter();x.type="lowpass",x.frequency.value=520;let y=i.createGain();y.gain.value=0,M.connect(x),x.connect(y),y.connect(e);let C=i.createOscillator();C.type="sawtooth",C.frequency.value=62;let T=i.createBiquadFilter();T.type="lowpass",T.frequency.value=240;let w=i.createGain();w.gain.value=0,C.connect(T),T.connect(w),w.connect(e),C.start();let P=.06;return{master:n,set(O,v,b,F=i.currentTime){let N=120+170*O;for(let L of a)L.o.frequency.setTargetAtTime(N*L.r,F,P);c.frequency.setTargetAtTime(N*2.02,F,P),r.frequency.setTargetAtTime(700+2600*O,F,P),o.gain.setTargetAtTime(.1+.12*O,F,P),l.gain.setTargetAtTime(.015+.05*O,F,P),g.frequency.setTargetAtTime(600+1500*O,F,P),f.gain.setTargetAtTime(.04+.11*O+.08*b,F,P),m.gain.setTargetAtTime(.32*b,F,.08),n.gain.setTargetAtTime(v,F,.12)},street(O,v=i.currentTime){y.gain.setTargetAtTime(.11*O,v,.4),w.gain.setTargetAtTime(.025*O,v,.4),C.frequency.setTargetAtTime(55+25*O+6*Math.random(),v,.5)},horn(O,v=i.currentTime){let b=380+Math.random()*260,F=.12+Math.random()*.22,N=Math.random()<.4?2:1;for(let L=0;L<N;L++){let W=v+L*(F+.07),D=i.createGain();D.gain.setValueAtTime(1e-4,W),D.gain.exponentialRampToValueAtTime(.05*O,W+.015),D.gain.setValueAtTime(.05*O,W+F),D.gain.exponentialRampToValueAtTime(1e-4,W+F+.05);let Z=i.createBiquadFilter();Z.type="lowpass",Z.frequency.value=2200,Z.connect(D),D.connect(e);for(let z of[b,b*1.26]){let et=i.createOscillator();et.type="square",et.frequency.value=z,et.connect(Z),et.start(W),et.stop(W+F+.08)}}},splash(O=.6,v=i.currentTime){let b=i.createBufferSource();b.buffer=h;let F=i.createBiquadFilter();F.type="lowpass",F.frequency.setValueAtTime(3800,v),F.frequency.exponentialRampToValueAtTime(500,v+.7);let N=i.createGain();N.gain.setValueAtTime(1e-4,v),N.gain.exponentialRampToValueAtTime(.5+.5*O,v+.02),N.gain.exponentialRampToValueAtTime(1e-4,v+.85),b.connect(F),F.connect(N),N.connect(e),b.start(v,Math.random()),b.stop(v+.9)},thud(O=i.currentTime){let v=i.createOscillator();v.type="sine",v.frequency.setValueAtTime(110,O),v.frequency.exponentialRampToValueAtTime(38,O+.25);let b=i.createGain();b.gain.setValueAtTime(1e-4,O),b.gain.exponentialRampToValueAtTime(.9,O+.01),b.gain.exponentialRampToValueAtTime(1e-4,O+.35),v.connect(b),b.connect(e),v.start(O),v.stop(O+.4);let F=i.createBufferSource();F.buffer=h;let N=i.createBiquadFilter();N.type="lowpass",N.frequency.value=700;let L=i.createGain();L.gain.setValueAtTime(.5,O),L.gain.exponentialRampToValueAtTime(1e-4,O+.18),F.connect(N),N.connect(L),L.connect(e),F.start(O,Math.random()),F.stop(O+.2)}}}var fo=class{constructor(){this.enabled=b_(),this.ctx=null,this.graph=null,this.load=.45,this.active=!1,this.lastTouches=0,this.lastCrashes=0,this.idleTimer=0,document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.active&&this.enabled&&this.ctx.resume())})}ensure(){if(this.enabled){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.graph=w_(this.ctx,this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}}setEnabled(t){this.enabled=t,S_(t),t?this.ensure():this.graph&&(this.graph.master.gain.setTargetAtTime(0,this.ctx.currentTime,.05),setTimeout(()=>{!this.enabled&&this.ctx&&this.ctx.suspend()},300))}update(t,{active:e,loadTarget:n,wash:s,camDist:r,touches:o,crashes:a,street:c=0}){if(this.active=e,this.load+=(n-this.load)*Math.min(1,t*6),!this.ctx||!this.enabled){this.lastTouches=o,this.lastCrashes=a;return}e&&this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume();let l=e?Math.max(.05,Math.min(1.25,14/Math.max(r,1))):0;this.graph.set(this.load,l,s),this.graph.street(e?c:0),e&&c>.05&&Math.random()<t*.9*c&&this.graph.horn(Math.min(1,c*1.4)),e&&o>this.lastTouches&&this.graph.splash(.7),e&&a>this.lastCrashes&&this.graph.thud(),this.lastTouches=o,this.lastCrashes=a,!e&&this.ctx.state==="running"?(this.idleTimer+=t,this.idleTimer>1.2&&this.ctx.suspend()):this.idleTimer=0}};var ou=.32,T_=8,A_=15,R_=3,C_=4;function xe(i,t){return i.route_points&&i.route_points[t]||i.places&&i.places[t]||null}function au(i){let t=(f,_)=>{let p=_.x-f.x,m=_.z-f.z,M=Math.hypot(p,m)||1;return[p/M,m/M]},e=(f,_,p)=>({x:f.x+_[0]*p,z:f.z+_[1]*p}),n=(f,_,p)=>({x:f.x+(_.x-f.x)*p,z:f.z+(_.z-f.z)*p}),s=[],r=xe(i,"mid_da_vien"),o=xe(i,"mid_nguyen_hoang"),a=xe(i,"mid_phu_xuan"),c=xe(i,"mid_truong_tien"),l=xe(i,"con_hen");if(r&&a&&c&&l){let f=o?t(r,o):t(a,r);s.push({id:"river",name:"D\u1ECDc s\xF4ng H\u01B0\u01A1ng",color:"#b58cf2",speed:28,desc:"T\u1EEB c\u1EA7u D\xE3 Vi\xEAn xu\xF4i d\xF2ng qua c\u1EA7u Ph\xFA Xu\xE2n, c\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n t\u1EDBi C\u1ED3n H\u1EBFn; c\xF3 \u0111o\u1EA1n l\u01B0\u1EDBt s\xE1t m\u1EB7t n\u01B0\u1EDBc.",steps:[{at:e(r,f,320),h:36},{at:r,h:24,label:"C\u1EA7u D\xE3 Vi\xEAn"},{at:n(r,a,.25),h:7,river:!0},{at:n(r,a,.5),h:3.5,river:!0,label:"L\u01B0\u1EDBt s\xE1t m\u1EB7t s\xF4ng"},{at:n(r,a,.75),h:5,river:!0},{at:a,h:20,label:"C\u1EA7u Ph\xFA Xu\xE2n"},{at:n(a,c,.5),h:4,river:!0},{at:c,h:26,label:"C\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n"},{at:n(c,l,.35),h:6,river:!0},{at:n(c,l,.7),h:9,river:!0},{at:l,h:30,label:"C\u1ED3n H\u1EBFn"},{at:e(l,t(c,l),260),h:110}]})}let h=xe(i,"ky_dai"),d=xe(i,"nghenh_luong");if(h&&d&&["phu_van_lau","ngo_mon","thai_hoa","tu_cam_thanh","kien_trung","duyet_thi","cua_hien_nhon","cua_dong_ba"].every(f=>xe(i,f))){let f=xe(i,"phu_van_lau"),_=xe(i,"ngo_mon"),p=Math.atan2(f.z-h.z,f.x-h.x),M=((Math.atan2(_.z-h.z,_.x-h.x)-p)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);M<Math.PI&&(M+=2*Math.PI);let x=[],y=Math.ceil(M/(Math.PI/6));for(let w=0;w<=y;w++){let P=p+M*(w/y);x.push({at:{x:h.x+Math.cos(P)*95,z:h.z+Math.sin(P)*95},h:48,label:w===0?"K\u1EF3 \u0110\xE0i (bay v\xF2ng quanh c\u1ED9t c\u1EDD)":void 0})}let C=xe(i,"cua_dong_ba"),T=xe(i,"cua_hien_nhon");s.push({id:"citadel",name:"Kinh th\xE0nh \u2013 \u0110\u1EA1i N\u1ED9i",color:"#e1b54a",speed:22,desc:"Ngh\xEAnh L\u01B0\u01A1ng \u0110\xECnh, Phu V\u0103n L\xE2u, bay v\xF2ng K\u1EF3 \u0110\xE0i, r\u1ED3i theo tr\u1EE5c Ng\u1ECD M\xF4n \u2013 \u0110i\u1EC7n Th\xE1i H\xF2a \u2013 T\u1EED C\u1EA5m Th\xE0nh, ra C\u1EEDa \u0110\xF4ng Ba.",steps:[{at:e(d,t(h,d),230),h:10},{at:d,h:14,label:"Ngh\xEAnh L\u01B0\u01A1ng \u0110\xECnh"},{at:f,h:20,label:"Phu V\u0103n L\xE2u"},...x,{at:_,h:30,label:"Ng\u1ECD M\xF4n"},{at:xe(i,"thai_hoa"),h:28,label:"\u0110i\u1EC7n Th\xE1i H\xF2a"},{at:xe(i,"tu_cam_thanh"),h:26,label:"T\u1EED C\u1EA5m Th\xE0nh"},{at:xe(i,"kien_trung"),h:24,label:"\u0110i\u1EC7n Ki\u1EBFn Trung"},{at:xe(i,"duyet_thi"),h:24,label:"Duy\u1EC7t Th\u1ECB \u0110\u01B0\u1EDDng"},{at:T,h:26,label:"C\u1EEDa Hi\u1EC3n Nh\u01A1n"},{at:C,h:30,label:"C\u1EEDa \u0110\xF4ng Ba"},{at:e(C,t(T,C),260),h:120}]})}if(["ga_hue","quoc_hoc","phu_cam","vincom","cong_vien_3_2","cho_dong_ba","cau_gia_hoi"].every(f=>xe(i,f))){let f=xe(i,"ga_hue"),_=xe(i,"quoc_hoc"),p=xe(i,"cau_gia_hoi"),m=xe(i,"cho_dong_ba");s.push({id:"city",name:"Ph\u1ED1 hai b\u1EDD",color:"#e0785f",speed:30,desc:"Ga Hu\u1EBF, Tr\u01B0\u1EDDng Qu\u1ED1c H\u1ECDc, Nh\xE0 th\u1EDD Ph\u1EE7 Cam, Vincom, c\xF4ng vi\xEAn ven s\xF4ng, qua s\xF4ng t\u1EDBi Ch\u1EE3 \u0110\xF4ng Ba v\xE0 C\u1EA7u Gia H\u1ED9i.",steps:[{at:e(f,t(_,f),240),h:30},{at:f,h:34,label:"Ga Hu\u1EBF"},{at:_,h:32,label:"Tr\u01B0\u1EDDng Qu\u1ED1c H\u1ECDc"},{at:xe(i,"phu_cam"),h:40,label:"Nh\xE0 th\u1EDD Ph\u1EE7 Cam"},{at:xe(i,"vincom"),h:46,label:"Vincom Plaza Hu\u1EBF"},{at:xe(i,"cong_vien_3_2"),h:22,label:"C\xF4ng vi\xEAn 3 Th\xE1ng 2"},{at:m,h:30,label:"Ch\u1EE3 \u0110\xF4ng Ba"},{at:p,h:22,label:"C\u1EA7u Gia H\u1ED9i"},{at:e(p,t(m,p),280),h:110}]})}return s}function P_(i,t){let{solids:e,terrain:n,bridgeCol:s,tt:r}=i,o=[[0,0]];for(let c=0;c<8;c++)o.push([Math.cos(c*Math.PI/4)*12,Math.sin(c*Math.PI/4)*12]);let a=t.places&&t.places.ky_dai;return(c,l)=>{let h=-1/0;for(let[f,_]of o){let p=e.pick(c+f,l+_);p&&p.y1>h&&(h=p.y1)}for(let f of s.decks){let _=f.bx-f.ax,p=f.bz-f.az,m=_*_+p*p||1,M=((c-f.ax)*_+(l-f.az)*p)/m;M=Math.max(0,Math.min(1,M)),Math.hypot(f.ax+_*M-c,f.az+p*M-l)<f.halfW+12&&f.yTop>h&&(h=f.yTop)}if(r){let f=(c-r.ax)*r.ux+(l-r.az)*r.uz,_=Math.abs((c-r.ax)*r.vx+(l-r.az)*r.vz);f>-10&&f<r.L+10&&_<16&&(h=Math.max(h,r.deckY+9.5))}a&&Math.hypot(c-a.x,l-a.z)<14&&(h=Math.max(h,(a.ground||0)+17.5+37+1));let d=n.waterLevel(c,l),u=n.height(c,l);return{surf:Number.isNaN(d)?u:d,wet:!Number.isNaN(d),top:h}}}function I_(i,t,e){let n=null,s=-1/0,r=(o,a)=>!Number.isNaN(i.waterLevel(o,a));for(let o=-300;o<=300;o+=12)for(let a=-300;a<=300;a+=12){let c=t+o,l=e+a;if(!r(c,l))continue;let h=150;for(let u=0;u<8&&h>0;u++){let g=Math.cos(u*Math.PI/4),f=Math.sin(u*Math.PI/4);for(let _=10;_<h;_+=10)if(!r(c+g*_,l+f*_)){h=_;break}}let d=h-.35*Math.hypot(o,a);d>s&&(s=d,n={x:c,z:l})}return n||{x:t,z:e}}function cu(i,t,e){let n=t.terrain,s=P_(t,e),r=i.steps.map(f=>{let _=f.river?I_(n,f.at.x,f.at.z):f.at,p=s(_.x,_.z);return{x:_.x,z:_.z,y:p.surf+f.h,label:f.label}}),o=new ti(r.map(f=>new R(f.x,f.y,f.z)),!1,"centripetal"),a=Math.max(20,Math.ceil(o.getLength()/C_)),c=o.getSpacedPoints(a),l=c.map(f=>{let _=s(f.x,f.z);return Math.max(_.surf+(_.wet?R_:A_),_.top+T_)}),h=o.getLength()/a,d=c.map((f,_)=>Math.max(f.y,l[_])),u=()=>{for(let f=a-1;f>=0;f--)f<a&&(d[f]=Math.max(d[f],d[f+1]-ou*h));for(let f=1;f<=a;f++)d[f]=Math.max(d[f],d[f-1]-ou*h)};u();for(let f=0;f<4;f++)d=d.map((_,p)=>p===0||p===a?_:.25*d[p-1]+.5*_+.25*d[p+1]),d=d.map((_,p)=>Math.max(_,l[p])),u();let g=[];for(let f=0;f<=a;f+=3)g.push(new R(c[f].x,d[f],c[f].z));return g[g.length-1].distanceTo(c[a])>1&&g.push(new R(c[a].x,d[a],c[a].z)),lu(i,g,r)}function lu(i,t,e){let n=new ti(t,!1,"centripetal"),s=n.getLength(),r=n.getSpacedPoints(Math.ceil(s/10)),o=[];for(let c of e){if(!c.label)continue;let l=0,h=1/0;r.forEach((d,u)=>{let g=Math.hypot(d.x-c.x,d.z-c.z);g<h&&(h=g,l=u)}),o.push({name:c.label,u:l/(r.length-1),x:c.x,z:c.z,y:r[l].y})}o.sort((c,l)=>c.u-l.u);let a=0;for(let c=1;c<r.length;c++)a+=r[c].distanceTo(r[c-1])/i.speed;return{...i,points:t,curve:n,length:s,labels:o,seconds:a,minY:Math.min(...r.map(c=>c.y)),maxY:Math.max(...r.map(c=>c.y))}}function hu(i,t){let e=su(i,t),n={id:"under",name:"Lu\u1ED3n d\u01B0\u1EDBi c\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n",color:"#9fd27f",speed:17,desc:"H\u1EA1 s\xE1t m\u1EB7t s\xF4ng, ch\u1EA1m n\u01B0\u1EDBc, lu\u1ED3n qua nh\u1ECBp 3 r\u1ED3i v\xF2ng l\u1EA1i qua nh\u1ECBp 4."},s={x:i.ax+i.ux*i.S*3,z:i.az+i.uz*i.S*3};return lu(n,e,[{...s,label:"G\u1EA7m c\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n \u2013 nh\u1ECBp 3"},{x:i.ax+i.ux*i.S*3.5,z:i.az+i.uz*i.S*3.5,label:"G\u1EA7m c\u1EA7u \u2013 nh\u1ECBp 4"}])}function uu(i){let t=new Pe;t.name=`route-${i.id}`;let e=new Xt(new Vr(i.curve,Math.max(40,Math.ceil(i.length/8)),11,8,!1),new Ke({color:i.color,transparent:!0,opacity:.85,depthWrite:!1}));e.renderOrder=3,t.add(e);let n=new Nr(new de().setFromPoints(i.curve.getSpacedPoints(Math.ceil(i.length/10))),new ws({color:i.color,transparent:!0,opacity:.9,depthTest:!1}));n.renderOrder=6,t.add(n);let s=new Pe,r=new _i(13,16,12);for(let o of i.labels){let a=new Xt(r,new Ke({color:i.color}));a.position.set(o.x,o.y,o.z),s.add(a);let c=new Xt(new An(1.4,1.4,1,6),new Ke({color:i.color,transparent:!0,opacity:.55}));c.scale.y=Math.max(1,o.y-2),c.position.set(o.x,o.y/2+1,o.z),s.add(c)}return t.add(s),t.userData={tube:e,line:n,beads:s},t}function is(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new de,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g])}if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let g=i[u].index;for(let f=0;f<g.count;++f)d.push(g.getX(f)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=du(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let g=[];for(let _=0;_<o[h].length;++_)g.push(o[h][_][u]);let f=du(g);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}return c}function du(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ne(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,g=h.count;u<g;u++)for(let f=0;f<e;f++){let _=h.getComponent(u,f);a.setComponent(u+d,f,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Zc=.1,L_=[.34,.28,.22,.16],D_=[1,.75,.5,.4],fu=[1,.45,.12,0],pu=[.5,.6,.25,1],$c={moto:{name:"Xe m\xE1y",share:.76,len:1.9,wid:.75,v:[7.5,11]},bike:{name:"Xe \u0111\u1EA1p / x\xEDch l\xF4",share:.05,len:1.8,wid:.7,v:[3,4.5]},car:{name:"\xD4 t\xF4",share:.15,len:4.4,wid:1.8,v:[8.5,12.5]},bus:{name:"Xe bu\xFDt / xe kh\xE1ch",share:.04,len:10.5,wid:2.5,v:[7,9.5]}},mu=[.1,.07,.05,.05,.08,.3,.75,1,.85,.65,.62,.8,.7,.55,.58,.68,.85,1,.95,.8,.7,.55,.35,.18];function gu(i=new Date){let t=(i.getUTCHours()*60+i.getUTCMinutes()+420)%1440;return{minutes:t,label:`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}}function U_(i){let t=i/60,e=Math.floor(t)%24,n=t-Math.floor(t);return mu[e]*(1-n)+mu[(e+1)%24]*n}function N_(i){let t=[],e=new Map,n=[],s=(o,a)=>{let c=`${Math.round(o*2)},${Math.round(a*2)}`,l=e.get(c);return l===void 0&&(l=n.length,e.set(c,l),n.push([])),l},r=(o,a,c,l,h,d,u)=>{let g=o.length/3;if(g<2)return;let f=new Float32Array(g*3),_=new Float32Array(g);for(let x=0;x<g;x++)f[x*3]=o[x*3]*Zc,f[x*3+1]=o[x*3+2]*Zc+l,f[x*3+2]=o[x*3+1]*Zc,x&&(_[x]=_[x-1]+Math.hypot(f[x*3]-f[x*3-3],f[x*3+2]-f[x*3-1]));let p=_[g-1];if(p<3)return;let m={pts:f,cum:_,len:p,g:a,w:c,o:h,ban:d,cond:u,a:s(f[0],f[2]),b:s(f[g*3-3],f[g*3-1])},M=t.length;t.push(m),n[m.a].push(M),m.b!==m.a&&n[m.b].push(M)};for(let o of i.edges)o.g<=3&&r(o.p,o.g,o.w,o.b?.3:L_[o.g],o.o||0,o.a||0,o.c||null);return{edges:t,adj:n}}function _u(i,t,e){let s=new Map;for(let r=0;r<i.edges.length;r++){let o=i.edges[r],a=t[o.g];if(!a)continue;let c=e/a;for(let l=Math.random()*c;l<o.len;l+=c){let h=vu(o,l),d=(l-o.cum[h])/Math.max(1e-6,o.cum[h+1]-o.cum[h]),u=o.pts[h*3]+(o.pts[h*3+3]-o.pts[h*3])*d,g=o.pts[h*3+2]+(o.pts[h*3+5]-o.pts[h*3+2])*d,f=`${Math.floor(u/150)},${Math.floor(g/150)}`,_=s.get(f);_||(_=[],s.set(f,_)),_.push(r,l)}}return{CELL:150,cells:s}}function vu(i,t){let e=0,n=i.cum.length-2;for(;e<n;){let s=e+n+1>>1;i.cum[s]<=t?e=s:n=s-1}return e}var O_={moto:1,bike:2,car:4,bus:8,ped:16};function xu(i,t,e){let n=O_[i];if(t.ban&n)return!1;if(t.cond){for(let[s,r]of t.cond)if(s&n){for(let[o,a]of r)if(e>=o&&e<a)return!1}}return!0}function yu(i){if(!i||!i.cond)return"";let t=n=>[n&4?"\xF4 t\xF4":"",n&8&&!(n&4)?"xe t\u1EA3i/xe kh\xE1ch":"",n&1?"xe m\xE1y":"",n&2?"x\xEDch l\xF4/xe \u0111\u1EA1p":""].filter(Boolean).join(", "),e=n=>`${String(Math.floor(n/60)%24).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;return i.cond.map(([n,s])=>`c\u1EA5m ${t(n)} ${s.map(([r,o])=>`${e(r)}\u2013${e(o===1440?1439:o)}`).join(", ")}`).join("; ")}function Se(i,t,e,n,s,r,o){let a=new ke(i,t,e);a.translate(n,s,r);let c=new Tt(o),l=a.attributes.position.count,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3]=c.r,h[d*3+1]=c.g,h[d*3+2]=c.b;return a.setAttribute("color",new ne(h,3)),a}var F_={moto:()=>is([Se(.16,.5,.5,0,.25,-.68,"#1d1d20"),Se(.16,.5,.5,0,.25,.68,"#1d1d20"),Se(.34,.42,1.25,0,.62,0,"#ffffff"),Se(.42,.62,.32,0,1.12,.12,"#cfd3d8"),Se(.27,.27,.3,0,1.56,.08,"#ffffff")]),bike:()=>is([Se(.08,.62,.62,0,.31,-.6,"#222"),Se(.08,.62,.62,0,.31,.6,"#222"),Se(.1,.1,1.15,0,.66,0,"#ffffff"),Se(.38,.6,.28,0,1.08,.1,"#ffffff"),Se(.22,.24,.24,0,1.5,.06,"#e2bf9b")]),car:()=>is([Se(1.78,.72,4.3,0,.62,0,"#ffffff"),Se(1.6,.56,2.25,0,1.25,.25,"#3b4552"),Se(1.82,.5,.62,0,.3,-1.35,"#161616"),Se(1.82,.5,.62,0,.3,1.35,"#161616")]),bus:()=>is([Se(2.5,2.35,10.5,0,1.55,0,"#ffffff"),Se(2.54,.9,9.4,0,2.05,.3,"#2b3440"),Se(2.3,.9,.06,0,2.05,-5.26,"#2b3440"),Se(2.56,.62,1,0,.32,-3.4,"#161616"),Se(2.56,.62,1,0,.32,3.4,"#161616")]),ped:()=>is([Se(.3,.82,.2,0,.41,0,"#3a3a44"),Se(.42,.62,.26,0,1.13,0,"#ffffff"),Se(.22,.24,.22,0,1.58,0,"#d9b38f")])},B_={moto:["#c8302c","#2a63b5","#1f1f22","#e8e8e8","#9aa1a8","#2f7d4a","#d9a520","#7b3fa0"],bike:["#f2f2f2","#2a63b5","#c8302c","#4a8f5a"],car:["#f2f2f2","#f2f2f2","#b9bec4","#1d1f22","#8a1f22","#2d4a7a","#7d7f80","#d8d0bd"],bus:["#f1c232","#3c8a5a","#e6e6e6","#2b6cb0","#c0392b"],ped:["#e74c3c","#3498db","#f1c40f","#ecf0f1","#2ecc71","#9b59b6","#f39c12","#ffffff","#1abc9c","#e84393"]},po=class{constructor(t,{phone:e=!1}={}){this.net=N_(t),this.vehSlots=_u(this.net,fu,14),this.pedSlots=_u(this.net,pu,22),this.maxVeh=e?700:2200,this.maxPed=e?260:900,this.group=new Pe,this.group.name="traffic",this.mode="clock",this.enabled=!0,this.factor=1,this.fixedMinutes=null,this.focus=new R,this.radius=800,this.meshes={},this.agents=[];let n=new Fe({vertexColors:!0}),s={...$c,ped:{name:"Ng\u01B0\u1EDDi \u0111i b\u1ED9",share:1}},r={};for(let o of Object.keys($c))r[o]=Math.ceil(this.maxVeh*$c[o].share);r.ped=this.maxPed;for(let[o,a]of Object.entries(r)){let c=new Qn(F_[o](),n,a);c.instanceMatrix.setUsage(Sh),c.frustumCulled=!1,c.castShadow=o!=="ped",c.receiveShadow=!1,c.userData.kind=o,c.name=`traffic-${o}`;let l=new Tt;for(let h=0;h<a;h++){let d=B_[o];c.setColorAt(h,l.set(d[(h*7+(h>>3))%d.length]).offsetHSL(0,0,(Math.random()-.5)*.08)),this.agents.push({kind:o,mesh:c,idx:h,ped:o==="ped",spec:s[o],active:!1,e:-1,dir:1,s:0,seg:0,v:0,vDes:0,lat:0,wait:0,phase:Math.random()*6.28,x:0,y:-1e4,z:0,h:0})}c.instanceColor.needsUpdate=!0,this.meshes[o]=c,this.group.add(c)}this.vehAgents=this.agents.filter(o=>!o.ped),this.pedAgents=this.agents.filter(o=>o.ped),this.vehAgents.sort((o,a)=>o.idx/this.meshes[o.kind].count-a.idx/this.meshes[a.kind].count),this._m=new ee,this._q=new Ge,this._p=new R,this._s=new R(1,1,1),this._yAxis=new R(0,1,0),this.buckets=new Map,this.clock=gu(),this.stats={veh:0,ped:0}}setMode(t){this.mode=t}setEnabled(t){this.enabled=t,this.group.visible=t}targetFactor(){return this.mode==="low"?.3:this.mode==="mid"?.65:this.mode==="high"?1:U_(this.clock.minutes)}spawn(t,e){let{CELL:n,cells:s}=e,r=this.radius;for(let o=0;o<24;o++){let a=r*Math.sqrt(Math.random()),c=Math.random()*Math.PI*2,l=s.get(`${Math.floor((this.focus.x+Math.cos(c)*a)/n)},${Math.floor((this.focus.z+Math.sin(c)*a)/n)}`);if(!l)continue;let h=Math.random()*(l.length/2)|0,d=this.net.edges[l[h*2]];if(xu(t.kind,d,this.clock.minutes))return this.place(t,l[h*2],l[h*2+1],!t.ped&&d.o?d.o:Math.random()<.5?1:-1),!0}return!1}place(t,e,n,s){let r=this.net.edges[e],o=t.spec;if(t.e=e,t.s=n,t.dir=s,t.seg=vu(r,n),t.active=!0,t.ped)t.vDes=1+Math.random()*.5,t.wait=Math.random()<.18?3+Math.random()*15:0,t.lat=r.g===3?(Math.random()-.5)*r.w*.6:(Math.random()<.5?-1:1)*(r.w/2+.8+Math.random()*.8);else{t.vDes=(o.v[0]+Math.random()*(o.v[1]-o.v[0]))*D_[r.g];let a=r.w/2;r.o?t.lat=(Math.random()*2-1)*Math.max(0,a-o.wid/2-.3):t.kind==="moto"||t.kind==="bike"?t.lat=a<2.2?a*.45:a*(.25+Math.random()*.6):t.lat=a<2.2?a*.3:Math.min(a-o.wid/2-.2,Math.max(o.wid/2+.3,a*.45)),!r.o&&(t.kind==="moto"||t.kind==="bike")&&(t.lat=Math.min(t.lat,a-.4))}t.v=t.vDes*(.5+Math.random()*.5)}nextEdge(t){let e=this.net,n=e.edges[t.e],s=t.dir>0?n.b:n.a,r=e.adj[s],o=t.ped?pu:fu,a=n.pts.length/3,c=t.dir>0?a-1:0,l=t.dir>0?a-2:1,h=n.pts[c*3]-n.pts[l*3],d=n.pts[c*3+2]-n.pts[l*3+2],u=Math.hypot(h,d)||1,g=0,f=[];for(let p of r){if(p===t.e)continue;let m=e.edges[p],M=o[m.g];if(!M)continue;let x=m.a===s?1:-1,y=m.pts.length/3;if(!t.ped&&m.o&&m.o!==x||!xu(t.kind,m,this.clock.minutes))continue;let C=x>0?0:y-1,T=x>0?1:y-2,w=m.pts[T*3]-m.pts[C*3],P=m.pts[T*3+2]-m.pts[C*3+2],O=Math.hypot(w,P)||1,v=(h*w+d*P)/(u*O),b=M*(.15+(1+v)*.5)*(t.ped?1:1+(m.w>=9?.6:0));f.push(p,x,b),g+=b}if(!g)return!1;let _=Math.random()*g;for(let p=0;p<f.length;p+=3)if(_-=f[p+2],_<=0||p+3>=f.length){let m=e.edges[f[p]],M=t.lat;return this.place(t,f[p],f[p+1]>0?0:m.len,f[p+1]),t.ped?t.lat=m.g===3?M*.3:t.lat:t.v=Math.min(t.v,t.vDes),!0}return!1}update(t,e,n,s){if(!this.enabled)return;this.clock=this.fixedMinutes==null?gu():{minutes:this.fixedMinutes,label:`${String(Math.floor(this.fixedMinutes/60)).padStart(2,"0")}:${String(this.fixedMinutes%60).padStart(2,"0")}`},this.focus.copy(e),this.radius=Te.clamp(n*1.15,380,1500),this.factor+=(this.targetFactor()-this.factor)*Math.min(1,t*.8);let r=Math.round(this.vehAgents.length*this.factor),o=Math.round(this.pedAgents.length*Math.max(.1,this.factor)),a=(this.radius*1.2)**2,c=0,l=(f,_,p)=>{for(let m=0;m<f.length;m++){let M=f[m];if(m>=_){M.active&&(M.active=!1,this.hide(M));continue}let x=M.active&&(M.x-e.x)**2+(M.z-e.z)**2>a;(!M.active||x)&&c<400&&(c++,this.spawn(M,p)||(M.active=!1,this.hide(M)))}};l(this.vehAgents,r,this.vehSlots),l(this.pedAgents,o,this.pedSlots);let h=this.buckets;h.clear();for(let f of this.vehAgents){if(!f.active)continue;let _=f.e*2+(f.dir>0?1:0),p=h.get(_);p||(p=[],h.set(_,p)),p.push(f)}for(let f of h.values()){if(f.length<2){f.length&&(f[0].lead=null);continue}f.sort((_,p)=>(p.s-_.s)*p.dir);for(let _=0;_<f.length;_++){let p=f[_];p.lead=null;for(let m=_-1;m>=Math.max(0,_-6);m--){let M=f[m];if(Math.abs(M.lat-p.lat)<(p.spec.wid+M.spec.wid)/2+.15){p.lead=M;break}}}}let d=0,u=0,g=this.net;for(let f of this.agents){if(!f.active)continue;let _=g.edges[f.e];if(f.ped)u++,f.wait>0?(f.wait-=t,f.v=0):(f.v=f.vDes,Math.random()<t*.01&&(f.wait=2+Math.random()*10));else{d++;let p=f.vDes,m=f.dir>0?_.len-f.s:f.s;if(g.adj[f.dir>0?_.b:_.a].length>=3&&m<14&&(p*=.55+.45*(m/14)),f.lead){let x=(f.lead.s-f.s)*f.dir-(f.lead.spec.len+f.spec.len)/2,y=(f.kind==="moto"||f.kind==="bike"?.8:2)+f.v*(f.kind==="moto"?.45:.9);x<y&&(p=Math.min(p,f.lead.v*Math.max(0,x/y))),x<.3&&(p=0)}f.v+=Te.clamp(p-f.v,-7*t,2.6*t)}if(f.s+=f.dir*f.v*t,f.s<0||f.s>_.len){let p=f.dir>0?f.s-_.len:-f.s;if(this.nextEdge(f))f.s+=f.dir*p;else if(!this.spawn(f,f.ped?this.pedSlots:this.vehSlots)){f.active=!1,this.hide(f);continue}}this.pose(f,s)}this.stats.veh=d,this.stats.ped=u;for(let f of Object.values(this.meshes))f.instanceMatrix.needsUpdate=!0}pose(t,e){let n=this.net.edges[t.e];t.s=Te.clamp(t.s,0,n.len);let s=t.seg;for(;s<n.cum.length-2&&t.s>n.cum[s+1];)s++;for(;s>0&&t.s<n.cum[s];)s--;t.seg=s;let r=n.pts,o=Math.max(1e-6,n.cum[s+1]-n.cum[s]),a=(t.s-n.cum[s])/o,c=(r[s*3+3]-r[s*3])/o,l=(r[s*3+5]-r[s*3+2])/o,h=c*t.dir,d=l*t.dir,u=-d,g=h;t.x=r[s*3]+(r[s*3+3]-r[s*3])*a+u*t.lat,t.z=r[s*3+2]+(r[s*3+5]-r[s*3+2])*a+g*t.lat,t.y=r[s*3+1]+(r[s*3+4]-r[s*3+1])*a,t.ped&&t.v>0&&(t.y+=Math.abs(Math.sin(e*7+t.phase))*.05),t.h=Math.atan2(-h,-d),this._p.set(t.x,t.y,t.z),this._q.setFromAxisAngle(this._yAxis,t.h),this._m.compose(this._p,this._q,this._s),t.mesh.setMatrixAt(t.idx,this._m)}hide(t){t.y=-1e4,this._m.makeScale(0,0,0),t.mesh.setMatrixAt(t.idx,this._m)}hit(t,e,n,s){for(let r of this.agents){if(!r.active)continue;let o=r.kind==="bus"?3:r.kind==="car"?1.6:1.75;if(e-s>r.y+o||e+s<r.y)continue;let a=t-r.x,c=n-r.z,l=-Math.sin(r.h),h=-Math.cos(r.h),d=a*l+c*h,u=-a*h+c*l,g=(r.spec.len||.4)/2,f=(r.spec.wid||.45)/2;if(Math.abs(d)<g+s&&Math.abs(u)<f+s)return r}return null}agentFor(t,e){return this.agents.find(n=>n.mesh===t&&n.idx===e)||null}nearby(t,e,n=60){let s=0,r=n*n;for(let o of this.vehAgents)o.active&&(o.x-t)**2+(o.z-e)**2<r&&s++;return s}};var lt=i=>document.getElementById(i),ln=(i,t=1)=>Number.isFinite(i)?i.toLocaleString("vi-VN",{minimumFractionDigits:t,maximumFractionDigits:t}):"\u2014",Mu=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function ss(i){let t=lt("loading-step");t&&(t.textContent=i)}async function Hn(i,t){ss(`\u0110ang t\u1EA3i ${t}\u2026`);let e=await fetch(`data/${i}.json`);if(!e.ok)throw new Error(`Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c data/${i}.json (HTTP ${e.status})`);return e.json()}async function z_(){let i=await Hn("meta","th\xF4ng tin c\u1EA3nh"),[t,e,n,s,r,o,a,c]=[await Hn("terrain","\u0111\u1ECBa h\xECnh"),await Hn("water","m\u1EB7t n\u01B0\u1EDBc"),await Hn("roads","\u0111\u01B0\u1EDDng"),await Hn("bridges","c\u1EA7u"),await Hn("buildings","c\xF4ng tr\xECnh"),await Hn("walls","t\u01B0\u1EDDng th\xE0nh"),await Hn("trees","c\xE2y"),await Hn("traffic","m\u1EA1ng \u0111\u01B0\u1EDDng cho xe m\xF4 ph\u1ECFng")];ss("\u0110ang d\u1EF1ng c\u1EA3nh 3D\u2026"),await new Promise(I=>setTimeout(I,30));let l=lt("view"),h;try{h=new Pr({canvas:l,antialias:!0,powerPreference:"high-performance"})}catch{throw new Error("Tr\xECnh duy\u1EC7t n\xE0y kh\xF4ng b\u1EADt \u0111\u01B0\u1EE3c WebGL. H\xE3y th\u1EED Chrome, Edge, Firefox ho\u1EB7c Safari b\u1EA3n m\u1EDBi.")}h.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<700?1.5:2)),h.toneMapping=Cc,h.toneMappingExposure=.95;let d=window.innerWidth<=720||matchMedia("(pointer: coarse)").matches;h.shadowMap.enabled=!d,h.shadowMap.type=Ac;let u=new Lr,g=Te.degToRad(245),f=Te.degToRad(38),_=new R(Math.sin(g)*Math.cos(f),Math.sin(f),-Math.cos(g)*Math.cos(f)).normalize(),p={skyColor:new Tt("#b9d2e6"),fogColor:new Tt("#c8d6df"),sunDir:_,fogNear:1600,fogFar:9e3};u.background=p.fogColor,u.fog=new Ir(p.fogColor,p.fogNear,p.fogFar);let m=new Ze(50,1,.3,14e3);u.add(new qr("#d6e6f4","#6e6553",1));let M=new Yr("#ffe9c8",2.7);M.position.copy(_).multiplyScalar(1500),u.add(M,M.target),M.castShadow=h.shadowMap.enabled,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-6e-4,M.shadow.normalBias=1.2;let x=0,y=I=>{if(Math.abs(I-x)<I*.15)return;x=I;let it=M.shadow.camera;it.left=-I,it.right=I,it.top=I,it.bottom=-I,it.near=10,it.far=4e3,it.updateProjectionMatrix()};y(400),ss("\u0110ang t\u1EA3i \u1EA3nh v\u1EC7 tinh\u2026");let C=null;try{C=await new Wr().loadAsync("data/ground_s2.jpg"),C.colorSpace=cn,C.anisotropy=h.capabilities.getMaxAnisotropy()}catch(I){console.warn("[Hu\u1EBF 3D] kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c \u1EA3nh v\u1EC7 tinh, d\xF9ng m\xE0u l\u1EDBp ph\u1EE7",I)}let T=new ao(t),w={xmin:i.frame.xmin,xmax:i.frame.xmax,zmin:i.frame.zmin,zmax:i.frame.zmax},P=new Ds(32),O=new Ls;O.scale.setScalar(9e3),O.name="sky";{let I=O.material.uniforms;I.turbidity.value=7,I.rayleigh.value=1.4,I.mieCoefficient.value=.006,I.mieDirectionalG.value=.82,I.sunPosition.value.copy(_)}O.material.fog=!1,u.add(O);let v=Wh(T,C);u.add(v);let b=qh(e,p);u.add(b);let F=Yh(n);u.add(F);let N=Zh(s,T,i);u.add(N.group);let L=jh(r,P,6,w);u.add(L.group);let W=Qh(o,P);u.add(W),F.traverse(I=>{I.isMesh&&(I.receiveShadow=!0)}),N.group.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0)}),W.castShadow=!0,W.receiveShadow=!0;let D=tu(i,P);u.add(D),D.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0)});let Z=eu(a);u.add(Z);let z=new po(c,{phone:d});u.add(z.group);let et=new co(u),J={terrain:T,solids:P,bridgeCol:{decks:N.decks,piers:N.piers},traffic:z},V=new uo(J,et);u.add(V.model),V.model.traverse(I=>{I.isMesh&&(I.castShadow=!0)}),ss("\u0110ang l\u1EADp l\u1ED9 tr\xECnh bay\u2026"),await new Promise(I=>setTimeout(I,20));let ht=[];for(let I of au(i))ht.push(cu(I,{...J,tt:N.ttInfo},i));N.ttInfo&&ht.push(hu(N.ttInfo,T));for(let I of ht)I.mesh=uu(I),u.add(I.mesh);et.rings.forEach(I=>{I.mesh.visible=!0}),ss("\u0110ang chu\u1EA9n b\u1ECB \u0111\u1ED3 h\u1ECDa\u2026"),h.compile(u,m),et.rings.forEach(I=>{I.mesh.visible=!1}),ht.forEach(I=>{I.mesh.visible=!1}),V.model.visible=!1;let Mt=new ho,G=new fo,$=new io(m,l);$.enableDamping=!0,$.dampingFactor=.08,$.screenSpacePanning=!1,$.minDistance=25,$.maxDistance=6500,$.maxPolarAngle=Math.PI*.47;let nt=i.places,at=()=>{let I=nt.truong_tien,it=nt.ngo_mon;$.target.set((I.x+it.x)/2,6,(I.z+it.z)/2),m.position.set($.target.x+820,520,$.target.z+980)};at(),$.update();let ut=null;function bt(I,it,rt,vt,Dt,te){let he=new R(I,it,rt),Wt=new R(I+Math.sin(Dt)*Math.cos(te)*vt,it+Math.sin(te)*vt,rt+Math.cos(Dt)*Math.cos(te)*vt);ut={t:0,dur:Mu?.01:1.6,p0:m.position.clone(),p1:Wt,q0:$.target.clone(),q1:he}}let Ot=[["truong_tien","C\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n"],["phu_xuan","C\u1EA7u Ph\xFA Xu\xE2n"],["da_vien","C\u1EA7u D\xE3 Vi\xEAn"],["ngo_mon","Ng\u1ECD M\xF4n"],["ky_dai","K\u1EF3 \u0110\xE0i"],["thai_hoa","\u0110i\u1EC7n Th\xE1i H\xF2a"]],Yt=[],Zt=lt("labels");for(let[I,it]of Ot){if(!nt[I])continue;let rt=document.createElement("div");rt.className="label",rt.textContent=it,Zt.appendChild(rt);let vt=I==="ky_dai"?58:I==="ngo_mon"?20:I.endsWith("hoa")?17:16;Yt.push({el:rt,p:new R(nt[I].x,(nt[I].ground||0)+vt,nt[I].z),when:()=>Lt==="explore"||Lt==="manual"})}if(nt.truong_tien&&nt.phu_xuan){let I=document.createElement("div");I.className="label label-river",I.textContent="S\xF4ng H\u01B0\u01A1ng",Zt.appendChild(I),Yt.push({el:I,p:new R((nt.truong_tien.x+nt.phu_xuan.x)/2+120,3,(nt.truong_tien.z+nt.phu_xuan.z)/2+60),when:()=>Lt!=="auto"})}let U=new R;function Xe(){let I=lt("opt-labels").checked,it=h.domElement.clientWidth,rt=h.domElement.clientHeight;for(let vt of Yt){U.copy(vt.p).project(m);let Dt=m.position.distanceTo(vt.p),te=I&&(!vt.when||vt.when())&&U.z<1&&Math.abs(U.x)<1.05&&Math.abs(U.y)<1.05&&Dt<(vt.far||4200);vt.el.hidden=!te,te&&(vt.el.style.transform=`translate(${(U.x*.5+.5)*it}px, ${(-U.y*.5+.5)*rt}px) translate(-50%, -100%)`)}}let Lt="explore",qt="chase",Ct=()=>Lt==="manual"||Lt==="auto",ie=new R,Nt=new R,A=N.ttInfo,S=null;function X(){for(let I of ht){let it=Lt==="routes"||Lt==="auto"&&I===S,rt=I.mesh.userData,vt=Lt==="routes"&&S&&I!==S;I.mesh.visible=it,rt.tube.visible=Lt==="routes",rt.line.visible=Lt==="routes",rt.tube.material.opacity=vt?.22:.85,rt.line.material.opacity=vt?.25:.95,rt.beads.visible=!vt}document.querySelectorAll(".route-card").forEach(I=>I.classList.toggle("selected",!!S&&I.dataset.route===S.id))}function Q(I){let it=I?I.curve.getSpacedPoints(60):ht.flatMap(Ht=>Ht.curve.getSpacedPoints(30)),rt=1/0,vt=-1/0,Dt=1/0,te=-1/0;for(let Ht of it)rt=Math.min(rt,Ht.x),vt=Math.max(vt,Ht.x),Dt=Math.min(Dt,Ht.z),te=Math.max(te,Ht.z);let he=Math.max(vt-rt,te-Dt),Wt=.5,pe=window.innerWidth>720?-.28*he:0;bt((rt+vt)/2+Math.cos(Wt)*pe,8,(Dt+te)/2-Math.sin(Wt)*pe,he*1.3+300,Wt,.95)}function st(I){S=I,j("auto")}function j(I){Lt=I,document.querySelectorAll("[data-mode]").forEach(rt=>rt.setAttribute("aria-pressed",String(rt.dataset.mode===I||rt.dataset.mode==="routes"&&I==="auto")));let it=I==="manual"||I==="auto";if($.enabled=!it,V.model.visible=it,Mt.active=I==="manual",lt("hud").hidden=!it,lt("places").hidden=I!=="explore",lt("routes").hidden=I!=="routes",lt("keys").hidden=I!=="manual",lt("route-progress").hidden=I!=="auto",lt("yaw-row").hidden=I!=="manual",X(),document.body.classList.toggle("flying",it),lt("sticks").hidden=I!=="manual",it&&(lt("layers").classList.remove("open"),lt("btn-layers").setAttribute("aria-expanded","false")),it&&(document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur(),l.focus({preventScroll:!0})),I==="explore"){let rt=V.pos;rt.lengthSq()>0&&bt(rt.x,Math.max(rt.y,4),rt.z,260,.6,.55);return}if(I==="routes"){V.auto=null,S||(S=ht[0]),X(),Q(S);return}if(I==="manual"&&!V.auto&&(V.pos.lengthSq()===0||Lt==="manual")){if(!V.started&&A){let vt=A.ax+A.ux*A.S*2.5+A.vx*1*210,Dt=A.az+A.uz*A.S*2.5+A.vz*1*210;V.place(vt,A.water+22,Dt,Math.atan2(A.vx*1,A.vz*1)),V.started=!0}V.auto=null}if(I==="auto"){S||(S=ht[0]);let rt=S;V.startAuto(rt.points,rt.speed),V.started=!0,V.yawRate=0;let vt=rt.points[1].clone().sub(rt.points[0]);V.yaw=Math.atan2(-vt.x,-vt.z),lt("rp-name").textContent=rt.name,lt("rp-name").style.setProperty("--route",rt.color),V.onAutoEnd=()=>{j("manual"),B(`Ho\xE0n th\xE0nh l\u1ED9 tr\xECnh \u201C${rt.name}\u201D. B\u1EA1n \u0111ang c\u1EA7m l\xE1i; b\u1EA5m \u201CL\u1ED9 tr\xECnh bay\u201D \u0111\u1EC3 ch\u1ECDn l\u1ED9 tr\xECnh kh\xE1c.`)},X()}ie.copy(V.pos).add(new R(Math.sin(V.yaw)*14,5,Math.cos(V.yaw)*14)),m.position.copy(ie)}document.querySelectorAll("[data-mode]").forEach(I=>I.addEventListener("click",()=>{I.dataset.mode!=="explore"&&G.ensure(),j(I.dataset.mode)}));let At=()=>{lt("btn-sound").textContent=G.enabled?"\xC2m thanh: b\u1EADt":"\xC2m thanh: t\u1EAFt",lt("btn-sound").setAttribute("aria-pressed",String(G.enabled))};lt("btn-sound").addEventListener("click",()=>{G.setEnabled(!G.enabled),At()}),At(),l.addEventListener("pointerdown",()=>l.focus({preventScroll:!0})),lt("focus-hint").addEventListener("click",()=>l.focus({preventScroll:!0})),lt("btn-view").addEventListener("click",()=>{qt=qt==="chase"?"fpv":"chase",lt("btn-view").textContent=qt==="chase"?"G\xF3c nh\xECn: b\xE1m sau":"G\xF3c nh\xECn: bu\u1ED3ng l\xE1i"}),lt("btn-reset").addEventListener("click",()=>{V.started=!1,V.crashes=0,V.touches=0,j("manual")}),lt("hud-more").addEventListener("click",()=>{let I=!lt("hud").classList.contains("expanded");lt("hud").classList.toggle("expanded",I),lt("hud-more").setAttribute("aria-expanded",String(I)),lt("hud-more").textContent=I?"Thu g\u1ECDn \u25B4":"T\xF9y ch\u1ECDn \u25BE"}),lt("rp-stop").addEventListener("click",()=>{V.auto=null,j("manual"),B("\u0110\xE3 d\u1EEBng l\u1ED9 tr\xECnh \u2014 b\u1EA1n \u0111ang c\u1EA7m l\xE1i t\u1EA1i ch\u1ED7.")});let ft=I=>{let it=Math.floor(I/60),rt=Math.round(I%60);return it?`${it} ph\xFAt ${rt.toString().padStart(2,"0")} gi\xE2y`:`${rt} gi\xE2y`};for(let I of ht){let it=document.createElement("div");it.className="route-card",it.dataset.route=I.id,it.style.setProperty("--route",I.color),it.innerHTML='<button type="button" class="rc-main"><span class="rc-name"></span><span class="rc-desc"></span><span class="rc-meta"></span></button><button type="button" class="rc-fly">Bay \u25B6</button>',it.querySelector(".rc-name").textContent=I.name,it.querySelector(".rc-desc").textContent=I.desc,it.querySelector(".rc-meta").textContent=`${ln(I.length/1e3,1)} km \xB7 kho\u1EA3ng ${ft(I.seconds)} \xB7 ${I.labels.length} \u0111i\u1EC3m \xB7 cao ${Math.round(I.minY)}\u2013${Math.round(I.maxY)} m`,it.querySelector(".rc-main").addEventListener("click",()=>{S=I,X(),Q(I)}),it.querySelector(".rc-fly").addEventListener("click",()=>{G.ensure(),st(I)}),lt("route-list").appendChild(it);for(let rt of I.labels){let vt=document.createElement("div");vt.className="label label-route",vt.style.setProperty("--route",I.color),vt.textContent=rt.name,Zt.appendChild(vt),Yt.push({el:vt,p:new R(rt.x,rt.y+9,rt.z),when:()=>(Lt==="routes"||Lt==="auto")&&S===I,far:6e3})}}let St="hue3d.yawMax";try{let I=parseFloat(window.localStorage.getItem(St));I>=.2&&I<=1.4&&(V.yawMax=I)}catch{}let jt=()=>{lt("yaw-sens").value=String(V.yawMax),lt("yaw-val").textContent=`${Math.round(V.yawMax*180/Math.PI)}\xB0/s`};lt("yaw-sens").addEventListener("input",I=>{V.yawMax=parseFloat(I.target.value),jt();try{window.localStorage.setItem(St,String(V.yawMax))}catch{}}),jt(),window.addEventListener("keydown",I=>{(I.code==="KeyC"||I.key==="c")&&Ct()&&!I.repeat&&(I.preventDefault(),lt("btn-view").click()),(I.code==="KeyM"||I.key==="m")&&Ct()&&!I.repeat&&(I.preventDefault(),lt("btn-sound").click()),Ct()&&G.ensure(),I.code==="Escape"&&Lt!=="explore"&&j(Lt==="auto"?"routes":"explore")});let ot=[["ngo_mon","\u0110\u1EA1i N\u1ED9i",420,2.6,.5],["ky_dai","K\u1EF3 \u0110\xE0i",220,2.2,.38],["truong_tien","C\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n",380,.9,.32],["phu_xuan","C\u1EA7u Ph\xFA Xu\xE2n",360,2.3,.35],["da_vien","C\u1EA7u D\xE3 Vi\xEAn",420,1.2,.4]];for(let[I,it,rt,vt,Dt]of ot){if(!nt[I])continue;let te=document.createElement("button");te.type="button",te.textContent=it,te.addEventListener("click",()=>bt(nt[I].x,(nt[I].ground||0)+4,nt[I].z,rt,vt,Dt)),lt("place-list").appendChild(te)}lt("btn-home").addEventListener("click",()=>{let I=m.position.clone(),it=$.target.clone();at();let rt=m.position.clone(),vt=$.target.clone();m.position.copy(I),$.target.copy(it),ut={t:0,dur:1.6,p0:I,p1:rt,q0:it,q1:vt}}),document.querySelectorAll('input[name="bcolor"]').forEach(I=>I.addEventListener("change",()=>{L.recolor(I.value),lt("legend-source").hidden=I.value!=="source",lt("legend-height").hidden=I.value!=="height"})),lt("opt-trees").addEventListener("change",I=>{Z.visible=I.target.checked}),lt("opt-photo").checked=!!C,lt("opt-photo").disabled=!C,lt("opt-photo").addEventListener("change",I=>v.userData.setMode(I.target.checked?"photo":"landcover")),lt("opt-shadows").checked=h.shadowMap.enabled,lt("opt-shadows").addEventListener("change",I=>{h.shadowMap.enabled=I.target.checked,M.castShadow=I.target.checked,u.traverse(it=>{it.material&&(Array.isArray(it.material)?it.material:[it.material]).forEach(rt=>{rt.needsUpdate=!0})})}),lt("opt-buildings").addEventListener("change",I=>{L.group.visible=I.target.checked}),lt("opt-traffic").addEventListener("change",I=>{z.setEnabled(I.target.checked),lt("traffic-mode").disabled=!I.target.checked}),lt("traffic-mode").addEventListener("change",I=>z.setMode(I.target.value)),lt("btn-layers").addEventListener("click",()=>{let I=lt("layers");I.classList.toggle("open"),lt("btn-layers").setAttribute("aria-expanded",String(I.classList.contains("open")))});let Et=new $r,Ft=[z.group,L.group,D,N.group,W,v,b],Ut=null;l.addEventListener("pointerdown",I=>{Ut=[I.clientX,I.clientY]}),l.addEventListener("pointerup",I=>{if(!Ut||Math.hypot(I.clientX-Ut[0],I.clientY-Ut[1])>6||Ct())return;let it=l.getBoundingClientRect();Et.setFromCamera(new pt((I.clientX-it.left)/it.width*2-1,-((I.clientY-it.top)/it.height)*2+1),m),z.group.children.forEach(vt=>{vt.boundingSphere=null,vt.boundingBox=null});let rt=Et.intersectObjects(Ft,!0);rt.length&&kt(rt[0])}),lt("info-close").addEventListener("click",()=>{lt("info").hidden=!0});function gt(I){return I.map(([it,rt])=>`<div class="kv"><dt>${it}</dt><dd>${rt}</dd></div>`).join("")}function Kt(I){let it=r.n[I],rt=0;for(let Dt=0;Dt<I;Dt++)rt+=r.n[Dt]*2;let vt=0;for(let Dt=0;Dt<it;Dt++){let te=rt+Dt*2,he=rt+(Dt+1)%it*2;vt+=r.xz[te]*r.xz[he+1]-r.xz[he]*r.xz[te+1]}return Math.abs(vt)/200}function kt(I){let it=I.point.clone();I.face&&it.addScaledVector(I.face.normal,-.3);let rt=I.object;for(;rt.parent&&rt.parent!==u;)rt=rt.parent;let vt="",Dt="",te=P.pick(it.x,it.z),he=I.object.userData.kind&&I.instanceId!==void 0?z.agentFor(I.object,I.instanceId):null;if(he)vt=`${he.spec.name} (m\xF4 ph\u1ECFng)`,Dt=gt([["T\u1ED1c \u0111\u1ED9 l\xFAc b\u1EA5m",`${ln(he.v*3.6,0)} km/h`],["\u0110\u01B0\u1EDDng",["\u0110\u01B0\u1EDDng ch\xEDnh","\u0110\u01B0\u1EDDng n\u1ED9i b\u1ED9/ki\u1EC7t","\u0110\u01B0\u1EDDng d\u1ECBch v\u1EE5","\u0110\u01B0\u1EDDng \u0111i b\u1ED9"][z.net.edges[he.e].g]],["Ngu\u1ED3n","M\xF4 ph\u1ECFng tr\xEAn m\u1EA1ng \u0111\u01B0\u1EDDng OSM"]])+'<p class="note">Kh\xF4ng ph\u1EA3i d\u1EEF li\u1EC7u giao th\xF4ng th\u1EADt: kh\xF4ng c\xF3 ngu\u1ED3n m\u1EDF th\u1EDDi gian th\u1EF1c cho Hu\u1EBF. T\u1EF7 l\u1EC7 lo\u1EA1i xe, t\u1ED1c \u0111\u1ED9 v\xE0 m\u1EADt \u0111\u1ED9 theo gi\u1EDD l\xE0 gi\u1EA3 \u0111\u1ECBnh \u0111\u1EC3 minh h\u1ECDa.</p>';else if((rt===L.group||rt===D||rt===W)&&te){let Wt=te.info;if(Wt.type==="building"){let pe=Wt.index;vt=r.names[pe]||"C\xF4ng tr\xECnh",Dt=gt([["D\u1EA5u ch\xE2n",Kh[r.src[pe]]],["Chi\u1EC1u cao d\u1EF1ng",`${ln(r.h[pe]/10-.3)} m`],["Ngu\u1ED3n chi\u1EC1u cao",Jh[r.hs[pe]]],["Di\u1EC7n t\xEDch n\u1EC1n",`${ln(Kt(pe),0)} m\xB2`]])+'<p class="note">M\xE1i ph\u1EB3ng l\xE0 gi\u1EA3 \u0111\u1ECBnh; c\u1EEDa s\u1ED5, m\u1EB7t ti\u1EC1n v\xE0 v\xE2n m\xE1i ng\xF3i l\xE0 h\u1ECDa ti\u1EBFt minh h\u1ECDa, kh\xF4ng ph\u1EA3i \u1EA3nh ch\u1EE5p ng\xF4i nh\xE0 n\xE0y. Chi\u1EC1u cao h\u1ECDc m\xE1y l\u1EC7ch kho\u1EA3ng \xB13 m tr\xEAn m\u1EABu \u0111\u1ED1i chi\u1EBFu nh\u1ECF.</p>'}else if(Wt.type==="wall")vt=Wt.kind==="rampart"?"T\u01B0\u1EDDng th\xE0nh Kinh th\xE0nh":"T\u01B0\u1EDDng Ho\xE0ng th\xE0nh / t\u01B0\u1EDDng trong",Dt=gt([["Chi\u1EC1u cao d\u1EF1ng",Wt.kind==="rampart"?"6,6 m":"4,0 m"],["Ngu\u1ED3n","Tim t\u01B0\u1EDDng OSM; chi\u1EC1u cao theo s\u1ED1 li\u1EC7u c\xF4ng b\u1ED1"]])+'<p class="note">C\u1ED5ng th\xE0nh \u0111\u01B0\u1EE3c kho\xE9t \u1EDF n\u01A1i c\xF3 \u0111\u01B0\u1EDDng \u0111i qua. K\xEDch th\u01B0\u1EDBc c\u1ED5ng ch\u01B0a \u0111o.</p>';else if(Wt.type==="landmark"){vt=Wt.name;let pe={ky_dai:"Ba t\u1EA7ng \u0111\xE0i t\u1ED5ng ~17,5 m, c\u1ED9t c\u1EDD 37 m (s\u1ED1 li\u1EC7u c\xF4ng b\u1ED1, ch\u01B0a \u0111o ki\u1EC3m).",ngo_mon:"N\u1EC1n \u0111\xE0i ch\u1EEF U cao ~5 m (c\xF4ng b\u1ED1); l\u1EA7u Ng\u0169 Ph\u1EE5ng ph\xE1c th\u1EA3o, t\u1EF7 l\u1EC7 l\xE0 gi\u1EA3 \u0111\u1ECBnh.",thai_hoa:"M\xE1i ch\u1ED3ng hai t\u1EA7ng ph\xE1c th\u1EA3o; chi\u1EC1u cao l\xE0 gi\u1EA3 \u0111\u1ECBnh.",vincom:"Kh\u1ED1i \u0111\u1EBF 5 t\u1EA7ng th\u01B0\u01A1ng m\u1EA1i (c\xF4ng b\u1ED1) ph\u1EE7 c\u1EA3 d\u1EA5u ch\xE2n OSM. Th\xE1p kh\xE1ch s\u1EA1n 33 t\u1EA7ng n\u1ED5i (Nh\xE0 \u0110\u1EA7u T\u01B0 2018; Meli\xE1 ghi 34) d\u1EF1ng cao ~116 m = 5 t\u1EA7ng \xD7 4,5 m + 28 t\u1EA7ng \xD7 3,3 m (chi\u1EC1u cao t\u1EA7ng l\xE0 gi\u1EA3 \u0111\u1ECBnh). V\u1ECB tr\xED v\xE0 h\xECnh ch\u1EEF V c\u1EE7a th\xE1p l\u1EA5y t\u1EEB \u1EA3nh \u0111\u1ED9 cao h\u1ECDc m\xE1y Open Buildings 2.5D 2023 (v\xF9ng \u2265 60 m). OSM ghi 160 m / 39 t\u1EA7ng; h\u1ECDc m\xE1y \u01B0\u1EDBc ~99 m: c\xE1c ngu\u1ED3n ch\u01B0a kh\u1EDBp.",phu_cam:"M\u1EB7t b\u1EB1ng h\xECnh ch\u1EEF th\u1EADp \u0111o tr\xEAn d\u1EA5u ch\xE2n OSM (gian gi\u1EEFa, c\xE1nh ngang, h\u1EADu cung, hai ch\xE2n th\xE1p h\xECnh thoi \u1EDF m\u1EB7t tr\u01B0\u1EDBc). Hai th\xE1p chu\xF4ng cao 43,5 m v\xE0 m\xE1i cao 32 m theo s\u1ED1 li\u1EC7u c\xF4ng b\u1ED1; h\xECnh d\xE1ng th\xE1p (kh\u1ED1i \u0111\xE1 x\xE1m thon d\u1EA7n, c\xF3 th\xE1nh gi\xE1) theo \u1EA3nh Commons 2024 (CC BY 4.0, Chainwit.). \u0110\u1ED9 cao m\xE1i hi\xEAn, \u0111\u1ED9 d\u1ED1c m\xE1i v\xE0 v\u1ECB tr\xED c\u1EEDa s\u1ED5 l\xE0 gi\u1EA3 \u0111\u1ECBnh. H\u1ECDc m\xE1y 2023 \u01B0\u1EDBc m\xE1i ~26 m."};Dt=gt([["D\u1EA5u ch\xE2n","OpenStreetMap"],["H\xECnh kh\u1ED1i","Ph\xE1c th\u1EA3o tham s\u1ED1"]])+`<p class="note">${pe[Wt.key]||""}</p>`}}else if(rt===N.group){let Wt=null,pe=1/0;for(let Ht of N.decks){let ce=Ht.bx-Ht.ax,Ce=Ht.bz-Ht.az,hn=ce*ce+Ce*Ce||1,rn=((it.x-Ht.ax)*ce+(it.z-Ht.az)*Ce)/hn;rn=Math.max(0,Math.min(1,rn));let un=Math.hypot(Ht.ax+ce*rn-it.x,Ht.az+Ce*rn-it.z);un<pe&&(pe=un,Wt=Ht)}vt=Wt&&Wt.name||"C\u1EA7u",Dt=gt([["Chi\u1EC1u d\xE0i (OSM)",`${ln(Wt?Wt.len:NaN,0)} m`],["Cao \u0111\u1ED9 m\u1EB7t c\u1EA7u","M\xF4 h\xECnh r\xE0ng bu\u1ED9c (gi\u1EA3 \u0111\u1ECBnh)"]]);{let Ht=null,ce=1/0;for(let Ce of z.net.edges)if(Ce.cond){let hn=Ce.pts,rn=hn.length/3>>1,un=Math.hypot(hn[rn*3]-it.x,hn[rn*3+2]-it.z);un<ce&&(ce=un,Ht=Ce)}Ht&&ce<260&&(Dt+=gt([["H\u1EA1n ch\u1EBF (th\u1EBB OSM)",yu(Ht)]]))}Dt+=Wt&&Wt.special==="truong_tien"?'<p class="note">6 nh\u1ECBp, 402,6 m theo Wikidata. V\xF2m th\xE9p, tr\u1EE5 v\xE0 \u0111\u1ED9 cao g\u1EA7m c\u1EA7u l\xE0 ph\xE1c th\u1EA3o minh h\u1ECDa. \u0110\u01B0\u1EDDng ch\xEDnh c\u1EE7a c\u1EA7u trong OpenStreetMap thi\u1EBFu th\u1EBB <code>bridge</code>; demo nh\u1EADn ra c\u1EA7u b\u1EB1ng ki\u1EC3m tra h\xECnh h\u1ECDc.</p>':'<p class="note">Kh\xF4ng c\u1EA7u n\xE0o trong d\u1EEF li\u1EC7u m\u1EDF c\xF3 cao \u0111\u1ED9 hay t\u0129nh kh\xF4ng \u0111o \u0111\u1EA1c.</p>'}else{let Wt=T.waterLevel(it.x,it.z);vt=Number.isNaN(Wt)?"M\u1EB7t \u0111\u1EA5t":"M\u1EB7t n\u01B0\u1EDBc",Dt=Number.isNaN(Wt)?gt([["Cao \u0111\u1ED9",`\u2248 ${ln(T.height(it.x,it.z))} m`],["Ngu\u1ED3n","Copernicus GLO-30, \u0111\xE3 l\xE0m m\u01B0\u1EE3t"]])+'<p class="note">DEM 30 m l\xE0 m\u1EB7t ph\u1EE7; \u0111\u1ED9 cao \u1EDF \u0111\xE2y ch\u1EC9 \u0111\u1EC3 \u0111\u1EB7t m\xF4 h\xECnh, kh\xF4ng ph\u1EA3i s\u1ED1 \u0111o.</p>':gt([["M\u1EF1c n\u01B0\u1EDBc d\u1EF1ng",`${ln(Wt)} m`],["Ngu\u1ED3n","\u0110a gi\xE1c n\u01B0\u1EDBc OSM; m\u1EF1c n\u01B0\u1EDBc quy \u01B0\u1EDBc"]])+'<p class="note">\u0110\u1ED9 s\xE2u \u0111\xE1y s\xF4ng l\xE0 gi\u1EA3 \u0111\u1ECBnh \u0111\u1EC3 hi\u1EC3n th\u1ECB.</p>'}lt("info-title").textContent=vt,lt("info-body").innerHTML=Dt,lt("info").hidden=!1}for(let I of["left","right"]){let it=lt(`stick-${I}`),rt=it.querySelector(".knob"),vt=null,Dt=he=>{let Wt=it.getBoundingClientRect(),pe=Wt.width/2,Ht=(he.clientX-Wt.left-pe)/pe,ce=(he.clientY-Wt.top-pe)/pe,Ce=Math.hypot(Ht,ce);Ce>1&&(Ht/=Ce,ce/=Ce),Mt[I]={x:Ht,y:ce},rt.style.transform=`translate(${Ht*pe*.6}px, ${ce*pe*.6}px)`};it.addEventListener("pointerdown",he=>{vt=he.pointerId,it.setPointerCapture(vt),Dt(he)}),it.addEventListener("pointermove",he=>{he.pointerId===vt&&Dt(he)});let te=()=>{vt=null,Mt[I]={x:0,y:0},rt.style.transform=""};it.addEventListener("pointerup",te),it.addEventListener("pointercancel",te)}let ae=0;function B(I){let it=lt("toast");it.textContent=I,it.hidden=!1,clearTimeout(ae),ae=setTimeout(()=>{it.hidden=!0},3200)}function _t(){let I=l.clientWidth,it=l.clientHeight;h.setSize(I,it,!1),m.aspect=I/it,m.updateProjectionMatrix(),et.points.material.uniforms.uScale.value=it*.9}window.addEventListener("resize",_t),_t();let K=new Zr,tt=new R,mt=0,xt=0,$t=0;function ve(I,it){let rt=Math.min(typeof I=="number"?I:K.getDelta(),.25);xt+=rt;let vt=xt;if(b.material.uniforms.uTime.value=vt,D.userData.flag&&!Mu&&(D.userData.flag.rotation.y=Math.sin(vt*1.7)*.25),O.position.copy(m.position),h.shadowMap.enabled){let Dt=Ct()?V.pos:$.target;y(Ct()?260:Te.clamp(m.position.distanceTo($.target)*.75,200,1400)),M.target.position.copy(Dt),M.position.copy(Dt).addScaledVector(_,1500)}if(Ct()){let Dt=Lt==="manual"?Mt.read():{forward:0,strafe:0,up:0,yaw:0},te=Math.max(1,Math.ceil(rt*30));for(let Ht=0;Ht<te&&Ct();Ht++)V.update(rt/te,Dt,w);let he;Lt==="manual"?he=.45+.35*Math.max(0,Dt.up)-.2*Math.max(0,-Dt.up)+.2*Math.min(1,Math.hypot(Dt.forward,Dt.strafe))+.08*Math.abs(Dt.yaw):he=.45+Te.clamp(V.vel.y*.06,-.2,.35)+Math.min(1,V.vel.length()/40)*.2;let Wt=V.status,pe=Wt.overWater&&Wt.agl<3.2?Math.min(1,1-(Wt.agl-.3)/2.9):0;if(G.update(rt,{active:!0,loadTarget:Te.clamp(he,0,1),wash:pe,camDist:qt==="fpv"?4:m.position.distanceTo(V.pos),touches:V.touches,crashes:V.crashes,street:z.enabled?Math.min(1,z.nearby(V.pos.x,V.pos.z,70)/25)*Te.clamp(1-((V.status.agl||0)-10)/90,0,1):0}),tt.set(-Math.sin(V.yaw),0,-Math.cos(V.yaw)),qt==="fpv")m.position.copy(V.pos).addScaledVector(tt,1.3).add(new R(0,.35,0)),Nt.copy(m.position).addScaledVector(tt,30),Nt.y+=Math.sin(-V.tilt.pitch)*8;else{ie.copy(V.pos).addScaledVector(tt,-13).add(new R(0,4.2,0));let Ht=1-Math.exp(-rt*4);m.position.lerp(ie,Ht);let ce=T.surface(m.position.x,m.position.z)+1.2;m.position.y<ce&&(m.position.y=ce),Nt.copy(V.pos).addScaledVector(tt,7).add(new R(0,1.2,0))}if(m.lookAt(Nt),mt-=rt,mt<=0){mt=.1;let Ht=V.status;if(lt("hud-agl-label").textContent=window.innerWidth<=720?"\u0110\u1ED9 cao":Ht.overWater?"Tr\xEAn m\u1EB7t n\u01B0\u1EDBc":"Tr\xEAn m\u1EB7t \u0111\u1EA5t",lt("hud-agl").parentElement.classList.toggle("water",Ht.overWater),lt("hud-agl").textContent=`${ln(Ht.agl)} m`,lt("hud-speed").textContent=`${ln(Ht.speed*3.6,0)} km/h`,lt("hud-gap").textContent=Number.isFinite(Ht.clearanceUp)?`${ln(Ht.clearanceUp)} m`:"\u2014",lt("hud-gap-row").classList.toggle("active",Number.isFinite(Ht.clearanceUp)),lt("hud-touch").textContent=V.touches,lt("hud-crash").textContent=V.crashes,lt("hud-alert").hidden=V.flash<=0,V.flash>0&&(lt("hud-alert").textContent=`Va ch\u1EA1m: ${V.lastHit}`),Lt==="manual"){let ce=Mt.read(),Ce=ce.forward||ce.strafe||ce.up||ce.yaw;lt("hud-input").textContent=Ce?Mt.left.x||Mt.left.y||Mt.right.x||Mt.right.y?"C\u1EA7n \u0111i\u1EC1u khi\u1EC3n":`Ph\xEDm: ${Mt.last}`:Mt.lastAt?`\u0110ang ch\u1EDD l\u1EC7nh (ph\xEDm cu\u1ED1i: ${Mt.lastKey})`:"Ch\u01B0a nh\u1EADn ph\xEDm n\xE0o",lt("focus-hint").hidden=document.hasFocus()}else if(lt("focus-hint").hidden=!0,lt("hud-input").textContent="Bay t\u1EF1 \u0111\u1ED9ng",V.auto&&S){let ce=Math.min(1,V.auto.s/V.auto.length),Ce=Math.max(0,V.auto.length-V.auto.s),hn=S.labels.find(un=>un.u>ce+.003),rn=[...S.labels].reverse().find(un=>un.u<=ce+.003);lt("rp-next").textContent=hn?`Ti\u1EBFp theo: ${hn.name} \xB7 c\xF2n ${ln((hn.u-ce)*V.auto.length,0)} m`:"S\u1EAFp k\u1EBFt th\xFAc l\u1ED9 tr\xECnh",lt("rp-prev").textContent=rn?`V\u1EEBa qua: ${rn.name}`:"Xu\u1EA5t ph\xE1t",lt("rp-bar").style.width=`${(ce*100).toFixed(1)}%`,lt("rp-left").textContent=`${ln(Ce/1e3,2)} km c\xF2n l\u1EA1i`}}}else{if(ut){ut.t=Math.min(1,ut.t+rt/ut.dur);let te=ut.t<.5?4*ut.t**3:1-(-2*ut.t+2)**3/2;m.position.lerpVectors(ut.p0,ut.p1,te),$.target.lerpVectors(ut.q0,ut.q1,te),ut.t>=1&&(ut=null)}$.target.x=Te.clamp($.target.x,w.xmin,w.xmax),$.target.z=Te.clamp($.target.z,w.zmin,w.zmax),$.update();let Dt=T.surface(m.position.x,m.position.z)+3;m.position.y<Dt&&(m.position.y=Dt)}Ct()||G.update(rt,{active:!1,loadTarget:.45,wash:0,camDist:100,touches:V.touches,crashes:V.crashes}),Ct()?z.update(rt,V.pos,300+Math.max(0,V.status.agl||0)*3,vt):z.update(rt,$.target,m.position.distanceTo($.target),vt),$t-=rt,$t<=0&&($t=1,lt("traffic-status").textContent=z.enabled?`Gi\u1EDD Hu\u1EBF ${z.clock.label} \xB7 m\u1EADt \u0111\u1ED9 ${Math.round(z.factor*100)}% \xB7 ${z.stats.veh.toLocaleString("vi-VN")} xe, ${z.stats.ped.toLocaleString("vi-VN")} ng\u01B0\u1EDDi quanh v\xF9ng \u0111ang xem`:"\u0110\xE3 t\u1EAFt"),et.update(rt),it!==!0&&(Xe(),h.render(u,m))}let Ue=0,Qt=()=>{try{ve()}catch(I){Ue++,Ue<=3&&console.error("[Hu\u1EBF 3D] l\u1ED7i trong khung h\xECnh",I),Ue===1&&B("C\xF3 l\u1ED7i khi v\u1EBD c\u1EA3nh \u2014 chi ti\u1EBFt trong console (F12).")}};h.setAnimationLoop(Qt),window.__hue={scene:u,camera:m,uav:V,input:Mt,sound:G,routes:ht,startRoute:st,setMode:j,T,meta:i,bridges:N,renderer:h,tick:ve,traffic:z,pause:()=>h.setAnimationLoop(null),resume:()=>h.setAnimationLoop(Qt)};let Ee=i.counts;lt("stat-buildings").textContent=Ee.buildings.toLocaleString("vi-VN"),lt("stat-roads").textContent=Ee.roads.toLocaleString("vi-VN"),lt("stat-bridges").textContent=Ee.bridges.toLocaleString("vi-VN"),lt("stat-trees").textContent=Ee.trees.toLocaleString("vi-VN"),lt("stat-hml").textContent=`${Math.round(100*Ee.height_status.ml_estimate/Ee.buildings)}%`,lt("loading").hidden=!0,document.body.classList.add("ready")}z_().catch(i=>{console.error(i),ss(i.message||String(i)),lt("loading").classList.add("error")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
