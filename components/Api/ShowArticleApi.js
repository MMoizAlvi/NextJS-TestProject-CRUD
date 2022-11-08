const showArticleApi = async (context) =>await fetch(`${process.env.GET_ARTICLES}/${context.params.id}`)

export default showArticleApi
