function toggleDropdown() {
    // Get the dropdown content and arrow elements
    var content = document.querySelector('.dropdown-content');
    var arrow = document.querySelector('.arrow');

    // Toggle visibility of the dropdown content
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.classList.add('rotate'); // Rotate the arrow when open
    } else {
        content.style.display = 'none';
        arrow.classList.remove('rotate'); // Return arrow to default position when closed
    }
}