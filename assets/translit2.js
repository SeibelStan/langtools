function translit2() {
	res.val(
		source.val()
			.replace(/Ъ/g, 'Ь')

			.replace(/Бь/g, 'B́ ')
			.replace(/Вь/g, 'V́ ')
			.replace(/Гь/g, 'Ǵ')
			.replace(/Дь/g, 'D́')
			.replace(/Зь/g, 'Ź')
			.replace(/Кь/g, 'Ḱ')
			.replace(/Ль/g, 'Ľ')
			.replace(/Мь/g, 'Ḿ ')
			.replace(/Нь/g, 'Ń')
			.replace(/Пь/g, 'Ṕ ')
			.replace(/Рь/g, 'Ŕ')
			.replace(/Сь/g, 'Ś')
			.replace(/Ть/g, 'T́ ')
			.replace(/Фь/g, 'F́')
			.replace(/Хь/g, 'H́')
			.replace(/Чь/g, 'Ć')

			.replace(/А/g, 'A')
			.replace(/Б/g, 'B')
			.replace(/В/g, 'V')
			.replace(/Г/g, 'G')
			.replace(/Д/g, 'D')
			.replace(/Е/g, 'E')
			.replace(/Ё/g, 'Ó')
			.replace(/Ж/g, 'Ž')
			.replace(/З/g, 'Z')
			.replace(/И/g, 'I')
			.replace(/Й/g, 'Ý')
			.replace(/К/g, 'K')
			.replace(/Л/g, 'L')
			.replace(/М/g, 'M')
			.replace(/Н/g, 'N')
			.replace(/О/g, 'O')
			.replace(/П/g, 'P')
			.replace(/Р/g, 'R')
			.replace(/С/g, 'S')
			.replace(/Т/g, 'T')
			.replace(/У/g, 'U')
			.replace(/Ф/g, 'F')
			.replace(/Х/g, 'H')
			.replace(/Ц/g, 'C')
			.replace(/Ч/g, 'Č')
			.replace(/Ш/g, 'Ŝ')
			.replace(/Ц/g, 'Š')
			.replace(/Ы/g, 'Ŷ')
			.replace(/Э/g, 'Ê')
			.replace(/Ю/g, 'Ú')
			.replace(/Я/g, 'Ă')

			//

			.replace(/ъ/g, 'ь')

			.replace(/бь/g, 'b́')
			.replace(/вь/g, 'v́')
			.replace(/гь/g, 'ǵ')
			.replace(/дь/g, 'ď')
			.replace(/зь/g, 'ź')
			.replace(/кь/g, 'ḱ')
			.replace(/ль/g, 'ľ')
			.replace(/мь/g, 'ḿ')
			.replace(/нь/g, 'ń')
			.replace(/пь/g, 'ṕ')
			.replace(/рь/g, 'ŕ')
			.replace(/сь/g, 'ś')
			.replace(/ть/g, 'ť')
			.replace(/фь/g, 'ф́')
			.replace(/хь/g, 'х́')
			.replace(/чь/g, 'ć')

			.replace(/а/g, 'a')
			.replace(/б/g, 'b')
			.replace(/в/g, 'v')
			.replace(/г/g, 'g')
			.replace(/д/g, 'd')
			.replace(/е/g, 'e')
			.replace(/ё/g, 'ó')
			.replace(/ж/g, 'ž')
			.replace(/з/g, 'z')
			.replace(/и/g, 'i')
			.replace(/й/g, 'ý')
			.replace(/к/g, 'k')
			.replace(/л/g, 'l')
			.replace(/м/g, 'm')
			.replace(/н/g, 'n')
			.replace(/о/g, 'o')
			.replace(/п/g, 'p')
			.replace(/р/g, 'r')
			.replace(/с/g, 's')
			.replace(/т/g, 't')
			.replace(/у/g, 'u')
			.replace(/ф/g, 'f')
			.replace(/х/g, 'h')
			.replace(/ц/g, 'c')
			.replace(/ч/g, 'č')
			.replace(/ш/g, 'ŝ')
			.replace(/щ/g, 'š')
			.replace(/ы/g, 'ŷ')
			.replace(/э/g, 'ê')
			.replace(/ю/g, 'ú')
			.replace(/я/g, 'ă')
	);
}

$(function () {
	langButtonAdd({text: 'Транслит2', funct: 'translit2()', title: 'Транслитерация РУС->LAT Ext'});
});
