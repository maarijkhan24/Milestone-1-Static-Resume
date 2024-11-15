// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select all sections with the class 'resume-section'
    var sections = document.querySelectorAll('.resume-section');
    sections.forEach(function (section) {
        var header = section.querySelector('h2');
        var content = section.querySelector('.section-content');
        // Check if header and content elements exist
        if (header && content) {
            header.addEventListener('click', function () {
                // Toggle the 'collapsed' class on content and header
                content.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            });
        }
    });
});
