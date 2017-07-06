function morzeLat() {
	if(source.val().match(/[A-z0-9]/)) {
		res.val(
			source.val()
				.toLowerCase()

				.replace(/\s/g, '  ')

				.replace(/,/g, '.-.-.- ')
				.replace(/:/g, '---... ')
				.replace(/;/g, '-.-.-. ')
				.replace(/\(/g, '-.--.- ')
				.replace(/\)/g, '-.--.- ')
				.replace(/\'/g, '.----. ')
				.replace(/\"/g, '.-..- ')
				.replace(/\s-\s/g, ' — ')
				.replace(/—/g, '-....- ')
				.replace(/\//g, '-..-. ')
				.replace(/\?/g, '..--.. ')
				.replace(/!/g, '--..-- ')
				.replace(/@/g, '.--.-. ')

				.replace(/1/g, '.---- ')
				.replace(/2/g, '..--- ')
				.replace(/3/g, '...-- ')
				.replace(/4/g, '....- ')
				.replace(/5/g, '..... ')
				.replace(/6/g, '-.... ')
				.replace(/7/g, '--... ')
				.replace(/8/g, '---.. ')
				.replace(/9/g, '----. ')
				.replace(/0/g, '----- ')

				.replace(/a/g, '.- ')
				.replace(/b/g, '-... ')
				.replace(/c/g, '-,-, ')
				.replace(/d/g, '-,. ')
				.replace(/e/g, '. ')
				.replace(/f/g, '..-. ')
				.replace(/g/g, '--. ')
				.replace(/h/g, '.... ')
				.replace(/i/g, '.. ')
				.replace(/j/g, '.--- ')
				.replace(/k/g, '-.- ')
				.replace(/l/g, '.-.. ')
				.replace(/m/g, '-- ')
				.replace(/n/g, '-. ')
				.replace(/o/g, '--- ')
				.replace(/p/g, '.--. ')
				.replace(/q/g, '--.- ')
				.replace(/r/g, '.-. ')
				.replace(/s/g, '... ')
				.replace(/t/g, '- ')
				.replace(/u/g, '..- ')
				.replace(/v/g, '...- ')
				.replace(/w/g, '.-- ')
				.replace(/x/g, '-..- ')
				.replace(/y/g, '-.-- ')
				.replace(/z/g, '--.. ')
		);
	}
	else {
		res.val(
			source.val()
				.replace(/$/g, ' ')

				.replace(/\.-\.-\.-\s/g, ',')
				.replace(/---\.\.\.\s/g, ':')
				.replace(/-\.-\.-\.\s/g, ';')
				.replace(/-\.--\.-\s\s/g, ') ')
				.replace(/\s-\.--\.-\s/g, ' (')
				.replace(/\.----\.\s/g, '\'')
				.replace(/\.-\.\.-\s/g, '\"')
				.replace(/-\.\.\.\.-\s/g, ' — ')
				.replace(/-\.\.-\.\s/g, '/')
				.replace(/\.\.--\.\.\s/g, '?')
				.replace(/--\.\.--\s/g, '!')
				.replace(/\.--\.-\.\s/g, '@')

				.replace(/\.----\s/g, '1')
				.replace(/\.\.---\s/g, '2')
				.replace(/\.\.\.--\s/g, '3')
				.replace(/\.\.\.\.-\s/g, '4')
				.replace(/\.\.\.\.\.\s/g, '5')
				.replace(/-\.\.\.\.\s/g, '6')
				.replace(/--\.\.\.\s/g, '7')
				.replace(/---\.\.\s/g, '8')
				.replace(/----\.\s/g, '9')
				.replace(/-----\s/g, '0')

				.replace(/-\s/g, 't')
				.replace(/\.\s/g, 'e')

				.replace(/\.-\s/g, 'a')
				.replace(/--\s/g, 'm')
				.replace(/\.\.\s/g, 'i')
				.replace(/-\.\s/g, 'n')

				.replace(/---\s/g, 'o')
				.replace(/\.--\s/g, 'w')
				.replace(/\.\.\.\s/g, 's')
				.replace(/-\.-\s/g, 'k')
				.replace(/-\.\.\s/g, 'd')
				.replace(/-\.-\.\s/g, 'c')
				.replace(/--\.\s/g, 'g')
				.replace(/\.-\.\s/g, 'r')
				.replace(/\.\.-\s/g, 'u')

				.replace(/-\.\.\.\s/g, 'b')
				.replace(/\.\.-\.\s/g, 'f')
				.replace(/\.\.\.\.\s/g, 'h')
				.replace(/\.---\s/g, 'j')
				.replace(/\.-\.\.\s/g, 'l')
				.replace(/\.--\.\s/g, 'p')
				.replace(/--\.-\s/g, 'q')
				.replace(/\.\.\.-\s/g, 'v')
				.replace(/-\.\.-\s/g, 'x')
				.replace(/-\.--\s/g, 'y')
				.replace(/--\.\.\s/g, 'z')

				.replace(/\s\s/g, ' ')
		);
	}
}

$(function () {
	langButtonAdd({text: 'Морзе лат.', funct: 'morzeLat()'});
});
