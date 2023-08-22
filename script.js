$("button").click(function(){
    makeSound();
    var p1=Math.floor(Math.random()*6)+1;
    var p2=Math.floor(Math.random()*6)+1;
    var i1=p1+".png";
    var i2=p2+".png";
    document.querySelector("#p1").src=i1;
    document.querySelector("#p2").src=i2;
       
    if(p1>p2)
    {
        document.querySelector("h1").textContent="🎉🏆 Player 1 wins 🏆🎉";
    }
    else if(p1<p2)
    {
        document.querySelector("h1").textContent="🎊🏆 Player 2 wins 🏆🎊";
    }
    else
    {
        document.querySelector("h1").textContent="🎈🫣 Oops! It's a DRAW🎈";
    }});
    
    function makeSound()
    {
    
        var audio=new Audio('b (1).mp3');
        audio.play();
    }