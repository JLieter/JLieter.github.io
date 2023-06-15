async function toggleDropdownDinner(element) {
    // Display Dropdown
    const dropdown = document.getElementById('dinner');
    dropdown.style.display = 'block';
    const otherdropdown = document.getElementById('drink');
    const dropdownSelection = document.getElementById('drinks')
    dropdownSelection.value = 'none'
    otherdropdown.style.display =  'none';

    // Display Header
    const header = document.getElementById('dinnerHeader');
    header.style.display = 'block';
    const otherheader = document.getElementById('drinkHeader');
    otherheader.style.display =  'none';

    // Toggle off other Description
    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach(function(description) {
        description.style.display = "none";
    });

    // Button Indicator
    element.className = "btn btn-success"
    await new Promise(r => setTimeout(r, 250));
    element.className = "btn btn-danger"
  }

async function toggleDropdownDrinks(element) {
    // Display Dropdown
    const dropdown = document.getElementById('drink');
    dropdown.style.display = 'block';
    const otherdropdown = document.getElementById('dinner');
    const dropdownSelection = document.getElementById('dinners')
    dropdownSelection.value = 'none'
    otherdropdown.style.display = 'none';
    
    // Display Header
    const header = document.getElementById('drinkHeader');
    header.style.display = 'block';
    const otherheader = document.getElementById('dinnerHeader');
    otherheader.style.display =  'none';    

    // Toggle off other Description
    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach(function(description) {
        description.style.display = "none";
    });

    // Button Indicator
    element.className = "btn btn-success"
    await new Promise(r => setTimeout(r, 250));
    element.className = "btn btn-info"
  }

document.addEventListener("DOMContentLoaded", function() {

    const dropdown = document.getElementById("dinners");
    const descriptions = document.querySelectorAll(".description");

    dropdown.addEventListener("change", function() {
        const selectedOption = dropdown.value;

        descriptions.forEach(function(description) {
            description.style.display = "none";
        });

        if (selectedOption) {
            const selectedDescription = document.getElementById(`description-${selectedOption}`);
            selectedDescription.style.display = "block";
        }
    })
});


document.addEventListener("DOMContentLoaded", function() {

    const dropdown = document.getElementById("drinks");
    const descriptions = document.querySelectorAll(".description");

    dropdown.addEventListener("change", function() {
        const selectedOption = dropdown.value;

        descriptions.forEach(function(description) {
            description.style.display = "none";
        });

        if (selectedOption) {
            const selectedDescription = document.getElementById(`description-${selectedOption}`);
            selectedDescription.style.display = "block";
        }
    })
});