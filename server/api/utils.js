module.exports = {
  isAdmin: function(req, res, next) {
    console.log(req.user.isAdmin)
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).send('Unauthorized')
    }
  }
}
