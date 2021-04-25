import * as Ramda from 'ramda'

export const getCartItems = () => {
    const items = localStorage.getItem('cartItems')
    return JSON.parse(items) ?? []
}

export const getWishItems = () => {
    const items = localStorage.getItem('wishItems')
    return JSON.parse(items) ?? []
}

export const findItemById = (items, id) => {

    const item = Ramda.find(Ramda.propEq('id', id))(items)
    if (Ramda.isEmpty(item))
        return false

    return item
}