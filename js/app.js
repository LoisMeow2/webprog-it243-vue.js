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
      about: 'Welcome to my personal space!',
      education: 'BSIT at APC',
      experience: 'Programmer (2024)',
      hobbies: 'Drawing, Games',
      goals: 'Bring stories to life'
    },
    galleryImages: [
      { id: 1, src: 'https://yoyojapanstore.com/cdn/shop/files/pokemon-center-original-plush-pokemon-fit-tropius-stuffed-animals-558_grande.webp?v=1709680134', alt: 'Tropius' },
      { id: 2, src: 'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P6975_701-08242_01.jpg', alt: 'Pinchurchin' },
      { id: 3, src: 'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10021/P9729_701E10606_01.jpg', alt: 'Golisopod' },
      { id: 4, src: 'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9440_701-98792_01.jpg', alt: 'Clawitzer' },
      { id: 5, src: 'https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10021/P9729_701E10603_01.jpg', alt: 'Palossand' },
      { id: 6, src: 'https://m.media-amazon.com/images/I/81qv8ouJ13L._AC_UF1000,1000_QL80_.jpg', alt: 'Arcanine' }
    ],
    comments: []
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    }
  }
});

