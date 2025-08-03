

document.getElementById('verResposta').addEventListener('click', function () {
    
    const answer = document.getElementById('resposta');
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block'; this.innerHTML = '<span class="emoji">😲</span> Ocultar Resposta';
    }
    else {
        answer.style.display = 'none'; this.innerHTML = '<span class="emoji">👀</span> Ver Resposta';
    }
});
