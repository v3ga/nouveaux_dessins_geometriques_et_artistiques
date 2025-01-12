// ----------------------------------------------------
let DESSIN = 74; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=3,K=13,LL=NP/150,AA=2*PI/3;
let X0=3*NP/4;Y0=NP/4,A0=0;
if (DESSIN==75)
  N=5,K=7,LL=NP/100,AA=4*PI/5,X0=NP*.3,Y0=NP/8;
else if (DESSIN==76)
  N=4,K=9,LL=NP/170,AA=PI/2,X0=NP*.75,Y0=NP*.2401;

// ----------------------------------------------------
function setup() 
{
  INIT();
  LPRINT(`M${int(X0)},${int(Y0)}`);
  let NN=N*pow(N-1,K-1)-1;
  for (let I=0;I<=NN;I++)
  {
    let I1=I,H=0;
    while ( (I1%(N-1)==0) && (H<K-1) ) {
     I1=I1/(N-1);H=H+1; 
    }
    A0=A0+AA*(H+1);
    X0=X0+LL*cos(A0);
    Y0=Y0+LL*sin(A0);
    LPRINT(`D${int(X0)},${int(Y0)}`);
  }
  TRACE();
}

// ----------------------------------------------------
function CANTOR(I)
{
  let IS = I;
  let RS=0;
  for (let LS=0;LS<=K-1;LS++)
  {
    let JS = IS%2;
    if (LS>0) RS=RS+JS*2/pow(3,K-LS)
    else RS=JS/pow(3,K-1);
    IS = int(IS/2);
  }
  let XS=RS*(XA-XB)+XB;
  let YS=RS*(YA-YB)+YB;
  
  return [XS,YS];
}
