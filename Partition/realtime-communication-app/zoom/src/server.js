import http from 'http'
import WebSocket from 'ws'
import express from 'express'

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use('/public', express.static(__dirname + '/public')) // 유저파일공유

// routes
app.get('/', (req, res) => res.render('home'))
app.get('/*', (req, res) => res.redirect('/'))

const handleListen = () => console.log(`Listening on ws and http://localhost:3000`)

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

// ---------------------------------------------------

const sockets = []


wss.on("connection", (socket) => {
  sockets.push(socket)
  socket["nickName"] = "UnKnow"
  console.log("Connected to Browser check")
  socket.on('close', () => console.log('disconnect from Broswer'))
  socket.on('message', msg => {
    const message = JSON.parse(msg)
    switch(message.type){
      case "new_message":
        sockets.forEach( aSocket => aSocket.send(`${socket.nickName}: ${message.payload}`))
        break;
      case "nickName":
        socket["nickName"] = message.payload
    }
    // socket.send(message.toString('utf8'))
  })
  socket.send('hello!!')
})

server.listen(3000, handleListen)
{
  type:"message"
  payload:"hello everyone"
}

{
  type:"nickName"
  payload:"jaewon"
}
