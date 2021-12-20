import React from "react"

//자식
function Square(props){

 
  
      return (
          //Square를 클릭하면 Board에서 넘겨받은 onClick 함수 호출
        <button 
            className="square" 
            onClick={props.onClick}
        >
          {props.value}
        </button>
      );
    
  }
  
  //부모 
  class Board extends React.Component {

    //stat를 부모 컴포넌트로 끌어올리는 것은 React 컴포넌트를 리펙토링 할 때 흔히 사용
    constructor(props) {
        super(props)
        this.state = {
            squares : Array(9).fill(null),
            xIsNexft : true,
        };
    }

    handleClick(i) {
        // slice()을 사용하는 이유는 기존 배열을 수정하지 않고 squares 배열읠 복사본을 생성하여 수정
        // 배열의 사본을 변경 함으로서 이전 상태로 돌아갈 수 있디
        const squares = this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]){
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
    }

    //각 판의 숫자
    renderSquare(i) {
      return (
      <Square 
        value = {this.state.squares[i]}
        onClick = {()=> this.handleClick(i)}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner: ' + winner;
      }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // ========================================
export default Game;