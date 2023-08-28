import { ReactNode } from 'react';
import {
  useGamePad,
} from '../../../providers/GamePadProvider';

interface LogicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  name: string;
}

export const LogicButton = (props: LogicButtonProps) => {
  const { sendButton } = useGamePad();

  const handleButtonChange = (pressed: boolean) => {
    sendButton({
      name: props.name,
      pressed,
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
