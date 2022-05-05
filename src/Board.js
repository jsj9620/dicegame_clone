// 상대 게임 영역 추가 -> 형태는 똑같기 때문에 board 컴포넌트
// 형태 똑같기 때문에 App과 코드 동일

import Dice from './Dice';

function Board({ name, color, gameHistory }) {
    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0); // (prevValue, currValue) => prevValue + currValue, initValue
    return (
        <div>
            <div>
                <h2>{name}</h2>
                    <Dice color={color} num={num} />
                <h2>총점</h2>
                    <p>{sum}</p>
                <h2>기록</h2>
                    <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    );
}

export default Board;