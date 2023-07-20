// import React from 'react'

import About from '../card/About'
import LearningList from '../list/Learning-list'
import ProjectList from '../list/Project-List'
import Achievement from '../list/achievement'

export default function Home() {
  return (
    <div>
      <About />
      <ProjectList />
      <LearningList />
      <Achievement />
    </div>
  )
}
