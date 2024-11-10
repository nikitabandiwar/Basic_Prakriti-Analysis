document.getElementById('start-scan').addEventListener('click', function() {
    // Start the camera to scan the pulse
    startCamera();
});

function startCamera() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const resultContainer = document.getElementById('result-container');

    // Prompt the user for camera access
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();

            // Show result container after scanning
            setTimeout(function() {
                displayResults();  // Simulate results after a delay (e.g., 5 seconds for pulse scan)
            }, 5000);  // Simulate 5 seconds of pulse scanning
        })
        .catch(function(err) {
            alert("Camera access denied or not available.");
        });
}

function displayResults() {
    const resultContainer = document.getElementById('result-container');
    const prakritiType = document.getElementById('prakriti-type');
    const prakritiImage = document.getElementById('prakriti-image');
    const prakritiDescription = document.getElementById('prakriti-description');

    // Example result - Ideally, pulse data from the PPG scan will classify the prakriti
    prakritiType.innerText = 'Kapha';  // Example result
    prakritiImage.src = 'https://www.srisritattvausa.com/cdn/shop/articles/unnamed_21.png?v=1691742421';  // Example image for Kapha
    prakritiDescription.innerText = 'Kapha is associated with earth and water elements. You tend to be grounded, calm, and slow. Your body is sturdy, and your mind is stable.';

    // Show the result container
    resultContainer.style.display = 'block';

    // Hide the video element (simulate the end of the scan)
    document.getElementById('video').style.display = 'none';
    document.getElementById('start-scan').style.display = 'none';  // Hide the scan button
}

