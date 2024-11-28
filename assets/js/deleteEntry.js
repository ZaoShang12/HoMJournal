const delButton = document.getElementById('del-btn');
delButton.addEventListener("click", async (e) => {
    const entryId = e.target.value;  // Get the entryId from the button's value

    // Send a DELETE request to the backend
    const response = await fetch(`/deleteEntry/${entryId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        // Optionally remove the delete button after the successful deletion
        e.target.closest('.delete-button').remove();

        // Redirect to the home page after deletion
        window.location = "/";
    
    }
});
