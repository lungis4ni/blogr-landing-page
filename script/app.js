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

var company = document.getElementById('company');
var companyUL = document.getElementById('companyUL');

company.addEventListener('click', function()
{
    companyUL.classList.toggle("companyUL");

})

var product = document.getElementById('product');
var productUL = document.getElementById('productUL');

product.addEventListener('click', function()
{
    productUL.classList.toggle("productUL");

})

var connect = document.getElementById('connect');
var connectUL = document.getElementById('connectUL');

connect.addEventListener('click', function()
{
    connectUL.classList.toggle("connectUL");

})

console.log(company + " " + companyUL)