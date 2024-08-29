import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.container}>
      <Image
        width={56}
        height={80}
        src="/images/legionhelper.svg"
        alt="A drawing of a B1 Battle droid."
      />
      <p>&quot;Roger, Roger, Loading, Loading…&quot;</p>
    </div>
  );
}
