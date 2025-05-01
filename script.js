const messages = [
  "Eleganz bleibt im Herzen, nicht nur im Blick.",
  "Selbstvertrauen ist der Schlüssel zu allem.",
  "Ich gehe mutig meinen eigenen Weg.",
  "Es ist stark, auch Schwäche zu zeigen.",
  "Mein Tag beginnt mit Selbstliebe und endet damit.",
  "Die wahre Kostbarkeit liegt in mir.",
  "Ich übe Geduld mit mir selbst.",
  "Ich bin vollkommen, erfüllt von Liebe.",
  "Ich bin der wichtigste Mensch in meinem Leben.",
  "Ich bin ein einzigartiges Wunder in dieser Welt.",
  "Ich bin der Ozean in einem Tropfen.",
  "Mein Leben entsteht nach meinen eigenen Wünschen.",
  "Alles, was mich nicht erfüllt, darf losgelassen werden.",
  "Ich verdiene nur das Beste.",
  "Wahre Liebe bedeutet, nicht zu vergleichen.",
  "Mein Körper ist der Tempel meiner Seele.",
  "Ich bin beschützt und habe alles, was ich brauche.",
  "Ich lasse meine Einzigartigkeit erstrahlen.",
  "Ich bin zuhause in meinem eigenen Herzen.",
  "Mein Leben ist ein unendliches Wunder.",
  "Ich bin ein Geschenk für diese Welt.",
  "Macken und Fehler machen mich menschlich.",
  "Meine Einzigartigkeit ist meine größte Stärke.",
  "Ich bin offen für finanziellen Wohlstand.",
  "Was ich von mir denke, bestimmt mein Leben.",
  "Ich habe die Kraft, alles zu verändern.",
];

function getRandomColor() {
  const colors = [
    "#FF6347",
    "#FFD700",
    "#32CD32",
    "#8A2BE2",
    "#FF4500",
    "#1E90FF",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

document.querySelectorAll(".door").forEach((door, index) => {
  door.addEventListener("click", () => {
    const messageFeedback = document.getElementById("messageFeedback");
    if (!door.classList.contains("clicked")) {
      const messageIndex = index % messages.length;
      door.textContent = messages[messageIndex];
      door.classList.add("clicked");
      door.style.backgroundColor = getRandomColor();
      messageFeedback.textContent = `Du hast die Tür ${index + 1} geöffnet!`;
    } else {
      door.textContent = index + 1;
      door.classList.remove("clicked");
      door.style.backgroundColor = "";
      messageFeedback.textContent = "";
    }
  });
});
