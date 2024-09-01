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
