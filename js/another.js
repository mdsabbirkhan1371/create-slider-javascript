const images = [
    'img/picture-1.jpg',
    'img/picture-2.jpg',
    'img/picture-3.jpg',
    'img/picture-4.png',
    'img/picture-5.png',
]

let imageIndex = 0;
const imgSlider = document.getElementById('slider-img');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex]
    imgSlider.setAttribute('src', imgUrl)
    imageIndex++
    // console.log(imgUrl)
}, 1000)