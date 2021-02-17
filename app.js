const quiz = [
    {
        question: '私が好きなYoutuberをなんでしょう？',
        answer: [
            '東海オンエア',
            'カジサック',
            'ヒカル',
            'シバター'
        ],
        correct: '東海オンエア'
    }, {
        question: '13年間続けていたスポーツはどれでしょう？',
        answer: [
            'サッカー',
            '陸上',
            '卓球',
            'バトミントン'
        ],
        correct: '卓球'
    }, {
        question: '私は県外の高校に進学しました。どこでしょう？',
        answer: [
            '大阪',
            '岩手',
            '神奈川',
            '愛知'
        ],
        correct: '岩手'
    }, {
        question: '私は県外の大学に進学しました。どこでしょう？',
        answer: [
            '東京',
            '宮城',
            '福岡',
            '新潟'
        ],
        correct: '宮城'
    }, {
        question: '1番好きな食べ物をどれでしょう？',
        answer: [
            'ブラックサンダー',
            '豚肉',
            'コロッケ',
            '寿司'
        ],
        correct: 'ブラックサンダー'
    }, {
        question: 'アニメにハマったきっかけのアニメはどれでしょう？',
        answer: [
            'STEINS;GATE',
            '鬼滅の刃',
            'ワンピース',
            'コードギアス'
        ],
        correct: 'STEINS;GATE'
    }, {
        question: '最近、始めてみたいと思っていることは？',
        answer: [
            'ダンス',
            '動画編集',
            'ゴルフ',
            'フットサル'
        ],
        correct: 'ゴルフ'
    }, {
        question: '興味がある言語(ライブラリ、フレームワーク)はなんでしょう？',
        answer: [
            'PHP',
            'Vue.js',
            'React.js',
            'Laravel'
        ],
        correct: 'Vue.js'
    }, {
        question: '今欲しいものはなんでしょうか？',
        answer: [
            'ヘッドフォン',
            'シューズ',
            '服',
            '車'
        ],
        correct: 'シューズ'
    }, {
        question: '芸能人で誰がタイプでしょう？',
        answer: [
            '有村架純',
            '白石聖',
            '石原さとみ',
            'にこるん'
        ],
        correct: '白石聖'
    }
]
//問題数を取得
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//選択4つボタン要素タグを取得
//配列になっている
const $button = document.getElementsByClassName('buttonCss');
// console.log($button);

//ボタンの数を取得
const buttonLength = $button.length;
// console.log(buttonLength);

//クイズの問題文、選択肢を定義
const setQuiz = () => {
    //問題文を表示
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let i = 0;
    //選択肢を表示
    while (i < buttonLength) {
        $button[i].textContent = quiz[quizIndex].answer[i];
        i++;
    }
}

//呼び出し
setQuiz();

//結果を表示する要素を取得
const $hatei = document.getElementById('hantei');

const $reset = document.getElementById('reset');
//次ボタンの要素を取得
const $next = document.getElementById('next');
// console.log($next);

//bottonのタグを取得
const $buttonWrap = document.getElementById('buttonWrap');
// console.log($buttonWrap);

// 正誤判定を関数に定義
const clickHandler = (e) => {


    if (quiz[quizIndex].correct === e.target.textContent) {

        $hatei.textContent = '正解！！';
        $next.style.visibility = "visible";
        score++;
    } else {
        $hatei.textContent = `不正解！！正解は${quiz[quizIndex].correct}です。`;
        $next.style.visibility = "visible";

    }
};

//ボタンを無効化　定義
const disabledTure = () => {
    $button[0].setAttribute('disabled', 'ture');
    $button[1].setAttribute('disabled', 'ture');
    $button[2].setAttribute('disabled', 'ture');
    $button[3].setAttribute('disabled', 'ture');
};


//ボタンをクリックしたら、ボタンの色を変更
for (let iii = 0; iii < buttonLength; iii++) {
    $button[iii].addEventListener('click', () => {
        $button[iii].classList.add('active');
        //ボタンを無効化
        disabledTure();
    })

};

let ii = 0;
while (ii < buttonLength) {
    $button[ii].addEventListener('click', (e) => {
        clickHandler(e);
    });

    ii++
};


//背景を戻す　定義
const removeActive = () => {
    $button[0].classList.remove('active');
    $button[1].classList.remove('active');
    $button[2].classList.remove('active');
    $button[3].classList.remove('active');
};

//disabledを削除 定義
const disabled = () => {
    $button[0].removeAttribute('disabled');
    $button[1].removeAttribute('disabled');
    $button[2].removeAttribute('disabled');
    $button[3].removeAttribute('disabled');
};

const $modai = document.getElementById('mondai');
// console.log($modai);

//次ボタンをクリックしたら
$next.addEventListener('click', () => {
    //ボタンが消える
    $next.style.visibility = 'hidden';
    $hatei.textContent = '';

    //背景を戻す
    removeActive();
    //disabledを削除
    disabled();

    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数がまだあれば
        //新しい問題文、選択肢を表示
        setQuiz();
    } else {
        // なければ終了
        $modai.style.display = 'none';
        $hatei.textContent = `
        終了！！あなたの正解数は${score}/ ${quizLength}です。 
        私が今、視聴中アニメまた、来季以降視聴予定のアニメをご紹介します。`;

        $reset.href = "index.html"
        $reset.textContent = "もう一度やり直す"


        new Vue({
            el: "#app",
            data: {

            },
            mounted: function () {

                var params = {

                    filter_status: 'watching',
                    access_token: '_k7Gz_qTHGuHf6lhsfuN-elSeDVvHOgtpH-jS0_W_Lo'

                }



                const $Itmes = document.getElementById('items');
                const $title1 = document.getElementById('title1');


                //現在視聴中のアニメ情報を取得
                axios.get('https://api.annict.com/v1/me/works?', { params })
                    .then(function (res) {
                        res.data.works.forEach(element => {
                            //現在視聴中のアニメ情報

                            // console.log(element.id);
                            var id = element.id

                            var $title = element.title
                            var $siteUrl = element.official_site_url
                            var $image = element.images.recommended_url
                            var $twitterName = element.twitter_username;
                            var $twitterLink = `https://twitter.com/${$twitterName}`

                            $title1.textContent = '視聴中のアニメ';
                            $Itmes.insertAdjacentHTML('beforeend', `<div class="animeItme">
                            <a href="${$siteUrl}" class="imgLink" target="_blank" rel="noopener noreferrer"><img
                                    src="${$image}" alt="animebg"
                                    onerror="this.onerror=null;this.src='image/noimg.png'"></a>
                            <div class="animeText">
                                <p>${$title}</p>
                            </div>
                            <a href="${$twitterLink}" class="twiiterLog" target="_blank" rel="noopener noreferrer">
                                <img src="image/Twitter_Logo_Blue.svg" alt="twitterlog">
                            </a>
                        </div>`);


                            //現在視聴中アニメReviewを取得
                            axios.get(`https://api.annict.com/v1/reviews?filter_work_id=${id}&access_token=ZoCFTvbSo9SvXrMI-ZK9a52oGsKX4ThfeYyKqj6BHR4`)
                                .then(function (res) {
                                    console.log(res);
                                    // res.data.works.forEach(element => {
                                    //     console.log(element);
                                    // });
                                }.bind(this))
                                //通信エラーした場合の処理
                                .catch(function (error) {
                                    this.message = "Error" + error;
                                }.bind(this))
                                //finallyメソッドは通信に関する処理が終わったら実装される
                                .finally(function () {

                                }.bind(this))

                        });
                    }.bind(this))
                    //通信エラーした場合の処理
                    .catch(function (error) {
                        this.message = "Error" + error;
                    }.bind(this))
                    //finallyメソッドは通信に関する処理が終わったら実装される
                    .finally(function () {

                    }.bind(this));

                const $nextItems = document.getElementById('nextItems');
                const $title2 = document.getElementById('title2');
                // 自分が視聴予定のアニメ取得
                axios.get('https://api.annict.com/v1/me/works?filter_status=wanna_watch&access_token=_k7Gz_qTHGuHf6lhsfuN-elSeDVvHOgtpH-jS0_W_Lo')
                    .then(function (res) {
                        res.data.works.forEach(element => {

                            var $title = element.title
                            var $siteUrl = element.official_site_url
                            var $image = element.images.recommended_url
                            var $twitterName = element.twitter_username;
                            var $twitterLink = `https://twitter.com/${$twitterName}`
                            $title2.textContent = '来季以降視聴予定アニメ';
                            $nextItems.insertAdjacentHTML('beforeend', `<div class="animeItme">
                            <a href="${$siteUrl}" class="imgLink" target="_blank" rel="noopener noreferrer"><img
                                    src="${$image}" alt="animebg"
                                    onerror="this.onerror=null;this.src='image/noimg.png'"></a>
                            <div class="animeText">
                                <p>${$title}</p>
                                
                            </div>
                            <a href="${$twitterLink}" class="twiiterLog" target="_blank" rel="noopener noreferrer">
                                <img src="image/Twitter_Logo_Blue.svg" alt="twitterlog">
                            </a>
                        </div>`)

                        });
                    }.bind(this))
                    //通信エラーした場合の処理
                    .catch(function (error) {
                        this.message = "Error" + error;
                    }.bind(this))
                    //finallyメソッドは通信に関する処理が終わったら実装される
                    .finally(function () {

                    }.bind(this))
            }
        })


    }
});
