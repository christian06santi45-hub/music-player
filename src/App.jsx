import { MusicPlayer } from "./components/MusicPlayer.jsx";
import { AllSongs } from "./components/AllSongs.jsx";
import { Playlists } from "./components/Playlists.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MusicProvider } from "./contexts/MusicContext.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs />} />
                <Route path="/playlists" element={<Playlists />} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
