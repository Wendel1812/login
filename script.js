const botao = document.querySelector('.plano').addEventListener('click', () => {
    let fundo = document.querySelector('.container');
    let letras = document.querySelector('h1');
    let parag = document.querySelector('p');
    let label = document.querySelector('label');
    let label2 = document.querySelector('#secondLabel');
    let a = document.querySelector('a');
    if (fundo.style.backgroundImage.includes('fundao.jpg')) {
        fundo.style.backgroundImage = "url('img/fundo.jpg')";
        letras.style.color = "black";
        parag.style.color = 'black';
        label.style.color = 'black';
        label2.style.color = 'black';
        a.style.color = 'black';
    } else {
        fundo.style.backgroundImage = "url('img/fundao.jpg')";
        letras.style.color = "white";
        parag.style.color = 'white';
        label.style.color = 'white';
        label2.style.color = 'white';
        a.style.color = 'white';
    }
});