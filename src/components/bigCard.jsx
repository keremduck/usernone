export default function BigCard(props){
    return(
      <>
      <div className="card float-start me-3 mt-2 shadow" style={{width:"18rem", height:"9rem", backgroundColor:"#150050", position:"relative"}}>
          <div className="card-body" style={{width:"18rem;"}}>
              <div className="row">
                  <div className="col-md-9">
                      <h5 className="card-title text-info font-monospace">{props.title}</h5>
                  </div>
                  <div className="col-md-3">
                      <h6 className="card-title float-end"><i className="fa-solid fa-star"></i> {props.star}</h6>
                  </div>
              </div>
              <h6 className="card-subtitle font-monospace">{props.desc}</h6>
              <p className="card-text">{props.longDesc}</p>
              <a rel="noreferrer" target="_blank" href={props.url} className="card-link float-end"><i className="fas fa-arrow-right" style={{position:"absolute", bottom:15, right:15}}></i></a>
          </div>
      </div>
  </>
    )
}  