// ===== SEARCH.JS - SISTEMA DE BUSCA =====

class SearchSystem {
    constructor() {
        this.searchInputs = document.querySelectorAll('.search-box');
        this.resultsContainer = null;
        this.init();
    }
    
    init() {
        this.createResultsContainer();
        
        this.searchInputs.forEach(input => {
            input.addEventListener('input', (e) => this.handleSearch(e));
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.submitSearch(e.target.value);
                }
            });
        });
        
        // Fechar resultados ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideResults();
            }
        });
    }
    
    createResultsContainer() {
        if (!document.getElementById('search-results-global')) {
            const container = document.createElement('div');
            container.id = 'search-results-global';
            container.className = 'search-results-global';
            document.body.appendChild(container);
            this.resultsContainer = container;
        } else {
            this.resultsContainer = document.getElementById('search-results-global');
        }
    }
    
    handleSearch(event) {
        const term = event.target.value.trim();
        
        if (term.length < 2) {
            this.hideResults();
            return;
        }
        
        // Buscar livros
        const results = this.searchBooks(term);
        
        // Mostrar resultados
        this.showResults(results, term, event.target);
    }
    
    searchBooks(term) {
        term = term.toLowerCase();
        const lang = getCurrentLanguage();
        const results = [];
        
        for (const category in booksDB[lang]) {
            const found = booksDB[lang][category].filter(book => {
                const title = (book.titulo || book.title || '').toLowerCase();
                const author = (book.autor || book.author || '').toLowerCase();
                return title.includes(term) || author.includes(term);
            }).slice(0, 5); // Limitar a 5 por categoria
            
            results.push(...found);
        }
        
        return results.slice(0, 10); // Limitar a 10 resultados no total
    }
    
    showResults(results, term, inputElement) {
        if (!this.resultsContainer) return;
        
        const lang = getCurrentLanguage();
        const rect = inputElement.getBoundingClientRect();
        
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="search-no-results">
                    ❌ Nenhum resultado para "${term}"
                </div>
            `;
        } else {
            const resultsHTML = results.map(book => {
                const title = book.titulo || book.title;
                const author = book.autor || book.author;
                const category = book.categoria || book.category;
                const icon = book.icone || book.icono || book.icon || '📚';
                
                return `
                    <a href="livro.html?id=${book.id}" class="search-result-item">
                        <span class="result-icon">${icon}</span>
                        <div class="result-info">
                            <span class="result-title">${title}</span>
                            <span class="result-author">${author}</span>
                            <span class="result-category">${category}</span>
                        </div>
                    </a>
                `;
            }).join('');
            
            this.resultsContainer.innerHTML = `
                <div class="search-header">
                    <span>🔍 Resultados para "${term}"</span>
                    <span class="search-count">${results.length} ${lang === 'pt' ? 'livros' : lang === 'es' ? 'libros' : 'books'}</span>
                </div>
                ${resultsHTML}
                <div class="search-footer">
                    <a href="search.html?q=${encodeURIComponent(term)}" class="search-view-all">
                        ${lang === 'pt' ? 'Ver todos os resultados' : lang === 'es' ? 'Ver todos los resultados' : 'View all results'} →
                    </a>
                </div>
            `;
        }
        
        // Posicionar resultados
        this.resultsContainer.style.top = (rect.bottom + window.scrollY + 10) + 'px';
        this.resultsContainer.style.left = (rect.left + window.scrollX) + 'px';
        this.resultsContainer.style.width = rect.width + 'px';
        this.resultsContainer.style.display = 'block';
    }
    
    hideResults() {
        if (this.resultsContainer) {
            this.resultsContainer.style.display = 'none';
        }
    }
    
    submitSearch(term) {
        if (term.trim().length > 0) {
            const lang = getCurrentLanguage();
            window.location.href = `/${lang}/search.html?q=${encodeURIComponent(term)}`;
        }
    }
}

// Adicionar estilos CSS
const searchStyles = document.createElement('style');
searchStyles.textContent = `
    .search-results-global {
        position: absolute;
        background: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        max-width: 400px;
        width: 100%;
        z-index: 1001;
        max-height: 400px;
        overflow-y: auto;
        display: none;
    }
    
    .search-header {
        padding: 15px;
        background: #f8f9fa;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        color: var(--primary-color);
    }
    
    .search-count {
        color: var(--accent-color);
    }
    
    .search-result-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid #eee;
        text-decoration: none;
        color: inherit;
        transition: background 0.3s;
    }
    
    .search-result-item:hover {
        background: #f8f9fa;
    }
    
    .result-icon {
        font-size: 2rem;
    }
    
    .result-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    
    .result-title {
        font-weight: bold;
        color: var(--primary-color);
    }
    
    .result-author {
        font-size: 0.85rem;
        color: #666;
    }
    
    .result-category {
        font-size: 0.75rem;
        background: #f0f0f0;
        padding: 2px 8px;
        border-radius: 20px;
        align-self: flex-start;
    }
    
    .search-no-results {
        padding: 30px;
        text-align: center;
        color: #666;
    }
    
    .search-footer {
        padding: 10px;
        text-align: center;
        border-top: 1px solid #eee;
    }
    
    .search-view-all {
        color: var(--primary-color);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .search-view-all:hover {
        color: var(--accent-color);
    }
    
    /* Modo noturno */
    body.dark-mode .search-results-global {
        background: #16213e;
        border: 1px solid #0f3460;
    }
    
    body.dark-mode .search-header {
        background: #0f3460;
        color: #eaeaea;
        border-bottom-color: #1a1a2e;
    }
    
    body.dark-mode .search-result-item {
        border-bottom-color: #0f3460;
    }
    
    body.dark-mode .search-result-item:hover {
        background: #0f3460;
    }
    
    body.dark-mode .result-title {
        color: #4ecdc4;
    }
    
    body.dark-mode .result-author {
        color: #a9a9a9;
    }
    
    body.dark-mode .result-category {
        background: #0f3460;
        color: #a9a9a9;
    }
    
    body.dark-mode .search-footer {
        border-top-color: #0f3460;
    }
`;

document.head.appendChild(searchStyles);

// Inicializar busca
document.addEventListener('DOMContentLoaded', function() {
    if (typeof booksDB !== 'undefined') {
        window.searchSystem = new SearchSystem();
    }
});