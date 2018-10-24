module.exports = {

    dashboard: function (req, res) {
      res.view('pages/dashboard', { layout: 'layouts/admin_layout' });
    }
  
};