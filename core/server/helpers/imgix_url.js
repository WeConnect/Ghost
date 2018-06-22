// Usage:
// `{{imgix_url feature_image}}`
// `{{imgix_url profile_image '{ w: 400 }'}}`
// Note:
// `{{imgix_url}}` - does not work, argument is required
//
// Returns the URL for the current object scope i.e. If inside a post scope will return image permalink

var ImgixClient = require('imgix-core-js');
var parse = require('hjson').parse;

var client = new ImgixClient({
    host: 'labs-ghost.imgix.net'
});

var proxy = require('./proxy'),
    imgUrl = require('./img_url');

// We use the name facebook_url to match the helper for consistency:
module.exports = function imgix_url(attr, options) { // eslint-disable-line camelcase
    // // CASE: if no attribute is passed, e.g. `{{imgix_url}}` we show a warning
    // if (arguments.length < 2) {
    //     proxy.logging.warn(proxy.i18n.t('warnings.helpers.imgix_url.attrIsRequired'));
    //     return;
    // }

    // var absolute = options && options.hash && options.hash.absolute;

    // // CASE: if attribute is passed, but it is undefined, then the attribute was
    // // an unknown value, e.g. {{imgix_url feature_img}} and we also show a warning
    // if (attr === undefined) {
    //     proxy.logging.warn(proxy.i18n.t('warnings.helpers.imgix_url.attrIsRequired'));
    //     return;
    // }

    // if (attr) {
    //     return urlService.utils.urlFor('image', {image: attr}, absolute);
    // }

    var url = imgUrl(attr, options);

    console.log('************** imgix_url.url', url);

    return `${url}?foo=bar`;

    // CASE: if you pass e.g. cover_image, but it is not set, then attr is null!
    // in this case we don't show a warning
};
