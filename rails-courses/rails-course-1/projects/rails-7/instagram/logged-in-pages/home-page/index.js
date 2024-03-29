'use strict';


// SEARCH BAR CLOSE ICON
const closeIcon = document.querySelector('._0057-sect_1-topnav__search-clear-input');
const input = document.querySelector('._0057-sect_1-topnav__search-input');

// Removes close icon when nothing is typed
input.addEventListener('input', function(e) {
    if (input.value !== '') {
        closeIcon.classList.remove('_0057-sect_1-topnav__search-clear-input--hide');
    } else {
        closeIcon.classList.add('_0057-sect_1-topnav__search-clear-input--hide');
    }
});


// SEARCH INPUT DROPDOWN BOX 
const inputDropdownBox = document.querySelector('._0057-sect_1-topnav__search-input-dropdown-box');
const dropdownContent = document.querySelector('._0057-sect_1-topnav__search-dropdown-content');

input.addEventListener('focus', function() {
    inputDropdownBox.style.flex = '0 0 75%';
    // dropdownContent.style.minWidth = '52.3rem';
    dropdownContent.style.minWidth = '32.5rem';
});

input.addEventListener('focusout', function() {
    inputDropdownBox.style.flex = '0 0 70%';
    // dropdownContent.style.minWidth = '48.6rem';
    dropdownContent.style.minWidth = '30.5rem';
});


// NO RESULTS DROPDOWN
const noResultsDropdown = document.querySelector('._0057-sect_1-topnav__search-dropdown-no-results');

input.addEventListener('focus', function() {
    inputDropdownBox.style.flex = '0 0 75%';
    // noResultsDropdown.style.minWidth = '52.3rem';
    noResultsDropdown.style.minWidth = '32.5rem';
});

input.addEventListener('focusout', function() {
    inputDropdownBox.style.flex = '0 0 70%';
    // noResultsDropdown.style.minWidth = '48.6rem';
    noResultsDropdown.style.minWidth = '30.5rem';
});