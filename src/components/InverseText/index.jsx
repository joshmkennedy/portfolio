import Styles from "./styles.module.scss";
export default function InverseText({ children }) {
  return (
    <span className={Styles.role}>
      {children} <span className={Styles.invert}>{children}</span>
    </span>
  );
}
