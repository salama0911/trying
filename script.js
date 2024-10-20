function showNextImage() {
    // Hide the first image and button
    document.getElementById('image1').classList.add('hidden');

    // Show the second image
    document.getElementById('image2').classList.remove('hidden');

    // Set a delay of 3 seconds, then show the third image
    setTimeout(() => {
        document.getElementById('image2').classList.add('hidden');
        document.getElementById('image3').classList.remove('hidden');
    }, 3000);  // 3 seconds delay
}