import React from 'react'

type Props = {
    title: String
    content: String
    commentsQty: number
    tags: String[]

    // 8 - enum
    category: Category
}

export enum Category{
  JS = 'JavaScript',
  TS = 'TypeScript',
  PY = 'Python'
}

const Destructuring = ({title, content, commentsQty, tags, category} : Props) => {
  return (
    <div>
        <h2>{tags.map(tag => (
            <span>#{tag}</span>
        ))}</h2>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring