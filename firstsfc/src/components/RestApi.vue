<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

// Variables
const posts = ref([]);
const loading = ref(false);
const error = ref(null);
const newPost = reactive({ title: '', body: '' });
const editingPost = ref(false);
const editPostData = reactive({ title: '', body: '', id: null });
const selectedPost = ref(null);

// Functions
const fetchPosts = async () => {
  loading.value = true;
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const addPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    posts.value.push(response.data);
    newPost.title = '';
    newPost.body = '';
  } catch (err) {
    error.value = err.message;
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    posts.value = posts.value.filter(p => p.id !== id);
  } catch (err) {
    error.value = err.message;
  }
};

const editPost = (post) => {
  editingPost.value = true;
  editPostData.title = post.title;
  editPostData.body = post.body;
  editPostData.id = post.id;
};

const updatePost = async () => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editPostData.id}`, editPostData);
    const index = posts.value.findIndex(p => p.id === editPostData.id);
    if (index !== -1) posts.value[index] = response.data;
    editingPost.value = false;
  } catch (err) {
    error.value = err.message;
  }
};

const cancelEdit = () => {
  editingPost.value = false;
};

onMounted(fetchPosts);
</script>