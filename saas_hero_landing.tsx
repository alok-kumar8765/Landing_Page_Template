import React, { useState } from 'react';
import { Moon, Sun, Palette, Globe, Menu, X, Zap, Shield, TrendingUp, Users, CheckCircle, Star, ArrowRight, Play } from 'lucide-react';

const translations = {
  en: {
    nav: { features: 'Features', pricing: 'Pricing', testimonials: 'Testimonials', contact: 'Contact' },
    hero: {
      title: 'Transform Your Business with Intelligent Automation',
      subtitle: 'Streamline operations, boost productivity, and scale faster with our cutting-edge SaaS platform trusted by 10,000+ companies worldwide.',
      cta: 'Start Free Trial',
      demo: 'Watch Demo'
    },
    stats: { companies: 'Companies', users: 'Active Users', uptime: 'Uptime', rating: 'Rating' },
    features: {
      title: 'Powerful Features Built for Growth',
      subtitle: 'Everything you need to succeed in one platform',
      items: [
        { title: 'Lightning Fast', desc: 'Optimized performance with 99.9% uptime guarantee' },
        { title: 'Enterprise Security', desc: 'Bank-level encryption and compliance certifications' },
        { title: 'Advanced Analytics', desc: 'Real-time insights and customizable dashboards' },
        { title: 'Team Collaboration', desc: 'Seamless workflows for distributed teams' }
      ]
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your needs',
      plans: [
        { name: 'Starter', price: '29', features: ['Up to 10 users', 'Basic analytics', 'Email support', '5GB storage'] },
        { name: 'Professional', price: '99', features: ['Up to 50 users', 'Advanced analytics', 'Priority support', '100GB storage', 'API access'], popular: true },
        { name: 'Enterprise', price: '299', features: ['Unlimited users', 'Custom analytics', '24/7 phone support', 'Unlimited storage', 'Dedicated manager'] }
      ],
      cta: 'Get Started'
    },
    testimonials: {
      title: 'Loved by Teams Worldwide',
      items: [
        { text: 'This platform transformed how we work. Productivity increased by 300% in the first month!', author: 'Sarah Johnson', role: 'CEO, TechStart' },
        { text: 'The best investment we made this year. ROI was evident within weeks.', author: 'Michael Chen', role: 'Director, Innovation Corp' },
        { text: 'Outstanding support and incredible features. Highly recommended!', author: 'Emily Rodriguez', role: 'Product Manager, ScaleUp' }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Join thousands of companies already growing with our platform',
      button: 'Start Your Free Trial'
    }
  },
  es: {
    nav: { features: 'Características', pricing: 'Precios', testimonials: 'Testimonios', contact: 'Contacto' },
    hero: {
      title: 'Transforma Tu Negocio con Automatización Inteligente',
      subtitle: 'Optimiza operaciones, aumenta productividad y escala más rápido con nuestra plataforma SaaS de vanguardia, confiada por más de 10,000 empresas.',
      cta: 'Iniciar Prueba Gratis',
      demo: 'Ver Demo'
    },
    stats: { companies: 'Empresas', users: 'Usuarios Activos', uptime: 'Tiempo Activo', rating: 'Calificación' },
    features: {
      title: 'Funciones Poderosas Para el Crecimiento',
      subtitle: 'Todo lo que necesitas en una plataforma',
      items: [
        { title: 'Súper Rápido', desc: 'Rendimiento optimizado con garantía del 99.9%' },
        { title: 'Seguridad Empresarial', desc: 'Cifrado de nivel bancario y certificaciones' },
        { title: 'Análisis Avanzado', desc: 'Información en tiempo real y paneles personalizables' },
        { title: 'Colaboración de Equipo', desc: 'Flujos de trabajo fluidos para equipos distribuidos' }
      ]
    },
    pricing: {
      title: 'Precios Simples y Transparentes',
      subtitle: 'Elige el plan que se ajuste a tus necesidades',
      plans: [
        { name: 'Inicial', price: '29', features: ['Hasta 10 usuarios', 'Análisis básico', 'Soporte por email', '5GB almacenamiento'] },
        { name: 'Profesional', price: '99', features: ['Hasta 50 usuarios', 'Análisis avanzado', 'Soporte prioritario', '100GB almacenamiento', 'Acceso API'], popular: true },
        { name: 'Empresarial', price: '299', features: ['Usuarios ilimitados', 'Análisis personalizado', 'Soporte 24/7', 'Almacenamiento ilimitado', 'Gerente dedicado'] }
      ],
      cta: 'Comenzar'
    },
    testimonials: {
      title: 'Amado por Equipos en Todo el Mundo',
      items: [
        { text: 'Esta plataforma transformó nuestra forma de trabajar. ¡La productividad aumentó un 300% en el primer mes!', author: 'Sarah Johnson', role: 'CEO, TechStart' },
        { text: 'La mejor inversión que hicimos este año. El ROI fue evidente en semanas.', author: 'Michael Chen', role: 'Director, Innovation Corp' },
        { text: '¡Soporte excepcional y características increíbles! Muy recomendado.', author: 'Emily Rodriguez', role: 'Gerente de Producto, ScaleUp' }
      ]
    },
    cta: {
      title: '¿Listo Para Transformar Tu Negocio?',
      subtitle: 'Únete a miles de empresas que ya crecen con nuestra plataforma',
      button: 'Inicia Tu Prueba Gratis'
    }
  },
  hi: {
    nav: { features: 'विशेषताएं', pricing: 'मूल्य निर्धारण', testimonials: 'प्रशंसापत्र', contact: 'संपर्क करें' },
    hero: {
      title: 'बुद्धिमान स्वचालन से अपने व्यवसाय को बदलें',
      subtitle: 'हमारे अत्याधुनिक SaaS प्लेटफ़ॉर्म के साथ संचालन को सुव्यवस्थित करें, उत्पादकता बढ़ाएं और तेज़ी से स्केल करें।',
      cta: 'निःशुल्क परीक्षण शुरू करें',
      demo: 'डेमो देखें'
    },
    stats: { companies: 'कंपनियां', users: 'सक्रिय उपयोगकर्ता', uptime: 'अपटाइम', rating: 'रेटिंग' },
    features: {
      title: 'विकास के लिए शक्तिशाली सुविधाएँ',
      subtitle: 'एक प्लेटफ़ॉर्म में वह सब कुछ जो आपको चाहिए',
      items: [
        { title: 'बिजली की गति', desc: '99.9% अपटाइम गारंटी के साथ अनुकूलित प्रदर्शन' },
        { title: 'एंटरप्राइज़ सुरक्षा', desc: 'बैंक-स्तरीय एन्क्रिप्शन और अनुपालन प्रमाणन' },
        { title: 'उन्नत विश्लेषण', desc: 'वास्तविक समय की जानकारी और अनुकूलन योग्य डैशबोर्ड' },
        { title: 'टीम सहयोग', desc: 'वितरित टीमों के लिए निर्बाध वर्कफ़्लो' }
      ]
    },
    pricing: {
      title: 'सरल, पारदर्शी मूल्य निर्धारण',
      subtitle: 'वह योजना चुनें जो आपकी आवश्यकताओं के अनुरूप हो',
      plans: [
        { name: 'स्टार्टर', price: '29', features: ['10 उपयोगकर्ता तक', 'बुनियादी विश्लेषण', 'ईमेल समर्थन', '5GB स्टोरेज'] },
        { name: 'प्रोफेशनल', price: '99', features: ['50 उपयोगकर्ता तक', 'उन्नत विश्लेषण', 'प्राथमिकता समर्थन', '100GB स्टोरेज', 'API एक्सेस'], popular: true },
        { name: 'एंटरप्राइज़', price: '299', features: ['असीमित उपयोगकर्ता', 'कस्टम विश्लेषण', '24/7 फ़ोन समर्थन', 'असीमित स्टोरेज', 'समर्पित प्रबंधक'] }
      ],
      cta: 'शुरू करें'
    },
    testimonials: {
      title: 'दुनिया भर की टीमों द्वारा पसंद किया गया',
      items: [
        { text: 'इस प्लेटफ़ॉर्म ने हमारे काम करने के तरीके को बदल दिया। पहले महीने में उत्पादकता 300% बढ़ गई!', author: 'सारा जॉनसन', role: 'CEO, TechStart' },
        { text: 'इस साल का सबसे अच्छा निवेश। हफ्तों में ROI स्पष्ट था।', author: 'माइकल चेन', role: 'निदेशक, Innovation Corp' },
        { text: 'उत्कृष्ट समर्थन और अविश्वसनीय सुविधाएँ। अत्यधिक अनुशंसित!', author: 'एमिली रोड्रिगेज', role: 'उत्पाद प्रबंधक, ScaleUp' }
      ]
    },
    cta: {
      title: 'अपने व्यवसाय को बदलने के लिए तैयार हैं?',
      subtitle: 'हमारे प्लेटफ़ॉर्म के साथ पहले से ही बढ़ रही हजारों कंपनियों में शामिल हों',
      button: 'अपना निःशुल्क परीक्षण शुरू करें'
    }
  }
};

export default function SaaSHeroLanding() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const themes = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      nav: 'bg-white/80 backdrop-blur-lg border-gray-200',
      card: 'bg-white border-gray-200',
      cardHover: 'hover:shadow-xl hover:border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
      accent: 'text-blue-600',
      heroBg: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
      statBg: 'bg-gradient-to-br from-blue-600 to-purple-600',
      featureBg: 'bg-gray-50'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      nav: 'bg-gray-900/80 backdrop-blur-lg border-gray-800',
      card: 'bg-gray-800 border-gray-700',
      cardHover: 'hover:shadow-2xl hover:border-blue-500',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      accent: 'text-blue-400',
      heroBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      statBg: 'bg-gradient-to-br from-blue-600 to-purple-600',
      featureBg: 'bg-gray-800'
    },
    crayon: {
      bg: 'bg-amber-50',
      text: 'text-purple-900',
      textSecondary: 'text-pink-700',
      nav: 'bg-yellow-100/80 backdrop-blur-lg border-pink-300',
      card: 'bg-white border-pink-300',
      cardHover: 'hover:shadow-2xl hover:border-purple-400 hover:rotate-1',
      button: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white',
      buttonSecondary: 'bg-yellow-200 hover:bg-yellow-300 text-purple-900',
      accent: 'text-pink-600',
      heroBg: 'bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100',
      statBg: 'bg-gradient-to-br from-pink-500 to-purple-600',
      featureBg: 'bg-gradient-to-br from-yellow-50 to-pink-50'
    }
  };

  const currentTheme = themes[theme];

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-all duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.nav} border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Zap className={`w-8 h-8 ${currentTheme.accent}`} />
              <span className="text-xl font-bold">CloudFlow</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}>{t.nav.features}</a>
              <a href="#pricing" className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}>{t.nav.pricing}</a>
              <a href="#testimonials" className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}>{t.nav.testimonials}</a>
              <a href="#contact" className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-colors`}>{t.nav.contact}</a>
            </div>

            {/* Theme & Language Switchers */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'crayon' : 'light')}
                className={`p-2 rounded-lg ${currentTheme.buttonSecondary} transition-all`}
                title="Switch theme"
              >
                {theme === 'light' ? <Sun className="w-5 h-5" /> : theme === 'dark' ? <Moon className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
              </button>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`px-3 py-2 rounded-lg ${currentTheme.buttonSecondary} transition-all`}
              >
                <option value="en">🇬🇧 EN</option>
                <option value="es">🇪🇸 ES</option>
                <option value="hi">🇮🇳 HI</option>
              </select>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${currentTheme.buttonSecondary}`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#features" className={`block py-2 ${currentTheme.textSecondary}`}>{t.nav.features}</a>
              <a href="#pricing" className={`block py-2 ${currentTheme.textSecondary}`}>{t.nav.pricing}</a>
              <a href="#testimonials" className={`block py-2 ${currentTheme.textSecondary}`}>{t.nav.testimonials}</a>
              <a href="#contact" className={`block py-2 ${currentTheme.textSecondary}`}>{t.nav.contact}</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 ${currentTheme.heroBg}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${theme === 'crayon' ? 'animate-pulse' : ''}`}>
            {t.hero.title}
          </h1>
          <p className={`text-xl md:text-2xl ${currentTheme.textSecondary} mb-8 max-w-3xl mx-auto`}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`px-8 py-4 rounded-lg font-semibold ${currentTheme.button} transition-all transform hover:scale-105 flex items-center gap-2`}>
              {t.hero.cta} <ArrowRight className="w-5 h-5" />
            </button>
            <button className={`px-8 py-4 rounded-lg font-semibold ${currentTheme.buttonSecondary} transition-all flex items-center gap-2`}>
              <Play className="w-5 h-5" /> {t.hero.demo}
            </button>
          </div>

          {/* Stats */}
          <div className={`mt-16 p-8 rounded-2xl ${currentTheme.statBg} text-white`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold">10K+</div>
                <div className="text-blue-100 mt-1">{t.stats.companies}</div>
              </div>
              <div>
                <div className="text-4xl font-bold">2M+</div>
                <div className="text-blue-100 mt-1">{t.stats.users}</div>
              </div>
              <div>
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-blue-100 mt-1">{t.stats.uptime}</div>
              </div>
              <div>
                <div className="text-4xl font-bold">4.9★</div>
                <div className="text-blue-100 mt-1">{t.stats.rating}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 px-4 ${currentTheme.featureBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
            <p className={`text-xl ${currentTheme.textSecondary}`}>{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, ...t.features.items[0] },
              { icon: Shield, ...t.features.items[1] },
              { icon: TrendingUp, ...t.features.items[2] },
              { icon: Users, ...t.features.items[3] }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border-2 ${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}
              >
                <feature.icon className={`w-12 h-12 ${currentTheme.accent} mb-4`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={currentTheme.textSecondary}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 px-4 ${currentTheme.bg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.pricing.title}</h2>
            <p className={`text-xl ${currentTheme.textSecondary}`}>{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.pricing.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border-2 ${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300 ${plan.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className={`${currentTheme.button} text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block`}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={currentTheme.textSecondary}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 ${currentTheme.accent} flex-shrink-0 mt-0.5`} />
                      <span className={currentTheme.textSecondary}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${plan.popular ? currentTheme.button : currentTheme.buttonSecondary} transition-all`}>
                  {t.pricing.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 ${currentTheme.featureBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, idx) => (
              <div key={idx} className={`p-6 rounded-xl border-2 ${currentTheme.card} ${currentTheme.cardHover} transition-all duration-300`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className={`${currentTheme.textSecondary} mb-6 italic`}>"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className={`text-sm ${currentTheme.textSecondary}`}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${currentTheme.statBg} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 mb-8">{t.cta.subtitle}</p>
          <button className={`px-12 py-4 rounded-lg font-semibold bg-white ${theme === 'crayon' ? 'text-purple-600' : 'text-blue-600'} hover:bg-gray-100 transition-all transform hover:scale-105`}>
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 ${currentTheme.bg} border-t ${currentTheme.nav}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className={`w-6 h-6 ${currentTheme.accent}`} />
            <span className="text-lg font-bold">CloudFlow</span>
          </div>
          <p className={currentTheme.textSecondary}>© 2024 CloudFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}