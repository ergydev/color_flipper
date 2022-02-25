const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const copy = document.querySelector('.btn-copy');
const colorInput = document.getElementById('colorInput').innerHTML ;



// EVENT LISTENER 

btn.addEventListener('click', function(){
    let hexColor= '#';
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

copy.addEventListener('click', function(){
    console.log(colorInput);
    colorInput;
    navigator.clipboard.writeText(colorInput).then(function(){
        console.log('Copied')
    })
});

 // ----------------------- FUNCTIONS 

//  Random number 
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}


