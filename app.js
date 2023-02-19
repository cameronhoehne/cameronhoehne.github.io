const images = document.querySelectorAll(".project-image");
const container = document.querySelector(".contact-section");
const contact = document.querySelectorAll(".contact-background");
const contactH1 = document.querySelector(".cont-h1");
const contactP = document.querySelector(".cont-p");
const contactIcon = document.querySelector(".icon-bar2");


const options = {
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.2
}

const options2 = {
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.4
}

const imagesCallback = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target)
        }
    });
};

const contactCallback = function(entries, observer2) {
   entries.forEach(function(entry) {
    if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll("*");
        children.forEach(function(child, index) {
            child.classList.add("contact-anim" + (index + 1))
        })
        observer2.unobserve(entry.target)
    }
   })
}

const observer = new IntersectionObserver(imagesCallback, options);
const observer2 = new IntersectionObserver(contactCallback, options2);

images.forEach(function(image) {
    observer.observe(image);
})

observer2.observe(container)