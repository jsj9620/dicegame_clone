// children: 컴포넌트의 자식들을 값으로 가짐
// 보여지기만 하는 값을 다룰 때는 어떠한 prop을 만드는 거보다는 children이 더 효과적 
import './Button.css';

function Button({ children, onClick, color = 'blue', className = ''}) { //color는 app에서 전달됨
    // onClick prop 주고, 속성까지 주기
    // className 사용해 css 적용함 (class라고 안쓰는 이유는 예약어라서)
    const classNames = `Button ${color} ${className}`; //class명 추가할 때 빈 공백 필요
    return (
    <button className={classNames} onClick={onClick}>
        {children}
    </button>
    );
}

export default Button;