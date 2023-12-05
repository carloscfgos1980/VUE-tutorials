## Vue.js Tutorial: Beginner to Front-End Developer
https://www.youtube.com/watch?v=1GNsWa_EZdw

Location in Mac:
/Users/carlosinfante/Desktop/coding-projects/TUTORIALS/FRONTEND/VUE/vue-basic

Location in GitHub:
https://github.com/carloscfgos1980/Vue-Basic

# Here's what the course covers:
1. Introduction
00:00:00 1.1 Introduction

2. Vue.js With no Tool-Chain
00:02:31 2.1 Getting Started With Vue
00:10:51 2.2 Using Loops to Generate Content
00:17:00 2.3 Binding Data to Attributes
00:25:11 2.4 Setting Up Events
00:33:15 2.5 Binding CSS Classes I
00:41:48 2.6 Using Computed Properties
00:48:05 2.7 Binding CSS Classes II
00:55:00 2.8 Introducing Components
01:04:19 2.9 Understanding Data Flow

3. Using the Vue CLI
01:13:00 3.1 Getting Started With the Vue CLI
01:21:30 3.2 Starting a Project From Scratch
01:32:18 3.3 Applying CSS to Components

4. Working With Data
01:41:51 4.1 Using the created() Lifecycle Event to Load Data
01:48:19 4.2 Working With Unset Props
01:55:19 4.3 Deciding When to Load Data
02:01:14 4.4 Working With Forms
02:08:43 4.5 Validating Forms
02:14:39 4.6 Updating and Filtering Data
02:21:05 4.7 Using Watchers

5. Creating and Using Custom Events
02:25:19 5.1 Creating Custom Events
02:32:48 5.2 Writing a Global Event Bus

6. Using Vue Router
02:44:37 6.1 Introducing Vue Router
02:53:19 6.2 Using Route Params
02:59:18 6.3 Loading Data for Views
03:10:07 6.4 Watching Params to Reload Data
03:16:57 6.5 Using the Router's Active Class
03:23:36 6.6 Nesting Routes

7. Using the Composition API
03:30:52 7.1 Introducing the Composition API
03:40:26 7.2 Providing and Injecting Dependencies Into Components
03:48:18 7.3 Accessing Props and Router Functions
03:54:58 7.4 Binding Data and Working Wth Forms
04:06:00 7.5 Defining Computed and Watched Values
04:16:18 7.6 Implementing the Delete Functionality

8. Conclusion
04:20:42 8.1 Conclusion
# Lesson 1. Getting Started With Vue
1. Create index HTML
2. Paste the script in vue offitial website after the name of the document
3. Copy the bootstrap script from offitial website
4. Create a div to display the content
    <div id="content" class="container">
        <h1>{{pageTitle}}</h1>
        <p>{{content}}</p>
    </div>

5. Create a <script> for vue deployment
    <script>
        Vue.createApp({
            data() {
                return {
                    pageTitle: 'Hello, Vue',
                    content: 'Welcome blabla bla checking'
                }
            }
        }).mount('#content'); 
    </script>
* This contain a function that return the dynamic values wil willinject into the div and and the mount that is conected to the <id> where the content is going to be displayed.

# lesson 2. Using Loops to Generate Content
2.1 Create component for navbar. Return a list with the components:
        Vue.createApp({
            data() {
                return {
                    links: ['Home', 'About', 'Contact']
                }
            }
        }).mount('nav')

2.2 Inside the navBar from bootstrap we loop the list of links in <li>. Using a vue directif for for loop (v-for)
                <li v-for="link in links" class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">{{link}}</a>
                </li>

# Lesson 3. Binding Data to Attributes
3.1 Return an array of objects in the vue application component:

                    links: [
                        { text: 'Home', url: 'home.html' },
                        { text: 'About', url: 'about.html' },
                        { text: 'Contact', url: 'contact.html' }
                    ]
3.2 Vue directid to bind the elements (v-bind and as shortcut only <:>). Thi is special case so even when using javascript, we dont need to use {{}} to render the values:
:href="link.url"

3.3 use <.> to access the specific value inside the objct, simply javascript.
>{{link.text}}

3.4 Use a key to identify which object needs to upadate
 <li v-for="(link, index) in links" class="nav-item" :key="index">

# Lesson 4. Setting Up Events
4.1 Make a single vue app by putting everything insede an array of objects (pages)
                    pages: [
                        {
                            link: { text: 'Home', url: 'index.html' },
                            pageTitle: 'Home Page',
                            content: 'This is the Home content'
                        },
                        {
                            link: { text: 'About', url: 'about.html' },
                            pageTitle: 'About Page',
                            content: 'This is the About content'
                        },
                        {
                            link: { text: 'Contact', url: 'contact.html' },
                            pageTitle: 'Contact Page',
                            content: 'This is the Home content'
                        }
                    ]
4.2 Loop thru the pages
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
4.3 Pre pin the url
                    <a class="nav-link active" aria-current="page" :href="page.link.url"
                        :title="`This links goes to the ${page. link.text} page`"
4.4 create am activePage inside the Vue application and set the vale to 0 as the first value in the array of pages:
activePage: 0,

4.4 Add a click event (v-on: and shortcut is <@>) like this
                        @click.prevent="activePage = index">

4.5 Pre pin the pages with the index so it react and bring the specif content.
    <div id="content" class="container">
        <h1>{{pages[activePage].pageTitle}}</h1>
        <p>{{pages[activePage].content}}</p>
    </div>

# Lesson 5. Binding CSS Classes I
5.1 Condictional style:
:class="{active: activePage == index}"

5.2 Toggle the nav Bar between Dark and light style
5.2.1 Create a state to the navBar class inside the return Vue app:
                    useDarkNavBar: false,

5.2.2 Create the condiction
        :class="{'navbar-light bg-light': !useDarkNavBar, 'navbar-dark bg-dark': useDarkNavBar}">

5.2.3 Create the button in order to toggle between styles
        <form class="d-flex">
            <button @click.prevent="useDarkNavBar = !useDarkNavBar" class="btn btn-primary">Toggle NavBar</button>
        </form>

# lesson 6. Using Computed Properties
 6.1 Condictiona rendering fomr the class using a reference to an object (navbarClasses):
    :class="navbarClasses"

 6.2 Using computed property to create a object as condictional rendering. This is placed inside Vue app but out the data function:
            computed: {
                navbarClasses() {
                    return {
                        'navbar-light': !this.useDarkNavBar,
                        'bg-light': !this.useDarkNavBar,
                        'navbar-dark': this.useDarkNavBar,
                        'bg-dark': this.useDarkNavBar
                    }
                }
            },

# lesson7. Binding CSS Classes II
 7.1 Inside vue app and data function. Create the property we want to change:
    theme: 'light',

 7.2 Put all the properties of navbar inside an array and the values we want to react between back ticks:
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, `navbar`, navbar-expand-lg]">

7.3 Create a coditional rendering attach to the button so it wil swith values from 'light' to 'dark'
    <button @click.prevent="theme = theme == 'light' ? 'dark' : 'light'"    

* Different way to accomplish this above:
7.2 Attach a function to the button:
    <button @click.prevent="changeTheme()"

7.3 Create a functon inside Vue app, inside the app but right outside the return
            methods: {
                changeTheme() {
                    let theme = 'light';

                    if (this.theme == 'light') {
                        theme = 'dark';
                    }
                    this.theme = theme;
                }
            },

# lesson 8. Introducing Components
8.1 Put the app inside a variable
        let app = Vue.createApp({

8.2 Crete the component to display the content:
        app.component('page-viewer', {
            props: ['page'],
            template: `
                <div class="container">
                    <h1>{{page.pageTitle}}</h1>
                    <p>{{page.content}}</p>
               </div>
            `
        });
8.3 Display the component in the HTML passing the props.
    <page-viewer :page="pages[activePage]"></page-viewer>

# lesson 9. Understanding Data Flow
Pain tine the ass!