Vue.component('picture-gallery', {
  props: ['images'],
  template: `
    <section class="gallery">
      <h2>My guys would look like at home</h2>
      <div class="gallery-grid">
        <img v-for="image in images"
             :key="image.id"
             :src="image.src"
             :alt="image.alt"
             class="gallery-image">
      </div>
    </section>
  `
});

Vue.component('guestbook', {
  props: ['comments'],
  template: `
    <section class="guestbook">
      <h2>Guestbook</h2>
      <form @submit.prevent="submitComment">
        <input v-model="name" placeholder="Your Name" required>
        <input v-model="email" type="email" placeholder="Your Email" required>
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button>Add Comment</button>
      </form>

      <div v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.message }}
      </div>
    </section>
  `,
  data() {
    return { name: '', email: '', message: '' }
  },
  methods: {
    submitComment() {
      this.$emit('add-comment', {
        id: Date.now(),
        name: this.name,
        email: this.email,
        message: this.message
      });
      this.name = this.email = this.message = '';
    }
  }
});

new Vue({
  el: '#app',
  data: {
    profile: {
      name: 'Lois Vera Cruz',
      tagline: 'Creative Meow | Tech Stuff | Pokemon',
      about: 'Quite the placeholder, but something fun soon!'
    },
    galleryImages: [
      { id: 1, src: 'img/tropius.jpg', alt: 'Tropius' }
    ],
    comments: [],
    manyFoods: [
      'img_burrito.svg',
      'img_salad.svg',
      'img_cake.svg',
      'img_soup.svg',
      'img_fish.svg',
      'img_pizza.svg',
      'img_rice.svg'
    ]
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    }
  },
  mounted() {
    // Wait for the next 'tick' to ensure v-for images are in the DOM
    this.$nextTick(() => {
      if (typeof initDragLogic === 'function') {
        initDragLogic();
      }
    });
  }
});

