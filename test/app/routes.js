import { Router } from '../../index.js'

const router = new Router()

router.get('/posts', 'posts#index')
router.get('/posts/:id', 'posts#show')

export default router._router
