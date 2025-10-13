// booth.js
window.onload = () => {
  const email = localStorage.getItem("userEmail");
  const urlParams = new URLSearchParams(window.location.search);
  const booth = urlParams.get("booth");

  if (!email || !booth) {
    document.getElementById("status").innerText = "❌ Missing email or booth info.";
    return;
  }

  fetch("https://booth-backend-i2um.onrender.com/record", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, boothID })
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "success") {
        let msg = `✅ Booth "${booth}" recorded. You’ve visited ${data.booths_collected} booth(s).`;
        if (data.booths_collected >= 2) msg += " 🎉 You're eligible for the Lucky Draw!";
        document.getElementById("status").innerText = msg;
      } else {
        document.getElementById("status").innerText = "❌ Error: " + data.message;
      }
    })
    .catch(() => {
      document.getElementById("status").innerText = "❌ Failed to connect to server.";
    });

};

