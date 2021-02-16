

function shareFacebook() {
    window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(window.location.href)
    );
}

function shareTwitter() {
  window.open('https://twitter.com/intent/tweet?text=나에게 맞는 밴드 악기 포지션은?&url='+encodeURIComponent(window.location.href)+'&hashtags=밴드적성검사'
  )
};

Kakao.init('04c04a7777b250cfa3a9d5d984bbfe41'); //api 키
function shareKakao() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      imageUrl:'img/ogimg.png', // ogimage경로
      imageWidth: 800,
      imageHeight: 400,
      title: '밴드 적성 검사 - 나의 결과는?',
      description: '나와 잘 맞는 악기가 무엇인지 테스트해보세요!',
      link: {
        webUrl: 'https://band-test.com'
      }
    },
    buttons: [
      {
        title: '나도 테스트하기',
        link: {
          webUrl: 'https://band-test.com'
        }
      }
    ]
  });
}

function urlCopy() {
   var urlShare = document.getElementById("urlBlank");
   urlShare.select();
   document.execCommand("copy");
   urlShare.blur();
   alert("복사되었습니다!");
}
