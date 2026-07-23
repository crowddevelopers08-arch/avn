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
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MKSQV9HN');
            `,
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-947598506"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
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

        {/* Google Tag Manager Noscript - placed here for head, but ideally should be in body */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKSQV9HN"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}