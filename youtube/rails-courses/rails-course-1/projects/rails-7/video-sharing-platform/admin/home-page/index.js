'use strict';


// FIRST RESPONSIVE DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDownOne() {
    // Original Code
    // if (document.getElementById('topNavLinkDotDropdown_1').classList.contains('_5728-sect_1-topnav__link-dot_1-dropdown-content--show')) {
    //     document.getElementById('topNavLinkDotDropdown_1').classList.remove('_5728-sect_1-topnav__link-dot_1-dropdown-content--show')
    // } else {
    //     document.getElementById('topNavLinkDotDropdown_1').classList.add('_5728-sect_1-topnav__link-dot_1-dropdown-content--show')
    // }

    // Shortened Code
    document.getElementById('topNavLinkDotDropdown_1').classList.toggle('_5728-sect_1-topnav__link-dot_1-dropdown-content--show');
}

// document.addEventListener('click', function(e) {
//     if (e.target !== document.querySelector('._5728-sect_1-topnav__link-dot-icon-box-1')) {
//         const dropdown = document.querySelector('._5728-sect_1-topnav__link-dot_1-dropdown-content');

//         if (dropdown.classList.contains('_5728-sect_1-topnav__link-dot_1-dropdown-content--show')) {
//             dropdown.classList.remove('_5728-sect_1-topnav__link-dot_1-dropdown-content--show');
//         }
//     }
// });


// HAMBURGER MENU ICON

/* Toggle between showing and hiding the navigation menu links when the user clicks 
   on the hamburger menu / bar icon */
function openMobileMenu() {
    let x = document.getElementById('mobileLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none'; 
    } else {
        x.style.display = 'block';
    }
}