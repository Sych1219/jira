import React from "react";
export interface User {
  id: number;
  name: string;
}
export interface SearchPanelProps {
  users: User[];
  param: { personId: string; name: string };
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form action={""}>
      <div>
        <input
          type={"text"}
          value={param.name}
          onChange={(event) => {
            console.log("input eve", param, event.target.value);
            setParam({
              ...param,
              name: event.target.value,
            });
          }}
        />
        <select
          value={param.personId}
          onChange={(event) => {
            console.log("select eve", param, event.target.value);
            setParam({
              ...param,
              personId: event.target.value,
            });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
