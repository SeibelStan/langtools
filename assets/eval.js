function evalute() {
	eval(source.val());
}

$(function () {
	langButtonAdd({text: 'Выполнить', funct: 'evalute()'});
});