// dark-mode.js - Lógica completa do modo escuro (arquivo separado)

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
});

// Função principal do modo escuro
function initDarkMode() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (!darkModeBtn) return;
    
    // Verificar preferência salva
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === null) {
        // Se não houver preferência salva, usar sistema
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️';
        } else {
            darkModeBtn.textContent = '🌙';
        }
    } else {
        // Usar preferência salva
        const isDarkMode = savedMode === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️';
        } else {
            darkModeBtn.textContent = '🌙';
        }
    }
    
    // Alternar ao clicar
    darkModeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
        
        // Mudar ícone
        const isDark = document.body.classList.contains('dark-mode');
        this.textContent = isDark ? '☀️' : '🌙';
        
        // Salvar preferência
        localStorage.setItem('darkMode', isDark);
        
        // Feedback visual
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Ouvir mudanças no sistema (se o utilizador mudar a preferência)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Só aplicar se não tiver preferência salva
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
                darkModeBtn.textContent = '☀️';
            } else {
                document.body.classList.remove('dark-mode');
                darkModeBtn.textContent = '🌙';
            }
        }
    });
}

// Função para verificar se está em modo escuro (útil para outros scripts)
window.isDarkMode = function() {
    return document.body.classList.contains('dark-mode');
};

// Função para forçar modo escuro
window.forceDarkMode = function(enable) {
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (enable) {
        document.body.classList.add('dark-mode');
        if (darkModeBtn) darkModeBtn.textContent = '☀️';
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeBtn) darkModeBtn.textContent = '🌙';
        localStorage.setItem('darkMode', 'false');
    }
};

// Função para resetar (voltar a seguir o sistema)
window.resetDarkMode = function() {
    localStorage.removeItem('darkMode');
    const darkModeBtn = document.getElementById('darkModeBtn');
    
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        document.body.classList.add('dark-mode');
        if (darkModeBtn) darkModeBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeBtn) darkModeBtn.textContent = '🌙';
    }
};