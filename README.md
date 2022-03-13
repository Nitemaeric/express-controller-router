# Express Controller Router

This Rails-inspired package is used to structure your API logic away from your routing.

## Installation

`npm install -S express-controller-router`

## Usage

### controllers/posts_controller.js
```javascript
import { Controller } from 'express-controller-router'
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

```

### routes.js
```javascript
import { Router } from 'express-controller-router'

const router = new Router()

router.get('/posts', 'posts#index')
router.get('/posts/:id', 'posts#show')

export default router
```

### index.js
```javascript
import express from 'express'
import routes from './routes'

const app = express()

app.use(routes)

app.listen(3000)
```

Planned functionality:

- [ ] Resourceful Routing

  ```javascript
  router.resources('posts')

  // => router.get('/posts') to `posts#index`
  // => router.post('/posts') to `posts#create`
  // => router.get('/posts/:id') to `posts#show`
  // => router.patch('/posts/:id') to `posts#update`
  // => router.put('/posts/:id') to `posts#update`
  // => router.delete('/posts/:id') to `posts#delete`

  router.resource('current_user')

  // => router.get('/current_user') to `current_users#show`
  // => router.patch('/current_user') to `current_users#update`
  // => router.put('/current_user') to `current_users#update`
  // => router.delete('/current_user') to `current_users#destroy`
  ```

- [ ] Nested Routing

  ```javascript
  router.resources('posts', router => {
    router.resources('comments')
  })

  // => router.get('/posts')
  // => router.post('/posts')
  // => router.get('/posts/:id')
  // => router.patch('/posts/:id')
  // => router.put('/posts/:id')
  // => router.delete('/posts/:id')
  // => router.get('/posts/:post_id/comments')
  // => router.post('/posts/:post_id/comments')
  // => router.get('/posts/:post_id/comments/:id')
  // => router.patch('/posts/:post_id/comments/:id')
  // => router.put('/posts/:post_id/comments/:id')
  // => router.delete('/posts/:post_id/comments/:id')
  ```

- [ ] Shallow Routing

  ```javascript
  router.resources('posts', { shallow: true }, router => {
    router.resources('comments')
  })

  // => router.get('/posts')
  // => router.post('/posts')
  // => router.get('/posts/:id')
  // => router.patch('/posts/:id')
  // => router.put('/posts/:id')
  // => router.delete('/posts/:id')
  // => router.get('/posts/:post_id/comments')
  // => router.post('/posts/:post_id/comments')
  // => router.get('/comments/:id')
  // => router.patch('/comments/:id')
  // => router.put('/comments/:id')
  // => router.delete('/comments/:id')
  ```
