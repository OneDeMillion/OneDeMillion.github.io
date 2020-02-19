//this const var gets all of the imgs with data-src attrib
const imagesToLoad = document.querySelectorAll("img[data-src]");


const 

//loadImages funct moves the data-src to src
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload=()=> {
        image.removeAttribute('data-src');
};
}

//if intersectionObserver is recognized, app observes ea item entering the viewport
// when an img is visible, it stops observing that item. 
if('IntersectionObserver' in Window) {
    const imgObserve = new IntersectionObserver((items,observer)=> {
        items.forEach((item)=>{
            if(item.isIntersecting) {
                loadImages(item,target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img)=> {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img)=> {
        loadImages(img);
    });
}

//Loop through each img and load
imagesToLoad.forEach((img)=> {
    loadImages(img);
})


