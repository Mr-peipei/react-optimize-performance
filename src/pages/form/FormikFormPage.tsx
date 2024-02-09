import { Button, Grid, Stack, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import LoadingScreen from "../../components/loading-screen";
import { sleep } from "../../utils/sleep";

type Props = object;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

export const FormikFormPage: React.FC<Props> = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["legacy"],
    queryFn: async () => await sleep(1000).then(() => "legacy"),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

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
