import React from 'react'
import './error-viewer.css'

interface Props {
  errors: string[]
  onClearError: () => void
}

const ERROR_LENGTH = 3

const errorHeaderStyle: React.CSSProperties = {
  color: 'red',
  marginLeft: 4,
  marginRight: 4,
  marginTop: 22,
}

const errorContentStyle: React.CSSProperties = {
  marginTop: 22,
  color: '#ffffff',
  flexGrow: 1,
}

export const ErrorViewer = ({ errors, onClearError }: Props) => {
  const firstFiveErrors = errors.slice(0, ERROR_LENGTH)

  return (
    <div className="overlay-error">
      <p style={errorHeaderStyle}>Errors: (#{errors.length})</p>
      {errors.length <= ERROR_LENGTH ? (
        <p style={errorContentStyle}>{firstFiveErrors.join(', ')}</p>
      ) : (
        <p style={errorContentStyle}>
          {firstFiveErrors.join(', ')}
          {` & ${errors.length - ERROR_LENGTH} more`}
        </p>
      )}
      <button className="clear-errors-close" onClick={onClearError} />
    </div>
  )
}
