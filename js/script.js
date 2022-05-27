let chargesTicket = [35000, 30000, 3000, 1000, 3500, 1500];
const specName = document.querySelector("#name");
const stand = document.querySelector("#stand");
const floor = document.querySelector("#floor");
const charges = document.querySelector("#charges");
const email = document.querySelector("#email");
const confirmEmail = document.querySelector("#confirmEmail");
const iplForm = document.querySelector("#iplForm");
const change = document.querySelector`("#changes");

change.addEventListener("change", (event) => {
  var selectedStand = stand.options[stand.selectedIndex].text;
  console.log(selectedStand);
  var selectedFloor = floor.value;
  if (stand.value == "North West Stand`" || stand.value == "East Stand") {
    document.querySelector("#floor").removeAttribute("disabled");
  }
  if (selectedStand == "Platinum Gallery") {
    charges.value = chargesTicket[0];
  } else if (selectedStand == "Super Hospitality Stand")
    charges.value = chargesTicket[1];
  else if (
    selectedStand == "North West Stand" &&
    selectedFloor == "First Floor"
  ) {
    charges.value = chargesTicket[2];
  } else if (
    selectedStand == "North West Stand" &&
    selectedFloor == "Second Floor"
  ) {
    charges.value = chargesTicket[3];
  } else if (selectedStand == "East Stand" && selectedFloor == "First Floor") {
    charges.value = chargesTicket[4];
  } else if (selectedStand == "East Stand" && selectedFloor == "Second Floor") {
    charges.value = chargesTicket[5];
  }
});

iplForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value != confirmEmail.value) {
    alert("email is not matching check again");
  } else if (specName.value != "" && email.value != "" && confirmEmail.value != "" && floor.value != "" && stand.value != "") 
  alert("All data entered correctly");
});

