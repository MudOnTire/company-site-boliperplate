/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    bodyClass:'homepage'
  });
};

/**
 * GET /products
 * Products page.
 */
exports.products = (req, res) => {
  res.render('products', {
    title: 'Products',
    bodyClass:'left-sidebar'
  });
};

/**
 * GET /services
 * Services page.
 */
exports.services = (req, res) => {
  res.render('services', {
    title: 'Services'
  });
};

/**
 * GET /contact
 * Contact page.
 */
exports.contact = (req, res) => {
  res.render('contact', {
    title: 'Contact Us'
  });
};

/**
 * GET /about
 * About page.
 */
exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};