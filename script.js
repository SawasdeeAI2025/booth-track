function saveEmail() {
  const email = document.getElementById("email").value.trim();
  if (!email || !email.includes("@")) {
    alert("Please enter a valid Unilever email.");
    return;
  }
  localStorage.setItem("userEmail", email);
  document.getElementById("checkin-section").style.display = "none";
  document.getElementById("booth-section").style.display = "block";
}

function submitBooth() {
  const email = localStorage.getItem("userEmail");
  const booth = document.getElementById("booth").value;

  if (!booth) {
    alert("Please select a booth.");
    return;
  }

  fetch("https://booth-backend-i2um.onrender.com/record", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: email, bu: "Unilever", boothID: booth })
  })
  .then(res => res.json())
  .then(data => {
    const count = data.booths_collected;
    let msg = `✅ Booth recorded. You have visited ${count} booth(s).`;
    if (count >= 2) msg += " 🎉 You're eligible for the Lucky Draw!";
    document.getElementById("status").innerText = msg;
  })
  .catch(err => {
    document.getElementById("status").innerText = "❌ Error submitting booth.";
  });

}
