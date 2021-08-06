app.component('modal', {
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <p>{{modalTitle}}</p>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                    <div class="cart-items">
                        <div class="cart-item" v-for="cartItem in cart" :key="cartItem.id">
                            <div class="product-thumbnail">
                                <img :src="cartItem.image">
                            </div>
                            <div class="product-details">
                                <p>{{ cartItem.name }}</p>                            
                                <p>{{ cartItem.color }} </p>
                                <p>Product ID: {{ cartItem.id }}</p>
                                <p>Price: € {{ cartItem.price }}</p>
                            </div>
                        </div>
                    </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  Go to checkout
                  <button class="button modal-close-button" @click="$emit('close')">
                    X
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>`,
    data() {
        return {
            modalTitle: 'Cart',
        }
    },
    methods: {
        // `this` will refer to the component instance

    },
    computed: {

    }
})