"use client"

import { useState, useEffect } from "react"
import "./common-styles.css"
import "./hero-section-mobile.css"
import "./hero-section-desktop.css"

export default function HeroSection() {
  const [showSecondImage, setShowSecondImage] = useState(false)

  useEffect(() => {
    // 3秒後に2つ目の画像を表示
    const timer = setTimeout(() => {
      setShowSecondImage(true)
    }, 3000)

    // クリーンアップ関数
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="section">
      <div className="section-container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-catchphrase">
              {/* 1つ目の画像 - 常に表示 */}
              <div className="image-wrapper">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-EeUEShZ9daH7XPtCVfsKeu3axfpixs.png"
                  alt="AI時代に強いITエンジニアをお求めですか？"
                  className="hero-catchphrase-image"
                />
              </div>

              {/* 2つ目の画像 - 3秒後に表示 */}
              <div className={`second-image-wrapper ${showSecondImage ? "visible" : ""}`}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-0VaoiFnAAbJIiVfKfgtimlBtUlZHdR.png"
                  alt="坂巧智義なら戦力になれます！"
                  className="hero-catchphrase-image"
                />
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/images/engineer-portrait.png" alt="AI時代のエンジニア" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
