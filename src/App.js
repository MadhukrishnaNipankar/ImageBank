import './App.css';
import { useEffect } from 'react';
import { createApi } from 'unsplash-js';
function App() {
  
  const api = createApi({
    accessKey: "kv38zDAO_THg-FaetnVoYQaeVAwVOZBc5n0L_3Ay56s"
  });

  // useEffect(() => {
  //   api.search
  //     .getPhotos({ query: "cat",perPage:30, orientation: "landscape" })
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(() => {
  //       console.log("something went wrong!");
  //     });
  // }, []);


  return (
    <div className="App">
      IMAGE BANK :)
    </div>
  );
}

export default App;
