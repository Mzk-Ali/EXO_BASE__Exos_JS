divCarre = document.getElementsByClassName("carre");
for (i=0;i<divCarre.length;i++)
{

    divCarre[i].addEventListener('click', function(){
        this.classList.toggle("carre-rouge")
    })
}




//divCarre.addEventListener('click', function(){this.classList.toggle("carre-rouge")})
