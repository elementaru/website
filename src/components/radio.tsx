import { useState } from "react";

function Radio({
  name,
  values,
  label,
}: {
  name: string;
  values: string[];
  label: string;
}) {
  const [selected, setSelectedValue] = useState(values[0]);

  const changeSelection = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <label className="block my-2">{label}</label>
      <ul className="flex flex-wrap styled-radio">
        {values.map((value, index) => (
          <li key={value} className="mr-2 mb-2">
            <input
              type="radio"
              className="opacity-0 absolute"
              id={`${name}-${index.toString()}`}
              name={name}
              value={value}
              onChange={changeSelection}
              checked={selected === value}
            />
            <label
              className={`${selected === value ? "selected" : ""}`}
              htmlFor={`${name}-${index.toString()}`}
            >
              {value}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Radio;
