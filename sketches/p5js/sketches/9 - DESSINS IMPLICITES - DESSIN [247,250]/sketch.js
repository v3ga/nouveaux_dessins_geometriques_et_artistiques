// ----------------------------------------------------
let DESSIN = 250; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=5000,DE=.01;
if (DESSIN==250) N=14400;
let X,Y,F;
// ----------------------------------------------------
function setup() 
{
  INIT();
  for (let I=0;I<=(DESSIN<250?N:N-1);I++)
  {
    if (DESSIN==250)
    {
      X=int(I/120)/120, Y=(I%120)/120;
    }
    else
    {
      X=RND(1), Y=RND(1);
    }
    CALCULE_F();
    if (F<0)
    {
      LPRINT(`M${int(NP*X)},${int(NP*Y)}`);
      while(CONDITION_F())
      {
        X=X+(2*RND(1)-1)*DE;
        Y=Y+(2*RND(1)-1)*DE;
        CALCULE_F();
        if (F<0)
          LPRINT(`D${int(NP*X)},${int(NP*Y)}`);
      }
    }
  }
  TRACE2();
}

function CONDITION_F()
{
  if (DESSIN==250)
    return F<0 && ABS(X-.5)<.5 && ABS(Y-.5)<.5  
  return F<0;
}

function CALCULE_F()
{
  if (DESSIN==247)
  {
    let Z=(2*X-1)*(2*Y-1)*10;
    F=Z-floor(Z)-.5;
  }
  else if (DESSIN==248)
  {
    let XX=2*X-1,YY=2*Y-1;
    let D1=(1-XX)*(1-XX)+YY*YY,D2=(1+XX)*(1+XX)+YY*YY;
    F=(D1-floor(D1)-.5)*(D2-floor(D2)-.5);
  }
  else if (DESSIN==249)
  {
    let XX=2*X-1,YY=2*Y-1;
    let D1=(1-XX)*(1-XX)+YY*YY,D2=(1+XX)*(1+XX)+YY*YY;
    let Z=2*D1*D2;
    F=(Z-floor(Z)-.5)*XX*YY;
  }
  else if (DESSIN==250)
  {
    let XX=2*X-1,YY=2*Y-1.5;
    let D1=(1-XX)*(1-XX)+YY*YY,D2=(1+XX)*(1+XX)+YY*YY;
    let Z1=10*SQR(XX*XX+YY*YY);
    F=(Z1-floor(Z1)-.5)*XX*YY*(XX+YY)*(XX-YY);
  }  
}



