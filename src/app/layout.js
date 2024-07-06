import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Tomas Coelho',
  description:
    'Personal portfolio of Tomas Coelho, Frontend developer fromo Argentina',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-[#f2f2f2]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
