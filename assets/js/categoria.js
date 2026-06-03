// ===== CATEGORIA.JS - CARREGAR LIVROS DA CATEGORIA =====

document.addEventListener('DOMContentLoaded', function() {
    // Detectar idioma
    const lang = getCurrentLanguage();
    
    // Pegar ID da categoria da URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');
    
    if (!categoryId) {
        window.location.href = 'categorias.html';
        return;
    }
    
    // Mapear nomes das categorias por idioma
    const categoryNames = {
        pt: {
            "desenvolvimento-pessoal": "Desenvolvimento Pessoal",
            "negocios": "Negócios",
            "tecnologia": "Tecnologia",
            "financas": "Finanças",
            "saude": "Saúde",
            "educacao": "Educação",
            "literatura": "Literatura",
            "historia": "História",
            "filosofia": "Filosofia",
            "psicologia": "Psicologia",
            "arte": "Arte",
            "ciencia": "Ciência",
            "relacionamentos": "Relacionamentos"
        },
        es: {
            "desarrollo-personal": "Desarrollo Personal",
            "negocios": "Negocios",
            "tecnologia": "Tecnología",
            "finanzas": "Finanzas",
            "salud": "Salud",
            "educacion": "Educación",
            "literatura": "Literatura",
            "historia": "Historia",
            "filosofia": "Filosofía",
            "psicologia": "Psicología",
            "arte": "Arte",
            "ciencia": "Ciencia",
            "relaciones": "Relaciones"
        },
        en: {
            "personal-development": "Personal Development",
            "business": "Business",
            "technology": "Technology",
            "finance": "Finance",
            "health": "Health",
            "education": "Education",
            "literature": "Literature",
            "history": "History",
            "philosophy": "Philosophy",
            "psychology": "Psychology",
            "art": "Art",
            "science": "Science",
            "relationships": "Relationships"
        }
    };
    
    // Ícones das categorias
    const categoryIcons = {
        "desenvolvimento-pessoal": "🧠",
        "desarrollo-personal": "🧠",
        "personal-development": "🧠",
        "negocios": "💼",
        "business": "💼",
        "tecnologia": "💻",
        "technology": "💻",
        "financas": "💰",
        "finance": "💰",
        "finanzas": "💰",
        "saude": "❤️",
        "salud": "❤️",
        "health": "❤️",
        "educacao": "📚",
        "educacion": "📚",
        "education": "📚",
        "literatura": "📖",
        "literature": "📖",
        "historia": "🏛️",
        "history": "🏛️",
        "filosofia": "🤔",
        "philosophy": "🤔",
        "psicologia": "🧘",
        "psychology": "🧘",
        "arte": "🎨",
        "art": "🎨",
        "ciencia": "🔬",
        "science": "🔬",
        "relacionamentos": "💑",
        "relaciones": "💑",
        "relationships": "💑"
    };
    
    // Descrições das categorias
    const categoryDescriptions = {
        pt: {
            "desenvolvimento-pessoal": "Livros para transformar sua mentalidade, criar hábitos positivos e alcançar seu potencial máximo.",
            "negocios": "Estratégias, liderança, empreendedorismo e gestão para alavancar sua carreira.",
            "tecnologia": "Programação, inteligência artificial, inovação e o futuro digital.",
            "financas": "Educação financeira, investimentos, independência e riqueza.",
            "saude": "Bem-estar, alimentação, exercícios e saúde mental.",
            "educacao": "Pedagogia, métodos de ensino, aprendizagem e desenvolvimento.",
            "literatura": "Clássicos da literatura moçambicana, africana e mundial.",
            "historia": "História de Moçambique, África e do mundo.",
            "filosofia": "Pensadores clássicos e contemporâneos, ética, lógica e reflexão.",
            "psicologia": "Comportamento humano, emoções, mente e relacionamentos.",
            "arte": "História da arte, pintura, escultura, música e expressão artística.",
            "ciencia": "Física, biologia, química, astronomia e descobertas científicas.",
            "relacionamentos": "Casamento, amizade, família, amor e comunicação interpessoal."
        },
        es: {
            "desarrollo-personal": "Libros para transformar tu mentalidad, crear hábitos positivos y alcanzar tu máximo potencial.",
            // ... descrições em espanhol
        },
        en: {
            "personal-development": "Books to transform your mindset, create positive habits and reach your full potential.",
            // ... descriptions in English
        }
    };
    
    // Buscar livros
    const books = getBooksByCategory(lang, categoryId);
    
    // Atualizar breadcrumbs e cabeçalho
    document.getElementById('categoria-nome').textContent = categoryNames[lang][categoryId] || categoryId;
    document.getElementById('categoria-icon').textContent = categoryIcons[categoryId] || '📚';
    document.getElementById('categoria-titulo').textContent = categoryNames[lang][categoryId] || categoryId;
    document.getElementById('categoria-descricao').textContent = categoryDescriptions[lang][categoryId] || '';
    document.getElementById('categoria-contador').textContent = books.length;
    
    // Renderizar livros
    renderBooks(books, lang);
    
    // Configurar ordenação
    setupSorting(books, lang);
    
    // Configurar filtros
    setupFilters(books, lang);
});

function renderBooks(books, lang) {
    const container = document.getElementById('books-container');
    if (!container) return;
    
    if (!books || books.length === 0) {
        container.innerHTML = '<p class="no-books">Nenhum livro encontrado.</p>';
        return;
    }
    
    let html = '';
    books.forEach(book => {
        const title = book.titulo || book.title;
        const author = book.autor || book.author;
        const rating = book.avaliacao || book.valoracion || book.rating || 0;
        const stars = '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
        
        html += `
            <div class="book-card">
                <div class="book-cover">📚</div>
                <h4 class="book-title">${title}</h4>
                <p class="book-author">${author}</p>
                <div class="book-rating">${stars} ${rating}</div>
                <div class="book-actions">
                    <a href="livro.html?id=${book.id}" class="book-btn">📖 ${lang === 'pt' ? 'Ler' : lang === 'es' ? 'Leer' : 'Read'}</a>
                    ${book.audioDisponivel || book.audioDisponible || book.audioAvailable ? 
                        `<a href="livro.html?id=${book.id}&audio=true" class="book-btn">🎧 ${lang === 'pt' ? 'Ouvir' : lang === 'es' ? 'Escuchar' : 'Listen'}</a>` : ''}
                </div>
                <a href="doar.html" class="book-support">💝 ${lang === 'pt' ? 'Apoiar' : lang === 'es' ? 'Apoyar' : 'Support'}</a>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Carregar visualização salva
    const savedView = localStorage.getItem('bookView');
    if (savedView === 'list') {
        container.classList.remove('books-grid');
        container.classList.add('books-list');
    }
}

function setupSorting(books, lang) {
    const sortSelect = document.getElementById('ordenar-por');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', function() {
        const criteria = this.value;
        let sortedBooks = [...books];
        
        switch(criteria) {
            case 'relevancia':
                // Manter ordem original
                break;
            case 'avaliacao':
                sortedBooks.sort((a, b) => (b.avaliacao || b.valoracion || b.rating || 0) - (a.avaliacao || a.valoracion || a.rating || 0));
                break;
            case 'downloads':
                sortedBooks.sort((a, b) => (b.downloads || b.descargas || 0) - (a.downloads || a.descargas || 0));
                break;
            case 'titulo':
                sortedBooks.sort((a, b) => {
                    const titleA = (a.titulo || a.title || '').toLowerCase();
                    const titleB = (b.titulo || b.title || '').toLowerCase();
                    return titleA.localeCompare(titleB);
                });
                break;
            case 'ano':
                sortedBooks.sort((a, b) => (b.ano || b.year || 0) - (a.ano || a.year || 0));
                break;
        }
        
        renderBooks(sortedBooks, lang);
    });
}

function setupFilters(books, lang) {
    const filterSelect = document.getElementById('filtrar-por');
    if (!filterSelect) return;
    
    filterSelect.addEventListener('change', function() {
        const filter = this.value;
        let filteredBooks = [...books];
        
        switch(filter) {
            case 'todos':
                filteredBooks = books;
                break;
            case 'audio':
                filteredBooks = books.filter(b => b.audioDisponivel || b.audioDisponible || b.audioAvailable);
                break;
            case 'novos':
                const currentYear = new Date().getFullYear();
                filteredBooks = books.filter(b => (b.ano || b.year || 0) >= currentYear - 2);
                break;
        }
        
        renderBooks(filteredBooks, lang);
    });
}