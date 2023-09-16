import NotificationAlert from "@components/notification";
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
import { FormEvent, useEffect, useState } from "react";
import { ContactService } from "./service";

type FormGroupTarget = {
  name: { value: string };
  email: { value: string };
  message: { value: string };
};
type FormTarget = EventTarget & FormGroupTarget;

const Contact = () => {
  const [isMessageHasSent, setIsMessageHasSent] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : counter;
    if (counter === 0) {
      setIsMessageHasSent(false);
    }
    return () => clearInterval(timer);
  }, [counter, isMessageHasSent]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as FormTarget;

    const { name, email, message } = target;

    const contactResponse = await ContactService.SendMail({
      name: name.value,
      email: email.value,
      message: message.value,
    });

    setIsMessageHasSent(contactResponse.status === 200);
    setCounter(3);
  };

  return (
    <>
      {isMessageHasSent ? (
        <NotificationAlert message="Your Message has been sent" />
      ) : (
        <> </>
      )}
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
