function factoryMovie(title) {
    return { // 외부 함수 변수 title 생성 
        getTitle: () => title,
        setTitle: (_title) => {
            if (typeof _title === 'Stirng') {
                title = _title;
            } else {
                console.log('set error');
            }
        },
    };
}
ghost = factoryMovie('Ghost in the shell');
matrix = factoryMovie('Matrix');

console.log(ghost.getTitle());
console.log(matrix.getTitle());

ghost.setTitle('1');

console.log(ghost.getTitle());
console.log(matrix.getTitle());
