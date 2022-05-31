import React, { useEffect } from 'react'

export const Explore = () => {

    useEffect(() => {
      document.title = "About Us"
    }, [])
  
    return (
      <div>
        <h2 className="display-4">From dream to reality! [PRESS START]</h2>
        <p className="lead">
        Tekos France is the game changer in the IT offshore outsourcing market. Adhering to our strong values, we accompany our partners in the long term in order to develop their activity with high efficiency, pragmatism and authenticity.
        </p>
        <div className="row">
          <div className="col-sm">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
          </div>
          <div className="col-sm">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Explore