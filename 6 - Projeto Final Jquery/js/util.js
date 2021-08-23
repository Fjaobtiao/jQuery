const ImgComponent = ($url)=>{
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const icon = document.createElement('i');

    $(figure).attr('class', 'modalFigure');
    $(img).attr({ src:`${ $url }`, class: 'imgModal' });
    $(icon).attr({ class: 'fas fa-times-circle' });

    return $(figure).append($(img)).append($(span).append(icon));
}

const getUrl = (img, $this)=>{
    const { url } = (img.filter(item => item.id === $this.id))[0];
    return url;
}

const BackdropComponent = ($imagens, $this)=>{
    const backdropIn = document.createElement('div');

    $(backdropIn).append(ImgComponent(getUrl($imagens, $this)));

    $('body').attr({scroll: 'no', style: 'overflow: hidden'});
    $('body').prepend(backdropIn);

    $(backdropIn).attr('class', 'backdrop');

    return backdropIn;
}

const FigureComponent = ($id, $url, $alt, $caption)=>{
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const caption = document.createElement('figcaption');

    $(figure).attr('id', `${ $id }`);
    $(img).attr({ src:`${ $url }`, alt: `${ $alt }` });
    $(caption).text(`${ $caption }`);

    return $(figure).append($(img)).append($(caption));
}