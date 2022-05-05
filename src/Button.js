// children: 컴포넌트의 자식들을 값으로 가짐
// 보여지기만 하는 값을 다룰 때는 어떠한 prop을 만드는 거보다는 children이 더 효과적 

const baseButtonStyle = {
    padding: '14px 27px',
    borderRadius: '30px',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '17px',
};

const blueButtonStyle = {
    ...baseButtonStyle, //spread 문법 사용해 공통적인 부분 최소화
    backgroundColor: 'rgba(0, 89, 255, 0.2)',
    border: 'solid 1px #7090ff',
    color: '#7090ff',
};

const redButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: 'rgba(255, 78, 78, 0.2)',
    border: 'solid 1px #ff4664',
    color: '#ff4664',
};

function Button({ children, onClick, color }) { //color는 app에서 전달됨
    // onClick prop 주고, 속성까지 주기
    const style = color === 'red' ? redButtonStyle : blueButtonStyle;
    return (
    <button style={style} onClick={onClick}>
        {children}
    </button>
    );
}

export default Button;