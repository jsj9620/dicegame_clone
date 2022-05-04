import ReactDOM from 'react-dom/client';
import App from './App';

// root id 가져오고, render 메소드로 집어넣기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // render 메소드로 html 태그 제작

