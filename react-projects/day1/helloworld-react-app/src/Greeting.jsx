export default function Greeting({ name }) {
  const time = new Date();
  const hours = time.getHours();
  let message;
  if (hours < 12) {
    message = "Good Morning";
  } else if (hours < 18) {
    message = "Good afternoon";
  } else {
    message = "Good Evening";
  }

  return (
    <div>
      <h2>
        {message}! {name}
      </h2>
    </div>
  );
}
