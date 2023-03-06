import { useState,useEffect } from "react";
import Github from "./components/Github";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
      const response = await fetch('https://api.lanyard.rest/v1/users/722901871001337968');
      const data = await response.json();
      const arr = [data.data];
      await setData(arr);
  }

  useEffect(() => {
      getData();
  },[])

  const colors = {
    online: 'border border-5 border-success',
    idle: 'border border-5 border-warning',
    dnd: 'border border-5 border-danger',
    offline: 'border border-5 border-secondary',
  }

  return (
    <>
      <div className="container p-5">
        
        {data.map((data) => (
          <>
            <div className="row">
              <div className="col-sm-9">
                <h1 className="display-3">{data.discord_user.username} <small className="h3 font-monospace text-info">#{data.discord_user.discriminator}</small></h1>
                <h5 className="font-monospace"><i class="fa-brands fa-spotify"></i> {data.listening_to_spotify ? data.spotify.song : "I'm not listening anything"}</h5>
                <h5 className="text-white-50 font-monospace">Hello, I'm Kerem. I am a high-school student from Turkey. I have been in coding since 2020. I am a newbie front-end developer. I have been working on web development for the last 4 months. I mainly use Node based technologies. My favourite technologies is NextJS.</h5>
              </div>
              <div className="col-sm-3">
                  <img className={"float-sm-end rounded-circle " + colors[data.discord_status]} width="150" height="150" src={"https://cdn.discordapp.com/avatars/722901871001337968/" + data.discord_user.avatar + ".webp"} alt="keri's profile"/>
                  
              </div>
              <hr className="mt-4 rounded"/>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h1 className="h1">I generally use this technologies:</h1>
              </div>
                <Card title="Javascript" desc="3131"/>
                <Card title="Python" desc="3131"/>
                <Card title="HTML" desc="3131"/>
                <Card title="CSS" desc="3131"/>
                <Card title="NodeJS" desc="3131"/>
                <Card title="Bootstrap" desc="3131"/>
                <Card title="Tailwind" desc="3131"/>
                <Card title="NextJS" desc="3131"/>
                <Card title="ReactJS" desc="3131"/>
                <Card title="MongoDB" desc="3131"/>
                <Card title="Postman" desc="3131"/>
                <Card title="Git" desc="3131"/>
            </div>
            <Github/>
          </>
        ))}
      </div>
      <Navbar/>
    </>
  );
}

export default App;
