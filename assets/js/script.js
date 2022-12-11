$(document).ready(function () {
    $('#accordeon .acc__head').on('click', f_acc);
});
function f_acc() {
    $('#accordeon .acc__body').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(200);
}
