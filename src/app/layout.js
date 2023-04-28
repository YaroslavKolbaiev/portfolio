import './globals.css'
import 'bulma/css/bulma.css';

export const metadata = {
  title: 'Portfolio',
  description: 'web page about portfolio projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
