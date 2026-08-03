$(".js-select").select2({
  width: "100%",
  minimumResultsForSearch: -1,
});

$(function () {
  $(".js-select").change(function () {
    dropdownParent: $(".js-select").parent();
    $(".subPageFilter").submit();
  });
});
