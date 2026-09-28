import "./LotteryGame.css";
import { useState } from "react";

export default function LotteryGame() {
  let [lottery, setLottery] = useState({
    lotteryNumber: 0,
  });

  let [isWinner, setWinner] = useState(null);

  let checkLottery = (lotteryNumber) => {
    let sum = 0;
    while (lotteryNumber > 0) {
      let num = lotteryNumber % 10;
      sum = sum + num;
      lotteryNumber = Math.floor(lotteryNumber / 10);
    }
    return sum;
  };

  let lotteryNumber = () => {
    setWinner(null);
    setLottery(() => {
      return {
        lotteryNumber: Math.floor(Math.random() * 500 + 1),
        isFirstPlay: true,
      };
    });
  };

  return (
    <div className="LotteryGame">
      {isWinner === false && <h1>Better Luck Next Time, Play Again</h1>}

      {isWinner && <h1>Congratulation You Win, Play Again</h1>}

      {lottery.lotteryNumber == 0 ? (
        <button onClick={lotteryNumber}>Generete Lottery</button>
      ) : null}

      {lottery.lotteryNumber != 0 ? (
        <>
          <p>Your Lottery Number: {lottery.lotteryNumber}</p>
          <button
            onClick={() => {
              checkLottery(lottery.lotteryNumber) === 15
                ? setWinner((prevState) => {
                    setLottery((prevState) => {
                      return { lotteryNumber: 0, isFirstPlay: true };
                    });
                    return true;
                  })
                : setWinner(() => {
                    setLottery((prevState) => {
                      return { lotteryNumber: 0 };
                    });
                    return false;
                  });
            }}
          >
            CheckPrice
          </button>
        </>
      ) : null}
    </div>
  );
}
