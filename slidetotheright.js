function slidetotheright() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('tagshown');
            }
            else {
                entry.target.classList.remove('tagshown');
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.taghidden');
    hiddenElements.forEach((el) => observer.observe(el));
    console.log("Slide right loaded, hidden tag elements: "
        + hiddenElements.length);
}