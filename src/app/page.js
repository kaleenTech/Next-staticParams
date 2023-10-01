import Link from "next/link";
import styles from "./page.module.css";
import JsonData from "@/libs/data.json";

export default function Home() {
  return (
    <main className={styles.main}>
      {JsonData?.map((record, i) => {
        return (
          <div key={i}>
            <Link href={`/laptops/${record?.brand ?? ""}`}>
              {record?.brand}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
