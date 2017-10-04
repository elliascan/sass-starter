# sass-starter
Sass workflow and dev server using gulp

## Configuration Node, Gulp and
Make sure **Node.js**, **Gulp.js** and **NPM** is installed. Use the following to check intallation:
```
node -v
gulp -v
npm -v
```
Ensure curl is intalled, if not use the following command:
```
sudo apt-get install curl
```

Install python software properties
```
sudo apt-get install python-software-properties
```
## Installing **Node.js**
Visit https://nodejs.org/en and browse to Debian and Ubuntu based Linux distributions to view the latest versions. Currently it is v8, use the follwing commands:
```
curl -sL https://deb.nodesource.com/setup_8.x
sudo -E bash - sudo apt-get install -y nodejs
```

## Installing **Gulp.js**
The command below will install gulp globally on the system:
```
sudo npm install -g gulp
```

# Configuring Sass
Navigate to project path and open terminal in that folder, run the command below to create a **packaje.json** file and complete the query:
```
npm init
```

## Installing dependencies
Gulp Sass and browser-sync installation command
```
sudo npm install --save-dev gulp-sass browser-sync
```

## Create a *gulpfile.js*
```
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass
gulp.task('sass', function(){
	return gulp.src(['sass/*.sass'])
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

//Watch & Serve
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: '.'
	});

	gulp.watch(['sass/*sass'], ['sass']);
	gulp.watch(['*.html']).on('change', browserSync.reload);
});

//Default
gulp.task('default', ['serve']);
```

Intall the golp-cli on the system globally using terminal to run the gulpfile:
```
sudo npm install -g gulp-cli
```
Run Gulp to compile the sass an open the project on live view
```
gulp
```

## Additional
Alternatively a script can be created on the **package.json** file, ammend the scripts section by replacing '**"test": "echo \"Error..."**' with '**"start": "gulp"**'

From the terminal you can now run npm start to start the server
```
npm start
```

**Note:** Run the 'npm start' command from the project directory.

