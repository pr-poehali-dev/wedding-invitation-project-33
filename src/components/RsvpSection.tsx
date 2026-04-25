import React, { useState } from "react";

type AttendStatus = "yes" | "no" | null;

export const RsvpSection = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attend, setAttend] = useState<AttendStatus>(null);
  const [wishes, setWishes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attend) return;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    background: "hsl(345,8%,18%)",
    border: "1px solid hsl(345,12%,20%)",
    borderRadius: "2px",
    color: "hsl(45,30%,92%)",
    padding: "12px 16px",
    width: "100%",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.3s",
  };

  const focusStyle = {
    borderColor: "hsl(345,65%,42%)",
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "hsl(345,10%,14%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "hsl(345,65%,42%,0.04)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "hsl(345,65%,42%,0.04)" }}
        />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
          <rect x="150" y="50" width="700" height="600" rx="2" stroke="hsl(345,65%,42%)" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
          <rect x="170" y="70" width="660" height="560" rx="2" stroke="hsl(345,65%,42%)" strokeWidth="0.3" strokeOpacity="0.05" fill="none" />
          <line x1="0" y1="350" x2="1000" y2="350" stroke="hsl(345,65%,42%)" strokeWidth="0.3" strokeOpacity="0.05" />
          <line x1="500" y1="0" x2="500" y2="700" stroke="hsl(345,65%,42%)" strokeWidth="0.3" strokeOpacity="0.05" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8" style={{ background: "hsl(345,65%,42%)" }} />
            <p className="text-xs tracking-[0.4em] uppercase font-sans-light" style={{ color: "hsl(345,65%,42%)" }}>
              подтверждение
            </p>
            <div className="h-px w-8" style={{ background: "hsl(345,65%,42%)" }} />
          </div>
          <h2
            className="font-serif-display font-light mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(0,20%,92%)" }}
          >
            RSVP
          </h2>
          <p className="font-sans-light text-sm leading-relaxed" style={{ color: "hsl(0,10%,55%)" }}>
            Пожалуйста, подтвердите своё присутствие<br />
            до <span style={{ color: "hsl(345,65%,42%)" }}>1 июня 2026 года</span>
          </p>
        </div>

        {submitted ? (
          <div
            className="text-center py-16 px-8 rounded-sm border"
            style={{ borderColor: "hsl(345,65%,42%,0.3)", background: "hsl(345,65%,42%,0.04)" }}
          >
            <div className="text-5xl mb-6">✨</div>
            <h3
              className="font-serif-display font-light text-3xl mb-4"
              style={{ color: "hsl(0,20%,92%)" }}
            >
              {attend === "yes" ? "Ждём вас!" : "Будем скучать"}
            </h3>
            <p className="font-sans-light text-sm" style={{ color: "hsl(0,10%,55%)" }}>
              {attend === "yes"
                ? "Спасибо! Ваш ответ принят. Увидимся 23 июля!"
                : "Спасибо за ответ. Будем рады видеть вас в следующий раз!"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-xs tracking-[0.2em] uppercase mb-2 font-sans-light"
                style={{ color: "hsl(345,50%,60%)" }}
              >
                Ваше имя
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, { borderColor: "hsl(345,12%,20%)" })}
                required
              />
            </div>

            <div>
              <label
                className="block text-xs tracking-[0.2em] uppercase mb-3 font-sans-light"
                style={{ color: "hsl(345,50%,60%)" }}
              >
                Вы придёте?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["yes", "no"] as AttendStatus[]).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAttend(val)}
                    className="py-3 px-6 text-sm font-sans-light tracking-widest uppercase transition-all duration-300"
                    style={{
                      border: `1px solid ${attend === val ? "hsl(345,65%,42%)" : "hsl(345,12%,20%)"}`,
                      background: attend === val ? "hsl(345,65%,42%,0.15)" : "transparent",
                      color: attend === val ? "hsl(345,65%,42%)" : "hsl(0,10%,55%)",
                      borderRadius: "2px",
                    }}
                  >
                    {val === "yes" ? "Да, приду" : "Не смогу"}
                  </button>
                ))}
              </div>
            </div>

            {attend === "yes" && (
              <div>
                <label
                  className="block text-xs tracking-[0.2em] uppercase mb-2 font-sans-light"
                  style={{ color: "hsl(345,50%,60%)" }}
                >
                  Количество гостей
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  {["1", "2", "3", "4"].map((n) => (
                    <option key={n} value={n} style={{ background: "hsl(345,8%,18%)" }}>
                      {n} {n === "1" ? "гость" : "гостя"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label
                className="block text-xs tracking-[0.2em] uppercase mb-2 font-sans-light"
                style={{ color: "hsl(345,50%,60%)" }}
              >
                Пожелания молодожёнам
              </label>
              <textarea
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                placeholder="Напишите ваши пожелания..."
                rows={3}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, { borderColor: "hsl(345,12%,20%)" })}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-sm tracking-[0.3em] uppercase font-sans-light transition-all duration-300 hover:opacity-90 active:scale-[0.99]"
              style={{
                background: "linear-gradient(135deg, hsl(345,70%,32%), hsl(345,65%,42%))",
                color: "hsl(0,0%,97%)",
                borderRadius: "2px",
                fontWeight: 500,
              }}
            >
              Отправить ответ
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;