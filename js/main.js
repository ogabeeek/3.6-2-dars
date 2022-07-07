var elForm = document.querySelector(".Form");
var elInput = document.querySelector(".input1")
var elInput2 = document.querySelector(".input2")
var elBtn = document.querySelector(".btn")

var elTitle= document.querySelector("h1")
var elBody= document.querySelector(".body")


console.log(elForm , elInput , elInput2 , elBtn);

elForm.addEventListener( "submit" , function (e) {
    e.preventDefault()

    const elInputVal= elInput.value;

    if(elInputVal>12){
        elTitle.style="color:yellow"
        elBody.style="background-color:red"
    }else{
        elTitle.style="color:yellow"
        elBody.style="background-color:pink"
    }

    if(elInputVal>100){
        elTitle.style="color:yellow"
        elBody.style="background-color:green"
    }

    elInput2.value = ((elInput.value - 0)+32);

    elInput.value=" ";

})