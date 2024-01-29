window.addEventListener('click',()=>{
    document.getElementById("cancion").play();
});

let slideIndex = 0;

const main_img=document.querySelector('.main_img')
const thumbnails=document.querySelectorAll('.thumbnail')
const active=document.querySelector('.active')
thumbnails.forEach (thumb =>{
    thumb.addEventListener('click',function(){ 
        const active =document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        main_img.src=thumb.src

    })
})

document.getElementById("miBoton").onclick = function () {
    window.open("https://shopping.mattel.com/es-es/collections/barbie-world-of-reveal-dolls", "_blank");
}

