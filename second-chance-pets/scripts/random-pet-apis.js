// Random Cat API Photo (Banner)

async function getRandomCat() {

//Finds Element 'catPhoto'

    const catPhoto = document.getElementById('catPhoto');

// Call to dog API

try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();

// Clear img element, Sets Url from API call, Set screen reader, set fixed dimensions 

    const catImg = document.createElement('img');
    catImg.src = data[0].url;
    catImg.alt = "Random Cat API";
    catImg.style.width = "174.5px";
    catImg.style.height= "150px";

// Clear image & add image

    catPhoto.innerHTML = '';
    catPhoto.appendChild(catImg);

// Error message if necessary 

} catch (error) {
    console.error('Failed to fetch cat image:', error);
    catPhoto.textContent = 'Could not load cat image.';
}
}

// Wait until DOM has been fully loaded then run API call function

document.addEventListener('DOMContentLoaded', getRandomCat);

// Dog API

async function getRandomDog() {

//Finds Element 'catPhoto'

    const dogPhoto = document.getElementById('dogPhoto');

// Random Cat API Photo (Banner)

try {
    const response = await fetch('https://api.thedogapi.com/v1/images/search');
    const data = await response.json();


// Clear img element, Sets Url from API call, Set screen reader, set fixed dimensions 

    const dogImg = document.createElement('img'); // consistent naming
    dogImg.src = data[0].url;
    dogImg.alt = "Random Dog API";
    dogImg.style.width = "174.5px";
    dogImg.style.height = "150px";

// Clear image & add image
    dogPhoto.innerHTML = '';
    dogPhoto.appendChild(dogImg);

// Error message if necessary 

} catch (error) {
    console.error('Failed to fetch dog image:', error);
    dogPhoto.textContent = 'Could not load dog image.';
}
}

// Wait until DOM has been fully loaded then run API call function

document.addEventListener('DOMContentLoaded', getRandomDog);
