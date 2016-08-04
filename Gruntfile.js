module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            create_images: {
                options: {
                    engine: 'im',
                    quality: 25,
                    newFilesOnly: true,
                    autoOrient: true,
                    sizes: [
                        { width: 100 }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**.{jpeg,JPG,jpg,gif,png}'],
                    cwd: "img/",
                    dest: "img/production/"
                }, {
                    expand: true,
                    src: ['**.{jpeg,JPG,jpg,gif,png}'],
                    cwd: "views/images/",
                    dest: "views/images/production/"
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'index.html': 'indexsrc.html' // 'destination': 'source'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images', 'cssmin', 'htmlmin']);
};
