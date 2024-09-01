/**
 * Helper function that hide the modal that show the result of the operation
 */
function hideModal() {
    var resultModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('resultModal'));
    resultModal.hide();
}

/**
 * Function that creates and sends the POST request.
 * When it recieves the result it show the result modal and inject the values in the relative span space
 */
function sendPostData() {
    // Get values of the input numbers
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    // If they are empty then set them to 0
    num1 = num1 == '' ? 0 : num1;
    num2 = num2 == '' ? 0 : num2;

    // Build the variable of request (in order to convert in JSON later)
    var formData = {
        num1: num1,
        num2: num2,
    };

    // call the /calculate endpoint with a POST request
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json()) // convert response in JSON format
        .then((data) => {
            // Show the result modal
            var resultModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('resultModal'));
            resultModal.show();

            // Inject the input values and result values into the showed modal
            document.getElementById("inputBox").innerHTML = num1 + " + " + num2 + " + ";
            document.getElementById("nextPrimeBox").innerHTML = data.nextPrime;
            document.getElementById("overallSumBox").innerHTML = data.overallSum;
        })
        .catch((error) => console.error('Error:', error));
}

