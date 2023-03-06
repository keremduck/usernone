export default function Card(props){
    return(
        <div className="card text-white shadow-lg me-3 mt-3 mx-2" style={{width:"10rem", backgroundColor:"#150050"}}>
          <div className="card-body">
            <h6 className="card-title font-monospace">{props.title}</h6>
          </div>
        </div>
    )
}