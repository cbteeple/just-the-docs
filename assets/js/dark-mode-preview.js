document.addEventListener("DOMContentLoaded", function(){

  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode')
  const cssFile = document.querySelector('[rel="stylesheet"]')
  const originalCssRef = cssFile.getAttribute('href')
  const darkModeCssRef = originalCssRef.replace('just-the-docs.css', 'dark-mode-preview.css')
  const buttonCopy = ['light', 'dark']
  const updateButtonText = function(toggleDarkMode) {
    if (toggleDarkMode.classList.contains(buttonCopy[0])){
      toggleDarkMode.classList.remove(buttonCopy[0])
      toggleDarkMode.classList.add(buttonCopy[1])
    }
    else{
      toggleDarkMode.classList.remove(buttonCopy[1])
      toggleDarkMode.classList.add(buttonCopy[0])
    }
      //toggleDarkMode.textContent = buttonCopy[1] :
      //toggleDarkMode.textContent = buttonCopy[0]
  }



  jtd.addEvent(toggleDarkMode, 'click', function(){
    if (cssFile.getAttribute('href') === originalCssRef) {
      cssFile.setAttribute('href', darkModeCssRef)
      updateButtonText(toggleDarkMode)
    } else {
      cssFile.setAttribute('href', originalCssRef)
      updateButtonText(toggleDarkMode)
    }
  })
})






