!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=a.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,a){n[e]=a},a.parcelRequired7c6=r);var l=r("1WSnx"),o=document.querySelector(".feedback-form"),u=document.querySelector('input[name = "email"]'),i=document.querySelector('textarea[name = "message"]');window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var a=JSON.parse(e),t=a.emailValue,n=a.messageValue;u.value||(u.value=t),i.value||(i.value=n)}})),o.addEventListener("input",e(l).throttle((function(){var e=u.value,a=i.value,t={emailValue:e,messageValue:a};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),2e3)),o.addEventListener("submit",(function(e){e.preventDefault();var a=u.value,t=i.value,n={EMAIL:a,MESSAGE:t};console.log(n),u.value="",i.value="",localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.baf03852.js.map
