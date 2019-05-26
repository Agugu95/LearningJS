let funds = 50; // 시작 조건
let round = 0;

while (funds > 1 && funds < 100) { // funds가 1보다 크거나, funds가 100보다 작을 때 동안
    round++;
    console.log(`round${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    // 돈을 겁니다
    const bets = {
        crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0,
    };
    let totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // 판돈을 나눕니다.
        let remaining = totalBet;
        do {
            const bet = rand(1, remaining);
            const face = randFace();
            bets[face] = bets[face] + bet;
            remaining -= bet;
        } while (remaining > 0);
    }
    funds -= totalBet;
    console.log(`\tbets:${
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(',')
    }(total: ${totalBet} pence)`);

    // 주사위다 굴립니다
    const hand = [];
    for (let i = 0; i < 3; i++) {
        hand.push(randFace());
    }
    console.log(`\thnad: ${hand.join(',')}`);

    // 그림을 맞췄다면 돈을 가져옵니다
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        const face = hand[die];
        if (bets[face] > 0) winnings += bets[face];
    }
    funds += winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

function rand(m, n) { // m 이상 n 이하의 무작위 정수를 반환
    return m + Math.floor((n - m + 1) * Math.random());
}
function randFace() { // 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환
    return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond']
        [rand(0, 5)];
}
