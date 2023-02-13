let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
let lastItem = secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
console.log(secretMessage.length);
secretMessage[7] = 'right';
// console.log(secretMessage);
secretMessage.splice(0,1);
// console.log(secretMessage);
secretMessage.splice(0,0,'Programming');
// console.log(secretMessage);
// secretMessage.splice
// console.log(secretMessage.indexOf('get'));
// console.log(secretMessage.indexOf('time,'));
secretMessage.splice(6,5,'know,');
// console.log(secretMessage);
console.log(secretMessage.join(' '));