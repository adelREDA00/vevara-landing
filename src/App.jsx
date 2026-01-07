import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import HomePage from "./pages/HomePage"
import TermsPage from "./pages/TermsPage"
import PrivacyPage from "./pages/PrivacyPage"
import SupportPage from "./pages/SupportPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
