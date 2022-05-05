// App 컴포넌트
// State: react가 알아서 화면을 새로 렌더링

// 화면 표시 부분은 전부 Board 컴포넌트로 옮겨감

import Board from './Board';

function App() {
    return (
        <div>
            <Board name = "나" color = "blue"/>
            <Board name = "상대" color = "red"/>
        </div>
    );
}

export default App;