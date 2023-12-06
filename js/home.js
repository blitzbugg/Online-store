// Navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180)
    {
        navbar.classList.add('bg');
    }
    else
    {
        navbar.classList.remove('bg');
    }
})

// Image collage

const collageImages = [...document.querySelectorAll('.collage-img')];

collageImages.map((item,i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image,index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image) => {
            image.style = null;
        })
    })
})