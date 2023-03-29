import { useSelector } from 'react-redux';
import './Character.css'
import { rootStateType } from '../../store/store'
import CharCharacteristics from './CharCharacteristics/CharCharacteristics';
import { charSkillsNamesEnum } from '../../store/reducers/charSkillsReducer'
import CharSkills from './CharSkills/CharSkills';
// import componentsImg from '../../stuff/115.png'

function Character() {
    const electricalComponent = useSelector((state: rootStateType) => state.charInventory.electricalComponent)

    const {amount, label} = electricalComponent
    return (
        <div className='main-char-page'>
            <h2>Персонаж</h2>
            <div>
                <CharCharacteristics/>
                <CharSkills/>

                <h3>Состояние</h3>
                <ul>
                    <li>Здоровье: 10/15</li>
                    <li>Энергия: 10/12</li>
                    <li>Мотивация: 10/60</li>
                </ul>

                <h3>Местоположение</h3>
                <ul>
                    <li>Где-то находится</li>
                </ul>
                
                <h3>Текущее действие</h3>
                <ul>
                    <li>Что-то делает</li>
                </ul>

                <h3>Инвентарь</h3>
                <ul>
                    <li>
                        {/* <img src={componentsImg} alt="" style={{width: '520px'}}/> */}
                        {label}: {amount}
                        </li>
                </ul>

            </div>
        </div>
    );
}

export default Character;