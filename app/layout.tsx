import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>CONCEPTO-23 | IEEE SRMIST Student Branch</title>
        <meta name="description" content="Join us at CONCEPTO-23, an annual event by IEEE SRMIST, your gateway to innovation and learning." />
        <meta name="keywords" content="CONCEPTO, IEEE SRMIST, innovation, learning, annual event" />

        <meta name="author" content="Akash Sasikumar" />

        <meta property="og:title" content="CONCEPTO-23 | IEEE SRMIST Student Branch" />
        <meta property="og:description" content="Join us at CONCEPTO-23, an annual event by IEEE SRMIST, your gateway to innovation and learning." />
        <meta property="og:image" content="/Assets/Miscellaneous/ogImage.png" />
        <meta property="og:url" content="https://www.ieeesrmist.com" />

        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "CONCEPTO-23",
              "startDate": "2023-10-18T09:00",
              "endDate": "2023-10-19T17:00",
              "description": "Join us at CONCEPTO-23, an annual event by IEEE SRMIST, your gateway to innovation and learning.",
              "location": {
                "@type": "Place",
                "name": "SRM Institute of Science and Technology Kattankulathur, Tech Park, TP-501/502",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kattankulathur, Tech Park, TP-501/502",
                  "addressLocality": "Chennai",
                  "addressRegion": "TN",
                  "postalCode": "603203",
                  "addressCountry": "India"
                }
              },
              "image": "/Assets/Miscellaneous/ogImage.png",
              "url": "https://www.ieeesrmist.com"
            }
          `}
        </script>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
