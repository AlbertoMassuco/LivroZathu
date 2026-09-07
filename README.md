# LivroZathu - Acervo Digital

![LivroZathu Banner](https://via.placeholder.com/1200x300/2c3e50/ffffff?text=LivroZathu+-+Acervo+Digital)

## Sobre o Projeto

**LivroZathu** é um acervo digital de livros organizado por categorias, com o objetivo de disponibilizar conhecimento de forma acessível e organizada. O projeto reúne livros de diversas áreas do conhecimento, desde tecnologia e ciência até literatura e desenvolvimento pessoal.

---

## Estatísticas do Acervo

| Categoria | Livros | IDs |
|-----------|--------|-----|
| 💻 Tecnologia | 75 | 1301-1375 |
| 🧠 Desenvolvimento Pessoal | 50 | 1111-1160 |
| 💼 Negócios | 40 | 1211-1250 |
| 🏥 Saúde | 85 | 1401-1485 |
| 🔬 Ciência | 30 | 1601-1630 |
| 🍳 Culinária | 40 | 1801-1840 |
| 💑 Relacionamentos | 50 | 1851-1900 |
| 📚 Literatura | 82 | 1901-1982 |
| **TOTAL** | **452 livros** | **1111-1982** |

---

## Estrutura do Acervo

### Tecnologia (75 livros)
- **IDs:** 1301 a 1375
- **Subcategorias:** Programação, Redes, Segurança, Dados, Hardware, Web, Mobile

### Desenvolvimento Pessoal (50 livros)
- **IDs:** 1111 a 1160
- **Subcategorias:** Autoestima, Liderança, Coaching, Motivação, Autoconhecimento

### Negócios (40 livros)
- **IDs:** 1211 a 1250
- **Subcategorias:** Finanças, Economia, Empreendedorismo, Vendas, Marketing

### Saúde (85 livros)
- **IDs:** 1401 a 1485
- **Subcategorias:** Medicina, Enfermagem, Psicologia, Nutrição, Odontologia

### Ciência (30 livros)
- **IDs:** 1601 a 1630
- **Subcategorias:** Física, Química, Biologia, Matemática, Geologia, Astronomia

### Culinária (40 livros)
- **IDs:** 1801 a 1840
- **Subcategorias:** Cozinha Moçambicana, Confeitaria, Bebidas, Nutrição

### Relacionamentos (50 livros)
- **IDs:** 1851 a 1900
- **Subcategorias:** Casamento, Namoro, Família, Comunicação, Psicologia

### Literatura (82 livros)
- **IDs:** 1901 a 1982
- **Subcategorias:** Brasileira, Moçambicana, Portuguesa, Clássica, Poesia, Contos

---

## Como Usar

### Navegação
1. Acesse o site e escolha uma categoria
2. Navegue pelos livros disponíveis
3. Clique em "Visualizar" para ler online
4. Clique em "Download" para baixar o PDF

### Pesquisa
- Utilize a barra de pesquisa para encontrar livros por título, autor ou hashtag
- Filtre os resultados por categoria

---

## Tecnologias Utilizadas

- **HTML5** - Estrutura do site
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e gerenciamento do acervo
- **JSON** - Armazenamento estruturado dos dados

---

## Estrutura de Dados

Cada livro é representado no seguinte formato:

```javascript
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
}