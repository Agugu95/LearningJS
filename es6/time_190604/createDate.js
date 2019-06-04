const moment = require('moment-timezone');

const d = new Date(Date.UTC(2019, 5, 4));

const s = moment.tz([2019, 3, 27, 9, 19], 'Asia/Seoul').toDate(); // timezone 변환

console.log(d, s);

// 날짜 형식 변환 
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toTimeString());
console.log(d.toJSON());

console.log(moment(d).format('YYYY-MM-DD')); 
console.log(moment(d).format('YYYY-MM-DD HH:mm'));
console.log(moment(d).format('YYYY-MM-DD HH:mm Z')); // 타임존 
console.log(moment(d).format('YYYY-MM-DD HH:mm [UTC]Z')); // UTC + 타임존 
console.log(moment(d).format('YYYY년-MM월-DD일'));
console.log(moment(d).format('h:mm a dddd, MMMM [the] Do, YYYY')); // 24시 주야간
// 메타 문자가 길다면 형식도 더 길게 바뀜 
// M = 1 2 3  MM = 01 02 03 MMM = Jan Feb Mar // MMMM = January February March