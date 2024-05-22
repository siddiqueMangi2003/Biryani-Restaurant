window.onload = function() {
    var now = new Date();
    var hours = now.getHours();
    var greeting;

    if (hours < 12) {
        greeting = "Good Morning! Welcome to Biryani House.";
    } else if (hours < 18) {
        greeting = "Good Afternoon! Enjoy our delicious Biryani.";
    } else {
        greeting = "Good Evening! Have a pleasant dining experience.";
    }

    document.getElementById('greeting').innerText = greeting;
}
