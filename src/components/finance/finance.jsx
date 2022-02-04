import Calculator from '../calcucalor/calculator';
import cmedia from './finance.module.css'

const Finance = (props) => {
    return (
        <div className={cmedia.finance}>
            <Calculator result={props.result}
                col={props.col}
                oncolChange={props.oncolChange}
                calculate={props.calculate}
                values={props.values}
                selectedvalueOne={props.selectedvalueOne}
                selectedvalueTwo={props.selectedvalueTwo}
                selectFirst={props.selectFirst}
                selectSecond={props.selectSecond}
            />
            <div className={cmedia.info}>
                Финансовый калькулятор предназначен для конвертации таких валют
                как евро, рубль и доллар США. Е́вро (знак валюты — €, банковский код: EUR) — официальная валюта 19 стран «еврозоны» (Австрии, Бельгии, Германии, Греции, Ирландии, Испании, Италии, Кипра, Латвии, Литвы, Люксембурга, Мальты, Нидерландов, Португалии, Словакии, Словении, Финляндии, Франции, Эстонии).
                До́ллар Соединённых Шта́тов Аме́рики (англ. United States dollar, МФА: [jʊˌnaɪ.tɪd ˈsteɪts ˈdɑlɚ]) — денежная единица США, одна из основных резервных валют мира. 1 доллар = 100 центов. Символьное обозначение в англоязычных текстах: $. Буквенный код валюты: USD. Правом денежной эмиссии обладает Федеральная резервная система (англ. Federal Reserve System), выполняющая в США функции центрального банка.
                Рубль — название современных валют России (российский рубль), Белоруссии (белорусский рубль), а также непризнанного государства Приднестровская Молдавская Республика (приднестровский рубль)[1][2]. В прошлом рубль — денежная единица русских республик и княжеств периода раздроблённости, Великого княжества Литовского[3], Русского царства, Российской империи, многочисленных образований периода Гражданской войны в России, РСФСР (1917—1923), Советского Союза (1923—1991), Латвии (1992—1993), Украины (1991—1992), Таджикистана (1995—2000) и многих других государств.
                <br></br><b>Википедия. Свободная энциклопедия.</b>
            </div>
        </div>)
}

export default Finance;