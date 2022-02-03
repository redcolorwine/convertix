import cmedia from './calculator.module.css';
import React from 'react';

const Calculator = (props) => {
    let options = props.values.map((val) => {
        return (<option key={val} value={val}>{val}</option>)
    })

    let onColChange = (event) => {
        props.oncolChange(event.currentTarget.value)
    }
    const firstSelect = (event) => {
        props.selectFirst(event.target.value)

    }
    const secondSelect = (event) => {
        props.selectSecond(event.target.value)
    }

    return (
        <div className={cmedia.calculator}>
            <div className={cmedia.selectblock}>
                <label>Из </label>
                <select name="selectFirst" onChange={(event) => firstSelect(event)}>
                    {options}
                </select>
            </div>


            <div className={cmedia.selectblock}>
                <label>В </label >
                <select name="selectSecond" onChange={(event) => secondSelect(event)}>
                    {options}
                </select>
            </div>


            <h3>Количество</h3><input type="text" value={props.col} onChange={(e) => onColChange(e)} />

            <button onClick={() => { props.calculate(props.col, props.selectedvalueOne, props.selectedvalueTwo) }}>Перевести</button>

            {props.result !== 0 &&
                <input className={cmedia.result} type="text" value={props.result.toFixed(5)} readOnly />
            }

        </div>
    )
}

export default Calculator;