import { ChangeEvent } from "react";

interface SelectProps<T> {
  items: Array<T>;
  label: string;
  handleSelection: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  items,
  label,
  handleSelection,
}: SelectProps<{ id: string; name: string }>) => {
  return (
    <select onChange={handleSelection}>
      <option value="" selected disabled hidden>
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
