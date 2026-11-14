(()=>{var cl="169",ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,Ol=1,tu=2;var Zc=1,eu=2,Mn=3,Bn=0,Ce=1,Re=2,On=0,Ai=1,Fl=2,Bl=3,zl=4,nu=5,Qn=100,iu=101,su=102,ru=103,ou=104,au=200,lu=201,cu=202,hu=203,No=204,Oo=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,_u=212,xu=213,yu=214,Fo=0,Bo=1,zo=2,Ii=3,ko=4,Ho=5,Vo=6,Go=7,hl=0,vu=1,Mu=2,Fn=0,Su=1,bu=2,Eu=3,ul=4,wu=5,Tu=6,Au=7;var Kc=300,Li=301,Di=302,Wo=303,Xo=304,Br=306,qo=1e3,ni=1001,Yo=1002,Oe=1003,Ru=1004;var vs=1005;var nn=1006,to=1007;var ii=1008;var bn=1009,$c=1010,Jc=1011,is=1012,dl=1013,si=1014,dn=1015,ds=1016,fl=1017,pl=1018,Ui=1020,jc=35902,Qc=1021,th=1022,sn=1023,eh=1024,nh=1025,Ri=1026,Ni=1027,ml=1028,gl=1029,ih=1030,_l=1031;var xl=1033,$s=33776,Js=33777,js=33778,Qs=33779,Zo=35840,Ko=35841,$o=35842,Jo=35843,jo=36196,Qo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,tr=36492,ma=36494,ga=36495,sh=36283,_a=36284,xa=36285,ya=36286;var nr=2300,va=2301,eo=2302,kl=2400,Hl=2401,Vl=2402;var Cu=3200,Pu=3201;var rh=0,Iu=1,Nn="",hn="srgb",Vn="srgb-linear",yl="display-p3",zr="display-p3-linear",ir="linear",oe="srgb",sr="rec709",rr="p3";var ci=7680;var Gl=519,Lu=512,Du=513,Uu=514,oh=515,Nu=516,Ou=517,Fu=518,Bu=519,Wl=35044;var Xl="300 es",Sn=2e3,or=2001,En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=1234567,ji=Math.PI/180,ss=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function vl(i,t){return(i%t+t)%t}function zu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ku(i,t,e){return i!==t?(e-i)/(t-i):0}function Qi(i,t,e){return(1-e)*i+e*t}function Hu(i,t,e,n){return Qi(i,t,1-Math.exp(-e*n))}function Vu(i,t=1){return t-Math.abs(vl(i,t*2)-t)}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qu(i,t){return i+Math.random()*(t-i)}function Yu(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&(ql=i);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ku(i){return i*ji}function $u(i){return i*ss}function Ju(i){return(i&i-1)===0&&i!==0}function ju(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function td(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),m=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qe={DEG2RAD:ji,RAD2DEG:ss,generateUUID:Hi,clamp:Me,euclideanModulo:vl,mapLinear:zu,inverseLerp:ku,lerp:Qi,damp:Hu,pingpong:Vu,smoothstep:Gu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:Yu,seededRandom:Zu,degToRad:Ku,radToDeg:$u,isPowerOfTwo:Ju,ceilPowerOfTwo:ju,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:td,normalize:Pe,denormalize:Ei},ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],p=n[8],x=s[0],f=s[3],g=s[6],M=s[1],_=s[4],v=s[7],R=s[2],T=s[5],w=s[8];return r[0]=o*x+a*M+l*R,r[3]=o*f+a*_+l*T,r[6]=o*g+a*v+l*w,r[1]=c*x+h*M+d*R,r[4]=c*f+h*_+d*T,r[7]=c*g+h*v+d*w,r[2]=u*x+m*M+p*R,r[5]=u*f+m*_+p*T,r[8]=u*g+m*v+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,p=e*d+n*u+s*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new Vt;function ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){let i=ar("canvas");return i.style.display="block",i}var Yl={};function er(i){i in Yl||(Yl[i]=!0,console.warn(i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function id(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zl=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kl=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[Vn]:{transfer:ir,primaries:sr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[hn]:{transfer:oe,primaries:sr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:ir,primaries:rr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Kl),fromReference:i=>i.applyMatrix3(Zl)},[yl]:{transfer:oe,primaries:rr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kl),fromReference:i=>i.applyMatrix3(Zl).convertLinearToSRGB()}},rd=new Set([Vn,zr]),te={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!rd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Gi[t].toReference,s=Gi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gi[i].primaries},getTransfer:function(i){return i===Nn?ir:Gi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Gi[t].luminanceCoefficients)}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,Ma=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=ar("canvas")),hi.width=t.width,hi.height=t.height;let n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},od=0,lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(so(s[o].image)):r.push(so(s[o]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ad=0,We=class i extends En{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ni,s=ni,r=nn,o=ii,a=sn,l=bn,c=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Hi(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Kc;We.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],p=l[9],x=l[2],f=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+f)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(m+1)/2,R=(g+1)/2,T=(h+u)/4,w=(d+x)/4,L=(p+f)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=w/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((f-p)*(f-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends En{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],m=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=p,t[e+3]=x;return}if(d!==x||l!==u||c!==m||h!==p){let f=1-a,g=l*u+c*m+h*p+d*x,M=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,g*M);f=Math.sin(f*T)/R,a=Math.sin(a*T)/R}let v=a*M;if(l=l*f+u*v,c=c*f+m*v,h=h*f+p*v,d=d*f+x*v,f===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],m=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*m-c*u,t[e+1]=l*p+h*u+c*d-a*m,t[e+2]=c*p+h*m+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),m=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*p,this._y=c*m*d-u*h*p,this._z=c*h*p+u*m*d,this._w=c*h*d-u*m*p;break;case"YXZ":this._x=u*h*d+c*m*p,this._y=c*m*d-u*h*p,this._z=c*h*p-u*m*d,this._w=c*h*d+u*m*p;break;case"ZXY":this._x=u*h*d-c*m*p,this._y=c*m*d+u*h*p,this._z=c*h*p+u*m*d,this._w=c*h*d-u*m*p;break;case"ZYX":this._x=u*h*d-c*m*p,this._y=c*m*d+u*h*p,this._z=c*h*p-u*m*d,this._w=c*h*d+u*m*p;break;case"YZX":this._x=u*h*d+c*m*p,this._y=c*m*d+u*h*p,this._z=c*h*p-u*m*d,this._w=c*h*d-u*m*p;break;case"XZY":this._x=u*h*d-c*m*p,this._y=c*m*d-u*h*p,this._z=c*h*p+u*m*d,this._w=c*h*d+u*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ro=new C,$l=new Fe,Tn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),Ss.subVectors(this.max,Wi),ui.subVectors(t.a,Wi),di.subVectors(t.b,Wi),fi.subVectors(t.c,Wi),Cn.subVectors(di,ui),Pn.subVectors(fi,di),qn.subVectors(ui,fi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-qn.z,qn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,qn.z,0,-qn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-qn.y,qn.x,0];return!oo(e,ui,di,fi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,ui,di,fi,Ss))?!1:(bs.crossVectors(Cn,Pn),e=[bs.x,bs.y,bs.z],oo(e,ui,di,fi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gn=[new C,new C,new C,new C,new C,new C,new C,new C],je=new C,Ms=new Tn,ui=new C,di=new C,fi=new C,Cn=new C,Pn=new C,qn=new C,Wi=new C,Ss=new C,bs=new C,Yn=new C;function oo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);let a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ld=new Tn,Xi=new C,ao=new C,rn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);let e=Xi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(ao)),this.expandByPoint(Xi.copy(t.center).sub(ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new C,lo=new C,Es=new C,In=new C,co=new C,ws=new C,ho=new C,zn=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lo.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),In.copy(this.origin).sub(lo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Es),a=In.dot(this.direction),l=-In.dot(Es),c=In.lengthSq(),h=Math.abs(1-o*o),d,u,m,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lo).addScaledVector(Es,u),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){co.subVectors(e,t),ws.subVectors(n,t),ho.crossVectors(co,ws);let o=this.direction.dot(ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);let l=a*this.direction.dot(ws.crossVectors(In,ws));if(l<0)return null;let c=a*this.direction.dot(co.cross(In));if(c<0||l+c>o)return null;let h=-a*In.dot(ho);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,m,p,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,m,p,x,f)}set(t,e,n,s,r,o,a,l,c,h,d,u,m,p,x,f){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=m,g[7]=p,g[11]=x,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,m=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+m*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+m*a,e[1]=m+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,m=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-m,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=m*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,m=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=m*d-p,e[2]=p*d-m,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,hd)}lookAt(t,e,n){let s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Ln.crossVectors(n,Ve),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Ln.crossVectors(n,Ve)),Ln.normalize(),Ts.crossVectors(Ve,Ln),s[0]=Ln.x,s[4]=Ts.x,s[8]=Ve.x,s[1]=Ln.y,s[5]=Ts.y,s[9]=Ve.y,s[2]=Ln.z,s[6]=Ts.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],p=n[2],x=n[6],f=n[10],g=n[14],M=n[3],_=n[7],v=n[11],R=n[15],T=s[0],w=s[4],L=s[8],X=s[12],y=s[1],b=s[5],I=s[9],k=s[13],H=s[2],Z=s[6],F=s[10],$=s[14],q=s[3],it=s[7],tt=s[11],rt=s[15];return r[0]=o*T+a*y+l*H+c*q,r[4]=o*w+a*b+l*Z+c*it,r[8]=o*L+a*I+l*F+c*tt,r[12]=o*X+a*k+l*$+c*rt,r[1]=h*T+d*y+u*H+m*q,r[5]=h*w+d*b+u*Z+m*it,r[9]=h*L+d*I+u*F+m*tt,r[13]=h*X+d*k+u*$+m*rt,r[2]=p*T+x*y+f*H+g*q,r[6]=p*w+x*b+f*Z+g*it,r[10]=p*L+x*I+f*F+g*tt,r[14]=p*X+x*k+f*$+g*rt,r[3]=M*T+_*y+v*H+R*q,r[7]=M*w+_*b+v*Z+R*it,r[11]=M*L+_*I+v*F+R*tt,r[15]=M*X+_*k+v*$+R*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],p=t[3],x=t[7],f=t[11],g=t[15];return p*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*m-n*l*m)+x*(+e*l*m-e*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+f*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+g*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],p=t[12],x=t[13],f=t[14],g=t[15],M=d*f*c-x*u*c+x*l*m-a*f*m-d*l*g+a*u*g,_=p*u*c-h*f*c-p*l*m+o*f*m+h*l*g-o*u*g,v=h*x*c-p*d*c+p*a*m-o*x*m-h*a*g+o*d*g,R=p*d*l-h*x*l-p*a*u+o*x*u+h*a*f-o*d*f,T=e*M+n*_+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=M*w,t[1]=(x*u*r-d*f*r-x*s*m+n*f*m+d*s*g-n*u*g)*w,t[2]=(a*f*r-x*l*r+x*s*c-n*f*c-a*s*g+n*l*g)*w,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*m-n*l*m)*w,t[4]=_*w,t[5]=(h*f*r-p*u*r+p*s*m-e*f*m-h*s*g+e*u*g)*w,t[6]=(p*l*r-o*f*r-p*s*c+e*f*c+o*s*g-e*l*g)*w,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*m+e*l*m)*w,t[8]=v*w,t[9]=(p*d*r-h*x*r-p*n*m+e*x*m+h*n*g-e*d*g)*w,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*g+e*a*g)*w,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*w,t[12]=R*w,t[13]=(h*x*s-p*d*s+p*n*u-e*x*u-h*n*f+e*d*f)*w,t[14]=(p*a*s-o*x*s-p*n*l+e*x*l+o*n*f-e*a*f)*w,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,p=r*d,x=o*h,f=o*d,g=a*d,M=l*c,_=l*h,v=l*d,R=n.x,T=n.y,w=n.z;return s[0]=(1-(x+g))*R,s[1]=(m+v)*R,s[2]=(p-_)*R,s[3]=0,s[4]=(m-v)*T,s[5]=(1-(u+g))*T,s[6]=(f+M)*T,s[7]=0,s[8]=(p+_)*w,s[9]=(f-M)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),o=pi.set(s[4],s[5],s[6]).length(),a=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);let c=1/r,h=1/o,d=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),m,p;if(a===Sn)m=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===or)m=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,m=(n+s)*h,p,x;if(a===Sn)p=(o+r)*d,x=-2*d;else if(a===or)p=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new C,Qe=new Jt,cd=new C(0,0,0),hd=new C(1,1,1),Ln=new C,Ts=new C,Ve=new C,Jl=new Jt,jl=new Fe,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ud=0,Ql=new C,mi=new Fe,xn=new Jt,As=new C,qi=new C,dd=new C,fd=new Fe,tc=new C(1,0,0),ec=new C(0,1,0),nc=new C(0,0,1),ic={type:"added"},pd={type:"removed"},gi={type:"childadded",child:null},uo={type:"childremoved",child:null},Ee=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new fn,n=new Fe,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Vt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(qi,As,this.up):xn.lookAt(As,qi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(xn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new C(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new C,yn=new C,fo=new C,vn=new C,_i=new C,xi=new C,sc=new C,po=new C,mo=new C,go=new C,_o=new pe,xo=new pe,yo=new pe,ti=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),yn.subVectors(n,e),fo.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(yn),l=tn.dot(fo),c=yn.dot(yn),h=yn.dot(fo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-m-p,p,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return _o.setScalar(0),xo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,n),yo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_o,r.x),o.addScaledVector(xo,r.y),o.addScaledVector(yo,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),yn.subVectors(t,e),tn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;_i.subVectors(s,n),xi.subVectors(r,n),po.subVectors(t,n);let l=_i.dot(po),c=xi.dot(po);if(l<=0&&c<=0)return e.copy(n);mo.subVectors(t,s);let h=_i.dot(mo),d=xi.dot(mo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(_i,o);go.subVectors(t,r);let m=_i.dot(go),p=xi.dot(go);if(p>=0&&m<=p)return e.copy(r);let x=m*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(xi,a);let f=h*p-m*d;if(f<=0&&d-h>=0&&m-p>=0)return sc.subVectors(r,s),a=(d-h)/(d-h+(m-p)),e.copy(s).addScaledVector(sc,a);let g=1/(f+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(_i,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=vl(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vo(o,r,t+1/3),this.g=vo(o,r,t),this.b=vo(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return te.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Me(Ae.r*255,0,255))*65536+Math.round(Me(Ae.g*255,0,255))*256+Math.round(Me(Ae.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=hn){te.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Rs);let n=Qi(Dn.h,Rs.h,e),s=Qi(Dn.s,Rs.s,e),r=Qi(Dn.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new vt;vt.NAMES=lh;var md=0,An=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ai,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Oo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},De=class extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new C,Cs=new ut,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}};var hr=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},gd=0,Ke=new Jt,Mo=new Ee,yi=new C,Ge=new Tn,Yi=new Tn,ve=new C,le=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ah(t)?ur:hr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ge.min,Yi.min),Ge.expandByPoint(ve),ve.addVectors(Ge.max,Yi.max),Ge.expandByPoint(ve)):(Ge.expandByPoint(Yi.min),Ge.expandByPoint(Yi.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(t,c),ve.add(yi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;let c=new C,h=new C,d=new C,u=new ut,m=new ut,p=new ut,x=new C,f=new C;function g(L,X,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,X),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,L),m.fromBufferAttribute(r,X),p.fromBufferAttribute(r,y),h.sub(c),d.sub(c),m.sub(u),p.sub(u);let b=1/(m.x*p.y-p.x*m.y);isFinite(b)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(b),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(b),a[L].add(x),a[X].add(x),a[y].add(x),l[L].add(f),l[X].add(f),l[y].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,X=M.length;L<X;++L){let y=M[L],b=y.start,I=y.count;for(let k=b,H=b+I;k<H;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let _=new C,v=new C,R=new C,T=new C;function w(L){R.fromBufferAttribute(s,L),T.copy(R);let X=a[L];_.copy(X),_.sub(R.multiplyScalar(R.dot(X))).normalize(),v.crossVectors(T,X);let b=v.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,b)}for(let L=0,X=M.length;L<X;++L){let y=M[L],b=y.start,I=y.count;for(let k=b,H=b+I;k<H;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,m=t.count;u<m;u+=3){let p=t.getX(u+0),x=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,p=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[m++]}return new ae(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=new Jt,Zn=new zn,Ps=new rn,oc=new C,Is=new C,Ls=new C,Ds=new C,So=new C,Us=new C,ac=new C,Ns=new C,Xt=class extends Ee{constructor(t=new le,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(So.fromBufferAttribute(d,t),o?Us.addScaledVector(So,h):Us.addScaledVector(So.sub(e),h))}e.add(Us)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Ps.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Ps,oc)===null||Zn.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(rc.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let f=u[p],g=o[f.materialIndex],M=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=M,R=_;v<R;v+=3){let T=a.getX(v),w=a.getX(v+1),L=a.getX(v+2);s=Os(this,g,t,n,c,h,d,T,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let p=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=p,g=x;f<g;f+=3){let M=a.getX(f),_=a.getX(f+1),v=a.getX(f+2);s=Os(this,o,t,n,c,h,d,M,_,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let f=u[p],g=o[f.materialIndex],M=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=M,R=_;v<R;v+=3){let T=v,w=v+1,L=v+2;s=Os(this,g,t,n,c,h,d,T,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let p=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=p,g=x;f<g;f+=3){let M=f,_=f+1,v=f+2;s=Os(this,o,t,n,c,h,d,M,_,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function _d(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ns);return c<e.near||c>e.far?null:{distance:c,point:Ns.clone(),object:i}}function Os(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Is),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Ds);let h=_d(i,t,e,n,Is,Ls,Ds,ac);if(h){let d=new C;ti.getBarycoord(ac,Is,Ls,Ds,d),s&&(h.uv=ti.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(h.uv1=ti.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(h.normal=ti.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ti.getNormal(Is,Ls,Ds,u.normal),h.face=u,h.barycoord=d}return h}var Xe=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function p(x,f,g,M,_,v,R,T,w,L,X){let y=v/w,b=R/L,I=v/2,k=R/2,H=T/2,Z=w+1,F=L+1,$=0,q=0,it=new C;for(let tt=0;tt<F;tt++){let rt=tt*b-k;for(let Tt=0;Tt<Z;Tt++){let Ft=Tt*y-I;it[x]=Ft*M,it[f]=rt*_,it[g]=H,c.push(it.x,it.y,it.z),it[x]=0,it[f]=0,it[g]=T>0?1:-1,h.push(it.x,it.y,it.z),d.push(Tt/w),d.push(1-tt/L),$+=1}}for(let tt=0;tt<L;tt++)for(let rt=0;rt<w;rt++){let Tt=u+rt+Z*tt,Ft=u+rt+Z*(tt+1),Y=u+(rt+1)+Z*(tt+1),et=u+(rt+1)+Z*tt;l.push(Tt,Ft,et),l.push(Ft,Y,et),q+=6}a.addGroup(m,q,X),m+=q,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function xd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ch(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var yd={clone:Oi,merge:Ie},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},dr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new C,lc=new ut,cc=new ut,Le=class extends dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,Mi=1,Ea=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(vi,Mi,t,e);s.layers=this.layers,this.add(s);let r=new Le(vi,Mi,t,e);r.layers=this.layers,this.add(r);let o=new Le(vi,Mi,t,e);o.layers=this.layers,this.add(o);let a=new Le(vi,Mi,t,e);a.layers=this.layers,this.add(a);let l=new Le(vi,Mi,t,e);l.layers=this.layers,this.add(l);let c=new Le(vi,Mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fr=class extends We{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wa=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:On});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=nn),new Ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},bo=new C,Sd=new C,bd=new Vt,en=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bo.subVectors(n,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bd.getNormalMatrix(t),s=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new rn,Fs=new C,os=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],m=s[8],p=s[9],x=s[10],f=s[11],g=s[12],M=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,f-m,v-g).normalize(),n[1].setComponents(l+r,u+c,f+m,v+g).normalize(),n[2].setComponents(l+o,u+h,f+p,v+M).normalize(),n[3].setComponents(l-o,u-h,f-p,v-M).normalize(),n[4].setComponents(l-a,u-d,f-x,v-_).normalize(),e===Sn)n[5].setComponents(l+a,u+d,f+x,v+_).normalize();else if(e===or)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,p)=>m.start-p.start);let u=0;for(let m=1;m<d.length;m++){let p=d[u],x=d[m];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let m=0,p=d.length;m<p;m++){let x=d[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fi=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,m=[],p=[],x=[],f=[];for(let g=0;g<h;g++){let M=g*u-o;for(let _=0;_<c;_++){let v=_*d-r;p.push(v,-M,0),x.push(0,0,1),f.push(_/a),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let _=M+c*g,v=M+c*(g+1),R=M+1+c*(g+1),T=M+1+c*g;m.push(_,v,T),m.push(v,R,T)}this.setIndex(m),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`
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
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,wf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,Zp=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,$p=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:wd,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Id,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Od,bsdfs:Fd,iridescence_fragment:Bd,bumpmap_pars_fragment:zd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Jd,displacementmap_vertex:jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:tf,colorspace_fragment:ef,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:of,envmap_pars_vertex:af,envmap_physical_pars_fragment:xf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:yf,lights_toon_pars_fragment:vf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:Ef,lights_fragment_begin:wf,lights_fragment_maps:Tf,lights_fragment_end:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:If,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:kf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Vf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:jf,opaque_fragment:Qf,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:xp,transmission_fragment:yp,transmission_pars_fragment:vp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:bp,worldpos_vertex:Ep,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Ip,depth_frag:Lp,distanceRGBA_vert:Dp,distanceRGBA_frag:Up,equirect_vert:Np,equirect_frag:Op,linedashed_vert:Fp,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:kp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Kp,meshphysical_frag:$p,meshtoon_vert:Jp,meshtoon_frag:jp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},ct={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},un={basic:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ie([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ie([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ie([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ie([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ie([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ie([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ie([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ie([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ie([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ie([ct.lights,ct.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};un.physical={uniforms:Ie([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Bs={r:0,b:0,g:0},$n=new fn,rm=new Jt;function om(i,t,e,n,s,r,o){let a=new vt(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function p(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1,v=p(M);v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,_){let v=p(_);v&&(v.isCubeTexture||v.mapping===Br)?(h===void 0&&(h=new Xt(new Xe(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Oi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(_.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler($n)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,(d!==v||u!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new Fi(2,2),new Ue({name:"BackgroundMaterial",uniforms:Oi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,_){M.getRGB(Bs,ch(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:x,addToRenderList:f}}function am(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(y,b,I,k,H){let Z=!1,F=d(k,I,b);r!==F&&(r=F,c(r.object)),Z=m(y,k,I,H),Z&&p(y,k,I,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(y,b,I,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,b,I){let k=I.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[b.id];Z===void 0&&(Z={},H[b.id]=Z);let F=Z[k];return F===void 0&&(F=u(l()),Z[k]=F),F}function u(y){let b=[],I=[],k=[];for(let H=0;H<e;H++)b[H]=0,I[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:I,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,b,I,k){let H=r.attributes,Z=b.attributes,F=0,$=I.getAttributes();for(let q in $)if($[q].location>=0){let tt=H[q],rt=Z[q];if(rt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),tt===void 0||tt.attribute!==rt||rt&&tt.data!==rt.data)return!0;F++}return r.attributesNum!==F||r.index!==k}function p(y,b,I,k){let H={},Z=b.attributes,F=0,$=I.getAttributes();for(let q in $)if($[q].location>=0){let tt=Z[q];tt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor));let rt={};rt.attribute=tt,tt&&tt.data&&(rt.data=tt.data),H[q]=rt,F++}r.attributes=H,r.attributesNum=F,r.index=k}function x(){let y=r.newAttributes;for(let b=0,I=y.length;b<I;b++)y[b]=0}function f(y){g(y,0)}function g(y,b){let I=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;I[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),H[y]!==b&&(i.vertexAttribDivisor(y,b),H[y]=b)}function M(){let y=r.newAttributes,b=r.enabledAttributes;for(let I=0,k=b.length;I<k;I++)b[I]!==y[I]&&(i.disableVertexAttribArray(I),b[I]=0)}function _(y,b,I,k,H,Z,F){F===!0?i.vertexAttribIPointer(y,b,I,H,Z):i.vertexAttribPointer(y,b,I,k,H,Z)}function v(y,b,I,k){x();let H=k.attributes,Z=I.getAttributes(),F=b.defaultAttributeValues;for(let $ in Z){let q=Z[$];if(q.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let tt=it.normalized,rt=it.itemSize,Tt=t.get(it);if(Tt===void 0)continue;let Ft=Tt.buffer,Y=Tt.type,et=Tt.bytesPerElement,ot=Y===i.INT||Y===i.UNSIGNED_INT||it.gpuType===dl;if(it.isInterleavedBufferAttribute){let lt=it.data,Pt=lt.stride,At=it.offset;if(lt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)g(q.location+Wt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)f(q.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Wt=0;Wt<q.locationSize;Wt++)_(q.location+Wt,rt/q.locationSize,Y,tt,Pt*et,(At+rt/q.locationSize*Wt)*et,ot)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<q.locationSize;lt++)g(q.location+lt,it.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<q.locationSize;lt++)f(q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let lt=0;lt<q.locationSize;lt++)_(q.location+lt,rt/q.locationSize,Y,tt,rt*et,rt/q.locationSize*lt*et,ot)}}else if(F!==void 0){let tt=F[$];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(q.location,tt);break;case 3:i.vertexAttrib3fv(q.location,tt);break;case 4:i.vertexAttrib4fv(q.location,tt);break;default:i.vertexAttrib1fv(q.location,tt)}}}}M()}function R(){L();for(let y in n){let b=n[y];for(let I in b){let k=b[I];for(let H in k)h(k[H].object),delete k[H];delete b[I]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let b=n[y.id];for(let I in b){let k=b[I];for(let H in k)h(k[H].object),delete k[H];delete b[I]}delete n[y.id]}function w(y){for(let b in n){let I=n[b];if(I[y.id]===void 0)continue;let k=I[y.id];for(let H in k)h(k[H].object),delete k[H];delete I[y.id]}}function L(){X(),o=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:X,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:f,disableUnusedAttributes:M}}function lm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let p=0;p<d;p++)m+=h[p];e.update(m,n,1)}function l(c,h,d,u){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)o(c[p],h[p],u[p]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];for(let x=0;x<u.length;x++)e.update(p,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let L=w===ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function hm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let p=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!f)r?h(null):c();else{let M=r?0:n,_=M*4,v=g.clippingState||null;l.value=v,v=h(p,u,_,m);for(let R=0;R!==_;++R)v[R]=e[R];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,p){let x=d!==null?d.length:0,f=null;if(x!==0){if(f=l.value,p!==!0||f===null){let g=m+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<g)&&(f=new Float32Array(g));for(let _=0,v=m;_!==x;++_,v+=4)o.copy(d[_]).applyMatrix4(M,a),o.normal.toArray(f,v),f[v+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function um(i){let t=new WeakMap;function e(o,a){return a===Wo?o.mapping=Li:a===Xo&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wo||a===Xo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new wa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var pr=class extends dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wi=4,hc=[.125,.215,.35,.446,.526,.582],ei=20,Eo=new pr,uc=new vt,wo=null,To=0,Ao=0,Ro=!1,jn=(1+Math.sqrt(5))/2,Si=1/jn,dc=[new C(-jn,Si,0),new C(jn,Si,0),new C(-Si,0,jn),new C(Si,0,jn),new C(0,jn,-Si),new C(0,jn,Si),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],mr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,To,Ao),this._renderer.xr.enabled=Ro,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ds,format:sn,colorSpace:Vn,depthBuffer:!1},s=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=fm(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(uc),h.toneMapping=Fn,h.autoClear=!1;let m=new De({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),p=new Xt(new Xe,m),x=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(uc),x=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let _=this._cubeSize;zs(s,M*_,g>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dc[(s-r-1)%dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Xt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),x=r/p,f=isFinite(r)?1+Math.floor(h*x):ei;f>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);let g=[],M=0;for(let w=0;w<ei;++w){let L=w/x,X=Math.exp(-L*L/2);g.push(X),w===0?M+=X:w<f&&(M+=2*X)}for(let w=0;w<g.length;w++)g[w]=g[w]/M;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-wi?s-_+wi:0),T=4*(this._cubeSize-v);zs(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(d,Eo)}};function dm(i){let t=[],e=[],n=[],s=i,r=i-wi+1+hc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-wi?l=hc[o-i+wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,p=6,x=3,f=2,g=1,M=new Float32Array(x*p*m),_=new Float32Array(f*p*m),v=new Float32Array(g*p*m);for(let T=0;T<m;T++){let w=T%3*2/3-1,L=T>2?0:-1,X=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(X,x*p*T),_.set(u,f*p*T);let y=[T,T,T,T,T,T];v.set(y,g*p*T)}let R=new le;R.setAttribute("position",new ae(M,x)),R.setAttribute("uv",new ae(_,f)),R.setAttribute("faceIndex",new ae(v,g)),t.push(R),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fm(i,t,e){let n=new Float32Array(ei),s=new C(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function pc(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function mc(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wo||l===Xo,h=l===Li||l===Di;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new mr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new mr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);for(let p in u.morphAttributes){let x=u.morphAttributes[p];for(let f=0,g=x.length;f<g;f++)t.remove(x[f])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let p in m){let x=m[p];for(let f=0,g=x.length;f<g;f++)t.update(x[f],i.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,p=d.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let _=0,v=M.length;_<v;_+=3){let R=M[_+0],T=M[_+1],w=M[_+2];u.push(R,T,T,w,w,R)}}else if(p!==void 0){let M=p.array;x=p.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let R=_+0,T=_+1,w=_+2;u.push(R,T,T,w,w,R)}}else return;let f=new(ah(u)?ur:hr)(u,1);f.version=x;let g=r.get(d);g&&t.remove(g),r.set(d,f)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function _m(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*o),e.update(m,n,1)}function c(u,m,p){p!==0&&(i.drawElementsInstanced(n,m,r,u*o,p),e.update(m,n,p))}function h(u,m,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,p);let f=0;for(let g=0;g<p;g++)f+=m[g];e.update(f,n,1)}function d(u,m,p,x){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)c(u[g]/o,m[g],x[g]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,x,0,p);let g=0;for(let M=0;M<p;M++)g+=m[M];for(let M=0;M<x.length;M++)e.update(g,n,x[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){let n=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let X=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",X)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;m===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*d),w=new cr(T,v,R,d);w.type=dn,w.needsUpdate=!0;let L=_*4;for(let y=0;y<d;y++){let b=f[y],I=g[y],k=M[y],H=v*R*4*y;for(let Z=0;Z<b.count;Z++){let F=Z*L;m===!0&&(s.fromBufferAttribute(b,Z),T[H+F+0]=s.x,T[H+F+1]=s.y,T[H+F+2]=s.z,T[H+F+3]=0),p===!0&&(s.fromBufferAttribute(I,Z),T[H+F+4]=s.x,T[H+F+5]=s.y,T[H+F+6]=s.z,T[H+F+7]=0),x===!0&&(s.fromBufferAttribute(k,Z),T[H+F+8]=s.x,T[H+F+9]=s.y,T[H+F+10]=s.z,T[H+F+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new ut(v,R)},n.set(a,u),a.addEventListener("dispose",X)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let p=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function vm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var gr=class extends We{constructor(t,e,n,s,r,o,a,l,c,h=Ri){if(h!==Ri&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=si),n===void 0&&h===Ni&&(n=Ui),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uh=new We,gc=new gr(1,1),dh=new cr,fh=new ba,ph=new fr,_c=[],xc=[],yc=new Float32Array(16),vc=new Float32Array(9),Mc=new Float32Array(4);function Vi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),xe(e,n)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),xe(e,n)}}function Am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),xe(e,n)}}function Rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=oh,r=gc):r=uh,e.setTexture2D(t||r,s)}function Fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fh,s)}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ph,s)}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dh,s)}function km(i){switch(i){case 5126:return Mm;case 35664:return Sm;case 35665:return bm;case 35666:return Em;case 35674:return wm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Lm;case 36294:return Dm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){let e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){let e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){let e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){let e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qm(i,t){let e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){let e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zm(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function $m(i,t){i.uniform3iv(this.addr,t)}function Jm(i,t){i.uniform4iv(this.addr,t)}function jm(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||uh,r[o])}function ig(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fh,r[o])}function sg(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ph,r[o])}function rg(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||dh,r[o])}function og(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Km;case 35668:case 35672:return $m;case 35669:case 35673:return Jm;case 5125:return jm;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var Ta=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}},Aa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}},Ra=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Co=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function ag(i,t,e){let n=i.name,s=n.length;for(Co.lastIndex=0;;){let r=Co.exec(n),o=Co.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sc(e,c===void 0?new Ta(a,i,t):new Aa(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ra(a),Sc(e,d)),e=d}}}var Pi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ag(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ug(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===rr&&e===sr?n="LinearDisplayP3ToLinearSRGB":t===sr&&e===rr&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case zr:return[n,"LinearTransferOETF"];case hn:case yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ec(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hg(i.getShaderSource(t),o)}else return s}function dg(i,t){let e=ug(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fg(i,t){let e;switch(t){case Su:e="Linear";break;case bu:e="Reinhard";break;case Eu:e="Cineon";break;case ul:e="ACESFilmic";break;case Tu:e="AgX";break;case Au:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ks=new C;function pg(){te.getLuminanceCoefficients(ks);let i=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ji(i){return i!==""}function wc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(xg,vg)}var yg=new Map;function vg(i,t){let e=Ht[t];if(e===void 0){let n=yg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ca(e)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(Mg,Sg)}function Sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Tg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case vu:t="ENVMAP_BLENDING_MIX";break;case Mu:t="ENVMAP_BLENDING_ADD";break}return t}function Ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bg(e),c=Eg(e),h=wg(e),d=Tg(e),u=Ag(e),m=mg(e),p=gg(r),x=s.createProgram(),f,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ji).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ji).join(`
`),g.length>0&&(g+=`
`)):(f=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),g=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Fn?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),o=Ca(o),o=wc(o,e),o=Tc(o,e),a=Ca(a),a=wc(a,e),a=Tc(a,e),o=Ac(o),a=Ac(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=M+f+o,v=M+g+a,R=bc(s,s.VERTEX_SHADER,_),T=bc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,R),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(b){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(T).trim(),Z=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,T);else{let $=Ec(s,R,"vertex"),q=Ec(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+I+`
`+$+`
`+q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||H==="")&&(F=!1);F&&(b.diagnostics={runnable:Z,programLog:I,vertexShader:{log:k,prefix:f},fragmentShader:{log:H,prefix:g}})}s.deleteShader(R),s.deleteShader(T),L=new Pi(s,x),X=_g(s,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let X;this.getAttributes=function(){return X===void 0&&w(this),X};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,lg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var Cg=0,Pa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ia(t),e.set(t,n)),n}},Ia=class{constructor(t){this.id=Cg++,this.code=t,this.usedTimes=0}};function Pg(i,t,e,n,s,r,o){let a=new rs,l=new Pa,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,b,I,k,H){let Z=k.fog,F=H.geometry,$=y.isMeshStandardMaterial?k.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),it=q&&q.mapping===Br?q.image.height:null,tt=x[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Tt=rt!==void 0?rt.length:0,Ft=0;F.morphAttributes.position!==void 0&&(Ft=1),F.morphAttributes.normal!==void 0&&(Ft=2),F.morphAttributes.color!==void 0&&(Ft=3);let Y,et,ot,lt;if(tt){let Bt=un[tt];Y=Bt.vertexShader,et=Bt.fragmentShader}else Y=y.vertexShader,et=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),lt=l.getFragmentShaderID(y);let Pt=i.getRenderTarget(),At=H.isInstancedMesh===!0,Wt=H.isBatchedMesh===!0,zt=!!y.map,Rt=!!y.matcap,U=!!q,we=!!y.aoMap,qt=!!y.lightMap,kt=!!y.bumpMap,Lt=!!y.normalMap,se=!!y.displacementMap,Dt=!!y.emissiveMap,A=!!y.metalnessMap,S=!!y.roughnessMap,V=y.anisotropy>0,j=y.clearcoat>0,nt=y.dispersion>0,J=y.iridescence>0,St=y.sheen>0,ht=y.transmission>0,pt=V&&!!y.anisotropyMap,Zt=j&&!!y.clearcoatMap,st=j&&!!y.clearcoatNormalMap,gt=j&&!!y.clearcoatRoughnessMap,Ct=J&&!!y.iridescenceMap,It=J&&!!y.iridescenceThicknessMap,mt=St&&!!y.sheenColorMap,Yt=St&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,ee=!!y.specularColorMap,N=!!y.specularIntensityMap,P=ht&&!!y.transmissionMap,D=ht&&!!y.thicknessMap,O=!!y.gradientMap,K=!!y.alphaMap,Q=y.alphaTest>0,_t=!!y.alphaHash,xt=!!y.extensions,Gt=Fn;y.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let wt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:et,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&H._colorsTexture!==null,instancing:At,instancingColor:At&&H.instanceColor!==null,instancingMorph:At&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Vn,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:Rt,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:it,aoMap:we,lightMap:qt,bumpMap:kt,normalMap:Lt,displacementMap:m&&se,emissiveMap:Dt,normalMapObjectSpace:Lt&&y.normalMapType===Iu,normalMapTangentSpace:Lt&&y.normalMapType===rh,metalnessMap:A,roughnessMap:S,anisotropy:V,anisotropyMap:pt,clearcoat:j,clearcoatMap:Zt,clearcoatNormalMap:st,clearcoatRoughnessMap:gt,dispersion:nt,iridescence:J,iridescenceMap:Ct,iridescenceThicknessMap:It,sheen:St,sheenColorMap:mt,sheenRoughnessMap:Yt,specularMap:Nt,specularColorMap:ee,specularIntensityMap:N,transmission:ht,transmissionMap:P,thicknessMap:D,gradientMap:O,opaque:y.transparent===!1&&y.blending===Ai&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:Q,alphaHash:_t,combine:y.combine,mapUv:zt&&f(y.map.channel),aoMapUv:we&&f(y.aoMap.channel),lightMapUv:qt&&f(y.lightMap.channel),bumpMapUv:kt&&f(y.bumpMap.channel),normalMapUv:Lt&&f(y.normalMap.channel),displacementMapUv:se&&f(y.displacementMap.channel),emissiveMapUv:Dt&&f(y.emissiveMap.channel),metalnessMapUv:A&&f(y.metalnessMap.channel),roughnessMapUv:S&&f(y.roughnessMap.channel),anisotropyMapUv:pt&&f(y.anisotropyMap.channel),clearcoatMapUv:Zt&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:It&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&f(y.sheenRoughnessMap.channel),specularMapUv:Nt&&f(y.specularMap.channel),specularColorMapUv:ee&&f(y.specularColorMap.channel),specularIntensityMapUv:N&&f(y.specularIntensityMap.channel),transmissionMapUv:P&&f(y.transmissionMap.channel),thicknessMapUv:D&&f(y.thicknessMap.channel),alphaMapUv:K&&f(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Lt||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(zt||K),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Re,flipSided:y.side===Ce,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function M(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)b.push(I),b.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(_(b,y),v(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){let b=x[y.type],I;if(b){let k=un[b];I=yd.clone(k.uniforms)}else I=y.uniforms;return I}function T(y,b){let I;for(let k=0,H=h.length;k<H;k++){let Z=h[k];if(Z.cacheKey===b){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new Rg(i,b,y,r),h.push(I)),I}function w(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function L(y){l.remove(y)}function X(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:R,acquireProgram:T,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:X}}function Ig(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,m,p,x,f){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:m,groupOrder:p,renderOrder:d.renderOrder,z:x,group:f},i[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=m,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=f),t++,g}function a(d,u,m,p,x,f){let g=o(d,u,m,p,x,f);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):e.push(g)}function l(d,u,m,p,x,f){let g=o(d,u,m,p,x,f);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||Lg),n.length>1&&n.sort(u||Cc),s.length>1&&s.sort(u||Cc)}function h(){for(let d=t,u=i.length;d<u;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Dg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pc,i.set(n,[o])):s>=r.length?(o=new Pc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new vt};break;case"SpotLight":e={position:new C,direction:new C,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Og=0;function Fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bg(i){let t=new Ug,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Jt,o=new Jt;function a(c){let h=0,d=0,u=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let m=0,p=0,x=0,f=0,g=0,M=0,_=0,v=0,R=0,T=0,w=0;c.sort(Fg);for(let X=0,y=c.length;X<y;X++){let b=c[X],I=b.color,k=b.intensity,H=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=I.r*k,d+=I.g*k,u+=I.b*k;else if(b.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(b.sh.coefficients[F],k);w++}else if(b.isDirectionalLight){let F=t.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let $=b.shadow,q=e.get(b);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=b.shadow.matrix,M++}n.directional[m]=F,m++}else if(b.isSpotLight){let F=t.get(b);F.position.setFromMatrixPosition(b.matrixWorld),F.color.copy(I).multiplyScalar(k),F.distance=H,F.coneCos=Math.cos(b.angle),F.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),F.decay=b.decay,n.spot[x]=F;let $=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,$.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[x]=$.matrix,b.castShadow){let q=e.get(b);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=Z,v++}x++}else if(b.isRectAreaLight){let F=t.get(b);F.color.copy(I).multiplyScalar(k),F.halfWidth.set(b.width*.5,0,0),F.halfHeight.set(0,b.height*.5,0),n.rectArea[f]=F,f++}else if(b.isPointLight){let F=t.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity),F.distance=b.distance,F.decay=b.decay,b.castShadow){let $=b.shadow,q=e.get(b);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=b.shadow.matrix,_++}n.point[p]=F,p++}else if(b.isHemisphereLight){let F=t.get(b);F.skyColor.copy(b.color).multiplyScalar(k),F.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[g]=F,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==m||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==f||L.hemiLength!==g||L.numDirectionalShadows!==M||L.numPointShadows!==_||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,L.directionalLength=m,L.pointLength=p,L.spotLength=x,L.rectAreaLength=f,L.hemiLength=g,L.numDirectionalShadows=M,L.numPointShadows=_,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=w,n.version=Og++)}function l(c,h){let d=0,u=0,m=0,p=0,x=0,f=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let _=c[g];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),d++}else if(_.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),m++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),o.identity(),r.copy(_.matrixWorld),r.premultiply(f),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),u++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:n}}function Ic(i){let t=new Bg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ic(i),t.set(s,[a])):r>=o.length?(a=new Ic(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var La=class extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function Vg(i,t,e){let n=new os,s=new ut,r=new ut,o=new pe,a=new La({depthPacking:Pu}),l=new Da,c={},h=e.maxTextureSize,d={[Bn]:Ce,[Ce]:Bn,[Re]:Re},u=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:kg,fragmentShader:Hg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let p=new le;p.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xt(p,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let g=this.type;this.render=function(T,w,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let X=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),I=i.state;I.setBlending(On),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=g!==Mn&&this.type===Mn,H=g===Mn&&this.type!==Mn;for(let Z=0,F=T.length;Z<F;Z++){let $=T[Z],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let it=q.getFrameExtents();if(s.multiply(it),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,q.mapSize.y=r.y)),q.map===null||k===!0||H===!0){let rt=this.type!==Mn?{minFilter:Oe,magFilter:Oe}:{};q.map!==null&&q.map.dispose(),q.map=new wn(s.x,s.y,rt),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let tt=q.getViewportCount();for(let rt=0;rt<tt;rt++){let Tt=q.getViewport(rt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),I.viewport(o),q.updateMatrices($,rt),n=q.getFrustum(),v(w,L,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===Mn&&M(q,L),q.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(X,y,b)};function M(T,w){let L=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,u,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,m,x,null)}function _(T,w,L,X){let y=null,b=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)y=b;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let I=y.uuid,k=w.uuid,H=c[I];H===void 0&&(H={},c[I]=H);let Z=H[k];Z===void 0&&(Z=y.clone(),H[k]=Z,w.addEventListener("dispose",R)),y=Z}if(y.visible=w.visible,y.wireframe=w.wireframe,X===Mn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let I=i.properties.get(y);I.light=L}return y}function v(T,w,L,X,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Mn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let k=t.update(T),H=T.material;if(Array.isArray(H)){let Z=k.groups;for(let F=0,$=Z.length;F<$;F++){let q=Z[F],it=H[q.materialIndex];if(it&&it.visible){let tt=_(T,it,X,y);T.onBeforeShadow(i,T,w,L,k,tt,q),i.renderBufferDirect(L,null,k,tt,T,q),T.onAfterShadow(i,T,w,L,k,tt,q)}}}else if(H.visible){let Z=_(T,H,X,y);T.onBeforeShadow(i,T,w,L,k,Z,null),i.renderBufferDirect(L,null,k,Z,T,null),T.onAfterShadow(i,T,w,L,k,Z,null)}}let I=T.children;for(let k=0,H=I.length;k<H;k++)v(I[k],w,L,X,y)}function R(T){T.target.removeEventListener("dispose",R);for(let L in c){let X=c[L],y=T.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}var Gg={[Fo]:Bo,[zo]:Vo,[ko]:Go,[Ii]:Ho,[Bo]:Fo,[Vo]:zo,[Go]:ko,[Ho]:Ii};function Wg(i){function t(){let N=!1,P=new pe,D=null,O=new pe(0,0,0,0);return{setMask:function(K){D!==K&&!N&&(i.colorMask(K,K,K,K),D=K)},setLocked:function(K){N=K},setClear:function(K,Q,_t,xt,Gt){Gt===!0&&(K*=xt,Q*=xt,_t*=xt),P.set(K,Q,_t,xt),O.equals(P)===!1&&(i.clearColor(K,Q,_t,xt),O.copy(P))},reset:function(){N=!1,D=null,O.set(-1,0,0,0)}}}function e(){let N=!1,P=!1,D=null,O=null,K=null;return{setReversed:function(Q){P=Q},setTest:function(Q){Q?ot(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Q){D!==Q&&!N&&(i.depthMask(Q),D=Q)},setFunc:function(Q){if(P&&(Q=Gg[Q]),O!==Q){switch(Q){case Fo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=Q}},setLocked:function(Q){N=Q},setClear:function(Q){K!==Q&&(i.clearDepth(Q),K=Q)},reset:function(){N=!1,D=null,O=null,K=null}}}function n(){let N=!1,P=null,D=null,O=null,K=null,Q=null,_t=null,xt=null,Gt=null;return{setTest:function(wt){N||(wt?ot(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(wt){P!==wt&&!N&&(i.stencilMask(wt),P=wt)},setFunc:function(wt,Bt,$t){(D!==wt||O!==Bt||K!==$t)&&(i.stencilFunc(wt,Bt,$t),D=wt,O=Bt,K=$t)},setOp:function(wt,Bt,$t){(Q!==wt||_t!==Bt||xt!==$t)&&(i.stencilOp(wt,Bt,$t),Q=wt,_t=Bt,xt=$t)},setLocked:function(wt){N=wt},setClear:function(wt){Gt!==wt&&(i.clearStencil(wt),Gt=wt)},reset:function(){N=!1,P=null,D=null,O=null,K=null,Q=null,_t=null,xt=null,Gt=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],m=null,p=!1,x=null,f=null,g=null,M=null,_=null,v=null,R=null,T=new vt(0,0,0),w=0,L=!1,X=null,y=null,b=null,I=null,k=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,F=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=F>=2);let q=null,it={},tt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Tt=new pe().fromArray(tt),Ft=new pe().fromArray(rt);function Y(N,P,D,O){let K=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<D;_t++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(P,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(P+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return Q}let et={};et[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),r.setFunc(Ii),qt(!1),kt(Ol),ot(i.CULL_FACE),U(On);function ot(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function lt(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function Pt(N,P){return h[N]!==P?(i.bindFramebuffer(N,P),h[N]=P,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=P),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=P),!0):!1}function At(N,P){let D=u,O=!1;if(N){D=d.get(P),D===void 0&&(D=[],d.set(P,D));let K=N.textures;if(D.length!==K.length||D[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,_t=K.length;Q<_t;Q++)D[Q]=i.COLOR_ATTACHMENT0+Q;D.length=K.length,O=!0}}else D[0]!==i.BACK&&(D[0]=i.BACK,O=!0);O&&i.drawBuffers(D)}function Wt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}let zt={[Qn]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};zt[ru]=i.MIN,zt[ou]=i.MAX;let Rt={[au]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[uu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,P,D,O,K,Q,_t,xt,Gt,wt){if(N===On){p===!0&&(lt(i.BLEND),p=!1);return}if(p===!1&&(ot(i.BLEND),p=!0),N!==nu){if(N!==x||wt!==L){if((f!==Qn||_!==Qn)&&(i.blendEquation(i.FUNC_ADD),f=Qn,_=Qn),wt)switch(N){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,M=null,v=null,R=null,T.set(0,0,0),w=0,x=N,L=wt}return}K=K||P,Q=Q||D,_t=_t||O,(P!==f||K!==_)&&(i.blendEquationSeparate(zt[P],zt[K]),f=P,_=K),(D!==g||O!==M||Q!==v||_t!==R)&&(i.blendFuncSeparate(Rt[D],Rt[O],Rt[Q],Rt[_t]),g=D,M=O,v=Q,R=_t),(xt.equals(T)===!1||Gt!==w)&&(i.blendColor(xt.r,xt.g,xt.b,Gt),T.copy(xt),w=Gt),x=N,L=!1}function we(N,P){N.side===Re?lt(i.CULL_FACE):ot(i.CULL_FACE);let D=N.side===Ce;P&&(D=!D),qt(D),N.blending===Ai&&N.transparent===!1?U(On):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);let O=N.stencilWrite;o.setTest(O),O&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(N){X!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),X=N)}function kt(N){N!==Qh?(ot(i.CULL_FACE),N!==y&&(N===Ol?i.cullFace(i.BACK):N===tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),y=N}function Lt(N){N!==b&&(Z&&i.lineWidth(N),b=N)}function se(N,P,D){N?(ot(i.POLYGON_OFFSET_FILL),(I!==P||k!==D)&&(i.polygonOffset(P,D),I=P,k=D)):lt(i.POLYGON_OFFSET_FILL)}function Dt(N){N?ot(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+H-1),q!==N&&(i.activeTexture(N),q=N)}function S(N,P,D){D===void 0&&(q===null?D=i.TEXTURE0+H-1:D=q);let O=it[D];O===void 0&&(O={type:void 0,texture:void 0},it[D]=O),(O.type!==N||O.texture!==P)&&(q!==D&&(i.activeTexture(D),q=D),i.bindTexture(N,P||et[N]),O.type=N,O.texture=P)}function V(){let N=it[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){Tt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Tt.copy(N))}function mt(N){Ft.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function Yt(N,P){let D=l.get(P);D===void 0&&(D=new WeakMap,l.set(P,D));let O=D.get(N);O===void 0&&(O=i.getUniformBlockIndex(P,N.name),D.set(N,O))}function Nt(N,P){let O=l.get(P).get(N);a.get(P)!==O&&(i.uniformBlockBinding(P,O,N.__bindingPointIndex),a.set(P,O))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,it={},h={},d=new WeakMap,u=[],m=null,p=!1,x=null,f=null,g=null,M=null,_=null,v=null,R=null,T=new vt(0,0,0),w=0,L=!1,X=null,y=null,b=null,I=null,k=null,Tt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ot,disable:lt,bindFramebuffer:Pt,drawBuffers:At,useProgram:Wt,setBlending:U,setMaterial:we,setFlipSided:qt,setCullFace:kt,setLineWidth:Lt,setPolygonOffset:se,setScissorTest:Dt,activeTexture:A,bindTexture:S,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:Nt,texStorage2D:Zt,texStorage3D:st,texSubImage2D:J,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:It,viewport:mt,reset:ee}}function Lc(i,t,e,n){let s=Xg(n);switch(e){case Qc:return i*t;case eh:return i*t;case nh:return i*t*2;case ml:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case ih:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case th:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:case Jo:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tr:case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sh:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xg(i){switch(i){case bn:case $c:return{byteLength:1,components:1};case is:case Jc:case ds:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case si:case dl:case dn:return{byteLength:4,components:1};case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,S){return m?new OffscreenCanvas(A,S):ar("canvas")}function x(A,S,V){let j=1,nt=Dt(A);if((nt.width>V||nt.height>V)&&(j=V/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(j*nt.width),St=Math.floor(j*nt.height);d===void 0&&(d=p(J,St));let ht=S?p(J,St):d;return ht.width=J,ht.height=St,ht.getContext("2d").drawImage(A,0,0,J,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+St+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function f(A){return A.generateMipmaps&&A.minFilter!==Oe&&A.minFilter!==nn}function g(A){i.generateMipmap(A)}function M(A,S,V,j,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),S===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let St=nt?ir:te.getTransfer(j);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=St===oe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(A,S){let V;return A?S===null||S===si||S===Ui?V=i.DEPTH24_STENCIL8:S===dn?V=i.DEPTH32F_STENCIL8:S===is&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===si||S===Ui?V=i.DEPTH_COMPONENT24:S===dn?V=i.DEPTH_COMPONENT32F:S===is&&(V=i.DEPTH_COMPONENT16),V}function v(A,S){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Oe&&A.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){let S=A.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&h.delete(S)}function T(A){let S=A.target;S.removeEventListener("dispose",T),X(S)}function w(A){let S=n.get(A);if(S.__webglInit===void 0)return;let V=A.source,j=u.get(V);if(j){let nt=j[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(A),Object.keys(j).length===0&&u.delete(V)}n.remove(A)}function L(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let V=A.source,j=u.get(V);delete j[S.__cacheKey],o.memory.textures--}function X(A){let S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let nt=0;nt<S.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=A.textures;for(let j=0,nt=V.length;j<nt;j++){let J=n.get(V[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(A)}let y=0;function b(){y=0}function I(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function k(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function H(A,S){let V=n.get(A);if(A.isVideoTexture&&Lt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(V,A,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function Z(A,S){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Ft(V,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function F(A,S){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Ft(V,A,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function $(A,S){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Y(V,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let q={[qo]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},it={[Oe]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},tt={[Lu]:i.NEVER,[Bu]:i.ALWAYS,[Du]:i.LESS,[oh]:i.LEQUAL,[Uu]:i.EQUAL,[Fu]:i.GEQUAL,[Nu]:i.GREATER,[Ou]:i.NOTEQUAL};function rt(A,S){if(S.type===dn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===to||S.magFilter===vs||S.magFilter===ii||S.minFilter===nn||S.minFilter===to||S.minFilter===vs||S.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Oe||S.minFilter!==vs&&S.minFilter!==ii||S.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Tt(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));let j=S.source,nt=u.get(j);nt===void 0&&(nt={},u.set(j,nt));let J=k(S);if(J!==A.__cacheKey){nt[J]===void 0&&(nt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[J].usedTimes++;let St=nt[A.__cacheKey];St!==void 0&&(nt[A.__cacheKey].usedTimes--,St.usedTimes===0&&L(S)),A.__cacheKey=J,A.__webglTexture=nt[J].texture}return V}function Ft(A,S,V){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let nt=Tt(A,S),J=S.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+V);let St=n.get(J);if(J.version!==St.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);let ht=te.getPrimaries(te.workingColorSpace),pt=S.colorSpace===Nn?null:te.getPrimaries(S.colorSpace),Zt=S.colorSpace===Nn||ht===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let st=x(S.image,!1,s.maxTextureSize);st=se(S,st);let gt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),It=M(S.internalFormat,gt,Ct,S.colorSpace,S.isVideoTexture);rt(j,S);let mt,Yt=S.mipmaps,Nt=S.isVideoTexture!==!0,ee=St.__version===void 0||nt===!0,N=J.dataReady,P=v(S,st);if(S.isDepthTexture)It=_(S.format===Ni,S.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,gt,Ct,null));else if(S.isDataTexture)if(Yt.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,P,It,Yt[0].width,Yt[0].height);for(let D=0,O=Yt.length;D<O;D++)mt=Yt[D],Nt?N&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,mt.width,mt.height,gt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,D,It,mt.width,mt.height,0,gt,Ct,mt.data);S.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,P,It,st.width,st.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,gt,Ct,st.data)):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,gt,Ct,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,P,It,Yt[0].width,Yt[0].height,st.depth);for(let D=0,O=Yt.length;D<O;D++)if(mt=Yt[D],S.format!==sn)if(gt!==null)if(Nt){if(N)if(S.layerUpdates.size>0){let K=Lc(mt.width,mt.height,S.format,S.type);for(let Q of S.layerUpdates){let _t=mt.data.subarray(Q*K/mt.data.BYTES_PER_ELEMENT,(Q+1)*K/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,Q,mt.width,mt.height,1,gt,_t,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,mt.width,mt.height,st.depth,gt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,It,mt.width,mt.height,st.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,mt.width,mt.height,st.depth,gt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,D,It,mt.width,mt.height,st.depth,0,gt,Ct,mt.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,P,It,Yt[0].width,Yt[0].height);for(let D=0,O=Yt.length;D<O;D++)mt=Yt[D],S.format!==sn?gt!==null?Nt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,D,It,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,mt.width,mt.height,gt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,D,It,mt.width,mt.height,0,gt,Ct,mt.data)}else if(S.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,P,It,st.width,st.height,st.depth),N)if(S.layerUpdates.size>0){let D=Lc(st.width,st.height,S.format,S.type);for(let O of S.layerUpdates){let K=st.data.subarray(O*D/st.data.BYTES_PER_ELEMENT,(O+1)*D/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,O,st.width,st.height,1,gt,Ct,K)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,Ct,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,gt,Ct,st.data);else if(S.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,P,It,st.width,st.height,st.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,Ct,st.data)):e.texImage3D(i.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,gt,Ct,st.data);else if(S.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,P,It,st.width,st.height);else{let D=st.width,O=st.height;for(let K=0;K<P;K++)e.texImage2D(i.TEXTURE_2D,K,It,D,O,0,gt,Ct,null),D>>=1,O>>=1}}else if(Yt.length>0){if(Nt&&ee){let D=Dt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,P,It,D.width,D.height)}for(let D=0,O=Yt.length;D<O;D++)mt=Yt[D],Nt?N&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,gt,Ct,mt):e.texImage2D(i.TEXTURE_2D,D,It,gt,Ct,mt);S.generateMipmaps=!1}else if(Nt){if(ee){let D=Dt(st);e.texStorage2D(i.TEXTURE_2D,P,It,D.width,D.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ct,st)}else e.texImage2D(i.TEXTURE_2D,0,It,gt,Ct,st);f(S)&&g(j),St.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,V){if(S.image.length!==6)return;let j=Tt(A,S),nt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let J=n.get(nt);if(nt.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+V);let St=te.getPrimaries(te.workingColorSpace),ht=S.colorSpace===Nn?null:te.getPrimaries(S.colorSpace),pt=S.colorSpace===Nn||St===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let O=0;O<6;O++)!Zt&&!st?gt[O]=x(S.image[O],!0,s.maxCubemapSize):gt[O]=st?S.image[O].image:S.image[O],gt[O]=se(S,gt[O]);let Ct=gt[0],It=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),Yt=M(S.internalFormat,It,mt,S.colorSpace),Nt=S.isVideoTexture!==!0,ee=J.__version===void 0||j===!0,N=nt.dataReady,P=v(S,Ct);rt(i.TEXTURE_CUBE_MAP,S);let D;if(Zt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,P,Yt,Ct.width,Ct.height);for(let O=0;O<6;O++){D=gt[O].mipmaps;for(let K=0;K<D.length;K++){let Q=D[K];S.format!==sn?It!==null?Nt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K,0,0,Q.width,Q.height,It,Q.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K,Yt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K,0,0,Q.width,Q.height,It,mt,Q.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K,Yt,Q.width,Q.height,0,It,mt,Q.data)}}}else{if(D=S.mipmaps,Nt&&ee){D.length>0&&P++;let O=Dt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,P,Yt,O.width,O.height)}for(let O=0;O<6;O++)if(st){Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,gt[O].width,gt[O].height,It,mt,gt[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Yt,gt[O].width,gt[O].height,0,It,mt,gt[O].data);for(let K=0;K<D.length;K++){let _t=D[K].image[O].image;Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K+1,0,0,_t.width,_t.height,It,mt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K+1,Yt,_t.width,_t.height,0,It,mt,_t.data)}}else{Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,It,mt,gt[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Yt,It,mt,gt[O]);for(let K=0;K<D.length;K++){let Q=D[K];Nt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K+1,0,0,It,mt,Q.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,K+1,Yt,It,mt,Q.image[O])}}}f(S)&&g(i.TEXTURE_CUBE_MAP),J.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function et(A,S,V,j,nt,J){let St=r.convert(V.format,V.colorSpace),ht=r.convert(V.type),pt=M(V.internalFormat,St,ht,V.colorSpace);if(!n.get(S).__hasExternalTextures){let st=Math.max(1,S.width>>J),gt=Math.max(1,S.height>>J);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,pt,st,gt,S.depth,0,St,ht,null):e.texImage2D(nt,J,pt,st,gt,0,St,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),kt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,n.get(V).__webglTexture,0,qt(S)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,n.get(V).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let j=S.depthTexture,nt=j&&j.isDepthTexture?j.type:null,J=_(S.stencilBuffer,nt),St=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=qt(S);kt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,J,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,A)}else{let j=S.textures;for(let nt=0;nt<j.length;nt++){let J=j[nt],St=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),pt=M(J.internalFormat,St,ht,J.colorSpace),Zt=qt(S);V&&kt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,pt,S.width,S.height):kt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let j=n.get(S.depthTexture).__webglTexture,nt=qt(S);if(S.depthTexture.format===Ri)kt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ni)kt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(A){let S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");lt(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ot(S.__webglDepthbuffer[j],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ot(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,S,V){let j=n.get(A);S!==void 0&&et(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Pt(A)}function Wt(A){let S=A.texture,V=n.get(A),j=n.get(S);A.addEventListener("dispose",T);let nt=A.textures,J=A.isWebGLCubeRenderTarget===!0,St=nt.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ht]=[];for(let pt=0;pt<S.mipmaps.length;pt++)V.__webglFramebuffer[ht][pt]=i.createFramebuffer()}else V.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)V.__webglFramebuffer[ht]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(St)for(let ht=0,pt=nt.length;ht<pt;ht++){let Zt=n.get(nt[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&kt(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){let pt=nt[ht];V.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ht]);let Zt=r.convert(pt.format,pt.colorSpace),st=r.convert(pt.type),gt=M(pt.internalFormat,Zt,st,pt.colorSpace,A.isXRRenderTarget===!0),Ct=qt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,V.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),rt(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)et(V.__webglFramebuffer[ht][pt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else et(V.__webglFramebuffer[ht],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);f(S)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,pt=nt.length;ht<pt;ht++){let Zt=nt[ht],st=n.get(Zt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),rt(i.TEXTURE_2D,Zt),et(V.__webglFramebuffer,A,Zt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),f(Zt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),rt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)et(V.__webglFramebuffer[pt],A,S,i.COLOR_ATTACHMENT0,ht,pt);else et(V.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ht,0);f(S)&&g(ht),e.unbindTexture()}A.depthBuffer&&Pt(A)}function zt(A){let S=A.textures;for(let V=0,j=S.length;V<j;V++){let nt=S[V];if(f(nt)){let J=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(nt).__webglTexture;e.bindTexture(J,St),g(J),e.unbindTexture()}}}let Rt=[],U=[];function we(A){if(A.samples>0){if(kt(A)===!1){let S=A.textures,V=A.width,j=A.height,nt=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(A),ht=S.length>1;if(ht)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);let Zt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,nt,i.NEAREST),l===!0&&(Rt.length=0,U.length=0,Rt.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(J),U.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);let Zt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function qt(A){return Math.min(s.maxSamples,A.samples)}function kt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function se(A,S){let V=A.colorSpace,j=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Vn&&V!==Nn&&(te.getTransfer(V)===oe?(j!==sn||nt!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=At,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=kt}function Yg(i,t){function e(n,s=Nn){let r,o=te.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.BYTE;if(n===Jc)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===th)return i.RGB;if(n===sn)return i.RGBA;if(n===eh)return i.LUMINANCE;if(n===nh)return i.LUMINANCE_ALPHA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===ih)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===$s||n===Js||n===js||n===Qs)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Ko||n===$o||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===_a||n===xa||n===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ua=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},be=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),g=this._getHandJoint(c,x);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,p=.005;c.inputState.pinching&&u>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`,Na=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ue({vertexShader:Kg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oa=class extends En{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,p=null,x=new Na,f=e.getContextAttributes(),g=null,M=null,_=[],v=[],R=new ut,T=null,w=new Le;w.layers.enable(1),w.viewport=new pe;let L=new Le;L.layers.enable(2),L.viewport=new pe;let X=[w,L],y=new Ua;y.layers.enable(1),y.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=_[Y];return et===void 0&&(et=new ts,_[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=_[Y];return et===void 0&&(et=new ts,_[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=_[Y];return et===void 0&&(et=new ts,_[Y]=et),et.getHandSpace()};function k(Y){let et=v.indexOf(Y.inputSource);if(et===-1)return;let ot=_[et];ot!==void 0&&(ot.update(Y.inputSource,Y.frame,c||o),ot.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<_.length;Y++){let et=v[Y];et!==null&&(v[Y]=null,_[Y].disconnect(et))}b=null,I=null,x.reset(),t.setRenderTarget(g),m=null,u=null,d=null,s=null,M=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new wn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,ot=null,lt=null;f.depth&&(lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?Ni:Ri,ot=f.stencil?Ui:si);let Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new wn(u.textureWidth,u.textureHeight,{format:sn,type:bn,depthTexture:new gr(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Y){for(let et=0;et<Y.removed.length;et++){let ot=Y.removed[et],lt=v.indexOf(ot);lt>=0&&(v[lt]=null,_[lt].disconnect(ot))}for(let et=0;et<Y.added.length;et++){let ot=Y.added[et],lt=v.indexOf(ot);if(lt===-1){for(let At=0;At<_.length;At++)if(At>=v.length){v.push(ot),lt=At;break}else if(v[At]===null){v[At]=ot,lt=At;break}if(lt===-1)break}let Pt=_[lt];Pt&&Pt.connect(ot)}}let F=new C,$=new C;function q(Y,et,ot){F.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(ot.matrixWorld);let lt=F.distanceTo($),Pt=et.projectionMatrix.elements,At=ot.projectionMatrix.elements,Wt=Pt[14]/(Pt[10]-1),zt=Pt[14]/(Pt[10]+1),Rt=(Pt[9]+1)/Pt[5],U=(Pt[9]-1)/Pt[5],we=(Pt[8]-1)/Pt[0],qt=(At[8]+1)/At[0],kt=Wt*we,Lt=Wt*qt,se=lt/(-we+qt),Dt=se*-we;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Dt),Y.translateZ(se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let A=Wt+se,S=zt+se,V=kt-Dt,j=Lt+(lt-Dt),nt=Rt*zt/S*A,J=U*zt/S*A;Y.projectionMatrix.makePerspective(V,j,nt,J,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,ot=Y.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(ot=x.depthFar)),y.near=L.near=w.near=et,y.far=L.far=w.far=ot,(b!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,I=y.far);let lt=Y.parent,Pt=y.cameras;it(y,lt);for(let At=0;At<Pt.length;At++)it(Pt[At],lt);Pt.length===2?q(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),tt(Y,y,lt)};function tt(Y,et,ot){ot===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(ot.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let rt=null;function Tt(Y,et){if(h=et.getViewerPose(c||o),p=et,h!==null){let ot=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let lt=!1;ot.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let At=0;At<ot.length;At++){let Wt=ot[At],zt=null;if(m!==null)zt=m.getViewport(Wt);else{let U=d.getViewSubImage(u,Wt);zt=U.viewport,At===0&&(t.setRenderTargetTextures(M,U.colorTexture,u.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let Rt=X[At];Rt===void 0&&(Rt=new Le,Rt.layers.enable(At),Rt.viewport=new pe,X[At]=Rt),Rt.matrix.fromArray(Wt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Wt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(zt.x,zt.y,zt.width,zt.height),At===0&&(y.matrix.copy(Rt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(Rt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let At=d.getDepthInformation(ot[0]);At&&At.isValid&&At.texture&&x.init(t,At,s.renderState)}}for(let ot=0;ot<_.length;ot++){let lt=v[ot],Pt=_[ot];lt!==null&&Pt!==void 0&&Pt.update(lt,et,c||o)}rt&&rt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let Ft=new hh;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){rt=Y},this.dispose=function(){}}},Jn=new fn,Jg=new Jt;function jg(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,ch(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,M,_,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),d(f,g)):g.isMeshPhongMaterial?(r(f,g),h(f,g)):g.isMeshStandardMaterial?(r(f,g),u(f,g),g.isMeshPhysicalMaterial&&m(f,g,v)):g.isMeshMatcapMaterial?(r(f,g),p(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),x(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(o(f,g),g.isLineDashedMaterial&&a(f,g)):g.isPointsMaterial?l(f,g,M,_):g.isSpriteMaterial?c(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Ce&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Ce&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);let M=t.get(g),_=M.envMap,v=M.envMapRotation;_&&(f.envMap.value=_,Jn.copy(v),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),f.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Jn)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function o(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function a(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,M,_){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*M,f.scale.value=_*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function c(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function d(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function u(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function m(f,g,M){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ce&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function p(f,g){g.matcap&&(f.matcap.value=g.matcap)}function x(f,g){let M=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=s[M.id];v===void 0&&(p(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",f));let R=_.program;n.updateUBOMapping(M,R);let T=t.render.frame;r[M.id]!==T&&(u(M),r[M.id]=T)}function h(M){let _=d();M.__bindingPointIndex=_;let v=i.createBuffer(),R=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let _=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,w=v.length;T<w;T++){let L=Array.isArray(v[T])?v[T]:[v[T]];for(let X=0,y=L.length;X<y;X++){let b=L[X];if(m(b,T,X,R)===!0){let I=b.__offset,k=Array.isArray(b.value)?b.value:[b.value],H=0;for(let Z=0;Z<k.length;Z++){let F=k[Z],$=x(F);typeof F=="number"||typeof F=="boolean"?(b.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,I+H,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=0,b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=0,b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=0):(F.toArray(b.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,_,v,R){let T=M.value,w=_+"_"+v;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{let L=R[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function p(M){let _=M.uniforms,v=0,R=16;for(let w=0,L=_.length;w<L;w++){let X=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,b=X.length;y<b;y++){let I=X[y],k=Array.isArray(I.value)?I.value:[I.value];for(let H=0,Z=k.length;H<Z;H++){let F=k[H],$=x(F),q=v%R,it=q%$.boundary,tt=q+it;v+=it,tt!==0&&R-tt<$.storage&&(v+=R-tt),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=$.storage}}}let T=v%R;return T>0&&(v+=R-T),M.__size=v,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function f(M){let _=M.target;_.removeEventListener("dispose",f);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var _r=class{constructor(t={}){let{canvas:e=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),p=new Int32Array(4),x=null,f=null,g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=Fn,this.toneMappingExposure=1;let _=this,v=!1,R=0,T=0,w=null,L=-1,X=null,y=new pe,b=new pe,I=null,k=new vt(0),H=0,Z=e.width,F=e.height,$=1,q=null,it=null,tt=new pe(0,0,Z,F),rt=new pe(0,0,Z,F),Tt=!1,Ft=new os,Y=!1,et=!1,ot=new Jt,lt=new Jt,Pt=new C,At=new pe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function Rt(){return w===null?$:1}let U=n;function we(E,B){return e.getContext(E,B)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",Q,!1),U===null){let B="webgl2";if(U=we(B,E),U===null)throw we(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qt,kt,Lt,se,Dt,A,S,V,j,nt,J,St,ht,pt,Zt,st,gt,Ct,It,mt,Yt,Nt,ee,N;function P(){qt=new mm(U),qt.init(),Nt=new Yg(U,qt),kt=new cm(U,qt,t,Nt),Lt=new Wg(U),kt.reverseDepthBuffer&&Lt.buffers.depth.setReversed(!0),se=new xm(U),Dt=new Ig,A=new qg(U,qt,Lt,Dt,kt,Nt,se),S=new um(_),V=new pm(_),j=new Ed(U),ee=new am(U,j),nt=new gm(U,j,se,ee),J=new vm(U,nt,j,se),It=new ym(U,kt,A),st=new hm(Dt),St=new Pg(_,S,V,qt,kt,ee,st),ht=new jg(_,Dt),pt=new Dg,Zt=new zg(qt),Ct=new om(_,S,V,Lt,J,u,l),gt=new Vg(_,J,kt),N=new Qg(U,se,kt,Lt),mt=new lm(U,qt,se),Yt=new _m(U,qt,se),se.programs=St.programs,_.capabilities=kt,_.extensions=qt,_.properties=Dt,_.renderLists=pt,_.shadowMap=gt,_.state=Lt,_.info=se}P();let D=new Oa(_,U);this.xr=D,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Z,F,!1))},this.getSize=function(E){return E.set(Z,F)},this.setSize=function(E,B,G=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,F=B,e.width=Math.floor(E*$),e.height=Math.floor(B*$),G===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Z*$,F*$).floor()},this.setDrawingBufferSize=function(E,B,G){Z=E,F=B,$=G,e.width=Math.floor(E*G),e.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,B,G,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,B,G,W),Lt.viewport(y.copy(tt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,B,G,W){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,B,G,W),Lt.scissor(b.copy(rt).multiplyScalar($).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(E){Lt.setScissorTest(Tt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,B=!0,G=!0){let W=0;if(E){let z=!1;if(w!==null){let at=w.texture.format;z=at===xl||at===_l||at===gl}if(z){let at=w.texture.type,dt=at===bn||at===si||at===is||at===Ui||at===fl||at===pl,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Ut=yt.r,Ot=yt.g,bt=yt.b;dt?(m[0]=Ut,m[1]=Ot,m[2]=bt,m[3]=Mt,U.clearBufferuiv(U.COLOR,0,m)):(p[0]=Ut,p[1]=Ot,p[2]=bt,p[3]=Mt,U.clearBufferiv(U.COLOR,0,p))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),pt.dispose(),Zt.dispose(),Dt.dispose(),S.dispose(),V.dispose(),J.dispose(),ee.dispose(),N.dispose(),St.dispose(),D.dispose(),D.removeEventListener("sessionstart",Ye),D.removeEventListener("sessionend",$e),ze.stop()};function O(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let E=se.autoReset,B=gt.enabled,G=gt.autoUpdate,W=gt.needsUpdate,z=gt.type;P(),se.autoReset=E,gt.enabled=B,gt.autoUpdate=G,gt.needsUpdate=W,gt.type=z}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){let B=E.target;B.removeEventListener("dispose",_t),xt(B)}function xt(E){Gt(E),Dt.remove(E)}function Gt(E){let B=Dt.get(E).programs;B!==void 0&&(B.forEach(function(G){St.releaseProgram(G)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,W,z,at){B===null&&(B=Wt);let dt=z.isMesh&&z.matrixWorld.determinant()<0,yt=Kh(E,B,G,W,z);Lt.setMaterial(W,dt);let Mt=G.index,Ut=1;if(W.wireframe===!0){if(Mt=nt.getWireframeAttribute(G),Mt===void 0)return;Ut=2}let Ot=G.drawRange,bt=G.attributes.position,ne=Ot.start*Ut,re=(Ot.start+Ot.count)*Ut;at!==null&&(ne=Math.max(ne,at.start*Ut),re=Math.min(re,(at.start+at.count)*Ut)),Mt!==null?(ne=Math.max(ne,0),re=Math.min(re,Mt.count)):bt!=null&&(ne=Math.max(ne,0),re=Math.min(re,bt.count));let fe=re-ne;if(fe<0||fe===1/0)return;ee.setup(z,W,yt,G,Mt);let ke,jt=mt;if(Mt!==null&&(ke=j.get(Mt),jt=Yt,jt.setIndex(ke)),z.isMesh)W.wireframe===!0?(Lt.setLineWidth(W.wireframeLinewidth*Rt()),jt.setMode(U.LINES)):jt.setMode(U.TRIANGLES);else if(z.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),Lt.setLineWidth(Et*Rt()),z.isLineSegments?jt.setMode(U.LINES):z.isLineLoop?jt.setMode(U.LINE_LOOP):jt.setMode(U.LINE_STRIP)}else z.isPoints?jt.setMode(U.POINTS):z.isSprite&&jt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Et=z._multiDrawStarts,Se=z._multiDrawCounts,Qt=z._multiDrawCount,Je=Mt?j.get(Mt).bytesPerElement:1,li=Dt.get(W).currentProgram.getUniforms();for(let He=0;He<Qt;He++)li.setValue(U,"_gl_DrawID",He),jt.render(Et[He]/Je,Se[He])}else if(z.isInstancedMesh)jt.renderInstances(ne,fe,z.count);else if(G.isInstancedBufferGeometry){let Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,Et);jt.renderInstances(ne,fe,Se)}else jt.render(ne,fe)};function wt(E,B,G){E.transparent===!0&&E.side===Re&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,ys(E,B,G),E.side=Bn,E.needsUpdate=!0,ys(E,B,G),E.side=Re):ys(E,B,G)}this.compile=function(E,B,G=null){G===null&&(G=E),f=Zt.get(G),f.init(B),M.push(f),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let at=z.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){let yt=at[dt];wt(yt,G,z),W.add(yt)}else wt(at,G,z),W.add(at)}),M.pop(),f=null,W},this.compileAsync=function(E,B,G=null){let W=this.compile(E,B,G);return new Promise(z=>{function at(){if(W.forEach(function(dt){Dt.get(dt).currentProgram.isReady()&&W.delete(dt)}),W.size===0){z(E);return}setTimeout(at,10)}qt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Bt=null;function $t(E){Bt&&Bt(E)}function Ye(){ze.stop()}function $e(){ze.start()}let ze=new hh;ze.setAnimationLoop($t),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(E){Bt=E,D.setAnimationLoop(E),E===null?ze.stop():ze.start()},D.addEventListener("sessionstart",Ye),D.addEventListener("sessionend",$e),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(B),B=D.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,B,w),f=Zt.get(E,M.length),f.init(B),M.push(f),lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ft.setFromProjectionMatrix(lt),et=this.localClippingEnabled,Y=st.init(this.clippingPlanes,et),x=pt.get(E,g.length),x.init(),g.push(x),D.enabled===!0&&D.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&Xn(at,B,-1/0,_.sortObjects)}Xn(E,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,it),zt=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,zt&&Ct.addToRenderList(x,E),this.info.render.frame++,Y===!0&&st.beginShadows();let G=f.state.shadowsArray;gt.render(G,E,B),Y===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=x.opaque,z=x.transmissive;if(f.setupLights(),B.isArrayCamera){let at=B.cameras;if(z.length>0)for(let dt=0,yt=at.length;dt<yt;dt++){let Mt=at[dt];Il(W,z,E,Mt)}zt&&Ct.render(E);for(let dt=0,yt=at.length;dt<yt;dt++){let Mt=at[dt];Pl(x,E,Mt,Mt.viewport)}}else z.length>0&&Il(W,z,E,B),zt&&Ct.render(E),Pl(x,E,B);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,B),ee.resetDefaultState(),L=-1,X=null,M.pop(),M.length>0?(f=M[M.length-1],Y===!0&&st.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Xn(E,B,G,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ft.intersectsSprite(E)){W&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let dt=J.update(E),yt=E.material;yt.visible&&x.push(E,dt,yt,G,At.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ft.intersectsObject(E))){let dt=J.update(E),yt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),At.copy(dt.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(yt)){let Mt=dt.groups;for(let Ut=0,Ot=Mt.length;Ut<Ot;Ut++){let bt=Mt[Ut],ne=yt[bt.materialIndex];ne&&ne.visible&&x.push(E,dt,ne,G,At.z,bt)}}else yt.visible&&x.push(E,dt,yt,G,At.z,null)}}let at=E.children;for(let dt=0,yt=at.length;dt<yt;dt++)Xn(at[dt],B,G,W)}function Pl(E,B,G,W){let z=E.opaque,at=E.transmissive,dt=E.transparent;f.setupLightsView(G),Y===!0&&st.setGlobalState(_.clippingPlanes,G),W&&Lt.viewport(y.copy(W)),z.length>0&&xs(z,B,G),at.length>0&&xs(at,B,G),dt.length>0&&xs(dt,B,G),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Il(E,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?ds:bn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let at=f.state.transmissionRenderTarget[W.id],dt=W.viewport||y;at.setSize(dt.z,dt.w);let yt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(k),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),zt&&Ct.render(G);let Mt=_.toneMapping;_.toneMapping=Fn;let Ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Y===!0&&st.setGlobalState(_.clippingPlanes,W),xs(E,G,W),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let bt=0,ne=B.length;bt<ne;bt++){let re=B[bt],fe=re.object,ke=re.geometry,jt=re.material,Et=re.group;if(jt.side===Re&&fe.layers.test(W.layers)){let Se=jt.side;jt.side=Ce,jt.needsUpdate=!0,Ll(fe,G,W,ke,jt,Et),jt.side=Se,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}_.setRenderTarget(yt),_.setClearColor(k,H),Ut!==void 0&&(W.viewport=Ut),_.toneMapping=Mt}function xs(E,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,at=E.length;z<at;z++){let dt=E[z],yt=dt.object,Mt=dt.geometry,Ut=W===null?dt.material:W,Ot=dt.group;yt.layers.test(G.layers)&&Ll(yt,B,G,Mt,Ut,Ot)}}function Ll(E,B,G,W,z,at){E.onBeforeRender(_,B,G,W,z,at),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,B,G,W,E,at),z.transparent===!0&&z.side===Re&&z.forceSinglePass===!1?(z.side=Ce,z.needsUpdate=!0,_.renderBufferDirect(G,B,W,z,E,at),z.side=Bn,z.needsUpdate=!0,_.renderBufferDirect(G,B,W,z,E,at),z.side=Re):_.renderBufferDirect(G,B,W,z,E,at),E.onAfterRender(_,B,G,W,z,at)}function ys(E,B,G){B.isScene!==!0&&(B=Wt);let W=Dt.get(E),z=f.state.lights,at=f.state.shadowsArray,dt=z.state.version,yt=St.getParameters(E,z.state,at,B,G),Mt=St.getProgramCacheKey(yt),Ut=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",_t),Ut=new Map,W.programs=Ut);let Ot=Ut.get(Mt);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===dt)return Ul(E,yt),Ot}else yt.uniforms=St.getUniforms(E),E.onBeforeCompile(yt,_),Ot=St.acquireProgram(yt,Mt),Ut.set(Mt,Ot),W.uniforms=yt.uniforms;let bt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=st.uniform),Ul(E,yt),W.needsLights=Jh(E),W.lightsStateVersion=dt,W.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.directionalShadowMap.value=z.state.directionalShadowMap,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotShadowMap.value=z.state.spotShadowMap,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMap.value=z.state.pointShadowMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function Dl(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Pi.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ul(E,B){let G=Dt.get(E);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Kh(E,B,G,W,z){B.isScene!==!0&&(B=Wt),A.resetTextureUnits();let at=B.fog,dt=W.isMeshStandardMaterial?B.environment:null,yt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Vn,Mt=(W.isMeshStandardMaterial?V:S).get(W.envMap||dt),Ut=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,re=!!G.morphAttributes.color,fe=Fn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fe=_.toneMapping);let ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=ke!==void 0?ke.length:0,Et=Dt.get(W),Se=f.state.lights;if(Y===!0&&(et===!0||E!==X)){let Ze=E===X&&W.id===L;st.setState(W,E,Ze)}let Qt=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Se.state.version||Et.outputColorSpace!==yt||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==Mt||W.fog===!0&&Et.fog!==at||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==st.numPlanes||Et.numIntersection!==st.numIntersection)||Et.vertexAlphas!==Ut||Et.vertexTangents!==Ot||Et.morphTargets!==bt||Et.morphNormals!==ne||Et.morphColors!==re||Et.toneMapping!==fe||Et.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,Et.__version=W.version);let Je=Et.currentProgram;Qt===!0&&(Je=ys(W,B,z));let li=!1,He=!1,Jr=!1,me=Je.getUniforms(),Rn=Et.uniforms;if(Lt.useProgram(Je.program)&&(li=!0,He=!0,Jr=!0),W.id!==L&&(L=W.id,He=!0),li||X!==E){kt.reverseDepthBuffer?(ot.copy(E.projectionMatrix),id(ot),sd(ot),me.setValue(U,"projectionMatrix",ot)):me.setValue(U,"projectionMatrix",E.projectionMatrix),me.setValue(U,"viewMatrix",E.matrixWorldInverse);let Ze=me.map.cameraPosition;Ze!==void 0&&Ze.setValue(U,Pt.setFromMatrixPosition(E.matrixWorld)),kt.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&me.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,He=!0,Jr=!0)}if(z.isSkinnedMesh){me.setOptional(U,z,"bindMatrix"),me.setOptional(U,z,"bindMatrixInverse");let Ze=z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),me.setValue(U,"boneTexture",Ze.boneTexture,A))}z.isBatchedMesh&&(me.setOptional(U,z,"batchingTexture"),me.setValue(U,"batchingTexture",z._matricesTexture,A),me.setOptional(U,z,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",z._indirectTexture,A),me.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",z._colorsTexture,A));let jr=G.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&It.update(z,G,Je),(He||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,me.setValue(U,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Rn.envMap.value=Mt,Rn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Rn.envMapIntensity.value=B.environmentIntensity),He&&(me.setValue(U,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&$h(Rn,Jr),at&&W.fog===!0&&ht.refreshFogUniforms(Rn,at),ht.refreshMaterialUniforms(Rn,W,$,F,f.state.transmissionRenderTarget[E.id]),Pi.upload(U,Dl(Et),Rn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pi.upload(U,Dl(Et),Rn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&me.setValue(U,"center",z.center),me.setValue(U,"modelViewMatrix",z.modelViewMatrix),me.setValue(U,"normalMatrix",z.normalMatrix),me.setValue(U,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ze=W.uniformsGroups;for(let Qr=0,jh=Ze.length;Qr<jh;Qr++){let Nl=Ze[Qr];N.update(Nl,Je),N.bind(Nl,Je)}}return Je}function $h(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Jh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,B,G){Dt.get(E.texture).__webglTexture=B,Dt.get(E.depthTexture).__webglTexture=G;let W=Dt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){let G=Dt.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){w=E,R=B,T=G;let W=!0,z=null,at=!1,dt=!1;if(E){let Mt=Dt.get(E);if(Mt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Mt.__hasExternalTextures)A.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let bt=E.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Dt.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);let Ot=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?z=Ot[B][G]:z=Ot[B],at=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[G]:z=Ot,y.copy(E.viewport),b.copy(E.scissor),I=E.scissorTest}else y.copy(tt).multiplyScalar($).floor(),b.copy(rt).multiplyScalar($).floor(),I=Tt;if(Lt.bindFramebuffer(U.FRAMEBUFFER,z)&&W&&Lt.drawBuffers(E,z),Lt.viewport(y),Lt.scissor(b),Lt.setScissorTest(I),at){let Mt=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,G)}else if(dt){let Mt=Dt.get(E.texture),Ut=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Ut)}L=-1},this.readRenderTargetPixels=function(E,B,G,W,z,at,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Lt.bindFramebuffer(U.FRAMEBUFFER,yt);try{let Mt=E.texture,Ut=Mt.format,Ot=Mt.type;if(!kt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&G>=0&&G<=E.height-z&&U.readPixels(B,G,W,z,Nt.convert(Ut),Nt.convert(Ot),at)}finally{let Mt=w!==null?Dt.get(w).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(E,B,G,W,z,at,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){let Mt=E.texture,Ut=Mt.format,Ot=Mt.type;if(!kt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-W&&G>=0&&G<=E.height-z){Lt.bindFramebuffer(U.FRAMEBUFFER,yt);let bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,at.byteLength,U.STREAM_READ),U.readPixels(B,G,W,z,Nt.convert(Ut),Nt.convert(Ot),0);let ne=w!==null?Dt.get(w).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,ne);let re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nd(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,at),U.deleteBuffer(bt),U.deleteSync(re),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,G=0){E.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(E.image.width*W),at=Math.floor(E.image.height*W),dt=B!==null?B.x:0,yt=B!==null?B.y:0;A.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,dt,yt,z,at),Lt.unbindTexture()},this.copyTextureToTexture=function(E,B,G=null,W=null,z=0){E.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],B=arguments[2],z=arguments[3]||0,G=null);let at,dt,yt,Mt,Ut,Ot;G!==null?(at=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.min.x,Mt=G.min.y):(at=E.image.width,dt=E.image.height,yt=0,Mt=0),W!==null?(Ut=W.x,Ot=W.y):(Ut=0,Ot=0);let bt=Nt.convert(B.format),ne=Nt.convert(B.type);A.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let re=U.getParameter(U.UNPACK_ROW_LENGTH),fe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ke=U.getParameter(U.UNPACK_SKIP_PIXELS),jt=U.getParameter(U.UNPACK_SKIP_ROWS),Et=U.getParameter(U.UNPACK_SKIP_IMAGES),Se=E.isCompressedTexture?E.mipmaps[z]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Ut,Ot,at,dt,bt,ne,Se.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Ut,Ot,Se.width,Se.height,bt,Se.data):U.texSubImage2D(U.TEXTURE_2D,z,Ut,Ot,at,dt,bt,ne,Se),U.pixelStorei(U.UNPACK_ROW_LENGTH,re),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Et),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G=null,W=null,z=0){E.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0);let at,dt,yt,Mt,Ut,Ot,bt,ne,re,fe=E.isCompressedTexture?E.mipmaps[z]:E.image;G!==null?(at=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.max.z-G.min.z,Mt=G.min.x,Ut=G.min.y,Ot=G.min.z):(at=fe.width,dt=fe.height,yt=fe.depth,Mt=0,Ut=0,Ot=0),W!==null?(bt=W.x,ne=W.y,re=W.z):(bt=0,ne=0,re=0);let ke=Nt.convert(B.format),jt=Nt.convert(B.type),Et;if(B.isData3DTexture)A.setTexture3D(B,0),Et=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)A.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Se=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),li=U.getParameter(U.UNPACK_SKIP_ROWS),He=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Et,z,bt,ne,re,at,dt,yt,ke,jt,fe.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,z,bt,ne,re,at,dt,yt,ke,fe.data):U.texSubImage3D(Et,z,bt,ne,re,at,dt,yt,ke,jt,fe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Se),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,li),U.pixelStorei(U.UNPACK_SKIP_IMAGES,He),z===0&&B.generateMipmaps&&U.generateMipmap(Et),Lt.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Lt.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,Lt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===yl?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===zr?"display-p3":"srgb"}};var xr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Fa=class extends We{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Oe,h=Oe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bi=new Jt,Dc=new Jt,Hs=[],Uc=new Tn,t0=new Jt,Zi=new Xt,Ki=new rn,Bi=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Uc.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Uc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Ki.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(Ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),t.ray.intersectsSphere(Ki)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),Dc.multiplyMatrices(n,bi),Zi.matrixWorld=Dc,Zi.raycast(t,Hs);for(let o=0,a=Hs.length;o<a;o++){let l=Hs[o];l.instanceId=r,l.object=this,e.push(l)}Hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(s*this.count),s,this.count,ml,dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var as=class extends An{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mr=new C,Sr=new C,Nc=new Jt,$i=new zn,Vs=new rn,Po=new C,Oc=new C,br=class extends Ee{constructor(t=new le,e=new as){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mr.fromBufferAttribute(e,s-1),Sr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mr.distanceTo(Sr);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;Nc.copy(s).invert(),$i.copy(t.ray).applyMatrix4(Nc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=m,f=p-1;x<f;x+=c){let g=h.getX(x),M=h.getX(x+1),_=Gs(this,t,$i,l,g,M);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(p-1),f=h.getX(m),g=Gs(this,t,$i,l,x,f);g&&e.push(g)}}else{let m=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=m,f=p-1;x<f;x+=c){let g=Gs(this,t,$i,l,x,x+1);g&&e.push(g)}if(this.isLineLoop){let x=Gs(this,t,$i,l,p-1,m);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gs(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Mr.fromBufferAttribute(o,s),Sr.fromBufferAttribute(o,r),e.distanceSqToSegment(Mr,Sr,Po,Oc)>n)return;Po.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Po);if(!(l<t.near||l>t.far))return{distance:l,point:Oc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ba=class extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fc=new Jt,za=new zn,Ws=new rn,Xs=new C,Er=class extends Ee{constructor(t=new le,e=new Ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;Fc.copy(s).invert(),za.copy(t.ray).applyMatrix4(Fc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let p=u,x=m;p<x;p++){let f=c.getX(p);Xs.fromBufferAttribute(d,f),Bc(Xs,f,l,s,t,e,this)}}else{let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let p=u,x=m;p<x;p++)Xs.fromBufferAttribute(d,p),Bc(Xs,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bc(i,t,e,n,s,r,o){let a=za.distanceSqToPoint(i);if(a<e){let l=new C;za.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(o-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new Jt;for(let m=0;m<=t;m++){let p=m/t;s[m]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,p))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],m*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*d+this.aX,c=u*d+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends wr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,m*=h,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qs=new C,Io=new Sl,Lo=new Sl,Do=new Sl,kn=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),c=qs);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),m),x=Math.pow(d.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);x<1e-4&&(x=1),p<1e-4&&(p=x),f<1e-4&&(f=x),Io.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,f),Lo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,f),Do.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,f)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Lo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Do.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Io.calc(l),Lo.calc(l),Do.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function e0(i,t){let e=1-i;return e*e*t}function n0(i,t){return 2*(1-i)*i*t}function i0(i,t){return i*i*t}function es(i,t,e,n){return e0(i,t)+n0(i,e)+i0(i,n)}function s0(i,t){let e=1-i;return e*e*e*t}function r0(i,t){let e=1-i;return 3*e*e*i*t}function o0(i,t){return 3*(1-i)*i*i*t}function a0(i,t){return i*i*i*t}function ns(i,t,e,n,s){return s0(i,t)+r0(i,e)+o0(i,n)+a0(i,s)}var Ha=class extends on{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ns(t,s.x,r.x,o.x,a.x),ns(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends on{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ns(t,s.x,r.x,o.x,a.x),ns(t,s.y,r.y,o.y,a.y),ns(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends on{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends on{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends on{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(es(t,s.x,r.x,o.x),es(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends on{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(es(t,s.x,r.x,o.x),es(t,s.y,r.y,o.y),es(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(zc(a,l.x,c.x,h.x,d.x),zc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},l0=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:kn,CubicBezierCurve:Ha,CubicBezierCurve3:Va,EllipseCurve:wr,LineCurve:Ga,LineCurve3:Wa,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:Tr,SplineCurve:qa});var Ar=class i extends le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pn=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],p=0,x=[],f=n/2,g=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(m,2));function M(){let v=new C,R=new C,T=0,w=(e-t)/n;for(let L=0;L<=r;L++){let X=[],y=L/r,b=y*(e-t)+t;for(let I=0;I<=s;I++){let k=I/s,H=k*l+a,Z=Math.sin(H),F=Math.cos(H);R.x=b*Z,R.y=-y*n+f,R.z=b*F,d.push(R.x,R.y,R.z),v.set(Z,w,F).normalize(),u.push(v.x,v.y,v.z),m.push(k,1-y),X.push(p++)}x.push(X)}for(let L=0;L<s;L++)for(let X=0;X<r;X++){let y=x[X][L],b=x[X+1][L],I=x[X+1][L+1],k=x[X][L+1];t>0&&(h.push(y,b,k),T+=3),e>0&&(h.push(b,I,k),T+=3)}c.addGroup(g,T,0),g+=T}function _(v){let R=p,T=new ut,w=new C,L=0,X=v===!0?t:e,y=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,f*y,0),u.push(0,y,0),m.push(.5,.5),p++;let b=p;for(let I=0;I<=s;I++){let H=I/s*l+a,Z=Math.cos(H),F=Math.sin(H);w.x=X*F,w.y=f*y,w.z=X*Z,d.push(w.x,w.y,w.z),u.push(0,y,0),T.x=Z*.5+.5,T.y=F*.5*y+.5,m.push(T.x,T.y),p++}for(let I=0;I<s;I++){let k=R+I,H=b+I;v===!0?h.push(H,H+1,k):h.push(H+1,H,k),L+=3}c.addGroup(g,L,v===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ya=class i extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new C,v=new C,R=new C;for(let T=0;T<e.length;T+=3)m(e[T+0],_),m(e[T+1],v),m(e[T+2],R),l(_,v,R,M)}function l(M,_,v,R){let T=R+1,w=[];for(let L=0;L<=T;L++){w[L]=[];let X=M.clone().lerp(v,L/T),y=_.clone().lerp(v,L/T),b=T-L;for(let I=0;I<=b;I++)I===0&&L===T?w[L][I]=X:w[L][I]=X.clone().lerp(y,I/b)}for(let L=0;L<T;L++)for(let X=0;X<2*(T-L)-1;X++){let y=Math.floor(X/2);X%2===0?(u(w[L][y+1]),u(w[L+1][y]),u(w[L][y])):(u(w[L][y+1]),u(w[L+1][y+1]),u(w[L+1][y]))}}function c(M){let _=new C;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let M=new C;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let v=f(M)/2/Math.PI+.5,R=g(M)/Math.PI+.5;o.push(v,1-R)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){let _=o[M+0],v=o[M+2],R=o[M+4],T=Math.max(_,v,R),w=Math.min(_,v,R);T>.9&&w<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,_){let v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function p(){let M=new C,_=new C,v=new C,R=new C,T=new ut,w=new ut,L=new ut;for(let X=0,y=0;X<r.length;X+=9,y+=6){M.set(r[X+0],r[X+1],r[X+2]),_.set(r[X+3],r[X+4],r[X+5]),v.set(r[X+6],r[X+7],r[X+8]),T.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),R.copy(M).add(_).add(v).divideScalar(3);let b=f(R);x(T,y+0,M,b),x(w,y+2,_,b),x(L,y+4,v,b)}}function x(M,_,v,R){R<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=R/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var c0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,m;if(n&&(r=p0(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)d=i[p],u=i[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ls(r,o,e,a,l,m,0),o}};function mh(i,t,e,n,s){let r,o;if(s===w0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=kc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=kc(r,i[r],i[r+1],o);return o&&Hr(o,o.next)&&(hs(o),o=o.next),o}function ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hr(e,e.next)||de(e.prev,e,e.next)===0)){if(hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ls(i,t,e,n,s,r,o){if(!i)return;!o&&r&&y0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?u0(i,n,s,r):h0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),hs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=d0(ri(i),t,e),ls(i,t,e,n,s,r,2)):o===2&&f0(i,t,e,n,s,r):ls(ri(i),t,e,n,s,r,1);break}}}function h0(i){let t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=m&&Ti(s,a,r,l,o,c,p.x,p.y)&&de(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,m=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,x=a>l?a>c?a:c:l>c?l:c,f=h>d?h>u?h:u:d>u?d:u,g=Za(m,p,t,e,n),M=Za(x,f,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=g&&v&&v.z<=M;){if(_.x>=m&&_.x<=x&&_.y>=p&&_.y<=f&&_!==s&&_!==o&&Ti(a,h,l,d,c,u,_.x,_.y)&&de(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=m&&v.x<=x&&v.y>=p&&v.y<=f&&v!==s&&v!==o&&Ti(a,h,l,d,c,u,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=m&&_.x<=x&&_.y>=p&&_.y<=f&&_!==s&&_!==o&&Ti(a,h,l,d,c,u,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=x&&v.y>=p&&v.y<=f&&v!==s&&v!==o&&Ti(a,h,l,d,c,u,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Hr(s,r)&&gh(s,n,n.next,r)&&cs(s,r)&&cs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hs(n),hs(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function f0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S0(o,a)){let l=_h(o,a);o=ri(o,o.next),l=ri(l,l.next),ls(o,t,e,n,s,r,0),ls(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p0(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=mh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(M0(c));for(s.sort(m0),r=0;r<s.length;r++)e=g0(s[r],e);return e}function m0(i,t){return i.x-t.x}function g0(i,t){let e=_0(i,t);if(!e)return t;let n=_h(e,i);return ri(n,n.next),ri(e,e.next)}function _0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ti(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),cs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&x0(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function x0(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function y0(i,t,e,n){let s=i;do s.z===0&&(s.z=Za(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v0(s)}function v0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Za(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function M0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ti(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function S0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!b0(i,t)&&(cs(i,t)&&cs(t,i)&&E0(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Hr(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hr(i,t){return i.x===t.x&&i.y===t.y}function gh(i,t,e,n){let s=Zs(de(i,t,e)),r=Zs(de(i,t,n)),o=Zs(de(e,n,i)),a=Zs(de(e,n,t));return!!(s!==r&&o!==a||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||o===0&&Ys(e,i,n)||a===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function b0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function cs(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function E0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _h(i,t){let e=new Ka(i.i,i.x,i.y),n=new Ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kc(i,t,e,n){let s=new Ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function w0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var zi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hc(t),Vc(n,t);let o=t.length;e.forEach(Hc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vc(n,e[l]);let a=c0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Rr=class i extends Ya{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Cr=class i extends le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,m=new C,p=new ut;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){let g=r+f/n*o;m.x=d*Math.cos(g),m.y=d*Math.sin(g),l.push(m.x,m.y,m.z),c.push(0,0,1),p.x=(m.x/e+1)/2,p.y=(m.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let f=x*(n+1);for(let g=0;g<n;g++){let M=g+f,_=M,v=M+n+1,R=M+n+2,T=M+1;a.push(_,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hn=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,u=new C,m=[],p=[],x=[],f=[];for(let g=0;g<=n;g++){let M=[],_=g/n,v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(T+v,1-_),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let _=h[g][M+1],v=h[g][M],R=h[g+1][M],T=h[g+1][M+1];(g!==0||o>0)&&m.push(_,v,T),(g!==n-1||l<Math.PI)&&m.push(v,R,T)}this.setIndex(m),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pr=class i extends le{constructor(t=new Tr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new ut,h=new C,d=[],u=[],m=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(m,2));function x(){for(let _=0;_<e;_++)f(_);f(r===!1?e:0),M(),g()}function f(_){h=t.getPointAt(_/e,h);let v=o.normals[_],R=o.binormals[_];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,L=Math.sin(w),X=-Math.cos(w);l.x=X*v.x+L*R.x,l.y=X*v.y+L*R.y,l.z=X*v.z+L*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){let R=(s+1)*(_-1)+(v-1),T=(s+1)*_+(v-1),w=(s+1)*_+v,L=(s+1)*(_-1)+v;p.push(R,T,L),p.push(T,w,L)}}function M(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new l0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ne=class extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ks(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function T0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$a=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hl:r=t,a=2*e-n;break;case Vl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:o=t,l=2*n-e;break;case Vl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,p=(n-e)/(s-e),x=p*p,f=x*p,g=-u*f+2*u*x-u*p,M=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*p+1,_=(-1-m)*f+(1.5+m)*x+.5*p,v=m*f-m*x;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+M*o[c+R]+_*o[l+R]+v*o[d+R];return r}},Ja=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ja=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&T0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===eo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,m=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[m+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=va;var oi=class extends an{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=nr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends an{};Qa.prototype.ValueTypeName="color";var tl=class extends an{};tl.prototype.ValueTypeName="number";var el=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ir=class extends an{InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends an{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=nr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends an{};nl.prototype.ValueTypeName="vector";var il=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],p=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return p}return null}}},A0=new il,sl=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Dr=class extends Lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Uo=new Jt,Gc=new C,Wc=new C,rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ol=class extends rl{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Nr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Xc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Xc(){return performance.now()}var bl="\\[\\]\\.:\\/",R0=new RegExp("["+bl+"]","g"),El="[^"+bl+"]",C0="[^"+bl.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",El),I0=/(WCOD+)?/.source.replace("WCOD",C0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),U0=new RegExp("^"+P0+I0+L0+D0+"$"),N0=["material","materials","bones","map"],al=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(t){let e=U0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);N0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=al;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);var qc=new Jt,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new zn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Yc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ll(t[s],this,n,e);return n.sort(Yc),n}};function Yc(i,t){return i.distance-t.distance}function ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ll(r[o],t,e,!0)}}var us=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fr=class extends En{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);var xh={type:"change"},Tl={type:"start"},vh={type:"end"},Vr=new zn,yh=new en,O0=Math.cos(70*qe.DEG2RAD),ye=new C,Be=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wl=1e-6,Gr=class extends Fr{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ln.ROTATE,MIDDLE:ln.DOLLY,RIGHT:ln.PAN},this.touches={ONE:mn.ROTATE,TWO:mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Fe,this._lastTargetPosition=new C,this._quat=new Fe().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new us,this._sphericalDelta=new us,this._scale=1,this._panOffset=new C,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new C,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B0.bind(this),this._onPointerDown=F0.bind(this),this._onPointerUp=z0.bind(this),this._onContextMenu=q0.bind(this),this._onMouseWheel=V0.bind(this),this._onKeyDown=G0.bind(this),this._onTouchStart=W0.bind(this),this._onTouchMove=X0.bind(this),this._onMouseDown=k0.bind(this),this._onMouseMove=H0.bind(this),this._interceptControlDown=Y0.bind(this),this._interceptControlUp=Z0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xh),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ye.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vr.origin.copy(this.object.position),Vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vr.direction))<O0?this.object.lookAt(this.target):(yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vr.intersectPlane(yh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wl||this._lastTargetPosition.distanceToSquared(this.target)>wl?(this.dispatchEvent(xh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function F0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function B0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function z0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vh),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function k0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case ln.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case ln.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Tl)}function H0(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function V0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Tl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vh))}function G0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function W0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case mn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case mn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case mn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case mn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Tl)}function X0(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function q0(i){this.enabled!==!1&&i.preventDefault()}function Y0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wr=class extends Gr{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:ln.PAN,MIDDLE:ln.DOLLY,RIGHT:ln.ROTATE},this.touches={ONE:mn.PAN,TWO:mn.DOLLY_ROTATE}}};var he=.1,qr=class{constructor(t){this.nx=t.nx,this.nz=t.nz,this.cell=t.cell,this.x0=t.x0,this.z0=t.z0,this.h=new Float32Array(t.h.length),this.wl=new Float32Array(t.wl.length);for(let e=0;e<t.h.length;e++)this.h[e]=t.h[e]*he,this.wl[e]=t.wl[e]<=-9999?NaN:t.wl[e]*he;this.lc=Uint8Array.from(t.lc),this.xmax=this.x0+(this.nx-1)*this.cell,this.zmax=this.z0+(this.nz-1)*this.cell}height(t,e){let n=Math.min(Math.max((t-this.x0)/this.cell,0),this.nx-1.001),s=Math.min(Math.max((e-this.z0)/this.cell,0),this.nz-1.001),r=Math.floor(n),o=Math.floor(s),a=n-r,l=s-o,c=o*this.nx+r,h=this.h;return h[c]*(1-a)*(1-l)+h[c+1]*a*(1-l)+h[c+this.nx]*(1-a)*l+h[c+this.nx+1]*a*l}waterLevel(t,e){let n=Math.round((t-this.x0)/this.cell),s=Math.round((e-this.z0)/this.cell);if(n<0||s<0||n>=this.nx||s>=this.nz)return NaN;let r=this.wl[s*this.nx+n];return r>this.height(t,e)?r:NaN}surface(t,e){let n=this.height(t,e),s=this.waterLevel(t,e);return s>n?s:n}},Mh={10:[.34,.5,.28],20:[.47,.58,.36],30:[.52,.64,.4],40:[.62,.68,.42],50:[.74,.71,.65],60:[.74,.67,.56],80:[.5,.52,.44],90:[.45,.58,.45],95:[.4,.55,.42]};function wh(i){let{nx:t,nz:e,cell:n}=i,s=new Float32Array(t*e*3),r=new Float32Array(t*e*3),o=new Float32Array(t*e*3);for(let d=0;d<e;d++)for(let u=0;u<t;u++){let m=d*t+u;s[m*3]=i.x0+u*n,s[m*3+1]=i.h[m],s[m*3+2]=i.z0+d*n;let p=Mh[i.lc[m]]||Mh[50];o[m*3]=p[0]**2.2,o[m*3+1]=p[1]**2.2,o[m*3+2]=p[2]**2.2}for(let d=0;d<e;d++)for(let u=0;u<t;u++){let m=0,p=0,x=0,f=0;for(let v=-1;v<=1;v++)for(let R=-1;R<=1;R++){let T=u+R,w=d+v;if(T<0||w<0||T>=t||w>=e)continue;let L=(w*t+T)*3;m+=o[L],p+=o[L+1],x+=o[L+2],f++}let g=d*t+u,M=.94+.12*((u*73856093^d*19349663)>>>0)%1e3/1e3,_=!Number.isNaN(i.wl[g])&&i.wl[g]>i.h[g]?.72:1;r[g*3]=m/f*M*_,r[g*3+1]=p/f*M*_,r[g*3+2]=x/f*M*_}let a=new Uint32Array((t-1)*(e-1)*6),l=0;for(let d=0;d<e-1;d++)for(let u=0;u<t-1;u++){let m=d*t+u,p=m+1,x=m+t,f=x+1;a[l++]=m,a[l++]=x,a[l++]=p,a[l++]=p,a[l++]=x,a[l++]=f}let c=new le;c.setAttribute("position",new ae(s,3)),c.setAttribute("color",new ae(r,3)),c.setIndex(new ae(a,1)),c.computeVertexNormals();let h=new Xt(c,new Ne({vertexColors:!0}));return h.name="terrain",h}function ps(i,t=he){let e=[];for(let n=0;n<i.length;n+=2)e.push(new ut(i[n]*t,i[n+1]*t));return e}function Th(i){let t=0;for(let e=0,n=i.length;e<n;e++){let s=i[e],r=i[(e+1)%n];t+=s.x*r.y-r.x*s.y}return t/2}var ms=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.idx=[]}extrude(t,e,n,s,r){let[o,...a]=t,l=this.pos.length/3,c=o.concat(...a);for(let h of c)this.pos.push(h.x,n,h.y),this.nor.push(0,1,0),this.col.push(r.r,r.g,r.b);for(let h of zi.triangulateShape(o,a)){let[d,u,m]=h.map(x=>c[x]);(u.y-d.y)*(m.x-d.x)-(u.x-d.x)*(m.y-d.y)>=0?this.idx.push(l+h[0],l+h[1],l+h[2]):this.idx.push(l+h[0],l+h[2],l+h[1])}t.forEach((h,d)=>this.walls(h,e,n,s,d>0))}walls(t,e,n,s,r=!1){let o=t.length,a=Th(t)>0===r;for(let l=0;l<o;l++){let c=t[l],h=t[(l+1)%o],d=h.x-c.x,u=h.y-c.y,m=Math.hypot(d,u)||1,p=u/m,x=-d/m;a&&(p=-p,x=-x);let f=this.pos.length/3;this.pos.push(c.x,e,c.y,h.x,e,h.y,h.x,n,h.y,c.x,n,c.y);for(let g=0;g<4;g++){this.nor.push(p,0,x);let M=g<2?.78:1;this.col.push(s.r*M,s.g*M,s.b*M)}-u*p+d*x>0?this.idx.push(f,f+1,f+2,f,f+2,f+3):this.idx.push(f,f+2,f+1,f,f+3,f+2)}}box(t,e,n,s,r,o,a,l,c){let h=-s,d=n,u=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,p])=>new ut(t+n*r*m+h*o*p,e+s*r*m+d*o*p));this.extrude([u],a,l,c,c)}mesh(t){let e=new le;return e.setAttribute("position",new Kt(this.pos,3)),e.setAttribute("normal",new Kt(this.nor,3)),e.setAttribute("color",new Kt(this.col,3)),e.setIndex(this.idx),new Xt(e,t||new Ne({vertexColors:!0,side:Re}))}};function K0(i,t){let e=0,n=0;for(let s of i)e+=s.x,n+=s.y;return e/=i.length,n/=i.length,i.map(s=>new ut(e+(s.x-e)*t,n+(s.y-n)*t))}var gs=class i{constructor(t=32){this.cell=t,this.map=new Map,this.items=[]}add(t,e,n,s){let r=1/0,o=-1/0,a=1/0,l=-1/0,c=t[0];for(let u=0;u<c.length;u+=2)r=Math.min(r,c[u]),o=Math.max(o,c[u]),a=Math.min(a,c[u+1]),l=Math.max(l,c[u+1]);let h=this.items.length;this.items.push({rings:t,y0:e,y1:n,info:s});let d=this.cell;for(let u=Math.floor(r/d);u<=Math.floor(o/d);u++)for(let m=Math.floor(a/d);m<=Math.floor(l/d);m++){let p=u*100003+m,x=this.map.get(p);x||(x=[],this.map.set(p,x)),x.push(h)}return h}static inRing(t,e,n){let s=!1;for(let r=0,o=t.length,a=o-2;r<o;a=r,r+=2){let l=t[r],c=t[r+1],h=t[a],d=t[a+1];c>n!=d>n&&e<(h-l)*(n-c)/(d-c)+l&&(s=!s)}return s}static inside(t,e,n){if(!i.inRing(t.rings[0],e,n))return!1;for(let s=1;s<t.rings.length;s++)if(i.inRing(t.rings[s],e,n))return!1;return!0}pick(t,e){let n=this.map.get(Math.floor(t/this.cell)*100003+Math.floor(e/this.cell));if(!n)return null;let s=null;for(let r of n){let o=this.items[r];i.inside(o,t,e)&&(!s||o.y1>s.y1)&&(s=o)}return s}hit(t,e,n,s){let r=[[0,0],[s,0],[-s,0],[0,s],[0,-s]];for(let[o,a]of r){let l=this.map.get(Math.floor((t+o)/this.cell)*100003+Math.floor((n+a)/this.cell));if(l)for(let c of l){let h=this.items[c];if(e-s<h.y1&&e+s>h.y0&&i.inside(h,t+o,n+a))return h}}return null}};function Ah(i,t){let e=[],n=[];for(let a of i){let l=a.rings.map(u=>ps(u)),c=l[0].concat(...l.slice(1)),h=e.length/3,d=a.y*he;for(let u of c)e.push(u.x,d,u.y);for(let u of zi.triangulateShape(l[0],l.slice(1)))n.push(h+u[0],h+u[1],h+u[2])}let s=new le;s.setAttribute("position",new Kt(e,3)),s.setIndex(n);let r=new Ue({transparent:!0,side:Re,depthWrite:!1,uniforms:{uTime:{value:0},uDeep:{value:new vt("#2f6f73")},uShallow:{value:new vt("#5fa39a")},uSky:{value:t.skyColor.clone()},uSun:{value:new vt("#fff2d0")},uSunDir:{value:t.sunDir.clone()},uFogColor:{value:t.fogColor.clone()},uFogNear:{value:t.fogNear},uFogFar:{value:t.fogFar}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`}),o=new Xt(s,r);return o.name="water",o.renderOrder=2,o}function Al(i,t,e,n,s=he){let r=t.length/3;if(r<2)return;let o=i.pos.length/3,a=e/2;for(let l=0;l<r;l++){let c=t[l*3]*s,h=t[l*3+1]*s,d=t[l*3+2]*s,u=Math.max(l-1,0),m=Math.min(l+1,r-1),p=(t[m*3]-t[u*3])*s,x=(t[m*3+1]-t[u*3+1])*s,f=Math.hypot(p,x)||1;if(p/=f,x/=f,i.pos.push(c-x*a,d+n,h+p*a,c+x*a,d+n,h-p*a),i.nor.push(0,1,0,0,1,0),l<r-1){let g=o+l*2;i.idx.push(g,g+2,g+1,g+1,g+2,g+3)}}}function Rl(i,t,e={}){let n=new le;return n.setAttribute("position",new Kt(i.pos,3)),n.setAttribute("normal",new Kt(i.nor,3)),n.setIndex(i.idx),new Xt(n,new Ne({color:t,side:Re,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,...e}))}var Xr=[["#565a61",.34],["#666a70",.28],["#777a7e",.22],["#c7bfae",.16],["#5a4a3c",.24]];function Rh(i){let t=new be;t.name="roads";let e=Xr.map(()=>({pos:[],nor:[],idx:[]})),n={pos:[],nor:[],idx:[]};for(let s of i)Al(e[s.g],s.p,s.w,Xr[s.g][1]),s.g===0&&s.w>=9&&Al(n,s.p,.25,Xr[0][1]+.05);return e.forEach((s,r)=>{s.pos.length&&t.add(Rl(s,Xr[r][0]))}),n.pos.length&&t.add(Rl(n,"#e6dfc8",{polygonOffsetFactor:-5,polygonOffsetUnits:-5})),t}var Sh={road:{th:1.2,col:"#5d6168",side:"#8d9096"},rail:{th:1.4,col:"#5a4a3c",side:"#6f6a64"},foot:{th:.45,col:"#a58e6d",side:"#8a7658"}};function Ch(i,t,e){let n=new be;n.name="bridges";let s={road:{pos:[],nor:[],idx:[]},rail:{pos:[],nor:[],idx:[]},foot:{pos:[],nor:[],idx:[]}},r=new ms,o=[],a=[],l=new vt("#9a958c"),c=new vt("#c9cbd0"),h=(p,x,f,g,M,_,v)=>{let R=t.height(p,x)-1;v-R<1.5||(r.box(p,x,f,g,M,_,R,v,l),a.push({cx:p,cz:x,ux:f,uz:g,halfL:M,halfW:_,y0:R,y1:v}))};for(let p of i)for(let x of p.ways){let f=Sh[x.kind],g=x.pts,M=g.length/3,_=x.width/2;Al(s[x.kind],g,x.width,.3);let v=new vt(f.side),R=0,T=19;for(let w=0;w<M-1;w++){let L=g[w*3]*he,X=g[w*3+1]*he,y=g[w*3+2]*he+.3,b=g[w*3+3]*he,I=g[w*3+4]*he,k=g[w*3+5]*he+.3,H=b-L,Z=I-X,F=Math.hypot(H,Z);if(F<.05)continue;let $=H/F,q=Z/F,it=(L+b)/2,tt=(X+I)/2,rt=(y+k)/2;if(r.box(it,tt,$,q,F/2+.02,_,rt-f.th,rt-.02,v),x.kind!=="rail")for(let Tt of[-1,1])r.box(it-q*Tt*(_-.1),tt+$*Tt*(_-.1),$,q,F/2,.1,rt,rt+1,c);if(o.push({ax:L,az:X,bx:b,bz:I,halfW:_,yTop:rt+1,yBot:rt-f.th,name:p.name,len:p.len,special:p.special,kind:x.kind}),!p.special&&!x.beside_truss&&x.kind!=="foot"&&p.len>=60&&(R+=F,R>=T)){let Tt=t.waterLevel(it,tt);!Number.isNaN(Tt)&&rt-f.th-Tt>2.5&&h(it,tt,$,q,1.1,_*.8,rt-f.th),T+=38}}}let d=e.truong_tien,u=null,m=null;if(d){let p=d.ax,x=d.az,f=d.bx,g=d.bz,M=Math.hypot(f-p,g-x),_=(f-p)/M,v=(g-x)/M,R=-v,T=_,w=d.deck_y+.3,L=1.2,X=9,y=3.5,b=d.spans,I=M/b;for(let tt=0;tt<=b;tt++)h(p+_*I*tt,x+v*I*tt,_,v,1.6,7.6,w-L);let k=[],H=(tt,rt,Tt)=>new C(p+_*tt+R*rt,Tt,x+v*tt+T*rt),Z=12;for(let tt=0;tt<b;tt++)for(let rt of[-y,y]){let Tt=null;for(let Ft=0;Ft<=Z;Ft++){let Y=Ft/Z,et=I*(tt+Y),ot=w+X*4*Y*(1-Y),lt=H(et,rt,ot);Tt&&k.push([Tt,lt,.42]),Ft>0&&Ft<Z&&k.push([H(et,rt,w),lt,.2]),rt>0&&Ft>0&&Ft<Z&&ot-w>5.2&&k.push([H(et,-y,ot),lt,.24]),Tt=lt}}u=new Bi(new Xe(1,1,1),new Ne({color:"#b7bcc2"}),k.length);let F=new Jt,$=new Fe,q=new C(0,1,0),it=new C;k.forEach(([tt,rt,Tt],Ft)=>{it.subVectors(rt,tt);let Y=it.length();$.setFromUnitVectors(q,it.normalize()),F.compose(new C().addVectors(tt,rt).multiplyScalar(.5),$,new C(Tt,Y,Tt)),u.setMatrixAt(Ft,F)}),u.name="truss",m={ax:p,az:x,ux:_,uz:v,vx:R,vz:T,L:M,S:I,spans:b,deckY:w,underside:w-L,water:d.water_y}}return["road","rail","foot"].forEach(p=>{s[p].pos.length&&n.add(Rl(s[p],Sh[p].col,{polygonOffsetFactor:-1,polygonOffsetUnits:-1}))}),n.add(r.mesh()),u&&n.add(u),{group:n,decks:o,piers:a,ttInfo:m}}function Ph(i,t,e,n,s){for(let r of i.decks){if(e-s>r.yTop||e+s<r.yBot)continue;let o=r.bx-r.ax,a=r.bz-r.az,l=o*o+a*a,c=((t-r.ax)*o+(n-r.az)*a)/l;c=Math.max(0,Math.min(1,c));let h=r.ax+o*c-t,d=r.az+a*c-n;if(h*h+d*d<(r.halfW+s)*(r.halfW+s))return"deck"}for(let r of i.piers){if(e-s>r.y1||e+s<r.y0)continue;let o=t-r.cx,a=n-r.cz,l=o*r.ux+a*r.uz,c=-o*r.uz+a*r.ux;if(Math.abs(l)<r.halfL+s&&Math.abs(c)<r.halfW+s)return"pier"}return null}var bh=["#e8e0cd","#e2d2b2","#d8cab0","#efe8d9","#cdc5b6","#e5d6a9","#dcc9b4"].map(i=>new vt(i)),Eh=["#a5553b","#b1654a","#9a4f3b","#a85f45","#8d8882","#7a848d","#b06a4e"].map(i=>new vt(i)),$0=["#3f86b3","#e2a23a","#9b6fc2"].map(i=>new vt(i)),J0=["#3f9c6b","#e2a23a","#c0564b"].map(i=>new vt(i)),Ih=["OpenStreetMap (v\u1EBD tay)","Google Open Buildings (h\u1ECDc m\xE1y)","Microsoft ML Buildings (h\u1ECDc m\xE1y)"],Lh=["Th\u1EBB OSM (chi\u1EC1u cao/s\u1ED1 t\u1EA7ng)","\u01AF\u1EDBc l\u01B0\u1EE3ng h\u1ECDc m\xE1y \u2014 Open Buildings 2.5D","M\u1EB7c \u0111\u1ECBnh 4,5 m (kh\xF4ng c\xF3 d\u1EEF li\u1EC7u)"];function Dh(i,t,e=6,n){let s=new be;s.name="buildings";let r=i.n.length,o=new Float32Array(i.xz.length);for(let M=0;M<o.length;M++)o[M]=i.xz[M]*he;let a=new Uint32Array(r+1);for(let M=0;M<r;M++)a[M+1]=a[M]+i.n[M]*2;let l=(n.xmax-n.xmin)/e,c=(n.zmax-n.zmin)/e,h=new Uint16Array(r),d=new Uint32Array(e*e),u=new Uint32Array(e*e);for(let M=0;M<r;M++){let _=i.n[M],v=0,R=0;for(let X=a[M];X<a[M+1];X+=2)v+=o[X],R+=o[X+1];v/=_,R/=_;let T=Math.min(e-1,Math.max(0,Math.floor((v-n.xmin)/l))),L=Math.min(e-1,Math.max(0,Math.floor((R-n.zmin)/c)))*e+T;h[M]=L,d[L]+=5*_,u[L]+=6*_+3*(_-2)}let m=[];for(let M=0;M<d.length;M++)m.push(d[M]?{pos:new Float32Array(d[M]*3),nor:new Int8Array(d[M]*3),col:new Uint8Array(d[M]*3),idx:new Uint32Array(u[M]),v:0,i:0,ranges:[]}:null);let p=[];for(let M=0;M<r;M++){let _=m[h[M]],v=i.n[M],R=i.base[M]*he,T=R+i.h[M]*he,w=o.subarray(a[M],a[M+1]);p.length=0;for(let y=0;y<v;y++)p.push(new ut(w[y*2],w[y*2+1]));let L=Th(p)>0,X=_.v;for(let y=0;y<v;y++){let b=_.v*3;_.pos[b]=w[y*2],_.pos[b+1]=T,_.pos[b+2]=w[y*2+1],_.nor[b+1]=127,_.v++}for(let y of zi.triangulateShape(p,[])){let b=p[y[0]],I=p[y[1]],k=p[y[2]],H=(I.y-b.y)*(k.x-b.x)-(I.x-b.x)*(k.y-b.y);_.idx[_.i++]=X+y[0],_.idx[_.i++]=X+(H>=0?y[1]:y[2]),_.idx[_.i++]=X+(H>=0?y[2]:y[1])}for(let y=0;y<v;y++){let b=w[y*2],I=w[y*2+1],k=w[(y+1)%v*2],H=w[(y+1)%v*2+1],Z=k-b,F=H-I,$=Math.hypot(Z,F)||1,q=F/$,it=-Z/$;L||(q=-q,it=-it);let tt=_.v,rt=(Tt,Ft,Y)=>{let et=_.v*3;_.pos[et]=Tt,_.pos[et+1]=Ft,_.pos[et+2]=Y,_.nor[et]=Math.round(q*127),_.nor[et+2]=Math.round(it*127),_.v++};rt(b,R,I),rt(k,R,H),rt(k,T,H),rt(b,T,I),-F*q+Z*it>0?(_.idx[_.i++]=tt,_.idx[_.i++]=tt+1,_.idx[_.i++]=tt+2,_.idx[_.i++]=tt,_.idx[_.i++]=tt+2,_.idx[_.i++]=tt+3):(_.idx[_.i++]=tt,_.idx[_.i++]=tt+2,_.idx[_.i++]=tt+1,_.idx[_.i++]=tt,_.idx[_.i++]=tt+3,_.idx[_.i++]=tt+2)}_.ranges.push(M,X,v),t.add([w],R,T,{type:"building",index:M})}let x=new Ne({vertexColors:!0,side:Re}),f=[];for(let M of m){if(!M)continue;let _=new le;_.setAttribute("position",new ae(M.pos,3)),_.setAttribute("normal",new ae(M.nor,3,!0)),_.setAttribute("color",new ae(M.col,3,!0)),_.setIndex(new ae(M.idx.subarray(0,M.i),1)),_.computeBoundingSphere();let v=new Xt(_,x);v.userData.ranges=M.ranges,f.push(v),s.add(v)}function g(M){let _=new vt;for(let v of f){let R=v.geometry.attributes.color.array,T=v.userData.ranges;for(let w=0;w<T.length;w+=3){let L=T[w],X=T[w+1],y=T[w+2],b=L*2654435761>>>0,I,k;M==="source"?I=k=$0[i.src[L]]:M==="height"?I=k=J0[i.hs[L]]:(I=bh[b%bh.length],k=Eh[(b>>>8)%Eh.length]);let H=(F,$,q)=>{_.copy($).multiplyScalar(q),R[F*3]=Math.min(255,_.r*255),R[F*3+1]=Math.min(255,_.g*255),R[F*3+2]=Math.min(255,_.b*255)},Z=M!=="natural";for(let F=0;F<y;F++)H(X+F,k,Z?1:.95);for(let F=0;F<y;F++){let $=X+y+F*4;H($,I,Z?.62:.74),H($+1,I,Z?.62:.74),H($+2,I,Z?.8:1),H($+3,I,Z?.8:1)}}v.geometry.attributes.color.needsUpdate=!0}}return g("natural"),{group:s,recolor:g}}function Uh(i,t){let e=new ms,n=new vt("#8f8274"),s=new vt("#7f8f66"),r=new vt("#a39382"),o=new vt("#8c7d6e");for(let l of i){let c=l.rings.map(u=>ps(u)),h=l.base*he,d=h+l.h*he;e.extrude(c,h,d,l.kind==="rampart"?n:r,l.kind==="rampart"?s:o),t.add(l.rings.map(u=>Float32Array.from(u,m=>m*he)),h,d,{type:"wall",kind:l.kind})}let a=e.mesh();return a.name="walls",a}function Nh(i,t){let e=new be;e.name="landmarks";let n=new ms,s=i.landmarks||{},r=a=>new vt(a),o=(a,l,c,h,d,u,m)=>{let p=K0(a,l);n.extrude([p],c,h,r(d),r(u));let x=new Float32Array(p.length*2);p.forEach((f,g)=>{x[g*2]=f.x,x[g*2+1]=f.y}),t.add([x],c,h,m)};if(s.ky_dai){let a=ps(s.ky_dai.ring),l=s.ky_dai.base*he,c={type:"landmark",key:"ky_dai",name:"K\u1EF3 \u0110\xE0i"};o(a,1,l,l+5.6,"#8b7d70","#a39686",c),o(a,.8,l+5.6,l+11.4,"#8b7d70","#a39686",c),o(a,.62,l+11.4,l+17.5,"#8b7d70","#a39686",c);let h=0,d=0;a.forEach(f=>{h+=f.x,d+=f.y}),h/=a.length,d/=a.length;let u=new Xt(new pn(.22,.42,37,10),new Ne({color:"#d8d4c8"}));u.position.set(h,l+17.5+18.5,d),e.add(u);let m=new Xt(new Fi(9,6),new Ne({color:"#d5262e",side:Re}));m.position.set(h+4.7,l+17.5+33.6,d),e.add(m);let p=new Xt(new Ar(1.6,5),new De({color:"#f6d743",side:Re}));p.position.set(h+4.7,l+17.5+33.6,d+.03),p.rotation.z=Math.PI/2,e.add(p);let x=p.clone();x.position.z=d-.03,e.add(x),e.userData.flag=m}if(s.ngo_mon){let a=ps(s.ngo_mon.ring),l=s.ngo_mon.base*he,c={type:"landmark",key:"ngo_mon",name:"Ng\u1ECD M\xF4n"};o(a,1,l,l+5.3,"#9a8a79","#b0a391",c),o(a,.88,l+5.3,l+9.3,"#9b3d2d","#9b3d2d",c),o(a,1,l+9.3,l+10,"#c9982c","#d4a63a",c),o(a,.7,l+10,l+12.4,"#9b3d2d","#9b3d2d",c),o(a,.84,l+12.4,l+13.2,"#c9982c","#d4a63a",c)}if(s.thai_hoa){let a=ps(s.thai_hoa.ring),l=s.thai_hoa.base*he,c={type:"landmark",key:"thai_hoa",name:"\u0110i\u1EC7n Th\xE1i H\xF2a"};o(a,1.04,l,l+1.4,"#a79c8c","#b9ae9e",c),o(a,.94,l+1.4,l+7,"#9b3d2d","#9b3d2d",c),o(a,1.06,l+7,l+7.8,"#c9982c","#d4a63a",c),o(a,.78,l+7.8,l+10,"#9b3d2d","#9b3d2d",c),o(a,.92,l+10,l+11,"#c9982c","#d4a63a",c)}return e.add(n.mesh()),e}function Oh(i){let t=i.x.length,e=new be;e.name="trees";let n=new Rr(1,0),s=new pn(.16,.24,1,5),r=new Bi(n,new Ne({flatShading:!0}),t),o=new Bi(s,new Ne({color:"#6b5544"}),t),a=new Jt,l=new Fe,c=new vt;for(let h=0;h<t;h++){let d=i.x[h]*he,u=i.z[h]*he,m=i.y[h]*he,p=i.h[h]*he,x=(h+1)*2654435761>>>0,f=p*(.26+x%100/700);l.setFromAxisAngle(new C(0,1,0),x%628/100),a.compose(new C(d,m+p*.66,u),l,new C(f,p*.36,f)),r.setMatrixAt(h,a),a.compose(new C(d,m+p*.2,u),l,new C(1,p*.42,1)),o.setMatrixAt(h,a),c.setHSL(.27+(x>>>8)%100/1400,.38+(x>>>16)%100/500,.26+(x>>>4)%100/900),r.setColorAt(h,c)}return r.instanceColor.needsUpdate=!0,e.add(r,o),e}function Fh(i){let t=new Ue({side:Ce,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new vt("#5e97d0")},uHorizon:{value:i.fogColor.clone()},uSunDir:{value:i.sunDir.clone()},uSun:{value:new vt("#fff1cf")}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHorizon, uSunDir, uSun; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float t = pow(clamp(d.y, 0.0, 1.0), 0.55);
        vec3 col = mix(uHorizon, uTop, t); float s = max(dot(d, uSunDir), 0.0);
        col += uSun * (pow(s, 400.0) * 1.2 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Xt(new Hn(11e3,24,16),t);return e.name="sky",e.renderOrder=-1,e}var Gn=2600,Yr=class{constructor(t){this.pos=new Float32Array(Gn*3),this.vel=new Float32Array(Gn*3),this.life=new Float32Array(Gn),this.ttl=new Float32Array(Gn),this.size=new Float32Array(Gn),this.alpha=new Float32Array(Gn),this.next=0;let e=new le;e.setAttribute("position",new ae(this.pos,3)),e.setAttribute("aSize",new ae(this.size,1)),e.setAttribute("aAlpha",new ae(this.alpha,1)),e.boundingSphere=new rn(new C,1e5),this.points=new Er(e,new Ue({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:`attribute float aSize, aAlpha; varying float vA; uniform float uScale;
        void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = min(aSize * uScale / max(-mv.z, 0.5), 40.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
        gl_FragColor = vec4(0.93, 0.97, 1.0, vA * smoothstep(0.25, 0.02, d)); }`})),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.rings=[];let n=new Cr(.86,1,40);n.rotateX(-Math.PI/2);for(let s=0;s<28;s++){let r=new Xt(n,new De({color:"#eaf6f7",transparent:!0,opacity:0,depthWrite:!1}));r.visible=!1,r.renderOrder=4,t.add(r),this.rings.push({mesh:r,age:0,ttl:0,grow:0})}this.ringIdx=0,this.ringClock=0}emit(t,e,n,s,r,o,a,l){let c=this.next;this.next=(this.next+1)%Gn,this.pos[c*3]=t,this.pos[c*3+1]=e,this.pos[c*3+2]=n,this.vel[c*3]=s,this.vel[c*3+1]=r,this.vel[c*3+2]=o,this.life[c]=a,this.ttl[c]=a,this.size[c]=l}ripple(t,e,n,s,r,o){let a=this.rings[this.ringIdx];this.ringIdx=(this.ringIdx+1)%this.rings.length,a.mesh.position.set(t,e+.04,n),a.mesh.scale.setScalar(s),a.mesh.visible=!0,a.age=0,a.ttl=o,a.grow=r}wash(t,e,n,s,r,o,a){let l=Math.floor(s*260*r+Math.random());for(let c=0;c<l;c++){let h=Math.random()*Math.PI*2,d=.5+Math.random()*1.3,u=2.5+Math.random()*4.5*s;this.emit(t+Math.cos(h)*d,e+.05,n+Math.sin(h)*d,Math.cos(h)*u+o*.25,1.2+Math.random()*3.2*s,Math.sin(h)*u+a*.25,.5+Math.random()*.6,.16+Math.random()*.2)}this.ringClock+=r,this.ringClock>.22&&(this.ringClock=0,this.ripple(t,e,n,1.2,5+4*s,1.3))}splash(t,e,n,s){let r=Math.floor(160+160*s);for(let o=0;o<r;o++){let a=Math.random()*Math.PI*2,l=1.5+Math.random()*6*(.5+s),c=4+Math.random()*9*(.5+s);this.emit(t+Math.cos(a)*.5,e+.1,n+Math.sin(a)*.5,Math.cos(a)*l,c,Math.sin(a)*l,.8+Math.random()*.9,.22+Math.random()*.3)}for(let o=0;o<3;o++)this.ripple(t,e,n,.8+o*.9,7+o*2,1.6+o*.4)}update(t){for(let n=0;n<Gn;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t,this.vel[n*3+1]-=9.81*t;let s=Math.exp(-1.4*t);this.vel[n*3]*=s,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.alpha[n]=Math.max(0,Math.min(1,this.life[n]/this.ttl[n]))*.85}let e=this.points.geometry;e.attributes.position.needsUpdate=!0,e.attributes.aAlpha.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0;for(let n of this.rings)if(n.mesh.visible){if(n.age+=t,n.age>=n.ttl){n.mesh.visible=!1;continue}n.mesh.scale.setScalar(n.mesh.scale.x+n.grow*t),n.mesh.material.opacity=.55*(1-n.age/n.ttl)}}};var Cl=.9;function j0(){let i=new be,t=new Ne({color:"#2a2630"}),e=new Ne({color:"#e9b949"}),n=new Xt(new Xe(.5,.2,.9),t);i.add(n);let s=new Xt(new Xe(.34,.14,.24),e);s.position.set(0,0,-.5),i.add(s);let r=[];for(let[a,l]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let c=new Xt(new Xe(.08,.06,1),t);c.position.set(a*.36,0,l*.36),c.rotation.y=Math.atan2(a,l),i.add(c);let h=new Xt(new pn(.07,.07,.14,8),t);h.position.set(a*.72,.08,l*.72),i.add(h);let d=new Xt(new pn(.42,.42,.015,20),new De({color:"#d9dde4",transparent:!0,opacity:.32,depthWrite:!1}));d.position.set(a*.72,.17,l*.72),i.add(d);let u=new Xt(new Xe(.8,.012,.06),t);u.position.copy(d.position),i.add(u),r.push(u)}for(let a of[-1,1]){let l=new Xt(new Xe(.05,.05,.8),t);l.position.set(a*.25,-.2,0),i.add(l)}let o=new Xt(new Hn(.06,8,6),new De({color:"#ff4a3d"}));return o.position.set(0,.03,.47),i.add(o),i.scale.setScalar(1.5),i.userData.rotors=r,i}var Bh={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",KeyD:"right",KeyQ:"yawL",ArrowLeft:"yawL",KeyE:"yawR",ArrowRight:"yawR",Space:"up",KeyR:"up",PageUp:"up",ShiftLeft:"down",ShiftRight:"down",KeyF:"down",PageDown:"down"},zh={w:"fwd",\u01B0:"fwd",s:"back",a:"left",\u0103:"left",\u00E2:"left",d:"right",\u0111:"right",q:"yawL",e:"yawR",\u00EA:"yawR"," ":"up",r:"up",f:"down",shift:"down",arrowup:"fwd",arrowdown:"back",arrowleft:"yawL",arrowright:"yawR"},Q0={fwd:"Ti\u1EBFn",back:"L\xF9i",left:"Sang tr\xE1i",right:"Sang ph\u1EA3i",yawL:"Xoay tr\xE1i",yawR:"Xoay ph\u1EA3i",up:"L\xEAn",down:"Xu\u1ED1ng"};function t_(i){return i?i.isContentEditable||i.tagName==="TEXTAREA"?!0:i.tagName==="INPUT"&&!/^(radio|checkbox|button|range|submit|reset)$/i.test(i.type):!1}var Zr=class{constructor(){this.held=new Map,this.active=!1,this.last="",this.lastKey="",this.lastAt=0,this.left={x:0,y:0},this.right={x:0,y:0};let t=600,e=30;window.addEventListener("keydown",n=>{if(n.metaKey||n.ctrlKey||n.altKey||t_(n.target))return;let s=Bh[n.code]||zh[(n.key||"").toLowerCase()];if(!s)return;let r=n.code||`key:${n.key}`,o=performance.now(),a=this.held.get(r);!a||a.released?this.held.set(r,{action:s,since:o,expires:1/0,released:!1}):a.expires=1/0,this.last=Q0[s],this.lastKey=n.key===" "?"Space":n.key||n.code,this.lastAt=o,this.active&&n.preventDefault()},!0),window.addEventListener("keyup",n=>{let s=n.code||`key:${n.key}`,r=performance.now(),o=this.held.get(s);if(o&&(o.released=!0,o.expires=r-o.since<e?r+t:r),!n.code)for(let a of this.held.values())!a.released&&a.since<r-1e3&&(a.released=!0,a.expires=r);this.active&&(Bh[n.code]||zh[(n.key||"").toLowerCase()])&&n.preventDefault()},!0),window.addEventListener("blur",()=>this.held.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.held.clear()})}read(){let t=performance.now(),e=new Set;for(let[o,a]of this.held)a.expires<=t?this.held.delete(o):e.add(a.action);let n=o=>Math.max(-1,Math.min(1,o)),s=(o,a)=>(e.has(a)?1:0)-(e.has(o)?1:0),r=o=>{let a=Math.abs(o);return a<.15?0:Math.sign(o)*((a-.15)/.85)**2};return{forward:n(s("back","fwd")-r(this.right.y)),strafe:n(s("left","right")+r(this.right.x)),up:n(s("down","up")-r(this.left.y)),yaw:n(s("yawR","yawL")-r(this.left.x))}}},Kr=class{constructor(t,e){this.world=t,this.fx=e,this.model=j0(),this.pos=new C,this.vel=new C,this.yaw=0,this.tilt={pitch:0,roll:0},this.yawRate=0,this.yawMax=.6,this.auto=null,this.touches=0,this.crashes=0,this.cooldown=0,this.flash=0,this.lastHit="",this.status={agl:0,overWater:!1,clearanceUp:NaN}}place(t,e,n,s=0){this.pos.set(t,e,n),this.vel.set(0,0,0),this.yaw=s,this.yawRate=0,this.auto=null,this.sync()}sync(){this.model.position.copy(this.pos),this.model.rotation.set(0,0,0),this.model.rotateY(this.yaw),this.model.rotateX(this.tilt.pitch),this.model.rotateZ(this.tilt.roll)}startAuto(t,e){let n=new kn(t,!1,"centripetal");this.auto={curve:n,length:n.getLength(),s:0,speed:e},this.pos.copy(t[0]),this.vel.set(0,0,0)}collides(t,e,n){let s=this.world.terrain;if(e-Cl*.6<s.height(t,n))return"m\u1EB7t \u0111\u1EA5t";let r=this.world.solids.hit(t,e,n,Cl);if(r)return r.info.type==="wall"?"t\u01B0\u1EDDng th\xE0nh":r.info.name||"c\xF4ng tr\xECnh";let o=Ph(this.world.bridgeCol,t,e,n,Cl);return o?o==="pier"?"tr\u1EE5 c\u1EA7u":"m\u1EB7t c\u1EA7u":null}update(t,e,n){let s=this.world.terrain,r=this.pos.clone();if(this.cooldown=Math.max(0,this.cooldown-t),this.flash=Math.max(0,this.flash-t),this.auto){let u=this.auto,m=u.curve.getPointAt(Math.min(1,u.s/u.length)),p=s.waterLevel(m.x,m.z),x=!Number.isNaN(p)&&m.y-p<6;u.s+=(x?u.speed*.6:u.speed)*t;let f=Math.min(1,u.s/u.length),g=u.curve.getPointAt(f),M=u.curve.getTangentAt(f);this.vel.subVectors(g,this.pos).divideScalar(Math.max(t,.001)),this.pos.copy(g);let v=Math.atan2(-M.x,-M.z)-this.yaw;v=Math.atan2(Math.sin(v),Math.cos(v)),this.yaw+=v*Math.min(1,t*4),this.tilt.roll+=(qe.clamp(-v*2.2,-.5,.5)-this.tilt.roll)*Math.min(1,t*5),this.tilt.pitch+=(-.16-this.tilt.pitch)*Math.min(1,t*4),f>=1&&(this.auto=null,this.vel.set(0,0,0),this.onAutoEnd&&this.onAutoEnd())}else{let u=e;this.yawRate+=(u.yaw*this.yawMax-this.yawRate)*Math.min(1,t*3.5),this.yaw+=this.yawRate*t;let m=Math.sin(this.yaw),p=Math.cos(this.yaw),x=(-m*u.forward+p*u.strafe)*16,f=(-p*u.forward-m*u.strafe)*16;this.vel.x+=x*t,this.vel.z+=f*t,this.vel.y+=u.up*13*t;let g=Math.exp(-.9*t),M=Math.exp(-2.2*t);this.vel.x*=g,this.vel.z*=g,this.vel.y*=M;let _=Math.hypot(this.vel.x,this.vel.z),v=26;_>v&&(this.vel.x*=v/_,this.vel.z*=v/_),this.pos.addScaledVector(this.vel,t),this.pos.x=qe.clamp(this.pos.x,n.xmin+20,n.xmax-20),this.pos.z=qe.clamp(this.pos.z,n.zmin+20,n.zmax-20),this.pos.y=Math.min(this.pos.y,450);let R=-(this.vel.x*m+this.vel.z*p),T=this.vel.x*p-this.vel.z*m;this.tilt.pitch+=(qe.clamp(-R*.02,-.45,.45)-this.tilt.pitch)*Math.min(1,t*6),this.tilt.roll+=(qe.clamp(-T*.02,-.45,.45)-this.tilt.roll)*Math.min(1,t*6);let w=this.collides(this.pos.x,this.pos.y,this.pos.z);w&&(this.pos.copy(r),this.vel.multiplyScalar(-.25),this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos.y+=1.5),this.cooldown<=0&&(this.crashes++,this.cooldown=.6),this.flash=.7,this.lastHit=w)}let o=s.waterLevel(this.pos.x,this.pos.z),a=s.height(this.pos.x,this.pos.z),l=!Number.isNaN(o),c=l?o:a,h=this.pos.y-c;l&&(h<3.2&&this.fx.wash(this.pos.x,o,this.pos.z,1-Math.max(0,h-.3)/2.9,t,this.vel.x,this.vel.z),h<.45&&((this.cooldown<=0||this.vel.y<-1)&&(this.fx.splash(this.pos.x,o,this.pos.z,Math.min(1,Math.abs(this.vel.y)/8+Math.hypot(this.vel.x,this.vel.z)/30)),this.cooldown<=0&&(this.touches++,this.cooldown=.7)),this.auto||(this.pos.y=o+.45,this.vel.y=Math.max(2.2,-this.vel.y*.5))));let d=NaN;for(let u of this.world.bridgeCol.decks){if(u.yBot<this.pos.y)continue;let m=u.bx-u.ax,p=u.bz-u.az,x=m*m+p*p,f=((this.pos.x-u.ax)*m+(this.pos.z-u.az)*p)/x;if(f<0||f>1)continue;let g=u.ax+m*f-this.pos.x,M=u.az+p*f-this.pos.z;g*g+M*M<u.halfW*u.halfW&&(Number.isNaN(d)||u.yBot-this.pos.y<d)&&(d=u.yBot-this.pos.y)}this.status={agl:h,overWater:l,clearanceUp:d,speed:this.vel.length()};for(let u of this.model.userData.rotors)u.rotation.y+=t*55;this.sync()}};function kh(i,t){let{ax:e,az:n,ux:s,uz:r,vx:o,vz:a,S:l,water:c}=i,h=(m,p,x,f)=>new C(e+s*(l*(m-.5)+p)+o*x,c+f,n+r*(l*(m-.5)+p)+a*x),d=m=>{let p=0;for(let x=60;x<=420;x+=30){let f=h(3,0,m*x,0);Number.isNaN(t.waterLevel(f.x,f.z))||p++}return p},u=d(1)>=d(-1)?1:-1;return[h(3,-10,u*330,42),h(3,-6,u*230,20),h(3,-2,u*150,5.5),h(3,0,u*95,1.1),h(3,0,u*62,.3),h(3,0,u*40,1.3),h(3,0,u*28,2.2),h(3,0,0,2.6),h(3,0,-u*30,2.4),h(3,14,-u*75,3.2),h(3.5,20,-u*115,5),h(4,10,-u*95,3.4),h(4,0,-u*45,2.4),h(4,0,0,2.5),h(4,0,u*40,2.3),h(4,6,u*95,1.2),h(4,16,u*150,6),h(4.3,40,u*230,24),h(4.5,70,u*300,46)]}var Hh="hue3d.sound";function e_(){try{return window.localStorage.getItem(Hh)!=="off"}catch{return!0}}function n_(i){try{window.localStorage.setItem(Hh,i?"on":"off")}catch{}}function i_(i,t=2){let e=Math.floor(i.sampleRate*t),n=i.createBuffer(1,e,i.sampleRate),s=n.getChannelData(0),r=1234567;for(let o=0;o<e;o++)r=r*1103515245+12345&2147483647,s[o]=r/1073741823-1;return n}function s_(i,t){let e=i.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=12,e.ratio.value=4,e.attack.value=.005,e.release.value=.2,e.connect(t);let n=i.createGain();n.gain.value=0,n.connect(e);let s=[1,1.017,.986,1.031],r=i.createBiquadFilter();r.type="lowpass",r.Q.value=.9,r.frequency.value=1400;let o=i.createGain();o.gain.value=.16,r.connect(o),o.connect(n);let a=s.map(_=>{let v=i.createOscillator();v.type="sawtooth",v.frequency.value=190*_;let R=i.createGain();return R.gain.value=.25,v.connect(R),R.connect(r),v.start(),{o:v,r:_}}),l=i.createOscillator();l.type="triangle",l.frequency.value=380;let c=i.createGain();c.gain.value=.035,l.connect(c),c.connect(n),l.start();let h=i_(i),d=()=>{let _=i.createBufferSource();return _.buffer=h,_.loop=!0,_.start(),_},u=d(),m=i.createBiquadFilter();m.type="bandpass",m.Q.value=.55,m.frequency.value=900;let p=i.createGain();p.gain.value=.08,u.connect(m),m.connect(p),p.connect(n);let x=d(),f=i.createBiquadFilter();f.type="highpass",f.frequency.value=1900;let g=i.createGain();g.gain.value=0,x.connect(f),f.connect(g),g.connect(n);let M=.06;return{master:n,set(_,v,R,T=i.currentTime){let w=120+170*_;for(let L of a)L.o.frequency.setTargetAtTime(w*L.r,T,M);l.frequency.setTargetAtTime(w*2.02,T,M),r.frequency.setTargetAtTime(700+2600*_,T,M),o.gain.setTargetAtTime(.1+.12*_,T,M),c.gain.setTargetAtTime(.015+.05*_,T,M),m.frequency.setTargetAtTime(600+1500*_,T,M),p.gain.setTargetAtTime(.04+.11*_+.08*R,T,M),g.gain.setTargetAtTime(.32*R,T,.08),n.gain.setTargetAtTime(v,T,.12)},splash(_=.6,v=i.currentTime){let R=i.createBufferSource();R.buffer=h;let T=i.createBiquadFilter();T.type="lowpass",T.frequency.setValueAtTime(3800,v),T.frequency.exponentialRampToValueAtTime(500,v+.7);let w=i.createGain();w.gain.setValueAtTime(1e-4,v),w.gain.exponentialRampToValueAtTime(.5+.5*_,v+.02),w.gain.exponentialRampToValueAtTime(1e-4,v+.85),R.connect(T),T.connect(w),w.connect(e),R.start(v,Math.random()),R.stop(v+.9)},thud(_=i.currentTime){let v=i.createOscillator();v.type="sine",v.frequency.setValueAtTime(110,_),v.frequency.exponentialRampToValueAtTime(38,_+.25);let R=i.createGain();R.gain.setValueAtTime(1e-4,_),R.gain.exponentialRampToValueAtTime(.9,_+.01),R.gain.exponentialRampToValueAtTime(1e-4,_+.35),v.connect(R),R.connect(e),v.start(_),v.stop(_+.4);let T=i.createBufferSource();T.buffer=h;let w=i.createBiquadFilter();w.type="lowpass",w.frequency.value=700;let L=i.createGain();L.gain.setValueAtTime(.5,_),L.gain.exponentialRampToValueAtTime(1e-4,_+.18),T.connect(w),w.connect(L),L.connect(e),T.start(_,Math.random()),T.stop(_+.2)}}}var $r=class{constructor(){this.enabled=e_(),this.ctx=null,this.graph=null,this.load=.45,this.active=!1,this.lastTouches=0,this.lastCrashes=0,this.idleTimer=0,document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.active&&this.enabled&&this.ctx.resume())})}ensure(){if(this.enabled){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.graph=s_(this.ctx,this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}}setEnabled(t){this.enabled=t,n_(t),t?this.ensure():this.graph&&(this.graph.master.gain.setTargetAtTime(0,this.ctx.currentTime,.05),setTimeout(()=>{!this.enabled&&this.ctx&&this.ctx.suspend()},300))}update(t,{active:e,loadTarget:n,wash:s,camDist:r,touches:o,crashes:a}){if(this.active=e,this.load+=(n-this.load)*Math.min(1,t*6),!this.ctx||!this.enabled){this.lastTouches=o,this.lastCrashes=a;return}e&&this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume();let l=e?Math.max(.05,Math.min(1.25,14/Math.max(r,1))):0;this.graph.set(this.load,l,s),e&&o>this.lastTouches&&this.graph.splash(.7),e&&a>this.lastCrashes&&this.graph.thud(),this.lastTouches=o,this.lastCrashes=a,!e&&this.ctx.state==="running"?(this.idleTimer+=t,this.idleTimer>1.2&&this.ctx.suspend()):this.idleTimer=0}};var Vh=.32,r_=8,o_=15,a_=3,l_=4;function ue(i,t){return i.route_points&&i.route_points[t]||i.places&&i.places[t]||null}function Gh(i){let t=(p,x)=>{let f=x.x-p.x,g=x.z-p.z,M=Math.hypot(f,g)||1;return[f/M,g/M]},e=(p,x,f)=>({x:p.x+x[0]*f,z:p.z+x[1]*f}),n=(p,x,f)=>({x:p.x+(x.x-p.x)*f,z:p.z+(x.z-p.z)*f}),s=[],r=ue(i,"mid_da_vien"),o=ue(i,"mid_nguyen_hoang"),a=ue(i,"mid_phu_xuan"),l=ue(i,"mid_truong_tien"),c=ue(i,"con_hen");if(r&&a&&l&&c){let p=o?t(r,o):t(a,r);s.push({id:"river",name:"D\u1ECDc s\xF4ng H\u01B0\u01A1ng",color:"#b58cf2",speed:28,desc:"T\u1EEB c\u1EA7u D\xE3 Vi\xEAn xu\xF4i d\xF2ng qua c\u1EA7u Ph\xFA Xu\xE2n, c\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n t\u1EDBi C\u1ED3n H\u1EBFn; c\xF3 \u0111o\u1EA1n l\u01B0\u1EDBt s\xE1t m\u1EB7t n\u01B0\u1EDBc.",steps:[{at:e(r,p,320),h:36},{at:r,h:24,label:"C\u1EA7u D\xE3 Vi\xEAn"},{at:n(r,a,.25),h:7,river:!0},{at:n(r,a,.5),h:3.5,river:!0,label:"L\u01B0\u1EDBt s\xE1t m\u1EB7t s\xF4ng"},{at:n(r,a,.75),h:5,river:!0},{at:a,h:20,label:"C\u1EA7u Ph\xFA Xu\xE2n"},{at:n(a,l,.5),h:4,river:!0},{at:l,h:26,label:"C\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n"},{at:n(l,c,.35),h:6,river:!0},{at:n(l,c,.7),h:9,river:!0},{at:c,h:30,label:"C\u1ED3n H\u1EBFn"},{at:e(c,t(l,c),260),h:110}]})}let h=ue(i,"ky_dai"),d=ue(i,"nghenh_luong");if(h&&d&&["phu_van_lau","ngo_mon","thai_hoa","tu_cam_thanh","kien_trung","duyet_thi","cua_hien_nhon","cua_dong_ba"].every(p=>ue(i,p))){let p=ue(i,"phu_van_lau"),x=ue(i,"ngo_mon"),f=Math.atan2(p.z-h.z,p.x-h.x),M=((Math.atan2(x.z-h.z,x.x-h.x)-f)%(2*Math.PI)+2*Math.PI)%(2*Math.PI);M<Math.PI&&(M+=2*Math.PI);let _=[],v=Math.ceil(M/(Math.PI/6));for(let w=0;w<=v;w++){let L=f+M*(w/v);_.push({at:{x:h.x+Math.cos(L)*95,z:h.z+Math.sin(L)*95},h:48,label:w===0?"K\u1EF3 \u0110\xE0i (bay v\xF2ng quanh c\u1ED9t c\u1EDD)":void 0})}let R=ue(i,"cua_dong_ba"),T=ue(i,"cua_hien_nhon");s.push({id:"citadel",name:"Kinh th\xE0nh \u2013 \u0110\u1EA1i N\u1ED9i",color:"#e1b54a",speed:22,desc:"Ngh\xEAnh L\u01B0\u01A1ng \u0110\xECnh, Phu V\u0103n L\xE2u, bay v\xF2ng K\u1EF3 \u0110\xE0i, r\u1ED3i theo tr\u1EE5c Ng\u1ECD M\xF4n \u2013 \u0110i\u1EC7n Th\xE1i H\xF2a \u2013 T\u1EED C\u1EA5m Th\xE0nh, ra C\u1EEDa \u0110\xF4ng Ba.",steps:[{at:e(d,t(h,d),230),h:10},{at:d,h:14,label:"Ngh\xEAnh L\u01B0\u01A1ng \u0110\xECnh"},{at:p,h:20,label:"Phu V\u0103n L\xE2u"},..._,{at:x,h:30,label:"Ng\u1ECD M\xF4n"},{at:ue(i,"thai_hoa"),h:28,label:"\u0110i\u1EC7n Th\xE1i H\xF2a"},{at:ue(i,"tu_cam_thanh"),h:26,label:"T\u1EED C\u1EA5m Th\xE0nh"},{at:ue(i,"kien_trung"),h:24,label:"\u0110i\u1EC7n Ki\u1EBFn Trung"},{at:ue(i,"duyet_thi"),h:24,label:"Duy\u1EC7t Th\u1ECB \u0110\u01B0\u1EDDng"},{at:T,h:26,label:"C\u1EEDa Hi\u1EC3n Nh\u01A1n"},{at:R,h:30,label:"C\u1EEDa \u0110\xF4ng Ba"},{at:e(R,t(T,R),260),h:120}]})}if(["ga_hue","quoc_hoc","phu_cam","vincom","cong_vien_3_2","cho_dong_ba","cau_gia_hoi"].every(p=>ue(i,p))){let p=ue(i,"ga_hue"),x=ue(i,"quoc_hoc"),f=ue(i,"cau_gia_hoi"),g=ue(i,"cho_dong_ba");s.push({id:"city",name:"Ph\u1ED1 hai b\u1EDD",color:"#e0785f",speed:30,desc:"Ga Hu\u1EBF, Tr\u01B0\u1EDDng Qu\u1ED1c H\u1ECDc, Nh\xE0 th\u1EDD Ph\u1EE7 Cam, Vincom, c\xF4ng vi\xEAn ven s\xF4ng, qua s\xF4ng t\u1EDBi Ch\u1EE3 \u0110\xF4ng Ba v\xE0 C\u1EA7u Gia H\u1ED9i.",steps:[{at:e(p,t(x,p),240),h:30},{at:p,h:34,label:"Ga Hu\u1EBF"},{at:x,h:32,label:"Tr\u01B0\u1EDDng Qu\u1ED1c H\u1ECDc"},{at:ue(i,"phu_cam"),h:40,label:"Nh\xE0 th\u1EDD Ph\u1EE7 Cam"},{at:ue(i,"vincom"),h:46,label:"Vincom Plaza Hu\u1EBF"},{at:ue(i,"cong_vien_3_2"),h:22,label:"C\xF4ng vi\xEAn 3 Th\xE1ng 2"},{at:g,h:30,label:"Ch\u1EE3 \u0110\xF4ng Ba"},{at:f,h:22,label:"C\u1EA7u Gia H\u1ED9i"},{at:e(f,t(g,f),280),h:110}]})}return s}function c_(i,t){let{solids:e,terrain:n,bridgeCol:s,tt:r}=i,o=[[0,0]];for(let l=0;l<8;l++)o.push([Math.cos(l*Math.PI/4)*12,Math.sin(l*Math.PI/4)*12]);let a=t.places&&t.places.ky_dai;return(l,c)=>{let h=-1/0;for(let[p,x]of o){let f=e.pick(l+p,c+x);f&&f.y1>h&&(h=f.y1)}for(let p of s.decks){let x=p.bx-p.ax,f=p.bz-p.az,g=x*x+f*f||1,M=((l-p.ax)*x+(c-p.az)*f)/g;M=Math.max(0,Math.min(1,M)),Math.hypot(p.ax+x*M-l,p.az+f*M-c)<p.halfW+12&&p.yTop>h&&(h=p.yTop)}if(r){let p=(l-r.ax)*r.ux+(c-r.az)*r.uz,x=Math.abs((l-r.ax)*r.vx+(c-r.az)*r.vz);p>-10&&p<r.L+10&&x<16&&(h=Math.max(h,r.deckY+9.5))}a&&Math.hypot(l-a.x,c-a.z)<14&&(h=Math.max(h,(a.ground||0)+17.5+37+1));let d=n.waterLevel(l,c),u=n.height(l,c);return{surf:Number.isNaN(d)?u:d,wet:!Number.isNaN(d),top:h}}}function h_(i,t,e){let n=null,s=-1/0,r=(o,a)=>!Number.isNaN(i.waterLevel(o,a));for(let o=-300;o<=300;o+=12)for(let a=-300;a<=300;a+=12){let l=t+o,c=e+a;if(!r(l,c))continue;let h=150;for(let u=0;u<8&&h>0;u++){let m=Math.cos(u*Math.PI/4),p=Math.sin(u*Math.PI/4);for(let x=10;x<h;x+=10)if(!r(l+m*x,c+p*x)){h=x;break}}let d=h-.35*Math.hypot(o,a);d>s&&(s=d,n={x:l,z:c})}return n||{x:t,z:e}}function Wh(i,t,e){let n=t.terrain,s=c_(t,e),r=i.steps.map(p=>{let x=p.river?h_(n,p.at.x,p.at.z):p.at,f=s(x.x,x.z);return{x:x.x,z:x.z,y:f.surf+p.h,label:p.label}}),o=new kn(r.map(p=>new C(p.x,p.y,p.z)),!1,"centripetal"),a=Math.max(20,Math.ceil(o.getLength()/l_)),l=o.getSpacedPoints(a),c=l.map(p=>{let x=s(p.x,p.z);return Math.max(x.surf+(x.wet?a_:o_),x.top+r_)}),h=o.getLength()/a,d=l.map((p,x)=>Math.max(p.y,c[x])),u=()=>{for(let p=a-1;p>=0;p--)p<a&&(d[p]=Math.max(d[p],d[p+1]-Vh*h));for(let p=1;p<=a;p++)d[p]=Math.max(d[p],d[p-1]-Vh*h)};u();for(let p=0;p<4;p++)d=d.map((x,f)=>f===0||f===a?x:.25*d[f-1]+.5*x+.25*d[f+1]),d=d.map((x,f)=>Math.max(x,c[f])),u();let m=[];for(let p=0;p<=a;p+=3)m.push(new C(l[p].x,d[p],l[p].z));return m[m.length-1].distanceTo(l[a])>1&&m.push(new C(l[a].x,d[a],l[a].z)),Xh(i,m,r)}function Xh(i,t,e){let n=new kn(t,!1,"centripetal"),s=n.getLength(),r=n.getSpacedPoints(Math.ceil(s/10)),o=[];for(let l of e){if(!l.label)continue;let c=0,h=1/0;r.forEach((d,u)=>{let m=Math.hypot(d.x-l.x,d.z-l.z);m<h&&(h=m,c=u)}),o.push({name:l.label,u:c/(r.length-1),x:l.x,z:l.z,y:r[c].y})}o.sort((l,c)=>l.u-c.u);let a=0;for(let l=1;l<r.length;l++)a+=r[l].distanceTo(r[l-1])/i.speed;return{...i,points:t,curve:n,length:s,labels:o,seconds:a,minY:Math.min(...r.map(l=>l.y)),maxY:Math.max(...r.map(l=>l.y))}}function qh(i,t){let e=kh(i,t),n={id:"under",name:"Lu\u1ED3n d\u01B0\u1EDBi c\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n",color:"#9fd27f",speed:17,desc:"H\u1EA1 s\xE1t m\u1EB7t s\xF4ng, ch\u1EA1m n\u01B0\u1EDBc, lu\u1ED3n qua nh\u1ECBp 3 r\u1ED3i v\xF2ng l\u1EA1i qua nh\u1ECBp 4."},s={x:i.ax+i.ux*i.S*3,z:i.az+i.uz*i.S*3};return Xh(n,e,[{...s,label:"G\u1EA7m c\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n \u2013 nh\u1ECBp 3"},{x:i.ax+i.ux*i.S*3.5,z:i.az+i.uz*i.S*3.5,label:"G\u1EA7m c\u1EA7u \u2013 nh\u1ECBp 4"}])}function Yh(i){let t=new be;t.name=`route-${i.id}`;let e=new Xt(new Pr(i.curve,Math.max(40,Math.ceil(i.length/8)),11,8,!1),new De({color:i.color,transparent:!0,opacity:.85,depthWrite:!1}));e.renderOrder=3,t.add(e);let n=new br(new le().setFromPoints(i.curve.getSpacedPoints(Math.ceil(i.length/10))),new as({color:i.color,transparent:!0,opacity:.9,depthTest:!1}));n.renderOrder=6,t.add(n);let s=new be,r=new Hn(13,16,12);for(let o of i.labels){let a=new Xt(r,new De({color:i.color}));a.position.set(o.x,o.y,o.z),s.add(a);let l=new Xt(new pn(1.4,1.4,1,6),new De({color:i.color,transparent:!0,opacity:.55}));l.scale.y=Math.max(1,o.y-2),l.position.set(o.x,o.y/2+1,o.z),s.add(l)}return t.add(s),t.userData={tube:e,line:n,beads:s},t}var ft=i=>document.getElementById(i),cn=(i,t=1)=>Number.isFinite(i)?i.toLocaleString("vi-VN",{minimumFractionDigits:t,maximumFractionDigits:t}):"\u2014",Zh=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function _s(i){let t=ft("loading-step");t&&(t.textContent=i)}async function Wn(i,t){_s(`\u0110ang t\u1EA3i ${t}\u2026`);let e=await fetch(`data/${i}.json`);if(!e.ok)throw new Error(`Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c data/${i}.json (HTTP ${e.status})`);return e.json()}async function u_(){let i=await Wn("meta","th\xF4ng tin c\u1EA3nh"),[t,e,n,s,r,o,a]=[await Wn("terrain","\u0111\u1ECBa h\xECnh"),await Wn("water","m\u1EB7t n\u01B0\u1EDBc"),await Wn("roads","\u0111\u01B0\u1EDDng"),await Wn("bridges","c\u1EA7u"),await Wn("buildings","c\xF4ng tr\xECnh"),await Wn("walls","t\u01B0\u1EDDng th\xE0nh"),await Wn("trees","c\xE2y")];_s("\u0110ang d\u1EF1ng c\u1EA3nh 3D\u2026"),await new Promise(P=>setTimeout(P,30));let l=ft("view"),c;try{c=new _r({canvas:l,antialias:!0,powerPreference:"high-performance"})}catch{throw new Error("Tr\xECnh duy\u1EC7t n\xE0y kh\xF4ng b\u1EADt \u0111\u01B0\u1EE3c WebGL. H\xE3y th\u1EED Chrome, Edge, Firefox ho\u1EB7c Safari b\u1EA3n m\u1EDBi.")}c.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<700?1.5:2)),c.toneMapping=ul,c.toneMappingExposure=1.05;let h=new yr,d={skyColor:new vt("#a9c8e2"),fogColor:new vt("#cfdbe0"),sunDir:new C(-.45,.62,-.64).normalize(),fogNear:1400,fogFar:7800};h.background=d.fogColor,h.fog=new xr(d.fogColor,d.fogNear,d.fogFar);let u=new Le(50,1,.3,14e3);h.add(new Dr("#dfeaf2","#7b6f5a",1.25));let m=new Ur("#fff3dc",2.1);m.position.copy(d.sunDir).multiplyScalar(1e3),h.add(m);let p=new qr(t),x={xmin:i.frame.xmin,xmax:i.frame.xmax,zmin:i.frame.zmin,zmax:i.frame.zmax},f=new gs(32),g=Fh(d);h.add(g);let M=wh(p);h.add(M);let _=Ah(e,d);h.add(_);let v=Rh(n);h.add(v);let R=Ch(s,p,i);h.add(R.group);let T=Dh(r,f,6,x);h.add(T.group);let w=Uh(o,f);h.add(w);let L=Nh(i,f);h.add(L);let X=Oh(a);h.add(X);let y=new Yr(h),b={terrain:p,solids:f,bridgeCol:{decks:R.decks,piers:R.piers}},I=new Kr(b,y);h.add(I.model),_s("\u0110ang l\u1EADp l\u1ED9 tr\xECnh bay\u2026"),await new Promise(P=>setTimeout(P,20));let k=[];for(let P of Gh(i))k.push(Wh(P,{...b,tt:R.ttInfo},i));R.ttInfo&&k.push(qh(R.ttInfo,p));for(let P of k)P.mesh=Yh(P),h.add(P.mesh);y.rings.forEach(P=>{P.mesh.visible=!0}),_s("\u0110ang chu\u1EA9n b\u1ECB \u0111\u1ED3 h\u1ECDa\u2026"),c.compile(h,u),y.rings.forEach(P=>{P.mesh.visible=!1}),k.forEach(P=>{P.mesh.visible=!1}),I.model.visible=!1;let H=new Zr,Z=new $r,F=new Wr(u,l);F.enableDamping=!0,F.dampingFactor=.08,F.screenSpacePanning=!1,F.minDistance=25,F.maxDistance=6500,F.maxPolarAngle=Math.PI*.47;let $=i.places,q=()=>{let P=$.truong_tien,D=$.ngo_mon;F.target.set((P.x+D.x)/2,6,(P.z+D.z)/2),u.position.set(F.target.x+820,520,F.target.z+980)};q(),F.update();let it=null;function tt(P,D,O,K,Q,_t){let xt=new C(P,D,O),Gt=new C(P+Math.sin(Q)*Math.cos(_t)*K,D+Math.sin(_t)*K,O+Math.cos(Q)*Math.cos(_t)*K);it={t:0,dur:Zh?.01:1.6,p0:u.position.clone(),p1:Gt,q0:F.target.clone(),q1:xt}}let rt=[["truong_tien","C\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n"],["phu_xuan","C\u1EA7u Ph\xFA Xu\xE2n"],["da_vien","C\u1EA7u D\xE3 Vi\xEAn"],["ngo_mon","Ng\u1ECD M\xF4n"],["ky_dai","K\u1EF3 \u0110\xE0i"],["thai_hoa","\u0110i\u1EC7n Th\xE1i H\xF2a"]],Tt=[],Ft=ft("labels");for(let[P,D]of rt){if(!$[P])continue;let O=document.createElement("div");O.className="label",O.textContent=D,Ft.appendChild(O);let K=P==="ky_dai"?58:P==="ngo_mon"?20:P.endsWith("hoa")?17:16;Tt.push({el:O,p:new C($[P].x,($[P].ground||0)+K,$[P].z),when:()=>ot==="explore"||ot==="manual"})}if($.truong_tien&&$.phu_xuan){let P=document.createElement("div");P.className="label label-river",P.textContent="S\xF4ng H\u01B0\u01A1ng",Ft.appendChild(P),Tt.push({el:P,p:new C(($.truong_tien.x+$.phu_xuan.x)/2+120,3,($.truong_tien.z+$.phu_xuan.z)/2+60),when:()=>ot!=="auto"})}let Y=new C;function et(){let P=ft("opt-labels").checked,D=c.domElement.clientWidth,O=c.domElement.clientHeight;for(let K of Tt){Y.copy(K.p).project(u);let Q=u.position.distanceTo(K.p),_t=P&&(!K.when||K.when())&&Y.z<1&&Math.abs(Y.x)<1.05&&Math.abs(Y.y)<1.05&&Q<(K.far||4200);K.el.hidden=!_t,_t&&(K.el.style.transform=`translate(${(Y.x*.5+.5)*D}px, ${(-Y.y*.5+.5)*O}px) translate(-50%, -100%)`)}}let ot="explore",lt="chase",Pt=()=>ot==="manual"||ot==="auto",At=new C,Wt=new C,zt=R.ttInfo,Rt=null;function U(){for(let P of k){let D=ot==="routes"||ot==="auto"&&P===Rt,O=P.mesh.userData,K=ot==="routes"&&Rt&&P!==Rt;P.mesh.visible=D,O.tube.visible=ot==="routes",O.line.visible=ot==="routes",O.tube.material.opacity=K?.22:.85,O.line.material.opacity=K?.25:.95,O.beads.visible=!K}document.querySelectorAll(".route-card").forEach(P=>P.classList.toggle("selected",!!Rt&&P.dataset.route===Rt.id))}function we(P){let D=P?P.curve.getSpacedPoints(60):k.flatMap(Bt=>Bt.curve.getSpacedPoints(30)),O=1/0,K=-1/0,Q=1/0,_t=-1/0;for(let Bt of D)O=Math.min(O,Bt.x),K=Math.max(K,Bt.x),Q=Math.min(Q,Bt.z),_t=Math.max(_t,Bt.z);let xt=Math.max(K-O,_t-Q),Gt=.5,wt=window.innerWidth>720?-.28*xt:0;tt((O+K)/2+Math.cos(Gt)*wt,8,(Q+_t)/2-Math.sin(Gt)*wt,xt*1.3+300,Gt,.95)}function qt(P){Rt=P,kt("auto")}function kt(P){ot=P,document.querySelectorAll("[data-mode]").forEach(O=>O.setAttribute("aria-pressed",String(O.dataset.mode===P||O.dataset.mode==="routes"&&P==="auto")));let D=P==="manual"||P==="auto";if(F.enabled=!D,I.model.visible=D,H.active=P==="manual",ft("hud").hidden=!D,ft("places").hidden=P!=="explore",ft("routes").hidden=P!=="routes",ft("keys").hidden=P!=="manual",ft("route-progress").hidden=P!=="auto",ft("yaw-row").hidden=P!=="manual",U(),document.body.classList.toggle("flying",D),ft("sticks").hidden=P!=="manual",D&&(ft("layers").classList.remove("open"),ft("btn-layers").setAttribute("aria-expanded","false")),D&&(document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur(),l.focus({preventScroll:!0})),P==="explore"){let O=I.pos;O.lengthSq()>0&&tt(O.x,Math.max(O.y,4),O.z,260,.6,.55);return}if(P==="routes"){I.auto=null,Rt||(Rt=k[0]),U(),we(Rt);return}if(P==="manual"&&!I.auto&&(I.pos.lengthSq()===0||ot==="manual")){if(!I.started&&zt){let K=zt.ax+zt.ux*zt.S*2.5+zt.vx*1*210,Q=zt.az+zt.uz*zt.S*2.5+zt.vz*1*210;I.place(K,zt.water+22,Q,Math.atan2(zt.vx*1,zt.vz*1)),I.started=!0}I.auto=null}if(P==="auto"){Rt||(Rt=k[0]);let O=Rt;I.startAuto(O.points,O.speed),I.started=!0,I.yawRate=0;let K=O.points[1].clone().sub(O.points[0]);I.yaw=Math.atan2(-K.x,-K.z),ft("rp-name").textContent=O.name,ft("rp-name").style.setProperty("--route",O.color),I.onAutoEnd=()=>{kt("manual"),Zt(`Ho\xE0n th\xE0nh l\u1ED9 tr\xECnh \u201C${O.name}\u201D. B\u1EA1n \u0111ang c\u1EA7m l\xE1i; b\u1EA5m \u201CL\u1ED9 tr\xECnh bay\u201D \u0111\u1EC3 ch\u1ECDn l\u1ED9 tr\xECnh kh\xE1c.`)},U()}At.copy(I.pos).add(new C(Math.sin(I.yaw)*14,5,Math.cos(I.yaw)*14)),u.position.copy(At)}document.querySelectorAll("[data-mode]").forEach(P=>P.addEventListener("click",()=>{P.dataset.mode!=="explore"&&Z.ensure(),kt(P.dataset.mode)}));let Lt=()=>{ft("btn-sound").textContent=Z.enabled?"\xC2m thanh: b\u1EADt":"\xC2m thanh: t\u1EAFt",ft("btn-sound").setAttribute("aria-pressed",String(Z.enabled))};ft("btn-sound").addEventListener("click",()=>{Z.setEnabled(!Z.enabled),Lt()}),Lt(),l.addEventListener("pointerdown",()=>l.focus({preventScroll:!0})),ft("focus-hint").addEventListener("click",()=>l.focus({preventScroll:!0})),ft("btn-view").addEventListener("click",()=>{lt=lt==="chase"?"fpv":"chase",ft("btn-view").textContent=lt==="chase"?"G\xF3c nh\xECn: b\xE1m sau":"G\xF3c nh\xECn: bu\u1ED3ng l\xE1i"}),ft("btn-reset").addEventListener("click",()=>{I.started=!1,I.crashes=0,I.touches=0,kt("manual")}),ft("rp-stop").addEventListener("click",()=>{I.auto=null,kt("manual"),Zt("\u0110\xE3 d\u1EEBng l\u1ED9 tr\xECnh \u2014 b\u1EA1n \u0111ang c\u1EA7m l\xE1i t\u1EA1i ch\u1ED7.")});let se=P=>{let D=Math.floor(P/60),O=Math.round(P%60);return D?`${D} ph\xFAt ${O.toString().padStart(2,"0")} gi\xE2y`:`${O} gi\xE2y`};for(let P of k){let D=document.createElement("div");D.className="route-card",D.dataset.route=P.id,D.style.setProperty("--route",P.color),D.innerHTML='<button type="button" class="rc-main"><span class="rc-name"></span><span class="rc-desc"></span><span class="rc-meta"></span></button><button type="button" class="rc-fly">Bay \u25B6</button>',D.querySelector(".rc-name").textContent=P.name,D.querySelector(".rc-desc").textContent=P.desc,D.querySelector(".rc-meta").textContent=`${cn(P.length/1e3,1)} km \xB7 kho\u1EA3ng ${se(P.seconds)} \xB7 ${P.labels.length} \u0111i\u1EC3m \xB7 cao ${Math.round(P.minY)}\u2013${Math.round(P.maxY)} m`,D.querySelector(".rc-main").addEventListener("click",()=>{Rt=P,U(),we(P)}),D.querySelector(".rc-fly").addEventListener("click",()=>{Z.ensure(),qt(P)}),ft("route-list").appendChild(D);for(let O of P.labels){let K=document.createElement("div");K.className="label label-route",K.style.setProperty("--route",P.color),K.textContent=O.name,Ft.appendChild(K),Tt.push({el:K,p:new C(O.x,O.y+9,O.z),when:()=>(ot==="routes"||ot==="auto")&&Rt===P,far:6e3})}}let Dt="hue3d.yawMax";try{let P=parseFloat(window.localStorage.getItem(Dt));P>=.2&&P<=1.4&&(I.yawMax=P)}catch{}let A=()=>{ft("yaw-sens").value=String(I.yawMax),ft("yaw-val").textContent=`${Math.round(I.yawMax*180/Math.PI)}\xB0/s`};ft("yaw-sens").addEventListener("input",P=>{I.yawMax=parseFloat(P.target.value),A();try{window.localStorage.setItem(Dt,String(I.yawMax))}catch{}}),A(),window.addEventListener("keydown",P=>{(P.code==="KeyC"||P.key==="c")&&Pt()&&!P.repeat&&(P.preventDefault(),ft("btn-view").click()),(P.code==="KeyM"||P.key==="m")&&Pt()&&!P.repeat&&(P.preventDefault(),ft("btn-sound").click()),Pt()&&Z.ensure(),P.code==="Escape"&&ot!=="explore"&&kt(ot==="auto"?"routes":"explore")});let S=[["ngo_mon","\u0110\u1EA1i N\u1ED9i",420,2.6,.5],["ky_dai","K\u1EF3 \u0110\xE0i",220,2.2,.38],["truong_tien","C\u1EA7u Tr\u01B0\u1EDDng Ti\u1EC1n",380,.9,.32],["phu_xuan","C\u1EA7u Ph\xFA Xu\xE2n",360,2.3,.35],["da_vien","C\u1EA7u D\xE3 Vi\xEAn",420,1.2,.4]];for(let[P,D,O,K,Q]of S){if(!$[P])continue;let _t=document.createElement("button");_t.type="button",_t.textContent=D,_t.addEventListener("click",()=>tt($[P].x,($[P].ground||0)+4,$[P].z,O,K,Q)),ft("place-list").appendChild(_t)}ft("btn-home").addEventListener("click",()=>{let P=u.position.clone(),D=F.target.clone();q();let O=u.position.clone(),K=F.target.clone();u.position.copy(P),F.target.copy(D),it={t:0,dur:1.6,p0:P,p1:O,q0:D,q1:K}}),document.querySelectorAll('input[name="bcolor"]').forEach(P=>P.addEventListener("change",()=>{T.recolor(P.value),ft("legend-source").hidden=P.value!=="source",ft("legend-height").hidden=P.value!=="height"})),ft("opt-trees").addEventListener("change",P=>{X.visible=P.target.checked}),ft("opt-buildings").addEventListener("change",P=>{T.group.visible=P.target.checked}),ft("btn-layers").addEventListener("click",()=>{let P=ft("layers");P.classList.toggle("open"),ft("btn-layers").setAttribute("aria-expanded",String(P.classList.contains("open")))});let V=new Or,j=[T.group,L,R.group,w,M,_],nt=null;l.addEventListener("pointerdown",P=>{nt=[P.clientX,P.clientY]}),l.addEventListener("pointerup",P=>{if(!nt||Math.hypot(P.clientX-nt[0],P.clientY-nt[1])>6||Pt())return;let D=l.getBoundingClientRect();V.setFromCamera(new ut((P.clientX-D.left)/D.width*2-1,-((P.clientY-D.top)/D.height)*2+1),u);let O=V.intersectObjects(j,!0);O.length&&ht(O[0])}),ft("info-close").addEventListener("click",()=>{ft("info").hidden=!0});function J(P){return P.map(([D,O])=>`<div class="kv"><dt>${D}</dt><dd>${O}</dd></div>`).join("")}function St(P){let D=r.n[P],O=0;for(let Q=0;Q<P;Q++)O+=r.n[Q]*2;let K=0;for(let Q=0;Q<D;Q++){let _t=O+Q*2,xt=O+(Q+1)%D*2;K+=r.xz[_t]*r.xz[xt+1]-r.xz[xt]*r.xz[_t+1]}return Math.abs(K)/200}function ht(P){let D=P.point.clone();P.face&&D.addScaledVector(P.face.normal,-.3);let O=P.object;for(;O.parent&&O.parent!==h;)O=O.parent;let K="",Q="",_t=f.pick(D.x,D.z);if((O===T.group||O===L||O===w)&&_t){let xt=_t.info;if(xt.type==="building"){let Gt=xt.index;K=r.names[Gt]||"C\xF4ng tr\xECnh",Q=J([["D\u1EA5u ch\xE2n",Ih[r.src[Gt]]],["Chi\u1EC1u cao d\u1EF1ng",`${cn(r.h[Gt]/10-.3)} m`],["Ngu\u1ED3n chi\u1EC1u cao",Lh[r.hs[Gt]]],["Di\u1EC7n t\xEDch n\u1EC1n",`${cn(St(Gt),0)} m\xB2`]])+'<p class="note">M\xE1i ph\u1EB3ng l\xE0 gi\u1EA3 \u0111\u1ECBnh. Chi\u1EC1u cao h\u1ECDc m\xE1y l\u1EC7ch kho\u1EA3ng \xB13 m tr\xEAn m\u1EABu \u0111\u1ED1i chi\u1EBFu nh\u1ECF.</p>'}else if(xt.type==="wall")K=xt.kind==="rampart"?"T\u01B0\u1EDDng th\xE0nh Kinh th\xE0nh":"T\u01B0\u1EDDng Ho\xE0ng th\xE0nh / t\u01B0\u1EDDng trong",Q=J([["Chi\u1EC1u cao d\u1EF1ng",xt.kind==="rampart"?"6,6 m":"4,0 m"],["Ngu\u1ED3n","Tim t\u01B0\u1EDDng OSM; chi\u1EC1u cao theo s\u1ED1 li\u1EC7u c\xF4ng b\u1ED1"]])+'<p class="note">C\u1ED5ng th\xE0nh \u0111\u01B0\u1EE3c kho\xE9t \u1EDF n\u01A1i c\xF3 \u0111\u01B0\u1EDDng \u0111i qua. K\xEDch th\u01B0\u1EDBc c\u1ED5ng ch\u01B0a \u0111o.</p>';else if(xt.type==="landmark"){K=xt.name;let Gt={ky_dai:"Ba t\u1EA7ng \u0111\xE0i t\u1ED5ng ~17,5 m, c\u1ED9t c\u1EDD 37 m (s\u1ED1 li\u1EC7u c\xF4ng b\u1ED1, ch\u01B0a \u0111o ki\u1EC3m).",ngo_mon:"N\u1EC1n \u0111\xE0i ch\u1EEF U cao ~5 m (c\xF4ng b\u1ED1); l\u1EA7u Ng\u0169 Ph\u1EE5ng ph\xE1c th\u1EA3o, t\u1EF7 l\u1EC7 l\xE0 gi\u1EA3 \u0111\u1ECBnh.",thai_hoa:"M\xE1i ch\u1ED3ng hai t\u1EA7ng ph\xE1c th\u1EA3o; chi\u1EC1u cao l\xE0 gi\u1EA3 \u0111\u1ECBnh."};Q=J([["D\u1EA5u ch\xE2n","OpenStreetMap"],["H\xECnh kh\u1ED1i","Ph\xE1c th\u1EA3o tham s\u1ED1"]])+`<p class="note">${Gt[xt.key]||""}</p>`}}else if(O===R.group){let xt=null,Gt=1/0;for(let wt of R.decks){let Bt=wt.bx-wt.ax,$t=wt.bz-wt.az,Ye=Bt*Bt+$t*$t||1,$e=((D.x-wt.ax)*Bt+(D.z-wt.az)*$t)/Ye;$e=Math.max(0,Math.min(1,$e));let ze=Math.hypot(wt.ax+Bt*$e-D.x,wt.az+$t*$e-D.z);ze<Gt&&(Gt=ze,xt=wt)}K=xt&&xt.name||"C\u1EA7u",Q=J([["Chi\u1EC1u d\xE0i (OSM)",`${cn(xt?xt.len:NaN,0)} m`],["Cao \u0111\u1ED9 m\u1EB7t c\u1EA7u","M\xF4 h\xECnh r\xE0ng bu\u1ED9c (gi\u1EA3 \u0111\u1ECBnh)"]]),Q+=xt&&xt.special==="truong_tien"?'<p class="note">6 nh\u1ECBp, 402,6 m theo Wikidata. V\xF2m th\xE9p, tr\u1EE5 v\xE0 \u0111\u1ED9 cao g\u1EA7m c\u1EA7u l\xE0 ph\xE1c th\u1EA3o minh h\u1ECDa. \u0110\u01B0\u1EDDng ch\xEDnh c\u1EE7a c\u1EA7u trong OpenStreetMap thi\u1EBFu th\u1EBB <code>bridge</code>; demo nh\u1EADn ra c\u1EA7u b\u1EB1ng ki\u1EC3m tra h\xECnh h\u1ECDc.</p>':'<p class="note">Kh\xF4ng c\u1EA7u n\xE0o trong d\u1EEF li\u1EC7u m\u1EDF c\xF3 cao \u0111\u1ED9 hay t\u0129nh kh\xF4ng \u0111o \u0111\u1EA1c.</p>'}else{let xt=p.waterLevel(D.x,D.z);K=Number.isNaN(xt)?"M\u1EB7t \u0111\u1EA5t":"M\u1EB7t n\u01B0\u1EDBc",Q=Number.isNaN(xt)?J([["Cao \u0111\u1ED9",`\u2248 ${cn(p.height(D.x,D.z))} m`],["Ngu\u1ED3n","Copernicus GLO-30, \u0111\xE3 l\xE0m m\u01B0\u1EE3t"]])+'<p class="note">DEM 30 m l\xE0 m\u1EB7t ph\u1EE7; \u0111\u1ED9 cao \u1EDF \u0111\xE2y ch\u1EC9 \u0111\u1EC3 \u0111\u1EB7t m\xF4 h\xECnh, kh\xF4ng ph\u1EA3i s\u1ED1 \u0111o.</p>':J([["M\u1EF1c n\u01B0\u1EDBc d\u1EF1ng",`${cn(xt)} m`],["Ngu\u1ED3n","\u0110a gi\xE1c n\u01B0\u1EDBc OSM; m\u1EF1c n\u01B0\u1EDBc quy \u01B0\u1EDBc"]])+'<p class="note">\u0110\u1ED9 s\xE2u \u0111\xE1y s\xF4ng l\xE0 gi\u1EA3 \u0111\u1ECBnh \u0111\u1EC3 hi\u1EC3n th\u1ECB.</p>'}ft("info-title").textContent=K,ft("info-body").innerHTML=Q,ft("info").hidden=!1}for(let P of["left","right"]){let D=ft(`stick-${P}`),O=D.querySelector(".knob"),K=null,Q=xt=>{let Gt=D.getBoundingClientRect(),wt=Gt.width/2,Bt=(xt.clientX-Gt.left-wt)/wt,$t=(xt.clientY-Gt.top-wt)/wt,Ye=Math.hypot(Bt,$t);Ye>1&&(Bt/=Ye,$t/=Ye),H[P]={x:Bt,y:$t},O.style.transform=`translate(${Bt*wt*.6}px, ${$t*wt*.6}px)`};D.addEventListener("pointerdown",xt=>{K=xt.pointerId,D.setPointerCapture(K),Q(xt)}),D.addEventListener("pointermove",xt=>{xt.pointerId===K&&Q(xt)});let _t=()=>{K=null,H[P]={x:0,y:0},O.style.transform=""};D.addEventListener("pointerup",_t),D.addEventListener("pointercancel",_t)}let pt=0;function Zt(P){let D=ft("toast");D.textContent=P,D.hidden=!1,clearTimeout(pt),pt=setTimeout(()=>{D.hidden=!0},3200)}function st(){let P=l.clientWidth,D=l.clientHeight;c.setSize(P,D,!1),u.aspect=P/D,u.updateProjectionMatrix(),y.points.material.uniforms.uScale.value=D*.9}window.addEventListener("resize",st),st();let gt=new Nr,Ct=new C,It=0,mt=0;function Yt(P,D){let O=Math.min(typeof P=="number"?P:gt.getDelta(),.25);mt+=O;let K=mt;if(_.material.uniforms.uTime.value=K,L.userData.flag&&!Zh&&(L.userData.flag.rotation.y=Math.sin(K*1.7)*.25),g.position.copy(u.position),Pt()){let Q=ot==="manual"?H.read():{forward:0,strafe:0,up:0,yaw:0},_t=Math.max(1,Math.ceil(O*30));for(let Bt=0;Bt<_t&&Pt();Bt++)I.update(O/_t,Q,x);let xt;ot==="manual"?xt=.45+.35*Math.max(0,Q.up)-.2*Math.max(0,-Q.up)+.2*Math.min(1,Math.hypot(Q.forward,Q.strafe))+.08*Math.abs(Q.yaw):xt=.45+qe.clamp(I.vel.y*.06,-.2,.35)+Math.min(1,I.vel.length()/40)*.2;let Gt=I.status,wt=Gt.overWater&&Gt.agl<3.2?Math.min(1,1-(Gt.agl-.3)/2.9):0;if(Z.update(O,{active:!0,loadTarget:qe.clamp(xt,0,1),wash:wt,camDist:lt==="fpv"?4:u.position.distanceTo(I.pos),touches:I.touches,crashes:I.crashes}),Ct.set(-Math.sin(I.yaw),0,-Math.cos(I.yaw)),lt==="fpv")u.position.copy(I.pos).addScaledVector(Ct,1.3).add(new C(0,.35,0)),Wt.copy(u.position).addScaledVector(Ct,30),Wt.y+=Math.sin(-I.tilt.pitch)*8;else{At.copy(I.pos).addScaledVector(Ct,-13).add(new C(0,4.2,0));let Bt=1-Math.exp(-O*4);u.position.lerp(At,Bt);let $t=p.surface(u.position.x,u.position.z)+1.2;u.position.y<$t&&(u.position.y=$t),Wt.copy(I.pos).addScaledVector(Ct,7).add(new C(0,1.2,0))}if(u.lookAt(Wt),It-=O,It<=0){It=.1;let Bt=I.status;if(ft("hud-agl-label").textContent=Bt.overWater?"Tr\xEAn m\u1EB7t n\u01B0\u1EDBc":"Tr\xEAn m\u1EB7t \u0111\u1EA5t",ft("hud-agl").textContent=`${cn(Bt.agl)} m`,ft("hud-speed").textContent=`${cn(Bt.speed*3.6,0)} km/h`,ft("hud-gap").textContent=Number.isFinite(Bt.clearanceUp)?`${cn(Bt.clearanceUp)} m`:"\u2014",ft("hud-gap-row").classList.toggle("active",Number.isFinite(Bt.clearanceUp)),ft("hud-touch").textContent=I.touches,ft("hud-crash").textContent=I.crashes,ft("hud-alert").hidden=I.flash<=0,I.flash>0&&(ft("hud-alert").textContent=`Va ch\u1EA1m: ${I.lastHit}`),ot==="manual"){let $t=H.read(),Ye=$t.forward||$t.strafe||$t.up||$t.yaw;ft("hud-input").textContent=Ye?H.left.x||H.left.y||H.right.x||H.right.y?"C\u1EA7n \u0111i\u1EC1u khi\u1EC3n":`Ph\xEDm: ${H.last}`:H.lastAt?`\u0110ang ch\u1EDD l\u1EC7nh (ph\xEDm cu\u1ED1i: ${H.lastKey})`:"Ch\u01B0a nh\u1EADn ph\xEDm n\xE0o",ft("focus-hint").hidden=document.hasFocus()}else if(ft("focus-hint").hidden=!0,ft("hud-input").textContent="Bay t\u1EF1 \u0111\u1ED9ng",I.auto&&Rt){let $t=Math.min(1,I.auto.s/I.auto.length),Ye=Math.max(0,I.auto.length-I.auto.s),$e=Rt.labels.find(Xn=>Xn.u>$t+.003),ze=[...Rt.labels].reverse().find(Xn=>Xn.u<=$t+.003);ft("rp-next").textContent=$e?`Ti\u1EBFp theo: ${$e.name} \xB7 c\xF2n ${cn(($e.u-$t)*I.auto.length,0)} m`:"S\u1EAFp k\u1EBFt th\xFAc l\u1ED9 tr\xECnh",ft("rp-prev").textContent=ze?`V\u1EEBa qua: ${ze.name}`:"Xu\u1EA5t ph\xE1t",ft("rp-bar").style.width=`${($t*100).toFixed(1)}%`,ft("rp-left").textContent=`${cn(Ye/1e3,2)} km c\xF2n l\u1EA1i`}}}else{if(it){it.t=Math.min(1,it.t+O/it.dur);let _t=it.t<.5?4*it.t**3:1-(-2*it.t+2)**3/2;u.position.lerpVectors(it.p0,it.p1,_t),F.target.lerpVectors(it.q0,it.q1,_t),it.t>=1&&(it=null)}F.target.x=qe.clamp(F.target.x,x.xmin,x.xmax),F.target.z=qe.clamp(F.target.z,x.zmin,x.zmax),F.update();let Q=p.surface(u.position.x,u.position.z)+3;u.position.y<Q&&(u.position.y=Q)}Pt()||Z.update(O,{active:!1,loadTarget:.45,wash:0,camDist:100,touches:I.touches,crashes:I.crashes}),y.update(O),D!==!0&&(et(),c.render(h,u))}let Nt=0,ee=()=>{try{Yt()}catch(P){Nt++,Nt<=3&&console.error("[Hu\u1EBF 3D] l\u1ED7i trong khung h\xECnh",P),Nt===1&&Zt("C\xF3 l\u1ED7i khi v\u1EBD c\u1EA3nh \u2014 chi ti\u1EBFt trong console (F12).")}};c.setAnimationLoop(ee),window.__hue={scene:h,camera:u,uav:I,input:H,sound:Z,routes:k,startRoute:qt,setMode:kt,T:p,meta:i,bridges:R,renderer:c,tick:Yt,pause:()=>c.setAnimationLoop(null),resume:()=>c.setAnimationLoop(ee)};let N=i.counts;ft("stat-buildings").textContent=N.buildings.toLocaleString("vi-VN"),ft("stat-roads").textContent=N.roads.toLocaleString("vi-VN"),ft("stat-bridges").textContent=N.bridges.toLocaleString("vi-VN"),ft("stat-trees").textContent=N.trees.toLocaleString("vi-VN"),ft("stat-hml").textContent=`${Math.round(100*N.height_status.ml_estimate/N.buildings)}%`,ft("loading").hidden=!0,document.body.classList.add("ready")}u_().catch(i=>{console.error(i),_s(i.message||String(i)),ft("loading").classList.add("error")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
