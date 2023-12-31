import NotificationAlert from "@components/notification";
import { LOCAL_HOST } from "@constants";
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
import { ContactService } from "@utils/contact/service";
import { GetServerSideProps } from "next";
import { FormEvent, useEffect, useRef, useState } from "react";

type FormGroupTarget = {
  name: { value: string };
  email: { value: string };
  message: { value: string };
};
type FormTarget = EventTarget & FormGroupTarget;

const Contact = (props: ContactProps) => {
  const { host } = props;
  const contactFormRef = useRef<HTMLFormElement>(null);

  const [isMessageHasSent, setIsMessageHasSent] = useState<boolean | null>(
    null
  );
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : counter;
    if (counter === 0) {
      setIsMessageHasSent(null);
    }
    return () => clearInterval(timer);
  }, [counter, isMessageHasSent]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as FormTarget;

    const { name, email, message } = target;

    const contactResponse = await ContactService.SendMail(host, {
      name: name.value,
      email: email.value,
      message: message.value,
    });

    contactFormRef.current?.reset();
    setCounter(3);
    setIsMessageHasSent(contactResponse.status === 200);
  };

  return (
    <>
      {isMessageHasSent === null ? (
        <></>
      ) : (
        <NotificationAlert show={isMessageHasSent} />
      )}
      <Box
        id="contact"
        component={"form"}
        ref={contactFormRef}
        onSubmit={(event) => handleSubmit(event)}
      >
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
                disabled={counter > 0}
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

type ContactProps = { host: string };

export const getServerSideProps: GetServerSideProps<ContactProps> = async (
  context
) => {
  const host =
    context.req.headers.host === undefined ||
    context.req.headers.host.includes("localhost")
      ? LOCAL_HOST
      : `https://${context.req.headers.host}`;

  return { props: { host: host } };
};

export default Contact;
