import { ShoulderButton } from './ShoulderButton/ShoulderButton';
import { ActionButton } from './ActionButton/ActionButton';
import Draggable from 'react-draggable';
import { DefaultButton } from './DefaultButton/DefaultButton';
import { JoystickLogic } from './JoystickLogic/JoystickLogic';

export const GamePad = () => {
  return (
    <div className="p-4 md:p-8 h-full w-full">
      <div className="gamepad flex bg-gray-300 rounded-xl p-4 relative h-full w-full flex-col select-none">
        <div className="mt-4 flex justify-evenly">
          <Draggable bounds=".gamepad">
            <div className="w-fit h-fit relative">
              <ShoulderButton name="LEFT_SHOULDER" right={false} />
            </div>
          </Draggable>

          <Draggable bounds=".gamepad">
            <div className="w-fit h-fit relative">
              <ShoulderButton name="RIGHT_SHOULDER" right />
            </div>
          </Draggable>
        </div>

        <div className="flex items-center justify-evenly mt-8">
          <Draggable bounds=".gamepad" handle=".left-joystick-handle">
            <div className="w-fit h-fit">
              <JoystickLogic name="left" />
              <div className="left-joystick-handle w-4 h-4 bg-black rounded-full text-white flex items-center justify-center font-bold text-[10px]">
                L
              </div>
            </div>
          </Draggable>

          <div className="flex gap-8">
            <Draggable bounds=".gamepad">
              <div className="w-fit h-fit">
                <ActionButton name="BACK" label="Back" />
              </div>
            </Draggable>

            <Draggable bounds=".gamepad">
              <div className="w-fit h-fit">
                <ActionButton name="START" label="Start" />
              </div>
            </Draggable>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <Draggable bounds=".gamepad">
                  <div className="w-fit h-fit">
                    <DefaultButton name="Y" label="Y" color="yellow" />
                  </div>
                </Draggable>
              </div>
              <div className="flex justify-between gap-16">
                <Draggable bounds=".gamepad">
                  <div className="w-fit h-fit">
                    <DefaultButton name="X" label="X" color="blue" />
                  </div>
                </Draggable>
                <Draggable bounds=".gamepad">
                  <div className="w-fit h-fit">
                    <DefaultButton name="B" label="B" color="red" />
                  </div>
                </Draggable>
              </div>
              <div className="flex justify-center">
                <Draggable bounds=".gamepad">
                  <div className="w-fit h-fit">
                    <DefaultButton name="A" label="A" color="green" />
                  </div>
                </Draggable>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[65%] justify-end mt-4">
          <Draggable bounds=".gamepad" handle=".right-joystick-handle">
            <div className="w-fit h-fit">
              <JoystickLogic name="right" />
              <div className="right-joystick-handle w-4 h-4 bg-black rounded-full text-white flex items-center justify-center font-bold text-[10px]">
                R
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
};
