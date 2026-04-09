import { useEffect, useState } from 'react'

function getInitialSection(sectionIds: string[]) {
  return sectionIds[0] ?? ''
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(getInitialSection(sectionIds))

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target instanceof HTMLElement) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-42% 0px -42% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection(getInitialSection(sectionIds))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeSection
}
