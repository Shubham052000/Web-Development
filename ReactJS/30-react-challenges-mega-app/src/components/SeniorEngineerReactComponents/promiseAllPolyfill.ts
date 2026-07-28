declare global {
  interface PromiseConstructor {
    myAll<T>(promises: Promise<T>[]): Promise<T[]>;
  }
}

Promise.myAll = function <T>(promises: Promise<T>[]): Promise<T[]> {
  const results: T[] = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    // Handle empty array
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          completed++;

          // Check after each successful resolution
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};
