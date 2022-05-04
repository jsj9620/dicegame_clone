// App 컴포넌트
// State: react가 알아서 화면을 새로 렌더링

import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) { // 주사위값 랜덤
    return Math.ceil(Math.random() * n);
}

function App() {
    // distructuring 사용 / parameter로 초기값 전달받고 배열형태로 요소 두개 return
    // 첫 요소는 state값 - 현재 변수의 값을 나타냄 / 두번째 요소는 setter 함수 - 함수를 호출할 때 parameter로 전달하는 값으로 state값이 변경됨
    const [num, setNum] = useState(1);

    const handleRollClick = () => { // 주사위 던지기
        const nextNum = random(6);
        setNum(nextNum); // 다음 숫자 랜덤
    }

    const handleClearClick = () => { // 주사위 초기화
        setNum(1);
    }
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <Dice color="red" num={num} />
        </div>
    )
}

export default App;