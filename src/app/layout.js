import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Augustine Portfolio',
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