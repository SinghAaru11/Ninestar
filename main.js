
const portfolio = document.getElementById('portfolio');
const all = document.getElementById('All')
const app = document.getElementById('App')
const product = document.getElementById('Product')
const branding = document.getElementById('Branding')
const books = document.getElementById('Book')

portfolio.addEventListener('click' , (event) => { 
let name = event.target.innerText;
// debugger
if(name =='All'){
    all.style.display = 'block';
    app.style.display = 'none';
    product.style.display = 'none';
    branding.style.display = 'none';
    books.style.display = 'none'
}
else if(name == 'App'){
    all.style.display = 'none';
    app.style.display = 'block';
    product.style.display = 'none';
    branding.style.display = 'none';
    books.style.display = 'none'
}
else if(name == 'Product'){
    all.style.display = 'none';
    app.style.display = 'none';
    product.style.display = 'block';
    branding.style.display = 'none';
    books.style.display = 'none'

}
else if (name == 'Brand'){
    all.style.display = 'none';
    app.style.display = 'none';
    product.style.display = 'none';
    branding.style.display = 'block';
    books.style.display = 'none'

}else if( name == 'Books'){
    all.style.display = 'none';
    app.style.display = 'none';
    product.style.display = 'none';
    branding.style.display = 'none';
    books.style.display = 'block'

}

   
})  