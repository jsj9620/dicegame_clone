// App 컴포넌트
// State: react가 알아서 화면을 새로 렌더링

// 화면 표시 부분은 전부 Board 컴포넌트로 옮겨감

import { useState } from 'react';
import Button from './Button';
import Board from './Board';
import './App.css';
import logoImg from './assets/logo.png';

function random(n) { // 주사위값 랜덤
    return Math.ceil(Math.random() * n);
}

// 기록만 있으면 주사위 숫자값, 총점은 구할 수 있음 -> 리팩토링 요인
function App() {
    // distructuring 사용 / parameter로 초기값 전달받고 배열형태로 요소 두개 return
    // 첫 요소는 state값 - 현재 변수의 값을 나타냄 / 두번째 요소는 setter 함수 - 함수를 호출할 때 parameter로 전달하는 값으로 state값이 변경됨
    const [myHistory, setMyHistory] = useState([]); // 배열 사용해 주사위 기록 나타냄, 초기값은 빈 배열
    const [otherHistory, setOtherHistory] = useState([]); // 배열 사용해 주사위 기록 나타냄, 초기값은 빈 배열

    const handleRollClick = () => { // 주사위 던지기
        const nextMyNum = random(6);
        const nextOtherNum = random(6); // 상대 주사위 숫자
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => { // 주사위 초기화
        setMyHistory([]);
        setOtherHistory([]);
    };

    let myClassName = 'Board';
    let otherClassName = 'Board';
    if (myHistory[myHistory.length - 1] > otherHistory[otherHistory.length - 1]) {
        myClassName += ' Board-winner';
    } else {
        otherClassName += ' Board-winner';
    }

    return (
        <div className="App">
            <div>
                <img className="App-logo" src={logoImg} alt="logo"/>
                <h1 className="App-title">주사위게임</h1>
            </div>
            <div>
                <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
                <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div className="App-boards">
                <div>
                    <Board className={myClassName} name="나" color="blue" gameHistory={myHistory} />
                    <Board className={otherClassName} name="상대" color="red" gameHistory={otherHistory} />
                </div>
            </div>
            
        </div>
    );
}

export default App;