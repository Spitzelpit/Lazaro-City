const image = document.getElementById('scroll-image');
const imagePath = 'media/cv-images/'
const srcs = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
];
const scrollThresholds = [
    500,
    1000,
    1500
];

function changeImageOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    console.log(scrollY)
    let newSrc = imagePath + srcs[0];

    if (scrollY >= scrollThresholds[2]) {
        newSrc = imagePath + srcs[3];
    } else if (scrollY >= scrollThresholds[1]) {
        newSrc = imagePath + srcs[2];
    } else if (scrollY >= scrollThresholds[0]) {
        newSrc = imagePath + srcs[1];
    }

    if (image.src.indexOf(newSrc) === -1) {
        image.src = newSrc;
    }
}

let isTicking = false;

window.addEventListener('scroll', () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            changeImageOnScroll();
            isTicking = false;
        });
        isTicking = true;
    }
}, { passive: true });