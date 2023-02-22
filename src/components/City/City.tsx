import { useDispatch, useSelector } from "react-redux";
import { handleSearchElectricalComponentsThunk } from "../../store/gameActions/handleSearchElectricalComponentsThunk";
import { rootStateType } from "../../store/store";
import './City.css'


function City() {
    const dispatch = useDispatch()
    const search = useSelector((state: rootStateType) => state.charSkills.search )
    const {endurance, perception} = useSelector((state: rootStateType) => state.charCharacteristics )

    const handleSearchElectricalComponents = () => dispatch(handleSearchElectricalComponentsThunk(search, endurance, perception))

    return (
        <div className="main-city-page">
            <h2>Город</h2>
            <h3>Жилище</h3>
            <h3>Администрация</h3>
            <h3>Завод</h3>

            <div>
                <h3>Свалка</h3>
                <ul>
                    <li><button onClick={handleSearchElectricalComponents}
                    className="main-cyber-button">Искать электрокомпоненты</button></li>
                </ul>
            </div>
        </div>
    );
}

export default City;