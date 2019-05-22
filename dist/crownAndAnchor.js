"use strict";

var funds = 50; // 시작 조건인 돈

var round = 0;

var _loop = function _loop() {
  // funds가 1보다 크거나, funds가 100보다 작을 때 동안
  round++;
  console.log("round".concat(round, ":"));
  console.log("\tstarting funds: ".concat(funds, "p")); // 돈을 겁니다

  var bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0
  };
  var totalBet = rand(1, funds);

  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    // 판돈을 나눕니다.
    var remaining = totalBet;

    do {
      var _bet = rand(1, remaining);

      var face = randFace();
      bets[face] = bets[face] + _bet;
      remaining -= _bet;
    } while (remaining > 0);
  }

  funds -= totalBet;
  console.log("\tbets:".concat(Object.keys(bets).map(function (face) {
    return "".concat(face, ": ").concat(bets[face], " pence");
  }).join(','), "(total: ").concat(totalBet, " pence)")); // 주사위다 굴립니다

  var hand = [];

  for (var i = 0; i < 3; i++) {
    hand.push(randFace());
  }

  console.log("\thnad: ".concat(hand.join(','))); // 그림을 맞췄다면 돈을 가져옵니다

  var winnings = 0;

  for (var die = 0; die < hand.length; die++) {
    var _face = hand[die];
    if (bets[_face] > 0) winnings += bet[_face];
  }

  funds += winnings;
  console.log("\twinnings: ".concat(winnings));
};

while (funds > 1 && funds < 100) {
  _loop();
}

console.log("\tending funds: ".concat(funds));

function rand(m, n) {
  // m 이상 n 이하의 무작위 정수를 반환
  return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
  // 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}