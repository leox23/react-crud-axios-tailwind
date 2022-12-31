import "./index.css";
import Header from "./components/templates/Header";
import Section from "./components/templates/Section";

function App() {
  return <div className="flex flex-col relative w-[100vw] h-[100vh]">
      <Header></Header>
      <Section></Section>
  </div>
}

export default App;
