// children: 컴포넌트의 자식들을 값으로 가짐
// 보여지기만 하는 값을 다룰 때는 어떠한 prop을 만드는 거보다는 children이 더 효과적 

function Button({ children }) {
    return <button>{children}</button>;
}

export default Button;