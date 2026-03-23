// GitHub API integration for fetching public repositories
document.addEventListener('DOMContentLoaded', function() {
    const projectsTab = document.getElementById('github');
    const repoList = projectsTab ? projectsTab.querySelector('.repo-list') : null;
    
    if (repoList) {
        // Clear existing static content
        repoList.innerHTML = '';
        
        // Add loading indicator
        const loadingItem = document.createElement('li');
        loadingItem.className = 'repo-list-item';
        loadingItem.innerHTML = '<span class="repo-description">Loading repositories...</span>';
        repoList.appendChild(loadingItem);
        
        // Fetch repositories from GitHub API
        fetchRepositories();
    }
});

async function fetchRepositories() {
    const username = 'kaiquekandykoga';
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`;
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const repos = await response.json();
        displayRepositories(repos);
        
    } catch (error) {
        console.error('Error fetching repositories:', error);
        displayError();
    }
}

function displayRepositories(repos) {
    const repoList = document.querySelector('#github .repo-list');
    
    // Clear loading indicator
    repoList.innerHTML = '';
    
    if (repos.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'repo-list-item';
        emptyItem.innerHTML = '<span class="repo-description">No public repositories found.</span>';
        repoList.appendChild(emptyItem);
        return;
    }
    
    repos.forEach(repo => {
        const listItem = document.createElement('li');
        
        // Format the last updated date
        const lastUpdated = repo.pushed_at ? new Date(repo.pushed_at) : null;
        const formattedDate = lastUpdated ? formatDate(lastUpdated) : 'Unknown';
        
        // Create detailed description for expandable content
        const repoDetails = [];
        if (repo.language) {
            repoDetails.push(`Language: ${repo.language}`);
        }
        if (repo.stargazers_count > 0) {
            repoDetails.push(`Stars: ${repo.stargazers_count}`);
        }
        if (repo.forks_count > 0) {
            repoDetails.push(`Forks: ${repo.forks_count}`);
        }
        if (repo.license) {
            repoDetails.push(`License: ${repo.license.name}`);
        }
        
        const detailsText = repoDetails.length > 0 ? repoDetails.join(' • ') : 'No additional details available';
        
        // Create the repository item HTML with expandable content
        listItem.innerHTML = `
            <a href="#" class="repo-link expandable-link" data-url="${repo.html_url}" data-description="${repo.description || 'No description available'}">
                ${repo.name}
            </a>
            <span class="repo-description">
                → ${repo.description || 'No description available'} • Updated ${formattedDate}
            </span>
            <div class="expandable-content" style="display: none;">
                <p><strong>Repository Details:</strong></p>
                <p>${repo.description || 'No description available'}</p>
                <p><strong>Additional Info:</strong> ${detailsText}</p>
                <a href="${repo.html_url}" class="open-link" target="_blank" rel="noopener noreferrer">Open Repository in new tab →</a>
            </div>
        `;
        
        repoList.appendChild(listItem);
    });
    
    // Add event listeners for the new expandable links
    addExpandableListeners();
}

function addExpandableListeners() {
    const expandableLinks = document.querySelectorAll('#github .expandable-link');
    
    expandableLinks.forEach(link => {
        // Remove existing listeners to avoid duplicates
        link.removeEventListener('click', handleExpandableClick);
        link.addEventListener('click', handleExpandableClick);
    });
}

function handleExpandableClick(e) {
    e.preventDefault();
    
    // Find the expandable content within the same list item
    const listItem = this.closest('li');
    const content = listItem.querySelector('.expandable-content');
    
    // Toggle the visibility with animation
    if (content.classList.contains('collapsing') || content.style.display === 'none' || !content.style.display) {
        // Opening animation
        content.style.display = 'block';
        content.classList.remove('collapsing');
        content.style.maxHeight = '200px';
        content.style.opacity = '1';
        
        // Update the open link href to match the data-url
        const openLink = content.querySelector('.open-link');
        if (openLink && this.dataset.url) {
            openLink.href = this.dataset.url;
        }
    } else {
        // Closing animation
        content.classList.add('collapsing');
        content.style.opacity = '0';
        content.style.maxHeight = '0';
        
        // Hide content after animation completes
        setTimeout(() => {
            if (content.classList.contains('collapsing')) {
                content.style.display = 'none';
                content.classList.remove('collapsing');
            }
        }, 300); // Match the animation duration
    }
}

function displayError() {
    const repoList = document.querySelector('#github .repo-list');
    repoList.innerHTML = '';
    
    const errorItem = document.createElement('li');
    errorItem.className = 'repo-list-item';
    errorItem.innerHTML = `
        <span class="repo-description">
            Unable to load repositories. Please check your internet connection or try again later.
        </span>
    `;
    repoList.appendChild(errorItem);
}

function formatDate(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / 86400000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffMinutes = Math.floor(diffMs / 60000);
    
    if (diffDays > 0) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffMinutes > 0) {
        return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now';
    }
}
