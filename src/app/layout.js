import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('portfolio-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`

export const metadata = {
  metadataBase: new URL('https://brandon-angulo.vercel.app'),
  title: "Brandon Angulo | Data Engineer & Data Scientist",
  description: "Portfolio showcasing data engineering, ELT pipelines, data science, and software projects.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Brandon Angulo | Data Engineer & Data Scientist",
    description: "Portfolio showcasing data engineering, ELT pipelines, data science, and software projects.",
    url: '/',
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Angulo | Data Engineer & Data Scientist",
    description: "Portfolio showcasing data engineering, ELT pipelines, data science, and software projects.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
