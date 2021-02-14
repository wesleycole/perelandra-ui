function App() {
  return (
    <div
      sx={{
        backgroundColor: '--blue-100',
        color: 'var(--red-500)',
        p: '--space-5',
        '& > svg': {
          color: '--indigo-100',
        },
      }}
      style={{ padding: '--space-5' }}
    >
      {' '}
      test{' '}
    </div>
  )
}
