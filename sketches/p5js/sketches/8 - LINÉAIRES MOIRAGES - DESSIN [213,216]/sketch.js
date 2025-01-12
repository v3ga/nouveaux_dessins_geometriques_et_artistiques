// ----------------------------------------------------
let DESSIN = 213; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let N=60,K=2;
if (DESSIN==215)
  N=40,K=4;
else if (DESSIN==216)
  N=80,K=2;
let H=2*K-1;
let XD=Array(H),YD=Array(H),XA=Array(H),YA=Array(H);

// ----------------------------------------------------
function setup() 
{
  INIT();
  if (DESSIN==213)
  {
    XD[0]=0;YD[0]=0;XA[0]=NP;YA[0]=0;
    XD[1]=NP/4;YD[1]=NP;XA[1]=NP*.75;YA[1]=NP;
    XD[2]=0;YD[2]=NP;XA[2]=NP;YA[2]=NP;
    XD[3]=NP/4;YD[3]=0;XA[3]=NP*.75;YA[3]=0;
  }
  else if (DESSIN==214)
  {
    XD[0]=NP*3/8;YD[0]=0;XA[0]=NP/2;YA[0]=0;
    XD[1]=0;YD[1]=NP;XA[1]=NP;YA[1]=NP;
    XD[2]=NP/2;YD[2]=0;XA[2]=NP*5/8;YA[2]=0;
    XD[3]=0;YD[3]=NP;XA[3]=NP;YA[3]=NP;
  }
  else if (DESSIN==215)
  {
    XD[0]=0;YD[0]=0;XA[0]=0;YA[0]=0;
    XD[1]=NP;YD[1]=0;XA[1]=NP;YA[1]=NP;
    XD[2]=NP/8;YD[2]=0;XA[2]=NP/8;YA[2]=0;
    XD[3]=NP;YD[3]=0;XA[3]=NP;YA[3]=NP;

    XD[4]=NP;YD[4]=NP;XA[4]=NP;YA[4]=NP;
    XD[5]=0;YD[5]=0;XA[5]=0;YA[5]=NP;
    XD[6]=7*NP/8;YD[6]=NP;XA[6]=7*NP/8;YA[6]=NP;
    XD[7]=0;YD[7]=0;XA[7]=0;YA[7]=NP;
  }
  else if (DESSIN==216)
  {
    XD[0]=0;YD[0]=0;XA[0]=0;YA[0]=NP;
    XD[1]=NP;YD[1]=NP;XA[1]=NP;YA[1]=0;
    XD[2]=0;YD[2]=0;XA[2]=NP;YA[2]=0;
    XD[3]=NP;YD[3]=NP;XA[3]=0;YA[3]=NP;
  }
    
  for (let I=0;I<=K-1;I++)
    for (let J=0;J<=N;J++)
    {
      let L=J/N;
      let X_=int( L*XD[2*I]+(1-L)*XA[2*I] );
      let Y_=int( L*YD[2*I]+(1-L)*YA[2*I] );
      let Z_=int( L*XD[2*I+1]+(1-L)*XA[2*I+1] );
      let T_=int( L*YD[2*I+1]+(1-L)*YA[2*I+1] );
      LPRINT(`M${X_},${Y_}`);
      LPRINT(`D${Z_},${T_}`);
    }
  
  TRACE2();
}



