x=0 ;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML = "El sistema este escuchando. Por favor..habla";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("status").innerHTML = "La voz se reconocio como: "+Content;
    if(Content == "circulo"){
        x = Math.floor(Math.random()*900);
        x = Math.floor(Math.ramdom()*600)
    }   document.getElementById("status").innerHTML = "Se empezo a dibujar un circulo: ";
}