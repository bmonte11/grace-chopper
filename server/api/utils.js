module.exports = {
  isAdmin: function(req, res, next) {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).send('Unauthorized')
    }
  }
}
