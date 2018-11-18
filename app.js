// Overlay div with a button -- > button when pressed overlay should disappear and song plays 
// image slideshow using just js -- > images of stan lee comics 

var URLarray = ["https://usercontent2.hubstatic.com/13096763.png","https://cdn.vox-cdn.com/thumbor/wgMcgj6LStdjW-qlLkaHUBsdQzY=/0x0:2048x858/1200x800/filters:focal(834x251:1160x577)/cdn.vox-cdn.com/uploads/chorus_image/image/57442421/hulk_agnarok.0.jpg","https://the-artifice.com/wp-content/uploads/2017/12/thor-wide.jpg","https://static.wixstatic.com/media/c75d01_96dc0361ac1844ed879f46b60fb21966~mv2.jpg","https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/doctor-strange-revisited-5-700x300.png","https://lh3.googleusercontent.com/Ml1kieUCt91Hls1skms48wWpGe3ZuKLGAC1y6UWgh_wzB3H9-13WrNEfR3DaGv_6UXP1RkGrR2_MNupHH5SM","https://cdn3.movieweb.com/i/article/zaIo4DjiyUpjrKAcCUFpqJ7ALrq4Ow/798:50/Avengers-4-Rumor-Original-Team-Fate.jpg","http://static1.squarespace.com/static/56614031e4b0766d427cd733/585966e13e00bedc0642dab5/593004fbebbd1ab8dcd83f12/1503224894768/0+Cover+1.png?format=1000w"]
var ImageObjectarray =[]
URLarray.forEach(element => {
    var image =  new Image();
    image.src = element;
    image.id="mySlide";
    ImageObjectarray.push(image);
});
console.log(ImageObjectarray)
var slide = document.getElementById("mySlide");
var i = 0;
function showSlides() {
    slide.src = ImageObjectarray[i].src;
    if (i==ImageObjectarray.length-1) {i=0;}
    else {i++;}
    console.log()
    if (i<ImageObjectarray.length){
        setTimeout(showSlides,2500);
    }       
} 
function init() {
    var curtain = document.getElementsByClassName("curtain");
    var button = document.getElementsByClassName("btn");
    curtain[0].style.display = "none";
    button[0].style.display = "none";
    var audio = document.getElementById("audio");
    audio.loop = true; 
    audio.play();
    showSlides();    
}