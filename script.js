let display = document.getElementById("result")


// document.getElementById("btn1").addEventListener('click', ()=>{
//     display.innerHTML = display.innerHTML + 1
// })

// document.getElementById('btn2').addEventListener('click', ()=>{
//     display.innerHTML = display.innerHTML + 2
// })

// document.getElementById('btn3').addEventListener('click' ,() =>{
//     display.innerHTML = display.innerHTML + 3
// })

// document.getElementById('btn4').addEventListener('click', ()=>{
//     display.innerHTML = display.innerHTML + 4
// })

// document.getElementById('btn5').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + 5
// })

// document.getElementById('btn6').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + 6
// })

// document.getElementById('btn7').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + 7
// })

// document.getElementById('btn8').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + 8
// })

// document.getElementById('btn9').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + 9
// })

// document.getElementById('btn0').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + 0
// })

// document.getElementById('btn+').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + '+'
// })

// document.getElementById('btn-').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + '-'
// })

// document.getElementById('btn/').addEventListener('click' , ()=>{
//     display.innerHTML = display.innerHTML + '/'
// })


// document.getElementById('btn=').addEventListener('click' , ()=>{
//     display.innerHTML = eval(display.innerHTML)
// })

const addToScreen =(value)=>{
    display.innerHTML = display.innerHTML + value
}

const calculate =()=>{
    display.innerHTML = eval(display.innerHTML)
}

// document.getElementById('btnCE').addEventListener('click' , ()=>{
//     display.innerHTML = ''
// })
function clearNum (){
    display.innerHTML = ""
}

function deleteNum () {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if (display.innerHTML === '') {
        display.innerHTML = '0';
    }
}