import Header from "./header"
import HeroSection from "./hero-section"
import ChatSection from "./chat-section"
import PortfolioSection from "./portfolio-section"
import Footer from "./footer"
import "./main-page-mobile.css"
import "./main-page-desktop.css"

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <main className="main-content">
        <HeroSection />
        <ChatSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  )
}
