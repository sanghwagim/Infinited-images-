
const imageContainer = document.getElementById('image-container');
const loader =document.getElementById('loader');

let ready = false; 
let imagesLoaded = 0;
let totalImages = 0; 

let photoArray = [];

// Unsplash API 

let count = 5; 
const apiKey = '2b9AMmENWYiRHZtvF4f-ITpYjQbkOSRw1PVjysRQ2cQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if images were loaded

function imageLoaded() { 
    console.log('images loaded');

    imagesLoaded++; 
    if (imagesLoaded === totalImages) { 
        ready = true; 
        loader.hidden = true;
        count =30; 
        apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    }

}


//  Create Elements For Links & Photos 


//Helper Function to Set Attribute on Dom Elements 


function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos () { 
    imagesLoaded = 0;
   
    totalImages = photoArray.length;

    
    photoArray.forEach((photo) => {

        let item = document.createElement('a'); 
        setAttributes(item, {
            
            href : photo.links.html,
            target:'_blank',
        
        });
        // item.setAttribute('href', photo.links.html); 
        // item.setAttribute('target', '_blank');
        //Create <img> for photo

        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.small);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);

        setAttributes(img, { 
            src : photo.urls.small,
            alt : photo.alt_description,
            title : photo.alt_description

        });


        // Event listener,  Check each photo loading is finished 
        img.addEventListener('load', imageLoaded)

        item.appendChild(img);
        imageContainer.appendChild(item);
    } );
}


// Event listener,  Check each photo loading is finished 

// Get photos from unsplash API // Create Elements For Links & Photos, And to Dom 

async function getPhotos () { 
    try { 
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        
        displayPhotos();

    }

    catch (error ) { 
        // Catch Error here 
    }
}


// Check out to see scrolloing near bottom of page, load more pictures 

window.addEventListener('scroll', function () { 
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight -
         1000 && ready) { 
             ready = false;
             getPhotos();
             
         }

});

getPhotos();
