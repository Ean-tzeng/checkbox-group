export type CheckboxGroupProps = {
  options: string[];
  checkList: string[];
  column: number;
  onChecked: React.Dispatch<React.SetStateAction<string[]>>;
};
