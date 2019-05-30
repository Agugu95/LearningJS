// 반짝반짝 작은 박쥐
const book = [
    'Twinkle, twinkle, little bat',
    'How I wonder what you\'re at',
    'Up above the wrold you fly',
    'Like a tea tray in the sky',
    'Twinkle, twinkle, little bat',
    'How I wonder what you\'re at',
];

const it = book.values(); 
console.log(it.next(), // next는 언제까지나 사용가능, undefined로 호출 
    it.next(),
    it.next(),
    it.next(),
    it.next(),
    it.next(),
    it.next(),
    it.next());