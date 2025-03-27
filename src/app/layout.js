import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}