export default function Moodcard({ mood }) {
  let emoji;

  if (mood == "angry") {
    emoji = "😡";
  } else if (mood == "happy") {
    emoji = "😍";
  } else if (mood == "sad") {
    emoji = "😢";
  } else {
    emoji = "🤫";
  }
  return (
    <div>
      <h3>
        {emoji} You are feeling {mood}
      </h3>
    </div>
  );
}
