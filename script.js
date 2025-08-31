let currentdeg = 0;

function rotate(){
    currentdeg += 9999 ;
    var wheel = document.getElementById('wheel');
    wheel.style.transform = "rotate(" + currentdeg + "deg)";
console.log("SPIN");
}
    