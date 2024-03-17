import React from 'react'
import PreviewTab from '../components/PreviewTab'
import { useLoaderData } from 'react-router-dom'

const Portfolio = () => {
  const { portfolio } = useLoaderData()
  console.log(portfolio)
  return (
    <>
      <h1>Portfolio</h1>
      Below is a selection of a few projects I have worked on. Source code for all these and other projects can be found
      on on my GitHub. Enjoy!
      <PreviewTab imgUri="raven-game-engine-preview" title="Raven Game Engine" route="/portfolio/raven-game-engine">
        Leading a 5-person team to build a C++ game engine from scratch.
      </PreviewTab>
      <PreviewTab
        imgUri="unity-protein-visualiser-preview"
        title="Unity Protein Visualiser"
        route="/portfolio/unity-protein-visualiser"
        justifyImgRight
      >
        Exploring the application of game technologies in research by building a protein visualiser in Unity.
      </PreviewTab>
    </>
  )
}

export default Portfolio
