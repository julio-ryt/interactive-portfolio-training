'use strict'

const { src, dest, watch } = require('gulp')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const sass = require('gulp-sass')(require('sass'))

function scssTask() {
  return src('./sass/**/*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssnano()]))
    .pipe(dest('./css', { sourcemaps: '.' }))
}

function watchTask() {
  watch('./sass/**/*.scss', scssTask)
}

exports.default = watchTask
