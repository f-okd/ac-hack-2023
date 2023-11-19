import { useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("NO MESSAGE FROM API YET");

  const handleRequest = async () => {
    const res = await fetch("/api/sendChatMessage", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        messages: [],
        content: value,
      }),
    });

    const data = await res.json();
    setResponse(JSON.stringify(data));
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      ></input>
      <button onClick={handleRequest}>SEND MESSAGE</button>
      <div>{response}</div>
    </div>
  );
};

export default Test;
