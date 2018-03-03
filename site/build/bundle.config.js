module.exports = {
  bundle: {
    main: {
      scripts: [
        'src/assets/js/jquery.js',
        'src/assets/bootstrap/js/bootstrap.min.js',
        'src/assets/js/jquery.stellar.min.js',
        'src/assets/js/jquery.sticky.js',
        'src/assets/js/smoothscroll.js',
        'src/assets/js/wow.min.js',
        'src/assets/js/jquery.countTo.js',
        'src/assets/js/jquery.inview.min.js',
        'src/assets/js/jquery.easypiechart.js',
        'src/assets/js/jquery.shuffle.min.js',
        'src/assets/js/jquery.magnific-popup.min.js',
        'src/assets/js/scripts.js',
      ],
      options: {
        rev: false
      }
    }
  },
  copy: 'src/assets/**/*.{png,svg,jpg,gif,pdf}'
};
