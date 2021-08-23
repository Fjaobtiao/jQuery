$(document).ready(function(){
    
    $(".hist_descricao").hide()
    $(".box_cada_hist").click(function(){
        $(this).children(".hist_descricao").toggle("slow")
    })
    
})