import { Button } from "../../components";
import styles from "./index.module.scss";
import { CONSTANTS, IMAGES } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={IMAGES.Landing} className={styles.imageWrapper} />

      <section className={styles.content}>
        <span className={styles.themeColor}>Imagine if</span>
        <span className={styles.purpleColor}>Snapchat</span>
        <span className={styles.themeColor}>has events.</span>
        <span className={styles.greyColor}>
          Easily host and share events with your friends across any social
          media.
        </span>

        <Button
          name="Create my event"
          onClick={() => navigate(CONSTANTS.ROUTES.EVENT_NEW)}
        />
      </section>
    </div>
  );
}
