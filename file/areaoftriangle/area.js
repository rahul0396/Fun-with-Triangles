const side=document.querySelectorAll(".side");
const btn=document.querySelector("#btn");
const output = document.querySelector("#output");

function calculatearea(a,b)
{
    return (a*b)/2;
}
function area()

{
    // console.log(side[0].value);
     const trianglearea= calculatearea(side[0].value,side[1].value);
    output.innerText="Area of Traingle is "+trianglearea+" cm^2"
}

btn.addEventListener("click", area );