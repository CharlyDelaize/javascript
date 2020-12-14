/* 

document.getElementById('div1').onclick = div1; ==> evenement sur l'objet, la fonction déclarée plus loin.
document.getElementById('div1').onblur = function() {monScript}
document.getElementById('div1').addEventListener("blur", fonctionName);
document.getElementById('div1').addEventListener("click", function(){monScript})

*/

document.getElementById('div1').addEventListener("click", function(){
    var color =document.getElementById('div1');
    color.style.background = "#000";
});
document.getElementById('div5').addEventListener("dblclick", div5);
document.getElementById('div6').addEventListener("mouseover", div6);
document.getElementById('div10').addEventListener("mouseout", div10);
document.getElementById('div11').addEventListener("mousedown", div11);
document.getElementById('div15').addEventListener("mouseup", div15);

function div1(){
    alert("div1 - clic div1");
}

function div5(){
    alert("div5 - dblclick div5");
}

function div6(){
    alert("div6 - mouseover div6");
}

function div10(){
    alert("div10 - mouseout div10");
}

function div11(){
    alert("div11 - mousedown div11");
}

function div15(){
    alert("div15 - mousedown div15");
}

document.getElementById('div2').addEventListener("blur", div2);
document.getElementById('div3').addEventListener("focus", div3);

function div2(){
    alert('div2 - blur div2');
}

function div3(){
    alert('div3 - focus div3');
}

document.getElementById("div14").addEventListener("submit", function(event){
    event.preventDefault();
    alert('div14 - submit');
})

document.getElementById("div7").addEventListener("keydown", function(){
    var r = document.getElementById("div7");
    alert("div7 - keydown" + r.value);
})

document.getElementById("div8").addEventListener("keypress", function(){
    var r = document.getElementById("div8");
    alert("div8 - keypress" + r.value);
})

