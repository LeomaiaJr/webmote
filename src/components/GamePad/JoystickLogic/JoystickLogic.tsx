import { Joystick } from 'react-joystick-component';
import {
  IJoystickProps,
  IJoystickUpdateEvent,
} from 'react-joystick-component/build/lib/Joystick';
import {
  useGamePad,
} from '../../../providers/GamePadProvider';

interface JoystickLogicProps extends IJoystickProps {
  name: string;
}

export const JoystickLogic = ({ name, ...props }: JoystickLogicProps) => {
  const { sendAxis } = useGamePad();

  const handleChange = (e: IJoystickUpdateEvent) => {
    sendAxis({
      name,
      x: e.x || 0,
      y: e.y || 0,
    });
  };

  return (
    <Joystick {...props} size={100} move={handleChange} stop={handleChange} />
  );
};
