import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


// interface FontOptions{
//   weight: "100" | "200" | "300" | "400" | "500" | "600" | "700"
// }
const poppins = Poppins({
  subsets: ['latin'],
  weight: "400",
})
export const metadata: Metadata = {
  title: 'Famstackups',
  description: 'Earn thousands of naira daily by posting ads on your WhatsApp status.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
