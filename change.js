let x =new Array(0,0,0,0,0,0,0,0);

function clicked(id){
  
   console.log("click");
   if(x[id-1]==1&&id==8)
     {}
     
     
   else
   {
   if(x[id-1]==1)
   {
       if(x[id]==0)
       {
         remove(id);
       }
       else{
           
           for(i=parseInt(id)+1;i<=8;i++)
           {
               
            remove(i.toString());
               
           }
       }
       
   }
  
   else{
       for(i=1;i<=id;i++)
          add(i);
   }
   
}
water=0,ht=0;

   for( i=0;i<8;i++)
   {
       if(x[i]==1)
       {
         water+=0.25;
         ht++ ;
       }
   }
   
   if(ht!=0)
   {
     filled.style.visibility="visible";
   }
   else{
     filled.style.visibility="hidden";
   }
  console.log(ht*1.0/8);
   document.getElementById("lt").innerHTML=2-water+"L";
   document.getElementById("pcnt").innerHTML=(ht*100/8.0)+"%";
    
   //filled.style.height=`{ht*300/100.0}`;
   filled.style.height=`${(100*ht*1.0/8)}%`
  // console.log(ht*1.0/8));
   //remained.style.height=`${300-(ht*300/100.0)}px`;
   
   remained.style.height=`${100*(8-ht)*1/8.0}%`;
   /*if(ht!=0)
   {
       
     document.getElementById("remained").style.borderBottomRightRadius = "0px";
     document.getElementById("remained").style.borderBottomLeftRadius = "0px";
      
     
   }
   else{
         
     document.getElementById("remained").style.borderBottomRightRadius = "40px";
     document.getElementById("remained").style.borderBottomLeftRadius = "40px";
     
     
   }*/
   if (ht==8)
   {
       document.getElementById("lt").style.visibility = "hidden";
       document.getElementById("text").style.visibility = "hidden";
   }
   else{
     document.getElementById("lt").style.visibility = "visible";
       document.getElementById("text").style.visibility = "visible";  
   }
   
   
}
  
   function add(id){
      
       x[id-1]=1;
       document.getElementById(id).style.backgroundColor = "powderblue";
   }
   function remove(id)
   {
       
        x[id-1]=0;
       document.getElementById(id).style.backgroundColor = "white";
         
   }
