import { useSelector } from 'react-redux';
import { rootStateType } from '../../../store/store';
import './CharSkills.css'

const CharSkills = () => {

    const charSkillsState = useSelector((state:rootStateType) => state.charSkills)
    const listOfSkillsJSX = charSkillsState.map((el, i) => {
        return (
            <li key={i}>
                <div className="skills-item-flex">
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
        <div className='skills'>
            <h3>Навыки</h3>
                <ul>
                    {listOfSkillsJSX}
                </ul>            
        </div>
    );
};

export default CharSkills;