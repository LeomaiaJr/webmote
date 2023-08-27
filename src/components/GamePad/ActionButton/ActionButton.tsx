interface ActionButtonProps {
  label: string;
}

export const ActionButton = ({ label }: ActionButtonProps) => {
  return (
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-full flex items-center justify-center px-2 py-1 w-fit border-gamepad-constrast border-4">
      {label}
    </button>
  );
};
