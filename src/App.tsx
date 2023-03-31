import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { RouterComponent } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="routes">
        <RouterComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
