import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useDebounce, useMount } from "../../utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
export interface Param {
  name: string;
  personId: string;
}
export const ProjectListScreen = () => {
  const [param, setParam] = useState<Param>({
    name: "",
    personId: "",
  });

  const debounceParam = useDebounce<Param>(param, 200);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`,
    ).then(async (res) => {
      console.log("async");
      if (res.ok) {
        const list = await res.json();
        console.log("list", list);
        setList(list);
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        // const users = await res.json();
        setUsers(await res.json());
      }
    });
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        console.log("async");
        if (res.ok) {
          const list = await res.json();
          console.log("list", list);
          setList(list);
        }
      },
    );
  });

  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
