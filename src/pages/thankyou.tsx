import styles from "./thankyou.module.css";
import Image from "next/image";

export const ThankYou = () => {
  return (
    <div className={styles.thanks}>
      <Image
        src="/images/thankyou.png"
        alt="A happy droid with fireworks behind it. Thank you!"
        width={487}
        height={448}
      />
      <h1>Thank you!</h1>
      <p>
        Every little bit helps to keep it running and to keep it updated when
        needed.
      </p>
      <a href="/">Back to Legion Helper</a>
    </div>
  );
};

export default ThankYou;
