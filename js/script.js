//@codekit-prepend 'bootstrap-transition.js', 'bootstrap-collapse.js', 'bootstrap-alert.js';

$("#dashboard span4").sortable({
    placeholder: 'ui-state-highlight',
    forcePlaceholderSize: true,
    connectWith: '#dashboard span4',
    handle: 'h2',
    revert: true
});
//$("[class*='span']").disableSelection();