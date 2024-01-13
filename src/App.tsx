import { Balance } from "./components/balance/balance";
import { Summary } from "./components/summary/summary";
import styles from "./App.module.css";
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className={styles.wrapper}>
        <Balance />
        <Summary />
      </main>
    </MotionConfig>
  );
}

export default App;
