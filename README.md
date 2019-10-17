

# django & vue.js sample
pycharm에서 django project를 create 한다.
그런 후 아래의 명령으로 `migrate`를 해주면 필요한 `Django`에서 필요한 최소의 파일구성은 마친다.

```shell script
$ python manage.py migrate
```


### 2 Creating The VueJS Webpack Frontend Project

[vuejs-templates](https://github.com/vuejs-templates) 에서 [webpack-simple](https://github.com/vuejs-templates/webpack-simple) 선택한다.
이곳에서 Usage에 나온 내용대로 명령을 입력한다.

```shell script
$ npm install -g vue-cli
$ vue init webpack-simple my-project
$ cd my-project
$ npm install
$ npm run dev
```

### 3 Configuring Django Webpack Loader
```shell script
$ pip install django-webpack-loader
```
[django-webpack-loader](https://github.com/owais/django-webpack-loader) 를 설치해준다.


###4 Setup Webpack Bundle Tracker & Write File Plugin
[webpack-bundle-tracker](https://github.com/owais/webpack-bundle-tracker) 설치

```shell script
$ cd frontend
$ npm install --save-dev webpack-bundle-tracker
```

[write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin) 설치


###5 Setup Django URLs and Link the Backend with VueJS Fr
vuejs 와 django를 연계한 이후 
```shell script
$ npm run dev
```
를 먼저 한 이후 django를 실행해 준다.