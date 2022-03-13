import { Controller } from '../../../index.js'
import Post from '../models/post.js'

export default class PostsController extends Controller {
  async index (req, res) {
    const posts = await Post.all()

    res.json(posts)
  }

  async show (req, res) {
    const post = await Post.find(req.params.id)

    res.json(post)
  }
}
