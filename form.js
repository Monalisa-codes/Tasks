// form.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".inputfield"); // Select the form by its class

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect selected values from the form elements
        const selectedOption = document.getElementById("select_opt").value;
        const checkedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
        const selectedDate = document.getElementById("calendar").value;

        // Log the selected options in the console
        console.log("Selected Option:", selectedOption);
        console.log("Checked Checkboxes:", checkedCheckboxes);
        console.log("Selected Radio Button:", selectedRadioButton ? selectedRadioButton.value : null);
        console.log("Selected Date:", selectedDate);
    });
});


