export function calculateTimePassed(timestamp: string) {
  const currentTime = new Date();
  const inputTime = new Date(timestamp);

  const timeDifference = currentTime.getTime() - inputTime.getTime();
  const secondsPassed = Math.floor(timeDifference / 1000);

  const seconds = secondsPassed % 60;
  const minutes = Math.floor((secondsPassed / 60) % 60);
  const hours = Math.floor((secondsPassed / (60 * 60)) % 24);
  const days = Math.floor(secondsPassed / (60 * 60 * 24));

  if (days >= 1) {
    return { days: days };
  } else {
    return { hours: hours };
  }
}
