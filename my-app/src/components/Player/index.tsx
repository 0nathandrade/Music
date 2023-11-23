
import styles from './styles.module.scss'

export function Player() {

    return (
        <div className={styles.Container}>
           <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header> 

            <div className={styles.Empty}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.EmptyFooter}>
                <div className={styles.Progress}>
                    <span>00:00</span>
                    <div className={styles.Slider}>
                        <div className={styles.EmptySlider} />
                    </div>
                    <span>00:00</span>
                </div>
                
                <div className={styles.Buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>

                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>

                    <button type="button" className={styles.PlayButton}>
                        <img src="/play.svg" alt="Tocar" />
                    </button>

                    <button type="button">
                        <img src="/play-next.svg" alt="Tocar proxima" />
                    </button>

                    <button type="button">
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </div>

            </footer>
        </div>
    )
}