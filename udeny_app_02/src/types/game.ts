
export interface Square {
    row: number;
    col: number;
  }
  
export interface GameTurn {
    square: Square;
    player: string;
  }

  export type GameTurnList = GameTurn[];