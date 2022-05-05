
const button  = document.getElementById("login")

button.addEventListener('click',async e=>{
    e.preventDefault()
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: "shadow13",
            password: "123456"
        }),  
    }
    fetch("http://localhost:3000/login", options)
    .then(res=>res.json()).then(data=>console.log(data))
})