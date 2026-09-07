// ===== FUNÇÃO DE PARTILHA INTEGRADA COM SHARE.JS =====
function abrirCompartilhamento(livroId) {
    // Procurar o livro pelo ID
    const livro = todosLivros.find(l => l.id === livroId);
    
    if (!livro) {
        alert('Livro não encontrado!');
        return;
    }
    
    // Se o sistema de partilha já existe (share.js carregado)
    if (window.shareSystem) {
        // Armazenar dados do livro atual para o shareSystem usar
        window.currentBookForShare = {
            title: livro.titulo,
            author: livro.disciplina || 'LivroZathu',
            url: livro.download || livro.visualizar || window.location.href,
            descricao: livro.descricao_curta || 'Livro gratuito'
        };
        
        // Criar ou mostrar modal com opções de partilha
        mostrarModalPartilha(livro);
    } else {
        // Fallback: partilha nativa ou copiar link
        partilhaSimples(livro);
    }
}

// Mostrar modal com opções de partilha (WhatsApp, Facebook, etc.)
function mostrarModalPartilha(livro) {
    // Verificar se já existe o modal
    let modal = document.getElementById('shareModal');
    
    if (!modal) {
        // Criar o modal
        modal = document.createElement('div');
        modal.id = 'shareModal';
        modal.innerHTML = `
            <div class="share-modal-overlay">
                <div class="share-modal-content">
                    <button class="share-modal-close">&times;</button>
                    <h3>📤 Partilhar Livro</h3>
                    <p class="share-book-title">${livro.titulo}</p>
                    <div class="share-buttons-modal">
                        <button id="share-whatsapp-modal" class="share-btn-whatsapp">📱 WhatsApp</button>
                        <button id="share-facebook-modal" class="share-btn-facebook">📘 Facebook</button>
                        <button id="share-twitter-modal" class="share-btn-twitter">🐦 Twitter</button>
                        <button id="share-telegram-modal" class="share-btn-telegram">✈️ Telegram</button>
                        <button id="share-email-modal" class="share-btn-email">📧 Email</button>
                        <button id="copy-link-modal" class="share-btn-copy">🔗 Copiar Link</button>
                    </div>
                    <p class="share-info">Todos os livros são gratuitos! 📚</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Estilos do modal
        const style = document.createElement('style');
        style.textContent = `
            .share-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeIn 0.2s ease;
            }
            .share-modal-content {
                background: white;
                border-radius: 20px;
                padding: 25px;
                max-width: 320px;
                width: 90%;
                text-align: center;
                position: relative;
                animation: slideUp 0.3s ease;
            }
            .dark-mode .share-modal-content {
                background: #1e1e2e;
                color: white;
            }
            .share-modal-close {
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 24px;
                background: none;
                border: none;
                cursor: pointer;
                color: #999;
            }
            .share-book-title {
                font-weight: bold;
                margin: 10px 0;
                color: #1e3a5f;
            }
            .dark-mode .share-book-title {
                color: #6ab0f5;
            }
            .share-buttons-modal {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin: 20px 0;
            }
            .share-buttons-modal button {
                padding: 12px;
                border: none;
                border-radius: 50px;
                font-size: 16px;
                cursor: pointer;
                transition: transform 0.2s;
            }
            .share-buttons-modal button:hover {
                transform: scale(1.02);
            }
            .share-btn-whatsapp { background: #25D366; color: white; }
            .share-btn-facebook { background: #1877F2; color: white; }
            .share-btn-twitter { background: #1DA1F2; color: white; }
            .share-btn-telegram { background: #0088cc; color: white; }
            .share-btn-email { background: #6c757d; color: white; }
            .share-btn-copy { background: #4a5568; color: white; }
            .share-info { font-size: 12px; color: #666; margin-top: 15px; }
            .dark-mode .share-info { color: #aaa; }
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
    } else {
        // Atualizar título do livro no modal existente
        const titleElement = modal.querySelector('.share-book-title');
        if (titleElement) titleElement.textContent = livro.titulo;
        modal.style.display = 'block';
    }
    
    // Mostrar modal
    modal.style.display = 'block';
    
    // Fechar modal
    const closeBtn = modal.querySelector('.share-modal-close');
    closeBtn.onclick = () => modal.style.display = 'none';
    
    // Clicar fora fecha
    modal.querySelector('.share-modal-overlay').onclick = (e) => {
        if (e.target === modal.querySelector('.share-modal-overlay')) {
            modal.style.display = 'none';
        }
    };
    
    // Configurar botões do modal
    const url = livro.download || livro.visualizar || window.location.href;
    const title = livro.titulo;
    const author = livro.disciplina;
    
    // WhatsApp
    const whatsappBtn = document.getElementById('share-whatsapp-modal');
    if (whatsappBtn) {
        whatsappBtn.onclick = () => {
            const text = `📘 *${title}* - ${author}\n\n📖 Livro gratuito!\n${url}`;
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
            modal.style.display = 'none';
            registrarPartilha();
        };
    }
    
    // Facebook
    const facebookBtn = document.getElementById('share-facebook-modal');
    if (facebookBtn) {
        facebookBtn.onclick = () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            modal.style.display = 'none';
            registrarPartilha();
        };
    }
    
    // Twitter
    const twitterBtn = document.getElementById('share-twitter-modal');
    if (twitterBtn) {
        twitterBtn.onclick = () => {
            const text = `📘 ${title} - Leia grátis!`;
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            modal.style.display = 'none';
            registrarPartilha();
        };
    }
    
    // Telegram
    const telegramBtn = document.getElementById('share-telegram-modal');
    if (telegramBtn) {
        telegramBtn.onclick = () => {
            const text = `📘 ${title} - Leia grátis!`;
            window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
            modal.style.display = 'none';
            registrarPartilha();
        };
    }
    
    // Email
    const emailBtn = document.getElementById('share-email-modal');
    if (emailBtn) {
        emailBtn.onclick = () => {
            const subject = `Recomendo: ${title}`;
            const body = `Olá!\n\nEncontrei este livro e pensei em partilhar:\n\n📘 ${title}\n✍️ ${author}\n📖 ${url}\n\n💝 Totalmente gratuito!`;
            window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            modal.style.display = 'none';
            registrarPartilha();
        };
    }
    
    // Copiar Link
    const copyBtn = document.getElementById('copy-link-modal');
    if (copyBtn) {
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(url).then(() => {
                alert('✅ Link copiado!');
            }).catch(() => {
                alert('❌ Erro ao copiar');
            });
            modal.style.display = 'none';
            registrarPartilha();
        };
    }
}

// Partilha simples (fallback)
function partilhaSimples(livro) {
    const url = livro.download || livro.visualizar || window.location.href;
    const text = `📘 ${livro.titulo}\n📖 ${url}\n\n✨ Todos os livros são gratuitos!`;
    
    if (navigator.share) {
        navigator.share({
            title: livro.titulo,
            text: livro.descricao_curta || 'Livro gratuito',
            url: url
        }).catch(() => fallbackCopiar(url));
    } else {
        fallbackCopiar(url);
    }
}

function fallbackCopiar(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url)
            .then(() => alert('✅ Link copiado! Pode colar onde quiser partilhar.'))
            .catch(() => alert('📖 Partilhe este link:\n' + url));
    } else {
        alert('📖 Partilhe este link:\n' + url);
    }
}

function registrarPartilha() {
    if (window.shareSystem && window.shareSystem.registerShare) {
        window.shareSystem.registerShare('manual');
    } else if (window.totalShares) {
        // Registrar partilha manualmente
        let total = localStorage.getItem('total_shares');
        total = total ? parseInt(total) + 1 : 1;
        localStorage.setItem('total_shares', total);
        
        // Atualizar contadores
        document.querySelectorAll('.share-count, .total-shares').forEach(el => {
            let num = total;
            if (num >= 1000000) el.textContent = (num/1000000).toFixed(1) + 'M';
            else if (num >= 1000) el.textContent = (num/1000).toFixed(1) + 'k';
            else el.textContent = num;
        });
    }
}