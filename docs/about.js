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
    
    // Add name section
    const nameSection = document.createElement('div');
    nameSection.className = 'personal-info';
    
    const nameTitle = document.createElement('h3');
    nameTitle.textContent = 'Name';
    nameSection.appendChild(nameTitle);
    
    const nameText = document.createElement('p');
    nameText.className = 'personal-info-text';
    
    const nameEntry = data.find(item => item.name);
    if (nameEntry) {
        nameText.textContent = nameEntry.name;
    } else {
        nameText.textContent = 'Name not available';
    }
    
    nameSection.appendChild(nameText);
    aboutContent.appendChild(nameSection);
    
    // Add interests section
    const interestsSection = document.createElement('div');
    interestsSection.className = 'personal-info';
    
    const interestsTitle = document.createElement('h3');
    interestsTitle.textContent = 'Interests';
    interestsSection.appendChild(interestsTitle);
    
    const interestsText = document.createElement('p');
    interestsText.className = 'personal-info-text';
    
    const interestsEntry = data.find(item => item.interests);
    if (interestsEntry) {
        interestsText.textContent = interestsEntry.interests;
    } else {
        interestsText.textContent = 'Interests not available';
    }
    
    interestsSection.appendChild(interestsText);
    aboutContent.appendChild(interestsSection);
    
    // Add bio section
    const bioSection = document.createElement('div');
    bioSection.className = 'bio-section';
    
    const bioTitle = document.createElement('h3');
    bioTitle.textContent = 'Professional Summary';
    bioSection.appendChild(bioTitle);
    
    const bioText = document.createElement('p');
    bioText.className = 'bio-text';
    bioText.textContent = 'Software engineer focused on distributed systems, expanding into AI engineering.';
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
    
    const skills = ['Distributed Systems', 'Observability and Application Monitoring', 'System Design', 'Full-Stack Development'];
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    
    skillsSection.appendChild(skillsList);
    aboutContent.appendChild(skillsSection);
    
    aboutTab.appendChild(aboutContent);
}
