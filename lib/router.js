import express from 'express'
import path from 'path'

export default class Router {
  _router = express.Router()

  constructor () {
    this._controllersPath = path.resolve('./test/app/controllers')
  }

  async get (path, to) {
    const [controller, action] = await this.#extractControllerAction(to)

    this._router.get(path, (req, res, next) => {
      controller.performAction(action, req, res, next)
    })
  }

  async post (path, to) {
    const [controller, action] = await this.#extractControllerAction(to)

    this._router.post(path, (req, res, next) => {
      controller.performAction(action, req, res, next)
    })
  }

  async patch (path, to) {
    const [controller, action] = await this.#extractControllerAction(to)

    this._router.patch(path, (req, res, next) => {
      controller.performAction(action, req, res, next)
    })
  }

  async put (path, to) {
    const [controller, action] = await this.#extractControllerAction(to)

    this._router.put(path, (req, res, next) => {
      controller.performAction(action, req, res, next)
    })
  }

  async delete (path, to) {
    const [controller, action] = await this.#extractControllerAction(to)

    this._router.delete(path, (req, res, next) => {
      controller.performAction(action, req, res, next)
    })
  }

  async resources (resource, options = {}) {
    resourcefulActions = ['index', 'create', 'show', 'update', 'delete']
  }

  async #extractControllerAction (string) {
    const [controllerName, actionName] = string.split('#')
    const controller = await import(this._controllersPath + `/${controllerName}_controller.js`)
    return [new controller.default(), actionName]
  }
}
