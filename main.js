dog=0
cat=0
lion=0

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8bsRVtFP0/model.json", modelReady);
  
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log("got the results");

    if(error){
        console.error(error);
    }
    else {
        if(results[0].label == "dog bark") {dog=dog+1; document.getElementById("ear_image").src="dog.jpg"; console.log("Dog counter:"+dog);}
        else if(results[0].label == "cat meow") {cat=cat+1; document.getElementById("ear_image").src="cat.jpg"; console.log("Cat counter:"+cat);}
        else if(results[0].label == "lion roar") {lion=lion+1; document.getElementById("ear_image").src="lion.png"; console.log("Lion counter:"+lion);}
        else {document.getElementById("ear_image").src="ear.jpg";};

        document.getElementById("dogbark").innerHTML="Dogs detected:"+dog;
        document.getElementById("catmeow").innerHTML="Cats detected:"+cat;
        document.getElementById("lionroar").innerHTML="Lions detected:"+lion;

        console.log(results);
        random_number_r=Math.floor(Math.random() * 255) +1;
        random_number_g=Math.floor(Math.random() * 255) +1;
        random_number_b=Math.floor(Math.random() * 255) +1;
   
        document.getElementById("result_label").innerHTML="I can hear - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy"+ (results[0].confidence * 100).toFixed(2)+"%";

        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


    }
}

