function offset(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

// Assuming 'view' is a DOM element
const view = document.getElementById('myElement');
const translate = offset(view);

console.log('Offset Top:', translate.top);
console.log('Offset Left:', translate.left);
