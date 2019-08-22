var numSquares=9;
var color=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var displayColor=document.getElementById("displayColor");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var mode=document.querySelectorAll(".mode");

init();

function init()
{
    for(var i=0;i<mode.length;i++)
{
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        mode[2].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="EASY")
            numSquares=3;
        else if(this.textContent==="MEDIUM")
            numSquares=6;
        else
            numSquares=9;

    restart();
    });
}

    for(i=0;i<squares.length;i++)
{
    squares[i].addEventListener("click", function(){
        clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent="Correct!";
            for(j=0;j<squares.length;j++)
            {
                squares[j].style.backgroundColor=clickedColor;
            }
            h1.style.backgroundColor=clickedColor;
            reset.textContent="Play Again?";
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }
    });
}
    restart();
}

// for(var i=0;i<mode.length;i++)
// {
//     mode[i].addEventListener("click", function(){
//         mode[0].classList.remove("selected");
//         mode[1].classList.remove("selected");
//         mode[2].classList.remove("selected");
//         this.classList.add("selected");
//         if(this.textContent==="EASY")
//             numSquares=3;
//         else if(this.textContent==="MEDIUM")
//             numSquares=6;
//         else
//             numSquares=9;

//     restart();
//     });
// }

function restart(){
    color=generateRandomColors(numSquares);
    pickedColor=pickColor();
    displayColor.textContent=pickedColor;
    for(i=0;i<squares.length;i++)
    {   if(color[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=color[i];
        }
        else
            squares[i].style.display="none";
    }
        h1.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    messageDisplay.textContent="";
}
 

reset.addEventListener("click", function(){
    restart();
});

// displayColor.textContent=pickedColor;

for(i=0;i<squares.length;i++)
{
    squares[i].addEventListener("click", function(){
        clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent="Correct!";
            for(j=0;j<squares.length;j++)
            {
                squares[j].style.backgroundColor=clickedColor;
            }
            h1.style.backgroundColor=clickedColor;
            reset.textContent="Play Again?";
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }
    });
}

function pickColor()
{
    return color[Math.floor(Math.random()*color.length)];
}

function generateRandomColors(x)
{
    var arr=[];
    for(k=0;k<x;k++)
    {
        arr.push(`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
    }
    return arr;
}