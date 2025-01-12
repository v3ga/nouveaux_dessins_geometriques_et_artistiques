// ----------------------------------------------------
let DESSIN = 72; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=5, N=6,H1=1,H2=3,H3=2,RR=NP/2,AN=0;
if (DESSIN==71)
  N=12,H1=3,H2=9,H3=6; 
else if (DESSIN==72)
  N=12,H1=3,H2=6,H3=9;
else if (DESSIN==73)
  N=7,H1=1,H2=2,H3=6;

// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let M=0;M<=N-1;M++)
  {
    let XC=NP/2+RR*cos(2*PI*M/N+AN);
    let YC=NP/2+RR*sin(2*PI*M/N+AN);
    let XD=NP/2+RR*cos(2*PI*(M+H1)/N+AN);
    let YD=NP/2+RR*sin(2*PI*(M+H1)/N+AN);
    let XE=NP/2+RR*cos(2*PI*(M+H2)/N+AN);
    let YE=NP/2+RR*sin(2*PI*(M+H2)/N+AN);
    let XF=NP/2+RR*cos(2*PI*(M+H3)/N+AN);
    let YF=NP/2+RR*sin(2*PI*(M+H3)/N+AN);
    let XS,YS;
    for (let I=0;I<=pow(2,K)-1;I++)
    {
      XA=XC;YA=YC;XB=XD;YB=YD;
      [XS,YS] = CANTOR(I);
      LPRINT(`M${int(XS)},${int(YS)}`);
      XA=XE;YA=YE;XB=XF;YB=YF;
      [XS,YS] = CANTOR(I);
      LPRINT(`D${int(XS)},${int(YS)}`);
    }
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
