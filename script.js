// Show/Hide Contact Modal
function showModal() {
    console.log('Opening contact modal');
    document.getElementById('contactModal').style.display = 'flex';
}

// Close modal when clicking outside
document.getElementById('contactModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('contactModal')) {
        console.log('Closing contact modal');
        document.getElementById('contactModal').style.display = 'none';
        document.getElementById('contactForm').reset();
    }
});

// Form Validation
function validateForm(event) {
    event.preventDefault();
    console.log('Form submission triggered');
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
        console.log('Validation failed: Name is empty');
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
        console.log('Validation failed: Invalid email');
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
        console.log('Validation failed: Message is empty');
    }

    if (isValid) {
        console.log('Form validated successfully');
        alert('Message submitted successfully! Thank you for your input!');
        document.getElementById('contactForm').reset();
        document.getElementById('contactModal').style.display = 'none';
    }
    return isValid;
}

// Attach form validation to submit event
try {
    document.getElementById('contactForm').addEventListener('submit', validateForm);
    console.log('Form submit event listener attached');
} catch (error) {
    console.error('Failed to attach form submit listener:', error);
}

// Idea Suggestions Functionality
function addIdea() {
    const ideaInput = document.getElementById('ideaInput');
    const idea = ideaInput.value.trim();
    if (!idea) {
        alert('Please enter an idea!');
        return;
    }

    const ideaList = document.getElementById('ideaList');
    const li = document.createElement('li');
    li.textContent = idea;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    ideaList.appendChild(li);
    ideaInput.value = '';
}

// Image Gallery Functionality
document.getElementById('imageInput').addEventListener('change', (event) => {
    const files = event.target.files;
    const galleryGrid = document.getElementById('galleryGrid');

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.onclick = () => {
                console.log('Opening fullscreen image');
                const fullscreenModal = document.getElementById('fullscreenModal');
                const fullscreenImage = document.getElementById('fullscreenImage');
                fullscreenImage.src = e.target.result;
                fullscreenModal.style.display = 'flex';
            };

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.onclick = () => div.remove();

            div.appendChild(img);
            div.appendChild(deleteBtn);
            galleryGrid.appendChild(div);
        };
        reader.readAsDataURL(file);
    }
    event.target.value = '';
});

// Fullscreen Image Modal Close
document.getElementById('closeFullscreen').addEventListener('click', () => {
    console.log('Closing fullscreen image');
    document.getElementById('fullscreenModal').style.display = 'none';
});

// Close fullscreen modal when clicking outside the image
document.getElementById('fullscreenModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('fullscreenModal')) {
        console.log('Closing fullscreen image via background click');
        document.getElementById('fullscreenModal').style.display = 'none';
    }
});