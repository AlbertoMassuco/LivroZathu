// ===== SISTEMA DE COMPARTILHAMENTO =====

function abrirCompartilhamento(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal-share';
    modal.innerHTML = `
        <div class="modal-share-content">
            <button class="modal-fechar" onclick="fecharModal(this)">✕</button>
            
            <h3>📢 Compartilhar ${livro.titulo}</h3>
            
            <div class="livro-preview">
                <img src="${livro.imagem || 'images/capas/livro-generico.jpg'}" 
                     alt="${livro.titulo}"
                     onerror="this.src='images/capas/livro-generico.jpg'">
                <div>
                    <h4>${livro.titulo}</h4>
                    <p>${livro.descricao_curta}</p>
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
            </div>
            
            <div class="link-direto">
                <p>🔗 Link direto do livro:</p>
                <div class="link-copiar">
                    <input type="text" id="link-livro" value="https://livrozathu.co.mz/livro?id=${livro.id}" readonly>
                    <button onclick="copiarLink()" class="btn-copiar">📋 Copiar</button>
                </div>
            </div>
            
            <div class="hashtags">
                <p>🏷️ ${livro.hashtags || '#LivroZathu #Educação'}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Funções de compartilhamento
function compartilharWhatsApp(livroId) {
    const livro = getLivroPorId(livroId);
    const texto = gerarTextoWhatsApp(livro);
    window.open(`https://wa.me/?text=${texto}`, '_blank');
}

function compartilharFacebook(livroId) {
    const livro = getLivroPorId(livroId);
    const url = `https://livrozathu.co.mz/livro?id=${livro.id}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function compartilharTwitter(livroId) {
    const livro = getLivroPorId(livroId);
    const texto = `📚 ${livro.titulo} - ${livro.descricao_curta}`;
    const url = `https://livrozathu.co.mz/livro?id=${livro.id}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
}

function compartilharEmail(livroId) {
    const livro = getLivroPorId(livroId);
    const assunto = `📚 Livro gratuito: ${livro.titulo}`;
    const corpo = `Olá!\n\nEncontrei este livro gratuito no LivroZathu e achei que podias gostar:\n\n📖 ${livro.titulo}\n📝 ${livro.descricao}\n\n📥 Download grátis: https://livrozathu.co.mz/livro?id=${livro.id}\n\n#LivroZathu #EducaçãoGrátis`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}

function copiarLink() {
    const input = document.getElementById('link-livro');
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
    // Feedback visual
    const btn = document.querySelector('.btn-copiar');
    btn.textContent = '✅ Copiado!';
    setTimeout(() => {
        btn.textContent = '📋 Copiar';
    }, 2000);
}

function fecharModal(elemento) {
    const modal = elemento.closest('.modal-share');
    if (modal) modal.remove();
}