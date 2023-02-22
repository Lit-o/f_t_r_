import { useSelector } from 'react-redux'
import { rootStateType } from '../../../store/store'
import './CharCharacteristics.css'



const CharCharacteristics = () => {
    const charCharacteristicsState = useSelector((state: rootStateType) => state.charCharacteristics)
    const {
        agility,
        charisma,
        endurance,
        intellect,
        perception,
        strength,
        stressResistantce
    } = charCharacteristicsState




    return (
        <div className='charCharacteristics'>
            <h3>Характеристики</h3>
            <ul>
                <li>
                    <div className="charItemFlex">
                        <p>Сила</p>
                        <p>{strength}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '40%' }}></div>
                    </div>
                </li>
                <li>
                    <div className="charItemFlex">
                        <p>Выносливость</p>
                        <p>{endurance}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '80%' }}></div>
                    </div>
                </li>
                <li>
                    <div className="charItemFlex">
                        <p>Ловкость</p>
                        <p>{agility}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '70%' }}></div>
                    </div>
                </li>
                <li>
                    <div className="charItemFlex">
                        <p>Внимательность</p>
                        <p>{perception}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '70%' }}></div>
                    </div>
                </li>
                <li>
                    <div className="charItemFlex">
                        <p>Интеллект</p>
                        <p>{intellect}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '70%' }}></div>
                    </div>
                </li>
                <li>
                    <div className="charItemFlex">
                        <p>Харизма</p>
                        <p>{charisma}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '40%' }}></div>
                    </div>
                </li>
                <li>
                    <div className="charItemFlex">
                        <p>Стрессоустойчивость</p>
                        <p>{stressResistantce}</p>
                    </div>
                    <div className="progressBar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '30%' }}></div>
                    </div>
                </li>




            </ul>
        </div>
    )
}

export default CharCharacteristics