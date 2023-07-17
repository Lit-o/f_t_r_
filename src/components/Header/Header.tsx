import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Dispatch } from "redux"

import { rootStateType } from '../../store/store'
import './Header.css'
import { charCupHPAction } from '../../store/actions/char/charState/charHealthAction'


const Header = () => {
    // TODO: SPLIT CODE TO COMPONENTS
    const { cupHP, currentHP, danger } = useSelector((state: rootStateType) => state.charHealth)
    // TODO: ENUM charCharacteristics[0]!!!!
    const strength = useSelector((state: rootStateType) => state.charCharacteristics[0].currentLvl)
    const endurance = useSelector((state: rootStateType) => state.charCharacteristics[1].currentLvl)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(charCupHPAction(strength + endurance))
    }, [strength, endurance])

    return (
        <header>
            <div className="char-state">
                {/* TODO: header .char-state__item why??????? */}
                <div className="char-state__item charState__Health">
                    <div className="ico">

                    </div>
                    <div className={`char-state__bar health-bar ${danger ? 'char-state__bar--danger' : ''}`}>
                        <div className="kebab"></div>
                        <div className={'current'}
                            style={{ width: `${currentHP / cupHP * 100}%` }}>
                        </div>
                    </div>

                </div>
                <div className="char-state__item charState__Energy">
                    <div className="ico">

                    </div>
                    <div className="char-state__bar energy-bar">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '84%' }}></div>
                    </div>
                </div>
                <div className="char-state__item charState__Motivation">
                    <div className="ico">

                    </div>
                    <div className="char-state__bar motivationBar char-state__bar--danger">
                        <div className="kebab"></div>
                        <div className="current" style={{ width: '18%' }}></div>
                    </div>
                </div>
            </div>

            <div className="money">
                <p className="money__amount">1244</p>
                <div className="money__currency"><p>L</p></div>

            </div>
            <div className="global-game-time">
                <p className="global-game-time__time">14:32</p>
                <p className="global-game-time__date">15.01.2XXX</p>
            </div>
        </header>
    )
}

export default Header