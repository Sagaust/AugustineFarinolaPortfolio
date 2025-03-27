import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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