<template>
    <div class="box1">
        <div>
            <h3>Welcome to Page 1</h3>  
            <router-view></router-view>
        </div>

        <div class="con1">
            <p>Message: {{ message }}</p>
            <input v-model="inputMessage" placeholder="Type a message" class="input"/>
            <button @click="sendMessage">Send Message</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Section1',
  data() {
    return {
      inputMessage: '',
    };
  },
  methods: {
    sendMessage() {
      this.message = this.inputMessage;
      this.$router.push({ name: 'Page2', query: { message: this.message } });
    },
  },
  created() {
    if (this.$route.query.message) {
      this.message = this.$route.query.message;
    }
  },
};
</script>
<style scoped>
.box1{
    display: block;
}
.con1{
    display: flex;
}
.input{
    width: 200px;
    height: 50px;
    margin-left: 10px;
    border-radius: 2px;
    border: 1px solid orange;
}
button{
    margin-left: 10px;
    border-radius: 5px;
    border: 2px solid black;
}
</style>