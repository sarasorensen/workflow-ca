module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        files: {
          "dist/css/style.css": "sass/style.scss",
        },
      },
    },
    cssmin: {
      minify: {
        src: "dist/css/style.css",
        dest: "dist/css/minified/style.min.css",
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["dist/css/minified/style.min.css", "*.html"],
        },
        options: {
          watchTask: true,
          server: "./",
        },
      },
    },
    imagemin: {
      dist: {
        options: {
          progressive: true,
        },
        files: [
          {
            expand: true,
            cwd: "dist/images",
            src: "**/*.{gif,GIF,jpg,JPG,png,PNG}",
            dest: "dist/compressed-images",
          },
        ],
      },
    },
    watch: {
      css: {
        files: "sass/style.scss",
        tasks: ["sass"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.registerTask("default", ["imagemin"]);
  grunt.registerTask("default", ["watch"]);
};
