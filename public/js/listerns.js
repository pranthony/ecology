
const button  = document.getElementById("login")

button.addEventListener('click', e=>{
    e.preventDefault()
    fetch("http://localhost:3000/antony").then(res=>res.json()).then(data=>console.log(data))
})