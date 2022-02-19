// component template layouts will go here
import styles from '../styles/layout.module.scss';


export const siteTitle = 'Random News App'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Covid Stat Tracker</h1>
            </div>
            <main className={styles.content}>{children}</main>
            <div className={styles.footer}>
                Powered By:&nbsp;<a href='https://api.covid19tracker.ca/docs/1.0/overview' target="_blank" rel="noopener noreferrer">api.covid19tracker.ca</a>
            </div>
        </div>
    )
  }