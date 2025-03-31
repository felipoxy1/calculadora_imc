import styles from './header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1>Calculadora de IMC</h1>
                <h3>Calcule seu IMC com base no seu peso e altura</h3>
            </div>
        </>
    )
}

export default Header