// Coefficients CX,CY for DESSIN 136,137,138,139,140,142 were changed to make
// the drawing visible on the canvas


// ----------------------------------------------------
let DESSIN = 134; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=40,K=50,K1=0,K2=50;
if (DESSIN==134)
  N=40,K=60,K1=10,K2=50;
else if (DESSIN==137)
  N=16,K=100,K1=30,K2=80;
else if (DESSIN==138)
  N=40,K=60,K1=0,K2=30;
else if (DESSIN==139)
  N=40,K=30,K1=0,K2=30;
else if (DESSIN==140)
  N=12,K=100,K1=20,K2=80;
else if (DESSIN==141)
  N=40,K=30,K1=0,K2=30;
else if (DESSIN==142)
  N=12,K=100,K1=20,K2=90;
  

// ----------------------------------------------------
function setup() 
{
  if (DESSIN_EST([137,142]))
    INIT2(800);
  else 
    INIT();
  
  let XA=Array(N),YA=Array(N),XB=Array(N),YB=Array(N);
  
  let R=.45,CX=.5,CY=.5,H1=1,H2=1,A0=0,AN=0,X1,Y1,X2,Y2,J,JR;
  if (DESSIN==134)
    R=.45,CX=.5,CY=.2,H1=1,H2=1;
  else if (DESSIN==135)
    R=.45,CX=.5,CY=0.1,H1=1,H2=3;
  else if (DESSIN==136)
    R=.25,CX=.5,CY=0.7,H1=1,H2=1;
  else if (DESSIN==137)
    R=.55,CX=.5,CY=0.7,H1=3,H2=3;
  else if (DESSIN==138)
    R=.45,CX=.5,CY=0.35,H1=1,H2=3;
  else if (DESSIN==139)
    R=.25,CX=.5,CY=0.7,H1=2,H2=3;
  else if (DESSIN==140)
    R=.45,CX=.5,CY=0.3,H1=3,H2=5;
  else if (DESSIN==141)
    R=.25,CX=.5,CY=.5,H1=1,H2=1;
  else if (DESSIN==142)
    R=.55,CX=.5,CY=0.4,H1=1,H2=3;
  
  for (let I=0;I<=N;I++)
  {
    XA[I]=CX+R*cos(H1*2*I*PI/N);
    YA[I]=CY+R*sin(H2*2*I*PI/N);
    if (DESSIN==141)
      YA[I]=CY+R/5*sin(H2*2*I*PI/N);
  }
  
  R=.45,CX=.5,CY=.5,A0=PI;
  if (DESSIN==134)
    R=.45,CX=.5,CY=.8,A0=PI;
  else if (DESSIN==135)
    R=.45,CX=.5,CY=1.2,A0=PI/2;
  else if (DESSIN==136)
    R=.25,CX=.5,CY=0.3,A0=0;
  else if (DESSIN==137)
    R=.55,CX=.5,CY=1.2,A0=PI;
  else if (DESSIN==138)
    R=.45,CX=.5,CY=0.55,A0=PI;
  else if (DESSIN==139)
    R=.25,CX=.5,CY=0.3,A0=0;
  else if (DESSIN==140)
    R=.45,CX=.5,CY=0.7,A0=PI;
  else if (DESSIN==141)
    R=.48,CX=.5,CY=.5,A0=PI/2;
  else if (DESSIN==142)
    R=.55,CX=.5,CY=1.2,A0=PI;

  for (let I=0;I<=N;I++)
  {
    AN=int(4*I/N)*PI/2+A0;
    X1=CX+R*cos(AN);
    Y1=CY+R*sin(AN);
    X2=CX+R*cos(AN+PI/2);
    Y2=CY+R*sin(AN+PI/2);
    J=I-int(4*I/N)*N/4;JR=4*J/N;
    XB[I]=JR*X2+(1-JR)*X1;
    YB[I]=JR*Y2+(1-JR)*Y1;
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


