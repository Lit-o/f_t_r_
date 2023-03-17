import './Header.css'



const Header = () => {
    return (
        <header>
            <div className="char-state">
                <div className=".char-state__item charState__Health">
                    <div className="ico">

                    </div>
                    <div className="char-state__bar health-bar">
                        <div className="kebab"></div>
                        <div className="current" style={{width: '70%'}}></div>
                    </div>
                </div>
                <div className=".char-state__item charState__Energy">
                    <div className="ico">

                    </div>
                    <div className="char-state__bar energy-bar">
                        <div className="kebab"></div>
                        <div className="current" style={{width: '84%'}}></div>
                    </div>
                </div>
                <div className=".char-state__item charState__Motivation">
                    <div className="ico">

                    </div>
                    <div className="char-state__bar motivationBar char-state__bar--danger">
                        <div className="kebab"></div>
                        <div className="current" style={{width: '18%'}}></div>
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