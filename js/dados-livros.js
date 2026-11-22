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
                imagem: 'images/ED/PRI/we.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            {
                id: 102, 
                titulo: 'Português 1ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_124147902.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '2-classe': [
            { 
                id: 201, 
                titulo: 'Matemática 2ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_084030702.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            { 
                id: 202, 
                titulo: 'Português 2ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083845638.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '3-classe': [
            { 
                id: 301, 
                titulo: 'Matemática 3ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/3MAT.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 302, 
                titulo: 'Português 3ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_084100071.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],



        '4-classe': [
            { 
                id: 401, 
                titulo: 'Matemática 4ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083925018.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 402, 
                titulo: '4ª Classe', 
                disciplina: 'Ciencias-Naturais',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_124214060.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '5-classe': [
            { 
                id: 501, 
                titulo: '5ª Classe', 
                disciplina: 'Ciencias-Naturais',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083758094.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 502, 
                titulo: '5ª Classe', 
                disciplina: 'Educacao-Visual',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/5EDVISUAL.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 503, 
                titulo: '5ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083736514.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '6-classe': [
            { 
                id: 601, 
                titulo: '6ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083557379.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 602, 
                titulo: '6ª Classe', 
                disciplina: 'Ciencias-Naturais',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083400700.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 603, 
                titulo: '6ª Classe', 
                disciplina: 'Educacao-Visual',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083450389.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 604, 
                titulo: '6ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083637841.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 605, 
                titulo: '6ª Classe', 
                disciplina: 'Educacao-Fisica',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083510424.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 606, 
                titulo: '6ª Classe', 
                disciplina: 'Ciencias-Sociais',
                autor: 'MINEDH',
                imagem: 'images/ED/PRI/InShot_20260922_083432372.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
        ]
    },
    
    // ===== ENSINO SECUNDÁRIO =====
    secundario: {
        '7-classe': [
            { 
                id: 701, 
                titulo: '7ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082935368.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            { 
                id: 702, 
                titulo: 'Ficha de Apoio 7ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082852357.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 703, 
                titulo: 'Ficha de Apoio 7ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082823004.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
             { 
                id: 704, 
                titulo: 'Ficha de Apoio 7ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082800145.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '8-classe': [
            { 
                id: 801, 
                titulo: '8ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/1.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 802, 
                titulo: '8ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_083138298.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 803, 
                titulo: '8ª Classe', 
                disciplina: 'Ed-Fisica',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082618747.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 804, 
                titulo: '8ª Classe', 
                disciplina: 'Historia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082737336.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 805, 
                titulo: '8ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082434870.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 806, 
                titulo: '8ª Classe', 
                disciplina: 'Fisica',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082531188.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 807, 
                titulo: '8ª Classe', 
                disciplina: 'Educacao-Visual',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082355557.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
             { 
                id: 808, 
                titulo: '8ª Classe', 
                disciplina: 'Biologia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_082320301.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '9-classe': [
            { 
                id: 901, 
                titulo: '9ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083709934.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 902, 
                titulo: '9ª Classe', 
                disciplina: 'Quimica',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083748848.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 903, 
                titulo: '9ª Classe', 
                disciplina: 'historia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083632749.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 904, 
                titulo: '9ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083259962.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 905, 
                titulo: '9ª Classe', 
                disciplina: 'Física I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083152395.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 906, 
                titulo: '9ª Classe', 
                disciplina: 'Física II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083235155.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 907, 
                titulo: '9ª Classe', 
                disciplina: 'Empreendedorismo',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083118757.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 908, 
                titulo: '9ª Classe', 
                disciplina: 'Educação Visual',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_083053368.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '10-classe': [
            { 
                id: 1001, 
                titulo: '10ª Classe', 
                disciplina: 'Matemática I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082605605.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1002, 
                titulo: '10ª Classe', 
                disciplina: 'Matemática II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082634395.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1003, 
                titulo: '10ª Classe', 
                disciplina: 'Física I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082431233.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1004, 
                titulo: '10ª Classe', 
                disciplina: 'Física II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082538908.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '11-classe': [
            { 
                id: 1101, 
                titulo: '11ª Classe', 
                disciplina: 'TICs',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_083203266.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1102, 
                titulo: '11ª Classe', 
                disciplina: 'Física',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082104142.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1103, 
                titulo: '11ª Classe', 
                disciplina: 'Quimica I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082337734.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1104, 
                titulo: '11ª Classe', 
                disciplina: 'Quimica II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260922_083005129.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1105, 
                titulo: '11ª Classe', 
                disciplina: 'Ingles',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082406009.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1106, 
                titulo: '11ª Classe', 
                disciplina: 'História',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082310545.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1107, 
                titulo: '11ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082241631.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1108, 
                titulo: '11ª Classe', 
                disciplina: 'Filosofia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_082220891.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1109, 
                titulo: '11ª Classe', 
                disciplina: 'Biologia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081955103.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ],
        '12-classe': [
            { 
                id: 1201, 
                titulo: '12ª Classe', 
                disciplina: 'Agro-Pecuaria',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081123787.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1202, 
                titulo: '12ª Classe', 
                disciplina: 'Biologia I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081141925.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1203, 
                titulo: '12ª Classe', 
                disciplina: 'Biologia II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081212578.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1204, 
                titulo: '12ª Classe', 
                disciplina: 'DGD',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081233396.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1205, 
                titulo: '12ª Classe', 
                disciplina: 'Filosofia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081251146.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1206, 
                titulo: '12ª Classe', 
                disciplina: 'Fisica',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081346006.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1207, 
                titulo: '12ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081315176.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1208, 
                titulo: '12ª Classe', 
                disciplina: 'Historia',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081408806.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1209, 
                titulo: '12ª Classe', 
                disciplina: 'TICs',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081448315.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1210, 
                titulo: '12ª Classe', 
                disciplina: 'Matemática I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081511319.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1211, 
                titulo: '12ª Classe', 
                disciplina: 'Matemática II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081531273.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1212, 
                titulo: '12ª Classe', 
                disciplina: 'Matemática III',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081718302.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1213, 
                titulo: '12ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081622714.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            { 
                id: 1214, 
                titulo: '12ª Classe', 
                disciplina: 'Quimica I',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081808799.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1215, 
                titulo: '12ª Classe', 
                disciplina: 'Quimica II',
                autor: 'MINEDH',
                imagem: 'images/ED/SEC/InShot_20260921_081850645.jpg',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            }
        ]
    },

    // ===== CATEGORIAS (8 CATEGORIAS × 10 LIVROS = 80 LIVROS) =====
    categorias: {

        // 🧠 Desenvolvimento Pessoal (50 livros)
'desenvolvimento-pessoal': [

    // 1. ID: 1111
    { 
        id: 1111, 
        titulo: '1001 Frases de Grandes Pensadores', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Danilo E. Barba', 
        imagem: 'images/D Pessoal/InShot_20260925_131042766.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Coletânea com as melhores frases de grandes pensadores.', 
        hashtags: '#Filosofia #FrasesInspiradoras #Pensadores #Motivação #Sabedoria #LivroZathu' 
    },

    // 2. ID: 1112
    { 
        id: 1112, 
        titulo: '10 Coisas Importantes sobre Autoestima', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'André Lima', 
        imagem: 'images/D Pessoal/InShot_20260925_131016824.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fortalecimento da autoestima com técnicas de EFT.', 
        hashtags: '#Autoestima #EFT #Autoconfiança #SaúdeMental #BemEstar #LivroZathu' 
    },

    // 3. ID: 1113
    { 
        id: 1113, 
        titulo: '7 Passos para o Autoconhecimento', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Heloísa Capelas', 
        imagem: 'images/D Pessoal/InShot_20260925_130958473.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Jornada de transformação pela metodologia Hoffman.', 
        hashtags: '#Autoconhecimento #Liderança #MetodologiaHoffman #Transformação #Consciência #LivroZathu' 
    },

    // 4. ID: 1114
    { 
        id: 1114, 
        titulo: 'Os 7 Passos da Mulher Confiante', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Eloiá Hosana', 
        imagem: 'images/D Pessoal/InShot_20260925_130941809.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Autoconfiança e autoestima para uma vida plena.', 
        hashtags: '#EmpoderamentoFeminino #MulherConfiante #Autoestima #LiderançaFeminina #Sucesso #LivroZathu' 
    },

    // 5. ID: 1115
    { 
        id: 1115, 
        titulo: 'Administrando Pessoas', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Fernando Antônio da Silva', 
        imagem: 'images/D Pessoal/InShot_20260925_130739557.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Gestão de pessoas, liderança e valores nas organizações.', 
        hashtags: '#GestãoDePessoas #Liderança #RH #Carreira #Emoções #Valores #LivroZathu' 
    },

    // 6. ID: 1116
    { 
        id: 1116, 
        titulo: 'Administração do Tempo para Pessoas Atarefadas', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Paulo Wesley', 
        imagem: 'images/D Pessoal/InShot_20260925_130807024.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Domine a gestão do tempo e aumente a produtividade.', 
        hashtags: '#Produtividade #GestãoDoTempo #Foco #Organização #Eficiência #LivroZathu' 
    },

    // 7. ID: 1117
    { 
        id: 1117, 
        titulo: 'A Atitude Vencedora', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'John C. Maxwell', 
        imagem: 'images/D Pessoal/InShot_20260925_130919582.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Desenvolva uma atitude positiva e vencedora.', 
        hashtags: '#Atitude #Mindset #Sucesso #Liderança #Motivação #JohnMaxwell #LivroZathu' 
    },

    // 8. ID: 1118
    { 
        id: 1118, 
        titulo: 'A Arte de se Auto Conhecer', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Emanuella Maria', 
        imagem: 'images/D Pessoal/InShot_20260925_130827536.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '6 perguntas para descobrir paixões, valores e propósito.', 
        hashtags: '#Autoconhecimento #Propósito #DesenvolvimentoPessoal #Mindset #Reflexão #LivroZathu' 
    },

    // 9. ID: 1119
    { 
        id: 1119, 
        titulo: 'A Arte da Guerra', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Sun Tzu', 
        imagem: 'images/D Pessoal/InShot_20260925_130848610.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estratégias milenares para vencer desafios.', 
        hashtags: '#Estratégia #Liderança #SunTzu #Filosofia #Guerra #Negócios #LivroZathu' 
    },

    // 10. ID: 1120
    { 
        id: 1120, 
        titulo: 'Automotivação', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Anônimo', 
        imagem: 'images/Comum BooKs/EXTR/Automotivac.png', 
        visualizar: 'images/1.jpg', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Arte de se automotivar e mudar comportamentos.', 
        hashtags: '#Automotivação #Motivação #Psicologia #MudançaDeComportamento #DesenvolvimentoPessoal #LivroZathu' 
    },

    // 11. ID: 1121
    { 
        id: 1121, 
        titulo: '8 Atitudes para Alcançar o Sucesso', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Desconhecido', 
        imagem: 'images/Comum BooKs/EXTR/8 Atitudes para Alcan.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Atitudes essenciais para o estilo de vida ideal.', 
        hashtags: '#Sucesso #Atitudes #EstiloDeVida #Produtividade #Mindset #LivroZathu' 
    },

    // 12. ID: 1122
    { 
        id: 1122, 
        titulo: 'Associativismo', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Luis Artur', 
        imagem: 'images/D Pessoal/InShot_20260925_131204148.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Importância do associativismo para grupos e comunidades.', 
        hashtags: '#Associativismo #Comunicação #Grupos #Comunidade #Colaboração #LivroZathu' 
    },

    // 13. ID: 1123
    { 
        id: 1123, 
        titulo: 'As Armas da Persuasão', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Robert B. Cialdini', 
        imagem: 'images/D Pessoal/InShot_20260925_131341457.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '6 princípios da arte de influenciar e persuadir.', 
        hashtags: '#Persuasão #Influência #Psicologia #Vendas #Marketing #RobertCialdini #LivroZathu' 
    },

    // 14. ID: 1124
    { 
        id: 1124, 
        titulo: 'A Jornada do Líder', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Jacqueline Mendes Menezes', 
        imagem: 'images/D Pessoal/InShot_20260925_131320258.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramentas para liderar equipes de alto desempenho.', 
        hashtags: '#Liderança #GestãoDePessoas #DesenvolvimentoDeLideres #Carreira #MundoVUCA #LivroZathu' 
    },

    // 15. ID: 1125
    { 
        id: 1125, 
        titulo: 'A Sutil Arte de Ligar o F*da-se', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Mark Manson', 
        imagem: 'images/D Pessoal/InShot_20260925_131221715.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Foque no que realmente importa na vida.', 
        hashtags: '#MarkManson #DesenvolvimentoPessoal #FilosofiaDeVida #Autoajuda #Mindset #LivroZathu' 
    },

    // 16. ID: 1126
    { 
        id: 1126, 
        titulo: 'Como Fazer Amigos e Influenciar Pessoas', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Dale Carnegie', 
        imagem: 'images/D Pessoal/InShot_20260925_131628583.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Técnicas para se tornar influente e querido.', 
        hashtags: '#DaleCarnegie #Relacionamentos #Persuasão #Liderança #Comunicação #DesenvolvimentoPessoal #LivroZathu' 
    },

    // 17. ID: 1127
    { 
        id: 1127, 
        titulo: 'Coaching: Uma Oportunidade de Transformação', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Vera Ruth de Carvalho Fidalgo (et al.)', 
        imagem: 'images/D Pessoal/InShot_20260925_131121438.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Metodologia de coaching para desenvolvimento pessoal.', 
        hashtags: '#Coaching #TransformaçãoPessoal #Liderança #DesenvolvimentoProfissional #PNL #InteligênciaEmocional #LivroZathu' 
    },

    // 18. ID: 1128
    { 
        id: 1128, 
        titulo: 'Coaching para Pessoas Disponíveis', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'M. Ramos', 
        imagem: 'images/D Pessoal/InShot_20260925_131144750.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Recupere a autoestima e encontre novas oportunidades.', 
        hashtags: '#Desemprego #Autoestima #Motivação #Carreira #Coaching #Recomeço #LivroZathu' 
    },

    // 19. ID: 1129
    { 
        id: 1129, 
        titulo: 'Budismo para Iniciantes', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'The Blokehead', 
        imagem: 'images/D Pessoal/InShot_20260925_131100759.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '7 passos para alcançar a iluminação e consciência plena.', 
        hashtags: '#Budismo #Meditação #Iluminação #Mindfulness #Espiritualidade #Autoconhecimento #LivroZathu' 
    },

    // 20. ID: 1130
    { 
        id: 1130, 
        titulo: 'Desenvolvimento Pessoal - Autodesenvolvimento e Sucesso', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Mentor Tecnologia & Instituto MVC', 
        imagem: 'images/D Pessoal/InShot_20260925_131524305.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia sobre autodesenvolvimento e inteligência emocional.', 
        hashtags: '#Autodesenvolvimento #InteligênciaEmocional #SucessoPessoal #Liderança #Autoconhecimento #LivroZathu' 
    },

    // 21. ID: 1131
    { 
        id: 1131, 
        titulo: 'Personal Branding - Marca Pessoal', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Evelin Machado Barbosa', 
        imagem: 'images/D Pessoal/InShot_20260925_131500369.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Construção e gerenciamento da marca pessoal.', 
        hashtags: '#PersonalBranding #MarcaPessoal #Reputação #Autenticidade #Carreira #Branding #LivroZathu' 
    },

    // 22. ID: 1132
    { 
        id: 1132, 
        titulo: 'Comunicação Interpessoal', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Sónia Soares', 
        imagem: 'images/D Pessoal/InShot_20260925_131433149.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Assertividade e gestão de conflitos na comunicação.', 
        hashtags: '#Comunicação #Assertividade #Relacionamentos #Liderança #PNL #InteligênciaEmocional #LivroZathu' 
    },

    // 23. ID: 1133
    { 
        id: 1133, 
        titulo: 'Como se Tornar Sobrenatural', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Dr. Joe Dispenza', 
        imagem: 'images/Comum BooKs/EXTR/Como se Tornar Sobrenatural.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Desperte seu potencial com neurociência e física quântica.', 
        hashtags: '#JoeDispenza #Meditação #Neurociência #Epigenética #FísicaQuântica #Transformação #LivroZathu' 
    },

    // 24. ID: 1134
    { 
        id: 1134, 
        titulo: 'Planejamento Estratégico Pessoal', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Elaine Maria Costa', 
        imagem: 'images/Comum BooKs/EXTR/Planejamento Estratégico Pessoal.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramentas como SWOT para metas e objetivos.', 
        hashtags: '#PlanejamentoEstratégico #Metas #Objetivos #SWOT #Carreira #Produtividade #LivroZathu' 
    },

    // 26. ID: 1136
    { 
        id: 1136, 
        titulo: 'Frases para Iluminar e Inspirar o seu Dia', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Coletânea', 
        imagem: 'images/D Pessoal/InShot_20260925_131933775.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '250 frases para motivar e inspirar o dia a dia.', 
        hashtags: '#FrasesMotivacionais #Inspiração #Sabedoria #Reflexão #DesenvolvimentoPessoal #LivroZathu' 
    },

    // 27. ID: 1137
    { 
        id: 1137, 
        titulo: 'Dinâmicas de Grupo com Confiança', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Luís Matos Martins, Raquel Oliveira e Vanessa Batista', 
        imagem: 'images/D Pessoal/InShot_20260925_201302683.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Dinâmicas para motivar equipes e fortalecer relações.', 
        hashtags: '#DinâmicasDeGrupo #Teambuilding #Liderança #Motivação #TrabalhoEmEquipe #Comunicação #LivroZathu' 
    },

    // 28. ID: 1138
    { 
        id: 1138, 
        titulo: 'Desistir Nunca', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Raphael Gouvea Monteiro', 
        imagem: 'images/D Pessoal/InShot_20260925_201159445.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Persistência para alcançar sonhos e metas.', 
        hashtags: '#Motivação #Persistência #Sonhos #Metas #Superação #DesenvolvimentoPessoal #LivroZathu' 
    },

    // 29. ID: 1139
    { 
        id: 1139, 
        titulo: 'Desenvolvimento Pessoal e Interpessoal', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Ricardo Barcellos e Maria Cristina J. M. Pedroso', 
        imagem: 'images/D Pessoal/InShot_20260925_131548464.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Gestão de pessoas, liderança e inteligência emocional.', 
        hashtags: '#DesenvolvimentoPessoal #RelacionamentoInterpessoal #Liderança #InteligênciaEmocional #Carreira #GestãoDePessoas #LivroZathu' 
    },

    // 30. ID: 1140
    { 
        id: 1140, 
        titulo: 'Desenvolvimento Pessoal - Guia para Jovens', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'A Igreja de Jesus Cristo dos Santos dos Últimos Dias', 
        imagem: 'images/Comum BooKs/EXTR/Desenvolvimento Pessoal - Guia para Jovens.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia espiritual e prático para jovens.', 
        hashtags: '#DesenvolvimentoPessoal #Jovens #Espiritualidade #Propósito #CrescimentoPessoal #JesusCristo #LivroZathu' 
    },

    // 32. ID: 1142
    { 
        id: 1142, 
        titulo: 'Liderança Educacional (Vol. I)', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Cláudia Neves e Susana Henriques (Orgs.)', 
        imagem: 'images/Comum BooKs/EXTR/Liderança Educacional: Contributos da Investigação.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Artigos sobre liderança e gestão escolar.', 
        hashtags: '#LiderançaEducacional #GestãoEscolar #Educação #Inovação #PesquisaEducacional #LivroZathu' 
    },

    // 33. ID: 1143
    { 
        id: 1143, 
        titulo: 'Jovens: Vocês e a Vida', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Fr. M. A. Bellouard, O. P.', 
        imagem: 'images/D Pessoal/InShot_20260925_131802957.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia espiritual para jovens sobre identidade e fé.', 
        hashtags: '#Jovens #Espiritualidade #Fé #DesenvolvimentoPessoal #Reflexão #Cristianismo #LivroZathu' 
    },

    // 34. ID: 1144
    { 
        id: 1144, 
        titulo: 'Introdução à Psicologia do Ser', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Abraham H. Maslow', 
        imagem: 'images/D Pessoal/InShot_20260925_131821484.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Auto-realização e crescimento pessoal segundo Maslow.', 
        hashtags: '#PsicologiaHumanística #Maslow #AutoRealização #CrescimentoPessoal #ExperiênciasCulminantes #PsicologiaDoSer #LivroZathu' 
    },

    // 35. ID: 1145
    { 
        id: 1145, 
        titulo: 'Independência e Autoconfiança', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'SEBRAE Bahia', 
        imagem: 'images/Comum BooKs/EXTR/Independência e Autoconfiança.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AUQI', 
        descricao_curta: 'Desenvolva autonomia e autoconfiança para empreender.', 
        hashtags: '#Empreendedorismo #Autoconfiança #Independência #DesenvolvimentoPessoal #SEBRAE #AutoEficácia #LivroZathu' 
    },

    // 36. ID: 1146
    { 
        id: 1146, 
        titulo: 'Guia Completo sobre Autoestima', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Thaiana F. Brotto', 
        imagem: 'images/D Pessoal/InShot_20260925_132015581.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '10 passos para desenvolver uma autoestima saudável.', 
        hashtags: '#Autoestima #Autoconhecimento #Autoaceitação #Psicologia #BemEstar #SaúdeMental #LivroZathu' 
    },

    // 39. ID: 1149
    { 
        id: 1149, 
        titulo: 'Network: Como Construir uma Boa Rede de Contatos', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'SEBRAE', 
        imagem: 'images/D Pessoal/InShot_20260925_201325924.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Construa e mantenha uma rede de contatos sólida.', 
        hashtags: '#Network #Networking #ContatosProfissionais #Empreendedorismo #Relacionamentos #SEBRAE #LivroZathu' 
    },

    // 40. ID: 1150
    { 
        id: 1150, 
        titulo: 'Motivação nas Organizações', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Bruna Caroline Moreira Soares', 
        imagem: 'images/Comum BooKs/EXTR/Motivacao nas organizacos.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Teorias de Maslow, Herzberg e Taylor sobre motivação.', 
        hashtags: '#Motivação #Liderança #RecursosHumanos #ComportamentoOrganizacional #GestãoDePessoas #Produtividade #LivroZathu' 
    },

    // 41. ID: 1151
    { 
        id: 1151, 
        titulo: 'A Liderança na Gestão de Equipes', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'SEBRAE-SP', 
        imagem: 'images/Comum BooKs/EXTR/A Liderança na Gestão de Equipes.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estilos de liderança, comunicação e feedback.', 
        hashtags: '#Liderança #GestãoDeEquipes #Comunicação #Feedback #Motivação #Conflitos #SEBRAE #LivroZathu' 
    },

    // 42. ID: 1152
    { 
        id: 1152, 
        titulo: 'Lideranças e Inovação em Contextos Educativos', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Lídia Grave, Glória Bastos, Isolina Oliveira (Coord.)', 
        imagem: 'images/D Pessoal/InShot_20260925_201559763.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Artigos sobre liderança educacional e inovação.', 
        hashtags: '#LiderançaEducacional #Inovação #Educação #LiderançaDistribuída #ComunidadesDePrática #Ensino #LivroZathu' 
    },

    // 43. ID: 1153
    { 
        id: 1153, 
        titulo: 'Liderança e Motivação de Equipas (UFCD 5436)', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Manuel Pinto', 
        imagem: 'images/Comum BooKs/EXTR/Liderança e Motivação de Equipas.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Teorias de motivação e dinâmicas de grupo.', 
        hashtags: '#Liderança #Motivação #Equipas #Comunicação #DinâmicasDeGrupo #Gestão #LivroZathu' 
    },

    // 44. ID: 1154
    { 
        id: 1154, 
        titulo: 'Liderança Educacional: Contributos da Investigação (Vol. I)', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Cláudia Neves e Susana Henriques (Orgs.)', 
        imagem: 'images/Comum BooKs/EXTR/Liderança Educacional: Contributos da Investigação.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Artigos sobre gestão e inovação nas escolas.', 
        hashtags: '#LiderançaEducacional #GestãoEscolar #Educação #Inovação #PesquisaEducacional #LivroZathu' 
    },

    // 46. ID: 1156
    { 
        id: 1156, 
        titulo: 'O Manual Definitivo do Coach em Início de Carreira', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Geronimo Theml', 
        imagem: 'images/Comum BooKs/EXTR/Manual Coach.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia prático para coaches iniciantes.', 
        hashtags: '#Coaching #Coach #DesenvolvimentoPessoal #Liderança #Carreira #GeronimoTheml #LivroZathu' 
    },

    // 47. ID: 1157
    { 
        id: 1157, 
        titulo: 'O Homem Mais Rico da Babilônia', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'George S. Clason', 
        imagem: 'images/D Pessoal/InShot_20260925_201226253.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Princípios atemporais de riqueza e educação financeira.', 
        hashtags: '#Finanças #Riqueza #EducaçãoFinanceira #Investimentos #Poupança #GeorgeClason #LivroZathu' 
    },

    // 48. ID: 1158
    { 
        id: 1158, 
        titulo: 'Nunca Fiques Onde Já Não Estás', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Manuel Clemente', 
        imagem: 'images/D Pessoal/InShot_20260925_201405572.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Liberte-se do que já não te serve.', 
        hashtags: '#Autoconhecimento #Libertação #Propósito #DesenvolvimentoPessoal #Mudança #ManuelClemente #LivroZathu' 
    },

    // 49. ID: 1159
    { 
        id: 1159, 
        titulo: 'Noite Escura da Alma', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'São João da Cruz', 
        imagem: 'images/D Pessoal/InShot_20260925_201347653.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Purificação da alma e união mística com Deus.', 
        hashtags: '#Misticismo #Espiritualidade #SãoJoãoDaCruz #Contemplação #Purificação #Fé #LivroZathu' 
    },

],

        // 💼 Negócios (40 livros)
'negocios': [

    // 1. ID: 1211
    { 
        id: 1211, 
        titulo: 'A Sabedoria do Investimento', 
        disciplina: 'Finanças', 
        autor: 'Marcelo de Oliveira Passos', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162537776.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '1300 citações de investidores e pensadores.', 
        hashtags: '#Citações #Investimentos #LivroZathu' 
    },

    // 2. ID: 1212
    { 
        id: 1212, 
        titulo: 'A Riqueza das Nações', 
        disciplina: 'Economia', 
        autor: 'Adam Smith', 
        imagem: 'images/Comum BooKs/EXTR/A Riqueza das Nações.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico fundamental da Economia Política.', 
        hashtags: '#Economia #Clássico #LivroZathu' 
    },

    // 3. ID: 1213
    { 
        id: 1213, 
        titulo: 'A Energia do Dinheiro', 
        disciplina: 'Finanças', 
        autor: 'Glória Maria Garcia Pereira', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162415945.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Faça dinheiro com consciência e equilíbrio.', 
        hashtags: '#FinançasPessoais #Mentalidade #LivroZathu' 
    },

    // 4. ID: 1214
    { 
        id: 1214, 
        titulo: '100 Casos de Lavagem de Dinheiro', 
        disciplina: 'Finanças', 
        autor: 'Grupo de Egmont', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162320023.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Casos reais de inteligência financeira.', 
        hashtags: '#Prevenção #InteligênciaFinanceira #LivroZathu' 
    },

    // 5. ID: 1215
    { 
        id: 1215, 
        titulo: 'O Investidor Inteligente', 
        disciplina: 'Finanças', 
        autor: 'Benjamin Graham', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161757342.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Bíblia do investimento em valor.', 
        hashtags: '#ValueInvesting #BenjaminGraham #LivroZathu' 
    },

    // 6. ID: 1216
    { 
        id: 1216, 
        titulo: 'Pai Rico, Pai Pobre', 
        disciplina: 'Finanças', 
        autor: 'Robert Kiyosaki', 
        imagem: 'images/Negoci e Finan/InShot_20260920_160511252.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'O que os ricos ensinam sobre dinheiro.', 
        hashtags: '#EducaçãoFinanceira #Mentalidade #LivroZathu' 
    },

    // 7. ID: 1217
    { 
        id: 1217, 
        titulo: 'Os Segredos da Mente Milionária', 
        disciplina: 'Finanças', 
        autor: 'T. Harv Eker', 
        imagem: 'images/Comum BooKs/EXTR/Os Segredos da Mente Milionária.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reprograme sua mentalidade para a riqueza.', 
        hashtags: '#Mentalidade #Riqueza #LivroZathu' 
    },

    // 11. ID: 1221
    { 
        id: 1221, 
        titulo: 'A Psicologia do Dinheiro', 
        disciplina: 'Finanças Comportamentais', 
        autor: 'Dan Ariely e Jeff Kreisler', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162351773.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Como as emoções sabotam decisões financeiras.', 
        hashtags: '#FinançasComportamentais #Psicologia #LivroZathu' 
    },

    // 12. ID: 1222
    { 
        id: 1222, 
        titulo: 'Educação Financeira Infantil', 
        disciplina: 'Finanças', 
        autor: 'Sebrae Previdência', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161821403.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para ensinar finanças às crianças.', 
        hashtags: '#EducaçãoFinanceira #Infantil #LivroZathu' 
    },

    // 13. ID: 1223
    { 
        id: 1223, 
        titulo: 'Educação Financeira nas Escolas', 
        disciplina: 'Finanças', 
        autor: 'Comitê Nacional de Educação Financeira', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162657694.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Material oficial para ensino de finanças.', 
        hashtags: '#EducaçãoFinanceira #Escola #LivroZathu' 
    },

    // 14. ID: 1224
    { 
        id: 1224, 
        titulo: 'Como Criar um Plano de Negócio', 
        disciplina: 'Negócios', 
        autor: 'PwC', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162633307.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramenta vital para a continuidade da empresa.', 
        hashtags: '#PlanoDeNegócio #Empreendedorismo #LivroZathu' 
    },

    // 21. ID: 1231
    { 
        id: 1231, 
        titulo: 'Capital Empreendedor', 
        disciplina: 'Finanças', 
        autor: 'Centro de Estudos Estratégicos (CEDES)', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162605671.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Private equity e venture capital no Brasil.', 
        hashtags: '#PrivateEquity #VentureCapital #Inovação #LivroZathu' 
    },
    // 31. ID: 1241
    { 
        id: 1241, 
        titulo: 'Microeconomia', 
        disciplina: 'Economia', 
        autor: 'Paulo Augusto Meyer Mattos Nascimento & Fabiano Mezadre Pompermayer', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161732424.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conceitos de oferta, demanda e eficiência de mercado.', 
        hashtags: '#Microeconomia #Economia #Mercado #OfertaDemanda #LivroZathu' 
    },

    // 32. ID: 1242
    { 
        id: 1242, 
        titulo: 'Macroeconomia', 
        disciplina: 'Economia', 
        autor: 'Fernando de Holanda Barbosa', 
        imagem: 'images/Comum BooKs/EXTR/Macroeconomia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Modelos IS-LM, inflação e políticas monetária e fiscal.', 
        hashtags: '#Macroeconomia #Inflação #PolíticaMonetária #PolíticaFiscal #ISLM #LivroZathu' 
    },

    // 33. ID: 1243
    { 
        id: 1243, 
        titulo: 'Marketing Pessoal', 
        disciplina: 'Vendas', 
        autor: 'Sofia Rodrigues (Coletânea)', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161635218.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Construa sua marca pessoal e networking.', 
        hashtags: '#MarketingPessoal #Branding #Networking #Carreira #LivroZathu' 
    },

    // 34. ID: 1244
    { 
        id: 1244, 
        titulo: 'Manual de Empreendedorismo', 
        disciplina: 'Empreendedorismo', 
        autor: 'Sofia Rodrigues', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161854256.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Perfil, planejamento e inovação para empreendedores.', 
        hashtags: '#Empreendedorismo #PlanejamentoEstratégico #Inovação #Liderança #Gestão #LivroZathu' 
    },

    // 35. ID: 1245
    { 
        id: 1245, 
        titulo: 'Lean Enterprise', 
        disciplina: 'Administração', 
        autor: 'Jez Humble, Joanne Molesky & Barry O\'Reilly', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161426452.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estratégias para criar organizações inovadoras.', 
        hashtags: '#LeanEnterprise #Inovação #StartupEnxuta #CulturaOrganizacional #Agile #LivroZathu' 
    },

    // 36. ID: 1246
    { 
        id: 1246, 
        titulo: 'Guia de Gestão Empresarial', 
        disciplina: 'Administração', 
        autor: 'SEBRAE', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162216698.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Gestão de pequenos negócios com foco em eficiência.', 
        hashtags: '#GestãoEmpresarial #SEBRAE #PequenosNegócios #Empreendedorismo #LivroZathu' 
    },

    // 37. ID: 1247
    { 
        id: 1247, 
        titulo: 'Inteligência Emocional em Vendas', 
        disciplina: 'Vendas', 
        autor: 'Jeb Blount', 
        imagem: 'images/Comum BooKs/EXTR/Inteligência Emocional em Vendas.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Supervendedores usam a inteligência emocional.', 
        hashtags: '#InteligênciaEmocional #Vendas #Persuasão #PsicologiaDeVendas #LivroZathu' 
    },

    // 38. ID: 1248
    { 
        id: 1248, 
        titulo: 'História do Pensamento Econômico', 
        disciplina: 'Economia', 
        autor: 'Stanley L. Brue', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162246807.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Trajetória das ideias econômicas desde o mercantilismo.', 
        hashtags: '#HistóriaDaEconomia #EscolasEconômicas #Smith #Marx #Keynes #LivroZathu' 
    },

    // 39. ID: 1249
    { 
        id: 1249, 
        titulo: 'Introdução à Economia', 
        disciplina: 'Economia', 
        autor: 'Carlos Magno Mendes et al.', 
        imagem: 'images/Negoci e Finan/InShot_20260920_161240390.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conceitos fundamentais de macro e microeconomia.', 
        hashtags: '#IntroduçãoÀEconomia #Microeconomia #Macroeconomia #Finanças #LivroZathu' 
    },

    // 40. ID: 1250
    { 
        id: 1250, 
        titulo: 'Fora da Curva', 
        disciplina: 'Finanças', 
        autor: 'Florian Bartunek, Giuliana Napolitano & Pierre Moreau', 
        imagem: 'images/Negoci e Finan/InShot_20260920_162048822.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estratégias dos principais investidores brasileiros.', 
        hashtags: '#Investimentos #MercadoFinanceiro #GestãoDeRisco #Brasil #LivroZathu' 
    }

],
    
 
// 💻 Tecnologia (75 livros)
'tecnologia': [

    // 11. ID: 1311
    { 
        id: 1311, 
        titulo: 'A importância social e econômica da Criptografia', 
        disciplina: 'Segurança da Informação', 
        autor: 'Coalizão Direitos na Rede', 
        imagem: 'images/Tecnolog1/InShot_20260930_180133505.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CRIPTOGRAFIA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CRIPTOGRAFIA', 
        descricao_curta: 'Proteção de dados, privacidade e segurança digital.', 
        hashtags: '#Criptografia #Segurança #Privacidade #LivroZathu' 
    },

    // 12. ID: 1312
    { 
        id: 1312, 
        titulo: 'Algoritmos e Lógica de Programação', 
        disciplina: 'Programação', 
        autor: 'Juliana Schiavetto Dauricio', 
        imagem: 'images/Tecnolog1/InShot_20260930_175246677.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_ALGORITMOS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_ALGORITMOS', 
        descricao_curta: 'Fundamentos da programação e lógica computacional.', 
        hashtags: '#Algoritmos #Lógica #Programação #LivroZathu' 
    },

    // 14. ID: 1314
    { 
        id: 1314, 
        titulo: 'Camada de Aplicação - Redes de Computadores', 
        disciplina: 'Redes', 
        autor: 'Material Didático', 
        imagem: 'images/Tecnolog1/InShot_20260930_175300199.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_REDES_APLICACAO/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_REDES_APLICACAO', 
        descricao_curta: 'Protocolos HTTP, FTP, SMTP, DNS e arquitetura cliente-servidor.', 
        hashtags: '#Redes #HTTP #DNS #TCP #LivroZathu' 
    },

    // 17. ID: 1317
    { 
        id: 1317, 
        titulo: 'Excel - Básico e Intermediário', 
        disciplina: 'Ferramentas', 
        autor: 'Minicurso', 
        imagem: 'images/Tecnolog1/InShot_20260930_170615614.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_EXCEL/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_EXCEL', 
        descricao_curta: 'Fórmulas, funções, tabelas dinâmicas e gráficos.', 
        hashtags: '#Excel #Planilhas #Fórmulas #Produtividade #LivroZathu' 
    },

    // 19. ID: 1319
    { 
        id: 1319, 
        titulo: 'Arquitetura de Computadores', 
        disciplina: 'Hardware', 
        autor: 'Mauro Lopes Carvalho Silva', 
        imagem: 'images/Tecnolog1/InShot_20260930_175208675.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_ARQUITETURA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_ARQUITETURA', 
        descricao_curta: 'CPU, memórias, barramentos e sistemas numéricos.', 
        hashtags: '#Arquitetura #Hardware #CPU #Memória #LivroZathu' 
    },

    // 20. ID: 1320
    { 
        id: 1320, 
        titulo: 'Big Data: Técnicas e tecnologias para extração de valor dos dados', 
        disciplina: 'Ciência de Dados', 
        autor: 'Rosangela de Fátima Pereira Marquesone', 
        imagem: 'images/Tecnolog1/InShot_20260930_175352915.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_BIG_DATA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_BIG_DATA', 
        descricao_curta: 'Entenda os 3 Vs, Hadoop, NoSQL e visualização de dados.', 
        hashtags: '#BigData #Hadoop #NoSQL #DataScience #LivroZathu' 
    },

    // 21. ID: 1321
    { 
        id: 1321, 
        titulo: 'C++ Eficaz: 55 maneiras de aprimorar seus programas', 
        disciplina: 'Programação', 
        autor: 'Scott Meyers', 
        imagem: 'images/Tecnolog1/InShot_20260930_175456574.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CPP_EFICAZ/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CPP_EFICAZ', 
        descricao_curta: 'O clássico para programadores C++ profissionais.', 
        hashtags: '#C++ #Programação #OrientaçãoAObjetos #Templates #LivroZathu' 
    },

    // 22. ID: 1322
    { 
        id: 1322, 
        titulo: 'C# e Orientação a Objetos', 
        disciplina: 'Programação', 
        autor: 'Caelum', 
        imagem: 'images/Tecnolog1/InShot_20260930_175731364.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CSHARP_OBJETOS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CSHARP_OBJETOS', 
        descricao_curta: 'Curso completo de C# .NET, LINQ e Windows Forms.', 
        hashtags: '#CSharp #DotNet #LINQ #WindowsForms #LivroZathu' 
    },

    // 23. ID: 1323
    { 
        id: 1323, 
        titulo: 'Cibersegurança', 
        disciplina: 'Segurança da Informação', 
        autor: 'Vários autores (IDN)', 
        imagem: 'images/Tecnolog1/InShot_20260930_175755560.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CIBERSEGURANCA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CIBERSEGURANCA', 
        descricao_curta: 'Segurança cibernética, geopolítica do ciberespaço.', 
        hashtags: '#Cibersegurança #Ciberespaço #Segurança #Geopolítica #LivroZathu' 
    },

    // 24. ID: 1324
    { 
        id: 1324, 
        titulo: 'Ciência de dados: algoritmos e aplicações', 
        disciplina: 'Ciência de Dados', 
        autor: 'Faria, Oliveira, Pinto, Szwarcfiter', 
        imagem: 'images/Tecnolog1/InShot_20260930_175713111.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CIENCIA_DADOS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CIENCIA_DADOS', 
        descricao_curta: 'Algoritmos randomizados, dados massivos e machine learning.', 
        hashtags: '#DataScience #Algoritmos #MachineLearning #BigData #LivroZathu' 
    },

    // 25. ID: 1325
    { 
        id: 1325, 
        titulo: 'Cinco coisas sobre Wi-Fi 6 e 5G', 
        disciplina: 'Redes', 
        autor: 'Cisco', 
        imagem: 'images/Tecnolog1/InShot_20260930_175040195.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_WIFI6_5G/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_WIFI6_5G', 
        descricao_curta: 'Infográfico comparativo sobre conectividade.', 
        hashtags: '#WiFi6 #5G #Conectividade #Redes #Tecnologia #LivroZathu' 
    },

    // 26. ID: 1326
    { 
        id: 1326, 
        titulo: 'Como o Google Funciona', 
        disciplina: 'Gestão de Tecnologia', 
        autor: 'Eric Schmidt, Jonathan Rosenberg', 
        imagem: 'images/Tecnolog1/InShot_20260930_180036636.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_GOOGLE_FUNCIONA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_GOOGLE_FUNCIONA', 
        descricao_curta: 'Gestão de criativos, cultura organizacional e inovação.', 
        hashtags: '#Google #Gestão #Inovação #CulturaOrganizacional #LivroZathu' 
    },

    // 29. ID: 1329
    { 
        id: 1329, 
        titulo: 'Fundamentos de Redes de Computadores', 
        disciplina: 'Redes de Computadores', 
        autor: 'Thatiane Cristina dos Santos de Carvalho Ribeiro', 
        imagem: 'images/Tecnolog1/InShot_20260930_170558137.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_FUNDAMENTOS_REDES/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_FUNDAMENTOS_REDES', 
        descricao_curta: 'Protocolos OSI/TCP/IP, meios de transmissão e redes de alta velocidade.', 
        hashtags: '#Redes #OSI #TCPIP #Ethernet #Wireless #CabeamentoEstruturado #LivroZathu' 
    },

    // 30. ID: 1330
    { 
        id: 1330, 
        titulo: 'Estruturas de Dados e Algoritmos com JavaScript', 
        disciplina: 'Programação', 
        autor: 'Loiane Groner', 
        imagem: 'images/Tecnolog1/InShot_20260930_170649105.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_ESTRUTURAS_DADOS_JS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_ESTRUTURAS_DADOS_JS', 
        descricao_curta: 'Pilhas, filas, listas, árvores, grafos e ordenação com JS.', 
        hashtags: '#EstruturasDeDados #Algoritmos #JavaScript #Árvores #Grafos #Ordenação #LivroZathu' 
    },

    // 31. ID: 1331
    { 
        id: 1331, 
        titulo: 'Estruturação de Páginas usando HTML e CSS', 
        disciplina: 'Desenvolvimento Web', 
        autor: 'Caelum', 
        imagem: 'images/Tecnolog1/InShot_20260930_170631032.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_HTML_CSS_CAELUM/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_HTML_CSS_CAELUM', 
        descricao_curta: 'HTML5, CSS3, Flexbox, Grid e responsividade mobile-first.', 
        hashtags: '#HTML5 #CSS3 #Flexbox #Grid #Responsividade #MobileFirst #FrontEnd #LivroZathu' 
    },

    // 33. ID: 1333
    { 
        id: 1333, 
        titulo: 'Introdução à Informática com LibreOffice', 
        disciplina: 'Informática Básica', 
        autor: 'Andressa Sebben, Antonio Carlos Henriques Marques (Orgs.)', 
        imagem: 'images/Tecnolog1/InShot_20260930_170831887.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_INTRODUCAO_INFORMATICA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_INTRODUCAO_INFORMATICA', 
        descricao_curta: 'Hardware, software, Windows, Internet e LibreOffice.', 
        hashtags: '#Informatica #LibreOffice #Windows #Internet #Writer #Calc #Impress #LivroZathu' 
    },

    // 34. ID: 1334
    { 
        id: 1334, 
        titulo: 'Serviço de Fotocópia - Ideia de Negócio', 
        disciplina: 'Empreendedorismo', 
        autor: 'Sebrae', 
        imagem: 'images/Tecnolog1/InShot_20260930_170911145.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_SERVICO_FOTOCOPIA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_SERVICO_FOTOCOPIA', 
        descricao_curta: 'Guia para montar negócio de fotocópias.', 
        hashtags: '#Empreendedorismo #Fotocopia #Negocios #Sebrae #Gestao #LivroZathu' 
    },

    // 35. ID: 1335
    { 
        id: 1335, 
        titulo: 'Guia Arduino Iniciante', 
        disciplina: 'Eletrônica / Robótica', 
        autor: 'Multilógica-Shop', 
        imagem: 'images/Tecnolog1/InShot_20260930_180735645.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_ARDUINO_INICIANTE/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_ARDUINO_INICIANTE', 
        descricao_curta: 'Aprenda Arduino do zero com 11 tutoriais práticos.', 
        hashtags: '#Arduino #Eletronica #Robotica #DIY #OpenSource #Programacao #LivroZathu' 
    },

    // 36. ID: 1336
    { 
        id: 1336, 
        titulo: 'Guia com mais de 500 comandos do Linux', 
        disciplina: 'Linux / Sistemas Operacionais', 
        autor: 'Bruno Andrade', 
        imagem: 'images/Tecnolog1/InShot_20260930_175633410.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_COMANDOS_LINUX/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_COMANDOS_LINUX', 
        descricao_curta: 'Comandos do terminal Linux explicados em português.', 
        hashtags: '#Linux #Terminal #Comandos #SysAdmin #Ubuntu #Debian #Fedora #LivroZathu' 
    },

    // 37. ID: 1337
    { 
        id: 1337, 
        titulo: 'Comunicação Digital: Media, Práticas e Consumos', 
        disciplina: 'Comunicação Digital', 
        autor: 'Paula Lopes, Bruno Reis (Coords.)', 
        imagem: 'images/Tecnolog1/InShot_20260930_175911350.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_COMUNICACAO_DIGITAL/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_COMUNICACAO_DIGITAL', 
        descricao_curta: 'Fake news, cidadania digital, eSports e inteligência artificial.', 
        hashtags: '#ComunicaçãoDigital #Media #FakeNews #CidadaniaDigital #eSports #Algoritmos #LivroZathu' 
    },

    // 38. ID: 1338
    { 
        id: 1338, 
        titulo: 'Desvendando o CodeIgniter 4', 
        disciplina: 'Programação PHP', 
        autor: 'Jonathan Lamim', 
        imagem: 'images/Tecnolog1/InShot_20260930_180059570.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CODEIGNITER4/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CODEIGNITER4', 
        descricao_curta: 'MVC, Query Builder, Migrations e Segurança no CodeIgniter.', 
        hashtags: '#CodeIgniter #PHP #Framework #MVC #Programação #BancoDeDados #LivroZathu' 
    },

    // 39. ID: 1339
    { 
        id: 1339, 
        titulo: 'Engenharia de Confiabilidade do Google', 
        disciplina: 'Engenharia de Software', 
        autor: 'Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy', 
        imagem: 'images/Tecnolog1/InShot_20260930_170504138.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_SRE/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_SRE', 
        descricao_curta: 'SRE, monitoração, SLOs, automação e escalabilidade.', 
        hashtags: '#SRE #Google #Engenharia #Confiabilidade #DevOps #Monitoração #LivroZathu' 
    },

    // 40. ID: 1340
    { 
        id: 1340, 
        titulo: 'Elixir: Do Zero à Concorrência', 
        disciplina: 'Programação Funcional', 
        autor: 'Tiago Davi', 
        imagem: 'images/Tecnolog1/InShot_20260930_170523584.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_ELIXIR/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_ELIXIR', 
        descricao_curta: 'Programação funcional, concorrência e paralelismo em Elixir.', 
        hashtags: '#Elixir #ProgramaçãoFuncional #Concorrência #Erlang #Phoenix #LivroZathu' 
    },

    // 41. ID: 1341
    { 
        id: 1341, 
        titulo: 'Do PHP ao Laminas: Domine as boas práticas', 
        disciplina: 'Programação PHP', 
        autor: 'Flávio Gomes da Silva Lisboa', 
        imagem: 'images/Tecnolog1/InShot_20260930_170419218.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_LAMINAS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_LAMINAS', 
        descricao_curta: 'MVC, MVVM, ORM, rotas e controladores no Laminas.', 
        hashtags: '#PHP #Laminas #Framework #MVC #ORM #Programação #LivroZathu' 
    },

    // 42. ID: 1342
    { 
        id: 1342, 
        titulo: 'Guia Prático HTML & CSS', 
        disciplina: 'Programação Web', 
        autor: 'Wallace Fragoso', 
        imagem: 'images/Tecnolog1/InShot_20260930_170708557.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conceitos básicos de HTML e CSS para iniciantes.', 
        hashtags: '#HTML #CSS #ProgramacaoWeb #DesenvolvimentoWeb #FrontEnd #LivroZathu' 
    },

    // 43. ID: 1343
    { 
        id: 1343, 
        titulo: 'TI em Pequenas Empresas Para Leigos', 
        disciplina: 'Tecnologia da Informação', 
        autor: 'John Wiley & Sons Canada, Ltd.', 
        imagem: 'images/Tecnolog1/InShot_20260930_175103848.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'TI, redes sem fio, segurança, VoIP e sites para pequenas empresas.', 
        hashtags: '#TI #PequenasEmpresas #Tecnologia #Redes #Segurança #VoIP #LivroZathu' 
    },

    // 44. ID: 1344
    { 
        id: 1344, 
        titulo: 'Software Livre, Cultura Hacker e Ecossistema da Colaboração', 
        disciplina: 'Tecnologia e Sociedade', 
        autor: 'Anderson Fernandes de Alencar, Murilo Bansi Machado, Rafael Evangelista, Sergio Amadeu da Silveira, Vicente Macedo de Aguiar (Org.)', 
        imagem: 'images/Tecnolog1/InShot_20260930_175138995.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Artigos sobre software livre, cultura hacker e produção colaborativa.', 
        hashtags: '#SoftwareLivre #CulturaHacker #Colaboração #GNOME #Debian #Linux #CreativeCommons #LivroZathu' 
    },

    // 45. ID: 1345
    { 
        id: 1345, 
        titulo: 'Segurança da Informação e de Redes', 
        disciplina: 'Segurança da Informação', 
        autor: 'Emilio Tissato Nakamura', 
        imagem: 'images/Tecnolog1/InShot_20260930_175121527.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fundamentos de segurança, criptografia, firewalls e políticas.', 
        hashtags: '#SegurançaDaInformação #Redes #Criptografia #Firewall #PolíticasDeSegurança #ISO27001 #LivroZathu' 
    },

    // 46. ID: 1346
    { 
        id: 1346, 
        titulo: 'Cartilha da Segurança da Informação e Comunicações', 
        disciplina: 'Segurança da Informação', 
        autor: 'Comitê Gestor de Tecnologia da Informação da Presidência da República (CGTI/PR) e DIRTI', 
        imagem: 'images/Tecnolog1/InShot_20260930_174948446.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Boas práticas: senhas, certificação digital e antivírus.', 
        hashtags: '#SegurançaDaInformação #Cartilha #Senhas #Phishing #CertificaçãoDigital #Governo #BoasPráticas #LivroZathu' 
    },

    // 47. ID: 1347
    { 
        id: 1347, 
        titulo: 'Robótica e Processos Formativos: Da Epistemologia aos Kits', 
        disciplina: 'Educação e Tecnologia', 
        autor: 'Deise Aparecida Peralta (Org.)', 
        imagem: 'images/Tecnolog1/InShot_20260930_175004812.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Robótica educacional da infantil ao ensino superior.', 
        hashtags: '#RobóticaEducacional #Robótica #Ensino #EducaçãoInfantil #Construcionismo #STEAM #CulturaMaker #LivroZathu' 
    },

    // 48. ID: 1348
    { 
        id: 1348, 
        titulo: 'Redes Sem Fio', 
        disciplina: 'Redes de Computadores', 
        autor: 'Prof. Msc. Hélio Esperidião', 
        imagem: 'images/Tecnolog1/InShot_20260930_175018011.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ondas eletromagnéticas, padrões IEEE 802.11 e topologias.', 
        hashtags: '#RedesSemFio #WiFi #IEEE80211 #Tecnologia #LivroZathu' 
    },

    // 49. ID: 1349
    { 
        id: 1349, 
        titulo: 'Redes de Computadores e Comunicação de Dados', 
        disciplina: 'Redes de Computadores', 
        autor: 'Curt M. White', 
        imagem: 'images/Tecnolog1/InShot_20260930_180829746.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fundamentos de dados, sinais, redes locais e Internet.', 
        hashtags: '#Redes #ComunicacaoDeDados #TCPIP #OSI #Seguranca #LivroZathu' 
    },

    // 50. ID: 1350
    { 
        id: 1350, 
        titulo: 'Python para Desenvolvedores', 
        disciplina: 'Programação', 
        autor: 'Luiz Eduardo Borges', 
        imagem: 'images/Tecnolog1/InShot_20260930_180848708.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sintaxe, programação funcional, orientação a objetos.', 
        hashtags: '#Python #Programacao #Desenvolvimento #LinguagemDinamica #LivroZathu' 
    },

    // 51. ID: 1351
    { 
        id: 1351, 
        titulo: 'Programação para Iniciantes - Lógica com Java', 
        disciplina: 'Programação', 
        autor: 'Alexandre Afonso', 
        imagem: 'images/Tecnolog1/InShot_20260930_180354681.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Algoritmos, variáveis, estruturas de decisão e laços.', 
        hashtags: '#Java #LogicaDeProgramacao #Iniciante #Algoritmos #Programacao #LivroZathu' 
    },

    // 52. ID: 1352
    { 
        id: 1352, 
        titulo: 'Engenharia de Software: Uma Abordagem Profissional', 
        disciplina: 'Engenharia de Software', 
        autor: 'Roger S. Pressman', 
        imagem: 'images/Tecnolog1/InShot_20260930_170448906.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Processos, métodos, ferramentas e qualidade de software.', 
        hashtags: '#EngenhariaDeSoftware #ProcessosDeSoftware #DesenvolvimentoAgil #UML #QualidadeDeSoftware #RogerPressman #LivroZathu' 
    },

    // 53. ID: 1353
    { 
        id: 1353, 
        titulo: 'Guia de Cibersegurança para Cidades Inteligentes', 
        disciplina: 'Segurança da Informação', 
        autor: 'Lorenzo Cotino, Marco Sánchez', 
        imagem: 'images/Tecnolog1/InShot_20260930_170741034.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Proteção de cidades inteligentes contra ataques cibernéticos.', 
        hashtags: '#Ciberseguranca #CidadesInteligentes #SmartCities #SegurancaDigital #Governanca #BID #ProtecaoDeDados #IoT #LivroZathu' 
    },

    // 54. ID: 1354
    { 
        id: 1354, 
        titulo: 'Introdução à Linguagem de Programação Go', 
        disciplina: 'Programação', 
        autor: 'Prof. José Cintra', 
        imagem: 'images/Tecnolog1/InShot_20260930_171306694.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Tipos de dados, funções e ponteiros em Go.', 
        hashtags: '#Go #Golang #Programacao #LinguagemGo #Backend #DesenvolvimentoWeb #Algoritmos #LivroZathu' 
    },

    // 55. ID: 1355
    { 
        id: 1355, 
        titulo: 'Informática Básica para o Ensino Técnico Profissionalizante', 
        disciplina: 'Informática', 
        autor: 'Diógenes Ferreira Reis Fustinoni, Fabiano Cavalcanti Fernandes, Frederico Nogueira Leite', 
        imagem: 'images/Tecnolog1/InShot_20260930_171032319.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Hardware, software, editores de texto e planilhas.', 
        hashtags: '#Informatica #Hardware #Software #Windows #Linux #Word #Excel #Internet #EnsinoTecnico #InclusaoDigital #LivroZathu' 
    },

    // 56. ID: 1356
    { 
        id: 1356, 
        titulo: 'Curso de Informática Avançada', 
        disciplina: 'Informática', 
        autor: 'Artemilson Lima, Deborah Vieira de Alencar Maia, Elizama Lemos, Maria Jane de Queiroz', 
        imagem: 'images/Tecnolog1/InShot_20260930_170850129.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'EaD, sistemas operacionais, pacote Office e material didático.', 
        hashtags: '#Informatica #EaD #EducacaoADistancia #Windows #Linux #Word #Excel #PowerPoint #MaterialDidatico #Office #LivroZathu' 
    },

    // 57. ID: 1357
    { 
        id: 1357, 
        titulo: 'HTML5 e CSS3 com Farinha e Pimenta', 
        disciplina: 'Desenvolvimento Web', 
        autor: 'Diego Eis e Elcio Ferreira', 
        imagem: 'images/Tecnolog1/InShot_20260930_170724006.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'APIs, seletores, animações e transformações 2D/3D.', 
        hashtags: '#HTML5 #CSS3 #DesenvolvimentoWeb #FrontEnd #WebDesign #Programacao #JavaScript #APIs #DesignResponsivo #LivroZathu' 
    },

    // 58. ID: 1358
    { 
        id: 1358, 
        titulo: 'Guia para Criar sua Identidade Visual e Divulgar a sua Marca', 
        disciplina: 'Marketing e Design', 
        autor: 'HubSpot e WeDoLogos', 
        imagem: 'images/Tecnolog1/InShot_20260930_170801603.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Criação de identidade visual, branding e materiais de divulgação.', 
        hashtags: '#IdentidadeVisual #Branding #Marketing #Design #Logotipo #CriacaoDeMarca #Divulgacao #DesignGrafico #LivroZathu' 
    },

    // 59. ID: 1359
    { 
        id: 1359, 
        titulo: 'Java Básico e Orientação a Objeto', 
        disciplina: 'Programação', 
        autor: 'Clayton Escouper das Chagas, Cássia Blondet Baruque, Lúcia Blondet Baruque', 
        imagem: 'images/Tecnolog1/InShot_20260930_170955442.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Curso completo de Java e programação orientada a objetos.', 
        hashtags: '#Java #Programacao #OrientacaoAObjeto #POO #LivroZathu' 
    },

    // 60. ID: 1360
    { 
        id: 1360, 
        titulo: 'Java para Desenvolvimento Web', 
        disciplina: 'Programação Web', 
        autor: 'Caelum', 
        imagem: 'images/Tecnolog1/InShot_20260930_171110137.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Servlets, JSP, JSTL, Spring MVC, JPA e Hibernate.', 
        hashtags: '#JavaWeb #Servlet #JSP #SpringMVC #Hibernate #LivroZathu' 
    },

    // 61. ID: 1361
    { 
        id: 1361, 
        titulo: 'Investigação Digital em Fontes Abertas', 
        disciplina: 'Segurança da Informação', 
        autor: 'Alesandro Gonçalves Barreto, Emerson Wendt, Guilherme Caselli', 
        imagem: 'images/Tecnolog1/InShot_20260930_171010995.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Investigação com redes sociais, metadados e ferramentas de busca.', 
        hashtags: '#InvestigacaoDigital #FontesAbertas #Ciberseguranca #InteligenciaDigital #LivroZathu' 
    },

    // 62. ID: 1362
    { 
        id: 1362, 
        titulo: 'Introdução à Programação - Curso em C++', 
        disciplina: 'Programação', 
        autor: 'Alan R. R. de Freitas', 
        imagem: 'images/Tecnolog1/InShot_20260930_175543672.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estruturas básicas, POO e estruturas de dados em C++.', 
        hashtags: '#CPlusPlus #Programacao #POO #EstruturasDeDados #LivroZathu' 
    },

    // 63. ID: 1363
    { 
        id: 1363, 
        titulo: 'Introdução ao desenvolvimento de games: Volume 1', 
        disciplina: 'Design e Desenvolvimento de Jogos', 
        autor: 'Steve Rabin (Editor)', 
        imagem: 'images/Tecnolog1/InShot_20260930_170400256.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História, design, programação, arte e gestão de projetos.', 
        hashtags: '#GameDesign #DesenvolvimentoDeGames #IndustriaDeGames #GameDev #LivroZathu' 
    },

    // 64. ID: 1364
    { 
        id: 1364, 
        titulo: 'Introdução à Mineração de Dados', 
        disciplina: 'Ciência de Dados', 
        autor: 'Leandro Nunes de Castro e Daniel Gomes Ferrari', 
        imagem: 'images/Tecnolog1/InShot_20260930_180431635.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pré-processamento, classificação, agrupamento e regras de associação.', 
        hashtags: '#MineraçãoDeDados #BigData #AprendizagemDeMaquina #DataScience #LivroZathu' 
    },

    // 65. ID: 1365
    { 
        id: 1365, 
        titulo: 'JavaScript: O Guia Definitivo', 
        disciplina: 'Programação Web', 
        autor: 'David Flanagan', 
        imagem: 'images/Tecnolog1/InShot_20260930_180536532.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fundamentos, HTML5, jQuery e APIs avançadas.', 
        hashtags: '#JavaScript #Web #Programacao #HTML5 #jQuery #LivroZathu' 
    },

    // 66. ID: 1366
    { 
        id: 1366, 
        titulo: 'JavaScript de Alto Desempenho', 
        disciplina: 'Programação Web', 
        autor: 'Nicholas C. Zakas', 
        imagem: 'images/Tecnolog1/InShot_20260930_180509277.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Otimização de código, DOM, algoritmos e performance.', 
        hashtags: '#JavaScript #Performance #Otimizacao #Web #Desenvolvimento #LivroZathu' 
    },

    // 67. ID: 1367
    { 
        id: 1367, 
        titulo: 'O Guia do Hacke', 
        disciplina: 'Segurança da Informação', 
        autor: 'Nicholas Ferreira', 
        imagem: 'images/Tecnolog1/InShot_20260930_171229638.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ética, engenharia social, pentest e malwares para iniciantes.', 
        hashtags: '#Hacker #Seguranca #Pentest #LivroZathu' 
    },

    // 68. ID: 1368
    { 
        id: 1368, 
        titulo: 'Noções de Lógica', 
        disciplina: 'Computação', 
        autor: 'Gustavo Augusto Lima de Campos e Jerffeson Teixeira de Souza', 
        imagem: 'images/Tecnolog1/InShot_20260930_171247963.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Lógica proposicional e de predicados para programação.', 
        hashtags: '#Logica #Programacao #Matematica #LivroZathu' 
    },

    // 69. ID: 1369
    { 
        id: 1369, 
        titulo: 'Meu primeiro APP Android', 
        disciplina: 'Desenvolvimento Mobile', 
        autor: 'LuizTools', 
        imagem: 'images/Tecnolog1/InShot_20260930_171211950.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Crie e publique seu primeiro aplicativo Android.', 
        hashtags: '#Android #Mobile #Java #LivroZathu' 
    },

    // 70. ID: 1370
    { 
        id: 1370, 
        titulo: 'Manual de Investigação Cibernética', 
        disciplina: 'Direito e Segurança', 
        autor: 'Alesandro Gonçalves Barreto e Beatriz Silveira Brasil', 
        imagem: 'images/Tecnolog1/InShot_20260930_170935590.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Investigação de cibercrimes à luz do Marco Civil da Internet.', 
        hashtags: '#Cibercrime #Investigacao #MarcoCivil #LivroZathu' 
    },

    // 71. ID: 1371
    { 
        id: 1371, 
        titulo: 'Curso de Linguagem PHP', 
        disciplina: 'Programação Web', 
        autor: 'Maurício Vivas de Souza Barreto', 
        imagem: 'images/Tecnolog1/InShot_20260930_171328193.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sintaxe, funções, banco de dados e desenvolvimento web em PHP.', 
        hashtags: '#PHP #Web #Programacao #LivroZathu' 
    },

    // 72. ID: 1372
    { 
        id: 1372, 
        titulo: 'C - Completo e Total', 
        disciplina: 'Tecnologia', 
        autor: 'Herbert Schildt', 
        imagem: 'images/Tecnolog1/InShot_20260930_175518188.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia definitivo da linguagem C: ponteiros, estruturas e mais.', 
        hashtags: '#C #LinguagemC #HerbertSchildt #Programacao #LivroZathu' 
    },

    // 73. ID: 1373
    { 
        id: 1373, 
        titulo: 'Manual do Utilizador - Brother DCP-8085DN', 
        disciplina: 'Tecnologia', 
        autor: 'Brother Industries Ltd.', 
        imagem: 'images/Tecnolog1/InShot_20260930_180411323.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual completo da impressora multifuncional Brother.', 
        hashtags: '#Brother #DCP8085DN #Impressora #Manual #Tecnologia #LivroZathu' 
    },

    // 74. ID: 1374
    { 
        id: 1374, 
        titulo: 'PowerShell - Guia para Profissionais de Infraestrutura', 
        disciplina: 'Tecnologia', 
        autor: 'Daniel Donda', 
        imagem: 'images/Tecnolog1/InShot_20260930_180554978.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Cmdlets, scripts, funções, loops e gerenciamento remoto.', 
        hashtags: '#PowerShell #Windows #Scripts #Infraestrutura #DanielDonda #LivroZathu' 
    },

],

       // 🏥 Saúde (85 livros)
'saude': [

    // ===== LIVROS BASE (IDs 1401-1410) =====


    // 2. ID: 1402
    { 
        id: 1402, 
        titulo: 'Alimentação Saudável', 
        disciplina: 'Saúde', 
        autor: 'Maria Helena', 
        imagem: 'images/Comum BooKs/SAUDD/Alimentação Saudável.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia completo de nutrição.', 
        hashtags: '#Nutrição #Alimentação #Saúde #LivroZathu' 
    },

    // ===== CUIDADOS PALIATIVOS (1411-1420) =====

    // 11. ID: 1411
    { 
        id: 1411, 
        titulo: 'Cuidados Paliativos e o Ser-para-a-Morte', 
        disciplina: 'Saúde', 
        autor: 'Anna Valeska P. de Moura', 
        imagem: 'images/Comum BooKs/SAUDD/Cuidados Paliativos e o Ser-para-a-Morte.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexões sobre atendimento psicológico.', 
        hashtags: '#CuidadosPaliativos #Tanatologia #Heidegger #LivroZathu' 
    },

    // 15. ID: 1415
    { 
        id: 1415, 
        titulo: 'Cuidados e Demência na Terceira Idade', 
        disciplina: 'Saúde', 
        autor: 'António M. Fonseca', 
        imagem: 'images/Comum BooKs/SAUDD/Cuidados e Demência na Terceira Idade.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual prático para cuidadores.', 
        hashtags: '#Demência #Idosos #Cuidados #LivroZathu' 
    },

    // ===== ENFERMAGEM E PROCEDIMENTOS (1421-1435) =====

    // 21. ID: 1421
    { 
        id: 1421, 
        titulo: 'Guia Completo de Procedimentos de Enfermagem', 
        disciplina: 'Saúde', 
        autor: 'Anne Griffin Perry & Patricia A. Potter', 
        imagem: 'images/Comum BooKs/SAUDD/Guia Completo de Procedimentos de Enfermagem.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual prático para enfermagem.', 
        hashtags: '#Enfermagem #Procedimentos #Saúde #LivroZathu' 
    },

    // 35. ID: 1435
    { 
        id: 1435, 
        titulo: 'Embriologia: Texto, Atlas e Roteiro de Aulas Práticas', 
        disciplina: 'Saúde', 
        autor: 'Tatiana Montanari', 
        imagem: 'images/Comum BooKs/SAUDD/Embriologia.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Embriologia humana com atlas prático.', 
        hashtags: '#Embriologia #DesenvolvimentoEmbrionário #Anatomia #LivroZathu' 
    },

    // ===== OBSTETRÍCIA E GINECOLOGIA (1436-1450) =====

    // 36. ID: 1436
    { 
        id: 1436, 
        titulo: 'Gestação de Alto Risco: Manual Técnico', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/Comum BooKs/SAUDD/Gestação de Alto Risco.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual para assistência à gestante de risco.', 
        hashtags: '#Gestação #AltoRisco #Obstetrícia #LivroZathu' 
    },

    // 41. ID: 1441
    { 
        id: 1441, 
        titulo: 'Vasos Sanguíneos', 
        disciplina: 'Saúde', 
        autor: 'Desconhecido', 
        imagem: 'images/Comum BooKs/SAUDD/Vasos Sanguíneos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Anatomia e histologia do sistema cardiovascular.', 
        hashtags: '#Anatomia #Histologia #SistemaCardiovascular #LivroZathu' 
    },

    // 43. ID: 1443
    { 
        id: 1443, 
        titulo: 'Medicina: Uma História', 
        disciplina: 'Saúde', 
        autor: 'Marcos Rogério de Castro Frank e Claudete Rempel', 
        imagem: 'images/Comum BooKs/SAUDD/Medicina: Uma História.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História da medicina da pré-história aos dias atuais.', 
        hashtags: '#HistóriaDaMedicina #Medicina #SUS #LivroZathu' 
    },

    // 44. ID: 1444
    { 
        id: 1444, 
        titulo: 'Medicamentos para Cães e Gatos', 
        disciplina: 'Saúde', 
        autor: 'Emanuele Mosna', 
        imagem: 'images/Comum BooKs/SAUDD/Medicamentos para Cães e Gatos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Dosagens e indicações para medicina veterinária.', 
        hashtags: '#MedicinaVeterinária #Cães #Gatos #LivroZathu' 
    },

    // 45. ID: 1445
    { 
        id: 1445, 
        titulo: 'Laringe - Sistema Respiratório', 
        disciplina: 'Saúde', 
        autor: 'Material Didático', 
        imagem: 'images/Comum BooKs/SAUDD/Laringe - Sistema Respiratório.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Anatomia e fisiologia da laringe.', 
        hashtags: '#Laringe #Anatomia #SistemaRespiratório #LivroZathu' 
    },

    // 46. ID: 1446
    { 
        id: 1446, 
        titulo: 'Guia para Uso de Hemocomponentes', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/Comum BooKs/SAUDD/Guia para Uso de Hemocomponentes.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para transfusão de sangue e hemoderivados.', 
        hashtags: '#Hemoterapia #TransfusãoSanguínea #Saúde #LivroZathu' 
    },

    // 47. ID: 1447
    { 
        id: 1447, 
        titulo: 'Manual de Técnica Operatória e Cirurgia Experimental', 
        disciplina: 'Saúde', 
        autor: 'Pinheiro Neto et al.', 
        imagem: 'images/Comum BooKs/SAUDD/Manual de Técnica Operatória e Cirurgia Experimental.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Técnicas operatórias e cirurgia experimental.', 
        hashtags: '#Cirurgia #TécnicaOperatória #EducaçãoMédica #LivroZathu' 
    },

    // 48. ID: 1448
    { 
        id: 1448, 
        titulo: 'Manual de Saúde e Segurança do Trabalho (GDF)', 
        disciplina: 'Saúde', 
        autor: 'SEAP - Governo do Distrito Federal', 
        imagem: 'images/Comum BooKs/SAUDD/Manual de Saúde e Segurança do Trabalho .png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Prevenção de riscos e promoção da saúde do servidor.', 
        hashtags: '#SegurançaDoTrabalho #SaúdeOcupacional #GDF #LivroZathu' 
    },

    // 49. ID: 1449
    { 
        id: 1449, 
        titulo: 'Quando a Depressão Ataca', 
        disciplina: 'Saúde', 
        autor: 'Prineus de Sousa', 
        imagem: 'images/Comum BooKs/SAUDD/Quando a Depressão Ataca.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Entendendo a depressão e caminhos para superação.', 
        hashtags: '#Depressão #Psiquiatria #SaúdeMental #LivroZathu' 
    },

    // 50. ID: 1450
    { 
        id: 1450, 
        titulo: 'Prevenção do Suicídio na Internet', 
        disciplina: 'Saúde', 
        autor: 'Instituto Vita Alere', 
        imagem: 'images/Comum BooKs/SAUDD/Prevenção do Suicídio na Internet.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Identifique sinais de sofrimento emocional em jovens.', 
        hashtags: '#Suicídio #Prevenção #Adolescentes #LivroZathu' 
    },

    // ===== SAÚDE MENTAL E PSIQUIATRIA (1451-1470) =====

    // 51. ID: 1451
    { 
        id: 1451, 
        titulo: 'Política Nacional de Atenção Integral à Saúde da Mulher', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde - Brasil', 
        imagem: 'images/Comum BooKs/SAUDD/Política Nacional de Atenção Integral à Saúde da Mulher.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Diretrizes para saúde integral da mulher no SUS.', 
        hashtags: '#SaúdeDaMulher #PolíticasPúblicas #SUS #LivroZathu' 
    },

    // 52. ID: 1452
    { 
        id: 1452, 
        titulo: 'O Suicídio e os Desafios para a Psicologia', 
        disciplina: 'Saúde', 
        autor: 'Conselho Federal de Psicologia', 
        imagem: 'images/Comum BooKs/SAUDD/O Suicídio e os Desafios para a Psicologia.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Suicídio como questão de saúde pública e luto.', 
        hashtags: '#Suicídio #Psicologia #SaúdePública #LivroZathu' 
    },

    // 53. ID: 1453
    { 
        id: 1453, 
        titulo: 'O Processo de Luto em Tempos de Pandemia', 
        disciplina: 'Saúde', 
        autor: 'PUCRS - Núcleo de Estudos', 
        imagem: 'images/Comum BooKs/SAUDD/O Processo de Luto em Tempos de Pandemia.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Como lidar com o luto durante a pandemia.', 
        hashtags: '#Luto #Pandemia #COVID19 #SaúdeMental #LivroZathu' 
    },

    // 54. ID: 1454
    { 
        id: 1454, 
        titulo: 'Histologia do Sistema Cardiovascular', 
        disciplina: 'Saúde', 
        autor: 'Junqueira & Carneiro', 
        imagem: 'images/Comum BooKs/SAUDD/Histologia do Sistema Cardiovascular.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Túnicas dos vasos sanguíneos.', 
        hashtags: '#Histologia #SistemaCardiovascular #Anatomia #LivroZathu' 
    },

    // 55. ID: 1455
    { 
        id: 1455, 
        titulo: 'Fisiopatologia da Aterosclerose e Aneurismas', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/Comum BooKs/SAUDD/Fisiopatologia da Aterosclerose e Aneurismas.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Formação de placas de ateroma, trombose e aneurismas.', 
        hashtags: '#Aterosclerose #Aneurisma #Cardiologia #LivroZathu' 
    },

    // 67. ID: 1467
    { 
        id: 1467, 
        titulo: 'O Suicídio entre Universitários', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/Comum BooKs/SAUDD/O Suicídio entre Univ.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pressão, ansiedade e prevenção no ambiente universitário.', 
        hashtags: '#Universitários #SaúdeMental #Suicídio #Prevenção #LivroZathu' 
    },

    // 70. ID: 1470
    { 
        id: 1470, 
        titulo: 'Cucurbitáceas e Fabáceas: Cultivo e Manejo', 
        disciplina: 'Saúde', 
        autor: 'Rerison Catarino da Hora et al.', 
        imagem: 'images/Comum BooKs/SAUDD/Cucurbitáceas e Fabáceas: Cultivo e Manejo.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Abóbora, melancia, melão, pepino e feijão-vagem.', 
        hashtags: '#Abóbora #Melancia #Melão #Pepino #Agronomia #LivroZathu' 
    },

    // ===== SAÚDE MENTAL E BEM-ESTAR (1471-1485) =====

    // 72. ID: 1472
    { 
        id: 1472, 
        titulo: 'Manejo de Água em Hortaliças-fruto', 
        disciplina: 'Saúde', 
        autor: 'Paulo Sérgio Lourenço de Freitas et al.', 
        imagem: 'images/Comum BooKs/SAUDD/Manejo de Água em Hortaliças-fruto.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Necessidade hídrica e sistemas de irrigação.', 
        hashtags: '#Irrigação #ManejoDeÁgua #Hortaliças #Agronomia #LivroZathu' 
    },

    // 75. ID: 1475
    { 
        id: 1475, 
        titulo: 'Cadernos HumanizaSUS: Saúde Mental', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/Comum BooKs/SAUDD/Saúde Mental.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reforma Psiquiátrica e humanização do cuidado no SUS.', 
        hashtags: '#HumanizaSUS #ReformaPsiquiátrica #SaúdeMental #SUS #LivroZathu' 
    },

    // 76. ID: 1476
    { 
        id: 1476, 
        titulo: 'Quando a Depressão Ataca', 
        disciplina: 'Saúde', 
        autor: 'Pirineus de Sousa', 
        imagem: 'images/Comum BooKs/SAUDD/Quando a Depressão Ataca.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Relato pessoal sobre depressão e caminhos para recuperação.', 
        hashtags: '#Depressão #SaúdeMental #Autoconhecimento #Superação #LivroZathu' 
    },

    // 77. ID: 1477
    { 
        id: 1477, 
        titulo: 'Relacionamento e Comunicação em Enfermagem', 
        disciplina: 'Saúde', 
        autor: 'Andrea Damiana da Silva Elias et al.', 
        imagem: 'images/Comum BooKs/SAUDD/Relacionamento e Comunicação em Enfermagem.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Comunicação terapêutica e liderança em enfermagem.', 
        hashtags: '#Enfermagem #ComunicaçãoTerapêutica #Humanização #Saúde #LivroZathu' 
    },

    // 78. ID: 1478
    { 
        id: 1478, 
        titulo: 'Qualificação para Auxiliar em Saúde Bucal', 
        disciplina: 'Saúde', 
        autor: 'Diego Noronha de Gois et al.', 
        imagem: 'images/Comum BooKs/SAUDD/Qualificação para Auxiliar em Saúde Bucal.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Equipamentos, radiologia e higiene bucal para ASB.', 
        hashtags: '#SaúdeBucal #Odontologia #ASB #HigieneBucal #LivroZathu' 
    },

    // 79. ID: 1479
    { 
        id: 1479, 
        titulo: 'Tanatologia e Medicina: A Subjetividade das Perdas', 
        disciplina: 'Saúde', 
        autor: 'Djailson Ricardo Malheiro et al.', 
        imagem: 'images/Comum BooKs/SAUDD/Tanatologia e Medicina:.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Luto materno, paterno, infantojuvenil, por suicídio e por pets.', 
        hashtags: '#Tanatologia #Luto #CuidadosPaliativos #SaúdeMental #LivroZathu' 
    },

    // 80. ID: 1480
    { 
        id: 1480, 
        titulo: 'Suicídio: Informando para Prevenir', 
        disciplina: 'Saúde', 
        autor: 'Conselho Federal de Medicina (CFM) / ABP', 
        imagem: 'images/Comum BooKs/SAUDD/Suicídio: Informando para Preveni.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fatores de risco, avaliação e manejo do paciente suicida.', 
        hashtags: '#Suicídio #Prevenção #SaúdeMental #Psiquiatria #LivroZathu' 
    },

    // 81. ID: 1481
    { 
        id: 1481, 
        titulo: 'Síndrome do Pânico: Abordagem Integrativa', 
        disciplina: 'Saúde', 
        autor: 'Cyro Masci', 
        imagem: 'images/Comum BooKs/SAUDD/Síndrome do Pânico.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Medicamentos, fitoterápicos, respiração e hábitos saudáveis.', 
        hashtags: '#SíndromeDoPânico #Ansiedade #Psiquiatria #MedicinaIntegrativa #LivroZathu' 
    },

    // 82. ID: 1482
    { 
        id: 1482, 
        titulo: 'Psicofármacos: Guia Visual dos Psicotrópicos', 
        disciplina: 'Saúde', 
        autor: 'Wellina (A FarmáFacilita)', 
        imagem: 'images/Comum BooKs/SAUDD/Psicofármacos: Guia Visual dos Psicotrópicos.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Antidepressivos, ansiolíticos e estabilizadores de humor.', 
        hashtags: '#Psicofármacos #Farmacologia #Antidepressivos #Ansiolíticos #LivroZathu' 
    },

    // 84. ID: 1484
    { 
        id: 1484, 
        titulo: 'Esquizofrenias: Protocolo Clínico RAPS', 
        disciplina: 'Saúde', 
        autor: 'Governo de Santa Catarina', 
        imagem: 'images/Comum BooKs/SAUDD/Esquizofrenias: Protocolo Clínico RAPS.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Protocolo baseado em evidências para esquizofrenia.', 
        hashtags: '#Esquizofrenia #Psiquiatria #SaúdeMental #LivroZathu' 
    },

    // 85. ID: 1485
    { 
        id: 1485, 
        titulo: 'Terapias Alternativas e Qualidade de Vida', 
        disciplina: 'Saúde', 
        autor: 'Paulo Heraldo Costa do Valle', 
        imagem: 'images/Comum BooKs/SAUDD/Terapias Alternativas e Qualidade de Vida.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Acupuntura, reflexologia, aromaterapia, florais e homeopatia.', 
        hashtags: '#TerapiasAlternativas #QualidadeDeVida #Acupuntura #Reflexologia #Homeopatia #LivroZathu' 
    }

],

       // 📚 Literatura (82 livros)
'literatura': [

    // ===== LIVROS BASE (IDs 1901-1921) =====

    // 1. ID: 1901
    { 
        id: 1901, 
        titulo: 'Wolf Hall', 
        disciplina: 'Ficção Histórica', 
        autor: 'Hilary Mantel', 
        imagem: 'images/Literatu/Wolf Hal (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre Thomas Cromwell na corte de Henrique VIII.', 
        hashtags: '#FiccaoHistorica #RomanceHistorico #Tudor #Inglaterra #LivroZathu' 
    },

    // 2. ID: 1902
    { 
        id: 1902, 
        titulo: 'Voluntário', 
        disciplina: 'Literatura Brasileira', 
        autor: 'Inglês de Sousa', 
        imagem: 'images/Literatu/Voluntário (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História sobre recrutamento forçado na Guerra do Paraguai.', 
        hashtags: '#LiteraturaBrasileira #Classicos #GuerraDoParaguai #Amazonas #LivroZathu' 
    },

    // 3. ID: 1903
    { 
        id: 1903, 
        titulo: 'Vinte e Zinco', 
        disciplina: 'Literatura Moçambicana', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/Vinte e Zinco (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre uma vila colonial em Moçambique.', 
        hashtags: '#MiaCouto #LiteraturaAfricana #LiteraturaMocambicana #PosColonial #LivroZathu' 
    },

    // 4. ID: 1904
    { 
        id: 1904, 
        titulo: 'Um Pouco de Nós', 
        disciplina: 'Poesia', 
        autor: 'Vinicio Felipe', 
        imagem: 'images/Literatu/Um Pouco de Nós (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poemas sobre amor, desilusão e relacionamentos.', 
        hashtags: '#Poesia #Romance #Relacionamentos #Sentimentos #LivroZathu' 
    },

    // 5. ID: 1905
    { 
        id: 1905, 
        titulo: 'Um Pequeno Milagre', 
        disciplina: 'Romance', 
        autor: 'Carol Marinelli', 
        imagem: 'images/Literatu/Um Pequeno Milagre (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História de um médico que enfrenta a perda e o recomeço.', 
        hashtags: '#Romance #Medicina #Perda #Recomeco #Gravidez #LivroZathu' 
    },

    // 6. ID: 1906
    { 
        id: 1906, 
        titulo: 'Um Lugar Bem Longe daqui', 
        disciplina: 'Ficção / Suspense', 
        autor: 'Delia Owens', 
        imagem: 'images/Literatu/Um Lugar Bem Longe daqui (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História de Kya, uma menina que cresce sozinha nos pântanos.', 
        hashtags: '#Suspense #Misterio #Natureza #Crescimento #Crime #LivroZathu' 
    },

    // 7. ID: 1907
    { 
        id: 1907, 
        titulo: 'Niketche: Uma História de Poligamia', 
        disciplina: 'Literatura Moçambicana', 
        autor: 'Paulina Chiziane', 
        imagem: 'images/Literatu/História de Poligamia (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Rami descobre que seu marido tem outras quatro mulheres.', 
        hashtags: '#Literatura #Ficção #Poligamia #Feminismo #Moçambique #LivroZathu' 
    },

    // 8. ID: 1908
    { 
        id: 1908, 
        titulo: 'Tristão e Isolda', 
        disciplina: 'Literatura Medieval', 
        autor: 'Anônimo', 
        imagem: 'images/Literatu/Tristão e Isolda (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Trágica história de amor entre Tristão e Isolda.', 
        hashtags: '#Literatura #Romance #TristãoEIsolda #LendaMedieval #Clássico #LivroZathu' 
    },

    // 9. ID: 1909
    { 
        id: 1909, 
        titulo: 'Sonho de Uma Noite de Verão', 
        disciplina: 'Teatro Clássico', 
        autor: 'William Shakespeare', 
        imagem: 'images/Literatu/Sonho de Uma Noite de Verão (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Comédia sobre amores cruzados, elfos e magia.', 
        hashtags: '#Shakespeare #LiteraturaClassica #Teatro #Comedia #Elfos #LivroZathu' 
    },

    // 10. ID: 1910
    { 
        id: 1910, 
        titulo: 'Serei Sempre o Teu Abrigo', 
        disciplina: 'Literatura Contemporânea', 
        autor: 'Valter Hugo Mãe', 
        imagem: 'images/Literatu/Serei Sempre o Teu Abrigo (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poesia em prosa sobre amor, memória e laços familiares.', 
        hashtags: '#ValterHugoMae #LiteraturaPortuguesa #Poesia #Amor #Familia #LivroZathu' 
    },

    // 11. ID: 1911
    { 
        id: 1911, 
        titulo: 'O Vampiro de Curitiba', 
        disciplina: 'Literatura Brasileira / Contos', 
        autor: 'Dalton Trevisan', 
        imagem: 'images/Literatu/O Vampiro de Curitiba (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos sobre cotidiano, obsessão e decadência em Curitiba.', 
        hashtags: '#DaltonTrevisan #LiteraturaBrasileira #Contos #Curitiba #LivroZathu' 
    },

    // 12. ID: 1912
    { 
        id: 1912, 
        titulo: 'O Último Segredo', 
        disciplina: 'Ficção / Thriller', 
        autor: 'José Rodrigues dos Santos', 
        imagem: 'images/Literatu/O Último Segredo (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Thriller sobre assassinatos ligados a manuscritos bíblicos.', 
        hashtags: '#JoseRodriguesDosSantos #Suspense #Thriller #Biblia #Ciencia #LivroZathu' 
    },

    // 13. ID: 1913
    { 
        id: 1913, 
        titulo: 'O Tempo (Coletânea de Frases)', 
        disciplina: 'Literatura Brasileira', 
        autor: 'Clarice Lispector', 
        imagem: 'images/Literatu/O Tempo (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Coletânea de frases de Clarice Lispector sobre a vida.', 
        hashtags: '#ClariceLispector #Frases #LiteraturaBrasileira #Filosofia #Tempo #LivroZathu' 
    },

    // 14. ID: 1914
    { 
        id: 1914, 
        titulo: 'Sentimental', 
        disciplina: 'Poesia', 
        autor: 'Eucanaã Ferraz', 
        imagem: 'images/Literatu/Sentimental (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poemas sobre melancolia, amor e memória.', 
        hashtags: '#Poesia #LiteraturaBrasileira #Sentimental #EucanaãFerraz #LivroZathu' 
    },

    // 15. ID: 1915
    { 
        id: 1915, 
        titulo: 'Reflexões, Sensações & Evidências', 
        disciplina: 'Poesia / Filosofia', 
        autor: 'Evangelista Maia Cruz', 
        imagem: 'images/Literatu/Reflexões, Sensações & Evidências (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poemas e reflexões sobre a vida e a sociedade.', 
        hashtags: '#Poesia #Reflexões #Filosofia #LiteraturaBrasileira #Sentimentos #LivroZathu' 
    },

    // 16. ID: 1916
    { 
        id: 1916, 
        titulo: 'Sagarana', 
        disciplina: 'Literatura Brasileira', 
        autor: 'João Guimarães Rosa', 
        imagem: 'images/Sagarana (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Nove novelas que retratam o sertão mineiro.', 
        hashtags: '#GuimarãesRosa #Sagarana #LiteraturaBrasileira #Sertão #Novelas #LivroZathu' 
    },

    // 17. ID: 1917
    { 
        id: 1917, 
        titulo: 'Otelo, o Mouro de Veneza', 
        disciplina: 'Teatro Clássico', 
        autor: 'William Shakespeare', 
        imagem: 'images/Literatu/Otelo, o Mouro de Veneza (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Tragédia sobre ciúme e manipulação.', 
        hashtags: '#Shakespeare #Otelo #Teatro #LiteraturaClassica #Tragédia #LivroZathu' 
    },

    // 18. ID: 1918
    { 
        id: 1918, 
        titulo: 'O Silêncio de Gwangju', 
        disciplina: 'Ficção / Romance', 
        autor: 'Soo Park', 
        imagem: 'images/Literatu/O Silêncio de Gwangju (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conexão silenciosa através de bilhetes em livros.', 
        hashtags: '#Romance #Ficção #LiteraturaCoreana #Gwangju #Amor #Silencio #LivroZathu' 
    },

    // 19. ID: 1919
    { 
        id: 1919, 
        titulo: 'O Rei Creso', 
        disciplina: 'Literatura Infantojuvenil / Filosofia', 
        autor: 'Heródoto', 
        imagem: 'images/Literatu/O Rei Creso (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Lição sobre verdadeira felicidade do rei mais rico.', 
        hashtags: '#Heródoto #Filosofia #Conto #ReiCreso #Felicidade #Sabedoria #LivroZathu' 
    },

    // 20. ID: 1920
    { 
        id: 1920, 
        titulo: 'O Último Voo do Flamingo', 
        disciplina: 'Literatura Moçambicana', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/mia-couto.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pós-guerra em Moçambique com realismo mágico.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #Ficcao #RealismoMagico #Africa #LivroZathu' 
    },

    // ===== SEGUNDO LOTE (IDs 1922-1941) =====

    // 22. ID: 1922
    { 
        id: 1922, 
        titulo: 'O Retorno', 
        disciplina: 'Literatura Russa', 
        autor: 'Andrei Platonov', 
        imagem: 'images/Literatu/InShot_20261115_195116017.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Capitão Ivanov retorna da guerra e enfrenta o choque com a família.', 
        hashtags: '#LiteraturaRussa #AndreiPlatonov #PosGuerra #Familia #LivroZathu' 
    },

    // 23. ID: 1923
    { 
        id: 1923, 
        titulo: 'O Jovem Törless', 
        disciplina: 'Literatura / Filosofia', 
        autor: 'Robert Musil', 
        imagem: 'images/Literatu/InShot_20261115_195053492.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Adolescente em internato testemunha crueldade e entra em crise existencial.', 
        hashtags: '#RobertMusil #LiteraturaAustriaca #Psicologia #Filosofia #LivroZathu' 
    },

    // 24. ID: 1924
    { 
        id: 1924, 
        titulo: 'O Homem que Lia os Seus Próprios Pensamentos', 
        disciplina: 'Literatura Brasileira', 
        autor: 'Alexandre Soares Silva', 
        imagem: 'images/Literatu/InShot_20261115_195020403.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos surreais e bem-humorados sobre a natureza humana.', 
        hashtags: '#LiteraturaBrasileira #Contos #Humor #Surrealismo #LivroZathu' 
    },

    // 25. ID: 1925
    { 
        id: 1925, 
        titulo: 'O Fio das Missangas', 
        disciplina: 'Literatura Moçambicana', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/InShot_20261115_195001012.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos sobre amor, perda e memória na África com realismo mágico.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #Contos #RealismoMagico #LivroZathu' 
    },

    // 26. ID: 1926
    { 
        id: 1926, 
        titulo: 'O Filósofo Ignorante', 
        disciplina: 'Filosofia', 
        autor: 'Voltaire', 
        imagem: 'images/Literatu/InShot_20261115_194933588.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Voltaire questiona a metafísica e defende a justiça.', 
        hashtags: '#Voltaire #Filosofia #Iluminismo #Razao #Ceticismo #LivroZathu' 
    },

    // 28. ID: 1928
    { 
        id: 1928, 
        titulo: 'A República', 
        disciplina: 'Filosofia', 
        autor: 'Platão', 
        imagem: 'images/Literatu/InShot_20261115_195329928.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Platão explora a justiça e a cidade ideal governada por filósofos.', 
        hashtags: '#Filosofia #Platão #Justiça #Política #Clássico #LivroZathu' 
    },

    // 29. ID: 1929
    { 
        id: 1929, 
        titulo: 'Os 70 Anos da OTAN', 
        disciplina: 'Relações Internacionais', 
        autor: 'José Luiz Pinto Ramalho', 
        imagem: 'images/Literatu/InShot_20261115_195241811.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise da trajetória da OTAN e desafios contemporâneos.', 
        hashtags: '#OTAN #RelaçõesInternacionais #Segurança #Geopolítica #LivroZathu' 
    },

    // 30. ID: 1930
    { 
        id: 1930, 
        titulo: 'A Origem de Deus', 
        disciplina: 'História', 
        autor: 'Laurence Gardner', 
        imagem: 'images/Literatu/InShot_20261115_195207027.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Investigação sobre a origem e evolução do conceito de Deus.', 
        hashtags: '#História #Religião #Mitologia #Monoteísmo #LivroZathu' 
    },

    // 31. ID: 1931
    { 
        id: 1931, 
        titulo: 'Orgia dos Loucos', 
        disciplina: 'Literatura Moçambicana', 
        autor: 'Ungulani Ba Ka Khosa', 
        imagem: 'images/Literatu/InShot_20261115_195141962.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos moçambicanos sobre pobreza, tradição e violência.', 
        hashtags: '#LiteraturaMoçambicana #Contos #Sociedade #UngulaniBaKaKhosa #LivroZathu' 
    },

    // 32. ID: 1932
    { 
        id: 1932, 
        titulo: 'Sangue Negro', 
        disciplina: 'Literatura / Poesia', 
        autor: 'Noémia de Sousa', 
        imagem: 'images/Literatu/123/InShot_20261115_194417132.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poemas que denunciam o colonialismo e celebram a cultura africana.', 
        hashtags: '#Poesia #LiteraturaMoçambicana #Negritude #Resistencia #LivroZathu' 
    },

    // 33. ID: 1933
    { 
        id: 1933, 
        titulo: 'Porco é Porco', 
        disciplina: 'Literatura / Humor', 
        autor: 'Ellis Parker Butler', 
        imagem: 'images/Literatu/123/InShot_20261115_194359597.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico conto de humor sobre teimosia burocrática.', 
        hashtags: '#Humor #Literatura #Clássico #Conto #LivroZathu' 
    },

    // 34. ID: 1934
    { 
        id: 1934, 
        titulo: 'Poesias Pesadas', 
        disciplina: 'Poesia', 
        autor: 'Marcio Jung', 
        imagem: 'images/Literatu/123/InShot_20261115_194343311.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poemas sobre solidão, angústia, amor e morte.', 
        hashtags: '#Poesia #Existencialismo #Intimismo #LiteraturaBrasileira #LivroZathu' 
    },

    // 35. ID: 1935
    { 
        id: 1935, 
        titulo: 'Poesia Reunida', 
        disciplina: 'Poesia / Literatura Contemporânea', 
        autor: 'Martha Medeiros', 
        imagem: 'images/Literatu/InShot_20261115_195307170.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poemas sobre a mulher moderna, amor e vida urbana.', 
        hashtags: '#Poesia #LiteraturaContemporânea #MarthaMedeiros #Mulher #LivroZathu' 
    },

    // 36. ID: 1936
    { 
        id: 1936, 
        titulo: 'Ualalapi', 
        disciplina: 'Literatura Moçambicana / Romance Histórico', 
        autor: 'Ungulani Ba Ka Khosa', 
        imagem: 'images/Literatu/InShot_20261115_194546205.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História do imperador Ngungunhane e do Império de Gaza.', 
        hashtags: '#LiteraturaMoçambicana #RomanceHistórico #África #Ngungunhane #LivroZathu' 
    },

    // 37. ID: 1937
    { 
        id: 1937, 
        titulo: 'Sobre a Alma (De Anima)', 
        disciplina: 'Filosofia / Psicologia Antiga', 
        autor: 'Aristóteles', 
        imagem: 'images/Literatu/InShot_20261115_194526619.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Tratado clássico de Aristóteles sobre a natureza da alma.', 
        hashtags: '#Aristóteles #Filosofia #Alma #PsicologiaAntiga #Clássicos #LivroZathu' 
    },

    // 38. ID: 1938
    { 
        id: 1938, 
        titulo: 'Sobre Feminismos', 
        disciplina: 'Feminismo / Ciências Sociais', 
        autor: 'Andréa Pachá e Vilma Piedade', 
        imagem: 'images/Literatu/InShot_20261115_194448372.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Diálogo sobre interseccionalidade, racismo e sororidade.', 
        hashtags: '#Feminismo #Interseccionalidade #FeminismoNegro #Sororidade #LivroZathu' 
    },

    // 39. ID: 1939
    { 
        id: 1939, 
        titulo: 'Seus Trinta Melhores Contos', 
        disciplina: 'Literatura Brasileira / Contos', 
        autor: 'Machado de Assis', 
        imagem: 'images/Literatu/Seus Trinta Melhores Contos.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Antologia com os melhores contos de Machado de Assis.', 
        hashtags: '#MachadoDeAssis #Contos #LiteraturaBrasileira #Clássicos #LivroZathu' 
    },

    // 40. ID: 1940
    { 
        id: 1940, 
        titulo: 'Zadig ou O Destino', 
        disciplina: 'Literatura / Filosofia', 
        autor: 'Voltaire', 
        imagem: 'images/Literatu/InShot_20261115_194740889.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conto filosófico sobre as aventuras do sábio Zadig na Babilônia.', 
        hashtags: '#Voltaire #Literatura #Filosofia #Iluminismo #ContoFilosófico #LivroZathu' 
    },

    // 41. ID: 1941
    { 
        id: 1941, 
        titulo: 'O Único Deus Verdadeiro', 
        disciplina: 'Teologia / Estudos Bíblicos', 
        autor: 'Paul David Washer', 
        imagem: 'images/Literatu/InShot_20261115_194717643.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia de estudo sobre os atributos de Deus nas Escrituras.', 
        hashtags: '#Teologia #EstudoBíblico #AtributosDeDeus #PaulWasher #LivroZathu' 
    },

    // 43. ID: 1943
    { 
        id: 1943, 
        titulo: 'Um Conto de Natal', 
        disciplina: 'Literatura / Ficção Clássica', 
        autor: 'Charles Dickens', 
        imagem: 'images/Literatu/InShot_20261115_194635193.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico sobre o avarento Scrooge e os três espíritos do Natal.', 
        hashtags: '#Literatura #FicçãoClássica #CharlesDickens #Natal #ContoDeNatal #LivroZathu' 
    },

    // 44. ID: 1944
    { 
        id: 1944, 
        titulo: 'Uma Breve História do Mundo', 
        disciplina: 'História', 
        autor: 'Geoffrey Blainey', 
        imagem: 'images/Literatu/InShot_20261115_194613913.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Narrativa concisa da história da humanidade.', 
        hashtags: '#História #HistóriaMundial #GeoffreyBlainey #Civilização #LivroZathu' 
    },

    // 46. ID: 1946
    { 
        id: 1946, 
        titulo: 'O Chefe e a Estagiária', 
        disciplina: 'Romance', 
        autor: 'Bruna Maia', 
        imagem: 'images/ESTAG (1).png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre estagiária que derruba café no terno do CEO.', 
        hashtags: '#Romance #FicçãoContemporânea #ChefeEEstagiária #BrunaMaia #LivroZathu' 
    },

    // 49. ID: 1949
    { 
        id: 1949, 
        titulo: 'Política', 
        disciplina: 'Filosofia Política', 
        autor: 'Aristóteles', 
        imagem: 'images/Literatu/12/InShot_20261115_184916166.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico sobre as formas de governo e o bem comum.', 
        hashtags: '#Filosofia #Politica #Aristoteles #CienciaPolitica #Governo #LivroZathu' 
    },

    // 50. ID: 1950
    { 
        id: 1950, 
        titulo: 'A Revolta de Atlas', 
        disciplina: 'Filosofia / Literatura', 
        autor: 'Ayn Rand', 
        imagem: 'images/Literatu/12/InShot_20261115_184854416.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance filosófico sobre individualismo e coletivismo.', 
        hashtags: '#Filosofia #Individualismo #Objetivismo #AynRand #AtlasShrugged #LivroZathu' 
    },

    // 51. ID: 1951
    { 
        id: 1951, 
        titulo: 'A Letra Escarlate', 
        disciplina: 'Literatura Clássica', 
        autor: 'Nathaniel Hawthorne', 
        imagem: 'images/Literatu/12/InShot_20261115_184833303.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História de Hester Prynne, condenada por adultério na Nova Inglaterra.', 
        hashtags: '#LiteraturaClassica #FiccaoHistorica #NathanielHawthorne #Romance #LivroZathu' 
    },

    // 52. ID: 1952
    { 
        id: 1952, 
        titulo: 'A História da Humanidade em 50 Eventos', 
        disciplina: 'História', 
        autor: 'Peter Addans', 
        imagem: 'images/Literatu/12/InShot_20261115_184657732.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '50 acontecimentos mais marcantes da história humana.', 
        hashtags: '#Historia #Civilizacao #EventosHistoricos #CulturaGeral #Educacao #LivroZathu' 
    },

    // 53. ID: 1953
    { 
        id: 1953, 
        titulo: 'A Ideia de África', 
        disciplina: 'Filosofia / História', 
        autor: 'V.Y. Mudimbe', 
        imagem: 'images/Literatu/12/InShot_20261115_184736083.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise sobre como a ideia da África foi construída pelo Ocidente.', 
        hashtags: '#FilosofiaAfricana #HistoriaDaAfrica #Antropologia #PosColonialismo #LivroZathu' 
    },

    // 54. ID: 1954
    { 
        id: 1954, 
        titulo: 'Como Fazer um Jornal Escolar', 
        disciplina: 'Comunicação / Educação', 
        autor: 'Não identificado', 
        imagem: 'images/Literatu/12/InShot_20261115_185012243.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia prático sobre a criação de um jornal escolar.', 
        hashtags: '#JornalEscolar #Comunicacao #Educacao #ProducaoTextual #LivroZathu' 
    },

    // 55. ID: 1955
    { 
        id: 1955, 
        titulo: 'Cada Homem é uma Raça', 
        disciplina: 'Literatura / Contos', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/mia-couto.jpg',
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos que exploram identidade e memória em Moçambique.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #Contos #Ficcao #LivroZathu' 
    },

    // 57. ID: 1957
    { 
        id: 1957, 
        titulo: 'Contos da Selva', 
        disciplina: 'Literatura Infantojuvenil', 
        autor: 'Horácio Quiroga', 
        imagem: 'images/Literatu/12/InShot_20261115_185101431.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos fabulares ambientados na selva argentina.', 
        hashtags: '#LiteraturaInfantojuvenil #Contos #HoracioQuiroga #Animais #Selva #LivroZathu' 
    },

    // 58. ID: 1958
    { 
        id: 1958, 
        titulo: 'Os Canibais Estão na Sala de Jantar', 
        disciplina: 'Crônicas e Ensaios', 
        autor: 'Arnaldo Jabor', 
        imagem: 'images/Literatu/11/InShot_20261115_190937493.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Crônicas sobre cultura, política e sociedade no Brasil.', 
        hashtags: '#ArnaldoJabor #Cronicas #CulturaBrasileira #Politica #Sociedade #LivroZathu' 
    },

    // 59. ID: 1959
    { 
        id: 1959, 
        titulo: 'O Que é Educação', 
        disciplina: 'Educação e Pedagogia', 
        autor: 'Carlos Rodrigues Brandão', 
        imagem: 'images/Literatu/11/InShot_20261115_190912262.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Introdução aos conceitos fundamentais da educação.', 
        hashtags: '#Educacao #Pedagogia #SociologiaDaEducacao #PauloFreire #LivroZathu' 
    },

    // 60. ID: 1960
    { 
        id: 1960, 
        titulo: 'O Ponto da Virada', 
        disciplina: 'Negócios e Marketing', 
        autor: 'Malcolm Gladwell', 
        imagem: 'images/Literatu/123/InShot_20261115_190852313.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Como pequenas mudanças geram grandes epidemias sociais.', 
        hashtags: '#MalcolmGladwell #TippingPoint #Marketing #Comportamento #Tendencias #LivroZathu' 
    },

    // 61. ID: 1961
    { 
        id: 1961, 
        titulo: 'O Mundo Insone e Outros Ensaios', 
        disciplina: 'Ensaios e Literatura', 
        autor: 'Stefan Zweig', 
        imagem: 'images/Literatu/11/InShot_20261115_190834944.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ensaios sobre liberdade, guerra e exílio.', 
        hashtags: '#StefanZweig #Ensaios #LiteraturaAustriaca #Pacificismo #Humanismo #LivroZathu' 
    },

    // 62. ID: 1962
    { 
        id: 1962, 
        titulo: 'O Bibliotecário do Imperador', 
        disciplina: 'Literatura Brasileira', 
        autor: 'Marco Lucchesi', 
        imagem: 'images/Literatu/11/InShot_20261115_190702109.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre a vida do bibliotecário de Dom Pedro II.', 
        hashtags: '#LiteraturaBrasileira #RomanceHistorico #ImperioBrasileiro #Bibliotecas #LivroZathu' 
    },

    // 63. ID: 1963
    { 
        id: 1963, 
        titulo: 'O Assassinato de Margaret Thatcher', 
        disciplina: 'Literatura Estrangeira', 
        autor: 'Hilary Mantel', 
        imagem: 'images/Literatu/11/InShot_20261115_190642990.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos que exploram a condição humana com ironia.', 
        hashtags: '#HilaryMantel #Contos #LiteraturaInglesa #MargaretThatcher #PremioBooker #LivroZathu' 
    },

    // 64. ID: 1964
    { 
        id: 1964, 
        titulo: 'O Alimento dos Deuses', 
        disciplina: 'Ficção Científica', 
        autor: 'H.G. Wells', 
        imagem: 'images/Literatu/11/InShot_20261115_190624905.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico sobre substância que acelera o crescimento de seres vivos.', 
        hashtags: '#HGWells #FiccaoCientifica #Classicos #CienciaFiccao #LivroZathu' 
    },

    // 65. ID: 1965
    { 
        id: 1965, 
        titulo: 'O Agente Secreto', 
        disciplina: 'Literatura Estrangeira', 
        autor: 'Joseph Conrad', 
        imagem: 'images/Literatu/11/InShot_20261115_190607962.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre terrorismo e espionagem em Londres.', 
        hashtags: '#JosephConrad #RomancePolicial #Espionagem #LiteraturaInglesa #LivroZathu' 
    },

    // 66. ID: 1966
    { 
        id: 1966, 
        titulo: 'Navio Negreiro', 
        disciplina: 'Poesia / Literatura Brasileira', 
        autor: 'Castro Alves', 
        imagem: 'images/Literatu/12/InShot_20261115_190539130.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Poema épico sobre a brutalidade do tráfico negreiro.', 
        hashtags: '#CastroAlves #Poesia #LiteraturaBrasileira #NavioNegreiro #Abolicao #LivroZathu' 
    },

    // 67. ID: 1967
    { 
        id: 1967, 
        titulo: 'Na Berma de Nenhuma Estrada', 
        disciplina: 'Literatura Africana / Conto', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/mia-couto.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conto sobre identidade e fantasia em Moçambique.', 
        hashtags: '#MiaCouto #LiteraturaAfricana #Conto #Identidade #Fantasia #LivroZathu' 
    },

    // 68. ID: 1968
    { 
        id: 1968, 
        titulo: 'O Livro da Redação Coringa', 
        disciplina: 'Linguagens e Redação', 
        autor: 'Luma Dittrich', 
        imagem: 'images/Literatu/11/InShot_20261115_190815711.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia com modelos prontos de redação para o Enem.', 
        hashtags: '#Redacao #Enem #DicasDeRedacao #FormulaCoringa #LivroZathu' 
    },

    // 69. ID: 1969
    { 
        id: 1969, 
        titulo: 'Humilhados e Ofendidos', 
        disciplina: 'Literatura', 
        autor: 'Fiódor Dostoiévski', 
        imagem: 'images/Literatu/12/InShot_20261115_184606045.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre amor, sofrimento e orgulho na Rússia do século XIX.', 
        hashtags: '#Dostoievski #LiteraturaRussa #Romance #Classico #LivroZathu' 
    },

    // 70. ID: 1970
    { 
        id: 1970, 
        titulo: 'O Dia em que o Mundo Parou', 
        disciplina: 'Literatura Infantojuvenil', 
        autor: 'Barbie Furtado', 
        imagem: 'images/Literatu/11/InShot_20261115_190718609.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História sobre desequilíbrio ecológico e consciência ambiental.', 
        hashtags: '#LiteraturaInfantojuvenil #MeioAmbiente #ConscienciaEcologica #LivroZathu' 
    },

    // 71. ID: 1971
    { 
        id: 1971, 
        titulo: 'O Leão e o Rato', 
        disciplina: 'Literatura Infantojuvenil', 
        autor: 'Instituto LpC', 
        imagem: 'images/Literatu/11/InShot_20261115_190756059.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fábula sobre gentileza e amizade.', 
        hashtags: '#Fabulas #LiteraturaInfantil #Gentileza #LeaoERato #LivroZathu' 
    },

    // 72. ID: 1972
    { 
        id: 1972, 
        titulo: 'Das Independências às Liberdades', 
        disciplina: 'Filosofia Africana', 
        autor: 'Severino Elias Ngoenha', 
        imagem: 'images/Literatu/12/InShot_20261115_190110132.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexão filosófica sobre o percurso dos países africanos.', 
        hashtags: '#FilosofiaAfricana #Independência #Liberdade #África #Ngoenha #LivroZathu' 
    },

    // 73. ID: 1973
    { 
        id: 1973, 
        titulo: 'A Trágica História de Hamlet, Príncipe da Dinamarca', 
        disciplina: 'Literatura Clássica', 
        autor: 'William Shakespeare', 
        imagem: 'images/Literatu/w shake.jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Tragédia sobre o príncipe Hamlet e sua busca por vingança.', 
        hashtags: '#Shakespeare #Literatura #Tragédia #Hamlet #Clássico #LivroZathu' 
    },

    // 74. ID: 1974
    { 
        id: 1974, 
        titulo: 'Liberdade e a Lei', 
        disciplina: 'Filosofia Política e Direito', 
        autor: 'Bruno Leoni', 
        imagem: 'images/Literatu/bruno leoni.jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise sobre os limites entre legislação e liberdade individual.', 
        hashtags: '#Filosofia #Direito #Liberdade #EstadoDeDireito #BrunoLeoni #LivroZathu' 
    },

    // 75. ID: 1975
    { 
        id: 1975, 
        titulo: 'A Varanda do Frangipani', 
        disciplina: 'Literatura Moçambicana', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/12/InShot_20261115_184937345.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre memória, identidade e guerra em Moçambique.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #RealismoMágico #VarandaDoFrangipani #LivroZathu' 
    },

    // 76. ID: 1976
    { 
        id: 1976, 
        titulo: 'Confissões', 
        disciplina: 'Filosofia / Teologia', 
        autor: 'Santo Agostinho', 
        imagem: 'images/Literatu/Santo Agostinho.jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Autobiografia espiritual de Santo Agostinho.', 
        hashtags: '#Filosofia #Teologia #SantoAgostinho #Confissões #Autobiografia #LivroZathu' 
    },

    // 78. ID: 1978
    { 
        id: 1978, 
        titulo: 'Um Rio Chamado Tempo, Uma Casa Chamada Terra', 
        disciplina: 'Literatura', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/mia-couto.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre identidade, tradição e modernidade em Moçambique.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #Identidade #Tradicao #LivroZathu' 
    },

    // 79. ID: 1979
    { 
        id: 1979, 
        titulo: 'Emília no País da Gramática', 
        disciplina: 'Linguística / Literatura Infantil', 
        autor: 'Monteiro Lobato', 
        imagem: 'images/Literatu/12/InShot_20261115_185627737.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Aventura de Emília no País da Gramática.', 
        hashtags: '#MonteiroLobato #Gramatica #LiteraturaInfantil #Portugues #LivroZathu' 
    },

    // 80. ID: 1980
    { 
        id: 1980, 
        titulo: 'História de Moçambique - Vol. 3', 
        disciplina: 'História', 
        autor: 'David Hedges, Aurélio Rocha, Eduardo Medeiros, Gerhard Liesegang, Arlindo Chilundo', 
        imagem: 'images/Literatu/Moz.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise do auge do colonialismo português em Moçambique.', 
        hashtags: '#HistoriaMocambique #Colonialismo #Resistencia #AfricaAustral #LivroZathu' 
    },

    // 81. ID: 1981
    { 
        id: 1981, 
        titulo: 'História do Mundo', 
        disciplina: 'História', 
        autor: 'Andrew Marr', 
        imagem: 'images/Literatu/histo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Narrativa da história humana desde os primórdios.', 
        hashtags: '#HistoriaMundial #AndrewMarr #Civilizacoes #HistoriaGlobal #LivroZathu' 
    },

    // 82. ID: 1982
    { 
        id: 1982, 
        titulo: 'Contos do Nascer da Terra', 
        disciplina: 'Literatura', 
        autor: 'Mia Couto', 
        imagem: 'images/Literatu/12/InShot_20261115_185120891.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos que exploram cultura e identidade em Moçambique.', 
        hashtags: '#MiaCouto #Literatura #Contos #Moçambique #RealismoMagico #LivroZathu' 
    }

],

       
   // 🍳 Culinária (40 livros)
'culinaria': [

    // 1. ID: 1801
    { 
        id: 1801, 
        titulo: 'Culinária Moçambicana', 
        disciplina: 'Culinária', 
        autor: 'Helena Mondlane', 
        imagem: 'images/CULI/InShot_20260925_210844203.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sabores de Moçambique.', 
        hashtags: '#Culinária #Moçambique #Receitas #LivroZathu' 
    },

    // 2. ID: 1802
    { 
        id: 1802, 
        titulo: 'Matapa e Outros Pratos', 
        disciplina: 'Culinária', 
        autor: 'Maria Langa', 
        imagem: 'images/CULI/ex/images (4).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Aprenda a fazer a melhor matapa.', 
        hashtags: '#Matapa #Culinária #Moçambicana #LivroZathu' 
    },

    // 3. ID: 1803
    { 
        id: 1803, 
        titulo: 'Pão Caseiro', 
        disciplina: 'Culinária', 
        autor: 'João Tembe', 
        imagem: 'images/CULI/ex/images (5).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Faça pão em casa.', 
        hashtags: '#Pão #Culinária #Receitas #LivroZathu' 
    },

    // 4. ID: 1804
    { 
        id: 1804, 
        titulo: 'Doces e Sobremesas', 
        disciplina: 'Culinária', 
        autor: 'Helena Cossa', 
        imagem: 'images/CULI/ex/capa-sobremesas_1.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas doces para todas as ocasiões.', 
        hashtags: '#Doces #Sobremesas #Culinária #LivroZathu' 
    },

    // 5. ID: 1805
    { 
        id: 1805, 
        titulo: 'Frutos do Mar', 
        disciplina: 'Culinária', 
        autor: 'Carlos Tembe', 
        imagem: 'images/CULI/ex/images (6).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas com peixes e mariscos.', 
        hashtags: '#FrutosDoMar #Peixe #Culinária #LivroZathu' 
    },

    // 6. ID: 1806
    { 
        id: 1806, 
        titulo: 'Cozinha Vegetariana', 
        disciplina: 'Culinária', 
        autor: 'Helena Langa', 
        imagem: 'images/uyt.jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pratos sem carne.', 
        hashtags: '#Vegetariano #Culinária #Saúde #LivroZathu' 
    },

    // 7. ID: 1807
    { 
        id: 1807, 
        titulo: 'Bolos e Tortas', 
        disciplina: 'Culinária', 
        autor: 'Isabel Uamba', 
        imagem: 'images/CULI/ex/images (7).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas de bolos para todas as ocasiões.', 
        hashtags: '#Bolos #Tortas #Culinária #LivroZathu' 
    },

    // 8. ID: 1808
    { 
        id: 1808, 
        titulo: 'Comida de Rua', 
        disciplina: 'Culinária', 
        autor: 'João Matsinhe', 
        imagem: 'images/CULI/ex/20250129_073941.jpg',
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas populares.', 
        hashtags: '#ComidaDeRua #Culinária #Popular #LivroZathu' 
    },

    // 9. ID: 1809
    { 
        id: 1809, 
        titulo: 'Bebidas e Sumos Naturais', 
        disciplina: 'Culinária', 
        autor: 'Helena Mondlane', 
        imagem: 'images/CULI/InShot_20260925_211753337.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Refresque-se com saúde.', 
        hashtags: '#Bebidas #Sumos #Naturais #LivroZathu' 
    },

    // 10. ID: 1810
    { 
        id: 1810, 
        titulo: 'Cozinha Internacional', 
        disciplina: 'Culinária', 
        autor: 'Vários Autores', 
        imagem: 'images/CULI/ex/20250828_144750.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sabores do mundo.', 
        hashtags: '#CozinhaInternacional #Culinária #LivroZathu' 
    },

    // 11. ID: 1811
    { 
        id: 1811, 
        titulo: 'Pescado e Saúde', 
        disciplina: 'Nutrição e Culinária', 
        autor: 'Milene Gonçalves Raimundo, Instituto de Pesca-SP', 
        imagem: 'images/CULI/InShot_20260925_210544861.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pescado com receitas sustentáveis.', 
        hashtags: '#Pescado #AproveitamentoIntegral #Sustentabilidade #Culinaria #Receitas #Nutricao #LivroZathu' 
    },

    // 12. ID: 1812
    { 
        id: 1812, 
        titulo: 'Os 100 Melhores Bolos', 
        disciplina: 'Culinária e Confeitaria', 
        autor: 'Coletivo de autores ', 
        imagem: 'images/CULI/InShot_20260925_210619817.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '100 receitas de bolos clássicos e diferenciados.', 
        hashtags: '#Bolos #Confeitaria #Receitas #Culinaria #Doces #Gastronomia #LivroZathu' 
    },

    // 13. ID: 1813
    { 
        id: 1813, 
        titulo: 'Nutribook: Receitas Práticas e Saudáveis', 
        disciplina: 'Nutrição e Alimentação Saudável', 
        autor: 'ASBRAN (Associação Brasileira de Nutrição) e associações estaduais filiadas', 
        imagem: 'images/CULI/InShot_20260925_210819952.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas práticas e saudáveis de nutricionistas.', 
        hashtags: '#Nutricao #ReceitasSaudaveis #AlimentacaoSaudavel #AproveitamentoIntegral #Saude #BemEstar #LivroZathu' 
    },

    // 14. ID: 1814
    { 
        id: 1814, 
        titulo: 'Na Cozinha com as Frutas, Legumes e Verduras', 
        disciplina: 'Nutrição e Culinária', 
        autor: 'Ministério da Saúde do Brasil / Universidade Federal de Minas Gerais (UFMG)', 
        imagem: 'images/CULI/InShot_20260925_210744891.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Informações nutricionais e receitas criativas.', 
        hashtags: '#AlimentacaoSaudavel #Frutas #Legumes #Verduras #AproveitamentoIntegral #Nutricao #GuiaAlimentar #LivroZathu' 
    },

    // 15. ID: 1815
    { 
        id: 1815, 
        titulo: 'Manual de Métodos de Preparo de Café', 
        disciplina: 'Bebidas e Barismo', 
        autor: 'Lélia Beggan e Paula Dulgheroff (Mundo Café®)', 
        imagem: 'images/CULI/InShot_20260925_211113958.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Métodos de preparo de café especial.', 
        hashtags: '#Cafe #Barismo #MetodosDePreparo #CafeEspecial #V60 #Chemex #PrensaFrancesa #ColdBrew #LivroZathu' 
    },

    // 16. ID: 1816
    { 
        id: 1816, 
        titulo: 'Manual de Alimentação Saudável e Consumo Responsável', 
        disciplina: 'Nutrição e Saúde', 
        autor: 'Instituto Oikos (ONG) em parceria com E.C.O. Moçambique', 
        imagem: 'images/CULI/InShot_20260925_211054248.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Alimentação equilibrada e receitas tradicionais de Moçambique.', 
        hashtags: '#Nutricao #AlimentacaoSaudavel #CulinariaMocambicana #Saude #ReceitasTradicionais #LivroZathu' 
    },

    // 17. ID: 1817
    { 
        id: 1817, 
        titulo: 'Viagem à Culinária Ancestral', 
        disciplina: 'Culinária e Gastronomia', 
        autor: 'Alunos do 5º ano B da U.M.E. Gota de Leite (Santos/SP) e Professoras Alessandra Costa Silva Boscaine Neto, Amanda Rocha Galvão e Maria José dos Santos', 
        imagem: 'images/CULI/InShot_20260925_211030804.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas afetivas de alunos e suas famílias.', 
        hashtags: '#CulinariaAncestral #ReceitasDeFamilia #Gastronomia #ProjetoEscolar #CulturaAlimentar #LivroZathu' 
    },

    // 18. ID: 1818
    { 
        id: 1818, 
        titulo: 'E-book Vegano para Iniciantes', 
        disciplina: 'Culinária Vegana', 
        autor: 'Wedson Oliveira', 
        imagem: 'images/CULI/InShot_20260925_210959599.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas 100% veganas para todas as refeições.', 
        hashtags: '#Vegano #CulinariaVegana #ReceitasSemCarne #AlimentacaoSaudavel #CozinhaVegan #LivroZathu' 
    },

    // 19. ID: 1819
    { 
        id: 1819, 
        titulo: 'Manual de Receitas Diet (Para Pessoas com Diabetes)', 
        disciplina: 'Nutrição e Dietoterapia', 
        autor: 'Centro de Segurança Alimentar e Nutricional Sustentável - CESANS (Governo do Estado de São Paulo)', 
        imagem: 'images/CULI/InShot_20260925_211220767.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas dietéticas para pessoas com diabetes.', 
        hashtags: '#Diabetes #Diet #Nutricao #ReceitasDiet #AlimentacaoSaudavel #Saude #LivroZathu' 
    },

    // 20. ID: 1820
    { 
        id: 1820, 
        titulo: 'Sabores & Saberes: Receitas das Oficinas Culinárias do Centro de Educação Alimentar e Terapia Nutricional - Volume 4', 
        disciplina: 'Nutrição e Culinária', 
        autor: 'Alexandra Magna Rodrigues, Aline Liz de Faria, Ariane Nunes Novais Calisto, Gabriela Reis Alencar, Jaqueline Girnos Sonati, Maria Claudia Diniz Figueiredo, Thaís Carolinne Araujo Rodrigues', 
        imagem: 'images/CULI/InShot_20260925_210726716.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Mais de 30 receitas saudáveis do CEATENUT.', 
        hashtags: '#Nutricao #CulinariaSaudavel #Receitas #AlimentacaoSaudavel #CEATENUT #UNITAU #LivroZathu' 
    },

    // 21. ID: 1821
    { 
        id: 1821, 
        titulo: 'O Prato Certo: Receitas e dicas para uma alimentação saborosa, saudável e económica', 
        disciplina: 'Nutrição e Culinária', 
        autor: 'Associação IN LOCO', 
        imagem: 'images/CULI/InShot_20260925_210708162.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas equilibradas ao estilo mediterrânico.', 
        hashtags: '#Nutricao #AlimentacaoSaudavel #Culinaria #Receitas #EstiloMediterranico #PratoCerto #LivroZathu' 
    },

    // 22. ID: 1822
    { 
        id: 1822, 
        titulo: 'Receitas Drinks Não Alcoólicos', 
        disciplina: 'Coquetelaria e Bebidas', 
        autor: 'Celso dos Santos Silva, Orides Paulino Souza, Augusto Nascimento, Jair Abril, Rômulo Maverick de Abreu, Rogério Coelho, Roberto David Lopes', 
        imagem: 'images/CULI/InShot_20260925_210643567.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '12 drinks não alcoólicos de bartenders profissionais.', 
        hashtags: '#Drinks #Coquetelaria #Bebidas #SemAlcool #Bartender #Mixologia #SoftDrinks #LivroZathu' 
    },

    // 23. ID: 1823
    { 
        id: 1823, 
        titulo: '122 Receitas de Shots e Cocktails Com e Sem Álcool', 
        disciplina: 'Coquetelaria e Bebidas', 
        autor: 'Coletânea de bartenders', 
        imagem: 'images/CULI/InShot_20260925_210601988.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '122 receitas de coquetéis com e sem álcool.', 
        hashtags: '#Cocktails #Shots #Drinks #Coquetelaria #Mixologia #Receitas #Bartender #LivroZathu' 
    },

    // 24. ID: 1824
    { 
        id: 1824, 
        titulo: 'Guia de Drinks: Receitas de coquetéis com Sagatiba', 
        disciplina: 'Coquetelaria e Bebidas', 
        autor: 'Sagatiba (marca)', 
        imagem: 'images/CULI/InShot_20260925_210917356.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Caipirinhas, martinis, long drinks e shots com cachaça.', 
        hashtags: '#Sagatiba #Cachaca #Caipirinha #Cocktails #Drinks #Coquetelaria #Mixologia #LivroZathu' 
    },

    // 25. ID: 1825
    { 
        id: 1825, 
        titulo: 'Memórias, Afetos e Sabores: Um Caderno de Histórias e Receitas Culinárias', 
        disciplina: 'Culinária e Gastronomia', 
        autor: 'Centro de Desenvolvimento Cultural do Instituto Butantan (Organizador: Horacio A. Fernandes Filho)', 
        imagem: 'images/CULI/InShot_20260925_211648564.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas e histórias afetivas de idosos.', 
        hashtags: '#Culinaria #Gastronomia #Receitas #Memorias #Historias #CulturaBrasileira #LivroZathu' 
    },

    // 26. ID: 1826
    { 
        id: 1826, 
        titulo: 'Brinque e Aprenda na Horta', 
        disciplina: 'Nutrição e Alimentação Saudável', 
        autor: 'Coordenadoria de Desenvolvimento dos Agronegócios - Codeagro (Organização: Milene Gonçalves Massaro Raimundo)', 
        imagem: 'images/CULI/InShot_20260925_211628030.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia infantil para hábitos alimentares saudáveis.', 
        hashtags: '#AlimentacaoSaudavel #Nutricao #Horta #Criancas #EducacaoAlimentar #ReceitasSaudaveis #LivroZathu' 
    },

    // 27. ID: 1827
    { 
        id: 1827, 
        titulo: 'A Volta ao Mundo em 120 Receitas', 
        disciplina: 'Culinária Internacional', 
        autor: 'Companhia União dos Refinadores Açúcar e Café', 
        imagem: 'images/CULI/InShot_20260925_211340963.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '120 receitas típicas de 10 países.', 
        hashtags: '#CulinariaInternacional #Gastronomia #Receitas #Cultura #VoltaAoMundo #Comida #LivroZathu' 
    },

    // 28. ID: 1828
    { 
        id: 1828, 
        titulo: 'Alimentos da Horta: Uma Escolha Saudável', 
        disciplina: 'Nutrição e Alimentação Saudável', 
        autor: 'Programa Horta em Todo Canto - Governo de Pernambuco', 
        imagem: 'images/CULI/InShot_20260925_211851867.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Benefícios de alimentos de hortas caseiras e comunitárias.', 
        hashtags: '#AlimentacaoSaudavel #Horta #Nutricao #AlimentosOrganicos #Agrotoxicos #SegurancaAlimentar #LivroZathu' 
    },

    // 29. ID: 1829
    { 
        id: 1829, 
        titulo: 'Alimentação Saudável', 
        disciplina: 'Nutrição e Educação Alimentar', 
        autor: 'Ministério da Saúde - Brasil', 
        imagem: 'images/CULI/InShot_20260925_211911738.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Macronutrientes, micronutrientes e pirâmide alimentar.', 
        hashtags: '#AlimentacaoSaudavel #Nutricao #EducacaoAlimentar #PiramideAlimentar #Saude #Vitaminas #Minerais #LivroZathu' 
    },

    // 30. ID: 1830
    { 
        id: 1830, 
        titulo: 'A Essência do Chá - Niponica No. 5', 
        disciplina: 'Cultura e Tradição', 
        autor: 'Ministério dos Negócios Estrangeiros do Japão', 
        imagem: 'images/CULI/123.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Cultura do chá no Japão: cerimônia, utensílios e tipos.', 
        hashtags: '#Cha #CulturaJaponesa #CerimoniaDoCha #Chanoyu #Tradicao #Matcha #Sencha #Niponica #LivroZathu' 
    },

    // 31. ID: 1831
    { 
        id: 1831, 
        titulo: 'A Alquimia dos Chás', 
        disciplina: 'Saúde e Bem-estar', 
        autor: 'Autor não identificado', 
        imagem: 'images/CULI/InShot_20260925_211834602.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Propriedades funcionais e terapêuticas do chá.', 
        hashtags: '#Cha #Alquimia #Saude #ChaVerde #Antioxidantes #Beneficios #TerapiaNatural #BemEstar #LivroZathu' 
    },

    // 32. ID: 1832
    { 
        id: 1832, 
        titulo: 'Doces de Festas Juninas', 
        disciplina: 'Culinária', 
        autor: 'Paraíso Das Confeiteiras', 
        imagem: 'images/CULI/InShot_20260925_211549828.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Receitas tradicionais de festas juninas.', 
        hashtags: '#Culinaria #FestasJuninas #ReceitasTradicionais #Doces #Gastronomia #LivroZathu' 
    },

    // 33. ID: 1833
    { 
        id: 1833, 
        titulo: 'Dicionário dos Alimentos', 
        disciplina: 'Nutrição', 
        autor: 'Prefeitura de Belo Horizonte', 
        imagem: 'images/CULI/InShot_20260925_211521615.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia nutricional sobre frutas, verduras, legumes e carnes.', 
        hashtags: '#Nutricao #AlimentacaoSaudavel #Saude #Vitaminas #BemEstar #LivroZathu' 
    },

    // 34. ID: 1834
    { 
        id: 1834, 
        titulo: 'Culinária para Diabéticos', 
        disciplina: 'Nutrição', 
        autor: 'Centralx - Sistemas Inteligentes em Saúde', 
        imagem: 'images/CULI/InShot_20260925_211451832.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '45 receitas salgadas e doces para diabéticos.', 
        hashtags: '#Diabetes #CulinariaSaudavel #Receitas #Nutricao #Saude #LivroZathu' 
    },

    // 35. ID: 1835
    { 
        id: 1835, 
        titulo: 'Coletânea de Drinks Tropicais', 
        disciplina: 'Bebidas', 
        autor: 'Armando Machado Castro Filho', 
        imagem: 'images/CULI/InShot_20260925_211753337.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Mais de 50 receitas de drinks tropicais.', 
        hashtags: '#Drinks #Coquetel #Bebidas #Tropical #Mixologia #LivroZathu' 
    },

    // 36. ID: 1836
    { 
        id: 1836, 
        titulo: 'Caderno de Receitas Fitoterápicas', 
        disciplina: 'Fitoterapia', 
        autor: 'Camila Evangelista e equipe - UFPI', 
        imagem: 'images/CULI/InShot_20260925_211725483.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Plantas medicinais e formas de preparo.', 
        hashtags: '#Fitoterapia #PlantasMedicinais #SaudeNatural #Chas #BemEstar #LivroZathu' 
    },

    // 37. ID: 1837
    { 
        id: 1837, 
        titulo: 'Isto Não é (Apenas) um Livro de Receitas', 
        disciplina: 'Gastronomia e Sustentabilidade', 
        autor: 'Instituto Comida do Amanhã em parceria com UNIRIO e Fundação Heinrich Böll - Brasil', 
        imagem: 'images/CULI/InShot_20260925_211425946.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Gastronomia, sustentabilidade e ciência em receitas de chefs.', 
        hashtags: '#Gastronomia #Sustentabilidade #AlimentacaoSaudavel #SistemaAlimentar #Agroecologia #CulturaAlimentar #LivroZathu' 
    },

    // 38. ID: 1838
    { 
        id: 1838, 
        titulo: 'Iniciando na Cozinha: Uma Vida com Mais Sabor', 
        disciplina: 'Culinária e Gastronomia', 
        autor: 'Serviço Nestlé ao Consumidor', 
        imagem: 'images/CULI/InShot_20260925_211317967.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia prático para iniciantes na cozinha.', 
        hashtags: '#Culinaria #Gastronomia #ReceitasFaceis #Cozinha #Iniciantes #Nestle #ComidaCaseira #LivroZathu' 
    },

    // 39. ID: 1839
    { 
        id: 1839, 
        titulo: 'Guia Alimentar: Como Ter uma Alimentação Saudável', 
        disciplina: 'Nutrição e Saúde', 
        autor: 'Ministério da Saúde do Brasil', 
        imagem: 'images/CULI/InShot_20260925_211252956.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Dez passos para uma alimentação saudável.', 
        hashtags: '#Nutricao #Saude #AlimentacaoSaudavel #GuiaAlimentar #MinisterioDaSaude #BemEstar #QualidadeDeVida #LivroZathu' 
    },

    // 40. ID: 1840
    { 
        id: 1840, 
        titulo: 'Doces sem Açúcar', 
        disciplina: 'Culinária e Nutrição', 
        autor: 'Vários Autores', 
        imagem: 'images/CULI/InShot_20260925_211608786.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Mais de 100 receitas de doces zero açúcar.', 
        hashtags: '#DocesSemAcucar #ReceitasFit #Sobremesas #Diet #SemAcucar #Xylitol #Stevia #CulinariaSaudavel #LivroZathu' 
    }

],


// 🔬 Ciência (30 livros)
'ciencia': [

    // 1. ID: 1601
    { 
        id: 1601, 
        titulo: 'Física Clássica: Mecânica e Termodinâmica', 
        disciplina: 'Física', 
        autor: 'Halliday & Resnick', 
        imagem: 'images/Cienc/ff/Fisica-Classica.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fundamentos da mecânica e termodinâmica.', 
        hashtags: '#Física #Mecânica #Termodinâmica #Ciência #LivroZathu' 
    },

    // 2. ID: 1602
    { 
        id: 1602, 
        titulo: 'Química Orgânica: Princípios e Aplicações', 
        disciplina: 'Química', 
        autor: 'Paula Yurkanis Bruice', 
        imagem: 'images/Cienc/ff/maxresdefault.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Introdução à química orgânica com foco em biomoléculas.', 
        hashtags: '#Química #QuímicaOrgânica #Biomoléculas #Ciência #LivroZathu' 
    },

    // 3. ID: 1603
    { 
        id: 1603, 
        titulo: 'Astronomia: Do Big Bang aos Buracos Negros', 
        disciplina: 'Astronomia', 
        autor: 'Carl Sagan', 
        imagem: 'images/Cienc/InShot_20260925_212741923.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Uma jornada pelo universo e suas maravilhas.', 
        hashtags: '#Astronomia #Cosmos #BigBang #BuracosNegros #Ciência #LivroZathu' 
    },

    // 4. ID: 1604
    { 
        id: 1604, 
        titulo: 'Matemática Aplicada: Cálculo e Estatística', 
        disciplina: 'Matemática', 
        autor: 'James Stewart', 
        imagem: 'images/Cienc/ff/rt.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conceitos essenciais de cálculo e estatística.', 
        hashtags: '#Matemática #Cálculo #Estatística #Ciência #LivroZathu' 
    },

    // 5. ID: 1605
    { 
        id: 1605, 
        titulo: 'Geologia: A Estrutura da Terra', 
        disciplina: 'Geologia', 
        autor: 'Stephen Marshak', 
        imagem: 'images/Cienc/ff/images (10).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Formação e estrutura do planeta Terra.', 
        hashtags: '#Geologia #Terra #Minerais #Rochas #Ciência #LivroZathu' 
    },

    // 6. ID: 1606
    { 
        id: 1606, 
        titulo: 'Biologia Molecular: Dos Genes às Proteínas', 
        disciplina: 'Biologia', 
        autor: 'Alberts et al.', 
        imagem: 'images/Cienc/ff/sintesep.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fundamentos da biologia molecular e genética.', 
        hashtags: '#Biologia #BiologiaMolecular #Genética #DNA #Ciência #LivroZathu' 
    },

    // 7. ID: 1607
    { 
        id: 1607, 
        titulo: 'Física Quântica: Teoria e Aplicações', 
        disciplina: 'Física', 
        autor: 'David J. Griffiths', 
        imagem: 'images/Cienc/ff/images (8).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Introdução à mecânica quântica.', 
        hashtags: '#FísicaQuântica #MecânicaQuântica #Ciência #LivroZathu' 
    },

    // 8. ID: 1608
    { 
        id: 1608, 
        titulo: 'Ciências Ambientais: Ecologia e Sustentabilidade', 
        disciplina: 'Ciências Ambientais', 
        autor: 'G. Tyler Miller', 
        imagem: 'images/Cienc/ff/images (9).jpeg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ecossistemas, biodiversidade e sustentabilidade.', 
        hashtags: '#CiênciasAmbientais #Ecologia #Sustentabilidade #LivroZathu' 
    },

    // 9. ID: 1609
    { 
        id: 1609, 
        titulo: 'A História Geológica da Vida: Animais e Plantas Fósseis', 
        disciplina: 'Paleontologia', 
        autor: 'Maria Elizabeth Eastwood Vaine (MINEROPAR)', 
        imagem: 'images/Cienc/InShot_20260925_212934399.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Viagem no tempo geológico desde estromatólitos até o homem.', 
        hashtags: '#Paleontologia #Fósseis #Evolução #Geologia #Dinossauros #Ciência #LivroZathu' 
    },

    // 10. ID: 1610
    { 
        id: 1610, 
        titulo: 'O Símbolo e a Realidade', 
        disciplina: 'Filosofia da Matemática', 
        autor: 'Ricardo Mendes Grande & Ricardo Scucuglia Rodrigues da Silva', 
        imagem: 'images/Cienc/InShot_20260925_214116761.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Papel da notação matemática na resolução de problemas.', 
        hashtags: '#Filosofia #Matemática #Notação #Epistemologia #Ciência #LivroZathu' 
    },

    // 11. ID: 1611
    { 
        id: 1611, 
        titulo: 'Matemática Básica', 
        disciplina: 'Matemática', 
        autor: 'Rodrigo Nogueira de Codes', 
        imagem: 'images/Cienc/InShot_20260925_213730089.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conjuntos, funções, polinômios, matrizes e sistemas.', 
        hashtags: '#Matemática #Conjuntos #Funções #Matrizes #SistemasLineares #Ciência #LivroZathu' 
    },

    // 13. ID: 1613
    { 
        id: 1613, 
        titulo: 'Microbiologia Industrial: Bioprocessos (Vol. 1)', 
        disciplina: 'Microbiologia', 
        autor: 'Rodrigo Pires do Nascimento et al.', 
        imagem: 'images/Cienc/InShot_20260925_214147209.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Enzimas, biocombustíveis e produção de biomoléculas.', 
        hashtags: '#Microbiologia #Bioprocessos #EngenhariaBioquímica #Enzimas #Biocombustíveis #Ciência #LivroZathu' 
    },

    // 14. ID: 1614
    { 
        id: 1614, 
        titulo: 'Manual de Botânica: Crescimento e Desenvolvimento', 
        disciplina: 'Botânica', 
        autor: 'Rosely Oliveira Andrade Cruz', 
        imagem: 'images/Cienc/InShot_20260925_214024789.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fisiologia vegetal, relações hídricas e nutrição mineral.', 
        hashtags: '#Botânica #FisiologiaVegetal #CrescimentoVegetal #RelaçõesHídricas #Ciência #LivroZathu' 
    },

    // 15. ID: 1615
    { 
        id: 1615, 
        titulo: 'Matemática (Volume 06)', 
        disciplina: 'Matemática', 
        autor: 'Luiz Paulo, Paulo Vinícius Ribeiro et al.', 
        imagem: 'images/Cienc/InShot_20260925_214051849.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Probabilidades, logaritmos, matrizes e binômio de Newton.', 
        hashtags: '#Matemática #Probabilidade #Logaritmos #Matrizes #SistemasLineares #BinômioDeNewton #LivroZathu' 
    },

    // 16. ID: 1616
    { 
        id: 1616, 
        titulo: 'Jogos Matemáticos (5º Ano - Volume I)', 
        disciplina: 'Matemática', 
        autor: 'Secretaria da Educação do Ceará', 
        imagem: 'images/Cienc/InShot_20260925_213922004.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Coletânea de jogos para o 5º ano do Ensino Fundamental.', 
        hashtags: '#Matemática #JogosMatemáticos #EnsinoFundamental #Lúdico #Aprendizagem #Educação #LivroZathu' 
    },

    // 17. ID: 1617
    { 
        id: 1617, 
        titulo: 'Membrana Celular: Especializações', 
        disciplina: 'Biologia Celular', 
        autor: 'Autor não informado', 
        imagem: 'images/Cienc/InShot_20260925_213808977.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Microvilosidades, junções e comunicação celular.', 
        hashtags: '#BiologiaCelular #MembranaPlasmática #JunçõesCelulares #Microvilosidades #Ciência #LivroZathu' 
    },

    // 18. ID: 1618
    { 
        id: 1618, 
        titulo: 'Morfologia Externa e Interna da Folha', 
        disciplina: 'Botânica', 
        autor: 'Profª Sandra Bianchi', 
        imagem: 'images/Cienc/InShot_20260925_214302835.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estrutura, funções e tipos de folhas em angiospermas.', 
        hashtags: '#Botânica #MorfologiaVegetal #Folha #AnatomiaVegetal #Fotossíntese #Ciência #LivroZathu' 
    },

    // 19. ID: 1619
    { 
        id: 1619, 
        titulo: 'Física 1: Dinâmica', 
        disciplina: 'Física', 
        autor: 'Jaime E. Villate', 
        imagem: 'images/Cienc/InShot_20260925_213550462.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Introdução à mecânica clássica e sistemas dinâmicos.', 
        hashtags: '#Física #Mecânica #Dinâmica #SistemasDinâmicos #Ciência #LivroZathu' 
    },

    // 20. ID: 1620
    { 
        id: 1620, 
        titulo: 'Eletrônica: Circuitos Elétricos', 
        disciplina: 'Engenharia Elétrica', 
        autor: 'Antonio Pereira Afonso & Enio Filoni', 
        imagem: 'images/Cienc/InShot_20260925_213137445.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fundamentos de circuitos elétricos e eletrônica básica.', 
        hashtags: '#Eletrônica #Circuitos #Engenharia #Ciência #LivroZathu' 
    },

    // 21. ID: 1621
    { 
        id: 1621, 
        titulo: 'Comportamento Animal', 
        disciplina: 'Biologia', 
        autor: 'Valeska Regina Reque Ruiz (Organizadora)', 
        imagem: 'images/Cienc/InShot_20260925_212840197.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estudos sobre etologia e comportamento de espécies.', 
        hashtags: '#Etologia #Biologia #ComportamentoAnimal #Zoologia #Ciência #LivroZathu' 
    },

    // 22. ID: 1622
    { 
        id: 1622, 
        titulo: 'Geografia: história, conceitos e métodos', 
        disciplina: 'Geografia', 
        autor: 'Nilson Cortez Crocia de Barros', 
        imagem: 'images/Cienc/InShot_20260925_213642463.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Evolução do pensamento geográfico e suas tradições.', 
        hashtags: '#Geografia #HistóriaDaGeografia #Epistemologia #Ciência #LivroZathu' 
    },

    // 23. ID: 1623
    { 
        id: 1623, 
        titulo: 'Bioestatística: Princípios e Aplicações', 
        disciplina: 'Bioestatística', 
        autor: 'Sidia M. Callegari-Jacques', 
        imagem: 'images/Cienc/InShot_20260925_212800319.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Introdução à bioestatística para ciências biológicas.', 
        hashtags: '#Bioestatística #Estatística #CiênciasBiológicas #MetodologiaCientífica #LivroZathu' 
    },

    // 24. ID: 1624
    { 
        id: 1624, 
        titulo: 'Os Fundamentos da Física - Volume 1: Mecânica', 
        disciplina: 'Física', 
        autor: 'Ramalho, Nicolau e Toledo', 
        imagem: 'images/Cienc/InShot_20260925_213858343.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico da física brasileira para o ensino médio.', 
        hashtags: '#Física #Mecânica #Cinemática #Dinâmica #EnsinoMédio #LivroZathu' 
    },

    // 25. ID: 1625
    { 
        id: 1625, 
        titulo: 'Matemática Geral', 
        disciplina: 'Matemática', 
        autor: 'Manoel Paiva', 
        imagem: 'images/Cienc/InShot_20260925_213828725.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Apostila completa para o Ensino Médio.', 
        hashtags: '#Matemática #EnsinoMédio #Conjuntos #Funções #Geometria #Trigonometria #LivroZathu' 
    },

    // 26. ID: 1626
    { 
        id: 1626, 
        titulo: 'Geologia Aplicada - Volume II', 
        disciplina: 'Geologia', 
        autor: 'Fabrícia Benda de Oliveira et al.', 
        imagem: 'images/Cienc/InShot_20260925_213415319.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Temas de geologia aplicada no Espírito Santo.', 
        hashtags: '#Geologia #Geoturismo #Hidrogeologia #Ciência #LivroZathu' 
    },

    // 27. ID: 1627
    { 
        id: 1627, 
        titulo: 'Tópicos em Geologia - Volume 1', 
        disciplina: 'Geologia', 
        autor: 'Davilson Eduardo Andrade (Org.)', 
        imagem: 'images/Cienc/InShot_20260925_213707734.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Compilado de estudos em geologia e geotecnia.', 
        hashtags: '#Geologia #Geotecnia #Rochas #Ciência #LivroZathu' 
    },

    // 28. ID: 1628
    { 
        id: 1628, 
        titulo: 'Introdução às Ciências do Mar', 
        disciplina: 'Ciências do Mar / Oceanografia', 
        autor: 'Jorge P. Castello e Luiz C. Krug (Org.)', 
        imagem: 'images/Cienc/InShot_20260925_213041005.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Geologia, química, biologia e gestão costeira.', 
        hashtags: '#Oceanografia #CiênciasDoMar #BiologiaMarinha #GeologiaMarinha #RecursosMarinhos #LivroZathu' 
    },

    // 29. ID: 1629
    { 
        id: 1629, 
        titulo: 'Geofísica Aplicada: Métodos Geoelétricos', 
        disciplina: 'Geofísica', 
        autor: 'Antonio Celso de Oliveira Braga', 
        imagem: 'images/Cienc/InShot_20260925_214325810.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Métodos geoelétricos para aquíferos e contaminação.', 
        hashtags: '#Geofísica #Hidrogeologia #ÁguasSubterrâneas #Eletrorresistividade #Aquíferos #Ciência #LivroZathu' 
    },

    // 30. ID: 1630
    { 
        id: 1630, 
        titulo: 'Geologia Estrutural', 
        disciplina: 'Geologia', 
        autor: 'Haakon Fossen', 
        imagem: 'images/Cienc/InShot_20260925_213443028.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Deformação, esforços, reologia e estruturas tectônicas.', 
        hashtags: '#Geologia #GeologiaEstrutural #Tectônica #Deformação #Rochas #EnsinoSuperior #LivroZathu' 
    }

],

   
  // 💑 Relacionamentos (50 livros)
'relacionamentos': [
    // 11. ID: 1861
    { 
        id: 1861, 
        titulo: 'Relacionamento é coisa pra gente disposta', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Geffo Pinheiro', 
        imagem: 'images/Comum BooKs/RElAc/Relacionamen.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexões poéticas sobre responsabilidade afetiva.', 
        hashtags: '#Relacionamento #Autoajuda #ResponsabilidadeAfetiva #LivroZathu' 
    },

    // 12. ID: 1862
    { 
        id: 1862, 
        titulo: 'Poliamor & Relacionamento Aberto', 
        disciplina: 'Psicologia / Relacionamentos', 
        autor: 'Alexandre Venancio', 
        imagem: 'images/Comum BooKs/RElAc/Poliamor & Relacionamento Aberto.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Abordagem sobre relacionamentos não monogâmicos.', 
        hashtags: '#Poliamor #RelacionamentoAberto #Psicologia #Amor #LivroZathu' 
    },

    // 13. ID: 1863
    { 
        id: 1863, 
        titulo: 'Relacionamentos Amorosos: o antes, o durante e o depois (Vol. 2)', 
        disciplina: 'Psicologia / Autoajuda', 
        autor: 'Thiago de Almeida (Organizador)', 
        imagem: 'images/Comum BooKs/RElAc/Relacionamentos Amorosos: o antes, o durante e o depois.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fases de um relacionamento amoroso.', 
        hashtags: '#RelacionamentosAmorosos #Psicologia #Autoajuda #Amor #LivroZathu' 
    },

    // 14. ID: 1864
    { 
        id: 1864, 
        titulo: 'Tudo sobre o amor: novas perspectivas', 
        disciplina: 'Filosofia / Sociologia / Autoajuda', 
        autor: 'bell hooks', 
        imagem: 'images/Comum BooKs/RElAc/Tudo sobre o amor: novas perspectiva.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexão sobre o amor como prática transformadora.', 
        hashtags: '#Amor #bellhooks #Filosofia #Feminismo #LivroZathu' 
    },

    // 16. ID: 1866
    { 
        id: 1866, 
        titulo: 'O Milagre da Manhã para Transformar seu Relacionamento', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Hal Elrod, Paul Martino, Stacey Martino, Honorée Corder', 
        imagem: 'images/Comum BooKs/RElAc/O Milagre da Manhã para Transformar seu Relacionamento.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramentas para transformar relacionamentos.', 
        hashtags: '#Autoajuda #Relacionamentos #MilagreDaManha #HalElrod #LivroZathu' 
    },

    // 17. ID: 1867
    { 
        id: 1867, 
        titulo: 'Como Ser um Adulto nas Relações', 
        disciplina: 'Psicologia / Relacionamentos', 
        autor: 'David Richo', 
        imagem: 'images/Comum BooKs/RElAc/Como Ser um Adulto nas Relações.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia baseado no mindfulness e nos "cinco As".', 
        hashtags: '#Psicologia #Relacionamentos #Mindfulness #DavidRicho #LivroZathu' 
    },

    // 18. ID: 1868
    { 
        id: 1868, 
        titulo: 'Insegurança no Amor', 
        disciplina: 'Psicologia', 
        autor: 'Leslie Becker-Phelps', 
        imagem: 'images/Comum BooKs/RElAc/Insegurança no Amor.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ansiedade no apego amoroso e como superá-la.', 
        hashtags: '#Psicologia #ApegoAnsioso #Relacionamentos #Autoconhecimento #LivroZathu' 
    },

    // 19. ID: 1869
    { 
        id: 1869, 
        titulo: 'O Ciúme e suas Consequências para os Relacionamentos Amorosos', 
        disciplina: 'Psicologia', 
        autor: 'Thiago de Almeida', 
        imagem: 'images/Comum BooKs/RElAc/O Ciúme e suas Consequências para os Relacionamentos Amorosos.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise psicológica sobre a natureza do ciúme romântico.', 
        hashtags: '#Psicologia #Ciume #Relacionamentos #Amor #Infidelidade #LivroZathu' 
    },

    // 20. ID: 1870
    { 
        id: 1870, 
        titulo: 'A Comunicação dos Amantes', 
        disciplina: 'Comunicação Social / Psicologia', 
        autor: 'Adriana Thiara de Oliveira Silva', 
        imagem: 'images/Comum BooKs/RElAc/A Comunicação dos Amantes.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise da comunicação entre homens e mulheres.', 
        hashtags: '#Comunicacao #Relacionamento #Psicologia #Amor #LivroZathu' 
    },

    // ===== TERCEIRO LOTE (IDs 1871-1880) =====

    // 21. ID: 1871
    { 
        id: 1871, 
        titulo: 'Segredo de Justiça', 
        disciplina: 'Direito / Psicologia / Relacionamentos', 
        autor: 'Andréa Pachá', 
        imagem: 'images/Comum BooKs/RElAc/Segredo de Justiça.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Histórias reais de disputas familiares nos tribunais.', 
        hashtags: '#SegredoDeJustiça #AndréaPachá #DireitoDeFamília #Relacionamentos #LivroZathu' 
    },

    // 22. ID: 1872
    { 
        id: 1872, 
        titulo: 'Uma Maneira de Salvar o Seu Lar', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Márcio Mendes', 
        imagem: 'images/Comum BooKs/RElAc/Uma Maneira de Salvar o Seu Lar.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para fortalecer relacionamentos e prevenir o divórcio.', 
        hashtags: '#Autoajuda #Relacionamentos #Família #Comunicação #LivroZathu' 
    },

    // 23. ID: 1873
    { 
        id: 1873, 
        titulo: 'Perda sem Nome: Como superar a ausência de pessoas queridas', 
        disciplina: 'Psicologia / Apoio ao Luto', 
        autor: 'Ana Maria Dall Agnese, Marcia da Rosa Batista, Vanessa Garcia de Oliveira, Adriane Turatti de Rose, Natalia Lescano', 
        imagem: 'images/Comum BooKs/RElAc/Perda sem Nome: Como superar a ausência de pessoas queridas.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia sobre o luto de pais que perderam filhos.', 
        hashtags: '#Luto #Perda #Psicologia #ApoioEmocional #Família #LivroZathu' 
    },

    // 24. ID: 1874
    { 
        id: 1874, 
        titulo: 'Amor-Próprio: Guia Prático para Mulheres', 
        disciplina: 'Desenvolvimento Pessoal / Autoajuda', 
        autor: 'Megan Logan', 
        imagem: 'images/Comum BooKs/RElAc/Amor-Próprio: Guia Prático para Mulheres.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para cultivar o amor-próprio e autocompaixão.', 
        hashtags: '#AmorProprio #Autocuidado #Autocompaixão #SaudeMental #DesenvolvimentoPessoal #LivroZathu' 
    },

    // 25. ID: 1875
    { 
        id: 1875, 
        titulo: 'Conselhos Mui Úteis para os Pais de Família', 
        disciplina: 'Religião / Educação', 
        autor: 'Venerável D. António Maria Claret', 
        imagem: 'images/Comum BooKs/RElAc/Conselhos Mui Úteis para os Pais de Família.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia sobre matrimônio e criação dos filhos.', 
        hashtags: '#Religião #Familia #Educacao #Conselhos #Matrimonio #Pais #LivroZathu' 
    },

    // 26. ID: 1876
    { 
        id: 1876, 
        titulo: 'Pais Brilhantes, Professores Fascinantes', 
        disciplina: 'Educação / Psicologia', 
        autor: 'Augusto Cury', 
        imagem: 'images/Comum BooKs/RElAc/Pais Brilhantes, Professores Fascinantes.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para educar a emoção e formar personalidades.', 
        hashtags: '#Educação #AugustoCury #Pais #Professores #Psicologia #DesenvolvimentoInfantil #LivroZathu' 
    },

    // 27. ID: 1877
    { 
        id: 1877, 
        titulo: 'Quem Deus é? Quando e como apresentar Deus aos filhos', 
        disciplina: 'Espiritualidade / Parentalidade', 
        autor: 'Jackeline Hayashi', 
        imagem: 'images/Comum BooKs/RElAc/Quem Deus é.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para pais cristãos apresentarem Deus aos filhos.', 
        hashtags: '#Deus #Parentalidade #Fé #EducaçãoCristã #Filhos #LivroZathu' 
    },

    // ===== QUINTO LOTE (IDs 1891-1900) =====

    // 41. ID: 1891
    { 
        id: 1891, 
        titulo: 'Os Segredos da Confiança Inabalável', 
        disciplina: 'Desenvolvimento Pessoal / Sedução', 
        autor: 'Não identificado', 
        imagem: 'images/Comum BooKs/RElAc/Os Segredos da Confiança Inabalável.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Segredos para desenvolver confiança e linguagem corporal.', 
        hashtags: '#Confianca #LinguagemCorporal #DesenvolvimentoPessoal #Sedução #LivroZathu' 
    },

    // 42. ID: 1892
    { 
        id: 1892, 
        titulo: 'O que a Bíblia Diz Sobre Romance e Namoro', 
        disciplina: 'Religião / Vida Cristã', 
        autor: 'Douglas Nicolet', 
        imagem: 'images/Comum BooKs/RElAc/O que a Bíblia Diz Sobre Romance e Namoro.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Princípios bíblicos para o namoro e romance cristão.', 
        hashtags: '#Cristianismo #Namoro #Romance #Bíblia #VidaCristã #LivroZathu' 
    },

    // 47. ID: 1897
    { 
        id: 1897, 
        titulo: 'Razão e Sensibilidade', 
        disciplina: 'Literatura Clássica / Romance', 
        autor: 'Jane Austen', 
        imagem: 'images/Comum BooKs/RElAc/Razão e Sensibilidade.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico sobre duas irmãs com personalidades opostas.', 
        hashtags: '#LiteraturaClassica #JaneAusten #Romance #Clássicos #LivroZathu' 
    },

    // 48. ID: 1898
    { 
        id: 1898, 
        titulo: 'Orgulho e Preconceito', 
        disciplina: 'Literatura Clássica / Romance', 
        autor: 'Jane Austen', 
        imagem: 'images/Comum BooKs/RElAc/Orgulho e Preconceito.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico sobre casamento, classe social e preconceito.', 
        hashtags: '#JaneAusten #Classico #LiteraturaInglesa #Romance #Orgulho #Preconceito #LivroZathu' 
    },

    // 49. ID: 1899
    { 
        id: 1899, 
        titulo: 'Romeu e Julieta', 
        disciplina: 'Literatura / Teatro Clássico', 
        autor: 'William Shakespeare', 
        imagem: 'images/Comum BooKs/RElAc/Romeu e Julieta.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Trágica história de amor entre Romeu e Julieta.', 
        hashtags: '#Shakespeare #RomeuJulieta #LiteraturaClassica #Teatro #Tragedia #LivroZathu' 
    },

    // 50. ID: 1900
    { 
        id: 1900, 
        titulo: 'O Eterno Marido', 
        disciplina: 'Literatura Russa / Ficção Psicológica', 
        autor: 'Fiódor Dostoiévski', 
        imagem: 'images/Comum BooKs/RElAc/O Eterno Marido.png', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance psicológico sobre ciúme e relações complicadas.', 
        hashtags: '#Dostoiévski #LiteraturaRussa #FiccaoPsicologica #Ciume #Psicologia #LivroZathu' 
    }

],
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
    return ` *${livro.titulo}*%0A${livro.descricao_curta}%0A%0A *Baixar grátis:*%0A${livro.download || 'https://livrozathu.co.mz/livro?id=' + livro.id}%0A%0A#LivroZathu #EducaçãoMoçambique`;
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
            <p class="livro-preco"></p>
            <div class="livro-botoes">
                <a href="${livro.visualizar || livro.download}" target="_blank" class="btn btn-visualizar">
                    Visualizar
                </a>
                <a href="${livro.download}" download class="btn btn-download">
                    Baixar
                </a>
                <button onclick="abrirCompartilhamento(${livro.id})" class="btn btn-share">
                    Partilhar
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
            
            <h3> Partilhar ${livro.titulo}</h3>
            
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
                <button onclick="partilharWhatsApp(${livro.id})" class="rede-btn whatsapp">WhatsApp</button>
                <button onclick="partilharFacebook(${livro.id})" class="rede-btn facebook">Facebook</button>
                <button onclick="partilharTwitter(${livro.id})" class="rede-btn twitter">Twitter</button>
                <button onclick="partilharEmail(${livro.id})" class="rede-btn email">Email</button>
            </div>
            
            <div class="link-direto">
                <p>🔗 Link direto do livro:</p>
                <div class="link-copiar">
                    <input type="text" id="link-livro" value="https://livrozathu.co.mz/livro?id=${livro.id}" readonly>
                    <button onclick="copiarLink()" class="btn-copiar">Copiar</button>
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
    const texto = `${livro.titulo} - ${livro.descricao_curta}`;
    const url = `https://livrozathu.co.mz/livro?id=${livro.id}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
}

function partilharEmail(livroId) {
    const livro = getLivroPorId(livroId);
    const assunto = ` ${livro.titulo}`;
    const corpo = `Olá!\n\nEncontrei este livro gratuito no LivroZathu:\n\n ${livro.titulo}\n ${livro.descricao_curta}\n\n Download: ${livro.download}\n\n#LivroZathu`;
    
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