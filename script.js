document.getElementById('showSentenceBtn').addEventListener('click', function() {
    const sentence = document.getElementById('sentence');
    sentence.classList.remove('hidden');
    sentence.classList.add('visible');

    // Add a bouncing effect for fun
    sentence.style.animation = 'bounce 1s infinite';
    
    // Optional: Hide sentence after 5 seconds
    setTimeout(() => {
        sentence.classList.remove('visible');
        sentence.classList.add('hidden');
    }, 5000);
});
document.getElementById("showSentenceBtn").addEventListener("click", function() {
    document.getElementById("sentence").classList.remove("hidden"); // إظهار الجملة
    this.style.display = "none"; // إخفاء الزر
});
document.getElementById("showSentenceBtn").addEventListener("click", function() {
    document.getElementById("sentence").classList.remove("hidden"); // Show the sentence
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/47/4f/db/474fdb9eb6797e9f5f72597d73df9137.jpg')"; // Change background
    document.body.style.backgroundSize = "cover"; // Make sure the image covers the screen
    document.body.style.backgroundPosition = "center"; // Center the image
    this.style.display = "none"; // Hide the button
});
