import styles from './card.module.css'
import Image from 'next/image';

export default function Card() {
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/hotel.jpg'}
                alt='Hotel pic'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardtext}>
               hazbin hotel
            </div>
            <div className={styles.carddes}>
               <p>Discover a world full of unique experiences and endless entertainment.</p>
            </div>
        </div>
    );
}