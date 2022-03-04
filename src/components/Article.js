import React from "react"

function Article ({title, date="January 1, 1970", preview, minutes}) {
    return (
        <div>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>

            {minutes}
        </div>

    )

}

export default Article






// - an `<h3>` element displaying the _title_ of the article, passed as a prop
//   - a `<small>` element displaying the _date_ of the article, passed as a prop
//     - a _default value_ of "January 1, 1970" should be used if no date is passed as a prop
//   - a `<p>` element displaying the _preview_ of the article, passed as a prop
