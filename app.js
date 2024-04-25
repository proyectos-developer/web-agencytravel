const cors = require ('cors')
const express = require ('express')
const morgan = require ('morgan')
const path = require ('path')

const app = express ()
app.use (cors())

app.set('port', process.env.PORT || 3001);

app.use (morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')))
app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/tour')))
app.get ('/tour', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/tour', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/tour/actividad/reservar')))
app.get ('/tour/actividad/reservar', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/tour/actividad/reservar', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/acceder')))
app.get ('/cliente/acceder', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/acceder', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/reservar')))
app.get ('/cliente/reservar', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/reservar', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/mis-datos')))
app.get ('/cliente/mis-datos', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/mis-datos', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/mis-reservas')))
app.get ('/cliente/mis-reservas', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/mis-reservas', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/tours-realizados')))
app.get ('/cliente/tours-realizados', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/tours-realizados', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/pagos/pendientes')))
app.get ('/cliente/pagos-pendientes', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/pagos/pendientes', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/pagos/realizados')))
app.get ('/cliente/pagos-realizados', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/pagos/realizados', 'index'))
})

app.use(express.static(path.resolve(__dirname, './client/build/cliente/mis-opiniones')))
app.get ('/cliente/mis-opiniones', (req, res) => {
    res.sendFile (path.resolve(__dirname, './client/build/cliente/mis-opiniones', 'index'))
})

app.listen (app.get('port'), () => {
    console.log ('Servidor en puerto ', app.get ('port'))
})