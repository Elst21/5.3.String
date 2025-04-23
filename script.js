document.getElementById('analyzeButton').addEventListener('click', function() {
    
    const text = document.getElementById('text').value;
    const word = document.getElementById('word').value;

    
    const textLength = text.length;

    
    const containsJavaScript = text.includes("JavaScript");

    
    const sentences = text.split(/(?<=[.!?])\s+/); 
    let foundSentence = '';
    for (const sentence of sentences) {
        if (sentence.includes(word)) {
            foundSentence = sentence;
            break;
        }
    }

    
    let spaceCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            spaceCount++;
        }
    }

    let result = `Длина текста: ${textLength} символов\n`;
    result += `Содержит "JavaScript": ${containsJavaScript ? "Да" : "Нет"}\n`;
    result += `Предложение с "${word}": ${foundSentence || "Не найдено"}\n`;
    result += `Количество пробелов: ${spaceCount}`;
    
    alert(result);
});