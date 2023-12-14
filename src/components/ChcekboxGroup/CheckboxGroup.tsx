import { CheckboxGroupProps } from "./types/CheckboxGroup";
import "./checkboxGroup.css";

export default function CheckboxGroup({
  options,
  column,
  checkList,
  onChecked,
}: CheckboxGroupProps) {
  const checkboxClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    onChecked((previousList) => {
      const target = event.target;
      if (target.checked) {
        return addItem(previousList, value);
      }
      return removeItem(previousList, value);
    });
  };

  const removeItem = (list: string[], value: string) => {
    return list.filter((item) => item !== value);
  };

  const addItem = (list: string[], value: string) => {
    return [...list, value];
  };

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.checked) {
      onChecked(options);
    } else {
      onChecked([]);
    }
  };
  return (
    <>
      <div
        className="wrap"
        style={{
          gridTemplateRows: `repeat(${Math.ceil(
            (options.length + 1) / column
          )}, 1fr)`,
        }}
      >
        <label>
          <input type="checkbox" value="all" onChange={selectAll} />
          <span>Select All</span>
        </label>
        {options.map((option) => (
          <label key={option} className="">
            <input
              type="checkbox"
              value={option}
              checked={checkList.includes(option)}
              onChange={(event) => checkboxClick(event, option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </>
  );
}
