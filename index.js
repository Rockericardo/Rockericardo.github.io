const config = {
    'gretting':{
        'title': 'La mejores guitarras',
        'image': 'guitarra.jpg',
        'text_button': 'Comprar!'
    },
    'description': {
        'title': '¿Quienes somos?',
        'image': 'guitarras.jpg',
        'text_description': 'Somos'
    }
}

const init = (onfig) => {
    const{ gretting } = c
    $('#eslogan').html(config.gretting.title)
    $('#contenedor-saludo').css('background-image', `url(${config.gretting.image})`)
    $('#contenedor-saludo > button').html(config.gretting.text_button)
    //Description
    $('#descripcion-titulo').html(config.description.title)
    $('#contenedor-descripcion > .contenido > img').attr('src', config.description)
    $('#texto-uno'.html())
}

$(() => {
    //init(config)
    })
