'use strict'
function App() {
  const someTemplateVar = '1rem'
  return (
    <div
      sx={{
        backgroundColor: 'var(--blue-100)',
        color: 'var(--red-500)',

        someFunc() {},

        paddingLeft: 'var(--space-5)',
        paddingRight: 'var(--space-5)',
        margin: `var(--space-5) ${someTemplateVar} var(--space-5) ${someTemplateVar}`,
        padding: 'calc(var(--space-5) + 5px + var( --space-10 ))',
        '& > svg': {
          color: 'var(--indigo-100)',
        },
        paddingTop: 'var(--space-2)',
        '@media (min-width: 640px)': {
          background: 'var(--blue-100)',
        },
      }}
      style={{
        padding: 'var(--space-5)',
      }}
    >
      {' '}
      test{' '}
    </div>
  )
}
