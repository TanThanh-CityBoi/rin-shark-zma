export function randomColor() {
  // Generate random values for red, green, and blue components
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB values to hexadecimal format
  const hexR = r.toString(16).padStart(2, "0"); // Convert to hexadecimal and ensure 2 digits
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Concatenate hexadecimal values to form a color code
  const color = `#${hexR}${hexG}${hexB}`;

  return color;
}
