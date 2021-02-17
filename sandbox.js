
const before = new Date(`February 1 2021 8:30:50`);
const now = new Date();

// console.log(now.getTime(), before.getTime())

const diff = now.getTime() - before.getTime()
console.log(diff)

const mins = Math.round(diff/ 1000 / 60)
const hours = Math.round(mins/ 60)
const days = Math.round(hours/ 24)

console.log(mins)
console.log(hours)
console.log(days)

console.log(`the blog was written ${days} ago.`)

const timestamp = 1675938474990;
console.log(new Date(timestamp));