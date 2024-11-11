import styles from "./styles/page.module.css";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Image
              src="/bg-image.jpg"
              alt="main bg image"
              sizes="100vw"
              height={0}
              width={0}
              style={{ width: '80%', height: '600px', borderRadius: "4px", margin: "0 auto" }}
          />
      </main>
      <Footer/>
    </div>
  );
}
