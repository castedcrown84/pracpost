const form = document.getElementById('form')


async function formhandler(event){

event.preventDefault()

const username = document.getElementById('username').value
const email = document.getElementById("email").value

 const response = await fetch('/api/user',{
    method: 'POST',
    body: JSON.stringify({username, email,}),
    headers: {
        'Content-Type' : 'application/json'
    }
 })

 if (response.ok){
    document.location.replace('/')
 }else{
    alert('failed')
 }





 }

 form.addEventListener('submit', formhandler)