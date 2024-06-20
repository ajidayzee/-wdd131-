document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentYear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModified = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;
});
