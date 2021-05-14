var menu = document.getElementById("menu");
;
console.log(menu.getAttribute('src'));

const menuFunc = () =>
{
    if(menu.getAttribute('src') == "images/icon-hamburger.svg")
    {
        menu.setAttribute('src', "images/icon-close.svg");
    }

    else if(menu.getAttribute('src') == "images/icon-close.svg")
    {
        menu.setAttribute('src', "images/icon-hamburger.svg");
    }
}

menu.addEventListener('click', menuFunc);