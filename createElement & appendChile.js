/*const button = document.getElementById("push")
const div = document.getElementById("area")

button.addEventListener('click',function(){
    console.log("div 생성 중 !!")
    const newDiv=document.createElement("div")

    newDiv.style.backgroundColor="red"
    newDiv.style.width="200px"
    newDiv.style.height="200px"


    div.appendChild(newDiv)
})

//폼에 입력값 작성 후 제출해서 밸루 값 읽어들이기
const textInput = document.getElementById("text")
const button2=document.getElementById("button")

button2.addEventListener('click',function(){
    console.log(textInput.value)
    textInput.value="클릭하면 바껴용"
})


const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(form.name.value)
    console.log(form.town.value) //액션이 없음 새로고침이 돼서 제대로 출력이 안됨. 그래서 이벤트 객체를 넣어주거나 해야함
}) 

// 삼항연산
let result;
result=3>2?"true":"false"
console.log(result)

// 타이머

let interId;
interId=setInterval(function(){
    console.log("Hello")
}, 2000)
console.log(interId)

setTimeout(function(){
    console.log("1234")
}, 2000)*/

const button=document.querySelector('button')

let interId;
interId=setInterval(function(){
    console.log("Bye")
}, 1000)
console.log(interId)

button.addEventListener('click',function(){
    clearInterval(interId)
})