import "./App.css";
import BertinaServices from "./components/BertinaServices";
import Header from "./components/Header";
import NewServices from "./components/NewServices";
import ServiceList from "./components/ServiceList";

function App() {
  return <div className="" dir="rtl">
    <Header />
    <BertinaServices />
    <NewServices />
    <ServiceList />
  </div>
}

export default App;
