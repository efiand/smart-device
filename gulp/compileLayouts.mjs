import beautify from 'gulp-html-beautify';
import createHtml from 'gulp-twig';
import getData from 'gulp-data';
import gulp from 'gulp';
import processHtml from 'gulp-posthtml';
import useCondition from 'gulp-if';
import validateBem from 'gulp-html-bemlinter';

const isDev = process.env.NODE_ENV === 'development';
const lintMode = Boolean(process.env.LINT);

const compileLayouts = () =>
  gulp
    .src('source/layouts/pages/**/*.twig')
    .pipe(
      getData(async ({path}) => {
        const page = path
          .replace(/^.*pages(\\+|\/+)(.*)\.twig$/, '$2')
          .replace(/\\/g, '/');
        const versionId = new Date().getTime();
        let commonData = {};
        let pageData = {};

        try {
          commonData = await import(`../source/data/_common.js?${versionId}`);
        } catch (error) {
          // Continue regardless of error
        }

        try {
          pageData = await import(`../source/data/${page}.js?${versionId}`);
        } catch (error) {
          // Continue regardless of error
        }

        return {
          ...commonData.default,
          ...pageData.default,
          isDev,
          page,
          version: isDev ? `?${versionId}` : '',
        };
      })
    )
    .pipe(
      createHtml({
        functions: [
          {
            name: 'contains',
            func(str, pattern) {
              return str.includes(pattern);
            },
          },
        ],
      })
    )
    .pipe(processHtml())
    .pipe(validateBem())
    .pipe(useCondition(!lintMode, beautify()))
    .pipe(useCondition(!lintMode, gulp.dest('build')));

export default compileLayouts;
