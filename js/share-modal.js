// ===== SISTEMA DE COMPARTILHAMENTO COMPLETO =====

// Função para buscar livro por ID
function getLivroPorId(livroId) {
    // Usar a variável global todosLivros que já existe no seu código
    if (typeof todosLivros !== 'undefined' && todosLivros.length > 0) {
        return todosLivros.find(l => l.id === livroId);
    }
    
    // Fallback: tentar buscar do localStorage ou dados padrão
    const saved = localStorage.getItem('livros_cache');
    if (saved) {
        const livros = JSON.parse(saved);
        return livros.find(l => l.id === livroId);
    }
    
    console.warn('Livro não encontrado:', livroId);
    return null;
}

// Abrir modal de partilha
function abrirCompartilhamento(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) {
        alert('Livro não encontrado!');
        return;
    }
    
    // Fechar modal existente se houver
    const modalExistente = document.querySelector('.modal-share');
    if (modalExistente) modalExistente.remove();
    
    const modal = document.createElement('div');
    modal.className = 'modal-share';
    modal.innerHTML = `
        <div class="modal-share-content">
            <button class="modal-fechar" onclick="this.closest('.modal-share').remove()">✕</button>
            
            <h3>📢 Partilhar ${livro.titulo}</h3>
            
            <div class="livro-preview">
                <img src="${livro.imagem || 'images/capas/livro-generico.jpg'}" 
                     alt="${livro.titulo}"
                     onerror="this.src='images/capas/livro-generico.jpg'">
                <div>
                    <h4>${livro.titulo}</h4>
                    <p>${livro.descricao_curta || livro.disciplina || 'Livro gratuito'}</p>
                </div>
            </div>
            
            <div class="redes-sociais">
                <button onclick="compartilharWhatsApp(${livro.id})" class="rede-btn whatsapp">
                    📱 WhatsApp
                </button>
                <button onclick="compartilharFacebook(${livro.id})" class="rede-btn facebook">
                    📘 Facebook
                </button>
                <button onclick="compartilharTwitter(${livro.id})" class="rede-btn twitter">
                    🐦 Twitter
                </button>
                <button onclick="compartilharEmail(${livro.id})" class="rede-btn email">
                    📧 Email
                </button>
                <button onclick="copiarLinkDireto('${livro.download || livro.visualizar || ''}', ${livro.id})" class="rede-btn copy">
                    🔗 Copiar Link
                </button>
            </div>
            
            <div class="link-direto">
                <p>🔗 Link direto do livro:</p>
                <div class="link-copiar">
                    <input type="text" id="link-livro" value="${livro.download || livro.visualizar || window.location.href}" readonly>
                    <button onclick="copiarLinkInput()" class="btn-copiar">📋 Copiar</button>
                </div>
            </div>
            
            <div class="hashtags">
                <p>🏷️ #LivroZathu #Educação #Moçambique 🇲🇿</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Adicionar estilos se não existirem
    if (!document.getElementById('share-styles')) {
        const style = document.createElement('style');
        style.id = 'share-styles';
        style.textContent = `
            .modal-share {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .modal-share-content {
                background: white;
                border-radius: 20px;
                padding: 25px;
                max-width: 400px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                animation: slideUp 0.3s ease;
            }
            .dark-mode .modal-share-content {
                background: #1e1e2e;
                color: white;
            }
            .modal-fechar {
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 24px;
                background: none;
                border: none;
                cursor: pointer;
                color: #999;
            }
            .modal-fechar:hover {
                color: #333;
            }
            .livro-preview {
                display: flex;
                gap: 15px;
                margin: 20px 0;
                padding: 15px;
                background: #f5f5f5;
                border-radius: 12px;
            }
            .dark-mode .livro-preview {
                background: #2a2a3e;
            }
            .livro-preview img {
                width: 60px;
                height: 80px;
                object-fit: cover;
                border-radius: 8px;
            }
            .livro-preview h4 {
                margin: 0 0 5px 0;
                color: #1e3a5f;
            }
            .dark-mode .livro-preview h4 {
                color: #6ab0f5;
            }
            .livro-preview p {
                margin: 0;
                font-size: 12px;
                color: #666;
            }
            .dark-mode .livro-preview p {
                color: #aaa;
            }
            .redes-sociais {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 20px 0;
            }
            .rede-btn {
                flex: 1;
                min-width: 100px;
                padding: 12px;
                border: none;
                border-radius: 50px;
                font-size: 14px;
                cursor: pointer;
                transition: transform 0.2s;
                color: white;
                font-weight: bold;
            }
            .rede-btn:hover {
                transform: scale(1.02);
            }
            .whatsapp { background: #25D366; }
            .facebook { background: #1877F2; }
            .twitter { background: #1DA1F2; }
            .email { background: #6c757d; }
            .copy { background: #4a5568; }
            .link-direto {
                margin: 20px 0;
                padding-top: 15px;
                border-top: 1px solid #ddd;
            }
            .dark-mode .link-direto {
                border-top-color: #444;
            }
            .link-copiar {
                display: flex;
                gap: 10px;
                margin-top: 10px;
            }
            .link-copiar input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #f9f9f9;
                font-size: 12px;
            }
            .dark-mode .link-copiar input {
                background: #2a2a3e;
                border-color: #444;
                color: white;
            }
            .btn-copiar {
                padding: 10px 15px;
                background: #1e3a5f;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            }
            .hashtags {
                text-align: center;
                padding-top: 15px;
                font-size: 12px;
                color: #1e3a5f;
            }
            .dark-mode .hashtags {
                color: #6ab0f5;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Funções de partilha
function compartilharWhatsApp(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) return;
    
    const texto = `📚 *${livro.titulo}*\n📖 ${livro.disciplina || 'Livro gratuito'}\n\n✨ Todos os livros são gratuitos no LivroZathu!\n\n🔗 ${livro.download || livro.visualizar || window.location.href}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
    fecharModalAposPartilha();
}

function compartilharFacebook(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) return;
    
    const url = livro.download || livro.visualizar || window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    fecharModalAposPartilha();
}

function compartilharTwitter(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) return;
    
    const texto = `📚 ${livro.titulo} - ${livro.descricao_curta || 'Leia grátis!'}`;
    const url = livro.download || livro.visualizar || window.location.href;
    
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
    fecharModalAposPartilha();
}

function compartilharEmail(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) return;
    
    const assunto = `📚 Livro gratuito: ${livro.titulo}`;
    const corpo = `Olá!\n\nEncontrei este livro gratuito no LivroZathu e achei que podias gostar:\n\n📖 ${livro.titulo}\n📝 ${livro.disciplina}\n${livro.descricao_curta ? `📄 ${livro.descricao_curta}\n` : ''}\n\n📥 Download grátis: ${livro.download || livro.visualizar}\n\n#LivroZathu #EducaçãoGrátis\n\n---\n📚 LivroZathu - Biblioteca digital gratuita de Moçambique 🇲🇿`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    fecharModalAposPartilha();
}

function copiarLinkDireto(url, livroId) {
    if (!url) {
        const livro = getLivroPorId(livroId);
        url = livro?.download || livro?.visualizar || window.location.href;
    }
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            alert('✅ Link copiado para área de transferência!');
        }).catch(() => {
            copiarLinkAntigo(url);
        });
    } else {
        copiarLinkAntigo(url);
    }
    fecharModalAposPartilha();
}

function copiarLinkInput() {
    const input = document.getElementById('link-livro');
    if (!input) return;
    
    input.select();
    input.setSelectionRange(0, 99999);
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value).then(() => {
            mostrarFeedbackCopiar();
        }).catch(() => {
            document.execCommand('copy');
            mostrarFeedbackCopiar();
        });
    } else {
        document.execCommand('copy');
        mostrarFeedbackCopiar();
    }
}

function mostrarFeedbackCopiar() {
    const btn = document.querySelector('.btn-copiar');
    if (!btn) return;
    
    const textoOriginal = btn.textContent;
    btn.textContent = '✅ Copiado!';
    btn.style.background = '#28a745';
    
    setTimeout(() => {
        btn.textContent = textoOriginal;
        btn.style.background = '#1e3a5f';
    }, 2000);
}

function copiarLinkAntigo(url) {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('✅ Link copiado!');
}

function fecharModalAposPartilha() {
    setTimeout(() => {
        const modal = document.querySelector('.modal-share');
        if (modal) modal.remove();
    }, 300);
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    const modal = document.querySelector('.modal-share');
    if (modal && e.target === modal) {
        modal.remove();
    }
});