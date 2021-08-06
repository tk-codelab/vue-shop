app.component('review-form', {
    /*html*/
    template:
        `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <fieldset class="fieldset-recommend">
            <p>Would you recommend this product?</p>
            <input type="radio" id="yes" name="recommend" value="yes" v-model="recommend">
            <label for="yes">yes</label><br>
            <input type="radio" id="no" name="recommend" value="no" v-model="recommend">
            <label for="no">no</label><br>
        </fieldset>

        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: ''
        }
    },
    methods: {
        onSubmit() {
            console.log(this)
            if (this.name === '' || this.review === '' || this.rating === null || this.recommend === '') {
                alert('Review is incomplete. Please fill out every field.')
                return
            }


            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }

            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = ''
        }
    }
})