import Footer from "./_lib/components/Footer/Footer";
import Header from "./_lib/components/Header/Header";

export const metadata = {
  title : 'Tenverse',
  description : 'A global tech solution provider company',
  robots : 'noindex, nofollow'
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
