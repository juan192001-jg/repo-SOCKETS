const socket = io();

const lblOffline = document.querySelector('#lblOffline');
const lblOnline = document.querySelector('#lblOnline');
const textMesaje = document.querySelector('#textMesaje')
const enviarMensaje = document.querySelector('#enviarMensaje')
socket.on('connect', () => {
    console.log('Conectado')
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})
socket.on('disconnect', () => {
    console.log('Desconectdo')
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'

})
socket.on('respuesta-mesaje', (paylaod) => {
    console.log(paylaod)
})
enviarMensaje.addEventListener('click', () => {
    const mesaje = textMesaje.value;
    const payload = {
        mesaje,
        id: '123454',
        fecha: new Date().getTime()

    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('la respuesta del sevidor es', id)
    })
})