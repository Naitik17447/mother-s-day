var album = ["12.jpeg", "23.jpeg","images.jpg","45.jpeg","mommm.jpg","mom.jpg","cake.jpeg"];
var i=0;
function next(){
    document.getElementById("img").src=album[i];
    i++;
    if(i==7){
        i=0;
    }
    document.getElementById("audio").play();
}