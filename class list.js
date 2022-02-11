const h1=document.querySelector("h1")
const addBtn=document.querySelector("#add")
const removeBtn=document.querySelector("#remove")
const toggleBtn=document.querySelector("#toggle")

console.log(h1.classList)

addBtn.addEventListener('click', function(){
    h1.classList.add('text')
})
removeBtn.addEventListener('click',function(){
    h1.classList.remove('text')
})
toggleBtn.addEventListener('click',function(){
    h1.classList.toggle('text')
})

/*const myName="은지"
console.log(myName)
localStorage.setItem("myName", myName) //이제 은지는 웹브라우저에 저장되어있음
*/

const myName=localStorage.getItem("myName")
alert(myName)

localStorage.removeItem("dog")
localStorage.clear()
