// ===== PROGRESSO.JS - SALVAR PROGRESSO DE LEITURA =====

class ReadingProgress {
    constructor() {
        this.currentBook = null;
        this.currentPage = 1;
        this.totalPages = 224;
        this.init();
    }
    
    init() {
        this.loadFromURL();
        this.setupEventListeners();
        this.loadSavedProgress();
    }
    
    loadFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const bookId = urlParams.get('id');
        
        if (bookId) {
            this.currentBook = bookId;
        }
    }
    
    setupEventListeners() {
        // Botões de navegação
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousPage());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextPage());
        }
        
        // Botões de fonte
        const increaseFont = document.getElementById('increase-font');
        const decreaseFont = document.getElementById('decrease-font');
        
        if (increaseFont) {
            increaseFont.addEventListener('click', () => this.changeFontSize(2));
        }
        
        if (decreaseFont) {
            decreaseFont.addEventListener('click', () => this.changeFontSize(-2));
        }
        
        // Modo leitura
        const readingMode = document.getElementById('reading-mode');
        if (readingMode) {
            readingMode.addEventListener('click', () => this.toggleReadingMode());
        }
    }
    
    loadSavedProgress() {
        if (!this.currentBook) return;
        
        const saved = localStorage.getItem(`progress_${this.currentBook}`);
        if (saved) {
            this.currentPage = parseInt(saved);
            this.updatePageDisplay();
            
            // Perguntar se quer continuar
            this.askToContinue();
        }
    }
    
    askToContinue() {
        const lang = getCurrentLanguage();
        const message = lang === 'pt' ? `📖 Você parou na página ${this.currentPage}. Continuar de onde parou?` :
                        lang === 'es' ? `📖 Paraste en la página ${this.currentPage}. ¿Continuar desde donde paraste?` :
                        `📖 You stopped at page ${this.currentPage}. Continue from where you left off?`;
        
        if (confirm(message)) {
            this.goToPage(this.currentPage);
        }
    }
    
    saveProgress() {
        if (this.currentBook) {
            localStorage.setItem(`progress_${this.currentBook}`, this.currentPage.toString());
            
            // Atualizar display
            const progressEl = document.getElementById('reader-progress');
            if (progressEl) {
                progressEl.textContent = `Página ${this.currentPage}/${this.totalPages}`;
            }
        }
    }
    
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updatePageDisplay();
            this.saveProgress();
        }
    }
    
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePageDisplay();
            this.saveProgress();
        }
    }
    
    goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.updatePageDisplay();
        }
    }
    
    updatePageDisplay() {
        const pageEl = document.getElementById('current-page');
        const progressEl = document.getElementById('reader-progress');
        
        if (pageEl) {
            pageEl.textContent = `Página ${this.currentPage}`;
        }
        
        if (progressEl) {
            progressEl.textContent = `Página ${this.currentPage}/${this.totalPages}`;
        }
    }
    
    changeFontSize(delta) {
        const content = document.querySelector('.leitor-conteudo');
        if (!content) return;
        
        let currentSize = parseInt(window.getComputedStyle(content).fontSize);
        currentSize += delta;
        
        if (currentSize >= 12 && currentSize <= 24) {
            content.style.fontSize = currentSize + 'px';
            localStorage.setItem('reader_font_size', currentSize.toString());
        }
    }
    
    toggleReadingMode() {
        const content = document.querySelector('.leitor-conteudo');
        if (!content) return;
        
        content.classList.toggle('reading-mode');
        
        const isDark = content.classList.contains('reading-mode');
        localStorage.setItem('reading_mode', isDark ? 'dark' : 'light');
    }
    
    loadReadingMode() {
        const savedMode = localStorage.getItem('reading_mode');
        const savedFontSize = localStorage.getItem('reader_font_size');
        const content = document.querySelector('.leitor-conteudo');
        
        if (content && savedMode === 'dark') {
            content.classList.add('reading-mode');
        }
        
        if (content && savedFontSize) {
            content.style.fontSize = savedFontSize + 'px';
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('leitor') || document.getElementById('reader')) {
        window.readingProgress = new ReadingProgress();
    }
});