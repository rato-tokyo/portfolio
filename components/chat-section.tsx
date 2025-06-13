"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import "./common-styles.css"
import "./chat-section-mobile.css"
import "./chat-section-desktop.css"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "こんにちは！何かお手伝いできることはありますか？" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const responses = [
        "それは興味深い質問ですね。もう少し詳しく教えていただけますか？",
        "ご質問ありがとうございます。お力になれると思います。",
        "その件については、最新の技術トレンドを踏まえると...",
        "ウェブ開発において、それは重要なポイントです。",
        "AIと開発の融合は、今後ますます重要になってくるでしょう。",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section id="chat" className="section section--gray">
      <div className="section-container">
        <h2 className="section-title">AIアシスタントと会話する</h2>

        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.role === "user" ? "chat-message--user" : "chat-message--assistant"}`}
              >
                <div className="chat-message-content">{message.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message chat-message--assistant">
                <div className="chat-message-content">
                  <div className="chat-loading">
                    <div className="chat-loading-dot"></div>
                    <div className="chat-loading-dot"></div>
                    <div className="chat-loading-dot"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-container">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="メッセージを入力..."
              className="chat-input"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <button onClick={handleSend} disabled={!input.trim() || isLoading} className="chat-send-button">
              <Send className="chat-send-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
