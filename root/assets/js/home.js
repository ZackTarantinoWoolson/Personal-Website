const toggleSwitch = document.getElementById('theme-switch-button');
// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
console.log("toggle",toggleSwitch)
const currentTheme = localStorage.getItem('theme');
console.log("currentTheme",currentTheme)

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById('theme-image').src="/root/assets/images/ThemeSwitcher/sunny.png"
    }
}

function switchTheme(e) {
    console.log("switch");
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-image').src="/root/assets/images/ThemeSwitcher/sunny.png"
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-image').src="/root/assets/images/ThemeSwitcher/moon.png"
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('click', switchTheme, false);