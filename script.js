// =====================================================
// 롤링페이퍼 전체 내용
// =====================================================

const messages = [

  // =========================
  // 여학생
  // =========================

  {
    number: 1,
    name: "강보민",
    message: "",
    pending: true
  },

  {
    number: 2,
    name: "김다영",
    message:
      "선생님 생신축하드려요 사랑해요 우유빛 슬기쌤!! ♡♡♡♡♡♡♡♡"
  },

  {
    number: 3,
    name: "김라임",
    message:
      "평소에 크고작은 문제들 때문에 스트레스가 많으실텐데 항상 노력해 주시는 모습이 보기좋아요. 2학기도 잘 부탁드립니다 생신축하드려요!"
  },

  {
    number: 4,
    name: "김시은",
    message:
      "선생님 사랑해요 항상 저희반을 챙겨주셔서 감사합니다! 도덕 너무 재미있어요~!"
  },

  {
    number: 5,
    name: "김연재",
    message:
      "선생님 생신축하드려요 사랑해요♡♡♡ 내가짱♡"
  },

  {
    number: 6,
    name: "김태린",
    message:
      "선생님 생신축하드려요! 항상 저희반을 잘 챙겨주시고 따뜻하게 대해 주셔서 감사합니다 담임선생님 덕분에 도덕이 최애과목 됐어요!! ♡♡"
  },

  {
  number: 7,
  name: "문서윤",
  message:
    `선생님, 생신 진심으로 축하드려요!

항상 저희 반을 위해 신경 써주시고, 사소한 일까지 하나하나 챙겨주셔서 정말 감사해요. 저희가 가끔 말도 안 듣고 장난도 많이 쳐서 힘드실 때가 있으실 텐데도 늘 저희를 이해해 주시고 끝까지 잘 이끌어 주시는 모습이 정말 감사하게 느껴져요.

그리고 선생님 덕분에 도덕 시간이 단순히 수업을 듣는 시간이 아니라, 생각도 많이 해보고 친구들이랑 웃을 수 있는 즐거운 시간이 된 것 같아요. 수업 중에 해주시는 말씀이나 조언들도 나중에 오래 기억에 남을 것 같아요.

선생님이 저희 반 담임선생님이셔서 정말 다행이고, 남은 시간도 지금처럼 좋은 추억 많이 만들었으면 좋겠어요. 늘 저희를 위해 애써주시는 만큼 선생님께도 행복한 일들이 가득했으면 좋겠습니다.

다시 한 번 생신 진심으로 축하드려요! 항상 건강하시고 행복하세요. 선생님 사랑해요 ♡`
},

  {
    number: 8,
    name: "박세은",
    message:
      "저좀 착해진거같아요 그쵸 쌤 이뻐요 생신축하해요"
  },

  {
    number: 9,
    name: "박소윤",
    message: "",
    pending: true
  },

  {
    number: 10,
    name: "박아영",
    message:
      "생신축하드려요! 저희반을 위해 항상 노력하시는 모습이 멋져요! 쌤 덕분에 도덕이 더 재미있어진 것 같아요!"
  },

  {
    number: 11,
    name: "배수민",
    message:
      "선생님 생신축하드립니다. 저희가 모자라지만 항상 열심히 가르쳐주셔서 감사합니다. 앞으로도 행복하시고 다시한번 생신축하드립니다. 사랑합니다♡"
  },

  {
    number: 12,
    name: "이서영",
    message:
      "선생님 생신 축하드려요 항상 저희반을 위해 노력해주시고 따뜻하고 즐겁게 해주셔서 감사합니다♡"
  },

  {
    number: 13,
    name: "장예서",
    message:
      "선생님, 생신축하드립니다! 선생님과 지낸 시간들은 너무 즐겁고 행복했어요. 항상 저희를 위해 노력 해 주시고 즐겁게 해 주셔서 감사합니다, 사랑해요♡"
  },

  {
    number: 14,
    name: "최지윤",
    message:
      "선생님 생신축하드려요!! 항상 저희반을 이끌어주셔서 감사해요♡ 선생님 사랑합니다 남은 2학기도 잘 부탁드려요"
  },

  {
    number: 15,
    name: "홍예승",
    message:
      "안녕하시오!! 홍예승입니당 쌤 생신축하드려요!! 저희반 담임쌤이어서 좋아요 쌤 사랑해여~"
  },


  // =========================
  // 남학생
  // =========================

  {
    number: 16,
    name: "공현성",
    message:
      "선생님 저희반에 말을 잘 안듣는 애들도 많은데 끝가지 침착하게 해결해주셔서 감사합니다 그리고 수업도 재미있게 해주셔서 감사합니다"
  },

  {
    number: 17,
    name: "김민석",
    message:
      "선생님 생신 축하 드립니다"
  },

  {
    number: 18,
    name: "김부겸",
    message: "",
    pending: true
  },

  {
    number: 19,
    name: "김수윤",
    message:
      "선생님 생신 축하드리고 항상 감사합니다"
  },

  {
    number: 20,
    name: "김지오",
    message:
      "감사해요"
  },

  {
    number: 21,
    name: "문상혁",
    message: "",
    pending: true
  },

  {
    number: 22,
    name: "문준혁",

    message:
`선생님, 생신 진심으로 축하드려요!

항상 친절하게 설명해 주시고, 저희가 잘 이해할 수 있도록 하나하나 알려주셔서 감사해요. 처음에는 어렵게 느껴졌던 내용도 선생님께서 쉽게 설명해 주셔서 수업을 들으면서 조금씩 이해할 수 있었던 것 같아요.

수업할 때 저희가 장난을 치거나 말을 잘 듣지 않을 때도 있으실 텐데, 항상 이해해 주시고 웃으면서 대해주셔서 감사해요. 선생님께 수업을 배울 수 있어서 좋았고, 앞으로도 선생님께서 가르쳐 주신 것들을 잘 기억하도록 노력할게요.

선생님께서 항상 건강하시고 행복하셨으면 좋겠어요. 앞으로도 힘든 일이나 걱정 없이 즐겁고 행복한 날들이 많으셨으면 좋겠습니다.

다시 한 번 생신 진심으로 축하드려요!`
  },

  {
    number: 23,
    name: "박승현",
    message:
      "선생님 생신 축하드립니다"
  },

  {
    number: 24,
    name: "박준우",
    message: "",
    pending: true
  },

  {
    number: 25,
    name: "송유찬",
    message: "",
    pending: true
  },

  {
    number: 26,
    name: "이도율",
    message:
      "생신축하 드립.니.다."
  },

  {
    number: 27,
    name: "이윤후",
    message: "",
    pending: true
  },

  {
    number: 28,
    name: "정민형",
    message:
      "선생님 생신 정말 축하드립니다 선생님 덕분에 정말 많이 성장했습니다."
  },

  {
    number: 29,
    name: "정인서",
    message: "",
    pending: true
  }

];


// =====================================================
// HTML 요소
// =====================================================

const intro =
  document.getElementById("intro");

const closedBook =
  document.getElementById("closedBook");

const reader =
  document.getElementById("reader");

const leftPage =
  document.getElementById("leftPage");

const rightPage =
  document.getElementById("rightPage");

const flipPage =
  document.getElementById("flipPage");

const flipFront =
  document.getElementById("flipFront");

const flipBack =
  document.getElementById("flipBack");

const prevBtn =
  document.getElementById("prevBtn");

const nextBtn =
  document.getElementById("nextBtn");

const pageNumber =
  document.getElementById("pageNumber");


// =====================================================
// X / 보류 학생 제외 + 번호순 정렬
// =====================================================

const activeMessages = messages

  .filter(student =>
    !student.pending &&
    student.message.trim() !== ""
  )

  .sort(
    (a, b) =>
      a.number - b.number
  );


// =====================================================
// HTML 특수문자 처리
// =====================================================

function escapeHTML(text) {

  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

}


// =====================================================
// 긴 편지 자동 분할
// =====================================================

function splitLongMessage(text, maxLength = 230) {

  // 원래 문단 유지
  const paragraphs =
    text
      .split(/\n+/)
      .map(p => p.trim())
      .filter(Boolean);


  const pieces = [];

  let current = "";


  paragraphs.forEach(paragraph => {

    // 현재 내용 + 새 문단이 적당하면 그대로 합침
    if (
      (current.length + paragraph.length + 2)
      <= maxLength
    ) {

      current +=
        (current ? "\n\n" : "") +
        paragraph;

      return;
    }


    // 기존 내용 먼저 저장
    if (current) {

      pieces.push(current);

      current = "";

    }


    // 문단 자체가 너무 길면 문장 단위로 쪼개기
    if (paragraph.length > maxLength) {

      const sentences =
        paragraph.match(/[^.!?]+[.!?]+|[^.!?]+$/g)
        || [paragraph];


      sentences.forEach(sentence => {

        sentence =
          sentence.trim();


        if (
          current.length +
          sentence.length +
          1
          <= maxLength
        ) {

          current +=
            (current ? " " : "") +
            sentence;

        } else {

          if (current) {
            pieces.push(current);
          }

          current = sentence;

        }

      });

    } else {

      current = paragraph;

    }

  });


  if (current) {
    pieces.push(current);
  }


  return pieces;

}


// =====================================================
// 모든 학생을 "페이지" 단위로 변환
// 긴 글은 여러 페이지가 됨
// =====================================================

const individualPages = [];


activeMessages.forEach(student => {

  const parts =
    splitLongMessage(
      student.message
    );


  parts.forEach(
    (part, index) => {

      individualPages.push({

        number:
          student.number,

        name:
          student.name,

        message:
          part,

        part:
          index + 1,

        totalParts:
          parts.length

      });

    }
  );

});


// =====================================================
// 글 길이에 따라 class 설정
// =====================================================

function getLengthClass(text) {

  if (text.length <= 35) {
    return "very-short";
  }

  if (text.length <= 65) {
    return "short";
  }

  if (text.length >= 190) {
    return "long";
  }

  return "medium";

}


// =====================================================
// 학생 편지 HTML
// =====================================================

function makeMessagePage(data) {

  const lengthClass =
    getLengthClass(
      data.message
    );


  const safeMessage =
    escapeHTML(
      data.message
    )
      .replaceAll(
        "\n",
        "<br>"
      );


  const continuation =
    data.totalParts > 1
      ? ` <span class="part-number">${data.part}/${data.totalParts}</span>`
      : "";


  return `

    <div
      class="
        message-sheet
        ${lengthClass}
      "
    >

      <p class="message">
        ${safeMessage}
      </p>


      <div class="student-name">
        ${data.name}${continuation}
      </div>

    </div>

  `;

}


// =====================================================
// 양쪽 페이지씩 책에 배치
// =====================================================

const spreads = [];


for (
  let i = 0;
  i < individualPages.length;
  i += 2
) {

  const left =
    individualPages[i];


  const right =
    individualPages[i + 1];


  spreads.push({

    left:
      makeMessagePage(left),

    right:
      right
        ? makeMessagePage(right)
        : `
            <div class="finish-page">
              <p>♡</p>
            </div>
          `

  });

}


// =====================================================
// 마지막 장
// =====================================================

spreads.push({

  left: `

    <div class="finish-page">

      <p>
        선생님<br>
        생신 축하드려요 ♡
      </p>

    </div>

  `,


  right: `

    <div class="finish-page">

      <div class="teacher-photo">

        <img
          src="images/선생님일러.png"
          alt="선생님 일러스트"
        >


        <div class="photo-text">
          Happy Birthday ♡
        </div>

      </div>

    </div>

  `

});


// =====================================================
// 현재 페이지
// =====================================================

let currentSpread = 0;

let turning = false;


// =====================================================
// 페이지 표시
// =====================================================

function renderSpread() {

  leftPage.innerHTML =
    spreads[currentSpread].left;


  rightPage.innerHTML =
    spreads[currentSpread].right;


  pageNumber.textContent =
    `${currentSpread + 1} / ${spreads.length}`;


  prevBtn.style.opacity =
    currentSpread === 0
      ? "0.22"
      : "1";


  nextBtn.style.opacity =
    currentSpread ===
    spreads.length - 1
      ? "0.22"
      : "1";

}


// =====================================================
// 다음 장
// =====================================================

function nextPage() {

  if (turning) {
    return;
  }


  if (
    currentSpread >=
    spreads.length - 1
  ) {
    return;
  }


  turning = true;


  const next =
    currentSpread + 1;


  flipFront.innerHTML =
    spreads[currentSpread].right;


  flipBack.innerHTML =
    spreads[next].left;


  rightPage.innerHTML =
    spreads[next].right;


  flipPage.className =
    "active";


  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      flipPage.classList.add(
        "turn-next"
      );

    });

  });


  setTimeout(() => {

    leftPage.innerHTML =
      spreads[next].left;

  }, 550);


  setTimeout(() => {

    currentSpread =
      next;


    flipPage.className = "";

    flipFront.innerHTML = "";

    flipBack.innerHTML = "";


    renderSpread();


    turning = false;

  }, 1130);

}


// =====================================================
// 이전 장
// =====================================================

function previousPage() {

  if (turning) {
    return;
  }


  if (
    currentSpread <= 0
  ) {
    return;
  }


  turning = true;


  const previous =
    currentSpread - 1;


  flipFront.innerHTML =
    spreads[currentSpread].left;


  flipBack.innerHTML =
    spreads[previous].right;


  leftPage.innerHTML =
    spreads[previous].left;


  flipPage.className =
    "active previous-mode";


  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      flipPage.classList.add(
        "turn-prev"
      );

    });

  });


  setTimeout(() => {

    rightPage.innerHTML =
      spreads[previous].right;

  }, 550);


  setTimeout(() => {

    currentSpread =
      previous;


    flipPage.className = "";

    flipFront.innerHTML = "";

    flipBack.innerHTML = "";


    renderSpread();


    turning = false;

  }, 1130);

}


// =====================================================
// 닫힌 책 클릭
// =====================================================

closedBook.addEventListener(
  "click",
  () => {

    intro.classList.add(
      "opening"
    );


    setTimeout(() => {

      intro.classList.add(
        "fade-out"
      );

    }, 480);


    setTimeout(() => {

      intro.style.display =
        "none";


      reader.classList.remove(
        "hidden"
      );


      renderSpread();

    }, 880);

  }
);


// =====================================================
// 버튼
// =====================================================

nextBtn.addEventListener(
  "click",
  nextPage
);


prevBtn.addEventListener(
  "click",
  previousPage
);


// 책 자체 클릭

rightPage.addEventListener(
  "click",
  nextPage
);


leftPage.addEventListener(
  "click",
  previousPage
);


// =====================================================
// 키보드 화살표
// =====================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      reader.classList.contains(
        "hidden"
      )
    ) {
      return;
    }


    if (
      event.key ===
      "ArrowRight"
    ) {

      nextPage();

    }


    if (
      event.key ===
      "ArrowLeft"
    ) {

      previousPage();

    }

  }
);


// =====================================================
// 태블릿 스와이프
// =====================================================

let touchStartX = 0;


reader.addEventListener(
  "touchstart",
  event => {

    touchStartX =
      event.changedTouches[0]
        .screenX;

  }
);


reader.addEventListener(
  "touchend",
  event => {

    const touchEndX =
      event.changedTouches[0]
        .screenX;


    const distance =
      touchStartX -
      touchEndX;


    if (distance > 55) {

      nextPage();

    }


    if (distance < -55) {

      previousPage();

    }

  }
);
