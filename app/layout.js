import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'DevBeacon - Developer Community',
  description: 'A community platform for developers to share knowledge and connect',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}