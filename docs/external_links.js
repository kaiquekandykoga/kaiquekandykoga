// External Links data and rendering functionality
document.addEventListener('DOMContentLoaded', function() {
    const externalLinksTab = document.getElementById('external-links');
    const repoList = externalLinksTab ? externalLinksTab.querySelector('.repo-list') : null;
    
    if (repoList) {
        // Clear existing static content
        repoList.innerHTML = '';
        
        // Load external links data
        loadExternalLinks();
    }
});

function loadExternalLinks() {
    const externalLinksData = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kandy-koga',
            summary: '',
            description: 'Professional networking platform where you can connect with industry professionals, showcase your skills, and explore career opportunities.',
            icon: 'linkedin',
            category: 'Professional networking'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/kaiquekandykoga',
            summary: '',
            description: 'Leading software development platform hosting millions of repositories, offering version control, collaboration tools, and project management features for developers worldwide.',
            icon: 'github',
            category: 'Software development'
        },
        {
            name: 'GitLab',
            url: 'https://gitlab.com/kaiquekandykoga',
            summary: '',
            description: 'Complete DevOps platform providing source code management, CI/CD pipelines, and project management tools to streamline software development and deployment processes.',
            icon: 'gitlab',
            category: 'Software development'
        },
        {
            name: 'Codeberg',
            url: 'https://codeberg.org/kaiquekandykoga',
            summary: '',
            description: 'Free and open-source software development platform promoting freedom, privacy, and community-driven development without corporate influence or tracking.',
            icon: 'codeberg',
            category: 'Software development'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/kaiquekandykoga',
            summary: '',
            description: 'Popular social media platform for sharing photos and videos, connecting with friends, and discovering visual content from around the world.',
            icon: 'instagram',
            category: 'Social media'
        },
        {
            name: 'Hugging Face',
            url: 'https://huggingface.co/kaiquekandykoga',
            summary: '',
            description: 'Leading platform for machine learning and artificial intelligence, hosting models, datasets, and providing tools for the AI community to collaborate and share resources.',
            icon: 'huggingface',
            category: 'Artificial intelligence'
        }
    ];
    
    displayExternalLinks(externalLinksData);
}

function displayExternalLinks(links) {
    const repoList = document.querySelector('#external-links .repo-list');
    
    // Update the External Links tab count
    const externalLinksCountElement = document.getElementById('external-links-count');
    if (externalLinksCountElement) {
        externalLinksCountElement.textContent = links.length;
    }
    
    if (links.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'repo-list-item';
        emptyItem.innerHTML = '<span class="repo-description">No external links found.</span>';
        repoList.appendChild(emptyItem);
        return;
    }
    
    links.forEach(link => {
        const listItem = document.createElement('li');
        
        // Get icon SVG based on link type
        const iconSvg = getIconSvg(link.icon);
        
        // Create the external link item HTML with expandable content
        listItem.innerHTML = `
            <a href="#" class="repo-link expandable-link" data-url="${link.url}" data-description="${link.description}">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                    ${iconSvg}
                    ${link.name}
                </span>
            </a>
            <span class="repo-description">
                → ${link.category}
            </span>
            <div class="expandable-content" style="display: none;">
                <p><strong>Link Details:</strong></p>
                <p>${link.description}</p>
                <p><strong>Category:</strong> ${link.category}</p>
                <a href="${link.url}" class="open-link" target="_blank" rel="noopener noreferrer">Open ${link.name} in new tab →</a>
            </div>
        `;
        
        repoList.appendChild(listItem);
    });
    
    // Add event listeners for the new expandable links
    addExpandableListeners();
}

function getIconSvg(iconType) {
    switch (iconType) {
        case 'linkedin':
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>`;
        
        case 'github':
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>`;
        
        case 'gitlab':
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 2l-2.5 2.5L7 7l2.5 2.5L12 12l2.5-2.5L17 7l-2.5-2.5L12 2zm0 20l2.5-2.5L17 17l-2.5-2.5L12 12l-2.5 2.5L7 17l2.5 2.5L12 22z"/>
                    </svg>`;
        
        case 'codeberg':
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 2l-2.5 2.5L7 7l2.5 2.5L12 12l2.5-2.5L17 7l-2.5-2.5L12 2zm0 20l2.5-2.5L17 17l-2.5-2.5L12 12l-2.5 2.5L7 17l2.5 2.5L12 22z"/>
                    </svg>`;
        
        case 'instagram':
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.163 6.162 6.163 6.162-2.76 6.162-6.163c0-3.403-2.76-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>`;
        
        case 'huggingface':
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                    </svg>`;
        
        default:
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                        <path d="M12 2l-2.5 2.5L7 7l2.5 2.5L12 12l2.5-2.5L17 7l-2.5-2.5L12 2zm0 20l2.5-2.5L17 17l-2.5-2.5L12 12l-2.5 2.5L7 17l2.5 2.5L12 22z"/>
                    </svg>`;
    }
}

function addExpandableListeners() {
    const listItems = document.querySelectorAll('#external-links .repo-list li');
    
    listItems.forEach(item => {
        // Remove existing listeners to avoid duplicates
        item.removeEventListener('click', handleListItemClick);
        item.addEventListener('click', handleListItemClick);
    });
}

function handleListItemClick(e) {
    // Find the expandable content within the same list item
    const content = this.querySelector('.expandable-content');
    
    // If clicking on the open-link button, let it work normally
    if (e.target.classList.contains('open-link')) {
        return;
    }
    
    // Toggle the visibility with animation
    if (content.classList.contains('collapsing') || content.style.display === 'none' || !content.style.display) {
        // Opening animation
        content.style.display = 'block';
        content.classList.remove('collapsing');
        content.style.maxHeight = '200px';
        content.style.opacity = '1';
        
        // Update the open link href to match the data-url from the expandable link
        const expandableLink = this.querySelector('.expandable-link');
        const openLink = content.querySelector('.open-link');
        if (openLink && expandableLink && expandableLink.dataset.url) {
            openLink.href = expandableLink.dataset.url;
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
