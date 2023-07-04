function spelling (word: string): string {
    let spelledWord: string = "";

    for (let n = 0; n < word.length; n++) {
        spelledWord += word[n] + "-"; 
    }

    spelledWord = spelledWord.slice(0, spelledWord.length - 1);
    
    return spelledWord;
}

console.log(spelling("inconstitucionalissimamente"));