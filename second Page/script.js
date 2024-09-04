// Get the elements
const filterButton = document.querySelector('.filter-button');
const filterIcon = document.querySelector('.filter-icon');
const popup = document.getElementById('filter-popup');

// Event listener for the filter button and icon
filterButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents immediate closing when clicking the button
    togglePopup();
});

// Function to toggle the popup visibility
function togglePopup() {
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';

        // Position the popup below the filter button
        const rect = filterButton.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`;
        popup.style.left = `${rect.left + window.scrollX}px`;
    }
}

// Close the popup when clicking anywhere outside of it
document.addEventListener('click', function(event) {
    if (popup.style.display === 'block' && !popup.contains(event.target) && !filterButton.contains(event.target)) {
        popup.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
  const filterButton = document.getElementById('filter-button');
  const popup = document.getElementById('filter-popup');
  
  if (popup.style.display === 'block') {
      const rect = filterButton.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;
  }
});


const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');

searchContainer.addEventListener('click', function() {
    this.classList.add('active');
    if (searchInput.value === 'Search') {
        searchInput.value = ''; // Clear the default text
    }
    searchInput.focus();
});

searchInput.addEventListener('blur', function() {
    if (searchInput.value.trim() === '') {
        searchInput.value = 'Search'; // Restore the default text
        searchContainer.classList.remove('active');
    }
});


const searchInputindustries = document.querySelector('.search-industries');

searchInputindustries.addEventListener('focus', function() {
    if (this.value === 'Search Industries') {
        this.value = '';
    }
});

searchInputindustries.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.value = 'Search Industries';
    }
});

const searchInputtitle = document.querySelector('.search-title');

searchInputtitle.addEventListener('focus', function() {
    if (this.value === 'Search Industries') {
        this.value = '';
    }
});

searchInputtitle.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.value = 'Search Industries';
    }
});