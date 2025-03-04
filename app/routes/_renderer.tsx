// app/routes/_renderer.tsx
import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {import.meta.env.PROD ? (
          <script type='module' src='/static/client.js' />
        ) : (
          <script type='module' src='/app/client.ts' />
        )}
        {title ? <title>{title}</title> : ''}
      </head>
      <body>{children}</body>
    </html>
  )
})
