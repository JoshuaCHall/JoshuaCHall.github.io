const images = document.querySelectorAll("img[data-src]");

const imgoptions = {};

const imgobserver = new IntersectionObserver((entries,imgobserver )=>{
entries.forEach(entry) => {
    if (!entry.intersection) {
        return
    } else {
preloadImage(entrytarget);
ingobserver.onobserve(entrytarget)
    }
})

}, imgoptions);
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
      

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });
