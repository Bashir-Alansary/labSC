// 1. Select the form element
const myForm = document.getElementById('contactForm');
const statusDisplay = document.getElementById('responseMessage');

// 2. Attach the event listener
myForm.addEventListener('submit', async (event) => {
  // Prevent the default browser refresh
  event.preventDefault();

  // 3. Extract the data using FormData
  const formData = new FormData(myForm);
  const data = Object.fromEntries(formData.entries());

  statusDisplay.textContent = "Sending...";

  try {
    // 4. Send the data to your API/Server
    const response = await fetch('https://example.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      statusDisplay.textContent = "Success! Your form has been submitted.";
      myForm.reset(); // Clear the form
    } else {
      statusDisplay.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    console.error("Submission Error:", error);
    statusDisplay.textContent = "Network error. Please try again later.";
  }
});