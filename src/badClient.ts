const fetchFile = async () => {
  const result = await fetch("http://localhost:666/file");
  const text = await result.text();
  console.log(text.length)
  return text.includes("ꙮ");
};

fetchFile();
