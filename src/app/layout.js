// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'Augustine Portfolio',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}