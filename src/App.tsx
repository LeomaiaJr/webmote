import { GamePad } from './components/GamePad/GamePad';
import { ConnectionProvider } from './providers/ConnectionProvider';
import { GamePadProvider } from './providers/GamePadProvider';

function App() {
  return (
    <ConnectionProvider>
      <GamePadProvider>
        <GamePad />
      </GamePadProvider>
    </ConnectionProvider>
  );
}

export default App;
