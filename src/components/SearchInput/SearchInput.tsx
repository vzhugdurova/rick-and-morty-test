import { OutlinedInput } from "@mui/material";
import {OperationVariables, ApolloQueryResult} from '@apollo/client'
import { FC, useEffect, useState } from "react";

interface ISearchInput {
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
}

const SearchInput: FC<ISearchInput>= ({ refetch }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if(value.length < 3) return;

    const timerId = setTimeout(() => {
      refetch({name: value})
    }, 300)

    return () => clearTimeout(timerId)
  }, [value, refetch]);

  return (
    <OutlinedInput
      style={{ borderRadius: 0, width: "100%" }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
