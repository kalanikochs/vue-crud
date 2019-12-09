const app = new Vue({
    el: '#app',
    data: {
        title: 'Todo Crud',
        tasks: [],
        newTask: ''
    },
    methods: {
        addTask () {
            this.tasks.push({
                name: this.newTask,
                status: false
            })
            this.newTask = ''
            localStorage.setItem('gym-vue', JSON.stringify(this.tasks))
        },
        editTask (index) {
            if(this.tasks[index].status == false) {
                this.tasks[index].status = true
            } else {
                this.tasks[index].status = false    
            }
            localStorage.setItem('gym-vue', JSON.stringify(this.tasks))
        },
        deleteTask (index) {
            this.tasks.splice(index, 1)
            localStorage.setItem('gym-vue', JSON.stringify(this.tasks))
        }
    },
    created () {
        let DBdata = JSON.parse(localStorage.getItem('gym-vue'))
        if(DBdata === null) {
            this.tasks = []
        } else {
            this.tasks = DBdata
        }
    }
})