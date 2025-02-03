async function fetchData() {
    let randomWord = Math.floor(Math.random() * 1001);

    try {
        const enWord = document.getElementById("en-word");
        const szWord = document.getElementById("sz-word");
        const response = await fetch("/sk.json");    
        if(!response.ok){
            throw new Error("Error fetching dictionary file.");
        }

        const data = await response.json();
        const dictionaryData = data.words[randomWord];
        enWord.innerText = dictionaryData.englishWord;
        szWord.innerText = dictionaryData.targetWord;
    } 
    catch(error) {
        console.error(error)
    }
}

fetchData();