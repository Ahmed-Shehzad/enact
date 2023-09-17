import { Alert } from "@mui/material";

interface INotificationAlertProps {
  show: boolean;
}

const NotificationAlert = (props: INotificationAlertProps) => {
  const { show } = props;
  const message = show
    ? "Your Message has been sent"
    : "There was an error occurred while sending your message";

  return (
    <Alert severity={show ? "success" : "error"} sx={{ mb: 2 }}>
      {message}
    </Alert>
  );
};

export default NotificationAlert;
