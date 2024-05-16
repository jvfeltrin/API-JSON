document.getElementById('rota').addEventListener('change', function() {
    const rota = document.getElementById('rota').value;
    const localidadeField = document.getElementById('localidade-field');
    const groupByField = document.getElementById('groupby-field');
    const paisField = document.getElementById('pais-field');

    localidadeField.style.display = 'none';
    groupByField.style.display = 'none';
    paisField.style.display = 'none';

    if (rota === 'rota2') {
        localidadeField.style.display = 'block';
    } else if (rota === 'rota3') {
        groupByField.style.display = 'block';
    } else if (rota === 'rota4') {
        paisField.style.display = 'block';
    }
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const rota = document.getElementById('rota').value;
    const nome = 'joao';
    const localidade = document.getElementById('localidade').value || 'BR';
    const groupBy = document.getElementById('groupBy').value;
    const pais = document.getElementById('pais').value;

    let url = '';

