// ㄹㅇ 개 기초


console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))

const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent)
h1.textContent = "헬로우 여러분 ~!"

let str = "따옴표 문자열"
console.log(str);
str=`백틱 문자열!!??`;
console.log(str); 

let number = 21;
let player = prompt("좋아하는 축구 선수는?")

console.log(
    `제가 좋아하는 축구선수는 ${player}, 그의 등 번호는 ${21}`
)

let num =1;
while(num<3){
    console.log(num);
    num+=1;
}


window.alert("경고창에 쓸 메시지!")
console.log(confirm("경고창에 쓸 메시지!"))

while(confirm("메시지!")){
    console.log("확인 버튼을 누르고 있군요!")
}
console.log("취소 버튼을 눌렀군요.")


for(let i=0;i<=3;i+=1){
    console.log("반복 진행 중입니다.")
    console.log(i)
}

for(let i=1;i<=10;i+=1){
    if(i%2==0){
        console.log(i)
    }
}