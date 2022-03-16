let titles = [];
let texts = [];
load();

function renderNotes() {
    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const text = texts[i];

    content.innerHTML += `
        <div class="note">
            <div class="noteTitle">
            ${title}
            </div>
            <div class="noteText">
            ${text}
            </div>
            <img src="img/full-trash-48.png" onclick="deleteNote(${i})" class="deleteNote">
        </div>
    `;
    }
}

function openNote() {
    document.getElementById('note').classList.remove('d-none');
}

function closeNote() {
    document.getElementById('note').classList.add('d-none');
}

function saveNote() {
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;

    titles.push(title);
    texts.push(text);
    save();
    closeNote();
    renderNotes();
}

function deleteNote(i) {
    titles.splice(i, 1);
    texts.splice(i, 1);
    save();
    renderNotes();
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    let textsAsText = JSON.stringify(texts);

    localStorage.setItem('keytitles', titlesAsText);
    localStorage.setItem('keytexts', textsAsText);
}

function load () {
    let titlesAsText = localStorage.getItem('keytitles');
    let textsAsText = localStorage.getItem('keytexts');
    if (titlesAsText&&textsAsText) {
        titles=JSON.parse(titlesAsText);
        texts=JSON.parse(textsAsText);
    }
}