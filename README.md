# 🥇 소리글 - Sorigul
한글 낱자(자모)를 소리나는 대로의 낱자(자모)로 변환해주는 패키지입니다. TTS를 개발하기 위해 개발한 패키지입니다. 참고로 아직 미완성 입니다. 지극히 제 개인적인 견해대로 변환하고 있습니다. 요청사항이나 문의사항은 이슈로 남겨주세요. 풀리퀘스트도 받습니다. 낱자를 합치는건 [Hangul.js](https://github.com/e-/Hangul.js)라는 훌륭한 패키지가 있습니다.

### English version:
This is a package that convert Korean Hangul to how they sound like in Hangul. I have built it for developing TTS. And it is not completed yet. This is all totally based on how i think the sound should be written in Hangul. If you have any requests or questions, please open a github issue. I also appreciate your pull requests. If you are looking for putting letters together or break Hangul to consonants and vowels, check out [Hangul.js](https://github.com/e-/Hangul.js).
## ▶️ 설치 - Install
```
npm i sorigul
```

## 👩‍🎓 튜토리얼 - Tutorial
```
const Sorigul = require('sorigul');

async function test()
{
    const sorigul = new Sorigul();
    // 오늘은 햇빛이 너무 밝아요 -> 오늘른 햇삧치 너무 발가요
    console.log(await sorigul.convert("ㅇㅗㄴㅡㄹㅇㅡㄴ ㅎㅐㅅㅂㅣㅊㅇㅣ ㄴㅓㅁㅜ ㅂㅏㄹㄱㅇㅏㅇㅛ"));
    // 한글 낱자를 소리나는 대로의 낱자로 변환해주는 패키지입니다 -> 한끌 낱짜를 소리나는 대로으이 낱짜로 변호안해주는 패키지입니다
    console.log(await sorigul.convert("ㅎㅏㄴㄱㅡㄹ ㄴㅏㅌㅈㅏㄹㅡㄹ ㅅㅗㄹㅣㄴㅏㄴㅡㄴ ㄷㅐㄹㅗㅇㅡㅣ ㄴㅏㅌㅈㅏㄹㅗ ㅂㅕㄴㅎㅗㅏㄴㅎㅐㅈㅜㄴㅡㄴ ㅍㅐㅋㅣㅈㅣㅇㅣㅂㄴㅣㄷㅏ"));
}
```

## 💪 스폰서 - Sponsor 
[깃헙 스폰서 페이지 Github sponsor page](https://github.com/sponsors/opdev1004)

## 👨‍💻 레포주인 - Author
[Victor Chanil Park](https://github.com/opdev1004)

## 💯 라이선스 - License
MIT, See [LICENSE](./LICENSE).