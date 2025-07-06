import { PropsWithChildren } from 'react'

interface FigureProps {
  caption?: string
  figsPerRow?: number
}

export function Figure({ children, caption, figsPerRow = 1 }: PropsWithChildren<FigureProps>) {
  return (
    <figure>
      <div className={`figure per-row-${figsPerRow}`}>{children}</div>
      {caption && <figcaption><em>{caption}</em></figcaption>}
    </figure>
  )
}
