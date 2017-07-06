function sortList() {
	var list = source.val().split('\n');

	console.log(list);

	list = list.sort();
	var st = '';
	for(var i in list) {
		st += list[i] + '\n';
	}
	source.val(st.replace(/\n$/, ''));

	list = list.sort(function (a, b) {
		return b - a;
	});
	st = '';
	for(var i in list) {
		st += list[i] + '\n';
	}
	res.val(st.replace(/\n$/, ''))
}

$(function () {
	langButtonAdd({text: 'Сортировать', funct: 'sortList()'});
});