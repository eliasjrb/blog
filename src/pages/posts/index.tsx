import Head from "next/head";
import styles from './styles.module.scss'

import Link from "next/link";
import Image from "next/image";
import thumbImg from '../../../public/images/thumb.png'
import {FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight, } from 'react-icons/fi'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Blog | sujeito programador</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href="/" className={styles.ancora}>
                        <Image
                            src={thumbImg}
                            alt="Post titulo 1"
                            width={720}
                            height={410}
                            quality={100}
                        />
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 JUN 2021</time>
                        <p>Hoje vamos criar o controle de mostrar a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
                    </Link>
                    <div className={styles.buttonNavigate}>
                        <div>
                            <button>
                                <FiChevronsLeft size={25} color="#FFF" />
                            </button>
                            <button>
                                <FiChevronLeft size={25} color="#FFF" />
                            </button>
                        </div>

                        <div>
                            <button>
                                <FiChevronsRight size={25} color="#FFF" />
                            </button>
                            <button>
                                <FiChevronRight size={25} color="#FFF" />
                            </button>
                        </div>
                    </div>
                </div>

            </main >
        </>

    )
}