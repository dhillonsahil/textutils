export default function About(props) {
  let myStyle = {
    color : props.mode==='light'?'black':'white' , 
    backgroundColor :  props.mode==='light'?'white':"#042149"
  }

  return (
    <>
    <div className="container" style={myStyle}>
        <h2 className='my-2'>About Us</h2>
    <div className="accordion my-3" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Why I Created This Website  ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       <strong>This Website is Actually A project which is created for the Purpose of Learning React js Completely but in this website Works Pretty Well And We can do Many Type of tasks we want to do with the help of this website</strong> 
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Website Implementation ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This Website is created using the Bootstrap, React Js. In react js the function based Implementation is done. React Router is Established so one user can go from one page to another page.</strong>  </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Us
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This Website is Created By Sahil . If you want to Connect with me you can send an email to sahildhillon@protonmail.com</strong> </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
