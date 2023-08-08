import React from 'react';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';


const FooterSection = () => {
    return (
        // <div className={styles.piePagina}>
        //     <p>Aplicación desarrollada por los alumnos Marcos Zalazar y Pablo Toledo</p>
        //     <p>MCGA 2023</p>
        //     <p>Código fuente FrontEnd: <a href='https://github.com/pabloatoledo/final_mcga_front' target='_blank'>Link a GitHub FrontEnd</a></p>
        //     <p>Código fuente BackEnd: <a href='https://github.com/pabloatoledo/final_mcga_back' target='_blank'>Link a GitHub BackEnd</a></p>
        // </div>
        <div className={styles.footer}>
            <div className={styles.links}>
                <a href="https://github.com/pabloatoledo" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.icon} />
                    <span>https://github.com/pabloatoledo</span>
                </a>
                <a href="https://github.com/mzalazar1" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.icon} />
                    <span>https://github.com/mzalazar1</span>
                </a>
            </div>
            <p className={styles.copyRight}>&copy; {new Date().getFullYear()} Pablo Toledo-Marcos Zalazar-MCGA Final</p>
        </div>

    );
}

export default React.memo(FooterSection);