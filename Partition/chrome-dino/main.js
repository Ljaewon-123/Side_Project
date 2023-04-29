let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100

let imgDino = new Image()
let imgCac = new Image()
imgDino.src = 'dino.png'
imgCac.src = 'cactus.png'

const dino = {
  x : 10,
  y : 200,
  width: 50,
  height : 50,
  jump : false,
  jumpTimer : 0,
  draw(){
    ctx.fillStyle = 'green'
    // ctx.fillRect(this.x, this.y, this.width, this.height) // x,y좌표에 가로세로 크기
    ctx.drawImage(imgDino, this.x, this.y)
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
    // 히트박스 
    // ctx.fillRect(this.x, this.y, this.width, this.height) // x,y좌표에 가로세로 크기
    ctx.drawImage(imgCac, this.x, this.y)
  }
}

let timer = 0
let cactusArr = []
let ani

function playAnimation(){
  ani = requestAnimationFrame(playAnimation) //기본브라우저 모니터 fps따라 다름 
  timer++

  ctx.clearRect(0,0, canvas.width, canvas.height)

  if(timer % 200 == 0){
    const cacuts = new Cactus()
    cactusArr.push(cacuts)
  }

  cactusArr.forEach((cactusObj, i, arr) => {
    // x좌표 0미만 제거 
    if(cactusObj.x < 0) arr.splice(i, 1)
    cactusObj.x--

    crash(dino, cactusObj)

    cactusObj.draw()
  })
  

  if(dino.jump) dino.y -= 5 , dino.jumpTimer++
  else if(dino.y < 200) dino.y+=5

  if(dino.jumpTimer > 30){
    dino.jump = false
    dino.jumpTimer = 0
  }

  dino.draw()
}
playAnimation()

// 충돌확인 
function crash(dino, cactus){
  let xAxis = cactus.x - (dino.x + dino.width)
  let yAxis = cactus.y - (dino.y + dino.height)
  if( xAxis < 0 && yAxis < 0){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    cancelAnimationFrame(ani)
  }
}


document.addEventListener('keydown', (e) => {
  if(e.code == 'Space') dino.jump = true
})