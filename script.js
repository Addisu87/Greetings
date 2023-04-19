function greeting() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const greetingMsg = `Hello, ${firstName} ${lastName}! Today is ${formatDate(
    new Date()
  )}.`;
  document.write(greetingMsg);
  const timeOfDayMsg = getTimeOfDayMsg(new Date());
  document.write(`<p>${timeOfDayMsg}</p>`);
}

function formatDate(date) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function getTimeOfDayMsg(date) {
  const hours = date.getHours();
  if (hours >= 6 && hours <= 11) {
    return "Good morning!";
  } else if (hours >= 12 && hours <= 17) {
    return "Good afternoon!";
  } else if (hours >= 18 && hours <= 21) {
    return "Good evening!";
  } else {
    return "Good night!";
  }
}
