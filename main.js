const app = Vue.createApp({ // root component
    data() {
        return {
            cart: [], // An array, with objects in it.
            premium: true,
            showModal: false,
        }
    },
    methods: {
        updateCart: function (obj) {
            // Prob: item is empty. It keeps being empty.. Solution: I was sending this.$emit('add-to-cart', id, color) or $emit('add-to-cart', item), restructured it to an array just before. However, the second argument needed to be an object in which I store id, color. The variant is an obj, with id, color, etc. When sending along the obj it worked.
            this.cart.push(obj);
        }
    }
})
