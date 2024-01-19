import React, { useState } from 'react'
import chevron from '../../assets/logo/chevron.svg'

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false)

  function toggleCollapse() {
    setToggle(!toggle)
  }

  return (
    <article>
      <div className="collapse__dropdown--containerTitle">
        <h2 className="collapse__dropdown--title">{title}</h2>
        <img
          className={
            toggle
              ? 'collapse__dropdown--icon rotated'
              : 'collapse__dropdown--icon'
          }
          onClick={toggleCollapse}
          src={chevron}
          alt="chevron"
        />
      </div>
      <div
        className={
          toggle
            ? 'collapse__dropdown--containerContent animated'
            : 'collapse__dropdown--containerContent'
        }
      >
        {toggle && <p className="collapse__dropdown--content">{content}</p>}
      </div>
    </article>
  )
}

export default Collapse
