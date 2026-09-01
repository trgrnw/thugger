# THUGGER — бренд-хаб

Готовый адаптивный React-сайт для `thugger.ru`: бренд, проекты, Minecraft-клан, новости и соцсети.

## Запуск

```bash
npm install
npm run dev
```

## Сборка для хостинга

```bash
npm run build
```

Загрузите **содержимое** папки `dist` в корневую папку домена `thugger.ru`.
Не загружайте туда `src`, `package.json` или исходный `index.html`: браузер не
умеет выполнять JSX напрямую и покажет ошибку MIME type для `main.jsx`.

После каждого push в `main` GitHub автоматически проверяет сборку и сохраняет
готовый production-артефакт `thugger-ru-production` в разделе Actions.

## Где менять контент

Проекты, новости и участники находятся в `src/content.js`. Основные ссылки и тексты — в `src/main.jsx`.
