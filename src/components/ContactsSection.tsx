import React from "react";
import Icon from "@/components/ui/icon";

const ContactCard = ({
  name,
  role,
  phone,
  whatsapp,
}: {
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
}) => (
  <div
    className="p-6 rounded-sm border transition-all duration-300 hover:border-[hsl(345,65%,42%,0.4)]"
    style={{ borderColor: "hsl(345,12%,16%)", background: "hsl(0,0%,8%)" }}
  >
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-serif-display text-lg"
        style={{ background: "hsl(345,65%,42%,0.12)", color: "hsl(345,65%,42%)" }}
      >
        {name[0]}
      </div>
      <div>
        <h3 className="font-serif-display font-light text-lg" style={{ color: "hsl(0,20%,92%)" }}>
          {name}
        </h3>
        <p className="text-xs font-sans-light tracking-widest uppercase mb-3" style={{ color: "hsl(345,40%,55%)" }}>
          {role}
        </p>
        <div className="flex items-center gap-2">
          <Icon name="Phone" size={14} style={{ color: "hsl(345,65%,42%)" }} />
          <a
            href={`tel:${phone}`}
            className="text-sm font-sans-light transition-colors duration-300 hover:text-[hsl(345,65%,42%)]"
            style={{ color: "hsl(0,10%,60%)" }}
          >
            {phone}
          </a>
        </div>
        {whatsapp && (
          <div className="flex items-center gap-2 mt-1">
            <Icon name="MessageCircle" size={14} style={{ color: "hsl(345,65%,42%)" }} />
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              className="text-sm font-sans-light transition-colors duration-300 hover:text-[hsl(345,65%,42%)]"
              style={{ color: "hsl(0,10%,60%)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const ContactsSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "hsl(0,0%,7%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(345,65%,42%), transparent)" }} />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8" style={{ background: "hsl(345,65%,42%)" }} />
            <p className="text-xs tracking-[0.4em] uppercase font-sans-light" style={{ color: "hsl(345,65%,42%)" }}>
              контакты
            </p>
            <div className="h-px w-8" style={{ background: "hsl(345,65%,42%)" }} />
          </div>
          <h2
            className="font-serif-display font-light mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(0,20%,92%)" }}
          >
            Есть вопросы?
          </h2>
          <p className="font-sans-light text-sm leading-relaxed" style={{ color: "hsl(0,10%,55%)" }}>
            Свяжитесь с нами — будем рады ответить на все вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <ContactCard
            name="Дмитрий"
            role="Жених"
            phone="+7 (999) 123-45-67"
            whatsapp="+79991234567"
          />
          <ContactCard
            name="Александра"
            role="Невеста"
            phone="+7 (999) 765-43-21"
            whatsapp="+79997654321"
          />
        </div>

        <div
          className="p-6 rounded-sm border text-center"
          style={{ borderColor: "hsl(345,12%,16%)", background: "hsl(0,0%,8%)" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-1 font-sans-light" style={{ color: "hsl(345,40%,55%)" }}>
            Организатор свадьбы
          </p>
          <p className="font-serif-display font-light text-xl mb-1" style={{ color: "hsl(0,20%,92%)" }}>
            Мария Соколова
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={14} style={{ color: "hsl(345,65%,42%)" }} />
              <a
                href="tel:+79991112233"
                className="text-sm font-sans-light"
                style={{ color: "hsl(0,10%,60%)" }}
              >
                +7 (999) 111-22-33
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t text-center" style={{ borderColor: "hsl(345,12%,14%)" }}>
          <p
            className="font-serif-display italic font-light text-2xl mb-3"
            style={{ color: "hsl(345,65%,42%)" }}
          >
            «Любовь — это не смотреть друг на друга,
            <br />
            а смотреть вместе в одном направлении»
          </p>
          <p className="text-xs font-sans-light tracking-widest uppercase" style={{ color: "hsl(0,10%,35%)" }}>
            Антуан де Сент-Экзюпери
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12" style={{ background: "hsl(345,65%,42%,0.3)" }} />
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 0 L9.4 5.8 L15.5 8 L9.4 10.2 L8 16 L6.6 10.2 L0.5 8 L6.6 5.8 Z" fill="hsl(345,65%,42%)" fillOpacity="0.5" />
            </svg>
            <div className="h-px w-12" style={{ background: "hsl(345,65%,42%,0.3)" }} />
          </div>
          <p className="mt-4 text-xs font-sans-light tracking-[0.3em] uppercase" style={{ color: "hsl(0,10%,30%)" }}>
            23 · 07 · 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
