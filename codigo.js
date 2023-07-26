const buttonlogin= document.getElementById("buttonlogin")
const inputemail=document.querySelector("#inputemail")
const inputpassword=document.getElementById("inputpassword")

let correos=[]
let contrasenas=[]
buttonlogin.addEventListener("click",iniciar)

function iniciar(){
    
let correoparcial=inputemail.value
let passwordparcial= inputpassword.value

correos.push(correoparcial)
contrasenas.push(passwordparcial)

console.log(correos)
console.log(contrasenas)

}