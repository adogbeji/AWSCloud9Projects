'use strict';


// FIRST RESPONSIVE DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDownOne() {
    // Original Code
    // if (document.getElementById('topNavLinkDotDropdown_1').classList.contains('_0081-sect_1-topnav__link-dot_1-dropdown-content--show')) {
    //     document.getElementById('topNavLinkDotDropdown_1').classList.remove('_0081-sect_1-topnav__link-dot_1-dropdown-content--show')
    // } else {
    //     document.getElementById('topNavLinkDotDropdown_1').classList.add('_0081-sect_1-topnav__link-dot_1-dropdown-content--show')
    // }

    // Shortened Code
    document.getElementById('topNavLinkDotDropdown_1').classList.toggle('_0081-sect_1-topnav__link-dot_1-dropdown-content--show');
}

// document.addEventListener('click', function(e) {
//     if (e.target !== document.querySelector('._0081-sect_1-topnav__link-dot-icon-box-1')) {
//         const dropdown = document.querySelector('._0081-sect_1-topnav__link-dot_1-dropdown-content');

//         if (dropdown.classList.contains('_0081-sect_1-topnav__link-dot_1-dropdown-content--show')) {
//             dropdown.classList.remove('_0081-sect_1-topnav__link-dot_1-dropdown-content--show');
//         }
//     }
// });