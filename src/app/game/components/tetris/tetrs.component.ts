export class TetrisComponent implements OnInit {
  pieces: TetrisPiece[];
  board: boolean[][];
  size: { rows: number; cols: number };

  ngOnInit() {
    this.size = { rows: 20, cols: 10 };
    this.generatePieces();
    this.initBoard();
  }

  private generatePieces() {
    // Lógica para generar las piezas
  }

  private initBoard() {
    this.board = new Array(this.size.rows).fill(false).map(() => new Array(this.size.cols).fill(false));
  }
}
