// translate call are made so
// the drawing is "almost" centered (very empirical)
// ----------------------------------------------------
let DESSIN = 146; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=1,N=7,K=DESSIN==143?1:DESSIN==144?2:DESSIN==145?3:4;

let points=[];
let O=[]
// ----------------------------------------------------
function setup() 
{
  INIT();
  let X=Array(M).fill(0),Y=Array(M).fill(0),L=Array(N-1).fill(0),A=Array(N-1).fill(0),B=Array(N-1).fill(0),C=Array(N-1).fill(0),D=Array(N-1).fill(0),E=Array(N-1).fill(0);
    X[0]=NP/9;X[1]=8*NP/9; // TOCHECK = f(K)
    Y[0]=NP/5;Y[1]=NP/5; // TOCHECK = f(K)
    if (DESSIN==144)
      translate(70,30);
    else if (DESSIN==145)
      translate(130,60);
    else if (DESSIN==146)
      translate(185,70);
  L[0]=SQR(1/7);L[1]=L[0];L[2]=L[0];L[3]=L[0];L[4]=L[0];L[5]=L[0];L[6]=L[0];
  A[0]=-ATN(SQR(3)/25);A[1]=A[0]+PI/3;A[2]=A[0]+PI;A[3]=A[0]+2*PI/3;
  A[4]=A[0];A[5]=A[0];A[6]=A[3]+PI;
  B[1]=1;B[2]=1;B[6]=1
  E[1]=1;E[2]=1;E[6]=1
  let XD,YD,XA,YA,X0,Y0,X1,Y1,A0,L0,I,LL,AA,BB,CC,T1,T2,T3,R;
  for (let II=0;II<=M-1;II++)
  {
    XD=X[II],YD=Y[II],XA=X[II+1],YA=Y[II+1];
    X0=XD,Y0=YD;
    X1=int(X0),Y1=int(Y0);
    LPRINT(`M${X1},${Y1}`);
    points.push([X1,Y1]);
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
        //console.log(`I=${I}, J=${J}, R=${R}, T1=${T1},T2=${T2},T3=${T3}, EE=${EE}, DD=${DD}`,AA,BB,CC,DD,EE)
        if (CC==1) break;
      }
      //if (I==6) AA = -A[1]
      X0=X0+LL*cos(AA),X1=int(X0);
      Y0=Y0+LL*sin(AA),Y1=int(Y0);
      if (DD==1) LPRINT(`M${X1},${Y1}`);
      if (DD==0 || DD==undefined) LPRINT(`D${X1},${Y1}`); // TOCHECK
      if (CC==1) I=I+R; else I=I+1;
      points.push([X1,Y1]);
    }
    if (false)
    points.forEach( (p,index)=>{
      circle(p[0],height-p[1],5)
      text(index,p[0]+7,height-p[1]) 
    })
  }
  TRACE2();
}


