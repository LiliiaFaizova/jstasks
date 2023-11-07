/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
function theWorld(ms) {
    const startTime = new Date().getTime();
    currTime = new Date().getTime();
    while (currTime - startTime < ms) {
        currTime = new Date().getTime();
        const time = (startTime + ms - currTime) / 1000;
        console.log('Time will continue running in ' + time.toFixed(2));
    }
}

theWorld(5000);