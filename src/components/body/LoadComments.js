import React from 'react';
import dateFormat from "dateformat";
const LoadComments = ({comments}) => {
  if (!comments) return null
  return (
    <div>
        { comments.map((c) => {
            return (
                <div key={c.id}>
                    <h5>{ c.author }</h5>
                    <p>{ c.comment }</p>
                    <p>Rating: { c. rating }</p>
                    <p>{ dateFormat( c.date, "dddd, mmmm dS, yyyy, h:MM:ss TT" ) }</p>
                </div>
                )
        })}
    </div>
  )
}

export default LoadComments;