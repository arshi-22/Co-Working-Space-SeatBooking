import { Header } from "./components/header/Header";
import { Home } from "./page/seatbookingHome/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="home">
        <Home />
      </div>
    </>
  );
}

export default App;
