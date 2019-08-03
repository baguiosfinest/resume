import React from 'react'

export default function Button({ text, style, onButtonClick }) {
  return (
    <div onClick = { onButtonClick } className={ (style === text.toLowerCase()) ? 'btn btn--active' : 'btn' }>
      { text }
    </div>
  )
}
