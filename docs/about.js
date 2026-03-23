// About page data and rendering functionality
document.addEventListener('DOMContentLoaded', function() {
    const aboutTab = document.getElementById('about');
    
    if (aboutTab) {
        // Load about data
        loadAboutData();
    }
});

function loadAboutData() {
    fetch('about.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            displayAboutData(data);
        })
        .catch(error => {
            console.error('Error loading about data:', error);
            // Fallback to hardcoded data if YAML loading fails
            const fallbackData = [
                { name: 'Kaíque Kandy Koga' },
                { interests: 'Distributed Systems and AI engineering' }
            ];
            displayAboutData(fallbackData);
        });
}

function displayAboutData(data) {
    const aboutTab = document.getElementById('about');
    
    if (!aboutTab) return;
    
    // Clear existing content
    aboutTab.innerHTML = '';
    
    // Create about content structure
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';
    
    // Add title
    const title = document.createElement('h2');
    title.textContent = 'About Me';
    aboutContent.appendChild(title);
    
    // Add personal info section
    const personalInfo = document.createElement('div');
    personalInfo.className = 'personal-info';
    
    // Find name from data
    const nameEntry = data.find(item => item.name);
    if (nameEntry) {
        const name = document.createElement('p');
        name.className = 'name';
        name.innerHTML = `<strong>Name:</strong> ${nameEntry.name}`;
        personalInfo.appendChild(name);
    }
    
    // Find interests from data
    const interestsEntry = data.find(item => item.interests);
    if (interestsEntry) {
        const interests = document.createElement('p');
        interests.className = 'interests';
        interests.innerHTML = `<strong>Interests:</strong> ${interestsEntry.interests}`;
        personalInfo.appendChild(interests);
    }
    
    aboutContent.appendChild(personalInfo);
    
    // Add bio section
    const bioSection = document.createElement('div');
    bioSection.className = 'bio-section';
    
    const bioTitle = document.createElement('h3');
    bioTitle.textContent = 'Professional Summary';
    bioSection.appendChild(bioTitle);
    
    const bioText = document.createElement('p');
    bioText.className = 'bio-text';
    bioText.textContent = 'I am a software engineer with a primary focus on distributed systems, and I am currently expanding my skill set in AI engineering.';
    bioSection.appendChild(bioText);
    
    aboutContent.appendChild(bioSection);
    
    // Add skills section
    const skillsSection = document.createElement('div');
    skillsSection.className = 'skills-section';
    
    const skillsTitle = document.createElement('h3');
    skillsTitle.textContent = 'Areas of Expertise';
    skillsSection.appendChild(skillsTitle);
    
    const skillsList = document.createElement('ul');
    skillsList.className = 'skills-list';
    
    const skills = ['Distributed Systems', 'AI Engineering', 'Software Architecture', 'Cloud Technologies'];
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    
    skillsSection.appendChild(skillsList);
    aboutContent.appendChild(skillsSection);
    
    aboutTab.appendChild(aboutContent);
}