# 📚 LivroZathu

**LivroZathu** é uma biblioteca digital gratuita e de código aberto, criada para facilitar o acesso ao conhecimento. O projeto reúne um acervo diversificado de livros em PDF, organizados por categorias, desde tecnologia e ciências até desenvolvimento pessoal e literatura.

---

## 🎯 Sobre o Projeto

O objetivo principal do LivroZathu é democratizar o acesso à leitura e ao aprendizado. Através de uma interface simples, rápida e responsiva, os utilizadores podem explorar, visualizar e descarregar livros de forma totalmente gratuita.

---

## 📊 Estatísticas e Categorias

O acervo está dividido nas seguintes áreas do conhecimento:

| Categoria | Descrição |
| :--- | :--- |
| 💻 **Tecnologia** | Programação, redes, inteligência artificial e ferramentas. |
| 🧠 **Desenvolvimento Pessoal** | Autoajuda, produtividade, liderança e psicologia. |
| 💼 **Negócios** | Finanças, empreendedorismo, economia e marketing. |
| 🏥 **Saúde** | Bem-estar, nutrição e cuidados pessoais. |
| 🔬 **Ciência** | Física, química, biologia e matemática. |
| 🍳 **Culinária** | Receitas, gastronomia e técnicas culinárias. |
| ❤️ **Relacionamentos** | Comunicação, família e desenvolvimento social. |
| 📖 **Literatura** | Clássicos, ficção, poesia e contos. |

---

## 🚀 Como Usar

### Navegação
1. Acede ao site (abre o `index.html`).
2. Escolhe a categoria desejada (ex: Tecnologia, Literatura).
3. Navega pela lista de livros disponíveis.
4. Clica em **"Visualizar"** para ler o livro no navegador.
5. Clica em **"Baixar"** para descarregar o ficheiro PDF.

### 🔍 Pesquisa
- Utiliza a barra de pesquisa no topo para encontrar livros pelo **título**, **autor** ou **disciplina**.
- A pesquisa vasculha automaticamente todas as categorias do acervo.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML5** — Estrutura semântica das páginas.
- **CSS3** — Estilização, responsividade (mobile-first) e Dark Mode.
- **JavaScript (Vanilla)** — Lógica de pesquisa, paginação e interatividade.
- **Objetos JSON** — Armazenamento e estruturação local dos dados dos livros.

---

## 📁 Estrutura de Dados

Os dados dos livros estão armazenados num ficheiro JavaScript (`dados-livros.js`). Cada livro segue o seguinte formato:

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