// ===== MAIN.JS - FUNÇÕES PRINCIPAIS =====

// Aguardar carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ LeituraPortal carregado com sucesso!');
    
    // Carregar tema salvo
    loadSavedTheme();
    
    // Configurar busca
    setupSearch();
    
    // Configurar formulário de contacto
    setupContactForm();
    
    // Configurar botões de doação
    setupDonationButtons();
    
    // Atualizar ano no copyright
    updateCopyrightYear();
    
    // Configurar botões de partilha
    setupShareButtons();
    
    // Configurar select de idioma
    setupLanguageSelect();
});

// ===== TEMA (MODO NOTURNO) =====
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        button.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        button.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (button) button.textContent = '☀️';
    }
}

// Tornar função global
window.toggleTheme = toggleTheme;

// ===== BUSCA =====
function setupSearch() {
    const searchBoxes = document.querySelectorAll('.search-box');
    
    searchBoxes.forEach(box => {
        box.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const termo = this.value.trim();
                if (termo.length > 0) {
                    // Redirecionar para página de busca
                    const idioma = detectLanguage();
                    window.location.href = `/${idioma}/search.html?q=${encodeURIComponent(termo)}`;
                }
            }
        });
    });
}

// ===== FORMULÁRIO DE CONTACTO =====
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores
            const nome = document.getElementById('nome')?.value || document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const mensagem = document.getElementById('mensagem')?.value || document.getElementById('message')?.value;
            
            // Validar campos obrigatórios
            if (!nome || !email || !mensagem) {
                showNotification('❌ Por favor, preencha todos os campos obrigatórios.', 'erro');
                return;
            }
            
            // Simular envio
            showNotification('✅ Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'sucesso');
            this.reset();
        });
    }
}

// ===== BOTÕES DE DOAÇÃO =====
function setupDonationButtons() {
    // Botões PayPal
    const paypalBtn = document.getElementById('paypal-button');
    if (paypalBtn) {
        paypalBtn.addEventListener('click', function() {
            const valor = document.getElementById('paypal-custom')?.value || '10';
            showNotification(`🔒 Redirecionando para PayPal... (Valor: €${valor})`, 'sucesso');
            
            // Simular redirecionamento
            setTimeout(() => {
                showNotification('✅ Pagamento simulado com sucesso! Obrigado!', 'sucesso');
            }, 2000);
        });
    }
    
    // Botões M-PESA
    const mpesaBtn = document.getElementById('mpesa-button');
    if (mpesaBtn) {
        mpesaBtn.addEventListener('click', function() {
            const valor = document.getElementById('mpesa-custom')?.value || '100';
            showNotification(`📱 Processando pagamento M-PESA... (Valor: ${valor} MZN)`, 'sucesso');
            
            setTimeout(() => {
                showNotification('✅ Pagamento recebido! Muito obrigado pelo seu apoio!', 'sucesso');
            }, 2000);
        });
    }
    
    // Botões de valor
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = this.dataset.amount;
            const method = this.classList.contains('mpesa-btn') ? 'MZN' : '€';
            showNotification(`💰 Valor selecionado: ${amount}${method}`, 'sucesso');
        });
    });
}

// ===== BOTÕES DE PARTILHA =====
function setupShareButtons() {
    // WhatsApp
    const whatsappBtn = document.getElementById('share-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            const url = window.location.href;
            const titulo = document.getElementById('book-title')?.textContent || 'LeituraPortal';
            const texto = `📘 ${titulo} - Leia grátis no LeituraPortal!`;
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(texto + ' ' + url)}`, '_blank');
        });
    }
    
    // Facebook
    const facebookBtn = document.getElementById('share-facebook');
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            const url = window.location.href;
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        });
    }
    
    // Twitter
    const twitterBtn = document.getElementById('share-twitter');
    if (twitterBtn) {
        twitterBtn.addEventListener('click', function() {
            const url = window.location.href;
            const titulo = document.getElementById('book-title')?.textContent || 'LeituraPortal';
            const texto = `📘 ${titulo} - Leia grátis no @LeituraPortal!`;
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
        });
    }
    
    // Telegram
    const telegramBtn = document.getElementById('share-telegram');
    if (telegramBtn) {
        telegramBtn.addEventListener('click', function() {
            const url = window.location.href;
            const titulo = document.getElementById('book-title')?.textContent || 'LeituraPortal';
            const texto = `📘 ${titulo} - Leia grátis no LeituraPortal!`;
            window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`, '_blank');
        });
    }
    
    // Email
    const emailBtn = document.getElementById('share-email');
    if (emailBtn) {
        emailBtn.addEventListener('click', function() {
            const url = window.location.href;
            const titulo = document.getElementById('book-title')?.textContent || 'LeituraPortal';
            const assunto = `📘 Recomendo: ${titulo}`;
            const corpo = `Encontrei este livro no LeituraPortal e pensei em partilhar contigo:\n\n${url}\n\n💝 Totalmente gratuito!`;
            window.location.href = `mailto:?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
        });
    }
    
    // Copiar link
    const copyBtn = document.getElementById('copy-link');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showNotification('✅ Link copiado para área de transferência!', 'sucesso');
            });
        });
    }
}

// ===== SELETOR DE IDIOMA =====
function setupLanguageSelect() {
    const selects = document.querySelectorAll('.idioma-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function() {
            window.location.href = this.value;
        });
    });
}

// ===== DETECTAR IDIOMA =====
function detectLanguage() {
    const path = window.location.pathname;
    if (path.includes('/es/')) return 'es';
    if (path.includes('/en/')) return 'en';
    return 'pt';
}

// ===== NOTIFICAÇÃO =====
function showNotification(message, tipo = 'sucesso') {
    const notification = document.createElement('div');
    notification.className = `payment-notification ${tipo}`;
    notification.innerHTML = `
        <span class="notification-icon">${tipo === 'sucesso' ? '✅' : '❌'}</span>
        <span class="notification-message">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Tornar função global
window.showNotification = showNotification;

// ===== ATUALIZAR ANO =====
function updateCopyrightYear() {
    const elements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    elements.forEach(el => {
        el.textContent = currentYear;
    });
}

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== MUDAR VISUALIZAÇÃO (GRID/LISTA) =====
function changeView(view) {
    const container = document.getElementById('books-container');
    const btnGrid = document.getElementById('view-grid');
    const btnList = document.getElementById('view-list');
    
    if (!container) return;
    
    if (view === 'grid') {
        container.classList.remove('books-list');
        container.classList.add('books-grid');
        if (btnGrid) btnGrid.classList.add('active');
        if (btnList) btnList.classList.remove('active');
        localStorage.setItem('bookView', 'grid');
    } else {
        container.classList.remove('books-grid');
        container.classList.add('books-list');
        if (btnList) btnList.classList.add('active');
        if (btnGrid) btnGrid.classList.remove('active');
        localStorage.setItem('bookView', 'list');
    }
}

// Tornar função global
window.changeView = changeView;

// ===== CARREGAR VISUALIZAÇÃO SALVA =====
function loadSavedView() {
    const savedView = localStorage.getItem('bookView');
    if (savedView) {
        changeView(savedView);
    }
}

// ===== FILTRAR CATEGORIA =====
function filterCategory(categoria) {
    const btns = document.querySelectorAll('.filter-tag');
    btns.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = Array.from(btns).find(btn => btn.textContent.toLowerCase().includes(categoria));
    if (activeBtn) activeBtn.classList.add('active');
    
    // Disparar evento de filtro
    window.dispatchEvent(new CustomEvent('categoryFilter', { detail: categoria }));
}

// Tornar função global
window.filterCategory = filterCategory;

// ===== ORDENAR LIVROS =====
function sortBooks(criterio) {
    window.dispatchEvent(new CustomEvent('sortBooks', { detail: criterio }));
}

// Tornar função global
window.sortBooks = sortBooks;