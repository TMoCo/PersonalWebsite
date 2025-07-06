interface YouTubeEmbedProps {
  src: string
  title: string
}

export function YouTubeEmbed({ src, title }: YouTubeEmbedProps) {
  return (
    <div className="youtube-embed">
      <iframe src={src} title={title} />
    </div>
  )
}
