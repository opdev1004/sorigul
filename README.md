# π₯ μλ¦¬κΈ - Sorigul
νκΈ λ±μ(μλͺ¨)λ₯Ό μλ¦¬λλ λλ‘μ λ±μ(μλͺ¨)λ‘ λ³νν΄μ£Όλ ν¨ν€μ§μλλ€. TTSλ₯Ό κ°λ°νκΈ° μν΄ κ°λ°ν ν¨ν€μ§μλλ€. μ°Έκ³ λ‘ μμ§ λ―Έμμ± μλλ€. μ§κ·Ήν μ  κ°μΈμ μΈ κ²¬ν΄λλ‘ λ³ννκ³  μμ΅λλ€. μμ²­μ¬ν­μ΄λ λ¬Έμμ¬ν­μ μ΄μλ‘ λ¨κ²¨μ£ΌμΈμ. νλ¦¬νμ€νΈλ λ°μ΅λλ€. λ±μλ₯Ό ν©μΉλκ±΄ [Hangul.js](https://github.com/e-/Hangul.js)λΌλ νλ₯­ν ν¨ν€μ§κ° μμ΅λλ€.

### English version:
This is a package that convert Korean Hangul to how they sound like in Hangul. I have built it for developing TTS. And it is not completed yet. This is all totally based on how i think the sound should be written in Hangul. If you have any requests or questions, please open a github issue. I also appreciate your pull requests. If you are looking for putting letters together or break Hangul to consonants and vowels, check out [Hangul.js](https://github.com/e-/Hangul.js).
## βΆοΈ μ€μΉ - Install
```
npm i sorigul
```

## π©βπ νν λ¦¬μΌ - Tutorial
```
const Sorigul = require('sorigul');

async function test()
{
    const sorigul = new Sorigul();
    // μ€λμ νλΉμ΄ λλ¬΄ λ°μμ -> μ€λλ₯Έ νμ§μΉ λλ¬΄ λ°κ°μ
    console.log(await sorigul.convert("γγγ΄γ‘γΉγγ‘γ΄ γγγγγ£γγγ£ γ΄γγγ γγγΉγ±γγγγ"));
    // νκΈ λ±μλ₯Ό μλ¦¬λλ λλ‘μ λ±μλ‘ λ³νν΄μ£Όλ ν¨ν€μ§μλλ€ -> νλ λ±μ§λ₯Ό μλ¦¬λλ λλ‘μΌμ΄ λ±μ§λ‘ λ³νΈμν΄μ£Όλ ν¨ν€μ§μλλ€
    console.log(await sorigul.convert("γγγ΄γ±γ‘γΉ γ΄γγγγγΉγ‘γΉ γγγΉγ£γ΄γγ΄γ‘γ΄ γ·γγΉγγγ‘γ£ γ΄γγγγγΉγ γγγ΄γγγγ΄γγγγγ΄γ‘γ΄ γγγγ£γγ£γγ£γγ΄γ£γ·γ"));
}
```

## πͺ μ€ν°μ - Sponsor 
[κΉν μ€ν°μ νμ΄μ§ Github sponsor page](https://github.com/sponsors/opdev1004)

## π¨βπ» λ ν¬μ£ΌμΈ - Author
[Victor Chanil Park](https://github.com/opdev1004)

## π― λΌμ΄μ μ€ - License
MIT, See [LICENSE](./LICENSE).