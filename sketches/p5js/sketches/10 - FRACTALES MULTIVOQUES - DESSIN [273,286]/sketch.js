// 273 : added a translate to center the drawing

// ----------------------------------------------------
let DESSIN = 283; 

// ----------------------------------------------------
let NP=480,PI=Math.PI;
let K=2,H1=0,H2=7,M=20,CO,SI,R3,X1=Array(),Y1=Array(),X2=Array(),Y2=Array();
let INIT_PARAMS,TRANSFORME;

// ----------------------------------------------------
if (DESSIN==273)
{
  INIT_PARAMS=_=>{
    for (let J=0;J<=M;J++)
      X1[J]=.5+.5*cos(PI*J/M),Y1[J]=.5*sin(PI*J/M); 
    translate(0,-NP/2.25)
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX/2,YY/2]}, 
    (XX,YY)=>{return [1-XX/2,-YY/2]} 
  ];

}
else if (DESSIN==274)
{
  INIT_PARAMS=_=>{    
    K=2,H1=0,H2=7,M=6;
    for (let J=0;J<=M;J++)
    {
      let Q=2*PI*J/M;
      X1[J]=cos(Q),Y1[J]=sin(Q);
    }
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [-.5-YY/2,XX/2]}, 
    (XX,YY)=>{return [ .5-YY/2,XX/2]} 
  ];

}
else if (DESSIN==275)
{
  INIT_PARAMS=_=>{
    K=5,H1=1,H2=5,M=4,X1=[0,1,1,0,0],Y1=[0,0,1,1,0];
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX*XX/3+1/3,YY*YY/3+1/3]}, 
    (XX,YY)=>{return [XX*XX/3,YY*YY/3+1/3]}, 
    (XX,YY)=>{return [XX*XX/3+1/3,YY*YY/3]}, 
    (XX,YY)=>{return [XX*XX/3+2/3,YY*YY/3+1/3]}, 
    (XX,YY)=>{return [XX*XX/3+1/3,YY*YY/3+2/3]}
  ];

}
else if (DESSIN==276)
{
  INIT_PARAMS=_=>{
    K=4,H1=0,H2=5,M=6,X1=[.5,.5,0,0,1,1,.5],Y1=[1,.5,.5,1,1,.5,.5];    
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX/2,YY/2]}, 
    (XX,YY)=>{return [XX/2+.5,YY/2]}, 
    (XX,YY)=>{return [XX/4+1/8,YY/4+5/8]}, 
    (XX,YY)=>{return [XX/4+5/8,YY/4+5/8]} 
  ];

}
else if (DESSIN==277)
{
  INIT_PARAMS=_=>{
    K=4,H1=0,H2=5,M=4;
    for (let J=0;J<=M;J++)
    {
      let W=2*J*PI/M;
      X1[J]=.5+.5*cos(W),Y1[J]=.5+.5*sin(W);
    }    
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX/2,YY/2]}, 
    (XX,YY)=>{return [XX/2+.5,YY/2]}, 
    (XX,YY)=>{return [XX/4+1/8,YY/4+5/8]}, 
    (XX,YY)=>{return [XX/4+5/8,YY/4+5/8]}
  ];

}
else if (DESSIN==278)
{
  INIT_PARAMS=_=>{
    K=5,H1=0,H2=5,M=4,CO=cos(PI/4),SI=sin(PI/4),R3=SQR(2)/3,X1=[0,1,1,0,0],Y1=[0,0,1,1,0];    
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX/3,YY/3]}, 
    (XX,YY)=>{return [1-XX/3,YY/3]}, 
    (XX,YY)=>{return [1-XX/3,1-YY/3]}, 
    (XX,YY)=>{return [XX/3,1-YY/3]}, 
    (XX,YY)=>{return [R3*(CO*XX-SI*YY)+.5,R3*(SI*XX+CO*YY)+1/6]} 
  ];

}
else if (DESSIN==279)
{
  INIT_PARAMS=_=>{
    K=5,H1=1,H2=5,M=4,X1=[0,1,1,0,0],Y1=[0,0,1,1,0];
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX/3+1/3,YY/3]}, 
    (XX,YY)=>{return [XX/3,YY/3+1/3]}, 
    (XX,YY)=>{return [XX/3+1/3,YY/3+1/3]}, 
    (XX,YY)=>{return [XX/3+2/3,YY/3+1/3]}, 
    (XX,YY)=>{return [XX/3+1/3,YY/3+2/3]} 
  ];

}
else if (DESSIN==280)
{
  INIT_PARAMS=_=>{
    K=5,H1=5,H2=5,M=4,X1=[0,1,1,0,0],Y1=[0,0,1,1,0];    
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX/3+1/3,YY/3]}, 
    (XX,YY)=>{return [XX/3,YY/3+1/3]}, 
    (XX,YY)=>{return [XX/3+1/3,YY/3+1/3]}, 
    (XX,YY)=>{return [XX/3+2/3,YY/3+1/3]}, 
    (XX,YY)=>{return [XX/3+1/3,YY/3+2/3]} 
  ];

}
else if (DESSIN==281)
{
  INIT_PARAMS=_=>{
    K=4,H1=5,H2=5,M=4;
    for (let J=0;J<=M;J++)
    {
      let W=2*J*PI/M;
      X1[J]=.5+.5*cos(W),Y1[J]=.5+.5*sin(W);
    }
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX*XX/2,YY*YY/2]}, 
    (XX,YY)=>{return [1-XX*XX/2,YY*YY/2]}, 
    (XX,YY)=>{return [XX*XX/2,1-YY*YY/2]}, 
    (XX,YY)=>{return [1-XX*XX/2,1-YY*YY/2]}
  ];

}
else if (DESSIN==282)
{
  INIT_PARAMS=_=>{
    K=5,H1=3,H2=5,M=4;
    for (let J=0;J<=M;J++)
    {
      let W=2*J*PI/M;
      X1[J]=.5+.5*cos(W),Y1[J]=.5+.5*sin(W);
    }
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [XX*XX/3,YY*YY/3]}, 
    (XX,YY)=>{return [1-XX*XX/3,YY*YY/3]}, 
    (XX,YY)=>{return [XX*XX/3,1-YY*YY/3]}, 
    (XX,YY)=>{return [1-XX*XX/3,1-YY*YY/3]}, 
    (XX,YY)=>{return [1/3+XX/3,1/3+YY/3]} 
  ];

}
else if (DESSIN==283)
{
  INIT_PARAMS=_=>{
    K=2,H1=0,H2=8,M=4,X1=[0,.5,.5,0,0],Y1=[0,0,.5,.5,0];
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [1-XX/2,1-YY/2]}, 
    (XX,YY)=>{return [1/2+YY/2,XX/2]} 
  ];

}
else if (DESSIN==284)
{
  INIT_PARAMS=_=>{
    K=4,H1=0,H2=5,M=4,X1=[0,.5,.5,0,0],Y1=[0,0,.5,.5,0];
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [1/2+XX/2,YY/4]}, 
    (XX,YY)=>{return [XX/2,1/2+YY/2]}, 
    (XX,YY)=>{return [1/8+XX/4,1/8+YY/4]}, 
    (XX,YY)=>{return [1-XX/4,1-YY/2]} 
  ];

}
else if (DESSIN==285)
{
  INIT_PARAMS=_=>{
    K=4,H1=0,H2=6,M=4,X1=[0,.5,.5,0,0],Y1=[0,0,.5,.5,0];
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [1/2+XX/2,1/4+YY/2]}, 
    (XX,YY)=>{return [XX/2,1/2+YY/2]}, 
    (XX,YY)=>{return [1/8+XX/4,1/8+YY/4]}, 
    (XX,YY)=>{return [3/4+XX/4,YY/4]} 
  ];

}
else if (DESSIN==286)
{
  INIT_PARAMS=_=>{
    K=5,H1=0,H2=5,M=4,X1=[0,.5,.5,0,0],Y1=[0,0,.5,.5,0];
  }
  TRANSFORME=[ 
    (XX,YY)=>{return [1/2+XX/2,YY/2]}, 
    (XX,YY)=>{return [XX/2,1/2+YY/2]}, 
    (XX,YY)=>{return [XX/4+1/8,1/8+YY/4]}, 
    (XX,YY)=>{return [1-XX/4,1-YY/4]}, 
    (XX,YY)=>{return [1/2+XX/4,1/2+YY/4]}
  ];
}

// ----------------------------------------------------
function setup() 
{
  INIT();
  INIT_PARAMS();
  
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
      if (H==0) { DESSINE(); continue }
      for (let J=0;J<=H-1;J++)
      {
        let I1=floor(I0/K);
        let I2=I0-I1*K;
        for (let L=0;L<=M;L++)
          [X2[L],Y2[L]] = TRANSFORME[I2](X2[L],Y2[L]);
        I0=I1;
      }
      DESSINE();
    }  
  }

  TRACE2();
}

// ----------------------------------------------------
function DESSINE()
{
  for (let IK=0;IK<=M;IK++)
  {
    if (DESSIN==274)
    {
      X2[IK]=.5*(X2[IK]+1);
      Y2[IK]=.5*(Y2[IK]+1);
    }
    if (IK==0) LPRINT(`M${int(NP*X2[IK])},${int(NP*Y2[IK])}`);
    if (IK>0)  LPRINT(`D${int(NP*X2[IK])},${int(NP*Y2[IK])}`);
  }
}

  



  
  




