//= require ransack/predicates
//= require ransack_ui_jquery/search_form

// Select2 ver 3 checks if select2 is present by checking window.Select2
// Version 4 uses jQuery.fn.select2 instead as a check
// The following enables compatibility with select2 version 4
if(jQuery.fn.select2) {
  window.Select2 = jQuery.fn.select2;
}
