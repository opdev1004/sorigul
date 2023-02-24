const Sorigul = require('../src/index.js');

async function test()
{
    const sorigul = new Sorigul();
    // 오늘은 햇빛이 너무 밝아요 -> 오늘른 햇삧치 너무 발가요
    console.log(await sorigul.convert("ㅇㅗㄴㅡㄹㅇㅡㄴ ㅎㅐㅅㅂㅣㅊㅇㅣ ㄴㅓㅁㅜ ㅂㅏㄹㄱㅇㅏㅇㅛ"));
    // 한글 낱자를 소리나는 대로의 낱자로 변환해주는 패키지입니다 -> 한끌 낱짜를 소리나는 대로으이 낱짜로 변호안해주는 패키지입니다
    console.log(await sorigul.convert("ㅎㅏㄴㄱㅡㄹ ㄴㅏㅌㅈㅏㄹㅡㄹ ㅅㅗㄹㅣㄴㅏㄴㅡㄴ ㄷㅐㄹㅗㅇㅡㅣ ㄴㅏㅌㅈㅏㄹㅗ ㅂㅕㄴㅎㅗㅏㄴㅎㅐㅈㅜㄴㅡㄴ ㅍㅐㅋㅣㅈㅣㅇㅣㅂㄴㅣㄷㅏ"));
}

test();