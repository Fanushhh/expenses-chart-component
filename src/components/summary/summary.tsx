import styles from "./summary.module.css";
import { summaryData } from "./summaryData";
import { motion } from "framer-motion";
import Counter from "../Counter/Counter";

export const Summary = () => {
  return (
    <section className={styles.summaryWrapper}>
      <h2>Speding - Last 7 days</h2>
      <div className={styles.graphContainer}>
        {summaryData.map((item, index) => {
          return (
            <div key={item.id} className={styles.graphBarContainer}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: item.amount }}
                transition={{ duration: (item.amount / 60) * 0.5 }}
                style={{
                  height: item.amount,
                  backgroundColor: item.amount >= 150 ? "var(--cyan)" : "",
                }}
                className={styles.graphBar}
              ></motion.div>
              <span className={styles.graphBarTooltip}>{"$" + item.rawAmount}</span>
              <motion.p
                layout="position"
                transition={{ delay: index * 0.1 , type: "spring", stiffness: 60, damping:10}}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
              >
                {item.day}
              </motion.p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className={styles.spendingReport}>
        <div>
          <p>Total this month:</p>
          
          <Counter styles={styles.total} from={0} to={478.33}>$</Counter>
        </div>
        <div>
          <Counter from={0} to={2.4}>%</Counter>
          <p>from last month</p>
        </div>
      </div>
    </section>
  );
};
