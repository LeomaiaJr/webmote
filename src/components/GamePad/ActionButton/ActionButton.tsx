import { LogicButton } from '../LogicButton/LogicButton';

interface ActionButtonProps {
  label: string;
  name: string;
}

export const ActionButton = ({ label, name }: ActionButtonProps) => {
  return (
    <LogicButton
      name={name}
      className="bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-full flex items-center justify-center px-2 py-1 w-fit border-gamepad-constrast border-4"
    >
      {label}
    </LogicButton>
  );
};
