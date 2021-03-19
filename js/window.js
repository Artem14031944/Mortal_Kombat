let windowBlock = document.getElementById('window'),
    windowOpen = document.getElementById('button__open'),
    windowClose = document.getElementById('window_close');


windowOpen.addEventListener('click', ()=> {
  windowBlock.style.display = 'block'
})  

windowClose.addEventListener('click', ()=> {
  windowBlock.style.display = 'none'
})  

window.addEventListener('click', e => {
  if(e.target == windowBlock) {
   return windowBlock.style.display = 'none'
  }})


