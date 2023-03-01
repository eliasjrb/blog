import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import { ActiveLink } from '../ActiveLink'
import Link from 'next/link'

export default function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/' className={styles.headerLink}>
                    <Image src={logo} alt='Sujeito programador logo'/>
                </Link>

                <nav>
                    <ActiveLink href="/" styleLink={styles.headerLink} activeClassName={styles.active}>
                        <span>Home</span>
                    </ActiveLink>
                    <ActiveLink href="/posts" styleLink={styles.headerLink} activeClassName={styles.active}>
                       <span>Conteúdos</span> 
                    </ActiveLink>
                    <ActiveLink href="/sobre" styleLink={styles.headerLink} activeClassName={styles.active}>
                    <span>Quem somos?</span>
                    </ActiveLink>
                </nav>

                <Link className={styles.readyButton} type='button' href='http://sujeitoprogramador.com'>COMEÇAR</Link>

            </div>
        </header>
    )
}