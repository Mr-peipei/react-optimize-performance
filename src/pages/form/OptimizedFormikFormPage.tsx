import { Button, Grid, Stack, TextField } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import { sleep } from "../../utils/sleep";

type Props = object;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const OptimizedFormikFormPage: React.FC<Props> = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { data } = useSuspenseQuery({
    queryKey: ["new"],
    queryFn: async () => await sleep(1000).then(() => "new"),
  });

  const initializedArray: number[] = Array.from({ length: 50 }, () => 0);

  return (
    <Stack>
      <Grid container spacing={2}>
        {initializedArray.map((_, index) => {
          return (
            <Grid item xs={1} sm={1}>
              <TextField
                key={index}
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </Grid>
          );
        })}
      </Grid>
      {data}
      <Button
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default OptimizedFormikFormPage;
