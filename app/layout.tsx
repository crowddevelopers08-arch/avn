import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "AVN Arogya Ayurvedic Hospital",
  description:
    "AVN Arogya Ayurvedic Hospital – Say Goodbye to Pain Without Surgery.",
  generator: "Nextjs15",
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/waseev72f/avnfav.png", sizes: "16x16", type: "image/png" },
      { url: "https://ik.imagekit.io/waseev72f/avnfav.png", sizes: "32x32", type: "image/png" },
      { url: "https://ik.imagekit.io/waseev72f/avnfav.png", sizes: "48x48", type: "image/png" },
      { url: "https://ik.imagekit.io/waseev72f/avnfav.png", sizes: "192x192", type: "image/png" },
      { url: "https://ik.imagekit.io/waseev72f/avnfav.png", sizes: "512x512", type: "image/png" }, 
    ],
    apple: [
      { url: "https://ik.imagekit.io/waseev72f/avnfav.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "https://ik.imagekit.io/waseev72f/avnfav.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        {/* Google Tag Manager Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-947598506"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-947598506');
            `,
          }}
        />
        
        {/* Microsoft Clarity Script */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sytx4co2uz");
            `,
          }}
        />

        {/* Zoho Forms GCLID Script */}
        <Script
          src="https://forms.zoho.in/js/zf_gclid.js"
          strategy="afterInteractive"
        />

        {/* Zoho CRM Analytics Script */}
        <Script
          src="https://crm.zoho.in/crm/javascript/zcga.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}