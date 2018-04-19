import addons from '@storybook/addons';
import { normalize } from 'upath'

const findTestResults = (testFiles, jestTestResults, jestTestFilesOptions) =>
  testFiles.map(name => {
    const fileName = `${name}${jestTestFilesOptions.filesExt}`;
    if (jestTestResults && jestTestResults.testResults) {
      return {
        fileName,
        name,
        result: jestTestResults.testResults.find(t => normalize(t.name).includes(fileName)),
      };
    }
    return { fileName, name };
  });

const withTests = (results, options) => (...testFiles) => {

  const emitAddTests = ({ kind, story }) => {
    addons.getChannel().emit('storybook/tests/add_tests', {
      kind,
      storyName: story,
      tests: findTestResults(testFiles, results, options),
    });
  };

  return (storyFn, { kind, story }) => {
    emitAddTests({ kind, story });
    return storyFn();
  };
}

export default withTests;

