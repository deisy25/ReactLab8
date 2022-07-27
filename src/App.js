import Header from './components/Header';
import Main from './components/Main';
import Question from './components/Question';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Header />
          <Main />
          <Question />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;