const hamburguer = document.querySelector(".hamburguer");
let menuOpen = false;
hamburguer.addEventListener("click", function() {
    if (!menuOpen) {
        hamburguer.classList.add('open');
        menuOpen = true;
    } else {
        hamburguer.classList.remove('open');
        menuOpen = false;
    }
    document.querySelector(".container").classList.toggle("show-menu");

});

document.querySelector("#qtd").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layout-yes").addEventListener("change", updatePrice)
document.querySelector("#layout-no").addEventListener("change", updatePrice)
document.querySelector("#deadline").addEventListener("change", function() {
    const deadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadline} semanas`
    updatePrice()
})

function updatePrice() {
    const qtd = document.querySelector("#qtd").value
    const withJs = document.querySelector("#js").checked
    const withLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value
    let price = qtd * 100;
    if (withJs) price *= 1.1;
    if (withLayout) price += 500
    let rateUrgency = 1 - deadline * 0.1;
    price *= 1 + rateUrgency
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`
}