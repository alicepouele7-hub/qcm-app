let players = [];
let scores = {};
let currentDuo = [];
let pairPool = [];      // liste de toutes les paires possibles, mélangée
let lastPair = null;    // dernière paire jouée (pour éviter la répétition immédiate)

// --- GESTION JOUEURS ---
function addPlayer() {
    const input = document.getElementById('playerName');
    const name = input.value.trim();
    if (name && !players.includes(name)) {
        players.push(name);
        scores[name] = 0;
        input.value = '';
        updatePlayerList();
    }
}

function updatePlayerList() {
    const list = document.getElementById('playerList');
    list.innerHTML = players.map(p =>
        `<li>${p} <button class="delete-btn" onclick="removePlayer('${p}')">X</button></li>`
    ).join('');
    document.getElementById('startBtn').disabled = players.length < 2;
}

function removePlayer(name) {
    players = players.filter(p => p !== name);
    delete scores[name];
    updatePlayerList();
}

function handleKeyPress(e) {
    if (e.key === 'Enter') addPlayer();
}

// --- LOGIQUE DU TOUR ---
function startGame() {
    document.getElementById('setupScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    
    // On construit la pioche de tous les duos dès le départ
    pairPool = buildPairPool(); 
    lastPair = null;
    
    nextTurn();
}

// Génère toutes les combinaisons de paires possibles et les mélange
function buildPairPool() {
    const pairs = [];
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            pairs.push([players[i], players[j]]);
        }
    }
    // Mélange de Fisher-Yates
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
    return pairs;
}

function pairKey(pair) {
    return pair[0] + '|' + pair[1];
}

function nextTurn() {
    document.getElementById('postCountControls').style.display = 'none';
    document.getElementById('preCountControls').style.display = 'block';

    // LA MODIFICATION EST ICI :
    // Si la pioche est vide, tout le monde a joué, on affiche la fin !
    if (pairPool.length === 0) {
        showEndScreen();
        return; // On arrête la fonction ici
    }

    // (Le reste de ton code ne change pas)
    if (lastPair && pairPool.length > 1 && pairKey(pairPool) === pairKey(lastPair)) {
        const swapIdx = pairPool.findIndex(p => pairKey(p) !== pairKey(lastPair));
        if (swapIdx > 0) {
            [pairPool, pairPool[swapIdx]] = [pairPool[swapIdx], pairPool];
        }
    }

    currentDuo = pairPool.shift();
    lastPair = currentDuo;

    document.getElementById('currentDuo').innerText = `${currentDuo}`;

    generateScenario();
}
function generateScenario() {
    const s = scenarios[Math.floor(Math.random() * scenarios.length)];
    document.getElementById('scenarioText').innerText = s.text;
    const letters = ['A', 'B', 'C'];
    document.getElementById('optionsContainer').innerHTML = s.options.map((o, i) =>
        `<div class="option"><span>${letters[i]}</span> ${o}</div>`
    ).join('');
}

function nextDuoAndScenario() {
    nextTurn();
}

// --- COMPTE À REBOURS ---
function startCountdown() {
    const overlay = document.getElementById('countdownOverlay');
    const num = document.getElementById('countdownNumber');
    const act = document.getElementById('actionText');

    overlay.style.display = 'flex';
    act.style.display = 'none';
    num.style.display = 'block';

    let c = 3;
    num.innerText = c;

    let t = setInterval(() => {
        c--;
        if (c > 0) {
            num.innerText = c;
        } else if (c === 0) {
            num.style.display = 'none';
            act.style.display = 'block';
        } else {
            clearInterval(t);
            overlay.style.display = 'none';
            // Afficher les boutons de validation
            document.getElementById('preCountControls').style.display = 'none';
            document.getElementById('postCountControls').style.display = 'flex';
        }
    }, 1000);
}

// --- RÉSULTAT DU TOUR ---
function handleResult(isMatch) {
    if (isMatch) {
        scores[currentDuo[0]]++;
        scores[currentDuo[1]]++;
    }
    nextTurn();
}

// --- ÉCRAN DE FIN ---
function showEndScreen() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'block';

    // Trier les joueurs par score (du plus grand au plus petit)
    let sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    // Afficher le classement
    document.getElementById('finalRanking').innerHTML = sorted.map((s, i) =>
        `<div class="ranking-item">
            <span>#${i + 1} ${s[0]}</span>
            <span>${s[1]} Pts</span>
        </div>`
    ).join('');

    // Punitions
    const first = sorted[0];
    const second = sorted[1];
    const last = sorted[sorted.length - 1];

    document.getElementById('punishmentText').innerHTML = `
        <p><strong>${first[0]}</strong> distribue <strong>${first[1] * 2} gorgees</strong>.</p>
        <p><strong>${second[0]}</strong> distribue <strong>${second[1]} gorgee${second[1] > 1 ? 's' : ''}</strong>.</p>
        <hr style="border-color:#475569; margin: 10px 0;">
        <p><strong>${last[0]}</strong> finit son verre (CUL SEC) !</p>
    `;
}

function restartGame() {
    players = [];
    scores = {};
    pairPool = [];
    lastPair = null;
    currentDuo = [];
    document.getElementById('endScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('setupScreen').style.display = 'block';
    document.getElementById('playerList').innerHTML = '';
    document.getElementById('startBtn').disabled = true;
}
