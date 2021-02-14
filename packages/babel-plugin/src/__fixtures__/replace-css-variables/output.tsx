'use strict'
function App() {
  return (
    <div
      sx={{
        backgroundColor: 'var(--blue-100)',
        color: 'var(--red-500)',
        p: 'var(--space-5)',
        '& > svg': {
          color: 'var(--indigo-100)',
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
