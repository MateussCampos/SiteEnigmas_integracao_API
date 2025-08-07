

document.getElementById('verResposta').addEventListener('click', function () {

    const answer = document.getElementById('resposta');
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block'; this.innerHTML = '<span class="emoji">😲</span> Ocultar Resposta';
    }
    else {
        answer.style.display = 'none'; this.innerHTML = '<span class="emoji">👀</span> Ver Resposta';
    }
});


/*
// Criar estrelas cintilantes
function createStars() {
    const container = document.getElementById('stars-container');
    const colors = ['#ff69b4', '#ff8c00', '#ffd700', '#9370db', '#00bfff'];

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 10 + 5 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}*/
/*
// Criar balões
function createBalloons() {
    const container = document.getElementById('balloons-container');
    const colors = ['#ff69b4', '#ff8c00', '#ffd700', '#9370db', '#00bfff', '#7cfc00'];

    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.setProperty('--x', Math.random() * 100 - 10 + 'px');
        balloon.style.setProperty('--duration', Math.random() * 10 + 10 + 's');
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.width = Math.random() * 60 + 40 + 'px';
        balloon.style.height = Math.random() * 80 + 60 + 'px';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(balloon);
    }
}

// Chamar as funções quando a página carregar
window.onload = function () {
    createStars();
    createBalloons();

    // Efeito ao clicar no botão de comemorar
    document.querySelector('.btn-celebrate').addEventListener('click', function () {
        alert('🎉 Uhuuuu! Vamos comemorar essa conquista incrível! 🎊');
    });
};
*/