import { ChangeEvent } from "react";
import { Tournament } from "../../types";
import "./Select.scss";

interface SelectProps<T> {
  items: Array<T>;
  label: string;
  id?: string;
  handleSelection: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  items,
  label,
  handleSelection,
  id,
}: SelectProps<Tournament>) => {
  return (
    <select
      className="select"
      id={id}
      onChange={handleSelection}
      defaultValue={label}
    >
      <option value={label} disabled>
        {label}
      </option>

      {items?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
