(function (win, doc, $) {
  $.fn.imagesloaded = function (callback) {
    var images = $(this).filter('img');

    if (!images.length) {
      callback && callback();
      return;
    }

    function observe(targetImages) {
      var unloadedImages = []
        ;

      targetImages.each(function (idx, pureImg) {
        if (!isLoaded(pureImg)) {
          unloadedImages.push(pureImg);
        }
      });

      if (!unloadedImages.length) {
        callback && callback();
        return;
      }

      setTimeout(function () {
        observe(unloadedImages);
      }, 50);
    }

    observe(images);
  };

  function isLoaded(img) {
    if (img.complete || img.readyState) {
      return true;
    }

    return false;
  }
}(window, document, jQuery));
