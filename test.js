function mythrothle(){
    console.log("hi");
document.getElementById("myid").disabled=true;
    return setTimeout(() => {
        
       call();
       document.getElementById("myid").disabled=false;
    }, 5000);
}

function call (){
    console.log("userclicked")
}