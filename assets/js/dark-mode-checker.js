
document.addEventListener("DOMContentLoaded", function(){
    const theme = localStorage.getItem('theme');
    console.log(theme)
    if (theme === "dark") {
        const cssFile = document.querySelector('[rel="stylesheet"]')
        const originalCssRef = cssFile.getAttribute('href')
        const darkModeCssRef = originalCssRef.replace('just-the-docs.css', 'dark-mode-preview.css')
        cssFile.setAttribute('href', darkModeCssRef)
    }
})