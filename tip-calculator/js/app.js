// calculateTip function
function calculateTip() {

  // store data of the inputs
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var totalPeople = document.getElementById('totalPeople').value;

  // Validation
  if (billAmount === "" || serviceQuality === 0) {
    return alert("Please enter some values to calculate tip");
  }

  // Check to see if this input is empty or less than or equal to 1
  if (totalPeople === "" || totalPeople <= 1) {
    totalPeople = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  // Actual calculation for tip
  var total = (billAmount * serviceQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // Display the tip
  document.getElementById('totalTip').style.display = "block";
  document.getElementById('tip').innerHTML = total;
}

// hide the tip amount on load
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

// clicking the button calls our custom function
document.getElementById('calculate').onclick = function() {
  calculateTip();
};
