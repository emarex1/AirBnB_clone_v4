// This would only run when the dom is loaded and ready
$( document ).ready(function () {

  /*****************************************************
    display list of checkboxes clicked
   *****************************************************/
  let list_amen = [];
  $('input[type=checkbox]').change (function () {
    let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
	list_amen.push(name);
      } else {
	list_amen = list_amen.filter(amen => amen !== name);
      }
    $('.amenities h4').text(list_amen.join(', '));
  });

});
