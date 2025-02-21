function switchFrame(frameId) {
  if (frameId === 1) {
    cellphoneArea.appendChild(leftArea)
    cellphoneArea.appendChild(middleArea)
    cellphoneArea.appendChild(rightArea)
    leftArea.style.width = '100%'
    middleArea.style.width = '100%'
    rightArea.style.width = '100%'
  } else {
    templateArea.className = 'flex row going-left'
    templateArea.appendChild(leftArea)
    templateArea.appendChild(middleArea)
    templateArea.appendChild(rightArea)
    leftArea.style.width = '25%'
    middleArea.style.width = '37%'
    rightArea.style.width = '37%'
  }
}

const templateWindow = document.getElementById('window')
const leftArea = document.getElementById('left-area')
const middleArea = document.getElementById('middle-area')
const rightArea = document.getElementById('right-area')
const cellphoneArea = document.getElementById('cellphone-frame')
const templateArea = document.getElementById('template-frame')

const loop = setInterval(() => {
  const triggerPos = 850
  // templateWindow.textContent = `[${window.innerHeight}] x [${window.innerWidth}]`
  window.innerWidth <= triggerPos ? switchFrame(1) : switchFrame(2)
}, 100)