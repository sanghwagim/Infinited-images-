
const imageContainer = document.getElementById('image-container');
const loader =document.getElementById('loader');

let photoArray = [];

// Unsplash API 

const count = 10; 
const apiKey = '2b9AMmENWYiRHZtvF4f-ITpYjQbkOSRw1PVjysRQ2cQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//  Create Elements For Links & Photos 


function displayPhotos () { 
    photoArray.forEach((photo) => {

    } );

    let createLinks = document.createElement('li'); 


}
// Get photos from unsplash API 

async function getPhotos () { 
    try { 
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        
        displayPhotos (); 

    }

    catch (error ) { 
        // Catch Error here 
    }
}


getPhotos();
