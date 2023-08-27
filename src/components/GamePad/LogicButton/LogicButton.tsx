import { ReactNode } from 'react';
import {
  GamePadMessageType,
  useGamePad,
} from '../../../providers/GamePadProvider';

interface LogicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  name: string;
}

export const LogicButton = (props: LogicButtonProps) => {
  const { sendData } = useGamePad();

  const handleButtonChange = (value: boolean) => {
    sendData({
      name: props.name,
      type: GamePadMessageType.BUTTON,
      value,
    });
  };

  const handleButtonPress = () => {
    handleButtonChange(true);
  };

  const handleButtonRelease = () => {
    handleButtonChange(false);
  };

  return (
    <button
      {...props}
      onMouseDown={handleButtonPress}
      onTouchStart={handleButtonPress}
      onMouseUp={handleButtonRelease}
      onTouchEnd={handleButtonRelease}
      onTouchCancel={handleButtonRelease}
    >
      {props.children}
    </button>
  );
};
