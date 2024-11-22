// 替换为你自己的图片路径 
const images = [ 'image/image1.png', 'image/image2.png', 'image/image3.png', 'image/image4.png', 'image/image5.png', 'image/image6.png', 'image/image7.png', 
'image/image8.png', 'image/image9.png', 'image/image10.png', 'image/image11.png', 'image/image12.png', 'image/image13.png', 'image/image14.png', 'image/image15.png',
'image/image16.png', 'image/image17.png', 'image/image18.png', 'image/image19.png','image/image20.png','image/image21.png' ];
let currentIndex = 0;

const displayedImage = document.getElementById('displayed-image');
document.getElementById('left-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayedImage.src = images[currentIndex];
});

document.getElementById('right-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    displayedImage.src = images[currentIndex];
});
