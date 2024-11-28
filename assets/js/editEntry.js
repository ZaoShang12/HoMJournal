const submitButton = document.querySelector("input.submit");
submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get values from the entry form
    const id = document.getElementById("entryId").value;  // Get entry id cause apparently you need it

    // Find the radio button that is checked
    const homButtons = document.querySelectorAll("input.habits:checked");

    // Equivalent to an if statement homButtons.length > 0 is the condition
    // habitOfMind will be set to the selected button value if the condition is true, null is the condition is false
    const habitOfMind =
        homButtons.length > 0 ? homButtons[0].value : null;

    const content = document.querySelector("textarea.content").value;

    const entry = { id, content, habit: habitOfMind };

    // Send a POST request to the router and wait for a response
    const response = await fetch(`/editEntry/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", },
        body: JSON.stringify(entry),
    });

    if (response.ok) {
        window.location = "/"; // Redirect to home page after successful update
    } else {
        console.log("Error Editing Entry");
    }
});
