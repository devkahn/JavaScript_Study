/* ============= scroll sections active link ============= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    console.log("ON SCROLL!");
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id');
        console.log(top);

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /* ============= STICKY NAVBAR ============= */
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
}