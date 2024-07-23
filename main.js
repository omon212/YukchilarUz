// Переключение языка
document.getElementById('language-switch').addEventListener('change', function () {
    const isEnglish = this.checked;
    if (isEnglish) {
        document.getElementById('hero-title').textContent = 'Услуги грузоперевозок по УЗБЕКИСТАНУ';
        document.getElementById('service1').textContent = 'Работаем с НДС на основании договора';
        document.getElementById('service2').textContent = 'Предоставляем безопасный и надежный сервис';
        document.getElementById('service3').textContent = 'Доставка в течение 1 часа';
        document.getElementById('service4').textContent = '20 летний успешный опыт';
        document.getElementById('form-text').textContent = 'Заполните форму, чтобы узнать стоимость доставки';
        document.getElementById('name').placeholder = 'Имя';
        document.getElementById('phone').placeholder = 'Номер телефона';
        document.querySelector('.btn').textContent = 'Связаться с нами';
        document.querySelector('.form-button').textContent = 'Отправить';
    } else {
        document.getElementById('hero-title').textContent = 'O’ZBEKISTON bo’ylab yuk tashish xizmati';
        document.getElementById('service1').textContent = 'Shartnoma asosida QQS bilan ishlaymiz';
        document.getElementById('service2').textContent = 'Xavfsiz va bezarar xizmat ko’rsatamiz';
        document.getElementById('service3').textContent = '1 soat yuk mashina qoyib beramiz';
        document.getElementById('service4').textContent = '20 yillik muvaffaqiyatli tajriba';
        document.getElementById('form-text').textContent = 'Yuk tashish xarajatlarini bepul bilish uchun formani to’ldiring';
        document.getElementById('name').placeholder = 'Ism';
        document.getElementById('phone').placeholder = 'Telefon raqami';
        document.querySelector('.btn').textContent = 'Biz bilan boglanish';
        document.querySelector('.form-button').textContent = 'Yuborish';
    }
});

// Отправка формы в Telegram
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Телеграм токен и ID чата
    const token = '7188094125:AAGEIipf6Jhh0igbRiydlD7EliQ3WQYoyR8'; // Замените на ваш токен бота
    const chatId = '6457971132'; // Замените на ваш ID чата

    const message = `Имя: ${name}\nТелефон: ${phone}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const params = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log('Сообщение отправлено успешно!');
            } else {
                console.log('Ошибка отправки сообщения.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка отправки сообщения.');
        });
});

// Показать форму
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".btn");
    var form = document.querySelector(".hero-form");

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        form.classList.toggle("show-form");
    });

    // Закрывать форму при клике вне ее
    document.addEventListener("click", function(event) {
        if (!form.contains(event.target) && !btn.contains(event.target)) {
            form.classList.remove("show-form");
        }
    });
});
