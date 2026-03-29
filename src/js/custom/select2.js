$(".js-select").select2({
  width: "100%",
  minimumResultsForSearch: -1,
  dropdownParent: $(".js-select").parent(),
});

$(function () {
  $(".js-select").change(function () {
    dropdownParent: $(".js-select").parent();
    $(".subPageFilter").submit();
  });
});
