document.addEventListener('DOMContentLoaded', () => {
    const displayArea = document.getElementById('store-display');

    // Fetch data from our own server route, keeping the key invisible to the user
    fetch('/api/store-data')
        .then(response => response.json())
        .then(data => {
            // Render your app list elements dynamically here
            displayArea.innerHTML = `<p style="color: green;">Successfully connected to store data securely!</p>`;
            console.log(data);
        })
        .catch(err => {
            displayArea.innerHTML = `<p style="color: red;">Error loading store safely.</p>`;
        });
});
