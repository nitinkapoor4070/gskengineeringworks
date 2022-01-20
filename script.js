// const e = require("express");



var n=document.getElementById("num1");
n.addEventListener("click",function(){
    alert("Mr. Neeraj Kapoor: +91 9463704070")
})



var cbtn= document.getElementById("cbtn");
cbtn.addEventListener("click",function(){
    window.location.reload();
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})