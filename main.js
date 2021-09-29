function hearing(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classify = ml5.soundClassifier("https://storage.googleapis.com/tm-model/40fTo3U4-/model.json", modelEngage);
}

function modelEngage(){
    classify.classify(confidence);
}

function confidence(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results)
    r = Math.floor(Math.random()* 255)+1 ; 
    g = Math.floor(Math.random()* 255)+1 ;
    b = Math.floor(Math.random()* 255)+1 ;

  document.getElementById("noize").innerHTML= results[0].label ;
  document.getElementById("percent").innerHTML= (results[0].confidence*100).toFixed(2) +"%" ;

  document.getElementById("noize").style.color= "rgb("+r+","+g+","+b+")" ;
  document.getElementById("percent").style.color= "rgb("+r+","+g+","+b+")" ;
  
  img = document.getElementById("animal") ;

  if(results[0].label == "MEOW"){
      img.src = "CAT.gif" ;
  }
  else if(results[0].label == "ROAR"){
      img.src = "LION.gif"
  }
  else if(results[0].label == "MOOOOOOOO"){
      img.src = "COW.gif" ;
  }
  else{
      img.src = "DOG.gif" ;
  }
}
}