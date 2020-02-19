//this const var gets all of the imgs with data-src attrib
const imagesToLoad = document.querySelectorAll("img[data-src]");

//img options are set - threshold refers to when visible in viewport, and
//rootMargin is when visible in page
const imgOptions = {
    threshold: "1",
    rootMargin: "0px 0px -300px 0px"
};

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
    }, imgOptions);

    imagesToLoad.forEach((img)=> {
        observer.observe(img);
    });
    //else load images like normal
} else {
    imagesToLoad.forEach((img)=> {
        loadImages(img);
    });
}

    //Loop through each img and load
imagesToLoad.forEach((img)=> {
    loadImages(img);
})


