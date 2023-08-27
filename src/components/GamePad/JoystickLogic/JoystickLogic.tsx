import { Joystick } from 'react-joystick-component';
import {
  IJoystickProps,
  IJoystickUpdateEvent,
} from 'react-joystick-component/build/lib/Joystick';
import {
  GamePadMessageType,
  useGamePad,
} from '../../../providers/GamePadProvider';

interface JoystickLogicProps extends IJoystickProps {
  name: string;
}

export const JoystickLogic = ({ name, ...props }: JoystickLogicProps) => {
  const { sendData } = useGamePad();

  const handleChange = (e: IJoystickUpdateEvent) => {
    sendData({
      name,
      type: GamePadMessageType.AXIS,
      value: [e.x || 0, e.y || 0],
    });
  };

  return (
    <Joystick {...props} size={100} move={handleChange} stop={handleChange} />
  );
};
