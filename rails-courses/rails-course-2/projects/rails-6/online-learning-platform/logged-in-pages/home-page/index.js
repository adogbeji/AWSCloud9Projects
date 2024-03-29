'use strict';


// SEARCH BAR CLOSE ICON
const closeIcon = document.querySelector('._0035-sect_1-topnav__search-clear-input');
const input = document.querySelector('._0035-sect_1-topnav__search-input');

// Removes close icon when nothing is typed
input.addEventListener('input', function(e) {
    if (input.value !== '') {
        closeIcon.classList.remove('_0035-sect_1-topnav__search-clear-input--hide');
    } else {
        closeIcon.classList.add('_0035-sect_1-topnav__search-clear-input--hide');
    }
});


// SEARCH INPUT DROPDOWN BOX 
const inputDropdownBox = document.querySelector('._0035-sect_1-topnav__search-input-dropdown-box');
const dropdownContent = document.querySelector('._0035-sect_1-topnav__search-dropdown-content');

input.addEventListener('focus', function() {
    inputDropdownBox.style.flex = '0 0 75%';
    // dropdownContent.style.minWidth = '52.3rem';
    dropdownContent.style.minWidth = '32.5rem';
});

input.addEventListener('focusout', function() {
    inputDropdownBox.style.flex = '0 0 70%';
    dropdownContent.style.minWidth = '30.5rem';
});


// NO RESULTS DROPDOWN
const noResultsDropdown = document.querySelector('._0035-sect_1-topnav__search-dropdown-no-results');

input.addEventListener('focus', function() {
    inputDropdownBox.style.flex = '0 0 75%';
    // noResultsDropdown.style.minWidth = '52.3rem';
    noResultsDropdown.style.minWidth = '32.5rem';
});

input.addEventListener('focusout', function() {
    inputDropdownBox.style.flex = '0 0 70%';
    // noResultsDropdown.style.minWidth = '48.8rem';
    noResultsDropdown.style.minWidth = '30.5rem';
});


// NAVIGATION BAR DROPDOWNS

// FIRST DROPDOWN:-

/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function openTopnavClickDropDownOne() {
    // Original Code
    // if (document.getElementById('topNavDropdown_1').classList.contains('_0035-sect_1-topnav__dropdown-content-1--show')) {
    //     document.getElementById('topNavDropdown_1').classList.remove('_0035-sect_1-topnav__dropdown-content-1--show');
    // } else {
    //     document.getElementById('topNavDropdown_1').classList.add('_0035-sect_1-topnav__dropdown-content-1--show');
    // }
  
    // Shortened Code
    document.getElementById('topNavDropdown_1').classList.toggle('_0035-sect_1-topnav__dropdown-content-1--show');
}

// When the user clicks anywhere outside of the dropdown
document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('._0035-sect_1-topnav__dropdown-btn-1')) {
        const dropdown = document.querySelector('._0035-sect_1-topnav__dropdown-content-1');

        if (dropdown.classList.contains('_0035-sect_1-topnav__dropdown-content-1--show')) {
            dropdown.classList.remove('_0035-sect_1-topnav__dropdown-content-1--show');
        }
    }
});


// SECOND DROPDOWN:-

/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function openTopnavClickDropDownTwo() {
    // Original Code
    // if (document.getElementById('topNavDropdown_2').classList.contains('_0035-sect_1-topnav__dropdown-content-2--show')) {
    //     document.getElementById('topNavDropdown_2').classList.remove('_0035-sect_1-topnav__dropdown-content-2--show');
    // } else {
    //     document.getElementById('topNavDropdown_2').classList.add('_0035-sect_1-topnav__dropdown-content-2--show');
    // }
  
    // Shortened Code
    document.getElementById('topNavDropdown_2').classList.toggle('_0035-sect_1-topnav__dropdown-content-2--show');
}

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('._0035-sect_1-topnav__dropdown-btn-2')) {
        const dropdown = document.querySelector('._0035-sect_1-topnav__dropdown-content-2');

        if (dropdown.classList.contains('_0035-sect_1-topnav__dropdown-content-2--show')) {
            dropdown.classList.remove('_0035-sect_1-topnav__dropdown-content-2--show');
        }
    }
});


// FIRST RESPONSIVE DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDownOne() {
    // Original Code
    // if (document.getElementById('topNavLinkDotDropdown_1').classList.contains('_0035-sect_1-topnav__link-dot_1-dropdown-content--show')) {
    //     document.getElementById('topNavLinkDotDropdown_1').classList.remove('_0035-sect_1-topnav__link-dot_1-dropdown-content--show')
    // } else {
    //     document.getElementById('topNavLinkDotDropdown_1').classList.add('_0035-sect_1-topnav__link-dot_1-dropdown-content--show')
    // }

    // Shortened Code
    document.getElementById('topNavLinkDotDropdown_1').classList.toggle('_0035-sect_1-topnav__link-dot_1-dropdown-content--show');
}

// document.addEventListener('click', function(e) {
//     if (e.target !== document.querySelector('._0035-sect_1-topnav__link-dot-icon-box-1')) {
//         const dropdown = document.querySelector('._0035-sect_1-topnav__link-dot_1-dropdown-content');

//         if (dropdown.classList.contains('_0035-sect_1-topnav__link-dot_1-dropdown-content--show')) {
//             dropdown.classList.remove('_0035-sect_1-topnav__link-dot_1-dropdown-content--show');
//         }
//     }
// });


// THIRD DROPDOWN:-

/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
   function openTopnavClickDropDownThree() {
    // Original Code
    // if (document.getElementById('topNavDropdown_3').classList.contains('_0035-sect_1-topnav__dropdown-content-3--show')) {
    //     document.getElementById('topNavDropdown_3').classList.remove('_0035-sect_1-topnav__dropdown-content-3--show');
    // } else {
    //     document.getElementById('topNavDropdown_3').classList.add('_0035-sect_1-topnav__dropdown-content-3--show');
    // }
  
    // Shortened Code
    document.getElementById('topNavDropdown_3').classList.toggle('_0035-sect_1-topnav__dropdown-content-3--show');
}

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('._0035-sect_1-topnav__dropdown-btn-3')) {
        const dropdown = document.querySelector('._0035-sect_1-topnav__dropdown-content-3');

        if (dropdown.classList.contains('_0035-sect_1-topnav__dropdown-content-3--show')) {
            dropdown.classList.remove('_0035-sect_1-topnav__dropdown-content-3--show');
        }
    }
});


// SECOND RESPONSIVE DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDownTwo() {
    // Original Code
    // if (document.getElementById('topNavLinkDotDropdown_2').classList.contains('_0035-sect_1-topnav__link-dot_2-dropdown-content--show')) {
    //     document.getElementById('topNavLinkDotDropdown_2').classList.remove('_0035-sect_1-topnav__link-dot_2-dropdown-content--show')
    // } else {
    //     document.getElementById('topNavLinkDotDropdown_2').classList.add('_0035-sect_1-topnav__link-dot_2-dropdown-content--show')
    // }

    // Shortened Code
    document.getElementById('topNavLinkDotDropdown_2').classList.toggle('_0035-sect_1-topnav__link-dot_2-dropdown-content--show');
}

// document.addEventListener('click', function(e) {
//     if (e.target !== document.querySelector('._0035-sect_1-topnav__link-dot-icon-box-2')) {
//         const dropdown = document.querySelector('._0035-sect_1-topnav__link-dot_2-dropdown-content');

//         if (dropdown.classList.contains('_0035-sect_1-topnav__link-dot_2-dropdown-content--show')) {
//             dropdown.classList.remove('_0035-sect_1-topnav__link-dot_2-dropdown-content--show');
//         }
//     }
// });



// HAMBURGER MENU ICON

/* Toggle between showing and hiding the navigation menu links when the user clicks 
   on the hamburger menu/bar icon */
   function openMobileMenu() {
    let x = document.getElementById('mobileLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none'; 
    } else {
        x.style.display = 'block';
    }
}


// MOBILE NAVBAR DROPDOWNS

// FIRST DROPDOWN:-

/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function openClickMobileDropDownOne() {
    // Original Code
    // if (document.getElementById('mobileNavDropdown_1').classList.contains('_0035-sect_1-topnav-mobilenav__dropdown-content-1--show')) {
    //     document.getElementById('mobileNavDropdown_1').classList.remove('_0035-sect_1-topnav-mobilenav__dropdown-content-1--show');
    // } else {
    //     document.getElementById('mobileNavDropdown_1').classList.add('_0035-sect_1-topnav-mobilenav__dropdown-content-1--show');
    // }
  
    // Shortened Code
    document.getElementById('mobileNavDropdown_1').classList.toggle('_0035-sect_1-topnav-mobilenav__dropdown-content-1--show');
}

// When the user clicks anywhere outside of the dropdown
document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('._0035-sect_1-topnav-mobilenav__dropdown-btn-1')) {
        const dropdown = document.querySelector('._0035-sect_1-topnav-mobilenav__dropdown-content-1');

        if (dropdown.classList.contains('_0035-sect_1-topnav-mobilenav__dropdown-content-1--show')) {
            dropdown.classList.remove('_0035-sect_1-topnav-mobilenav__dropdown-content-1--show');
        }
    }
});


// SECOND DROPDOWN:-

/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function openClickMobileDropDownTwo() {
    // Original Code
    // if (document.getElementById('mobileNavDropdown_2').classList.contains('_0035-sect_1-topnav-mobilenav__dropdown-content-2--show')) {
    //     document.getElementById('mobileNavDropdown_2').classList.remove('_0035-sect_1-topnav-mobilenav__dropdown-content-2--show');
    // } else {
    //     document.getElementById('mobileNavDropdown_2').classList.add('_0035-sect_1-topnav-mobilenav__dropdown-content-2--show');
    // }
      
    // Shortened Code
    document.getElementById('mobileNavDropdown_2').classList.toggle('_0035-sect_1-topnav-mobilenav__dropdown-content-2--show');
}
    
// When the user clicks anywhere outside of the dropdown
document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('._0035-sect_1-topnav-mobilenav__dropdown-btn-2')) {
        const dropdown = document.querySelector('._0035-sect_1-topnav-mobilenav__dropdown-content-2');
    
        if (dropdown.classList.contains('_0035-sect_1-topnav-mobilenav__dropdown-content-2--show')) {
            dropdown.classList.remove('_0035-sect_1-topnav-mobilenav__dropdown-content-2--show');
        }
    }
});


// THIRD DROPDOWN:-

/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
   function openClickMobileDropDownThree() {
    // Original Code
    // if (document.getElementById('mobileNavDropdown_3').classList.contains('_0035-sect_1-topnav-mobilenav__dropdown-content-3--show')) {
    //     document.getElementById('mobileNavDropdown_3').classList.remove('_0035-sect_1-topnav-mobilenav__dropdown-content-3--show');
    // } else {
    //     document.getElementById('mobileNavDropdown_3').classList.add('_0035-sect_1-topnav-mobilenav__dropdown-content-3--show');
    // }
      
    // Shortened Code
    document.getElementById('mobileNavDropdown_3').classList.toggle('_0035-sect_1-topnav-mobilenav__dropdown-content-3--show');
}
    
// When the user clicks anywhere outside of the dropdown
document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('._0035-sect_1-topnav-mobilenav__dropdown-btn-3')) {
        const dropdown = document.querySelector('._0035-sect_1-topnav-mobilenav__dropdown-content-3');
    
        if (dropdown.classList.contains('_0035-sect_1-topnav-mobilenav__dropdown-content-3--show')) {
            dropdown.classList.remove('_0035-sect_1-topnav-mobilenav__dropdown-content-3--show');
        }
    }
});


// MOBILE NAVBAR SEARCH BAR

// SEARCH BAR CLOSE ICON
const mobileCloseIcon = document.querySelector('._0035-sect_1-topnav-mobilenav__search-clear-input');
const mobileInput = document.querySelector('._0035-sect_1-topnav-mobilenav__search-input');

// Removes close icon when nothing is typed
mobileInput.addEventListener('input', function(e) {
    if (mobileInput.value !== '') {
        mobileCloseIcon.classList.remove('_0035-sect_1-topnav-mobilenav__search-clear-input--hide');
    } else {
        mobileCloseIcon.classList.add('_0035-sect_1-topnav-mobilenav__search-clear-input--hide');
    }
});


// SEARCH BAR 
const mobileInputDropdownBox = document.querySelector('._0035-sect_1-topnav-mobilenav__search-input-dropdown-box');

mobileInput.addEventListener('focus', function() {
    mobileInputDropdownBox.style.flex = '0 0 75%';
});

mobileInput.addEventListener('focusout', function() {
    mobileInputDropdownBox.style.flex = '0 0 70%';
});


// SEARCH INPUT DROPDOWN BOX 
const mobileSearchDropdownContent = document.querySelector('._0035-sect_1-topnav-mobilenav__search-dropdown-content');

mobileInput.addEventListener('focus', function() {
    mobileSearchDropdownContent.style.minWidth = '61.3rem';
});

mobileInput.addEventListener('focusout', function() {
    mobileSearchDropdownContent.style.minWidth = '57.3rem';
});


// NO RESULTS DROPDOWN
const mobileNoResultsDropdown = document.querySelector('._0035-sect_1-topnav-mobilenav__search-dropdown-no-results');

mobileInput.addEventListener('focus', function() {
    mobileNoResultsDropdown.style.minWidth = '61.3rem';
});

mobileInput.addEventListener('focusout', function() {
    mobileNoResultsDropdown.style.minWidth = '57.3rem';
});