const isUtf8Stream = async (rawStream: ReadableStream) => {
  const decoder = new TextDecoderStream("utf-8");
  const stream = rawStream.pipeThrough(decoder);
  const reader = stream.getReader();
  do {
    const { value } = await reader.read();

    if (value === undefined) {
      return false;
    }

    if (value?.includes("ꙮ")) {
      return true;
    }
  } while (true);
};

const streamData = async () => {
  const result = await fetch("http://localhost:666/file");

  if (!result.body) {
    throw new Error();
  }

  const blah = await isUtf8Stream(result.body);

  console.log(blah);
};

streamData();
