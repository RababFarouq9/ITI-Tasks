//5-
let imagges=['1.jpg','2.jpg','3.jpg','4.jpg'];
let currentIndex=0;
let interval;
function update(){
    document.getElementById("slider").src=imagges[currentIndex];
}

function next(){
    currentIndex=(currentIndex+1) % imagges.length;
    update()
}
function prev(){
    currentIndex=(currentIndex-1+ imagges.length) % imagges.length;
    update()
}
function start(){
    stop();
    interval=setInterval(next,2000);
}
function stop(){
    clearInterval(interval)
}
start()

//6
const images = document.querySelectorAll('.gallery');

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '0.3'; 
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
    });
});
//8

const container = document.getElementById('image-container');
const addImageButton = document.getElementById('add-image-btn');
const removeImageButton = document.getElementById('remove-image-btn');


function addImage() {
    // a
    const img = document.createElement('img');

    // b
    img.setAttribute('src', '1.jpg'); 
    img.setAttribute('alt', ' Image');
    img.style.display = 'block';
    img.style.width='100px'
    img.style.marginTop = '10px';

    // c
    container.appendChild(img);

    // d
    alert(`Number of child nodes: ${container.childNodes.length}`);

  
}


function removeImage() {
    const images = container.getElementsByTagName('img');
    if (images.length > 0) {
        // e
        container.removeChild(images[images.length - 1]);
        alert(`Image removed. Number of child nodes: ${container.childNodes.length}`);
    } else {
        alert('No images to remove.');
    }
}


addImageButton.addEventListener('click', addImage);
removeImageButton.addEventListener('click', removeImage);