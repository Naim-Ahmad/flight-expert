import { Fragment } from "react"

const sessionData = [
  {
    label: 'min',
    value: 24
  },
  {
    label: 'sec',
    value: 33
  }
]

export default function CountDownSession() {

  return (
    <div className="card">
      <div className="card-body">
        <header className="text-lg text-black text-center mb-4">Session Timeout in</header>
        <div className="grid grid-flow-col mx-auto gap-3 text-center auto-cols-max">
          {
            sessionData.map(session => (
              <Fragment key={session.label}>
                <div className="flex flex-col ">
                  <span className="countdown font-mono text-3xl bg-error rounded-lg p-2  text-white">
                    <span style={{ "--value": session.value }}></span>
                  </span>
                  {session.label}
                </div>
                {session.label === 'min' && <div className="text-center text-4xl text-error">:</div>}
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}