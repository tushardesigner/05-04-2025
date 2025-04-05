// let version = Date.now();
// let link = document.createElement("link")
// link.rel = "stylesheet"
// link.href = `./style.css?ver=${version}`
// document.head.appendChild(link)
// console.log(link)



// jQuery(document).ready(function($){
//     $("#btn-c").click(function(){
//     alert("Hello")
//     })
// })

 
// jQuery(document).ready(function($){
//     $("#btn1").click(function(){
//         alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click(function(){
//         alert("HTML: " + $("#test").html());
//     });
//     $("#btn3").click(function(){
//         alert("CSS: " + $("#test").css());
//     });
// })

jQuery(document).ready(function(){
    $("#form-btn").click(function(e){
        e.preventDefault()
       let value =  $(".form-input").val();
       console.log(value)
       $(".result").prepend(`<li>${value}</li>`);
       $(".form-input").val('')
    })
})