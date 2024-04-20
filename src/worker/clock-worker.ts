const workerFunction = function () {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const tick = async () => {
    await sleep(1000 - new Date().getMilliseconds());
    postMessage(new Date());
    tick();
  };

  self.onmessage = async () => tick();
};

const createWorkerScript = () => {
  const codeToString = workerFunction.toString();

  const mainCode = codeToString.substring(
    codeToString.indexOf("{") + 1,
    codeToString.lastIndexOf("}")
  );

  const blob = new Blob([mainCode], { type: "application/javascript" });

  return URL.createObjectURL(blob);
};
const worker_script = createWorkerScript();

export default worker_script;
