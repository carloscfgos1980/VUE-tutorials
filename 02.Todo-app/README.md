## Vue 3 Crash Course | Project From Scratch

https://www.youtube.com/watch?v=KTFH4P8unUQ

Lcation in Mac:
/Users/carlosinfante/Desktop/coding-projects/TUTORIALS/FRONTEND/VUE/vue-todos

Location in GitHub:
https://github.com/carloscfgos1980/Vue-Todo-app

# Goals:

- Vue Set up
- Vue conceptual explanation
- csass (style)
- forms
- Vue reactive variable

npm init vue@latest
vue name: vue-todos

- For this project, everything it asked except for <vue Router>
  cd vue-todos
  npm install
  npm run dev

# 1 Clean the app:

1. Erase everything inside assets and inside components
2. HomeView.vue
   Delete everything inside script and within main in <template>
3. App.vu
   Remove entire header tag, remove Hello world import, as well as the RouterLink, remove <style scope> and create <style>
4. Main.js Delete import assets/main.css

# 2. Install dependencies:

cd vue-todos
npm install --save-dev uid sass @iconify/vue

Get the font I will use and copy the lin so I will paste it inside global style in App.vue
https://fonts.google.com
Ex:
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');

# 3. Simple Global Styles. min 22

Copy from the repository

# 4. Navigation Component. min 29

CSS copy from repository

# 5. Forms & Emit Custom Events min 33

5.1 Create the form
5.2 CSS copy from repository

- Create a set up for a new component using VUe snippets, type:
vbase setup
5.3 TodoCreator.vue. Forms. Two way to create a reactive variable:
method 1:
<script setup>
import { ref, reactive } from "vue";
const todo = ref("testing")
</script>

<template>
        <input type="text" v-model="todo">
</template>

method 2:

<script setup>
import { ref, reactive } from "vue";
const todoState = reactive({
    todo: 'Testing reactive'
})
</script>

<tempalte>
        <input type="text" v-model="todoState.todo">
</tempalte>

# 6. Todo Validation

6.1 TodoView.vue Import ref
import { ref } from "vue";

6.2 TodoView.vue Create the empty array that will store the values
const todoList = ref([]);

6.3 TodoView.vue Create the function add the values
const createTodo = (todo) => {
todoList.value.push({
id: uid(),
todo,
isComplete: null,
isEditing: null
});
};

6.4 TodoView.vue Listen to the emitted event from TodoCreator.vue
<TodoCreator @create-todo="createTodo" />

# 7. Todo Validation 46:27

7.1 TodoCreator.vue. Create a reactive object to catch the value and error message
const todo = reactive({
todo: "",
invalid: false,
errMsg: "",
});

7.2 TodoCreator.vue. Create a function with a condiction is the field is empty:
const createTodo = () => {
todo.invalid = false;
if (todo.todo !== "") {
emit("create-todo", todo.todo);
todo.todo = "";
return;
}
todo.invalid = true;
todo.errMsg = "Todo value cannot be empty!";
};
7.3 TodoCreator.vue. Inside template, display the error message
<p class="err-msg" v-show="todo.invalid">{{ todo.errMsg }}</p>

7.4 TodoCreator.vue. Biden class to change the style if the there is an error. min 57:
:class="{ 'input-err': todo.invalid }">

# 8 Slots. 57:20

- Slots are reuseable components! A bit of boiler plate for this project!

# 9 Todo Item Component. 1:01:10

- Display the list of todos. It is kinda complicated because it is also connected to a input field to edit the todo (taks)
  9.1 TodoView.vue. Passing the data to the component
  <ul class="todo-list">
  <TodoItem v-for="todo in todoList" :todo="todo" />
  </ul>

  9.2 Define the props
  const props = defineProps({
  todo: {
  type: Object,
  default: () => { },
  },
  });

  9.3 create a list and place inside this list an checkbox and input text
  <li>
  <input type="checkbox" :value="todo.isCompleted" />
  <div class="todo">
  <input v-if="todo.isEditing" type="text" :value="todo.todo" />
  <span v-else>
  {{ todo.todo }}
  </span>

  9.4 Using Icons
  https://iconify.design/docs/icon-components/vue/

import { Icon } from "@iconify/vue";

        <div class="todo-actions">
            <Icon v-if="todo.isEditing" icon="ph:check-circle" class="icon check-icon" color="41b080" width="22" />
            <Icon v-else icon="ph:pencil-fill" class="icon edit-icon" color="41b080" width="22" />
            <Icon icon="ph:trash" class="icon trash-icon" color="f95e5e" width="22" />
        </div>

9.5 the CSS is quite complicated, when it hover over then it will show the icons. Copy from the repository. Explanation 1:16

9.6 TodoView.vue. Also a condiction to show a message if there is no task added
<ul class="todo-list" v-if="todoList.length > 0">

    <p v-else class="todos-msg">
      <Icon icon="noto:sad-but-relieved-face" />
      <span>You have no todo's to complete! Add one!</span>
    </p>

# 10 Toggle Complete Todo. 1:20:58

    index: {
        type: Number,
        required: true,
    }

            @input="$emit('toggle-complete', index)"

defineEmits(['toggle-complete']);

1:27:38 Section-11 Edit Todo
1:33:47 Section-12 Delete Todo
1:36:26 Section-13 Save Todo's To LocalStorage
1:41:40 Section-13 watch()
1:46:00 Section-14 Completed Todos State computed()
1:50:40 Creating Additional Routes/Pages
1:53:56 Deploying To Netlify
1:57:35 What's Next?
