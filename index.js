window.onload = function() {
    // Define the sendEmail function
    function sendEmail() {
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        var formData = new FormData();
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_email.php', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Email sent successfully');
            } else {
                alert('Error sending email');
            }
        };

        xhr.send(formData);
    }

    // Rest of your code here



    // define variables and functions before using them
    var console = window.console;
    var confirm = window.confirm;

    // check if browser supports local storage
    if (typeof(Storage) !== "undefined") {
        var localStorage = window.localStorage;

        // check if user has already accepted cookies
        if (localStorage.getItem('cookiesAccepted')) {
            // if cookies have been accepted, do nothing
            console.log('Cookies already accepted');
        } else {
            // if cookies have not been accepted, prompt user to accept them
            if (confirm('We use cookies to personalize content and ads, and to analyze our traffic. Do you accept cookies?')) {
                // if user accepts cookies, set a local storage item to remember their preference
                localStorage.setItem('cookiesAccepted', true);
                console.log('Cookies accepted');
            } else {
                console.log('Cookies declined');
            }
        }
    } else {
        console.log('Local storage not supported');
    }


    // define variables and functions before using them
    var window = window;
    var document = window.document;

    //Scrolls
    var prevScrollpos = window.pageYOffset;
    var navbar = document.querySelector(".navbar-adjustment");
    var navbarHeight = navbar ? navbar.offsetHeight : 0;
    var delay = 1000; // delay in milliseconds

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (navbar) {
            if (prevScrollpos > currentScrollPos) {
                setTimeout(function() {
                    navbar.style.top = "0";
                }, delay);
            } else if (currentScrollPos > navbarHeight) {
                navbar.style.top = "-" + navbarHeight + "px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            console.error("Navbar element not found");
        }
    };

    // Show the "loading" element
    document.getElementById('my-loading-screen').style.display = 'flex';

    // Hide the "loading" element after 2 seconds
    setTimeout(function() {
        document.getElementById('my-loading-screen').style.display = 'none';
    }, 2000);

    // Show the "loading" element again in case of errors
    window.addEventListener('error', function() {
        document.getElementById('my-loading-screen').style.display = 'flex';
    });


    $(document).ready(function() {
        function sendEmail() {
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var message = document.getElementById('message').value;

            var formData = new FormData();
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('message', message);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'send_email.php', true);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert('Email sent successfully');
                } else {
                    alert
                        ('Error sending email');
                }
            };
        }
    });

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
        xhr.send(formData);
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
}