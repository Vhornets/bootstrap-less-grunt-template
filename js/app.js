var App = {
    init: function() {
        this.initCarousels();
        this.validateForms();
    },

    initCarousels: function() {
        $('[data-carousel]').each(function() {
            var $self = $(this);
            var opts = $self.data('carousel');

            $self.owlCarousel(settings[opts]);
        });
    },

    validateForms: function() {
        $('form').each(function() {
            $(this).validate({
                ignore: "",

                submitHandler: function(form) {
                    $(form).trigger('form.valid');
                }
            });
        });
    },
};