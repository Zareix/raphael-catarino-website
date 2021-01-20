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
    <div style={bioStyles} className="container p-4" id={props.id}>
      <div className="row pt-2 justify-content-center">
        <h1 className="col-12 text-center">Biographie</h1>
        <span style={bioTextStyles} className="col-8 mt-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          laudantium voluptatum quod nam non asperiores molestiae dignissimos
          sunt iste, totam veniam reiciendis eaque impedit incidunt quidem
          excepturi quo obcaecati ducimus?
        </span>
      </div>
    </div>
  )
}

export default Biographie
