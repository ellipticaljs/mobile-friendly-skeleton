MOBILE FRIENDLY SKELETON
===========================

Simple responsive starter kit.


##Install

``` bash

git clone https://github.com/ellipticaljs/mobile-friendly-skeleton.git
mv mobile-friendly-skeleton my-project
cd my-project
npm install
bower install

```

##Tasks

``` bash
gulp app-scaffold (optional)
gulp app-build (optional)

gulp start-app

```

##Browser

``` bash
http://localhost:9040/

```



## Additional Tasks

``` bash
gulp start-server
gulp sass-compile
gulp css-minify
gulp sass-watch
gulp app-build
gulp app-imports
gulp app-clean
gulp app-watch
gulp watch
gulp vulcanize
gulp vulcanize-min
gulp web-component --tag <tag> --d <directory>

```


## Scaffold tasks, ellipticaljs es6/7 MVC app(optional)

```bash

# scaffold initial app
gulp app-scaffold

# crud controller
gulp app-crud-controller --class <className> --icon <icon>

# empty controller
gulp app-empty-controller --name <controllerName>

# empty view
gulp app-empty-view --name <view> --folder <viewFolder>

# list view
gulp app-list-view --name <view> --folder <viewFolder> --class <className> --icon <icon>

# detail view
gulp app-detail-view --name <view> --folder <viewFolder> --class <className> --icon <icon>

# service
gulp app-service --class <className>

# provider
gulp app-provider --class <className>

# binding
gulp app-binding --name <name>

# scaffold page app

gulp page-scaffold

# add page app to existing app

gulp page-add

# page template

gulp page-template --name <name>


```

# Demo

http://ellipticaljs.github.io/mobile-friendly-skeleton/