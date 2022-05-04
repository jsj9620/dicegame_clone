import diceBlue01 from './assets/dice-blue-1.svg';
import diceRed01 from './assets/dice-red-1.svg';

function Dice(props) {
    const diceImg = props.color === 'red' ? diceRed01 : diceBlue01; // color props 따라서 색 지정
    return <img src={diceImg} alt="dice" />;
}

export default Dice;