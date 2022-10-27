import React from 'react'

export default function() {
  const list = []
  for (let index = 0; index < 20; index++) {
    list.push(index)
  }
  return (
    <div>
      首页
      {list.map(item => {
        return <p key={item}>{item}</p>
      })}
    </div>
  )
}
