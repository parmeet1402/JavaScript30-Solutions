let sizingSlider = document.getElementById("sizing");
let blurSlider = document.getElementById("blur");
let colorSelector = document.getElementById("color");
let imgSelector = document.querySelector(".img");
let hSpan= document.querySelector(".hText");

sizingSlider.addEventListener('input', function(){
  //  console.log(sizingSlider.value+"px");   
    imgSelector.style.setProperty("--sizing",sizingSlider.value+"px");
});

blurSlider.addEventListener('input', function(){
    imgSelector.style.setProperty("--blur",blurSlider.value+"px");
    //console.log(blurSlider.value+"px");
});
colorSelector.addEventListener('change', function(){
    //console.log(colorSelector.value);
    imgSelector.style.setProperty("--color",colorSelector.value);
    hSpan.style.setProperty('--color',colorSelector.value);
})
