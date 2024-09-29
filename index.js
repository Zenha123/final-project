const buttonContainer = document.getElementsByClassName('banner');
const button = buttonContainer.querySelector('.btn1');

// Apply hover effect when clicking anywhere in the div
buttonContainer.addEventListener('click', () => {
    btn1.classList.add('hover');

    // Remove hover effect after a short delay
    setTimeout(() => {
        btn1.classList.remove('hover');
    }, 500); // Adjust time as needed
});
