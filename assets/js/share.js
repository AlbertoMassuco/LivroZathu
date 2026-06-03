// ===== SHARE.JS - SISTEMA DE PARTILHA SOCIAL =====

class ShareSystem {
    constructor() {
        this.totalShares = 0;
        this.loadShares();
        this.init();
    }
    
    init() {
        this.setupShareButtons();
        this.updateShareCount();
    }
    
    setupShareButtons() {
        // WhatsApp
        const whatsappBtn = document.getElementById('share-whatsapp');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => this.shareWhatsApp());
        }
        
        // Facebook
        const facebookBtn = document.getElementById('share-facebook');
        if (facebookBtn) {
            facebookBtn.addEventListener('click', () => this.shareFacebook());
        }
        
        // Twitter
        const twitterBtn = document.getElementById('share-twitter');
        if (twitterBtn) {
            twitterBtn.addEventListener('click', () => this.shareTwitter());
        }
        
        // Telegram
        const telegramBtn = document.getElementById('share-telegram');
        if (telegramBtn) {
            telegramBtn.addEventListener('click', () => this.shareTelegram());
        }
        
        // Email
        const emailBtn = document.getElementById('share-email');
        if (emailBtn) {
            emailBtn.addEventListener('click', () => this.shareEmail());
        }
        
        // Copy Link
        const copyBtn = document.getElementById('copy-link');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyLink());
        }
    }
    
    getShareData() {
        const title = document.getElementById('book-title')?.textContent || 'LeituraPortal';
        const author = document.getElementById('book-author')?.textContent || '';
        const url = window.location.href;
        const lang = getCurrentLanguage();
        
        return { title, author, url, lang };
    }
    
    shareWhatsApp() {
        const { title, author, url, lang } = this.getShareData();
        const text = lang === 'pt' ? `📘 *${title}* ${author ? `- ${author}` : ''}\n\nLeia grátis no LeituraPortal:\n${url}` :
                     lang === 'es' ? `📘 *${title}* ${author ? `- ${author}` : ''}\n\nLee gratis en LeituraPortal:\n${url}` :
                     `📘 *${title}* ${author ? `- ${author}` : ''}\n\nRead for free at LeituraPortal:\n${url}`;
        
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
        this.registerShare('whatsapp');
    }
    
    shareFacebook() {
        const { url } = this.getShareData();
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        this.registerShare('facebook');
    }
    
    shareTwitter() {
        const { title, url, lang } = this.getShareData();
        const text = lang === 'pt' ? `📘 ${title} - Leia grátis no @LeituraPortal!` :
                     lang === 'es' ? `📘 ${title} - ¡Lee gratis en @LeituraPortal!` :
                     `📘 ${title} - Read for free at @LeituraPortal!`;
        
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        this.registerShare('twitter');
    }
    
    shareTelegram() {
        const { title, url, lang } = this.getShareData();
        const text = lang === 'pt' ? `📘 ${title} - Leia grátis no LeituraPortal!` :
                     lang === 'es' ? `📘 ${title} - ¡Lee gratis en LeituraPortal!` :
                     `📘 ${title} - Read for free at LeituraPortal!`;
        
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        this.registerShare('telegram');
    }
    
    shareEmail() {
        const { title, author, url, lang } = this.getShareData();
        const subject = lang === 'pt' ? `📘 Recomendo: ${title}` :
                        lang === 'es' ? `📘 Recomiendo: ${title}` :
                        `📘 I recommend: ${title}`;
        
        const body = lang === 'pt' ? 
            `Olá!\n\nEncontrei este livro no LeituraPortal e pensei em partilhar contigo:\n\n📘 ${title}\n${author ? `✍️ ${author}\n` : ''}\n📖 ${url}\n\n💝 Totalmente gratuito!\n\nAbraço` :
            lang === 'es' ?
            `Hola!\n\nEncontré este libro en LeituraPortal y pensé en compartirlo contigo:\n\n📘 ${title}\n${author ? `✍️ ${author}\n` : ''}\n📖 ${url}\n\n💝 ¡Totalmente gratuito!\n\nSaludos` :
            `Hello!\n\nI found this book on LeituraPortal and thought of sharing it with you:\n\n📘 ${title}\n${author ? `✍️ ${author}\n` : ''}\n📖 ${url}\n\n💝 Completely free!\n\nBest regards`;
        
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        this.registerShare('email');
    }
    
    copyLink() {
        const { url } = this.getShareData();
        
        navigator.clipboard.writeText(url).then(() => {
            showNotification('✅ Link copiado para área de transferência!', 'sucesso');
            this.registerShare('copy');
        }).catch(() => {
            showNotification('❌ Erro ao copiar link', 'erro');
        });
    }
    
    registerShare(platform) {
        this.totalShares++;
        localStorage.setItem('total_shares', this.totalShares.toString());
        this.updateShareCount();
        
        // Registrar no servidor (simulado)
        console.log(`📊 Partilha registrada: ${platform}`);
    }
    
    loadShares() {
        const saved = localStorage.getItem('total_shares');
        this.totalShares = saved ? parseInt(saved) : 1234;
    }
    
    updateShareCount() {
        const counters = document.querySelectorAll('.share-count, .total-shares, #total-partilhas, #total-shares, #total-compartidos');
        counters.forEach(counter => {
            counter.textContent = this.formatNumber(this.totalShares);
        });
    }
    
    formatNumber(num) {
        if (num >= 1000000) return (num/1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num/1000).toFixed(1) + 'k';
        return num.toString();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.share-buttons')) {
        window.shareSystem = new ShareSystem();
    }
});