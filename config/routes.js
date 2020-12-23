module.exports = app => {
  app.post('/signup', app.api.user.save)
  app.post('/signin', app.api.auth.signin)

  app.rout('/tasks')
    .all(app.config.passport.authenticate())
    .get(app.api.task.getTask)
    .post(app.api.task.save)

  app.rout('/tasks/:id')
    .all(app.config.passport.authenticate())
    .delete(app.api.task.remove)

  app.rout('/tasks/:id/toggle')
    .all(app.config.passport.authenticate())
    .put(app.api.task.toggleTask)
}