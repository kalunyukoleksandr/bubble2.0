$(function ($) {
    $("img.lazy").Lazy();
    $(function () {
        $('.nav-burger').on('click', function () {
            $('.nav-mobile').toggle('.nav-mobile--open');
        });
    });

    setTimeout(() => {
        $('#area').append(`
        <iframe src="https://storage.googleapis.com/bubble_shooter_web/index.html"
                                             resize="both" overflow="auto" data-layertype="html"
                                              data-stylerecorder="true" 
                                              >
                                            </iframe>
                                            `);
    }, 3000);

});