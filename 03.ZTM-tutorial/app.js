const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Carlos',
            lastName: 'Infante',
            url: "http://google.com",
            age: 20
        }
    },
    methods: {
        // fullName(){
        //     return `${this.firstName} ${this.lastName.toUpperCase()}`
        // },
        increment(){
            this.age ++
        },
        updateLastName(msg, event){
            event.preventDefault();
            console.log(msg)
            this.lastName = event.target.value
        }
    },
    computed:{
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }, watch:{
        age(newVal, oldVal){
            setTimeout(()=>{
                this.age = 20
            }, 3000)
        }
    }
}).mount('#app')

setTimeout(()=>{
    vm.firstName = 'Jose'

}, 5000);