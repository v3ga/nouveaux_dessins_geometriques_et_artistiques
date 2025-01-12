// ----------------------------------------------------
let DESSIN = 199; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=1,N=7,K=3,S=3;
if (DESSIN==183)
  M=1,N=7,K=1,S=9;
else if (DESSIN==184)
  M=1,N=7,K=2,S=5;
else if (DESSIN==186)
  M=1,N=7,K=4,S=2;
else if (DESSIN==187)
  M=6,N=6,K=2,S=4;
else if (DESSIN==188)
  M=6,N=6,K=3,S=3;
else if (DESSIN==189)
  M=6,N=6,K=4,S=2;
else if (DESSIN==190)
  M=3,N=6,K=3,S=3;
else if (DESSIN==191)
  M=3,N=6,K=4,S=2;
else if (DESSIN==192)
  M=1,N=7,K=1,S=10;
else if (DESSIN==193)
  M=1,N=7,K=2,S=6;
else if (DESSIN==194)
  M=1,N=7,K=3,S=3;
else if (DESSIN==195)
  M=1,N=7,K=4,S=2;
else if (DESSIN==196)
  M=1,N=7,K=5,S=2;
else if (DESSIN==197)
  M=1,N=3,K=2,S=6;
else if (DESSIN==198)
  M=1,N=3,K=4,S=8;
else if (DESSIN==199)
  M=1,N=3,K=5,S=6;
else if (DESSIN==200)
  M=1,N=3,K=7,S=4;
else if (DESSIN==201)
  M=1,N=4,K=2,S=8;
else if (DESSIN==202)
  M=1,N=4,K=3,S=6;
else if (DESSIN==203)
  M=1,N=4,K=4,S=5;
else if (DESSIN==204)
  M=1,N=4,K=5,S=4;
else if (DESSIN==205)
  M=1,N=4,K=6,S=3;
else if (DESSIN==206)
  M=1,N=9,K=1,S=10;
else if (DESSIN==207)
  M=1,N=9,K=2,S=6;
else if (DESSIN==208)
  M=1,N=9,K=3,S=4;
else if (DESSIN==209)
  M=1,N=9,K=4,S=2;
else if (DESSIN==210)
  M=1,N=9,K=2,S=6;
else if (DESSIN==211)
  M=1,N=9,K=3,S=5;
else if (DESSIN==212)
  M=1,N=9,K=4,S=4;
// ----------------------------------------------------
function setup() 
{
  INIT();
  if (DESSIN<=186)
    translate(0,-35)
  else if (DESSIN_EST([190,191]))
    translate(0,45)
  else if (DESSIN_EST([197,198,199,200]))
  {
    scale(1.,.675);
    translate(0,-130);
  }
  
  let X=Array(M).fill(0),Y=Array(M).fill(0),L=Array(N).fill(0),A=Array(N).fill(0),B=Array(N).fill(0),C=Array(N).fill(0),D=Array(N).fill(0),E=Array(N).fill(0);
  if (DESSIN_EST([187,188,189]))
  {
    for (let I=0; I<=M; I++)
    {
      let W=2*I*PI/M;
      X[I]=NP/2*(1+cos(W));
      Y[I]=NP/2*(1+sin(W));
    }
    L[0]=1/3;L[1]=1/3;L[2]=2/3;L[3]=1/3;L[4]=1/3;L[5]=1/3;
    A[0]=0;A[1]=2*PI/3;A[2]=0;A[3]=-PI;A[4]=-PI/3;A[5]=0;
    B[1]=1;B[4]=1;
  }
  if (DESSIN==190)
  {
    for (let I=0; I<=M; I++)
    {
      let W=-(4*I+3)*PI/6;
      X[I]=NP/2*(1+.7*cos(W));
      Y[I]=NP/2*(1+.7*sin(W));
    }
    L[0]=1/3;L[1]=1/3;L[2]=2/3;L[3]=1/3;L[4]=1/3;L[5]=1/3;
    A[0]=0;A[1]=2*PI/3;A[2]=0;A[3]=-PI;A[4]=-PI/3;A[5]=0;
    B[1]=1;B[4]=1;
  }
  else if (DESSIN==191)
  {
    for (let I=0; I<=M; I++)
    {
      let W=-(4*I+3)*PI/6;
      X[I]=NP/2*(1+.65*cos(W));
      Y[I]=NP/2*(1+.65*sin(W));
    }
    L[0]=1/3;L[1]=1/3;L[2]=2/3;L[3]=1/3;L[4]=1/3;L[5]=1/3;
    A[0]=0;A[1]=2*PI/3;A[2]=0;A[3]=-PI;A[4]=-PI/3;A[5]=0;
    B[1]=1;B[4]=1;
  }
  else if (DESSIN_EST([192,193,194,195,196]))
  {
    X[0]=0;X[1]=NP;
    Y[0]=NP;Y[1]=0;
    L[0]=1/4;L[1]=SQR(2)/4;L[2]=L[1];L[3]=L[1];L[4]=L[1];L[5]=1/2;L[6]=1/4;
    A[0]=0;A[1]=-PI/4;A[2]=PI/4;A[3]=3*PI/4;A[4]=-3*PI/4;A[5]=0;A[6]=0;
    B[0]=1;B[2]=1;B[4]=1;B[6]=1;
    C[5]=1;
    E[1]=1;E[3]=1;
  }
  else if (DESSIN_EST([197,198,199,200]))
  {
    X[0]=NP/9;X[1]=NP/9;
    Y[0]=7*NP/9;Y[1]=-Y[0];
    L[0]=1/SQR(2);L[1]=1/2;L[2]=1/2;
    A[0]=PI/4;A[1]=-PI/2;A[2]=0;
    B[0]=1;
  }
  else if (DESSIN_EST([201,202,203,204,205]))
  {
    X[0]=0;X[1]=NP;
    Y[0]=0;Y[1]=0;
    L[0]=1/2;L[1]=1/2;L[2]=1/2;L[3]=1/2;
    A[0]=PI/2;A[1]=0;A[2]=0;A[3]=-PI/2;
    B[0]=1;B[3]=1;
  }
  else if (DESSIN_EST([206,207,208,209]))
  {
    X[0]=0;X[1]=NP;
    Y[0]=0;Y[1]=NP;
    for (let I=0;I<=9;I++) L[I]=1/3;
    A[0]=0;A[1]=0;A[2]=PI/2;A[3]=PI;A[4]=-PI/2;A[5]=-PI/2;A[6]=0;A[7]=PI/2;
  }  
  else if (DESSIN_EST([210,211,212]))
  {
    X[0]=0;X[1]=NP;
    Y[0]=0;Y[1]=NP;
    for (let I=0;I<=8;I++) L[I]=1/3;
    A[0]=0;A[1]=PI/2;A[2]=0;A[3]=-PI/2;A[4]=PI;A[5]=-PI/2;A[6]=0;A[7]=PI/2;
    C[4]=1;
  }  
  else
  {
    X[0]=NP/9;X[1]=8*NP/9;
    Y[0]=NP/5;Y[1]=NP/5;
    L[0]=SQR(1/7);L[1]=L[0];L[2]=L[0];L[3]=L[0];L[4]=L[0];L[5]=L[0];L[6]=L[0];
    A[0]=-ATN(SQR(3/25));A[1]=A[0]+PI/3;A[2]=A[0]+PI;A[3]=A[0]+2*PI/3;
    A[4]=A[0];A[5]=A[0];A[6]=A[3]+PI;
    B[1]=1;B[2]=1;B[6]=1;
    E[1]=1;E[2]=1;E[6]=1;
  }
  let XD,YD,XA,YA,X0,Y0,X1,Y1,X2,Y2,A0,L0,I,LL,AA,BB,CC,T1,T2,T3,R;
  for (let II=0;II<=M-1;II++)
  {
    XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    X0=XD,Y0=YD,X1=X0,Y1=Y0,X2=X0,Y2=Y0;
    X1=int(X0),Y1=int(Y0);
    LPRINT(`M${X1},${Y1}`);
    if (XA!=XD) A0=ATN((YA-YD)/(XA-XD)); else A0=PI/2*SGN(YA-YD);
    if ((XA-XD)<0) A0=A0+PI;
    L0=SQR(pow(XA-XD,2)+pow(YA-YD,2));
    I=0;
    while(I<=(pow(N,K)-1))
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
      
      X0=X1;X1=X2;X2=X2+LL*cos(AA);
      Y0=Y1;Y1=Y2;Y2=Y2+LL*sin(AA);
            

      // SOUS PROGRAMME POUR ARRONDIR
      let VX=X1-X0, VY=Y1-Y0, WX=X2-X1, WY=Y2-Y1;
      for (let K4=0; K4<=S; K4++)
      {
        let AN=PI/2*K4/S,CO=cos(AN),SI=sin(AN);
        let XQ=(X0+X2+CO*(-WX)+SI*VX)/2;
        let YQ=(Y0+Y2+CO*(-WY)+SI*VY)/2;
        if (I==0 || DD==1) { LPRINT(`M${int(XQ)},${int(YQ)}`) };
        if (I>0 && DD==0) { LPRINT(`D${int(XQ)},${int(YQ)}`) };
      }
      // FIN SOUS PROGRAMME POUR ARRONDIR
      if (CC==1) I=I+R; else I=I+1;
    }
  }
  TRACE2();
}



