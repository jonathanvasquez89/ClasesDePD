// cartel de autor
function autor() {
    alert("Creador de Esta Pagina - Jonathan Vásquez")
}

// Button - Slider
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme);
}
slider.addEventListener('click', () =>{
    let switchTotheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchTotheme); 
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);
