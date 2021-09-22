const inputs= document.querySelectorAll(".input");
const submitbtn=document.querySelector("#submit-btn");
const output=document.querySelector("#output");
function sumofangles(angel1,angel2,angel3)
{
    
   const sum=angel1+angel2+angel3;
//    console.log(sum);

    return sum;
}
 





submitbtn.addEventListener("click",function istraingle(){
    // for(i=0;i<3;i++)
    // {
    //     console.log(inputs[i].value);

    //  }
     sum=sumofangles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    //  console.log(sum);
      
     if(sum==180)
     {
         output.innerText= "It is a Triangle";
     }
     else{
         output.innerText="It is not a Triangle";
     }
})
 


