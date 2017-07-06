function typo() {
	res.val(
		source.val()
			//дефисы, тире, математика
			.replace(/(\s{0,1})-+(\s)/g, '$1—$2') // тире
			.replace(/'(.)'/g, '$1\u0301') // ударение
			.replace(/(\d+)[xх*](\d+)/g, '$1×$2')
			.replace(/(\d+)\/(\d+)/g, '$1÷$2')
			.replace(/(\d+)-(\d+)/g, '$1−$2')
			.replace(/(\d+)\+-(\d+)/g, '$1±$2')
			.replace(/(\d+)--(\d+)*/g, '$1—$2')

			//кавычки
			.replace(/([\(> ])"([A-z-,\. ]+?)"/g, '$1“$2”')
			.replace(/([\(> ])("|<<)([А-я-,\. ]+?)("|>>)/g, '$1«$3»')

			//обозначения
			.replace(/ЕВРО/g, '€')
			.replace(/ФУНТ/g, '£')
			.replace(/ГРАД(УС)*/g, '°')
			.replace(/ПРОМ(ИЛЕ)*/g, '‰')
			.replace(/ПАРА(ГРАФ)*/g, '§')
			.replace(/КОРЕНЬ/g, '√')
			.replace(/ИНТЕГРАЛ/g, '∫')
			.replace(/БЕСК(ОН)*/g, '∞')
			.replace(/АБЗАЦ/g, '¶')
			.replace(/КРЕСТ/g, '†')
			.replace(/СВАСТ(ИКА)*/g, '卐')
			.replace(/ПАЦИФИК/gi, '☮')
			.replace(/<-/g, '←')
			.replace(/->/g, '→')
			.replace(/-\^/g, '↑')
			.replace(/v-/g, '↓')
			.replace(/\.\.\./g, '…')
			.replace(/\((тм|tm)\)/gi, '™')
			.replace(/\(R\)/gi, '®')
			.replace(/\([сc]\)/gi, '©')
			.replace(/\([aа]\)/gi, 'Ⓐ')

			//правки
			.replace(/ {2,}/g, ' ') //пробелы
			.replace(/\u00A0{2,}/g, '\u00A0')
			.replace(/\s+%/g, '%')
			.replace(/ТАБ */g, '\t')
			.replace(/!\?/g, '?!') //?!
			.replace(/,[A-zА-я]/g, ', ') //запятые
			.replace(/\n{3,}/gm, '\n\n') //висячие строки

			.trim()
	);
}

function tagsRemove() {
	res.val(
		source.val()
			.replace(/<.+?>/g, '')
			.replace(/<\/.+?>/g, '')
	);
}

$(function () {
	langButtonAdd({text: 'Типо', funct: 'typo()', title: 'Очищает форматирование, заменяет мнемоники и обозначения на соответствующие символы.'});
	langButtonAdd({text: 'Убрать теги', funct: 'tagsRemove()', title: 'Удаляет все HTML-теги из текста.'});
});
