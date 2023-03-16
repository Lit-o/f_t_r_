import { useSelector } from 'react-redux'
import { rootStateType } from '../../../store/store'
import './CharCharacteristics.css'



const CharCharacteristics = () => {
    const charCharacteristicsState = useSelector((state: rootStateType) => state.charCharacteristics)
    console.log(charCharacteristicsState)
    const charCharacteristicsJXS = charCharacteristicsState.map((el, i) => {
        return (
            <li key={i}>
                <div className="charItemFlex">
                    <p>{el.label}</p>
                    <p>{el.currentLvl}</p>
                </div>
                <div className="progressBar">
                    <div className="kebab"></div>
                    <div className="current" style={{ width: `${el.currentExp / el.nextLvlExpCup * 100}%` }}></div>
                </div>
            </li>
        )
    })


    return (
        <div className='charCharacteristics'>
            <h3>Характеристики</h3>
            <ul>
                {charCharacteristicsJXS}
            </ul>
        </div>
    )
}

export default CharCharacteristics