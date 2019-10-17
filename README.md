

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


### 4 Setup Webpack Bundle Tracker & Write File Plugin
[webpack-bundle-tracker](https://github.com/owais/webpack-bundle-tracker) 설치

```shell script
$ cd frontend
$ npm install --save-dev webpack-bundle-tracker
```

[write-file-webpack-plugin](https://github.com/gajus/write-file-webpack-plugin) 설치


### 5 Setup Django URLs and Link the Backend with VueJS Fr
vuejs 와 django를 연계한 이후 
```shell script
$ npm run dev
```
를 먼저 한 이후 django를 실행해 준다.

### 6 Create Our VueNote Django App and Models
```shell script
$ python manage.py startapp vuenote
```
를 해주면 vuenote라는 디렉토리가 생긴다.

이후 모델을 만든 후에는 `migration`을 해주어야 한다.
```shell script
$ python manage.py makemigrations
$ python manage.py migrate
```

그리고 `admin` 접속을 위해서 user를 생성해준다.
```shell script
$ python manage.py createsuperuser
```

이후 admin 페이지에 들어가보면 [vuenote](http://127.0.0.1:8000/admin/vuenote/) 링크가 생긴 것을 확인할 수 있다.

### 7 Install and Configure REST, serializers and note view
이 장에서 할 내용은 아래와 같다.
1. Install REST Framework
1. Configure REST
1. Create model serializers

먼저 [django-rest-framework](https://www.django-rest-framework.org/) 에서 [installation](https://www.django-rest-framework.org/#installation) 의 내용에서 `djangorestframework` 를 설치해준다.
```shell script
$ pip install djangorestframework
```

### 8 Install and Configure Axios and app URLs
1. Configure urls on the backend
1. Install and configure axios on the vue frontend

axios 를 설치하기 위해서는 
```shell script
$ cd frontend
$ npm install axios
```