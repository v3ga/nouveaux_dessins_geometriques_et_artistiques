// ----------------------------------------------------
let DESSIN = 78; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=2000,K=.05;
if (DESSIN==78 || DESSIN==79)
    K=0.1
else if (DESSIN==80 || DESSIN==81)
    N=3000,K=.05;
else if (DESSIN==82)
    N=4000,K=.04;
else if (DESSIN==83)
    N=4000,K=.03;
else if (DESSIN==84)
    N=6350,K=.02;

// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let I=0;I<=N;I++)
  {
    let X=RND(1),Y=RND(1);
    let X_=int(NP*(K+X)/(1+2*K)),Y_=int(NP*(K+Y)/(1+2*K));
    let XX,YY,AN,XP,YP;
    
    if (DESSIN==77)
      XX=2*X-1,YY=2*Y-1,AN=sin(PI*XX/(abs(YY)+.1));
    else if (DESSIN==78)
      XX=2*X-1,YY=2*Y-1,AN=cos(PI*YY);
    else if (DESSIN==79)
      XX=2*X-1,YY=2*Y-1,AN=2*PI*XX*YY;
    else if (DESSIN==80)
      XX=2*X-1,YY=4*Y-2,AN=sin(4*PI*XX)*sin(2*PI*YY);
    else if (DESSIN==81)
      XX=2*X-1,YY=6*Y-3,AN=sin(5*PI*XX)*sin(3*PI*YY);
    else if (DESSIN==82)
    {
      XX=8*X-4,YY=8*Y-4,AN=sin(5*PI*XX)*sin(3*PI*YY),XP=sin(XX)*sin(YY),YP=cos(XX*YY);
      if (XP!=0) AN=atan2(YP,XP); else AN=PI/2;      
    }
    else if (DESSIN==83)
      XX=2*X-1,YY=2*Y-1,AN=cos(6*PI*(XX*XX+YY*YY));
    else if (DESSIN==84)
      XX=2*X-1,YY=2*Y-1,AN=cos(6*PI*(XX*XX-YY*YY));
    
    let Z=X+K*cos(AN),T=Y+K*sin(AN);
    let Z_=int(NP*(K+Z)/(1+2*K)),T_=int(NP*(K+T)/(1+2*K));
    LPRINT(`M${X_},${Y_}`);
    LPRINT(`D${Z_},${T_}`);
  }
  TRACE();
}

