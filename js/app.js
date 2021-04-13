/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/* TODO : find number of section in the page */
 const sections = document.querySelectorAll('section');
/* TODO : get the list of the navbar to append elements in it later */    
 const navbarList = document.querySelector('#navbar-list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
// Append Sections To Navbar
for(const section of sections) {
    /* TODO : create element that refrence to the section an set its attribute */
    let li = document.createElement('li');
    li.setAttribute('data',section.getAttribute('id'));
    li.textContent = section.getAttribute('id');
    li.setAttribute('class', 'menu-link');
    /* TODO : the width of the elements calculated dynamically 
    depending on the number of it relative to the allowed width*/
    li.setAttribute('style', `width : calc((100% - 22px * ${sections.length}) / ${sections.length})`);
    navbarList.appendChild(li);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Scroll to anchor ID using scrollBy event
/* TODO : get element of the navbar by its class 'menu-link' */
 const menuLink = document.querySelectorAll('.menu-link'); 
 menuLink.forEach( 
 function catchClick(index) {
     /* TODO : listen if there is a click event on the list of elements */
    index.addEventListener('click',function() {
        let idOfSection = index.getAttribute('data'), yCordinateOfSection, cordinates, elem;
        elem = document.getElementById(idOfSection);
        /* TODO : calculate the distance from the current window to the section */
        cordinates = elem.getBoundingClientRect();
        yCordinateOfSection = cordinates.top;
        /* TODO : go to section indexed using scrollBy */
        window.scrollBy({
            top: yCordinateOfSection,
            left: 0,
            behavior: 'smooth'
          });
    });
 }
 );

 
 // Add class 'active' to section when near top of viewport
 sections.forEach(
     function addActive(section) {
         /* TODO : listen if there is a scroll in the page */
        document.addEventListener('scroll', function(){
            /* TODO : find the section viewed in the viewport */
            let cordinatesOfSection = section.getBoundingClientRect();
            console.log(cordinatesOfSection.top);
            if(cordinatesOfSection.top <= 100 && cordinatesOfSection.top >= -400){
                /* TODO : adding active class to section viewed */
                section.setAttribute('class', 'active');
                const idOfSection = section.getAttribute('id');
                menuLink.forEach(function(htmlElement){
                    
                    if(htmlElement.getAttribute('data') == idOfSection){
                        htmlElement.setAttribute('style',
                         `width : calc((100% - 22px * ${sections.length}) / ${sections.length});
                          background: #333;
                          color: #fff `);
                    }else{
                        htmlElement.setAttribute('style', `width : calc((100% - 22px * ${sections.length}) / ${sections.length})`);
                    }
                    
                });
            }else{
                /* TODO : remove active class when section is not viewed in viewport */
                section.removeAttribute('class', 'active');
            }
        })
     }
 )


/**
 * End Main Functions
 * 
 * 
*/
