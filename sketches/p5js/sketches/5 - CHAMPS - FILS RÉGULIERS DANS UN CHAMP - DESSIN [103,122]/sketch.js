// ----------------------------------------------------
let DESSIN = 117; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=30,M=5,K=.03;
if (DESSIN==104)
{
  N=10;M=20;K=.02;
}
else if (DESSIN==105)
{
  N=15;M=30;K=.02;
}
else if (DESSIN==106)
{
  N=50;M=1;K=.03;
}
else if (DESSIN_EST([107,111]))
{
  N=20;M=20;K=.02;
}
else if (DESSIN_EST([108,109,110,112,113,118,120,121,122]))
{
  N=30;M=10;K=.02;
}
else if (DESSIN==114)
{
  N=30;M=5;K=.03;
}
else if (DESSIN==115)
{
  N=40;M=3;K=.02;
}
else if (DESSIN==116)
{
  N=40;M=20;K=.01;
}
else if (DESSIN_EST([117,119]))
{
  N=40;M=3;K=.03;
}

// ----------------------------------------------------
function setup() 
{
  INIT();

  let X,Y,X_,Y_,XX,YY,XP,YP,AN;
  for (let I=0;I<=N;I++)
  {
    for (let J=0;J<=N;J++)
    {
      X=I/N;Y=J/N;
      X_=int(NP*X);Y_=int(NP*Y);
      for (let L=0;L<=M;L++)
      {
        if (L==0) LPRINT(`M${X_},${Y_}`);
        if (L>0)  LPRINT(`D${X_},${Y_}`);
        XX=2*X-1;YY=2*Y-1;
        if (DESSIN==109)
        {
          XX=2*X-int(2*X);YY=3*Y-int(3*Y);
          XX=2*XX-1;YY=2*YY-1;
        }
        else if (DESSIN==110)
        {
          XX=3*X-int(3*X);YY=3*Y-int(3*Y);
          XX=2*XX-1;YY=2*YY-1;
        }
        else if (DESSIN==111)
        {
          XX=2*X-.5;YY=2*Y-1;
          XP=ABS(XX*XX-YY*YY)*2;
          XP=XP-int(XP);
          YP=sin(XX+YY);
        }
        else if (DESSIN==112)
        {
          XX=X*Y-int(X*Y);YY=X+Y-int(X+Y);
          XX=2*XX-1;YY=2*YY-1;
        }
        else if (DESSIN==113)
        {
          XX=X*X-int(X*X);YY=Y*Y-int(Y*Y);
          XX=2*XX-1;YY=2*YY-1;
        }
        else if (DESSIN==114)
        {
          XX=4*X-2;YY=4*Y-2;
          XP=YY*(YY*YY-1);YP=sin(XX+YY);
        }
        else if (DESSIN==116)
        {
          XX=12*X-6;YY=12*Y-6;
          XP=sin(XX*XX+YY);YP=sin(XX*YY);
        }
        else if (DESSIN==122)
        {
          XX=3*X-int(3*X);YY=3*Y-int(3*Y);
          XX=2*XX-1;YY=2*YY-1;
        }
        
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        
        if (DESSIN==103)
          AN=5*AN; 
        else if (DESSIN==104)
          AN=AN*5*(XX*XX+YY*YY); 
        else if (DESSIN==105)
          AN=PI*sin(2*PI*XX)+PI*sin(2*PI*YY)+(XX*XX+YY*YY)/5; 
        else if (DESSIN_EST([106,107]))
          AN=AN*6*(ABS(XX)+ABS(YY)); 
        else if (DESSIN==108)
          AN=PI/2*sin(6*PI*XX)+PI/2*sin(6*PI*YY); 
        else if (DESSIN==109)
          AN=AN+PI+sin(2*PI*SQR(XX*XX+YY*YY))/2; 
        else if (DESSIN==110)
          AN=7*AN; 
        else if (DESSIN_EST([111,114,116]))
        {
          if (XP!=0) AN=ATN(YP/XP); else AN=PI/2*SGN(YP)
          if (XP<0) AN=AN+PI*SGN(YP);
        }          
        else if (DESSIN==112)
          AN=AN+PI+sin(2*PI*SQR(XX*XX+2*YY*YY))/2; 
        else if (DESSIN==113)
          AN=3*AN; 
        else if (DESSIN==115)
          AN=8*AN; 
        else if (DESSIN==117)
          AN=ABS(sin(2*PI*XX)+sin(2*PI*YY)); 
        else if (DESSIN==118)
          AN=5*pow(AN,5); 
        else if (DESSIN==119)
          AN=AN/(ABS(XX)+.01); 
        else if (DESSIN==120)
          AN=AN+PI+sin(4*PI*SQR(3*XX*XX+YY*YY))*1.3; 
        else if (DESSIN_EST([121,122]))
          AN=AN+PI+sin(2*PI*SQR(XX*XX+YY*YY))*3; 
        
        X=X+K*cos(AN);Y=Y+K*sin(AN);
        if (X>0 && X<1) X_=int(NP*X); else break;
        if (Y>0 && Y<1) Y_=int(NP*Y); else break;
      }
    }
  }
  TRACE2();
}




