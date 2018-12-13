import gulp from 'gulp';
import path from 'path';
import { paths } from '../../config';

export default gulp.task('move', (done) => {
  gulp.src(path.resolve(paths.src, paths.fonts.src))
    .pipe(gulp.dest(path.join(paths.dist, paths.fonts.dist)));

  gulp.src(path.resolve(paths.src, paths.media.src))
    .pipe(gulp.dest(path.join(paths.dist, paths.media.dist)));
  
  gulp.src(path.resolve(paths.src, paths.json.src))
    .pipe(gulp.dest(path.join(paths.dist, paths.json.dist)));

  done();
});