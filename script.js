const app = new Vue({
  el: '#app',
  data: {
    count: 0,
    products: [
      { "card": '2', "quantity": 4 },
      { "card": '3', "quantity": 4 },
      { "card": '4', "quantity": 4 },
      { "card": '5', "quantity": 4 },
      { "card": '6', "quantity": 4 },
      { "card": '7', "quantity": 4 },
      { "card": '8', "quantity": 4 },
      { "card": '9', "quantity": 4 },
      { "card": '10', "quantity": 4 },
      { "card": 'J', "quantity": 4 },
      { "card": 'Q', "quantity": 4 },
      { "card": 'K', "quantity": 4 },
      { "card": 'A', "quantity": 4 }] },

  computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
    totalCards() {
      return this.cards.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
    deckOrProducts() {
      if (this.totalProducts === 52) {
        return '1';
      } else if (this.totalProducts === 104) {
        return '2';
      } else if (this.totalProducts === 156) {
        return '3';
      } else if (this.totalProducts === 208) {
        return '4';
      } else if (this.totalProducts === 260) {
        return '5';
      } else if (this.totalProducts === 312) {
        return '6';
      } else if (this.totalProducts === 364) {
        return '7';
      } else if (this.totalProducts === 416) {
        return '8';
      } else if (this.totalProducts === 468) {
        return '9';
      } else {
        return this.totalProducts + ' Cards';
      }
    }},

  methods: {
    nc(num) {
      if (num === `10` || num === `A` || num === `J` || num === `Q` || num === `K`) {
        this.count -= 1;
      } else if (num === `2` || num === `3` || num === `4` || num === `5` || num === `6`) {
        this.count += 1;
      }
    },
    ac(n) {
      if (n === `10` || n === `A` || n === `J` || n === `Q` || n === `K`) {
        this.count += 1;
      } else if (n === `2` || n === `3` || n === `4` || n === `5` || n === `6`) {
        this.count -= 1;
      }
    },
    addFourToAllProducts() {
      this.products.forEach(product => {
        product.quantity += 4;
      });
    },

    removeFourFromAllProducts() {
      this.products.forEach(product => {
        product.quantity -= 4;
      });
    },
  }
});