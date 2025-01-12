// 67 : output not correct
//

// ----------------------------------------------------
let DESSIN = 60; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let M=3, N=4;
if (DESSIN==66)
  M=4, N=4;
if (DESSIN==68)
  M=8, N=4;
if (DESSIN==69)
  M=16, N=4;
let X=Array(M),Y=Array(M),L=Array(N-1),A=Array(N-1);
let R,XC,YC,AD,K,X0,Y0,X1,Y1;
// ----------------------------------------------------
function setup() 
{
  INIT();
  
  _L=()=>{
    if (DESSIN==62) return 11;
    else if (DESSIN==63) return 64;
    else if (DESSIN==64) return 108;
    else if (DESSIN==65) return 5;
    else if (DESSIN==66) return 4;
    else if (DESSIN==67) return 7;
    else if (DESSIN==68) return 6;
    else if (DESSIN==69) return 4;
    return 8;
  }
  
  L[0]=1/3; L[1]=L[0]; L[2]=L[0]; L[3] = L[0];
  A[0]=0; A[1] = PI/3; A[2] = -A[1]; A[3] = 0;
  for (let L=0; L<=_L(); L++)
  {
    if (DESSIN==60)
      R = 1/pow(sqrt(3),L), XC=0, YC=0, AD=PI/2+L*PI/6, K=2;
    else if (DESSIN==61)
      R = 1/pow(sqrt(3),L), XC=0, YC=0, AD=PI/2+L*PI/6, K=4-int(L/2);
    else if (DESSIN==62)
      R = 1/pow(sqrt(3),L/2), XC=0, YC=0, AD=PI/2+L*PI/12, K=4-int(L/3);
    else if (DESSIN==63)
      R = (pow(.5,int(L/8)))/4, AD=PI*L/4, XC=3*R*cos(AD), YC=3*R*sin(AD), K=3-int(L/16);
    else if (DESSIN==64)
      R = (pow(.5,int(L/18)))/4, AD=2*PI*L/18, XC=3*R*cos(AD), YC=3*R*sin(AD), K=3-int(L/36);
    else if (DESSIN==65)
      R = 1, AD=PI/2, XC=0, YC=0.001, K=L;
    else if (DESSIN==66)
    {
      for (let Q=0;Q<=4;Q++)
      {
        R = SQR(2)/6, XC=(L-2)/3, YC=(Q-2)/3, AD=PI/4, K=3;
        VON_KOCH();
      }
    }
    else if (DESSIN==67)
    {
      for (let Q=0;Q<=7;Q++)
      {
        if ( (L+Q)<4 || (L+Q)>10 ) break;
        XC=0.5+Q/8-L/8, YC=-1.5+(Q+L)*SQR(3)/8, R=SQR(3)/12, AD=PI/2, K=3
        VON_KOCH();
      }
    }
    else if (DESSIN==68)
    {
      for (let Q=0;Q<=6;Q++)
      {
        R=.25,XC=(L-3)*4/21, YC=(Q-3)*4/21, AD=PI/2, K=3
        VON_KOCH();
      }
    }    
    else if (DESSIN==69)
    {
      for (let Q=0;Q<=8;Q++)
      {
        R=1/3,XC=(L-2)*4/21, YC=(Q-4)*4/21, AD=PI/2, K=3
        VON_KOCH();
      }
    } 
    
    if (!DESSIN_EST([66,67,68,69]))
      VON_KOCH();
  }

  TRACE2();
}

// ----------------------------------------------------
function VON_KOCH()
{
  for (let I=0; I<=M; I++)
  {
    let W = -2*PI*I/M+AD;
    X[I] = NP/2*(1+XC+R*cos(W));
    Y[I] = NP/2*(1+YC+R*sin(W));
  }

  for (let II=0; II<=M-1; II++)
  {
      let XD = X[II], YD = Y[II], XA = X[II+1], YA = Y[II+1];
      X0=XD,Y0=YD;
      X1=int(X0),Y1=int(Y0);
      LPRINT(`M${X1},${Y1}`);
      let A0;
      if (XA != XD)
      {
        A0 = atan( (YA-YD)/(XA-XD) );
      }
      else
      {
        A0 = PI/2 * SGN(YA-YD);
      }
      if ((XA-XD) < 0) A0 = A0+PI;
      let L0 = sqrt( pow(XA-XD,2) + pow(YA-YD,2) );
      for (let I=0; I<=pow(N,K)-1; I++)
      {
        let LL=L0, AA=A0, T1=I;
        if (K==0) 
        {
           LPRINT_X1_Y1(LL,AA); 
        } 
        else
        {
          for (J=K-1; J>=0; J--)
          {
            R = pow(N,J);
            let T2 = int(T1/R);
            AA = AA + A[T2], LL = LL*L[T2];
            T1=T1-T2*R;
          }
          LPRINT_X1_Y1(LL,AA); 
        }
      }
  }    
}

// ----------------------------------------------------
function LPRINT_X1_Y1(LL,AA)
{
  X0=X0+LL*cos(AA),X1=int(X0);
  Y0=Y0+LL*sin(AA),Y1=int(Y0);
  LPRINT(`D${X1},${Y1}`);
}
