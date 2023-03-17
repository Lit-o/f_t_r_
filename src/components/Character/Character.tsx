import { useSelector } from 'react-redux';
import './Character.css'
import { rootStateType } from '../../store/store'
import CharCharacteristics from './CharCharacteristics/CharCharacteristics';

function Character() {
    const charSkillsState = useSelector((state: rootStateType) => state.charSkills)
    const electricalComponent = useSelector((state: rootStateType) => state.charInventory.electricalComponent)



    const {
        search,
        craft
    } = charSkillsState

    const {amount, label} = electricalComponent
    return (
        <div className='main-char-page'>
            <h2>Персонаж</h2>
            <div>
                <CharCharacteristics/>


                <h3>Навыки</h3>
                <ul>
                    <li>Крафт:{craft}</li>
                    <li>Поиск:{search}</li>
                </ul>


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
                    <li>{label}: {amount}</li>
                </ul>

            </div>
        </div>
    );
}

export default Character;