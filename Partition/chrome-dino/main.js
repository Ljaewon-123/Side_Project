let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100

const dino = {
  x : 10,
  y : 200,
  width: 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this.width, this.height) // x,y좌표에 가로세로 크기
  }
}

dino.draw()

class Cactus {
  constructor(){
    this.x = 500
    this.y = 200 
    this.width = 50
    this.height = 50
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height) // x,y좌표에 가로세로 크기
  }
}

let timer = 0
let cactusArr = []

function playAnimation(){
  requestAnimationFrame(playAnimation) //기본브라우저 모니터 fps따라 다름 
  timer++

  ctx.clearRect(0,0, canvas.width, canvas.height)

  if(timer % 120 == 0){
    const cacuts = new Cactus()
    cactusArr.push(cacuts)
  }

  cactusArr.forEach((cactusObj) => {
    console.log(cactusObj)
    cactusObj.x--
    cactusObj.draw()
  })
  

  
  dino.draw()
}
playAnimation()