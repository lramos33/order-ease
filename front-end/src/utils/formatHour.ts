export const formatHour = (timestamp: string) => {
  const date = new Date(timestamp);

  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  const amPm: string = hours < 12 ? "am" : "pm";

  const formattedHours: number = hours % 12 || 12;
  const formattedMinutes: string = minutes < 10 ? "0" + minutes : minutes.toString();

  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};
