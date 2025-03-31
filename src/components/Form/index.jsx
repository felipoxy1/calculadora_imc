import { useState } from 'react'
import styles from './form.module.css'

const Form = () => {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [resultado, setResultado] = useState("")

    const calcularIMC = () => {
        if (!altura || !peso) {
            setResultado("Prencha todos os campos devidamente")
            return
        }

        const alturaMetros = parseFloat(altura) / 100;
        const imc = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2)

        let classificacao = ''
        if(imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if(imc <24.9) {
            classificacao = "Peso normal";
        }
        else if(imc <29.9) {
            classificacao = "Sobrepeso";
        }
        else if(imc <34.9) {
            classificacao = "Obesidade Grau I";
        }else if(imc <39.9) {
            classificacao = "Obesidade Grau II";
        } else {
            classificacao = "Obesidade Grau III";
        }

        setResultado(`IMC: ${imc} - ${classificacao}`)
        console.log(resultado)
    }

    return (
        <>
        <form className={styles.form}>
            <div className={styles.formArea}>
                <p>Coloque seu peso em KG</p>
                <input onChange={(e) => setPeso(e.target.value)} className={styles.formAreaInputs} type="number" placeholder="Coloque aqui seu peso em KG" />
            </div>
            <div className={styles.formArea}>
                <p>Coloque sua altura em CM</p>
                <input onChange={(e) => setAltura(e.target.value)} className={styles.formAreaInputs} type="number" placeholder="Coloque aqui sua altura" />
            </div>
        </form>
        <div className={styles.button}>
            <button onClick={calcularIMC}>Calcular</button>
        </div>
        <h4>{resultado}</h4>
        </>
    )
}

export default Form