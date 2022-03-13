export default class Controller {
  performAction (actionName, req, res, next) {
    this[actionName](req, res, next)
  }
}
