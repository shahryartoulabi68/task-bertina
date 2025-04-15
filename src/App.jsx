import "./App.css";
import BertinaServices from "./components/BertinaServices";
import FAQSection from "./components/FAQSection";
import Header from "./components/Header";

import Navbar from "./components/Navdar";
import NewServices from "./components/NewServices";
import ServiceList from "./components/ServiceList";

function App() {
  return <div className="" dir="rtl">
    <Header />
    <Navbar />
    <BertinaServices />
    <NewServices />
    <ServiceList />
    <FAQSection />
  </div>
}

export default App;
