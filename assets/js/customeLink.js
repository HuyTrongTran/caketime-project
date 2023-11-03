const options = ["home-page", "shop-page", "product-page", "blog-page", "contact-page"]

const homePage = document.querySelector("#home-page")
const shopPage = document.querySelector("#shop-page")
const productPage = document.querySelector("#product-page")
const blogPage = document.querySelector("#blog-page")
const contactPage = document.querySelector("#contact-page")

for(var i = 0; i<options.length; i++) {
    if(options[i] === homePage.id){
        homePage.href = 'index.html';
    }
    if(options[i] === shopPage.id){
        shopPage.href = 'shop-category-slider.html';
    }
    if(options[i] === productPage.id){
        productPage.href = 'product-sticky.html';
    }
    if(options[i] === blogPage.id){
        blogPage.href = 'blog-grid.html';
    }
    if(options[i] === contactPage.id){
        contactPage.href = 'contact-us.html'
    }
}