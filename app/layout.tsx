import Providers from './providers';
import '../src/index.css';
import '../src/styles/product-carousel.css';

export const metadata = {
  title: 'PTL - Leading Peptide Recovery Research',
  description: 'Premium recovery products for physical health and well-being',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Providers>
            {children}
          </Providers>
        </div>
        {/* IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! */}
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </html>
  )
}
