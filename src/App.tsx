import { GamePad } from './components/GamePad/GamePad';
import { GamePadProvider } from './providers/GamePadProvider';

function App() {
  return (
    <GamePadProvider>
      <GamePad />
    </GamePadProvider>
  );
}

export default App;
