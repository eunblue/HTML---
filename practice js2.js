//함수부터


const result1=window.confirm("확인해봐요!")
console.timeLog(result1)

function thereIsReturn(){
    console.log("반환한다, 무언가를!")
    return 10;
}

const result = thereIsReturn()
console.log(result)


function sayAnything(ant, number){
    console.log(ant,number)
}
sayAnything("바빠서 영상을 못 만들고 있어요", 5)
sayAnything("만드는 법을 까먹을 지경 ㅜㅜ",7)

function oddEven(num){
    if(num%2==0){
        return "짝수"
    }
    else{
        return "홀수"
    }
}
console.log(oddEven(5))
console.log(oddEven(7))


//이벤트리스너

const inputType=document.querySelector("#typing")
const inputClick=document.querySelector("#push")

const handleTyping = function(){
    console.log("타이핑이 되고 있어요")
}
const handleClick=function(){
    console.log("클릭이 되고 있어요")
}

inputType.onkeydown=handleTyping
inputClick.onclick=handleClick

const btn1=document.getElementById("one")
const btn2=document.getElementById("two")
const btn3=document.getElementById("three")

const handleClick2 = function(){
    console.log("저를 클릭하셨나요?")
}

btn2.addEventListener('click', handleClick2)
btn2.addEventListener('click', function(){
    console.log("또 다른 핸들러가 추가 등록되었다!!")
})

btn2.removeEventListener('click',handleClick2)