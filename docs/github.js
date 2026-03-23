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
        
        // Create the repository item HTML
        listItem.innerHTML = `
            <a href="${repo.html_url}" class="repo-link" target="_blank" rel="noopener noreferrer">
                ${repo.name}
            </a>
            <span class="repo-description">
                → ${repo.description || 'No description available'} • Updated ${formattedDate}
            </span>
        `;
        
        repoList.appendChild(listItem);
    });
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
