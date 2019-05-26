let globalFunc; // 함수 표현식 
{
    const blockVar = 'a';
    globalFunc = () => {
        console.log(blockVar);
    };
}
globalFunc();