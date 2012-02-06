//@codekit-prepend 'bootstrap-collapse.js';

$("[class*='span']").sortable({
    placeholder: 'ui-state-highlight',
    forcePlaceholderSize: true,
    connectWith: '[class*="span"]',
    handle: 'h2',
    revert: true
});
//$("[class*='span']").disableSelection();