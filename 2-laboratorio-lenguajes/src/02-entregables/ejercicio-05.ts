console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  private coin: number;

  constructor() {
    this.coin = 0;
  }

  public play() {
    this.incrementCoin();
    const [roll1, roll2, roll3] = [
      this.randomRoll(),
      this.randomRoll(),
      this.randomRoll(),
    ];

    const allRollsTrue = roll1 && roll2 && roll3;

    if (allRollsTrue) {
      this.winMessage();
      this.coin = 0;
    } else {
      this.loseMessage();
    }
  }

  private randomRoll(): boolean {
    return Math.ceil(Math.random() * 10) <= 5;
  }

  private winMessage() {
    console.log(`"Congratulations!!!. You won ${this.coin} coins!!"`);
  }

  private loseMessage() {
    console.log("Good luck next time!!");
  }

  private incrementCoin() {
    this.coin++;
  }
}

const machine1 = new SlothMachine();

machine1.play();
machine1.play();
