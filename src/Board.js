// 상대 게임 영역 추가 -> 형태는 똑같기 때문에 board 컴포넌트
// 형태 똑같기 때문에 App과 코드 동일

import Dice from './Dice';

function Board({ name, color, num, sum, gameHistory }) {
    // distructuring 사용 / parameter로 초기값 전달받고 배열형태로 요소 두개 return
    // 첫 요소는 state값 - 현재 변수의 값을 나타냄 / 두번째 요소는 setter 함수 - 함수를 호출할 때 parameter로 전달하는 값으로 state값이 변경됨
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