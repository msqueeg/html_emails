/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
   
    // Task configuration.
    htmlbuild: {
      dist: {
        src: 'base/*.html',
        dest: 'compile/',
        options: {
          logOptions: true,
          styles:{
            ink: 'ink.css'
          },
          sections: {
            layout: {
              header: 'layout/_header.html',
              nav: 'layout/_nav.html',
              footer: 'layout/_footer.html',
              fourColumn: 'layout/_fourCol.html'
            }
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-html-build');

  // Default task.
  grunt.registerTask('default', ['htmlbuild']);

};
