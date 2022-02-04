import { connect } from "react-redux"
import Health from "./health"

let mapStateToProps=(state)=>{
    return{
        weight:state.healthPage.weight,
        growth:state.healthPage.growth,
        result:state.healthPage.result
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        calcImt:(weight,growth)=>{
            dispatch({
                type:'CALCULATEIMT',
                weight,
                growth
            })
        },
        weightChange:(weight)=>{
            dispatch({
                type:'WEIGHTCHANGE',
                weight
            })
        },
        growthChange:(growth)=>{
            dispatch({
                type:'GROWTHCHANGE',
                growth
            })
        }
    }
}

let HealthContainer=connect(mapStateToProps,mapDispatchToProps)(Health);

export default HealthContainer;