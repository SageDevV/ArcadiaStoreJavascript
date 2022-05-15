const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const produto = document.querySelector("#name").value;
    const categoria = document.querySelector("#select").value;
    
    let categoriaResultado = document.querySelector("#category-result")
    let produtoResultado = document.querySelector("#product-result")

    produtoResultado.innerHTML = produto;
    categoriaResultado.innerHTML = categoria;

    console.log(produto, categoria);
})