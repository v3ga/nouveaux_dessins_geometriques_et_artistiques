// Coefficients R,CX,CY for DESSIN 124,125,126,127,130,132 were changed to make
// the drawing visible on the canvas
// DESSIN 126 does not match the book output
// DESSIN 130,132 are scaled on y-axis

// ----------------------------------------------------
let DESSIN = 123; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=40,K=30,K1=0,K2=30;
if (DESSIN==124)
  N=40,K=50,K1=10,K2=40;
else if (DESSIN_EST([125,126]))
  N=40,K=6,K1=0,K2=6;
else if (DESSIN_EST([127,128]))
  N=40,K=20,K1=0,K2=20;
else if (DESSIN==129)
  N=40,K=30,K1=0,K2=30;
else if (DESSIN==130)
  N=40,K=100,K1=0,K2=100;
else if (DESSIN==131)
  N=40,K=70,K1=0,K2=70;
else if (DESSIN==132)
  N=20,K=70,K1=10,K2=60;

// ----------------------------------------------------
function setup() 
{
  if (DESSIN==130)
    INIT2(1000);
  else 
    INIT();
    
  let XA=Array(N),YA=Array(N),XB=Array(N),YB=Array(N);
  
  let R=.45,CX=.5,CY=.5,H1=1,H2=2,A0=0;
  if (DESSIN==124)
    R=.20,CX=1,CY=0,H1=2,H2=1,A0=0;
  else if (DESSIN==125)
    R=.10,CX=1,CY=1,H1=1,H2=2,A0=0;
  else if (DESSIN==126)
    R=.10,CX=1,CY=0,H1=1,H2=2,A0=0;
  else if (DESSIN==127)
    R=.25,CX=.5,CY=0.25,H1=1,H2=1,A0=0;
  else if (DESSIN==128)
    R=.25,CX=.5,CY=0.25,H1=1,H2=1,A0=0;
  else if (DESSIN==129)
    R=.45,CX=.5,CY=0.5,H1=1,H2=1,A0=0;
  else if (DESSIN==130)
    R=.5,CX=.5,CY=1.5,H1=1,H2=2,A0=0;
  else if (DESSIN==131)
    R=.5,CX=.5,CY=.5,H1=1,H2=4,A0=0;
  else if (DESSIN==132)
    R=.5,CX=.5,CY=.4,H1=1,H2=2,A0=0;
  
  for (let I=0;I<=N;I++)
  {
    if (DESSIN==129)
      XA[I]=CX+R/6*cos(H1*2*I*PI/N);
    else
      XA[I]=CX+R*cos(H1*2*I*PI/N);
    YA[I]=CY+R*sin(H2*2*I*PI/N);
  }
  
  R=.45,CX=.5,CY=.5,H1=1,H2=1,A0=0;
  if (DESSIN==124)
    R=.20,CX=0,CY=1,H1=1,H2=2,A0=PI;
  else if (DESSIN==125)
    R=.10,CX=0,CY=1,H1=1,H2=3,A0=0;
  else if (DESSIN==126)
    R=.10,CX=0,CY=1,H1=2,H2=3,A0=0;
  else if (DESSIN==127)
    R=.25,CX=.5,CY=0.75,H1=1,H2=2,A0=0;
  else if (DESSIN==128)
    R=.25,CX=.5,CY=0.75,H1=1,H2=2,A0=PI;
  else if (DESSIN==129)
    R=.45,CX=.5,CY=0.5,H1=1,H2=1,A0=0;
  else if (DESSIN==130)
    R=.5,CX=.5,CY=0.5,H1=1,H2=2,A0=PI/2;
  else if (DESSIN==131)
    R=.5,CX=.5,CY=.5,H1=4,H2=1,A0=PI/2;
  else if (DESSIN==132)
    R=.5,CX=.5,CY=.6,H1=1,H2=2,A0=PI/2;

  for (let I=0;I<=N;I++)
  {
    XB[I]=CX+R*cos(H1*2*I*PI/N+A0);
    if (DESSIN==129)
      YB[I]=CY+R/6*sin(H2*2*I*PI/N+A0);
    else
      YB[I]=CY+R*sin(H2*2*I*PI/N+A0);
  }
  let LR,X,Y,X_,Y_;
  for (let L=K1;L<=K2;L++)
  {
    LR=L/K;
    for (let I=0;I<=N;I++)
    {
      X=LR*XA[I]+(1-LR)*XB[I];
      Y=LR*YA[I]+(1-LR)*YB[I];
      X_=int(NP*X),Y_=int(NP*Y);
    
      if (I==0)  LPRINT(`M${X_},${Y_}`);
      if (I>0)   LPRINT(`D${X_},${Y_}`);
    }
  }
  
  TRACE();
}


