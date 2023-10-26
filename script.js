function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === id) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
