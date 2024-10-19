document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById('menu-icon');

    if (menu) {  
        menu.onclick = function () {
            const navlist = document.querySelector('.navlist');
            if (navlist) { 
                navlist.classList.toggle('open');
            }
        }
    }
});
