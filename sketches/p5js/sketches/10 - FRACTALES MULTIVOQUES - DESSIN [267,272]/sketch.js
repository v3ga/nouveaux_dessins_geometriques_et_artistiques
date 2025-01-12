// ----------------------------------------------------
let DESSIN = 267; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=4,H1=0,H2=4,M=12,R1=1,R2=.5,R3=.5;
let X1,Y1,X2,Y2,C,S;

// ----------------------------------------------------
function setup() 
{
  INIT();
  if (DESSIN==268)
    K=8,H1=0,H2=3,M=4,R1=1,R2=1/2,R3=1/3;
  else if (DESSIN==269)
    K=5,H1=5,H2=5,M=5,R1=1,R2=1/2,R3=1/2;
  else if (DESSIN==270)
    K=6,H1=0,H2=4,M=3,R1=1,R2=1/SQR(3),R3=1/3;
  else if (DESSIN_EST([271]))
    K=6,H1=3,H2=3,M=9,R1=1,R2=1/2,R3=1/2;
  else if (DESSIN_EST([272]))
    K=6,H1=3,H2=3,M=9,R1=1/2,R2=1/2,R3=1/2;
  X1=Array(M),Y1=Array(M),X2=Array(M),Y2=Array(M),C=Array(K),S=Array(K);

  let W;
  for (let I=0;I<=M;I++)
  {
    if (DESSIN_EST([267,268,270]))
      W=2*PI*I/M;
    else if (DESSIN_EST([269]))
      W=2*PI*I/M+PI/2;
    else if (DESSIN_EST([271,272]))
      W=2*PI*I*4/M+PI/2;
    X1[I]=R1*cos(W);
    Y1[I]=R1*sin(W);
  }
  for (let I=0;I<=K-1;I++)
  {
    W=2*PI*I/K;
    S[I]=sin(W);
    C[I]=cos(W);
  }
  for (let H=H1;H<=H2;H++)
  {
    for (let I=0;I<=pow(K,H)-1;I++)
    {
      let I0=I;
      for (let IJ=0;IJ<=M;IJ++)
      {
        X2[IJ]=X1[IJ];
        Y2[IJ]=Y1[IJ];
      }
      if (H==0) { DESSINE_SEGMENTS(); continue }
      for (let J=0;J<=H-1;J++)
      {
        let I1=int(I0/K);
        let I2=I0-I1*K;
        TRANSFORME(I2);
        I0=I1;
      }
      DESSINE_SEGMENTS();        
    }
  }  
  TRACE2();
}

function TRANSFORME(I2)
{
  let XX,YY;
  for (let L=0;L<=M;L++)
  {
    XX=X2[L],YY=Y2[L];
    X2[L]=R3*XX*C[I2]-(R2+R3*YY)*S[I2];
    Y2[L]=R3*XX*S[I2]+(R2+R3*YY)*C[I2];
  }
}

function DESSINE_SEGMENTS()
{
  let X_,Y_;
  for (let IK=0;IK<=M;IK++)
  {
    X_=int(NP/2*(1+X2[IK]));
    Y_=int(NP/2*(1+Y2[IK]));
    if (IK==0) LPRINT(`M${X_},${Y_}`);
    if (IK>0)  LPRINT(`D${X_},${Y_}`);
  }
}

  
  




