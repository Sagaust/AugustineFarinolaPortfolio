
import '..styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, Footer } from '../components'


export const metadata = {
  title: 'Augustine Portfolio',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}