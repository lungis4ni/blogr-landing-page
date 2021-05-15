var menu = document.getElementById("menu");
var navMenu = document.getElementById("nav-mobile");
var navClass = document.getElementsByClassName("nav-mobile")[0];
;
console.log(menu.getAttribute('src'));

const menuFunc = () =>
{
    if(menu.getAttribute('src') == "images/icon-hamburger.svg")
    {
        menu.setAttribute('src', "images/icon-close.svg");
        navClass.style.display = "block";
    }

    else if(menu.getAttribute('src') == "images/icon-close.svg")
    {
        menu.setAttribute('src', "images/icon-hamburger.svg");
        navClass.style.display = "none";
    }
}

menu.addEventListener('click', menuFunc);

var company = document.getElementById('company');
var companyUL = document.getElementById('companyUL');

company.addEventListener('click', function()
{
    if(companyUL.className == "companyULinitial")
    {
        companyUL.classList.add("companyUL");
        companyUL.classList.remove("companyULinitial");

        productUL.classList.add("productULinitial");
        productUL.classList.remove("productUL");

        connectUL.classList.add("connectULinitial");
        connectUL.classList.remove("connectUL");
    }

    else if(companyUL.className == "companyUL")
    {
        companyUL.classList.add("companyULinitial");
        companyUL.classList.remove("companyUL");
    }
});

var product = document.getElementById('product');
var productUL = document.getElementById('productUL');

product.addEventListener('click', function()
{
    if(productUL.className == "productULinitial")
    {
        productUL.classList.add("productUL");
        productUL.classList.remove("productULinitial");

        companyUL.classList.add("companyULinitial");
        companyUL.classList.remove("companyUL");

        connectUL.classList.add("connectULinitial");
        connectUL.classList.remove("connectUL");
    }

    else if(productUL.className == "productUL")
    {
        productUL.classList.add("productULinitial");
        productUL.classList.remove("productUL");
    }
})

var connect = document.getElementById('connect');
var connectUL = document.getElementById('connectUL');

connect.addEventListener('click', function()
{
    if(connectUL.className == "connectULinitial")
    {
        connectUL.classList.add("connectUL");
        connectUL.classList.remove("connectULinitial");

        companyUL.classList.add("companyULinitial");
        companyUL.classList.remove("companyUL");

        productUL.classList.add("productULinitial");
        productUL.classList.remove("productUL");
    }

    else if(connectUL.className == "connectUL")
    {
        connectUL.classList.add("connectULinitial");
        connectUL.classList.remove("connectUL");
    }
})