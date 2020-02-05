import React, { useState } from "react";
import { mutate } from "swr";
import { content } from "../../constants/endpoints";

import styled from "styled-components";
import axios from "axios";

type Props = {
  children?: string;
  edit: boolean;
  id?: number;
  field: string;
  data: any;
};

const Content = ({ children, edit, data, id, field }: Props) => {
  const [value, setValue] = useState(children);
  const save = () => {
    console.log("vevefvefv", { data });
    return axios.put(
      `${content}/${id}`,
      { ...data, [field]: value }
      //   {
      //     headers: { "Content-Type": "multipart/form-data" }
      //   }
    );
  };
  if (edit) {
    return (
      <>
        <input onChange={e => setValue(e.target.value)} value={value}></input>
        <button onClick={save}>Save</button>
      </>
    );
  }

  return <>{children}</> || null;
};

export default Content;
