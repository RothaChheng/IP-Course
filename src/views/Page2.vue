<template>
    <div class="box2">
        <h3>Welcome to Page 2</h3>
        <p>Message from Page 1: {{ receivedMessage }}</p>
        <router-view></router-view>

        <div class="con2">
            <p>Message: {{ message }}</p>
            <input v-model="responseMessage" placeholder="Type a response" class="input"/>
            <button @click="sendResponse">Response</button>
        </div>

    </div>
</template>
<script>
export default {
  name: 'Section2',
  data() {
    return {
      receivedMessage: '',
      responseMessage: '',
    };
  },
  created() {
    if (this.$route.query.message) {
      this.receivedMessage = this.$route.query.message;
    }
  },
  methods: {
    sendResponse() {
      this.receivedMessage = this.responseMessage;
    },
  },
};
</script>
<style scoped>
.box2{
    display: block;
}
.con2{
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