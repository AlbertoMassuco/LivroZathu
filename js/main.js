// main.js - Funções gerais do site LivroZathu

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('LivroZathu iniciado com sucesso!');
    
    // Inicializar menu responsivo
    initMenuResponsivo();
    
    // Inicializar links suaves
    initLinksSuaves();
    
    // Verificar se há parâmetros na URL
    checkUrlParams();
});

// ===== MENU RESPONSIVO =====
function initMenuResponsivo() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        // Para mobile: clicar no dropdown abre/fecha
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Fechar outros dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
                
                // Alternar atual
                this.classList.toggle('active');
            }
        });
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(d => {
                    d.classList.remove('active');
                });
            }
        }
    });
}

// ===== LINKS SUAVES =====
function initLinksSuaves() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== VERIFICAR PARÂMETROS URL =====
function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Se houver parametro 'compra=sucesso'
    if (urlParams.get('compra') === 'sucesso') {
        mostrarAgradecimento();
        
        // Limpar URL sem recarregar
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
}

// ===== POPUP DE AGRADECIMENTO =====
function mostrarAgradecimento() {
    // Remover popup existente se houver
    const popupExistente = document.querySelector('.agradecimento-popup');
    if (popupExistente) {
        popupExistente.remove();
    }
    
    const popup = document.createElement('div');
    popup.className = 'agradecimento-popup';
    popup.setAttribute('aria-label', 'Mensagem de agradecimento');
    popup.innerHTML = `
        <div class="popup-content">
            <p>📚 Obrigado por escolher a LivroZathu!</p>
            <p>O teu download vai começar.</p>
            <button onclick="fecharPopup(this)">Fechar</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (popup.parentNode) {
            popup.remove();
        }
    }, 5000);
}

// ===== FECHAR POPUP =====
window.fecharPopup = function(botao) {
    const popup = botao.closest('.agradecimento-popup');
    if (popup) {
        popup.remove();
    }
};

// ===== UTILITÁRIOS =====

// Formatar número de telefone
window.formatarTelefone = function(numero) {
    // Remove tudo que não é número
    return numero.replace(/\D/g, '');
};

// Validar email
window.validarEmail = function(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Mostrar loading
window.mostrarLoading = function(mensagem = 'A processar...') {
    const loading = document.createElement('div');
    loading.className = 'agradecimento-popup';
    loading.id = 'loading-popup';
    loading.innerHTML = `
        <div class="popup-content">
            <p>⏳ ${mensagem}</p>
        </div>
    `;
    document.body.appendChild(loading);
};

// Esconder loading
window.esconderLoading = function() {
    const loading = document.getElementById('loading-popup');
    if (loading) {
        loading.remove();
    }
};

// ===== DETECÇÃO DE DISPOSITIVO =====
window.isMobile = function() {
    return window.innerWidth <= 768;
};

window.isTablet = function() {
    return window.innerWidth > 768 && window.innerWidth <= 992;
};

window.isDesktop = function() {
    return window.innerWidth > 992;
};

// ===== SCROLL SUAVE PARA TOPO =====
window.scrollToTop = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// ===== COPIAR TEXTO =====
window.copiarTexto = async function(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado!');
    } catch (err) {
        console.error('Erro ao copiar:', err);
    }
};

// ===== REDIRECIONAMENTO SEGURO =====
window.redirectSeguro = function(url) {
    if (url && url.startsWith('http')) {
        window.open(url, '_blank');
    } else if (url) {
        window.location.href = url;
    }
};

// ===== ESCAPAR HTML (segurança) =====
window.escapeHTML = function(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
};

// ===== GERAR ID ÚNICO =====
window.gerarIdUnico = function() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// ===== DETECTAR ONLINE/OFFLINE =====
window.addEventListener('online', function() {
    console.log('Conexão restabelecida');
});

window.addEventListener('offline', function() {
    console.log('Sem conexão com internet');
    alert('Sem conexão com internet. Verifique a sua rede.');
});

// ===== INICIALIZAR PÁGINA ATUAL =====
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.menu-links a');
    
    links.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.opacity = '1';
        }
    });
}

// Chamar função de highlight
setTimeout(highlightCurrentPage, 100);

// ===== EXPORTAR FUNÇÕES (se necessário em módulos) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mostrarAgradecimento,
        validarEmail,
        formatarTelefone,
        isMobile,
        isTablet,
        isDesktop
    };
}