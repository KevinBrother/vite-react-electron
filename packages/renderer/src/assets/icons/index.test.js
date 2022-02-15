const getFileModules = require('./index.ts');

test('modules', () => {
  expect(
    Object.keys(getFileModules()).forEach((key) => {
      console.log(key);
    })
  );
});
