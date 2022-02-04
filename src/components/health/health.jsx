import HealthCalculator from '../calcucalor/calculatorHealth';
import cmedia from './health.module.css'

const Health = (props) => {
    return (
        <div className={cmedia.health}>
           <HealthCalculator growthChange={props.growthChange} weightChange={props.weightChange} calcImt={props.calcImt} result={props.result} weight={props.weight} growth={props.growth}/>
           <div className={cmedia.info}>
            И́ндекс ма́ссы те́ла (англ. body mass index (BMI), 
            ИМТ) — величина, позволяющая оценить степень 
            соответствия массы человека и его роста и тем 
            самым косвенно судить о том, является ли масса 
            недостаточной, нормальной или избыточной. 
            Важен при определении показаний для 
            необходимости лечения. Показатель индекса массы тела разработан
             бельгийским социологом и статистиком Адольфом Кетле в 1835 году.
             <br></br><b>Википедия. Свободная энциклопедия.</b>
            </div>
        </div>)
}

export default Health;