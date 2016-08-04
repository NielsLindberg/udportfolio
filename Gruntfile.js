module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            create_images: {
                options: {
                    engine: 'im',
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
                },
                {
                    expand: true,
                    src: ['**.{jpeg,JPG,jpg,gif,png}'],
                    cwd: "views/images/",
                    dest: "views/images/production/"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
};
