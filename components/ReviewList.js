app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
        <div class="review-container">
            <h3>Reviews</h3>
            <ul class="reviews">
                <li v-for="(review, index) in reviews" :key="index">
                    <strong>{{ review.name }} gave this {{ review.rating }} stars</strong>
                    <br/>
                    "{{ review.review }}"
                    <br/>
                    Recommended: {{ review.recommend }}
                </li>
            </ul>
        </div>
    `
})