import type { Metadata } from 'next'
import "./app.css"
export const metadata: Metadata = {
  title: 'Advice Generator',
  description: 'A fem project by JetBlack12',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
