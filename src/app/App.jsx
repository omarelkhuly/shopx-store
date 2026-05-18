// src/app/App.jsx
import Providers from "./providers";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import GoToTopButton from "@/ui/GoToTopButton";
import AppRoutes from "./AppRoutes";
import "../fontawesome.js";

function App() {
  return (
    <Providers>
      <Header />
      <AppRoutes />
      <Footer />
      <GoToTopButton />
    </Providers>
  )
}

export default App