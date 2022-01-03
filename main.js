random_num1 = 0;
random_num2 = 0;
random_num3 = 0;

function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/kF8lVQVr3/', modelready);
}
function modelready(){
classifier.classify(gotResults);
}
function gotResults(error,results) {
if (error) {
console.log(error);
} else{
console.log(results);
random_num1 = math.floor(math.random() * 255) + 1;
random_num2 = math.floor(math.random() * 255) + 1;
random_num3 = math.floor(math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = "detected voice is of - "+ results[0].label;
document.getElementById("result_confident").innerHTML = "detected - "+ results[0].confident;
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confident").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img = document.getElementById('meow');
img1 = document.getElementById('roar');
img2 = document.getElementById('bark');
img3 = document.getElementById('moo');

if (results[0].label == "mooing") { 
hear.src = 'https://th.bing.com/th/id/R.202e657916de54ced0d8c79ae3d0a8b1?rik=0874MlKQSKw69w&riu=http%3a%2f%2fhkfx.com%2ffreezingMoo%2fimages%2fcowLeft.png&ehk=QXkSfZ2p2eDKBCSnlh0TGyKRRHrGmBcpw84fXlHy47U%3d&risl=&pid=ImgRaw&r=0';
    } else if (results[0].label == "meowing"){
        hear.src = 'https://th.bing.com/th/id/OIP.ShKWGUeb7bBJn-dWnvVfXwHaHa?pid=ImgDet&rs=1';
    } else if (results[0].label == "roaring"){
        hear.src = 'https://th.bing.com/th/id/R.c5924d856884650b6a92cc8698623860?rik=ghZxXTaPaHGnwA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fLion-Roar-Transparent.png&ehk=wkzYLIbZ%2bzizMIOY4T2JWuoVVMepgAZtrgUFM70SyLk%3d&risl=&pid=ImgRaw&r=0';
    } else if (results[0].label == "barking"){
        hear.src = 'https://lessonpix.com/drawings/86972/380x380/Bark.png';
    }
}
}