const currentImage = document.querySelector("#currentImage")
const images = document.querySelectorAll(".images img");

const opacity = .5;

images.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        images.forEach((img)=>{
            img.style.opacity = 1;
        })
        currentImage.src = e.target.src
        e.target.style.opacity = opacity
    })
});

