document.getElementById("btn").addEventListener("click", async (e) => {
  e.preventDefault(); // Prevent form submission

  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value);

  if (!textInput || isNaN(delayInput)) {
    alert("Please enter valid values for text and delay.");
    return;
  }

  try {
    await delay(delayInput);
    document.getElementById("output").textContent = textInput; // Update the output div
  } catch (error) {
    console.error("Error:", error);
  }
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
