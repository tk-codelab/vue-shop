app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1> 

                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>€ {{ price }}</p>

                <p>Shipping: {{ shipping }}</p>
                <ul class="details">
                <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div class="variants">
                <div 
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                </div>
                </div>
                
                
                <button 
                class="button" 
                :class="{ disabledButton: !inStock }" 
                :disabled="!inStock" 
                v-on:click="addToCart">
                Add to Cart
                </button>

            </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form> 
        </div>`,
    data() {
        return {
            product: 'Notebook',
            brand: 'That Green Notebook',
            selectedVariant: 0, // Has to be number, because equals index when updateVariant is called
            details: ['This is a premium notebook, sturdy & sustainable.'],
            variants: [
                { id: 2234, name: 'Notebook botanic', color: '#64af3e', image: './assets/images/notebook_botanic.jpg', price: 12.99, quantity: 50 },
                { id: 4562, name: 'Notebook marble', color: '#e8edf1', image: './assets/images/notebook_marble.jpg', price: 16.75, quantity: 78 },
                { id: 5729, name: 'Notebook pineapple', color: '#ffe566', image: './assets/images/notebook_pineapple.jpg', price: 14.25, quantity: 50 },
                { id: 6675, name: 'Notebook mint', color: '#9dd1c2', image: './assets/images/notebook_mint.jpg', price: 16.75, quantity: 0 },
            ],
            reviews: [{ "name": "Janine", "review": "Got the classic one - love it!", "rating": 5, "recommend": "yes" },
            { "name": "Jesse", "review": "Notebook is good, but it was delivered way too late", "rating": 4, "recommend": "yes" }]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', { id: this.variants[this.selectedVariant].id, name: this.variants[this.selectedVariant].name, color: this.variants[this.selectedVariant].color, price: this.variants[this.selectedVariant].price, image: this.variants[this.selectedVariant].image })
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.variants[this.selectedVariant].name
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        price() {
            return this.variants[this.selectedVariant].price
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})