import { Alert } from "@mui/material";

interface INotificationAlertProps {
  message: string;
}

const NotificationAlert = (props: INotificationAlertProps) => {
  const { message } = props;

  return (
    <Alert severity="success" sx={{ mb: 2 }}>
      {message}
    </Alert>
  );
};

export default NotificationAlert;
