function submitForm(event) {
    event.preventDefault();
    document.getElementById("response").innerHTML = "✅ Your message has been sent (simulated)!";
    showResponse()
}
