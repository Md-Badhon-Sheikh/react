const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
};

const saveCartToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const addToLS = (id) => {
    const cart = getStoredCart();
    if (!cart.includes(id)) {
        cart.push(id);
        saveCartToLS(cart);
    }
};

export { addToLS, getStoredCart };
