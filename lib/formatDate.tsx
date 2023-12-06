export const formatDate = (datetime) => {
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const date = new Date(datetime);
  return longEnUSFormatter.format(date);
};
