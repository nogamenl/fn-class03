import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/party.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/> 
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>Our venue offers the perfect setting for your next event, with excellent services and ambiance.</h3>
            </div>
        </div>

    );
}