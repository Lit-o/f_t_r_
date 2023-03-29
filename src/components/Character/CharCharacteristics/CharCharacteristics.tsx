import { useSelector } from 'react-redux'
import { rootStateType } from '../../../store/store'
import './CharCharacteristics.css'



const CharCharacteristics = () => {
    const charCharacteristicsState = useSelector((state: rootStateType) => state.charCharacteristics)
    const listOfCharacteristicsJSX = charCharacteristicsState.map((el, i) => {
        return (
            <li key={i}>
                <div className="char-item-flex">
                    <p>{el.label}</p>
                    <p>{el.currentLvl}</p>
                </div>
                <div className="progress-bar">
                    <div className="kebab"></div>
                    <div className="current" style={{ width: `${el.currentExp / el.nextLvlExpCup * 100}%` }}></div>
                </div>
            </li>
        )
    })


    return (
        <div className='char-characteristics'>
            <h3>Характеристики</h3>
            <ul>
                {listOfCharacteristicsJSX}
            </ul>
        </div>
    )
}

export default CharCharacteristics