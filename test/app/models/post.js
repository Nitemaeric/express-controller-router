export default class Post {
  static _mockCollection = [
    {
      id: 1,
      title: "Post 1",
      body: "Here is some text for the body."
    },
    {
      id: 2,
      title: "Post 2",
      body: "Word."
    }
  ]

  static all () {
    return this._mockCollection
  }

  static find (id) {
    const post = this._mockCollection.find(item => item.id.toString() === id)

    if (!post) {
      throw new Error('not found')
    }

    return post
  }
}
