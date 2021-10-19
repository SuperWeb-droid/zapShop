const accardionItem = document.querySelectorAll('.accardion_header');
const accardonBody = document.querySelectorAll('.accardion_body');
const accardionContent = document.querySelectorAll('.accardion_content');
accardionItem.forEach((item, index) => {
	item.addEventListener('click', () => {
		accardonBody.forEach(contentItem => {
			contentItem.style.height = '0px'
		})
		if (!item.classList.contains('active')) {
			accardionItem.forEach(item => {
				item.classList.remove('active')
			})
		}
		item.classList.toggle('active')
		if (item.classList.contains('active')) {
			accardonBody[index].style.height = `${accardionContent[index].offsetHeight}px`;
		}
	})
})