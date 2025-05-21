export function generateRandomId() {
  const timestamp = Date.now().toString();
  const randomString = Math.random().toString(36).substring(2);
  const randomId = timestamp + '-' + randomString;
  return randomId;
}
