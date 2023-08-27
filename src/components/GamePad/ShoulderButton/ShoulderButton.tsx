import { LogicButton } from '../LogicButton/LogicButton';

interface ShoulderButtonProps {
  label?: string;
  right: boolean;
  name: string;
}

export const ShoulderButton: React.FC<ShoulderButtonProps> = ({
  label,
  right,
  name,
}) => {
  const buttonText = label ?? (right ? 'RB' : 'LB');

  const cn = [
    'px-16 py-2 md:px-20 md:py-4 hover:bg-gray-600 text-white font-bold flex items-center justify-center w-fit rounded-full border-gamepad-constrast border-4',
    right ? 'bg-gray-500' : 'bg-black',
  ].join(' ');

  return (
    <LogicButton name={name} className={cn}>
      {buttonText}
    </LogicButton>
  );
};
