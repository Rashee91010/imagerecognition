
Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("camera");

function capture()
{
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="captureimage" src="'+ data_url +'"/>';
});
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZgIt43QQM/model.json", modelLoaded);
function modelLoaded(){
console.log("Model is loaded");
}
function identify(){
    img=document.getElementById("captureimage");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("resultobject").innerHTML=results[0].label;
    document.getElementById("resultaccuracy").innerHTML=results[0].confidence.toFixed(3)*100 + " %";
}    
}