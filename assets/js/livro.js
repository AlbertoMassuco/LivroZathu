// ===== LIVRO.JS - CARREGAR LIVRO ESPECÍFICO =====

document.addEventListener('DOMContentLoaded', function() {
    // Detectar idioma
    const lang = getCurrentLanguage();
    
    // Pegar ID do livro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    const playAudio = urlParams.get('audio') === 'true';
    
    if (!bookId) {
        window.location.href = 'categorias.html';
        return;
    }
    
    // Buscar livro
    const book = getBookById(lang, bookId);
    
    if (!book) {
        window.location.href = '404.html';
        return;
    }
    
    // Preencher dados do livro
    fillBookData(book, lang);
    
    // Configurar botões
    setupBookButtons(book, lang);
    
    // Verificar se deve mostrar áudio
    if (playAudio) {
        showAudioPlayer();
    }
    
    // Carregar progresso salvo
    loadReadingProgress(bookId);
});

function fillBookData(book, lang) {
    // Título
    const titleEl = document.getElementById('book-title') || document.getElementById('livro-titulo');
    if (titleEl) titleEl.textContent = book.titulo || book.title || '';
    
    // Autor
    const authorEl = document.getElementById('book-author') || document.getElementById('livro-autor');
    if (authorEl) authorEl.textContent = book.autor || book.author || '';
    
    // Categoria
    const categoryEl = document.getElementById('book-category') || document.getElementById('livro-categoria');
    if (categoryEl) categoryEl.textContent = `${book.icone || book.icono || book.icon || '📚'} ${book.categoria || book.category || ''}`;
    
    // Ano
    const yearEl = document.getElementById('book-year') || document.getElementById('livro-ano');
    if (yearEl) yearEl.textContent = book.ano || book.year || '';
    
    // Páginas
    const pagesEl = document.getElementById('book-pages') || document.getElementById('livro-paginas');
    if (pagesEl) pagesEl.textContent = `${book.paginas || book.pages || 0} ${lang === 'pt' ? 'páginas' : lang === 'es' ? 'páginas' : 'pages'}`;
    
    // Avaliação
    const rating = book.avaliacao || book.valoracion || book.rating || 0;
    const stars = '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
    
    const starsEl = document.getElementById('book-stars') || document.getElementById('livro-estrelas');
    if (starsEl) starsEl.textContent = stars;
    
    const ratingEl = document.getElementById('book-rating') || document.getElementById('livro-avaliacao');
    if (ratingEl) ratingEl.textContent = rating;
    
    const reviewsEl = document.getElementById('book-reviews') || document.getElementById('livro-avaliacoes');
    if (reviewsEl) reviewsEl.textContent = `(${(book.avaliacoes || book.valoraciones || book.ratings || 0).toLocaleString()} ${lang === 'pt' ? 'avaliações' : lang === 'es' ? 'valoraciones' : 'reviews'})`;
    
    // Downloads
    const downloadsEl = document.getElementById('book-downloads') || document.getElementById('livro-downloads');
    if (downloadsEl) downloadsEl.innerHTML = `📥 ${(book.downloads || book.descargas || 0).toLocaleString()} ${lang === 'pt' ? 'downloads' : lang === 'es' ? 'descargas' : 'downloads'}`;
    
    // Áudio
    const audioEl = document.getElementById('book-audio') || document.getElementById('livro-audio');
    if (audioEl) {
        if (book.audioDisponivel || book.audioDisponible || book.audioAvailable) {
            audioEl.innerHTML = `🔊 ${lang === 'pt' ? 'Disponível em áudio' : lang === 'es' ? 'Disponible en audio' : 'Available in audio'}`;
        } else {
            audioEl.style.display = 'none';
        }
    }
    
    // Descrição
    const descEl = document.getElementById('book-description') || document.getElementById('livro-descricao');
    if (descEl) {
        descEl.innerHTML = `
            <p class="descricao-destaque">"${book.descricao || book.description || ''}"</p>
            ${book.sinopse ? `<p><strong>${lang === 'pt' ? 'Sinopse' : lang === 'es' ? 'Sinopsis' : 'Synopsis'}:</strong> ${book.sinopse}</p>` : ''}
        `;
    }
}

function setupBookButtons(book, lang) {
    // Botão Ler
    const readBtn = document.getElementById('btn-read') || document.getElementById('btn-ler');
    if (readBtn) {
        readBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showReader();
        });
    }
    
    // Botão Ouvir
    const listenBtn = document.getElementById('btn-listen') || document.getElementById('btn-ouvir');
    if (listenBtn) {
        if (book.audioDisponivel || book.audioDisponible || book.audioAvailable) {
            listenBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showAudioPlayer();
            });
        } else {
            listenBtn.style.opacity = '0.5';
            listenBtn.style.pointerEvents = 'none';
        }
    }
    
    // Botão Baixar
    const downloadBtn = document.getElementById('btn-download') || document.getElementById('btn-baixar');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            simulateDownload(book, lang);
        });
    }
}

function showReader() {
    const reader = document.getElementById('reader') || document.getElementById('leitor');
    const audio = document.getElementById('audio');
    
    if (reader) {
        reader.style.display = 'block';
        if (audio) audio.style.display = 'none';
        reader.scrollIntoView({ behavior: 'smooth' });
    }
}

function showAudioPlayer() {
    const audio = document.getElementById('audio');
    const reader = document.getElementById('reader') || document.getElementById('leitor');
    
    if (audio) {
        audio.style.display = 'block';
        if (reader) reader.style.display = 'none';
        audio.scrollIntoView({ behavior: 'smooth' });
        
        // Inicializar player de áudio
        initAudioPlayer();
    }
}

function simulateDownload(book, lang) {
    showNotification(
        lang === 'pt' ? '📥 Download iniciado! O PDF será salvo no seu dispositivo.' :
        lang === 'es' ? '📥 ¡Descarga iniciada! El PDF se guardará en tu dispositivo.' :
        '📥 Download started! The PDF will be saved to your device.',
        'sucesso'
    );
}

function loadReadingProgress(bookId) {
    const savedPage = localStorage.getItem(`progress_${bookId}`);
    if (savedPage) {
        const pageEl = document.getElementById('current-page') || document.getElementById('pagina-atual');
        const progressEl = document.getElementById('reader-progress') || document.getElementById('leitor-progresso');
        
        if (pageEl) pageEl.textContent = `Página ${savedPage}`;
        if (progressEl) progressEl.textContent = `Página ${savedPage}/224`;
    }
}

function initAudioPlayer() {
    // Simular player de áudio
    let isPlaying = false;
    let currentTime = 0;
    const totalTime = 2730; // 45:30 em segundos
    
    const playBtn = document.getElementById('audio-play');
    const progressBar = document.getElementById('audio-progress');
    const currentTimeEl = document.getElementById('audio-current-time');
    const totalTimeEl = document.getElementById('audio-total-time');
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            this.textContent = isPlaying ? '⏸️' : '▶️';
            
            if (isPlaying) {
                simulateAudioProgress();
            }
        });
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    if (totalTimeEl) {
        totalTimeEl.textContent = formatTime(totalTime);
    }
    
    function simulateAudioProgress() {
        if (!isPlaying) return;
        
        currentTime += 1;
        if (currentTime > totalTime) currentTime = 0;
        
        if (progressBar) progressBar.style.width = `${(currentTime / totalTime) * 100}%`;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(currentTime);
        
        setTimeout(simulateAudioProgress, 1000);
    }
}