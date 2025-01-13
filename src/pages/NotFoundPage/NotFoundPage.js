import styles from "./NotFound.module.css";
import img from "../../assets/404.avif";

export default function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <img className={styles.img} src={img}></img>
      <h1 className={styles.text}>Page not found</h1>
    </div>
  );
}
