module.exports = class Sorigul
{
    constructor()
    {
        this.fundamentalVowels = [
            'ㅏ',
            'ㅐ',
            'ㅑ',
            'ㅒ',
            'ㅓ',
            'ㅔ',
            'ㅕ',
            'ㅖ',
            'ㅗ',
            'ㅛ',
            'ㅜ',
            'ㅠ',
            'ㅡ',
            'ㅣ'
        ];
    }

    async convert(data)
    {
        if (!data || typeof data !== 'string') return "";

        let result = "";

        for (let i = 0; i < data.length; i++)
        {
            let isFirstConsonant = false;
            isFirstConsonant = !(await this.isVowel(data[i]));
            let isSecondLetter = false;
            let isThirdConsonant = false;
            let isThridLetter = false;

            if (i + 1 < data.length) isSecondLetter = true;
            if (i + 2 < data.length)
            {
                isThirdConsonant = !(await this.isVowel(data[i + 2]));
                isThridLetter = true;
            }

            // Exception cases
            if (i < data.length - 5 && data[i] == "ㄲ" && data[i + 1] == "ㅗ" && data[i + 2] == "ㅊ" && data[i + 3] == "ㅇ" && data[i + 4] == "ㅣ" && data[i + 5] == "ㅍ")
            {
                result += `ㄲㅗㄴㄴㅣㅂ`
                i += 5;
                continue;
            }

            if (isFirstConsonant)
            {
                // Process consonants
                if (isFirstConsonant && isThirdConsonant)
                {
                    // 삯을 주세요 -> 사글 주세요
                    if (data[i] == "ㄱ" && data[i + 1] == "ㅅ")
                    {
                        data[i + 1] = `ㄱ`
                        continue;
                    }

                    if (data[i] == "ㄹ" && data[i + 1] == "ㄱ" && data[i + 2] == "ㅇ")
                    {
                        result += `ㄹㄱ`;
                        i += 2;
                        continue;
                    }
                }

                // 여전히 세번째 자음이 존재할 경우 추가 후 스킵
                if (isFirstConsonant && isThirdConsonant)
                {
                    result += data[i];
                    continue;
                }

                // 두번째 배열이 존재할 경우 실행
                if (isSecondLetter)
                {
                    // 각광 -> 각꽝
                    if (data[i] == "ㄱ" && data[i + 1] == "ㄲ")
                    {
                        result += `ㄱㄲ`;
                        i += 1;
                        continue;
                    }

                    // 각망 -> 강망
                    if (data[i] == "ㄱ" && data[i + 1] == "ㅁ")
                    {
                        result += `ㅇㅁ`;
                        i += 1;
                        continue;
                    }

                    // 각하 - 가카
                    if (data[i] == "ㄱ" && data[i + 1] == "ㅎ")
                    {
                        result += `ㅋ`;
                        i += 1;
                        continue;
                    }

                    // 군락 -> 군낙
                    if (data[i] == "ㄴ" && data[i + 1] == "ㄹ")
                    {
                        result += `ㄴㄴ`;
                        i += 1;
                        continue;
                    }

                    // 닫히다 -> 다티다
                    if (data[i] == "ㄷ" && data[i + 1] == "ㅎ")
                    {
                        result += `ㅌ`;
                        i += 1;
                        continue;
                    }

                    // 좁히다 - 조피다
                    if (data[i] == "ㅂ" && data[i + 1] == "ㅎ")
                    {
                        result += `ㅍ`;
                        i += 1;
                        continue;
                    }

                    //  훗날 -> 훈날, 깻잎 -> 깻닢
                    if (data[i] == "ㅅ" && (data[i + 1] == "ㄴ" || data[i + 1] == "ㅇ"))
                    {
                        result += `ㄴㄴ`;
                        i += 1;
                        continue;
                    }

                    // 놓고 -> 노코
                    if (data[i] == "ㅎ" && data[i + 1] == "ㄱ")
                    {
                        result += `ㅋ`;
                        i += 1;
                        continue;
                    }
                    // 놓다 -> 노타
                    if (data[i] == "ㅎ" && data[i + 1] == "ㄷ")
                    {
                        result += `ㅌ`;
                        i += 1;
                        continue;
                    }

                    // 놓지않다 -> 노치안타
                    if (data[i] == "ㅎ" && data[i + 1] == "ㅈ")
                    {
                        result += `ㅊ`;
                        i += 1;
                        continue;
                    }
                }

                // 세번째 배열이 존재할 경우 실행
                if (isThridLetter)
                {
                    // 조금이라도 쌍자음 소리가 나는 경우 다 포함함으로 아니다 싶으면 따로 받으셔서 수정해서 사용해주세요.
                    // 간장 -> 간짱, 갈바에는 -> 갈빠에는, 발바닥 -> 발빠닥, 공자야 -> 공짜야, 냇가 -> 냇까
                    if (data[i] == "ㄴ" || data[i] == "ㄹ" || data[i] == "ㅇ" || data[i] == "ㅅ" || data[i] == "ㅌ")
                    {
                        if (data[i + 1] == "ㄱ")
                        {
                            result += `${ data[i] }ㄲ`;
                            i += 1;
                            continue;
                        }
                        else if (data[i] != "ㅇ" && data[i + 1] == "ㄷ" && (data[i + 2] == "ㅗ" || data[i + 2] == "ㅛ" || data[i + 2] == "ㅜ" || data[i + 2] == "ㅠ" || data[i + 2] == "ㅡ"))
                        {
                            result += `${ data[i] }ㄸ`;
                            i += 1;
                            continue;
                        }
                        else if (data[i + 1] == "ㅂ")
                        {
                            result += `${ data[i] }ㅃ`;
                            i += 1;
                            continue;
                        }
                        else if (data[i + 1] == "ㅅ")
                        {
                            result += `${ data[i] }ㅆ`;
                            i += 1;
                            continue;
                        }
                        else if (data[i + 1] == "ㅈ")
                        {
                            result += `${ data[i] }ㅉ`;
                            i += 1;
                            continue;
                        }
                    }

                    // 담요, 가압용
                    if ((data[i] == "ㅁ" || data[i] == "ㅂ") && data[i + 1] == "ㅇ" && (data[i + 2] == "ㅛ" || data[i + 2] == "ㅠ"))
                    {
                        result += `ㅁㄴ`;
                        i += 1;
                        continue;
                    }
                    // 융융, 용용
                    if (data[i] == "ㅇ" && data[i + 1] == "ㅇ" && (data[i + 2] == "ㅛ" || data[i + 2] == "ㅠ"))
                    {
                        result += `ㅇㄴ`;
                        i += 1;
                        continue;
                    }

                    // 홑옷
                    if (data[i] == "ㅌ" && data[i + 1] == "ㅇ")
                    {
                        result += `ㄷ`;
                        i += 1;
                        continue;
                    }
                }

                // 위에 해당 되지않고 ㅇ이 아닌 자음 후에 ㅇ이 오는 모든 경우를 처리.
                // 받침을 없애는 걸 고려했으나 정확도를 높이기 위해 더블링 했습니다.
                // 특별한 경우에는 3자음이 있을 경우에서 처리하던지 Exception cases나 위에서 처리합니다.
                if (isSecondLetter)
                {
                    if (data[i] != "ㅇ" && data[i + 1] == "ㅇ")
                    {
                        result += `${ data[i] }${ data[i] }`;
                        i += 1;
                        continue;
                    }
                }
            }
            else
            {
                // Process Vowels

                if (isSecondLetter)
                {
                    // 의 -> 으이
                    if (data[i] == "ㅡ" && data[i + 1] == "ㅣ")
                    {
                        result += `ㅡㅇㅣ`
                        i += 1;
                        continue;
                    }
                    else if (data[i] == "ㅗ" && data[i + 1] == "ㅏ")
                    {
                        // 와 -> 오아
                        result += `ㅗㅇㅏ`
                        i += 1;
                        continue;
                    }
                    else if (data[i] == "ㅗ" && data[i + 1] == "ㅐ")
                    {
                        // 왜 -> 오애
                        result += `ㅗㅇㅐ`
                        i += 1;
                        continue;
                    }
                    else if (data[i] == "ㅗ" && data[i + 1] == "ㅣ")
                    {
                        // 외 -> 오에
                        result += `ㅗㅇㅔ`
                        i += 1;
                        continue;
                    }
                    else if (data[i] == "ㅜ" && data[i + 1] == "ㅓ")
                    {
                        // 워 -> 우어
                        result += `ㅜㅇㅓ`
                        i += 1;
                        continue;
                    }
                    else if (data[i] == "ㅜ" && data[i + 1] == "ㅔ")
                    {
                        // 웨 -> 우에
                        result += `ㅜㅇㅔ`
                        i += 1;
                        continue;
                    }
                    else if (data[i] == "ㅜ" && data[i + 1] == "ㅣ")
                    {
                        // 위 -> 우이
                        result += `ㅜㅇㅣ`
                        i += 1;
                        continue;
                    }
                }
            }

            // if it does meet any condition above, we just add.
            // 위의 조건에 해당하지 않는 경우에는 그냥 더합니다.
            result += data[i];
        }


        return result;
    }

    async isVowel(letter)
    {
        for (let i = 0; i < this.fundamentalVowels.length; i++)
        {
            if (letter == this.fundamentalVowels[i]) return true;
        }
        return false;
    }

}