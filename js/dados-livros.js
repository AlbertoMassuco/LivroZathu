// ===== DADOS DOS LIVROS EM PDF - VERSÃO COMPLETA =====
// Primário + Secundário + 8 Categorias (80 livros)

const LIVROS = {
    // ===== ENSINO PRIMÁRIO =====
    primario: {
        '1-classe': [
            { 
                id: 101, 
                titulo: 'Matemática 1ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/1Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Aprende números e contas de forma divertida!',
                descricao: '📚 Este livro vai ajudar o teu filho a dar os primeiros passos na Matemática. Com exercícios simples e ilustrações coloridas, aprender números nunca foi tão fácil! Perfeito para acompanhar o programa de ensino.',
                beneficios: [
                    '✅ Exercícios passo a passo',
                    '✅ Ilustrações que facilitam o aprendizado',
                    '✅ Alinhado com o programa do MINEDH',
                    '✅ Grátis - pode imprimir ou ler no computador'
                ],
                hashtags: '#Matemática #1Classe #EducaçãoInfantil #LivroZathu'
            },
            { 
                id: 102, 
                titulo: 'Português 1ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/1pclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Aprende a ler e escrever de forma divertida!',
                descricao: '📖 O livro de Português para a 1ª classe vai ajudar as crianças a descobrir o mundo das letras. Com atividades lúdicas e textos simples, a alfabetização torna-se uma aventura!',
                beneficios: [
                    '✅ Atividades de leitura e escrita',
                    '✅ Textos adequados para cada idade',
                    '✅ Desenvolve o vocabulário',
                    '✅ Material complementar gratuito'
                ],
                hashtags: '#Português #Alfabetização #1Classe #LivroZathu'
            }
        ],
        '2-classe': [
            { 
                id: 201, 
                titulo: 'Matemática 2ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/2Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Continua a aprender matemática com exercícios divertidos!',
                descricao: '📚 Matemática 2ª classe - O livro que vai ajudar o teu filho a dominar as operações básicas. Com muitos exercícios e exemplos práticos.',
                beneficios: [
                    '✅ Adição e subtração',
                    '✅ Problemas do dia a dia',
                    '✅ Atividades lúdicas',
                    '✅ Grátis e completo'
                ],
                hashtags: '#Matemática #2Classe #Educação #LivroZathu'
            },
            { 
                id: 202, 
                titulo: 'Português 2ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/2Pclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Melhora a leitura e escrita com histórias divertidas!',
                descricao: '📖 Português 2ª classe - Perfeito para desenvolver a compreensão leitora e a expressão escrita.',
                beneficios: [
                    '✅ Textos interessantes',
                    '✅ Exercícios de gramática',
                    '✅ Produção de texto',
                    '✅ Material gratuito'
                ],
                hashtags: '#Português #2Classe #Leitura #LivroZathu'
            }
        ],
        '3-classe': [
            { 
                id: 301, 
                titulo: 'Matemática 3ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/3Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Multiplicação e divisão de forma simples!',
                descricao: '📚 Matemática 3ª classe - Aprende multiplicação, divisão e muito mais com exercícios práticos.',
                beneficios: [
                    '✅ Tabuada completa',
                    '✅ Divisão passo a passo',
                    '✅ Problemas matemáticos',
                    '✅ Grátis'
                ],
                hashtags: '#Matemática #3Classe #Multiplicação #LivroZathu'
            }
        ],
        '4-classe': [
            { 
                id: 401, 
                titulo: 'Matemática 4ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/4Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Frações e geometria ficam fáceis!',
                descricao: '📚 Matemática 4ª classe - Conteúdo completo com frações, geometria e muito mais.',
                beneficios: [
                    '✅ Frações explicadas',
                    '✅ Formas geométricas',
                    '✅ Exercícios variados',
                    '✅ Download grátis'
                ],
                hashtags: '#Matemática #4Classe #Frações #LivroZathu'
            }
        ],
        '5-classe': [
            { 
                id: 501, 
                titulo: 'Matemática 5ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/5Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Números decimais e porcentagem sem mistério!',
                descricao: '📚 Matemática 5ª classe - Prepara-te para desafios maiores com este livro completo.',
                beneficios: [
                    '✅ Números decimais',
                    '✅ Porcentagem',
                    '✅ Problemas avançados',
                    '✅ Grátis'
                ],
                hashtags: '#Matemática #5Classe #Decimais #LivroZathu'
            }
        ],
        '6-classe': [
            { 
                id: 601, 
                titulo: 'Matemática 6ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/6Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Preparação para o secundário!',
                descricao: '📚 Matemática 6ª classe - O livro que prepara os alunos para o ensino secundário com conteúdo completo.',
                beneficios: [
                    '✅ Revisão geral',
                    '✅ Preparação para 7ª classe',
                    '✅ Exercícios desafiantes',
                    '✅ Completamente grátis'
                ],
                hashtags: '#Matemática #6Classe #Preparação #LivroZathu'
            }
        ]
    },
    
    // ===== ENSINO SECUNDÁRIO =====
    secundario: {
        '7-classe': [
            { 
                id: 701, 
                titulo: 'Matemática 7ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/7Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Álgebra e equações de forma simples!',
                descricao: '📚 Matemática 7ª classe - Primeiro ano do secundário com introdução à álgebra e equações.',
                beneficios: [
                    '✅ Equações simples',
                    '✅ Expressões algébricas',
                    '✅ Geometria avançada',
                    '✅ Grátis'
                ],
                hashtags: '#Matemática #7Classe #Secundário #LivroZathu'
            },
            { 
                id: 702, 
                titulo: 'Português 7ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/7Pclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Literatura e gramática aprofundadas!',
                descricao: '📖 Português 7ª classe - Estudo aprofundado da língua portuguesa com textos literários.',
                beneficios: [
                    '✅ Análise de textos',
                    '✅ Gramática completa',
                    '✅ Produção textual',
                    '✅ Material gratuito'
                ],
                hashtags: '#Português #7Classe #Literatura #LivroZathu'
            }
        ],
        '8-classe': [
            { 
                id: 801, 
                titulo: 'Matemática 8ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Sistemas de equações e funções!',
                descricao: '📚 Matemática 8ª classe - Aprofunda os conceitos algébricos e introduz funções.',
                beneficios: [
                    '✅ Sistemas de equações',
                    '✅ Funções',
                    '✅ Trigonometria básica',
                    '✅ Grátis'
                ],
                hashtags: '#Matemática #8Classe #Funções #LivroZathu'
            }
        ],
        '9-classe': [
            { 
                id: 901, 
                titulo: 'Matemática 9ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Geometria analítica e estatística!',
                descricao: '📚 Matemática 9ª classe - Conteúdos avançados para preparação para o ciclo seguinte.',
                beneficios: [
                    '✅ Geometria analítica',
                    '✅ Estatística',
                    '✅ Probabilidades',
                    '✅ Download grátis'
                ],
                hashtags: '#Matemática #9Classe #Geometria #LivroZathu'
            }
        ],
        '10-classe': [
            { 
                id: 1001, 
                titulo: 'Matemática 10ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/10Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Funções quadráticas e logaritmos!',
                descricao: '📚 Matemática 10ª classe - Conteúdos avançados para o 2º ciclo do secundário.',
                beneficios: [
                    '✅ Funções quadráticas',
                    '✅ Logaritmos',
                    '✅ Progressões',
                    '✅ Grátis'
                ],
                hashtags: '#Matemática #10Classe #Funções #LivroZathu'
            }
        ],
        '11-classe': [
            { 
                id: 1101, 
                titulo: 'Matemática 11ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Limites e derivadas!',
                descricao: '📚 Matemática 11ª classe - Introdução ao cálculo diferencial.',
                beneficios: [
                    '✅ Limites',
                    '✅ Derivadas',
                    '✅ Aplicações',
                    '✅ Grátis'
                ],
                hashtags: '#Matemática #11Classe #Cálculo #LivroZathu'
            }
        ],
        '12-classe': [
            { 
                id: 1201, 
                titulo: 'Matemática 12ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
                descricao_curta: 'Preparação para exames e universidade!',
                descricao: '📚 Matemática 12ª classe - Último ano do secundário com preparação para exames.',
                beneficios: [
                    '✅ Revisão completa',
                    '✅ Exercícios de exame',
                    '✅ Preparação universitária',
                    '✅ Completamente grátis'
                ],
                hashtags: '#Matemática #12Classe #Exames #LivroZathu'
            }
        ]
    },

    // ===== CATEGORIAS (8 CATEGORIAS × 10 LIVROS = 80 LIVROS) =====
    categorias: {
        // 🧠 Desenvolvimento Pessoal (10 livros)
        'desenvolvimento-pessoal': [
            { id: 1101, titulo: 'Hábitos Atómicos', disciplina: 'Desenvolvimento Pessoal', autor: 'James Clear', imagem: 'images/capas/desenvolvimento/habitos.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Pequenas mudanças, resultados extraordinários', hashtags: '#Hábitos #DesenvolvimentoPessoal #LivroZathu' },
            { id: 1102, titulo: 'O Poder do Agora', disciplina: 'Desenvolvimento Pessoal', autor: 'Eckhart Tolle', imagem: 'images/capas/desenvolvimento/agora.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Viva o momento presente', hashtags: '#Espiritualidade #Agora #LivroZathu' },
            { id: 1103, titulo: 'Os 7 Hábitos das Pessoas Altamente Eficazes', disciplina: 'Desenvolvimento Pessoal', autor: 'Stephen Covey', imagem: 'images/CULI/DIAB.png', visualizar: 'https://drive.google.com/file/d/1NVpcClpGzj1zRVQEd37V5-4KrvS33uTd/preview', download: 'https://drive.google.com/uc?export=download&id=1NVpcClpGzj1zRVQEd37V5-4KrvS33uTd', descricao_curta: 'Torne-se mais produtivo e eficaz', hashtags: '#Produtividade #Hábitos #LivroZathu' },
            { id: 1104, titulo: 'A Sutil Arte de Ligar o F*da-se', disciplina: 'Desenvolvimento Pessoal', autor: 'Mark Manson', imagem: 'images/capas/desenvolvimento/arte.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Uma perspectiva contraintuitiva sobre viver bem', hashtags: '#Autoajuda #FodaSe #LivroZathu' },
            { id: 1105, titulo: 'Mindset: A Nova Psicologia do Sucesso', disciplina: 'Desenvolvimento Pessoal', autor: 'Carol Dweck', imagem: 'images/capas/desenvolvimento/mindset.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Descubra o poder da mentalidade de crescimento', hashtags: '#Mindset #Sucesso #LivroZathu' },
            { id: 1106, titulo: 'Comece pelo Porquê', disciplina: 'Desenvolvimento Pessoal', autor: 'Simon Sinek', imagem: 'images/capas/desenvolvimento/porque.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Como grandes líderes inspiram ação', hashtags: '#Liderança #Propósito #LivroZathu' },
            { id: 1107, titulo: 'Inteligência Emocional', disciplina: 'Desenvolvimento Pessoal', autor: 'Daniel Goleman', imagem: 'images/capas/desenvolvimento/inteligencia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Aprenda a gerir suas emoções', hashtags: '#Emoções #InteligênciaEmocional #LivroZathu' },
            { id: 1108, titulo: 'O Milagre da Manhã', disciplina: 'Desenvolvimento Pessoal', autor: 'Hal Elrod', imagem: 'images/capas/desenvolvimento/manha.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Transforme sua vida antes das 8h', hashtags: '#Manhã #Produtividade #LivroZathu' },
            { id: 1109, titulo: 'Essencialismo', disciplina: 'Desenvolvimento Pessoal', autor: 'Greg McKeown', imagem: 'images/capas/desenvolvimento/essencialismo.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Menos mas melhor', hashtags: '#Essencialismo #Foco #LivroZathu' },
            { id: 1110, titulo: 'A Coragem de Ser Imperfeito', disciplina: 'Desenvolvimento Pessoal', autor: 'Brené Brown', imagem: 'images/capas/desenvolvimento/coragem.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Como a vulnerabilidade pode transformar sua vida', hashtags: '#Coragem #Vulnerabilidade #LivroZathu' }
        ],

        // 💼 Negócios e Finanças (10 livros)
        'negocios': [
            { id: 1201, titulo: 'Pai Rico, Pai Pobre', disciplina: 'Finanças', autor: 'Robert Kiyosaki', imagem: 'images/capas/negocios/pai-rico.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'O que os ricos ensinam aos filhos sobre dinheiro', hashtags: '#Finanças #Riqueza #LivroZathu' },
            { id: 1202, titulo: 'O Investidor Inteligente', disciplina: 'Finanças', autor: 'Benjamin Graham', imagem: 'images/capas/negocios/investidor.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'O guia clássico para investimentos', hashtags: '#Investimentos #Bolsa #LivroZathu' },
            { id: 1203, titulo: 'A Startup Enxuta', disciplina: 'Negócios', autor: 'Eric Ries', imagem: 'images/capas/negocios/startup.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Como empreender com eficiência', hashtags: '#Startup #Empreendedorismo #LivroZathu' },
            { id: 1204, titulo: 'De Zero a Um', disciplina: 'Negócios', autor: 'Peter Thiel', imagem: 'images/capas/negocios/zero-a-um.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Como construir o futuro', hashtags: '#Inovação #Startup #LivroZathu' },
            { id: 1205, titulo: 'O Jeito Disney de Encantar Clientes', disciplina: 'Negócios', autor: 'Disney Institute', imagem: 'images/capas/negocios/disney.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Segredos do atendimento da Disney', hashtags: '#Atendimento #Cliente #LivroZathu' },
            { id: 1206, titulo: 'Vender é Humano', disciplina: 'Negócios', autor: 'Daniel Pink', imagem: 'images/capas/negocios/vender.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'A arte de convencer os outros', hashtags: '#Vendas #Persuasão #LivroZathu' },
            { id: 1207, titulo: 'Os Segredos da Mente Milionária', disciplina: 'Finanças', autor: 'T. Harv Eker', imagem: 'images/capas/negocios/mente-milionaria.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Domine o jogo da riqueza', hashtags: '#Milionário #Riqueza #LivroZathu' },
            { id: 1208, titulo: 'Como Fazer Amigos e Influenciar Pessoas', disciplina: 'Negócios', autor: 'Dale Carnegie', imagem: 'images/capas/negocios/amigos.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'O clássico das relações humanas', hashtags: '#Relacionamentos #Influência #LivroZathu' },
            { id: 1209, titulo: 'O Lado Difícil das Situações Difíceis', disciplina: 'Negócios', autor: 'Ben Horowitz', imagem: 'images/capas/negocios/lado-dificil.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Lições de liderança', hashtags: '#Liderança #Gestão #LivroZathu' },
            { id: 1210, titulo: 'A Estratégia do Oceano Azul', disciplina: 'Negócios', autor: 'W. Chan Kim', imagem: 'images/capas/negocios/oceano-azul.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Como criar mercados inexplorados', hashtags: '#Estratégia #Inovação #LivroZathu' }
        ],

        // 💻 Tecnologia (10 livros)
        'tecnologia': [
            { id: 1301, titulo: 'Introdução à Programação', disciplina: 'Tecnologia', autor: 'Alberto Massuco', imagem: 'images/capas/tecnologia/programacao.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Aprenda a programar do zero', hashtags: '#Programação #Lógica #LivroZathu' },
            { id: 1302, titulo: 'HTML5 e CSS3', disciplina: 'Tecnologia', autor: 'Maurício Samy', imagem: 'images/capas/tecnologia/html-css.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Crie sites modernos', hashtags: '#HTML #CSS #Web #LivroZathu' },
            { id: 1303, titulo: 'JavaScript: O Guia Definitivo', disciplina: 'Tecnologia', autor: 'David Flanagan', imagem: 'images/capas/tecnologia/javascript.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Domine a linguagem da web', hashtags: '#JavaScript #JS #LivroZathu' },
            { id: 1304, titulo: 'Python para Iniciantes', disciplina: 'Tecnologia', autor: 'João Tembe', imagem: 'images/capas/tecnologia/python.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Aprenda Python de forma simples', hashtags: '#Python #Programação #LivroZathu' },
            { id: 1305, titulo: 'Inteligência Artificial', disciplina: 'Tecnologia', autor: 'Stuart Russell', imagem: 'images/capas/tecnologia/ia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Uma abordagem moderna', hashtags: '#IA #InteligênciaArtificial #LivroZathu' },
            { id: 1306, titulo: 'Banco de Dados', disciplina: 'Tecnologia', autor: 'Elmasri Navathe', imagem: 'images/capas/tecnologia/banco-dados.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Projeto e implementação', hashtags: '#BancoDeDados #SQL #LivroZathu' },
            { id: 1307, titulo: 'Redes de Computadores', disciplina: 'Tecnologia', autor: 'Tanenbaum', imagem: 'images/capas/tecnologia/redes.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'O guia completo de redes', hashtags: '#Redes #Computadores #LivroZathu' },
            { id: 1308, titulo: 'Segurança da Informação', disciplina: 'Tecnologia', autor: 'Stallings', imagem: 'images/capas/tecnologia/seguranca.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Proteja seus dados', hashtags: '#Segurança #Hacking #LivroZathu' },
            { id: 1309, titulo: 'React do Zero', disciplina: 'Tecnologia', autor: 'João Tembe', imagem: 'images/capas/tecnologia/react.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Crie interfaces modernas', hashtags: '#React #JavaScript #Frontend #LivroZathu' },
            { id: 1310, titulo: 'Git e GitHub', disciplina: 'Tecnologia', autor: 'Maria Langa', imagem: 'images/capas/tecnologia/git.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Controle de versão para programadores', hashtags: '#Git #GitHub #Versão #LivroZathu' }
        ],

        // ❤️ Saúde (10 livros)
        'saude': [
            { id: 1401, titulo: 'O Poder do Jejum Intermitente', disciplina: 'Saúde', autor: 'José Carlos', imagem: 'images/capas/saude/jejum.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Emagreça com saúde', hashtags: '#Jejum #Saúde #Emagrecimento #LivroZathu' },
            { id: 1402, titulo: 'Alimentação Saudável', disciplina: 'Saúde', autor: 'Maria Helena', imagem: 'images/capas/saude/alimentacao.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Guia completo de nutrição', hashtags: '#Nutrição #Alimentação #Saúde #LivroZathu' },
            { id: 1403, titulo: 'Exercícios Físicos em Casa', disciplina: 'Saúde', autor: 'Carlos Tembe', imagem: 'images/capas/saude/exercicios.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Fique em forma sem sair de casa', hashtags: '#Exercícios #Fitness #Saúde #LivroZathu' },
            { id: 1404, titulo: 'Saúde Mental', disciplina: 'Saúde', autor: 'Helena Cossa', imagem: 'images/capas/saude/mental.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Cuide da sua mente', hashtags: '#SaúdeMental #BemEstar #LivroZathu' },
            { id: 1405, titulo: 'Anatomia Humana', disciplina: 'Saúde', autor: 'Dr. Langa', imagem: 'images/capas/saude/anatomia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Conheça o corpo humano', hashtags: '#Anatomia #CorpoHumano #LivroZathu' },
            { id: 1406, titulo: 'Primeiros Socorros', disciplina: 'Saúde', autor: 'Cruz Vermelha', imagem: 'images/capas/saude/primeiros-socorros.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Saiba como agir em emergências', hashtags: '#PrimeirosSocorros #Emergência #LivroZathu' },
            { id: 1407, titulo: 'Fitoterapia', disciplina: 'Saúde', autor: 'Helena Mondlane', imagem: 'images/capas/saude/fitoterapia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Plantas que curam', hashtags: '#Plantas #Fitoterapia #Natural #LivroZathu' },
            { id: 1408, titulo: 'Medicina Tradicional Moçambicana', disciplina: 'Saúde', autor: 'António Uamba', imagem: 'images/capas/saude/medicina-tradicional.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Saberes ancestrais', hashtags: '#MedicinaTradicional #Moçambique #LivroZathu' },
            { id: 1409, titulo: 'Yoga para Iniciantes', disciplina: 'Saúde', autor: 'Helena Langa', imagem: 'images/capas/saude/yoga.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Equilíbrio entre corpo e mente', hashtags: '#Yoga #Meditação #Saúde #LivroZathu' },
            { id: 1410, titulo: 'Sono Reparador', disciplina: 'Saúde', autor: 'Dr. Mabjaia', imagem: 'images/capas/saude/sono.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Durma melhor e viva mais', hashtags: '#Sono #Descanso #Saúde #LivroZathu' }
        ],

        // 📖 Literatura (10 livros)
        'literatura': [
            { id: 1501, titulo: 'Mayombe', disciplina: 'Literatura', autor: 'Pepetela', imagem: 'images/capas/literatura/mayombe.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Clássico da literatura angolana', hashtags: '#Mayombe #Pepetela #Literatura #LivroZathu' },
            { id: 1502, titulo: 'Terra Sonâmbula', disciplina: 'Literatura', autor: 'Mia Couto', imagem: 'images/capas/literatura/terra-sonambula.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Obra-prima de Mia Couto', hashtags: '#MiaCouto #TerraSonâmbula #LivroZathu' },
            { id: 1503, titulo: 'Niketche: Uma História de Poligamia', disciplina: 'Literatura', autor: 'Paulina Chiziane', imagem: 'images/capas/literatura/niketche.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Primeira mulher moçambicana a publicar um romance', hashtags: '#Niketche #PaulinaChiziane #LivroZathu' },
            { id: 1504, titulo: 'Ualalapi', disciplina: 'Literatura', autor: 'Ungulani Ba Ka Khosa', imagem: 'images/capas/literatura/ualalapi.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'História de Ngungunhane', hashtags: '#Ualalapi #Ungulani #LivroZathu' },
            { id: 1505, titulo: 'Os Lusíadas', disciplina: 'Literatura', autor: 'Luís de Camões', imagem: 'images/capas/literatura/lusiadas.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Obra-prima da literatura portuguesa', hashtags: '#OsLusíadas #Camões #Literatura #LivroZathu' },
            { id: 1506, titulo: 'Capitães da Areia', disciplina: 'Literatura', autor: 'Jorge Amado', imagem: 'images/capas/literatura/capitaes.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Clássico brasileiro', hashtags: '#CapitãesDaAreia #JorgeAmado #LivroZathu' },
            { id: 1507, titulo: 'O Alquimista', disciplina: 'Literatura', autor: 'Paulo Coelho', imagem: 'images/capas/literatura/alquimista.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Um livro sobre seguir os sonhos', hashtags: '#OAlquimista #PauloCoelho #LivroZathu' },
            { id: 1508, titulo: 'Memórias Póstumas de Brás Cubas', disciplina: 'Literatura', autor: 'Machado de Assis', imagem: 'images/capas/literatura/bras-cubas.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Clássico da literatura brasileira', hashtags: '#MachadoDeAssis #BrásCubas #LivroZathu' },
            { id: 1509, titulo: 'Dom Casmurro', disciplina: 'Literatura', autor: 'Machado de Assis', imagem: 'images/capas/literatura/dom-casmurro.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Capitu traiu ou não?', hashtags: '#DomCasmurro #MachadoDeAssis #LivroZathu' },
            { id: 1510, titulo: 'Contos Moçambicanos', disciplina: 'Literatura', autor: 'Vários Autores', imagem: 'images/capas/literatura/contos.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Histórias da nossa terra', hashtags: '#Contos #Moçambique #Literatura #LivroZathu' }
        ],

        // 🍳 Culinária (10 livros)
        'culinaria': [
            { id: 1601, titulo: 'Culinária Moçambicana', disciplina: 'Culinária', autor: 'Helena Mondlane', imagem: 'images/capas/culinaria/mocambicana.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Sabores de Moçambique', hashtags: '#Culinária #Moçambique #Receitas #LivroZathu' },
            { id: 1602, titulo: 'Matapa e Outros Pratos', disciplina: 'Culinária', autor: 'Maria Langa', imagem: 'images/capas/culinaria/matapa.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Aprenda a fazer a melhor matapa', hashtags: '#Matapa #Culinária #Moçambicana #LivroZathu' },
            { id: 1603, titulo: 'Pão Caseiro', disciplina: 'Culinária', autor: 'João Tembe', imagem: 'images/capas/culinaria/pao.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Faça pão em casa', hashtags: '#Pão #Culinária #Receitas #LivroZathu' },
            { id: 1604, titulo: 'Doces e Sobremesas', disciplina: 'Culinária', autor: 'Helena Cossa', imagem: 'images/capas/culinaria/doces.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Receitas doces para todas as ocasiões', hashtags: '#Doces #Sobremesas #Culinária #LivroZathu' },
            { id: 1605, titulo: 'Frutos do Mar', disciplina: 'Culinária', autor: 'Carlos Tembe', imagem: 'images/capas/culinaria/frutos-mar.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Receitas com peixes e mariscos', hashtags: '#FrutosDoMar #Peixe #Culinária #LivroZathu' },
            { id: 1606, titulo: 'Cozinha Vegetariana', disciplina: 'Culinária', autor: 'Helena Langa', imagem: 'images/capas/culinaria/vegetariana.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Pratos sem carne', hashtags: '#Vegetariano #Culinária #Saúde #LivroZathu' },
            { id: 1607, titulo: 'Bolos e Tortas', disciplina: 'Culinária', autor: 'Isabel Uamba', imagem: 'images/capas/culinaria/bolos.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Receitas de bolos para todas as ocasiões', hashtags: '#Bolos #Tortas #Culinária #LivroZathu' },
            { id: 1608, titulo: 'Comida de Rua', disciplina: 'Culinária', autor: 'João Matsinhe', imagem: 'images/capas/culinaria/comida-rua.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Receitas populares', hashtags: '#ComidaDeRua #Culinária #Popular #LivroZathu' },
            { id: 1609, titulo: 'Bebidas e Sumos Naturais', disciplina: 'Culinária', autor: 'Helena Mondlane', imagem: 'images/capas/culinaria/bebidas.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Refresque-se com saúde', hashtags: '#Bebidas #Sumos #Naturais #LivroZathu' },
            { id: 1610, titulo: 'Cozinha Internacional', disciplina: 'Culinária', autor: 'Vários Autores', imagem: 'images/capas/culinaria/internacional.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Sabores do mundo', hashtags: '#CozinhaInternacional #Culinária #LivroZathu' }
        ],

        // 🔬 Ciência (10 livros)
        'ciencia': [
            { id: 1701, titulo: 'Física Moderna para Todos', disciplina: 'Ciência', autor: 'Carlos Tembe', imagem: 'images/capas/ciencia/fisica.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Aprenda física de forma simples', hashtags: '#Física #Ciência #LivroZathu' },
            { id: 1702, titulo: 'Química Básica', disciplina: 'Ciência', autor: 'Maria Langa', imagem: 'images/capas/ciencia/quimica.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Descubra o mundo da química', hashtags: '#Química #Ciência #LivroZathu' },
            { id: 1703, titulo: 'Biologia Marinha', disciplina: 'Ciência', autor: 'João Matsinhe', imagem: 'images/capas/ciencia/biologia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Explore a vida nos oceanos', hashtags: '#Biologia #Mar #Ciência #LivroZathu' },
            { id: 1704, titulo: 'Astronomia para Iniciantes', disciplina: 'Ciência', autor: 'Helena Cossa', imagem: 'images/capas/ciencia/astronomia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Descubra os segredos do universo', hashtags: '#Astronomia #Espaço #Ciência #LivroZathu' },
            { id: 1705, titulo: 'Matemática Divertida', disciplina: 'Ciência', autor: 'Alberto Massuco', imagem: 'images/capas/ciencia/matematica.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'A matemática pode ser divertida', hashtags: '#Matemática #Números #Ciência #LivroZathu' },
            { id: 1706, titulo: 'Geologia de Moçambique', disciplina: 'Ciência', autor: 'Armando Mabjaia', imagem: 'images/capas/ciencia/geologia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Conheça as riquezas minerais do país', hashtags: '#Geologia #Minerais #Moçambique #Ciência #LivroZathu' },
            { id: 1707, titulo: 'Botânica em Moçambique', disciplina: 'Ciência', autor: 'Helena Mondlane', imagem: 'images/capas/ciencia/botanica.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Conheça as plantas nativas', hashtags: '#Botânica #Plantas #Ciência #LivroZathu' },
            { id: 1708, titulo: 'Química Orgânica', disciplina: 'Ciência', autor: 'Isabel Uamba', imagem: 'images/capas/ciencia/quimica-organica.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Compostos de carbono simplificados', hashtags: '#QuímicaOrgânica #Carbono #Ciência #LivroZathu' },
            { id: 1709, titulo: 'Física Quântica', disciplina: 'Ciência', autor: 'Dário Macamo', imagem: 'images/capas/ciencia/fisica-quantica.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'O mundo subatômico explicado', hashtags: '#FísicaQuântica #Quantum #Ciência #LivroZathu' },
            { id: 1710, titulo: 'Zoologia', disciplina: 'Ciência', autor: 'Maria Langa', imagem: 'images/capas/ciencia/zoologia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Estudo dos animais', hashtags: '#Zoologia #Animais #Ciência #LivroZathu' }
        ],

        // 💑 Relacionamentos (10 livros)
        'relacionamentos': [
            { id: 1801, titulo: 'As 5 Linguagens do Amor', disciplina: 'Relacionamentos', autor: 'Gary Chapman', imagem: 'images/capas/relacionamentos/5-linguagens.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Descubra como expressar amor', hashtags: '#Amor #Relacionamentos #LivroZathu' },
            { id: 1802, titulo: 'Casamento Blindado', disciplina: 'Relacionamentos', autor: 'Renato Cardoso', imagem: 'images/capas/relacionamentos/casamento.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Fortaleça seu casamento', hashtags: '#Casamento #Família #LivroZathu' },
            { id: 1803, titulo: 'Namoro Blindado', disciplina: 'Relacionamentos', autor: 'Renato Cardoso', imagem: 'images/capas/relacionamentos/namoro.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Prepare-se para um relacionamento sólido', hashtags: '#Namoro #Relacionamento #LivroZathu' },
            { id: 1804, titulo: 'Pais Inteligentes Enriquecem os Filhos', disciplina: 'Relacionamentos', autor: 'Gustavo Cerbasi', imagem: 'images/capas/relacionamentos/pais.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Educação financeira para famílias', hashtags: '#Pais #Filhos #Educação #LivroZathu' },
            { id: 1805, titulo: 'Amar ou Depender', disciplina: 'Relacionamentos', autor: 'Walter Riso', imagem: 'images/capas/relacionamentos/amar-depender.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Como superar a dependência emocional', hashtags: '#DependênciaEmocional #Amor #LivroZathu' },
            { id: 1806, titulo: 'Família', disciplina: 'Relacionamentos', autor: 'Augusto Cury', imagem: 'images/capas/relacionamentos/familia.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Gestão de conflitos familiares', hashtags: '#Família #Conflitos #LivroZathu' },
            { id: 1807, titulo: 'A Conquista da Felicidade', disciplina: 'Relacionamentos', autor: 'Bertrand Russell', imagem: 'images/capas/relacionamentos/felicidade.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Reflexões sobre a felicidade', hashtags: '#Felicidade #Reflexão #LivroZathu' },
            { id: 1808, titulo: 'Relacionamentos Saudáveis', disciplina: 'Relacionamentos', autor: 'Helena Langa', imagem: 'images/capas/relacionamentos/saudaveis.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Construa vínculos fortes', hashtags: '#Relacionamentos #SaúdeEmocional #LivroZathu' },
            { id: 1809, titulo: 'O Amor nos Tempos do Cólera', disciplina: 'Relacionamentos', autor: 'Gabriel García Márquez', imagem: 'images/capas/relacionamentos/amor-cólera.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Uma história de amor duradoura', hashtags: '#Amor #Literatura #Relacionamentos #LivroZathu' },
            { id: 1810, titulo: 'Comunicação Não-Violenta', disciplina: 'Relacionamentos', autor: 'Marshall Rosenberg', imagem: 'images/capas/relacionamentos/comunicacao.jpg', visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', descricao_curta: 'Ferramentas para melhorar a comunicação', hashtags: '#Comunicação #CNV #Relacionamentos #LivroZathu' }
        ]
    }
};

// ===== FUNÇÕES AUXILIARES =====

// Buscar livros por nível e classe (Primário/Secundário)
function getLivrosPorClasse(nivel, classe) {
    if (nivel === 'primario') {
        return LIVROS.primario[classe] || [];
    } else if (nivel === 'secundario') {
        return LIVROS.secundario[classe] || [];
    }
    return [];
}

// Buscar livros por categoria
function getLivrosPorCategoria(categoriaId) {
    return LIVROS.categorias[categoriaId] || [];
}

// Buscar livro por ID (em qualquer lugar)
function getLivroPorId(id) {
    // Procura no primário
    for (let classe in LIVROS.primario) {
        const livro = LIVROS.primario[classe].find(l => l.id === id);
        if (livro) return livro;
    }
    
    // Procura no secundário
    for (let classe in LIVROS.secundario) {
        const livro = LIVROS.secundario[classe].find(l => l.id === id);
        if (livro) return livro;
    }
    
    // Procura nas categorias
    for (let categoria in LIVROS.categorias) {
        const livro = LIVROS.categorias[categoria].find(l => l.id === id);
        if (livro) return livro;
    }
    
    return null;
}

// Gerar texto para compartilhamento no WhatsApp
function gerarTextoWhatsApp(livro) {
    return `📚 *${livro.titulo}*%0A${livro.descricao_curta}%0A%0A📥 *Baixar grátis:*%0A${livro.download || 'https://livrozathu.co.mz/livro?id=' + livro.id}%0A%0A#LivroZathu #EducaçãoMoçambique`;
}

// Renderizar livros no HTML (com botão de visualizar e download)
function renderizarLivros(livros, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (!livros || livros.length === 0) {
        container.innerHTML = '<p class="sem-livros">Nenhum livro disponível.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    livros.forEach(livro => {
        const card = document.createElement('div');
        card.className = 'livro-card';
        card.innerHTML = `
            <img src="${livro.imagem || 'BI/Espera/livro-generico.png'}" 
                 alt="${livro.titulo}"
                 onerror="this.src='BI/Espera/livro-generico.png'">
            <h3 class="livro-titulo">${livro.titulo}</h3>
            <p class="livro-disciplina">${livro.disciplina}</p>
            <p class="livro-autor">${livro.autor || 'Autor'}</p>
            <p class="livro-descricao-curta">${livro.descricao_curta || ''}</p>
            <p class="livro-preco">📖 Grátis</p>
            <div class="livro-botoes">
                <a href="${livro.visualizar || livro.download}" target="_blank" class="btn btn-visualizar">
                    👁️ Visualizar
                </a>
                <a href="${livro.download}" download class="btn btn-download">
                    📥 Baixar
                </a>
                <button onclick="abrirCompartilhamento(${livro.id})" class="btn btn-share">
                    📢 Partilhar
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Abrir modal de compartilhamento
function abrirCompartilhamento(livroId) {
    const livro = getLivroPorId(livroId);
    if (!livro) return;
    
    if (document.querySelector('.modal-share')) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal-share';
    modal.innerHTML = `
        <div class="modal-share-content">
            <button class="modal-fechar" onclick="fecharModal(this)">✕</button>
            
            <h3>📢 Partilhar ${livro.titulo}</h3>
            
            <div class="livro-preview">
                <img src="${livro.imagem || 'BI/Espera/livro-generico.png'}" 
                     alt="${livro.titulo}"
                     onerror="this.src='BI/Espera/livro-generico.png'">
                <div>
                    <h4>${livro.titulo}</h4>
                    <p>${livro.descricao_curta}</p>
                </div>
            </div>
            
            <div class="redes-sociais">
                <button onclick="partilharWhatsApp(${livro.id})" class="rede-btn whatsapp">📱 WhatsApp</button>
                <button onclick="partilharFacebook(${livro.id})" class="rede-btn facebook">📘 Facebook</button>
                <button onclick="partilharTwitter(${livro.id})" class="rede-btn twitter">🐦 Twitter</button>
                <button onclick="partilharEmail(${livro.id})" class="rede-btn email">📧 Email</button>
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

// Funções de partilha
function partilharWhatsApp(livroId) {
    const livro = getLivroPorId(livroId);
    const texto = gerarTextoWhatsApp(livro);
    window.open(`https://wa.me/?text=${texto}`, '_blank');
}

function partilharFacebook(livroId) {
    const livro = getLivroPorId(livroId);
    const url = `https://livrozathu.co.mz/livro?id=${livro.id}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function partilharTwitter(livroId) {
    const livro = getLivroPorId(livroId);
    const texto = `📚 ${livro.titulo} - ${livro.descricao_curta}`;
    const url = `https://livrozathu.co.mz/livro?id=${livro.id}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
}

function partilharEmail(livroId) {
    const livro = getLivroPorId(livroId);
    const assunto = `📚 Livro gratuito: ${livro.titulo}`;
    const corpo = `Olá!\n\nEncontrei este livro gratuito no LivroZathu:\n\n📖 ${livro.titulo}\n📝 ${livro.descricao_curta}\n\n📥 Download: ${livro.download}\n\n#LivroZathu`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}

function copiarLink() {
    const input = document.getElementById('link-livro');
    if (!input) return;
    
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
    const btn = document.querySelector('.btn-copiar');
    const textoOriginal = btn.textContent;
    btn.textContent = '✅ Copiado!';
    setTimeout(() => {
        btn.textContent = textoOriginal;
    }, 2000);
}

function fecharModal(elemento) {
    const modal = elemento.closest('.modal-share');
    if (modal) modal.remove();
}

// Exportar funções
window.getLivrosPorClasse = getLivrosPorClasse;
window.getLivrosPorCategoria = getLivrosPorCategoria;
window.getLivroPorId = getLivroPorId;
window.renderizarLivros = renderizarLivros;
window.abrirCompartilhamento = abrirCompartilhamento;
window.partilharWhatsApp = partilharWhatsApp;
window.partilharFacebook = partilharFacebook;
window.partilharTwitter = partilharTwitter;
window.partilharEmail = partilharEmail;
window.copiarLink = copiarLink;
window.fecharModal = fecharModal;