function getDate() {
  return new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

async function getId() {
  const resp = await fetch("https://random-data-api.com/api/v2/users");
  const jsonData = await resp.json();

  return jsonData.id;
}

export default async function Page() {
  const date = getDate();
  const id = getId();
  return (
    <div>
      <div>{date}</div>
      <div>{id}</div>
    </div>
  );
}
