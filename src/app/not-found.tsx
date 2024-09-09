import Image from "next/image";
import Link from "next/link";
import { Variables } from "@/utils";
import styles from "./not-found.module.css";

export default function NotFound() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.container}>
      <Image
        width={56}
        height={80}
        src="/images/legionhelper.svg"
        alt="A drawing of a B1 Battle droid."
      />
      <p>&quot;Negative. 404. Not found.&quot;</p>
      <Link href="/">Back to {Variables.title}</Link>
    </div>
  );
}
