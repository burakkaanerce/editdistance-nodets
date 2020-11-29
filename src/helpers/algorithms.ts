interface EDAlgorithm {
  firstWord: string;
  secondWord: string;
  result: number;
}

export default class EditDistance implements EDAlgorithm {
  public firstWord: string;

  public secondWord: string;

  public result: number;

  constructor(firstWord: string, secondWord: string) {
    this.firstWord = firstWord || '';
    this.secondWord = secondWord || '';

    this.result = this.calculate();
  }

  calculate = (): number => {
    if (this.secondWord) {
      const distanceMatrix: number[][] = (Array(this.secondWord.length + 1) as number[])
        .fill(0)
        .map((): number[] => Array(this.firstWord.length + 1).fill(0) as number[]);

      for (let i = 0; i <= this.firstWord.length; i += 1) {
        distanceMatrix[0][i] = i;
      }
      for (let j = 0; j <= this.secondWord.length; j += 1) {
        distanceMatrix[j][0] = j;
      }
      for (let j = 1; j <= this.secondWord.length; j += 1) {
        for (let i = 1; i <= this.firstWord.length; i += 1) {
          const indicator = this.firstWord[i - 1] === this.secondWord[j - 1] ? 0 : 1;
          distanceMatrix[j][i] = Math.min(
            distanceMatrix[j][i - 1] + 1, // deletion
            distanceMatrix[j - 1][i] + 1, // insertion
            distanceMatrix[j - 1][i - 1] + indicator, // substitution
          );
        }
      }

      return distanceMatrix[this.secondWord.length][this.firstWord.length];
    }
    return -1;
  };
}
