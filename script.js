async function fetchData() {
    

    try {
        const enWord = document.querySelectorAll('#en-word');
        const szWord = document.querySelectorAll('#sz-word');
        const response = await fetch("/sk.json");    
        if(!response.ok){
            throw new Error("Error fetching dictionary file.");
        }

        const data = await response.json();
        // LENGTH of enWord/szWord attributes appearing in HTML. by default, 4
        const length = Math.min(enWord.length, szWord.length);
        for (let i = 0; i < length; i++) {
            const dictionaryData = data.words[randomWord()];
            enWord[i].innerText = dictionaryData.englishWord;
            szWord[i].innerText = dictionaryData.targetWord;
        };
    } 
    catch(error) {
        console.error(error)
    }
}

function randomWord() {
    let randomWord = Math.floor(Math.random() * 1001);
    return randomWord;
}

fetchData();

// create a new flashcard; max of 8, default of four
function createFlashcard(){

}

const rareCard = document.querySelector('.rare');
rareCard.addEventListener('mousemove', (e) => {
    const { x, y } = rareCard.getBoundingClientRect();
    rareCard.style.setProperty("--x", e.clientX - x);
    rareCard.style.setProperty("--y", e.clientY - y);
})