const main = document.createElement('main');
const container = document.createElement('div');

$(container).attr('class', 'container');

$('#galeria')
    .append($(main)
    .append($(container)
    .append(imagens
    .map(item => 
        FigureComponent(item.id, item.url, item.alt, item.caption)
))));

$(()=>{
    $("figure").on({
        mouseover: function(){
            $('figure').not($(this)).addClass('opacity');
        },
        mouseout: function(){
            $('figure').removeClass('opacity');
        },
        click: function(){
            window.innerWidth > 500 && BackdropComponent(imagens, this);
        },
    });

    $(document).on('click', '.backdrop',function(){
        setTimeout(function(){
            $('body').attr({scroll: '', style: ''});
            $('.backdrop').remove()
        }, 200);
    });
}); 