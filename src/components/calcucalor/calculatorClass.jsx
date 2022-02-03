import cmedia from './calculator.module.css';
import React from 'react';

class CalculatorClass extends React.Component {
    options = this.props.values.map((val) => {
        return (<option key={val} value={val}>{val}</option>)
    })

    onColChange = (event) => {
        this.props.oncolChange(event.currentTarget.value)
    }
    firstSelect = (event) => {
        this.props.selectFirst(event.target.value)

    }
    secondSelect = (event) => {
        this.props.selectSecond(event.target.value)
    }
    render() {
        return (
            <div className={cmedia.calculator}>
                <div className={cmedia.selectblock}>
                    <label>Из </label>
                    <select name="selectFirst" onChange={(event) => this.firstSelect(event)}>
                        {this.options}
                    </select>
                </div>


                <div className={cmedia.selectblock}>
                    <label>В </label >
                    <select name="selectSecond" onChange={(event) => this.secondSelect(event)}>
                        {this.options}
                    </select>
                </div>


                <h3>Количество</h3><input type="text" value={this.props.col} onChange={(e) => this.onColChange(e)} />

                <button onClick={() => { this.props.calculate(this.props.col, this.props.selectedvalueOne, this.props.selectedvalueTwo) }}>Перевести</button>

                {this.props.result !== 0 &&
                    <input className={cmedia.result} type="text" value={this.props.result.toFixed(5)} readOnly />
                }

            </div>
        )
    }

}

export default CalculatorClass;