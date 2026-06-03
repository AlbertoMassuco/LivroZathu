// dark-mode.js - Lógica completa do modo escuro com múltiplos botões

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
});

// Função principal do modo escuro
function initDarkMode() {
    // Buscar todos os botões de dark mode (podem ser vários)
    const darkModeBtns = document.querySelectorAll('#darkModeBtn, #darkModeBtnDesktop, #darkModeBtnMobile, #darkModeBtnFloat, .theme-toggle, .theme-toggle-mobile');
    
    console.log('🔍 Botões dark mode encontrados:', darkModeBtns.length);
    
    if (darkModeBtns.length === 0) {
        console.warn('⚠️ Nenhum botão dark mode encontrado!');
        return;
    }
    
    // Verificar preferência salva
    const savedMode = localStorage.getItem('darkMode');
    console.log('💾 Preferência salva:', savedMode);
    
    // Aplicar estado inicial
    if (savedMode === null) {
        // Se não houver preferência salva, usar sistema
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('🌓 Sistema prefere modo escuro?', systemPrefersDark);
        if (systemPrefersDark) {
            document.body.classList.add('dark-mode');
            atualizarTodosBotoes('☀️');
        } else {
            atualizarTodosBotoes('🌙');
        }
    } else {
        // Usar preferência salva
        const isDarkMode = savedMode === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            atualizarTodosBotoes('☀️');
        } else {
            atualizarTodosBotoes('🌙');
        }
    }
    
    // Adicionar evento a cada botão
    darkModeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDarkMode();
        });
    });
    
    // Ouvir mudanças no sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Só aplicar se não tiver preferência salva
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
                atualizarTodosBotoes('☀️');
            } else {
                document.body.classList.remove('dark-mode');
                atualizarTodosBotoes('🌙');
            }
        }
    });
}

// Função para atualizar todos os botões
function atualizarTodosBotoes(icone) {
    const allBtns = document.querySelectorAll('#darkModeBtn, #darkModeBtnDesktop, #darkModeBtnMobile, #darkModeBtnFloat, .theme-toggle, .theme-toggle-mobile');
    allBtns.forEach(btn => {
        // Para botões mobile que têm texto "Modo Escuro"
        if (btn.id === 'darkModeBtnMobile' || btn.classList.contains('theme-toggle-mobile')) {
            btn.textContent = icone === '☀️' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
        } else {
            btn.textContent = icone;
        }
    });
    console.log('🎨 Botões atualizados para:', icone === '☀️' ? 'Modo Escuro' : 'Modo Claro');
}

// Função para alternar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Salvar preferência
    localStorage.setItem('darkMode', isDark);
    
    // Atualizar todos os botões
    const icone = isDark ? '☀️' : '🌙';
    atualizarTodosBotoes(icone);
    
    console.log('🌙 Modo escuro:', isDark ? 'ATIVADO' : 'DESATIVADO');
    
    // Feedback visual
    const btns = document.querySelectorAll('#darkModeBtn, #darkModeBtnDesktop, #darkModeBtnMobile, #darkModeBtnFloat, .theme-toggle, .theme-toggle-mobile');
    btns.forEach(btn => {
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    });
}

// Função para verificar se está em modo escuro (útil para outros scripts)
window.isDarkMode = function() {
    return document.body.classList.contains('dark-mode');
};

// Função para forçar modo escuro
window.forceDarkMode = function(enable) {
    if (enable) {
        document.body.classList.add('dark-mode');
        atualizarTodosBotoes('☀️');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        atualizarTodosBotoes('🌙');
        localStorage.setItem('darkMode', 'false');
    }
};

// Função para resetar (voltar a seguir o sistema)
window.resetDarkMode = function() {
    localStorage.removeItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (systemPrefersDark) {
        document.body.classList.add('dark-mode');
        atualizarTodosBotoes('☀️');
    } else {
        document.body.classList.remove('dark-mode');
        atualizarTodosBotoes('🌙');
    }
};