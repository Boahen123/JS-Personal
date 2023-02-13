// Global Date Object

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const date = new Date();

console.log(date);

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

const time = date.getTime();
console.log(time);

console.log(date.getFullYear());
console.log(date.getDate());

const sentence = `Today is ${days[day]} ${months[month]} ${date.getDate()}, ${date.getFullYear()}.`;

document.body.innerHTML = sentence;