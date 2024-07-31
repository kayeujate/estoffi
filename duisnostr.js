// Define the _addHandler function
const _addHandler = handler => {
    // Assuming we have a button with the ID 'myButton'
    const button = document.getElementById('myButton');

    // Check if the button exists
    if (button) {
        // Add the provided handler as a click event listener to the button
        button.addEventListener('click', handler);
    } else {
        console.error('Button not found');
    }
};

// Example usage of the _addHandler function
_addHandler(() => {
    alert('Button was clicked!');
});
