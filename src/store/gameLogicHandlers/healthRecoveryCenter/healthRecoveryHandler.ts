import { Dispatch } from "redux";

import { rollExtraChances, rollExtraChancesEnum } from "../../../core/coreMechanics"
import { charCurrentHPAction } from "../../actions/char/charState/charHealthAction";





export const healthRecoveryHandler = (value: number, cost: number) => (dispatch: Dispatch) => {
  
  const extraChance = rollExtraChances()

  switch (extraChance) {
    case rollExtraChancesEnum.ID_GOOD_CHANCE:
      console.log('heal to free')
      break
    case rollExtraChancesEnum.ID_BAD_CHANCE:
      console.log('-1 hp')
      dispatch(charCurrentHPAction(-1))
      return
  }

  console.log('heal cost - ' + cost)

  dispatch(charCurrentHPAction(value))
}
