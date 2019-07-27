import React from 'react'

export const FormSearchOption = ["All", "Mens", "Womens", "Childrens"].map((text, index) =>
  <option key={`FormSearchArray${text}${index}`} value={text}>{`${text} Categories`}</option>)
