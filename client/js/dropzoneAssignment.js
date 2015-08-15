$(function() {
   $( "#sortable, #sortable2", "#sortable3" ).sortable({ revert: true,

       update: function( evt, ui ) {

           var basketItems = $(this).sortable('toArray').toString();
        $.jnotify(basketItems, 5000);

           //alert(basketItems);
           //$.get('updatebasket.cfm', {basketItems:basketItems});

       }

   }).draggable({
       connectToSortable: "#trash",
       //helper: "clone",
        snap: true,
       revert: "invalid"

   });
    $("#trash").droppable({
        hoverClass: "droppable-hover",
        drop: function ( evt, ui) {
        //$(this).append(ui.draggable);


            var element = ui.draggable;
            $(this).append(element);
            //element.fadeOut(1000);
            //$(ui.draggable).remove();

            $(ui.draggable).fadeOut(1000);

/*
            var element = $(ui.draggable).clone();
            $(this).append(element);
            element.fadeOut(1000);
            $(ui.draggable).remove();
*/
        }


    });

   $( ".draggable" ).draggable({
       connectToSortable: "#sortable, #sortable2, #sortable3",
       helper: "clone",
       revert: "invalid"
   });


   $( "ul, li" ).disableSelection();

});
