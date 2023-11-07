/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text - текст, проверяемый на спам
 * @param {String[]} keywords - массив ключевых слов
 * @returns {Boolean}
 */
function isSpam(text, keywords) {
    let isSpam = false;
    for (const keyword of keywords) {
        if (text.includes(keyword)) {
            isSpam = true;
        }
    }
    return isSpam;
}