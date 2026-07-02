$(function () {
	var $form = $('#contact-form');
	var $message = $('#contact-form-message');

	$form.on('submit', function (event) {
		event.preventDefault();

		var isValid = true;

		$form.find('.form-field').removeClass('form-field--error');

		$form.find('[required]').each(function () {
			var $field = $(this);

			if (!$field.val().trim()) {
				$field.closest('.form-field').addClass('form-field--error');
				isValid = false;
			}
		});

		$message
			.removeClass('contact__form-message--success contact__form-message--error')
			.text('');

		if (!isValid) {
			$message
				.addClass('contact__form-message--error')
				.text('Revisa los campos marcados antes de enviar el formulario.');
			return;
		}

		// Simulación de envío: aquí se integraría una llamada real al backend.
		$message
			.addClass('contact__form-message--success')
			.text('¡Gracias! Tu mensaje se ha enviado correctamente.');

		$form.trigger('reset');
	});
});
