/* eslint-disable @typescript-eslint/no-unused-vars */
import "./index.css"
import Modal from './components/organisms/Modal';
import Header from './components/templates/Header';
import Section from './components/templates/Section';
function App() {
  return (
    <div className="flex flex-col relative h-[100vh]">

      <Modal></Modal>
      <Header></Header>
      <Section></Section>

    </div>
  );
}
export default App;
