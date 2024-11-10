// Access DOM elements
const sendButton = document.getElementById('sendMessage');
const userMessageInput = document.getElementById('userMessage');
const chatbox = document.getElementById('chatbox');

// Simulated dosha-based responses (you can improve this with more NLP logic)
const doshaData = {
    'kapha': {
        message: 'You are likely experiencing a Kapha imbalance. I suggest a light diet with warm and spicy foods to balance your Kapha.',
        yoga: 'Try yoga poses like Downward Dog, Cobra Pose, and Sun Salutations to stimulate energy flow.',
        doctors: ['Dr. Anand, Naturopath, Bangalore', 'Dr. Priya, Naturopath, Delhi']
    },
    'pitta': {
        message: 'You seem to have a Pitta imbalance. Cooling foods like cucumbers, melons, and mint can help balance your Pitta.',
        yoga: 'Try cooling yoga poses like Child\'s Pose, Forward Fold, and Seated Meditation to calm your system.',
        doctors: ['Dr. Ramesh, Naturopath, Chennai', 'Dr. Meena, Naturopath, Mumbai']
    },
    'vata': {
        message: 'Vata imbalances can make you feel anxious or restless. A warm, grounding diet with soups and grains will help.',
        yoga: 'Grounding yoga poses like Tree Pose, Warrior I & II, and Bridge Pose can help balance Vata.',
        doctors: ['Dr. Suraj, Naturopath, Pune', 'Dr. Sita, Naturopath, Kolkata']
    }
};

// Handle user input and provide response
sendButton.addEventListener('click', function() {
    const userMessage = userMessageInput.value.trim();
    if (userMessage) {
        // Display user message
        addMessage(userMessage, 'user');
        // Process user message and respond
        processUserMessage(userMessage);
    }
    userMessageInput.value = ''; // Clear input field
});

// Function to display messages in the chatbox
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    
    if (sender === 'user') {
        messageElement.classList.add('user-message');
        messageElement.innerHTML = `<p>${message}</p>`;
    } else {
        messageElement.classList.add('bot-message');
        messageElement.innerHTML = `<p>${message}</p>`;
    }
    
    // Append the message to the chatbox and auto-scroll to the latest message
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// NLP-based response logic (simplified example)
function processUserMessage(userMessage) {
    const normalizedMessage = userMessage.toLowerCase();

    // Basic keyword matching for doshas
    if (normalizedMessage.includes("kapha")) {
        respondWithDoshaData('kapha');
    } else if (normalizedMessage.includes("pitta")) {
        respondWithDoshaData('pitta');
    } else if (normalizedMessage.includes("vata")) {
        respondWithDoshaData('vata');
    } else if (normalizedMessage.includes("diet")) {
        // Respond with general diet advice
        addMessage("I recommend a balanced Ayurvedic diet. Let me know your dosha, and I can provide more personalized advice.", 'bot');
    } else if (normalizedMessage.includes("yoga")) {
        // Respond with general yoga advice
        addMessage("Yoga can be a great way to balance your doshas! Let me know your dosha type to get personalized asanas.", 'bot');
    } else if (normalizedMessage.includes("doctor")) {
        // Respond with doctor suggestions
        addMessage("I can suggest nearby naturopathy doctors. Please let me know your location or city for recommendations.", 'bot');
    } else {
        addMessage("I'm here to help! Please ask me about your dosha, yoga, diet, or any health-related queries.", 'bot');
    }
}

// Function to respond with dosha-specific recommendations
function respondWithDoshaData(dosha) {
    const data = doshaData[dosha];

    if (data) {
        addMessage(data.message, 'bot');
        addMessage(`Yoga recommendations: ${data.yoga}`, 'bot');
        addMessage(`Nearby Naturopathy Doctors: ${data.doctors.join(', ')}`, 'bot');
    } else {
        addMessage("I'm sorry, I couldn't recognize your dosha. Please try again.", 'bot');
    }
}
