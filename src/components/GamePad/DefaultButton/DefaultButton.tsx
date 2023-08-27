interface DefaultButtonProps {
  label: string;
  color: 'red' | 'green' | 'blue' | 'yellow';
}

export const DefaultButton = ({ label, color }: DefaultButtonProps) => {
  const getColor = () => {
    switch (color) {
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'yellow':
        return 'bg-yellow-500 hover:bg-yellow-600';
    }
  };

  const cn = [
    'w-16 h-16 text-white font-bold rounded-full flex items-center justify-center border-gamepad-constrast border-4',
    getColor(),
  ].join(' ');

  return (
    <div>
      <button className={cn}>{label}</button>
    </div>
  );
};
