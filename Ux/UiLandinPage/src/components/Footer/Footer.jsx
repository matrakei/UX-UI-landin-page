import { useState, useEffect } from "react"
import "./Footer.css"

export default function Footer() {
  const [timeLeft, setTimeLeft] = useState({
    months: 3,
    days: 5,
    hours: 52,
    minutes: 12,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        } else if (prev.months > 0) {
          return { ...prev, months: prev.months - 1, days: 30, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="countdown">
          <h2 className="countdown-title">
            APERTURA {String(timeLeft.months).padStart(2, "0")}:{String(timeLeft.days).padStart(2, "0")}:
            {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}
          </h2>
          <div className="countdown-labels">
            <span>Meses</span>
            <span>Días</span>
            <span>Horas</span>
            <span>Minutos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
