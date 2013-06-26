module.exports = function(grunt) {
  // Configure plugins
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./bwf/client/**/*.*', './bwf/shared/**/*.*'],
        tasks: ['update'],
        options: {
          livereload: true
        }
      }
    }
  });
  
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task
  grunt.registerTask('default', ['server', 'watch']);
  
  // Start the server
  grunt.registerTask('server', 'Starts the server.', function() {
    grunt.util.spawn({
      cmd: 'node',
      args: ['./bwf/server/server.js'],
      opts: {
        stdio: 'inherit'
      }
    });
  });
  
  // Stop the server
  grunt.registerTask('stop', 'Stops the server.', function() {
    grunt.util.spawn({
      cmd: 'pkill',
      args: ['node', 'livereload'],
      opts: {
        stdio: 'inherit'
      }
    });
  });
  
  // Update the dependencies
  grunt.registerTask('update', 'Updates Google Closure\'s deps.js file.', function() {
    grunt.util.spawn({
      cmd: './bin/lime.py',
      args: ['update'],
      opts: {
        stdio: 'inherit'
      }
    });
  });
};