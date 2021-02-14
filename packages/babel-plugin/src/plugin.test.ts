import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  plugin,
  pluginName: '@perelandra-ui',
  filename: __filename,
  fixtures: path.join(__dirname, '__fixtures__'),
  // tests: [
  //   {
  //     code: `
  //       function App() {
  //         const someTemplateVar = '1rem'
  //         return (
  //           <div
  //             sx={{
  //               backgroundColor: '--blue-100',
  //               color: 'var(--red-500)',
  //               someFunc() {},
  //               px: '--space-5',
  //               m: '--space-5',
  //               p: 'calc(--space-5 + 5px + var( --space-10 ))',
  //               '& > svg': {
  //                 color: '--indigo-100',
  //               },
  //               pt: '--space-2',
  //               sm: {
  //                 bg: '--blue-100',
  //               },
  //             }}
  //             style={{ padding: '--space-5' }}
  //           >
  //             {' '}
  //             test{' '}
  //           </div>
  //         )
  //       }`,
  //     output: `
  //       function App() {
  //         const someTemplateVar = '1rem'
  //         return (
  //           <div
  //             sx={{
  //               backgroundColor: '--blue-100',
  //               color: 'var(--red-500)',
  //               someFunc() {},
  //               px: '--space-5',
  //               m: '--space-5',
  //               p: 'calc(--space-5 + 5px + var( --space-10 ))',
  //               '& > svg': {
  //                 color: '--indigo-100',
  //               },
  //               pt: '--space-2',
  //               sm: {
  //                 bg: '--blue-100',
  //               },
  //             }}
  //             style={{ padding: '--space-5' }}
  //           >
  //             {' '}
  //             test{' '}
  //           </div>
  //         )
  //       }
  //       `,
  //   },
  // ],
})
