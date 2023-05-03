const images = Array.from(document.querySelectorAll('img'))

images.forEach((img) => {
  img.addEventListener('click', () => {

    // chrome.storage.local에 이미지 src를 저장합니다.
    chrome.storage.local.set({ image: img.src })

    // window.location.href = "url to move"
  })
})