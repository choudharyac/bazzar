import { useSelector } from "react-redux";

const AlertPopup = () => {
  const { status, title, message } = useSelector(
    (state) => state.notification.notification
  );
  return (
    <div id={title} className={`alert alert-${status} text-center`}>
      {message}
    </div>
  );
};

export default AlertPopup;
