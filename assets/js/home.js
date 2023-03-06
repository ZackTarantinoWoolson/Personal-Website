const toggleSwitch = document.getElementById('theme-switch-button');
const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById('theme-image').src = "/assets/images/ThemeSwitcher/sunny.png"

        var elms = document.querySelectorAll("#link-image")
        for (var i = 0; i < elms.length; i++)
            elms[i].src = "/assets/images/Links/external-link-white.png"
    }
}

function switchTheme(e) {
    console.log("switch");
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-image').src = "/assets/images/ThemeSwitcher/sunny.png"

        var elms = document.querySelectorAll("#link-image")
        for (var i = 0; i < elms.length; i++)
            elms[i].src = "/assets/images/Links/external-link-white.png"

        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-image').src = "/assets/images/ThemeSwitcher/moon.png"

        var elms = document.querySelectorAll("#link-image")
        for (var i = 0; i < elms.length; i++)
            elms[i].src = "/assets/images/Links/external-link-black.png"

        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('click', switchTheme, false);