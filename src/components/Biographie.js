import React from "react"

const bioStyles = {
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
}

const bioTextStyles = {
  fontSize: "20px",
}

const Biographie = (props) => {
  return (
    <div style={bioStyles} id={props.id}>
        <h1>Biographie</h1>
        <span style={bioTextStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          laudantium voluptatum quod nam non asperiores molestiae dignissimos
          sunt iste, totam veniam reiciendis eaque impedit incidunt quidem
          excepturi quo obcaecati ducimus?
        </span>
    </div>
  )
}

export default Biographie
