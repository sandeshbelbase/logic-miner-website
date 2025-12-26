
import Image from "next/image";
import styles from "./page.module.css";

// This page uses SSR by default in the app directory (Next.js 13+)
// Simulate server-side data fetching
export default async function Home() {
  // Simulate a server-side fetch (could be replaced with real API call)
  const data = {
    message: "This content is server-rendered for SEO!",
    date: new Date().toLocaleString(),
    time: new Date().toLocaleTimeString()
  };

  return (
    <div className={styles.container}>
      <main>
        <p className="text-4xl">ram ram</p>
        <h1 className="text-4xl font-bold">Tailwind is working!</h1>
        <div className="mt-6 p-4 bg-green-100 rounded">
          <p className="text-lg font-semibold">{data.message}</p>
          <p className="text-sm text-gray-600">Rendered at: {data.date}</p>
        </div>
        
      </main>
    </div>
  );
}
