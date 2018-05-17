var newTweet = document.getElementById("new-tweet");
var tweet = document.getElementById("tweet");
var msg = document.getElementById("msg");
var counter=document.getElementById('counter');
var general = document.getElementById("general");

tweet.addEventListener("click", newMsg);
/* Funcion para agregar un tweet*/
function newMsg(){
    var text = document.getElementById("new-tweet").value;
    newTweet.value= "";
    //Condicion para desabilitar el boton tweet si no tiene contenido
    if(text.length == 0 || text == null){
       tweet.disabled = true;
       return false;
    };
    //Creacion de los elementos para agregar los tweets
    var generalTextBox = document.createElement("div");
    var textBox = document.createElement("p");
    textBox.className="text-tweet";
    general.appendChild(generalTextBox);
    generalTextBox.appendChild(textBox);
    textBox.appendChild(document.createTextNode(text));
    counter.innerHTML = 140;
    counter.style.color = "black";
    newTweet.style.height ="30px";
};

newTweet.addEventListener("click", function(){
    tweet.disabled = false;
});

newTweet.addEventListener("keyup", chartCounter)
/*Funcion para el contador de caracteres */
function chartCounter(){
       //Numero de caracteres permitidos
       var total=140;
       var textLength= newTweet.value.length;
       document.getElementById('counter').innerHTML = (total - textLength);
       //Condiciones para cambiar el color del contador, habilidat y desabilitar el boton tweet 
       if(textLength > total){
           tweet.disabled = true;
       }else if(textLength > 119 & textLength < 130) {
           counter.style.color = "orange";
           tweet.disabled = false;
       }else if(textLength > 129){
            counter.style.color = "red";
            tweet.disabled = false;
       }else {
            tweet.disabled = false;
            counter.style.color = "black";
       };
    };
    /* Funcion del evento que cuando des enter dentro de textarea el alto del textarea se adjuste al contenido*/
    newTweet.addEventListener("keypress", function(){
         if(event.key === "Enter"){
           var h = document.getElementById("new-tweet").scrollHeight;
            newTweet.style.height = h + "px";
    };
});