import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Blocks, Code2, Menu, MessageCircle, Newspaper, Shield, X, Zap } from 'lucide-react'
import { members, news, projects } from './content'
import './styles.css'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const links = [['О бренде', 'about'], ['Проекты', 'projects'], ['Клан', 'clan'], ['Новости', 'news']]
  return <header className="nav-wrap">
    <a className="logo" href="#top" aria-label="THUGGER"><span className="logo-slash">/</span>THUGGER<span className="logo-dot">.</span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'}>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="https://t.me/thugger_blog" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={15}/></a>
    </nav>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Меню">{open ? <X/> : <Menu/>}</button>
  </header>
}

const SectionTitle = ({eyebrow, title, side}) => <div className="section-head reveal">
  <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{side && <p>{side}</p>}
</div>

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return <div id="top">
    <Nav />
    <main>
      <section className="hero">
        <div className="grid-lines" />
        <div className="hero-orb" />
        <div className="hero-copy">
          <div className="status"><i/> THUGGER.RU В СЕТИ</div>
          <h1>СТРОИМ СВОЮ<br/><span>ЦИФРОВУЮ</span><br/>ИМПЕРИЮ.</h1>
          <p>Проекты, игры, Minecraft-клан и идеи, которые не хотят быть обычными. Добро пожаловать в пространство <b>THUGGER</b>.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">Смотреть проекты <ArrowDown size={18}/></a>
            <a className="btn ghost" href="https://t.me/thugger_blog" target="_blank" rel="noreferrer"><MessageCircle size={18}/> Наш Telegram</a>
          </div>
        </div>
        <div className="hero-side" aria-hidden="true"><div className="giant-t">T</div><div className="side-label">EST. 2026 · DIGITAL UNDERGROUND</div></div>
        <div className="scroll">ЛИСТАЙ НИЖЕ <span/></div>
      </section>

      <section id="about" className="section about">
        <SectionTitle eyebrow="01 / О БРЕНДЕ" title={<>ОДНО ИМЯ.<br/><em>МНОГО МИРОВ.</em></>} />
        <div className="about-grid reveal">
          <div className="manifesto"><p>THUGGER — это больше, чем ник. Это знак под проектами, играми, сообществами и экспериментами.</p><p>Мы создаём своё, собираем сильных людей и двигаемся без оглядки на шаблоны.</p></div>
          <div className="stats"><div><strong>500+</strong><span>УЧАСТНИКОВ КЛАНА</span></div><div><strong>∞</strong><span>ИДЕЙ В РАЗРАБОТКЕ</span></div><div><strong>01</strong><span>ОБЩАЯ ИМПЕРИЯ</span></div></div>
        </div>
        <div className="values reveal"><div><Zap/><b>СВОЙ ХАРАКТЕР</b><span>Не копируем чужое. Создаём то, что сами хотим видеть.</span></div><div><Code2/><b>ЦИФРОВЫЕ ПРОЕКТЫ</b><span>От идеи и дизайна до кода и полноценного запуска.</span></div><div><Shield/><b>СИЛЬНОЕ СООБЩЕСТВО</b><span>Люди вокруг THUGGER — главная часть всей истории.</span></div></div>
      </section>

      <section id="projects" className="section projects-section">
        <SectionTitle eyebrow="02 / ПРОЕКТЫ" title={<>ТО, ЧТО МЫ<br/><em>СОЗДАЁМ.</em></>} side="Сайты, игры, Telegram-боты и другие цифровые вещи под знаком THUGGER." />
        <div className="projects-grid">
          {projects.map((p, i) => <a className="project-card reveal" href={p.href} target={p.href !== '#' ? '_blank' : undefined} rel="noreferrer" key={p.title} style={{'--accent': p.accent}}>
            <div className="project-top"><span>0{i+1}</span><ArrowUpRight/></div><div className="project-mark">{p.mark}</div><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p><div className="project-link">ОТКРЫТЬ ПРОЕКТ <span>→</span></div>
          </a>)}
        </div>
      </section>

      <section id="clan" className="section clan-section">
        <div className="clan-banner reveal"><div className="clan-icon"><Blocks size={42}/></div><div><span className="eyebrow">03 / MINECRAFT CLAN</span><h2>THUGGER<br/><em>CLAN.</em></h2><p>Не просто играем — оставляем след. Клан для тех, кто ценит команду, характер и большие цели.</p></div><div className="clan-count"><strong>500+</strong><span>В КЛАНЕ</span></div></div>
        <div className="members">
          {members.map(m => <div className={`member reveal ${m.featured ? 'featured' : ''}`} key={m.name}><div className="avatar">{m.initial}</div><div><b>{m.name}</b><span>{m.role}</span></div>{m.featured && <Shield size={18}/>}</div>)}
        </div>
      </section>

      <section id="news" className="section news-section">
        <SectionTitle eyebrow="04 / БЛОГ И НОВОСТИ" title={<>ПОСЛЕДНЕЕ<br/><em>ИЗ ПОДПОЛЬЯ.</em></>} side="Обновления проектов, события клана и мысли без лишней цензуры." />
        <div className="news-list">
          {news.map((n, i) => <article className="news-item reveal" key={n.title}><span className="news-number">0{i+1}</span><div className="news-meta"><b>{n.date}</b><span>{n.tag}</span></div><div><h3>{n.title}</h3><p>{n.text}</p></div><ArrowUpRight/></article>)}
        </div>
        <a className="btn ghost all-news" href="https://t.me/thugger_blog" target="_blank" rel="noreferrer"><Newspaper size={18}/> Все новости в Telegram</a>
      </section>

      <section className="cta-section"><div className="cta-noise"/><span className="eyebrow">THUGGER COMMUNITY</span><h2>БУДЬ ВНУТРИ.<br/><em>НЕ НАБЛЮДАЙ.</em></h2><p>Новости, ранние показы проектов и жизнь сообщества — в нашем Telegram.</p><a className="btn light" href="https://t.me/thugger_blog" target="_blank" rel="noreferrer"><MessageCircle/> Вступить в Telegram <ArrowUpRight/></a></section>
    </main>
    <footer><a className="logo" href="#top"><span className="logo-slash">/</span>THUGGER<span className="logo-dot">.</span></a><p>© 2026 THUGGER. СОЗДАНО С ХАРАКТЕРОМ.</p><div><a href="https://t.me/thugger_blog">TELEGRAM</a><a href="https://github.com/trgrnw">GITHUB</a></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
