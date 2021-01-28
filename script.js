const hamburguer = document.querySelector(".hamburguer");
let menuOpen = false;
hamburguer.addEventListener("click", function(){
    if(!menuOpen){
        hamburguer.classList.add('open');
        menuOpen = true;
    }else{
        hamburguer.classList.remove('open');
        menuOpen = false;
    }
    document.querySelector(".container").classList.toggle("show-menu");
});