# Свързване на контактната форма към имейл

Формите в `index.html` и `en.html` са подготвени като статични HTML форми с:

- `method="post"`
- `enctype="multipart/form-data"`
- `data-netlify="true"`
- honeypot поле против спам
- отделни thank-you страници: `thanks.html` и `thanks-en.html`

## Вариант 1: Netlify Forms

Ако сайтът се качи в Netlify, формите могат да работят без собствен backend.

1. Качете сайта в Netlify.
2. В Netlify dashboard отворете `Forms`.
3. Потвърдете, че формите `inspection-request` и `inspection-request-en` са засечени.
4. В `Forms` -> `Form notifications` добавете имейла, на който да идват запитванията.
5. Изпратете тестово запитване от сайта.

## Вариант 2: Formspree, Basin, Getform или подобен form endpoint

Ако сайтът се хоства в GitHub Pages, Cloudflare Pages или друг чист статичен хостинг без form backend, трябва външен form endpoint.

1. Създайте форма в избрания доставчик.
2. Вземете endpoint URL.
3. Заменете `action="thanks.html"` и `action="thanks-en.html"` с endpoint URL.
4. Настройте redirect към thank-you страниците в доставчика или според неговата документация.

## Вариант 3: Собствен backend

При собствен хостинг може да се направи server endpoint, който приема POST заявката и изпраща имейл чрез SMTP услуга като SendGrid, Mailgun, Brevo или SMTP на хостинга.

Важно: статичен HTML сайт сам по себе си не може директно да изпраща имейл. Трябва Netlify Forms, външен form endpoint или собствен backend.
