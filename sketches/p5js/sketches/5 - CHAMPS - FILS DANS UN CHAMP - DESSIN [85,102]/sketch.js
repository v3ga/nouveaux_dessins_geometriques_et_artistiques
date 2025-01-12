//
// 91 output is not good
//
// ----------------------------------------------------
let DESSIN = 92; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=100,M=100,K=.03;
if (DESSIN==86)
{
  N=500;M=10;
}
else if (DESSIN==87)
{
  N=500;M=10;
}
else if (DESSIN_EST([88,89]))
{
  N=500;M=10;K=.02
}
else if (DESSIN==90)
{
  N=300;M=20;K=.01
}
else if (DESSIN_EST([91,94,96]))
{
  N=500;M=10;K=.03
}
else if (DESSIN_EST([92,93,98,99,101]))
{
  N=180;M=30;K=.02
}
else if (DESSIN==95)
{
  N=500;M=100;K=.05
}
else if (DESSIN==97)
{
  N=800;M=20;K=.01
}
else if (DESSIN==100)
{
  N=1000;M=20;K=.01
}
else if (DESSIN==102)
{
  N=285;M=20;K=.01
}
  
// ----------------------------------------------------
function setup() 
{
  INIT();
  
  for (let I=0;I<=N;I++)
  {
    let X=RND(1),Y=RND(1);
    let X_=int(NP*X),Y_=int(NP*Y);
    let XX,YY,AN;
    for(let J=0;J<=M;J++)
    {
      if (J==0) LPRINT(`M${X_},${Y_}`);
      if (J>0)  LPRINT(`D${X_},${Y_}`);

      XX=2*X-1;YY=2*Y-1;AN=cos(6*PI*(YY*YY+XX*XX));
      
      if (DESSIN==86)
      {
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        AN=cos(4*AN);
      }
      else if (DESSIN==87)
      {
        AN=PI*cos(2*PI*(ABS(XX)+ABS(YY)));        
      }
      else if (DESSIN==88)
      {
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        AN=AN*3+XX*YY;
      }
      else if (DESSIN==89)
      {
        XX=8*X-4;YY=8*Y-4
        let XP=SQR(ABS(XX))*sin(YY*YY),YP=sin(2*XX*YY);
        if (XP!=0) AN=ATN(YP/XP); else AN=PI/2;
      }
      else if (DESSIN_EST([90,91,92,94,95,96,102]))
      {
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        if (DESSIN==90)
          AN=AN+PI*.9*sin(3*PI*SQR(XX*XX+YY*YY));
        else if (DESSIN==91)
          AN=AN+PI+sin(4*PI*SQR(2*XX*XX+YY*YY))*8;
        else if (DESSIN==92)
          AN=AN+4*PI/3+sin(6*PI*SQR(XX*XX+YY*YY))/4;
        else if (DESSIN==94)
          AN=AN+PI/5;
        else if (DESSIN==95)
          AN=AN+PI/2-.2;
        else if (DESSIN==96)
          AN=AN+PI/3+sin(4*PI*SQR(XX*XX+YY*YY))/3;
        else if (DESSIN==102)
          AN=AN+PI/2*sin(4*PI*SQR(3*XX*XX+YY*YY));
      }
      else if (DESSIN==93)
      {
        XX=2*X-int(2*X);YY=2*Y-int(2*Y);
        XX=2*XX-1;YY=2*YY-1;
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        AN=AN+4*PI/3+sin(6*PI*SQR(XX*XX+YY*YY))/4;
      }
      else if (DESSIN==97)
      {
        XX=10*X-5;YY=10*Y-5;
        let DG=XX*XX+YY*YY;
        let XP=(DG-1)*(DG-9), YP=DG-4;
        if (XX!=0) AN=ATN(YP/XP); else AN=PI/2;
      }
      else if (DESSIN==98)
      {
        let P8=1;XX=X;YY=Y;
        while (P8<5 && (int(2*YY)+int(2*XX)==1))
        {
          XX=2*XX-int(2*XX);YY=2*YY-int(2*YY);P8=P8+1
        }
        XX=2*XX-1;YY=2*YY-1;
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        AN=7*AN;
      }
      else if (DESSIN==99)
      {
        let P8=1;XX=X;YY=Y;
        while (P8<8 && (int(2*YY)==0))
        {
          XX=2*XX-int(2*XX);YY=2*YY-int(2*YY);P8=P8+1
        }
        XX=2*XX-1;YY=2*YY-1;
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        AN=AN+4*PI/3+sin(6*PI*SQR(XX*XX+YY*YY))/4;
      }
      else if (DESSIN==100)
      {
        XX=2*X-1;YY=2*Y-1;
        AN=2*PI*sin(2*PI*XX*YY);        
      }
      else if (DESSIN==101)
      {
        let P8=1;XX=X;YY=Y;
        while (P8<5 && (int(2*YY)+int(2*XX)==1))
        {
          XX=2*XX-int(2*XX);YY=2*YY-int(2*YY);P8=P8+1
        }
        XX=2*XX-1;YY=2*YY-1;
        if (XX!=0) AN=ATN(YY/XX); else AN=PI/2*SGN(YY)
        if (XX<0) AN=AN+PI*SGN(YY);
        AN=AN+XX+YY;
      }
      
      X=X+K*cos(AN);Y=Y+K*sin(AN);
      if (X>0 && X<1) X_=int(NP*X); else break;
      if (Y>0 && Y<1) Y_=int(NP*Y); else break;
    }
  }
  TRACE2();
}




