import { useState } from 'react'
import './App.css'

const portrait = '/amara-cole.png'
const services = [
  ['01', 'Brand Strategy', 'Clarify your positioning, audience, values and competitive advantage.'],
  ['02', 'Brand Positioning', 'Find the space your brand can confidently own in the market.'],
  ['03', 'Brand Messaging', 'Turn your ideas into clear language your audience understands.'],
  ['04', 'Creative Direction', 'Translate the strategy into a visual direction that feels unmistakably yours.'],
]
const projects = [
  ['MORI', 'Lifestyle / Consumer Brand', 'A lifestyle brand that needed to move from pretty to purposeful.', 'photo-1600210492486-724fe5c67fb0'],
  ['NOVA HOUSE', 'Hospitality / Experience', 'Repositioning a growing hospitality brand for a more premium audience.', 'photo-1600607687939-ce8a6c25118c'],
  ['ELORA', 'Beauty / Personal Brand', 'Building a clear identity around expertise, personality and trust.', 'photo-1608248543803-ba4f8c70ae0b'],
]
const steps = [['01','Discover','Understand the business, audience, market and current brand.'],['02','Define','Clarify positioning, personality, values and advantage.'],['03','Distill','Shape the strategy into language people understand quickly.'],['04','Direct','Set a clear creative direction for how your brand shows up.']]
const questions = [
  ['Who do you work with?', 'I partner with ambitious founders, growing teams and independent experts who are ready for a more intentional brand.'],
  ['What does a brand strategy project include?', 'Every engagement is tailored, but typically includes discovery, audience and market insight, positioning, brand foundations, messaging and a practical creative direction.'],
  ['How long does a project take?', 'Most strategy engagements take four to six weeks. We’ll agree on a clear scope and timeline together before we begin.'],
  ['Do you also handle visual identity?', 'I lead the creative direction and can bring in trusted design partners for identity execution when your project needs it.'],
  ['How do we get started?', 'Send me a note about your business and what you’re working through. We’ll set up a complimentary 30-minute conversation to see if it’s a fit.'],
]
const email = 'mailto:hello@amaracole.studio'

function handleContactSubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const name = formData.get('name')
  const senderEmail = formData.get('email')
  const message = formData.get('message')
  const subject = encodeURIComponent(`Brand inquiry from ${name}`)
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nProject details:\n${message}`)
  window.location.href = `${email}?subject=${subject}&body=${body}`
}

function App() {
  const [menu, setMenu] = useState(false)
  const [faq, setFaq] = useState(0)
  const close = () => setMenu(false)
  const handleContactClick = event => {
    const link = event.target.closest('a[href^="mailto:"]')
    if (!link) return
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const nav = <><a href="#work" onClick={close}>Work</a><a href="#services" onClick={close}>Services</a><a href="#about" onClick={close}>About</a><a href="#process" onClick={close}>Process</a><a className="nav-cta" href={`${email}?subject=Let%E2%80%99s%20talk`} onClick={close}>Let’s Talk <b>↗</b></a></>
  return <div className="site-shell" onClick={handleContactClick}>
    <header className="nav"><a className="wordmark" href="#top" onClick={close}>AMARA COLE<span>®</span></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? 'CLOSE −' : 'MENU +'}</button><nav className={menu ? 'open' : ''}>{nav}</nav></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><h1>Your brand should be <em>impossible</em> to overlook.</h1><p className="lead">I help ambitious founders turn scattered ideas into clear, confident brands that people understand, remember and want to work with.</p><div className="actions"><a className="button button-pink" href={`${email}?subject=Strategy%20call`}>Work With Me <b>↗</b></a><a className="text-link" href="#work">View My Work <b>↓</b></a></div></div><div className="hero-visual"><div className="pink-orbit"/><div className="green-disc"/><div className="portrait-frame"><img src={portrait} alt="Amara Cole, brand strategist and creative consultant"/></div><span className="image-caption">A LITTLE CLARITY CHANGES EVERYTHING <b>↗</b></span><span className="hero-index">LAGOS · WORKING EVERYWHERE</span></div></section>
      <section className="statement section-pad"><div className="statement-label"><span className="asterisk">✳</span></div><div><h2>Good branding isn’t about looking different for the sake of it. It’s about making the <em>right things</em> impossible to miss.</h2><div className="statement-bottom"><span className="small-rule"/><p>I work with businesses to clarify what they stand for, who they’re speaking to and why people should care.</p></div></div></section>
      <section id="services" className="services section-pad"><div className="section-heading"><h2>Strategy that gives your brand <em>somewhere to go.</em></h2><p>From positioning to messaging, I help you build the thinking behind a brand before worrying about how it looks.</p></div><div className="service-list">{services.map(([n,title,body],i)=><article className={`service-item service-${i+1}`} key={n}><span className="service-number">{n}</span><div><h3>{title}</h3><p>{body}</p></div><span className="service-arrow">↗</span></article>)}</div><div className="service-aside">THE FOUNDATION<br/>CHANGES EVERYTHING<div className="hand-drawn">✳</div></div></section>
      <section id="work" className="work section-pad"><div className="work-heading"><div><h2>A few brands I’ve helped <em>find their voice.</em></h2></div><a href={`${email}?subject=Show%20me%20your%20work`} className="text-link">Have a project in mind? <b>↗</b></a></div><div className="project-grid">{projects.map(([name,category,line,image],i)=><a className={`project project-${i+1}`} href={`${email}?subject=${encodeURIComponent(`Tell me about ${name}`)}`} key={name}><div className={`project-image tint-${i+1}`}><img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1100&q=85`} alt={`${name} brand project`} loading="lazy"/><span className="case-arrow">↗</span><span className="case-index">CASE STUDY 0{i+1}</span></div><div className="project-meta"><div><h3>{name}</h3><p>{line}</p></div></div></a>)}</div></section>
      <section id="process" className="process section-pad"><div className="process-top"><h2>No guesswork.<br/><em>Just a clear strategy.</em></h2></div><div className="process-flow">{steps.map(([n,title,body])=><article className="process-step" key={n}><span className="step-no">{n}</span><span className="step-star">✳</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="proof section-pad"><div className="proof-heading"><h2>Good strategy should make a difference <em>you can feel.</em></h2></div><div className="quote-grid"><article className="quote-card quote-main"><span className="quote-mark">“</span><p>Amara helped us finally explain what we actually do without making our brand sound like everyone else.</p><div className="quote-person"><span className="avatar avatar-one">T</span><span><b>Tola Adeyemi</b><small>Founder, Mori</small></span><span className="stars">★★★★★</span></div></article><article className="quote-card quote-second"><span className="quote-mark">“</span><p>The biggest change wasn’t just how our brand looked. We became much clearer about who we were speaking to.</p><div className="quote-person"><span className="avatar avatar-two">D</span><span><b>Daniel Brooks</b><small>Founder, Nova House</small></span></div></article><article className="quote-card quote-third"><span className="quote-mark">“</span><p>She challenged our thinking in exactly the right places and gave us a direction we could actually build on.</p><div className="quote-person"><span className="avatar avatar-three">S</span><span><b>Sarah Mitchell</b><small>Founder, Elora</small></span></div></article></div></section>
      <section id="about" className="about section-pad"><div className="about-photo"><div className="about-photo-inner"><img src={portrait} alt="Amara Cole in her studio" loading="lazy"/></div><span className="photo-stamp">A STRATEGIST<br/>WHO LISTENS ✳</span></div><div className="about-copy"><h2>Behind<br/>the <em>strategy.</em></h2><h3>I’m Amara — a brand strategist who likes asking the questions most people skip.</h3><p>I work closely with founders and growing businesses to uncover what makes their brand valuable, clarify their message and build a stronger foundation for growth. Thoughtful collaboration, honest conversations, no off-the-shelf answers.</p><div className="expertise"><span>Brand Strategy</span><span>Positioning</span><span>Messaging</span><span>Creative Direction</span></div><a href={`${email}?subject=Tell%20me%20more%20about%20you`} className="text-link">More About Me <b>↗</b></a></div></section>
      <section className="numbers section-pad"><div className="number-grid"><div><strong>42<span>+</span></strong><p>Brands worked with</p></div><div><strong>08</strong><p>Industries explored</p></div><div><strong>05<span> yrs</span></strong><p>Strategy experience</p></div><div><strong>17</strong><p>Brand launches</p></div></div></section>
      <section className="fit section-pad"><div className="fit-heading"><h2>You don’t need another logo.<br/>You need a <em>clearer brand.</em></h2><p>If your business has grown but your brand hasn’t caught up, let’s fix the gap.</p></div><div className="fit-list"><article><span>01</span><div><h3>Founders</h3><p>For businesses ready to move beyond an early-stage identity.</p></div></article><article><span>02</span><div><h3>Growing Brands</h3><p>For teams entering a new stage of growth and needing sharper positioning.</p></div></article><article><span>03</span><div><h3>Personal Brands</h3><p>For experts whose expertise deserves a stronger digital presence.</p></div></article><a className="button button-dark" href={`${email}?subject=Book%20a%20strategy%20call`}>Book a Strategy Call <b>↗</b></a></div></section>
      <section className="faq section-pad"><div className="faq-intro"><h2>Before we<br/><em>get into it.</em></h2><p>Something else on your mind? <a href={email}>Just ask me ↗</a></p></div><div className="faq-list">{questions.map(([q,a],i)=><article className={`faq-item ${faq===i?'active':''}`} key={q}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q}</span><b>{faq===i?'−':'+'}</b></button><div className="faq-answer"><p>{a}</p></div></article>)}</div></section>
      <section id="contact" className="final-cta"><div className="cta-decoration cta-orb"/><div className="cta-decoration cta-ring"/><div className="cta-content"><h2>Ready to make your brand <em>mean something?</em></h2><p>Let’s turn what you know into a brand people can understand, remember and choose.</p><form className="contact-form" onSubmit={handleContactSubmit}><label>Your name<input name="name" autoComplete="name" required/></label><label>Email address<input name="email" type="email" autoComplete="email" required/></label><label className="contact-message">What are you working on?<textarea name="message" rows="3" required/></label><button type="submit" className="button button-white">Send an inquiry <b>↗</b></button></form></div><span className="cta-side">MAKE IT MATTER · MAKE IT MATTER ·</span></section>
    </main>
    <footer className="footer"><div className="footer-main"><div><a className="wordmark footer-mark" href="#top">AMARA COLE<span>®</span></a><p>Brand Strategist &<br/>Creative Consultant</p><a className="footer-email" href={email}>hello@amaracole.studio ↗</a></div><div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a><a href={email}>Contact</a></div><div className="footer-links"><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://x.com" target="_blank" rel="noreferrer">X ↗</a></div></div><div className="footer-bottom"><span>© 2026 Amara Cole. All rights reserved.</span><a href="#top">BACK TO TOP ↑</a><span>MADE WITH INTENTION IN LAGOS</span></div></footer>
  </div>
}
export default App
