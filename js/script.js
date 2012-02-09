//@codekit-prepend 'bootstrap-transition.js', 'bootstrap-collapse.js', 'bootstrap-alert.js', 'bootstrap-dropdown.js';

$("#dashboard .span4").sortable({
    placeholder: 'ui-state-highlight',
    forcePlaceholderSize: true,
    connectWith: '#dashboard .span4',
    handle: 'h2',
    revert: true
});
//$("#dashboard .span4").disableSelection();