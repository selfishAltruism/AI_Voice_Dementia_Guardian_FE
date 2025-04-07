export const inferenceHeaderTitle = [
  ,
  ["1단계", "문장 따라 말하기 - 01"],
  ["1단계", "문장 따라 말하기 - 02"],
  ["1단계", "문장 따라 말하기 - 03"],
  ["2단계", "그림 설명하기 - 04"],
  ["2단계", "그림 설명하기 - 05"],
  ["1단계", "단어 말하기 - 06"],
  ["1단계", "단어 말하기 - 07"],
  ["1단계", "계산하기 - 08"],
  ["1단계", "이야기하기 - 09"],
  ["1단계", "이야기하기 - 10"],
  ["1단계", "이야기하기 - 11"],
  ["완료", "AI 음성 치매 지킴이"],
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const inferenceExample = [
  ,
  {
    type: "AUDIO",
    child: (
      <>
        들리는 문장을 잘 듣고 <br />
        따라 말해주세요.
      </>
    ),
    ref: pickRandom(["/1.MP3"]),
  },
  {
    type: "AUDIO",
    child: (
      <>
        들리는 문장을 잘 듣고 <br />
        따라 말해주세요.
      </>
    ),
    ref: pickRandom(["/2.MP3"]),
  },
  {
    type: "AUDIO",
    child: (
      <>
        들리는 문장을 잘 듣고 <br />
        따라 말해주세요.
      </>
    ),
    ref: pickRandom(["/3.MP3"]),
  },
  {
    type: "IMG",
    child: (
      <>
        그림을 보고 <br />
        이름을 말해주세요.
      </>
    ),
    ref: pickRandom([
      "/4/1.jpg",
      "/4/2.jpg",
      "/4/3.jpg",
      "/4/4.jpg",
      "/4/5.jpg",
      "/4/6.jpg",
      "/4/7.jpg",
      "/4/8.jpg",
      "/4/9.jpg",
      "/4/10.jpg",
    ]),
  },
  {
    type: "IMG",
    child: (
      <>
        그림을 보고 <br />
        이름을 말해주세요.
      </>
    ),
    ref: pickRandom([
      "/5/1.jpg",
      "/5/2.jpg",
      "/5/3.jpg",
      "/5/4.jpg",
      "/5/5.jpg",
      "/5/6.jpg",
    ]),
  },
  {
    type: "TEXT",
    child: (
      <>
        {pickRandom(["ㄱ", "ㄴ", "ㄷ", "ㅁ", "ㅂ"])} 으로 시작하는 단어를
        <br />
        최대한 많이 말해주세요.
      </>
    ),
    ref: null,
  },
  {
    type: "TEXT",
    child: (
      <>
        과일 종류를
        <br />
        최대한 많이 말해주세요.
      </>
    ),
    ref: null,
  },
  {
    type: "MATH",
    child: (
      <>
        질문의 계산 결과를
        <br />
        말해주세요.
      </>
    ),
    ref: pickRandom(["11 + 17 = ?", "13 + 15 = ?", "16 + 19 = ?"]),
  },
  {
    type: "TEXT",
    child: (
      <>
        최근 기뻤던 일을
        <br />
        들려주세요.
      </>
    ),
    ref: null,
  },
  {
    type: "TEXT",
    child: (
      <>
        최근 슬펐던 일을
        <br />
        들려주세요.
      </>
    ),
    ref: null,
  },
  {
    type: "TEXT",
    child: (
      <>
        어제 있었던 일을
        <br />
        들려주세요.
      </>
    ),
    ref: null,
  },
  {
    type: "RESULT",
    child: (
      <>
        모두 완료했습니다!
        <br />
        AI가 주신 데이터를 토대로 분석 중 입니다.
      </>
    ),
    ref: null,
  },
];
