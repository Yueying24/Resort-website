
function myFunction(){
    var a=document.getElementById("check").value;
    var b=document.getElementById("check1").value;
    var c=document.getElementById("num").value;
    if (a=""||b==""||c=="")
    {
        alert("Please set valid imformation.");
        return false;
    }
};


/* carousel function for different types of rooms */

function init(){
    window.setInterval(changeroom, 2500);
    window.setInterval(changeroom1, 3000);
}

var imgArr= new Array(
    "images/single-room.jpg",
    "images/single-room1.jpg",
    "images/single-room2.jpg",
);
var index = 0

function changeroom(){
    nextroom();
};

function nextroom() {
    room = document.getElementById("single");
    index ++;
    if(index >=imgArr.length){
        index = 0;
    }
    room.src = imgArr[index];

}

function preroom() {
    room = document.getElementById("single")
    index --;
    if(index < 0){
        index = imgArr.length - 1;
    }

    room.src = imgArr[index];
}

/* double-room */

var imgArr1= new Array(
    "images/double-room1.jpg",
    "images/double-room2.jpg",
    "images/double-room3.jpeg",
);
var index = 0

function changeroom1(){
    nextroom1();
};

function nextroom1() {
    room = document.getElementById("double");
    index ++;
    if(index >=imgArr1.length){
        index = 0;
    }
    room.src = imgArr1[index];

}

function preroom1() {
    room = document.getElementById("double")
    index --;
    if(index < 0){
        index = imgArr1.length - 1;
    }

    room.src = imgArr1[index];
}

function success1(){
    alert("Congratulations!  You have booked a single space.  Please keep your booking number: ********")
}

function success2(){
    alert("Congratulations!  You have booked a Super space.  Please keep your booking number: ********")
}

function success3(){
    alert("Your requests and feedback have been recorded and you will have the opportunity to get a ticket for one of the activities.")
}