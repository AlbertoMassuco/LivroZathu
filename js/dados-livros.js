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
            },
            { 
                id: 102, 
                titulo: 'Português 1ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/1pclasse.png',
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
                imagem: 'BI/Espera/2Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            { 
                id: 202, 
                titulo: 'Português 2ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/2Pclasse.png',
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
                imagem: 'BI/Espera/3Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 302, 
                titulo: 'Português 3ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/3Mclasse.png',
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
                imagem: 'BI/Espera/4Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 402, 
                titulo: '4ª Classe', 
                disciplina: 'Ciencias-Naturais',
                autor: 'MINEDH',
                imagem: 'BI/Espera/4Mclasse.png',
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
                imagem: 'BI/Espera/5Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 502, 
                titulo: '5ª Classe', 
                disciplina: 'Educacao-Visual',
                autor: 'MINEDH',
                imagem: 'BI/Espera/5Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 503, 
                titulo: '5ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'BI/Espera/5Mclasse.png',
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
                imagem: 'BI/Espera/6Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 602, 
                titulo: '6ª Classe', 
                disciplina: 'Ciencias-Naturais',
                autor: 'MINEDH',
                imagem: 'BI/Espera/6Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 603, 
                titulo: '6ª Classe', 
                disciplina: 'Educacao-Visual',
                autor: 'MINEDH',
                imagem: 'BI/Espera/6Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 604, 
                titulo: '6ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'BI/Espera/6Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 605, 
                titulo: '6ª Classe', 
                disciplina: 'Educacao-Fisica',
                autor: 'MINEDH',
                imagem: 'BI/Espera/6Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 606, 
                titulo: '6ª Classe', 
                disciplina: 'Ciencias-Sociais',
                autor: 'MINEDH',
                imagem: 'BI/Espera/6Mclasse.png',
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
                imagem: 'BI/Espera/7Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            { 
                id: 702, 
                titulo: 'Ficha de Apoio 7ª Classe', 
                disciplina: 'Português',
                autor: 'MINEDH',
                imagem: 'BI/Espera/7Pclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 703, 
                titulo: 'Ficha de Apoio 7ª Classe', 
                disciplina: 'Matemática',
                autor: 'MINEDH',
                imagem: 'BI/Espera/7Pclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
             { 
                id: 704, 
                titulo: 'Ficha de Apoio 7ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/7Pclasse.png',
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
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 802, 
                titulo: '8ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 803, 
                titulo: '8ª Classe', 
                disciplina: 'Ed-Fisica',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 804, 
                titulo: '8ª Classe', 
                disciplina: 'Historia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 805, 
                titulo: '8ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 806, 
                titulo: '8ª Classe', 
                disciplina: 'Fisica',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 807, 
                titulo: '8ª Classe', 
                disciplina: 'Educacao-Visual',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
             { 
                id: 808, 
                titulo: '8ª Classe', 
                disciplina: 'Biologia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/8Mclasse.png',
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
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 902, 
                titulo: '9ª Classe', 
                disciplina: 'Quimica',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 903, 
                titulo: '9ª Classe', 
                disciplina: 'historia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 904, 
                titulo: '9ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 905, 
                titulo: '9ª Classe', 
                disciplina: 'Física I',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 906, 
                titulo: '9ª Classe', 
                disciplina: 'Física II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 907, 
                titulo: '9ª Classe', 
                disciplina: 'Empreendedorismo',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

             { 
                id: 908, 
                titulo: '9ª Classe', 
                disciplina: 'Educação Visual',
                autor: 'MINEDH',
                imagem: 'BI/Espera/9Mclasse.png',
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
                imagem: 'BI/Espera/10Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1002, 
                titulo: '10ª Classe', 
                disciplina: 'Matemática II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/10Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1003, 
                titulo: '10ª Classe', 
                disciplina: 'Física I',
                autor: 'MINEDH',
                imagem: 'BI/Espera/10Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1004, 
                titulo: '10ª Classe', 
                disciplina: 'Física II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/10Mclasse.png',
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
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1102, 
                titulo: '11ª Classe', 
                disciplina: 'Física',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1103, 
                titulo: '11ª Classe', 
                disciplina: 'Quimica I',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1104, 
                titulo: '11ª Classe', 
                disciplina: 'Quimica II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1105, 
                titulo: '11ª Classe', 
                disciplina: 'Ingles',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1106, 
                titulo: '11ª Classe', 
                disciplina: 'História',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1107, 
                titulo: '11ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1108, 
                titulo: '11ª Classe', 
                disciplina: 'Filosofia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

               { 
                id: 1109, 
                titulo: '11ª Classe', 
                disciplina: 'Biologia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/11Mclasse.png',
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
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1202, 
                titulo: '12ª Classe', 
                disciplina: 'Biologia I',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1203, 
                titulo: '12ª Classe', 
                disciplina: 'Biologia II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1204, 
                titulo: '12ª Classe', 
                disciplina: 'DGD',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1205, 
                titulo: '12ª Classe', 
                disciplina: 'Filosofia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1206, 
                titulo: '12ª Classe', 
                disciplina: 'Fisica',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1207, 
                titulo: '12ª Classe', 
                disciplina: 'Geografia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1208, 
                titulo: '12ª Classe', 
                disciplina: 'Historia',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1209, 
                titulo: '12ª Classe', 
                disciplina: 'TICs',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1210, 
                titulo: '12ª Classe', 
                disciplina: 'Matemática I',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1211, 
                titulo: '12ª Classe', 
                disciplina: 'Matemática II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1212, 
                titulo: '12ª Classe', 
                disciplina: 'Matemática III',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1213, 
                titulo: '12ª Classe', 
                disciplina: 'Portugues',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },
            { 
                id: 1214, 
                titulo: '12ª Classe', 
                disciplina: 'Quimica I',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
                visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview',
                download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI',
            },

            { 
                id: 1215, 
                titulo: '12ª Classe', 
                disciplina: 'Quimica II',
                autor: 'MINEDH',
                imagem: 'BI/Espera/12Mclasse.png',
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
        imagem: 'images/capas/desenvolvimento/1001_frases.jpg', 
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
        imagem: 'images/capas/desenvolvimento/autoestima.jpg', 
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
        imagem: 'images/capas/desenvolvimento/autoconhecimento.jpg', 
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
        imagem: 'images/capas/desenvolvimento/mulher_confiante.jpg', 
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
        imagem: 'images/capas/desenvolvimento/administrando_pessoas.jpg', 
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
        imagem: 'images/capas/desenvolvimento/administracao_tempo.jpg', 
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
        imagem: 'images/capas/desenvolvimento/atitude_vencedora.jpg', 
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
        imagem: 'images/capas/desenvolvimento/auto_conhecer.jpg', 
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
        imagem: 'images/capas/desenvolvimento/arte_da_guerra.jpg', 
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
        imagem: 'images/capas/desenvolvimento/automotivacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
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
        imagem: 'images/capas/desenvolvimento/8_atitudes_sucesso.jpg', 
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
        imagem: 'images/capas/desenvolvimento/associativismo.jpg', 
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
        imagem: 'images/capas/desenvolvimento/armas_da_persuasao.jpg', 
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
        imagem: 'images/capas/desenvolvimento/jornada_do_lider.jpg', 
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
        imagem: 'images/capas/desenvolvimento/sutil_arte_ligar_foda-se.jpg', 
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
        imagem: 'images/capas/desenvolvimento/como_fazer_amigos.jpg', 
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
        imagem: 'images/capas/desenvolvimento/coaching_transformacao.jpg', 
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
        imagem: 'images/capas/desenvolvimento/coaching_disponiveis.jpg', 
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
        imagem: 'images/capas/desenvolvimento/budismo_iniciantes.jpg', 
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
        imagem: 'images/capas/desenvolvimento/desenvolvimento_pessoal_mentor.jpg', 
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
        imagem: 'images/capas/desenvolvimento/personal_branding.jpg', 
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
        imagem: 'images/capas/desenvolvimento/comunicacao_interpessoal.jpg', 
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
        imagem: 'images/capas/desenvolvimento/como_se_tornar_sobrenatural.jpg', 
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
        imagem: 'images/capas/desenvolvimento/planejamento_estrategico_pessoal.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramentas como SWOT para metas e objetivos.', 
        hashtags: '#PlanejamentoEstratégico #Metas #Objetivos #SWOT #Carreira #Produtividade #LivroZathu' 
    },

    // 25. ID: 1135
    { 
        id: 1135, 
        titulo: 'Mindset - O Poder da Mentalidade', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Baseado em Carol Dweck', 
        imagem: 'images/capas/desenvolvimento/mindset.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Mentalidade fixa vs. mentalidade de crescimento.', 
        hashtags: '#Mindset #MentalidadeDeCrescimento #CarolDweck #Sucesso #Aprendizado #Resiliência #LivroZathu' 
    },

    // 26. ID: 1136
    { 
        id: 1136, 
        titulo: 'Frases para Iluminar e Inspirar o seu Dia', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Coletânea', 
        imagem: 'images/capas/desenvolvimento/frases_iluminar_dia.jpg', 
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
        imagem: 'images/capas/desenvolvimento/dinamicas_grupo_confianca.jpg', 
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
        imagem: 'images/capas/desenvolvimento/desistir_nunca.jpg', 
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
        imagem: 'images/capas/desenvolvimento/desenvolvimento_pessoal_interpessoal.jpg', 
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
        imagem: 'images/capas/desenvolvimento/desenvolvimento_pessoal_jovens.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia espiritual e prático para jovens.', 
        hashtags: '#DesenvolvimentoPessoal #Jovens #Espiritualidade #Propósito #CrescimentoPessoal #JesusCristo #LivroZathu' 
    },

    // 31. ID: 1141
    { 
        id: 1141, 
        titulo: 'A Arte da Guerra (Edição Especial)', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Sun Tzu', 
        imagem: 'images/capas/desenvolvimento/arte_da_guerra_edicao_especial.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Edição especial do clássico da estratégia militar.', 
        hashtags: '#Estratégia #Liderança #SunTzu #Filosofia #Negócios #Guerra #LivroZathu' 
    },

    // 32. ID: 1142
    { 
        id: 1142, 
        titulo: 'Liderança Educacional (Vol. I)', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Cláudia Neves e Susana Henriques (Orgs.)', 
        imagem: 'images/capas/desenvolvimento/lideranca_educacional.jpg', 
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
        imagem: 'images/capas/desenvolvimento/jovens_voces_e_a_vida.jpg', 
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
        imagem: 'images/capas/desenvolvimento/introducao_psicologia_ser.jpg', 
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
        imagem: 'images/capas/desenvolvimento/independencia_autoconfianca.jpg', 
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
        imagem: 'images/capas/desenvolvimento/guia_autoestima.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '10 passos para desenvolver uma autoestima saudável.', 
        hashtags: '#Autoestima #Autoconhecimento #Autoaceitação #Psicologia #BemEstar #SaúdeMental #LivroZathu' 
    },

    // 37. ID: 1147
    { 
        id: 1147, 
        titulo: 'Independência e Autoconfiança - Empretec Talks', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'SEBRAE', 
        imagem: 'images/capas/desenvolvimento/empretec_independencia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Característica empreendedora de independência.', 
        hashtags: '#Empretec #Empreendedorismo #SEBRAE #ComportamentoEmpreendedor #Autoconfiança #Independência #LivroZathu' 
    },

    // 38. ID: 1148
    { 
        id: 1148, 
        titulo: 'Guia Completo sobre Autoestima (Versão Digital)', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Thaiana F. Brotto', 
        imagem: 'images/capas/desenvolvimento/guia_autoestima_digital.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Passo a passo prático para fortalecer a autoestima.', 
        hashtags: '#Autoestima #Psicologia #SaúdeMental #DesenvolvimentoPessoal #BemEstar #Autoconhecimento #LivroZathu' 
    },

    // 39. ID: 1149
    { 
        id: 1149, 
        titulo: 'Network: Como Construir uma Boa Rede de Contatos', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'SEBRAE', 
        imagem: 'images/capas/desenvolvimento/network.jpg', 
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
        imagem: 'images/capas/desenvolvimento/motivacao_organizacoes.jpg', 
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
        imagem: 'images/capas/desenvolvimento/lideranca_gestao_equipes.jpg', 
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
        imagem: 'images/capas/desenvolvimento/liderancas_inovacao_educativos.jpg', 
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
        imagem: 'images/capas/desenvolvimento/lideranca_motivacao_equipas.jpg', 
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
        imagem: 'images/capas/desenvolvimento/lideranca_educacional_vol1.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Artigos sobre gestão e inovação nas escolas.', 
        hashtags: '#LiderançaEducacional #GestãoEscolar #Educação #Inovação #PesquisaEducacional #LivroZathu' 
    },

    // 45. ID: 1155
    { 
        id: 1155, 
        titulo: 'Gestão de Conflitos e Comunicação Assertiva', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Baseado em literatura especializada', 
        imagem: 'images/capas/desenvolvimento/gestao_conflitos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Técnicas para liderar equipes com eficácia.', 
        hashtags: '#GestãoDeConflitos #ComunicaçãoAssertiva #Liderança #InteligênciaEmocional #Relacionamentos #Equipes #LivroZathu' 
    },

    // 46. ID: 1156
    { 
        id: 1156, 
        titulo: 'O Manual Definitivo do Coach em Início de Carreira', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Geronimo Theml', 
        imagem: 'images/capas/desenvolvimento/manual_coach_inicio.jpg', 
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
        imagem: 'images/capas/desenvolvimento/homem_mais_rico_babilonia.jpg', 
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
        imagem: 'images/capas/desenvolvimento/nunca_fiques_onde_ja_nao_estas.jpg', 
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
        imagem: 'images/capas/desenvolvimento/noite_escura_alma.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Purificação da alma e união mística com Deus.', 
        hashtags: '#Misticismo #Espiritualidade #SãoJoãoDaCruz #Contemplação #Purificação #Fé #LivroZathu' 
    },

    // 50. ID: 1160
    { 
        id: 1160, 
        titulo: 'Networking Passo a Passo', 
        disciplina: 'Desenvolvimento Pessoal', 
        autor: 'Andreia Paoliello', 
        imagem: 'images/capas/desenvolvimento/networking_passo_passo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '15 passos para construir uma rede de relacionamentos.', 
        hashtags: '#Networking #Relacionamentos #MarcaPessoal #Carreira #Contatos #DesenvolvimentoProfissional #LivroZathu' 
    }

],

        // 💼 Negócios (40 livros)
'negocios': [

    // 1. ID: 1211
    { 
        id: 1211, 
        titulo: 'A Sabedoria do Investimento', 
        disciplina: 'Finanças', 
        autor: 'Marcelo de Oliveira Passos', 
        imagem: 'images/capas/negocios/sabedoria-investimento.jpg', 
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
        imagem: 'images/capas/negocios/riqueza-nacoes.jpg', 
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
        imagem: 'images/capas/negocios/energia-dinheiro.jpg', 
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
        imagem: 'images/capas/negocios/100-casos-lavagem.jpg', 
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
        imagem: 'images/capas/negocios/investidor-inteligente.jpg', 
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
        imagem: 'images/capas/negocios/pai-rico-pai-pobre.jpg', 
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
        imagem: 'images/capas/negocios/mente-milionaria.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reprograme sua mentalidade para a riqueza.', 
        hashtags: '#Mentalidade #Riqueza #LivroZathu' 
    },

    // 8. ID: 1218
    { 
        id: 1218, 
        titulo: 'A Startup Enxuta', 
        disciplina: 'Negócios', 
        autor: 'Eric Ries', 
        imagem: 'images/capas/negocios/startup-enxuta.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Como empreender com eficiência e inovação.', 
        hashtags: '#Startup #Empreendedorismo #LivroZathu' 
    },

    // 9. ID: 1219
    { 
        id: 1219, 
        titulo: 'De Zero a Um', 
        disciplina: 'Negócios', 
        autor: 'Peter Thiel', 
        imagem: 'images/capas/negocios/zero-a-um.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Crie o futuro com inovação e diferenciação.', 
        hashtags: '#Inovação #Empreendedorismo #LivroZathu' 
    },

    // 10. ID: 1220
    { 
        id: 1220, 
        titulo: 'A Estratégia do Oceano Azul', 
        disciplina: 'Negócios', 
        autor: 'W. Chan Kim', 
        imagem: 'images/capas/negocios/oceano-azul.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Crie novos mercados inexplorados e inovadores.', 
        hashtags: '#Estratégia #Inovação #LivroZathu' 
    },

    // 11. ID: 1221
    { 
        id: 1221, 
        titulo: 'A Psicologia do Dinheiro', 
        disciplina: 'Finanças Comportamentais', 
        autor: 'Dan Ariely e Jeff Kreisler', 
        imagem: 'images/capas/negocios/psicologia-dinheiro.jpg', 
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
        imagem: 'images/capas/negocios/educacao-financeira-infantil.jpg', 
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
        imagem: 'images/capas/negocios/educacao-financeira-escolas.jpg', 
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
        imagem: 'images/capas/negocios/plano-negocio.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramenta vital para a continuidade da empresa.', 
        hashtags: '#PlanoDeNegócio #Empreendedorismo #LivroZathu' 
    },

    // 15. ID: 1225
    { 
        id: 1225, 
        titulo: 'Caderno de Educação Financeira', 
        disciplina: 'Finanças', 
        autor: 'Banco Central do Brasil', 
        imagem: 'images/capas/negocios/caderno-educacao-financeira.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Gestão de finanças pessoais do Banco Central.', 
        hashtags: '#FinançasPessoais #BCB #LivroZathu' 
    },

    // 16. ID: 1226
    { 
        id: 1226, 
        titulo: 'Como Organizar Sua Vida Financeira', 
        disciplina: 'Finanças', 
        autor: 'Gustavo Cerbasi', 
        imagem: 'images/capas/negocios/organizar-vida-financeira.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Planejamento e equilíbrio financeiro para o futuro.', 
        hashtags: '#FinançasPessoais #Planejamento #LivroZathu' 
    },

    // 17. ID: 1227
    { 
        id: 1227, 
        titulo: 'Casais Inteligentes Enriquecem Juntos', 
        disciplina: 'Finanças', 
        autor: 'Gustavo Cerbasi', 
        imagem: 'images/capas/negocios/casais-inteligentes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Administre o dinheiro e fortaleça o relacionamento.', 
        hashtags: '#Finanças #Relacionamento #LivroZathu' 
    },

    // 18. ID: 1228
    { 
        id: 1228, 
        titulo: 'Me Poupe!', 
        disciplina: 'Finanças', 
        autor: 'Nathalia Arcuri', 
        imagem: 'images/capas/negocios/me-poupe.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '10 passos para nunca mais faltar dinheiro.', 
        hashtags: '#FinançasPessoais #Economia #LivroZathu' 
    },

    // 19. ID: 1229
    { 
        id: 1229, 
        titulo: 'Dinheiro: Os Segredos de Quem Tem', 
        disciplina: 'Finanças', 
        autor: 'Gustavo Cerbasi', 
        imagem: 'images/capas/negocios/segredos-quem-tem.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Equilibre as contas e conquiste independência.', 
        hashtags: '#IndependênciaFinanceira #Finanças #LivroZathu' 
    },

    // 20. ID: 1230
    { 
        id: 1230, 
        titulo: 'Os Segredos da Mente Milionária', 
        disciplina: 'Finanças', 
        autor: 'T. Harv Eker', 
        imagem: 'images/capas/negocios/mente-milionaria.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '17 modos de pensar que distinguem os ricos.', 
        hashtags: '#Mentalidade #Riqueza #LivroZathu' 
    },

    // 21. ID: 1231
    { 
        id: 1231, 
        titulo: 'Capital Empreendedor', 
        disciplina: 'Finanças', 
        autor: 'Centro de Estudos Estratégicos (CEDES)', 
        imagem: 'images/capas/negocios/capital-empreendedor.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Private equity e venture capital no Brasil.', 
        hashtags: '#PrivateEquity #VentureCapital #Inovação #LivroZathu' 
    },

    // 22. ID: 1232
    { 
        id: 1232, 
        titulo: 'Private Equity e Venture Capital no Brasil', 
        disciplina: 'Finanças', 
        autor: 'ABDI e FGV-EAESP', 
        imagem: 'images/capas/negocios/pe-vc-brasil.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: '2º Censo Brasileiro da indústria de PE/VC.', 
        hashtags: '#PrivateEquity #VentureCapital #Censo #LivroZathu' 
    },

    // 23. ID: 1233
    { 
        id: 1233, 
        titulo: 'Investimento-Anjo no Brasil', 
        disciplina: 'Finanças', 
        autor: 'Cassio Spina (Anjos do Brasil)', 
        imagem: 'images/capas/negocios/investimento-anjo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Papel dos investidores-anjo no ecossistema.', 
        hashtags: '#InvestimentoAnjo #Startup #Empreendedorismo #LivroZathu' 
    },

    // 24. ID: 1234
    { 
        id: 1234, 
        titulo: 'Mecanismos de Saída para PE/VC', 
        disciplina: 'Finanças', 
        autor: 'Cristiana Pereira e Edna Holanda', 
        imagem: 'images/capas/negocios/mecanismos-saida.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'IPOs e mercado de capitais para desinvestimentos.', 
        hashtags: '#IPO #MercadoDeCapitais #PrivateEquity #LivroZathu' 
    },

    // 25. ID: 1235
    { 
        id: 1235, 
        titulo: 'Desconsideração da Personalidade Jurídica', 
        disciplina: 'Direito Empresarial', 
        autor: 'Marcelo Pereira Gômara e Angelo Antonio Cabral', 
        imagem: 'images/capas/negocios/desconsideracao-personalidade.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise sobre responsabilidade de sócios.', 
        hashtags: '#DireitoEmpresarial #Governança #RiscoJurídico #LivroZathu' 
    },

    // 26. ID: 1236
    { 
        id: 1236, 
        titulo: 'Cadeias Globais de Valor e Investimento', 
        disciplina: 'Negócios Internacionais', 
        autor: 'Cássio Marx Rabello da Costa (ABDI)', 
        imagem: 'images/capas/negocios/cadeias-globais-valor.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Inserção do Brasil nas cadeias globais.', 
        hashtags: '#CadeiasGlobais #IED #Estratégia #LivroZathu' 
    },

    // 27. ID: 1237
    { 
        id: 1237, 
        titulo: 'Políticas Públicas para Capital de Risco', 
        disciplina: 'Políticas Públicas', 
        autor: 'OCDE e Josh Lerner', 
        imagem: 'images/capas/negocios/politicas-capital-risco.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Diretrizes internacionais para fomento ao VC.', 
        hashtags: '#PolíticasPúblicas #VentureCapital #OCDE #LivroZathu' 
    },

    // 28. ID: 1238
    { 
        id: 1238, 
        titulo: 'Ecossistema de Capital Empreendedor no Brasil', 
        disciplina: 'Finanças', 
        autor: 'Andrea Minardi e Felipe Cresciulo (Insper)', 
        imagem: 'images/capas/negocios/ecossistema-capital.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sucessos e desafios do PE/VC no Brasil.', 
        hashtags: '#Ecossistema #PEVC #Inovação #LivroZathu' 
    },

    // 29. ID: 1239
    { 
        id: 1239, 
        titulo: 'Propostas Legislativas para Capital Empreendedor', 
        disciplina: 'Direito Empresarial', 
        autor: 'Câmara dos Deputados - CEDES', 
        imagem: 'images/capas/negocios/propostas-legislativas.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Projeto de Lei para incentivos fiscais.', 
        hashtags: '#Legislação #IncentivosFiscais #FIP #LivroZathu' 
    },

    // 30. ID: 1240
    { 
        id: 1240, 
        titulo: 'Inovação e Capital de Risco', 
        disciplina: 'Finanças', 
        autor: 'Samuel Kortum e Josh Lerner', 
        imagem: 'images/capas/negocios/inovacao-capital-risco.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Relação entre VC, patentes e produtividade.', 
        hashtags: '#Inovação #Patentes #Pesquisa #LivroZathu' 
    },

    // 31. ID: 1241
    { 
        id: 1241, 
        titulo: 'Microeconomia', 
        disciplina: 'Economia', 
        autor: 'Paulo Augusto Meyer Mattos Nascimento & Fabiano Mezadre Pompermayer', 
        imagem: 'images/capas/negocios/microeconomia-enap.jpg', 
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
        imagem: 'images/capas/negocios/macroeconomia.jpg', 
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
        imagem: 'images/capas/negocios/marketing-pessoal.jpg', 
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
        imagem: 'images/capas/negocios/manual-empreendedorismo.jpg', 
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
        imagem: 'images/capas/negocios/lean-enterprise.jpg', 
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
        imagem: 'images/capas/negocios/guia-gestao-empresarial.jpg', 
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
        imagem: 'images/capas/negocios/inteligencia-emocional-vendas.jpg', 
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
        imagem: 'images/capas/negocios/historia-pensamento-economico.jpg', 
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
        imagem: 'images/capas/negocios/introducao-economia.jpg', 
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
        imagem: 'images/capas/negocios/fora-da-curva-investidores.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estratégias dos principais investidores brasileiros.', 
        hashtags: '#Investimentos #MercadoFinanceiro #GestãoDeRisco #Brasil #LivroZathu' 
    }

],
    
 
// 💻 Tecnologia (75 livros)
'tecnologia': [

    // 1. ID: 1301
    { 
        id: 1301, 
        titulo: 'Introdução à Programação', 
        disciplina: 'Tecnologia', 
        autor: 'Alberto Massuco', 
        imagem: 'images/capas/tecnologia/programacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Aprenda a programar do zero.', 
        hashtags: '#Programação #Lógica #LivroZathu' 
    },

    // 2. ID: 1302
    { 
        id: 1302, 
        titulo: 'HTML5 e CSS3', 
        disciplina: 'Tecnologia', 
        autor: 'Maurício Samy', 
        imagem: 'images/capas/tecnologia/html-css.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Crie sites modernos.', 
        hashtags: '#HTML #CSS #Web #LivroZathu' 
    },

    // 3. ID: 1303
    { 
        id: 1303, 
        titulo: 'JavaScript: O Guia Definitivo', 
        disciplina: 'Tecnologia', 
        autor: 'David Flanagan', 
        imagem: 'images/capas/tecnologia/javascript.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Domine a linguagem da web.', 
        hashtags: '#JavaScript #JS #LivroZathu' 
    },

    // 4. ID: 1304
    { 
        id: 1304, 
        titulo: 'Python para Iniciantes', 
        disciplina: 'Tecnologia', 
        autor: 'João Tembe', 
        imagem: 'images/capas/tecnologia/python.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Aprenda Python de forma simples.', 
        hashtags: '#Python #Programação #LivroZathu' 
    },

    // 5. ID: 1305
    { 
        id: 1305, 
        titulo: 'Inteligência Artificial', 
        disciplina: 'Tecnologia', 
        autor: 'Stuart Russell', 
        imagem: 'images/capas/tecnologia/ia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Uma abordagem moderna da IA.', 
        hashtags: '#IA #InteligênciaArtificial #LivroZathu' 
    },

    // 6. ID: 1306
    { 
        id: 1306, 
        titulo: 'Banco de Dados', 
        disciplina: 'Tecnologia', 
        autor: 'Elmasri Navathe', 
        imagem: 'images/capas/tecnologia/banco-dados.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Projeto e implementação de bancos de dados.', 
        hashtags: '#BancoDeDados #SQL #LivroZathu' 
    },

    // 7. ID: 1307
    { 
        id: 1307, 
        titulo: 'Redes de Computadores', 
        disciplina: 'Tecnologia', 
        autor: 'Tanenbaum', 
        imagem: 'images/capas/tecnologia/redes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'O guia completo de redes.', 
        hashtags: '#Redes #Computadores #LivroZathu' 
    },

    // 8. ID: 1308
    { 
        id: 1308, 
        titulo: 'Segurança da Informação', 
        disciplina: 'Tecnologia', 
        autor: 'Stallings', 
        imagem: 'images/capas/tecnologia/seguranca.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Proteja seus dados.', 
        hashtags: '#Segurança #Hacking #LivroZathu' 
    },

    // 9. ID: 1309
    { 
        id: 1309, 
        titulo: 'React do Zero', 
        disciplina: 'Tecnologia', 
        autor: 'João Tembe', 
        imagem: 'images/capas/tecnologia/react.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Crie interfaces modernas.', 
        hashtags: '#React #JavaScript #Frontend #LivroZathu' 
    },

    // 10. ID: 1310
    { 
        id: 1310, 
        titulo: 'Git e GitHub', 
        disciplina: 'Tecnologia', 
        autor: 'Maria Langa', 
        imagem: 'images/capas/tecnologia/git.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Controle de versão para programadores.', 
        hashtags: '#Git #GitHub #Versão #LivroZathu' 
    },

    // 11. ID: 1311
    { 
        id: 1311, 
        titulo: 'A importância social e econômica da Criptografia', 
        disciplina: 'Segurança da Informação', 
        autor: 'Coalizão Direitos na Rede', 
        imagem: 'images/capas/tecnologia/criptografia.jpg', 
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
        imagem: 'images/capas/tecnologia/algoritmos-logica.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_ALGORITMOS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_ALGORITMOS', 
        descricao_curta: 'Fundamentos da programação e lógica computacional.', 
        hashtags: '#Algoritmos #Lógica #Programação #LivroZathu' 
    },

    // 13. ID: 1313
    { 
        id: 1313, 
        titulo: 'Algoritmos e Programação', 
        disciplina: 'Programação', 
        autor: 'Juliana Schiavetto Dauricio', 
        imagem: 'images/capas/tecnologia/algoritmos-programacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_ALGORITMOS_PROG/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_ALGORITMOS_PROG', 
        descricao_curta: 'Contextos e práticas da programação.', 
        hashtags: '#Algoritmos #Programação #Lógica #LivroZathu' 
    },

    // 14. ID: 1314
    { 
        id: 1314, 
        titulo: 'Camada de Aplicação - Redes de Computadores', 
        disciplina: 'Redes', 
        autor: 'Material Didático', 
        imagem: 'images/capas/tecnologia/camada-aplicacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_REDES_APLICACAO/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_REDES_APLICACAO', 
        descricao_curta: 'Protocolos HTTP, FTP, SMTP, DNS e arquitetura cliente-servidor.', 
        hashtags: '#Redes #HTTP #DNS #TCP #LivroZathu' 
    },

    // 15. ID: 1315
    { 
        id: 1315, 
        titulo: 'Apostila de C# e ASP.NET', 
        disciplina: 'Programação', 
        autor: 'Digi Data', 
        imagem: 'images/capas/tecnologia/csharp-aspnet.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_CSHARP_ASPNET/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_CSHARP_ASPNET', 
        descricao_curta: 'Framework .NET, Windows Forms e WebServices em C#.', 
        hashtags: '#CSharp #ASPNET #DotNet #Programação #LivroZathu' 
    },

    // 16. ID: 1316
    { 
        id: 1316, 
        titulo: 'Apostila de PHP', 
        disciplina: 'Programação Web', 
        autor: 'Bruno Rodrigues Siqueira', 
        imagem: 'images/capas/tecnologia/php.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_PHP/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_PHP', 
        descricao_curta: 'Guia completo de PHP para desenvolvimento web.', 
        hashtags: '#PHP #Web #Programação #Backend #LivroZathu' 
    },

    // 17. ID: 1317
    { 
        id: 1317, 
        titulo: 'Excel - Básico e Intermediário', 
        disciplina: 'Ferramentas', 
        autor: 'Minicurso', 
        imagem: 'images/capas/tecnologia/excel.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_EXCEL/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_EXCEL', 
        descricao_curta: 'Fórmulas, funções, tabelas dinâmicas e gráficos.', 
        hashtags: '#Excel #Planilhas #Fórmulas #Produtividade #LivroZathu' 
    },

    // 18. ID: 1318
    { 
        id: 1318, 
        titulo: 'Do Básico ao Complexo: Aprendendo Python com ChatGPT', 
        disciplina: 'Programação', 
        autor: 'Prof. Dr. Eduardo Ribeiro', 
        imagem: 'images/capas/tecnologia/python-chatgpt.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_PYTHON_CHATGPT/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_PYTHON_CHATGPT', 
        descricao_curta: 'Aprenda Python do básico ao avançado com IA.', 
        hashtags: '#Python #ChatGPT #Programação #IA #LivroZathu' 
    },

    // 19. ID: 1319
    { 
        id: 1319, 
        titulo: 'Arquitetura de Computadores', 
        disciplina: 'Hardware', 
        autor: 'Mauro Lopes Carvalho Silva', 
        imagem: 'images/capas/tecnologia/arquitetura-computadores.jpg', 
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
        imagem: 'images/capas/tecnologia/big-data.jpg', 
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
        imagem: 'images/capas/tecnologia/cpp-eficaz.jpg', 
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
        imagem: 'images/capas/tecnologia/csharp-orientacao-objetos.jpg', 
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
        imagem: 'images/capas/tecnologia/ciberseguranca.jpg', 
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
        imagem: 'images/capas/tecnologia/ciencia-dados.jpg', 
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
        imagem: 'images/capas/tecnologia/wifi6-5g.jpg', 
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
        imagem: 'images/capas/tecnologia/como-google-funciona.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_GOOGLE_FUNCIONA/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_GOOGLE_FUNCIONA', 
        descricao_curta: 'Gestão de criativos, cultura organizacional e inovação.', 
        hashtags: '#Google #Gestão #Inovação #CulturaOrganizacional #LivroZathu' 
    },

    // 27. ID: 1327
    { 
        id: 1327, 
        titulo: 'Pagerank', 
        disciplina: 'Algoritmos', 
        autor: 'Faria, Oliveira, Pinto, Szwarcfiter', 
        imagem: 'images/capas/tecnologia/pagerank.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_PAGERANK/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_PAGERANK', 
        descricao_curta: 'Algoritmo de classificação de páginas web do Google.', 
        hashtags: '#PageRank #Google #Algoritmos #Busca #SEO #LivroZathu' 
    },

    // 28. ID: 1328
    { 
        id: 1328, 
        titulo: 'Gestão de Projetos de Software', 
        disciplina: 'Gestão de Projetos', 
        autor: 'Marcio Aparecido Artero', 
        imagem: 'images/capas/tecnologia/gestao-projetos-software.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_GESTAO_PROJETOS/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_GESTAO_PROJETOS', 
        descricao_curta: 'Ciclo de vida, governança, escopo, riscos e qualidade.', 
        hashtags: '#GestãoDeProjetos #PMBOK #COBIT #ITIL #EAP #Gantt #LivroZathu' 
    },

    // 29. ID: 1329
    { 
        id: 1329, 
        titulo: 'Fundamentos de Redes de Computadores', 
        disciplina: 'Redes de Computadores', 
        autor: 'Thatiane Cristina dos Santos de Carvalho Ribeiro', 
        imagem: 'images/capas/tecnologia/fundamentos-redes.jpg', 
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
        imagem: 'images/capas/tecnologia/estruturas-dados-javascript.jpg', 
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
        imagem: 'images/capas/tecnologia/html-css-caelum.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_HTML_CSS_CAELUM/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_HTML_CSS_CAELUM', 
        descricao_curta: 'HTML5, CSS3, Flexbox, Grid e responsividade mobile-first.', 
        hashtags: '#HTML5 #CSS3 #Flexbox #Grid #Responsividade #MobileFirst #FrontEnd #LivroZathu' 
    },

    // 32. ID: 1332
    { 
        id: 1332, 
        titulo: 'Interligação de Redes / Redes IP', 
        disciplina: 'Redes de Computadores', 
        autor: 'José Ruela', 
        imagem: 'images/capas/tecnologia/interligacao-redes-ip.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_INTERLIGACAO_REDES/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_INTERLIGACAO_REDES', 
        descricao_curta: 'Protocolos IP, TCP, UDP, roteamento, ARP, ICMP e IPv6.', 
        hashtags: '#Redes #TCPIP #IPv4 #IPv6 #Roteamento #Protocolos #LivroZathu' 
    },

    // 33. ID: 1333
    { 
        id: 1333, 
        titulo: 'Introdução à Informática com LibreOffice', 
        disciplina: 'Informática Básica', 
        autor: 'Andressa Sebben, Antonio Carlos Henriques Marques (Orgs.)', 
        imagem: 'images/capas/tecnologia/introducao-informatica-libreoffice.jpg', 
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
        imagem: 'images/capas/tecnologia/servico-fotocopia.jpg', 
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
        imagem: 'images/capas/tecnologia/guia-arduino-iniciante.jpg', 
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
        imagem: 'images/capas/tecnologia/guia-500-comandos-linux.jpg', 
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
        imagem: 'images/capas/tecnologia/comunicacao-digital.jpg', 
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
        imagem: 'images/capas/tecnologia/desvendando-codeigniter4.jpg', 
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
        imagem: 'images/capas/tecnologia/engenharia-confiabilidade-google.jpg', 
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
        imagem: 'images/capas/tecnologia/elixir-zero-concorrencia.jpg', 
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
        imagem: 'images/capas/tecnologia/php-laminas.jpg', 
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
        imagem: 'images/capas/tecnologia/guia-pratico-html-css.jpg', 
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
        imagem: 'images/capas/tecnologia/ti_pequenas_empresas_para_leigos.jpg', 
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
        imagem: 'images/capas/tecnologia/software_livre_culture_hacker.jpg', 
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
        imagem: 'images/capas/tecnologia/seguranca_informacao_redes.jpg', 
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
        imagem: 'images/capas/tecnologia/cartilha_seguranca_informacao.jpg', 
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
        imagem: 'images/capas/tecnologia/robotica_processos_formativos.jpg', 
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
        imagem: 'images/capas/tecnologia/redes-sem-fio.jpg', 
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
        imagem: 'images/capas/tecnologia/redes-computadores.jpg', 
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
        imagem: 'images/capas/tecnologia/python-desenvolvedores.jpg', 
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
        imagem: 'images/capas/tecnologia/logica-java.jpg', 
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
        imagem: 'images/capas/tecnologia/engenharia-de-software-pressman.jpg', 
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
        imagem: 'images/capas/tecnologia/guia-ciberseguranca-cidades-inteligentes.jpg', 
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
        imagem: 'images/capas/tecnologia/introducao-a-linguagem-de-programacao-go.jpg', 
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
        imagem: 'images/capas/tecnologia/Informatica-basica.jpg', 
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
        imagem: 'images/capas/tecnologia/informatica_avancada.jpg', 
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
        imagem: 'images/capas/tecnologia/HTML5-e-CSS3-com-farinha-e-pimenta.jpg', 
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
        imagem: 'images/capas/tecnologia/guia-para-criar-sua-identidade-visual-e-divulgar-a-sua-marca.jpg', 
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
        imagem: 'images/capas/tecnologia/java-basico.jpg', 
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
        imagem: 'images/capas/tecnologia/java-web.jpg', 
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
        imagem: 'images/capas/tecnologia/investigacao-digital-fontes-abertas.jpg', 
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
        imagem: 'images/capas/tecnologia/introducao-programacao-cpp.jpg', 
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
        imagem: 'images/capas/tecnologia/desenvolvimento-de-games.jpg', 
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
        imagem: 'images/capas/tecnologia/mineracao-de-dados.jpg', 
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
        imagem: 'images/capas/tecnologia/javascript-guia-definitivo.jpg', 
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
        imagem: 'images/capas/tecnologia/javascript-alto-desempenho.jpg', 
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
        imagem: 'images/capas/tecnologia/oguia_do_hacke.jpg', 
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
        imagem: 'images/capas/tecnologia/nocoesdelogica.jpg', 
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
        imagem: 'images/capas/tecnologia/meuprimeiroappandroid.jpg', 
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
        imagem: 'images/capas/tecnologia/investigacaocibernetica.jpg', 
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
        imagem: 'images/capas/tecnologia/php.jpg', 
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
        imagem: 'images/capas/tecnologia/c_completo_total.jpg', 
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
        imagem: 'images/capas/tecnologia/brother_dcp8085dn.jpg', 
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
        imagem: 'images/capas/tecnologia/powershell_daniel_donda.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Cmdlets, scripts, funções, loops e gerenciamento remoto.', 
        hashtags: '#PowerShell #Windows #Scripts #Infraestrutura #DanielDonda #LivroZathu' 
    },

    // 75. ID: 1375
    { 
        id: 1375, 
        titulo: 'Plano Tecnológico da Educação - Moçambique', 
        disciplina: 'Educação', 
        autor: 'Ministério da Educação - Moçambique', 
        imagem: 'images/capas/tecnologia/plano_tecnologico_educacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estratégia para TIC no sistema de ensino moçambicano.', 
        hashtags: '#Educacao #TIC #Mocambique #PlanoTecnologico #Ensino #LivroZathu' 
    }

],

       // 🏥 Saúde (85 livros)
'saude': [

    // ===== LIVROS BASE (IDs 1401-1410) =====

    // 1. ID: 1401
    { 
        id: 1401, 
        titulo: 'O Poder do Jejum Intermitente', 
        disciplina: 'Saúde', 
        autor: 'José Carlos', 
        imagem: 'images/capas/saude/jejum.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Emagreça com saúde.', 
        hashtags: '#Jejum #Saúde #Emagrecimento #LivroZathu' 
    },

    // 2. ID: 1402
    { 
        id: 1402, 
        titulo: 'Alimentação Saudável', 
        disciplina: 'Saúde', 
        autor: 'Maria Helena', 
        imagem: 'images/capas/saude/alimentacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia completo de nutrição.', 
        hashtags: '#Nutrição #Alimentação #Saúde #LivroZathu' 
    },

    // 3. ID: 1403
    { 
        id: 1403, 
        titulo: 'Exercícios Físicos em Casa', 
        disciplina: 'Saúde', 
        autor: 'Carlos Tembe', 
        imagem: 'images/capas/saude/exercicios.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fique em forma sem sair de casa.', 
        hashtags: '#Exercícios #Fitness #Saúde #LivroZathu' 
    },

    // 4. ID: 1404
    { 
        id: 1404, 
        titulo: 'Saúde Mental', 
        disciplina: 'Saúde', 
        autor: 'Helena Cossa', 
        imagem: 'images/capas/saude/mental.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Cuide da sua mente.', 
        hashtags: '#SaúdeMental #BemEstar #LivroZathu' 
    },

    // 5. ID: 1405
    { 
        id: 1405, 
        titulo: 'Anatomia Humana', 
        disciplina: 'Saúde', 
        autor: 'Dr. Langa', 
        imagem: 'images/capas/saude/anatomia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conheça o corpo humano.', 
        hashtags: '#Anatomia #CorpoHumano #LivroZathu' 
    },

    // 6. ID: 1406
    { 
        id: 1406, 
        titulo: 'Primeiros Socorros', 
        disciplina: 'Saúde', 
        autor: 'Cruz Vermelha', 
        imagem: 'images/capas/saude/primeiros-socorros.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Saiba como agir em emergências.', 
        hashtags: '#PrimeirosSocorros #Emergência #LivroZathu' 
    },

    // 7. ID: 1407
    { 
        id: 1407, 
        titulo: 'Fitoterapia', 
        disciplina: 'Saúde', 
        autor: 'Helena Mondlane', 
        imagem: 'images/capas/saude/fitoterapia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Plantas que curam.', 
        hashtags: '#Plantas #Fitoterapia #Natural #LivroZathu' 
    },

    // 8. ID: 1408
    { 
        id: 1408, 
        titulo: 'Medicina Tradicional Moçambicana', 
        disciplina: 'Saúde', 
        autor: 'António Uamba', 
        imagem: 'images/capas/saude/medicina-tradicional.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Saberes ancestrais.', 
        hashtags: '#MedicinaTradicional #Moçambique #LivroZathu' 
    },

    // 9. ID: 1409
    { 
        id: 1409, 
        titulo: 'Yoga para Iniciantes', 
        disciplina: 'Saúde', 
        autor: 'Helena Langa', 
        imagem: 'images/capas/saude/yoga.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Equilíbrio entre corpo e mente.', 
        hashtags: '#Yoga #Meditação #Saúde #LivroZathu' 
    },

    // 10. ID: 1410
    { 
        id: 1410, 
        titulo: 'Sono Reparador', 
        disciplina: 'Saúde', 
        autor: 'Dr. Mabjaia', 
        imagem: 'images/capas/saude/sono.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Durma melhor e viva mais.', 
        hashtags: '#Sono #Descanso #Saúde #LivroZathu' 
    },

    // ===== CUIDADOS PALIATIVOS (1411-1420) =====

    // 11. ID: 1411
    { 
        id: 1411, 
        titulo: 'Cuidados Paliativos e o Ser-para-a-Morte', 
        disciplina: 'Saúde', 
        autor: 'Anna Valeska P. de Moura', 
        imagem: 'images/capas/saude/cuidados-paliativos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexões sobre atendimento psicológico.', 
        hashtags: '#CuidadosPaliativos #Tanatologia #Heidegger #LivroZathu' 
    },

    // 12. ID: 1412
    { 
        id: 1412, 
        titulo: 'A Morte ao Longo da História', 
        disciplina: 'Saúde', 
        autor: 'Philippe Ariès', 
        imagem: 'images/capas/saude/morte-historia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'História da morte no Ocidente.', 
        hashtags: '#História #Morte #Cultura #LivroZathu' 
    },

    // 13. ID: 1413
    { 
        id: 1413, 
        titulo: 'Tanatologia: Estudo da Morte', 
        disciplina: 'Saúde', 
        autor: 'Elisabeth Kübler-Ross', 
        imagem: 'images/capas/saude/tanatologia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ciência da vida e da morte.', 
        hashtags: '#Tanatologia #Morte #Psicologia #LivroZathu' 
    },

    // 14. ID: 1414
    { 
        id: 1414, 
        titulo: 'Atitudes Diante da Morte na Cultura Ocidental', 
        disciplina: 'Saúde', 
        autor: 'Kübler-Ross & Kovács', 
        imagem: 'images/capas/saude/atitudes-morte.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fases do processo de morrer.', 
        hashtags: '#Morte #Fases #KüblerRoss #LivroZathu' 
    },

    // 15. ID: 1415
    { 
        id: 1415, 
        titulo: 'Cuidados e Demência na Terceira Idade', 
        disciplina: 'Saúde', 
        autor: 'António M. Fonseca', 
        imagem: 'images/capas/saude/demencia-idosos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual prático para cuidadores.', 
        hashtags: '#Demência #Idosos #Cuidados #LivroZathu' 
    },

    // 16. ID: 1416
    { 
        id: 1416, 
        titulo: 'Envelhecimento e Doença', 
        disciplina: 'Saúde', 
        autor: 'António M. Fonseca', 
        imagem: 'images/capas/saude/envelhecimento-doenca.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Relação entre idade e saúde.', 
        hashtags: '#Envelhecimento #Saúde #Doenças #LivroZathu' 
    },

    // 17. ID: 1417
    { 
        id: 1417, 
        titulo: 'Depressão em Idosos', 
        disciplina: 'Saúde', 
        autor: 'Daniela Gonçalves', 
        imagem: 'images/capas/saude/depressao-idosos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Compreender e tratar a depressão.', 
        hashtags: '#Depressão #Idosos #SaúdeMental #LivroZathu' 
    },

    // 18. ID: 1418
    { 
        id: 1418, 
        titulo: 'Cognição e Atividade na Terceira Idade', 
        disciplina: 'Saúde', 
        autor: 'António M. Fonseca', 
        imagem: 'images/capas/saude/cognicao-idosos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estimulação mental e física.', 
        hashtags: '#Cognição #Memória #AtividadeFísica #LivroZathu' 
    },

    // 19. ID: 1419
    { 
        id: 1419, 
        titulo: 'Solidão e Relações Sociais na Velhice', 
        disciplina: 'Saúde', 
        autor: 'Constança Paúl', 
        imagem: 'images/capas/saude/solidão-idosos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Importância das redes sociais.', 
        hashtags: '#Solidão #RelaçõesSociais #Idosos #LivroZathu' 
    },

    // 20. ID: 1420
    { 
        id: 1420, 
        titulo: 'Saúde e Humor: Crônicas do Cotidiano', 
        disciplina: 'Saúde', 
        autor: 'Auridan Dantas & Alice Dumaresq', 
        imagem: 'images/capas/saude/cronicas-saude.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Histórias bem-humoradas da saúde.', 
        hashtags: '#Humor #Saúde #Crônicas #LivroZathu' 
    },

    // ===== ENFERMAGEM E PROCEDIMENTOS (1421-1435) =====

    // 21. ID: 1421
    { 
        id: 1421, 
        titulo: 'Guia Completo de Procedimentos de Enfermagem', 
        disciplina: 'Saúde', 
        autor: 'Anne Griffin Perry & Patricia A. Potter', 
        imagem: 'images/capas/saude/enfermagem-procedimentos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual prático para enfermagem.', 
        hashtags: '#Enfermagem #Procedimentos #Saúde #LivroZathu' 
    },

    // 22. ID: 1422
    { 
        id: 1422, 
        titulo: 'Verificação de Sinais Vitais', 
        disciplina: 'Saúde', 
        autor: 'Perry & Potter', 
        imagem: 'images/capas/saude/sinais-vitais.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Técnicas para avaliar pulso, respiração e pressão.', 
        hashtags: '#SinaisVitais #Enfermagem #Avaliação #LivroZathu' 
    },

    // 23. ID: 1423
    { 
        id: 1423, 
        titulo: 'Oxigenoterapia e Manutenção da Oxigenação', 
        disciplina: 'Saúde', 
        autor: 'Perry & Potter', 
        imagem: 'images/capas/saude/oxigenoterapia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Cuidados respiratórios e oxigenação.', 
        hashtags: '#Oxigenoterapia #Respiração #Enfermagem #LivroZathu' 
    },

    // 24. ID: 1424
    { 
        id: 1424, 
        titulo: 'Administração de Medicamentos em Enfermagem', 
        disciplina: 'Saúde', 
        autor: 'Perry & Potter', 
        imagem: 'images/capas/saude/administracao-medicamentos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guias para administração segura de medicamentos.', 
        hashtags: '#Medicamentos #Enfermagem #Segurança #LivroZathu' 
    },

    // 25. ID: 1425
    { 
        id: 1425, 
        titulo: 'Cuidados com Feridas e Curativos', 
        disciplina: 'Saúde', 
        autor: 'Perry & Potter', 
        imagem: 'images/capas/saude/curativos-feridas.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Técnicas para tratamento de feridas.', 
        hashtags: '#Feridas #Curativos #Enfermagem #LivroZathu' 
    },

    // 26. ID: 1426
    { 
        id: 1426, 
        titulo: 'Farmacologia Integrada: Pesquisas Emergentes', 
        disciplina: 'Saúde', 
        autor: 'Jeferson Falcão do Amaral et al.', 
        imagem: 'images/capas/saude/farmacologia-integrada.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pesquisas em casos e usos clínicos.', 
        hashtags: '#Farmacologia #Medicamentos #Saúde #LivroZathu' 
    },

    // 27. ID: 1427
    { 
        id: 1427, 
        titulo: 'Adsorção de Fármacos em Solução Aquosa', 
        disciplina: 'Saúde', 
        autor: 'Hellen Cristina Flor Lima-Schillo et al.', 
        imagem: 'images/capas/saude/adsorcao-farmacos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Remoção de fármacos por biocarvão.', 
        hashtags: '#Farmacologia #Biocarvão #Adsorção #LivroZathu' 
    },

    // 28. ID: 1428
    { 
        id: 1428, 
        titulo: 'Análise Comportamental em Ratos Tratados com Nicotina', 
        disciplina: 'Saúde', 
        autor: 'Carlos Alberto da Silva et al.', 
        imagem: 'images/capas/saude/nicotina-comportamento.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Efeitos da nicotina no comportamento.', 
        hashtags: '#Nicotina #Comportamento #Neurociência #LivroZathu' 
    },

    // 29. ID: 1429
    { 
        id: 1429, 
        titulo: 'Atenção Farmacêutica no Diabetes Tipo 2', 
        disciplina: 'Saúde', 
        autor: 'Hugo Antonio Queiroz Ramos et al.', 
        imagem: 'images/capas/saude/atencao-farmaceutica-diabetes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Diminuição de PRMs na farmacoterapia.', 
        hashtags: '#AtençãoFarmacêutica #Diabetes #PRMs #LivroZathu' 
    },

    // 30. ID: 1430
    { 
        id: 1430, 
        titulo: 'Uso Racional de Antibióticos e Resistência Bacteriana', 
        disciplina: 'Saúde', 
        autor: 'Cláudia Janaina Torres Müller et al.', 
        imagem: 'images/capas/saude/antibioticos-resistencia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conhecimento sobre uso irracional de antibióticos.', 
        hashtags: '#Antibióticos #ResistênciaBacteriana #Saúde #LivroZathu' 
    },

    // 31. ID: 1431
    { 
        id: 1431, 
        titulo: 'Estudo In Silico de Dysphania ambrosioides', 
        disciplina: 'Saúde', 
        autor: 'Danielly Larissa de Moraes Lima Silva et al.', 
        imagem: 'images/capas/saude/dysphania-ambrosioides.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Predição de atividade de flavonoides.', 
        hashtags: '#PlantasMedicinais #Flavonoides #InSilico #LivroZathu' 
    },

    // 32. ID: 1432
    { 
        id: 1432, 
        titulo: 'Ensino de Farmacologia no Contexto Remoto', 
        disciplina: 'Saúde', 
        autor: 'Taiane Rodrigues da Costa et al.', 
        imagem: 'images/capas/saude/ensino-farmacologia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Experiência de monitoria na pandemia.', 
        hashtags: '#Ensino #Farmacologia #COVID19 #LivroZathu' 
    },

    // 33. ID: 1433
    { 
        id: 1433, 
        titulo: 'Síntese do Fármaco Pioglitazona', 
        disciplina: 'Saúde', 
        autor: 'Paula Almeida Meira et al.', 
        imagem: 'images/capas/saude/pioglitazona.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Síntese em batelada e fluxo contínuo.', 
        hashtags: '#Pioglitazona #Síntese #Microrreatores #LivroZathu' 
    },

    // 34. ID: 1434
    { 
        id: 1434, 
        titulo: 'Farmácia Hospitalar: Abordagem Completa', 
        disciplina: 'Saúde', 
        autor: 'Ediran Erícles Pontes dos Anjos et al.', 
        imagem: 'images/capas/saude/farmacia-hospitalar.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Assistência farmacêutica hospitalar.', 
        hashtags: '#FarmáciaHospitalar #AssistênciaFarmacêutica #Saúde #LivroZathu' 
    },

    // 35. ID: 1435
    { 
        id: 1435, 
        titulo: 'Embriologia: Texto, Atlas e Roteiro de Aulas Práticas', 
        disciplina: 'Saúde', 
        autor: 'Tatiana Montanari', 
        imagem: 'images/capas/saude/embriologia.jpg', 
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
        imagem: 'images/capas/saude/gestacao-alto-risco.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manual para assistência à gestante de risco.', 
        hashtags: '#Gestação #AltoRisco #Obstetrícia #LivroZathu' 
    },

    // 37. ID: 1437
    { 
        id: 1437, 
        titulo: 'Síndromes Hipertensivas na Gravidez', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/capas/saude/hipertensao-gravidez.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pré-eclâmpsia, eclâmpsia e hipertensão crônica.', 
        hashtags: '#PréEclâmpsia #Hipertensão #Gestação #LivroZathu' 
    },

    // 38. ID: 1438
    { 
        id: 1438, 
        titulo: 'Síndromes Hemorrágicas na Gestação', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/capas/saude/hemorragias-gestacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Abortamento, placenta prévia e descolamento.', 
        hashtags: '#Hemorragia #PlacentaPrévia #Obstetrícia #LivroZathu' 
    },

    // 39. ID: 1439
    { 
        id: 1439, 
        titulo: 'Diabetes e Tireoidopatias na Gestação', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/capas/saude/diabetes-tireoide-gestacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Manejo do diabetes gestacional e tireoidopatias.', 
        hashtags: '#DiabetesGestacional #Tireoide #Gestação #LivroZathu' 
    },

    // 40. ID: 1440
    { 
        id: 1440, 
        titulo: 'Infecções e Doenças Infecciosas na Gestação', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/capas/saude/infeccoes-gestacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Toxoplasmose, HIV, sífilis, malária e outras.', 
        hashtags: '#Infecções #HIV #Sífilis #Toxoplasmose #LivroZathu' 
    },

    // 41. ID: 1441
    { 
        id: 1441, 
        titulo: 'Vasos Sanguíneos', 
        disciplina: 'Saúde', 
        autor: 'Desconhecido', 
        imagem: 'images/capas/saude/vasos-sanguineos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Anatomia e histologia do sistema cardiovascular.', 
        hashtags: '#Anatomia #Histologia #SistemaCardiovascular #LivroZathu' 
    },

    // 42. ID: 1442
    { 
        id: 1442, 
        titulo: 'Microbiologia e Farmacologia Simplificada', 
        disciplina: 'Saúde', 
        autor: 'Dr. José Caetano Tavares', 
        imagem: 'images/capas/saude/microbiologia-farmacologia-simplificada.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Bacteriologia, virologia, micologia e farmacologia.', 
        hashtags: '#Microbiologia #Farmacologia #Bacteriologia #LivroZathu' 
    },

    // 43. ID: 1443
    { 
        id: 1443, 
        titulo: 'Medicina: Uma História', 
        disciplina: 'Saúde', 
        autor: 'Marcos Rogério de Castro Frank e Claudete Rempel', 
        imagem: 'images/capas/saude/medicina-uma-historia.jpg', 
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
        imagem: 'images/capas/saude/medicamentos-caes-gatos.jpg', 
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
        imagem: 'images/capas/saude/laringe.jpg', 
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
        imagem: 'images/capas/saude/hemocomponentes.jpg', 
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
        imagem: 'images/capas/saude/manual-cirurgia-experimental.jpg', 
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
        imagem: 'images/capas/saude/manual-sst-gdf.jpg', 
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
        imagem: 'images/capas/saude/quando-a-depressao-ataca.jpg', 
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
        imagem: 'images/capas/saude/prevencao-suicidio-internet.jpg', 
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
        imagem: 'images/capas/saude/politica-saude-mulher.jpg', 
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
        imagem: 'images/capas/saude/suicidio-desafios-psicologia.jpg', 
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
        imagem: 'images/capas/saude/processo-de-luto-pandemia.jpg', 
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
        imagem: 'images/capas/saude/histologia-sistema-cardiovascular.jpg', 
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
        imagem: 'images/capas/saude/aterosclerose-aneurismas.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Formação de placas de ateroma, trombose e aneurismas.', 
        hashtags: '#Aterosclerose #Aneurisma #Cardiologia #LivroZathu' 
    },

    // 56. ID: 1456
    { 
        id: 1456, 
        titulo: 'Hemorroidas: Da Fisiopatologia ao Tratamento', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/hemorroidas-tratamento.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Formação de hemorroidas, fatores de risco e tratamento.', 
        hashtags: '#Hemorroidas #Proctologia #Cirurgia #LivroZathu' 
    },

    // 57. ID: 1457
    { 
        id: 1457, 
        titulo: 'Classificação dos Vasos Sanguíneos', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/classificacao-vasos-sanguineos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Artérias, arteríolas, capilares, vênulas e veias.', 
        hashtags: '#Anatomia #VasosSanguíneos #SistemaCirculatório #LivroZathu' 
    },

    // 58. ID: 1458
    { 
        id: 1458, 
        titulo: 'Estrutura da Parede dos Vasos Sanguíneos', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/estrutura-parede-vasos.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Túnica íntima, média e adventícia.', 
        hashtags: '#Histologia #TúnicaÍntima #TúnicaMédia #TúnicaAdventícia #LivroZathu' 
    },

    // 59. ID: 1459
    { 
        id: 1459, 
        titulo: 'História e Evolução da Videocirurgia', 
        disciplina: 'Saúde', 
        autor: 'Albino A. Sorbello', 
        imagem: 'images/capas/saude/historia-videocirurgia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Endoscopia e videolaparoscopia do século XIX ao robô Da Vinci.', 
        hashtags: '#Videocirurgia #Laparoscopia #CirurgiaMinimamenteInvasiva #LivroZathu' 
    },

    // 60. ID: 1460
    { 
        id: 1460, 
        titulo: 'Princípios Técnicos da Videolaparoscopia', 
        disciplina: 'Saúde', 
        autor: 'Albino A. Sorbello', 
        imagem: 'images/capas/saude/principios-videolaparoscopia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pneumoperitônio, trocartes e ato operatório.', 
        hashtags: '#Laparoscopia #Cirurgia #TécnicaCirúrgica #LivroZathu' 
    },

    // 61. ID: 1461
    { 
        id: 1461, 
        titulo: 'Esterilização e Manuseio em Videocirurgia', 
        disciplina: 'Saúde', 
        autor: 'Jeane A.G. Bronzatti', 
        imagem: 'images/capas/saude/esterilizacao-videocirurgia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Limpeza e esterilização de materiais videocirúrgicos.', 
        hashtags: '#Esterilização #CME #Enfermagem #Videocirurgia #LivroZathu' 
    },

    // 62. ID: 1462
    { 
        id: 1462, 
        titulo: 'Cirurgia Robótica com o Sistema Da Vinci', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/cirurgia-robotica-da-vinci.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sistema robótico Da Vinci: visão 3D e precisão.', 
        hashtags: '#CirurgiaRobótica #DaVinci #TecnologiaMédica #LivroZathu' 
    },

    // 63. ID: 1463
    { 
        id: 1463, 
        titulo: 'Complicações em Videolaparoscopia', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/complicacoes-videolaparoscopia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Enfisema subcutâneo, danos vasculares e gastrointestinais.', 
        hashtags: '#Laparoscopia #ComplicaçõesCirúrgicas #Segurança #LivroZathu' 
    },

    // 64. ID: 1464
    { 
        id: 1464, 
        titulo: 'Falar é a Melhor Solução: Prevenção ao Suicídio', 
        disciplina: 'Saúde', 
        autor: 'Anelys Feitoza Siqueira et al.', 
        imagem: 'images/capas/saude/falar-melhor-solucao-suicidio.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Mitos e verdades, sinais de risco e onde buscar ajuda.', 
        hashtags: '#PrevençãoAoSuicídio #SaúdeMental #SetembroAmarelo #LivroZathu' 
    },

    // 65. ID: 1465
    { 
        id: 1465, 
        titulo: 'Fatores de Risco e Proteção para o Suicídio', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/fatores-risco-suicidio.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Transtornos mentais, isolamento e estratégias de prevenção.', 
        hashtags: '#Suicídio #FatoresDeRisco #Prevenção #Psiquiatria #LivroZathu' 
    },

    // 66. ID: 1466
    { 
        id: 1466, 
        titulo: 'Como Abordar e Acolher em Situações de Crise', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/abordagem-acolhimento-crise.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ouça com acolhimento e encaminhe para ajuda profissional.', 
        hashtags: '#Acolhimento #EscutaAtiva #Psicologia #EmergênciaPsicológica #LivroZathu' 
    },

    // 67. ID: 1467
    { 
        id: 1467, 
        titulo: 'O Suicídio entre Universitários', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/suicidio-universitario.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pressão, ansiedade e prevenção no ambiente universitário.', 
        hashtags: '#Universitários #SaúdeMental #Suicídio #Prevenção #LivroZathu' 
    },

    // 68. ID: 1468
    { 
        id: 1468, 
        titulo: 'Luto e Suicídio: O Sofrimento dos Sobreviventes', 
        disciplina: 'Saúde', 
        autor: 'Vários Autores', 
        imagem: 'images/capas/saude/luto-suicidio-sobreviventes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Impacto do suicídio em familiares e amigos.', 
        hashtags: '#Luto #Suicídio #Sobreviventes #Psicologia #LivroZathu' 
    },

    // 69. ID: 1469
    { 
        id: 1469, 
        titulo: 'Cultivo de Solanáceas: Tomate e Pimentão', 
        disciplina: 'Saúde', 
        autor: 'José Usan Torres Brandão Filho et al.', 
        imagem: 'images/capas/saude/cultivo-solanaceas-tomate-pimentao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Botânica e fisiologia do tomate e pimentão.', 
        hashtags: '#Tomate #Pimentão #Olericultura #Agronomia #LivroZathu' 
    },

    // 70. ID: 1470
    { 
        id: 1470, 
        titulo: 'Cucurbitáceas e Fabáceas: Cultivo e Manejo', 
        disciplina: 'Saúde', 
        autor: 'Rerison Catarino da Hora et al.', 
        imagem: 'images/capas/saude/cucurbitaceas-fabaceas-cultivo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Abóbora, melancia, melão, pepino e feijão-vagem.', 
        hashtags: '#Abóbora #Melancia #Melão #Pepino #Agronomia #LivroZathu' 
    },

    // ===== SAÚDE MENTAL E BEM-ESTAR (1471-1485) =====

    // 71. ID: 1471
    { 
        id: 1471, 
        titulo: 'Princípios de Fertilidade do Solo e Adubação', 
        disciplina: 'Saúde', 
        autor: 'Marcelo Augusto Batista et al.', 
        imagem: 'images/capas/saude/fertilidade-solo-adubacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Macro e micronutrientes e estratégias de adubação.', 
        hashtags: '#FertilidadedoSolo #NutriçãoMineral #Adubação #Agronomia #LivroZathu' 
    },

    // 72. ID: 1472
    { 
        id: 1472, 
        titulo: 'Manejo de Água em Hortaliças-fruto', 
        disciplina: 'Saúde', 
        autor: 'Paulo Sérgio Lourenço de Freitas et al.', 
        imagem: 'images/capas/saude/manejo-agua-hortalicas.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Necessidade hídrica e sistemas de irrigação.', 
        hashtags: '#Irrigação #ManejoDeÁgua #Hortaliças #Agronomia #LivroZathu' 
    },

    // 73. ID: 1473
    { 
        id: 1473, 
        titulo: 'Doenças em Hortaliças: Bacterianas e Fúngicas', 
        disciplina: 'Saúde', 
        autor: 'Luís Otávio Saggion Beriam et al.', 
        imagem: 'images/capas/saude/doencas-bacterianas-fungicas.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Identificação e controle de doenças em hortaliças.', 
        hashtags: '#Fitopatologia #DoençasDePlantas #Hortaliças #LivroZathu' 
    },

    // 74. ID: 1474
    { 
        id: 1474, 
        titulo: 'Saúde Mental de Adolescentes e Jovens', 
        disciplina: 'Saúde', 
        autor: 'Karen Scavacini et al.', 
        imagem: 'images/capas/saude/saude-mental-adolescentes-jovens.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Primeiros socorros emocionais e comunicação não violenta.', 
        hashtags: '#SaúdeMental #Adolescentes #Jovens #PrimeirosSocorrosEmocionais #LivroZathu' 
    },

    // 75. ID: 1475
    { 
        id: 1475, 
        titulo: 'Cadernos HumanizaSUS: Saúde Mental', 
        disciplina: 'Saúde', 
        autor: 'Ministério da Saúde', 
        imagem: 'images/capas/saude/humanizasus-saude-mental.jpg', 
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
        imagem: 'images/capas/saude/quando-depressao-ataca.jpg', 
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
        imagem: 'images/capas/saude/relacionamento-comunicacao-enfermagem.jpg', 
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
        imagem: 'images/capas/saude/saude-bucal-asb.jpg', 
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
        imagem: 'images/capas/saude/tanatologia-medicina.jpg', 
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
        imagem: 'images/capas/saude/suicidio-informando-prevenir.jpg', 
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
        imagem: 'images/capas/saude/sindrome-do-panico.jpg', 
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
        imagem: 'images/capas/saude/psicofarmacos-guia-visual.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Antidepressivos, ansiolíticos e estabilizadores de humor.', 
        hashtags: '#Psicofármacos #Farmacologia #Antidepressivos #Ansiolíticos #LivroZathu' 
    },

    // 83. ID: 1483
    { 
        id: 1483, 
        titulo: 'Ansiedade e Depressão: Neurotransmissores e Tratamento', 
        disciplina: 'Saúde', 
        autor: 'Wellina (A FarmáFacilita)', 
        imagem: 'images/capas/saude/ansiedade-depressao-neurotransmissores.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'ISRS, IRSN, benzodiazepínicos e antidepressivos atípicos.', 
        hashtags: '#Ansiedade #Depressão #Neurotransmissores #ISRS #Benzodiazepínicos #LivroZathu' 
    },

    // 84. ID: 1484
    { 
        id: 1484, 
        titulo: 'Esquizofrenias: Protocolo Clínico RAPS', 
        disciplina: 'Saúde', 
        autor: 'Governo de Santa Catarina', 
        imagem: 'images/capas/saude/esquizofrenia-protocolo.jpg', 
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
        imagem: 'images/capas/saude/terapias-alternativas-qualidade-vida.jpg', 
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
        imagem: 'images/capas/literatura/wolf_hall.jpg', 
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
        imagem: 'images/capas/literatura/voluntario.jpg', 
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
        imagem: 'images/capas/literatura/vinte_e_zinco.jpg', 
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
        imagem: 'images/capas/literatura/um_pouco_de_nos.jpg', 
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
        imagem: 'images/capas/literatura/um_pequeno_milagre.jpg', 
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
        imagem: 'images/capas/literatura/um_lugar_bem_longe_daqui.jpg', 
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
        imagem: 'images/capas/literatura/niketche.jpg', 
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
        imagem: 'images/capas/literatura/tristao-e-isolda.jpg', 
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
        imagem: 'images/capas/literatura/sonho-de-verao.jpg', 
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
        imagem: 'images/capas/literatura/serei-sempre-o-teu-abrigo.jpg', 
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
        imagem: 'images/capas/literatura/o_vampiro_de_curitiba.jpg', 
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
        imagem: 'images/capas/literatura/o_ultimo_segredo.jpg', 
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
        imagem: 'images/capas/literatura/o_tempo_clarice_lispector.jpg', 
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
        imagem: 'images/capas/literatura/sentimental.jpg', 
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
        imagem: 'images/capas/literatura/reflexoes-sensacoes-evidencias.jpg', 
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
        imagem: 'images/capas/literatura/sagarana.jpg', 
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
        imagem: 'images/capas/literatura/otelo.jpg', 
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
        imagem: 'images/capas/literatura/o-silencio-de-gwangju.jpg', 
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
        imagem: 'images/capas/literatura/o-rei-creso.jpg', 
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
        imagem: 'images/capas/literatura/o-ultimo-voo-do-flamingo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Pós-guerra em Moçambique com realismo mágico.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #Ficcao #RealismoMagico #Africa #LivroZathu' 
    },

    // 21. ID: 1921
    { 
        id: 1921, 
        titulo: 'Os Segredos da Confiança Inabalável', 
        disciplina: 'Desenvolvimento Pessoal / Sedução', 
        autor: 'Não identificado', 
        imagem: 'images/capas/literatura/os-segredos-da-confianca-inabalavel.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para desenvolver confiança inabalável.', 
        hashtags: '#Confianca #LinguagemCorporal #DesenvolvimentoPessoal #Sedução #LivroZathu' 
    },

    // ===== SEGUNDO LOTE (IDs 1922-1941) =====

    // 22. ID: 1922
    { 
        id: 1922, 
        titulo: 'O Retorno', 
        disciplina: 'Literatura Russa', 
        autor: 'Andrei Platonov', 
        imagem: 'images/capas/literatura/o-retorno.jpg', 
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
        imagem: 'images/capas/literatura/o-jovem-torless.jpg', 
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
        imagem: 'images/capas/literatura/homem-que-lia-pensamentos.jpg', 
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
        imagem: 'images/capas/literatura/o-fio-das-missangas.jpg', 
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
        imagem: 'images/capas/literatura/o-filosofo-ignorante.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Voltaire questiona a metafísica e defende a justiça.', 
        hashtags: '#Voltaire #Filosofia #Iluminismo #Razao #Ceticismo #LivroZathu' 
    },

    // 27. ID: 1927
    { 
        id: 1927, 
        titulo: 'A Teoria da Novela: Conceito, Estrutura e Crítica', 
        disciplina: 'Teoria Literária', 
        autor: 'Não Especificado', 
        imagem: 'images/capas/literatura/teoria-da-novela.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Estudo sobre definições e características do gênero novela.', 
        hashtags: '#TeoriaLiteraria #GenerosLiterarios #Novela #CriticaLiteraria #LivroZathu' 
    },

    // 28. ID: 1928
    { 
        id: 1928, 
        titulo: 'A República', 
        disciplina: 'Filosofia', 
        autor: 'Platão', 
        imagem: 'images/capas/literatura/a_republica.jpg', 
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
        imagem: 'images/capas/literatura/os_70_anos_da_otan.jpg', 
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
        imagem: 'images/capas/literatura/a_origem_de_deus.jpg', 
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
        imagem: 'images/capas/literatura/orgia_dos_loucos.jpg', 
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
        imagem: 'images/capas/literatura/sangue-negro.jpg', 
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
        imagem: 'images/capas/literatura/porco-e-porco.jpg', 
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
        imagem: 'images/capas/literatura/poesias-pesadas.jpg', 
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
        imagem: 'images/capas/literatura/poesia-reunida.jpg', 
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
        imagem: 'images/capas/literatura/ualalapi.jpg', 
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
        imagem: 'images/capas/literatura/sobre-a-alma.jpg', 
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
        imagem: 'images/capas/literatura/sobre-feminismos.jpg', 
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
        imagem: 'images/capas/literatura/seus-trinta-melhores-contos.jpg', 
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
        imagem: 'images/capas/literatura/zadig_ou_o_destino.jpg', 
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
        imagem: 'images/capas/literatura/o_unico_deus_verdadeiro.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia de estudo sobre os atributos de Deus nas Escrituras.', 
        hashtags: '#Teologia #EstudoBíblico #AtributosDeDeus #PaulWasher #LivroZathu' 
    },

    // 42. ID: 1942
    { 
        id: 1942, 
        titulo: 'O Rio e a Casa: Imagens do Tempo na Ficção de Mia Couto', 
        disciplina: 'Literatura / Crítica Literária', 
        autor: 'Ana Cláudia da Silva', 
        imagem: 'images/capas/literatura/um_rio_chamado_tempo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise sobre a presença do tempo na obra de Mia Couto.', 
        hashtags: '#Literatura #CríticaLiterária #MiaCouto #África #Moçambique #LivroZathu' 
    },

    // 43. ID: 1943
    { 
        id: 1943, 
        titulo: 'Um Conto de Natal', 
        disciplina: 'Literatura / Ficção Clássica', 
        autor: 'Charles Dickens', 
        imagem: 'images/capas/literatura/um_conto_de_natal.jpg', 
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
        imagem: 'images/capas/literatura/uma_breve_historia_do_mundo.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Narrativa concisa da história da humanidade.', 
        hashtags: '#História #HistóriaMundial #GeoffreyBlainey #Civilização #LivroZathu' 
    },

    // 45. ID: 1945
    { 
        id: 1945, 
        titulo: 'O Jardim Secreto', 
        disciplina: 'Literatura Infantojuvenil', 
        autor: 'Frances Hodgson Burnett', 
        imagem: 'images/capas/literatura/o_jardim_secreto.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Clássico sobre Mary Lennox e o jardim secreto.', 
        hashtags: '#LiteraturaInfantil #Clássico #JardimSecreto #FrancesHodgsonBurnett #LivroZathu' 
    },

    // 46. ID: 1946
    { 
        id: 1946, 
        titulo: 'O Chefe e a Estagiária', 
        disciplina: 'Romance', 
        autor: 'Bruna Maia', 
        imagem: 'images/capas/literatura/o_chefe_e_a_estagiaria.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance sobre estagiária que derruba café no terno do CEO.', 
        hashtags: '#Romance #FicçãoContemporânea #ChefeEEstagiária #BrunaMaia #LivroZathu' 
    },

    // 47. ID: 1947
    { 
        id: 1947, 
        titulo: 'Obra Completa - Murilo Rubião', 
        disciplina: 'Literatura Brasileira', 
        autor: 'Murilo Rubião', 
        imagem: 'images/capas/literatura/obra_completa_murilo_rubiao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Coletânea completa dos contos de Murilo Rubião.', 
        hashtags: '#MuriloRubião #Contos #LiteraturaBrasileira #RealismoFantástico #LivroZathu' 
    },

    // 48. ID: 1948
    { 
        id: 1948, 
        titulo: 'O Amor Nunca Morre', 
        disciplina: 'Espiritualidade', 
        autor: 'Camila Sampaio (pelo espírito Ronaldo)', 
        imagem: 'images/capas/literatura/o_amor_nunca_morre.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Romance espiritual sobre depressão e superação.', 
        hashtags: '#Espiritualidade #Apometria #Superação #Depressão #Amor #LivroZathu' 
    },

    // 49. ID: 1949
    { 
        id: 1949, 
        titulo: 'Política', 
        disciplina: 'Filosofia Política', 
        autor: 'Aristóteles', 
        imagem: 'images/capas/literatura/politica_aristoteles.jpg', 
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
        imagem: 'images/capas/literatura/a_revolta_de_atlas.jpg', 
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
        imagem: 'images/capas/literatura/a_letra_escarlate.jpg', 
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
        imagem: 'images/capas/literatura/historia_humanidade_50_eventos.jpg', 
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
        imagem: 'images/capas/literatura/a-ideia-de-africa.jpg', 
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
        imagem: 'images/capas/literatura/como-fazer-um-jornal-escolar.jpg', 
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
        imagem: 'images/capas/literatura/cada-homem-e-uma-raca.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Contos que exploram identidade e memória em Moçambique.', 
        hashtags: '#MiaCouto #LiteraturaMoçambicana #Contos #Ficcao #LivroZathu' 
    },

    // 56. ID: 1956
    { 
        id: 1956, 
        titulo: 'A Importância do Seguro para a Sociedade', 
        disciplina: 'Economia / Finanças', 
        autor: 'Kathrin Hoppe', 
        imagem: 'images/capas/literatura/a-importancia-do-seguro-para-a-sociedade.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Análise sobre o papel social e econômico do seguro.', 
        hashtags: '#Seguro #Economia #Financas #GestaoDeRiscos #Previdencia #LivroZathu' 
    },

    // 57. ID: 1957
    { 
        id: 1957, 
        titulo: 'Contos da Selva', 
        disciplina: 'Literatura Infantojuvenil', 
        autor: 'Horácio Quiroga', 
        imagem: 'images/capas/literatura/contos-da-selva.jpg', 
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
        imagem: 'images/capas/literatura/os-canibais-estao-na-sala-de-jantar.jpg', 
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
        imagem: 'images/capas/literatura/o-que-e-educacao.jpg', 
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
        imagem: 'images/capas/literatura/o-ponto-da-virada.jpg', 
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
        imagem: 'images/capas/literatura/o-mundo-insone.jpg', 
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
        imagem: 'images/capas/literatura/o-bibliotecario-do-imperador.jpg', 
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
        imagem: 'images/capas/literatura/o-assassinato-de-margaret-thatcher.jpg', 
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
        imagem: 'images/capas/literatura/o-alimento-dos-deuses.jpg', 
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
        imagem: 'images/capas/literatura/o-agente-secreto.jpg', 
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
        imagem: 'images/capas/literatura/navio-negreiro.jpg', 
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
        imagem: 'images/capas/literatura/na-berma-de-nenhuma-estrada.jpg', 
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
        imagem: 'images/capas/literatura/o-livro-da-redacao-coringa.jpg', 
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
        imagem: 'images/capas/literatura/humilhados_e_ofendidos.jpg', 
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
        imagem: 'images/capas/literatura/o-dia-em-que-o-mundo-parou.jpg', 
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
        imagem: 'images/capas/literatura/o-leao-e-o-rato.jpg', 
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
        imagem: 'images/capas/literatura/das-independencias-as-liberdades.jpg', 
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
        imagem: 'images/capas/literatura/hamlet.jpg', 
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
        imagem: 'images/capas/literatura/liberdade-e-a-lei.jpg', 
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
        imagem: 'images/capas/literatura/a_varanda_do_frangipani.jpg', 
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
        imagem: 'images/capas/literatura/confissoes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Autobiografia espiritual de Santo Agostinho.', 
        hashtags: '#Filosofia #Teologia #SantoAgostinho #Confissões #Autobiografia #LivroZathu' 
    },

    // 77. ID: 1977
    { 
        id: 1977, 
        titulo: 'Escritos sobre Escravidão', 
        disciplina: 'História / Literatura', 
        autor: 'Monteiro Lobato', 
        imagem: 'images/capas/literatura/escritos_sobre_escravidao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Textos e reflexões sobre a temática da escravidão.', 
        hashtags: '#Escravidao #Historia #ProjetoLivroLivre #MonteiroLobato #LivroZathu' 
    },

    // 78. ID: 1978
    { 
        id: 1978, 
        titulo: 'Um Rio Chamado Tempo, Uma Casa Chamada Terra', 
        disciplina: 'Literatura', 
        autor: 'Mia Couto', 
        imagem: 'images/capas/literatura/um_rio_chamado_tempo.jpg', 
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
        imagem: 'images/capas/literatura/emilia_no_pais_da_gramatica.jpg', 
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
        imagem: 'images/capas/literatura/historia_de_mocambique_vol3.jpg', 
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
        imagem: 'images/capas/literatura/historia_do_mundo.jpg', 
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
        imagem: 'images/capas/literatura/contos_do_nascer_da_terra.jpg', 
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
        imagem: 'images/capas/culinaria/mocambicana.jpg', 
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
        imagem: 'images/capas/culinaria/matapa.jpg', 
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
        imagem: 'images/capas/culinaria/pao.jpg', 
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
        imagem: 'images/capas/culinaria/doces.jpg', 
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
        imagem: 'images/capas/culinaria/frutos-mar.jpg', 
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
        imagem: 'images/capas/culinaria/vegetariana.jpg', 
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
        imagem: 'images/capas/culinaria/bolos.jpg', 
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
        imagem: 'images/capas/culinaria/comida-rua.jpg', 
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
        imagem: 'images/capas/culinaria/bebidas.jpg', 
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
        imagem: 'images/capas/culinaria/internacional.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Sabores do mundo.', 
        hashtags: '#CozinhaInternacional #Culinária #LivroZathu' 
    },

    // 11. ID: 1811
    { 
        id: 1811, 
        titulo: 'Pescado e Saúde: Aproveitamento Integral do Pescado', 
        disciplina: 'Nutrição e Culinária', 
        autor: 'Milene Gonçalves Massaro Raimundo, Érika Fabiane Furlan (Organizadoras); José Valverde Machado Filho (Coordenação); Instituto de Pesca/APTA/SAA-SP', 
        imagem: 'images/capas/culinaria/pescado-e-saude.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Aproveitamento integral do pescado com receitas sustentáveis.', 
        hashtags: '#Pescado #AproveitamentoIntegral #Sustentabilidade #Culinaria #Receitas #Nutricao #LivroZathu' 
    },

    // 12. ID: 1812
    { 
        id: 1812, 
        titulo: 'Os 100 Melhores Bolos', 
        disciplina: 'Culinária e Confeitaria', 
        autor: 'Coletivo de autores (receitas tradicionais)', 
        imagem: 'images/capas/culinaria/100-melhores-bolos.jpg', 
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
        imagem: 'images/capas/culinaria/nutribook-receitas-saudaveis.jpg', 
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
        imagem: 'images/capas/culinaria/na-cozinha-frutas-legumes-verduras.jpg', 
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
        imagem: 'images/capas/culinaria/manual-metodos-preparo-cafe.jpg', 
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
        imagem: 'images/capas/culinaria/manual-alimentacao-saudavel.jpg', 
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
        imagem: 'images/capas/culinaria/viagem-culinaria-ancestral.jpg', 
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
        imagem: 'images/capas/culinaria/ebook-vegano-iniciantes.jpg', 
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
        imagem: 'images/capas/culinaria/manual-receitas-diet.jpg', 
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
        imagem: 'images/capas/culinaria/Sabores-Saberes.jpg', 
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
        imagem: 'images/capas/culinaria/O-Prato-Certo.jpg', 
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
        imagem: 'images/capas/culinaria/Drinks-Nao-Alcoolicos.jpg', 
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
        imagem: 'images/capas/culinaria/Shots-e-Cocktails.jpg', 
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
        imagem: 'images/capas/culinaria/Coqueteis-Sagatiba.jpg', 
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
        imagem: 'images/capas/culinaria/Memorias-Afetos-e-Sabores.jpg', 
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
        imagem: 'images/capas/culinaria/Brinque-e-Aprenda-na-Horta.jpg', 
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
        imagem: 'images/capas/culinaria/A-Volta-ao-Mundo-em-120-Receitas.jpg', 
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
        imagem: 'images/capas/culinaria/Alimentos-da-Horta.jpg', 
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
        imagem: 'images/capas/culinaria/Alimentacao-Saudavel.jpg', 
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
        imagem: 'images/capas/culinaria/A-Essencia-do-Cha.jpg', 
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
        imagem: 'images/capas/culinaria/A-Alquimia-dos-Chas.jpg', 
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
        imagem: 'images/capas/culinaria/doces-festas-juninas.jpg', 
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
        imagem: 'images/capas/culinaria/dicionario-dos-alimentos.jpg', 
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
        imagem: 'images/capas/culinaria/culinaria-para-diabeticos.jpg', 
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
        imagem: 'images/capas/culinaria/coletanea-drinks-tropicais.jpg', 
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
        imagem: 'images/capas/culinaria/caderno-receitas-fitoterapicas.jpg', 
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
        imagem: 'images/capas/culinaria/isto-nao-e-apenas-um-livro-de-receitas.jpg', 
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
        imagem: 'images/capas/culinaria/iniciando-na-cozinha.jpg', 
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
        imagem: 'images/capas/culinaria/guia-alimentar.jpg', 
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
        imagem: 'images/capas/culinaria/doces-sem-acucar.jpg', 
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
        imagem: 'images/capas/ciencia/fisica-classica.jpg', 
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
        imagem: 'images/capas/ciencia/quimica-organica.jpg', 
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
        imagem: 'images/capas/ciencia/astronomia-cosmos.jpg', 
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
        imagem: 'images/capas/ciencia/matematica-aplicada.jpg', 
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
        imagem: 'images/capas/ciencia/geologia-terra.jpg', 
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
        imagem: 'images/capas/ciencia/biologia-molecular.jpg', 
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
        imagem: 'images/capas/ciencia/fisica-quantica.jpg', 
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
        imagem: 'images/capas/ciencia/ciencias-ambientais.jpg', 
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
        imagem: 'images/capas/ciencia/historia-geologica-vida.jpg', 
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
        imagem: 'images/capas/ciencia/o-simbolo-e-a-realidade.jpg', 
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
        imagem: 'images/capas/ciencia/matematica-basica.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Conjuntos, funções, polinômios, matrizes e sistemas.', 
        hashtags: '#Matemática #Conjuntos #Funções #Matrizes #SistemasLineares #Ciência #LivroZathu' 
    },

    // 12. ID: 1612
    { 
        id: 1612, 
        titulo: 'Morfologia Vegetal', 
        disciplina: 'Botânica', 
        autor: 'Profª Sandra Bianchi', 
        imagem: 'images/capas/ciencia/morfologia-vegetal.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Raiz, caule, folha e estruturas reprodutivas.', 
        hashtags: '#Botânica #MorfologiaVegetal #Raiz #Caule #Folha #Flor #Ciência #LivroZathu' 
    },

    // 13. ID: 1613
    { 
        id: 1613, 
        titulo: 'Microbiologia Industrial: Bioprocessos (Vol. 1)', 
        disciplina: 'Microbiologia', 
        autor: 'Rodrigo Pires do Nascimento et al.', 
        imagem: 'images/capas/ciencia/microbiologia-industrial.jpg', 
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
        imagem: 'images/capas/ciencia/manual-botanica.jpg', 
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
        imagem: 'images/capas/ciencia/matematica-volume06.jpg', 
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
        imagem: 'images/capas/ciencia/jogos-matematicos.jpg', 
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
        imagem: 'images/capas/ciencia/membrana-celular.jpg', 
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
        imagem: 'images/capas/ciencia/morfologia-folha.jpg', 
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
        imagem: 'images/capas/ciencia/fisica-1-dinamica.jpg', 
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
        imagem: 'images/capas/ciencia/eletronica-circuitos-eletricos.jpg', 
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
        imagem: 'images/capas/ciencia/comportamento-animal.jpg', 
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
        imagem: 'images/capas/ciencia/geografia-historia.jpg', 
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
        imagem: 'images/capas/ciencia/bioestatistica-callegari.jpg', 
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
        imagem: 'images/capas/ciencia/fundamentos-da-fisica-mecanica.jpg', 
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
        imagem: 'images/capas/ciencia/matematica-geral-paiva.jpg', 
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
        imagem: 'images/capas/ciencia/geologia-aplicada-vol2.jpg', 
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
        imagem: 'images/capas/ciencia/topicos-em-geologia-vol1.jpg', 
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
        imagem: 'images/capas/ciencia/introducao-ciencias-mar.jpg', 
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
        imagem: 'images/capas/ciencia/geofisica-aplicada.jpg', 
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
        imagem: 'images/capas/ciencia/geologia-estrutural.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Deformação, esforços, reologia e estruturas tectônicas.', 
        hashtags: '#Geologia #GeologiaEstrutural #Tectônica #Deformação #Rochas #EnsinoSuperior #LivroZathu' 
    }

],

   
  // 💑 Relacionamentos (50 livros)
'relacionamentos': [

    // ===== LIVROS BASE (IDs 1851-1860) =====

    // 1. ID: 1851
    { 
        id: 1851, 
        titulo: 'As 5 Linguagens do Amor', 
        disciplina: 'Relacionamentos', 
        autor: 'Gary Chapman', 
        imagem: 'images/capas/relacionamentos/5-linguagens.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Descubra como expressar amor de forma significativa.', 
        hashtags: '#Amor #Relacionamentos #LivroZathu' 
    },

    // 2. ID: 1852
    { 
        id: 1852, 
        titulo: 'Casamento Blindado', 
        disciplina: 'Relacionamentos', 
        autor: 'Renato Cardoso', 
        imagem: 'images/capas/relacionamentos/casamento.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Fortaleça seu casamento construindo uma relação sólida.', 
        hashtags: '#Casamento #Família #LivroZathu' 
    },

    // 3. ID: 1853
    { 
        id: 1853, 
        titulo: 'Namoro Blindado', 
        disciplina: 'Relacionamentos', 
        autor: 'Renato Cardoso', 
        imagem: 'images/capas/relacionamentos/namoro.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Prepare-se para um relacionamento sólido e saudável.', 
        hashtags: '#Namoro #Relacionamento #LivroZathu' 
    },

    // 4. ID: 1854
    { 
        id: 1854, 
        titulo: 'Pais Inteligentes Enriquecem os Filhos', 
        disciplina: 'Relacionamentos', 
        autor: 'Gustavo Cerbasi', 
        imagem: 'images/capas/relacionamentos/pais.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Educação financeira para famílias.', 
        hashtags: '#Pais #Filhos #Educação #LivroZathu' 
    },

    // 5. ID: 1855
    { 
        id: 1855, 
        titulo: 'Amar ou Depender', 
        disciplina: 'Relacionamentos', 
        autor: 'Walter Riso', 
        imagem: 'images/capas/relacionamentos/amar-depender.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Como superar a dependência emocional e amar de forma saudável.', 
        hashtags: '#DependênciaEmocional #Amor #LivroZathu' 
    },

    // 6. ID: 1856
    { 
        id: 1856, 
        titulo: 'Família', 
        disciplina: 'Relacionamentos', 
        autor: 'Augusto Cury', 
        imagem: 'images/capas/relacionamentos/familia.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Gestão de conflitos familiares e relacionamentos saudáveis.', 
        hashtags: '#Família #Conflitos #LivroZathu' 
    },

    // 7. ID: 1857
    { 
        id: 1857, 
        titulo: 'A Conquista da Felicidade', 
        disciplina: 'Relacionamentos', 
        autor: 'Bertrand Russell', 
        imagem: 'images/capas/relacionamentos/felicidade.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexões sobre a felicidade e o bem-estar nos relacionamentos.', 
        hashtags: '#Felicidade #Reflexão #LivroZathu' 
    },

    // 8. ID: 1858
    { 
        id: 1858, 
        titulo: 'Relacionamentos Saudáveis', 
        disciplina: 'Relacionamentos', 
        autor: 'Helena Langa', 
        imagem: 'images/capas/relacionamentos/saudaveis.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Construa vínculos fortes e duradouros.', 
        hashtags: '#Relacionamentos #SaúdeEmocional #LivroZathu' 
    },

    // 9. ID: 1859
    { 
        id: 1859, 
        titulo: 'O Amor nos Tempos do Cólera', 
        disciplina: 'Relacionamentos', 
        autor: 'Gabriel García Márquez', 
        imagem: 'images/capas/relacionamentos/amor-cólera.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Uma história de amor duradoura e incondicional.', 
        hashtags: '#Amor #Literatura #Relacionamentos #LivroZathu' 
    },

    // 10. ID: 1860
    { 
        id: 1860, 
        titulo: 'Comunicação Não-Violenta', 
        disciplina: 'Relacionamentos', 
        autor: 'Marshall Rosenberg', 
        imagem: 'images/capas/relacionamentos/comunicacao.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramentas para melhorar a comunicação nos relacionamentos.', 
        hashtags: '#Comunicação #CNV #Relacionamentos #LivroZathu' 
    },

    // ===== SEGUNDO LOTE (IDs 1861-1870) =====

    // 11. ID: 1861
    { 
        id: 1861, 
        titulo: 'Relacionamento é coisa pra gente disposta', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Geffo Pinheiro', 
        imagem: 'images/capas/relacionamentos/relacionamento-e-coisa-pra-gente-disposta.jpg', 
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
        imagem: 'images/capas/relacionamentos/poliamor-e-relacionamento-aberto.jpg', 
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
        imagem: 'images/capas/relacionamentos/relacionamentos-amorosos-vol2.jpg', 
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
        imagem: 'images/capas/relacionamentos/tudo-sobre-o-amor.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexão sobre o amor como prática transformadora.', 
        hashtags: '#Amor #bellhooks #Filosofia #Feminismo #LivroZathu' 
    },

    // 15. ID: 1865
    { 
        id: 1865, 
        titulo: 'Relacionamentos Amorosos na Era Digital', 
        disciplina: 'Psicologia / Relacionamentos', 
        autor: 'Adriana Nunan, Maria Amélia Penido (e outros)', 
        imagem: 'images/capas/relacionamentos/relacionamentos-amorosos-era-digital.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Desafios dos relacionamentos na era digital.', 
        hashtags: '#Psicologia #Relacionamentos #EraDigital #Ciberpsicologia #LivroZathu' 
    },

    // 16. ID: 1866
    { 
        id: 1866, 
        titulo: 'O Milagre da Manhã para Transformar seu Relacionamento', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Hal Elrod, Paul Martino, Stacey Martino, Honorée Corder', 
        imagem: 'images/capas/relacionamentos/milagre-da-manha-relacionamento.jpg', 
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
        imagem: 'images/capas/relacionamentos/como-ser-adulto-nas-relacoes.jpg', 
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
        imagem: 'images/capas/relacionamentos/inseguranca-no-amor.jpg', 
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
        imagem: 'images/capas/relacionamentos/O-Ciume-e-suas-Consequencias.jpg', 
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
        imagem: 'images/capas/relacionamentos/a-comunicacao-dos-amantes.jpg', 
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
        imagem: 'images/capas/relacionamentos/segredo-de-justica.jpg', 
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
        imagem: 'images/capas/relacionamentos/salvar-seu-lar.jpg', 
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
        imagem: 'images/capas/relacionamentos/perda-sem-nome.jpg', 
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
        imagem: 'images/capas/relacionamentos/amor-proprio.jpg', 
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
        imagem: 'images/capas/relacionamentos/conselhos-pais-familia.jpg', 
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
        imagem: 'images/capas/relacionamentos/pais-brilhantes-professores-fascinantes.jpg', 
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
        imagem: 'images/capas/relacionamentos/quem-deus-e.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para pais cristãos apresentarem Deus aos filhos.', 
        hashtags: '#Deus #Parentalidade #Fé #EducaçãoCristã #Filhos #LivroZathu' 
    },

    // 28. ID: 1878
    { 
        id: 1878, 
        titulo: 'O Milagre da Manhã para Transformar seu Relacionamento', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Hal Elrod, Paul Martino, Stacey Martino, Honorée Corder', 
        imagem: 'images/capas/relacionamentos/milagre-da-manha-relacionamento.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Ferramentas para reacender a paixão no casal.', 
        hashtags: '#Autoajuda #Relacionamentos #MilagreDaManha #HalElrod #Paixao #Casamento #LivroZathu' 
    },

    // 29. ID: 1879
    { 
        id: 1879, 
        titulo: 'Como Ser um Adulto nas Relações', 
        disciplina: 'Psicologia / Relacionamentos', 
        autor: 'David Richo', 
        imagem: 'images/capas/relacionamentos/como-ser-adulto-nas-relacoes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Mindfulness para construir um amor adulto.', 
        hashtags: '#Psicologia #Relacionamentos #Mindfulness #AmorAdulto #DavidRicho #LivroZathu' 
    },

    // 30. ID: 1880
    { 
        id: 1880, 
        titulo: 'Insegurança no Amor', 
        disciplina: 'Psicologia', 
        autor: 'Leslie Becker-Phelps', 
        imagem: 'images/capas/relacionamentos/inseguranca-no-amor.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Identifique padrões e construa relacionamentos seguros.', 
        hashtags: '#Psicologia #ApegoAnsioso #Relacionamentos #Autoconhecimento #SaudeMental #LivroZathu' 
    },

    // ===== QUARTO LOTE (IDs 1881-1890) =====

    // 31. ID: 1881
    { 
        id: 1881, 
        titulo: 'O Ciúme e suas Consequências para os Relacionamentos Amorosos', 
        disciplina: 'Psicologia', 
        autor: 'Thiago de Almeida', 
        imagem: 'images/capas/relacionamentos/O-Ciume-e-suas-Consequencias.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'A origem, manifestações e consequências do ciúme.', 
        hashtags: '#Psicologia #Ciume #Relacionamentos #Amor #Infidelidade #LivroZathu' 
    },

    // 32. ID: 1882
    { 
        id: 1882, 
        titulo: 'A Comunicação dos Amantes', 
        disciplina: 'Comunicação Social / Psicologia', 
        autor: 'Adriana Thiara de Oliveira Silva', 
        imagem: 'images/capas/relacionamentos/a-comunicacao-dos-amantes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'A busca por um encontro existencial nas relações.', 
        hashtags: '#Comunicacao #Relacionamento #Psicologia #Amor #LivroZathu' 
    },

    // 33. ID: 1883
    { 
        id: 1883, 
        titulo: 'Segredo de Justiça', 
        disciplina: 'Direito / Psicologia / Relacionamentos', 
        autor: 'Andréa Pachá', 
        imagem: 'images/capas/relacionamentos/segredo-de-justica.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Amores e desejos que chegam aos tribunais de família.', 
        hashtags: '#SegredoDeJustiça #AndréaPachá #DireitoDeFamília #Relacionamentos #Justiça #LivroZathu' 
    },

    // 34. ID: 1884
    { 
        id: 1884, 
        titulo: 'Uma Maneira de Salvar o Seu Lar', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Márcio Mendes', 
        imagem: 'images/capas/relacionamentos/salvar-seu-lar.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Proteja os laços familiares com mudanças de atitude.', 
        hashtags: '#Autoajuda #Relacionamentos #Família #Comunicação #LivroZathu' 
    },

    // 35. ID: 1885
    { 
        id: 1885, 
        titulo: 'Perda sem Nome: Como superar a ausência de pessoas queridas', 
        disciplina: 'Psicologia / Apoio ao Luto', 
        autor: 'Ana Maria Dall Agnese, Marcia da Rosa Batista, Vanessa Garcia de Oliveira, Adriane Turatti de Rose, Natalia Lescano', 
        imagem: 'images/capas/relacionamentos/perda-sem-nome.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Apoio para pais que perderam filhos.', 
        hashtags: '#Luto #Perda #Psicologia #ApoioEmocional #Família #Superação #LivroZathu' 
    },

    // 36. ID: 1886
    { 
        id: 1886, 
        titulo: 'Segredo de Justiça', 
        disciplina: 'Direito / Psicologia', 
        autor: 'Andréa Pachá', 
        imagem: 'images/capas/relacionamentos/segredo-de-justica.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Histórias reais de disputas familiares e conflitos amorosos.', 
        hashtags: '#Direito #Psicologia #Família #Justiça #AndréaPachá #LivroZathu' 
    },

    // 37. ID: 1887
    { 
        id: 1887, 
        titulo: 'Poliamor & Relacionamento Aberto', 
        disciplina: 'Psicologia / Relacionamentos', 
        autor: 'Alexandre Venancio', 
        imagem: 'images/capas/relacionamentos/poliamor-relacionamento-aberto.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Abordagem contemporânea sobre relacionamentos não monogâmicos.', 
        hashtags: '#Poliamor #RelacionamentoAberto #Psicologia #Amor #LivroZathu' 
    },

    // 38. ID: 1888
    { 
        id: 1888, 
        titulo: 'Perda Sem Nome: Como Superar a Ausência de Pessoas Queridas', 
        disciplina: 'Psicologia / Luto', 
        autor: 'Fundação Thiago de Moraes Gonzaga', 
        imagem: 'images/capas/relacionamentos/perda-sem-nome.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia sobre o luto de pais que perderam filhos.', 
        hashtags: '#Psicologia #Luto #Perda #Superacao #Família #LivroZathu' 
    },

    // 39. ID: 1889
    { 
        id: 1889, 
        titulo: 'Pais Brilhantes, Professores Fascinantes', 
        disciplina: 'Educação / Desenvolvimento Pessoal', 
        autor: 'Augusto Cury', 
        imagem: 'images/capas/relacionamentos/pais-brilhantes-professores-fascinantes.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Técnicas para educar a emoção e formar pensadores.', 
        hashtags: '#Educacao #AugustoCury #Pais #Professores #DesenvolvimentoPessoal #LivroZathu' 
    },

    // 40. ID: 1890
    { 
        id: 1890, 
        titulo: 'Quem Deus é? Quando e Como Apresentar Deus aos Filhos', 
        disciplina: 'Espiritualidade / Educação Cristã', 
        autor: 'Jackeline Hayashi', 
        imagem: 'images/capas/relacionamentos/quem-deus-e.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia prático para pais cristãos apresentarem Deus aos filhos.', 
        hashtags: '#Espiritualidade #EducacaoCrista #Pais #Filhos #Fe #LivroZathu' 
    },

    // ===== QUINTO LOTE (IDs 1891-1900) =====

    // 41. ID: 1891
    { 
        id: 1891, 
        titulo: 'Os Segredos da Confiança Inabalável', 
        disciplina: 'Desenvolvimento Pessoal / Sedução', 
        autor: 'Não identificado', 
        imagem: 'images/capas/relacionamentos/os-segredos-da-confianca-inabalavel.jpg', 
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
        imagem: 'images/capas/relacionamentos/o-que-a-biblia-diz-sobre-romance-e-namoro.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Princípios bíblicos para o namoro e romance cristão.', 
        hashtags: '#Cristianismo #Namoro #Romance #Bíblia #VidaCristã #LivroZathu' 
    },

    // 43. ID: 1893
    { 
        id: 1893, 
        titulo: 'Relacionamentos Amorosos: o antes, o durante... e o depois - Volume 2', 
        disciplina: 'Psicologia / Relacionamentos', 
        autor: 'Thiago de Almeida (organizador)', 
        imagem: 'images/capas/relacionamentos/relacionamentos-amorosos-vol2.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Abordagem científica das fases dos relacionamentos amorosos.', 
        hashtags: '#Psicologia #Relacionamentos #Amor #Autoestima #Ciume #LivroZathu' 
    },

    // 44. ID: 1894
    { 
        id: 1894, 
        titulo: 'Relacionamento é Coisa pra Gente Disposta', 
        disciplina: 'Autoajuda / Relacionamentos', 
        autor: 'Geffo Pinheiro', 
        imagem: 'images/capas/relacionamentos/relacionamento_coisa_pra_gente_disposta.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexões poéticas sobre amor e responsabilidade afetiva.', 
        hashtags: '#Relacionamento #Amor #Autoajuda #ResponsabilidadeAfetiva #Poesia #LivroZathu' 
    },

    // 45. ID: 1895
    { 
        id: 1895, 
        titulo: 'Uma Maneira de Salvar o Seu Lar', 
        disciplina: 'Autoajuda / Relacionamentos / Espiritualidade', 
        autor: 'Márcio Mendes', 
        imagem: 'images/capas/relacionamentos/uma-maneira-de-salvar-o-seu-lar.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Guia para fortalecer laços familiares e superar desafios.', 
        hashtags: '#Relacionamento #Casamento #Família #Autoajuda #Espiritualidade #LivroZathu' 
    },

    // 46. ID: 1896
    { 
        id: 1896, 
        titulo: 'Tudo sobre o Amor: Novas Perspectivas', 
        disciplina: 'Filosofia / Sociologia / Desenvolvimento Pessoal', 
        autor: 'bell hooks', 
        imagem: 'images/capas/relacionamentos/tudo-sobre-o-amor.jpg', 
        visualizar: 'https://drive.google.com/file/d/ID_DO_PDF_AQUI/preview', 
        download: 'https://drive.google.com/uc?export=download&id=ID_DO_PDF_AQUI', 
        descricao_curta: 'Reflexão sobre o amor como prática e transformação social.', 
        hashtags: '#Filosofia #Amor #bellhooks #Feminismo #Sociologia #LivroZathu' 
    },

    // 47. ID: 1897
    { 
        id: 1897, 
        titulo: 'Razão e Sensibilidade', 
        disciplina: 'Literatura Clássica / Romance', 
        autor: 'Jane Austen', 
        imagem: 'images/capas/relacionamentos/razao-e-sensibilidade.jpg', 
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
        imagem: 'images/capas/relacionamentos/orgulho-e-preconceito.jpg', 
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
        imagem: 'images/capas/relacionamentos/romeu-e-julieta.jpg', 
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
        imagem: 'images/capas/relacionamentos/o-eterno-marido.jpg', 
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