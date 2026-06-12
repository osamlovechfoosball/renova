# Печков Ренова - статичен уебсайт

Модерен responsive сайт за българска фирма за монтажи и довършителни работи. Българската версия е default, а английската версия е отделна статична страница.

## Файлове

- `index.html` - начална страница на български
- `en.html` - начална страница на английски
- `styles.css` - цялостен responsive дизайн
- `script.js` - мобилно меню, плавна навигация и статус на формата
- `assets/icons/logo.svg` - оригинален векторен знак и лого
- `assets/icons/favicon.svg` - icon-only версия за browser tab
- `assets/icons/phone.svg`, `assets/icons/viber.svg`, `assets/icons/whatsapp.svg` - бутони за директен контакт
- `assets/images/*.jpg` - оптимизирани placeholder изображения за проектите
- `privacy.html`, `cookies.html` - GDPR и cookie информация на български
- `privacy-en.html`, `cookies-en.html` - GDPR и cookie информация на английски
- `thanks.html`, `thanks-en.html` - страници след изпращане на форма
- `FORM_SETUP.md` - инструкции за свързване на формата към реален имейл
- `robots.txt`, `sitemap.xml`, `site.webmanifest` - SEO и production помощни файлове

## Пускане локално

Отворете `index.html` директно в браузър или стартирайте локален static server:

```bash
npm run preview
```

## Преди реално публикуване

Заменете `https://example.com/` в `robots.txt`, `sitemap.xml` и SEO мета данните с реалния домейн. Телефонът е зададен като `0885 000 544`. Формите са подготвени за статичен хостинг, но трябва да се свържат към реален form endpoint, CRM, Netlify Forms или собствен backend. Вижте `FORM_SETUP.md`.

Името “Печков Ренова” беше избрано като оригинална семейно звучаща марка за българския ремонтен сектор. Бърза exact-match web проверка не показа очевидно съвпадение, но това не е юридическа проверка за търговска марка или домейн.
