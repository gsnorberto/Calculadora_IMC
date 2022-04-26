import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { useState } from 'react';
import { GridItem } from './components/GridItem';

import { levels, calculateImc } from './helpers/imc'

export default () => {

    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if (heightField && weightField) {

        } else {
            alert("Digite todos os campos")
        }
    }

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImage} alt="" width={150} />

                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule seu IMC.</h1>
                    <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

                    <input
                        type="number"
                        placeholder="Digite a sua altura (em métros). Ex: 2.3"
                        value={heightField > 0 ? heightField : ''}
                        onChange={e => setHeightField(parseFloat(e.target.value))}
                    />

                    <input
                        type="number"
                        placeholder="Digite o seu peso (em kg). Ex: 70.3"
                        value={weightField > 0 ? weightField : ''}
                        onChange={e => setWeightField(parseFloat(e.target.value))}
                    />

                    <button onClick={handleCalculateButton}>Calcular</button>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.grid}>
                        {levels.map((item, key)=>(
                            <GridItem key={key} item={item} /> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}