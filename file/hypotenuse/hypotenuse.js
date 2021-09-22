const side=document.querySelectorAll(".side");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function squareofsides(a,b)
{
    return a*a+b*b


}



function calculatehypotenuse()

{ 
    // // console.log(side[0].value);
    // console.log(side[1].value);

     const sumofsquareofside=squareofsides(side[0].value,side[1].value);

    //  console.log(sumofsquareofside);

    const hypotenuse= Math.sqrt(sumofsquareofside);

    output.innerText= "Hypotenuse is "+ hypotenuse+" cm";

     



}





btn.addEventListener("click", calculatehypotenuse)