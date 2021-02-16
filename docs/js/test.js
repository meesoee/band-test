
var i = 0; //인덱스 번호 정하기
var questions = document.querySelectorAll(".question");

function next() {
// 답변을 클릭하면 질문지가 가려지고 다음 질문지가 나타나는 함수

  if (questionBox = 'block') {
    let questionBox = questions[i]; //인덱스 번호 뽑아오기
    function invisible() {
      questionBox.style.opacity = '0';
    }
    function fade() {
      questionBox.style.display = 'none';
      questionBox.nextElementSibling.style.display = 'block';
    }
    function visible() {
      questionBox.nextElementSibling.style.opacity = '1';
    }
    invisible();
    setTimeout(fade,300);
    setTimeout(visible,400);
  };
  i++; //인덱스 다음으로 넘기기
  if (questions.length == i) { // i가 배열의 길이와 같아졌을때, 즉 마지막 질문에도달했을때.
    const finalStep = document.querySelector("#finalBox");
    function last() {
      finalStep.style.display = 'block';
    };
    last(); // 마지막 답변을 클릭하면 답변 박스가 나타나도록 하기.
    if (finalStep.style.display == 'block') {
      setTimeout(max,1500); //1.5초 뒤 max 함수 실행
    }
  };
};

let vocal = 0;
let lead = 0;
let second = 0;
let bass = 0;
let drum = 0;
let keyboard = 0;
// 악기별 초기값 0 부여

function countUpVocal() {
  vocal = vocal + 1;
}

function countUpLead() {
  lead = lead + 1;
}

function countUpSecond() {
  second = second + 1;
}

function countUpBass() {
  bass = bass + 1;
}

function countUpDrum() {
  drum = drum + 1;
}

function countUpKeyboard() {
  keyboard = keyboard + 1;
}
// 악기 카운트 증가 함수들
// 좀 더 간단하게 정리하는 법은 없을까?


function max() {
  let finalScore = Math.max(vocal,lead,second,bass,drum,keyboard);
  if (finalScore == vocal) {
    location.href = "result-vocal.html";
  } else if (finalScore == lead) {
    location.href = "result-lead.html";
  } else if (finalScore == second) {
    location.href = "result-second.html";
  } else if (finalScore == bass) {
    location.href = "result-bass.html";
  } else if (finalScore == drum) {
    location.href = "result-drum.html";
  } else if (finalScore == keyboard) {
    location.href = "result-keyboard.html";
  }
}

// 최댓값 비교하여 결과페이지로 이동, 같은 값이 나왔을 경우.

function current() {
  console.log("vocal :" + vocal);
  console.log("lead :" + lead);
  console.log("second :" + second);
  console.log("bass :" + bass);
  console.log("drum :" + drum);
  console.log("keyboard :" + keyboard);
}
// 현재 선택 결과값 산출용 임시 함수
