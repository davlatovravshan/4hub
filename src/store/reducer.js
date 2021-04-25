import {SET_MENU} from './actions'

const initialState = {
    openMenu: true
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case SET_MENU:
            return {...state, openMenu: payload}
        default:
            return state
    }

}