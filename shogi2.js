
//クイズの要素
const $choices = document.getElementById('choices');
const quiz = [
    {
        answers:['①','②','③','④'],
        correct: '③',
        figure:$choices.textContent='歩',
    },
    {
        answers:['①','②','③','④'],
        correct: '②',
        figure:$choices.textContent='香',
    },
    {
        answers:['①','②','③','④'],
        correct: '④',
        figure:$choices.textContent='桂',
    }
];
let quizIndex = 0;
let quizLength = quiz.length;

/* 選択肢のボタンをHTMLから持ってきている*/
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
/* クイズの選択肢を変更する処理*/
const setupQuiz = () =>{
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

/* 問題駒の変更を定義*/
const setupFigure = () => {
    $choices.textContent = quiz[quizIndex].figure;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupFigure();

//画像の表示
document.getElementById('image2').classList.add('off');
document.getElementById('image3').classList.add('off');

/* クリックしたときの正誤処理*/
const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        quizIndex++;

    }else{
        window.alert('不正解...');
    }
    if(quizIndex < quizLength){
        setupQuiz();
        setupFigure();
        if(quizIndex == 1){
            document.getElementById('image1').classList.add('off');
            document.getElementById('image2').classList.remove('off');
            document.getElementById('image2').classList.add('on');
        }
        if(quizIndex == 2){
            document.getElementById('image2').classList.remove('on')
            document.getElementById('image2').classList.add('off');
            document.getElementById('image3').classList.remove('off');
            document.getElementById('image3').classList.add('on');
        }
    
    }else{
        window.alert('よくできました⭐️ミ');
    }
    
};

//クリックを繰り返す処理
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}