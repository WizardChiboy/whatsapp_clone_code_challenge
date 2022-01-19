import React, {useEffect} from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

function App() {

  useEffect(()=> {

    const pusher = new Pusher('7ae261aa9a96b20010db', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', () => {
      alert(JSON.stringify(data));
    });

  }, [])
  return (
    <>
      <div className="app">
        <div className="app__body">
          <SideBar />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default App;
