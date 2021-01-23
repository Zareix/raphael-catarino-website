import React from "react"

const bioStyles = {
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  textAlign: "center"
}

const Biographie = (props) => {
  return (
    <div style={bioStyles} id={props.id}>
        <h1 className="contTitle">Biographie</h1>
        <p className="contText text-justify pl-5 pr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          laudantium voluptatum quod nam non asperiores molestiae dignissimos
          sunt iste, totam veniam reiciendis eaque impedit incidunt quidem
          excepturi quo obcaecati ducimus?
        </p>
    </div>
  )
}

export default Biographie
