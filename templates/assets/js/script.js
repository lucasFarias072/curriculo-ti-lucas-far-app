

const backgrounds = {
  light: 'linear-gradient(15deg, rgb(188, 188, 188), rgb(220, 220, 220), rgb(255, 255, 255))',
  dark: 'linear-gradient(-15deg, black, rgb(0, 33, 33), rgb(0, 0, 33))'
}

const themes = {
  light: '🌞',
  dark: '🌜'
}

const themeArea = document.getElementById('theme-frame')
const theme = document.getElementById('theme')
const templateArea = document.getElementById('template-frame')
const labels = document.querySelectorAll('.std-label')
const projectBanners = document.querySelectorAll('.std-banner')

theme.addEventListener('click', () => {
  if (theme.textContent === themes.dark) {
    theme.textContent = themes.light
    templateArea.style.background = backgrounds.dark
    themeArea.style.background = backgrounds.dark
    templateArea.style.color = 'darkgray'
    templateArea.style.textShadow = '0 0 .2rem #222'
    labels.forEach(labelTag => labelTag.classList.add('std-label-dark'))
    projectBanners.forEach(bannerTag => {
      bannerTag.style.boxShadow = '0 0 1rem rgb(0, 99, 99)'
      bannerTag.style.border = 'rgb(0, 99, 99) solid 1px'
    })
  } else {
    theme.textContent = themes.dark
    templateArea.style.background = backgrounds.light
    themeArea.style.background = backgrounds.light
    templateArea.style.color = 'inherit'
    templateArea.style.textShadow = 'inherit'
    labels.forEach(labelTag => labelTag.classList.remove('std-label-dark'))
    projectBanners.forEach(bannerTag => {
      bannerTag.style.boxShadow = '0 0 1rem rgb(128, 128, 128)'
      bannerTag.style.border = 'rgb(128, 128, 128) solid 1px'
    })
  }
})
