import { DefaultButton } from '../DefaultButton/DefaultButton';

export const ButtonsGroup = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <DefaultButton label="Y" color="yellow" />
        </div>
        <div className="flex justify-between gap-16">
          <DefaultButton label="X" color="blue" />
          <DefaultButton label="B" color="red" />
        </div>
        <div className="flex justify-center">
          <DefaultButton label="A" color="green" />
        </div>
      </div>
    </div>
  );
};
