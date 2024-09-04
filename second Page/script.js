document.querySelector('.filter-button').addEventListener('click', function() {
  const filterButton = document.getElementById('filter-button');
  const popup = document.getElementById('filter-popup');
  
  // Toggle popup visibility
  if (popup.style.display === 'block') {
      popup.style.display = 'none';
  } else {
      popup.style.display = 'block';
      
      // Position the popup below the filter button
      const rect = filterButton.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;
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
