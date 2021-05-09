const SocketsControllers = (socket) => {
    console.log('cliente conectado', socket.id)
    socket.on('disconnect', () => {
        console.log('Clienete desconectado ', socket.id)
    })
    socket.on('enviar-mensaje', (payload, collback) => {
        const id = 1234455
        collback(id)
        socket.broadcast.emit('respuesta-mesaje', payload)
    })
}

export { SocketsControllers }