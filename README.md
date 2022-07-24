

## Использованные библиотеки 
1. react(UI, Локальное состояние(react-hooks))
2. react-router-dom(Для марштутизации)
3. redux/react-redux(Для глобального состояния)
4. bootstrap/react-bootstrap(Библиотека для стилей и стилизованных компонент)

## Директории

### src/api
  Содержит логику авторизации и взаимодействия с локальным хранилищем(api.js)
  
### src/redux
  Содержит описание объекта store и reducer-ов и selector-ов
  
### src/hoc
  Содержит файлы-функции, которые являются компонентами высших порядков
  
### src/images
  Содержит картинки
### src/views
  Содержит компоненты, отрисовка которых зависит от маршрута, а также контейнерные компоненты, которые связывают простые с объектом store

### src/components
  Содержит компоненты, отрисовка которых не зависит от маршрута
  1. Header - комонента "шапки" сайта, которая состоит из ссылок меняющих маршрут и кнопки Log in/Log out
  2. InputField - компонента поля ввода
  3. Modal - компонента модального окна
  4. Newsitem - компонента, которая представляет собой блок новости

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

