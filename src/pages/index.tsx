import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image';
import techsImage from '../../public/images/techs.svg'

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText} from 'prismic-dom'

type Content = {
    title: string;
    subTitle: string;
    linkAction: string;
    mobileTitle: string;
    mobileContent: string;
    mobileImg: string;
    webTitle: string;
    webContent: string;
    webImg: string
}
interface ContentProps{
  content: Content
}


export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.subTitle}</span>
            <a href={content.linkAction}>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>
          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos sujeito programador"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobileTitle}</h2>
            <span>{content.mobileContent}</span>
          </section>

          <img src={content.mobileImg} alt="Conteúdo desenvolvimento de app" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src={content.webImg} alt="Conteúdo desenvolvimento de aplicação web" />
          
          <section>
            <h2>{content.webTitle}</h2>
            <span>{content.webContent}</span>
          </section>
        </div>
        
        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt='Tecnologias'/>
          <h2>Mais de <span  className={styles.alunos}> 15 mil</span> já levaram sua carreira ao próximo nivel.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a>
            <button>ACESSAR TURMA!</button>
          </a>
        </div>

      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const prismic = getPrismicClient();
  
  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  const{
    title,
    sub_title,
    link_action,
    mobile_title,
    mobile_content,
    mobile_img,
    web_title,
    web_content,
    web_img
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    subTitle: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile_title),
    mobileContent: RichText.asText(mobile_content),
    mobileImg: mobile_img.url,
    webTitle: RichText.asText(web_title),
    webContent: RichText.asText(web_content),
    webImg: web_img.url
  }

  return{
    props:{
      content
    },
    // revalidate: 60 * 2 // A cada 2 minutos
  }
}
