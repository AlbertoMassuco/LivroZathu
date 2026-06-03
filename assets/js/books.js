// ===== BOOKS.JS - BANCO DE DADOS DE TODOS OS LIVROS =====
// 1.170 livros no total (390 por idioma)

    const LIVROS = {
    primario: {

        '1-classe': [
            { 
                id: 101, 
                titulo: 'Matemática 1ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/1Mclasse.png',
                arquivo: '/BI/Negócios e Finanças/pai-rico-pai-pobre.pdf',
                descricao: 'Livro de Matemática para a 1ª classe do ensino primário'
            },
          
            // ... mais 25 livros de desenvolvimento pessoal
        ],
        
        // Negócios (30 livros)
        "negocios": [
            {
                id: "ng001",
                titulo: "Pai Rico, Pai Pobre",
                autor: "Robert Kiyosaki",
                ano: 1997,
                paginas: 336,
                descricao: "O que os ricos ensinam aos filhos sobre dinheiro. Kiyosaki conta a história de seus dois pais e como suas filosofias sobre dinheiro moldaram sua vida. Um clássico da educação financeira.",
                sinopse: "Aprenda a fazer o dinheiro trabalhar para você e conquistar independência financeira.",
                capa: "/assets/images/flags/Moz.webp",
                pdf: "/BI/Negócios e Finanças/pai-rico-pai-pobre.pdf",
                audioDisponivel: true,
                downloads: 45234,
                avaliacao: 4.8,
                avaliacoes: 45234,
                tags: ["investimentos", "educação financeira", "independência"],
                categoria: "Negócios",
                icone: "💼"
            },
            // ... mais 29 livros de negócios
        ],
        
        // Tecnologia (30 livros)
        "tecnologia": [
            // ... 30 livros
        ],
        
        // Finanças (30 livros)
        "financas": [
            // ... 30 livros
        ],
        
        // Saúde (30 livros)
        "saude": [
            // ... 30 livros
        ],
        
        // Educação (30 livros)
        "educacao": [
            // ... 30 livros
        ],
        
        // Literatura (30 livros)
        "literatura": [
            {
                id: "lt001",
                titulo: "Terra Sonâmbula",
                autor: "Mia Couto",
                ano: 1992,
                paginas: 216,
                descricao: "Um dos maiores clássicos da literatura moçambicana. Em um Moçambique em guerra, um velho e um menino encontram esperança através de um caderno de histórias. Uma obra-prima do realismo mágico africano.",
                sinopse: "Vencedor do Prêmio Nacional de Literatura de Moçambique, conta a história de Muidinga e Tuahir durante a guerra civil.",
                capa: "/assets/images/covers/terra-sonambula.jpg",
                pdf: "/assets/pdfs/pt/terra-sonambula.pdf",
                audioDisponivel: true,
                downloads: 45678,
                avaliacao: 4.9,
                avaliacoes: 45678,
                tags: ["moçambique", "guerra", "esperança", "africa"],
                categoria: "Literatura",
                icone: "📖"
            },
            // ... mais 29 livros de literatura
        ],
        
        // História (30 livros)
        "historia": [
            // ... 30 livros
        ],
        
        // Filosofia (30 livros)
        "filosofia": [
            // ... 30 livros
        ],
        
        // Psicologia (30 livros)
        "psicologia": [
            // ... 30 livros
        ],
        
        // Arte (30 livros)
        "arte": [
            // ... 30 livros
        ],
        
        // Ciência (30 livros)
        "ciencia": [
            // ... 30 livros
        ],
        
        // Relacionamentos (30 livros)
        "relacionamentos": [
            {
                id: "rl001",
                titulo: "Os 5 Relacionamentos",
                autor: "Augusto Cury",
                ano: 2018,
                paginas: 192,
                descricao: "A chave para construir relacionamentos saudáveis. Cury explora os cinco tipos de relacionamentos essenciais para uma vida plena: consigo mesmo, com a família, com o cônjuge, com os amigos e com o trabalho.",
                sinopse: "Descubra como construir relacionamentos saudáveis em todas as áreas da sua vida.",
                capa: "/assets/images/covers/5-relacionamentos.jpg",
                pdf: "/assets/pdfs/pt/5-relacionamentos.pdf",
                audioDisponivel: true,
                downloads: 23456,
                avaliacao: 4.8,
                avaliacoes: 23456,
                tags: ["casamento", "família", "amizade", "amor"],
                categoria: "Relacionamentos",
                icone: "💑"
            },
            // ... mais 29 livros de relacionamentos
        ]
    },
    
    // ===== ESPANHOL (390 livros) =====
    es: {
        "desarrollo-personal": [
            {
                id: "dp001",
                titulo: "El Poder del Ahora",
                autor: "Eckhart Tolle",
                ano: 1997,
                paginas: 224,
                descricao: "Imagina despertar cada día sin ansiedad, sin preocupaciones por el pasado o miedo al futuro. Este libro te enseñará a vivir el momento presente y encontrar paz interior en solo 10 minutos al día.",
                sinopse: "Una guía para la iluminación espiritual que muestra cómo los problemas emocionales están ligados a la mente.",
                capa: "/assets/images/covers/poder-del-ahora.jpg",
                pdf: "/assets/pdfs/es/poder-del-ahora.pdf",
                audioDisponible: true,
                descargas: 15432,
                valoracion: 4.9,
                valoraciones: 15432,
                etiquetas: ["espiritualidad", "mindfulness", "autoconocimiento"],
                categoria: "Desarrollo Personal",
                icono: "🧠"
            },
            // ... mais 29 livros
        ],
        // ... todas as categorias em espanhol
    },
    
    // ===== INGLÊS (390 livros) =====
    en: {
        "personal-development": [
            {
                id: "dp001",
                title: "The Power of Now",
                author: "Eckhart Tolle",
                year: 1997,
                pages: 224,
                description: "Imagine waking up every day without anxiety, without worries about the past or fear of the future. This book will teach you to live in the present moment and find inner peace in just 10 minutes a day.",
                synopsis: "A guide to spiritual enlightenment that shows how emotional problems are linked to the mind.",
                cover: "/assets/images/covers/power-of-now.jpg",
                pdf: "/assets/pdfs/en/power-of-now.pdf",
                audioAvailable: true,
                downloads: 15432,
                rating: 4.9,
                ratings: 15432,
                tags: ["spirituality", "mindfulness", "self-knowledge"],
                category: "Personal Development",
                icon: "🧠"
            },
            // ... more 29 books
        ],
        // ... all categories in English
    }
};

// ===== FUNÇÕES AUXILIARES =====

// Detectar idioma atual
function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.includes('/es/')) return 'es';
    if (path.includes('/en/')) return 'en';
    return 'pt';
}

/// Buscar livros por nível e classe
function getLivrosPorClasse(nivel, classe) {
    if (nivel === 'primario') {
        return LIVROS.primario[classe] || [];
    } else {
        return LIVROS.secundario[classe] || [];
    }
}

// Pegar livro por ID
function getLivroPorId(id) {
    for (let nivel in LIVROS) {
        for (let classe in LIVROS[nivel]) {
            const livro = LIVROS[nivel][classe].find(l => l.id === id);
            if (livro) return livro;
        }
    }
    return null;
}

// Renderizar livros no HTML
function renderizarLivros(livros, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (!livros || livros.length === 0) {
        container.innerHTML = '<p class="sem-livros">Nenhum livro disponível para esta classe.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    livros.forEach(livro => {
        const card = document.createElement('div');
        card.className = 'livro-card';
        card.innerHTML = `
            <img src="${livro.imagem || 'images/capas/livro-generico.jpg'}" 
                 alt="${livro.titulo}"
                 onerror="this.src='images/capas/livro-generico.jpg'">
            <h3 class="livro-titulo">${livro.titulo}</h3>
            <p class="livro-disciplina">${livro.disciplina}</p>
            <p class="livro-autor">${livro.autor || 'MINEDH'}</p>
            <p class="livro-preco">📖 Gratuito</p>
            <div class="livro-botoes">
                <a href="${livro.arquivo}" target="_blank" class="btn btn-visualizar">
                    👁️ Visualizar
                </a>
                <a href="${livro.arquivo}" download class="btn btn-download">
                    📥 Download
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Buscar livros
function searchBooks(lang, term) {
    term = term.toLowerCase();
    const results = [];
    
    for (const category in booksDB[lang]) {
        const found = booksDB[lang][category].filter(book => {
            const title = (book.titulo || book.title || '').toLowerCase();
            const author = (book.autor || book.author || '').toLowerCase();
            return title.includes(term) || author.includes(term);
        });
        results.push(...found);
    }
    
    return results;
}

// Exportar funções globalmente
window.booksDB = booksDB;
window.getCurrentLanguage = getCurrentLanguage;
window.getBooksByCategory = getBooksByCategory;
window.getBookById = getBookById;
window.searchBooks = searchBooks;
window.getFeaturedBooks = getFeaturedBooks;

window.getLivrosPorClasse = getLivrosPorClasse;
window.getLivroPorId = getLivroPorId;
window.renderizarLivros = renderizarLivros;

console.log('📚 Banco de dados carregado com sucesso!');