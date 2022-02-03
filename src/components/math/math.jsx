import Calculator from '../calcucalor/calculator';
import cmedia from './math.module.css'

const MathPhys = (props) => {

    return (
        <div className={cmedia.math}>
            <Calculator values={props.values}
                result={props.result}
                col={props.col}
                oncolChange={props.oncolChange}
                calculate={props.calculate}
                selectedvalueOne={props.selectedvalueOne}
                selectedvalueTwo={props.selectedvalueTwo}
                selectFirst={props.selectFirst}
                selectSecond={props.selectSecond} />
            <div className={cmedia.info}>
                В математичком конвертере производится конвертация таких единиц измерения расстояния как сантиметр, дециметр, метр и километр.
                Единицей измерения расстояния и одной из основных единиц в Международной системе единиц (СИ) является метр. Метр также является единицей измерения расстояния и относится к числу основных единиц в метрических системах МКС, МКСА, МКСК, МКСГ, МСК, МКСЛ, МСС, МКГСС и МТС[1].
                В системе СГС единицей измерения расстояния служит сантиметр.
                На практике применяются также кратные и дольные единицы метра, образуемые с помощью стандартных приставок СИ:
                <br></br><b>Википедия. Свободная энциклопедия.</b>
            </div>
        </div>)
}

export default MathPhys;