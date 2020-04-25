console.log('script is working')

const input = document.querySelector('.profile-pic');
const inputDiv = document.querySelector('.input-picture');

input.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay(){
    while(inputDiv.firstChild) {
        inputDiv.removeChild(inputDiv.firstChild);
    }
    console.log(input.files);
    const curFiles = input.files;

    if(curFiles.length != 0){
        const image = document.createElement('img');
        image.src = URL.createObjectURL(curFiles[0]);
        image.style['max-height'] = '150px';
        image.style['max-width'] = '150px';
        inputDiv.appendChild(image);
    }
}