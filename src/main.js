import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(router)

app.use(VueGtag, {
    property: {
        id: "AW-10777486362"
    }
});

app.mount('#app')

import $ from 'jquery'
$(function() {
    function close() {
        $('body').removeClass('has-active-menu');
        setTimeout(function(){
            $('.nav-slider').removeClass('toggling');
        }, 500);
    }

    function open() {
        $('body').addClass('has-active-menu');
        $('.nav-slider').addClass('toggling');
    }

    $('.nav-mask').click(close);
    $('.navbar-close').click(close);
    $('.navbar-toggler').click(open);
});

$(document).ready(function() {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
        scrolling = true;

        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");

        setTimeout(function() {
            scrolling = false;
        }, animTime);
    }

    function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
    }

    function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
    }

    $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
        } else {
            navigateDown();
        }
    });

    $(document).on("keydown", function(e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
    });

});

