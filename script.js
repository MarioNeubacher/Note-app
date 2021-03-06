let titles = [];
let texts = [];
load();

/**
 * This function shows the taken notes
 */
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

/**
 * This function opens the note taking screen 
 */
function openNote() {
    document.getElementById('note').classList.remove('d-none');
}

/**
 * This function closes the note taking screen
 */
function closeNote() {
    document.getElementById('note').classList.add('d-none');
}

/**
 * This function saves the title and text in two seperate arrays, closes the note taking screen and shows the saved notes
 */
function saveNote() {
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;

    titles.push(title);
    texts.push(text);
    save();
    closeNote();
    renderNotes();
}

/**
 * This function deletes saved notes by splicing the title and text from the arrays, save the changes and show updated notes
 * @param {number} i - This number determines the position in the arrays 
 */
function deleteNote(i) {
    titles.splice(i, 1);
    texts.splice(i, 1);
    save();
    renderNotes();
}

/**
 * This function saves changes in local storage as strings
 */
function save() {
    let titlesAsText = JSON.stringify(titles);
    let textsAsText = JSON.stringify(texts);

    localStorage.setItem('keytitles', titlesAsText);
    localStorage.setItem('keytexts', textsAsText);
}

/**
 * This function loads the saved notes from local storage and sets them to arrays
 */
function load () {
    let titlesAsText = localStorage.getItem('keytitles');
    let textsAsText = localStorage.getItem('keytexts');
    if (titlesAsText&&textsAsText) {
        titles=JSON.parse(titlesAsText);
        texts=JSON.parse(textsAsText);
    }
}