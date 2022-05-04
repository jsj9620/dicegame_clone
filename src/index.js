import ReactDOM from 'react-dom/client';

// root id 가져오고, render 메소드로 집어넣기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h2>Hello</h2>
    <h2>React!</h2>
  </>
  
); // render 메소드로 html 태그 제작

