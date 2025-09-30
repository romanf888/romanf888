// --- NAVIGATION (Mobile et lien actif) ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            });
            burger.classList.toggle('toggle');
        });
    }
}

const setActiveLink = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Initialisation de la navigation
navSlide();
setActiveLink();


// --- LOGIQUE SPÉCIFIQUE À LA PAGE CRITIQUES ---
document.addEventListener('DOMContentLoaded', () => {
    const gameLibrary = document.getElementById('game-library');
    if (!gameLibrary) return; // Si on n'est pas sur la page critiques, on arrête tout.

    // --- GESTION DE LA POPUP ---
    const modal = document.getElementById('review-modal');
    const modalCloseBtn = document.querySelector('.modal-close');

    gameLibrary.addEventListener('click', (event) => {
        const gameCover = event.target.closest('.game-cover');
        if (gameCover) {
            const data = gameCover.dataset;
            document.getElementById('modal-img').src = data.imageSrc;
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-score').textContent = `${data.score}/20`;
            document.getElementById('modal-stars').textContent = data.stars;
            document.getElementById('modal-verdict').textContent = data.verdict;
            
            // Affichage de l'éditeur et du stockage
            document.getElementById('modal-publisher').textContent = data.publisher;
            document.getElementById('modal-storage').textContent = data.storage;

            const tagsContainer = document.getElementById('modal-tags');
            tagsContainer.innerHTML = '';
            if (data.tagsPlatform) {
                data.tagsPlatform.split(',').forEach(tagText => {
                    const span = document.createElement('span');
                    span.className = 'tag tag-platform';
                    span.textContent = tagText.trim();
                    tagsContainer.appendChild(span);
                });
            }
            if (data.tagsGenre) {
                 data.tagsGenre.split(',').forEach(tagText => {
                    const span = document.createElement('span');
                    span.className = 'tag tag-genre';
                    span.textContent = tagText.trim();
                    tagsContainer.appendChild(span);
                });
            }

            document.getElementById('modal-progress-graphismes').style.width = `${data.criteriaGraphismes}%`;
            document.getElementById('modal-progress-gameplay').style.width = `${data.criteriaGameplay}%`;
            document.getElementById('modal-progress-bandeson').style.width = `${data.criteriaBandeson}%`;
            document.getElementById('modal-progress-dureevie').style.width = `${data.criteriaDureevie}%`;

            modal.classList.add('visible');
        }
    });
    
    const closeModal = () => modal.classList.remove('visible');
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- GESTION DE LA RECHERCHE ---
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const allGames = document.querySelectorAll('.game-cover');

        allGames.forEach(game => {
            const title = game.dataset.title.toLowerCase();
            if (title.includes(searchTerm)) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    });

    // --- GESTION DU TRI ---
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        const gamesArray = Array.from(gameLibrary.querySelectorAll('.game-cover'));

        gamesArray.sort((a, b) => {
            switch (sortBy) {
                case 'score-desc':
                    return b.dataset.score - a.dataset.score;
                case 'score-asc':
                    return a.dataset.score - b.dataset.score;
                case 'alpha-asc':
                    return a.dataset.title.localeCompare(b.dataset.title);
                default:
                    return 0; 
            }
        });

        gameLibrary.innerHTML = '';
        gamesArray.forEach(game => gameLibrary.appendChild(game));
    });
});

