import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div class={styles.dotSpinner}>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
      <div class={styles.dotSpinner__dot}></div>
    </div>
  );
}
