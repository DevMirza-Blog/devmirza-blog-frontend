export default function ApiExample() {
  return (
    <>
      <p>
        <em>You must be logged in to see responses.</em>
      </p>
      <h1>Session</h1>
      <iframe src="/api/session" />
      <h1>JSON Web Token</h1>
      <iframe src="/api/jwt" />
      <h1>Protected Route</h1>
      <iframe src="/api/protected_route" />
    </>
  )
}
