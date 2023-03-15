import { useDispatch, useSelector } from "react-redux";
import { handleCreateChipThunk } from "../../store/gameActions/handleCreateChipThunk";
import { rootStateType } from "../../store/store";
import  './Home.css'

import { charCharacteristicsNamesEnum } from "../../store/reducers/charCharacteristicsReducer"

function Home() {
    const dispatch = useDispatch()
    const chip = useSelector((state:rootStateType) => state.charInventory.chip)
    const {label, amount} = chip
    const electricalComponentAmount = useSelector((state:rootStateType) => state.charInventory.electricalComponent.amount)

    const craft = useSelector((state:rootStateType) => state.charSkills.craft)


  
    const array = useSelector((state:rootStateType) => state.charCharacteristics)
    const agility = array[charCharacteristicsNamesEnum.agility].currentLvl
    const intellect = array[charCharacteristicsNamesEnum.intellect].currentLvl

   
    const handleCreateChip = () => dispatch(handleCreateChipThunk(craft, electricalComponentAmount, agility, intellect))
   
    return (
        <div className='main-home-page'>
            <h2>Жилище</h2>
            <h3>Кровать</h3>
            <h3>Кухня</h3>

            <h3>Склад</h3>
            <ul>
                <li>{label}: {amount}</li>
            </ul>
            <h3>3D Принтер</h3>
            <ul>
                <li><button onClick={handleCreateChip} className="main-cyber-button">Создать микросхему</button></li>
            </ul>
            <h3>Онлайн магазин</h3>
            <ul>
                <li><button className="main-cyber-button">Купить хоть что угодно, но не всё</button></li>
            </ul>
            <h3>Барахолка</h3>
            <ul>
                <li><button className="main-cyber-button">Продать хоть что угодно, но не всё</button></li>
            </ul>

        </div>
    );
}

export default Home;