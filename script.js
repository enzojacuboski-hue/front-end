const minefield = document.getElementById('minefield');

// 13 Itens de HTML
const htmlItems = [
    { type: 'html', name: '<html>', answer: 'Raiz do documento HTML.' },
    { type: 'html', name: '<head>', answer: 'Contém os metadados e título da aba.' },
    { type: 'html', name: '<body>', answer: 'Corpo da página (conteúdo visível).' },
    { type: 'html', name: '<h1>', answer: 'Título principal da página.' },
    { type: 'html', name: '<p>', answer: 'Define um parágrafo de texto.' },
    { type: 'html', name: '<a>', answer: 'Cria um link (hiperlink).' },
    { type: 'html', name: '<img>', answer: 'Insere uma imagem na página.' },
    { type: 'html', name: '<div>', answer: 'Uma caixa de bloco genérica.' },
    { type: 'html', name: '<span>', answer: 'Um contêiner de texto em linha.' },
    { type: 'html', name: '<button>', answer: 'Cria um botão clicável.' },
    { type: 'html', name: '<input>', answer: 'Campo para o usuário digitar dados.' },
    { type: 'html', name: '<ul>', answer: 'Lista com bolinhas (não ordenada).' },
    { type: 'html', name: '<li>', answer: 'Item de uma lista.' }
];

// 12 Itens de CSS
const cssItems = [
    { type: 'css', name: 'color', answer: 'Muda a cor do texto.' },
    { type: 'css', name: 'background-color', answer: 'Muda a cor de fundo.' },
    { type: 'css', name: 'font-size', answer: 'Muda o tamanho da letra.' },
    { type: 'css', name: 'text-align', answer: 'Alinha o texto (left, center, right).' },
    { type: 'css', name: 'width', answer: 'Define a largura de um elemento.' },
    { type: 'css', name: 'height', answer: 'Define a altura de um elemento.' },
    { type: 'css', name: 'margin', answer: 'Espaço do lado de fora do elemento.' },
    { type: 'css', name: 'padding', answer: 'Espaço do lado de dentro do elemento.' },
    { type: 'css', name: 'border', answer: 'Cria uma borda ao redor do elemento.' },
    { type: 'css', name: 'border-radius', answer: 'Arredonda os cantos das bordas.' },
    { type: 'css', name: 'display: flex', answer: 'Ativa o modo Flexbox para alinhar itens.' },
    { type: 'css', name: 'gap', answer: 'Cria espaçamento entre itens do flex/grid.' }
];

// Totaliza exatamente 25 blocos
const items = [...htmlItems, ...cssItems];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(items);

items.forEach((item, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = index + 1;
    cell.dataset.name = item.name;
    cell.dataset.answer = item.answer;
    cell.dataset.type = item.type;

    cell.addEventListener('click', function() {
        if (this.classList.contains('revealed')) return;
        
        if (this.classList.contains('named')) {
            this.classList.remove('named', 'type-html', 'type-css');
            this.classList.add('revealed');
            this.textContent = this.dataset.answer;
            return;
        }
        
        if (this.dataset.type === 'html') {
            this.classList.add('named', 'type-html');
        } else if (this.dataset.type === 'css') {
            this.classList.add('named', 'type-css');
        }
        this.textContent = this.dataset.name;
    });

    minefield.appendChild(cell);
});