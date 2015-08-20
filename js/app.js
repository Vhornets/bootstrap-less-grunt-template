// Инициализация каруселей по аттрибуту
// В аттрибуте хранится строка, которая является ключом к объекту с опциями карусели
$('[data-carousel]').each(function() {
    var $self = $(this);
    var opts = $self.data('carousel');

    $self.owlCarousel(settings[opts]);
});

$('form').each(function() {
    $(this).validate({
        ignore: "",

        submitHandler: function(form) {
            $(form).trigger('form.valid');
        }
    });
});