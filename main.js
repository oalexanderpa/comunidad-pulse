var $form   = $("#formulario"),
	$titulo = $("#titulo"),
	$url    = $("#url"),
	$autor  = $('#autor'),
	$button = $("#mostrar-form"),
	$list   = $("#contenido"),
	$post   = $('.item').first();

if(localStorage.getItem('autosave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
	$autor.val(sessionStorage.getItem('autor'));
}

function mostrarFormulario(e)
{
	e.preventDefault();
	$form.slideToggle();
	$list.slideToggle();
}

var id = setInterval(function()
{
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('autor', $autor.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);

function agregarPost(e)
{
	var url    = $url.val(),
	    titulo = $titulo.val(),
	    autor  = $autor.val(),
	    $clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
	$clone.find('.autor_item a')
		.text(autor)

	$form.slideToggle();
	$list.show();

	$list.prepend($clone);

	$clone.fadeIn();

	$titulo.val('');
	$url.val('');
	$autor.val('');
	e.preventDefault();
}

//Eventos
$button.on('click', mostrarFormulario);
$form.on('submit', agregarPost);