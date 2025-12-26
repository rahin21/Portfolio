import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rahinzaman.com'), // TODO: Replace with your actual domain
  title: {
    default: 'Rahin Zaman | Full Stack Software Engineer',
    template: '%s | Rahin Zaman'
  },
  description: 'Rahin Zaman is a Junior Software Engineer and Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Based in Dhaka, Bangladesh.',
  keywords: ['Rahin Zaman', 'Rahin', 'Zaman', 'Software Engineer', 'Full Stack Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'Dhaka', 'Bangladesh', 'Portfolio'],
  authors: [{ name: 'Rahin Zaman', url: 'https://rahinzaman.com' }],
  creator: 'Rahin Zaman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rahinzaman.com',
    title: 'Rahin Zaman | Full Stack Software Engineer',
    description: 'Portfolio of Rahin Zaman - Junior Software Engineer specializing in building scalable web applications with Next.js and TypeScript.',
    siteName: 'Rahin Zaman Portfolio',
    images: [
      {
        url: '/heroSectionProfilePic.jpg', // Uses your profile pic as the preview image
        width: 1200,
        height: 630,
        alt: 'Rahin Zaman - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahin Zaman | Full Stack Software Engineer',
    description: 'Junior Software Engineer specializing in Next.js, React, and Node.js.',
    images: ['/heroSectionProfilePic.jpg'],
    creator: '@rahinzaman', // Replace with your actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add this from Google Search Console later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rahin Zaman',
    url: 'https://rahinzaman.com',
    image: 'https://rahinzaman.com/heroSectionProfilePic.jpg',
    sameAs: [
      'https://github.com/rahinzaman', // Update with your actual links
      'https://linkedin.com/in/rahinzaman',
      'https://twitter.com/rahinzaman',
      'https://facebook.com/rahinzaman'
    ],
    jobTitle: 'Junior Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Ascend AI'
    },
    description: 'Full Stack Software Engineer specializing in Next.js, React, and modern web development.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh'
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
