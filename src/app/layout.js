import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Brandon Angulo | Data Scientist & Engineer",
  description: "Portfolio showcasing data science, machine learning, and software engineering projects.",
  icons: {
    icon: '/favicon.ico',  // path to your logo image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
