import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import {stacksvg} from 'gulp-stacksvg';

const optimizeRasters = imagemin([
  imagemin.optipng({optimizationLevel: 3}),
  imagemin.mozjpeg({quality: 75, progressive: true}),
]);

const svgo = () =>
  gulp
    .src('source/img/**/*.{svg}')
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [
            {removeViewBox: false},
            {removeRasterImages: true},
            {removeUselessStrokeAndFill: false},
          ],
        }),
      ])
    )
    .pipe(gulp.dest('source/img'));

const sprite = () =>
  gulp
    .src('source/img/sprite/*.svg')
    .pipe(stacksvg({output: 'sprite'}))
    .pipe(gulp.dest('build/img'));

/*
  Optional tasks
  ---------------------------------

  Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
  а не все изображения в img во всех папках.

  root = '' - по дефолту webp добавляются и обновляются во всех папках в source/img/
  root = 'content/' - webp добавляются и обновляются только в source/img/content/
*/

const createWebp = () => {
  const root = '';
  return gulp
    .src(`source/img/${root}**/*.{png,jpg}`)
    .pipe(optimizeRasters)
    .pipe(webp({quality: 75}))
    .pipe(gulp.dest(`source/img/${root}`));
};

const optimizeImages = () =>
  gulp
    .src('build/**/*.{png,jpg}', {base: 'build'})
    .pipe(optimizeRasters)
    .pipe(gulp.dest('build'));

export {svgo, sprite, createWebp, optimizeImages};
