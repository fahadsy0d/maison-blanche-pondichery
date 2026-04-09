import { HashRouter, Route, Routes } from 'react-router-dom'

import { SiteShell } from '@/components/layout/site-shell'
import { AboutPage } from '@/pages/about-page'
import { ContactPage } from '@/pages/contact-page'
import { ExperiencePage } from '@/pages/experience-page'
import { HomePage } from '@/pages/home-page'
import { RoomsPage } from '@/pages/rooms-page'

function App() {
  return (
    <HashRouter>
      <SiteShell>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<RoomsPage />} path="/rooms" />
          <Route element={<ExperiencePage />} path="/experience" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
      </SiteShell>
    </HashRouter>
  )
}

export default App
