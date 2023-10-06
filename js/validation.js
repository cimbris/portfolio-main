$(function () {

	// находим форму, div с сообщением об успехе
	const form = $('#form');
	const answer = $('#answer');
	

	// функция валидаций(заполненности полей)
	form.validate({

		// находим инпуты в форме и устанавливаем им правила(все должны быть заполнены)
	  rules: {
		 email: { required: true, email: true },
		 message: { required: true },
		//  check: { required: true }	
	  },

	//   сообщения при несоблюдении правил
	  messages: {
		 email: { required: 'Введите email', email: 'Отсутствует символ @' },
		 message: { required: 'This field can not be empty' },
		//  check: { required: 'This field can not be empty' },
	  },

	//   вызываем асинхронный запрос(асинхронный тк страница продолжает работать)
	  submitHandler: ajaxFormSubmit
	});
 

	// функция асинхронного запроса
	function ajaxFormSubmit() {

		// собираем все данные с формы
	  const string = form.serialize();
 

	//   асинхронный запрос(метод post отвечает за отправку, url указывает путь на php документ, который будет обрабатывать данные)
	// в свойстве data мы передаем в php документ данные из формы
	// success отвечает за анимацию если php документ успешно отправил данные
	  $.ajax({
		 type: 'POST',
		 url: './php/mail.php',
		 data: string,
		 success: function (html) {
			form.slideUp(800);
			answer.html(html);
		 }
	  });
//  остановка функции
	  return false;
	}
 });