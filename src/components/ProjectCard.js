import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";


export const ProjectCard = ({ title, description,description2,description3,description4,description5,description6, imgUrl }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);}


  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={handleClick} className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          
 

        </div>
      </div>
      {isShown && (
  <div>
    <span>{description}</span>
          <div>{description2}</div>
          <div>{description5}</div>
          <div>{description6}</div>
    <h6>{description3}</h6>
    <h6>{description4}</h6>
  </div>
)}
    </Col>
    
  )
}
