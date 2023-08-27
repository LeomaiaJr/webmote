import { Joystick } from 'react-joystick-component';
import { ButtonsGroup } from './components/GamePad/ButtonsGroup/ButtonsGroup';
import { ActionButton } from './components/GamePad/ActionButton/ActionButton';
import { ShoulderButton } from './components/GamePad/ShoulderButton/ShoulderButton';

function App() {
  return (
    <div className="p-4 md:p-8">
      <div className="bg-gray-300 rounded-xl p-4">
        <div className="flex flex-row justify-between items-center px-4 md:px-8">
          <ShoulderButton right />
          <ShoulderButton right={false} />
        </div>

        <div className="mt-8 flex flex-row items-center w-full justify-evenly">
          <Joystick
            size={100}
            sticky={true}
            move={() => {}}
            stop={(e) => {
              console.log(e);
            }}
          />

          <ActionButton label="Back" />
          <ActionButton label="Start" />

          <ButtonsGroup />
        </div>

        <div className="mt-4 mb-10 w-[65%] flex justify-end">
          <Joystick
            size={100}
            sticky={true}
            move={() => {}}
            stop={(e) => {
              console.log(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
