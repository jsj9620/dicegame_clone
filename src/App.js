// App 컴포넌트
// State: react가 알아서 화면을 새로 렌더링

// 화면 표시 부분은 전부 Board 컴포넌트로 옮겨감

import { useState } from 'react';
import Button from './Button';
import Board from './Board';

function random(n) { // 주사위값 랜덤
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1); // 주사위 초기값 1
    const [sum, setSum] = useState(0); // 점수 합계
    const [gameHistory, setGameHistory] = useState([]); // 배열 사용해 주사위 기록 나타냄, 초기값은 빈 배열
    const [otherNum, setOtherNum] = useState(1); // 주사위 초기값 1
    const [otherSum, setOtherSum] = useState(0); // 점수 합계
    const [otherGameHistory, setOtherGameHistory] = useState([]); // 배열 사용해 주사위 기록 나타냄, 초기값은 빈 배열

    const handleRollClick = () => { // 주사위 던지기
        const nextNum = random(6);
        const nextOtherNum = random(6); // 상대 주사위 숫자
        setNum(nextNum); // 다음 숫자 랜덤
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
        setOtherNum(nextOtherNum); // 다음 숫자 랜덤
        setOtherSum(otherSum + nextOtherNum);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };

    const handleClearClick = () => { // 주사위 초기화
        setNum(1);
        setSum(0);
        setGameHistory(0);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory(0);
    };

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} />
                <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
            </div>
        </div>
    );
}

export default App;