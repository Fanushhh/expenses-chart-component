import styles from './balance.module.css';

export const Balance = () => {
    return(
        <section className={styles.balanceWrapper}>
            <div>
                <p>My balance</p>
                <h1>$921.48</h1>
            </div>
            <img src="./logo.svg" alt="" />
        </section>
    )
}