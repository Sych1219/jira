import React from "react";
export const SearchPanel = ({ param, setParam, users }) => {
  return (
    <form action={""}>
      <div>
        <input
          type={"text"}
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
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
          {users?.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
