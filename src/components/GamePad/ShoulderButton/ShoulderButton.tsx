interface ShoulderButtonProps {
  label?: string;
  right: boolean;
}

export const ShoulderButton: React.FC<ShoulderButtonProps> = ({
  label,
  right,
}) => {
  const buttonText = label ?? (right ? 'RB' : 'LB');

  const cn = [
    'px-20 py-4 hover:bg-gray-600 text-white font-bold flex items-center justify-center w-fit rounded-full border-gamepad-constrast border-4',
    right ? 'bg-gray-500' : 'bg-black',
  ].join(' ');

  return <button className={cn}>{buttonText}</button>;
};
