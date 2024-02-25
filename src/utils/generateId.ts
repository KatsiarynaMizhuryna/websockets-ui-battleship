export const generateId = () => {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 1000);
  return Number(timestamp - randomPart);
};
