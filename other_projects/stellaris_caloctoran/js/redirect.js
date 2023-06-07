window.onscroll = function() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    // Redirect to another page
        window.location.href = "posters/";
    }
};