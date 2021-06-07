import '../styles/main.css';
import 'tailwindcss/tailwind.css';

import Sidebar from '../components/sidebar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full bg-gray-100 layout">
      <Sidebar></Sidebar>
      <Component {...pageProps} />
    </div>
  );
}
