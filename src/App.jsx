import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import ActScene from './components/ActScene.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { acts } from './data/content.js'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        {acts.map((act, i) => (
          <ActScene key={act.id} act={act} index={i} />
        ))}
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
