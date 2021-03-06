import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/components/Home";
import Category from "@/components/Category";

Vue.use(Router)

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/category",
            name: "Category",
            component: Category
        }
    ]
})

export default router