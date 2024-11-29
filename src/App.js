import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Components/Layout";
import MainScreen from "./Components/MainScreen/MainScreen";
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import OurProducts from "./Components/OurProductsSection/OurProducts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/FeaturesSection" element={<FeaturesSection />} />
        <Route path="/AboutUs" element={<AboutUsSection />} />
        <Route path="/Contact" element={<ContactSection />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
