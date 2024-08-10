import React from 'react'
import PreviewItem from '../components/PreviewItem'
import { useLoaderData } from 'react-router-dom'
import { Post } from '../data/model/Post'

import '../style/portfolio.scss'

const Portfolio = () => {
  const { portfolio } = useLoaderData() as { portfolio: Post[] }
  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Below is a selection of a few projects I have worked on. Source code for all these and other projects can be
        found on on my GitHub. Enjoy!
      </p>
      <PreviewItem
        imgUri="/assets/RavenEngineEditor.png"
        title="Raven Game Engine"
        route="/portfolio/raven-game-engine"
      >
        Leading a 5-person team to build a C++ game engine from scratch.
      </PreviewItem>
      <PreviewItem
        imgUri="/assets/Ubiquitin.png"
        title="Unity Protein Visualiser"
        route="/portfolio/unity-protein-visualiser"
        justifyImgRight
      >
        Exploring the application of game technologies in research by building a protein visualiser in Unity.
      </PreviewItem>
    </>
  )
}

export default Portfolio
