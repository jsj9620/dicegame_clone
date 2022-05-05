// 상대 게임 영역 추가 -> 형태는 똑같기 때문에 board 컴포넌트
// 형태 똑같기 때문에 App과 코드 동일

import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) { // 주사위값 랜덤
    return Math.ceil(Math.random() * n);
}

function Board({ name, color }) {
    // distructuring 사용 / parameter로 초기값 전달받고 배열형태로 요소 두개 return
    // 첫 요소는 state값 - 현재 변수의 값을 나타냄 / 두번째 요소는 setter 함수 - 함수를 호출할 때 parameter로 전달하는 값으로 state값이 변경됨
    const [num, setNum] = useState(1); // 주사위 초기값 1
    const [sum, setSum] = useState(0); // 점수 합계
    const [gameHistory, setGameHistory] = useState([]); // 배열 사용해 주사위 기록 나타냄, 초기값은 빈 배열

    const handleRollClick = () => { // 주사위 던지기
        const nextNum = random(6);
        setNum(nextNum); // 다음 숫자 랜덤
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
    }

    const handleClearClick = () => { // 주사위 초기화
        setNum(1);
        setSum(0);
        setGameHistory(0);
    }
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
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