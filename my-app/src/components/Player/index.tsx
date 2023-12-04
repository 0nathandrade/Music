import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { usePlayer } from '@/contexts/PlayerContexts'

import styles from './styles.module.scss'


export function Player() {

    const audioRef = useRef<HTMLAudioElement>(null)

    const { 
        episodeList, 
        currentEpisodeIndex, 
        isPlaying,
        hasNext,
        hasPrevious,
        togglePlay,
        setPlayingState,
        playNext,
        playPrevious,
    } = usePlayer()

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    const episode = episodeList[currentEpisodeIndex]

    return (
        <div className={styles.Container}>
           <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header> 

            { episode ? (
                <div className={styles.CurrentEpisode}>
                    <Image 
                        width={192}
                        height={192}
                        src={episode.thumbnail}
                        objectFit='cover'
                        alt={episode.title}
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={styles.Empty}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            )}

            <footer className={!episode ? styles.EmptyFooter : ''}>
                <div className={styles.Progress}>
                    <span>00:00</span>
                    <div className={styles.Slider}>
                        { episode ? (
                            <Slider 
                                trackStyle={{ backgroundColor: '#84d361'}}
                                railStyle={{ backgroundColor: '#9f75ff'}}
                                handleStyle={{ borderColor: '#84d361', borderWidth: 4}}
                            />
                        ) : (
                            <div className={styles.EmptySlider} />
                        )}
                    </div>
                    <span>00:00</span>
                </div>

                { episode && (
                    <audio 
                        src={episode.url}
                        ref={audioRef}
                        autoPlay 
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    />
                )}
                
                <div className={styles.Buttons}>
                    <button type="button" disabled={!episode}>
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>

                    <button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>

                    <button 
                        type="button"
                        className={styles.PlayButton} 
                        disabled={!episode} 
                        onClick={togglePlay}
                    >
                        { isPlaying
                            ? <img src="/pause.svg" alt="Pausar" />
                            : <img src="/play.svg" alt="Tocar" />
                        }
                    </button>

                    <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
                        <img src="/play-next.svg" alt="Tocar proxima" />
                    </button>

                    <button type="button" disabled={!episode}>
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </div>

            </footer>
        </div>
    )
}