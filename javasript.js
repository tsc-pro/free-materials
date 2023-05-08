window.onscroll = function() {
    let scrollBar = document.getElementById("scroll-bar-content");
    scrollBar.style.height = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100 + "%";
};

// Get the footer element and the column elements
const footer = document.querySelector('footer');
const cols = footer.querySelectorAll('.col-md-4');

// Debounce function to limit the frequency of the window resize event
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add an event listener to resize the footer when the window size changes
window.addEventListener('resize', debounce(() => {
    // Get the width of the viewport
    const width = window.innerWidth;

    // Determine the number of columns to use based on the viewport width
    let numCols;
    if (width < 576) {
        numCols = 1;
    } else if (width < 992) {
        numCols = 2;
    } else {
        numCols = 3;
    }

    // Set the class of each column based on the number of columns to use
    let colClass = `col-md-${12 / numCols}`;
    const newColClass = `col-md-${12 / numCols}`;
    if (newColClass !== colClass) {
        cols.forEach((col) => {
            col.className = newColClass;
        });
        colClass = newColClass;
    }
}), 250);