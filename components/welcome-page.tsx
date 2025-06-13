import "./welcome-page-mobile.css"
import "./welcome-page-desktop.css"

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="welcome-title">ようこそ！</h1>
        <p className="welcome-subtitle">日本初の、AIアシスタント付きポートフォリオサイトです！</p>
      </div>
    </div>
  )
}
