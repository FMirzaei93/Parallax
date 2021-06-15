$(window).on('load', function() {

    var sectionsIds = sectionsIds();
    var navItems = $('header nav ul.nav li a');

    navItems.on('click', function(event) {

        event.preventDefault();

        var clickedItemIndex = $(this).parent().index();
        // $(this).index() doesn't work, as <a> tag is always the first child of its parent and this line will always return 0 .(It really depends on what number child is the element for its parent).
        var intendedSectionId = sectionsIds[clickedItemIndex];




        // ------------------------------- Using 'animate' ---------------------------


        $([document.documentElement, document.body]).animate({
            scrollTop: $('#' + intendedSectionId).offset().top
        }, 500);



        // ---------------------------- Without animating ----------------------------

        //document.location.href = intendedSection;

    });



    function sectionsIds() {

        var sections = $('div.container').children();
        var idsArray = [];
        $(sections).each(function(index, value) {

            idsArray.push($(this).attr('id'));

        });
        return idsArray;
    }

});