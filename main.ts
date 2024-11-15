// Interface to define the structure of sections for TypeScript type-checking
interface Section {
    header: HTMLElement;
    content: HTMLElement;
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all sections with the class 'resume-section'
    const sections = document.querySelectorAll<HTMLElement>('.resume-section');

    sections.forEach((section) => {
        const header = section.querySelector<HTMLElement>('h2');
        const content = section.querySelector<HTMLElement>('.section-content');

        // Check if header and content elements exist
        if (header && content) {
            header.addEventListener('click', () => {
                // Toggle the 'collapsed' class on content and header
                content.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            });
        }
    });
});
