import fs from "node:fs";
import path from "node:path";

const FILE_PATH = path.join(__dirname, "large.csv");

if (fs.existsSync(FILE_PATH)) {
  fs.unlinkSync(FILE_PATH);
}

fs.appendFileSync(FILE_PATH, "date, value, many-eyed seraphim?\n");

for (let i = 0; i < 10_000; i++) {
  const rows = new Array(10_000)
    .fill(null)
    .map(
      (_, c) =>
        `${i + 1 * c}, ${Math.random()}, ${Math.random() < 0.000001 ? "ꙮ" : "ʘ"}`,
    );

  fs.appendFileSync(FILE_PATH, `${rows.join("\n")}\n`);
}
