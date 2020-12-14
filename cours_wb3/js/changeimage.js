document.getElementById("div14").addEventListener("submit", function(event){
    event.preventDefault();
    alert('div14 - submit');
})


function changeImage(document)
{
  var x = document.getElementsByTagName("img").item(0);
  var v = x.getAttribute("src");
  if(v == "../img/renard1.jpg"){
    v = "../img/renard2.jpg";
}else{
    v = "../img/renard1.jpg";
}
  x.setAttribute("src", v);
}