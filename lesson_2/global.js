// Global Object

// console.log(global)

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

counter = 1
const int = setInterval(() => {
    console.log(`${counter} second(s) have elapsed...`);
    counter++;
}, 1000)

// console.log(__dirname);
// console.log(__filename);

/**
 * Below does not work. document is only available
 * in the window object in a browser. Is not in node.
 */
// console.log(document.querySelector)
