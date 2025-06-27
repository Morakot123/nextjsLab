import MainHeader from '@/Components/MainHeader';
import './globals.css';


export const metadata = {
  title: 'Lab02-Next.js Page Routing & Rendering',
  description: 'Learn how to use various route methods.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <div id="page">
          {children}
        </div>
      </body>
    </html>
  )
}
