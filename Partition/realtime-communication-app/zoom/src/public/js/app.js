const socket = io()

const myFace = document.getElementById('myFace')
const muteBtn = document.getElementById('mute')
const cameraBtn = document.getElementById('camera')
const camerasSelect = document.getElementById("cameras");


let myStream
let muted = false
let cameraOff = false

async function getCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    console.log(myStream.getVideoTracks())
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.innerText = camera.label;
      if (currentCamera.label === camera.label) {
        option.selected = true;
      }
      camerasSelect.appendChild(option);
    });
  } catch (e) {
    console.log(e);
  }
}

async function getMedia(deviceId){
  const initialConstrains = {
    audio: true,
    video: { facingMode: "user" },
  }
  const cameraConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  }
  try {
    myStream = await navigator.mediaDevices.getUserMedia(
      deviceId ? cameraConstraints : initialConstrains
    );
    myFace.scrObject = myStream
    if (!deviceId) {
      await getCameras();
    }
  } catch(e){
    console.log(e)
  }
}
getMedia()

function handleMuteClick() {
  myStream.getAudioTracks().forEach( track => track.enables = !track.enabled)
  if(!muted){
    muteBtn.innerText = "Ummute"
    muted = true
  }
  else{
    muteBtn.innerText = "Mute"
    muted = false
  }
}
function handleCameraClick(){
  myStream.getVideoTrack().forEach( track => track.enables = !track.enabled)
  if(cameraOff){
    cameraBtn.innerText = "Turn Camera Off"
    cameraOff = false
  }
  else{
    cameraBtn.innerText = "Turn Camera On "
    cameraOff = true
  }
}

async function handleCameraChange(){
  console.log(camerasSelect.value)
  await getMedia(camerasSelect.value)
}

muteBtn.addEventListener('click', handleMuteClick)
cameraBtn.addEventListener('click', handleCameraClick)
camerasSelect.addEventListener('input', handleCameraChange)