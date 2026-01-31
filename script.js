const tarotCards = [
  {
    name: "愚者",
    upright: "新しい始まり。自由な発想で一歩踏み出して。",
    reversed: "無計画さに注意。勢いだけで進まないこと。"
  },
  {
    name: "魔術師",
    upright: "才能とチャンスが揃っています。行動あるのみ。",
    reversed: "力を正しく使えていません。初心に戻って。"
  },
  {
    name: "女教皇",
    upright: "直感を信じて。答えは内側にあります。",
    reversed: "感情を抑え込みすぎています。心の声を聞いて。"
  }
];

document.getElementById("drawButton").addEventListener("click", () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  const isUpright = Math.random() > 0.5;

  document.getElementById("cardName").textContent = card.name;
  document.getElementById("cardPosition").textContent =
    isUpright ? "正位置" : "逆位置";
  document.getElementById("cardMessage").textContent =
    isUpright ? card.upright : card.reversed;

  document.getElementById("result").classList.remove("hidden");
});
