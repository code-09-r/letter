document.addEventListener("DOMContentLoaded", function() {
    var recipientName = prompt("Please enter your name:");
    if (recipientName) {
        document.getElementById("recipientName").textContent = recipientName;
    }
});
