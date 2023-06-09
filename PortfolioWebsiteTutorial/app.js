const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main__content');


function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            if(currentBtn.length > 0) currentBtn[0].className  = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    // Sections Active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            });
            e.target.classList.add('acitve');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themeBtn = document.querySelector('.theme__btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();
