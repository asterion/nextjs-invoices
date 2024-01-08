import '@/app/ui/global.css';
import './ui/fonts';
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}
