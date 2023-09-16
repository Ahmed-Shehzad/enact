import { TextareaAutosize } from "@mui/base";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent } from "react";

type FormGroupTarget = {
  name: { value: string };
  email: { value: string };
  message: { value: string };
};
type FormTarget = EventTarget & FormGroupTarget;

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as FormTarget;
  };

  return (
    <>
      <Box component={"form"} onSubmit={(event) => handleSubmit(event)}>
        <FormGroup>
          <FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          </FormControl>

          <FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </FormControl>

          <FormControl>
            <Typography
              textAlign={"justify"}
              fontSize={20}
              lineHeight={2.5}
              component={"p"}
            >
              Message:
            </Typography>
            <TextareaAutosize
              minRows={10}
              required
              name="message"
              id="message"
              autoComplete="current-message"
            />
          </FormControl>

          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Button
                type="submit"
                style={{ width: "250px" }}
                variant="contained"
                size="large"
                sx={{ marginTop: 3, marginBottom: 2, marginX: "auto" }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </FormGroup>
      </Box>
    </>
  );
};

export default Contact;
