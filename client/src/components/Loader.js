import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
      {/*    <svg viewBox="25 25 50 50" className={styles.loaderBox}>
        <circle r="20" cy="50" cx="50"></circle>
      </svg> */}
    </div>
  );
}
