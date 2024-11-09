document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    // Create the heading element and set its text
    const heading = document.createElement('h1');
    heading.innerText = "Hello, world!";

    // Append the heading to the content div
    contentDiv.appendChild(heading);
});
