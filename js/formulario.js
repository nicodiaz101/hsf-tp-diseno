var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje')
function enviarform(){
    console.log('Enviando formulario..');

    if(nombre.value === null || nombre.value === ''){
        alert('Hay campos sin completar')
        return false
    }
    if(email.value === null || email.value === ''){
        alert('Hay campos sin completar')
        return false
    }
    if(mensaje.value === null || mensaje.value === ''){
        alert('Hay campos sin completar')
        return false
    }
}