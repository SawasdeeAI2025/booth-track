function saveEmail() {
  const prefix = document.getElementById("emailPrefix").value.trim();

  const email = prefix + "@unilever.com";
  localStorage.setItem("userEmail", email);
  alert("✅ Check-in successful! You can now scan booth QR codes.");
}

document.getElementById("emailPrefix").addEventListener("input", () => {
  const prefix = document.getElementById("emailPrefix").value.trim();
  document.getElementById("previewEmail").innerText = prefix ? prefix + "@unilever.com" : "";

});


