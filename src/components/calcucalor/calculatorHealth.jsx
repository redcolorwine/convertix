import cmedia from './healthcalculator.module.css';
import React from 'react';

const HealthCalculator = (props) => {
    let growthRef = React.createRef();
    let weightRef = React.createRef();
    let onGrowthChange = () => {
        props.growthChange(growthRef.current.value);
    }
    let onWeightChange = () => {
        props.weightChange(weightRef.current.value);
    }

    return (
        <div className={cmedia.calculator}>
            <div className={cmedia.selectblock}>
                <label>Вес, кг</label>
                <input type="text" ref={weightRef} value={props.weight} onChange={onWeightChange} />
            </div>


            <div className={cmedia.selectblock}>
                <label>Рост, см</label >
                <input type="text" ref={growthRef} value={props.growth} onChange={onGrowthChange} />
            </div>

            <div className={cmedia.result}>
                <h3>ИМТ</h3><input type="text" readOnly value={props.result.toFixed(2)} />
            </div>


            <button onClick={() => { props.calcImt(props.weight, props.growth) }}>Перевести</button>
            {props.result < 16 && <div className={cmedia.description}>Выраженный дефицит массы тела</div>}
            {props.result > 16 && props.result < 18.5 && <div className={cmedia.description}>Недостаточная (дефицит) масса тела</div>}
            {props.result > 18.5 && props.result < 25 && <div className={cmedia.description}>Нормальный вес</div>}
            {props.result > 25 && props.result < 30 && <div className={cmedia.description}>Избыточная масса тела (предожирение)</div>}
            {props.result > 30 && props.result < 35 && <div className={cmedia.description}>Ожирение 1 степени</div>}
            {props.result > 35 && props.result < 45 && <div className={cmedia.description}>Ожирение 2 степени</div>}
            {props.result > 45 && <div className={cmedia.description}>Ожирение 3 степени</div>}
        </div>
    )
}

export default HealthCalculator;