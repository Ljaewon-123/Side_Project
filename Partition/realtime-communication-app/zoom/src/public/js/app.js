const socket = io()

const welcome = document.getElementById("welcome")
const form = welcome.querySelector('form')
const room = document.getElementById('room')

room.hidden = true

let roomName;

function addMessage(mess){
  const ul = room.querySelector('ul')
  const li = document.createElement('li')
  li.innerText = mess
  ul.appendChild(li)
}

function handleMessageSubmit(event){
  event.preventDefault()
  const input = room.querySelector('#msg input')
  const value = input.value
  socket.emit("new_message", input.value, roomName,
    () => {addMessage(`You: ${value}`)})

  input.value = ''
}

function handNickSubmit(event){
  event.preventDefault()
  const input = welcome.querySelector('#name input')
  socket.emit('nickname', input.value)
}

function showRoom(){
  welcome.hidden = true
  room.hidden = false
  const h3 = room.querySelector("h3")
  h3.innerText = `Room ${roomName}`
  const msgForm  = room.querySelector('#msg')
  
  msgForm.addEventListener('submit', handleMessageSubmit)
  
}

const handleRoomSubmit = (event) => {
  event.preventDefault();
  const input = form.querySelector('input')
  socket.emit("enter_room",
    input.value,
    showRoom
  )
  roomName = input.value
  input.value = ""
}

form.addEventListener("submit",handleRoomSubmit)


const nameForm  = welcome.querySelector('#name')
nameForm.addEventListener('submit', handNickSubmit)

socket.on('welcome', (user, newCount) => {
  const h3 = room.querySelector("h3")
  h3.innerText = `Room ${roomName} (${newCount})`
  addMessage(`${user} arrived!`)
} )

socket.on('bye', (left, newCount) => {
  const h3 = room.querySelector("h3")
  h3.innerText = `Room ${roomName} (${newCount})`
  addMessage(`${left} is left`)
})

socket.on('new_message', addMessage)

socket.on('room_change', (rooms) => {
  const roomList = welcome.querySelector('ul')
  roomList.innerHTML = ""
  if(rooms.length == 0 ) return
  
  rooms.forEach( room => {
    const li = document.createElement('li')
    li.innerText = room
    roomList.append(li)
  })
})