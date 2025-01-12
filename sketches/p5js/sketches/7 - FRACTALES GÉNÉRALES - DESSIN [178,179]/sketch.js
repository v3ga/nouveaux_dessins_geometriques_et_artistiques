// ----------------------------------------------------
let DESSIN = 179; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=1,N=9,K=DESSIN==178?2:4;

// ----------------------------------------------------
function setup() 
{
  INIT();
  translate(0,30);
  scale(1,0.85)
  
  let X=Array(M).fill(0),Y=Array(M).fill(0),L=Array(N).fill(0),A=Array(N).fill(0),B=Array(N).fill(0),C=Array(N).fill(0),D=Array(N).fill(0),E=Array(N).fill(0);
  X[0]=0;X[1]=NP;
  Y[0]=NP/2;Y[1]=NP/2;
  L[0]=1/3;L[1]=1/6;L[2]=1/3;L[3]=1/6;L[4]=1/6;L[5]=1/3;L[6]=1/6;
  L[7]=1/3;L[8]=1/3;
  A[0]=0;A[1]=PI/2;A[2]=0;A[3]=-PI/2;A[4]=-PI/2;A[5]=-PI;A[6]=PI/2;
  A[7]=0;A[8]=0
  D[7]=1;
  let XD,YD,XA,YA,X0,Y0,X1,Y1,A0,L0,I,LL,AA,BB,CC,T1,T2,T3,R;
  for (let II=0;II<=M-1;II++)
  {
    XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    X0=XD,Y0=YD;
    X1=int(X0),Y1=int(Y0);
    LPRINT(`M${X1},${Y1}`);
    if (XA!=XD) A0=ATN((YA-YD)/(XA-XD)); else A0=PI/2*SGN(YA-YD);
    if ((XA-XD)<0) A0=A0+PI;
    L0=SQR(pow(XA-XD,2)+pow(YA-YD,2));
    I=0;
    while(I<=(pow(N,K)-1)) // TOCHECK
    {
      LL=L0,AA=A0,BB=1,CC=0,EE=1,T1=I;
      for (J=K-1;J>=0;J--)
      {
        R=pow(N,J),T2=int(T1/R);
        if (EE==1) T3=T2; else T3=N-1-T2;
        AA=AA+BB*EE*A[T3],LL=LL*L[T3];
        BB=BB*(1-2*B[T3]),CC=C[T3],DD=D[T3],EE=EE*(1-2*E[T3]),T1=T1-T2*R;
        if (CC==1) break;
      }
      X0=X0+LL*cos(AA),X1=int(X0);
      Y0=Y0+LL*sin(AA),Y1=int(Y0);
      if (DD==1) LPRINT(`M${X1},${Y1}`);
      if (DD==0 || DD==undefined) LPRINT(`D${X1},${Y1}`); // TOCHECK
      if (CC==1) I=I+R; else I=I+1;
    }
  }
  TRACE2();
}


